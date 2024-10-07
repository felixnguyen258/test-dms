/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "keen-raven-875.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
