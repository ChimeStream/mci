'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { effects, responsive } from '@/app/styles/design-tokens';
import { useBackgroundParallax } from '@/app/hooks/useScrollParallax';
import { useAudioManager } from '@/app/hooks/useAudioManager';

/**
 * Immersive Section Component
 * Displays the immersive communication concept with giant cyan title and dot pattern background
 */
export function ImmersiveSection() {
  const { t, language } = useLanguage();
  const { ref: parallaxRef, y: patternY } = useBackgroundParallax(0.18);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { currentlyPlaying, setCurrentlyPlaying } = useAudioManager();
  const AUDIO_ID = 'immersive-section';

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
    // Handle lowercase filename for English and missing file for Russian
    if (language === 'en') return '/sound/en/immersive.mp3';
    if (language === 'ru') return '/sound/en/immersive.mp3'; // Fallback to English for Russian
    return `/sound/${folder}/Immersive.mp3`;
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

  return (
    <section
      ref={parallaxRef}
      id="immersive"
      className="relative w-full overflow-hidden px-6 md:px-10 md:pt-0 md:pb-24 md:flex md:items-center md:justify-center md:snap-start md:snap-always md:min-h-screen"
      style={{
        backgroundColor: '#FFFFFF',
        height: '855px',
      }}
    >
      {/* Dot Pattern with Parallax - On top of text */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
        style={{ y: patternY }}
      >
        <Image
          src="/d4d3676e8840ec2d53584bd9ba4b3e22ee221215.png"
          alt=""
          fill
          className="object-cover scale-[1.4] origin-center md:scale-100"
          style={{ objectPosition: '55% 42%' }}
          priority
        />
      </motion.div>

      {/* Mobile-only Pattern Overlay - Specific positioning for mobile */}
      <div className="md:hidden absolute w-full z-20 pointer-events-none" style={{ height: '698px', left: 0, top: '68px' }}>
        <Image
          src="/d4d3676e8840ec2d53584bd9ba4b3e22ee221215.png"
          alt=""
          fill
          className="object-cover"
          style={{
            objectPosition: 'center center',
          }}
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 flex w-full flex-col items-center pt-[123px] md:pt-0 md:justify-center md:items-center">
        <div className="w-full max-w-[1076px] mx-auto flex flex-col gap-8 md:gap-12 text-center md:text-left">
          {/* Header: Title + Play Button */}
          <div className="flex items-start justify-between">
            {/* Giant IMMERSIVE Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: effects.animation.slow }}
              className="relative overflow-visible flex-1 text-center font-black leading-[1.87] text-[#0288D1] md:text-left md:leading-[0.92]"
              style={{
                fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
                fontSize: 'clamp(63px, 16vw, 180px)',
                background: 'linear-gradient(270deg, #0762B7 0%, #0095DA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.immersive?.title || 'IMMERSIVE'}
            </motion.h2>

            {/* Play Button */}
            <motion.button
              type="button"
              onClick={handlePlayAudio}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-30 flex h-[38px] w-[38px] md:h-[60px] md:w-[60px] items-center justify-center rounded-full border border-[#0095DA]/40 hover:bg-[#0095DA]/10 transition-all duration-300 flex-shrink-0"
              aria-label={isPlaying ? "Pause immersive audio" : "Play immersive audio"}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="w-[20px] h-[20px] md:w-[28px] md:h-[28px]"
              >
                <circle cx="14" cy="14" r="13" stroke="#0095DA" strokeWidth="1.5" />
                {isPlaying ? (
                  <>
                    <rect x="10" y="9" width="2.5" height="10" fill="#0095DA" />
                    <rect x="15.5" y="9" width="2.5" height="10" fill="#0095DA" />
                  </>
                ) : (
                  <path d="M11 8 L19 14 L11 20 Z" fill="#0095DA" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: effects.animation.slow, delay: 0.3 }}
            className="text-[#808080] max-w-[330px] mx-auto text-justify md:max-w-full md:mx-0 md:text-[#051C3D] md:opacity-80 md:text-left"
            style={{
              fontFamily: 'var(--font-cairo), var(--font-geist-sans), sans-serif',
              fontSize: 'clamp(18px, 4vw, 18px)',
              lineHeight: 'clamp(25px, 6vw, 1.6)',
            }}
          >
            {t.immersive?.description ||
              "Our future path is built on the foundation of an immersive experience—a journey that dissolves the boundaries between the physical and digital worlds, enabling life within a rich, intelligent, and interconnected ecosystem.Immersion is being fully present in the moment, where customers don't just consume our services, they truly live. A shared journey, where no one is ever alone, and every individual becomes part of a collective and human experience.This approach elevates MCI beyond being a mere operator, transforming it into a platform for intelligent experiences—a place where education, entertainment, health, business, and communication all converge into one immersive journey."}
          </motion.p>
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
