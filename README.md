# Unfold Taiwan board — deploy steps

Replaces the hero section of feeltaiwan.com with the 12-square board.
Nothing else on the site changes.

Do the steps in order. Each one has a check — if the check fails, stop there
rather than carrying on, because every later problem looks the same.

---

## 1 · Unzip

Unzip this. `index.html` must end up at the **top level** of the folder you
push — not inside a subfolder.

```
index.html
velo-page-code.js
test-embed.html
README.md
fonts/   img/   photos/
```

---

## 2 · Push to GitHub

Create a new repository (public — GitHub Pages needs public unless you pay),
then from the unzipped folder:

```bash
git init
git add .
git commit -m "Unfold Taiwan board"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
git push -u origin main
```

**Check:** `index.html` appears in the repo root on github.com.

---

## 3 · Turn on GitHub Pages

Repo → **Settings** → **Pages** → Source: **Deploy from a branch** →
Branch: **main**, folder: **/ (root)** → Save.

Wait 1–2 minutes. The URL appears at the top of that page, in the form
`https://YOUR-NAME.github.io/YOUR-REPO/`

**Check:** open that URL. You should see the board, the squares should have
photos, and **Surprise me** should roll and move the bear.

If the fonts look wrong or images are missing, the files are in a subfolder —
go back to step 1.

---

## 4 · Check auto-height before touching Wix

Open `https://YOUR-NAME.github.io/YOUR-REPO/test-embed.html`

A small black box top-right prints the heights being applied.

**Check:** the numbers settle on **one repeated value** and the whole board is
visible. Around 800 on a laptop, around 520 on a phone.

If they keep changing, or the board is clipped to two rows, stop — that is the
feedback loop described at the bottom of this file. Do not wire it to Wix.

---

## 5 · Put it on a NEW Wix page first

Do not replace the homepage hero yet.

Wix Studio → **Pages** → add a new blank page, e.g. `/board-test`.
In its SEO settings set it to **not** appear in search, and do not link to it
from the menu.

Add the board: **Add → Embed → Embed a site** (the HTML element).
In its settings choose **Website address** and paste your Pages URL.

> Use the URL, not "Code". A URL has no paste-size limit, lets the fonts and
> images load normally, and means you can update the board by pushing to
> GitHub without opening Wix again.

Set the element to **full width**, and set its height per breakpoint:

| Breakpoint | Height |
|---|---|
| Desktop | 810 |
| Tablet | 700 |
| Mobile | 540 |

**Publish**, then open `/board-test` on your laptop **and on a real phone**.

**Check:** the board fills the section, you can open squares, Surprise me
works, and links inside it open in the main window rather than inside the box.

---

## 6 · Add the auto-height snippet

This removes the leftover band under the board and means you never tune those
heights again.

In Studio, on `/board-test`, click the embed element once and read its ID in
the panel (usually `html1`).

Open the code panel at the bottom of the editor, make sure you are on the
**page** code for `/board-test`, and paste the whole of `velo-page-code.js`.
If the ID was not `html1`, change `ELEMENT_ID` on the line marked in the file.

**Publish** and reload `/board-test`.

**Check:** no cream band under the board at any window size, and the section
grows and shrinks when you open and close a square.

If nothing changes, open the browser console — the snippet logs a warning
naming the problem when it cannot find the element.

---

## 7 · Only now, the homepage

When `/board-test` behaves on desktop and on a real phone:

1. Homepage → select the current hero section → **hide** it (do not delete it,
   so you can put it back in one click)
2. Add the same HTML element in its place, same URL, same heights
3. Copy the snippet into the **homepage** page code as well — page code does
   not carry across pages
4. Publish

**Check the live homepage on a phone before you tell anyone.**

To roll back: unhide the old hero, delete the embed. Nothing else on the site
was touched.

---

## Updating the board later

Push to GitHub. The site picks it up — nobody needs to open Wix.
Hard-refresh to skip the cache when checking.

---

## What is still placeholder

- **Photos are 236px previews** taken from the game build and cropped 16:9 to
  1:1, so they have lost 44% of their width. Five squares have no photo and
  fall back to a colour block. Final artwork is specified in
  `圖片規格-首頁板.md` — 1:1, 1600×1600.
- Copy is drafted, not approved.
- Links go nowhere (`href="#"`). `<base target="_top">` is already set, so once
  they point somewhere they open in the main window.
- No analytics, no deep links, no CMS — by design.

---

## The bug test-embed.html exists to catch

The first build sized the board with `100vh`. Inside an iframe `vh` is the
*iframe's* height, so the height the board reported came from the very thing
being resized by it — the two locked at the starting value and the board was
clipped to two rows.

Height now comes from content and there are no viewport units in the CSS. If
you ever see the heights failing to settle, that is what has come back.

Heights the board asks for, measured:

| width | 360 | 390 | 430 | 900 | 1240 | 1440 |
|---|---|---|---|---|---|---|
| height | 504 | 519 | 539 | 700 | 802 | 842 |
