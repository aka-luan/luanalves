# Action Plan — luanalves.com.br SEO Audit

**Audit date:** 2026-06-27 (updated same day)
**Overall SEO Health Score: 72/100** *(revised: indexation ✅, GBP ✅)*

---

## Phase 1: Critical Fixes (Week 1)

### ~~1. Submit sitemap to GSC~~ ✅ Done
20/21 pages indexed. HTTP sitemap-index removed.

### ~~2. Create Google Business Profile~~ ✅ Done
GBP live in Belém. Category updated. Posts added.

### ~~3. Fix `contactOption: 'TollFree'` in schema~~ ✅ Done
Removed from `src/layouts/BaseLayout.astro`. Build verified.

### ~~4. Add LCP image preload hint~~ ✅ Done
`<link rel='preload' as='image' href='/assets/hero-img.webp'>` added to `<head>` in `BaseLayout.astro`, scoped to `namespace === 'home'`. Build verified.

### ~~5. Add LocalBusiness schema to Belém page~~ ✅ Done
`ProfessionalService` schema with `PostalAddress` (Belém, PA, BR), telephone, and `areaServed` added to `getServicePageSchema()` in `src/data/servicePages.ts`. Emitted only for `slug === 'criacao-de-sites-belem'`. Build verified.

---

## Phase 2: High-Impact Improvements (Weeks 2–3)

### 6. Add /sitemap.xml redirect
**File**: `vercel.json` (create if missing):
```json
{
  "redirects": [
    {
      "source": "/sitemap.xml",
      "destination": "/sitemap-index.xml",
      "permanent": true
    }
  ]
}
```

### 7. Fix sitemap lastmod dates
All 21 URLs share the same `lastmod`. Use real modification timestamps per page. Check Astro's `@astrojs/sitemap` config options or the post-build script in `scripts/` to emit per-page dates.

### 8. Add `dateModified` to insight articles
**File**: `src/data/insights.ts` — add `dateModified: string` to `InsightBasePost` interface and update each article.
**File**: `src/pages/insights/[slug].astro` line ~98 — pass separately in `BlogPosting`:
```ts
datePublished: post.isoDate,
dateModified: post.dateModified ?? post.isoDate,
```

### 9. Expand llms.txt
Add sections for each service with pricing ranges, process, and tech stack used.

### 10. Create unique hero images for all 6 articles
Generate 1200×800 webp images. Store under `public/assets/insights/`. Update `heroImage` and `heroImageAlt` in each `InsightPublishedPost`.

### 11. Add outbound citations to articles
Each article should link 2–3 relevant external sources (IBGE, Google Search Central, Semrush public data).

### 12. Add ItemList schema to /portfolio/
**File**: `src/pages/portfolio.astro` — add to BaseLayout schema prop:
```ts
const portfolioSchema = {
  '@type': 'ItemList',
  '@id': `${siteUrl}/portfolio/#list`,
  name: 'Portfólio de Sites Profissionais',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: `${siteUrl}/portfolio/${p.id}/`,
  })),
};
```

---

## Phase 3: Content & Authority (Month 2)

### 13. Publish 2–3 new insight articles
Priority keywords (informational intent, high search volume in BR):
- "como escolher hospedagem para site" (~1600/mo)
- "site WordPress vs Webflow vs código" (comparison)
- "o que é SEO técnico e por que importa"
- "quanto cobra um desenvolvedor web freelancer"

### 14. Local directory citations
Submit with consistent NAP to:
- Empresas.com.br
- Guiamais
- Apontador
- Yelp Brasil (if active in your region)

### 15. Change Insights H1
**File**: `src/pages/insights.astro` — update H1 from "Insights" to "Insights sobre Desenvolvimento Web e SEO"

### 16. Add srcset to hero image
**File**: `src/pages/index.astro` — generate responsive variants and add srcset/sizes.

### 17. Add priceRange to ProfessionalService schema
**File**: `src/layouts/BaseLayout.astro` line ~64:
```ts
priceRange: 'R$1.500–R$8.000',
```

### 18. ~~Request Google reviews from past clients~~ → **Do now**
GBP is verified. Get the direct review link from GBP dashboard → "Ask for reviews". Target: 5+ reviews ASAP — zero reviews is currently the biggest remaining local gap.

---

## Phase 4: Monitoring & Iteration (Ongoing)

- Check GSC weekly: impressions, clicks, CTR, indexation errors
- Check GBP monthly: views, calls, direction requests
- Subset Material Symbols font (saves ~400kb) — high effort, low urgency
- Add `speakable` schema to BlogPosting
- Add `ImageObject` to Person and BlogPosting schemas
- Add `llms-full.txt`
- Maintain 2 articles/month cadence

---

## Score Summary

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 76/100 | 22% | 16.7 |
| Content Quality | 74/100 | 23% | 17.0 |
| On-Page SEO | 73/100 | 20% | 14.6 |
| Schema | 76/100 | 10% | 7.6 |
| Performance | 71/100 | 10% | 7.1 |
| AI Search Readiness | 79/100 | 10% | 7.9 |
| Images | 72/100 | 5% | 3.6 |
| **Total** | | | **74.5** |

**Revised Health Score: 75/100** *(indexation ✅ + GBP ✅ + schema fix ✅ + LCP preload ✅ + LocalBusiness schema ✅)*
