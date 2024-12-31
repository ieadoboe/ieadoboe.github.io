import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains (use only for testing or development)
      },
    ],
  },
};

export default nextConfig;
