# PCL Limited — marketing website

Next.js site for **PCL Limited** (industrial contracting), implemented from the Figma Make handoff. The app uses **local-first** content for marketing pages (static React views). **Sanity** remains available for CMS-backed content and Studio at `/studio` when you configure it.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS** + brand tokens (`brand`, `brand-dark`, `muted`)
- **lucide-react** (icons aligned with the Make export)
- **Sanity** (optional — schema and Studio scaffold included)

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run studio   # Sanity Studio (requires Sanity env when used)
```

## Environment

Copy `.env.example` to `.env.local`. For local marketing pages you only need:

- `CONTENT_SOURCE=local` (default)

To use Sanity for `getPageContent` and Studio, set `CONTENT_SOURCE=sanity` and fill the `NEXT_PUBLIC_SANITY_*` and `SANITY_API_READ_TOKEN` values from `.env.example`.

## Project layout

| Path | Purpose |
|------|---------|
| `app/(site)/` | Marketing routes: home, about, projects, contact, services + service detail pages |
| `app/studio/` | Sanity Studio |
| `app/not-found.tsx` | Global 404 with site chrome |
| `components/figma-generated/` | UI ported from Figma Make (source of visual structure) |
| `components/sections/` | Thin wrappers — route files import these, not raw `figma-generated` components |
| `components/primitives/` | Shared shell (e.g. header + footer layout) |
| `components/ui/` | shadcn-style primitives |
| `lib/content/` | Local + Sanity content helpers and page contract |
| `sanity/` | Schema types |

## Design source

Built from Figma Make file **Marketing website for PCL Limited** (`llEmduulS4vSjp19utqk2a`). Raster images use **`next/image`** with Unsplash URLs where the design specified them; the home hero keeps a **CSS background image** layer like the Make export. Contact **map** and **form submit** are placeholders until you add embed + API.

## Deployment

See `docs/deployment-runbook.md` and `docs/launch-checklist.md` for release-oriented notes.
