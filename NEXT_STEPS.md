# Next Steps - MCI Landing Page

## Immediate Actions Required

### 1. Extract Assets from Figma (PRIORITY: HIGH)
**Time Required:** 1-2 hours

Use Figma MCP tools to extract and place the following assets:

#### Images
```bash
# Required file structure:
public/assets/images/
├── mci-logo.svg              # Company logo
├── vr-person.png             # Person with VR headset
└── services/
    ├── 5g.svg
    ├── fintech.svg
    ├── platforms.svg
    ├── kids.svg
    ├── b2b.svg
    └── sim.svg
```

#### Videos
```bash
public/assets/videos/
├── vision-desktop.mp4        # 16:9 horizontal video
└── vision-mobile.mp4         # 9:16 vertical video
```

#### Audio
```bash
public/assets/audio/
└── about-us.mp3              # Narration for About section
```

**Figma MCP Commands to Use:**
```typescript
// Example commands (adjust based on actual Figma structure)
mcp__figma-dev-mode-mcp-server__get_screenshot({ nodeId: "logo-node-id" })
mcp__figma-dev-mode-mcp-server__get_code({ nodeId: "service-icon-id", dirForAssetWrites: "/public/assets/images/services" })
```

### 2. Populate Service Modal Content (PRIORITY: HIGH)
**Time Required:** 2-3 hours

Update the `ServiceModalContent` component in `/app/components/sections/KeyServicesSection.tsx`:

**For Each Service, Provide:**
- Detailed description (2-3 paragraphs)
- 3-4 key features with icons
- Statistics or metrics
- Images/screenshots
- Call-to-action buttons (if needed)

**Reference Example:**
```typescript
// Fintech service should include:
- Sim POS: Description, features, usage stats
- Financial super-app: 70,000 active users, 208,000 installs/month
- MCI CVC: Investment fund details
```

### 3. Update Journey Timeline (PRIORITY: MEDIUM)
**Time Required:** 30 minutes

Replace sample data in `/app/components/sections/JourneySection.tsx`:

```typescript
// Update this array with accurate company milestones:
const journeyData = [
  { year: '2014', event: 'The establishment of Iran Mobile Communications Company' },
  // Add remaining accurate events...
];
```

### 4. Test on Multiple Devices (PRIORITY: HIGH)
**Time Required:** 1-2 hours

**Desktop Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile Testing:**
- [ ] iOS Safari (iPhone 12+)
- [ ] Chrome Mobile (Android)
- [ ] Test swipe gestures on carousel
- [ ] Test video playback (vertical format)

**Tablet Testing:**
- [ ] iPad Safari
- [ ] Android tablet

### 5. Accessibility Improvements (PRIORITY: MEDIUM)
**Time Required:** 2-3 hours

#### Add ARIA Labels
```typescript
// Example improvements needed:
<button aria-label="Play audio about our company">
  <PlayIcon />
</button>

<img alt="Person wearing VR headset experiencing immersive technology" />

<nav aria-label="Main navigation">
  {/* navigation items */}
</nav>
```

#### Keyboard Navigation
- [ ] Test Tab navigation through all interactive elements
- [ ] Ensure focus indicators are visible
- [ ] Test modal keyboard trapping

#### Color Contrast
- [ ] Run axe DevTools audit
- [ ] Ensure all text meets WCAG AA standards (4.5:1 ratio)
- [ ] Test with color blindness simulators

### 6. Performance Optimization (PRIORITY: MEDIUM)
**Time Required:** 1-2 hours

#### Image Optimization
```bash
# Install image optimization tools:
npm install sharp

# Convert images to WebP format for better compression
# Update Image components to use WebP with PNG fallback
```

#### Video Optimization
```bash
# Compress videos to reduce file size:
# Desktop video: Target < 3MB, 1080p
# Mobile video: Target < 2MB, 720p
# Use tools like HandBrake or ffmpeg
```

#### Lazy Loading
```typescript
// Add lazy loading to heavy components:
const JourneySection = dynamic(() => import('@/app/components/sections/JourneySection'), {
  loading: () => <LoadingSpinner />
});
```

### 7. Content Refinement (PRIORITY: LOW)
**Time Required:** 1 hour

#### Proofread All Translations
- [ ] English - Native speaker review
- [ ] Spanish - Native speaker review
- [ ] Russian - Native speaker review
- [ ] Arabic - Native speaker review + RTL layout check

#### Add SEO Meta Tags
```typescript
// In app/layout.tsx, add:
export const metadata: Metadata = {
  title: "MCI - Mobile Communications of Iran | Digital Innovation Leader",
  description: "Pioneering the future of digital communications...",
  keywords: ["MCI", "mobile communications", "Iran", "5G", "fintech"],
  openGraph: {
    title: "MCI - Mobile Communications of Iran",
    description: "...",
    images: ["/og-image.jpg"],
  },
};
```

## Development Checklist

### Before Production Deployment

- [ ] All assets extracted and placed correctly
- [ ] Service modal content completed
- [ ] Journey timeline data accurate
- [ ] Cross-browser testing passed
- [ ] Mobile responsiveness verified
- [ ] Accessibility audit completed (WCAG AA)
- [ ] Performance audit (Lighthouse score > 90)
- [ ] All translations proofread
- [ ] SEO meta tags added
- [ ] Error handling implemented
- [ ] Analytics tracking added (if required)
- [ ] 404 page created
- [ ] Loading states for all async operations
- [ ] Form validation (if forms added)

### Production Build Test

```bash
# Test production build locally:
npm run build
npm start

# Visit http://localhost:3000 and verify:
# - All animations work
# - Images load correctly
# - Videos autoplay and loop
# - Audio plays on demand
# - Navigation works
# - Language switching works
# - Modals open and close properly
# - No console errors
```

## Optional Enhancements

### Phase 2 Features (Future)

1. **Contact Form**
   - Add contact section with form
   - Email integration (e.g., SendGrid)
   - Form validation with react-hook-form

2. **Blog/News Section**
   - CMS integration (e.g., Contentful, Sanity)
   - Dynamic content loading
   - Pagination

3. **Animation Preloader**
   - Custom loading animation
   - Progress indicator
   - Smooth transition to main content

4. **Advanced Analytics**
   - Google Analytics 4
   - Scroll depth tracking
   - Click event tracking
   - User session recording (Hotjar)

5. **Interactive Elements**
   - 3D models with Three.js
   - Interactive data visualizations
   - Animated infographics

## Support Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Liquid Glass React](https://github.com/Parth18Shah/liquid-glass-react)
- [React Slick](https://react-slick.neostack.com/)

### Tools
- **Design:** Figma
- **Performance:** Lighthouse, WebPageTest
- **Accessibility:** axe DevTools, WAVE
- **SEO:** Google Search Console
- **Analytics:** Google Analytics, Vercel Analytics

### Deployment
- **Recommended:** Vercel (optimized for Next.js)
- **Alternative:** Netlify, AWS Amplify, Digital Ocean

```bash
# Deploy to Vercel:
npm install -g vercel
vercel
```

## Questions?

Refer to:
1. [README.md](./README.md) - Setup and general info
2. [ASSETS_NEEDED.md](./ASSETS_NEEDED.md) - Asset requirements
3. [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Technical details

---

**Last Updated:** October 7, 2025
**Status:** Ready for asset integration and content population
