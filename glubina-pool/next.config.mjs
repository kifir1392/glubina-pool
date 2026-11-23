/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Говорим Next.js собрать статический сайт
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
};

export default nextConfig;