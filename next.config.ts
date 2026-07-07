import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "arafat-nexus-2.vercel.app",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
       {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;