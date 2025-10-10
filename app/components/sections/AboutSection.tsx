'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { useBackgroundParallax } from '@/app/hooks/useScrollParallax';
import { useAudioManager } from '@/app/hooks/useAudioManager';

/**
 * About Section Component - Rebuilt to match Figma exactly
 * Full height section with snap scroll behavior
 */
export function AboutSection() {
  const { t, language } = useLanguage();
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { ref: parallaxRef, y: backgroundY } = useBackgroundParallax(0.5);
  const { currentlyPlaying, setCurrentlyPlaying } = useAudioManager();
  const AUDIO_ID = 'about-section';

  // Map language code to sound folder name
  const getLanguageFolder = (lang: string) => {
    const folderMap: { [key: string]: string } = {
      'en': 'en',
      'es': 'sp', // Spanish folder is named 'sp'
      'ru': 'ru',
      'ar': 'ar',
    };
    return folderMap[lang] || 'en';
  };

  // Get language-specific audio path
  const getAudioPath = () => {
    const folder = getLanguageFolder(language);
    // Handle lowercase filename for English
    const fileName = language === 'en' ? 'about.mp3' : 'About.mp3';
    return `/sound/${folder}/${fileName}`;
  };

  // Stop this audio if another one starts playing
  React.useEffect(() => {
    if (currentlyPlaying && currentlyPlaying !== AUDIO_ID && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, isPlaying]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentlyPlaying(AUDIO_ID);
      }
    }
  };

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
      ref={parallaxRef}
      id="about"
      className="relative w-full overflow-hidden md:min-h-screen md:snap-start md:snap-always"
      style={{
        backgroundColor: '#0B1750',
      }}
    >
      {/* Background Pattern with Parallax and Rotation */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full flex items-center justify-center overflow-visible"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="relative w-[200%] h-[200%]">
            <Image
              src="/about/pattern.svg"
              alt=""
              fill
              priority
              sizes="200vw"
              className="object-contain opacity-40 mix-blend-screen"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Padding Container */}
      <div className="relative z-10 w-full px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16 lg:py-32">
        {/* Max-width Content Wrapper */}
        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-6 md:gap-14">
          {/* Header: Title + Play Button */}
          <div className="flex items-start justify-between">
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
              onClick={handlePlayAudio}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex h-[38px] w-[38px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
              aria-label={isPlaying ? "Pause about audio" : "Play about audio"}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
              >
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
                {isPlaying ? (
                  <>
                    <rect x="10" y="9" width="2.5" height="10" fill="white" />
                    <rect x="15.5" y="9" width="2.5" height="10" fill="white" />
                  </>
                ) : (
                  <path d="M11 8 L19 14 L11 20 Z" fill="white" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            className="flex flex-col gap-[10px] sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-x-[11px] xl:gap-y-6"
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

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={getAudioPath()}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
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
      className="relative w-full overflow-hidden rounded-[18px] md:rounded-[20px] px-6 py-8 transition-all duration-300 hover:bg-[#0d1e5c] flex items-center justify-center"
      style={{
        backgroundColor: '#091345',
        height: '180px',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4 md:gap-3 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center">
          <Image src={iconSrc} alt={iconAlt} width={35} height={35} className="h-[35px] w-[35px]" />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-1 items-center">
          <h3
            className="text-white font-normal leading-tight text-center"
            style={{
              fontFamily: "var(--font-cairo), var(--font-geist-sans), sans-serif",
              fontSize: 'clamp(14px, 3.5vw, 16px)',
            }}
          >
            {title}
          </h3>

          <p
            className="text-white font-normal leading-tight text-center"
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
