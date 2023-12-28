import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://caden32.com',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })],
  markdown: {
    // syntaxHighlight: 'prism',
    extendDefaultPlugins: true
  }
});