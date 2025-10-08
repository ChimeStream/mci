'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import Image from 'next/image';

export function VRPersonSection() {
  const { t } = useLanguage();
  const [pageLoaded, setPageLoaded] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  useEffect(() => {
    // Trigger animation after page load
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#00509E] to-[#001F3F]">
      {/* Background Text (Blurred) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: pageLoaded ? 0.3 : 0 }}
          className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold text-white blur-lg select-none text-center max-w-full px-8"
          style={{ wordBreak: 'break-word' }}
        >
          {t.hero?.title?.split(' ')[0]}
        </motion.div>
      </div>

      {/* VR Person Image */}
      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: pageLoaded ? 1 : 0,
          y: pageLoaded ? 0 : 200,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-lg px-8"
      >
        <Image
          src="/assets/images/vr-person.png"
          alt="Person wearing VR headset"
          width={600}
          height={800}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: pageLoaded ? [0.3, 0.6, 0.3] : 0,
          scale: pageLoaded ? [1, 1.2, 1] : 0.5,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
      />
    </section>
  );
}
