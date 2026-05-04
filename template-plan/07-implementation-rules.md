# Implementation Rules

## Core rules

1. Keep template core lean; move optional complexity to modules.
2. Do not add new CMS collections/modules without approval.
3. Do not commit generated build artifacts.
4. Prefer typed content access and explicit fallback behavior.
5. Keep page content in page docs, not scattered in globals.

## CMS and SEO rules

- Use `page` + `sections[]` as canonical content model.
- Use page-level SEO with global defaults as fallback.
- Avoid duplicate settings for the same business meaning.

## Component rules

- Keep shadcn baseline close to upstream defaults.
- Apply project styles through wrappers/variants.
- Every section renderer must define fallback behavior.

## Deployment rules

- Validate app build before release.
- Deploy schema changes explicitly when schema changed.
- Treat hosted Studio as optional and separate from app deployment.

## Documentation rules

- Update changelog when template behavior changes.
- Update checklist/runbook whenever deployment steps change.
