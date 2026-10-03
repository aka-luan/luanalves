# Animations

- Use CSS transitions for simple hover/pressed/toggle changes so a new state can retarget an in-progress transition. Use existing GSAP patterns for coordinated sequences.
- Keep repeated input responsive: reverse or cancel outdated work rather than queueing animations. Test rapid open/close and navigation during motion.
- Stagger semantic groups only when the sequence clarifies hierarchy. Avoid hiding essential content if initialization fails.
- Keep exits brief enough for the next action. Coordinate visual completion with DOM removal and focus handling; a fade is not a substitute for dialog cleanup.
- For contextual icon swaps, keep layout dimensions stable and treat decorative glyphs as decorative. Cross-fade only when the state change benefits from it.
- Preserve intentional first-load motion while avoiding repeated entrances on unrelated state updates.

Follow design.md for reduced motion. For new page-script integration or cleanup, consult ARCHITECTURE.md.
