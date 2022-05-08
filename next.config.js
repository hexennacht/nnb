/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.themealdb.com", "images.unsplash.com", "www.notion.so", "vitals.vercel-insights.com"
    ],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
