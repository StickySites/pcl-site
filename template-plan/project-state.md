# Project State

- current_stage: stage_1_intake
- current_step: collect_startup_config
- status: pending
- last_completed_step:
- blocking_reason:
- open_questions: []
- required_inputs_missing: []
- artifacts_completed: []
- quality_gate: strict
- image_policy: next_image
- manifest_status: pending
- reconciliation_status: pending
- token_parity_status: pending
- text_completeness_status: pending
- lint_status: pending
- typecheck_status: pending
- build_status: pending
- missing_required_items: []
- deviation_log_status: pending
- next_action: fill required startup config fields
- updated_at:

Transition rule:
- A stage cannot be marked done while `reconciliation_status` is failing for required scope.
- A stage cannot be marked done while any required strict-status field is failing (`lint_status`, `typecheck_status`, `build_status`, `text_completeness_status`, `token_parity_status`).
