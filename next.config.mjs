/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.x-kom.pl",
      },
    ],
  },
};

export default nextConfig;
