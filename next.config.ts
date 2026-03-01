import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.naomiviolin.ca',
      },
    ],
  },
};

export default nextConfig;
