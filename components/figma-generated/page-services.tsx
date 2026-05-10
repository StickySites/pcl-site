import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Hammer, Shield, Sparkles, Wrench } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Asbestos Removal",
    description:
      "HSE-licensed asbestos removal services with comprehensive risk assessment, containment, and disposal. Our certified specialists handle all asbestos types with full regulatory compliance.",
    href: "/services/asbestos-removal",
    features: ["HSE Licensed", "Type 1-3 Asbestos", "Air Monitoring", "Safe Disposal"],
    imageId: "1504307651254-35680f356dfd"
  },
  {
    icon: Hammer,
    title: "Demolition & Strip Out",
    description:
      "Controlled demolition and complete strip-out services for commercial and industrial properties. From selective demolition to complete building teardown.",
    href: "/services/demolition",
    features: ["Controlled Demolition", "Soft Strip", "Machinery Removal", "Waste Management"],
    imageId: "1581094271901-8022df4466f9"
  },
  {
    icon: Wrench,
    title: "Enabling Works & Structural Alterations",
    description:
      "Site preparation and structural modifications to facilitate new construction or major refurbishment projects. We create the foundation for your development.",
    href: "/services/enabling-works",
    features: ["Site Preparation", "Structural Works", "Service Diversions", "Ground Works"],
    imageId: "1590846406792-0adc7f938f1d"
  },
  {
    icon: Building2,
    title: "Commercial Refurbishments",
    description:
      "Complete commercial interior refurbishment with minimal disruption to ongoing operations. We transform spaces while you continue business as usual.",
    href: "/services/commercial-refurbishments",
    features: ["Office Fit-Outs", "Retail Spaces", "Phased Works", "Occupied Buildings"],
    imageId: "1497366216548-37526070297c"
  },
  {
    icon: Sparkles,
    title: "Decontamination & Specialist Cleaning",
    description:
      "Specialist decontamination services for hazardous materials, biological contamination, and sensitive environments. Laboratory-grade cleaning protocols.",
    href: "/services/decontamination",
    features: ["Hazmat Cleaning", "Bio-Decontamination", "Laboratory Grade", "Infection Control"],
    imageId: "1532094349884-543bc11b234d"
  }
];

export function PageServices() {
  return (
    <>
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

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-brand">
                    <service.icon className="h-8 w-8 text-brand-foreground" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-black">{service.title}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>

                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                        <span className="text-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`https://images.unsplash.com/photo-${service.imageId}?w=800&q=80`}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-black p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Not Sure Which Service You Need?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Our experienced team can assess your requirements and recommend the most appropriate solution for your
              project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Contact Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
