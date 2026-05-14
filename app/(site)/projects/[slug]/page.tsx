import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageProjectDetail } from "@/components/figma-generated/page-project-detail";
import { caseStudies, getCaseStudyBySlug, getCaseStudyPdfHref } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/seo-metadata";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: "Project",
      description: "This project could not be found.",
      robots: { index: false, follow: true }
    };
  }
  return createPageMetadata({
    title: study.title,
    description: study.description,
    pathname: `/projects/${study.slug}`,
    ogImage: study.image
  });
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }
  return <PageProjectDetail study={study} pdfHref={getCaseStudyPdfHref(study)} />;
}
