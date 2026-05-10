import { SiteFooter } from "@/components/figma-generated/site-footer";
import { SiteHeader } from "@/components/figma-generated/site-header";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
