import type { Metadata } from "next";
import { RemediationPage } from "@/components/sections/service-detail-pages";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Remediation",
  description:
    "Specialist remediation and finishes in sensitive environments, including heritage and complex operational sites.",
  pathname: "/services/remediation",
  ogImage: "/photos/Remediation.jpg"
});

export default function Page() {
  return <RemediationPage />;
}
