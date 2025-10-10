'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

interface SimCardType {
  title: string;
  description: string;
}

export function SimCardContent() {
  const { t } = useLanguage();
  const simData = t.services?.sim;

  const simCardTypes: SimCardType[] = simData?.types || [];

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {simData?.intro || 'MCI offers a diverse range of SIM cards, designed to meet the needs of different generations. From professional data users and high-speed internet seekers to families and even businesses, everyone can find a smart choice tailored to their lifestyle and requirements.'}
      </p>

      {/* Types Section */}
      <div className="space-y-6">
        <h3
          className="text-gray-600 font-bold text-2xl"
          style={{
            fontFamily: 'var(--font-cairo), sans-serif',
          }}
        >
          {simData?.typesTitle || 'Types of MCI SIM Cards:'}
        </h3>

        {/* SIM Card Types */}
        <div className="space-y-4">
          {simCardTypes.map((simCard, index) => (
            <div key={index} className="space-y-2">
              <h4
                className="text-gray-600 font-bold text-2xl"
                style={{
                  fontFamily: 'var(--font-cairo), sans-serif',
                }}
              >
                {simCard.title}
              </h4>
              <p
                className="text-gray-700 text-xl leading-relaxed"
                style={{
                  fontFamily: 'var(--font-cairo), sans-serif',
                }}
              >
                {simCard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
