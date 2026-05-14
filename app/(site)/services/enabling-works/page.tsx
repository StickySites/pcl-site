import type { Metadata } from "next";
import { EnablingWorksPage } from "@/components/sections/service-detail-pages";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Enabling Works & Structural Alterations",
  description:
    "Site preparation, utility diversions, structural alterations, and temporary works to prepare your site for construction or refurbishment.",
  pathname: "/services/enabling-works",
  ogImage: "/photos/StructualBars.jpg"
});

export default function Page() {
  return <EnablingWorksPage />;
}
