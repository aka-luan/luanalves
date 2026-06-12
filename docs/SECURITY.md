# Security

## Current Surface

This repository builds a static marketing site. There is no backend, database, auth system, or server-side user input handler in the codebase.

## External Services

- Vercel Analytics.
- Vercel Speed Insights.
- WhatsApp links through `wa.me`.
- External social/profile links.

## Data Handling

No form submission or first-party lead capture backend is present in this repo. Lead contact flows go to WhatsApp.

## Security Rules For Changes

- Do not add client-side secrets.
- Do not commit `.env` files with real credentials.
- Do not add third-party scripts without reviewing privacy, performance, and CSP impact.
- Keep external links intentional and verify destinations.
- Treat analytics or tracking changes as privacy-sensitive.
- Do not add a contact form, CMS, API route, or database without a security review.

## Content Safety

- Validate user-visible URLs before publishing.
- Keep business claims factual and supportable.
- Avoid publishing private client data in portfolio or case content.

## Needs Review

- NEEDS_HUMAN_REVIEW: Privacy policy, cookie/analytics consent expectations, and legal requirements are not documented in this repo.
- NEEDS_HUMAN_REVIEW: Deployment headers and CSP are not represented in code here.
