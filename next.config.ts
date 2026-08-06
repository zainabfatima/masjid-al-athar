import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel Node runtime (needed for /api/contact SMTP).
  // For a pure static GoDaddy upload later, set output: "export" again
  // (API routes will not work in that mode).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
