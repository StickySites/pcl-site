# sites-template

Figma-first website starter with optional Sanity CMS, runbook-driven delivery, and low-interruption execution rules.

## Repository structure

- `starter/` - runnable Next.js scaffold (local-first content mode, optional Sanity mode).
- `template-plan/` - canonical operator runbook and stage docs for new-site delivery.
- `template-plan/00-master-runbook.md` - primary instruction source for each new project run.
- `template-plan/project-state.md` - required pause/resume tracking file.

## New project kickoff (human input)

Before starting a new build, fill and paste the kickoff prompt template below into a new chat.

### Required config (hard-stop)

- `project_name`
- `repo_name`
- `figma_url`
- `content_mode` (`local` or `sanity`)
- `sanity_project_id` (required only when `content_mode=sanity`)
- `sanity_dataset` (required only when `content_mode=sanity`)

### Optional context (non-blocking)

- `required_routes`
- `domain`
- `owner_team`
- `notes`

If `required_routes` is omitted and route intent is unclear from Figma, the process should pause once and ask.

## Copy/paste kickoff prompt

```text
Start a new site build using this repository.

FIRST ACTIONS (MANDATORY)
1) Read `template-plan/00-master-runbook.md`.
2) Read `template-plan/project-state.md`.
3) Confirm the current stage and next_action before making changes.
4) If either file is missing, stop and ask.

CANONICAL INSTRUCTION RULE
- Use `template-plan/00-master-runbook.md` as the canonical instruction source.
- If any other doc conflicts, follow the master runbook.

OPERATING MODE
- Treat top-level Figma frames as page/route candidates first, then split each page into ordered sections.
- Never render raw generated components directly in route pages; wrap/adapt via `components/sections` or `components/primitives`.
- Use low-interruption behavior: batch unknown sections and checkpoint clarifications at Stage 2 and Stage 5.
- If route intent is unclear, pause once with a consolidated clarification question.

REQUIRED CONFIG
- project_name: <fill>
- repo_name: <fill>
- figma_url: <fill>
- content_mode: <local|sanity>
- sanity_project_id: <fill if content_mode=sanity>
- sanity_dataset: <fill if content_mode=sanity>

OPTIONAL CONTEXT
- required_routes: <optional>
- domain: <optional>
- owner_team: <optional>
- notes: <optional>

DELIVERY TARGET
- phase_target: <e.g. "Stage 1-3 only" or "full v1">

OUTPUT FORMAT
- First return:
  - runbook stage being executed
  - missing required inputs (if any)
  - planned actions for this run
- Then execute.
- Update `template-plan/project-state.md` at each stage transition.
```

## Execution rules

- Master runbook is the primary process guide: `template-plan/00-master-runbook.md`.
- State tracking is mandatory: `template-plan/project-state.md`.
- Content mode behavior:
  - `local` mode is default and should run with no Sanity credentials.
  - `sanity` mode should warn and gracefully fall back to local when config/fetch is invalid.
- Rendering safety rule: never mount raw generated components directly in route files.

## Recommended workflow

1. Designer finalizes Figma handoff and shares URL.
2. Initiator fills required config in kickoff prompt.
3. Agent reads master runbook and state file first.
4. Agent executes by stage with checkpointed state tracking.
5. Clarifications happen in consolidated batches, not repeated micro-pauses.
6. Validate with lint/type/build and launch checklist before release.
