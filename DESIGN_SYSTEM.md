# MCI Design System

## Overview

This design system provides a consistent, scalable foundation for the MCI website. All design decisions are centralized in **design tokens** to ensure consistency across all components and sections.

## Architecture

```
app/
├── styles/
│   └── design-tokens.ts      # Central design system tokens
├── components/
│   ├── layout/
│   │   ├── Container.tsx     # Consistent content width wrapper
│   │   └── Section.tsx       # Section wrapper with background patterns
│   ├── ui/
│   │   └── Typography.tsx    # Heading and Text components
│   └── sections/             # Page sections using design system
```

## Design Tokens

### Colors

```typescript
colors = {
  primary: {
    navy: '#001F3F',        // Main brand color
    darkNavy: '#0a1e3d',    // Darker variant
    blue: '#1e3a5f',        // Lighter blue
  },
  accent: {
    cyan: '#00BCD4',        // Accent color
    lightCyan: '#4DD0E1',   // Lighter accent
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {                 // White with opacity
      50: 'rgba(255, 255, 255, 0.05)',
      ...
      900: 'rgba(255, 255, 255, 0.9)',
    },
  },
}
```

### Typography

```typescript
typography = {
  fontFamily: {
    primary: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    ...
    '10xl': '11.25rem', // 180px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
}
```

### Spacing

Based on 4px scale with semantic section spacing:

```typescript
spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  ...
  48: '12rem',    // 192px

  section: {
    py: {
      mobile: '4rem',
      desktop: '5rem',
    },
  },
}
```

### Layout

```typescript
layout = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1440px',
  },
  content: {
    narrow: '680px',
    default: '1076px',   // Figma content width
    wide: '1200px',
    full: '1440px',
  },
  padding: {
    mobile: '1.5rem',    // 24px
    tablet: '3rem',      // 48px
    desktop: '6rem',     // 96px
    wide: '11.375rem',   // 182px (Figma)
  },
}
```

## Core Components

### Container

Provides consistent content width and horizontal padding:

```tsx
import { Container } from '@/app/components/layout/Container';

<Container maxWidth="wide" padding="desktop">
  {children}
</Container>
```

**Props:**
- `maxWidth`: 'narrow' | 'default' | 'wide' | 'full'
- `padding`: 'mobile' | 'tablet' | 'desktop' | 'wide'

### Section

Wrapper for page sections with background and patterns:

```tsx
import { Section } from '@/app/components/layout/Section';

<Section
  id="about"
  background="navy"
  pattern="concentric"
  minHeight="1024px"
>
  {children}
</Section>
```

**Props:**
- `background`: 'navy' | 'darkNavy' | 'white' | 'transparent'
- `pattern`: 'concentric' | 'dots' | 'none'
- `minHeight`: string (e.g., '1024px', '100vh')
- `fullHeight`: boolean

### Typography

Consistent heading and text components:

```tsx
import { Heading, Text } from '@/app/components/ui/Typography';

<Heading size="6xl" color="white" weight="bold">
  Title
</Heading>

<Text size="base" opacity={0.9}>
  Body text
</Text>
```

**Heading Props:**
- `size`: Font size from design tokens
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black'
- `color`: 'white' | 'navy' | 'cyan'

**Text Props:**
- `size`: Font size from design tokens
- `weight`: Font weight from design tokens
- `color`: 'white' | 'navy'
- `opacity`: number (0-1)

## Usage Guidelines

### 1. Always Use Design Tokens

❌ **Don't:**
```tsx
<div className="text-white text-[64px] font-bold" style={{ fontFamily: 'Inter' }}>
```

✅ **Do:**
```tsx
<Heading size="6xl" color="white" weight="bold">
```

### 2. Consistent Spacing

Use the spacing scale for margins and padding:

```tsx
import { spacing } from '@/app/styles/design-tokens';

<div style={{ marginBottom: spacing[8] }}> // 32px
```

### 3. Responsive Padding

Use the layout padding scale:

```tsx
<div className="px-6 md:px-12 lg:px-[182px]">
  {/* Mobile: 24px, Tablet: 48px, Desktop: 182px */}
</div>
```

### 4. Content Width

Use max-width from layout tokens:

```tsx
<div className="max-w-[1076px]"> {/* Standard content width */}
```

## Section Pattern

All sections should follow this pattern:

```tsx
export function MySection() {
  const { t } = useLanguage();

  return (
    <Section
      id="my-section"
      background="navy"
      pattern="concentric"
      minHeight="1024px"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px]">
        <Heading size="4xl" className="md:text-[64px] mb-8">
          {t.section?.title}
        </Heading>

        <Text size="base" opacity={0.85}>
          {t.section?.description}
        </Text>
      </div>
    </Section>
  );
}
```

## Responsive Breakpoints

```typescript
breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
}
```

Use Tailwind classes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

## Animation

Consistent animation durations from design tokens:

```tsx
import { effects } from '@/app/styles/design-tokens';

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: effects.animation.slow }} // 0.6s
>
```

**Durations:**
- `fast`: 0.2s
- `base`: 0.4s
- `slow`: 0.6s

## Best Practices

1. **Never hardcode design values** - Always use tokens
2. **Use semantic components** - Prefer `<Heading>` over `<h2>`
3. **Responsive by default** - Test on mobile, tablet, and desktop
4. **Consistent spacing** - Use the 4px spacing scale
5. **Accessibility** - Ensure proper contrast and semantic HTML

## Migration Guide

To refactor an existing section:

1. Replace inline styles with design tokens
2. Wrap content in `<Section>` component
3. Use `<Heading>` and `<Text>` components
4. Apply consistent padding: `px-6 md:px-12 lg:px-[182px]`
5. Use max-width containers: `max-w-[1440px] mx-auto`
6. Test responsive behavior

## Examples

See the refactored sections for reference:
- `AboutSection.tsx` - Grid layout with stat cards
- `VisionMissionSection.tsx` - Centered content with background
- `ImmersiveSection.tsx` - Giant title with white background
