import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building2, CheckCircle2, Factory, HardHat, Shield, ShieldCheck, Sparkles } from "lucide-react";
import { CertificationsStrip } from "@/components/figma-generated/certifications-strip";
import { HomeHeroBackground } from "@/components/figma-generated/home-hero-background";
import { ServiceFaqSection } from "@/components/figma-generated/service-faq-section";
import { RevealOnView } from "@/components/reveal-on-view";
import type { CaseStudyCategory } from "@/lib/case-studies";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { homeFaqItems } from "@/lib/service-faqs";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Asbestos Removal",
    description:
      "Licensed asbestos removal with full HSE compliance and comprehensive risk management.",
    href: "/services/asbestos-removal",
    image: "/photos/PCLWraps820x500.png",
    imageContain: false,
    imageClassName: "object-left",
    coverage: [
      "Licensed removal & disposal",
      "Surveys & air monitoring",
      "Occupied & industrial sites",
      "Documentation & clearance"
    ]
  },
  {
    title: "Demolition & Strip Out",
    description:
      "Controlled demolition and complete strip-out services for commercial and industrial properties.",
    href: "/services/demolition",
    image: "/photos/VerticalDemo.jpg",
    imageContain: false,
    coverage: ["Soft strip & structural", "Waste segregation", "CDM & safety plans", "Neighbouring property protection"]
  },
  {
    title: "Enabling Works & Structural Alterations",
    description:
      "Site preparation and structural alterations to facilitate new construction and refurbishment.",
    href: "/services/enabling-works",
    image: "/photos/StructualBars.jpg",
    imageContain: false,
    coverage: ["Utility diversions", "Temporary works", "Ground & structural prep", "Handover to main works"]
  },
  {
    title: "Refurbishments",
    description:
      "Interior refurbishment and fit-out for workplaces, education, social housing, and public buildings—with phasing that keeps sites operational where possible.",
    href: "/services/refurbishments",
    image: "/photos/BareWall.jpg",
    imageContain: false,
    coverage: ["Cat A / Cat B fit-out", "Education & housing estates", "Phased & occupied sites", "MEP coordination", "Snagging & handover"]
  },
  {
    title: "Remediation",
    description:
      "Industrial and environmental remediation and clearance for sensitive and regulated environments, including hazmat, biological risks, and laboratory-scale programmes.",
    href: "/services/remediation",
    image: "/photos/Remediation.jpg",
    imageContain: false,
    coverage: [
      "Hazmat & biological remediation",
      "Laboratory & clinical settings",
      "Infection control works",
      "Validation & certification"
    ]
  }
];

const trustIndicators = [
  { icon: Shield, text: "HSE Licensed", href: "/certificates#hse-licence" },
  { icon: CheckCircle2, text: "ISO Certified", href: "/certificates#iso-certifications" },
  // { icon: Award, text: "20+ Years Experience" },  // original — kept for reference
  { icon: Award, text: "Combined Over 90+ Years Experience" }
];

const categoryIcons: Record<CaseStudyCategory, typeof Building2> = {
  asbestos: ShieldCheck,
  demolition: Factory,
  refurbishment: Building2,
  enabling: HardHat,
  remediation: Sparkles
};

const featuredCaseStudies = getFeaturedCaseStudies();

