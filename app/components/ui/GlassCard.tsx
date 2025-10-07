'use client';

import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', onClick }: GlassCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl backdrop-blur-[60px] bg-white/[0.08] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] ${className}`}
      onClick={onClick}
      style={{
        backdropFilter: 'blur(60px) saturate(180%)',
        WebkitBackdropFilter: 'blur(60px) saturate(180%)',
      }}
    >
      {children}
    </div>
  );
}
