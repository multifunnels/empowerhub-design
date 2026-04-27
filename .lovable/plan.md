## Goal

Move "שרון אייזן" from being a top-level menu item to a **dropdown submenu under "אודות"** (About).

## Changes — `src/components/SiteNav.tsx` only

### Data structure
Restructure the `LINKS` array so About has `children`:

```ts
{ to: "/about", key: "nav.about",
  children: [{ to: "/sharon-aizen", key: "nav.sharon" }] }
```

Remove the standalone `/sharon-aizen` entry.

### Desktop nav
- About becomes a split control: clicking the label still navigates to `/about`; a small chevron button next to it opens a dropdown (using existing `DropdownMenu` from shadcn).
- Dropdown lists "שרון אייזן" → `/sharon-aizen`.
- Dropdown alignment respects RTL (`align="end"` in Hebrew, `"start"` in English/Japanese).
- Drop the special gold/primary highlight that was applied to the Sharon button (no longer needed since it lives inside the submenu).

### Mobile nav (Sheet)
- Render About as before; render its children indented below it (smaller text, `text-muted-foreground`, `pl-8`/`pr-8` for RTL).
- Both close the sheet on click.

### Other links
- Home, Courses, Recommendations, Lectures, Contact — unchanged.

No translation file changes needed (`nav.sharon` and `nav.about` keys already exist in he/en/ja).
