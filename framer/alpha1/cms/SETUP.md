# Press, articles and the Contact form: Framer setup (XR2.8)

Ashleigh, 11 Nov 2026. This is the same text as the Claude doc "Press & media CMS: setup notes for Framer"; it is
copied here so it sits next to the code.

Two Framer CMS collections drive the new Press page and one page per Tabit article. After the one-off setup below, a
new news item or article is one CMS entry: no code, no GitHub change.

- **Press collection:** everything on /press, outside coverage and Tabit's own pieces, newest first.
- **Articles collection:** Tabit's own writing. Each item gets its own page at /press/[slug].
- **Outside coverage gets no page of its own.** It links straight to the outlet in a new tab. A page that only repeats
  another site's headline is thin content and hurts SEO.

The design is the XR2.8 row on the canvas "Tabit site – XR2.7 About us, Press & Articles", built to STYLE.md (three
exceptions, logged in §10).

## Before you start

Pull the commit into Framer as usual, pinned to its hash. These files are for this setup:

| File in `framer/alpha1/` | What it is |
| --- | --- |
| `components/TabitArticle.tsx` | The article page component. Connect it to the Articles collection (Step 4). |
| `TabitPage.tsx` | Now also offers Press, Press: header, Contact: top, Legal line and the two article pages. |
| `pages/press.js` | The Press page as designed, with the current 11 items. The visual reference for Step 5. |
| `cms/articles.csv` | Import file for the Articles collection: one article. |
| `cms/press.csv` | Import file for the Press collection: all 11 items. |
| `images/tabit-sky-tile.jpg` | The star sky, for the background of pages built partly in Framer. |

The pull only updates code. The collections, pages and field connections below are set up once in Framer by hand.

## Step 1: create the Articles collection

**CMS → New collection**, name it **Articles**, and add these fields. Use the names exactly as written; the CSV import
matches by name.

| Field name | Framer field type | Required | Notes |
| --- | --- | --- | --- |
| Title | Plain Text | Yes | Sentence case. Shows in Brass as the page headline. |
| Slug | Slug | Yes | Framer creates it from the Title; gives the address /press/[slug]. Keep it short, e.g. why-insurers-fear-bitcoin. |
| Date | Date | Yes | Display format: 13 Aug 2026. |
| Author | Plain Text | Yes | The whole line, e.g. "By Stephen Stonberg, CEO of Tabit Insurance". |
| Standfirst | Plain Text | Yes | One or two sentences. Shows in bold above the body. |
| Body | Plain Text, multi-line | Yes | The article. An empty line between paragraphs. |
| References | Plain Text, multi-line | No | One per line: citation, then ` \| `, then the link. Empty if none; the section hides. |
| SEO Title | Plain Text | Yes | Under 60 characters where possible. |
| SEO Description | Plain Text | Yes | One sentence, under 155 characters. |

Body and References are plain text, not formatted text, because that is what `TabitArticle` reads. If you'd rather lay
the article out with Framer's own text layers and a Formatted Text body, that also works and the component can be
dropped.

## Step 2: create the Press collection

**CMS → New collection**, name it **Press**:

| Field name | Framer field type | Required | Notes |
| --- | --- | --- | --- |
| Headline | Plain Text | Yes | As the outlet published it. |
| Outlet | Plain Text | Yes | e.g. Cointelegraph. "Tabit" for our own pieces. |
| Date | Date | Yes | Sort by this field. Display format: 13 Aug 2026. |
| Type | Option: Article, Press, Podcast, Video | Yes | Shown small under the headline. |
| Link | Link | Yes | Coverage: the outlet's full address. A Tabit article: /press/[slug]. |
| Opens in new tab | Toggle | Yes | On for coverage, off for Tabit articles. |

Press needs no Slug and no detail page; turn the detail page off if Framer creates one.

## Step 3: import the content

1. **Articles → Import CSV → `cms/articles.csv`.** Check each column maps to the field of the same name, then import.
   One item arrives.
2. Open it: Body shows nine paragraphs with an empty line between each; References shows eight lines.
3. **Press → Import CSV → `cms/press.csv`.** Eleven items arrive.
4. The Tabit item links to /press/why-insurers-fear-bitcoin with Opens in new tab off; the other ten link to the
   outlets with it on.

If a field maps wrongly, delete the items, fix the mapping and import again.

## Step 4: build the article page

1. In **Articles**, create the detail page if Framer hasn't, path **/press/:slug**.
2. Place **TabitArticle** on it, full width, height fit content (as `TabitPage` on the other pages). It draws the
   header, sky, article and legal line.
3. Connect each property to its field (the small + or link icon beside a property):

   | TabitArticle property | CMS field |
   | --- | --- |
   | Title | Title |
   | Date | Date (formatted 13 Aug 2026) |
   | Author line | Author |
   | Standfirst | Standfirst |
   | Body | Body |
   | References | References |

4. Page settings: title = **SEO Title**, description = **SEO Description**.
5. Preview the Bitcoin article. It should match `pages/article-why-insurers-fear-bitcoin.js`: Brass headline, date and
   byline, bold standfirst, nine paragraphs, eight references, "← Press and media" at the foot.

