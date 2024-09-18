import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			// '@': path.resolve('./src'),
			'@styles': path.resolve('./src/styles'),
			'@components': path.resolve('./src/components'),
			'@effects': path.resolve('./src/effects')
		}
	},
	preprocess: vitePreprocess()
};

export default config;
