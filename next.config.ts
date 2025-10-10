import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable static optimization for better asset reloading during development
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      // Disable static page generation cache in dev
      isrMemoryCacheSize: 0,
    },
  }),

  // Ensure proper asset handling
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
