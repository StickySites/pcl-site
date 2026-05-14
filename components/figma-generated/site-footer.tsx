"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brandImages } from "@/lib/brand";
import { siteContact } from "@/lib/site-contact";
import { FooterSocial } from "@/components/figma-generated/footer-social";

const footerNavigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact us", href: "/contact" }
  ],
  services: [
    { name: "Asbestos Removal", href: "/services/asbestos-removal" },
    { name: "Demolition & Strip Out", href: "/services/demolition" },
    { name: "Enabling Works", href: "/services/enabling-works" },
    { name: "Commercial Refurbishments", href: "/services/commercial-refurbishments" },
    { name: "Remediation", href: "/services/remediation" }
  ]
};

export function SiteFooter() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex flex-row items-start gap-4 max-[360px]:flex-col max-[360px]:gap-3 sm:gap-6">
              <Link
                href="/"
                className="inline-flex shrink-0 items-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-white p-2">
                  {logoFailed ? (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded bg-brand sm:h-20 sm:w-20">
                      <span className="text-3xl font-bold text-brand-foreground sm:text-4xl">P</span>
                    </div>
                  ) : (
                    <span className="relative block h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                      <Image
                        src={brandImages.mark}
                        alt="PCL Limited, Pier Contractors Limited"
                        fill
                        className="object-contain object-center -translate-y-1"
                        sizes="(max-width: 640px) 64px, 80px"
                        onError={() => setLogoFailed(true)}
                      />
                    </span>
                  )}
                </span>
              </Link>
              <p className="min-w-0 flex-1 text-pretty text-gray-400 sm:max-w-md sm:pt-0.5">
                Professional industrial contractors specialising in asbestos removal, demolition, and commercial
                refurbishments. Safety-first approach with comprehensive compliance.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Tel. {siteContact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={`mailto:${siteContact.email}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {siteContact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={siteContact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {siteContact.address.lines.join(", ")}
                </a>
              </div>
              <p className="pt-1 text-xs text-gray-500">{siteContact.hours.summary}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-full min-h-0 flex-col">
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex justify-end pt-8 lg:pt-10">
              <FooterSocial className="mt-0 justify-end" />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
          All projects are managed within industry legislation, approved codes of practice and HSE guidance notes.
          Rigorous audits ensure all quality control procedures are maintained both internally and by external
          independent organisations.
        </p>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm leading-normal text-gray-400">
            <span>© {new Date().getFullYear()} PCL Limited. All rights reserved.</span>
            <span className="select-none px-2 text-gray-600" aria-hidden="true">
              |
            </span>
            <span>
              Site designed and managed by{" "}
              <a
                href="https://stkysites.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-inherit underline-offset-2 transition-colors hover:text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                StickySites
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
