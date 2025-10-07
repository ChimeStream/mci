'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll within this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Background blur increases as you scroll
  const backgroundBlur = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Text opacity fades as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Logo moves up and fades as you scroll
  const logoY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // VR person slides UP from bottom as an overlay - comes on top
  const vrPersonY = useTransform(scrollYProgress, [0, 1], [window.innerHeight, 0]);
  const vrPersonOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const vrPersonScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative w-full h-[200vh] overflow-hidden bg-[#0a1628]"
    >
      {/* Background Image with scroll-based blur - STICKY so it stays in place */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            filter: useTransform(backgroundBlur, (value) => `blur(${value}px)`),
          }}
        >
          <Image
            src="/15b444842f513a65288885724ebd0f768ee77221.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

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

        {/* VR Person slides UP from bottom as TOP LAYER overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50"
          style={{
            y: vrPersonY,
            opacity: vrPersonOpacity,
            scale: vrPersonScale,
          }}
        >
          <div className="relative">
            <Image
              src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
              alt="Person wearing VR headset"
              width={600}
              height={800}
              className="w-auto h-[80vh] max-h-[800px] object-contain"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
