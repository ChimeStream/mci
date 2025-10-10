'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function uplatformsContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-500 text-lg leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.platforms?.description || "MCI's digital platforms create an integrated ecosystem where education, entertainment, health, and e-commerce converge into one seamless experience. From interactive learning environments and streaming entertainment to telemedicine services and online marketplaces, our platforms are designed to enrich daily life, empower communities, and unlock new possibilities in Iran's digital landscape."}
      </p>
    </div>
  );
}
