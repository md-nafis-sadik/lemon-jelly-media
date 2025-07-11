import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  // Add these:
  output: "standalone", // Recommended for Vercel
  trailingSlash: false, // Match Vercel's default
};

export default nextConfig;