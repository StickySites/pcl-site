import type { ContentSource } from "./contract";
import { warnContent } from "./warnings";

const allowedSources: ContentSource[] = ["local", "sanity"];

export function getConfiguredContentSource(): ContentSource {
  const raw = (process.env.CONTENT_SOURCE || "local").toLowerCase();
  if (allowedSources.includes(raw as ContentSource)) {
    return raw as ContentSource;
  }

  warnContent("CONTENT_SOURCE_INVALID", {
    mode: raw,
    reason: `Unsupported CONTENT_SOURCE value "${raw}"`,
    nextAction: 'Set CONTENT_SOURCE to "local" or "sanity"; defaulting to "local".'
  });
  return "local";
}
