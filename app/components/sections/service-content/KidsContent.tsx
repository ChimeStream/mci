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

export function KidsContent() {
  const features: FeatureCard[] = [
    {
      icon: '/379e2350908cfe23b1fcf59e3ae880f752c01d62.svg',
      title: 'MCI Academy',
    },
    {
      icon: '/77051c8337b3f5d1c020aac4f87db1846fdb99bd.svg',
      title: 'Kids E-Academy',
    },
    {
      icon: '/8d2e886b5050bdaa25dbd75efba46cb24cb3b0bb.svg',
      title: 'Kids Code Academy',
    },
    {
      icon: '/aa527becc5dd1cde49b59cde5c51e0dffd0838d1.svg',
      title: 'Kids TV',
    },
    {
      icon: '/eb6b1b49a5a9a0b89f7c4662caac4c71e1659a24.svg',
      title: 'Kids Care',
    },
    {
      icon: '/96dc089c61a2a900e79a49c0aa4783555a9a0c0b.svg',
      title: 'Kids VOD',
    },
    {
      icon: '/75fcfec42e4f41c77f2ba16d3307f51954336a28.svg',
      title: 'Kids Talent',
    },
  ];

  const sections: ContentSection[] = [
    {
      title: 'MCI ACADEMY',
      image: '/ebafceaac792bd244412e8738af023337c996995.png',
      description:
        'Founded in 2020, this academy operates with the goal of bridging the gap between academic education and the labor market needs in the ICT sector. The academy offers specialized courses and bootcamps across seven schools, including Artificial Intelligence, Data Science, Telecommunications Technologies, Internet of Things, Security, Digital Business, and Personal Development. It also provides internship opportunities, the possibility of employment after completing the courses, and student events aimed at discovering and nurturing young talents, creating a suitable environment for the growth of the next generation.',
    },
    {
      title: 'KIDS E-ACADEMY',
      image: '/a324b3d9df0e5015abdc76103009e0f3d93ffbf2.png',
      description:
        'This service leverages modern educational technologies to provide interactive video content from elementary school to the university entrance exam. With comprehensive coverage of subjects, gifted student packages, and collaboration with top teachers, it paves the way for academic success. A single subscription offers affordable access to all grade levels, with a preview option available before purchase. Aino, committed to quality and educational equity, is a trusted companion for students on their learning journey.',
    },
    {
      title: 'KIDS CODE ACADEMY',
      image: '/42bd3158bde25c2f4c7df45386e33ba36da0a868.png',
      description:
        'This online platform, launched in March 2024, is designed to teach programming to children and teenagers aged 7 to 12. By combining education with interactive and creative games, it creates an engaging learning environment that requires no prior knowledge or guidance. Key features include easy web-based access, structured learning stages, and a user-friendly interface.',
    },
    {
      title: 'KIDS TV',
      image: '/8fe1ce714d38b5397fda7802c23bd57c1906d6e2.png',
      description:
        'This VOD service, designed specifically for children and teenagers, is offered through an application. With an engaging and user-friendly interface, the platform provides movies, series, and animations tailored to each age group, supported by age-based categorization and controlled access. Users with a monthly subscription can not only enjoy the content but also earn points, which can be converted into exclusive platform coins and used for purchases in the app\'s online store.',
    },
    {
      title: 'KIDS CARE',
      image: '/b5f4161a71c893eb728ae935d40e90a4fed3f7cc.png',
      description:
        'This application is a parental control program designed to safely manage mobile usage for children aged 2 to 14. With features such as app and game locking, screen time management, and providing age-appropriate entertainment content, it enables parents to securely monitor their children\'s digital activities. The app has been installed more than 330,000 times.',
    },
    {
      title: 'KIDS VOD',
      image: '/f0b1f00ccdf0e64a0d02be3958caa6de52bbe56d.png',
      description:
        'This service is a tool for making informed choices about movies and animations, providing information on violence, messages, and social issues to help users select the best options for themselves and their families. With age ratings, AI-based content analysis, recommendations for child-appropriate content, and over 40,000 intelligent reviews, it makes the viewing experience safer and more purposeful.',
    },
    {
      title: 'KIDS TALENT',
      image: '/4c69d8470f6879d70a364bc75b8b1e0fb29414e9.png',
      description:
        'The National Talent Discovery Event is part of MCI\'s event series and is held with the aim of educating and nurturing the next generation of talent in the field of digital technologies. This event is specifically designed for students in grades 7 to 12 and covers areas such as game development, artificial intelligence, the Internet of Things, cybersecurity, applied software, and data science. The first edition, focused on game development, was held in 2023 with over 12,000 participants.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Feature Cards - 2 rows: first row 3 cards, second row 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.slice(0, 3).map((feature, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.slice(3, 6).map((feature, index) => (
          <div
            key={index + 3}
            className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]"
          >
            <div className="w-10 h-10 mb-3">
              <img src={feature.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-500 text-center text-lg font-normal">{feature.title}</p>
          </div>
        ))}
      </div>
      {/* Last card spans full width */}
      <div className="flex flex-col items-center justify-center bg-neutral-100 rounded-[10px] p-6 h-[136px]">
        <div className="w-10 h-10 mb-3">
          <img src={features[6].icon} alt="" className="w-full h-full object-contain" />
        </div>
        <p className="text-gray-500 text-center text-lg font-normal">{features[6].title}</p>
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
