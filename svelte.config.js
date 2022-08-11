import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
//import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	ssr: false
};

export default config;
