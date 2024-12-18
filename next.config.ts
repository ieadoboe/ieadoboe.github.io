import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: "export",

  // Required for GitHub Pages deployment
  // basePath: "/ieadoboe.github.io", // Replace with your repository name
  // assetPrefix: "/ieadoboe.github.io",

  // Optional: Allows images without optimization (needed for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;