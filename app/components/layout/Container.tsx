import React from 'react';
import { layout } from '@/app/styles/design-tokens';

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
  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{
        maxWidth: layout.content[maxWidth],
        paddingLeft: layout.padding[padding],
        paddingRight: layout.padding[padding],
      }}
    >
      {children}
    </div>
  );
}
