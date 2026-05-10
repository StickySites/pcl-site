import type { PageContent, PageSection } from "./contract";
import { getConfiguredContentSource } from "./env";
import { getLocalPageContent } from "./sources/local";
import { getSanityPageContent } from "./sources/sanity";
import { normalizePage, validatePageContract } from "./validate";
import { warnContent } from "./warnings";

async function resolvePageFromSource(slug: string): Promise<PageContent | null> {
  const source = getConfiguredContentSource();
  if (source === "sanity") {
    const sanityPage = await getSanityPageContent(slug);
    if (sanityPage) return sanityPage;
  }
  return getLocalPageContent(slug);
}

export async function getPageContent(slug: string): Promise<PageContent> {
  const page = await resolvePageFromSource(slug);
  if (!page) {
    warnContent("PAGE_NOT_FOUND", {
      mode: getConfiguredContentSource(),
      page: slug,
      reason: `No page content exists for slug "${slug}".`,
      nextAction: "Add page content to local-data or CMS."
    });
    return {
      _id: `missing-${slug}`,
      title: slug,
      slug,
      sections: []
    };
  }

  const normalized = normalizePage(page);
  const validation = validatePageContract(normalized);
  if (!validation.valid) {
    warnContent("PAGE_NOT_FOUND", {
      mode: getConfiguredContentSource(),
      page: slug,
      reason: validation.issues.join(" "),
      nextAction: "Fix required sections/fields before launch."
    });
  }
  return normalized;
}

export function getPageSection(page: PageContent, key: string): PageSection | undefined {
  return page.sections.find((section) => section.key === key);
}
