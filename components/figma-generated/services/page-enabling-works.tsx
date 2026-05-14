import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench } from "lucide-react";

const processSteps = [
  {
    title: "Site Assessment & Planning",
    description:
      "Comprehensive site survey identifying existing structures, services, and ground conditions. We develop detailed enabling works strategies aligned with project timelines."
  },
  {
    title: "Utility Diversions & Protection",
    description:
      "Coordination with utility providers for service diversions, disconnections, and protection. All underground services are identified and safely managed."
  },
  {
    title: "Structural Alterations",
    description:
      "Controlled removal or modification of structural elements. We install temporary supports, create new openings, and strengthen existing structures as required."
  },
  {
    title: "Site Preparation Works",
    description:
      "Ground leveling, excavation, and foundation preparation. We create stable, accessible sites ready for new construction phases."
  },
  {
    title: "Handover & Documentation",
    description:
      "Complete as-built documentation and site handover. We provide full records of all diversions, alterations, and ground conditions encountered."
  }
];

const services = [
  "Site Clearance & Preparation",
  "Structural Alterations",
  "Service Diversions",
  "Temporary Works Design",
  "Ground Works & Excavation",
  "Facade Retention Systems",
  "Party Wall Works",
  "Hoarding & Site Security"
];

const serviceCoverage = [
  "Structural openings, propping & alterations",
  "Utility diversions & protection",
  "Groundworks, hoarding & site logistics",
  "Temporary works design interfaces"
];

export function PageEnablingWorks() {
  return (
    <>
      <section className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Enabling Works & Structural Alterations</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Wrench className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Enabling Works & Structural Alterations</h1>
            <p className="text-xl text-gray-300">
              Site preparation and structural modifications to facilitate new construction or major refurbishment
              projects. We create the foundation for successful development.
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
                  PCL Limited provides comprehensive enabling works that prepare sites for major construction and
                  refurbishment projects. Our services bridge the gap between existing conditions and new development,
                  removing constraints and creating opportunities.
                </p>
                <p>
                  We specialise in complex structural alterations including load-bearing wall removal, floor openings,
                  facade retention, and temporary support systems. Our engineers work closely with design teams to
                  deliver solutions that meet structural, programmatic, and budgetary requirements.
                </p>
                <p>
                  Our enabling works encompass utility diversions, ground preparation, site clearance, and all necessary
                  preliminary operations. We coordinate with multiple stakeholders to ensure seamless handover to
                  follow-on contractors.
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
                  src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80"
                  alt="Site preparation and structural works"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Expert Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  We manage interfaces with structural engineers, utility providers, and follow-on contractors to ensure
                  enabling works integrate seamlessly with overall project programs.
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
              A methodical approach to enabling works ensuring sites are properly prepared for main construction phases.
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
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Enabling Works Services</h2>
              <p className="mb-6 text-muted-foreground">
                Comprehensive enabling works tailored to your development requirements:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-black">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Technical Excellence</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our enabling works are supported by experienced structural and civil engineers. We provide temporary
                  works design, method statements, and full structural calculations where required.
                </p>
                <p>
                  All structural alterations are conducted under Building Control approval with comprehensive monitoring
                  of adjacent structures. We implement vibration monitoring, crack surveys, and protective measures for
                  neighbouring properties.
                </p>
                <p>
                  Our utility coordination includes liaison with all providers, NRSWA compliance for streetworks, and
                  detailed as-built records of all service diversions and installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Discuss Your Enabling Works Requirements</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Get in touch with our technical team to discuss how we can prepare your site for successful development.
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
