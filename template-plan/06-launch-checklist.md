# Stage 6: QA and Launch Checklist

## Functional and contract checks

- Required routes render.
- Required section keys render via mapped wrappers.
- Contract validity passes for required scope.

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
