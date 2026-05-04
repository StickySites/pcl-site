import { safeSanityFetch } from "./sanity/fetch";
import { pageBySlugQuery } from "./sanity/queries";
import type { PageContent, PageSection } from "./sanity/types";

const fallbackPage: PageContent = {
  _id: "fallback-home",
  title: "Home",
  slug: "home",
  sections: [
    {
      _key: "hero-fallback",
      key: "hero",
      heading: "Starter homepage",
      intro: "Connect Sanity to replace this with CMS-driven content."
    }
  ]
};

export async function getPageContent(slug: string): Promise<PageContent> {
  const page = await safeSanityFetch<PageContent>(pageBySlugQuery, { slug });
  return page || fallbackPage;
}

export function getPageSection(page: PageContent, key: string): PageSection | undefined {
  return page.sections.find((section) => section.key === key);
}
