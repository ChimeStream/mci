'use client';

import React from 'react';
import Image from 'next/image';
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
      iconSrc: '/about/icon-one.svg',
      iconAlt: 'Badge icon showing number one',
    },
    {
      title: t.about?.stat2 || 'Serving over 100 million',
      subtitle: t.about?.stat2sub || 'subscribers',
      iconSrc: '/about/icon-groups.svg',
      iconAlt: 'Icon representing subscribers',
    },
    {
      title: t.about?.stat3 || 'Pioneer in 4G, 5G & 5.5G',
      subtitle: t.about?.stat3sub || 'networks',
      iconSrc: '/about/icon-rocket.svg',
      iconAlt: 'Rocket launch icon representing network leadership',
    },
    {
      title: t.about?.stat4 || 'Expanding into digital',
      subtitle: t.about?.stat4sub || 'services, VOD, smart cities, IoT & AI',
      iconSrc: '/about/icon-moving.svg',
      iconAlt: 'Arrow motion icon representing expansion',
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always"
      style={{
        backgroundColor: '#0B1750',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/about/pattern.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-screen"
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-10 py-24">
        <div className="w-full max-w-[1076px] flex flex-col gap-12">
          {/* Header: Title + Play Button */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-white uppercase sm:text-left"
              style={{
                fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
                fontSize: 'clamp(48px, 6vw, 75px)',
                fontWeight: 900,
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
              }}
            >
              {t.about?.title || 'ABOUT US'}
            </motion.h2>

            {/* Play Button */}
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
              aria-label="Play about video"
            >
              <Image
                src="/about/play-circle.svg"
                alt="Play about us video"
                width={28}
                height={28}
                className="w-[28px] h-[28px]"
              />
            </motion.button>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <p
              className="text-white/80 text-sm md:text-base leading-[25px]"
              style={{
                fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
                fontWeight: 400,
              }}
            >
              {t.about?.description}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div
            className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-x-[11px] xl:gap-y-6 place-items-center xl:place-items-stretch"
          >
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
      </div>
    </section>
  );
}

/**
 * Stat Card Component - Matching Figma design
 */
interface StatCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  subtitle: string;
}

function StatCard({ iconSrc, iconAlt, title, subtitle }: StatCardProps) {
  return (
    <div
      className="relative w-full max-w-[320px] sm:max-w-none xl:w-[260px] h-[162px] overflow-hidden rounded-[10px] border border-white/20 bg-white/5 px-6 py-8 text-center transition-all duration-300 hover:border-white/40 hover:bg-white/10"
      style={{
        backdropFilter: 'blur(18px)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(120% 120% at 50% 0%, rgba(0, 149, 218, 0.35) 0%, rgba(11, 23, 80, 0.05) 65%)',
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
        {/* Icon */}
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/10">
          <Image src={iconSrc} alt={iconAlt} width={35} height={35} className="h-[35px] w-[35px]" />
        </div>

        {/* Title */}
        <h3
          className="text-white text-sm font-semibold leading-tight"
          style={{
            fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          className="text-white/70 text-xs leading-tight"
          style={{
            fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
