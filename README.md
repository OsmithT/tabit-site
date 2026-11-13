# Tabit site

The code behind the Tabit Insurance website prototype in Framer.

## What is where

- `framer/alpha1/`: **the live site.** The source files of the Framer project "Tabit Alpha version 1"
  (https://practical-monstera-026490.framer.app).
  - `TabitSite.js`: the home-page engine (XR2.7: the XR2.5.7 night-sky site with the burger menu top left and
    Contact us top right). An ES module exporting `runTabit(host, THREE, init)` and `TABIT_FONTS`; `runTabit` draws the
    whole home page (intro, logo, scene, copy, nav) into `host` and returns `{ dispose() }`.
  - `TabitHome.tsx`: the Framer code component on the `/` page. Loads three.js, calls `runTabit`, and scales the
    720-unit-tall design to the component's height, letting the width run to the edges (960–1940 design units), so the
    page fills laptops and ultrawides alike.
    On a phone (under 600 px wide, XR3.0) it gives the engine a stage of its own, 390 units wide and as tall as the
    part of the screen in view, and the engine composes the home for a phone (`tbPhoneLayout` and `TB_PHCSS` in
    `TabitSite.js`; STYLE.md §4 "Phones"). Nothing changes at 600 px and wider.
  - `pages/reinsurance.js`, `captives.js`, `aboutus.js`, `contact.js`: the click-out pages as `{ css, html, js }` strings,
    with the burger header. `TabitPage.tsx` renders one of them (its `page` control picks which), puts the home's live
    sky behind it, and, where the module has a `js` (Captives: its figure, board XR2.9.31E), runs it with the page's
    element once the fonts are in and calls the teardown it returns when the page goes.
  - `tools/captives_figure.js`: the Captives figure's script, readable. `pages/captives.js` holds the same text as its
    `js` string; change this file, then write it into the module (`js = JSON.stringify(source)`), never the string by hand.
  - `TabitHomeStyles.js`: global CSS the home component injects once.
  - `site-head.html`: the site-wide Custom Code snippet in Framer (End of <head>, all pages) that makes phones lay the
    page out at their own width. Framer writes `width=1200` because the pages have only a Desktop breakpoint; without
    this snippet a phone renders the desktop design shrunk to a third and the phone layout never runs.
- `framer/alpha1/pages/press.js`, `press_header.js`, `article_*.js`, `contact_top.js` (underscores: Framer's file names), `legal.js` (Ashleigh, XR2.8):
  Press and media, the article page and its template, and the top/bottom parts of /press and /contact for pages
  built partly in Framer. `components/TabitArticle.tsx` is the CMS article page; `cms/` holds the import files and
  `cms/SETUP.md`, the Framer setup for the CMS and the Contact form. `images/` holds the team photos and the star sky.
- `engine/tabit-b.js`, `engine/tabit-a.js`: the earlier Beta 3.0 engines (options B and A), kept for reference.

Design decisions and every version are logged in the "Tabit website — decisions" Claude doc; the boards themselves live
on the "Beta 4.2 Live" Design canvas (XR2.5.7 row 1 … XR2.7 row 4). Ask Oscar for both links.

## How to work on this (for a collaborator)

You need three things:

1. **Framer** — edit access to the project "Tabit Alpha version 1" (Stephen's Framer account owns it; he or Oscar
   invites you from the project's Share menu). Project id `Z0aoK3S6M9yjyG33CeIM`.
2. **GitHub** — this repo, `OsmithT/tabit-site`. It is public, so anyone can read it; to push you need to be added as a
   collaborator (Settings → Collaborators) or work from a fork and open a pull request.
3. **Claude** with the Framer and GitHub connectors turned on (Settings → Connectors in claude.ai). Claude then edits the
   Framer project through its own tools and reads/pushes this repo. Nothing else to install.

The workflow is always the same, and is what Claude does when you ask it to change the site:

1. Edit the files under `framer/alpha1/` (locally, or Claude does it in its workspace).
2. Commit and push to `main`. Note the commit hash.
3. In Framer (via Claude), pull each changed file in and write it over the project's copy:
   ```js
   const base = "https://raw.githubusercontent.com/OsmithT/tabit-site/<commit>/framer/alpha1/";
   const src = await (await fetch(base + "TabitSite.js")).text();
   await api.files.write("TabitSite.js", src);
   ```
   (`cdn.jsdelivr.net/gh/...@<commit>` also works once the commit has propagated — raw.githubusercontent.com is
   immediate.) Compare a SHA-256 of the source and the written file if you want to be sure nothing was altered.
4. Screenshot the pages in Framer to check, then publish from Framer.

Rules that keep two people from treading on each other:

- GitHub is the source of truth. Never edit a file directly in Framer's code editor without committing the same change
  here — otherwise the next pull from GitHub overwrites it.
- Pin every pull to a commit hash, never `@main`, so a half-finished push can't land on the live site.
- Pull `main` before you start, push small commits, and say in the commit message which board/version it is
  (e.g. "XR2.7 burger menu").
- The Framer page tree (pages, breakpoints, which component sits on which page) is the one thing not in this repo.
  It rarely changes; if you add a page, note it in the decisions doc.

Brand rules that apply to any change: text colour Paper `#FBF9F4`, the only gold is Brass `#A8823A`, never alter the
Tabit logo, animations are scroll-driven (never on timers), no kicker labels, no pictures behind pages unless asked,
and only approved site copy goes on the site — nothing from internal documents without Oscar's say.
