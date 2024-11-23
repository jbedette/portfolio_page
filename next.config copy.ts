import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/jbedette.github.io": '',
  assetPrefix: isProd ? "/jbedette.github.io/": '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};
// module.exports = nextConfig
export default nextConfig;
// module.exports = nextConfig;
