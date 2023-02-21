/** @type {import('next').NextConfig} */

//const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/users',
        permanent: true,
      },
    ]
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
});
module.exports = nextConfig;

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/careers',
//         permanent: true,
//       },
//     ]
//   },
 

// }

//module.exports = withPWA(nextConfig);
