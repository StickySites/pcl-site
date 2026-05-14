import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { getSiteOrigin } from "@/lib/site-url";

const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/projects",
  "/services",
  "/services/asbestos-removal",
  "/services/demolition",
  "/services/enabling-works",
  "/services/refurbishments",
  "/services/remediation"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.85 : 0.9
  }));

  const projectEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${base}/projects/${study.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticEntries, ...projectEntries];
}
