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

export function B2BContent() {
  const { t } = useLanguage();
  const b2bData = t.services?.b2b;

  const featureIcons = [
    '/bf5982c5037f1ea8501d66a5e56a96470140e0a2.svg',
    '/025165056c5ad590a83dc9c22082cf5d31ccf1a0.svg',
    '/902a768ee47bc1a207a4642a45e87179ce553dbe.svg',
    '/1141d47800aa7a1629b239b8deb8136a98ae4b0b.svg',
    '/17ae00f618d06133e7e8d479c0a125d22f7f40ca.svg',
    '/1c609aa7d82fb650dae257c5ee0825b97f7233f5.svg',
    '/1dbb20853c696aa1e8ec889bc60cee519b0769a1.svg',
    '/b5f824c2855d910742c0480421b99d0e8a20135a.svg',
  ];

  const sectionImages = [
    '/a136e874cb12eb49c570a5ed4600e97cc6f19885.png',
    '/a38d2de673483ca0ea113a65ec7149a530b9d0cc.png',
    '/a5525d648107af449304dad9866edd1fe7351dfc.png',
    '/85b28edb361e3d3861ddd01d7ff3689552fa69a6.png',
    '/542ae9a8d9f9ed1bd06644a71c6bc50f5000b617.png',
    '/c19b9f3f661fdab406fd477411cd31e9fa641a7e.png',
    '/49caa8def6bf5fb7d5dadc461a3fad250bb5cc38.png',
    '/ab860c64a2dc37bc903136d763464b6a16524657.png',
  ];

  const features: FeatureCard[] = b2bData?.features?.map((f: any, i: number) => ({
    icon: featureIcons[i],
    title: f.title,
  })) || [];

  const sections: ContentSection[] = b2bData?.sections?.map((s: any, i: number) => ({
    title: s.title,
    image: sectionImages[i],
    description: s.description,
  })) || [];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        {b2bData?.intro || 'With the aim of providing comprehensive and specialized services to businesses, MCI (Hamrah Aval) has launched its B2B services since 2017. These services are designed with a focus on the communication and digital needs of organizations, particularly in the fields of connectivity, data, cloud, and the Internet of Things.'}
      </p>

      {/* Feature Cards - 2 rows x 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]"
          >
            <div className="w-10 h-10 mb-3">
              <img src={feature.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-500 text-center text-lg font-normal">{feature.title}</p>
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
              className="text-gray-600 font-bold text-2xl uppercase"
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
