# Tabit site

The code behind the Tabit Insurance website prototype in Framer ("TABIT Alpha V0.1").

- `engine/tabit-b.js`: Beta 3.0 option B, "the stars become diagrams" (AS12.10). The chosen direction.
- `engine/tabit-a.js`: Beta 3.0 option A, "down the bow" (AS7.14).

Each is an ES module exporting `runTabit(host, THREE, init)` and `TABIT_FONTS`. `runTabit` draws the whole site
(night-sky intro, logo, scene, page copy, nav and page markers) into `host` and returns `{ dispose() }`.
The design is 720 units tall; its width follows `host` (960 to 1940 units) and is re-read every frame, so the site
fills any landscape display and follows a window live as it is resized.

The Framer code component `TabitSite` loads one of these from jsDelivr, pinned to a commit, and passes in three.js.
To update the site: commit a new version here, then point the component's `COMMIT` at the new commit.
