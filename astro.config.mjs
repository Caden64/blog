import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [tailwind(), sitemap(), preact(), svelte(), react()],
  markdown: {
    // syntaxHighlight: 'prism',
    extendDefaultPlugins: true
  }
});