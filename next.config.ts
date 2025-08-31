import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  reactStrictMode:false,

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        pathname: '**', // This wildcard allows all paths from the hostname
      },
    ],
  },
};

export default nextConfig;
