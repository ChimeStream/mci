# Mobile Responsiveness TODO

1. Refactor hero typography and layout to remove absolute positioning and global overrides so copy scales fluidly from 320 px upwards.
2. Normalize global/section sizing rules (overflow, padding, min-heights) to respect mobile breakpoints.
3. Rework timeline and services components with responsive card sizing and interaction patterns for touch devices.
4. Introduce breakpoint-aware design tokens/utilities (typography, spacing) and migrate hardcoded pixel values.
5. Audit and adjust other sections (vision, immersive, about) to ensure viewport-based sizing, remove fixed heights, and verify media assets scale without cropping.
6. Add automated and manual verification steps (storybook or visual diff, device QA checklist) focused on target mobile widths.
