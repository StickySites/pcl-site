import { groq } from "next-sanity";

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    seo {
      title,
      description,
      noIndex,
      "ogImageUrl": ogImage.asset->url
    },
    sections[] {
      _key,
      key,
      badge,
      heading,
      intro,
      body,
      "imageUrl": image.asset->url,
      imageAlt,
      ctaLabel,
      ctaHref,
      services[] {
        _key,
        label,
        "serviceSlug": service->slug.current,
        "serviceTitle": service->title
      }
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    email,
    phone,
    address,
    seo {
      title,
      description,
      noIndex,
      "ogImageUrl": ogImage.asset->url
    }
  }
`;

export const resourceSettingsQuery = groq`
  *[_type == "resourceSettings"][0] {
    heading,
    intro,
    seo {
      title,
      description,
      noIndex,
      "ogImageUrl": ogImage.asset->url
    }
  }
`;

export const resourceItemsQuery = groq`
  *[_type == "resourceItem"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    externalUrl,
    seo {
      title,
      description,
      noIndex,
      "ogImageUrl": ogImage.asset->url
    }
  }
`;
