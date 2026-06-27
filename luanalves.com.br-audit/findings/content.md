# Content Quality & E-E-A-T Findings — luanalves.com.br

**Score: 74/100**

## What Works

- Author bio section on all insight articles (name, role, location, bio text)
- Social links (Instagram, LinkedIn) on author card — E-E-A-T signals
- Article depth: ~2,500–2,800 words per article (strong for informational intent)
- FAQ blocks on service pages and articles with clear Q&A structure
- Related posts section linking between articles
- WhatsApp CTA linked directly to article-specific context messages
- pt-BR language throughout with proper accents
- Article metadata: publish date, read time, category, tags all present

## Findings

### HIGH — Only 6 published articles
Six articles in the `insights` section is thin for a content-driven SEO strategy. Competitors ranking for "criação de sites" and "desenvolvedor web" keywords maintain 30–100+ articles.
- **Fix**: Target 2–3 new articles per month. Prioritize FAQ/pricing/comparison keywords (already doing well with "quanto custa" article).

### HIGH — No external citations in articles
Articles reference pricing tiers and industry claims without linking to external sources (IBGE, surveys, third-party tools). For E-E-A-T, Google rewards content that cites authoritative sources.
- **Fix**: Add 2–3 outbound links per article to relevant external references (IBGE, Semrush research, etc.).

### MEDIUM — `dateModified` = `datePublished` on all articles
In `[slug].astro:98`, `dateModified` is set equal to `datePublished`. Google uses `dateModified` to understand content freshness. Articles never appear "updated" to crawlers.
- **Fix**: Add a `dateModified` field to `InsightPublishedPost` and update it when articles are revised. Pass it separately in the BlogPosting schema.

### MEDIUM — No hero images on some articles
The article template uses `post.heroImage ?? '/assets/og-cover.webp'` as fallback. Articles lacking real hero images use the generic OG cover — this hurts visual differentiation in search results (rich snippets) and reduces time-on-page.
- **Fix**: Add unique hero images to all articles. 1200×800 webp minimum.

### MEDIUM — No Portfolio page copy / case study text
The portfolio listing shows project cards but lacks descriptive text explaining what each project achieved. This is a missed E-E-A-T signal (demonstrable expertise from real work).
- **Fix**: Add 2–3 sentence outcome summaries to each portfolio card, and ensure portfolio case pages have enough content.

### LOW — Insights listing page H1 is just "Insights"
H1: "Insights" is weak as a standalone heading. It misses keyword intent.
- **Fix**: Change to "Insights sobre Desenvolvimento Web e SEO" (already the title tag — make H1 match).
