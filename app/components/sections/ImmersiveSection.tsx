'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';

export function ImmersiveSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#311b92] to-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cyan-400 mb-8">
            {t.immersive?.title}
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-800 text-lg md:text-xl max-w-5xl leading-relaxed"
        >
          {t.immersive?.description}
        </motion.p>
      </div>
    </section>
  );
}
