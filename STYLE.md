# Tabit website — style code (v1, 10 Nov 2026)

The values behind every visual decision on the site, taken from the home page as shipped (XR2.8.2) and the brand
guidelines. `DESIGN.md` holds the cardinal rules (what never ships); this file holds the values. Where a page and this
code disagree, the page is wrong. A change that uses a value not listed here is blocked until the value is changed to a
listed one or added here with a reason (and logged in §10). The same text lives in the Claude doc "Tabit website —
style code"; keep the two identical.

All numbers are design units on the 1280 × 720 stage. **Sizing (v1.4, Oscar 11 Nov): sizes follow the window's width,
never its height, as apple.com does.** On the click-out pages 1 unit is never less than 1 px at
any width (it rises with the width to 1.25 px at 1440); two columns need both 1.6:1 and 1024 px, otherwise the page
stacks. On the home, 1 unit = 1 px from 960 to 1152 px wide, rising to at most 1.25 px; below 960 px the 960-unit stage
scales down (the home's phone composition is still to come). On the
home (a pinned scene that cannot scroll), a window shorter than the stage tightens the size so the whole page stays
in view, but never below 0.62 (windows under 446 px tall, which no one browses in); below that the bottom is cropped. The click-out pages ignore the height entirely and scroll; their content sits in a centred
1440-unit column, and wider screens get night either side. The home's sky and stage always run to the window's edges
(up to 4096 units wide); only the 1280-unit content box stays centred. Nothing ever shrinks to fit a short or very wide window.

## 1. Principles

Everything on the site is the sky (stars, nebula, the figures), the words (Paper type on Night, one brass key word per
chapter) or the instruments (nav, button, chapter path, compass labels). No fourth category: no panels, cards, boxes,
photographs, illustrations or icons.

1. One surface — Night is the only background; legibility by dimming the sky, never by a filled rectangle.
2. Two type voices, one scale — Manrope everywhere (Cormorant Garamond loaded for the hero only); seven sizes.
3. One accent, one job — Brass marks the headline key word, the primary action, the current chapter, the compass
   points. Never a text background, border or decorative line.
4. The subject sits still, the visitor moves — scroll- or pointer-driven motion only; the opening sequence excepted,
   and the Captives cells figure, which orbits slowly on its own (v1.11).
5. Layout answers the space, not the device — two columns ≥ 1.6:1, stacked ≤ 4:3, interpolated; sky always fills.

## 2. Colour

**Brand palette (Tabit Brand Book 2027, “Ivory by day, night after dark, brass in both”; sent by Oscar 11 Nov).**
These ten are the only colours the site may use. Every colour in this code must be one of them or a fixed tint of one.

| Brand colour | Hex | Brand role |
|---|---|---|
| Night | `#0B1433` | Night ground |
| Night Raised | `#142047` | Night cards |
| Tabit Navy | `#09154A` | Logo, Day headlines |
| Ink | `#3D4466` | Day body text |
| Ivory | `#F6F2EA` | Day ground, Night text |
| Dusk | `#B8C0D4` | Night body text |
| Paper | `#FBF9F4` | Print |
| Stone | `#E4DDD0` | Day panels |
| Brass | `#A8823A` | The one gold |
| Deep Brass | `#7A5A1E` | Day labels |

The site is in Night mode. Where the site's current values differ from the brand roles (for Oscar to rule; until then
the site keeps its current values):
1. **Ground:** the site uses `#04070F`, darker than brand Night `#0B1433`.
2. **Text:** the brand says Night text is Ivory `#F6F2EA` (headlines) and Night body text is Dusk `#B8C0D4`; the site
   sets all text in Paper `#FBF9F4`, which the brand reserves for print. (XR2.9 moved the engine from Ivory to Paper.)
3. **Accent and Dusk (ruled by Oscar, 11 Nov):** Brass stays the one accent. Dusk `#B8C0D4` is simply another brand
   colour the site may use (lines, structure, quieter text), not an accent. The XR2.9.5 boards' stand-in `#8EA9D9` is
   not a brand colour; Dusk takes its place.

**Current site tokens:**

| Token | Value | Used for | Never for |
|---|---|---|---|
| Night | `#04070F` | The one background; text on a brass button | Anything else |
| Paper | `#FBF9F4` | All text; burger lines; star-path dots (the lockup keeps its own white — cardinal rule 2) | Backgrounds, fills |
| Brass | `#A8823A` | Headline key word; primary button fill; current chapter; compass points/diamonds; link hover | Body text, borders, backgrounds behind text, decorative lines |
| Dusk | `#B8C0D4` | EXPLORE cue; hairline chart lines in the sky; compass rim ticks; the hover state of a list term and its figure label, and the hovered orbit (v1.10) | Resting text > 13, anything that must be read at rest |

