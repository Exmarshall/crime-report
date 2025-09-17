import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ allows deployment even if lint errors exist
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ allows deployment even if type errors exist
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
