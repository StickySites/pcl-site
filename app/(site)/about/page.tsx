import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about-page";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about PCL Limited: our experience in licensed asbestos removal, demolition, enabling works, refurbishments, and remediation for UK industry.",
  pathname: "/about",
  ogImage: "/photos/PCLWraps820x500.png"
});

export default function Page() {
  return <AboutPage />;
}
