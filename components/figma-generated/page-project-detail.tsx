import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { RevealOnView } from "@/components/reveal-on-view";

type PageProjectDetailProps = {
  study: CaseStudy;
  pdfHref: string;
};

export function PageProjectDetail({ study, pdfHref }: PageProjectDetailProps) {
  return (
    <>
      <RevealOnView>
      <section className="bg-black py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="text-sm font-semibold text-brand underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{study.title}</h1>
          <p className="mt-2 text-gray-400">
            {study.location} · {study.categoryLabel}
          </p>
          <p className="mt-4 max-w-2xl text-gray-300">{study.description}</p>
          <div className="mt-6">
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Open PDF in new tab
            </a>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="border-t border-gray-800 bg-muted py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <p className="mb-3 px-2 text-center text-xs text-muted-foreground sm:text-left">
            If the document does not appear, use &quot;Open PDF in new tab&quot; above. Your browser controls how PDFs
            are displayed.
          </p>
          <iframe
            src={pdfHref}
            title={`${study.title} case study PDF`}
            className="h-[min(85vh,1200px)] w-full rounded-lg border border-border bg-white shadow-sm"
          />
        </div>
      </section>
      </RevealOnView>
    </>
  );
}
