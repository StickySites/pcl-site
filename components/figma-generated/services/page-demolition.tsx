import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Hammer } from "lucide-react";
import { ServiceFaqSection } from "@/components/figma-generated/service-faq-section";
import { TestimonialsSection } from "@/components/figma-generated/testimonials-section";
import { RevealOnView } from "@/components/reveal-on-view";
import { demolitionFaqItems } from "@/lib/service-faqs";

const processSteps = [
  {
    title: "Site Survey & Assessment",
    description:
      "Comprehensive structural survey and utility mapping. We assess building condition, identify hazards, and plan safe demolition sequencing."
  },
  {
    title: "Method Statement Development",
    description:
      "Detailed demolition method statement with risk assessments. We plan access routes, exclusion zones, and dust suppression measures."
  },
  {
    title: "Soft Strip & Hazard Removal",
    description:
      "Complete removal of non-structural elements, fixtures, and hazardous materials. All soft strip waste is segregated for recycling."
  },
  {
    title: "Controlled Demolition",
    description:
      "Systematic structural demolition using appropriate plant and machinery. Continuous monitoring ensures neighbouring properties remain protected."
  },
  {
    title: "Waste Processing & Site Clearance",
    description:
      "On-site crushing and segregation for maximum recycling. Final site clearance leaves a clean, level surface ready for redevelopment."
  }
];

const capabilities = [
  "Complete Building Demolition",
  "Selective Demolition",
  "Soft Strip Services",
  "Machinery & Plant Removal",
  "Interior Gutting",
  "Facade Retention",
  "On-Site Crushing",
  "Waste Segregation & Recycling"
];

const serviceCoverage = [
  "Soft strip, structural & façade retention",
  "Dust, noise & vibration controls",
  "Segregation, recycling & licensed disposal",
  "CDM coordination & utility isolations"
];

export function PageDemolition() {
  return (
    <>
      <RevealOnView>
      <section className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Demolition & Strip Out</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Hammer className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Demolition & Strip Out</h1>
            <p className="text-xl text-gray-300">
              Controlled demolition and complete strip-out services for commercial and industrial properties. From
              selective demolition to full building demolition, delivered with precision and safety.
            </p>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">What We Do</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PCL Limited delivers professional demolition services for structures of all sizes. Whether you need
                  complete building demolition, selective structural removal, or interior strip-out, we provide safe,
                  efficient solutions.
                </p>
                <p>
                  Our experienced team uses modern plant and equipment to execute controlled demolition projects. We
                  work to minimise dust, noise, and vibration while maximising material recovery for recycling and reuse.
                </p>
                <p>
                  Every demolition project begins with thorough structural assessment and detailed planning. We
                  coordinate utility disconnections, implement comprehensive safety measures, and ensure neighbouring
                  properties remain fully protected throughout the works.
                </p>
              </div>
              <h3 className="mb-3 mt-10 text-sm font-semibold uppercase tracking-wide text-black">
                What this service covers
              </h3>
              <ul className="space-y-2">
                {serviceCoverage.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-black">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/photos/Demolition.jpg"
                  alt="Controlled demolition in progress"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Recycling Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  We achieve over 90% waste diversion through on-site crushing, material segregation, and partnerships
                  with licensed recycling facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnView>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A structured approach to controlled demolition ensuring safety, environmental responsibility, and
              efficient project delivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand">
                  <span className="text-xl font-bold text-brand-foreground">{index + 1}</span>
                </div>
                <h3 className="mb-3 font-bold text-black">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-lg bg-black p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Demolition Capabilities</h3>
              <p className="mb-6 text-gray-300">
                Comprehensive demolition services tailored to your project requirements:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-white">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Safety & Compliance</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All demolition works are conducted under strict CDM regulations with comprehensive risk assessments
                  and method statements. Our team holds CSCS cards and CPCS plant operator qualifications.
                </p>
                <p>
                  We implement full exclusion zones, dust suppression systems, and vibration monitoring to protect
                  neighbouring properties. All works are coordinated with local authorities and utility companies.
                </p>
                <p>
                  Our demolition projects maintain excellent environmental performance through maximised recycling,
                  proper waste classification, and licensed disposal of any hazardous materials encountered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection
        intro="Practical questions on demolition, strip-out, controls, and how we plan work around your site."
        items={demolitionFaqItems}
      />

      <RevealOnView>
        <TestimonialsSection className="bg-white" />
      </RevealOnView>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Plan Your Demolition Project</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Get in touch with our demolition specialists for a site assessment and detailed project proposal.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Related Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
