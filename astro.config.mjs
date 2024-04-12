import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/constants';
import remarkRichtypo from './src/util/remark/remarkRichtypo';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [react(), sitemap()],
	markdown: {
		remarkPlugins: [remarkRichtypo],
	},
});