export function PageHome() {
  return (
    <>
      <section className="relative min-h-[min(100dvh,900px)] overflow-hidden sm:min-h-[85dvh]">
        <div className="absolute inset-0 z-0">
          <HomeHeroBackground />
        </div>

        <div
          className="absolute inset-0 z-[1] bg-gradient-to-br from-black/75 via-black/50 to-black/70"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-48">
          <div className="max-w-3xl">
            {/* <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Pier Contractors Limited
            </h1> */}
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {/* Licensed asbestos removal and construction contractors */}
              {/* Licensed Asbestos Removal and Construction Contractors */}
              {/* Licensed Asbestos Removal and Construction Company */}
              Professional Asbestos Removal and Construction Company
            </h1>
            {/* <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              A multi-disciplined company specialising in the removal of asbestos and construction works, including
              demolition, structural alterations, fit-out and refurbishment.
            </p> */}
            {/* <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              <span className="font-semibold text-white">Pier Contractors Limited</span> — a multi-disciplined company
              specialising in the removal of asbestos and construction works, including demolition, structural alterations,
              fit-out and refurbishment.
            </p> */}
            {/* <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              <span className="font-semibold text-white">Pier Contractors Limited</span> specialises in asbestos removal,
              demolition, structural alterations, and fit-out and refurbishment.
            </p> */}
            <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              <span className="font-semibold text-white">Pier Contractors Limited</span> specialises in asbestos removal,
              demolition, structural alterations, and refurbishment.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnView>
        <section className="border-b border-border bg-muted py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {trustIndicators.map((item, index) => {
                const content = (
                  <>
                    <item.icon className="h-6 w-6 text-brand" />
                    <span className="font-semibold text-black">{item.text}</span>
                  </>
                );

                return item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center justify-center gap-3 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <item.icon className="h-6 w-6 text-brand" />
                    <span className="font-semibold text-black group-hover:text-brand">{item.text}</span>
                  </Link>
                ) : (
                  <div key={index} className="flex items-center justify-center gap-3">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </RevealOnView>

      <RevealOnView>
        <CertificationsStrip />
      </RevealOnView>

      <RevealOnView>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive industrial contracting solutions delivered with uncompromising safety standards and
              professional excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-14 sm:gap-y-12">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex w-[min(100%,580px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/35 via-white to-white shadow-sm ring-1 ring-black/[0.03] transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:flex-row sm:items-stretch"
              >
                <div className="relative flex min-w-0 flex-1 flex-col border-t border-border/70 px-6 py-6 pb-6 pt-4 sm:border-t-0 sm:border-r-4 sm:border-brand sm:px-6 sm:py-5 sm:pl-6 sm:pr-5">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand">Service</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-black group-hover:text-brand sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-3">{service.description}</p>

                  <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-black/70 sm:mt-6">
                    What we cover
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:gap-2">
                    {service.coverage.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-black/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        <span className="leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col gap-4 border-t border-border/80 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-5">
                    <span className="text-xs text-muted-foreground">HSE-led planning and documentation</span>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                <div className="shrink-0 px-5 pb-5 pt-4 sm:flex sm:w-[48%] sm:flex-col sm:self-stretch sm:p-5 sm:pb-5 sm:pl-2 sm:pr-5 sm:pt-5">
                  <div
                    className={cn(
                      "relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-xl bg-muted sm:mx-0 sm:max-w-none sm:aspect-auto sm:h-full sm:min-h-[220px] sm:flex-1",
                      service.imageContain && "p-4 sm:p-5"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 280px, 100vw"
                      className={cn(
                        service.imageContain
                          ? "object-contain object-center"
                          : cn(
                              "object-cover transition-transform duration-300 group-hover:scale-[1.03]",
                              service.imageClassName
                            )
                      )}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded border-2 border-brand bg-transparent px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <ServiceFaqSection
        intro="Answers about how we work across asbestos removal, demolition, enabling works and structural alterations, refurbishments, and remediation."
        items={homeFaqItems}
      />
      </RevealOnView>

      <RevealOnView>
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delivering complex industrial projects on time, within budget, and to the highest safety standards.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
            {featuredCaseStudies.map((project) => {
              const Icon = categoryIcons[project.category];
              const brandThumb = project.image.includes("pcl-mark");
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block w-[min(100%,360px)] shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={cn(
                        "transition-transform duration-300 group-hover:scale-105",
                        brandThumb ? "object-contain object-center p-8" : "object-cover"
                      )}
                    />
                  </div>
                  <div className="px-6 py-7 sm:p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-brand" aria-hidden />
                      <span className="text-sm font-semibold text-brand">{project.categoryLabel}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-black">{project.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                      <span>{project.location}</span>
                      <span className="font-medium text-brand">View case study →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Get in touch with our team today to discuss your industrial contracting requirements and receive a
              comprehensive project assessment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Get in touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      </RevealOnView>
    </>
  );
}
