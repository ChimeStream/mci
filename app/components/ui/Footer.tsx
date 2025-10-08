'use client';

import React from 'react';
import { MCILogo } from '@/app/components/ui/MCILogo';

/**
 * Footer Component
 * Displays the MCI logo and copyright text at the bottom of the page
 */
export function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full h-[323px] flex flex-col items-center justify-center bg-white"
    >
      {/* MCI Logo */}
      <div className="mb-[18px]">
        <MCILogo width={70} height={28} variant="mono" />
      </div>

      {/* Copyright Text */}
      <p
        className="text-[10px] leading-[12px] text-center"
        style={{
          fontFamily: 'var(--font-lato), var(--font-geist-sans), sans-serif',
          fontWeight: 300,
          color: '#808080',
        }}
      >
        Copyright © 2025 MCI. All rights reserved.
      </p>
    </footer>
  );
}
