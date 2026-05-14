import type { Metadata } from "next";
import { SiteShell } from "@/components/primitives/site-shell";
import { NotFoundPage } from "@/components/sections/not-found-page";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist on this site.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundPage />
    </SiteShell>
  );
}
