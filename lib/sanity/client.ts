import { createClient, type SanityClient } from "next-sanity";
import { sanityEnv } from "./env";

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!sanityEnv.projectId) return null;
  if (!client) {
    client = createClient({
      apiVersion: sanityEnv.apiVersion,
      dataset: sanityEnv.dataset,
      projectId: sanityEnv.projectId,
      useCdn: true,
      token: sanityEnv.readToken,
      perspective: "published"
    });
  }
  return client;
}
