'use client';

import React from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';

interface FeatureCard {
  icon: string;
  title: string;
}

interface ContentSection {
  title: string;
  image: string;
  description: string;
}

export function FintechContent() {
  const { t } = useLanguage();

  // Get translated features and sections from services namespace
  const fintechData = t.services?.fintech;

  const featureIcons = [
    '/711f23113f3d42204a4464b160a479d1e65d05c4.svg',
    '/438a871ddc9ff1195c165d6d77201ef13355922d.svg',
    '/ff178d5a87bd15ab13dab8690f013cd343ec723f.svg',
  ];

  const sectionImages = [
    '/2326fe119908c122a9754e4b331ff5e1f632edb4.png',
    '/5e0a9e6f154a018c91c84a7cb2f07e76c014c585.png',
    '/173b5a8b657d93ee2f8553b906ea835c293d9b88.png',
  ];

  const features: FeatureCard[] = fintechData?.features?.map((f: any, i: number) => ({
    icon: featureIcons[i],
    title: f.title,
  })) || [];

  const sections: ContentSection[] = fintechData?.sections?.map((s: any, i: number) => ({
    title: s.title,
    image: sectionImages[i],
    description: s.description,
  })) || [];

  return (
    <div className="space-y-8">
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]"
          >
            <div className="w-10 h-10 mb-3">
              <img src={feature.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-700 text-center text-lg font-normal">{feature.title}</p>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            {/* Image */}
            <div className="w-full h-[195px] rounded-lg overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3
              className="text-gray-600 font-bold text-2xl"
              style={{
                fontFamily: 'var(--font-cairo), sans-serif',
              }}
            >
              {section.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-700 text-xl leading-relaxed"
              style={{
                fontFamily: 'var(--font-cairo), sans-serif',
              }}
            >
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
