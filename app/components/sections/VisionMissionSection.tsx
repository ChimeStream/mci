'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { effects, responsive } from '@/app/styles/design-tokens';
import { useLayeredParallax } from '@/app/hooks/useScrollParallax';

/**
 * Vision & Mission Section Component
 * Displays company vision and mission with background video
 */
export function VisionMissionSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: parallaxRef, backgroundY, middleY } = useLayeredParallax();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section ref={parallaxRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center snap-start snap-always">
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
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

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Pattern Overlays with Different Parallax Speeds */}
      <motion.div
        className="pointer-events-none absolute left-[-210px] top-[-370px] h-[1940px] w-[2002px] opacity-30"
        style={{
          backgroundImage: `url('/pattern001.png')`,
          backgroundSize: 'cover',
          mixBlendMode: 'overlay',
          y: middleY,
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-[-74px] top-[1024px] h-[994px] w-[1593px] opacity-20"
        style={{
          backgroundImage: `url('/ezgif-4880d1597b211d.png')`,
          backgroundSize: 'cover',
          mixBlendMode: 'overlay',
          y: backgroundY,
        }}
      />

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
              className="mb-8 font-black text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: responsive.fontSize.sectionHeading,
                lineHeight: 1.3,
              }}
            >
              {t.vision?.title || 'OUR VISION'}
            </h2>
            <p
              className="mx-auto max-w-[1076px] text-center font-normal text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: responsive.fontSize.bodyLg,
                lineHeight: 1.6,
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
              className="mb-8 font-black text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: responsive.fontSize.sectionHeading,
                lineHeight: 1.3,
              }}
            >
              {t.mission?.title || 'OUR MISSION'}
            </h2>
            <p
              className="mx-auto max-w-[1076px] text-center font-normal text-white"
              style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: responsive.fontSize.bodyLg,
                lineHeight: 1.6,
              }}
            >
              {t.mission?.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content - Mobile (Responsive) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-6 py-20 md:hidden">
        <div className="space-y-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
            className="text-center"
          >
            <h2
              className="mb-6 font-black text-white"
              style={{ fontFamily: 'Cairo, sans-serif', fontSize: responsive.fontSize.sectionHeading, lineHeight: 1.2 }}
            >
              {t.vision?.title || 'OUR VISION'}
            </h2>
            <p
              className="text-white opacity-90"
              style={{ fontFamily: 'Cairo, sans-serif', fontSize: responsive.fontSize.bodyMd, lineHeight: 1.6 }}
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
              className="mb-6 font-black text-white"
              style={{ fontFamily: 'Cairo, sans-serif', fontSize: responsive.fontSize.sectionHeading, lineHeight: 1.2 }}
            >
              {t.mission?.title || 'OUR MISSION'}
            </h2>
            <p
              className="text-white opacity-90"
              style={{ fontFamily: 'Cairo, sans-serif', fontSize: responsive.fontSize.bodyMd, lineHeight: 1.6 }}
            >
              {t.mission?.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
