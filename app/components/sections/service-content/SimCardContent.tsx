'use client';

import React from 'react';

interface SimCardType {
  title: string;
  description: string;
}

export function SimCardContent() {
  const simCardTypes: SimCardType[] = [
    {
      title: 'Postpaid SIM',
      description:
        'Ideal for those seeking reliable communication, exclusive services, and long-term credit. With this option, customers benefit from special features, affordable tariffs, and comprehensive support.',
    },
    {
      title: 'Prepaid SIM',
      description:
        'A flexible choice for users who value cost management. With easy top-up options and a wide variety of internet and voice packages, this SIM gives customers more freedom and control over their usage.',
    },
    {
      title: 'Data SIM',
      description:
        'Designed for users who prioritize internet access. Supporting high-speed 4G and 5G connectivity, this SIM is the perfect option for those who always want to stay online.',
    },
    {
      title: 'Teen SIM',
      description:
        'Created for the next generation, offering a safe and supervised environment for communication and access to healthy content. Parents can ensure a secure and reliable experience for their children.',
    },
    {
      title: 'Tourist SIM',
      description:
        'Designed for travelers and international visitors, providing fast and affordable access to internet and communication services in Iran.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        MCI offers a diverse range of SIM cards, designed to meet the needs of different generations. From professional data users and high-speed internet seekers to families and even businesses, everyone can find a smart choice tailored to their lifestyle and requirements.
      </p>

      {/* Types Section */}
      <div className="space-y-6">
        <h3
          className="text-gray-600 font-bold text-2xl"
          style={{
            fontFamily: 'var(--font-cairo), sans-serif',
          }}
        >
          Types of MCI SIM Cards:
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
