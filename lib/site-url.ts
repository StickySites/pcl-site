/**
 * Canonical absolute origin (no trailing slash) for `metadataBase`, Open Graph,
 * sitemap entries, and JSON-LD.
 *
 * **Production:** set `NEXT_PUBLIC_SITE_URL` to the public site origin, e.g.
 * `https://www.example.com` (no trailing slash). Next.js recommends this so
 * relative asset paths in metadata resolve to absolute URLs.
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
 *
 * **Local dev:** when unset, falls back to `http://localhost:3000`.
 *
 * **Vercel:** if `NEXT_PUBLIC_SITE_URL` is omitted, uses `https://${VERCEL_URL}` when present.
 * Prefer setting `NEXT_PUBLIC_SITE_URL` to your canonical domain (including www/non-www).
 */
export function getSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  // Production elsewhere without env: relative OG URLs may be wrong until `NEXT_PUBLIC_SITE_URL` is set.
  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteOrigin()}/`);
}
