/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'jahidshawn.vercel.app' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
}
module.exports = nextConfig
