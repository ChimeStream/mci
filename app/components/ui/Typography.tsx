import React from 'react';
import { typography, colors } from '@/app/styles/design-tokens';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Heading component with consistent typography
 */
export function Heading({
  children,
  size = '6xl',
  weight = 'bold',
  color = 'white',
  className = '',
  style,
}: TypographyProps & {
  size?: keyof typeof typography.fontSize;
  weight?: keyof typeof typography.fontWeight;
  color?: 'white' | 'navy' | 'cyan';
}) {
  const colorMap = {
    white: colors.neutral.white,
    navy: colors.primary.navy,
    cyan: colors.accent.cyan,
  };

  return (
    <h2
      className={className}
      style={{
        fontFamily: typography.fontFamily.heading,
        fontSize: typography.fontSize[size],
        fontWeight: typography.fontWeight[weight],
        color: colorMap[color],
        lineHeight: typography.lineHeight.tight,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

/**
 * Body text component
 */
export function Text({
  children,
  size = 'base',
  weight = 'normal',
  color = 'white',
  opacity = 0.9,
  className = '',
  style,
}: TypographyProps & {
  size?: keyof typeof typography.fontSize;
  weight?: keyof typeof typography.fontWeight;
  color?: 'white' | 'navy';
  opacity?: number;
}) {
  const baseColor = color === 'white' ? colors.neutral.white : colors.primary.navy;

  return (
    <p
      className={className}
      style={{
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize[size],
        fontWeight: typography.fontWeight[weight],
        color: baseColor,
        opacity,
        lineHeight: typography.lineHeight.relaxed,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}
