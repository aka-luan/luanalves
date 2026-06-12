# Quality Score

Scores are lightweight and should be updated after meaningful audits. Use evidence from code, builds, tests, and manual QA.

| Area | Score | Evidence | Notes |
| --- | --- | --- | --- |
| Architecture | B | Astro static site, clear page/component/data split, docs now map boundaries. | More typed content contracts could reduce drift. |
| SEO | B+ | Per-page metadata via `BaseLayout`, sitemap, robots, schema, `llms.txt`, service/case/article pages. | Needs current Search Console and schema validation evidence. |
| Frontend UX | B+ | Strong design rules, local assets/fonts, motion system, portfolio and insights surfaces. | Needs fresh screenshot QA after major visual work. |
| Accessibility | B | Many labels, dialog semantics, focus/keyboard concern in tests. | Needs full keyboard and screen-reader audit. |
| Performance | B | Static Astro, local fonts, build pipeline, Speed Insights integration. | Needs measured Lighthouse/Core Web Vitals baseline. |
| Test Coverage | C | Vitest covers project modal behavior. | Broader scripts and route metadata lack tests. |
| Reliability | B- | Static build, route data centralized, asset patch documented. | Build helper and Barba head sync are sensitive areas. |
| Security/Privacy | B | No backend/database, limited external services. | Analytics/privacy policy expectations need human review. |
| Documentation | B | Agent guide, architecture, docs index, focused docs. | Keep docs synced with route/content changes. |

## Update Rule

When changing a score, add the evidence that justified it. Do not improve scores based on intention alone.
