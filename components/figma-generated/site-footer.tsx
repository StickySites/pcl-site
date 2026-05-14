"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brandImages } from "@/lib/brand";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    { name: "Asbestos Removal", href: "/services/asbestos-removal" },
    { name: "Demolition & Strip Out", href: "/services/demolition" },
    { name: "Enabling Works", href: "/services/enabling-works" },
    { name: "Commercial Refurbishments", href: "/services/commercial-refurbishments" },
    { name: "Decontamination", href: "/services/decontamination" }
  ]
};

export function SiteFooter() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex max-w-full items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {logoFailed ? (
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand">
                    <span className="text-xl font-bold text-brand-foreground">P</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold leading-tight">PCL Limited</span>
                    <span className="text-xs leading-tight text-gray-400">Pier Contractors Limited</span>
                  </div>
                </div>
              ) : (
                <span className="relative block h-10 w-52 shrink-0">
                  <Image
                    src={brandImages.footerLogo}
                    alt="PCL Limited — Pier Contractors Limited"
                    fill
                    className="object-contain object-left"
                    sizes="208px"
                    onError={() => setLogoFailed(true)}
                  />
                </span>
              )}
            </Link>
            <p className="mt-4 max-w-md text-gray-400">
              Professional industrial contractors specializing in asbestos removal, demolition, and commercial
              refurbishments. Safety-first approach with comprehensive compliance.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-brand" />
                <span>+44 (0) 1234 567890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-brand" />
                <span>info@pcllimited.co.uk</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-brand" />
                <span>United Kingdom</span>
              </div>
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

          <div>
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
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} PCL Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
