# Website Template Product Plan

## Objective

Build a reusable, versioned boilerplate for future client websites using:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Sanity CMS
- Optional Builder.io add-on (paid upsell)

The template must support rapid site creation while keeping CMS governance, brand consistency, and deployment reliability.

## Product principles

1. Source-of-truth in code and schema, not generated build artifacts.
2. CMS-driven content first, with safe hardcoded fallbacks for resilience.
3. Reuse over reinvention (components and section contracts).
4. Clear boundaries between core template and optional add-ons.
5. Vercel-first deployment compatibility (Hostinger secondary path).

## Phases

### Phase 1: Scope and governance

- Define core vs optional modules.
- Add rules and runbooks for consistency.
- Version template as a product (`v0.1`, `v0.2`, `v0.3`).

### Phase 2: Template structure

- Create standard folder layout for app, cms, components, docs, scripts.
- Add onboarding checklist for brand + env + legal + analytics.

### Phase 3: CMS architecture

- Canonical `page` + `sections[]` model.
- Required section keys by route.
- Page-level SEO snippets + global SEO defaults with clear precedence.
- Propose-first governance for any new CMS modules.

### Phase 4: Component system

- Dedicated `components/shadcn/` base set.
- Wrapper primitives and higher-level composed sections.
- Accessibility and fallback contracts per component.

### Phase 5: Compliance and analytics

- Reusable privacy/terms/cookies baseline.
- Event tracking plan and consent-aware behavior.

### Phase 6: Deployment workflow

- Separate app deploy, schema deploy, optional hosted Studio deploy.
- Environment templates and generated-folder ignore policy.

### Phase 7: Optional Builder.io add-on

- Keep outside core baseline.
- Document cost, ownership boundaries, and maintenance implications.

### Phase 8: Quality gates

- Required checks: lint, typecheck, build, smoke checks.
- Content and schema regression checklist.

## Decision log (to finalize per rollout)

- Legal pages default: static starter or CMS-managed.
- Hosted Studio default: optional or standard.
- Blog model in v0.1 or deferred.
- Builder module in v0.1 or v0.2+.
