# CMS Architecture Standard

## Core model

- Use `page` documents as the primary content source.
- Each page contains `sections[]`.
- Each section has a stable `key` used by frontend renderers.

## Required page slugs (baseline)

- `home`
- `about`
- `services`
- `services/<service-slug>`
- `resources`
- `contact`

## Section contract guidance

- Keep keys explicit and predictable (examples: `hero`, `trust`, `cta`, `faq`, `related`).
- For each key, define required fields in schema validation.
- Do not duplicate semantics under multiple keys.

## Media strategy

- Primary media lives in Sanity image fields.
- Frontend must always have hardcoded local fallback assets in `public/media`.
- Always include `imageAlt` where image exists.

## SEO strategy (organized, non-duplicative)

- Each `page` document includes a small SEO snippet.
- Global site-level SEO defaults exist in one global settings document.
- No duplicate SEO controls spread across unrelated docs.

### SEO precedence contract

For each field (`title`, `description`, `noIndex`, optional OG/Twitter):

1. page-level value
2. global SEO default
3. hardcoded safe fallback

## CMS governance rule

Any new CMS module (new doc type, new collection, new global settings area) must be proposed and approved before being added to template core.
