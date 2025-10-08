'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Modal } from '@/app/components/ui/Modal';
import { effects } from '@/app/styles/design-tokens';

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
    key: 'fintech',
    title: 'Fintech',
    subtitle: 'Secure digital finance solutions',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
  {
    key: 'platforms',
    title: 'Platforms',
    subtitle: 'Education, entertainment, health, e-commerce',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
  {
    key: 'kids',
    title: 'Kids & Teen',
    subtitle: 'Safe and empowering ecosystem',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
  {
    key: 'b2b',
    title: 'B2B & B2G',
    subtitle: 'Enabling smart enterprises and government',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
  {
    key: 'sim',
    title: 'SIM Card',
    subtitle: 'Flexible communication for all needs',
    image: '/8f010138181b084db2f5163f520b46132abed3d0.png',
  },
];

/**
 * Key Services Section Component
 * Displays company services in a 2x3 grid with modal interactions
 */
export function KeyServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <div
      id="services"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#0095DA',
        padding: 0,
        margin: 0,
      }}
    >
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-10 py-24">
        <div className="w-full max-w-[1076px] flex flex-col gap-16">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="text-[75px] font-black leading-normal text-white"
            style={{
              fontFamily: 'var(--font-cairo), sans-serif',
            }}
          >
            {t.services?.title || 'KEY SERVICES'}
          </motion.h2>

          {/* Services Grid - 2 rows x 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: effects.animation.slow, delay: 0.1 * index }}
              >
                <ServiceCard
                  service={service}
                  onClick={() => setSelectedService(service.key)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={services.find(s => s.key === selectedService)?.title || ''}
        >
          <p className="text-white text-base">
            {t.services?.[selectedService]?.description}
          </p>
        </Modal>
      )}
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
      className="relative w-full h-[338px] rounded-[30px] overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        {/* Title */}
        <h3
          className="font-bold leading-tight mb-2 text-white"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '45px',
          }}
        >
          {service.title}
        </h3>

        {/* Subtitle */}
        <p
          className="font-normal leading-normal text-white"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '24px',
          }}
        >
          {service.subtitle}
        </p>
      </div>

      {/* Plus Button */}
      <button
        className="absolute top-6 right-6 w-[54px] h-[54px] rounded-full flex items-center justify-center transition-all hover:scale-110 z-20"
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
