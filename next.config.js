/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n: i18n,
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
