/**
 * Design System Tokens
 * Central source of truth for all design values
 */

export const colors = {
  // Brand Colors
  primary: {
    navy: '#001F3F',
    darkNavy: '#0a1e3d',
    blue: '#1e3a5f',
  },
  accent: {
    cyan: '#00BCD4',
    lightCyan: '#4DD0E1',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: 'rgba(255, 255, 255, 0.05)',
      100: 'rgba(255, 255, 255, 0.1)',
      200: 'rgba(255, 255, 255, 0.2)',
      300: 'rgba(255, 255, 255, 0.3)',
      400: 'rgba(255, 255, 255, 0.4)',
      500: 'rgba(255, 255, 255, 0.5)',
      600: 'rgba(255, 255, 255, 0.6)',
      700: 'rgba(255, 255, 255, 0.7)',
      800: 'rgba(255, 255, 255, 0.8)',
      900: 'rgba(255, 255, 255, 0.9)',
    },
  },
} as const;

export const spacing = {
  // Base spacing scale (4px base)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px

  // Section-specific spacing
  section: {
    py: {
      mobile: '4rem',    // 64px
      desktop: '5rem',   // 80px
    },
    gap: {
      small: '2rem',     // 32px
      medium: '4rem',    // 64px
      large: '6rem',     // 96px
    },
  },
} as const;

export const typography = {
  // Font families
  fontFamily: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    mono: "'Geist Mono', monospace",
  },

  // Font sizes (using rem for scalability)
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '2rem',      // 32px
    '4xl': '2.5rem',    // 40px
    '5xl': '3rem',      // 48px
    '6xl': '4rem',      // 64px
    '7xl': '5rem',      // 80px
    '8xl': '6.25rem',   // 100px
    '9xl': '8rem',      // 128px
    '10xl': '11.25rem', // 180px
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  // Line heights
  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
} as const;

export const layout = {
  // Container widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1440px',
    full: '100%',
  },

  // Content max widths
  content: {
    narrow: '680px',
    default: '1076px',
    wide: '1200px',
    full: '1440px',
  },

  // Padding for containers
  padding: {
    mobile: '1.5rem',    // 24px
    tablet: '3rem',      // 48px
    desktop: '6rem',     // 96px
    wide: '11.375rem',   // 182px (Figma specific)
  },

  // Section heights
  section: {
    hero: {
      mobile: '1500px',
      desktop: '100vh',
    },
    standard: {
      mobile: 'auto',
      desktop: '1024px',
    },
  },
} as const;

export const effects = {
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    full: '9999px',
  },

  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  // Transitions
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Animation durations
  animation: {
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index scale
export const zIndex = {
  background: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
} as const;

export const responsive = {
  fontSize: {
    heroMobile: 'clamp(2.5rem, 8.5vw, 3.75rem)',
    heroDesktop: 'clamp(3.25rem, 7vw, 5rem)',
    sectionHeading: 'clamp(2.25rem, 6.5vw, 4.6875rem)',
    serviceTitle: 'clamp(1.75rem, 5vw, 2.8125rem)',
    serviceSubtitle: 'clamp(1rem, 3.2vw, 1.5rem)',
    display: 'clamp(3.5rem, 10vw, 7.5rem)',
    displayLarge: 'clamp(4rem, 12vw, 11.25rem)',
    bodyLg: 'clamp(1rem, 3vw, 1.5625rem)',
    bodyMd: 'clamp(0.875rem, 2.5vw, 1.125rem)',
    bodySm: 'clamp(0.8125rem, 2vw, 0.9375rem)',
  },
  spacing: {
    sectionInlineCompact: 'clamp(1.5rem, 4vw, 2rem)',
    sectionInlineComfort: 'clamp(1.5rem, 6vw, 3.5rem)',
    sectionInline: 'clamp(1.5rem, 8vw, 6rem)',
    sectionInlineWide: 'clamp(2rem, 10vw, 11.375rem)',
    sectionBlock: 'clamp(3rem, 8vw, 5rem)',
    sectionBlockFull: 'clamp(4rem, 12vh, 6rem)',
  },
} as const;
