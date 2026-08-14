import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { ServiceFaqSection } from "@/components/figma-generated/service-faq-section";
import { TestimonialsSection } from "@/components/figma-generated/testimonials-section";
import { RevealOnView } from "@/components/reveal-on-view";
import { getTestimonialsForService } from "@/lib/testimonials";
import { refurbishmentFaqItems } from "@/lib/service-faqs";

const processSteps = [
  {
    title: "Initial Consultation & Survey",
    description:
      "Detailed site survey and client briefing to understand requirements, constraints, and how the building is used—whether offices, education, housing, or public-facing facilities. We assess existing conditions and identify opportunities."
  },
  {
    title: "Design Coordination & Planning",
    description:
      "Collaboration with design teams to develop buildable solutions. We identify critical path items, phasing requirements, and coordination with ongoing operations, residents, or academic calendars where they apply."
  },
  {
    title: "Phased Strip-Out & Preparation",
    description:
      "Systematic removal of existing fit-out with minimal disruption. Works are phased to maintain partial occupancy, teaching continuity, or decant routes where required."
  },
  {
    title: "Refurbishment Installation",
    description:
      "Complete installation of new partitions, ceilings, finishes, and services. We coordinate MEP installations and ensure quality throughout."
  },
  {
    title: "Snagging & Handover",
    description:
      "Comprehensive snagging, deep cleaning, and client handover. We provide operation and maintenance manuals and warranty documentation."
  }
];

const capabilities = [
  "Education & campus programmes",
  "Social housing & residential blocks",
  "Office & workplace fit-out",
  "Retail & leisure",
  "Occupied & phased programmes",
  "Cat A & Cat B fit-outs",
  "M&E coordination",
  "Landlord & tenant works",
  "Out-of-hours & term-time sequencing"
];

const serviceCoverage = [
  "Cat A / Cat B & tenant fit-out",
  "Phased works in occupied buildings",
  "Finishes, partitions & ceilings",
  "Quality plans, commissioning & O&M handover"
];

export function PageRefurbishments() {
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
            <span className="text-white">Refurbishments</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Building2 className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Refurbishments</h1>
            <p className="text-xl text-gray-300">
              Interior refurbishment and fit-out for workplaces, education, social housing, and public buildings—with
              phasing and controls that keep sites operational wherever possible.
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
                  PCL Limited delivers refurbishment programmes across offices, retail, higher and further education,
                  schools, social housing, and wider residential blocks, plus civic and institutional estates. From Cat A
                  shell readiness to bespoke Cat B fit-out, we create durable, compliant environments aligned to how each
                  building is used.
                </p>
                <p>
                  Our expertise in occupied buildings means we can sequence works around teaching terms, resident
                  decants, out-of-hours windows, and operational priorities. We plan segregation, noise and dust controls,
                  and access routes so day-to-day activity can continue safely alongside the contract.
                </p>
                <p>
                  Every refurbishment is managed with clear attention to programme, quality, and budget. We coordinate
                  trades, manage interfaces with landlords, tenants, and managing agents, and ensure outputs meet Building
                  Regulations, safeguarding requirements, and lease or funding conditions where they apply.
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
                  src="/photos/BareWall.jpg"
                  alt="Refurbished interior with modern finishes"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Minimal disruption</h3>
                <p className="text-sm text-muted-foreground">
                  Phased delivery and flexible working patterns help occupiers, residents, and campus users stay on site
                  where the programme allows—reducing downtime while protecting safety and quality.
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
              A structured refurbishment approach ensuring quality delivery within programmed timescales and budget.
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
              <h3 className="mb-4 text-2xl font-bold">Refurbishment capabilities</h3>
              <p className="mb-6 text-gray-300">
                Full-service refurbishment from initial strip-out through final handover:
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
              <h2 className="mb-6 text-3xl font-bold text-black">Quality & compliance</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Works are delivered to meet Building Regulations, CDM requirements, and lease or landlord covenants. We
                  obtain necessary approvals from building control, estates teams, and managing agents, including
                  safeguarding and resident engagement considerations on housing and education sites.
                </p>
                <p>
                  Our quality management systems ensure consistent standards across trades. Regular inspections, quality
                  hold points, and structured snagging help deliver finished spaces that meet specification and handover
                  expectations.
                </p>
                <p>
                  We coordinate fire stopping, acoustic testing, and commissioning activities. Full O&M documentation and
                  warranty packages are provided at project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaqSection
        intro="Refurbishment delivery, phasing, quality, and how we keep your building operational where possible."
        items={refurbishmentFaqItems}
      />

      <RevealOnView>
        <TestimonialsSection className="bg-white" items={getTestimonialsForService("refurbishment")} />
      </RevealOnView>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Transform your space</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Discuss your refurbishment requirements with our experienced project team.
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
