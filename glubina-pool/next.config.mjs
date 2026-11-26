/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Оптимизация для SEO
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Сжимаем CSS и JS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
export default nextConfig;