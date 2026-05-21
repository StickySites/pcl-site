import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Shield, Target, Users } from "lucide-react";
import { RevealOnView } from "@/components/reveal-on-view";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Uncompromising commitment to health and safety compliance in every project we undertake."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "ISO-certified processes ensuring the highest standards of workmanship and project delivery."
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Highly trained specialists with extensive experience in industrial contracting and remediation."
  },
  {
    icon: Target,
    title: "Client Focus",
    description: "Tailored solutions that meet specific project requirements while minimising operational disruption."
  }
];

const credentials = [
  "HSE Licensed Asbestos Removal",
  "ISO 9001 Quality Management",
  "ISO 14001 Environmental Management",
  "ISO 45001 Occupational Health & Safety",
  "CHAS Accredited",
  "Constructionline Gold Member"
];

export function PageAbout() {
  return (
    <>
      <RevealOnView>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">About PCL Limited</h1>
            <p className="text-xl text-gray-300">
              Two decades of professional excellence in industrial contracting, delivering complex projects with
              unwavering safety standards and technical expertise.
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
              <h2 className="mb-6 text-3xl font-bold text-black">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded over twenty years ago, PCL Limited (Pier Contractors Limited) has established itself as a
                  trusted partner for complex industrial contracting projects across the United Kingdom.
                </p>
                <p>
                  Our journey began with a simple mission: to provide professional, safety-first industrial contracting
                  services that clients can rely on. Today, we deliver comprehensive solutions spanning asbestos
                  removal, demolition, enabling works and structural alterations, refurbishments, and remediation.
                </p>
                <p>
                  Every project we undertake is guided by our core principle: safety is non-negotiable. This commitment
                  has earned us the trust of major commercial and industrial clients who depend on our expertise to
                  deliver challenging projects on time, within budget, and to the highest standards.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/photos/PCLWelfareBox.jpg"
                  alt="PCL Limited team on site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-lg bg-brand p-6 text-brand-foreground">
                <div className="mb-2 text-4xl font-bold">20+</div>
                <div className="text-lg">Years of Professional Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand">
                  <value.icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="mb-3 font-bold text-black">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Credentials & Accreditations</h2>
              <p className="mb-6 text-muted-foreground">
                Our comprehensive accreditations and certifications demonstrate our commitment to the highest industry
                standards across quality, safety, and environmental management.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
                    <span className="text-black">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-black">Safety Culture</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At PCL Limited, safety is embedded in our organisational culture. Every team member receives
                  comprehensive training, and our rigorous safety protocols exceed industry requirements.
                </p>
                <p>
                  We maintain zero-tolerance for safety shortcuts. Our HSE management system ensures that every project
                  phase, from initial planning through final handover, is executed with meticulous attention to risk
                  management and regulatory compliance.
                </p>
                <p>
                  Our track record speaks for itself: thousands of projects completed without major incident,
                  maintaining one of the industry&apos;s strongest safety performance records.
                </p>
              </div>
              <div className="mt-6 rounded-lg border-l-4 border-brand bg-muted p-6">
                <p className="font-semibold text-black">
                  &ldquo;Safety isn&apos;t just a priority; it&apos;s our fundamental operating principle.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Work With PCL Limited</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Partner with a team that brings two decades of industrial contracting expertise and an uncompromising
              commitment to safety and quality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
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
