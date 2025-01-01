import { build } from "velite";

/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains (use only for testing or development)
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

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

// import { build } from "velite";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // Allows all domains (use only for testing or development)
//       },
//     ],
//   },
//   webpack: (config) => {
//     config.plugins.push(new VeliteWebpackPlugin());
//     return config;
//   },
// };

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

// export default nextConfig;

// import { build } from "velite";
// import type { NextConfig } from "next";
// import type { Compiler } from "webpack";

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // Allows all domains (use only for testing or development)
//       },
//     ],
//   },

//   // Enable Turbopack for Next.js 13+
//   // The experimental flag is used for this feature
//   experimental: {
//     turbo: {
//       enabled: true, // Explicitly enable Turbopack
//     },
//   },

//   // Webpack custom plugin configuration
//   webpack: (config) => {
//     // Only use this Webpack plugin when needed
//     config.plugins.push(new VeliteWebpackPlugin());
//     return config;
//   },
// };

// class VeliteWebpackPlugin {
//   static started = false;

//   apply(compiler: Compiler) {
//     compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
//       if (VeliteWebpackPlugin.started) return;
//       VeliteWebpackPlugin.started = true;
//       const dev = compiler.options.mode === "development";
//       await build({ watch: dev, clean: !dev });
//     });
//   }
// }

// export default nextConfig;
