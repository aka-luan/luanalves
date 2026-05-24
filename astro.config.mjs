import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luanalves.com.br',
  integrations: [sitemap()],
  server: {
    host: true,
  },
});
