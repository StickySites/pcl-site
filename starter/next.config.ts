import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const starterRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: starterRoot
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }]
  }
};

export default nextConfig;
