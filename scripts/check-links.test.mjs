import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const checker = fileURLToPath(new URL('./check-links.mjs', import.meta.url));

async function fixture(t, files) {
  const root = await mkdtemp(path.join(tmpdir(), 'docs-links-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [name, contents] of Object.entries(files)) {
    const target = path.join(root, name);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, contents);
  }
  return root;
}

function run(root) {
  return spawnSync(process.execPath, [checker, root], { encoding: 'utf8' });
}

test('accepts routes, relative assets, encoded anchors, and external links', async (t) => {
  const root = await fixture(t, {
    'index.html': '<a href="/guide/?x=1&amp;y=2#hello%20world">Guide</a><a href="https://example.org/missing">External</a>',
    'guide/index.html': '<h2 id="hello world">Hello</h2><img src="../image.svg"><a href="#hello%20world">Here</a>',
    'image.svg': '<svg xmlns="http://www.w3.org/2000/svg"/>',
  });
  const result = run(root);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /no broken targets or anchors/);
});

test('rejects missing pages, assets, and anchors', async (t) => {
  const root = await fixture(t, {
    'index.html': '<a href="/missing/">Missing</a><img src="/missing.svg"><a href="#absent">Missing anchor</a>',
  });
  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /\/missing\//);
  assert.match(result.stderr, /missing\.svg/);
  assert.match(result.stderr, /missing anchor #absent/);
});

test('rejects an empty build directory', async (t) => {
  const root = await fixture(t, {});
  const result = run(root);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /No HTML found/);
});
