/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.themealdb.com", "images.unsplash.com", "www.notion.so"
    ],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
