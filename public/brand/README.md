# Brand assets

Files in this folder (canonical names):

| File | Use |
|------|-----|
| `pcl-logo-header.png` | Horizontal logo on **white** header. |
| `pcl-logo-footer.png` | Light logo on **black** footer. |
| `pcl-mark.png` | Square mark (biohazard + PCL). |

The app loads these via `lib/brand.ts`. The browser tab icon is **`app/icon.png`**, copied from `pcl-mark.png` (regenerate if you replace the mark).

If you drop in new exports, keep these filenames or update `lib/brand.ts` and `app/icon.png` accordingly.
