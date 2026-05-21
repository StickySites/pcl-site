"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brandImages } from "@/lib/brand";
import { serviceNavLinks } from "@/lib/service-nav";
import { siteContact } from "@/lib/site-contact";
import { FooterSocial } from "@/components/figma-generated/footer-social";

const footerNavigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Get in touch", href: "/contact" }
  ],
  services: [...serviceNavLinks]
};

export function SiteFooter() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 text-center lg:grid lg:grid-cols-4 lg:gap-8 lg:text-left">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-start lg:gap-4 sm:gap-6">
              <Link
                href="/"
                className="inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-white p-1.5 sm:p-2">
                  {logoFailed ? (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                      <span className="text-2xl font-bold text-brand-foreground sm:text-3xl lg:text-4xl">P</span>
                    </div>
                  ) : (
                    <span className="relative block h-12 w-12 shrink-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                      <Image
                        src={brandImages.mark}
                        alt="PCL Limited, Pier Contractors Limited"
                        fill
                        className="object-contain object-center -translate-y-1"
                        sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                        onError={() => setLogoFailed(true)}
                      />
                    </span>
                  )}
                </span>
              </Link>
              <p className="min-w-0 text-pretty text-sm text-gray-400 sm:text-base lg:max-w-md lg:flex-1 lg:pt-0.5">
                Professional industrial contractors specialising in asbestos removal, demolition, and commercial
                refurbishments. Safety-first approach with comprehensive compliance.
              </p>
            </div>
            <div className="mx-auto mt-6 max-w-md space-y-2 text-sm text-gray-400 lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={`tel:${siteContact.phoneTel}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Tel. {siteContact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={`mailto:${siteContact.email}`}
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {siteContact.email}
                </a>
              </div>
              <div className="flex items-start justify-center gap-2 lg:items-center lg:justify-start">
                <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a
                  href={siteContact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs text-pretty break-words lg:max-w-none lg:w-auto hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {siteContact.address.lines.join(", ")}
                </a>
              </div>
              <p className="pt-1 text-xs text-gray-500">{siteContact.hours.summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:contents">
            <div className="text-center lg:text-left">
              <h3 className="mb-4 font-semibold">Company</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block py-1.5 text-gray-400 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:py-0"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-h-0 flex-col items-center text-center lg:h-full lg:items-start lg:text-left">
              <h3 className="mb-4 font-semibold">Services</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block py-1.5 text-gray-400 transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:py-0"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto hidden justify-center pt-8 lg:flex lg:justify-end lg:pt-10">
                <FooterSocial className="mt-0 justify-center lg:justify-end" />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:hidden">
            <FooterSocial className="mt-0 justify-center gap-3" />
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
