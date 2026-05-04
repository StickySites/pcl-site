# sites-template

- template-plan/ — Product/architecture docs for the reusable stack (scope, CMS model, components, deploy, launch, rules).
- starter/ — Runnable scaffold: Next.js 16 App Router, Tailwind + PostCSS, components.json + lib/utils.ts + baseline components/ui (button, card; extend with npx shadcn@latest add …).
- Sanity — sanity.config.ts / sanity.cli.ts, sanity/schemaTypes/ (seo, pageSection, pageServiceItem, page, siteSettings, resourceSettings, resourceItem), lib/sanity/queries.ts aligned with those types.
- Studio — Next app route /studio (next-sanity + NextStudio).
- Resilience — Sanity client is created only when NEXT_PUBLIC_SANITY_PROJECT_ID is set so npm run build works without secrets.
- Quick start — Copy starter/ to repo root → cp .env.example .env.local → set Sanity env → npm install → npm run dev → create CMS page with slug home.
