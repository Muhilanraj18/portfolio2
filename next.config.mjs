/** @type {import('next').NextConfig} **/
const nextConfig = {
  output: 'export',
  basePath: '/portfolio2',
  assetPrefix: '/portfolio2/',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['@splinetool/react-spline', 'gsap', 'framer-motion'],
  },
};

export default nextConfig;
