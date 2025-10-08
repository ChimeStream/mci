'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Section } from '@/app/components/layout/Section';
import { Heading, Text } from '@/app/components/ui/Typography';
import { colors, typography, spacing, effects } from '@/app/styles/design-tokens';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const journeyData = [
  { year: '2014', event: 'The establishment of Iran Mobile Communications Company' },
  { year: '2015', event: 'Launch of 4G LTE network' },
  { year: '2016', event: 'Expansion into digital services' },
  { year: '2017', event: 'Introduction of e-learning platforms' },
  { year: '2018', event: 'Launch of fintech solutions' },
  { year: '2019', event: 'Development of smart city initiatives' },
  { year: '2020', event: 'COVID-19 response: Remote services expansion' },
  { year: '2021', event: '5G network pilot program' },
  { year: '2022', event: 'IoT platform launch' },
  { year: '2023', event: 'AI and machine learning integration' },
  { year: '2024', event: '5.5G network deployment' },
  { year: '2025', event: 'Immersive communication ecosystem' },
];

/**
 * Journey Section Component
 * Displays company timeline with horizontal carousel
 */
export function JourneySection() {
  const { t } = useLanguage();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Section
      id="journey"
      background="navy"
      minHeight="auto"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[182px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: effects.animation.slow }}
          className="mb-12"
        >
          <Heading size="4xl" className="md:text-[64px]">
            {t.journey?.title || 'OUR JOURNEY'}
          </Heading>
        </motion.div>

        {/* Timeline Carousel */}
        <div className="relative px-12">
          <Slider ref={sliderRef} {...settings}>
            {journeyData.map((item, index) => (
              <div key={index} className="px-3">
                <TimelineCard year={item.year} event={item.event} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
}

/**
 * Timeline Card Component
 */
interface TimelineCardProps {
  year: string;
  event: string;
}

function TimelineCard({ year, event }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: effects.animation.slow }}
      className="rounded-lg border p-6 h-[200px] flex flex-col justify-between transition-all hover:scale-105"
      style={{
        borderColor: colors.neutral.gray[200],
        backgroundColor: colors.neutral.gray[50],
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Year */}
      <div
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['3xl'],
          fontWeight: typography.fontWeight.black,
          color: colors.accent.cyan,
          lineHeight: typography.lineHeight.tight,
        }}
      >
        "{year}"
      </div>

      {/* Event */}
      <p
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.normal,
          color: colors.neutral.white,
          opacity: 0.85,
          lineHeight: typography.lineHeight.snug,
          margin: 0,
        }}
      >
        {event}
      </p>
    </motion.div>
  );
}

/**
 * Arrow Button Component
 */
interface ArrowButtonProps {
  onClick?: () => void;
  direction: 'prev' | 'next';
}

function ArrowButton({ onClick, direction }: ArrowButtonProps) {
  const isNext = direction === 'next';
  const position = isNext ? 'right-4' : 'left-4';

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110`}
      style={{
        backgroundColor: colors.neutral.gray[100],
        backdropFilter: 'blur(10px)',
      }}
      aria-label={isNext ? 'Next slide' : 'Previous slide'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.neutral.white}
        strokeWidth="2"
      >
        <polyline points={isNext ? '9 18 15 12 9 6' : '15 18 9 12 15 6'} />
      </svg>
    </button>
  );
}
