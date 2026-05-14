"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { brandImages } from "@/lib/brand";
import { siteContact } from "@/lib/site-contact";

const primaryNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className="border-b border-white/15 bg-brand text-brand-foreground"
        aria-label="Quick contact"
      >
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1.5 text-xs text-white/90 sm:gap-x-3 sm:text-sm">
            <span className="text-pretty text-right">
              <span className="font-semibold text-brand-foreground">Office hours:</span>{" "}
              {siteContact.hours.summary}
            </span>
            <span className="select-none text-white/40" aria-hidden>
              |
            </span>
            <a
              href={`tel:${siteContact.phoneTel}`}
              className="inline-flex items-center gap-1.5 rounded-sm font-medium underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:gap-2"
            >
              <Phone className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
              <span className="whitespace-nowrap">Tel. {siteContact.phoneDisplay}</span>
            </a>
            <span className="select-none text-white/40" aria-hidden>
              |
            </span>
            <a
              href={`mailto:${siteContact.email}`}
              className="inline-flex min-w-0 max-w-full items-center gap-1.5 break-all rounded-sm font-medium underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:gap-2 sm:break-normal"
            >
              <Mail className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
              <span>{siteContact.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 lg:flex-1">
          <Link href="/" className="flex min-w-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            {logoFailed ? (
              <>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-brand">
                  <span className="text-2xl font-bold text-brand-foreground">P</span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-lg font-bold leading-tight text-black">PCL Limited</span>
                  <span className="text-sm leading-tight text-muted-foreground">Pier Contractors Limited</span>
                </div>
              </>
            ) : (
              <span className="relative block h-12 w-56 shrink-0 sm:h-16 sm:w-80">
                <Image
                  src={brandImages.headerLogo}
                  alt="PCL Limited, Pier Contractors Limited"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 224px, 320px"
                  priority
                  onError={() => setLogoFailed(true)}
                />
              </span>
            )}
          </Link>
          </div>

          <div className="hidden items-center gap-x-6 lg:flex">
          <div className="flex gap-x-8">
            {primaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-1 py-2 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                  isActive(item.href)
                    ? "text-brand after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand"
                    : "text-black hover:text-brand"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className={`shrink-0 rounded-full border-2 border-white bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              isActive("/contact") ? "ring-2 ring-brand ring-offset-2 ring-offset-white" : "hover:bg-brand-dark"
            }`}
          >
            Get in touch
          </Link>
          </div>

          <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          </div>
        </nav>

      {mobileMenuOpen ? (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-border px-4 pb-4 pt-2">
            {primaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  isActive(item.href)
                    ? "bg-brand text-brand-foreground"
                    : "text-black hover:bg-muted hover:text-brand"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 block rounded-full border-2 border-white bg-brand px-4 py-3 text-center text-sm font-semibold text-brand-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}
