'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useLanguage } from '@/app/hooks/useLanguage';
import { GlassCard } from '@/app/components/ui/GlassCard';
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

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center"
      aria-label="Next slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center justify-center"
      aria-label="Previous slide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
}

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-20 px-4 md:px-8 bg-gradient-to-b from-white via-[#e3f2fd] to-[#bbdefb]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-600 mb-4">
            {t.journey?.title}
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-hidden w-full"
          style={{ margin: '0 auto' }}
        >
          <Slider ref={sliderRef} {...settings}>
            {journeyData.map((item, index) => (
              <div key={index} className="px-3">
                <GlassCard className="h-64 flex flex-col items-center justify-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-5xl font-bold text-cyan-600 mb-4">
                      {item.year}
                    </div>
                    <p className="text-gray-800 text-lg font-medium px-4">
                      {item.event}
                    </p>
                  </motion.div>
                </GlassCard>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
