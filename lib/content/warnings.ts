export type WarningCode =
  | "CONTENT_SOURCE_INVALID"
  | "SANITY_ENV_MISSING"
  | "SANITY_FETCH_FAILED"
  | "PAGE_NOT_FOUND";

type WarningDetails = {
  mode: string;
  page?: string;
  sectionKey?: string;
  reason: string;
  nextAction: string;
};

export function warnContent(code: WarningCode, details: WarningDetails) {
  const payload = {
    code,
    ...details
  };
  console.warn(`[content-warning] ${JSON.stringify(payload)}`);
}
