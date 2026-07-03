import type { Metadata } from "next";
import { CertificatesPage } from "@/components/sections/certificates-page";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certificates & Accreditations",
  description:
    "View PCL Limited's HSE asbestos removal licence, ISO 9001, 14001 and 45001 certifications, and carbon reduction plan documentation.",
  pathname: "/certificates",
  ogImage: "/credentials/AccreditationImage1.png"
});

export default function Page() {
  return <CertificatesPage />;
}
