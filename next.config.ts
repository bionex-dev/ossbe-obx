import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  experimental: { inlineCss: true },
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 85, 90] },
};

export default nextConfig;
