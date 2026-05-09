# Template Plan Runbook

Use this folder as the execution playbook for building each new site from the starter boilerplate.

## Run in this order

1. `00-master-runbook.md`
2. `01-product-plan.md`
3. `02-v01-scope-matrix.md`
4. `03-cms-architecture.md`
5. `04-component-library-plan.md`
6. `05-deployment-runbook.md`
7. `06-launch-checklist.md`
8. `07-implementation-rules.md`

If any document conflicts, `00-master-runbook.md` is canonical.

## Supporting files

- `checklists/figma-to-contract-checklist.md`
- `checklists/content-integrity-checklist.md`
- `checklists/release-checklist.md`
- `decision-logs/README.md`
- `project-state.md`

## Non-negotiable operating rules

- Treat top-level Figma frames as page/route candidates first.
- Break each page into ordered sections before section-key mapping.
- Never render raw generated components directly in route pages.
- Keep clarification low interruption: batch unknown sections and checkpoint at Stage 2 and Stage 5.
- Track process progress in `project-state.md` at every stage transition.
