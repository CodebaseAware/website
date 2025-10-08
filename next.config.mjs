import withNextra from 'nextra'
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/website',
  assetPrefix: '/website',
  trailingSlash: true,
  output: 'export',
  distDir: 'docs',
  devIndicators: false,
  publicRuntimeConfig: {
    basePath: '/website',
  },
}

export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})(nextConfig)
