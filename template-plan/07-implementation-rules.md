# Stage 7: Operations and State Tracking Rules

## Mandatory state file

- Canonical path: `template-plan/project-state.md`
- Update on every step transition.

## Required state fields

- `current_stage`
- `current_step`
- `status` (`in_progress`, `blocked`, `paused`, `done`)
- `last_completed_step`
- `blocking_reason`
- `open_questions`
- `required_inputs_missing`
- `artifacts_completed`
- `next_action`
- `updated_at`

## State update rules

1. Before a step starts, set `status=in_progress`.
2. On success, mark the step complete and add evidence artifact reference.
3. If blocked/uncertain, set `status=blocked` with exact reason and next action.
4. On resume, read `project-state.md` first and continue from `next_action`.

## Handover output

- Delivery summary.
- Ownership boundaries.
- Post-launch backlog.
