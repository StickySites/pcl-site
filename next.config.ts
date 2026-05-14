import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot
  },
  async redirects() {
    return [
      {
        source: "/services/decontamination",
        destination: "/services/remediation",
        permanent: true
      },
      {
        source: "/services/commercial-refurbishments",
        destination: "/services/refurbishments",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }]
  }
};

export default nextConfig;
