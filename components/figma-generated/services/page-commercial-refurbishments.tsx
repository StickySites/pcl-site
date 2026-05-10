import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    title: "Initial Consultation & Survey",
    description:
      "Detailed site survey and client briefing to understand requirements, constraints, and operational needs. We assess existing conditions and identify opportunities."
  },
  {
    title: "Design Coordination & Planning",
    description:
      "Collaboration with design teams to develop buildable solutions. We identify critical path items, phasing requirements, and coordination with ongoing operations."
  },
  {
    title: "Phased Strip-Out & Preparation",
    description:
      "Systematic removal of existing fit-out with minimal disruption. Works are phased to maintain partial occupancy and business continuity where required."
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
  "Office Fit-Outs",
  "Retail Space Refurbishment",
  "Occupied Building Works",
  "Phased Refurbishment Programs",
  "Cat A & Cat B Fit-Outs",
  "M&E Coordination",
  "Landlord & Tenant Works",
  "Out-of-Hours Working"
];

export function PageCommercialRefurbishments() {
  return (
    <>
      <section className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Commercial Refurbishments</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Building2 className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Commercial Refurbishments</h1>
            <p className="text-xl text-gray-300">
              Complete commercial interior refurbishment with minimal disruption to ongoing operations. We transform
              spaces while you continue business as usual.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">What We Do</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PCL Limited delivers comprehensive commercial refurbishment services for offices, retail spaces, and
                  commercial properties. From complete Cat A shell finishes to bespoke Cat B fit-outs, we create
                  functional, attractive spaces that meet modern workplace standards.
                </p>
                <p>
                  Our expertise in occupied building refurbishment allows businesses to maintain operations during works.
                  We implement carefully planned phasing, out-of-hours working, and noise/dust control measures to
                  minimize disruption.
                </p>
                <p>
                  Every refurbishment project is managed with meticulous attention to program, quality, and budget. We
                  coordinate all trades, manage interfaces with landlords and tenants, and ensure works comply with
                  building regulations and lease requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern commercial office interior"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Minimal Disruption</h3>
                <p className="text-sm text-muted-foreground">
                  Our phased approach and flexible working patterns allow businesses to continue operations during
                  refurbishment, minimizing downtime and maintaining productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="mb-4 text-2xl font-bold">Refurbishment Capabilities</h3>
              <p className="mb-6 text-gray-300">
                Full-service commercial refurbishment from initial strip-out through final handover:
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
              <h2 className="mb-6 text-3xl font-bold text-black">Quality & Compliance</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All refurbishment works are delivered to meet Building Regulations, CDM requirements, and lease
                  covenants. We obtain necessary approvals from building control, landlords, and managing agents.
                </p>
                <p>
                  Our quality management systems ensure consistent standards across all trades. Regular inspections,
                  quality hold points, and comprehensive snagging procedures guarantee excellent finished quality.
                </p>
                <p>
                  We coordinate fire stopping, acoustic testing, and all necessary commissioning activities. Full O&M
                  documentation and warranty packages are provided at project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Transform Your Commercial Space</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Discuss your refurbishment requirements with our experienced project team.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Request a Quote
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
