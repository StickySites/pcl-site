import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
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

initOpenNextCloudflareForDev();

