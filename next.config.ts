import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/donations-1", destination: "/donations", permanent: true },
      {
        source: "/paypal-masjid-al-athar-new-home",
        destination: "/building-project",
        permanent: true,
      },
      {
        source: "/copy-of-islamic-will",
        destination: "/services/islamic-wedding",
        permanent: true,
      },
      {
        source: "/copy-of-last-will",
        destination: "/services/islamic-will",
        permanent: true,
      },
      {
        source: "/copy-of-islamic-wedding-1",
        destination: "/services/family-counseling",
        permanent: true,
      },
      { source: "/voluntary-oportunities", destination: "/volunteer", permanent: true },
      { source: "/new-muslims", destination: "/services/new-muslims", permanent: true },
    ];
  },
};

export default nextConfig;
