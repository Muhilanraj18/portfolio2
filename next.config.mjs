const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} **/
const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/portfolio2' : '',
  assetPrefix: isProduction ? '/portfolio2/' : '',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
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
    removeConsole: isProduction,
  },
  experimental: {
    optimizePackageImports: ['@splinetool/react-spline', 'gsap', 'framer-motion', 'react-icons', 'lucide-react'],
  },
};

export default nextConfig;
