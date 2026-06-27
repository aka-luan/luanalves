# Full SEO Audit Report — luanalves.com.br

**Date:** 2026-06-27 (updated same day with GSC + GBP confirmations)
**Auditor:** Claude Code (SEO Audit Skill)
**Business type:** Freelance Web Developer / Professional Services — Brazil (local Belém + national)
**Pages audited:** 21 (full sitemap)
**Overall SEO Health Score: 75/100** *(revised: indexation ✅, GBP ✅, schema fix ✅, LCP preload ✅, LocalBusiness schema ✅)*

---

## Executive Summary

luanalves.com.br is a well-built Astro static site with solid technical fundamentals: self-hosted fonts, webp images, correct robots.txt, rich schema implementation, and good on-page copy. The site demonstrates genuine SEO knowledge in its construction.

**The foundation is solid. The gap is authority, not infrastructure.**

Post-audit confirmations:
- **Indexation ✅** — 20/21 pages indexed, growth accelerating since May. HTTP sitemap removed from GSC.
- **GBP ✅** — "Luan Alves — Desenvolvimento Web" live in Belém, category updated, posts added.

Remaining priorities shift to: content volume, backlink authority, GBP reviews, and a handful of schema/performance code fixes.

---

## Scores by Category

| Category | Score | Weight |
|----------|-------|--------|
| Technical SEO | 76/100 | 22% |
| Content Quality & E-E-A-T | 74/100 | 23% |
| On-Page SEO | 73/100 | 20% |
| Schema / Structured Data | 76/100 | 10% |
| Performance (CWV) | 71/100 | 10% |
| AI Search Readiness (GEO) | 79/100 | 10% |
| Images | 72/100 | 5% |
| **Overall (revised)** | **72/100** | |

---

## Technical SEO (76/100)

### Strengths
- `robots.txt`: correct, `Allow: /`, references `sitemap-index.xml`
- **20/21 pages indexed** ✅ — confirmed in GSC, growth accelerating
- HTTP sitemap-index removed from GSC ✅
- Canonical URLs on all pages via BaseLayout
- No `noindex` detected anywhere
- `lang="pt-BR"` on `<html>`
- All fonts self-hosted (woff2, `font-display: swap`) — zero external font CDN blocking
- Material Symbols icon font self-hosted — not render-blocking
- `fetchpriority="high"` on LCP hero image

### Issues

**High — `/sitemap.xml` returns 404**
Legacy crawlers and tools try `/sitemap.xml` first. The actual path is `/sitemap-index.xml`. Add a redirect or alias.

**Medium — All sitemap `lastmod` dates identical**
Every URL has `lastmod: 2026-06-05T03:00:00.000Z`. This disables Google's ability to use lastmod for crawl prioritization.

**Medium — No LCP image preload hint**
`fetchpriority="high"` on the `<img>` tag is weaker than a `<link rel="preload">` in `<head>`. The preload scanner discovers the resource earlier, improving LCP on homepage.

**Low — `contactOption: 'TollFree'` in schema**
Factually incorrect for a WhatsApp number. Should be removed.

---

## Content Quality & E-E-A-T (74/100)

### Strengths
- Full author bio on all articles (name, role, location Belém PA, bio text, social links)
- Article depth: ~2,500–2,800 words — strong for informational intent
- FAQs on service pages and articles
- Related posts section drives internal linking
- WhatsApp CTAs with article-specific context messages
- Correct pt-BR throughout

### Issues

**High — Only 6 published articles**
Thin for a content-SEO play. Competitors in "criação de sites" maintain 30–100+ articles.

**High — No external citations**
Articles make industry claims without outbound source links. E-E-A-T Trust signal gap.

**Medium — `dateModified = datePublished` on all articles**
No freshness signals to Google.

**Medium — Some articles lack real hero images**
Falls back to generic `og-cover.webp`.

---

## Schema / Structured Data (76/100)

### Strengths
- `@graph` pattern — clean multi-type schema without duplicate `@context`
- `Person`, `ProfessionalService`, `WebSite` base schemas in BaseLayout
- `BreadcrumbList` on all service and article pages
- `Service` schema on all service pages via `getServicePageSchema()`
- `FAQPage` schema on service pages and articles
- `BlogPosting` schema with full metadata on articles
- Proper `@id` anchors throughout

### Issues

**High — `contactOption: 'TollFree'` schema error** (see Technical)

**Medium — No `LocalBusiness` schema on Belém page**
Only `Service` schema present. `LocalBusiness` is required for local rich results.

**Medium — Portfolio listing lacks `ItemList` schema**
7 case studies not represented as structured data.

**Medium — `dateModified = datePublished` in BlogPosting**

**Low — No `ImageObject` schema, no `priceRange` in ProfessionalService**

---

## Performance (71/100)

### Strengths
- Astro static site — minimal JS vs SPA frameworks
- All images webp
- Lazy loading on non-LCP images
- Self-hosted fonts with swap
- Vercel CDN delivery

### Issues

**High — Missing LCP preload hint** (see Technical)

**Medium — No `srcset`/`sizes` on hero image**
Full 1086px image downloaded on all viewports.

**Medium — Material Symbols full font (~400–500kb)**
Only ~20 icons used out of hundreds. Subsetting would save significant payload.

---

## AI Search Readiness / GEO (79/100)

### Strengths
- `llms.txt` exists with accurate professional profile
- `robots.txt` allows all AI crawlers (GPTBot, ClaudeBot, etc.)
- `FAQPage` schema feeds AI Overviews extractions
- Author identity well-established
- Article heading hierarchy with IDs for passage-level citability

### Issues

**High — `llms.txt` lacks service-specific detail**
AI tools need pricing ranges, process steps, tech stack, client outcomes.

**Medium — No `llms-full.txt`, no `speakable` schema, brand disambiguation weak**

---

## Local SEO (65/100)

### Strengths
- Dedicated `/criacao-de-sites-belem/` page
- City/region mentioned throughout
- Belém area code on WhatsApp (+55 91)
- **GBP live ✅** — "Luan Alves — Desenvolvimento Web", verified, Belém, 71 customer interactions
- **Category updated ✅** — changed from "Software company" to more specific category
- **GBP posts added ✅**

### Issues

**High — Zero Google reviews**
Reviews are a top local pack ranking factor. GBP shows no reviews.

**High — No `LocalBusiness` schema on Belém page**
Page has only `Service` schema. `LocalBusiness`/`ProfessionalService` schema needed for local rich results.

**Medium — GBP profile incomplete**
"Complete your profile" prompt visible. Add: business description, services with prices, photos (logo + work sample).

**Medium — No local directory citations, NAP incomplete** (no physical address in schema)

---

## Images (72/100)

### Strengths
- All webp, lazy loading, alt text, Vercel CDN

### Issues
- No `srcset` on hero image
- Some articles using fallback OG image
- Potential placeholder images in portfolio (verify `public/assets/`)

---

## Priority Status (Updated 2026-06-27)

- ~~Schema fix — `contactOption: 'TollFree'` removed~~ ✅
- ~~LCP preload — `<link rel="preload">` for hero-img.webp~~ ✅
- ~~LocalBusiness schema on `/criacao-de-sites-belem/`~~ ✅
- **GBP reviews** — get direct review link, share with past clients (target: 5+) ← next
- **GBP profile** — complete description, services list, photos

---

## Full action plan: see `ACTION-PLAN.md`
## Per-category findings: see `findings/`
