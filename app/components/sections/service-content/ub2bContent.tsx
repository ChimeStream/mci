'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

export function ub2bContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {t.services?.b2b?.description || "MCI delivers enterprise-grade solutions that power smart businesses and modern government operations. From IoT infrastructure and cloud services to secure connectivity and AI-driven analytics, our B2B and B2G offerings enable organizations to optimize operations, enhance productivity, and drive digital transformation at scale. We partner with enterprises and governments to build Iran's intelligent future."}
      </p>
    </div>
  );
}
