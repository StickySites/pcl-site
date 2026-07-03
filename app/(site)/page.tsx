import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home-page";
import { createPageMetadata } from "@/lib/seo-metadata";

const description =
  "Pier Contractors Limited (PCL) delivers licensed asbestos removal, demolition, enabling works, refurbishments, and remediation for industrial and commercial clients across the UK.";

export const metadata: Metadata = createPageMetadata({
  title: "Asbestos removal & construction contractors",
  description,
  pathname: "/",
  ogImage: "/photos/PCLWraps820x500.png",
  absoluteTitle: true
});

export default function Page() {
  return <HomePage />;
}
