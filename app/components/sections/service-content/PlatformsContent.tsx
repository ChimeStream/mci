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

export function PlatformsContent() {
  const { t } = useLanguage();

  const platformsData = t.services?.platforms;

  const featureIcons = [
    '/e92b4cee20183bd4c44cee8f587c4eb8dd8f49bd.svg',
    '/96dc089c61a2a900e79a49c0aa4783555a9a0c0b.svg',
    '/6c477f9cd8bcde3ce32f8a6b31cd990a56c1c0cd.svg',
    '/22bb7bb716b868434ef6f7b3bdd081d7bb43ba50.svg',
    '/b5cb4cbc56b44f41bed169ca70d16e65593d95f8.svg',
    '/7129a39841209eec506fe7cd895cff53126fbe75.svg',
  ];

  const sectionImages = [
    '/f1bccbefb966a4f53f5ffe26c15310ac7685e1f7.png',
    '/67bf516618bb64dbb576c658828f36c6c7c040d9.png',
    '/3ca38e3e3394985703b6740f34544b3bfc5b4769.png',
    '/496fc8c4d57d3144d713f7fdeb7ecb291d1ac17a.png',
    '/e221070bd2cf036669146407866d744e1117ae39.png',
    '/3ab1ff44db3096a8068a6db6d1d601af902ba360.png',
  ];

  const features: FeatureCard[] = platformsData?.features?.map((f: any, i: number) => ({
    icon: featureIcons[i],
    title: f.title,
  })) || [];

  const sections: ContentSection[] = platformsData?.sections?.map((s: any, i: number) => ({
    title: s.title,
    image: sectionImages[i],
    description: s.description,
  })) || [];

  return (
    <div className="space-y-8">
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
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <div className="w-full h-[195px] rounded-lg overflow-hidden">
              <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-gray-600 font-bold text-2xl" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
              {section.title}
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
