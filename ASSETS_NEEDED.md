# Assets Required from Figma MCP

This document lists all assets that need to be extracted from Figma and placed in the appropriate directories.

## Images

### Logo
- **Path:** `/public/assets/images/mci-logo.svg`
- **Description:** MCI company logo (Persian and English text with "همراه اول" and "mci Mobile Communications of Iran")
- **Format:** SVG preferred, PNG fallback
- **Required sizes:** Original (vector), or minimum 400x160px

### VR Person
- **Path:** `/public/assets/images/vr-person.png`
- **Description:** Person wearing VR headset with glowing cyan/orange lighting
- **Format:** PNG with transparent background
- **Required size:** Minimum 1200x1600px (portrait)

### Service Icons
All should be placed in `/public/assets/images/services/`

1. **5g.svg** - 5.5G network icon
2. **fintech.svg** - Fintech/digital finance icon
3. **platforms.svg** - Platforms (education, entertainment, health) icon
4. **kids.svg** - Kids & Teen ecosystem icon
5. **b2b.svg** - B2B & B2G enterprise icon
6. **sim.svg** - SIM card icon

**Format:** SVG preferred
**Style:** Match the blue/cyan gradient theme with glass morphism

## Videos

### Vision & Mission Background Videos
- **Desktop version:**
  - **Path:** `/public/assets/videos/vision-desktop.mp4`
  - **Description:** Horizontal video showing business/technology scenes
  - **Format:** MP4 (H.264)
  - **Aspect ratio:** 16:9
  - **Resolution:** 1920x1080 minimum
  - **Duration:** 10-30 seconds (loops)

- **Mobile version:**
  - **Path:** `/public/assets/videos/vision-mobile.mp4`
  - **Description:** Vertical video showing business/technology scenes
  - **Format:** MP4 (H.264)
  - **Aspect ratio:** 9:16
  - **Resolution:** 1080x1920 minimum
  - **Duration:** 10-30 seconds (loops)

**Requirements for both:**
- Must be optimized for web (compressed)
- Should autoplay, loop, and be muted
- Suggested codecs: H.264, AAC audio (muted)

## Audio

### About Us Section Audio
- **Path:** `/public/assets/audio/about-us.mp3`
- **Description:** Narration or background audio for About Us section
- **Format:** MP3
- **Duration:** 1-3 minutes
- **Quality:** 128-192 kbps

## Color Palette Reference

Based on the designs:
- **Primary Dark Blue:** `#001F3F`
- **Secondary Blue:** `#003366`
- **Accent Blue:** `#00509E`
- **Bright Cyan:** `#00BCD4`
- **Light Blue:** `#64b5f6` to `#bbdefb`
- **Purple Gradient:** `#1a237e` to `#311b92`
- **Orange Accent:** Used in VR person glow

## Glass Effect Parameters

Using `liquid-glass-react`:
- **Blur:** 24px
- **Opacity:** 0.15-0.2
- **Border Radius:** 16-24px
- **Background:** Semi-transparent white

## Notes

1. All assets should be optimized for web performance
2. Images should be compressed without visible quality loss
3. Videos should be under 5MB each if possible
4. Use WebP format for images where supported
5. Ensure all SVG icons have proper viewBox attributes
6. Test all videos for smooth looping (no visible jump)

## Asset Extraction Instructions

Use Figma MCP tools to:
1. Navigate to the MCI design file
2. Export all images at 2x resolution for retina displays
3. Export SVG assets with "Outline Stroke" option enabled
4. Ensure proper naming conventions match the paths above
5. Verify transparent backgrounds where specified

## Temporary Placeholders

Until assets are provided:
- Logo: Using text placeholder "MCI"
- VR Person: Using gradient rectangle
- Service icons: Using emoji placeholders
- Videos: Using solid color backgrounds
- Audio: No placeholder (button disabled)
