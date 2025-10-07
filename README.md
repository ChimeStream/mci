# MCI Landing Page

A modern, responsive landing page for Mobile Communications of Iran (MCI) built with Next.js 15, Framer Motion, and liquid-glass-react.

## Features

- 🌐 **Multilingual Support**: English, Spanish, Russian, and Arabic (with RTL support)
- 🎨 **Glass Morphism Design**: Beautiful frosted glass effects throughout
- ✨ **Smooth Animations**: Powered by Framer Motion
- 📱 **Mobile-First**: Fully responsive design
- 🎬 **Parallax Effects**: Engaging scroll-based animations
- 🎥 **Adaptive Videos**: Different videos for mobile and desktop
- 🎵 **Audio Player**: On-demand audio with custom controls
- 🎠 **Interactive Carousel**: Swipe-enabled journey timeline

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Glass Effects**: liquid-glass-react
- **Carousel**: React Slick
- **Package Manager**: npm

## Project Structure

```
mci/
├── app/
│   ├── components/
│   │   ├── sections/      # Page sections (Hero, About, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── locales/           # Translation source files
│   ├── utils/             # Utility functions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Main landing page
├── public/
│   ├── assets/
│   │   ├── images/        # Images and icons
│   │   ├── videos/        # Background videos
│   │   └── audio/         # Audio files
│   └── locales/           # Public translation files
└── ASSETS_NEEDED.md       # Asset requirements document
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mci
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets (see [ASSETS_NEEDED.md](./ASSETS_NEEDED.md) for details):
   - Logo: `/public/assets/images/mci-logo.svg`
   - VR Person image: `/public/assets/images/vr-person.png`
   - Service icons: `/public/assets/images/services/*.svg`
   - Videos: `/public/assets/videos/vision-*.mp4`
   - Audio: `/public/assets/audio/about-us.mp3`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server

## Page Sections

1. **Hero Section**: Welcome message with animated star field background
2. **VR Person Section**: Person with VR headset with parallax entry animation
3. **About Us**: Company information with stats cards and audio player
4. **Vision & Mission**: Full-screen video background with glass cards
5. **Immersive**: Description of the company's immersive approach
6. **Journey**: Interactive carousel showing company timeline (2014-2025)
7. **Key Services**: Grid of 6 service cards with modal details
   - 5.5G Network
   - Fintech Solutions
   - Platforms (Education, Entertainment, Health, E-commerce)
   - Kids & Teen Ecosystem
   - B2B & B2G Services
   - SIM Card Options

## Language Support

The site automatically detects the user's browser language and displays content accordingly. Users can switch languages using the language switcher in the navigation.

Supported languages:
- 🇬🇧 English (en)
- 🇪🇸 Spanish (es)
- 🇷🇺 Russian (ru)
- 🇸🇦 Arabic (ar) - with RTL layout

## Customization

### Adding New Translations

1. Edit the JSON files in `/app/locales/` and `/public/locales/`
2. Follow the existing structure for consistency
3. The language context will automatically load new translations

### Modifying Glass Effect

Glass effects use the `liquid-glass-react` library. Adjust parameters in components:

```tsx
<Glass
  blur={24}          // Blur intensity (px)
  opacity={0.15}     // Background opacity
  borderRadius={16}  // Corner radius (px)
>
  {children}
</Glass>
```

### Changing Colors

Update the gradient colors in each section component or modify the global color scheme in `globals.css`:

```css
:root {
  --background: #001F3F;  /* Dark blue */
  --foreground: #ffffff;  /* White text */
}
```

## Performance Optimization

- Images use Next.js Image component for automatic optimization
- Videos are lazy-loaded and responsive (different files for mobile/desktop)
- Translations are loaded on-demand per language
- Code splitting via Next.js dynamic imports
- Smooth scroll behavior with CSS `scroll-behavior: smooth`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Issues

- Assets need to be provided via Figma MCP (see [ASSETS_NEEDED.md](./ASSETS_NEEDED.md))
- Service modal content is placeholder and needs to be populated
- Journey timeline events are sample data

## Contributing

1. Create a feature branch
2. Make your changes
3. Test on multiple devices and browsers
4. Submit a pull request

## License

Proprietary - Mobile Communications of Iran (MCI)

## Contact

For questions or support, please contact the development team.
