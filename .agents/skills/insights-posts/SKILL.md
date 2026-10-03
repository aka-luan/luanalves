---
name: insights-posts
description: Create, edit, categorize, or validate Insights articles in src/data/insights.ts and the /insights/ routes.
---

# Insights Posts

1. Read design.md and the current types, taxonomy, and helpers in src/data/insights.ts. Use that module as the post source of truth; follow its metadata and block model rather than maintaining a separate field inventory.
2. Open with an answer to the main reader intent, then develop specific, supported guidance. Use the template H1 and logical content headings.
3. Link naturally to at least one relevant service and one real portfolio case. Add related articles and WhatsApp/contact links where useful.
4. Assign one supported category. When taxonomy changes are requested, verify insightFilters reflects published categories, the index has no empty filters, and categorySlug card styles exist. Tags remain editorial/schema metadata unless navigation changes are requested.
5. Check hero and inline asset paths under public/assets/ and meaningful pt-BR alt text. Follow existing publication and author conventions in the data.
6. Include visible FAQs only when they help readers. Schema must match the rendered content; do not promise search features or special AI citation benefits from FAQ markup.
7. Run the checks required by AGENTS.md. Inspect generated output for the article route, title/description/canonical, BlogPosting and any FAQPage actually emitted by the template, coherent tag keywords, and working internal links. Confirm category/filter behavior on /insights/.

Completion: the requested article renders with its metadata, assets, links, and taxonomy validated. Keep shared metadata logic in BaseLayout.astro.
