import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FlaskConical } from "lucide-react";
import { ServiceFaqSection } from "@/components/figma-generated/service-faq-section";
import { TestimonialsSection } from "@/components/figma-generated/testimonials-section";
import { RevealOnView } from "@/components/reveal-on-view";
import { remediationFaqItems } from "@/lib/service-faqs";

const processSteps = [
  {
    title: "Contamination assessment",
    description:
      "Detailed site assessment to identify contamination type, extent, and risk level. We develop appropriate testing protocols and sampling strategies."
  },
  {
    title: "Method statement & risk assessment",
    description:
      "Comprehensive method statement detailing remediation procedures, PPE requirements, and waste handling. Full risk assessments for operatives and building occupants."
  },
  {
    title: "Containment & control measures",
    description:
      "Establishment of controlled zones with appropriate containment. We implement access controls, air filtration, and negative pressure systems where required."
  },
  {
    title: "Remediation works",
    description:
      "Systematic remediation using appropriate methods and verified protocols. All work conducted by trained specialists."
  },
  {
    title: "Validation testing & certification",
    description:
      "Independent testing to verify effectiveness. We provide comprehensive certification and clearance documentation."
  }
];

const coverageAreas = [
  "Hazardous material remediation",
  "Biological hazard remediation",
  "Laboratory decommissioning",
  "Chemical spill response",
  "Infection control works",
  "Clinical and sensitive environments",
  "Post-incident remediation",
  "Disinfection and clearance protocols"
];

export function PageRemediation() {
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
            <span className="text-white">Remediation</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <FlaskConical className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Remediation</h1>
            <p className="mb-6 mt-2 text-lg text-gray-300 sm:text-xl">Industrial & environmental remediation</p>
            <p className="text-xl text-gray-300">
              Rigorous planning and delivery for hazardous materials, biological risks, and sensitive environments, from
              assessment and containment through to verified clearance and handover documentation.
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
              <h2 className="mb-6 text-3xl font-bold text-black">What we do</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PCL Limited delivers remediation for environments affected by hazardous materials, biological agents,
                  or situations that need controlled works and formal clearance. Our team handles complex scenarios that
                  routine maintenance cannot cover.
                </p>
                <p>
                  We support laboratories, healthcare facilities, industrial sites, and commercial properties. Our
                  approach meets stringent regulatory expectations and is supported by independent verification where
                  required.
                </p>
                <p>
                  Every project starts with assessment and risk evaluation. We agree site-specific procedures,
                  implement containment where needed, and validate outcomes before handover and certification.
                </p>
              </div>

              <h3 className="mb-3 mt-10 text-sm font-semibold uppercase tracking-wide text-black">
                What this service covers
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Typical scope under our remediation delivery includes:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {coverageAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                    <span className="text-sm text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/photos/Remediation.jpg"
                  alt="Remediation works on site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg shadow-md ring-1 ring-black/[0.06]">
                <Image
                  src="/photos/Ventilation.png"
                  alt="Engineered ventilation and air control for containment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Certified specialists</h3>
                <p className="text-sm text-muted-foreground">
                  Our specialists train continuously in hazardous material handling, infection control, and remediation
                  techniques appropriate to each environment.
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
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Our process</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A structured approach to remediation and clearance, from first assessment through to certification.
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
          <div className="rounded-lg bg-black p-8 text-white sm:p-12">
            <h3 className="mb-4 text-2xl font-bold">Specialist expertise</h3>
            <div className="grid gap-8 text-gray-300 lg:grid-cols-3">
              <p>
                Our teams work within COSHH, infection control, and hazardous materials requirements. Competency and
                certification are maintained for the environments we enter.
              </p>
              <p>
                We use validated methods, appropriate agents and equipment, and peer input where needed (for example from
                industrial hygiene or laboratory disciplines).
              </p>
              <p>
                Verification testing supports sign-off. You receive clear documentation: sampling outcomes, air quality
                data where relevant, and clearance records aligned to the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection
        intro="Remediation scope, containment, validation, and how we align with regulated or sensitive environments."
        items={remediationFaqItems}
      />

      <RevealOnView>
        <TestimonialsSection className="bg-white" />
      </RevealOnView>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Discuss remediation with us</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Call or email so we can understand your site and agree the right scope, especially when programmes or
              regulators need a clear remediation strategy.
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
                View related projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
