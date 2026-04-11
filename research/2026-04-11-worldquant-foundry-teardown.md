# Site Teardown: WorldQuant Foundry

**URL:** https://www.worldquantfoundry.com/  
**Date analyzed:** 2026-04-11  
**Platform:** Custom site with Tailwind v4 build output, Alpine-powered UI state, GSAP, Swiper and Three.js canvases  
**Source inputs:** Live site HTML, downloaded `main.min.css`, downloaded `main.min.js`, extracted SVGs and leadership portraits

## Tech Stack

| Technology | Evidence | Purpose |
|---|---|---|
| Tailwind CSS v4.1.17 | Banner in `main.min.css` | Utility build and theme tokens |
| Alpine.js | Minified runtime inside `main.min.js` | UI state, cursors, sliders, header behavior |
| GSAP | `gsap.min.js`, `gsap.timeline`, `ScrollTrigger`, `ScrollSmoother` in JS | Motion, scroll-linked effects |
| Swiper | `swiper.min.js` and slider init in JS | Portfolio carousel |
| Three.js r181 | `three.min.js` and `data-engine="three.js r181"` canvases | Dot-tunnel and mesh scenes |

## Design System

### Colors

| Name | Value |
|---|---|
| Core black | `#090909` |
| Rich carbon | `#111111` |
| Urban smoke | `#1b1b1b` |
| Off white | `#e7e7e7` |
| Neural fog | `#dadada` |
| Electric teal | `#5c939f` |
| Infrared | `#ed6d40` |

### Typography

| Role | Font |
|---|---|
| Display headings | `Roc Grotesk` |
| Labels / mono UI | `Azeret Mono` |

## Core Effects

| Effect | Implementation |
|---|---|
| Hero dot tunnel | Three.js canvas behind split headline |
| Scroll smoothing | GSAP `ScrollSmoother` |
| Section reveals | `SplitText`, `ScrollTrigger`, `gsap.from(...)` |
| Portfolio active card | Swiper with scale, opacity and color changes on active slide |
| Leadership / founders scenes | Multiple Three.js point-cloud variants |
| Cursor states | Alpine components backed by GSAP quick setters |

## Clone Strategy Used In This Repo

This repo does not reuse the original minified application bundle. Instead it recreates the homepage as a static single-page site with:

1. Local copies of the extracted SVG logos, feature icons and leadership portraits.
2. Custom HTML/CSS matching the visual hierarchy and section order of the original homepage.
3. Canvas-based dot fields written from scratch in `script.js` to approximate the hero tunnel, focus mesh, partner wave and CTA orbit.
4. A lightweight custom portfolio carousel instead of Swiper to keep the clone dependency-free.

## Notes

- The original site uses proprietary display typography and a more complex Three.js scene graph than this recreation.
- This clone focuses on the homepage visual language rather than reproducing every modal, cursor mode or internal page transition.
- The recreated canvases are intentionally lightweight so the page runs as a static build with no installation step.
