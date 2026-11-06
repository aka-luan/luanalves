# UI polish screenshot review

The screenshot set covers all 28 content routes at 1440 x 1000 and 390 x 844, plus desktop and mobile views of six lower sections and a 1024px service-hub view. Captured from the production build on 2026-11-06. The WebP copies retain the original dimensions; council reviewed the original PNGs.

Final council approval after eight rounds: GPT Sol 9.0/10 and Claude Opus 9.1/10, both satisfied with no blockers on implementation commit `298c9e0370d11d9ac87afa78a6ffe9caef6b5c1e`. The final pass inspected refreshed hub captures and representative unchanged views alongside earlier whole-site reviews. Both noted a minor mobile portfolio-button tracking inconsistency as nonblocking. Gemini and GPT Astra were excluded at the user's request.

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

Hub verification includes the complete page at [390px](screenshots/hub-full-390.webp), [920px](screenshots/hub-full-920.webp), [1024px](screenshots/hub-full-1024.webp) and [1440px](screenshots/hub-full-1440.webp), with individual tablet captures below. Every image was set to eager loading and decoded before the complete-page captures.

| Section | 920px | 1024px |
| --- | --- | --- |
| Results | [Screenshot](screenshots/hub-results-920.webp) | [Screenshot](screenshots/hub-results-1024.webp) |
| Process | [Screenshot](screenshots/hub-process-920.webp) | [Screenshot](screenshots/hub-process-1024.webp) |
| Included | [Screenshot](screenshots/hub-included-920.webp) | [Screenshot](screenshots/hub-included-1024.webp) |
| Differentials | [Screenshot](screenshots/hub-differentials-920.webp) | [Screenshot](screenshots/hub-differentials-1024.webp) |
| FAQ | [Screenshot](screenshots/hub-faq-920.webp) | [Screenshot](screenshots/hub-faq-1024.webp) |
| Contact | [Screenshot](screenshots/hub-creation-contact-920.webp) | [Screenshot](screenshots/hub-creation-contact-1024.webp) |

Validation: production build and post-build asset patch pass; 140 tests pass. All content routes have no horizontal page overflow or broken images at the screenshot widths. Checks at 320, 768 and 1024 pixels found no off-screen headings or primary controls. Additional hub checks at 920, 1024, 1100 and 1180 pixels found no section with internal horizontal overflow or visible content outside the viewport. Mobile menu, Escape focus restoration, viewport resize, Barba navigation and keyboard access to the final article contents link pass.

The hub also has no empty element taller than 200px in the page flow at the four full-page capture widths. The distance from the Included section's bottom to the Differentials label measures 104–179px after removing a stale selector group and unused glow elements.

The active council now consists of GPT Sol and Claude Opus. The user removed GPT Astra after round 6 because of quota usage. Its earlier votes remain historical results in the PR description.

Round 7 scored 9.0 from GPT Sol and 8.8 from Claude Opus. The remaining tablet laptop/card overlap is corrected by giving the Entrega image its own row below the copy and cards. Geometry checks find no image/card intersection at 920, 1024, 1100 or 1180px. Complete section captures at [920px](screenshots/hub-results-complete-920.webp), [1024px](screenshots/hub-results-complete-1024.webp), [1100px](screenshots/hub-results-complete-1100.webp) and [1180px](screenshots/hub-results-complete-1180.webp) show the new arrangement. The sticky navigation is hidden only in these isolated section captures so it cannot obscure the content; complete-page captures retain the normal navigation. Both round 8 reviews approve this correction.

Council results are recorded in the pull request description. Round 1 scored 8.3, 7.5 and 8.1. A Sol-only second pass scored 9.0. Round 3 scored 8.8, 8.5 and 9.0. Round 4 scored 9.0 and 8.9; Astra's attempt hit a provider rate limit. This set includes full article-image proportions, a real project image for the performance article, smaller desktop segment headings, shared header states including all eight case studies, shorter segment breadcrumbs, aligned service feature titles and flat media framing. A Sol recheck was canceled before completion to include Claude's findings in the next full council pass. Gemini is excluded at the user's request.
