'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { colors, effects, responsive } from '@/app/styles/design-tokens';
import { CircularTimeline } from '@/app/components/ui/CircularTimeline';

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
 * Displays company timeline with 3D circular carousel
 */
export function JourneySection() {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const anglePerItem = 360 / journeyData.length;

  const handleNext = () => {
    setRotation((prev) => prev - anglePerItem);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + anglePerItem);
  };

  return (
    <div
      id="journey"
      className="relative w-full overflow-hidden py-16 md:min-h-screen md:py-24 md:snap-start md:snap-always"
      style={{
        backgroundColor: '#0B1750',
      }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Overlay - teal to navy */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,195,170,0.15) 0%, rgba(0,149,218,0.20) 50%, rgba(11,23,80,0.4) 100%)',
            mixBlendMode: 'normal',
          }}
        />

        {/* Pattern with subtle effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/1b8428e905ccc5c51f305d9af193851f394c7dcc.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 md:px-10">
        <div className="w-full max-w-[1076px] flex flex-col gap-8 md:gap-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow }}
          >
            <h2
              className="text-center font-black leading-tight md:text-left"
              style={{
                fontFamily: 'var(--font-cairo), sans-serif',
                color: '#0095DA',
                fontSize: responsive.fontSize.sectionHeading,
              }}
            >
              {t.journey?.title || 'OUR JOURNEY'}
            </h2>
          </motion.div>

          {/* Circular Timeline - Desktop */}
          <div className="relative hidden w-full md:block">
            <div className="h-[520px] lg:h-[640px] xl:h-[700px]">
              <CircularTimeline
                items={journeyData}
                radius={520}
                rotation={rotation}
                onRotationChange={setRotation}
                className="h-full"
              />
            </div>

            {/* Arrow Buttons */}
            <ArrowButton direction="prev" onClick={handlePrev} />
            <ArrowButton direction="next" onClick={handleNext} />
          </div>

          {/* Timeline List - Mobile */}
          <div className="md:hidden">
            <p
              className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#0095DA]/70"
              style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
            >
              {t.journey?.subtitle || 'Milestones'}
            </p>
            <div className="relative pl-8">
              <span className="absolute left-4 top-1 bottom-8 w-px bg-white/15" aria-hidden="true" />
              <div className="space-y-6">
                {journeyData.map((item, index) => (
                  <div key={`${item.year}-${index}`} className="relative">
                    <span
                      className="absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[#0095DA]"
                      aria-hidden="true"
                    />
                    <div
                      className="rounded-2xl bg-[#00162E]/90 p-5 shadow-xl backdrop-blur-lg"
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <div
                        className="text-2xl font-bold text-white"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {item.year}
                      </div>
                      <p
                        className="mt-2 text-sm leading-relaxed text-white/80"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
