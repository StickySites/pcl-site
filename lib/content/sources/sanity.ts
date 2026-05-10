import { safeSanityFetch } from "@/lib/sanity/fetch";
import { pageBySlugQuery } from "@/lib/sanity/queries";
import type { PageContent } from "../contract";
import { sanityEnv } from "@/lib/sanity/env";
import { warnContent } from "../warnings";

type SanityPage = {
  _id: string;
  title: string;
  slug: string;
  seo?: PageContent["seo"];
  sections: Array<{
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
    services?: PageContent["sections"][number]["services"];
  }>;
};

function hasSanityEnv(): boolean {
  return Boolean(sanityEnv.projectId && sanityEnv.dataset && sanityEnv.apiVersion);
}

function mapSanityPage(raw: SanityPage): PageContent {
  return {
    _id: raw._id,
    title: raw.title,
    slug: raw.slug,
    seo: raw.seo,
    sections: raw.sections.map((section) => ({
      _key: section._key,
      key: section.key,
      badge: section.badge,
      heading: section.heading,
      intro: section.intro,
      body: section.body,
      cta: {
        label: section.ctaLabel,
        href: section.ctaHref
      },
      media: {
        imageUrl: section.imageUrl,
        imageAlt: section.imageAlt
      },
      services: section.services
    }))
  };
}

export async function getSanityPageContent(slug: string): Promise<PageContent | null> {
  if (!hasSanityEnv()) {
    warnContent("SANITY_ENV_MISSING", {
      mode: "sanity",
      page: slug,
      reason: "Sanity environment variables are missing or incomplete.",
      nextAction: "Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET or use CONTENT_SOURCE=local."
    });
    return null;
  }

  const page = await safeSanityFetch<SanityPage>(pageBySlugQuery, { slug });
  if (!page) {
    warnContent("SANITY_FETCH_FAILED", {
      mode: "sanity",
      page: slug,
      reason: "Fetch returned null or threw an error.",
      nextAction: "Confirm schema/content exists for the slug and verify Sanity access."
    });
    return null;
  }
  return mapSanityPage(page);
}
