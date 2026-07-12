import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS for GoDaddy (or any static host). Output: `out/`
  output: "export",
  // Folder-style URLs (`/donations/index.html`) work reliably on Apache/GoDaddy
  trailingSlash: true,
  // Default next/image optimizer needs a server; serve images as-is
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
