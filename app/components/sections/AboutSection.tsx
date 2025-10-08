'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';

/**
 * About Section Component - Rebuilt to match Figma exactly
 * Full height section with snap scroll behavior
 */
export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t.about?.stat1 || 'The First Mobile',
      subtitle: t.about?.stat1sub || 'Operator Since 1993',
      icon: '📱',
    },
    {
      title: t.about?.stat2 || 'Serving over 100 million',
      subtitle: t.about?.stat2sub || 'subscribers',
      icon: '👥',
    },
    {
      title: t.about?.stat3 || 'Pioneer in 4G, 5G & 5.5G',
      subtitle: t.about?.stat3sub || 'networks',
      icon: '📡',
    },
    {
      title: t.about?.stat4 || 'Expanding into digital',
      subtitle: t.about?.stat4sub || 'services, VOD, smart cities, IoT & AI',
      icon: '🚀',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden snap-start snap-always"
      style={{
        backgroundColor: '#001F3F',
      }}
    >
      {/* Background Pattern - Concentric circles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-radial-gradient(
              circle at center,
              transparent 0,
              transparent 40px,
              rgba(255, 255, 255, 0.1) 40px,
              rgba(255, 255, 255, 0.1) 41px
            )`,
          }}
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px] flex flex-col justify-center h-full py-20">
        {/* Header: Title + Play Button */}
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-black text-white leading-none"
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            {t.about?.title || 'ABOUT US'}
          </motion.h2>

          {/* Play Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0 w-[50px] h-[50px] rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/10 transition-all"
            aria-label="Play about video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.7" fill="none" />
              <polygon points="10 8 16 12 10 16 10 8" fill="white" />
            </svg>
          </motion.button>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-[1076px]"
        >
          <p
            className="text-white text-sm md:text-base leading-relaxed"
            style={{
              fontFamily: 'Inter, sans-serif',
              opacity: 0.85,
              fontWeight: 400,
            }}
          >
            {t.about?.description}
          </p>
        </motion.div>

        {/* Stats Grid - 4 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Stat Card Component - Matching Figma design
 */
interface StatCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

function StatCard({ icon, title, subtitle }: StatCardProps) {
  return (
    <div
      className="h-[162px] rounded-lg border border-white/20 flex flex-col items-center justify-center text-center p-6 transition-all hover:border-white/40 hover:bg-white/5"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Icon */}
      <div className="text-3xl mb-3 opacity-70">
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-white text-sm font-medium mb-1 leading-tight"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="text-white text-xs opacity-60 leading-tight"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
