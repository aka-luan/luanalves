# Animation Performance

- Declare the properties that actually change rather than transition: all, which can animate unrelated layout or color updates.
- Prefer transform and opacity for movement/fades where they fit the effect. Profile costly filters, large blurred surfaces, and layout-changing animation rather than assuming GPU acceleration.
- Add will-change only to address observed stutter. Extra layers consume memory; scope the hint to the affected element and remove temporary hints after the interaction.
- Inspect frame performance on the affected device/viewport and during Barba navigation. Clean up GSAP contexts, ScrollTriggers, timers, and listeners through the existing lifecycle.
