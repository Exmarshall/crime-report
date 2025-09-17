import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // allow Google avatars if you use NextAuth Google provider
  },
};

export default nextConfig;
