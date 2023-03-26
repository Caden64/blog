import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap(), svelte(), preact()],
  markdown: {
    // syntaxHighlight: 'prism',
    extendDefaultPlugins: true
  }
});