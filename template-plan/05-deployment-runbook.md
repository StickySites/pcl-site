# Deployment Runbook

## Deployment tracks (separate concerns)

1. App deploy (Next.js)
2. Schema deploy (Sanity schema metadata)
3. Optional hosted Studio deploy (Sanity-hosted Studio UI)

Treat these as independent operations.

## Local development

- Run app locally with `/studio`.
- Iterate on schema in code.
- Keep generated folders ignored.

## Schema updates

- After schema changes, run schema deploy.
- Verify schema appears in Sanity project.

## App deployment (Vercel-first)

- Ensure env vars are configured:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION`
  - `SANITY_API_READ_TOKEN` (if required)
  - `NEXT_PUBLIC_SITE_URL`
- Run production build validation before release.

## Optional hosted Studio path

- Use only when business/editorial need exists.
- Build and deploy Studio separately.
- Do not commit Studio build artifacts.

## Generated folders policy

Always ignore:

- `.next`
- `dist`
- `.sanity`
- `node_modules`

## Hostinger note

Use Node runtime path for Next.js apps. Static-only hosting is not equivalent to a full Next.js runtime for dynamic features.
