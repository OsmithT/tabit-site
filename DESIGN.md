# Tabit website — cardinal rules

The rules every change to the Tabit site is checked against. A change that breaks a **cardinal** rule does not ship
(not to a canvas row, not to Framer) until it is fixed. **House** rules come from the design and performance skills the
team has adopted (design-taste-lite, impeccable-lite, break-ui, mobile-native, animation-performance); a house-rule
failure is flagged for Oscar's decision rather than blocking on its own. Owner of the rules: Oscar Lindley-Smith.

## Cardinal (set by Oscar and Stephen)

1. **Colour.** Only the ten Brand Book 2027 colours (STYLE.md §2). Text is Paper `#FBF9F4`. The only gold is Brass `#A8823A`. Night ground `#04070F`. Dusk `#B8C0D4` for
   hairline chart lines and small labels only (the Captives figure's Dusk planet, shaded with Tabit Navy, 12 Nov 2026, was removed the same day: Oscar, "remove the planet from the center"). No other hues on UI; the sky's stars and nebula are the sole exception.
2. **The logo is never altered.** The Tabit knot and wordmark paths, their proportions and their white are fixed.
   They may move, scale and fade; nothing is redrawn, recoloured or re-spaced.
3. **No kicker or eyebrow labels** above headings (no small tracked caps saying what the section is). Chapter names on
   the star path are navigation, not kickers, and are allowed.
4. **Motion is scroll- or pointer-driven, never on timers** — no `setInterval`/`setTimeout` loops, no autoplaying
   carousels or slideshows, nothing that changes while the visitor does nothing. The approved load-time intro
   (0 – 7.2 s) is the one exception.
   Exception (Oscar, 11 Nov 2026): the Captives cells figure orbits on its own, slowly (the system turns together,
   two minutes a revolution); it runs only while on screen and holds still under reduced motion.
   The home sky's faint twinkle is part of the sky, which every page shows identically (Oscar, 12 Nov 2026: "same number
   of stars, moving stars, colour, hue everything"); it is not a new timer on the click-out pages. The film grain stays
   under decision (below).
5. **No pictures behind pages** unless Oscar asks for one. The night sky is the only background, and it is the home's
   sky on every page, identical in every respect (Oscar, 12 Nov 2026; STYLE.md §7).
6. **Only approved site copy.** The words on the site are the words already approved on the XR2.5.7 boards (and
   Ashleigh's XR2.4 pages), as amended by the list Oscar agreed on 11 and 12 Nov 2026 (decisions log, XR2.11). Site
   copy is in American English (license, capitalized, collateralized, favor, judgment). Nothing from internal documents (the 1-pager, decks, Notion) goes on the site without
   Oscar saying so. Each fact appears once.
7. **Every change is a new board** on the current Beta canvas; earlier boards are never overwritten; assets are never
   deleted unless asked. The decisions doc is updated with every row.
8. **Layout follows the space available, not the device.** Two columns at ≥ 1.6:1; stacked (copy centred top, subject
   centred below, chapter path thinned to the right edge) at ≤ 4:3; positions interpolate between. The sky always
   fills the screen — never letterboxed. Phones get their own composition. **Sizes follow the width, never the
   height (Oscar, 11 Nov — as apple.com):** text and the nav keep their size on a short or very wide window, which
   crops (home) or scrolls (pages) instead of shrinking; see STYLE.md "Sizing".
9. **GitHub is the source of truth for Framer.** Every Framer change is a commit in `framer/alpha1/` first, pulled in
   pinned to a commit hash; nothing is edited only in Framer's code editor.

## House (from the adopted skills)

- A figure is seen whole or not at all: never cut by the window's edge or the nav while visible (the home compass rim,
  a horizon, is the one exception). STYLE.md §7, v1.14.

- Headlines ≤ 2 lines at every width; one `h1`-equivalent per screen; a real primary action on screen one.
- Body text 45–75 characters a line; text contrast ≥ 4.5:1 (3:1 at 24 px+); running text ≥ 7:1 preferred. No minimum
  pixel size beyond the style code's own steps: secondary text (Small, e.g. list descriptions) may render under 16 px
  (Oscar, 11 Nov 2026; the earlier 16 px floor was general web practice, not a Tabit rule).
- No index numbering (01/02/03), no icon-topped card rows, no nested cards, no 1 px hairline rules as decoration,
  no gradients or glows on UI, no monospace outside code, no emoji, no placeholder content on a live page.
- Hover styles only inside `@media (hover: hover) and (pointer: fine)`; every tappable has `:active` feedback;
  `-webkit-tap-highlight-color: transparent`; `100svh`/`100dvh` not `100vh` on phones; no `user-scalable=no`.
- Animate `transform`/`opacity`; never `transition: all`; no per-frame `getImageData`/`putImageData`; animated blur
  ≤ 20 px; frame budget 8 ms (120 Hz) — `?diag` shows dropped < 5 % and js/frame < 4 ms on an M1 Mac.
- Worst-case content must hold: long names and titles wrap without breaking rows; `flex-shrink: 0` on buttons and
  icons; `min-width: 0` on text columns; one item, no items and many items all render.
- Reduced motion keeps opacity and colour changes, drops travel, scale, parallax and autoplay.

## Sanctioned exceptions (approved by Oscar; the gate lists them as "exception", not as failures)

- The brass key word in each chapter headline ("underwritten.", "reward.", "risk.", "accountable.", "endure.") — the
  brand's signature device, although the rubrics say "no accent in headings".
- The three-line Captives statement "Your risk. / Your premium. / Your reward." — approved copy set as three lines on
  purpose.
- The three-line Home headline "Bespoke / (re)insurance / solutions." (12 Nov 2026) — Oscar's words; on two lines
  "Bespoke (re)insurance" ran into Orion.
- The star glows, flares and the nebula — they are the subject, not UI decoration.
- The load-time intro (0 – 7.2 s), time-driven by design.
- The star-path chapter labels — navigation, not kickers.

Under decision (flag, do not block, until Oscar rules): whether XR2.9.22's star disk may turn faster than the cells at rest, as its reference does (built at the cells' 3 degrees a second, the extra whirl on the scroll); the film-grain loop and the EXPLORE cue pulse (cardinal 4 as
worded); the hairline above the Home proof row and the 1 px Dusk 14 edge under the nav bar; `Replay` and the
coordinates as on-screen chrome; the splash having no primary action; the About legal line at 11 px; on the click-out
pages, the (Re)insurance hero
keeping copy left / compass right (the home chapter has them swapped), and whether the pages carry the chapter path.

## How the gate runs

After any change to a board or to `framer/alpha1/`: render the changed surfaces at 1440×810, 1440×900, 1776×1286,
1200×1200, 900×1200 and 390×844; run the reviewers (one per lens: cardinal rules, **style code (`STYLE.md`: every
colour, size, weight, tracking, radius, spacing and component value used must be one listed there)**,
design-taste/impeccable, break-ui + mobile-native, animation-performance); every finding names the rule, the surface
and size, the evidence (screenshot or `file:line`) and the fix. Cardinal FAIL or a style-code value not in `STYLE.md`
→ fix (or add the value to `STYLE.md` with a reason, logged in its §10) and re-run before publishing. Result logged in
the decisions doc.
