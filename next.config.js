const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "github.com", port: "" }],
  },
};

module.exports = withContentlayer(nextConfig);
