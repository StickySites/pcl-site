# Stage 4: Component and Rendering Rules

Use this stage to enforce safe rendering boundaries.

## Rendering safety rule (mandatory)

- Never render raw generated/imported design components directly in route pages.
- Route pages must compose wrapped/adapted components from:
  - `components/sections`
  - `components/primitives`

## Contract validity definition

A required page is valid only when:
- all required section keys for that page are present
- required fields for those sections are populated
- renderer mapping exists for each required section key

If any required condition fails, mark as blocking.

## Required output

- Renderer coverage report.
- Unmapped sections report (single batched artifact).
