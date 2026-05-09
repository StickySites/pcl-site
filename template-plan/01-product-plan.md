# Stage 1: Intake and Product Plan

Use this stage to capture the minimum inputs needed to start a new site safely.

## Required startup config (hard-stop)

- `project_name`
- `repo_name`
- `figma_url`
- `content_mode` (`local` or `sanity`)
- If `content_mode=sanity`:
  - `sanity_project_id`
  - `sanity_dataset`

## Optional startup config (non-blocking)

- `required_routes`
- domain
- owner/team
- notes for tokens or launch gates

Rule:
- If route intent is not confidently inferable from Figma and `required_routes` is missing, pause once and ask.

## Stage outputs

- Startup config completed.
- Initial scope boundaries listed (in/out).
- Definition of done for this run (for example: "Phase 1 only" or "full v1").
