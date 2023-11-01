/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "byjuun.com", "*"],
  },
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
