import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Shield } from "lucide-react";
import { HomeHeroBackground } from "@/components/figma-generated/home-hero-background";

const services = [
  {
    title: "Asbestos Removal",
    description:
      "Licensed asbestos removal with full HSE compliance and comprehensive risk management.",
    href: "/services/asbestos-removal"
  },
  {
    title: "Demolition & Strip Out",
    description:
      "Controlled demolition and complete strip-out services for commercial and industrial properties.",
    href: "/services/demolition"
  },
  {
    title: "Enabling Works",
    description:
      "Site preparation and structural alterations to facilitate new construction and refurbishment.",
    href: "/services/enabling-works"
  },
  {
    title: "Commercial Refurbishments",
    description:
      "Complete commercial interior refurbishment with minimal disruption to ongoing operations.",
    href: "/services/commercial-refurbishments"
  },
  {
    title: "Decontamination",
    description:
      "Specialist cleaning and decontamination for hazardous materials and sensitive environments.",
    href: "/services/decontamination"
  }
];

const trustIndicators = [
  { icon: Shield, text: "HSE Licensed" },
  { icon: CheckCircle2, text: "ISO Certified" },
  { icon: Award, text: "20+ Years Experience" }
];

const featuredProjects = [
  {
    title: "Industrial Warehouse Demolition",
    category: "Demolition",
    location: "Manchester",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
  },
  {
    title: "Commercial Office Refurbishment",
    category: "Refurbishment",
    location: "London",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    title: "Hospital Asbestos Remediation",
    category: "Asbestos Removal",
    location: "Birmingham",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  }
];

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
        <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-48">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Professional Industrial Contractors
            </h1>
            <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              PCL Limited delivers comprehensive industrial contracting services with an unwavering commitment to
              safety, compliance, and quality. From asbestos removal to complete demolition projects.
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
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <item.icon className="h-6 w-6 text-brand" />
                <span className="font-semibold text-black">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive industrial contracting solutions delivered with uncompromising safety standards and
              professional excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-brand hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <h3 className="mb-3 font-bold text-black group-hover:text-brand">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-brand">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
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

      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delivering complex industrial projects on time, within budget, and to the highest safety standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-semibold text-brand">{project.category}</div>
                  <h3 className="mb-2 font-bold text-black">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
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

      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Contact our team today to discuss your industrial contracting requirements and receive a comprehensive
              project assessment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
