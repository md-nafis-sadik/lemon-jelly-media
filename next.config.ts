import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Disables Image Optimization API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
      },
    ],
  },
};

export default nextConfig;