Tints (fixed opacities, no others): Paper 80 `rgba(251,249,244,.80)` compass descriptions · Paper 72 secondary small
text (pronunciation, timeline labels) · Paper 60 legal line · Paper 38 secondary/nav button border · Paper 22 About
timeline hairline · Paper 14 structural hairlines (trust row, legal line) and menu panel border · Dusk 14 nav bottom
edge (under decision) · Dusk 45 Replay border.

Washes (legibility only): nav bar `rgba(8,13,30,.50)` + 14 px blur; burger panel and Skip `rgba(4,7,15,.92)` + 14 px
blur; behind the copy column a horizontal `rgba(8,13,30)` .50 → 0 to 860 units; top 160 units `rgba(8,13,30,.30 → 0)`;
Replay `rgba(4,7,15,.35)`.

Contrast: Paper/Night 18.9:1; Paper 60/Night 9.8:1; Dusk/Night 11.4:1; Night/Brass 6.3:1.

Deviation to correct (XR2.9): engine default text `#F6F2EA` → Paper; `#FFFFFF` on the click-out pages → Paper.

## 3. Type

Manrope 300/400/500/600. No monospace; italics only for the dictionary entry's *noun* and *al-thābit*.

| Step | Size / line | Weight | Tracking | Case | Used for |
|---|---|---|---|---|---|
| Display | 84 / 80 | 300 | −.035em | Sentence | Home headline only |
| Headline | 64 / 66 | 600 | −.035em | Sentence | Chapter headlines, two lines, last word Brass |
| Title | 40 / 44 | 600 | −.035em | Sentence | Compass point titles, "Tabit" in the dictionary entry, timeline years |
| Body | 17 / 26 | 400 | 0 | Sentence | All running copy, compass descriptions, definition, menu links (17/24) |
| Small | 13 / 20 | 400 | 0 | Sentence | Trust row, timeline labels, *noun*, Replay (600) |
| Control | 14 / 18 | 600 | 0 | Sentence | Button labels |
| Label | 11 / 16 | 600 | .20em | UPPER | Star-path chapter names, compass letters, EXPLORE cue (.26em), coordinates (400, .14em) |

Measure 45–75 characters (column 640, text ≤ 610). Two-column copy left-aligned; stacked centred. Headlines ≤ 2 lines
at every width (change the words, not the size). One Headline per screen; sub-heads are Body 600 on their own line —
no new size, no kicker, no number. One brass key word per headline; never in body copy.

Deviations to correct (XR2.9): click-out pages use clamp(52–104)/1.02/300, 30/36/300, 22/28/500, 20/26/500, 19/30,
16/26 — none on the scale. Chapter "Explore" buttons use 13/500/.02em — Control is the code for every page button; the
13-unit size is for the nav bar only.

## 4. Layout

Stage 1280 × 720 at the width-led scale above (pinned to the top of the screen); width runs 960–1940 units; when the
window is taller than 720 units the stage grows taller (and, squarer than 4:3, stacks).

Two columns (≥ 1.6:1): copy column left 80, width 640, text ≤ 610, vertically centred (home column top-aligned at 88);
subject centred at x 940 (spreads right / draws in with width), y 360; chapter path at the right edge 1180–1220.
(Re)insurance swaps: compass left, copy right at 680 × 480.

Stacked (≤ 4:3): copy centred, top-aligned 88 under the content box top; subject centred x 640, y 586 → 630 as the
stage grows taller; chapter path thinned to the edge. Copy scale .80 → 1.12 by height; subjects .46 → .87 of two-column
size (compass capped .75). Content box lifts towards the nav by 60 % of the extra height.

Between: every position lerps on `ST = (1.6 − aspect) / (1.6 − 1.333)` clamped 0–1.

Margins and rhythm: nav contents 40 from the edges; Replay 24; coordinates 64; EXPLORE cue 34. Headline → body 24;
body → button 30 (home 28); body → trust row 26 above the hairline, 18 below; dictionary blocks 14; sub-head →
content 14; timeline 46 (28 stacked); buttons in a row 12 apart; list items 12 apart; sections 96 apart on the
click-out pages, whose hero copy starts 176 from the top (88 nav + 88) and whose footer ends 40 above the bottom.
Positions on multiples of 2.

