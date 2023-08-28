import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    extendDefaultPlugins: true
  }
});