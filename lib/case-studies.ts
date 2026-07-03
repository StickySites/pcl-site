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
    // category: "refurbishment",           // original
    // categoryLabel: "Refurbishments",     // original
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "London",
    duration: "Case study",
    // description: "Hotel refurbishment and fit-out works delivered with minimal disruption to operations.",  // original
    description: "Asbestos removal and encapsulation works delivered with minimal disruption to operations.",
    // image: "/photos/BareWall.jpg",  // original
    image: "/project-images/royal-garden-hotel.png"
  },
  {
    slug: "heron-hall-academy",
    title: "Heron Hall Academy",
    pdfFileName: "Heron_Hall_Academy_Case_Study.pdf",
    // category: "enabling",                                          // original
    // categoryLabel: "Enabling Works & Structural Alterations",      // original
    category: "demolition",
    categoryLabel: "Demolition & Structural Alterations",
    // location: "London",  // original
    location: "Greater London",
    duration: "Case study",
    // description: "Enabling works and site preparation supporting an education campus programme.",  // original
    description: "Demolition of high level RC beams, Structural alterations and installation of steelwork.",
    // image: "/photos/StripOut.jpg",  // original
    image: "/project-images/heron-hall-academy.png"
  },
  {
    // slug: "hemel-hempstead-units-48-49",           // original slug -- updated to match client brief
    slug: "the-marlowes",
    // title: "Units 48 & 49, Hemel Hempstead",       // original title
    title: "The Marlowes",
    pdfFileName: "Units_48__49_Hemel_Hempstead_Case_Study.pdf",
    // category: "demolition",        // original
    // categoryLabel: "Demolition",   // original
    category: "demolition",
    categoryLabel: "Demolition / Strip Out",
    location: "Hertfordshire",
    duration: "Case study",
    // description: "Industrial strip-out and demolition scope on commercial units.",  // original
    description: "Demolition and strip out works.",
    // image: "/photos/Demolition.jpg",  // original
    image: "/project-images/the-marlowes.png"
  },
  {
    slug: "dr-marten-oxford-street",
    title: "Dr Marten, Oxford Street",
    pdfFileName: "Dr Marten Store, Oxford Street Case Study.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "asbestos",
    categoryLabel: "Asbestos Removal / Strip Out",
    location: "London",
    duration: "Case study",
    // description: "Retail fit-out and refurbishment on a high-footfall central London store.",  // original
    description: "Complete strip back of existing retail store including asbestos removal.",
    // image: "/photos/BareBones.jpg",  // original
    image: "/project-images/dr-martens-oxford-street.png"
  },
  {
    slug: "barnwell",
    // title: "Barnwell",  // original
    title: "Barnwell School",
    pdfFileName: "Case_Study_12._Barnwell.pdf",
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    // location: "UK",  // original
    location: "Hertfordshire",
    duration: "Case study",
    // description: "Licensed asbestos removal and associated works completed under controlled conditions.",  // original
    description: "Asbestos removal whilst school remained live during works.",
    // image: "/photos/AsbestosRemovalImage_649x554.png",  // original
    image: "/project-images/barnwell-school.png"
  },
  {
    slug: "university-of-west-london",
    title: "University of West London",
    pdfFileName: "University of West London Case Study.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "enabling",
    categoryLabel: "Structural Alterations / Strip Out",
    location: "London",
    duration: "Case study",
    // description: "Higher education refurbishment delivered around academic schedules.",  // original
    description: "Structural alterations including strip out, structural steelwork and roof repairs.",
    // image: "/photos/BareWall.jpg",  // original
    image: "/project-images/university-of-west-london.png"
  },
  {
    slug: "royal-mail-romford",
    title: "Royal Mail, Romford",
    pdfFileName: "Royal Mail, Romford Case Study.pdf",
    // category: "demolition",       // original
    // categoryLabel: "Demolition",  // original
    category: "refurbishment",
    categoryLabel: "Strip out / Refurbishment",
    location: "Essex",
    duration: "Case study",
    // description: "Industrial strip-out and structural enabling on a distribution site.",  // original
    description: "Complete strip out and full refurbishment of WC and changing facilities.",
    // image: "/photos/InternalDemolition_649x554.png",  // original
    image: "/project-images/royal-mail-romford.png"
  },
  {
    slug: "ilford-county-high-school",
    title: "Ilford County High School",
    pdfFileName: "Ilford_County_High_School.pdf",
    // category: "asbestos",           // original
    // categoryLabel: "Asbestos Removal", // original
    category: "enabling",
    categoryLabel: "Structural Alteration / Strip out",
    // location: "London",  // original
    location: "Greater London",
    duration: "Case study",
    // description: "School estate works including licensed asbestos removal with safeguarding priorities.",  // original
    description: "Full refurbishment including structural alterations, roof strengthening and steelworks.",
    // image: "/photos/AsbestosRemovalImage_649x554.png",  // original
    image: "/project-images/ilford-county-high-school.png"
  },
  {
    slug: "greenwich-painted-hall",
    // title: "Greenwich Foundation, Painted Hall",  // original
    title: "Greenwich Foundation",
    pdfFileName: "Case_Study_13._Greenwich_Foundation_-_Painted_Hall.pdf",
    // category: "remediation",    // original
    // categoryLabel: "Remediation",  // original
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "London",
    duration: "Case study",
    // description: "Heritage-sensitive remediation and specialist finishes within a landmark setting.",  // original
    description: "Heritage sensitive, asbestos removal to Painted Hall.",
    // image: "/photos/Remediation.jpg",  // original
    image: "/project-images/greenwich-painted-hall.png"
  },
  {
    slug: "alexandra-palace",
    title: "Alexandra Palace",
    pdfFileName: "Alexandra_Palace_London_Case_Study.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "demolition",
    categoryLabel: "Strip out / Demolition",
    location: "London",
    duration: "Case study",
    // description: "Major venue refurbishment with coordination across complex stakeholder requirements.",  // original
    description: "Major strip out and demolition works to a Grade II listed building.",
    // image: "/photos/Roofing_HalfandHalf_1178x718.png",  // original
    image: "/project-images/alexandra-palace.png"
  },
  {
    slug: "hemel-hempstead-units-23-24",
    // title: "Units 23 & 24, Hemel Hempstead",  // original
    title: "23 & 24 The Marlowes",
    pdfFileName: "Units 23 & 24 Hemel Hempstead Case Study.pdf",
    // category: "enabling",                                       // original
    // categoryLabel: "Enabling Works & Structural Alterations",   // original
    category: "enabling",
    categoryLabel: "Structural Alterations",
    location: "Hertfordshire",
    duration: "Case study",
    // description: "Enabling works to prepare commercial units for redevelopment.",  // original
    description: "Structural alterations to commercial units.",
    // image: "/photos/StructualBars.jpg",  // original
    image: "/project-images/marlowes-23-24.png"
  },
  {
    slug: "goldsmiths-hall",
    title: "Goldsmiths' Hall",
    pdfFileName: "Case Study Goldsmiths Hall.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "asbestos",
    categoryLabel: "Asbestos Removal",
    location: "London",
    duration: "Case study",
    // description: "High-specification refurbishment within a Grade I listed livery hall.",  // original
    description: "Asbestos removal to a Grade I, World Heritage Site!",
    // image: "/photos/BareBones.jpg",  // original
    image: "/project-images/goldsmiths-hall.png"
  },
  {
    slug: "greenwich-maritime-naval-college",
    // title: "Greenwich Maritime, Naval College",  // original (same)
    title: "Greenwich Maritime, Naval College",
    pdfFileName: "Greenwich Maritime, Naval College Case Study.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "asbestos",
    categoryLabel: "Strip Out / Asbestos Removal",
    location: "London",
    duration: "Case study",
    // description: "Heritage campus refurbishment with careful sequencing around public access.",  // original
    description: "Various Asbestos Removal works to Heritage Sensitive Building.",
    // image: "/photos/StructualBars.jpg",  // original
    image: "/project-images/greenwich-maritime-naval-college.png"
  },
  // Travis Perkins -- commented out per client brief June 2026 (do not hold case study)
  // {
  //   slug: "travis-perkins",
  //   title: "Travis Perkins",
  //   pdfFileName: "Case Study Travis Perkins.pdf",
  //   category: "demolition",
  //   categoryLabel: "Demolition",
  //   location: "UK",
  //   duration: "Case study",
  //   description: "Trade counter and yard strip-out with phased handover for reinstatement.",
  //   image: "/photos/Demolition.jpg"
  // },
  {
    slug: "tuc-congress-house",
    title: "TUC Union Congress House",
    pdfFileName: "TUC Union Congress House Case Study.pdf",
    // category: "refurbishment",       // original
    // categoryLabel: "Refurbishments", // original
    category: "demolition",
    categoryLabel: "Demolition, Strip out and Asbestos Removal",
    location: "London",
    duration: "Case study",
    // description: "Office and institutional refurbishment within a prominent central London HQ.",  // original
    description: "Demolition of roof with asbestos containing materials.",
    // image: "/photos/PCLWelfareBox.jpg",  // original
    image: "/project-images/tuc-congress-house.png"
  },
  {
    slug: "the-fitzwimarc-school",
    title: "The FitzWimarc School",
    pdfFileName: "The Fitzwimarc School Case Study.pdf",
    // category: "asbestos",              // original
    // categoryLabel: "Asbestos Removal", // original
    category: "enabling",
    categoryLabel: "Structural Alterations and Refurbishment",
    location: "Essex",
    duration: "Case study",
    // description: "School asbestos removal programme coordinated around term-time constraints.",  // original
    description: "Steel support, roofing and cladding works.",
    // image: "/photos/AsbestosRemovalImage_649x554.png",  // original
    image: "/project-images/fitzwimarc-school.png"
  },
  // Pinewood Studios -- commented out per client brief June 2026
  // {
  //   slug: "pinewood-studios",
  //   title: "Pinewood Studios",
  //   pdfFileName: "Case Study Pinewood Studios.pdf",
  //   category: "refurbishment",
  //   categoryLabel: "Refurbishments",
  //   location: "Buckinghamshire",
  //   duration: "Case study",
  //   description: "Studio and production facility refurbishment with tight programme coordination.",
  //   image: "/photos/PCLWelfareBox.jpg"
  // }
] as const;

/** Curated slugs for the home page "Featured Projects" grid (order is display order). */
export const featuredCaseStudySlugs = [
  "royal-garden-hotel",
  "greenwich-painted-hall",
  "royal-mail-romford"
] as const satisfies ReadonlyArray<CaseStudy["slug"]>;
// Note: travis-perkins and pinewood-studios removed from slug union -- they are commented out above.

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
