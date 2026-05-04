# Deployment Runbook (Starter)

## Tracks

1. App deploy (`next build`)
2. Schema deploy (`sanity schema deploy`)
3. Optional hosted Studio deploy (`sanity deploy`)

Keep them independent and explicit.

## Notes

- Vercel is reference path.
- Hostinger requires Node runtime support for full Next.js features.
- Ignore generated folders: `.next`, `.sanity`, `dist`.
