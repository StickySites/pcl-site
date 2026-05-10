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

export type PageSection = {
  _key: string;
  key: string;
  badge?: string;
  heading?: string;
  intro?: string;
  body?: string;
  imageUrl?: string | null;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  services?: PageServiceRef[];
};

export type PageContent = {
  _id: string;
  title: string;
  slug: string;
  seo?: SeoFields;
  sections: PageSection[];
};

export type SiteSettings = {
  siteTitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  seo?: SeoFields;
};

export type ResourceSettings = {
  heading?: string;
  intro?: string;
  seo?: SeoFields;
};

export type ResourceItem = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  externalUrl?: string;
  seo?: SeoFields;
};
