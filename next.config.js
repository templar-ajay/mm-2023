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
  sitemaps: [
    {
      url: "./sitemap.xml",
      generate: ({ pages }) => {
        return pages.map((page) => ({
          url: page.route,
          changefreq: "weekly",
          priority: 0.5
        }));
      }
    }
  ]
};

module.exports = nextConfig;
