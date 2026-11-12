# Canvas Refined documentation

User guides for [Canvas Refined](https://github.com/GuySandler/CanvasRefined), a browser extension that customizes Canvas LMS. Built with [Astro](https://docs.astro.build) and [Starlight](https://starlight.astro.build).

This repository contains the documentation website, not the extension itself. Report extension bugs in the [extension repository](https://github.com/GuySandler/CanvasRefined/issues).

## Develop locally

Use a Node.js version supported by the installed Astro release and npm.

```sh
npm ci
npm run dev -- --background
```

Astro prints the local server URL. Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Validate and build

```sh
npm run check:docs
```

This tests the link checker, builds the site (including Starlight's search index), and checks generated local links, images, and page anchors. It does not check external URLs or test the extension against a live Canvas account.

Other useful commands:

| Command | Purpose |
| --- | --- |
| `npm run build` | Generate the static site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro -- --help` | Show Astro CLI commands. |

Before deployment, set Astro's `site` option in `astro.config.mjs` to the actual public website URL so the sitemap integration can generate a sitemap. No production domain is assumed here.

## Project structure

```text
astro.config.mjs             Site title, branding, and sidebar
src/content/docs/            Markdown and MDX pages
  getting-started/           Overview, installation, and quick start
  features/                  Task-focused feature guides
  help/                      Troubleshooting and support
  customization.md           Appearance, widgets, exports, and resets
  privacy.md                 Permissions, storage, and network behavior
src/content.config.ts        Starlight content collection schema
public/guides/               Original, labeled SVG guide diagrams
scripts/check-links.mjs      Local build-output link and anchor checker
```

Add user-facing pages under `src/content/docs/` and include them in the explicit sidebar in `astro.config.mjs` when appropriate. Give every page a descriptive `title` and `description` in its frontmatter. Use root-relative internal links with trailing slashes, for example `/features/dark-mode/`.

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is MIT
