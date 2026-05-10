import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const processSteps = [
  {
    title: "Contamination Assessment",
    description:
      "Detailed site assessment to identify contamination type, extent, and risk level. We develop appropriate testing protocols and sampling strategies."
  },
  {
    title: "Method Statement & Risk Assessment",
    description:
      "Comprehensive method statement detailing decontamination procedures, PPE requirements, and waste handling. Full risk assessments for operatives and building occupants."
  },
  {
    title: "Containment & Control Measures",
    description:
      "Establishment of controlled zones with appropriate containment. We implement access controls, air filtration, and negative pressure systems where required."
  },
  {
    title: "Decontamination Procedures",
    description:
      "Systematic decontamination using appropriate chemicals and techniques. All work conducted by trained specialists with verified cleaning protocols."
  },
  {
    title: "Validation Testing & Certification",
    description:
      "Independent testing to verify decontamination effectiveness. We provide comprehensive certification and clearance documentation."
  }
];

const services = [
  "Hazardous Material Cleaning",
  "Biological Decontamination",
  "Laboratory Decommissioning",
  "Chemical Spill Response",
  "Infection Control Cleaning",
  "Clinical Waste Areas",
  "Post-Incident Decontamination",
  "Specialist Disinfection"
];

export function PageDecontamination() {
  return (
    <>
      <section className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Decontamination & Specialist Cleaning</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Sparkles className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Decontamination & Specialist Cleaning
            </h1>
            <p className="text-xl text-gray-300">
              Specialist decontamination services for hazardous materials, biological contamination, and sensitive
              environments. Laboratory-grade cleaning protocols delivered by trained specialists.
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
                  PCL Limited provides specialist decontamination services for environments contaminated with hazardous
                  materials, biological agents, or requiring enhanced cleaning protocols. Our trained specialists handle
                  complex decontamination scenarios that standard cleaning cannot address.
                </p>
                <p>
                  We deliver decontamination services for laboratories, healthcare facilities, industrial sites, and
                  commercial properties. Our protocols meet stringent regulatory requirements and are validated through
                  independent testing.
                </p>
                <p>
                  Every decontamination project begins with thorough contamination assessment and risk evaluation. We
                  develop site-specific procedures, implement appropriate containment, and validate effectiveness
                  through comprehensive testing before clearance certification.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                  alt="Specialist decontamination team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-muted p-6">
                <h3 className="mb-2 font-bold text-black">Certified Specialists</h3>
                <p className="text-sm text-muted-foreground">
                  Our decontamination specialists hold relevant certifications and undergo continuous training in
                  hazardous material handling, infection control, and specialist cleaning techniques.
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
              A systematic approach to decontamination ensuring complete remediation and verified clearance.
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
              <h2 className="mb-6 text-3xl font-bold text-black">Decontamination Services</h2>
              <p className="mb-6 text-muted-foreground">
                Comprehensive specialist cleaning and decontamination capabilities:
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
              <h3 className="mb-4 text-2xl font-bold">Specialist Expertise</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Our decontamination specialists are trained in COSHH regulations, infection control protocols, and
                  handling of hazardous materials. All operatives hold relevant safety certifications and undergo regular
                  competency assessments.
                </p>
                <p>
                  We utilize validated cleaning agents, specialist equipment, and proven decontamination techniques. Our
                  procedures are developed in consultation with microbiologists and industrial hygienists.
                </p>
                <p>
                  Independent verification testing confirms decontamination effectiveness. We provide comprehensive
                  certification including surface sampling results, air quality data, and clearance certificates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Need Specialist Decontamination?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Contact our decontamination specialists for expert assessment and comprehensive remediation solutions.
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
