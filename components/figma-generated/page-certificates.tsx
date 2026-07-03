import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, FileText } from "lucide-react";
import { RevealOnView } from "@/components/reveal-on-view";
import {
  certificateDocuments,
  isoCertifications,
  publicAssetUrl,
  UKAS_CERT_CHECK_URL
} from "@/lib/certificates";

function CertificateCard({ certificate }: { certificate: (typeof certificateDocuments)[number] }) {
  const fileUrl = publicAssetUrl(certificate.file);

  return (
    <article
      id={certificate.id}
      className="scroll-mt-28 overflow-hidden rounded-lg border border-border bg-white shadow-md"
    >
      <div className="border-b border-border bg-muted/40 px-6 py-5 sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand">
            <FileText className="h-6 w-6 text-brand-foreground" aria-hidden />
          </div>
          <div>
            <h2 className="text-xl font-bold text-black sm:text-2xl">{certificate.title}</h2>
            {certificate.validFrom && certificate.validTo ? (
              <p className="mt-1 text-sm font-medium text-brand">
                Valid {certificate.validFrom} – {certificate.validTo}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        <p className="text-muted-foreground">{certificate.description}</p>

        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted sm:aspect-[16/10]">
          <iframe src={`${fileUrl}#view=FitH`} title={certificate.title} className="h-full w-full" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded bg-brand px-5 py-3 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
            View certificate
          </a>
          <a
            href={fileUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded border-2 border-black bg-transparent px-5 py-3 font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Download className="h-5 w-5" aria-hidden />
            Download PDF
          </a>
        </div>
      </div>
    </article>
  );
}

export function PageCertificates() {
  return (
    <>
      <RevealOnView>
        <section className="bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Certificates &amp; Accreditations</h1>
              <p className="text-xl text-gray-300">
                View our HSE licence, UKAS-accredited ISO certifications, and supporting documentation demonstrating our
                commitment to safety, quality, and environmental management.
              </p>
            </div>
          </div>
        </section>
      </RevealOnView>

      <RevealOnView>
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {certificateDocuments.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </section>
      </RevealOnView>

      <RevealOnView>
        <section id="iso-certifications" className="scroll-mt-28 bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">ISO Certifications</h2>
              <p className="text-lg text-muted-foreground">
                Pier Contractors Limited is certified to ISO 9001, ISO 14001, and ISO 45001 through UKAS-accredited
                certification, reflecting our integrated approach to quality, environmental responsibility, and
                occupational health and safety.
              </p>
              <p className="mt-4 text-muted-foreground">
                You can verify the validity of our ISO certificates by entering the certificate number via{" "}
                <a
                  href={UKAS_CERT_CHECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  certcheck.ukas.com
                </a>
                .
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {isoCertifications.map((certification) => (
                <article
                  key={certification.standard}
                  className="flex flex-col items-center rounded-lg border border-border bg-white p-8 text-center shadow-md"
                >
                  <div className="relative mb-6 h-20 w-full max-w-[14rem] sm:h-24 sm:max-w-[16rem]">
                    <Image
                      src={certification.image}
                      alt={certification.alt}
                      fill
                      sizes="(min-width: 768px) 256px, 224px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-black">{certification.standard}</h3>
                  <p className="text-muted-foreground">{certification.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnView>

      <RevealOnView>
        <section className="bg-black py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Need more information?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              If you require copies of additional accreditations or pre-qualification documentation for tender purposes,
              our team will be happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-4 font-semibold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Get in touch
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>
      </RevealOnView>
    </>
  );
}
