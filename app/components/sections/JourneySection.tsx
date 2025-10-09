'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { colors, effects, responsive } from '@/app/styles/design-tokens';
import { CircularTimeline } from '@/app/components/ui/CircularTimeline';

type JourneyMilestone = {
  year: string;
  event: string;
  cover: string;
};

const journeyData: JourneyMilestone[] = [
  {
    year: '1993',
    event: 'The launch of the Mobile Communications Project',
    cover: '/bc26f8a62236505a81d16759a699eeaa57ba5847.png',
  },
  {
    year: '1994',
    event: 'The establishment of Iran Mobile Communications Company',
    cover: '',
  },
  {
    year: '1996',
    event: 'Surpassing 60,000 subscribers',
    cover: '',
  },
  {
    year: '2000',
    event: 'Surpassing 1.4 million subscribers and covering 733 cities',
    cover: '',
  },
  {
    year: '2002',
    event: 'Introduction to SMS Service',
    cover: '',
  },
  {
    year: '2006',
    event: 'Surpassing 10 million subscribers',
    cover: '',
  },
  {
    year: '2007',
    event: 'The brand name selection of Hamrah Aval (No One Is Alone)',
    cover: '/ee1d963de6382555b36c1c5348b8cc50adaf7c24.png',
  },
  {
    year: '2010',
    event: 'Launch of GPRS Internet Service and EDGE Technology',
    cover: '',
  },
  {
    year: '2012',
    event: 'Completion of the privatization process',
    cover: '',
  },
  {
    year: '2014',
    event: 'Introduction of 3G Technology and the Launch of Third-Generation Mobile Services',
    cover: '/9b794ef5a4424664c17579386d444fa110b59f50.png',
  },
  {
    year: '2015',
    event: 'Deployment of LTE/4G technology and provision of high-speed internet services',
    cover: '',
  },
  {
    year: '2019',
    event: 'Introduction of the VoLTE service to improve the quality of voice calls over the 4G network',
    cover: '',
  },
  {
    year: '2021',
    event: 'Surpassing 70 million subscribers and becoming the largest operator in the Middle East',
    cover: '/f62fc24b5440eff874e7f6cf33985718aabfdbb6.png',
  },
  {
    year: '2022',
    event: 'The commencement of 5G testing and the launch of the first 5G sites in the country',
    cover: '',
  },
  {
    year: '2023',
    event: 'Surpassing 100 million subscribers',
    cover: '',
  },
  {
    year: '2025',
    event: 'MCI Rebranding Based on the IMMERSIVE Concept',
    cover: '/e85f3fc12577496025181fc2c8050515fda0f174.png',
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
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastScrollLeft, setLastScrollLeft] = useState(0);
  const [lastTimestamp, setLastTimestamp] = useState<number | null>(null);

  const handleNext = () => {
    setRotation((prev) => prev - anglePerItem);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + anglePerItem);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    track.setPointerCapture(event.pointerId);
    setIsPointerDown(true);
    setDragStartX(event.clientX);
    setScrollStartX(track.scrollLeft);
    setVelocity(0);
    setLastTimestamp(Date.now());
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = dragStartX - event.clientX;
    track.scrollLeft = scrollStartX + delta;
    const now = Date.now();
    const elapsed = lastTimestamp ? now - lastTimestamp : 0;
    if (elapsed > 0) {
      const currentVelocity = (track.scrollLeft - lastScrollLeft) / elapsed;
      setVelocity(currentVelocity);
      setLastTimestamp(now);
      setLastScrollLeft(track.scrollLeft);
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    track.releasePointerCapture(event.pointerId);
    setIsPointerDown(false);
    const momentumDistance = velocity * 200;
    const targetScroll = track.scrollLeft + momentumDistance;
    const scrollOptions: ScrollToOptions = {
      left: targetScroll,
      behavior: 'smooth',
    };
    track.scrollTo(scrollOptions);
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
            background:
              'linear-gradient(180deg, rgba(0,195,170,0.15) 0%, rgba(0,149,218,0.20) 50%, rgba(11,23,80,0.4) 100%)',
            mixBlendMode: 'normal',
          }}
        />

        {/* Pattern with subtle effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(/1b8428e905ccc5c51f305d9af193851f394c7dcc.png)',
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
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B1750] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B1750] to-transparent" />
              <div
                ref={trackRef}
                role="list"
                aria-roledescription="timeline"
                aria-label="Company milestones"
                className="flex gap-5 overflow-x-auto pb-6 pl-4 pr-4 [-ms-overflow-style:'none'] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ WebkitOverflowScrolling: 'touch' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={(event) => {
                  if (!isPointerDown) return;
                  handlePointerUp(event);
                }}
              >
                {journeyData.map((item, index) => (
                  <div
                    key={`${item.year}-${index}`}
                    ref={(ref) => {
                      cardRefs.current[index] = ref;
                    }}
                    role="listitem"
                    aria-label={`${item.year}: ${item.event}`}
                    className="relative flex shrink-0 snap-center cursor-pointer select-none overflow-hidden rounded-[30px] transition-transform duration-300 hover:scale-105"
                    style={{
                      width: 'calc(100vw - 3rem)',
                      maxWidth: '400px',
                      height: '70vh',
                      minHeight: '500px',
                      maxHeight: '600px',
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item.cover})`,
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
                          fontSize: '48px',
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
                          fontSize: '16px',
                          color: 'white',
                        }}
                      >
                        {item.event}
                      </p>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-x-6 bottom-5 h-16 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(0,118,255,0.35) 0%, rgba(0,118,255,0) 70%)',
                        filter: 'blur(12px)',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Previous milestone"
                  style={{
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  {journeyData.map((_, indicatorIndex) => (
                    <span
                      key={`indicator-${indicatorIndex}`}
                      className="h-2 w-5 rounded-full bg-white/20 transition-colors"
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Next milestone"
                  style={{
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
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
