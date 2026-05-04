import { getSanityClient } from "./client";

export async function safeSanityFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  const client = getSanityClient();
  if (!client) return null;
  try {
    return await client.fetch<T>(query, params || {});
  } catch {
    return null;
  }
}
