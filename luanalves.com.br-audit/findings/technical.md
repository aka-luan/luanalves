# Technical SEO Findings — luanalves.com.br

**Score: 76/100** *(updated: indexation confirmed)*

## What Works

- `robots.txt` correct: `Allow: /` + correct sitemap pointer (`sitemap-index.xml`)
- `sitemap-index.xml` → `sitemap-0.xml` with 21 URLs all accessible
- **20/21 pages indexed** as of Jun 2026 — growth accelerated from May 20 onward ✅
- HTTP sitemap-index removed from GSC ✅
- `lang="pt-BR"` on `<html>` element
- Canonical URLs on all pages via `BaseLayout.astro`
- No `noindex` detected on any page
- All fonts self-hosted under `/public/fonts/` with `font-display: swap` — zero external font CDN requests
- Material Symbols icon font self-hosted (woff2, swap) — not render-blocking
- `fetchpriority="high"` on LCP hero image (`/assets/hero-img.webp`)
- All images use `.webp` format

## Findings

### INFO — Indexation confirmed ✅
20/21 pages indexed. The `site:` query returning zero during the audit was a tool limitation. New HTTPS sitemap-index.xml showing 0 in GSC is expected — Google just processed the index and will follow to sitemap-0.xml shortly.

### HIGH — `/sitemap.xml` returns 404
Some tools and crawlers try `/sitemap.xml` first. The actual sitemap is at `/sitemap-index.xml`. While `robots.txt` correctly points to the sitemap-index, the missing `/sitemap.xml` redirect can cause incomplete discovery in legacy crawlers.
- **Fix**: Add a redirect from `/sitemap.xml` → `/sitemap-index.xml`, or add a second `sitemap.xml` alias.

### MEDIUM — All sitemap `<lastmod>` dates identical (2026-06-05)
Every URL in `sitemap-0.xml` has `lastmod: 2026-06-05T03:00:00.000Z`. Google uses `lastmod` to prioritize re-crawling updated content. When all pages share the same static date, the signal is meaningless.
- **Fix**: Use Astro's `lastmod` integration or a build script to emit real per-page modification timestamps.

### MEDIUM — No `<changefreq>` or `<priority>` in sitemap
These are hints to crawlers about recrawl frequency. Low value alone, but combined with identical lastmod, the sitemap provides minimal crawl scheduling data.

### MEDIUM — No `<link rel="preload">` for LCP image
`hero-img.webp` has `fetchpriority="high"` but no `<link rel="preload" as="image">` in `<head>`. A preload hint lets the browser discover the LCP resource before the HTML body is parsed, improving LCP.
- **Fix**: In `BaseLayout.astro`, add `<link rel="preload" as="image" href="/assets/hero-img.webp" type="image/webp" />` conditionally when `namespace === 'home'`.

### LOW — `contactOption: 'TollFree'` incorrect in Person schema
`BaseLayout.astro:56` sets `contactOption: 'TollFree'` on the ContactPoint. WhatsApp is not a toll-free line. Schema.org valid values: `HearingImpairedSupported`, `TollFree`, `TelephoneOperatorReserved`. For WhatsApp, omit `contactOption` or use `contactType: 'customer support'`.
