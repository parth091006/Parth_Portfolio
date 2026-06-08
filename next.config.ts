import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [],
  },

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons"
    ]
  }
};

export default nextConfig;