Phones (< 600 px): not yet composed — same values, stacked, 16-unit margins, chapter path as a bottom bar.

## 5. Components

Radius 2 everywhere; no other radius, no pill.

- Nav bar: 88 tall, contents inset 40, Night wash + 14 px blur, bottom edge Dusk 14 (under decision). Burger left,
  lockup centred (docked at y 44, proportions fixed), one secondary button "Contact us" right at nav size.
- Home link (every page but home): right of the burger, 20 apart — the Tabit knot at 11 × 8.6 (home's own chapter-path
  stop, Paper at 72 %, unaltered) then "Home" at the nav size (13/500/.02em), 8 between, 44 tall; hover Brass with the
  knot at full strength, .25 s; presses down 1; 4 units of side padding, as the burger has. On phones the word drops
  and the knot stays (14 × 11 in a 44 tap target, labelled "Home", 8 from the burger), and the lockup is 100 wide
  with its height following (never squashed). Burger and Home link are at least 44 × 44 px at every size. The idea 9 breadcrumb reduced to its essence: the star you came from, one tap back.
- Burger: 44 × 30 hit area, two Paper lines 22 × 1.5, 10.5 apart, no word. Open → cross, .25 s. Panel 280 wide, 60
  under the nav line, padding 16/28/18, `rgba(4,7,15,.92)` + 14 px blur, border Paper 14, radius 2; links Body 17/24,
  9 above/below, no dividers; hover and current page Brass; focus ring 2 px Brass offset 3.
- Buttons: height 44, padding 13 × 24, radius 2, label Control 14/18. Primary: Brass fill, Night text at 600, +8 %
  brightness on hover (a state, not animated). Secondary: transparent, 1 Paper 38 border, Paper text at 500; hover
  Paper 8 % fill, border Paper 75, .25 s. Both press down 1 on `:active`. Hover only in `@media (hover: hover) and (pointer: fine)`. Nav size: height 38, padding 10 × 18,
  13/500/.02em — nav bar only. One primary per screen; a secondary may sit 12 to its left.
- Trust row (home): three Small facts, Brass middots, 12 apart, under a Paper 14 hairline (26 above, 18 below). Under
  decision as the one hairline above text.
- Chapter path: faint polyline at the right edge joining five Paper stars (11 × 8.6 in a 28 hit area), current one
  glowing; Label to the left on hover/focus with the chapter letter in Brass. Navigation, not kickers.
- Compass labels ((Re)insurance): Title + Body at Paper 80, centred above the rim, 520 wide; the point letter drawn 84
  outlined 1.2 px Brass 62 % between the Brass diamond and the rim.
- Dictionary entry (About): "Tabit" Title Brass, pronunciation Body Paper 72, *noun* Small italic; definition Body;
  timeline: Paper 22 hairline, 7 × 7 diamonds, years Title, labels Small Paper 72, columns 52 apart. Two-column at
  x 560, 420 wide; stacked under the copy, 470 wide.
- Legal line (About): 11/17 Paper 60, Paper 14 hairline 12 above; 920 wide two-column, 700 wide at the screen foot
  stacked. Under decision (only text below Small).
- Replay (24, 24): 36 tall, padding 0 × 16, Dusk 45 border, `rgba(4,7,15,.35)`, Small 600. Coordinates (64, 30): Label
  400/.14em Paper 80, links to About, Brass on hover. EXPLORE cue (34): Label .26em Dusk over a 1-unit line. All three
  under decision as chrome.
- Forms (Contact): inputs 44 tall, padding 8 × 14, radius 2, Paper 38 border, transparent, Body text (≥ 16 px on
  phones), Small label 6 above, 12 between fields, two short fields may share a row 12 apart, focus ring 2 px Brass
  offset 3, placeholder text Paper 38, dropdown options Paper on Night; submit is a primary button; no
  placeholder-as-label.
- Lists (click-out pages): a term/description grid — term column 240 at Body 600 Paper, description Small at Paper 72
  (v1.9: a description must read as a different level from its term, by size and tint, not weight alone), columns 32
  apart, rows 16 apart, the grid 880 wide; stacked, one column with the term above its description and 20 between items.
  Where a list has a figure beside it (Captives cells, v1.10), each item in the figure carries its term as a label in
  Small at Paper 72. Nothing is picked out at rest and the scroll never picks an item (v1.12); a mouse over a term or its
  figure item turns the term and the label Dusk, lights that item's line in solid Dusk, its point and the term's middot
  Brass, .25 s ease, in the hover media query only, fading away when the mouse leaves.
