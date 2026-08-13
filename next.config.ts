import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 420, 440, 640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 170, 244, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
