# Performance Findings — luanalves.com.br

**Score: 71/100**

## What Works

- All fonts self-hosted (woff2, `font-display: swap`) — no external CDN blocking
- LCP image (`hero-img.webp`) uses `fetchpriority="high"` and `decoding="async"`
- All non-critical images use `loading="lazy"` and `decoding="async"`
- All images in `.webp` format
- Explicit `width`/`height` on hero image (1086×1536) — prevents layout shift
- Astro static site generation — minimal JS payload vs SPA frameworks
- Vercel CDN delivery

## Findings

### ~~HIGH — No `<link rel="preload">` for LCP image~~ ✅ Fixed
Added to `BaseLayout.astro` `<head>`, scoped to `namespace === 'home'`. Build verified 2026-06-27.

### MEDIUM — Barba.js page transitions add JS bundle weight
`src/scripts/page-transitions.ts` loads Barba.js for animated transitions. While Barba is lightweight (~7kb gzipped), transitions that delay paint can hurt LCP on navigation (perceived performance). Also noted in `AGENTS.md`: Barba head syncing can silently drop SEO tags.
- **Monitor**: Verify Barba doesn't delay LCP on page transitions. Check that all `<head>` elements are synced via Barba hooks on every navigation.

### MEDIUM — Material Symbols single woff2 file (full icon set)
The self-hosted `material-symbols-outlined-400-normal.woff2` likely contains the full icon glyph set (~500kb+). The site uses ~15–20 icons.
- **Fix** (optional, high effort): Subset the icon font to only used glyphs using `pyftsubset` or the Google Fonts variable font API with explicit codepoints. Can save 400–500kb in font payload.

### LOW — CSS backdrop-filter usage
Multiple elements use `backdrop-filter: blur()` (nav, hero chip, cards). On low-end Android devices, backdrop-filter can cause janky compositing. Already respects `prefers-reduced-motion` — acceptable.

### LOW — No explicit `sizes` attribute on responsive images
The hero image has `width="1086"` and `height="1536"` but no `srcset`/`sizes`. Browsers download the full-resolution image on all viewports including mobile.
- **Fix**: Add `srcset` with 480w, 768w, 1086w variants and a `sizes` attribute for the hero image.

### INFO — Vercel Analytics + Speed Insights scripts
Both are loaded in `BaseLayout.astro`. They add ~2 small network requests. Acceptable overhead for the observability value; no action needed.
