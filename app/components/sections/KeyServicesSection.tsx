'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { Modal } from '@/app/components/ui/Modal';
import Image from 'next/image';

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

export function KeyServicesSection() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#bbdefb] via-[#64b5f6] to-[#2196f3]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.services?.title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <GlassCard
                className="h-80 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedService(service.key)}
              >
                {/* Service Icon/Image */}
                <div className="w-32 h-32 mb-6 relative">
                  <Image
                    src={service.icon}
                    alt={t.services?.[service.key]?.title || ''}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t.services?.[service.key]?.title}
                </h3>

                {/* Service Subtitle */}
                <p className="text-white/80 text-sm px-4">
                  {t.services?.[service.key]?.subtitle}
                </p>

                {/* Plus Icon */}
                <div className="mt-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selectedService !== null}
        onClose={closeModal}
        title={selectedService ? t.services?.[selectedService]?.title : ''}
      >
        {selectedService && (
          <ServiceModalContent serviceKey={selectedService} />
        )}
      </Modal>
    </section>
  );
}

function ServiceModalContent({ serviceKey }: { serviceKey: string }) {
  // Placeholder content - will be populated with actual content later
  return (
    <div className="space-y-6">
      <p className="text-white/90 text-lg">
        Detailed content for {serviceKey} will be added here based on the specific requirements
        provided by the client.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Feature 1</h3>
          <p className="text-white/80">Description of feature 1</p>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Feature 2</h3>
          <p className="text-white/80">Description of feature 2</p>
        </GlassCard>
      </div>
    </div>
  );
}
