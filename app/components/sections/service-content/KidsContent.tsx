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

export function KidsContent() {
  const { t } = useLanguage();
  const kidsData = t.services?.kids;

  const featureIcons = [
    '/379e2350908cfe23b1fcf59e3ae880f752c01d62.svg',
    '/77051c8337b3f5d1c020aac4f87db1846fdb99bd.svg',
    '/8d2e886b5050bdaa25dbd75efba46cb24cb3b0bb.svg',
    '/aa527becc5dd1cde49b59cde5c51e0dffd0838d1.svg',
    '/eb6b1b49a5a9a0b89f7c4662caac4c71e1659a24.svg',
    '/96dc089c61a2a900e79a49c0aa4783555a9a0c0b.svg',
    '/75fcfec42e4f41c77f2ba16d3307f51954336a28.svg',
  ];

  const sectionImages = [
    '/ebafceaac792bd244412e8738af023337c996995.png',
    '/a324b3d9df0e5015abdc76103009e0f3d93ffbf2.png',
    '/42bd3158bde25c2f4c7df45386e33ba36da0a868.png',
    '/8fe1ce714d38b5397fda7802c23bd57c1906d6e2.png',
    '/b5f4161a71c893eb728ae935d40e90a4fed3f7cc.png',
    '/f0b1f00ccdf0e64a0d02be3958caa6de52bbe56d.png',
    '/4c69d8470f6879d70a364bc75b8b1e0fb29414e9.png',
  ];

  const features: FeatureCard[] = kidsData?.features?.map((f: any, i: number) => ({
    icon: featureIcons[i],
    title: f.title,
  })) || [];

  const sections: ContentSection[] = kidsData?.sections?.map((s: any, i: number) => ({
    title: s.title,
    image: sectionImages[i],
    description: s.description,
  })) || [];

  return (
    <div className="space-y-8">
      {/* Feature Cards - 2 rows: first row 3 cards, second row 3 cards, last card full width */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.slice(0, 3).map((feature, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.slice(3, 6).map((feature, index) => (
          <div
            key={index + 3}
            className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]"
          >
            <div className="w-10 h-10 mb-3">
              <img src={feature.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-700 text-center text-lg font-normal">{feature.title}</p>
          </div>
        ))}
      </div>
      {/* Last card spans full width */}
      <div className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]">
        <div className="w-10 h-10 mb-3">
          <img src={features[6].icon} alt="" className="w-full h-full object-contain" />
        </div>
        <p className="text-gray-700 text-center text-lg font-normal">{features[6].title}</p>
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
