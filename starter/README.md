# Starter scaffold

Executable scaffold that pairs with `template-plan/`. Copy this folder into a new repository root (or merge its files into an empty Next.js repo).

## What is included

- Next.js 16 App Router (`app/`)
- Tailwind CSS + PostCSS baseline
- shadcn baseline UI components in `components/ui/`
- Optional Sanity integration (`sanity.config.ts`, `sanity/schemaTypes`, `lib/sanity/*`, `/studio`)
- Content source dispatcher in `lib/content/` with local-first fallback behavior
- Starter docs in `docs/`; canonical runbook/checklists live in repo-root `template-plan/`

## Content source modes

- `CONTENT_SOURCE=local` (default): load page content from local data.
- `CONTENT_SOURCE=sanity`: load from Sanity; if config or fetch fails, the app logs structured warnings and falls back to local.

Warning IDs used by the starter:
- `CONTENT_SOURCE_INVALID`
- `SANITY_ENV_MISSING`
- `SANITY_FETCH_FAILED`
- `PAGE_NOT_FOUND`

## Quick start (zero external services)

1. Copy everything under `starter/` to your new repo root.
2. `cp .env.example .env.local`
3. `npm install`
4. `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) and confirm local content renders.

## Optional: Sanity mode

1. Set `CONTENT_SOURCE=sanity` in `.env.local`.
2. Provide:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - optional `SANITY_API_READ_TOKEN` (if required for your dataset setup)
3. Run `npx sanity@latest schema deploy` after `npx sanity login`.
4. Create/update `page` documents in Sanity (for example slug `home`).

Standalone Studio remains optional:
- `npm run studio`

## Figma-first implementation rule

- Treat top-level Figma frames as pages/routes first.
- Break each page into ordered sections before section-key mapping.
- Never render raw generated components directly in route pages.
- Always wrap/adapt generated pieces through `components/sections` or `components/primitives`.

## Environment

Use `.env.example` as the starter template. Local mode should work with no Sanity credentials.
