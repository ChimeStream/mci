'use client';

import { create } from 'zustand';

interface AudioManagerState {
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
  stopAll: () => void;
}

/**
 * Global audio manager to ensure only one audio plays at a time
 */
export const useAudioManager = create<AudioManagerState>((set) => ({
  currentlyPlaying: null,
  setCurrentlyPlaying: (id) => set({ currentlyPlaying: id }),
  stopAll: () => set({ currentlyPlaying: null }),
}));
