import { siteContact } from "@/lib/site-contact";

export type TestimonialSource = "google" | "client";

export type ServiceTag = "asbestos" | "refurbishment" | "enabling" | "demolition" | "remediation";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  organisation?: string;
  project?: string;
  date?: string;
  source: TestimonialSource;
  serviceTags?: readonly ServiceTag[];
};

export type GoogleRating = {
  rating: number;
  reviewCount: number;
  url: string;
};

export const googleRating: GoogleRating = {
  rating: 5.0,
  reviewCount: 8,
  url: siteContact.address.mapsUrl
};

export const testimonials: readonly Testimonial[] = [
  {
    id: "google-brennan-laryea",
    quote: "Incredibly professional and would highly recommend!",
    author: "Brennan Laryea",
    source: "google"
  },
  {
    id: "dilly-hotel",
    quote:
      "I have worked with Darren and his team at various points over the last 10 years and have had nothing but excellent service.",
    author: "Alan",
    project: "Dilly Hotel",
    date: "30/04/2026",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "hatfield-fire-station",
    quote:
      "Refurbishment Works and alterations to the Fire Station at Hatfield. Including changes to room layouts, M&E works to welfare areas, and changes to the Fire Strategy provision",
    author: "Nick",
    organisation: "Oakray",
    project: "Hatfield Fire Station",
    date: "9/06/2026",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "newham-hospital",
    quote:
      "Asbestos removal bedded in the floor screed. Pier were excellent from start to finish if only all trades shared Pier\u2019s ethos",
    author: "Steve",
    organisation: "Forest gate Construction",
    project: "Newham Hospital, East and West Ham Works",
    date: "9/06/2026",
    source: "client",
    serviceTags: ["asbestos"]
  },
  {
    id: "odeon-south-woodford",
    quote:
      "Removing old plaster and cement from the top of the building, repairing, replacing and treating the front of the building ensuring it\u2019s safe for year to come. Pier Team were polite, friendly, communicative and took the very best care in their work",
    author: "Howard",
    project: "Odeon South Woodford",
    date: "15/12/2025",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "cromwell-place",
    quote:
      "Quick turn around and very helpful troubleshooting on a project with multiple issues. Very professional with a can-do attitude where nothing was too much trouble",
    author: "B Stoker",
    project: "Cromwell Place, London SW7",
    date: "03/10/2025",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "shepherd-primary-school",
    quote:
      "An enormous THANK YOU! To everyone involved in particular to Alfonso who answered this phone so early and got his team here by 8.10am. Anytime we have any dealings with HCC asbestos team and Pier, we walk away feeling so very grateful by how kind, supporting and professional you all are.",
    author: "Claire",
    role: "Headteacher",
    project: "Shepherd Primary School",
    date: "18/12/2025",
    source: "client",
    serviceTags: ["asbestos"]
  },
  {
    id: "quadrant-house",
    quote:
      "From start to finish all those involved with PCL were amazing. Concise communications by phone and in person. Contractors arrived on site fully briefed and the task and absolutely no drama at all. All very professional, speedy and went the extra mile.",
    author: "Lisa",
    role: "Building Manager",
    project: "Quadrant House",
    date: "3/12/2025",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "oughton-primary",
    quote:
      "The man was fantastic, he was friendly, professional, always included us and communicated well, very good health and safety. We were very happy with his work. He worked often alongside the electricians who were also great help too. I would fully recommend these contractors.",
    author: "Lisa",
    role: "Headteacher",
    project: "Oughton Primary and Nursery School",
    date: "24/10/2025",
    source: "client",
    serviceTags: ["asbestos"]
  },
  {
    id: "ore-village-primary",
    quote:
      "Thank you for a prompt response, good workmanship and communication throughout. We are very grateful.",
    author: "Julian",
    role: "Site Manager",
    project: "Ore Village Primary Academy",
    date: "2/9/2025",
    source: "client",
    serviceTags: ["asbestos"]
  },
  {
    id: "odeon-salisbury",
    quote: "Really grateful, have all been supportive, professional and completed works to a high standard!",
    author: "Richard",
    project: "Odeon, Salisbury",
    date: "16/07/2025",
    source: "client",
    serviceTags: ["refurbishment"]
  },
  {
    id: "hcc-schools-raac",
    quote:
      "Pier Contractors Limited carried out multi-faceted works at two Hertfordshire schools where reinforced autoclaved aerated concrete roof planks has been identified. The works consisted of Identification of RAAC and asbestos containing materials, Asbestos removal and Design of RAAC support structure followed by the works. The project was carried out under intense scrutiny to tight deadlines, Pier worked to a high standard, communicating throughout with the client and the end users. The project was successfully delivered on time and to budget while responding to changes in the specification as the project progressed.",
    author: "Lucy",
    role: "Asbestos Programme Manager",
    organisation: "Hertfordshire County Council",
    project: "Hertfordshire County Council - Schools",
    date: "19/05/2025",
    source: "client",
    serviceTags: ["asbestos", "enabling"]
  }
] as const;

const MIN_FILTERED_COUNT = 3;

/** Returns testimonials tagged for a service, or the full set if the filter would hide too many. */
export function getTestimonialsForService(tag: ServiceTag): readonly Testimonial[] {
  const filtered = testimonials.filter((item) => item.serviceTags?.includes(tag));
  if (filtered.length < MIN_FILTERED_COUNT) {
    return testimonials;
  }
  return filtered;
}
