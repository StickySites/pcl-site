/**
 * Case studies backed by PDFs in `public/case-studies/`.
 * `pdfFileName` must match the file on disk exactly (including spaces).
 */
export type CaseStudyCategory =
  | "asbestos"
  | "demolition"
  | "refurbishment"
  | "enabling"
  | "remediation";

export type CaseStudy = {
  slug: string;
  title: string;
  pdfFileName: string;
  category: CaseStudyCategory;
  categoryLabel: string;
  location: string;
  duration: string;
  description: string;
  /** Public path for card image */
  image: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "royal-garden-hotel",
    title: "Royal Garden Hotel",
    pdfFileName: "Case Study Royal Garden Hotel.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Hotel refurbishment and fit-out works delivered with minimal disruption to operations.",
    image: "/photos/BareWall.jpg"
  },
  {
    slug: "heron-hall-academy",
    title: "Heron Hall Academy",
    pdfFileName: "Heron_Hall_Academy_Case_Study.pdf",
    category: "enabling",
    categoryLabel: "Enabling Works & Structural Alterations",
    location: "London",
    duration: "Case study",
    description: "Enabling works and site preparation supporting an education campus programme.",
    image: "/photos/StripOut.jpg"
  },
  {
    slug: "hemel-hempstead-units-48-49",
    title: "Units 48 & 49, Hemel Hempstead",
    pdfFileName: "Units_48__49_Hemel_Hempstead_Case_Study.pdf",
    category: "demolition",
    categoryLabel: "Demolition",
    location: "Hertfordshire",
    duration: "Case study",
    description: "Industrial strip-out and demolition scope on commercial units.",
    image: "/photos/Demolition.jpg"
  },
  {
    slug: "dr-marten-oxford-street",
    title: "Dr Marten, Oxford Street",
    pdfFileName: "Dr Marten Store, Oxford Street Case Study.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Retail fit-out and refurbishment on a high-footfall central London store.",
    image: "/photos/BareBones.jpg"
  },
  {
    slug: "barnwell",
    title: "Barnwell",
    pdfFileName: "Case_Study_12._Barnwell.pdf",
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "UK",
    duration: "Case study",
    description: "Licensed asbestos removal and associated works completed under controlled conditions.",
    image: "/photos/AsbestosRemovalImage_649x554.png"
  },
  {
    slug: "university-of-west-london",
    title: "University of West London",
    pdfFileName: "University of West London Case Study.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Higher education refurbishment delivered around academic schedules.",
    image: "/photos/BareWall.jpg"
  },
  {
    slug: "royal-mail-romford",
    title: "Royal Mail, Romford",
    pdfFileName: "Royal Mail, Romford Case Study.pdf",
    category: "demolition",
    categoryLabel: "Demolition",
    location: "Essex",
    duration: "Case study",
    description: "Industrial strip-out and structural enabling on a distribution site.",
    image: "/photos/InternalDemolition_649x554.png"
  },
  {
    slug: "ilford-county-high-school",
    title: "Ilford County High School",
    pdfFileName: "Ilford_County_High_School.pdf",
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "London",
    duration: "Case study",
    description: "School estate works including licensed asbestos removal with safeguarding priorities.",
    image: "/photos/AsbestosRemovalImage_649x554.png"
  },
  {
    slug: "greenwich-painted-hall",
    title: "Greenwich Foundation, Painted Hall",
    pdfFileName: "Case_Study_13._Greenwich_Foundation_-_Painted_Hall.pdf",
    category: "remediation",
    categoryLabel: "Remediation",
    location: "London",
    duration: "Case study",
    description: "Heritage-sensitive remediation and specialist finishes within a landmark setting.",
    image: "/photos/Remediation.jpg"
  },
  {
    slug: "alexandra-palace",
    title: "Alexandra Palace",
    pdfFileName: "Alexandra_Palace_London_Case_Study.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Major venue refurbishment with coordination across complex stakeholder requirements.",
    image: "/photos/Roofing_HalfandHalf_1178x718.png"
  },
  {
    slug: "hemel-hempstead-units-23-24",
    title: "Units 23 & 24, Hemel Hempstead",
    pdfFileName: "Units 23 & 24 Hemel Hempstead Case Study.pdf",
    category: "enabling",
    categoryLabel: "Enabling Works & Structural Alterations",
    location: "Hertfordshire",
    duration: "Case study",
    description: "Enabling works to prepare commercial units for redevelopment.",
    image: "/photos/StructualBars.jpg"
  },
  {
    slug: "goldsmiths-hall",
    title: "Goldsmiths' Hall",
    pdfFileName: "Case Study Goldsmiths Hall.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "High-specification refurbishment within a Grade I listed livery hall.",
    image: "/photos/BareBones.jpg"
  },
  {
    slug: "greenwich-maritime-naval-college",
    title: "Greenwich Maritime, Naval College",
    pdfFileName: "Greenwich Maritime, Naval College Case Study.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Heritage campus refurbishment with careful sequencing around public access.",
    image: "/photos/StructualBars.jpg"
  },
  {
    slug: "travis-perkins",
    title: "Travis Perkins",
    pdfFileName: "Case Study Travis Perkins.pdf",
    category: "demolition",
    categoryLabel: "Demolition",
    location: "UK",
    duration: "Case study",
    description: "Trade counter and yard strip-out with phased handover for reinstatement.",
    image: "/photos/Demolition.jpg"
  },
  {
    slug: "tuc-congress-house",
    title: "TUC Union Congress House",
    pdfFileName: "TUC Union Congress House Case Study.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "London",
    duration: "Case study",
    description: "Office and institutional refurbishment within a prominent central London HQ.",
    image: "/photos/PCLWelfareBox.jpg"
  },
  {
    slug: "the-fitzwimarc-school",
    title: "The FitzWimarc School",
    pdfFileName: "The Fitzwimarc School Case Study.pdf",
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "Essex",
    duration: "Case study",
    description: "School asbestos removal programme coordinated around term-time constraints.",
    image: "/photos/AsbestosRemovalImage_649x554.png"
  },
  {
    slug: "pinewood-studios",
    title: "Pinewood Studios",
    pdfFileName: "Case Study Pinewood Studios.pdf",
    category: "refurbishment",
    categoryLabel: "Refurbishments",
    location: "Buckinghamshire",
    duration: "Case study",
    description: "Studio and production facility refurbishment with tight programme coordination.",
    image: "/photos/PCLWelfareBox.jpg"
  }
] as const;

/** Curated slugs for the home page “Featured Projects” grid (order is display order). */
export const featuredCaseStudySlugs = [
  "royal-garden-hotel",
  "greenwich-painted-hall",
  "royal-mail-romford"
] as const satisfies ReadonlyArray<CaseStudy["slug"]>;

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return featuredCaseStudySlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== undefined);
}

export function getCaseStudyPdfHref(study: CaseStudy): string {
  return `/case-studies/${encodeURIComponent(study.pdfFileName)}`;
}
