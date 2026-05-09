# Stage 3: Bootstrap and CMS Mode Setup

Use this stage to start from local mode, then enable Sanity only when selected.

## Bootstrap actions

- Copy starter files into repo root.
- Create `.env.local` from `.env.example`.
- Start with `CONTENT_SOURCE=local` and verify app renders.

## Content mode paths

- Local mode:
  - `CONTENT_SOURCE=local`
  - run without Sanity credentials
- Sanity mode:
  - `CONTENT_SOURCE=sanity`
  - set `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - set `NEXT_PUBLIC_SANITY_DATASET`
  - optional `SANITY_API_READ_TOKEN`

## Fallback contract

- If Sanity env/config is missing, warn and fall back to local.
- If Sanity fetch fails, warn and fall back to local.
- No silent fallback: warning must include mode, page/route, reason, next action.

## Required output

- Bootstrap evidence (`dev` run and first page render).
- Mode decision confirmation and environment status.
