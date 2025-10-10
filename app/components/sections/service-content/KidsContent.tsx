'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function KidsContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.kids?.description || "MCI provides a safe, monitored, and empowering digital environment designed specifically for children and teenagers. With parental controls, age-appropriate content, educational resources, and creative tools, we ensure young users can explore, learn, and connect in a protected space. Our kid-focused ecosystem fosters healthy digital habits while encouraging creativity, curiosity, and growth in the next generation."}
      </p>
    </div>
  );
}
