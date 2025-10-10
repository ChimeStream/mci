'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function FiveGContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-500 text-lg leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.['5g']?.description || 'With the introduction of 5.5G, MCI takes a major step toward the future of connectivity. This next-generation technology delivers speeds beyond 5G, ultra-low latency, and significantly higher capacity. With 5.5G, users can experience ultra-fast internet, advanced augmented and virtual reality, large-scale IoT applications, and smart city services—seamlessly and without limits. This evolution positions MCI as the pioneer of digital transformation in Iran, where connectivity becomes not only faster, but also smarter, more reliable, and truly immersive.'}
      </p>
    </div>
  );
}