- People (About us): a grid of cards, four across (two stacked, one on phones), 32 × 40 apart, 1120 wide: a 4:5
  photo box (Paper 14 border, radius 2, nav wash fill, a Small "Photo n" label at Paper 60 until the photograph is
  in), name Body 600 (16 above), title Body at Paper 72, a Small "LinkedIn" text link, bio Body (12 above). The
  boxes are placeholders for photographs (Oscar, 10 Nov), not decorative cards.
- Not components: cards, panels, badges, chips, pills, icon rows, numbered steps, paragraph dividers, progress bars,
  carousels, image blocks.

## 6. Motion

Scroll and pointer only; the opening sequence (0–7.2 s, replayable, skippable) is the one timed exception; grain loop
and EXPLORE pulse under decision. Only `transform`/`opacity` on DOM; never `transition: all`, layout properties,
filters > 14 px, animated blur. Copy lines slide up 110 % behind a clip and fade (.07 s per line, .36 s stagger in the
dictionary entry; scroll-positioned in chapters). Hover colour .25 s ease (coordinates .5 s); burger .25 s
`cubic-bezier(.23,1,.32,1)`; chapter transitions follow the wheel eased `cubic-bezier(.3,.6,.3,1)`. All scroll-driven
values are functions of position (reversible); pointer effects decay ~.5 s. Reduced motion keeps opacity/colour, stops
grain and cue, stops the tilt, stars no longer travel between figures. Budget 8 ms at 120 Hz; governor locks 60 then
×.75/×.55 resolution; `?diag`, `?nograin`; target dropped < 5 %, JS < 4 ms on an M1 Mac.

## 7. Sky and subjects

Three depth layers of stars (2,400 in the design, extended for wide and tall screens), muted true colours, nebula in
brand tones, Night vignette `radial-gradient(120% 92% at 50% 48%, transparent 56%, rgba(0,0,0,.42))`. Tilts with the
pointer, drifts with scroll; never carries an image. Subjects: Orion with Tabit lit (home), the compass of stars with
rim and needle ((Re)insurance), the ring and comet (Captives), the AI title formed from a star cloud (AI), the lock
(Licence); About's subject is the dictionary entry. Paper-white points with the sky's glows (sanctioned). 55–60 % of
stage height two-column, 40–45 % of width stacked; the compass rim is a horizon and runs off the bottom by design.
Never photographs, illustrations, icons, other logos, UI charts, maps.

## 8. The click-out pages (measured 10 Nov)

| | (Re)insurance | Captives | About us | Contact |
|---|---|---|---|---|
| Kicker labels (13/600/.2em caps brass) | 4 | 5 | 1 | 1 |
| Filled cards `rgba(11,20,51,.58)` + border | 4 | 8 | 8 | 0 |
| Index numbering | 5 | 11 | 0 | 0 |
| Headline | clamp 52–104 / 300 | clamp 48–92; h2 42–68 | clamp 52–104 | clamp 60–120 |
| Off-scale sizes | 30/36, 22/28, 19/30, 16/26 | 26/32, 20/26 | 22/28, 20/26 | — |
| `#FFFFFF` | 6 | — | 6 | 6 |

Restyle, not rewrite (copy is approved): same sky and nav as home; one Headline (brass last word); Body; Body 600 for
the former kicker section heads; a primary button where asked; sections separated by 96 units of space, not cards,
rules or numbers; lists as Body with Brass middots or plain stacked lines; About keeps the dictionary entry and
timeline, people in Body (no photographs, no placeholders); Contact keeps the form. XR2.9: one board per page, gated
against DESIGN.md and STYLE.md before Framer.

## 9. Forbidden

Colours outside §2 (incl. `#FFFFFF`, greys, a second gold) · sizes/weights/tracking outside §3, clamp() or vw sizes ·
kickers, eyebrows, index numbering, all-caps beyond the three Labels · cards, panels, boxes, borders around content,
badges, chips, pills · decorative hairlines · gradients/glows/shadows on UI, radius ≠ 2, blur ≠ 14 px · photographs,
illustrations, icons, emoji, stock, pictures behind pages · monospace, italics beyond the dictionary entry, underlines
except focus · timer-driven motion outside the opening and the Captives orbits, `transition: all`, animated blur, layout animation · hover
outside the hover/fine media query, tappables without `:active`, inputs < 16 px or `100vh` or `user-scalable=no` on
phones · unapproved words, placeholder people or text · overwriting a board, a Framer edit without a commit.

## 10. Change log

