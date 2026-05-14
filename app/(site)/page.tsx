import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home-page";
import { createPageMetadata } from "@/lib/seo-metadata";

const description =
  "PCL Limited delivers asbestos removal, demolition and strip-out, enabling works, refurbishments, and remediation for industrial and commercial clients.";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial contracting across the UK",
  description,
  pathname: "/",
  ogImage: "/photos/PCLWraps820x500.png",
  absoluteTitle: true
});

export default function Page() {
  return <HomePage />;
}
