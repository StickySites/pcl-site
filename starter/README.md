# Starter scaffold

Executable scaffold that pairs with `template-plan/`. Copy this folder into a new repository root (or merge its files into an empty Next.js repo).

## What is included

- **Next.js 16** App Router (`app/`)
- **Tailwind CSS** + **PostCSS** (`tailwind.config.ts`, `postcss.config.js`, `app/globals.css`)
- **shadcn-style UI** baseline: `components.json`, `lib/utils.ts` (`cn`), and `components/ui/` (`button`, `card`). Add more with the shadcn CLI.
- **Sanity**: `sanity.config.ts`, `sanity.cli.ts`, full `sanity/schemaTypes/` (page, sections, SEO, site settings, resources), GROQ in `lib/sanity/queries.ts`
- **Embedded Studio** at `/studio` via `next-sanity`
- **CMS shell**: `lib/sanity/*`, `lib/content.ts` with safe fetch + homepage fallback
- **Docs & scripts**: `docs/`, `scripts/`

## Quick start

1. Copy everything under `starter/` to your new repo root.
2. `cp .env.example .env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` (and optional `SANITY_API_READ_TOKEN` for draft/private datasets).
3. `npm install`
4. `npm run dev` — open [http://localhost:3000](http://localhost:3000). Studio: [http://localhost:3000/studio](http://localhost:3000/studio).
5. In Sanity, create singletons/documents as needed (e.g. one `page` with slug `home` and at least one section). Until then, the app uses the fallback page from `lib/content.ts`.
6. Deploy schema to your Sanity project (from repo root, with env loaded):

   ```bash
   npx sanity@latest schema deploy
   ```

   Or use `scripts/sanity-schema-deploy.sh` after `npx sanity login`.

Standalone Studio (optional): `npm run studio` runs `sanity dev` using `sanity.cli.ts` (ensure the same env vars are available in the shell or a `.env` file Sanity CLI reads).

## Environment

See `.env.example`. `NEXT_PUBLIC_*` values are required for Studio and live queries; `SANITY_API_READ_TOKEN` is optional for public datasets but needed for token-based access.
