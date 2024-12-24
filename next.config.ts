import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/path/to/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net', // Allows all subdomains
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
