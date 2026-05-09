# Project State

- current_stage: stage_1_intake
- current_step: collect_startup_config
- status: pending
- last_completed_step:
- blocking_reason:
- open_questions: []
- required_inputs_missing: []
- artifacts_completed: []
- manifest_status: pending
- reconciliation_status: pending
- missing_required_items: []
- deviation_log_status: pending
- next_action: fill required startup config fields
- updated_at:

Transition rule:
- A stage cannot be marked done while `reconciliation_status` is failing for required scope.
