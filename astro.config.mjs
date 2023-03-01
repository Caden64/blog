import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap(), preact()],
  markdown: {
    // syntaxHighlight: 'prism',
    extendDefaultPlugins: true
  }
});