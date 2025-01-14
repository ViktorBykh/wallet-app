import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/wallet-app',
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
