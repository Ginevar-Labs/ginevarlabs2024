/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n: i18n,
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    MKAN_KEY: process.env.MKAN_KEY,
    HOST: process.env.HOST
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
}

module.exports = nextConfig
