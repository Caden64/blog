import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap(), solidJs()],
  markdown: {
    extendDefaultPlugins: true
  }
});