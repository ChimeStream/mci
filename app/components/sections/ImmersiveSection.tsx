'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { effects } from '@/app/styles/design-tokens';

/**
 * Immersive Section Component
 * Displays the immersive communication concept with giant cyan title and dot pattern background
 */
export function ImmersiveSection() {
  const { t } = useLanguage();

  return (
    <section
      id="immersive"
      className="relative w-full min-h-[1023px] flex items-center justify-center overflow-hidden snap-start snap-always"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/d4d3676e8840ec2d53584bd9ba4b3e22ee221215.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-10 py-24">
        <div className="w-full max-w-[1076px] flex flex-col gap-8 md:gap-12">
          {/* Giant IMMERSIVE Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="relative text-[80px] font-black leading-[0.9] text-[#0288D1] md:text-[140px] lg:text-[180px] overflow-visible"
            style={{
              fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
            }}
          >
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-[18%] -left-[12%] z-20 h-[140%] w-[55%] rounded-full opacity-80"
                style={{
                  backgroundImage: 'url("/d4d3676e8840ec2d53584bd9ba4b3e22ee221215.png")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'left top',
                  mixBlendMode: 'multiply',
                  maskImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0) 100%)',
                }}
              />
              <span className="relative z-10 block">
                {t.immersive?.title || 'IMMERSIVE'}
              </span>
            </span>
          </motion.h2>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-sm leading-relaxed text-[#051C3D] opacity-80 md:text-base"
            style={{
              fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
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
