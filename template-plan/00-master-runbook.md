# Master Runbook

Follow this file as the single execution path for each new site build.

## Stage 1: Intake and startup config

Preconditions:
- Designer confirms Figma handoff is ready.

Actions:
- Collect required startup config:
  - `project_name`
  - `repo_name`
  - `figma_url`
  - `content_mode` (`local` or `sanity`)
  - if `content_mode=sanity`: `sanity_project_id`, `sanity_dataset`
- Record optional fields if available (`required_routes`, domain, owner/team, notes).

Validation:
- Hard-stop if any required field is missing.

Outputs:
- Completed startup config block.
- `project-state.md` updated.

## Stage 2: Figma handoff gate

Actions:
- Parse top-level Figma frames as page candidates first.
- Confirm route list (or ask once if ambiguous).
- Break each page into ordered sections.
- Produce section-to-key mapping and asset manifest.

Validation:
- Page list confirmed.
- Unmapped sections batched into a single review checkpoint.

Outputs:
- Mapping table.
- Handoff pass/fail decision.

## Stage 3: Bootstrap and env

Actions:
- Bootstrap project from `starter/`.
- Create `.env.local` from `.env.example`.
- Run in `local` mode first.

Validation:
- Home route renders with local content.

Outputs:
- Initial run evidence and issue list.

## Stage 4: Content mode decision

Actions:
- Choose `local` or `sanity` for this delivery.
- If `sanity`, complete schema parity checks.

Validation:
- Mode rationale documented.

Outputs:
- Mode decision record.

## Stage 5: Implementation gates

Actions:
- Implement page composition via section wrappers.
- Keep generated components wrapped in `components/sections` or `components/primitives`.
- Run a second batched clarification checkpoint for unresolved sections.

Validation:
- Required section keys render through mapped wrappers.
- Contract validity passes for required scope.

Outputs:
- Renderer coverage report.
- Unmapped sections report.

## Stage 6: QA and launch

Actions:
- Run lint, typecheck, build.
- Perform responsive/content checks.
- Verify deploy readiness.

Validation:
- All required checks pass.

Outputs:
- Launch checklist complete.

## Stage 7: Operations and handover

Actions:
- Finalize handover documents and ownership boundaries.
- Capture post-launch backlog.

Outputs:
- Handover pack and maintenance plan.
