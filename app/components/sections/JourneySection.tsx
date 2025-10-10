'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { colors, effects, responsive } from '@/app/styles/design-tokens';
import { CircularTimeline } from '@/app/components/ui/CircularTimeline';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBackgroundParallax } from '@/app/hooks/useScrollParallax';

type JourneyMilestone = {
  year: string;
  event: string;
  cover: string;
};

const journeyData: JourneyMilestone[] = [
  {
    year: '1993',
    event: 'The launch of the Mobile Communications Project',
    cover: '/assets/images/1993.svg',
  },
  {
    year: '1994',
    event: 'The establishment of Iran Mobile Communications Company',
    cover: '/assets/images/1994.svg',
  },
  {
    year: '1996',
    event: 'Surpassing 60,000 subscribers',
    cover: '/assets/images/1996.svg',
  },
  {
    year: '2000',
    event: 'Surpassing 1.4 million subscribers and covering 733 cities',
    cover: '/assets/images/2000.svg',
  },
  {
    year: '2002',
    event: 'Introduction to SMS Service',
    cover: '/assets/images/2002.svg',
  },
  {
    year: '2006',
    event: 'Surpassing 10 million subscribers',
    cover: '/assets/images/2006.svg',
  },
  {
    year: '2007',
    event: 'The brand name selection of Hamrah Aval (No One Is Alone)',
    cover: '/assets/images/2007.svg',
  },
  {
    year: '2010',
    event: 'Launch of GPRS Internet Service and EDGE Technology',
    cover: '/assets/images/2010.svg',
  },
  {
    year: '2012',
    event: 'Completion of the privatization process',
    cover: '/assets/images/2012.svg',
  },
  {
    year: '2014',
    event: 'Introduction of 3G Technology and the Launch of Third-Generation Mobile Services',
    cover: '/assets/images/2014.svg',
  },
  {
    year: '2015',
    event: 'Deployment of LTE/4G technology and provision of high-speed internet services',
    cover: '/assets/images/2015.svg',
  },
  {
    year: '2019',
    event: 'Introduction of the VoLTE service to improve the quality of voice calls over the 4G network',
    cover: '/assets/images/2019.svg',
  },
  {
    year: '2021',
    event: 'Surpassing 70 million subscribers and becoming the largest operator in the Middle East',
    cover: '/assets/images/2021.svg',
  },
  {
    year: '2022',
    event: 'The commencement of 5G testing and the launch of the first 5G sites in the country',
    cover: '/assets/images/2022.svg',
  },
  {
    year: '2023',
    event: 'Surpassing 100 million subscribers',
    cover: '/assets/images/2023.svg',
  },
  {
    year: '2025',
    event: 'MCI Rebranding Based on the IMMERSIVE Concept',
    cover: '/assets/images/2025.svg',
  },
];

/**
 * Journey Section Component
 * Displays company timeline with 3D circular carousel
 */
export function JourneySection() {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const anglePerItem = 360 / journeyData.length;
  const { ref: parallaxRef, y: patternY } = useBackgroundParallax(0.3);

  // Get translated milestone for a year
  const getTranslatedMilestone = (year: string, defaultText: string) => {
    return t.journey?.milestones?.[year] || defaultText;
  };

  const handleNext = () => {
    setRotation((prev) => prev - anglePerItem);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + anglePerItem);
  };

  return (
    <div
      ref={parallaxRef}
      id="journey"
      className="relative w-full min-h-screen overflow-hidden px-6 pt-10 pb-16 md:px-10 md:py-24 md:snap-start md:snap-always"
      style={{
        backgroundColor: '#0B1750',
      }}
    >
      {/* Background Layers - Matching Figma structure */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Dark Navy Base (Rectangle 2) */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0B1750' }} />

        {/* Layer 2: White to Cyan Gradient (Rectangle 15) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #0095DA 100%)',
          }}
        />

        {/* Layer 3: Pattern with plus-lighter blend mode (mci-main-pattern 1) */}
        <motion.div
          className="absolute"
          style={{
            width: '3121px',
            height: '3024px',
            left: '-722px',
            top: '-553px',
            backgroundImage:
              'url(/1b8428e905ccc5c51f305d9af193851f394c7dcc.png)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'plus-lighter',
            opacity: 0.15,
            y: patternY,
          }}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-start md:justify-center">
        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-8 md:gap-12">
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
                items={journeyData.map(item => ({
                  ...item,
                  event: getTranslatedMilestone(item.year, item.event)
                }))}
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

          {/* Timeline Carousel - Mobile */}
          <div className="md:hidden">
            <MobileJourneyCarousel
              items={journeyData.map(item => ({
                ...item,
                event: getTranslatedMilestone(item.year, item.event)
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile Journey Carousel Component
 */
interface MobileJourneyCarouselProps {
  items: JourneyMilestone[];
}

function MobileJourneyCarousel({ items }: MobileJourneyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Carousel Wrapper with 3D perspective */}
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
          {items.map((item, index) => {
            const offset = index - currentIndex;
            const total = items.length;
            let pos = (offset + total) % total;
            if (pos > Math.floor(total / 2)) {
              pos = pos - total;
            }

            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;

            return (
              <div
                key={`${item.year}-${index}`}
                className={cn(
                  'absolute transition-all duration-500 ease-in-out',
                  'flex items-center justify-center'
                )}
                style={{
                  width: 'min(280px, calc(100vw - 6rem))',
                  height: '450px',
                  transform: `
                    translateX(${pos * 50}%)
                    scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                    rotateY(${pos * -10}deg)
                  `,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                  filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                  visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-2xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: item.cover ? `url(${item.cover})` : 'none',
                      backgroundColor: item.cover ? 'transparent' : '#00162E',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00162E]/95" />

                  {/* Year - Fixed at top */}
                  <div className="absolute top-8 left-6 right-6 z-10">
                    <div
                      className="font-bold leading-tight"
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '42px',
                        color: 'white',
                      }}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Event - Fixed at bottom */}
                  <div className="absolute bottom-8 left-6 right-6 z-10">
                    <p
                      className="font-normal leading-relaxed"
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: '14px',
                        color: 'white',
                      }}
                    >
                      {item.event}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <div
                    className="pointer-events-none absolute inset-x-6 bottom-5 h-16 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle at center, rgba(0,118,255,0.35) 0%, rgba(0,118,255,0) 70%)',
                      filter: 'blur(12px)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20"
          aria-label="Previous milestone"
          style={{
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20"
          aria-label="Next milestone"
          style={{
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, indicatorIndex) => (
          <button
            key={`indicator-${indicatorIndex}`}
            onClick={() => setCurrentIndex(indicatorIndex)}
            className={cn(
              'h-2 rounded-full transition-all',
              currentIndex === indicatorIndex
                ? 'w-8 bg-white/80'
                : 'w-2 bg-white/20 hover:bg-white/40'
            )}
            aria-label={`Go to milestone ${indicatorIndex + 1}`}
          />
        ))}
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
