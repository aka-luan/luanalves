# Schema & Structured Data Findings — luanalves.com.br

**Score: 76/100**

## What Works

- `@graph` pattern in BaseLayout — clean, avoids duplicate `@context` declarations
- `Person` schema with `sameAs` (LinkedIn, GitHub), `knowsAbout`, `contactPoint`
- `ProfessionalService` schema with `hasOfferCatalog` linking to 3 service offers
- `WebSite` schema with publisher reference
- `BreadcrumbList` on all service pages and article pages
- `Service` schema on all service pages via `getServicePageSchema()`
- `FAQPage` schema on service pages and articles (when FAQ blocks present)
- `BlogPosting` schema on article pages with `author`, `publisher`, `keywords`, `articleSection`
- Proper `@id` anchors (`#person`, `#business`, `#website`, `#article`, `#faq`)

## Findings

### ~~HIGH — `contactOption: 'TollFree'` is factually wrong~~ ✅ Fixed
Removed from `src/layouts/BaseLayout.astro`. Build verified 2026-06-27.

### ~~MEDIUM — No `LocalBusiness` schema on `/criacao-de-sites-belem/`~~ ✅ Fixed
`ProfessionalService` with `PostalAddress` (Belém, PA, BR), telephone, and `areaServed` added to `getServicePageSchema()` in `src/data/servicePages.ts`. Emitted only for `criacao-de-sites-belem` slug. Build verified 2026-06-27.

### MEDIUM — Portfolio listing lacks `ItemList` schema
The `/portfolio/` page lists 7 case studies without `ItemList` structured data. An `ItemList` with `ListItem` entries can enable rich results for collection pages.
- **Fix**: Add `ItemList` schema to `/portfolio/` with each project as a `ListItem` pointing to its canonical URL.

### MEDIUM — `dateModified = datePublished` in `BlogPosting`
See content findings. Schema-level issue: Google's `BlogPosting` rich result guidelines recommend keeping `dateModified` current.

### LOW — No `ImageObject` schema
Hero images on articles and the site itself lack `ImageObject` schema with `width`, `height`, `url`, `contentUrl`. This enriches `BlogPosting` and `Person` schema for image-search eligibility.

### LOW — Missing `priceRange` in `ProfessionalService`
Adding an approximate `priceRange` (e.g., `"R$1.500–R$8.000"`) to the `ProfessionalService` entity can surface in knowledge panel and local results.

### INFO — No `SiteLinksSearchBox` schema
Not critical for a small portfolio/service site, but a `SearchAction` on the `WebSite` schema could be added in future if a site search is implemented.
