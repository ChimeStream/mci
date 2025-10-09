'use client';

import React from 'react';

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
  const features: FeatureCard[] = [
    {
      icon: '/711f23113f3d42204a4464b160a479d1e65d05c4.svg',
      title: 'Sim POS',
    },
    {
      icon: '/438a871ddc9ff1195c165d6d77201ef13355922d.svg',
      title: 'Financial super-app',
    },
    {
      icon: '/ff178d5a87bd15ab13dab8690f013cd343ec723f.svg',
      title: 'MCI CVC',
    },
  ];

  const sections: ContentSection[] = [
    {
      title: 'FINANCIAL SUPER-APP',
      image: '/2326fe119908c122a9754e4b331ff5e1f632edb4.png',
      description:
        'This platform offers users a wide range of services, from financial payments and bill settlements to registration for educational courses and accommodation rentals. It also provides a secure and integrated digital wallet for managing transactions, and users can receive a physical card linked to it for purchases at various stores. On average, the application is installed 208,000 times per month and has around 70,000 daily active users, who spend an average of approximately 168 seconds per day on the app.',
    },
    {
      title: 'MCI CVC',
      image: '/5e0a9e6f154a018c91c84a7cb2f07e76c014c585.png',
      description:
        'This fund is dedicated to investing in innovative and technology-driven projects and companies. Its mission is to identify and monitor emerging technologies while enabling their integration into the national value chain. Key investment areas include Artificial Intelligence, Internet of Things, Microelectronics, 5G communications, Industry 4.0, Smart Logistics, Communication Systems and Equipment, as well as Augmented and Virtual Reality.',
    },
    {
      title: 'SIM POS',
      image: '/173b5a8b657d93ee2f8553b906ea835c293d9b88.png',
      description:
        'SIM-POS is a specialized and secure SIM card designed for mobile point-of-sale (mPOS) devices. It plays a key role in transmitting financial transaction data to payment service provider (PSP) networks. This SIM card provides a stable and dedicated connection to banking and payment servers without the need for public internet, thereby enhancing the speed, security, and reliability of transactions.',
    },
  ];

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
              className="text-gray-600 font-bold text-xl"
              style={{
                fontFamily: 'var(--font-cairo), sans-serif',
              }}
            >
              {section.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-500 text-lg leading-relaxed"
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
