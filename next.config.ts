import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // ✅ Important for GitHub Pages
  images: {
    unoptimized: true, // ✅ Disable Next.js image optimization
  },
};

export default nextConfig;
