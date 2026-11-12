// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://dhogenson.github.io',
  base: 'CanvasRefinedDocs',

  integrations: [
    starlight({
      favicon: './public/canvas-refined.png',
      title: 'Canvas Refined',
      logo: {
        src: './public/canvas-refined.png',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GuySandler/CanvasRefined' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/GjFh4JA3wh' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Install', slug: 'getting-started/install' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Features',
          items: [
            { slug: 'features/dark-mode' },
            { slug: 'features/dashboard-cards' },
            { slug: 'features/better-todo-list' },
            { slug: 'features/grades-and-gpa' },
            { slug: 'features/global-canvas-search' },
            { slug: 'features/dashboard-notes' },
            { slug: 'features/quiz-safe-mode' },
          ],
        },
        { label: 'Customization', slug: 'customization' },
        {
          label: 'Help and Privacy',
          items: [
            { slug: 'help/troubleshooting' },
            { slug: 'help/support' },
            { slug: 'privacy' },
          ],
        },
      ],
    }),
  ],
});
