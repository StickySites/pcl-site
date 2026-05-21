import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Hammer, Shield, Sparkles, Wrench } from "lucide-react";
import { RevealOnView } from "@/components/reveal-on-view";
import { cn } from "@/lib/utils";

/** Matches intrinsic dimensions of `public/photos/AsbestosRemovalPerson.png` (2940×1644). */
const ASBESTOS_REMOVAL_PERSON_IMAGE = "/photos/AsbestosRemovalPerson.png";

const services = [
  {
    icon: Shield,
    title: "Asbestos Removal",
    description:
      "HSE-licensed asbestos removal services with comprehensive risk assessment, containment, and disposal. Our certified specialists handle all asbestos types with full regulatory compliance.",
    href: "/services/asbestos-removal",
    coverage: [
      "Licensed removal & waste consignment",
      "Surveys, air monitoring & four-stage clearance",
      "Type 1–3 ACMs in occupied & industrial buildings",
      "Method statements, RAMS & client reporting"
    ],
    image: ASBESTOS_REMOVAL_PERSON_IMAGE
  },
  {
    icon: Hammer,
    title: "Demolition & Strip Out",
    description:
      "Controlled demolition and complete strip-out services for commercial and industrial properties. From selective demolition to full building demolition.",
    href: "/services/demolition",
    coverage: [
      "Soft strip, structural & façade retention",
      "Dust, noise & vibration controls",
      "Segregation, recycling & licensed disposal",
      "CDM coordination & utility isolations"
    ],
    image: "/photos/VerticalDemo.jpg"
  },
  {
    icon: Wrench,
    title: "Enabling Works & Structural Alterations",
    description:
      "Site preparation and structural modifications to facilitate new construction or major refurbishment projects. We create the foundation for your development.",
    href: "/services/enabling-works",
    coverage: [
      "Structural openings, propping & alterations",
      "Utility diversions & protection",
      "Groundworks, hoarding & site logistics",
      "Temporary works design interfaces"
    ],
    image: "/photos/StructualBars.jpg"
  },
  {
    icon: Building2,
    title: "Refurbishments",
    description:
      "Interior refurbishment and fit-out for workplaces, education, social housing, and public buildings. We programme phased and occupied delivery to limit disruption.",
    href: "/services/refurbishments",
    coverage: [
      "Cat A / Cat B & tenant fit-out",
      "Phased works in occupied buildings, campuses & housing",
      "Finishes, partitions & ceilings",
      "Quality plans, commissioning & O&M handover"
    ],
    image: "/photos/BareWall.jpg"
  },
  {
    icon: Sparkles,
    title: "Remediation",
    description:
      "Industrial and environmental remediation and clearance for hazardous, biological, and sensitive environments, from containment through to verified sign-off.",
    href: "/services/remediation",
    coverage: [
      "Hazmat & biological remediation",
      "Laboratory, healthcare & industrial sites",
      "Containment, negative pressure & validation",
      "Clearance documentation & certification"
    ],
    image: "/photos/Remediation.jpg"
  }
];

export function PageServices() {
  return (
    <>
      <RevealOnView>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive industrial contracting solutions delivered with uncompromising safety standards and
              professional excellence. Every service backed by full accreditation and regulatory compliance.
            </p>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20 sm:gap-24 lg:gap-28">
            {services.map((service, index) => {
              const imageOnLeft = index % 2 === 1;
              return (
                <article
                  key={service.title}
                  className={cn(
                    "grid gap-10 rounded-2xl border p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-10",
                    imageOnLeft
                      ? "border-border/80 bg-muted/50 ring-1 ring-black/[0.04]"
                      : "border-border bg-white ring-1 ring-black/[0.06]"
                  )}
                >
                  <div className={imageOnLeft ? "lg:order-2" : undefined}>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
                      <service.icon className="h-8 w-8 text-brand-foreground" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-black">{service.title}</h2>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-black">What we do</h3>
                    <p className="mb-7 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-black">
                      What this service covers
                    </h3>
                    <ul className="mb-8 space-y-2.5">
                      {service.coverage.map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-black">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Learn more
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className={imageOnLeft ? "lg:order-1" : undefined}>
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-xl shadow-md",
                        service.image === ASBESTOS_REMOVAL_PERSON_IMAGE
                          ? "aspect-[2940/1644] bg-muted"
                          : "aspect-[4/3]",
                        imageOnLeft ? "ring-1 ring-black/10" : "ring-1 ring-black/[0.07]"
                      )}
                    >
                      <div
                        className={
                          service.image === ASBESTOS_REMOVAL_PERSON_IMAGE
                            ? "absolute -inset-px"
                            : "absolute inset-0"
                        }
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Not sure which service you need?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Call or email us: every site is different and we&apos;ll help you scope the right approach.
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
