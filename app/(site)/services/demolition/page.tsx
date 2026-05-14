import type { Metadata } from "next";
import { DemolitionPage } from "@/components/sections/service-detail-pages";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Demolition & strip-out",
  description:
    "Industrial and commercial demolition, strip-out, and enabling works delivered safely and to programme by PCL Limited.",
  pathname: "/services/demolition",
  ogImage: "/photos/Demolition.jpg"
});

export default function Page() {
  return <DemolitionPage />;
}
