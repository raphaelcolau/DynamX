/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'build',
};

module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({});
