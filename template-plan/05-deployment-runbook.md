# Stage 5: Implementation and Deployment Gates

Use this stage after core implementation to verify release readiness.

## Stage-level clarification checkpoint (mandatory)

- Run one consolidated clarification checkpoint at end of Stage 5.
- Do not perform repeated ad-hoc clarification interrupts during implementation when batching is safe.

## Non-loss reconciliation gate (mandatory)

- Produce an implementation-vs-manifest reconciliation report.
- Compare required scope items:
  - sections per page
  - required assets/icons/SVGs
  - required interactive states
- If any required item is missing, set stage status to `blocked`.
- Continue only when missing required items are resolved or explicitly approved as deviations.

## Validation commands

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Strict pass requirement:
- Lint must pass with zero warnings/errors.
- Typecheck must pass.
- Build must pass.
- If any strict command gate fails, set stage status to `blocked`.

## Sanity-specific checks (when enabled)

- Schema deployed after schema changes.
- Required `page` documents exist for expected routes.

## Required output

- Validation command results.
- Updated unresolved-items status (should be empty or explicitly accepted).
- Reconciliation report with:
  - `manifest_status`
  - `reconciliation_status`
  - `missing_required_items`
  - `deviation_log`
- Per-section reconciliation status table with:
  - `text_status`
  - `color_status`
  - `image_status`
  - `icon_status`
  - `state_status`
  - `result`
