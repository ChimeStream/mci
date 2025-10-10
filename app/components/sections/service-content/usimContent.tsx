'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function usimContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-500 text-lg leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.sim?.description || "MCI's SIM card services offer flexible, reliable, and accessible communication solutions tailored to diverse user needs. Whether for personal use, business, or IoT devices, our SIM offerings provide nationwide coverage, competitive plans, and seamless connectivity. With a commitment to quality and accessibility, MCI ensures that everyone stays connected, no matter where they are."}
      </p>
    </div>
  );
}
