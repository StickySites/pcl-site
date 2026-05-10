export const sectionKeys = ["hero", "intro", "process", "services", "cta"] as const;

export type SectionKey = (typeof sectionKeys)[number] | string;

export type SeoFields = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogImageUrl?: string | null;
};

export type PageServiceRef = {
  _key: string;
  label?: string;
  serviceSlug?: string | null;
  serviceTitle?: string | null;
};

export type CtaLink = {
  label?: string;
  href?: string;
};

export type MediaAsset = {
  imageUrl?: string | null;
  imageAlt?: string;
};

export type PageSection = {
  _key: string;
  key: SectionKey;
  badge?: string;
  heading?: string;
  intro?: string;
  body?: string;
  cta?: CtaLink;
  media?: MediaAsset;
  services?: PageServiceRef[];
};

export type PageContent = {
  _id: string;
  title: string;
  slug: string;
  seo?: SeoFields;
  sections: PageSection[];
};

export type ContentSource = "local" | "sanity";
