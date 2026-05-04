# v0.1 Scope Matrix

## In Scope (must ship)

- Core stack: Next.js App Router, TypeScript strict, Tailwind, shadcn/ui, Sanity local `/studio`.
- Template structure package:
  - `stack/`
  - `cms/`
  - `components/`
  - `docs/`
  - `scripts/`
- Dedicated `components/shadcn/` folder with curated baseline components.
- CMS model:
  - `page` document per route
  - `sections[]` content model
  - service detail pages under `services/*`
  - media fields with local fallback asset strategy
- SEO:
  - page-level SEO snippet on each page document
  - site-level SEO defaults in global settings
  - documented precedence contract
- Runbooks/checklists:
  - launch checklist
  - content QA checklist
  - deployment runbook
  - implementation rules
- Deployment:
  - Vercel-compatible build/deploy path
  - generated folders ignored (`.next`, `dist`, `.sanity`)

## Out of Scope (v0.2+)

- Builder.io integration implementation
- Advanced animation framework system
- Multi-language architecture
- Complex editorial workflow states/scheduling
- A/B testing framework
- Heavy app-level auth wrappers around `/studio`

## Conditional (decision-gated in v0.1)

- Legal page mode:
  - static starter (default recommendation), or
  - CMS-managed legal docs
- Hosted Studio:
  - optional deployment path, not required for v0.1
- Blog model:
  - include minimal post model only if immediate need is confirmed

## v0.1 acceptance criteria

- New project can be scaffolded and running in under 15 minutes.
- shadcn baseline is installed and available in dedicated folder.
- Core pages render from Sanity page sections.
- SEO fallback chain is implemented and documented.
- Legal and analytics placeholders exist and are documented.
- Deployment runbook is sufficient for local + Vercel production rollout.
