import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Astro configuration for Aegean Dispatch personal blog
export default defineConfig({
  site: 'https://erdagege.github.io',
  base: '/aegean-dispatch/',
  output: 'static',
  integrations: [sitemap()],
});
