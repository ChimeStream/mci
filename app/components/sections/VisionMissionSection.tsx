'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Heading, Text } from '@/app/components/ui/Typography';
import { effects } from '@/app/styles/design-tokens';

/**
 * Vision & Mission Section Component
 * Displays company vision and mission with background image
 */
export function VisionMissionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[994px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/ezgif-4880d1597b211d.jpg')`,
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px] py-20">
        <div className="space-y-16 md:space-y-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="text-center max-w-[1076px] mx-auto"
          >
            <Heading size="4xl" className="md:text-[64px] mb-6">
              {t.vision?.title || 'OUR VISION'}
            </Heading>
            <Text size="sm" className="md:text-base" opacity={0.9}>
              {t.vision?.description}
            </Text>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-center max-w-[1076px] mx-auto"
          >
            <Heading size="4xl" className="md:text-[64px] mb-6">
              {t.mission?.title || 'OUR MISSION'}
            </Heading>
            <Text size="sm" className="md:text-base" opacity={0.9}>
              {t.mission?.description}
            </Text>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
