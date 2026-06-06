import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { getSitemapLastmod } from './scripts/seo-metadata.mjs';

export default defineConfig({
  site: 'https://luanalves.com.br',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: getSitemapLastmod(item.url),
        };
      },
    }),
  ],
  server: {
    host: true,
  },
});
