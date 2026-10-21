# Pending Work

Read for planning and prioritization. These tasks require current evidence or an owner decision; they are not automatic implementation instructions.

## Production Measurement And Validation

- GA4 production receipt was confirmed on 2026-10-03 with three synthetic clicks: see [issue 16 evidence](validation/2026-10-03-issue-16-analytics.md). Luan still needs to fill the private commercial baseline for 2026-10-04–2026-10-31. This does not confirm receipt in a separate Vercel dashboard or imply commercial demand.

- Monitor GSC index coverage and impressions after verification and sitemap submission.
- Capture PageSpeed Insights lab baselines when time allows; CrUX currently has insufficient field data.
- Confirm one `whatsapp_click` event in the Vercel Analytics dashboard after deployment.
- Run one live Rich Results Test after deployment; rendered-source validation already passes.
- Add current deployment/hosting notes after human confirmation.
- Decide whether broader browser-script tests are worth adding beyond the project modal.

- Current GSC coverage and search performance, with exclusions worth investigating.
- A useful performance baseline for home, a service page, and an article; distinguish lab measurements from available field data.
- One production whatsapp_click event with page and CTA context in the analytics dashboard.
- Production structured-data checks for home, service, case, and article templates, including warnings and errors.

Complete when each result has an observation date and evidence recorded here, and any concrete defect has a next step and completion criterion. Insufficient field data is not a failed implementation.

Historical context only: the 2026-06-27 audit reported a live, verified GBP and 20/21 indexed pages; the 2026-07-30 roadmap recorded owner-confirmed GSC access and sitemap submission. Those reports remain in Git history and do not establish today's baseline. Inspect existing accounts before proposing account creation.

## Privacy And Analytics Decision

Next step: ask the owner to confirm analytics usage, data handling, and consent/legal expectations against the current site behavior.

Complete when the decision is recorded and any required visitor-facing privacy information or consent behavior has been implemented and verified. Do not infer requirements from a historical SEO checklist.
