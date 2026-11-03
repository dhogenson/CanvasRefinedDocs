// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
    starlight({
      logo: {
        src: './public/canvas-refined.png',
        replacesTitle: false,
      },
			title: 'Canvas Refined',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/GuySandler/CanvasRefined' }, { icon: "discord", label: "Discord", href: 'https://discord.gg/GjFh4JA3wh'}],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Install', slug: 'getting-started/install' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
