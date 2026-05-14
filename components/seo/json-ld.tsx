import Script from "next/script";
import { brandImages } from "@/lib/brand";
import { siteContact } from "@/lib/site-contact";
import { getSiteOrigin } from "@/lib/site-url";

/** Organization + WebSite JSON-LD using real contact/social from `siteContact` only. */
export function JsonLdRoot() {
  const origin = getSiteOrigin();
  const sameAs = [siteContact.social.linkedin, siteContact.social.facebook, siteContact.social.x];
  const [street, locality, postalCode, addressCountry] = siteContact.address.lines;

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: "PCL Limited",
        alternateName: "Pier Contractors Limited",
        url: origin,
        logo: `${origin}${brandImages.mark}`,
        sameAs,
        address: {
          "@type": "PostalAddress",
          streetAddress: street,
          addressLocality: locality,
          postalCode,
          addressCountry
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: siteContact.phoneTel,
          email: siteContact.email,
          areaServed: "GB",
          availableLanguage: "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: "PCL Limited",
        inLanguage: "en-GB",
        publisher: { "@id": `${origin}/#organization` }
      }
    ]
  };

  return (
    <Script
      id="pcl-schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
