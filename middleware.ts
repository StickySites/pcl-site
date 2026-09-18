import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type EnvWithMaintenance = {
  MAINTENANCE_MODE?: string;
};

function parseMaintenanceFlag(raw: string | undefined): boolean | null {
  if (raw == null || raw.trim() === "") return null;
  const value = raw.trim().toLowerCase();
  if (value === "true" || value === "1") return true;
  if (value === "false" || value === "0") return false;
  return null;
}

/**
 * Reads MAINTENANCE_MODE from Cloudflare Worker vars (wrangler.jsonc) when available,
 * otherwise falls back to process.env (local `next dev` / .env.local).
 * Unset defaults to ON so the public site stays gated until explicitly disabled.
 */
function isMaintenanceEnabled(): boolean {
  try {
    const { env } = getCloudflareContext();
    const fromCf = parseMaintenanceFlag((env as EnvWithMaintenance).MAINTENANCE_MODE);
    if (fromCf !== null) return fromCf;
  } catch {
    // Outside Cloudflare runtime (or context not ready) — use process.env.
  }

  const fromProcess = parseMaintenanceFlag(process.env.MAINTENANCE_MODE);
  return fromProcess !== false;
}

export function middleware(request: NextRequest) {
  if (!isMaintenanceEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|woff2?|css|js|map)$).*)"
  ]
};
