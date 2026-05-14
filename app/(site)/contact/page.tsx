import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/contact-page";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact PCL Limited in Epping for project enquiries: phone, email, and office hours. We support asbestos removal, demolition, enabling works, refurbishments, and remediation.",
  pathname: "/contact"
});

export default function Page() {
  return <ContactPage />;
}
