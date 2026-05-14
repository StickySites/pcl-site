import type { Metadata } from "next";
import { EnablingWorksPage } from "@/components/sections/service-detail-pages";

export const metadata: Metadata = {
  title: "Enabling Works & Structural Alterations",
  description:
    "Site preparation, utility diversions, structural alterations, and temporary works to prepare your site for construction or refurbishment."
};

export default function Page() {
  return <EnablingWorksPage />;
}
