import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio', // Replace with your repo name
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};
module.exports = nextConfig
export default nextConfig;
