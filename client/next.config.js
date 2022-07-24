/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "*"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
