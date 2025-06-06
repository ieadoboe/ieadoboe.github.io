// import { build } from "velite";
// import remarkGfm from 'remark-gfm'
// import createMDX from '@next/mdx'

// class VeliteWebpackPlugin {
//   static started = false;
//   apply(/** @type {import('webpack').Compiler} */ compiler) {
//     // executed three times in nextjs
//     // twice for the server (nodejs / edge runtime) and once for the client
//     compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
//       if (VeliteWebpackPlugin.started) return;
//       VeliteWebpackPlugin.started = true;
//       const dev = compiler.options.mode === "development";
//       await build({ watch: dev, clean: !dev });
//     });
//   }
// }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // Be cautious: this allows images from all domains
//       },
//     ],
//   },
//   webpack: (config, { dev }) => {
//     if (dev) {
//       // Disable cache for development mode
//       config.cache = false;
//     }

//     config.plugins.push(new VeliteWebpackPlugin());
//     return config;
//   },
// };

// const withMDX = createMDX({
//   options: {
//     remarkPlugins: [remarkGfm],
// rehypePlugins: [['rehype-katex', { strict: true, throwOnError: true }]],

//   },
// })

// export default withMDX(nextConfig)

import { build } from "velite";

class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      await build({ watch: dev, clean: !dev });
    });
  }
}

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Be cautious: this allows images from all domains
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable cache for development mode
      config.cache = false;
    }

    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },

  // Add security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
