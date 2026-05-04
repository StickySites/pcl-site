# Component Library Plan

## Goals

- Maximize reuse across future sites.
- Minimize rewriting of base UI patterns.
- Keep style customization easy without breaking component behavior.

## Folder strategy

- `components/shadcn/` for baseline imported shadcn components.
- `components/primitives/` for project wrappers and variants.
- `components/compositions/` for multi-element blocks.
- `components/sections/` for CMS section renderers.

## Baseline shadcn set (v0.1)

- `button`
- `input`
- `textarea`
- `select`
- `card`
- `dialog`
- `sheet`
- `accordion`
- `tabs`
- `form`
- `badge`
- `separator`

## Reusable composition targets (v0.1)

- Hero block
- CTA band
- Feature grid
- FAQ section
- Testimonial block
- Service card grid

## Contract per component

For each component or section renderer, define:

- expected props
- expected CMS fields
- fallback behavior when CMS data is missing
- accessibility requirements
- style variant interface

## Motion and accessibility

- Provide motion modes: `off`, `subtle`, `enhanced`.
- Respect reduced-motion system preference by default.
