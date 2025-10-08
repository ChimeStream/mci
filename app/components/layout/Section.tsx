import React from 'react';
import { colors, layout, responsive } from '@/app/styles/design-tokens';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  background?: 'navy' | 'darkNavy' | 'white' | 'transparent';
  pattern?: 'concentric' | 'dots' | 'none';
  padding?: keyof typeof layout.padding;
  className?: string;
  minHeight?: string;
  fullHeight?: boolean;
}

/**
 * Section wrapper component for consistent section styling
 */
export function Section({
  id,
  children,
  background = 'navy',
  pattern = 'none',
  padding = 'desktop',
  className = '',
  minHeight,
  fullHeight = false,
}: SectionProps) {
  const backgroundColor = {
    navy: colors.primary.navy,
    darkNavy: colors.primary.darkNavy,
    white: colors.neutral.white,
    transparent: 'transparent',
  }[background];

  const horizontalPadding =
    padding === 'wide'
      ? responsive.spacing.sectionInlineWide
      : responsive.spacing.sectionInline;

  const blockPadding = fullHeight
    ? responsive.spacing.sectionBlockFull
    : responsive.spacing.sectionBlock;

  const getPatternStyle = () => {
    switch (pattern) {
      case 'concentric':
        return {
          backgroundImage: `repeating-radial-gradient(circle at center, transparent 0, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)`,
        };
      case 'dots':
        return {
          backgroundImage: `url('/mci-dots.png')`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat',
        };
      default:
        return {};
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        backgroundColor,
        minHeight: fullHeight ? '100vh' : minHeight,
        paddingTop: blockPadding,
        paddingBottom: blockPadding,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
      }}
    >
      {/* Background Pattern */}
      {pattern !== 'none' && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={getPatternStyle()} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
