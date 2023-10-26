/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gads.cdn.prismic.io"],
    formats: ["image/avif", "image/webp"],
    loader: "default"
  },
  experimental: {
    forceSwcTransforms: true
  }
};

module.exports = nextConfig;
