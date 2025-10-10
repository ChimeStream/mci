'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { effects, responsive } from '@/app/styles/design-tokens';
import { useBackgroundParallax } from '@/app/hooks/useScrollParallax';

/**
 * Immersive Section Component
 * Displays the immersive communication concept with giant cyan title and dot pattern background
 */
export function ImmersiveSection() {
  const { t } = useLanguage();
  const { ref: parallaxRef, y: patternY } = useBackgroundParallax(0.18);

  return (
    <section
      ref={parallaxRef}
      id="immersive"
      className="relative w-full min-h-screen overflow-hidden px-6 pt-32 pb-10 md:px-10 md:pt-0 md:pb-24 md:flex md:items-center md:justify-center md:snap-start md:snap-always"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Dot Pattern with Parallax - On top of text */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        style={{ y: patternY }}
      >
        <Image
          src="/d4d3676e8840ec2d53584bd9ba4b3e22ee221215.png"
          alt=""
          fill
          className="object-cover scale-[1.4] origin-center md:scale-100"
          style={{ objectPosition: '55% 42%' }}
          priority
        />
      </motion.div>

      {/* Content Container - Centered */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center md:items-center">
        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-8 md:gap-12 text-center md:text-left">
          {/* Giant IMMERSIVE Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="relative overflow-visible text-center font-black leading-[0.92] text-[#0288D1] md:text-left"
            style={{
              fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
              fontSize: responsive.fontSize.displayLarge,
            }}
          >
            {t.immersive?.title || 'IMMERSIVE'}
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-[#051C3D] opacity-80"
            style={{
              fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
              fontSize: responsive.fontSize.bodyMd,
              lineHeight: 1.6,
            }}
          >
            {t.immersive?.description ||
              "Our future path is built on the foundation of an immersive experience—a journey that dissolves the boundaries between the physical and digital worlds, enabling life within a rich, intelligent, and interconnected ecosystem.Immersion is being fully present in the moment, where customers don't just consume our services, they truly live. A shared journey, where no one is ever alone, and every individual becomes part of a collective and human experience.This approach elevates MCI beyond being a mere operator, transforming it into a platform for intelligent experiences—a place where education, entertainment, health, business, and communication all converge into one immersive journey."}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
