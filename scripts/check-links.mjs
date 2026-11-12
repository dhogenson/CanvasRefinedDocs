import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] || 'dist');
const failures = [];
const cache = new Map();

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith('.html') ? [file] : [];
  }));
  return nested.flat();
}

function decodeEntities(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity.toLowerCase()]) return named[entity.toLowerCase()];
    return String.fromCodePoint(entity[2].toLowerCase() === 'x'
      ? parseInt(entity.slice(3, -1), 16) : parseInt(entity.slice(2, -1), 10));
  });
}

async function contents(file) {
  if (!cache.has(file)) cache.set(file, await readFile(file, 'utf8'));
  return cache.get(file);
}

const files = await htmlFiles(root);
if (!files.length) throw new Error(`No HTML found in ${root}. Run npm run build first.`);
let checked = 0;
for (const file of files) {
  const html = await contents(file);
  const relative = path.relative(root, file).split(path.sep).join('/');
  const pagePath = relative === 'index.html' ? '/' : `/${relative.replace(/index\.html$/, '')}`;
  const base = new URL(pagePath, 'https://docs.invalid');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const reference = decodeEntities(match[1]);
    const url = new URL(reference, base);
    if (url.origin !== base.origin) continue;
    let target = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (target !== root && !target.startsWith(root + path.sep)) {
      failures.push(`${relative}: path outside build directory: ${reference}`);
      continue;
    }
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
      if (url.hash && target.endsWith('.html')) {
        const id = decodeURIComponent(url.hash.slice(1));
        const ids = new Set([...((await contents(target)).matchAll(/\bid="([^"]*)"/g))]
          .map((m) => decodeEntities(m[1])));
        if (!ids.has(id)) throw new Error(`missing anchor #${id}`);
      }
      checked++;
    } catch (error) {
      failures.push(`${relative}: ${reference} (${error.code || error.message})`);
    }
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${checked} local links and assets across ${files.length} HTML pages; no broken targets or anchors.`);
}
