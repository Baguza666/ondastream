import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Next.js to generate a static 'out' folder
  output: 'export',

  // Hostinger shared hosting doesn't have a Node server to optimize images on the fly.
  // Since you already optimized your posters as WebP/AVIF, we disable the Next.js image server.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;