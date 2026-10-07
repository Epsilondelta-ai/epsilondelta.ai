import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', '/ko', '/en', '/ko/privacy', '/en/privacy', '/ko/terms', '/en/terms']
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
