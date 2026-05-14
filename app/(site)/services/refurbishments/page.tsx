import type { Metadata } from "next";
import { RefurbishmentsPage } from "@/components/sections/service-detail-pages";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Refurbishments",
  description:
    "Fit-out and refurbishment for offices, retail, education, heritage, and industrial spaces — planned to minimise disruption.",
  pathname: "/services/refurbishments",
  ogImage: "/photos/BareWall.jpg"
});

export default function Page() {
  return <RefurbishmentsPage />;
}
