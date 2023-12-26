/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dotennin\'s kasm registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://dotennin.github.io/kasm-registry/',
    contactUrl: 'https://github.com/dotennin/kasm-registry/issues',
    schema: '1.0',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-apps',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
