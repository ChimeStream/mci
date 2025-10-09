'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { responsive } from '@/app/styles/design-tokens';

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
      className="relative flex w-full flex-col justify-start overflow-hidden pt-[76px] pb-12 md:min-h-screen md:py-24 md:snap-start md:snap-always md:justify-center"
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
      <div className="relative z-10 flex w-full flex-col items-center justify-start md:justify-center px-[27px] md:px-10">
        <div className="w-full max-w-[1076px] flex flex-col md:gap-14">
          {/* Header: Title + Play Button */}
          <div className="flex items-start justify-between mb-[40px] md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white uppercase"
              style={{
                fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
                fontSize: 'clamp(32px, 8vw, 75px)',
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
              className="flex h-[38px] w-[38px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
              aria-label="Play about video"
            >
              <Image
                src="/about/play-circle.svg"
                alt="Play about us video"
                width={28}
                height={28}
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
              />
            </motion.button>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-[80px] md:mb-0"
          >
            <p
              className="text-white/90 text-left"
              style={{
                fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(13px, 3.5vw, 16px)',
                lineHeight: 1.7,
              }}
            >
              {t.about?.description}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div
            className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-x-[11px] xl:gap-y-6"
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
      className="relative w-full overflow-hidden rounded-[18px] md:rounded-[20px] px-6 py-8 text-center transition-all duration-300 hover:bg-[#0d1e5c]"
      style={{
        backgroundColor: '#091345',
        minHeight: '162px',
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-4 md:gap-3">
        {/* Icon */}
        <div className="flex items-center justify-center">
          <Image src={iconSrc} alt={iconAlt} width={35} height={35} className="h-[35px] w-[35px]" />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-1">
          <h3
            className="text-white font-normal leading-tight"
            style={{
              fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
              fontSize: 'clamp(14px, 3.5vw, 16px)',
            }}
          >
            {title}
          </h3>

          <p
            className="text-white font-normal leading-tight"
            style={{
              fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
              fontSize: 'clamp(14px, 3.5vw, 16px)',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
