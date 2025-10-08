'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  src: string;
  className?: string;
}

export function AudioPlayer({ src, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current && !hasError) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => setHasError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (hasError) {
    return null; // Hide audio player if file is missing
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white ml-1"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </motion.button>

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
        controls
        className="flex-1 h-10"
      />
    </div>
  );
}
