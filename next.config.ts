import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure proper asset handling
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
