# Stage 5: Implementation and Deployment Gates

Use this stage after core implementation to verify release readiness.

## Stage-level clarification checkpoint (mandatory)

- Run one consolidated clarification checkpoint at end of Stage 5.
- Do not perform repeated ad-hoc clarification interrupts during implementation when batching is safe.

## Validation commands

- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Sanity-specific checks (when enabled)

- Schema deployed after schema changes.
- Required `page` documents exist for expected routes.

## Required output

- Validation command results.
- Updated unresolved-items status (should be empty or explicitly accepted).
