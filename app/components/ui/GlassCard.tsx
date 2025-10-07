'use client';

import React, { ReactNode } from 'react';
import LiquidGlass from 'liquid-glass-react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <LiquidGlass
      blurAmount={24}
      cornerRadius={16}
      className={`p-6 bg-white/10 backdrop-blur-md ${className}`}
      onClick={onClick}
    >
      {children}
    </LiquidGlass>
  );
}
