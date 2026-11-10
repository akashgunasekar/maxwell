import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/products/induction-cooktop",
        destination: "/products/commercial-induction-cooktop",
        permanent: true,
      },
      {
        source: "/products/chinese-wok",
        destination: "/products/commercial-induction-chinese-wok",
        permanent: true,
      },
      {
        source: "/products/multy-food-steamer",
        destination: "/products/commercial-induction-multi-food-steamer",
        permanent: true,
      },
      {
        source: "/products/cooking-mixer",
        destination: "/products/induction-cooking-mixer-machine",
        permanent: true,
      },
      {
        source: "/products/four-zone",
        destination: "/products/four-zone-commercial-induction-range",
        permanent: true,
      },
      {
        source: "/products/induction-tabletop-induction-hot-plate",
        destination: "/products/induction-tabletop-hot-plate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
