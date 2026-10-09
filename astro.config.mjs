// @ts-check
import { defineConfig } from 'astro/config';
import { SITE } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  // The live address, read from src/config.ts. Astro uses it to build full URLs
  // (canonical links, social previews, and later the sitemap and RSS feed).
  site: SITE.url,

  // Always ship scripts as separate files, never inlined into the HTML, so the
  // Content Security Policy (build plan Phase 9) can forbid inline scripts.
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
