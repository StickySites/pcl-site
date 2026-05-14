import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, FileCheck, Shield } from "lucide-react";

const processSteps = [
  {
    title: "Initial Survey & Assessment",
    description:
      "Comprehensive asbestos survey conducted by licensed surveyors. We identify all asbestos-containing materials and assess their condition and risk level."
  },
  {
    title: "Risk Assessment & Planning",
    description:
      "Detailed risk assessment and method statement development. We plan containment zones, air monitoring points, and safe removal procedures."
  },
  {
    title: "Containment & Air Monitoring",
    description:
      "Full enclosure construction with negative pressure systems. Continuous air monitoring ensures no fiber release during removal operations."
  },
  {
    title: "Safe Removal & Disposal",
    description:
      "Licensed removal by trained operatives in full PPE. All asbestos waste is double-bagged, labelled, and transported to licensed disposal facilities."
  },
  {
    title: "Clearance Testing & Certification",
    description:
      "Independent four-stage clearance inspection with air testing. Full documentation pack including waste consignment notes and certificates."
  }
];

const safetyFeatures = [
  "HSE Licensed Asbestos Removal",
  "UKAS Accredited Laboratory Testing",
  "Licensed Asbestos Surveyors",
  "Negative Pressure Enclosures",
  "Continuous Air Monitoring",
  "Full PPE & Respiratory Protection",
  "Licensed Waste Disposal",
  "Comprehensive Insurance"
];

const serviceCoverage = [
  "Licensed removal & waste consignment",
  "Surveys, air monitoring & four-stage clearance",
  "Type 1–3 ACMs in occupied & industrial buildings",
  "Method statements, RAMS & client reporting"
];

export function PageAsbestosRemoval() {
  return (
    <>
      <section className="relative bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">Asbestos Removal</span>
          </div>
          <div className="mt-6 max-w-3xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
              <Shield className="h-8 w-8 text-brand-foreground" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Asbestos Removal</h1>
            <p className="text-xl text-gray-300">
              HSE-licensed asbestos removal services with comprehensive risk assessment, containment, and disposal. Our
              certified specialists handle all asbestos types with full regulatory compliance and unwavering safety
              standards.
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
                  PCL Limited provides fully licensed asbestos removal services for all types of asbestos-containing
                  materials. From small-scale removals to major industrial remediation projects, we deliver safe,
                  compliant solutions.
                </p>
                <p>
                  Our team holds all necessary HSE licenses and works to the highest industry standards. We handle Type
                  1, Type 2, and Type 3 asbestos removal, including friable and non-friable materials in occupied and
                  unoccupied buildings.
                </p>
                <p>
                  Every project begins with a thorough survey and risk assessment. We develop detailed method
                  statements, implement comprehensive containment measures, and conduct rigorous air monitoring to
                  ensure complete safety throughout the removal process.
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Asbestos removal team in protective gear"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg border-l-4 border-brand bg-muted p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-brand" />
                  <div>
                    <h3 className="mb-2 font-bold text-black">Safety First</h3>
                    <p className="text-sm text-muted-foreground">
                      All work conducted under strict HSE guidelines with comprehensive risk management and continuous
                      monitoring.
                    </p>
                  </div>
                </div>
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
              A systematic five-stage approach ensuring complete safety and regulatory compliance from initial survey
              through final certification.
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
              <h2 className="mb-6 text-3xl font-bold text-black">Safety & Compliance</h2>
              <p className="mb-6 text-muted-foreground">
                Our asbestos removal operations meet and exceed all regulatory requirements. We maintain comprehensive
                safety protocols, continuous professional development, and full HSE licensing for all team members.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {safetyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-black p-8 text-white">
              <FileCheck className="mb-4 h-12 w-12 text-brand" />
              <h3 className="mb-4 text-2xl font-bold">Comprehensive Documentation</h3>
              <p className="mb-6 text-gray-300">Every asbestos removal project includes complete documentation:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand">•</span>
                  <span>Asbestos survey reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">•</span>
                  <span>Method statements and risk assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">•</span>
                  <span>Air monitoring certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">•</span>
                  <span>Waste consignment notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">•</span>
                  <span>Four-stage clearance certificates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Need Asbestos Removal Services?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Get in touch with our licensed asbestos removal team for a comprehensive site survey and project assessment.
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
