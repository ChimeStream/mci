'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function FintechContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.fintech?.description || "MCI's fintech ecosystem transforms digital payments and financial services through innovation and security. Our comprehensive solutions enable seamless transactions, digital wallets, and smart payment platforms that empower businesses and individuals. By combining telecommunications infrastructure with advanced financial technology, we're building a trusted, accessible, and inclusive digital economy for all Iranians."}
      </p>
    </div>
  );
}
