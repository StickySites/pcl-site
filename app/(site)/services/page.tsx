import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections/services-page";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore PCL Limited services: licensed asbestos removal, demolition and strip-out, enabling works and structural alterations, refurbishments, and remediation.",
  pathname: "/services",
  ogImage: "/photos/PCLWraps820x500.png"
});

export default function Page() {
  return <ServicesPage />;
}
