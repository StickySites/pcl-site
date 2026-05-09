# Stage 6: QA and Launch Checklist

## Functional and contract checks

- Required routes render.
- Required section keys render via mapped wrappers.
- Contract validity passes for required scope.
- Reconciliation report passed with no unresolved required items.

## Content source checks

- Local mode works with no Sanity credentials.
- Sanity mode works when configured.
- Invalid Sanity config triggers warning and local fallback.

## Quality gates

- Lint passes.
- Typecheck passes.
- Build passes.

## Deployment checks

- Host env vars configured correctly.
- App deployment smoke checks pass.
- Schema deployment complete (if Sanity mode).

## Completion rule

- Do not mark launch complete if any required manifest item is missing.
- Any unresolved required section/asset/state is a blocking failure.
