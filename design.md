# Design Guidelines

Source of truth for visual, page, copy, and SEO work on this site.

## Direction And Layout

- Dark premium editorial presentation with sharp architectural geometry; --radius: 0px is intentional.
- Use existing gold accents, surface tokens, spacing, and section/container patterns in src/styles/global.css before adding new ones.
- Manrope for body/UI and Newsreader for editorial display headings. Keep fonts local under public/fonts/ and use the existing Material Symbols icon font.
- Compose sections around their content, real project imagery, and clear WhatsApp conversion paths.
- Preserve this palette, geometry, type, and icon language unless the requested redesign changes them.

## Copy And Commercial Scope

Visible copy is direct pt-BR with correct accents. CTAs should describe the page's intent and lead naturally to WhatsApp contact.

Keep these market distinctions explicit:

- Incorporadora: structures and commercializes real-estate developments; emphasize brand, launches, and interested-buyer capture.
- Construtora: executes construction work; emphasize technical capacity, delivery history, and served segments.
- Empresa de madeira engenheirada: designs, manufactures, or assembles CLT, MLC, or other mass-timber systems; avoid reducing it to a generic madeireira.

The core offer covers information architecture, design, development, project presentation, institutional content, technical SEO, performance, and conversion. CMS, CRM, advanced catalogs, restricted areas, and external integrations are optional scope extensions; never imply automatic inclusion.

## Media

Prefer real project/service assets in public/assets/. Avoid invented screenshots, generic stock-like visuals, or decorative art when real work communicates better.
Use meaningful pt-BR alt text and consistent social-preview assets.

## Interaction And Accessibility

- Check Portuguese headings and CTA labels at mobile widths for clipping and awkward wrapping.
- Preserve readable contrast, keyboard operation, focus-visible states, button semantics, dialog labels, and accessible close controls.
- Hover, focus, and active states must communicate the same action.
- Motion should clarify hierarchy, transitions, or feedback. Respect prefers-reduced-motion and the existing motion-enabled setup.

## SEO And Conversion

- Use one clear H1 and a logical heading hierarchy.
- Provide page-specific title, description, canonical, social metadata, and appropriate schema through BaseLayout.astro.
- Add relevant service, case, and contact links where they help the visitor.
- Add SearchAction only if real site search exists.
- Schema must reflect visible content. Check current search documentation before promising eligibility or benefits from a schema type.
- WhatsApp is the primary conversion path; keep CTAs specific, visible, and consistent with the page intent.
