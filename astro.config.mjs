import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap(), image(), vue()]
});