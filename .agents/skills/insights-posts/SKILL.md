---
name: insights-posts
description: Create and update Insights blog posts for the Luan Alves Astro site, including PT-BR copy, metadata, category assignment, internal links, hero assets, schema compatibility, and build validation. Use when adding, editing, reviewing, categorizing, or publishing posts in `src/data/insights.ts` or the `/insights/` routes.
---

# Insights Posts

## Quick Start

Use this skill when the task involves creating, updating, reviewing, categorizing, or validating posts in the Insights section.

Core files:
- `src/data/insights.ts`
- `src/pages/insights.astro`
- `src/pages/insights/[slug].astro`
- `design.md`
- `docs/SEO-ROADMAP.md`

## Workflow

1. Read `AGENTS.md`, `design.md`, and `docs/SEO-ROADMAP.md` before changing post content or Insights UI.
2. Treat `src/data/insights.ts` as the source of truth for post data. Do not create ad hoc content files for Insights posts unless the repo structure changes.
3. Confirm the requested post has:
   - `title`, `excerpt`, `description`
   - `category` and `categorySlug`
   - `date`, `isoDate`, `readTime`, `slug`
   - `tags`
   - `heroImage` and `heroImageAlt`
   - `published: true` and author block when it is a live article
4. Keep visible copy in correct `pt-BR` with proper accentuation. Do not trust mojibake from PowerShell; preserve UTF-8 source text.
5. Build the article with the existing block model only:
   - `paragraph`
   - `heading`
   - `list`
   - `blockquote`
   - `table`
   - `faq`
   - `links`
   - use `image` or `code` only when the content really needs it
6. Write answer-first content. Early in the article, clearly answer the main search intent and then expand with structured sections.
7. Keep one clear category per post. Categories drive the Insights filter UI; do not introduce categories that will create empty or confusing filters.
8. Keep tags as editorial/schema metadata, not as the main navigation system unless the product explicitly changes.
9. Add natural internal links to service pages, related Insights posts, and WhatsApp/contact where relevant.
10. Verify the hero asset path exists under `public/assets/` before shipping.

## Content Rules

- Use a strong commercial/editorial angle, not generic SEO filler.
- Prefer specific, citable statements over vague marketing language.
- Keep heading hierarchy clean: one H1 from the page template, then logical H2/H3 blocks in content.
- Include FAQ only when it improves query coverage or snippet readiness.
- CTA copy should align with Luan Alves's positioning: direct contact, SEO-aware structure, conversion via WhatsApp.

## Category Rules

- Use only categories already supported by the repo unless the user explicitly asks for a taxonomy change.
- When changing categories, verify:
  - `insightFilters` still reflects only published categories
  - `/insights/` does not expose empty filters
  - card visual styles still exist for the affected `categorySlug`

## Validation Checklist

- Confirm `heroImage` file exists.
- Confirm `heroImageAlt` is meaningful and in `pt-BR`.
- Confirm category/filter behavior on `/insights/` still makes sense.
- Confirm `post.tags` still produce coherent `keywords` in schema.
- Run `pnpm run build` after Insights UI or content changes.
- Check generated output for:
  - new slug route
  - correct metadata and canonical
  - `BlogPosting` and `FAQPage` when applicable
  - no broken internal links introduced by the new post

## Avoid

- Do not duplicate metadata logic already handled by `BaseLayout.astro`.
- Do not add remote assets or remote fonts.
- Do not create empty categories or filters.
- Do not let tags silently become UI navigation again unless that change is intentional and requested.
