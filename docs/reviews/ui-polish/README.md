# UI polish screenshot review

The screenshot set covers all 28 content routes at 1440 x 1000 and 390 x 844, plus desktop and mobile views of six lower sections. Captured from the production build on 2026-11-06. The WebP copies retain the original dimensions; council reviewed the original PNGs.

Representative views:

| Page or section | Desktop | Mobile |
| --- | --- | --- |
| Home | [Screenshot](screenshots/home-desktop.webp) | [Screenshot](screenshots/home-mobile.webp) |
| Services | [Screenshot](screenshots/criacao-de-sites-desktop.webp) | [Screenshot](screenshots/criacao-de-sites-mobile.webp) |
| Institutional | [Screenshot](screenshots/site-institucional-desktop.webp) | [Screenshot](screenshots/site-institucional-mobile.webp) |
| Landing page | [Screenshot](screenshots/landing-page-desktop.webp) | [Screenshot](screenshots/landing-page-mobile.webp) |
| Blog | [Screenshot](screenshots/blog-profissional-desktop.webp) | [Screenshot](screenshots/blog-profissional-mobile.webp) |
| Incorporadora | [Screenshot](screenshots/site-para-incorporadora-desktop.webp) | [Screenshot](screenshots/site-para-incorporadora-mobile.webp) |
| Timber industry | [Screenshot](screenshots/site-para-industria-de-madeira-engenheirada-desktop.webp) | [Screenshot](screenshots/site-para-industria-de-madeira-engenheirada-mobile.webp) |
| Portfolio | [Screenshot](screenshots/portfolio-desktop.webp) | [Screenshot](screenshots/portfolio-mobile.webp) |
| Case study | [Screenshot](screenshots/portfolio--tresor-incorporacoes-desktop.webp) | [Screenshot](screenshots/portfolio--tresor-incorporacoes-mobile.webp) |
| About | [Screenshot](screenshots/sobre-desktop.webp) | [Screenshot](screenshots/sobre-mobile.webp) |
| Insights | [Screenshot](screenshots/insights-desktop.webp) | [Screenshot](screenshots/insights-mobile.webp) |
| Article | [Screenshot](screenshots/insights--quanto-custa-um-site-profissional-desktop.webp) | [Screenshot](screenshots/insights--quanto-custa-um-site-profissional-mobile.webp) |
| Home services | [Screenshot](screenshots/home-services-desktop.webp) | [Screenshot](screenshots/home-services-mobile.webp) |
| Home projects | [Screenshot](screenshots/home-work-desktop.webp) | [Screenshot](screenshots/home-work-mobile.webp) |
| Contact | [Screenshot](screenshots/home-contact-desktop.webp) | [Screenshot](screenshots/home-contact-mobile.webp) |
| Footer | [Screenshot](screenshots/footer-desktop.webp) | [Screenshot](screenshots/footer-mobile.webp) |
| Service proof | [Screenshot](screenshots/service-proof-desktop.webp) | [Screenshot](screenshots/service-proof-mobile.webp) |
| Article body | [Screenshot](screenshots/article-body-desktop.webp) | [Screenshot](screenshots/article-body-mobile.webp) |

All remaining route captures are in [screenshots](screenshots/).

Validation: production build and post-build asset patch pass; 140 tests pass. All content routes have no horizontal page overflow or broken images at the screenshot widths. Checks at 320, 768 and 1024 pixels found no off-screen headings or primary controls. Mobile menu, Escape focus restoration, viewport resize, Barba navigation and keyboard access to the final article contents link pass.

Council results are recorded in the pull request description. Round 1 scored 8.3, 7.5 and 8.1. A Sol-only second pass scored 9.0. Round 3 scored 8.8, 8.5 and 9.0. This set includes full article-image proportions, a real project image for the performance article, smaller desktop segment headings, shared header states, shorter segment breadcrumbs, aligned service feature titles and flat media framing. A Sol recheck was canceled before completion to include Claude's findings in the next full council pass. Gemini is excluded at the user's request.
