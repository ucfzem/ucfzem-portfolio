/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: '/ucfzem-portfolio',
  assetPrefix: '/ucfzem-portfolio/',
}

module.exports = nextConfig