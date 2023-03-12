import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    // syntaxHighlight: 'prism',
    extendDefaultPlugins: true
  }
});