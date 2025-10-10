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

export function B2BContent() {
  const features: FeatureCard[] = [
    {
      icon: '/bf5982c5037f1ea8501d66a5e56a96470140e0a2.svg',
      title: 'Smart Logistics',
    },
    {
      icon: '/025165056c5ad590a83dc9c22082cf5d31ccf1a0.svg',
      title: 'IOT',
    },
    {
      icon: '/902a768ee47bc1a207a4642a45e87179ce553dbe.svg',
      title: 'Connected car',
    },
    {
      icon: '/1141d47800aa7a1629b239b8deb8136a98ae4b0b.svg',
      title: 'Smart Agriculture',
    },
    {
      icon: '/17ae00f618d06133e7e8d479c0a125d22f7f40ca.svg',
      title: 'Chat BOT',
    },
    {
      icon: '/1c609aa7d82fb650dae257c5ee0825b97f7233f5.svg',
      title: 'Cloud Services',
    },
    {
      icon: '/1dbb20853c696aa1e8ec889bc60cee519b0769a1.svg',
      title: 'AI Services',
    },
    {
      icon: '/b5f824c2855d910742c0480421b99d0e8a20135a.svg',
      title: 'Smart Utility',
    },
  ];

  const sections: ContentSection[] = [
    {
      title: 'SMART LOGISTICS',
      image: '/a136e874cb12eb49c570a5ed4600e97cc6f19885.png',
      description:
        'The "Smart Logistics" service is a comprehensive, locally developed solution for real-time monitoring of the security status of containers and the country\'s transportation fleet, designed to enhance transparency, safety, and efficiency in the supply chain. This service combines smart digital seal hardware with a software platform (and a dedicated platform in the future), allowing users to manage and monitor the transportation process from origin to destination in a real-time and reliable manner.',
    },
    {
      title: 'IOT',
      image: '/a38d2de673483ca0ea113a65ec7149a530b9d0cc.png',
      description:
        'As Iran\'s leading mobile operator, MCI has built a comprehensive IoT ecosystem to empower businesses and industries with smart connectivity solutions. The platform enables seamless integration of devices, sensors, and applications, offering advanced capabilities such as data collection, real-time monitoring, analytics, and automation. With a secure and scalable infrastructure, MCI IoT supports key industries including transportation, energy, agriculture, healthcare, and smart cities—helping organizations transform operations, reduce costs, and unlock new opportunities.',
    },
    {
      title: 'CONNECTED CAR',
      image: '/a5525d648107af449304dad9866edd1fe7351dfc.png',
      description:
        'This service consists of three components: hardware, platform, and user application. Key features include real-time monitoring of vehicle status, fleet tracking, and the ability to make emergency calls for immediate assistance. The service has been developed for key stakeholders in the logistics industry, including the Customs Administration of the Islamic Republic of Iran, Economic Police, Ports and Maritime Organization, international shipping companies, and port operators.',
    },
    {
      title: 'SMART AGRICULTURE',
      image: '/85b28edb361e3d3861ddd01d7ff3689552fa69a6.png',
      description:
        'With the introduction of its Smart Agriculture service powered by IoT, MCI has taken a major step toward the digital transformation of the country\'s agriculture industry. By connecting sensors, equipment, and environmental data to an integrated platform, this service enables intelligent monitoring of soil, water, temperature, humidity, and crop health. MCI\'s Smart Agriculture helps farmers and farm managers make data-driven decisions to optimize water and resource usage, improve efficiency, and enhance product quality.',
    },
    {
      title: 'CLOUD SERVICES',
      image: '/542ae9a8d9f9ed1bd06644a71c6bc50f5000b617.png',
      description:
        'SASS is a solution aimed at managing sensitive organizational information and increasing employees\' access to data. This service is both a security and performance solution that helps organizations store any file and access them at any time and from any location, whether from desktops or mobile devices, while controlling how files are shared. Additionally, its storage capacity, flexibility, and advanced reporting and monitoring capabilities enable organizations to organize team files in a shared space or ensure accessibility across different locations using this powerful service.',
    },
    {
      title: 'AI SERVICES',
      image: '/c19b9f3f661fdab406fd477411cd31e9fa641a7e.png',
      description:
        'AI Platform is a powerful cloud service for artificial intelligence, where any machine learning model can be easily built, trained, and deployed to serve all users. Its robust cloud infrastructure provides high-speed performance at scale, eliminating the need to worry about purchasing advanced and expensive GPUs, while allowing multiple GPUs to be used simultaneously for large models. AI platforms are typically available only in certain advanced countries, where their services are costly and often restricted for Iranian users. Moreover, concerns about the security of domestic data and transferring it to foreign cloud environments pose a serious challenge. This platform addresses all three issues at once. Among the AI-based services are the Intelligent Voice Assistant (IVA), HoloBox, AI Interview, and others.',
    },
    {
      title: 'SMART UTILITY',
      image: '/49caa8def6bf5fb7d5dadc461a3fad250bb5cc38.png',
      description:
        'The Energy Management System provided by MCI includes smart meter-based consumption management, development of telecommunications infrastructure, creation and enhancement of meter-reading software, and delivery of intelligent and digital services via mobile platforms. It also offers an energy trading marketplace, platforms for data storage and consumption analysis, and awareness programs for peak demand management—among the key services and solutions offered by MCI Energy.',
    },
    {
      title: 'CHAT BOT',
      image: '/ab860c64a2dc37bc903136d763464b6a16524657.png',
      description:
        'MCI, leveraging advanced Large Language Model (LLM) technology, has developed an intelligent system that enables natural and smart interactions through text and voice. This system is offered in three formats: Chatbot: A 24/7 intelligent assistant that responds to users\' questions about Hamrah Aval\'s services and products via text and voice. Intelligent Virtual Assistant (IVA): Accessible through the number 9990, it uses ASR, NLU, and TTS technologies to provide a smooth and intelligent phone conversation experience. HoloBox: An innovative physical interface with a digital avatar that offers a more realistic, tangible, and human-like interaction with AI in public and exhibition environments.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <p
        className="text-gray-700 text-xl leading-relaxed"
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
        }}
      >
        With the aim of providing comprehensive and specialized services to businesses, MCI (Hamrah Aval) has launched its B2B services since 2017. These services are designed with a focus on the communication and digital needs of organizations, particularly in the fields of connectivity, data, cloud, and the Internet of Things.
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
