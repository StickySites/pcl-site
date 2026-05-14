import { PageAsbestosRemoval } from "@/components/figma-generated/services/page-asbestos-removal";
import { PageCommercialRefurbishments } from "@/components/figma-generated/services/page-commercial-refurbishments";
import { PageRemediation } from "@/components/figma-generated/services/page-remediation";
import { PageDemolition } from "@/components/figma-generated/services/page-demolition";
import { PageEnablingWorks } from "@/components/figma-generated/services/page-enabling-works";

export function AsbestosRemovalPage() {
  return <PageAsbestosRemoval />;
}

export function DemolitionPage() {
  return <PageDemolition />;
}

export function EnablingWorksPage() {
  return <PageEnablingWorks />;
}

export function CommercialRefurbishmentsPage() {
  return <PageCommercialRefurbishments />;
}

export function RemediationPage() {
  return <PageRemediation />;
}
