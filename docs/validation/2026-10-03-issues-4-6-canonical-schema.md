# Issues #4 and #6 — canonical and structured data

## Local implementation

- A single stable Person `#person`, Organization `#business` and WebSite `#website` is emitted by BaseLayout. Services and cases reference that same provider.
- Belém keeps City/AdministrativeArea in its Service areaServed. Removed the duplicate business and partial physical address.
- Person and business images are stable existing assets, independent of the current article social image.
- WhatsApp uses ContactPoint; removed the business-level availableChannel. Offer descriptions match the commercial scope without promising conversion rates or automatically included CMS.
- Removed exact January 1 case dates inferred from project years. Existing article dates remain unchanged.
- Astro and Vercel now agree on trailing slashes. `vercel.json` permanently redirects the www host to the apex, preserving the wildcard pathname. HTTPS remains a hosting responsibility.

Schema.org [marks ProfessionalService as deprecated](https://schema.org/ProfessionalService). The business now uses Organization, with the offered work represented by Service. This does not claim eligibility for Google's LocalBusiness feature; no confirmed physical address was supplied. Schema validity and Google feature eligibility are separate checks.

## Evidence

- `pnpm run build`: passed, 28 pages, including the production asset patch.
- `node docs/validation/check-issue-6-schema.mjs`: passed across all 28 HTML pages; stable identities, unique top-level IDs, canonical convention, visible FAQ text, real identity assets and case date policy. Output: [generated check](issue-6-generated-schema.json).
- Schema.org Validator code tests: home, Belém service, Poliana case and cost article each returned zero errors and zero warnings. Raw snapshots are `issue-6-validator-{home,belem,case,article}.txt`; [service screenshot](issue-6-validator-belem.png). These tests validate code from the local build, not the currently published version.
- Barba Belém → Poliana navigation replaced service/FAQ nodes with CreativeWork, retained one JSON-LD script and updated the canonical after the transition: [navigation check](issue-6-barba-schema.json).
- Public site baseline: HTTP already returns 308 to HTTPS and preserves the sample UTM; www and slashless service paths both still return 200. Robots and sitemap return 200. [Raw baseline](issue-4-production-before.json).

## Remaining acceptance

Publish the configuration and verify redirects on the actual Vercel deployment. Check HTTP/HTTPS, www/apex, home/service/article/case, trailing slashes, query preservation, loop-free final destinations and images/CSS/JS/fonts/robots/sitemap. A local build cannot establish these hosting behaviors. [Vercel documents permanent redirects, host conditions and trailingSlash exclusions for files](https://vercel.com/docs/project-configuration/vercel-json).

After publication, repeat Google Rich Results Test on home/service/article/case and record eligibility independently of Schema.org validity. Authenticated Search Console checks of Google's selected canonical remain pending. Keep both issues open until their production requirements are satisfied.
