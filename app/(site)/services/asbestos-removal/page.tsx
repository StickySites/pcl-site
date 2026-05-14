import type { Metadata } from "next";
import { AsbestosRemovalPage } from "@/components/sections/service-detail-pages";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Asbestos removal",
  description:
    "Licensed asbestos removal, containment, air monitoring, four-stage clearance, and documented waste disposal from PCL Limited.",
  pathname: "/services/asbestos-removal",
  ogImage: "/photos/AsbestosRemovalImage_649x554.png"
});

export default function Page() {
  return <AsbestosRemovalPage />;
}
