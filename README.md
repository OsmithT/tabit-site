# Tabit site

The code behind the Tabit Insurance website prototype in Framer ("TABIT Alpha V0.1").

- `engine/tabit-a.js`: Beta 3.0 option A, "down the bow" (AS7.13). An ES module that exports
  `runTabit(host, THREE, init)` and `TABIT_FONTS`. It draws the whole site (night-sky intro, logo,
  star path, page copy, nav and page markers) into `host`.

The Framer component `TabitSite` loads this file from jsDelivr, pinned to a commit, and passes in
three.js. The site is designed 720 units tall; its width follows the screen (960 to 1940 units),
so it fills any landscape display.

To update the site: commit a new version here, then point the Framer component's import at the
new commit.
