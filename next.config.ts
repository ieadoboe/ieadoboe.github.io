import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: "export",

  // Optional: Allows images without optimization (needed for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
