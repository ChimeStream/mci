'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { VideoPlayer } from '@/app/components/ui/VideoPlayer';
import { GlassCard } from '@/app/components/ui/GlassCard';

export function VisionMissionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <VideoPlayer
          srcDesktop="/assets/videos/vision-desktop.mp4"
          srcMobile="/assets/videos/vision-mobile.mp4"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t.vision?.title}
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                {t.vision?.description}
              </p>
            </GlassCard>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t.mission?.title}
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                {t.mission?.description}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
