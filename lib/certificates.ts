export type CertificateDocument = {
  id: string;
  title: string;
  description: string;
  file: string;
  validFrom?: string;
  validTo?: string;
};

export type IsoCertification = {
  standard: string;
  title: string;
  image: string;
  alt: string;
};

export const UKAS_CERT_CHECK_URL = "https://certcheck.ukas.com";

/** Encode filenames in `/public` paths for use in `href` and `src`. */
export function publicAssetUrl(path: string): string {
  const lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) {
    return encodeURIComponent(path);
  }
  return `${path.slice(0, lastSlash + 1)}${encodeURIComponent(path.slice(lastSlash + 1))}`;
}

export const certificateDocuments: readonly CertificateDocument[] = [
  {
    id: "hse-licence",
    title: "HSE Asbestos Removal Licence",
    description:
      "Pier Contractors Limited holds a valid HSE licence for asbestos removal work. Licence number 102505452, valid from 22 March 2025 to 21 March 2028.",
    file: "/certificates/Image 1.0   HSE Licence 2025 - Pier 102505452  From 22 03 2025 - 21 03 2028.pdf",
    validFrom: "22 March 2025",
    validTo: "21 March 2028"
  },
  {
    id: "carbon-reduction-plan",
    title: "Carbon Reduction Plan 2024–25",
    description:
      "Our signed carbon reduction plan outlining commitments and actions to reduce greenhouse gas emissions across our operations.",
    file: "/certificates/Pier Contractors Carbon Reduction Plan 2024-25  SIGNED.pdf"
  }
];

export const isoCertifications: readonly IsoCertification[] = [
  {
    standard: "ISO 9001",
    title: "Quality Management",
    image: "/credentials/iso-9001-ukas.png",
    alt: "ISO 9001 UKAS-accredited quality management certification badge"
  },
  {
    standard: "ISO 14001",
    title: "Environmental Management",
    image: "/credentials/iso-14001-ukas.png",
    alt: "ISO 14001 UKAS-accredited environmental management certification badge"
  },
  {
    standard: "ISO 45001",
    title: "Occupational Health & Safety",
    image: "/credentials/iso-45001-ukas.png",
    alt: "ISO 45001 UKAS-accredited occupational health and safety certification badge"
  }
];
