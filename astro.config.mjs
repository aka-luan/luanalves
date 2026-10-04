import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { getSitemapLastmod } from './scripts/seo-metadata.mjs';

export default defineConfig({
  site: 'https://luanalves.com.br',
  trailingSlash: 'always',
  build: {
    // Avoid a stylesheet round trip before the text hero can render on mobile.
    inlineStylesheets: 'always',
  },
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
