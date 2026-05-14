import type { Metadata } from "next";
import { getSiteOrigin } from "@/lib/site-url";

const SITE_NAME = "PCL Limited";

function absolutePageUrl(pathname: string): string {
  const base = getSiteOrigin();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

/**
 * Page-level metadata with Open Graph and Twitter aligned to `metadataBase` / `getSiteOrigin()`.
 * `title` is normally the segment only (root `title.template` adds `| PCL Limited`).
 * Use `absoluteTitle` on the home page so the title is not templated twice.
 */
export function createPageMetadata(input: {
  title: string;
  description: string;
  pathname: string;
  ogImage?: string;
  /** When true, `title` is emitted as `metadata.title.absolute` (`{title} | PCL Limited`). */
  absoluteTitle?: boolean;
}): Metadata {
  const url = absolutePageUrl(input.pathname);
  const ogTitle = `${input.title} | ${SITE_NAME}`;
  const images = input.ogImage ? [{ url: input.ogImage }] : undefined;
  const path = input.pathname.startsWith("/") ? input.pathname : `/${input.pathname}`;
  const titleField: Metadata["title"] = input.absoluteTitle
    ? { absolute: ogTitle }
    : input.title;

  return {
    title: titleField,
    description: input.description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: ogTitle,
      description: input.description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      ...(images ? { images } : {})
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: ogTitle,
      description: input.description,
      ...(images ? { images } : {})
    }
  };
}
