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

export function PlatformsContent() {
  const features: FeatureCard[] = [
    {
      icon: '/e92b4cee20183bd4c44cee8f587c4eb8dd8f49bd.svg',
      title: 'E-Learning platform',
    },
    {
      icon: '/96dc089c61a2a900e79a49c0aa4783555a9a0c0b.svg',
      title: 'MCI VOD',
    },
    {
      icon: '/6c477f9cd8bcde3ce32f8a6b31cd990a56c1c0cd.svg',
      title: 'Real Estate Platform',
    },
    {
      icon: '/22bb7bb716b868434ef6f7b3bdd081d7bb43ba50.svg',
      title: 'Messenger super app',
    },
    {
      icon: '/b5cb4cbc56b44f41bed169ca70d16e65593d95f8.svg',
      title: 'E-marketplace',
    },
    {
      icon: '/7129a39841209eec506fe7cd895cff53126fbe75.svg',
      title: 'Home services platform',
    },
  ];

  const sections: ContentSection[] = [
    {
      title: 'E-LEARNING PLATFORM',
      image: '/f1bccbefb966a4f53f5ffe26c15310ac7685e1f7.png',
      description:
        'This application launched in April 2020 and, with features such as live streaming, voice chat, educational videos, and a digital magazine, has become the largest educational platform in the Middle East. The app has so far achieved 45 million unique installs, hosted over 3 million simultaneous users at the peak of the Omicron outbreak, and has up to 21 million daily active users. More than 202 billion messages and 37 billion documents have been exchanged through it, and over 10,000 educational contents have been provided for grades one through twelve.',
    },
    {
      title: 'E-MARKETPLACE',
      image: '/67bf516618bb64dbb576c658828f36c6c7c040d9.png',
      description:
        "This online store was founded in 2006 and has gradually become one of the main players in the country's e-commerce sector. The platform offers a wide range of products, including digital devices, home and kitchen goods, clothing, and books, and leverages an extensive supplier network and advanced logistics system to provide fast and reliable services to customers. According to the latest statistics, the store receives over 5.5 million daily visitors and sells more than 14.5 million products across various categories. Additionally, by offering services such as digital payments and 24/7 customer support, the store has enhanced the online shopping experience for its users and holds a significant share of Iran's e-commerce market.",
    },
    {
      title: 'REAL ESTATE PLATFORM',
      image: '/3ca38e3e3394985703b6740f34544b3bfc5b4769.png',
      description:
        'This startup, aiming to simplify, accelerate, and reduce risks in real estate transactions, began its operations in 2020. Today, the platform provides nationwide coverage and offers a range of specialized services, including property evaluation and pricing, expert consulting, an intelligent buying and selling assistant, and advertisement posting for its users. This service has approximately 28.5 million daily active users and 46.4 million monthly active users, with over 366 million text messages sent daily.',
    },
    {
      title: 'MCI VOD',
      image: '/496fc8c4d57d3144d713f7fdeb7ecb291d1ac17a.png',
      description:
        'This platform offers a new experience for watching movies online. Users can watch their desired films online by purchasing tickets either with cash or using their SIM card credit. For easy access, the link to watch the movie is sent via SMS to the subscriber\'s mobile number.',
    },
    {
      title: 'MESSENGER SUPER APP',
      image: '/e221070bd2cf036669146407866d744e1117ae39.png',
      description:
        'This application launched in 2018 with two services: VOD and messaging. Rubika\'s main goal is to create a sweet and easy digital life experience for users in the virtual space. Over the years, it has aimed to get closer to this goal by expanding its services and improving their performance. Today, this super app offers messaging, VOD, Rubino, shopping, food delivery, mobile top-up, and cinema ticketing—all in a single application—striving to realize a complete digital lifestyle.',
    },
    {
      title: 'HOME SERVICE PLATFORM',
      image: '/3ab1ff44db3096a8068a6db6d1d601af902ba360.png',
      description:
        'This online service platform has been operating in Iran since 2017, aiming to simplify access to various home and workplace services for users. The platform brings together specialists and service providers in categories such as home appliance repair, cleaning, plumbing, automotive, and beauty, enabling users to order services online quickly and reliably. Users can submit their requests through the app and choose their desired specialist from the available proposals.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Feature Cards - 2 rows x 3 columns */}
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
