'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Section } from '@/app/components/layout/Section';
import { Heading, Text } from '@/app/components/ui/Typography';
import { effects } from '@/app/styles/design-tokens';

/**
 * Immersive Section Component
 * Displays the immersive communication concept with giant cyan title
 */
export function ImmersiveSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="immersive"
      background="white"
      pattern="dots"
      minHeight="1024px"
      className="flex items-center"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px]">
        {/* Giant Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: effects.animation.slow }}
          className="mb-8 md:mb-12"
        >
          <Heading
            size="7xl"
            color="cyan"
            weight="black"
            className="text-[120px] md:text-[180px] leading-[0.9]"
          >
            {t.immersive?.title || 'IMMERSIVE'}
          </Heading>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: effects.animation.slow, delay: 0.3 }}
          className="max-w-[1076px]"
        >
          <Text
            size="sm"
            color="navy"
            className="md:text-base"
            opacity={0.85}
          >
            {t.immersive?.description}
          </Text>
        </motion.div>
      </div>
    </Section>
  );
}
