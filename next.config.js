/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "gads.cdn.prismic.io",
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com"
    ],
    formats: ["image/avif", "image/webp"],
    loader: "default"
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      },
      {
        source: "/es/home",
        destination: "/es/",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
