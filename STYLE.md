# Tabit website — style code (v1.33, 13 Nov 2026)

The values behind every visual decision on the site, taken from the home page as shipped (XR2.8.2) and the brand
guidelines. `DESIGN.md` holds the cardinal rules (what never ships); this file holds the values. Where a page and this
code disagree, the page is wrong. A change that uses a value not listed here is blocked until the value is changed to a
listed one or added here with a reason (and logged in §10). The same text lives in the Claude doc "Tabit website —
style code"; keep the two identical.

All numbers are design units on the 1280 × 720 stage. **Sizing (v1.4, Oscar 11 Nov): sizes follow the window's width,
never its height, as apple.com does.** On the click-out pages 1 unit is never less than 1 px at
any width (it rises with the width to 1.25 px at 1440); two columns need both 1.6:1 and 1024 px, otherwise the page
stacks. On the home, 1 unit = 1 px from 960 to 1152 px wide, rising to at most 1.25 px; from 600 to 960 px the 960-unit stage
scales down; under 600 px (a phone, v1.32) the home has a stage of its own, 390 units wide, 1 unit = the width ÷ 390
(1 px on a 390 px phone; at most 1.1 px, a 430 px phone: wider than that the stage grows wider instead of the type
larger), as tall as the part of the screen in view, and its own composition (§4, Phones). On the
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
| Dusk | `#B8C0D4` | EXPLORE cue; hairline chart lines in the sky; compass rim ticks; the Captives orbit lines at 14 (the hovered ring is Brass from v1.20, hovered text from v1.13; from v1.20 to v1.25 also the Captives planet's fill, gone in v1.26) | Resting text > 13, anything that must be read at rest |

Tints (fixed opacities, no others): Paper 80 `rgba(251,249,244,.80)` compass descriptions · Paper 72 secondary small
text (pronunciation, timeline labels) · Paper 60 legal line · Paper 38 secondary/nav button border · Paper 22 About
timeline hairline · Paper 14 structural hairlines (trust row, legal line) and menu panel border · Dusk 14 nav bottom
edge (under decision) · Dusk 45 Replay border. (Tabit Navy 38 and 80, the Captives planet's shading, v1.22, left the site with the planet in v1.26.)
A colour changing in a listed transition (.25 s, in CSS or on a canvas: a link, a button, the Captives ring under the
mouse going from Paper to Brass) passes through the blends between its two listed colours; no blend is ever held at rest.

Washes (legibility only): nav bar `rgba(8,13,30,.50)` + 14 px blur; burger panel and Skip `rgba(4,7,15,.92)` + 14 px
blur; behind the copy column a horizontal `rgba(8,13,30)` .50 → .22 at 55 % → 0 to 860 units (fading as the page stacks); top 160 units `rgba(8,13,30,.30 → 0)`;
Replay `rgba(4,7,15,.35)`.

Contrast: Paper/Night 18.9:1; Paper 60/Night 9.8:1; Dusk/Night 11.4:1; Night/Brass 6.3:1.

Deviation to correct (XR2.9): engine default text `#F6F2EA` → Paper; `#FFFFFF` on the click-out pages → Paper.

## 3. Type

Manrope 300/400/500/600. No monospace; italics only for the dictionary entry's *noun* and *al-thābit*.

| Step | Size / line | Weight | Tracking | Case | Used for |
|---|---|---|---|---|---|
| Display | 84 / 94 | 600 | −.035em | Sentence | Home headline only: "Bespoke / (re)insurance / solutions.", three lines, the last in Brass (v1.29). 600 from v1.30 (it was 300; Oscar: "its a title and should be bold"), as every other title. Two columns, each line's first letter stands on the copy's left edge: the lines hang −.048em, −.119em and −.024em, because a B, a bracket and an s start 5, 11 and 3 units inside their own edge at this size and the body copy's letters 1 (v1.30: "Text wrong alignment"); stacked, the lines are centred and do not hang (the hang belongs to the left alignment and switches with it). The line is 94 from v1.31 (Oscar, 13 Nov, on the live page: "its the line spacing of the title i'm worried about … I don't want the letters smaller just push the spacing"); it was 86 in v1.30 and 80 before. A p reaches 21 below its line and an i-dot 62 above its own: 80 left the p of "Bespoke" 3 units into the dot of the i under it, 86 left 3 clear, 94 leaves 11 |
| Headline | 64 / 66 | 600 | −.035em | Sentence | Chapter headlines, two lines, last word Brass; on click-out pages the page headline and each section opener ("Cells we offer", "Licensed, audited, aligned."), one per screen, last word Brass (v1.13) |
| Title | 40 / 44 | 600 | −.035em | Sentence | Compass point titles, "Tabit" in the dictionary entry, timeline years (no longer section openers, v1.13) |
| Body | 17 / 26 | 400 | 0 | Sentence | All running copy, compass descriptions, definition, menu links (17/24) |
| Small | 13 / 20 | 400 | 0 | Sentence | Trust row, timeline labels, *noun*, Replay (600) |
| Control | 14 / 18 | 600 | 0 | Sentence | Button labels |
| Label | 11 / 16 | 600 | .20em | UPPER | Star-path chapter names, compass letters, EXPLORE cue (.26em), coordinates (400, .14em) |

**Phones (v1.32).** The scale holds on a phone; three steps are set for its width, and nothing else changes (Body 17/26,
Small 13/20, Control 14/18, Label 11/16 as above):

| Step on a phone | Size / line | Weight | Tracking | Used for |
|---|---|---|---|---|
| Display | 46 / 52 | 600 | −.035em | Home headline, three lines, hanging as in two columns (it is left-aligned); 84 does not fit 342 units, and 46 is the largest at which "(re)insurance" does with room |
| Headline | 40 / 44 | 600 | −.035em | Chapter headlines (the Title step's values, as the click-out pages have set their headline on a phone since v1.3); balanced over its lines |
| Title | 30 / 34 | 600 | −.035em | Compass point titles, "Tabit" in the dictionary entry, timeline years (40 would stand level with the chapter headline, and three years at 40 do not fit the width) |

The compass point's outlined letter is 46 / 46 on a phone (84 / 84 elsewhere). The measure on a phone is 342 units,
about 40 characters of Body.

Measure 45–75 characters (column 640, text ≤ 610). Two-column copy left-aligned; stacked centred. Headlines ≤ 2 lines
at every width (change the words, not the size); the Home Display headline alone runs to three (v1.29: with "(re)" in
it, two lines met Orion). One Headline per screen; sub-heads are Body 600 on their own line —
no new size, no kicker, no number. One brass key word per headline; never in body copy.

Deviations to correct (XR2.9): click-out pages use clamp(52–104)/1.02/300, 30/36/300, 22/28/500, 20/26/500, 19/30,
16/26 — none on the scale. Chapter "Explore" buttons use 13/500/.02em — Control is the code for every page button; the
13-unit size is for the nav bar only.

## 4. Layout

Stage 1280 × 720 at the width-led scale above (pinned to the top of the screen); width runs 960–4096 units; when the
window is taller than 720 units the stage grows taller (and, squarer than 4:3, stacks). The 720-unit content box sits
centred in a taller stage; the nav, the sky, the chapter path's targets and every layer drawn over the page follow the
screen, not the box (v1.16).

Two columns (≥ 1.6:1): copy column left 80, width 640, text ≤ 610, vertically centred (home column top-aligned at 88);
subject centred at x 940 (spreads right / draws in with width), y 360; chapter path at the right edge 1180–1220.
(Re)insurance swaps: compass left, copy right at 680 × 480. Wider than 1280 units, a column edge keeps its share of
the width (v1.16): the left column's edge at 120 × W ÷ 1280, as before, and a right-hand copy column's text edge at its
own x × W ÷ 1280 ((Re)insurance 720, AI 700, About's dictionary 640), so the gaps either side of it grow together.
A compass title in transit travels and fades within the room it has, 24 clear of the copy beside it and of the window's
edge. Where that room is less than its full travel (every window but the very widest), the leaving title is gone at the
half-turn, as the arriving one begins (v1.16).

Stacked (≤ 4:3): copy centred, top-aligned 88 under the content box top; subject centred x 640, y 586 → 630 as the
stage grows taller; chapter path thinned to the edge. Copy scale .80 → 1.12 by height; subjects .46 → .87 of two-column
size (compass capped .75). Content box lifts towards the nav by 60 % of the extra height.

Between: every position lerps on `ST = (1.6 − aspect) / (1.6 − 1.333)` clamped 0–1.

Margins and rhythm: nav contents 40 from the edges; Replay 24; coordinates 64; EXPLORE cue 34. Headline → body 24;
body → button 30 (home 28); body → trust row 26 above the hairline, 18 below; dictionary blocks 14; sub-head →
content 14; a hero with no body copy keeps the button its 30 under the headline (Captives, v1.30); timeline 46 (28 stacked); buttons in a row 12 apart; list items 12 apart; sections 96 apart on the
click-out pages, whose hero copy starts 176 from the top (88 nav + 88) and whose footer ends 40 above the bottom.
Positions on multiples of 2. The Home copy starts on the nav bar's line (v1.31; 12 under it in v1.30, 30 in v1.29, 64 while
the headline was two lines; on Home that line is not drawn, and the headline's letters stand about 40 clear of the logo);
stacked it starts 8 above that line, where there is room. Headline → body is 30 on Home (v1.31; 34 before: the headline's
box now carries 4 more under its last line, so the gap reads the same) and body → button 28. In two columns the Home trust
row sits 78 above the foot of the copy block (v1.31; 84 before), 27 under the button and 18 above Replay at 16:9; stacked
it sits 88 above the foot (was 130) and Orion 44 to 56 lower than it did, so the taller copy clears both.

**Phones (< 600 px, v1.32; Oscar, 13 Nov, on the phone designs: "left aligned is better", "Remove the contact us button
on mobile and put it into the burger", the landing "should zoom into C").** The home's phone stage is 390 units wide.
Copy is left-aligned, 24 from each edge (342 wide), and starts 16 under the nav bar (y 104) on every chapter; headline →
body 24, body → button 28 to 30, as elsewhere. Each chapter is its copy and, in the room the copy leaves, its figure,
placed from the copy's measured height and the screen's, so the composition holds from a phone with the browser's bars
showing (about 390 × 660) to a tall one:
Home — Orion under the copy, 203 wide, its top 24 under the trust row or 245 above the foot of the screen, whichever is
lower, its legs cut by the bottom edge; with under 100 of it in view it is left out (it comes in over the next 40).
(Re)insurance — the compass centred under the screen, 343 in radius, so its top arc runs edge to edge as a horizon; its
top is 227 above the foot (lower on a short screen, where the title must clear the copy by 32); the point's title and
description stand centred above it, 342 wide, the description within 310 and three lines deep so every title sits at
one height.
Captives — the orbit centred, 337 wide, its centre 204 above the foot or 24 + its half-height under the copy, drawing in
to no less than .6 on a short screen so it is whole.
AI — the figure and the large AI stand at the top, 24 under the nav (they fall from the logo), 150 to 232 tall by the
room, and the copy starts 32 under them; where the copy then runs under the fold it is read by scrolling on, the figure
leaving with its page.
License — the padlock in the room under the copy, .42 to .75 of its size, whole, 24 clear of the copy and the foot.
About us — one column: copy, buttons, the dictionary entry 40 under them (timeline in three equal columns, labels
wrapping, 8 clear of the next), the legal line 40 under that, or at the foot of the screen where there is room; where
it misses the foot by 24 or less its gap closes (to no less than 16) so its last line is not left on the edge; beyond
that it runs on under the fold and the scroll carries on until its last line is 24 above the foot.
Chapters stand 720 units apart on the scroll, as everywhere. The Home trust row sets its first two facts on one line
and the third under it (no middot at a line's end).
The bar is the burger (its lines on the copy's left edge) and the lockup, centred, 140 wide; Contact us is the menu's
last link, on every page. The click-out pages are left-aligned on a phone too, 24 from each edge (their figures
centred). No chapter path, Replay or coordinates on a phone. The landing opens close on Orion's shield
and Tabit's star and draws back to the whole lockup, 326 wide (§6).

## 5. Components

Radius 2 everywhere; no other radius, no pill.

- Nav bar: 88 tall, contents inset 40, Night wash + 14 px blur, bottom edge Dusk 14 (under decision). Burger left,
  lockup centred (docked at y 44, proportions fixed), one secondary button "Contact us" right at nav size. On a phone
  (v1.32) the bar carries no Contact us button: it is the last link in the menu, on the home and on every click-out
  page; the home's burger stands 13 from the edge in a 44 × 44 target, so its lines start on the copy's edge (24), and
  the menu panel runs 16 from each edge with its links 10 above and below (44 tall), and is solid Night with no blur
  (it opens over the copy there), on the home and on the click-out pages. A bordered button's padding is 12 × 23 on a
  phone, so with its 1-unit border it is 44 tall like a filled one. A control's tap area reaches 4 beyond its edge
  (buttons, the burger), so it stays 44 px on a phone narrower than 390. Skip intro stands 16 from the right and 22
  from the top, 44 tall. The burger, the menu's links and Skip intro answer a press (down 1; a link turns Brass).
- Home link (every page but home): right of the burger, 20 apart — the word "Home" alone at the nav size
  (13/500/.02em), 44 tall; hover Brass, .25 s; presses down 1; 4 units of side padding, as the burger has. No mark
  before the word (v1.25, Oscar on XR2.9.28: "remove the logo next to the 'home' on the top left. Should just say
  home"; until then the Tabit knot at 11 × 8.6 stood before it, and on phones stood in for it). On phones it is the
  same word in a 44 tap target with no side padding, 8 from the burger, and the lockup is 100 wide with its height
  following (never squashed). Burger and Home link are at least 44 × 44 px at every size.
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
- Compass labels ((Re)insurance): Title + Body at Paper 80, centred above the rim, 520 wide; the description sets on
  two even lines inside 420 (v1.29), so every point's title sits at one height and a full line keeps the 24 clear of the
  copy beside it (§4); the point letter drawn 84 outlined 1.2 px Brass 62 % between the Brass diamond and the rim.
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
  Where a list has a figure beside it (Captives cells, v1.10), the list is one column, 520 wide: each term above its
  description, 20 between items, the term's middot 12 to its left at Paper 38 (on the board since XR2.9.11; set down here in
  v1.29). Nothing in the figure is named or picked out at rest, and
  the scroll never picks an item (v1.12). A mouse over a term or its figure item turns the term Brass, shows that item's
  term beside it in the figure as a Small label in Brass (only that one), lights its line in solid Dusk, its point and the
  term's middot Brass, .25 s ease, in the hover media query only, fading away when the mouse leaves. On Captives the
  figure is the page's one figure (v1.15): beside the headline, held there while the list passes (two columns);
  stacked, under the hero copy, 560 wide (phones the full width). From v1.20 (Oscar, 12 Nov, from the reference he
  chose) it is a disk of stars about a centre, the SCC. There is no planet (v1.26, Oscar on XR2.9.29: "remove the
  planet from the center it just doesn't look good at all"; from v1.20 to v1.25 a Dusk sphere shaded with Tabit Navy
  stood there). The centre is empty (v1.29, Oscar, 12 Nov: "We are using version 31E"; a star cluster and a lit globe,
  XR2.9.31 B and D, were the other two candidates): nothing stands at the centre while the disk turns, and as the disk
  lands the Tabit knot's own 309 Paper star points come in off the disk's inner edge (34 to 42 from the centre), each
  from its own bearing, brightening as it comes and running 40 degrees along the edge on its way, the knot's inner
  stars first. They form the Tabit knot drawn in Paper star points, as the About figure draws it, which is the
  finished figure's centre (v1.21, as v1.19: "what I want as the Tabit logo in the center"), gradually: from just
  before the disk lands to 90 % of the scroll's stretch ("a bit more gradual"). The knot is only
  ever shown whole and unaltered. No name stands under the figure (v1.26: "Remove the tabit insurance scc logo at the
  bottom of the hero for sure"); the figure's box ends 20 figure units under the outer ring's lowest point. The disk is 1,400 Paper star points, starting 34 from the centre
  and densest there, seen in depth: the far side passes behind the centre, the near side in front. Each star in the
  disk carries a streak along its path (up to 9 degrees times its pace, the inner stars faster; longer while the scroll
  whirls the disk; never longer than 60 figure units); the canvas is cleared every frame, so nothing a star has drawn
  is left behind. The scroll whirls the disk as it settles: a star half way out turns 180 degrees in all, the inner
  stars further, easing out as the disk lands (v1.24: 300 was "too quick"). With the scroll (§6) the disk settles flat into rings of stars, one a cell (nine, v1.29; eight until then), on Dusk 14 orbit
  lines, the streaks shortening to points; the rings stay, turning with the figure's slow clock. The first orbit is
  118 figure units from the centre and each orbit 34 beyond the last, the disk in depth reaching 380 (v1.21: the room
  is between the rings, not round the centre); the figure is fitted to its outer ring, so a ninth ring made every ring a little smaller, not closer. The list runs from the shortest name to the longest, so the short names
  sit on the inner rings, beside the knot, and the long ones on the outer (v1.22; the order of the cells carries no
  meaning). A cell's name of more than one line runs down from its ring on the
  inner half of the rings and up to it on the outer half, clear of the knot. A mouse over a cell (its list item, its ring or its name) turns that ring's stars Brass, about a
  third larger (35 %), with the cell's name on the ring in Brass Small, edged 4 px in Night, the sky's own ground, so the stars do not cross it; the line stays as it is (v1.21: "I don't want a golden
  line"). The figure's column runs to 24 from the page edge and the rings to 8 inside it; beside the list the
  figure is larger, reaching towards the list and stopping 24 short of it. It grows to that size while the disk
  whirls and flattens, and lands flat already at it: nothing changes size once the disk has landed (v1.23: "the spin
  should hide that resize"). When it grows is set from the page: the figure is held while the hero copy rises past
  it, and it takes the room as the copy leaves it, never nearer than 12 to any line of the copy; the disk lands
  between 50 % and 70 % of the scroll's stretch, at the earliest point that stays clear, and if the copy is still in
  the way at 70 % the figure grows only as far as stays clear. Scrolling back up it gives the room back at once.
  Under reduced motion, and where a browser cannot hold the figure in place, it keeps its column size.
- People (About us): a grid of cards, four across (two stacked, one on phones), 32 × 40 apart, 1120 wide: a 4:5
  photo box (Paper 14 border, radius 2, nav wash fill, a Small "Photo n" label at Paper 60 until the photograph is
  in), name Body 600 (16 above), title Body at Paper 72, a Small "LinkedIn" text link, bio Body (12 above). The
  boxes are placeholders for photographs (Oscar, 10 Nov), not decorative cards.
- Not components: cards, panels, badges, chips, pills, icon rows, numbered steps, paragraph dividers, progress bars,
  carousels, image blocks.

## 6. Motion

**Phones (v1.33).** The opening sequence on a phone opens on the sky alone: no chart grid or coordinates, and no Orion —
neither its lines, its names nor its stars' glows (Oscar: "ditch the Orion guy ... Just zoom in on the star"); Orion comes in
on the Home page, once the logo is in the bar, in its Home place (it never crosses the splash). The view zooms slowly in,
.92 × to 1.2 × over 3.9 s, on Tabit's star, .47 of the way down the screen above any browser bar; the star comes up out of
the stars (0.8–1.8 s); the brass ring, 18 in radius, 1 px, goes once round it clockwise from the top (1.6–2.6 s), and its
name, TABIT in brass (13 px, 600, 3 px tracking), stands 26 under the ring (2.4–3.0 s). Then, as before (v1.32), the ring
opens round the knot as it is drawn, the name keeping under the ring until it goes (4.1–4.6 s), the logo forms, and the
view draws back as TABIT is spelt until the lockup stands across the screen 326 wide (32 from each edge); the splash rests
there with Explore. On the scroll the lockup glides into the bar and shrinks to its docked 140 (no star flight on a phone),
and the sky moves from the first touch: the splash's sky slides up 170 px over the scroll, as one, fastest at its start,
and stays whole until halfway, then gives way to the site's sky, whose nearest stars drift up 360 over the same scroll
(farther ones less). The phone's sky is drawn at the screen's own pixel density times the stage's scale (up to 3 ×; the
frame governor ignores the first 1.6 s, while the page loads, and may take 3 × to 2 ×, 2 × to 1.4 ×, no further); it is
carried 400 above and 720 below the 1280 × 720 sky, so the drawn-back splash is starred to the screen's top and foot; and
it runs under a browser bar that floats over the page, the page laid out above that bar. The page
follows the finger one for one and, when the finger lifts, glides on from the speed it had (the scroll's own ease, a
third of a second). A figure that stands under its copy (Captives, License) travels with its page, arriving and
leaving; between pages the figure's stars still gather into one ball that runs to the next figure's place. A page's
copy fades from 120 past its place (where it runs under the fold, from 60 past the point its last line is in view),
over 180. Skip intro is 44 tall. Hover states
belong to a mouse alone, on every page (`@media (hover: hover) and (pointer: fine)`).

Scroll and pointer only; the opening sequence (0–7.2 s, replayable, skippable) is the one timed exception; grain loop
and EXPLORE pulse under decision. Only `transform`/`opacity` on DOM; never `transition: all`, layout properties,
filters > 14 px, animated blur. Copy lines slide up 110 % behind a clip and fade (.07 s per line, .36 s stagger in the
dictionary entry; scroll-positioned in chapters). Hover colour .25 s ease (coordinates .5 s); burger .25 s
`cubic-bezier(.23,1,.32,1)`; chapter transitions follow the wheel eased `cubic-bezier(.3,.6,.3,1)`. All scroll-driven
values are functions of position (reversible); pointer effects decay ~.5 s. Reduced motion keeps opacity/colour, stops
grain and cue, stops the tilt, stars no longer travel between figures. Budget 8 ms at 120 Hz; governor locks 60 then
×.75/×.55 resolution; `?diag`, `?nograin`; target dropped < 5 %, JS < 4 ms on an M1 Mac.
**A figure that changes as you scroll (v1.18, Oscar 12 Nov: "something needs to happen").** On a click-out page a
figure may change from one state beside the headline to its finished state beside the content it explains, driven by
the scroll and reversed by it. The stretch: two columns, from the top of the page until the next heading is half way up
the window (at least 240 px); stacked, from the scroll at which the figure is first whole over a third of the window
height (at least 200 px), measured on the last layout's window height. Each part of the change is eased with a
smoothstep over its own share of the stretch, and every part is complete by about nine tenths of it, so the end of the
stretch holds the finished figure; the figure follows the scroll at about a fifth of the remaining distance a 60 Hz
frame (≈ .2 s), the same at any frame rate. If the finished figure is a different size, the change of size is part of
the change, never a step after it: the figure arrives at its finished form and its finished size together (v1.23).
Reduced motion shows the finished figure. Anything that turns on its own
keeps the figure's sanctioned slow pace (the Captives cells, 3 degrees a second); a faster whirl belongs to the scroll.
The figure's own choreography (which parts move, their shares of the stretch, a disk's depth and tilt) is the figure's
own geometry, like its orbits, and is set down in its board's generator.

## 7. Sky and subjects

Three depth layers of stars (2,400 in the design, extended for wide and tall screens), muted true colours, nebula in
brand tones, Night vignette `radial-gradient(120% 92% at 50% 48%, transparent 56%, rgba(0,0,0,.42))`. Tilts with the
pointer, drifts with scroll; never carries an image.
**One sky, the home's, behind every page (v1.15, Oscar 12 Nov: "IT SHOULD BE IDENTICAL").** The click-out pages show the
home's sky exactly: the same stars (the same 2,400 and their wide and tall extensions, from the same seeds), the same
count, positions, colours and tints, sizes and bloom, twinkle, drift and part round the pointer, drift up with the
scroll (.05 of the scroll, wrapping), the navy washes behind the copy column and under the nav, the vignette and the film
grain, laid out on the home stage's fit so a given window shows the same sky on every page. It is drawn by the home's
own sky code, never by a picture or a page's own star field; a change to the sky is made once, on the home, and holds
everywhere. The sky's values (star colours and tints, sizes, bloom, twinkle, depths, pointer drift and part, the
wrap, the washes, the vignette, the grain's opacity, blend, tile and steps) are the home engine's own, listed here by
reference: `framer/alpha1/TabitSite.js`, makeScrollSky with option set 37 and x251, and its grain layer. They change
only there. The figures are separate from the sky and still belong to their page. Subjects: Orion with Tabit lit (home), the compass of stars with
rim and needle ((Re)insurance), the ring and comet (Captives), the AI title formed from a star cloud (AI), the lock
(Licence); About's subject is the dictionary entry. Paper-white points with the sky's glows (sanctioned). 55–60 % of
stage height two-column, 40–45 % of width stacked; the compass rim is a horizon and runs off the bottom by design.
A figure is seen whole or not at all (v1.14): on the click-out pages every figure, the hero's included, fades in only
once its bottom edge is inside the window and fades out as its top reaches the nav, over a short stretch (8 % of the
window, at least 40 px). A figure held in view (the Captives orbits) tightens on a short window just enough to fit between
the nav and the bottom edge, as the home does. The home compass rim is the one figure meant to run off an edge.
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

- 13 Nov 2026 — v1.33 (XR3.1). Phones: the intro opens on the sky alone (no grid, coordinates or Orion's lines) and zooms
  slowly in on Tabit's star as it comes up, the brass ring goes once round it with its name under it; then the knot, the
  spelt name, the draw-back and the splash as in v1.32 (Oscar, after a first cut that went straight to the home: "where's
  the circle around the Tabit logo and then the zoom out to the Tabit? That was good"). The phone's sky is sharp (drawn
  at the screen's pixel density) and runs under the browser's bar. Then (Oscar: "none of the stars move at all until the
  Tabit logo's got to the top"; "ditch the Orion guy"): no Orion in the phone's intro; it comes in on Home once the logo
  is docked; the sky moves up from the first touch of the scroll off the splash. §6 Phones rewritten.
- 13 Nov 2026 — v1.32 (XR3.0, on the `phone` branch; not yet live). The home's phone composition, from the designs Oscar
  chose on 13 Nov ("It should zoom into C", "Remove the contact us button on mobile and put it into the burger",
  "Captives is much better", "left aligned is better. Let's go do the build"), after he found the live site unusable on
  a phone (every word at about 40 % of its size: a phone was given the 960-unit stage shrunk to fit). Added: the phone
  stage (390 units), §3's three phone steps (Display 46/52, Headline 40/44 as the click-out pages already had, Title
  30/34; the compass letter 46), §4's Phones paragraph (left-aligned copy 24 from the edges; each figure placed from the
  copy's height and the screen's; About us running on under the fold), §5's phone bar (no Contact us button; it is in
  the menu on every page; 44-tall menu links), §6's phone motion (the landing's view, one-for-one touch with a glide,
  figures travelling with their page, hover for a mouse alone). Body, Small, Control and Label are the code's own on a
  phone (the designs had drawn Body at 16/24 and the button at 15/20; the code's 17/26 and 14/18 stand, as on the
  click-out pages). For Oscar to rule: Orion on Home is cut by the foot of a tall phone's screen and left out on a short
  one (DESIGN.md's house rule is "whole or not at all"; Oscar, 13 Nov: "I don't know what orion looks like until I see
  it so publish"). The click-out pages are left-aligned on a phone too, 24 from the edges like the home (Oscar, 13 Nov:
  "All click out should be left aligned yes"); their figures stay centred. Published 13 Nov.

- 13 Nov 2026 — v1.31 (XR2.11.2, live). Oscar on the live Home headline: "its the line spacing of the title i'm worried
  about", and on the offer of smaller letters with more room: "I don't want the letters smaller just push the spacing."
  Display is 84 / 94 (§3; 86 in v1.30): 11 units between the p of "Bespoke" and the i under it, where there were 3. The
  24 units the three lines gain are found round them (§4): the Home copy starts on the nav bar's line (12 higher; stacked,
  8 above it), headline → body is 30 (34), and in two columns the trust row sits 6 lower (78 above the foot), which
  leaves 27 under the button and 18 above Replay at 16:9 (24 before). The size, the weight and the hang are unchanged.
- 12 Nov 2026 — v1.30 (XR2.11.1, live). Oscar on the live Home page: "Text wrong alignment also its a title and should be
  bold." (1) Display is 600, not 300 (§3): the Home headline has the weight of every other title; no new weight. (2) Two
  columns, each line of the Home headline hangs so its first letter's ink stands on the copy's left edge (§3); before,
  "(re)insurance" stood 6 units to the right of "Bespoke" and "solutions.", and all three to the right of the body copy.
  (3) Display's line is 86, not 80 (§3): bold, the p of "Bespoke" met the dot of the i under it (found at the gate). The
  18 units the three lines gain are taken above them: the Home copy starts 12 under the nav bar's line, not 30 (§4);
  everything under the headline stands where it stood.
  Copy taken off the click-out pages the same evening (Oscar: "the why tabit section on the reinsurance page should be
  removed", and in the copy chat: what repeats, or was already ruled out, comes off with nothing in its place): the
  (Re)insurance page has no "Why Tabit"; the Captives hero has no paragraph, so its button sits its own 30 under the
  headline (§4: a button is 30 under whatever stands above it); the Captives "Ring-fenced" line is gone.
- 12 Nov 2026 — v1.29 (XR2.11, the merge pushed to GitHub: "We are using version 31E and merging the other changes.
  Along with the website copy changes"). (1) The Captives centre is decided: empty, XR2.9.31E (§5 Lists); the list has
  nine cells, so the figure has nine rings. (2) The Home headline is "Bespoke (re)insurance solutions." on three lines
  (§3; DESIGN.md exceptions): the copy starts 30 under the nav bar (was 64) so the button keeps clear of the trust row;
  stacked, the trust row sits 88 above the foot of the copy block (was 130) and Orion 44 to 56 lower (§4). (3) The
  (Re)insurance click-out page is brought to the code as Captives was: its two section openers are Headlines with a
  Brass key word (v1.13) and its lists' descriptions are Small at Paper 72 (v1.9). (4) The click-out pages no longer
  repeat the hero headline at the foot; the button stays. (5) Site copy is in American English (DESIGN.md rule 6).
  (6) Set down from the Captives boards as they stand, at the gate's asking: the cells list's own values, the 4 px Night
  edge on a ring's name, and that a colour in transition passes through the blends of its two listed colours (§2, §5).
  (7) A compass description sets on two even lines inside 420 (§5 Compass labels): the shorter descriptions of 12 Nov
  ran as one line the full 520, to 6 px from the copy beside the compass at 1.6:1, and left the titles at two heights
  (420, not 470 as first pushed: with D&O out of Casualty, Oscar, 12 Nov, that line is 463 wide and would have set as one).
  No new colour, type size or radius.
- 12 Nov 2026 — v1.28 (XR2.10). Oscar, on Ashleigh's XR2.8 star tile for the click-out pages (v1.17 exception 3): the live
  home sky first. The tile is gone from every click-out page and from the article component; each page is clear and the
  home engine draws its own sky in a fixed layer behind it (TabitSite.js mountTabitSky, sky-only mode), on the home stage's
  fit: the same stars from the same seeds, twinkle, drift and part round the pointer, drift up with the scroll (.05 of the
  page's scroll in home units, from Home's stop), the washes, the vignette and the grain (§7, as v1.15 required). Pages
  built partly in Framer (/press, /contact) get the same sky behind their Framer parts. Exception 3 of v1.17 is withdrawn;
  exceptions 1 and 2 stand for Oscar.
- 12 Nov 2026 — v1.27. Oscar on XR2.9.31 B and D: "okay, can we try one version which is empty in the center like in
  30E." XR2.9.31E (§5 Lists): a third candidate for the Captives centre, empty until the knot's stars come in off the
  disk's inner edge as the disk lands. Under decision with B and D. No new colour, type or spacing value.
- 12 Nov 2026 — v1.26. Oscar on XR2.9.29: "remove the planet from the center it just doesn't look good at all. Give me
  4 different options", and on the XR2.9.30 options: "Remove the tabit insurance scc logo at the bottom of the hero
  for sure. I like option B or D. Can you take those two options and really make them look like final products."
  XR2.9.31 B and D (§5 Lists, §2): the planet is gone, and with it Dusk as a fill and the Tabit Navy 38 and 80 tints;
  the centre is the knot's own stars as a cluster (B) or a lit globe (D), under decision; the name under the figure
  is gone and the figure's box is the shorter for it: it ends 20 figure units under the outer ring's lowest point (8
  of padding and 12 for that ring's own name), where it ended 42.
- 12 Nov 2026 — v1.25. Oscar on XR2.9.28: "I'm happy with the design of this page now. Finally remove the logo next
  to the 'home' on the top left. Should just say home." XR2.9.29 (§5 Home link): the word alone, at every width; the
  knot before it is gone, and with it the knot's 72 % rest strength and 8 gap. The lockup is untouched. The nav is
  shared, so this holds for every click-out page.
- 12 Nov 2026 — v1.24. Oscar on XR2.9.27: "slow down the rotation a little when you scroll. Maybe by 40% its too
  quick." XR2.9.28 (§5 Lists): the scroll's whirl of the Captives disk is 180 degrees over its settling, down from
  300 (the value was in the board's generator only; it is now listed here). The figure's own slow turn is unchanged.
- 12 Nov 2026 — v1.23. Oscar on XR2.9.26: "There is a resize jump as we scroll down the page ... the spin should hide
  that resize. It shouldn't be a resize after the animation is set. So it should spin up to the correct size."
  XR2.9.27 (§5 Lists): the Captives figure grows while the disk whirls and flattens and lands at its final size (it
  had grown after landing); it stays 12 clear of every line of the hero copy; under reduced motion it keeps one size
  (at full size from the start it had overlapped the paragraph); the rings of stars are centred on their orbit lines at
  every size. No new colour, type or spacing value.
- 12 Nov 2026 — v1.22. Oscar on XR2.9.25: "The planet still isn't the dusk blue its silver ... Why don't you move the
  long cell names to the bottom and the short ones on the inner rings. It doesn't matter what order they are in on the
  left." XR2.9.26 (§5 Lists): the planet's shading is Tabit Navy, not Night, the one use of that brand colour on the
  site; the Captives list runs shortest name first.
- 12 Nov 2026 — v1.21. Oscar on XR2.9.24: "The planet in the middle when you're scrolling down, that can stay … what
  I want as the Tabit logo in the center … make the gap a little bigger between every single one … I don't want a
  golden line. I just want … the little star dots, to go golden … I thought the planet in the middle was meant to be
  the dusk blue." XR2.9.25 (§5 Lists): the planet opens into the Tabit knot again; orbits 118 + 34 a step (were 150 +
  26); a hover turns only the ring's stars Brass; the planet loses its Paper light.
- 12 Nov 2026 — v1.20. Oscar on XR2.9.23, with captures of the reference: "Why does the planet look so much better on
  here. Also you could keep the orbit looking like this and highlight it with the brass colour based on which we are
  looking at? Also the rings could be slightly larger so it fill more of the page" and "Make the center our blue".
  XR2.9.24 (§5 Lists): the planet is a shaded Dusk sphere in a streaked disk that starts at its surface; the finished
  figure keeps its eight rings of stars (the cell points and the knot at the centre are gone); the ring under the
  mouse is Brass; the figure is larger and grows towards the list. Dusk gains one use, the planet's fill (§2).
- 12 Nov 2026 — v1.19. Oscar on XR2.9.22: "The 2.9.22 is cool, lets work on that. We need to work on the fade and also
  need a planet in the middle of the rotation. Also when you scroll back up the background has the rings faded in the
  background which needs fixing." XR2.9.23: the ghost rings were the old trails, made by fading the last frame, which
  never quite reaches nothing; trails are now drawn per star on a cleared canvas. The planet at the centre and the
  stars collecting into their cells are set down in §5 Lists (the Captives figure).
- 12 Nov 2026 — v1.18. Oscar on XR2.9.19: "there needs to be some sort of change as we scroll down the page … it just
  stays stationary"; then two ways to try: one orbit beside the headline whose cells separate into the eight orbits,
  drawing them (XR2.9.21), and a 3D disk of stars that flattens into the orbits as you scroll, the Tabit knot then
  appearing (XR2.9.22, from a reference component). §6 now sets the rules for a figure that changes with the scroll.
  Which of the two the page keeps is Oscar's call; the disk turning faster than the cells at rest (as the reference
  does) awaits his ruling under DESIGN rule 4.
- 12 Nov 2026 — v1.17 (Ashleigh, XR2.8: About us, Press, articles). Three exceptions to this code, by Ashleigh's
  decision, for Oscar to confirm or reverse: (1) People: ten people sit five across on two-column screens (two even
  rows) instead of four (§5 People), which would leave two alone on a third row. (2) The article page headline is all
  Brass instead of one Brass key word (§3, §2 Brass); articles keep their published titles, which have no key word.
  (3) [withdrawn in v1.28: the pages show the home's live sky] The click-out pages' sky is a star tile drawn with the home engine's own recipe (images/tabit-sky-tile.jpg,
  ~11,000 stars a screen, as home) instead of the sparser SVG field (~300 a screen), so the pages match the home sky
  (§7). New on the click-out pages, within the code: Press and media (term/description list, §5 Lists) and the
  article page (Headline, Small meta line, Body 600 standfirst and sub-head, Body, Small references, secondary
  button). Setup for the CMS and the Contact form in framer/alpha1/cms/SETUP.md.
- 12 Nov 2026 — v1.16. Oscar on the live home (XR2.9.7 engine), from Safari at 1907 × 906 and 1981 × 1130 and an
  ultrawide recording: the brass ring off the logo on the splash, letters cut at the left edge, "all of the height
  alignment is completely off", "why is the spacing between the columns not consistent", the logo's break-up broken.
  No value in this code changes; the engine had stopped following it. §4 now states what the engine does again:
  two-column copy is vertically centred (XR2.8 had been clearing the centring, leaving every page's copy under the
  nav); everything drawn over the page follows the screen on a stage taller than 720 or wider than 1280 (the ring and
  Orion's lines sat lower than the logo by half the extra height; the logo's and the AI page's star layers were fixed
  boxes that cut their figures; the chapter path's click targets sat above its stars; Safari cut the copy at the
  stage's left edge). New in §4: a right-hand copy column keeps its share of the width on windows wider than 1280
  units, and a compass title in transit travels and fades within the room it has, 24 clear of the copy and the window's edge
  (24 is the code's headline-to-body step and Replay margin). The stage width
  is corrected to 960–4096 (v1.5 raised the cap; §4 still said 1940).
- 12 Nov 2026 — v1.15. Oscar on XR2.9.18: "the background for all the clickout pages is different to the home page.
  IT SHOULD BE IDENTICAL. Same number of stars, moving stars, colour, hue everything." The click-out pages had a still,
  tiled picture of stars drifting a third of the scroll; they now show the home's sky, drawn by the home's code (§7).
  And: "I don't want the animated graphic to change. It can be on the first title page. Remove the other one which is
  a copy from the home page"; the star at its centre "a bit bigger ... a tabit logo in the broken star style". Captives
  keeps one figure, the orbits, beside the headline, with the Tabit knot in stars at its centre (§5 Lists). The navy
  wash behind the copy column corrected to the home's actual three stops (§2).
- 11 Nov 2026 — v1.14. Oscar on XR2.9.17, the orbit figure rising half-drawn and cut off at the bottom of the window:
  "Shouldn't be able to see this like this. When else do we allow that?" Only the home compass rim runs off an edge.
  New rule: a figure is seen whole or not at all (§7).
- 11 Nov 2026 — v1.13. Oscar on XR2.9.16: "Cells we offer is too small. It doesn't read like a title." Section openers
  on click-out pages move from Title (40/44, v1.1) to Headline (64/66, last word Brass), one per screen. A hovered list
  term and its figure label turn Brass (the link-hover job), not Dusk; the hovered ring stays Dusk (§3, §5 Lists).
- 11 Nov 2026 — v1.12. Oscar on XR2.9.15: the highlighted orbit changes only with the cursor, never with the scroll,
  and only the highlighted cell shows its label ("otherwise it's too messy"). Nothing is named or picked out at rest;
  the hovered cell lights, with its name, and fades away when the mouse leaves (§5 Lists).
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