- 11 Nov 2026 — v1.12. Oscar on XR2.9.15: the highlighted orbit changes only with the cursor, never with the scroll.
  Nothing is picked out at rest; the hovered cell lights and fades away when the mouse leaves (§5 Lists).
- 11 Nov 2026 — v1.11. Oscar on XR2.9.14 chose orbiting "always, slowly": the Captives cells figure turns on its own,
  3 degrees a second as one system (cells evenly spread, so names keep their room), only while on screen, still under
  reduced motion. The one exception to the scroll-or-pointer rule besides the opening (§1, §9; DESIGN cardinal 4).
- 11 Nov 2026 — v1.10. Oscar on XR2.9.13: hovering a cell's name turns it Dusk and lights its orbit ring; every planet
  carries its cell's name. Dusk gains the hover state of a list term and its figure label, and the hovered orbit (§2
  Dusk row, §5 Lists); figure labels are Small at Paper 72, as the timeline's.
- 11 Nov 2026 — v1.9. Oscar on the Captives list (XR2.9.12): "the information text size should be distinct and obvious
  from the titles". List descriptions drop from Body to Small at Paper 72 under Body 600 Paper terms (§5 Lists).
  Open: sub-heads over paragraphs (Body 600 over Body) have the same likeness and await his review.
- 11 Nov 2026 — v1.8.1. Oscar: Brass stays the accent; Dusk is a brand colour to use freely, not a new accent.
- 11 Nov 2026 — v1.8. The Brand Book 2027 palette (ten colours, as sent by Oscar) recorded in §2 as the only colours the
  site may use; three differences from the live site listed for decision (ground, text colour, light blue).
- 11 Nov 2026 — v1.7 (XR2.9.7). Home floor 0.8 → 0.62: at 0.8 any window under 576 px tall cut the bottom of the page
  (the trust row), and the home cannot scroll to reveal it. Checked as a grid of real screenshots (18 window shapes).
- 11 Nov 2026 — v1.6 (XR2.9.7). Click-out pages checked at 17 widths × 4 heights: the unit no longer drops below 1 px
  between 600 and 1152 px wide (it had shrunk legal text to 8 px), and two columns also need 1024 px of width.
- 11 Nov 2026 — v1.5 (XR2.9.7). The home stage's 1940-unit width cap raised to 4096: with sizes no longer shrinking,
  wide windows showed starless bands either side of the stage (Oscar, 2000 × 535 window).
- 11 Nov 2026 — v1.4 (XR2.9.6). Sizing by width, as apple.com: the site no longer shrinks to fill a short or very
  wide window (it had scaled everything by min(height ÷ 720, width ÷ 960)). Home: scale = width-led (1 → 1.25), a short
  window tightens it to no less than 0.8, then crops at the bottom; stage pinned to the top. Pages: 1 unit =
  min(1.25 px, 100vw ÷ 1152), 1 px from 960 to 1152, 100vw ÷ 960 below; content in a centred 1440-unit column; the
  hero no taller than the window.
- 10 Nov 2026 — v1. From XR2.8.2 and the brand guidelines. Queued for XR2.9: Paper text throughout; chapter "Explore"
  buttons at Control size; the four click-out pages restyled to this code; a fifth gate reviewer checks changes
  against this file.
- 11 Nov 2026 — v1.3 (XR2.9.4). The Home link beside the burger on the click-out pages (Oscar: home should not be
  buried in the menu); the phone lockup 100 wide; nav buttons never wrap. The journey devices (round 2, ten ideas)
  are not adopted.
- 10 Nov 2026 — v1.2 (XR2.9.2). Lists on the click-out pages are a term/description grid (the run-on lines with
  middots were rejected); the About people cards return with photo placeholder boxes (photographs to come); the page
  sky drifts with the scroll (×0.3) and leans toward the pointer (±24 × ±16 units), scroll- and pointer-driven only;
  the nav edge stays (Oscar). Sub-head "Leadership" struck.
- 10 Nov 2026 — v1.1 (XR2.9). Corrections from building the pages: the lockup keeps its own white (rule 2), not Paper;
  button labels are Control 14/18 for both styles, primary at 600 and secondary at 500; Title (40/44/600) also serves
  as the section headline on long-scroll pages ("Licensed, audited, aligned." on Captives); pages set 1 unit =
  min(100svh/720, 100vw/960) and switch two-column → stacked at 1.6:1 as a step (they scroll, so the home's
  interpolation does not apply); sub-heads added to pages where the kickers used to carry the section name
  ("Leadership", "Write to us") — for Oscar to approve or strike; the figure SVGs carry a screen-reader label.
