'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Section } from '@/app/components/layout/Section';
import { Heading, Text } from '@/app/components/ui/Typography';
import { Modal } from '@/app/components/ui/Modal';
import { colors, typography, effects } from '@/app/styles/design-tokens';

interface Service {
  key: string;
  icon: string;
  modalContent?: React.ReactNode;
}

const services: Service[] = [
  { key: '5g', icon: '/assets/images/services/5g.svg' },
  { key: 'fintech', icon: '/assets/images/services/fintech.svg' },
  { key: 'platforms', icon: '/assets/images/services/platforms.svg' },
  { key: 'kids', icon: '/assets/images/services/kids.svg' },
  { key: 'b2b', icon: '/assets/images/services/b2b.svg' },
  { key: 'sim', icon: '/assets/images/services/sim.svg' },
];

/**
 * Key Services Section Component
 * Displays company services with modal interactions
 */
export function KeyServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <Section
      id="services"
      background="transparent"
      minHeight="100vh"
      className="bg-gradient-to-b from-[#bbdefb] via-[#64b5f6] to-[#2196f3]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: effects.animation.slow }}
          className="text-center mb-16"
        >
          <Heading size="4xl" className="md:text-[64px] mb-4">
            {t.services?.title || 'KEY SERVICES'}
          </Heading>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: colors.neutral.white }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                title={t.services?.[service.key]?.title}
                subtitle={t.services?.[service.key]?.subtitle}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t.services?.[selectedService]?.title || ''}
        >
          <Text size="base">
            {t.services?.[selectedService]?.description}
          </Text>
        </Modal>
      )}
    </Section>
  );
}

/**
 * Service Card Component
 */
interface ServiceCardProps {
  service: Service;
  title?: string;
  subtitle?: string;
  onClick: () => void;
}

function ServiceCard({ service, title, subtitle, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="h-80 rounded-lg border flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-105 hover:shadow-xl p-6"
      style={{
        backgroundColor: colors.neutral.gray[50],
        borderColor: colors.neutral.gray[200],
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Service Icon */}
      <div className="w-32 h-32 mb-6 relative">
        <Image
          src={service.icon}
          alt={title || ''}
          fill
          className="object-contain"
        />
      </div>

      {/* Service Title */}
      <h3
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.bold,
          color: colors.neutral.white,
          lineHeight: typography.lineHeight.tight,
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h3>

      {/* Service Subtitle */}
      <p
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.normal,
          color: colors.neutral.white,
          opacity: 0.8,
          lineHeight: typography.lineHeight.snug,
          margin: 0,
        }}
      >
        {subtitle}
      </p>

      {/* Arrow Icon */}
      <svg
        className="mt-4"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.neutral.white}
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
}
