import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Static HTML export for IONOS Deploy Now
  trailingSlash: true,    // Required for static hosting (index.html in each folder)
  images: {
    unoptimized: true,    // next/image optimization requires a server; disabled for static export
  },
};

export default nextConfig;
