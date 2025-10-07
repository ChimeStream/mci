'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { AudioPlayer } from '@/app/components/ui/AudioPlayer';

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t.about?.stat1,
      subtitle: t.about?.stat1sub,
      icon: '📱',
    },
    {
      title: t.about?.stat2,
      subtitle: t.about?.stat2sub,
      icon: '👥',
    },
    {
      title: t.about?.stat3,
      subtitle: t.about?.stat3sub,
      icon: '📡',
    },
    {
      title: t.about?.stat4,
      subtitle: t.about?.stat4sub,
      icon: '🚀',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#001F3F] via-[#1a237e] to-[#311b92]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.about?.title}
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl max-w-5xl mx-auto text-center mb-16 leading-relaxed"
        >
          {t.about?.description}
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <GlassCard className="text-center h-full hover:scale-105 transition-transform cursor-default">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{stat.title}</h3>
                <p className="text-white/70 text-sm">{stat.subtitle}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard>
            <AudioPlayer src="/assets/audio/about-us.mp3" />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
