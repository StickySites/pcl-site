# Stage 2: Figma Handoff Scope Matrix

Use this stage to convert Figma design intent into executable page/section scope.

## Page-first parsing contract

- Treat top-level Figma frames as page/route candidates first.
- Do not treat a full page frame (for example `Home`) as a single section.
- Break each confirmed page into ordered sections.
- Map sections to canonical keys only after page confirmation.

## Required outputs

- Confirmed page list.
- Confirmed route list (or one consolidated route clarification).
- Section breakdown by page.
- Section-to-key mapping table.
- Asset manifest.

## Unknown handling policy

- Unknown page candidate:
  - do not create route silently
  - pause once and ask
- Unknown section in known page:
  - continue known sections
  - add unknown sections to one batched review artifact
  - hard-stop only if required for MVP or contract validity
