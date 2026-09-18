import type { Metadata } from "next";
import Image from "next/image";
import { brandImages } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Under maintenance",
  description: "Website under maintenance. Check back later for the new site!",
  robots: { index: false, follow: false }
};

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/photos/Roofing_HalfandHalf_1178x718.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f14]/92 via-[#12281c]/88 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="maintenance-enter relative z-10 flex max-w-xl flex-col items-center">
        <Image
          src={brandImages.headerLogo}
          alt="PCL Limited"
          width={280}
          height={88}
          priority
          className="mb-10 h-auto w-[min(100%,280px)] drop-shadow-sm"
        />

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
          PCL Limited
        </p>

        <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Website under maintenance
        </h1>

        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
          Check back later for the new site!
        </p>

        <div className="maintenance-rule mt-10 h-0.5 w-16 bg-brand" aria-hidden />
      </div>
    </main>
  );
}
