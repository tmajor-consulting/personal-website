/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const nextConfig = {
  output: 'export', // replaces `next export`
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true, // required for static export with images
  },
};

module.exports = nextConfig;
