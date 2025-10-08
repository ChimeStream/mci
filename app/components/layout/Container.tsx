import React from 'react';
import { layout, responsive } from '@/app/styles/design-tokens';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: keyof typeof layout.content;
  padding?: keyof typeof layout.padding;
  className?: string;
}

/**
 * Container component for consistent content width and padding
 */
export function Container({
  children,
  maxWidth = 'wide',
  padding = 'desktop',
  className = '',
}: ContainerProps) {
  const paddingMap = {
    mobile: responsive.spacing.sectionInlineCompact,
    tablet: responsive.spacing.sectionInlineComfort,
    desktop: responsive.spacing.sectionInline,
    wide: responsive.spacing.sectionInlineWide,
  } as const;

  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{
        maxWidth: layout.content[maxWidth],
        paddingLeft: paddingMap[padding],
        paddingRight: paddingMap[padding],
      }}
    >
      {children}
    </div>
  );
}
