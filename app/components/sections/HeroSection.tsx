'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  // Background blur increases as you scroll
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.3], [0, 20]);

  // Text opacity fades as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Logo moves up and fades as you scroll
  const logoY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // VR person appears as you scroll
  const vrPersonY = useTransform(scrollYProgress, [0, 0.3, 0.5], [300, 0, -100]);
  const vrPersonOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 1]);
  const vrPersonScale = useTransform(scrollYProgress, [0.15, 0.3], [0.8, 1]);

  return (
    <section
      id="welcome"
      className="relative w-full min-h-[150vh] overflow-hidden bg-[#0a1628]"
    >
      {/* Background Image with scroll-based blur */}
      <motion.div
        className="sticky top-0 w-full h-screen"
        style={{
          filter: useTransform(backgroundBlur, (value) => `blur(${value}px)`),
        }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/15b444842f513a65288885724ebd0f768ee77221.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Logo - Complete MCI Logo with all components */}
        <motion.div
          className="absolute top-[56px] left-1/2 -translate-x-1/2 z-20"
          style={{ y: logoY, opacity: logoOpacity }}
        >
          <MCILogo />
        </motion.div>

        {/* Main Heading - Exact Figma CSS specifications */}
        <motion.div
          className="absolute top-[416px] left-1/2 -translate-x-1/2 w-[728px] h-[192px] z-10 flex items-center justify-center"
          style={{ opacity: textOpacity }}
        >
          <h1
            className="m-0 p-0 text-white text-center"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 900,
              lineHeight: 'normal',
              width: '100%'
            }}
          >
            WELCOME TO THE SAMPLE MESSAGE!
          </h1>
        </motion.div>

        {/* VR Person appears with scroll */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          style={{
            y: vrPersonY,
            opacity: vrPersonOpacity,
            scale: vrPersonScale,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
              alt="Person wearing VR headset"
              width={600}
              height={800}
              className="w-auto h-[600px] object-contain"
              priority
            />

            {/* Glow effect behind VR person */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
