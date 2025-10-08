'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { effects } from '@/app/styles/design-tokens';

/**
 * Vision & Mission Section Component
 * Displays company vision and mission with background video
 */
export function VisionMissionSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center snap-start snap-always">
      {/* Background Video */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        >
          <source src="/h-video.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        >
          <source src="/v-video.mp4" type="video/mp4" />
        </video>

        {/* Pattern Overlay 1 */}
        <div
          className="pointer-events-none absolute left-[-210px] top-[-370px] h-[1940px] w-[2002px] opacity-30"
          style={{
            backgroundImage: `url('/pattern001.png')`,
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Pattern Overlay 2 */}
        <div
          className="pointer-events-none absolute left-[-74px] top-[1024px] h-[994px] w-[1593px] opacity-20"
          style={{
            backgroundImage: `url('/ezgif-4880d1597b211d.png')`,
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Desktop */}
      <div className="relative z-10 hidden w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px] md:block">
        <div className="flex flex-col items-center space-y-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="text-center"
          >
            <h2
              className="mb-8 text-[75px] font-black leading-[141px] text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t.vision?.title || 'OUR VISION'}
            </h2>
            <p
              className="mx-auto max-w-[1076px] text-center text-[25px] font-normal leading-[25px] text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t.vision?.description}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-center"
          >
            <h2
              className="mb-8 text-[75px] font-black leading-[141px] text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t.mission?.title || 'OUR MISSION'}
            </h2>
            <p
              className="mx-auto max-w-[1076px] text-center text-[25px] font-normal leading-[30px] text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t.mission?.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content - Mobile (Responsive) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-20 min-h-screen flex items-center md:hidden">
        <div className="space-y-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-black text-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {t.vision?.title || 'OUR VISION'}
            </h2>
            <p className="text-lg text-white opacity-90" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {t.vision?.description}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="mb-6 text-4xl font-black text-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {t.mission?.title || 'OUR MISSION'}
            </h2>
            <p className="text-lg text-white opacity-90" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {t.mission?.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
