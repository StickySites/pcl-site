import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects-page";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Case studies and project experience from PCL Limited across asbestos removal, demolition, enabling works, refurbishments, and remediation.",
  pathname: "/projects",
  ogImage: "/photos/PCLWraps820x500.png"
});

export default function Page() {
  return <ProjectsPage />;
}
