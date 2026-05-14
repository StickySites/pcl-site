"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brandImages } from "@/lib/brand";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 lg:flex-1">
          <Link href="/" className="flex min-w-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            {logoFailed ? (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand">
                  <span className="text-xl font-bold text-brand-foreground">P</span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="font-bold leading-tight text-black">PCL Limited</span>
                  <span className="text-xs leading-tight text-muted-foreground">Pier Contractors Limited</span>
                </div>
              </>
            ) : (
              <span className="relative block h-9 w-44 shrink-0 sm:h-10 sm:w-52">
                <Image
                  src={brandImages.headerLogo}
                  alt="PCL Limited — Pier Contractors Limited"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 176px, 208px"
                  priority
                  onError={() => setLogoFailed(true)}
                />
              </span>
            )}
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-1 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                isActive(item.href)
                  ? "text-brand after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand"
                  : "text-black hover:text-brand"
              }`}
            >
              {item.name}
            </Link>
          ))}
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  isActive(item.href)
                    ? "bg-brand text-brand-foreground"
                    : "text-black hover:bg-muted hover:text-brand"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
