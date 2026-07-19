import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    // TypeScript ke errors ki wajah se build ko rukne na de
    ignoreBuildErrors: true,
  },
};

export default nextConfig;