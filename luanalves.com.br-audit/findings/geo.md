# GEO & AI Search Readiness — luanalves.com.br

**Score: 79/100**

## What Works

- `llms.txt` exists at `https://luanalves.com.br/llms.txt` with clear profile content
- `robots.txt` allows all crawlers including AI crawlers (GPTBot, ClaudeBot, etc.)
- `FAQPage` schema present on service and article pages — directly feeds AI overview extractions
- `BlogPosting` schema with `author`, `datePublished`, `keywords`, `inLanguage: pt-BR`
- Author identity well-established (name, location, role, bio, social profiles)
- Article structure uses heading hierarchy (H2/H3 with IDs) → passage-level citability
- Long-form articles (2500+ words) with FAQ sections = strong AI snippet candidates

## Findings

### HIGH — llms.txt lacks service-specific detail
The `llms.txt` content is a general profile. AI citation tools (Perplexity, ChatGPT Browse) benefit from more structured, granular data: specific service pricing, process steps, technology stack used, and example client outcomes.
- **Fix**: Expand `llms.txt` with sections for each service (what it includes, typical budget, timeline) and 2–3 client result summaries.

### MEDIUM — No `llms-full.txt`
The `llms.txt` standard recommends an optional `llms-full.txt` with extended content for crawlers that can handle larger payloads.
- **Fix**: Create `/llms-full.txt` with full article excerpts, portfolio case summaries, and FAQ content.

### MEDIUM — Articles lack `speakable` schema
Google's `speakable` schema marks passages suitable for text-to-speech and AI assistant responses. Highly relevant for informational articles like pricing guides.
- **Fix**: Add `speakable` property to `BlogPosting` schema pointing to article introduction and key sections.

### MEDIUM — No brand disambiguation signals
"Luan Alves" is a common name (shown by web search returning unrelated people). The site lacks explicit disambiguation: no Wikipedia/Wikidata entity, no Knowledge Panel claim, no structured sameAs for a professional profile page.
- **Fix**: Ensure LinkedIn profile URL in `sameAs` is the correct and active profile. Add GitHub profile. Consider creating a Wikidata entry for the business entity.

### LOW — No structured data for portfolio cases
Portfolio case pages describe real client projects but lack `CreativeWork` or `WebSite` schema linking to the delivered work. AI tools that evaluate expertise (E-E-A-T) benefit from this.
- **Fix**: Add `CreativeWork` schema to each portfolio case page with `about`, `url` (client site), `creator`.
