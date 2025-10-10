'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { ServiceModal } from '@/app/components/ui/ServiceModal';
import { FintechContent } from '@/app/components/sections/service-content/FintechContent';
import { PlatformsContent } from '@/app/components/sections/service-content/PlatformsContent';
import { KidsContent } from '@/app/components/sections/service-content/KidsContent';
import { FiveGContent } from '@/app/components/sections/service-content/FiveGContent';
import { SimCardContent } from '@/app/components/sections/service-content/SimCardContent';
import { B2BContent } from '@/app/components/sections/service-content/B2BContent';
import { effects, responsive } from '@/app/styles/design-tokens';
import { useScrollParallax } from '@/app/hooks/useScrollParallax';

interface Service {
  key: string;
  title: string;
  subtitle: string;
  image: string;
}

const services: Service[] = [
  {
    key: '5g',
    title: '5.5G',
    subtitle: 'Future-ready connectivity',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
  {
    key: 'platforms',
    title: 'Platforms',
    subtitle: 'Education, entertainment, health, e-commerce',
    image: '/ec0c2c452948fa5c55147147f79ed7675a92cb7b.png',
  },
  {
    key: 'b2b',
    title: 'B2B & B2G',
    subtitle: 'Enabling smart enterprises and government',
    image: '/395a9d2647885796c36b125b499067e9d397fca7.png',
  },
  {
    key: 'fintech',
    title: 'Fintech',
    subtitle: 'Secure digital finance solutions',
    image: '/67b50ed6f89217113e61400ed34b0a038e69ef2c.png',
  },
  {
    key: 'kids',
    title: 'Kids & Teen',
    subtitle: 'Safe and empowering ecosystem',
    image: '/c950957124d3b8206039e9938d5c0b48882504a5.png',
  },
  {
    key: 'sim',
    title: 'SIM Card',
    subtitle: 'Flexible communication for all needs',
    image: '/bdaef04009e34446e981b2685592255c4b8afe59.png',
  },
];

/**
 * Key Services Section Component
 * Displays company services in a 2x3 grid with modal interactions
 */
export function KeyServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { ref: parallaxRef, y: cardY } = useScrollParallax({ offset: 80, speed: 0.6 });

  const closeModal = () => setSelectedService(null);

  const handlePlayClick = () => {
    // TODO: Implement video play functionality
    console.log('Play video for:', selectedService);
  };

  // Get translated service data
  const getTranslatedService = (service: Service) => ({
    ...service,
    title: t.services?.[service.key]?.title || service.title,
    subtitle: t.services?.[service.key]?.subtitle || service.subtitle,
  });

  return (
    <div
      ref={parallaxRef}
      id="services"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#0095DA',
      }}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start px-6 pt-20 pb-20 sm:px-8 sm:pt-24 sm:pb-24 md:px-12 md:py-24 md:justify-center">
        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-16">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="font-black leading-tight text-white text-center md:text-left"
            style={{
              fontFamily: 'var(--font-cairo), sans-serif',
              fontSize: responsive.fontSize.sectionHeading,
            }}
          >
            {t.services?.title || 'KEY SERVICES'}
          </motion.h2>

          {/* Services Grid - 2 rows x 3 columns with Parallax */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: effects.animation.slow, delay: 0.1 * index }}
                style={{ y: cardY }}
              >
                <ServiceCard
                  service={getTranslatedService(service)}
                  onClick={() => setSelectedService(service.key)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (() => {
        const service = services.find(s => s.key === selectedService);
        const translatedService = service ? getTranslatedService(service) : null;
        return (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={translatedService?.title || ''}
          subtitle={translatedService?.subtitle || ''}
          showPlayButton={selectedService === 'fintech' || selectedService === 'platforms' || selectedService === 'kids' || selectedService === 'sim' || selectedService === 'b2b'}
          onPlayClick={handlePlayClick}
        >
          {selectedService === 'fintech' ? (
            <FintechContent />
          ) : selectedService === 'platforms' ? (
            <PlatformsContent />
          ) : selectedService === 'kids' ? (
            <KidsContent />
          ) : selectedService === '5g' ? (
            <FiveGContent />
          ) : selectedService === 'sim' ? (
            <SimCardContent />
          ) : selectedService === 'b2b' ? (
            <B2BContent />
          ) : (
            <p className="text-gray-700 text-base leading-relaxed">
              {t.services?.[selectedService]?.description || 'Content will be added here.'}
            </p>
          )}
        </ServiceModal>
        );
      })()}
    </div>
  );
}

/**
 * Service Card Component
 */
interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative flex w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[30px] transition-all hover:scale-[1.03] hover:shadow-2xl"
      style={{ height: 'clamp(320px, 60vw, 338px)' }}
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 118, 255, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)',
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col">
        {/* Title */}
        <h3
          className="mb-2 font-bold leading-tight text-white whitespace-nowrap"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: responsive.fontSize.serviceTitle,
            lineHeight: 1.05,
          }}
        >
          {service.title}
        </h3>

        {/* Subtitle */}
        <p
          className="font-normal leading-normal text-white"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: responsive.fontSize.serviceSubtitle,
            lineHeight: 1.4,
            minHeight: '3.5em', // Ensures consistent subtitle area height
          }}
        >
          {service.subtitle}
        </p>
      </div>

      {/* Plus Button */}
      <button
        className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-110 md:top-6 md:right-6 md:h-[54px] md:w-[54px]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
        }}
        aria-label={`Learn more about ${service.title}`}
      >
        <span className="text-white text-[30px] font-normal leading-none">+</span>
      </button>
    </div>
  );
}