## Step 5: build the /press page

Framer only fills a list from the CMS through its own Collection List, so this page is code at the top and bottom
with a native list in between.

1. Add a page at **/press**. Background: Night `#04070F` with `images/tabit-sky-tile.jpg` as a tiled image, 1280 wide.
2. **Top:** TabitPage, page **Press: header**.
3. **Middle:** a **Collection List** from **Press**, sorted by **Date, newest first**, no limit. One item, built to
   these values (px at a 1280-wide window; scale with the page as the other pages do):

   | Part | Value |
   | --- | --- |
   | List | 880 wide, left edge 80 from the page edge, 96 below the intro |
   | Item | Two columns, 240 and the rest, 32 between; 16 between items |
   | Left column | Outlet, Manrope 17/26, weight 600, Paper `#FBF9F4` |
   | Right, line 1 | Headline, Manrope 17/26, weight 400, Paper; Brass `#A8823A` on hover, .25 s |
   | Right, line 2 | Type + " · " + Date (13 Aug 2026), Manrope 13/20, Paper at 72 %, 4 below line 1 |
   | Below 1024 wide | One column: outlet above headline, 20 between items |

4. **The link:** two copies of the headline in the item. Copy A links to **Link**, new tab, visible only when
   **Opens in new tab** is on; copy B links to **Link**, same tab, visible only when it is off.
5. **Bottom:** TabitPage, page **Legal line**, 96 below the list.

No dividers, boxes, labels or numbers between items (STYLE.md §5, §9).

## Step 6: SEO and the old article address

- **Redirect:** add a **301** from `/articles/why-do-insurers-fear-bitcoin-but-trust-private-credit` (live today on
  tabitinsurance.com) to `/press/why-insurers-fear-bitcoin`, and the same for any other /articles/ pages.
- **/press:** title "Press and media | Tabit Insurance" and a one-line description.
- **Article JSON-LD** in the detail page's custom code: headline, datePublished, author, publisher "Tabit Insurance"
  and the logo, from the CMS fields.
- One `h1` per page: TabitArticle's title already is it.
- After publishing, view the article's page source: the article text should be in it. If not, the component renders
  in the browser only, and the article should be rebuilt with Framer's own text layers.

## Step 7: check and publish

- [ ] /press lists 11 items, newest first, the Tabit article at the top
- [ ] The Tabit item opens /press/why-insurers-fear-bitcoin in the same tab; the others open the outlet in a new tab
- [ ] Burger menu "Press" goes to /press on every page and is Brass on /press and the article
- [ ] The article matches the static page, and "← Press and media" returns to /press
- [ ] The old /articles/... address redirects
- [ ] Checked at laptop width and on a phone
- [ ] Publish

## Contact form: make it send

The coded form in `pages/contact.js` sends nothing: it has no action, so Send reloads the page. It is replaced by a
Framer Form that emails each message to **info@tabitinsurance.com**.

1. **Top:** TabitPage, page **Contact: top** (header, "Let's talk.", intro, Email, Office, "Write to us").
2. **Middle:** a Framer **Form**, 640 wide, left edge 80, 14 below "Write to us".
3. **Bottom:** TabitPage, page **Legal line**, 96 below the form.

| Label | Input | Name | Required | Placeholder or options |
| --- | --- | --- | --- | --- |
| Full name | Text | name | Yes | Your name |
| Email address | Email | email | Yes | you@company.com |
| Company | Text | company | No | Company name |
| Area of interest | Select | area | Yes | Choose one; (Re)insurance; Captives; Digital assets; Something else |
| How can we help? | Text area, 5 rows | message | Yes | Tell us what you're working on |

Full name and Email address share a row, 12 apart; the rest are full width.

| Part | Value (STYLE.md §5 Forms) |
| --- | --- |
| Label | Manrope 13/20, Paper, 6 above its input |
| Input | 44 tall, padding 8 × 14, transparent, 1 px Paper 38 % border, radius 2, Manrope 17/26 (16 minimum on phones) |
| Placeholder | Paper 38 % |
| Focus | 2 px Brass ring, offset 3 |
| Between fields | 12 |
| Send | "Send message", primary button: Brass fill, Night text, 14/18 weight 600, 44 tall, padding 13 × 24, radius 2, 24 above |

- **Send to:** Email → info@tabitinsurance.com (Framer may ask the address to confirm once).
- **Success:** the form is replaced by one Body line: "Thank you. We'll be in touch soon."
- **Error:** fields stay filled; "Something went wrong. Please try again, or email info@tabitinsurance.com."
- Turn on Framer's spam protection if offered.
- Test: a message arrives with all five fields; empty required fields stop Send; the thank-you line shows; it works
  on a phone without zooming.

## Adding items later

**Coverage on another site:** Press → New item; Headline, Outlet, Date, Type; the outlet's address in Link; Opens in
new tab on; publish.

**A new Tabit article:** Articles → New item, every field filled (empty line between Body paragraphs); then Press →
New item with Headline = the title, Outlet = Tabit, Type = Article, Link = /press/[slug], Opens in new tab off;
preview, publish.

Only approved copy goes on the site: new articles and coverage need Oscar's OK first.
