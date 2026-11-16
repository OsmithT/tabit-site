# Tabit site

The code behind the Tabit Insurance website prototype in Framer.

## What is where

- `framer/alpha1/`: **the live site.** The source files of the Framer project "Tabit Alpha version 1"
  (https://practical-monstera-026490.framer.app).
  - `TabitSite.js`: the home-page engine (XR2.7: the XR2.5.7 night-sky site with the burger menu top left and
    Contact us top right). An ES module exporting `runTabit(host, THREE, init)` and `TABIT_FONTS`; `runTabit` draws the
    whole home page (intro, logo, scene, copy, nav) into `host` and returns `{ dispose() }`. Since XR3.7 it holds
    only the look the site runs: `init` is `OPTIONS` as `TabitHome.tsx` passes them (see below).
  - `TabitHome.tsx`: the Framer code component on the `/` page. Loads three.js, calls `runTabit`, and scales the
    720-unit-tall design to the component's height, letting the width run to the edges (960–1940 design units), so the
    page fills laptops and ultrawides alike.
    On a phone (under 600 px wide, XR3.0) it gives the engine a stage of its own, 390 units wide, and the engine
    composes the home for a phone (`tbPhoneLayout` and `TB_PHCSS` in `TabitSite.js`; STYLE.md §4 "Phones").
    Since XR3.4 a phone's home is a real page that scrolls: TabitHome lays a tall track in the document's body with
    the stage pinned in it (`position: sticky`), and hands the engine the document's own scroll
    (`window.__TABIT_NAT`: `y()`, `to()`, `max()`; `natOn` in `TabitSite.js`). On a phone nothing of ours listens
    to the wheel, the finger or the keys: do not add a listener there that can stop the scroll (a non-passive
    `touchmove` or `wheel`), it makes the browser wait for it on every move of the finger. STYLE.md §6.
    Its working numbers, which are not style values: the track sits at z-index 1 over Framer's page; the page is
    taken as 7,000 units long until the engine says (`PH_S0`); a view is never taken as shorter than 320 px.
    Nothing changes at 600 px and wider.
    Safari's bars on a phone (XR3.5, XR3.6; `TABIT_PHONE`, `tabitEdge` and `mountTabitSky` in TabitSite.js). Safari on
    iOS 26 shows a page under its status bar and its toolbar. Two rules, read from its own source (WebKit:
    `LocalFrameView::fixedContainerEdges`, `WKWebView`'s colour extension views, `WKContentView`'s fixed clipping
    view) and proven on a phone on the home:
    1. It lays a flat colour over a bar's zone when the element at the middle of that edge of the screen sits in a
       pinned box (`fixed`, or `sticky` and stuck) at least nine-tenths as wide as the screen and no taller than 1.05
       times it (its first look ignores `pointer-events`). The click-out pages' nav bar and Framer's badge holder
       (`#__framer-badge-container`: `fixed`, full width along the bottom, 78 px tall, `pointer-events: none`, z-index
       2147483647, in the page's own HTML) are such boxes; the home's stage is not, because its pin is taller than the
       screen (`PH_TOP` + 100lvh + `PH_BOT`): keep it so. `tabitEdge()` puts a marker (`data-tb-edge`) in front of them
       at the middle of the top and of the bottom edge: nothing to see or tap, too small to count.
    2. With no cover, whatever lies in a zone is drawn, pinned or not, as long as it is inside the page's own length.
       So the home's stage and the click-out pages' sky run 100 px above the view and 140 below it (in the tallest
       view, `lvh`: that is what lies under the bars), and the click-out pages' nav glass 100 px above it. All of it
       follows the window's width (under 600 px), so a phone turned upright gets it. Above a page's top and below its end there is only the page's ground colour: the home rests 100 px
       down, so its top never shows; a click-out page's ground takes the nav glass's colour (`#060A17`) while the page
       is within 200 px of its top, and Night otherwise.
    The markers' working numbers, which are not style values: 12 px square (Safari looks 4 px in from the edge), set
    in by 6 px to sit on the middle, z-index 2147483647, the same as the badge holder's, so they have to come after
    the holder in the body: they are moved back to the end when something is added after them (eight times at most;
    if something else keeps taking the end they give up and the flat colour is back). There is one pair in a document,
    shared by whoever asks (`tabitEdge()` hands out shares). Each keeps one empty child,
    because Safari looks through a box with no child and no background. Never put a full-width `fixed` layer along
    the top or bottom of a phone's page without checking this, and never use a popover or a dialog for a marker
    (their backdrop counts as a box). Not covered: a phone on its side.
    What a frame costs (XR3.6). Everything the home will need is made before its first frame (`prepare`), not at first
    use. The hero's two canvases are not drawn, and are hidden, while the site's sky covers them (from three tenths
    of the way into the hand-off); a canvas is cleared only when something was drawn on it; a frame builds no colour
    strings or pairs for the sky. On a phone one full-screen canvas is drawn in a frame on most of the page (four
    before). The pictures are the same: `pix.py`-style comparisons, old build against new with the clock frozen, are
    the test for any such change. The intro plays once in a visit (`tabit-intro` in `sessionStorage`).
    The engine holds only what the site runs (XR3.7). `TabitSite.js` used to hold every look the home has had, chosen
    by `runTabit`'s options. The site passes one set (`OPTIONS` in `TabitHome.tsx`; the click-out pages add `sky`), so
    what those options can never reach was taken out: three tenths of the file (412 KB to 284 KB), among it eleven of
    the sky's twelve scenes, which were all set up at every load, and the sky's stand-in interface (elements made at
    every load, written to in every frame and never put in the page). A piece went only if both held: it follows from the
    options that it cannot run, and it never ran in recorded runs of the whole site (the browser's own block-by-block
    record: every window size, phone and desktop, reduced motion, a slowed processor, the click-out pages). Every
    frame of the home was then compared with the build before, pixel for pixel. What a tool cannot decide (values
    worked out and never read, work on things that are never shown) was traced by hand. So `runTabit` no longer honours other
    values of its options: pass them as they are. Commit 94025f7 is the last that holds the earlier looks. Two lines
    in `makeScrollSky` (`seed = …`, before and after the diagrams scene) put the shared random generator where the
    removed scenes used to leave it: they keep every star of the figures in its place, so leave them.
    Work in a frame that changed nothing went with it: the page markers' labels are no longer measured in every frame
    (a `ResizeObserver` keeps their heights; measured between writes, they made the browser lay the page out again
    several times a frame); the day's colours are written when the day changes, not in every frame (the site's scene
    has no day); a star well off to the side is passed over before its place is worked out. And one thing XR3.6 meant
    to do and did not: the star figures are now made before the first frame with the rest (`prepare` asked the sky for
    its warm-up, which the sky did not hand on, so each figure was still made at first sight, a held frame at each
    chapter the first time through).
    Safari says where the page is (XR3.8). On a phone the home draws everything from the page's own scroll, so it
    needs that number in every frame. Safari, from the engine of autumn 2026 (WebKit 625; not the Safari 26 line),
    saves power while its bar slides in or out with the scroll: it sends the page its scroll position once every
    100 ms then, and moves only pinned boxes itself in between (`-[WKWebView _updateVisibleContentRects]` in WebKit's
    source: "throttle visible content rect updates to save power"). Oscar's recording of the live site shows it: the
    home stepped every sixth frame, ten times a second, each time the bar moved (leaving the top, coming back to it,
    turning round) and ran at sixty everywhere else. WebKit's exception (bug 319523; in each release branch checked
    that has the rule) is a page with a scroll-linked animation that runs on the main thread, which is told every
    frame. Every phone page declares one (`TB_LIVE_CSS`, `tb-live`, made with the edge markers in `tabitEdge`, so the
    home and the click-out pages share it): an empty, unseen box with a custom property of its own that is 0 down the
    first half of the page and 1 down the second. Nothing reads it, no child inherits it, it has no size: the page
    is laid out no more often for it, and it costs one more style pass a frame (measured in Chromium). It looks like
    dead code and is not: it is what Safari's source says lifts the rule, and it must stay a property the compositor
    cannot run (not `transform` or `opacity`), or Safari does not count it. The click-out pages need it too: the
    browser moves their copy itself, but their sky's drift and the Captives figure are drawn from the scroll.
    None of this can be run off a phone: no desktop browser has bars that slide. Tested here: that the animation
    is there, on a phone's pages only (the home, Captives and About us), bound to the page's scroll, in Chromium
    and in WebKitGTK. That it ends the stepping is to be confirmed on Oscar's phone; `?diag` there shows how long
    the page waits to be told it has scrolled.
    A first play does what a Replay does (XR3.8). Compiling the sky's programs before the first frame (XR2.9.1) did
    not send their textures, fill their buffers or draw with them: each was done when a thing first came into view,
    0.05, 0.35, 1.15 and 1.3 s into a first play, and the splash logo was cut into its pieces in the frame the intro
    ends on. A Replay does none of this (measured: wrap the graphics calls and list what is first asked for after
    the first frame). Oscar saw frames dropped on a first load in Safari and none on Replay; what each of these
    costs in Safari is not measured here (there is no Safari here), so this is the likely cause, not a proven one.
    Now one frame is drawn with everything shown, cut down to one pixel, before the first frame proper (`precompile` in `makeTabitHero`),
    the splash logo's pieces are made in `prepare`, and the four weights of Manrope are asked for as soon as their
    stylesheet is in (a browser otherwise fetches a font when text first needs it). The test: that list, for a first
    play, must be empty.
    The black hole stands on the mouse on a stage of any height (XR3.9). The pointer is kept in the design's units (1280 x 720,
    centered in the stage); the stars are bent, and Orion's glows placed, in the stage's own units, which begin OX to
    the left of the design and OY above it. Two sums in `render` left OY out on one side. On a stage 720 tall that
    is nothing. On a taller one (a window squarer than 16:9 at the home's size: Oscar's Safari window, 2056 x 1201,
    gives a stage 961 tall) the stars bent round a point OY above the ring that marks the black hole, and each of
    Orion's glows stood OY below its star through the intro: 120 units, 150 px, there. The ring, Orion's figure and
    the grid have been right since XR2.9.20 (see `toScreen`); these two sums were missed then. With OY in both,
    each sum is the other's inverse at any OY, so a glow with no black hole near it is put exactly where its star
    projects. Measured in Chromium at that window's size (there is no Safari here): the glows stood 118 units below
    their stars and now stand on them; the stars bent round a point 152 px above the mouse and now bend round the
    mouse (to the measure's own error, some 40 px). At 1440 x 810 and 1440 x 900, where the stage is 720 tall, and
    on a phone (390 x 844, 390 x 664), every pixel of the intro, the splash and the pages is as it was.
    The opening waits for the page (XR3.10). Oscar's `?diag` readout from Safari 27 on his Mac, two first loads: in the
    first second of the intro, six frames 0.1 to 0.9 s apart, with 1 ms of the engine's own script in each, and the
    governor at level 2 because of them. So what stopped the page was not the engine's script. What loads then, by
    Framer's own loader, is its editor: `framer.com/edit/init.mjs`, which every site Framer serves pulls in, adds a hidden
    full-window frame from framer.com (`#__framer-editorbar`) once the page has loaded: at an idle moment where the
    browser has `requestIdleCallback`, 300 ms after the load where it has not. By WebKit's source (its main line and
    release branches 7622 to 7625) Safari has not (`RequestIdleCallbackEnabled` is off) and runs a frame from another
    site on the page's own thread (`SiteIsolationEnabled` is off). Chrome on a computer gives such a frame a process of
    its own (that is Chrome's documented design, not tested here), and through the Claude browser pane on the same Mac
    (Chromium) the intro measured 120 frames a second with none dropped. That is the reading; it is not proved until
    the readout shows it on his Safari. The engine cannot stop Framer's frame, so a first play of the intro waits for it
    (`self.hold` in `TabitSite.js`): in a browser without `requestIdleCallback` the clock stands at 0 until the page has
    loaded, Framer's frame has loaded (400 ms is allowed for it to appear, 3 s for it to load), and no frame has come
    late for 250 ms; never longer than 4 s from the engine's first frame; a press or a scroll down ends it, and so
    does anything that moves the clock. The governor does not count the wait. `?diag` now says when the page loaded,
    when Framer's frame was seen and loaded, how long the opening waited and how many frames came late meanwhile.
    Simulated with a stand-in frame that holds the thread for the times in Oscar's readout (Chromium with
    `requestIdleCallback` taken away, and WebKitGTK, which is WebKit but not Safari): before, stalls of 0.16 to 0.96 s
    while the intro played (2.3 s in one piece in WebKitGTK); after, none in the simulation, with the intro beginning
    once the frame has loaded. In Chromium as it is the intro begins when it did. Known: a browser that gains
    `requestIdleCallback` while still sharing the thread would not wait, and Chrome on Android (which has it, and does
    not always keep frames apart) is as it was; work Framer's frame does after its own load (seen once at 2.4 s for a
    signed-in editor) is not waited for; a page whose own load takes most of the 4 s starts on time and may meet the
    frame. Framer's own site, on its own domain, pulls in the same loader but made no frame for an ordinary visitor in
    40 s (seen through the Claude browser pane, 16 Nov): on a real domain the frame may come only for owners and
    collaborators, as Framer's help page says of the Edit button, and a visitor there then waits only the 400 ms.
    `?diag` on the real domain will say ("Framer editor frame none").
  - `pages/reinsurance.js`, `captives.js`, `aboutus.js`, `contact.js`: the click-out pages as `{ css, html, js }` strings,
    with the burger header. `TabitPage.tsx` renders one of them (its `page` control picks which), puts the home's live
    sky behind it, and, where the module has a `js` (Captives: its figure, board XR2.9.31E), runs it with the page's
    element once the fonts are in and calls the teardown it returns when the page goes.
  - `tools/captives_figure.js`: the Captives figure's script, readable. `pages/captives.js` holds the same text as its
    `js` string; change this file, then write it into the module (`js = JSON.stringify(source)`), never the string by hand.
  - `TabitHomeStyles.js`: global CSS the home component injects once.
  - Framer pages and phones: every page in Framer has Desktop, Tablet (810–1199 px) and Phone (up to 809 px)
    breakpoints (XR3.0, 13 Nov 2026). Keep them. A page with only a Desktop breakpoint makes Framer write
    `<meta name="viewport" content="width=1200">`, and Framer enforces it at runtime (a head snippet cannot override
    it): a phone then lays the page out 1,200 px wide and the phone layout never runs. The Tablet and Phone
    breakpoints inherit the Desktop one; the only override is Contact's form on Phone (full width, 13 px side padding
    so the fields line up with the copy at 24, and Full name / Email stacked).
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
