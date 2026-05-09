import type { PageContent, PageSection } from "./contract";

const requiredKeysBySlug: Record<string, string[]> = {
  home: ["hero"]
};

function hasValue(value: string | undefined | null): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function normalizeSection(section: PageSection): PageSection {
  return {
    ...section,
    cta: section.cta || { label: undefined, href: undefined },
    media: section.media || { imageUrl: undefined, imageAlt: undefined }
  };
}

export function normalizePage(page: PageContent): PageContent {
  return {
    ...page,
    sections: page.sections.map(normalizeSection)
  };
}

export function validatePageContract(page: PageContent): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  const requiredKeys = requiredKeysBySlug[page.slug] || [];

  for (const key of requiredKeys) {
    const section = page.sections.find((candidate) => candidate.key === key);
    if (!section) {
      issues.push(`Missing required section key "${key}" for slug "${page.slug}".`);
      continue;
    }

    if (key === "hero" && !hasValue(section.heading)) {
      issues.push(`Section "${key}" is missing required field "heading".`);
    }
  }

  return { valid: issues.length === 0, issues };
}
