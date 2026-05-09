import type { PageContent } from "../contract";
import { localPages } from "../local-data";

export async function getLocalPageContent(slug: string): Promise<PageContent | null> {
  return localPages.find((page) => page.slug === slug) || null;
}
