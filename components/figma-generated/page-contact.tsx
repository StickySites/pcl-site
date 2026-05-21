import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { RevealOnView } from "@/components/reveal-on-view";
import { siteContact } from "@/lib/site-contact";

export function PageContact() {
  const { phoneDisplay, phoneTel, email, address, hours } = siteContact;

  return (
    <>
      <RevealOnView>
      <section className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Get in touch</h1>
            <p className="text-xl text-gray-300">
              Every industrial project is different. The best next step is a conversation so we can understand your
              site, programme, and constraints, and recommend the right approach.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              PCL puts clients first with a <strong className="font-semibold text-white">personable, direct</strong>{" "}
              service. We encourage you to <strong className="font-semibold text-white">call us</strong> wherever
              possible so you can speak with someone who understands contracting, not a generic inbox queue.
            </p>
          </div>
        </div>
      </section>
      </RevealOnView>

      <RevealOnView>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="rounded-xl border-2 border-brand bg-muted/40 p-8 shadow-sm lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand">
                <Phone className="h-6 w-6 text-brand-foreground" aria-hidden />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-black">Call us</h2>
              <p className="mb-6 text-muted-foreground">
                Prefer to talk it through? Call during office hours and we&apos;ll help you get the right person on
                the line.
              </p>
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex text-xl font-bold leading-7 text-brand underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                Tel. {phoneDisplay}
              </a>
            </div>

            <div className="rounded-xl border border-border bg-white p-8 shadow-lg lg:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand">
                <Mail className="h-6 w-6 text-brand-foreground" aria-hidden />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-black">Email us</h2>
              <p className="mb-6 text-muted-foreground">
                If email works better, reach us on the address below. We may still follow up by phone to make sure we
                have the full picture.
              </p>
              <a
                href={`mailto:${email}`}
                className="text-xl font-bold leading-7 text-brand underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-8 border-t border-border pt-14 sm:grid-cols-2">
            <div className="flex gap-4 rounded-lg bg-muted p-6">
              <MapPin className="h-6 w-6 shrink-0 text-brand-accent" aria-hidden />
              <div>
                <h3 className="mb-1 font-bold text-black">Head office</h3>
                <p className="text-muted-foreground">PCL Limited (Pier Contractors Limited)</p>
                {address.lines.map((line) => (
                  <p key={line} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg bg-muted p-6">
              <Clock className="h-6 w-6 shrink-0 text-brand-accent" aria-hidden />
              <div>
                <h3 className="mb-1 font-bold text-black">Office hours</h3>
                <p className="font-medium text-black">{hours.summary}</p>
                <p className="mt-2 text-sm text-muted-foreground">{hours.note}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>
      </RevealOnView>
    </>
  );
}
