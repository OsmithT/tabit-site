// Tabit XR3.7 (16 Nov 2026, Oscar: "go through the entire code base and review it to a professional standard. Review every single line ... Every single
// line should be doing something. Remove anything that isn't. Remove anything that adds lag while still producing the same output"). This file held
// every look the home has ever had, chosen by options at start; the site passes one set of options (TabitHome.tsx's OPTIONS; the click-out pages add
// sky), so everything those options can never reach is gone: the earlier looks and hand-offs, eleven of the sky's twelve scenes, and what only they
// used. Nothing was taken out on reading alone: a piece went only if it follows from the options that it cannot run AND it never ran in recorded
// runs of the whole site (every size, phone and desktop, reduced motion, the click-out pages); every frame of the home was then compared with the
// one before, pixel for pixel. What a tool cannot decide (values worked out and never read; the sky's stand-in interface, made at every load and
// written to in every frame but never shown) was traced by hand. The last commit that holds the earlier looks is 94025f7. Per-frame work that
// changed nothing is gone too: search XR3.7.
// Tabit XR3.6 (16 Nov 2026, Oscar, from a recording of his phone: "The hero animation at the beginning is juttery and dropping frames. You're also playing
// it every time you click home ... It's only played once ... scrolling is not smooth ... Remove anything that adds lag while still producing the same
// output"; and of Safari's bars: "Do it on all the other pages"). The same pictures for less work: what was made at first use is made before the first
// frame (prepare); the hero's two canvases are not drawn, and are hidden, while the site's sky covers them; a canvas is cleared only when something was
// drawn on it; a frame makes no new colour strings or pairs for the sky. The lockup is no longer drawn out of place for one frame when a phone's page
// comes back to the splash (reset). The intro plays once in a visit ('tabit-intro' in the session's storage). On a phone the click-out pages run under
// Safari's bars as the home does (TABIT_PHONE, tabitEdge, mountTabitSky). Search XR3.6.
// Tabit XR3.4 (15 Nov 2026, Oscar: "Is this not going to cause constant compatibility errors and complexity down the line? ... Do the rebuild"): on a phone the
// home is a real page that scrolls. The host (TabitHome.tsx) pins the stage in a tall document and hands the engine the document's own scroll
// (window.__TABIT_NAT); the engine takes no wheel, touch or key of its own there, so the browser's scrolling, its momentum and its bars work as on any page.
// Wider than a phone nothing changes. Search XR3.4 and natOn.
// Tabit XR3.1 (13 Nov 2026, Oscar: "slowly zoom in. The Tabit star will appear out of the stars and the yellow circle will go around it and it will say Tabit";
// then "where's the circle around the Tabit logo and then the zoom out to the Tabit? That was good"): on a phone the intro opens on the sky alone (no grid,
// coordinates or Orion's lines: Orion comes in on the Home page), zooms slowly in on Tabit's star as it comes up, the brass ring goes once round it with its
// name under it, then, as before, the ring opens round the knot, TABIT is spelt as the view draws back, and the splash rests. The phone's sky is drawn at
// the screen's pixel density and runs under the browser's bar (TABIT_PHB). Search XR3.1.
// Tabit XR3.0 (13 Nov 2026, Oscar: "The entire website you need to build for mobile now"): the home composed for a phone. A stage narrower than 600 units
// is a phone's (TabitHome gives a phone a stage 390 wide, one unit to a pixel on a 390 px phone): TABIT_PH. Its copy is left-aligned, 24 from the edges, at the
// style code's own sizes (TB_PHCSS); each chapter's figure stands in the room its copy leaves, placed from the copy's measured height and the screen's
// (tbPhoneLayout, tbG): Orion under Home's copy, the compass's top arc at the foot of the screen, the orbit and the padlock under theirs, travelling with
// their page, the AI figure and the large AI at the top; About us runs on under the fold (TABIT_XQ). The bar is the burger and the logo, Contact us is in the
// menu; no chapter path, Replay or coordinates. The intro is seen through a phone's view (phoneView: close on the shield and Tabit's star, then drawing
// back to the whole lockup) and the lockup glides into the bar on the scroll. Touch follows the finger one for one and glides on. Nothing changes at 600
// units and wider. Search XR3.0 and TABIT_PH.
// Ashleigh13.11 (XR3.3) (13 Nov 2026, Ashleigh, copy agreed with Davin; text only, no code changed): the Home intro ends at "your objectives."; the compass reads
// N Property and E Financial lines with the new lines, W Structured solutions (was Retrocession); the AI chapter has two paragraphs (was three).
// Tabit XR2.11.2 (13 Nov 2026, Oscar on the live page: "just push the spacing"): the Home headline's line is 94 (it was 86), its letters the same size; the copy starts on the nav bar's line and the trust row sits 6 lower to make the room. // Tabit XR2.11.1 (12 Nov 2026, Oscar on the live page): the Home headline is 600 (it was 300) and, two columns, each of its lines hangs so its first letter stands on the copy's left edge. // Tabit XR2.11 (12 Nov 2026, Oscar: the copy agreed on 11 and 12 Nov): the Home headline is "Bespoke (re)insurance solutions." on three lines (two met Orion's
// club), so the Home copy starts 30 under the nav bar (was 64), and stacked the trust row sits 88 above the copy block's foot (was 130) and Orion 44 to 56
// lower; the compass reads N Property, E Financial lines (was Specialty), S Casualty, W Retrocession with the specialist's lines; American spelling in the
// copy and labels (License & audit, license, collateralized, judgment). Search XR2.11 and "three lines".
// Tabit XR2.10 (12 Nov 2026): the click-out pages' sky is the home's own. runTabit(host, null, { ...options, sky: true }) draws only the home
// sky (makeScrollSky's skyLayer and washes, the vignette and the grain, on the home stage's fit TABIT_FIT) into a fixed layer, and
// mountTabitSky(element, options) puts one such layer behind a page for TabitPage.tsx and TabitArticle.tsx. The home draws its sky
// through the same skyLayer() and washes() (extracted unchanged from the diagrams scene and the headless draw). Search XR2.10.
// Tabit XR2.9.20 (12 Nov 2026): every window shape. Fixed: the brass ring, Orion's lines and the grid sitting below the logo on a window taller than the
// 720-unit design (the overlay was offset twice); the copy cut at the left edge in Safari on wide windows (the page clip is now a screen-wide box);
// each page's copy pushed up under the nav (the layout pass cleared its vertical centring); the logo's knots and the AI page's figure cut by fixed-size
// layers, and the hovered nav logo drawn where it used to be after a resize; the chapter path's click targets above its stars on tall windows.
// Changed: a right-hand copy column ((Re)insurance, AI, About's dictionary) keeps its share of the width on windows wider than 1280 units; a compass
// title in transit is shown only while clear of the copy and the window's edge. Search XR2.9.20 for each.
// Tabit XR2.9.1 site script (from the design canvas, Beta 4.2 Live): the start-up stall removed — the scroll sky and its star figures and the logo-to-stars pixel map are built lazily in idle time from 2.5 s into the intro, on CPU canvases, never at load; the style code applied — Paper #FBF9F4 as the text colour throughout, chapter buttons at the Control size (STYLE.md v1); XR2.8.2 layout: below 4:3 the stage grows taller and uses its height — two columns at >=1.6:1, stacked at <=4:3, interpolated between (DESIGN.md rule 8); XR2.7.3 fixes (no setInterval, ?nograin A/B flag, menu on Night, transform-only burger); XR2.7.1 made fast — one baked cloud sprite, no MSAA, invisible sprites skipped, masks written once, logo-to-stars map warmed at start, a frame governor, ?diag readout. Exposes runTabit(host, THREE, options).
function TB_RGB(n,d){try{var v=getComputedStyle(document.documentElement).getPropertyValue(n).trim();var m=/^#([0-9a-f]{6})$/i.exec(v);if(m){var x=parseInt(m[1],16);return((x>>16)&255)+','+((x>>8)&255)+','+(x&255);}}catch(e){}return d;}
var TB_VARC={};function TB_VAR(n,d){var c=TB_VARC[n],t=Date.now();if(c&&t-c.t<500)return c.v;var v=d;try{var r=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(n));if(!isNaN(r))v=Math.max(0,Math.min(1,r));}catch(e){}TB_VARC[n]={v:v,t:t};return v;}
var TABIT_STYLE = "[data-tabit-sec][data-tb-vc]::before{content:'';flex:var(--tb-vt,1) 0 0px}[data-tabit-sec][data-tb-vc]::after{content:'';flex:var(--tb-vb,1) 0 0px}.tb-stack [data-tabit-sec],.tb-stack [data-tabit-col]{text-align:center}.tb-stack [data-tabit-sec] [style*='display: flex'],.tb-stack [data-tabit-col] [style*='display: flex']{justify-content:center}.tb-stack [data-tabit-sec] [style*='display: inline-flex']{justify-content:center}.tb-stack [data-tabit-col] [style*='max-width: 610px']{margin-left:auto;margin-right:auto}.tb-stack [data-tabit-col]>span[style*='bottom: 78px']{left:calc(50% - 280px)!important;bottom:88px!important}.tb-stack [data-tabit-col]>div[style*='top: 0px']{top:-8px!important}.tb-stack [data-tabit-sec='5'] [data-tb-about-seq]{left:0!important;top:412px!important;width:470px!important}.tb-stack [data-tabit-sec] [style*='font-size: 15px; line-height: 24px']{font-size:17px!important;line-height:26px!important}.tb-stack [data-tb-about-seq] [style*='margin-top: 46px']{margin-top:28px!important}.tb-stack [data-tabit-sec='5'] [data-tb-about-seq] [style*='display: flex']{justify-content:center}.tb-menu{position:relative;pointer-events:auto}.tb-menu summary{list-style:none;display:flex;align-items:center;height:44px;padding:0 4px;cursor:pointer;color:var(--tabit-ink,#FBF9F4);font-size:13px;font-weight:500;letter-spacing:.02em;user-select:none}.tb-menu summary::-webkit-details-marker{display:none}.tb-menu summary:focus-visible{outline:2px solid #A8823A;outline-offset:3px}.tb-menu-ic{display:block;width:22px;height:12px;position:relative}.tb-menu-ic i{position:absolute;left:0;right:0;height:1.5px;background:var(--tabit-ink,#FBF9F4);transition:transform .25s cubic-bezier(.23,1,.32,1)}.tb-menu-ic i:first-child{top:0}.tb-menu-ic i:last-child{top:10.5px}.tb-menu[open] .tb-menu-ic i:first-child{transform:translateY(5.25px) rotate(45deg)}.tb-menu[open] .tb-menu-ic i:last-child{transform:translateY(-5.25px) rotate(-45deg)}.tb-menu-nav{position:absolute;left:-16px;top:60px;width:280px;padding:16px 28px 18px;background:rgba(4,7,15,.92);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border:1px solid rgba(184,192,212,.14);border-radius:2px;display:flex;flex-direction:column;z-index:12}.tb-menu-nav a{display:block;padding:9px 0;font-size:17px;line-height:24px;font-weight:400;letter-spacing:-.01em;color:var(--tb-text,#FBF9F4);text-decoration:none;transition:color .25s ease}@media (hover:hover) and (pointer:fine){.tb-menu-nav a:hover{color:var(--tb-gold,#A8823A)}}.tb-menu-nav a[aria-current=\"page\"]{color:var(--tb-gold,#A8823A)}@media (prefers-reduced-motion: reduce){.tb-menu-ic i{transition:none}}\n\n@keyframes tabitGrain{0%{transform:translate(0,0)}25%{transform:translate(-40px,22px)}50%{transform:translate(18px,-36px)}75%{transform:translate(-22px,-14px)}100%{transform:translate(0,0)}}\n.tabit-grain{animation:tabitGrain .5s steps(4) infinite}\n@keyframes tabitCue{0%{transform:scaleY(0);transform-origin:top}45%{transform:scaleY(1);transform-origin:top}55%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}\n.tabit-cue-line{animation:tabitCue 2.2s cubic-bezier(.65,0,.35,1) infinite}\n.tabit-cue:focus-visible,.tabit-replay:focus-visible{outline:2px solid #A8823A;outline-offset:3px}\n.tabit-replay{transition:background .25s ease,border-color .25s ease}\n@media (hover:hover) and (pointer:fine){.tabit-replay:hover{background:rgba(251,249,244,.08);border-color:rgba(251,249,244,.75)}}\n.tabit-dot{position:absolute;width:28px;height:28px;border:0;padding:0;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}\n.tabit-star{display:block;width:11px;height:8.6px;color:var(--tabit-ink2,#FBF9F4);transition:transform .35s ease,opacity .35s ease,filter .35s ease}\n.tabit-dotlabel{position:absolute;right:30px;top:50%;transform:translate(8px,-50%);opacity:0;white-space:nowrap;pointer-events:none;font-family:Manrope,system-ui,sans-serif;font-size:11px;font-weight:600;letter-spacing:.2em;color:var(--tabit-ink2,#FBF9F4);transition:opacity .3s ease,transform .3s ease}\n.tabit-dotlabel b{color:var(--tb-gold,#A8823A);font-weight:600;margin-right:8px}\n.tabit-dot:focus-visible .tabit-dotlabel{opacity:1;transform:translate(0,-50%)}@media (hover:hover) and (pointer:fine){.tabit-dot:hover .tabit-dotlabel{opacity:1;transform:translate(0,-50%)}}\n@media (hover:hover) and (pointer:fine){.tabit-dot:hover .tabit-star{filter:drop-shadow(0 0 5px rgba(251,249,244,.9))!important}}\n.tabit-dot:focus-visible,.tabit-home:focus-visible,.tabit-skip:focus-visible{outline:2px solid #A8823A;outline-offset:3px}\n.tabit-skip{transition:background .25s ease,border-color .25s ease,color .25s ease}\n@media (hover:hover) and (pointer:fine){.tabit-skip:hover{background:rgba(251,249,244,.08);border-color:rgba(251,249,244,.7);color:var(--tb-text,#FBF9F4)}}\n@media (prefers-reduced-motion: reduce){.tabit-grain,.tabit-cue-line{animation:none}}\n\n.tabit-plabel{position:absolute;left:30px;top:0;writing-mode:vertical-rl;transform:translateX(-50%);white-space:nowrap;pointer-events:none;font-family:Manrope,system-ui,sans-serif;font-size:12px;line-height:14px;font-weight:500;letter-spacing:.08em;color:var(--tabit-ink2,#FBF9F4);opacity:0}\n";
var TABIT_MARKUP = "<div data-tabit-root=\"1\" tabindex=\"0\" style=\"width: 100%; height: 100%; position: relative; overflow: hidden; background: #04070F; cursor: none; outline: none; font-family: Manrope, system-ui, sans-serif\">\n<div data-tabit-night=\"1\" style=\"position: absolute; left: 0; top: 0; width: 100%; height: 720px; z-index: 2; background: #04070F\">\n<canvas data-tabit-gl=\"1\" role=\"img\" aria-label=\"Animated hero: the night sky draws in to the constellation Orion and its star pi-3 Orionis, Tabit; the Tabit knot is drawn from the star and the TABIT wordmark appears\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block\"></canvas>\n<canvas data-tabit-ov=\"1\" aria-hidden=\"true\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block; pointer-events: none\"></canvas>\n<canvas data-tabit-scene=\"1\" aria-hidden=\"true\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block; pointer-events: none\"></canvas><div data-tabit-vig=\"1\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; pointer-events: none; background: radial-gradient(120% 92% at 50% 48%, rgba(0,0,0,0) 56%, rgba(0,0,0,.42) 100%)\"></div>\n\n</div>\n<div data-tabit-stage=\"1\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px\"><div data-tabit-pageclip=\"1\" style=\"position: absolute; inset: 0; z-index: 3; pointer-events: none; overflow: hidden; overflow: clip\"><div data-tabit-page=\"1\" style=\"position: absolute; left: 0; top: 0; bottom: 0; width: 1280px; z-index: 3; pointer-events: none\"><div data-tabit-scroll=\"1\" data-h=\"4320\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 3600px\"><svg data-tabit-wm=\"1\" viewBox=\"-3 -3 502 392\" width=\"820\" height=\"640.3\" aria-hidden=\"true\" style=\"position: absolute; right: -330px; top: 90px; opacity: 0\"><path fill=\"rgba(251,249,244,.06)\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg><div data-tabit-rise=\"2\" data-tabit-col=\"1\" style=\"position: absolute; left: 80px; top: 88px; width: 640px; min-height: 632px; display: flex; flex-direction: column; justify-content: center; opacity: 0\"><div style=\"background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 40px 40px 42px\"><span style=\"display: block; overflow: hidden; padding: 0 8px 12px; margin: 0px -8px -12px\"><span data-tabit-line-in=\"0\" style=\"display: block; transform: translateY(110%)\"><h1 style=\"margin: 0; font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">Bespoke (re)insurance solutions.</h1></span></span><span style=\"display: block; overflow: hidden; padding: 0 8px 12px; margin: 20px -8px -12px\"><span data-tabit-line-in=\"1\" style=\"display: block; transform: translateY(110%)\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Bringing together insurance, digital assets and traditional finance. Good insurance starts with understanding what you need. Tabit structures insurance and reinsurance around your risks, your assets and your objectives.</div><div style=\"margin-top: 26px; padding-top: 18px; border-top: 1px solid rgba(251,249,244,.14); display: flex; flex-wrap: wrap; gap: 12px; font-size: 13px; line-height: 20px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span>Licensed in Barbados</span><span style=\"color: var(--tb-gold,#A8823A)\">\u00b7</span><span>Class 2 global (re)insurer</span><span style=\"color: var(--tb-gold,#A8823A)\">\u00b7</span><span>Independently audited</span></div></span></span></div></div><h2 style=\"position: absolute; left: -9999px; top: 808px; margin: 0\">(Re)insurance</h2><div data-tabit-sec=\"1\" data-tabit-secd=\"0\" style=\"position: absolute; left: 80px; top: 808px; width: 640px; min-height: 632px; display: flex; flex-direction: column; justify-content: center; opacity: 0\"><div style=\"background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 40px 40px 42px\"><div data-tabit-ik=\"1\" data-tabit-in=\"1\" style=\"opacity: 0\"><div style=\"font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">The frontier, <span class=\"tb-key\">underwritten.</span></div></div><div data-tabit-ik=\"1\" data-tabit-in=\"2\" style=\"opacity: 0; margin-top: 18px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Tabit provides capacity across casualty, specialty and retrocession markets, with a particular interest in areas where demand for cover outstrips supply. We commit our own capacity and assess each risk on its merits.</div></div><div data-tabit-ik=\"1\" data-tabit-in=\"3\" style=\"opacity: 0; margin-top: 22px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Specialty</span><br>Marine, traditional and renewable energy, space, political risk and transactional risk, on a proportional or non-proportional basis.</div></div><div data-tabit-ik=\"1\" data-tabit-in=\"4\" style=\"opacity: 0; margin-top: 14px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Property and casualty</span><br>General and excess liability, motor, errors and omissions, directors\u2019 and officers\u2019 liability and cyber, alongside high-excess catastrophe and parametric property cover. Facultative and treaty.</div></div><div data-tabit-ik=\"1\" data-tabit-in=\"5\" style=\"opacity: 0; margin-top: 14px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Structured solutions</span><br>From whole account covers to adverse development covers.</div></div></div></div><h2 style=\"position: absolute; left: -9999px; top: 1528px; margin: 0\">Captives</h2><div data-tabit-sec=\"2\" data-tabit-secd=\"0\" style=\"position: absolute; left: 80px; top: 1528px; width: 640px; min-height: 632px; display: flex; flex-direction: column; justify-content: center; opacity: 0\"><div style=\"background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 40px 40px 42px\"><div data-tabit-ik=\"2\" data-tabit-in=\"1\" style=\"opacity: 0\"><div style=\"font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">Your risk. Your premium.<br><span class=\"tb-key\">Your reward.</span></div></div><div data-tabit-ik=\"2\" data-tabit-in=\"2\" style=\"opacity: 0; margin-top: 18px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">A captive gives you a greater stake in the economics of your insurance.</div></div><div data-tabit-ik=\"2\" data-tabit-in=\"3\" style=\"opacity: 0; margin-top: 22px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Individual captives</span><br>A cell of your own, for risks conventional cover does not suit.</div></div><div data-tabit-ik=\"2\" data-tabit-in=\"4\" style=\"opacity: 0; margin-top: 14px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Put your capital to work</span><br>Back a cell with digital assets, precious metals, securities or cash, and earn US dollar premiums.</div></div><div data-tabit-ik=\"2\" data-tabit-in=\"5\" style=\"opacity: 0; margin-top: 14px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Insurance behind your guarantees</span><br>A CLIP puts a licensed insurer behind the guarantees you offer customers.</div></div><div data-tabit-ik=\"2\" data-tabit-in=\"6\" style=\"opacity: 0; margin-top: 14px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\"><span style=\"font-weight: 600\">Digital asset businesses</span><br>A captive route to capacity the wider market will not offer.</div></div></div></div><h2 style=\"position: absolute; left: -9999px; top: 2248px; margin: 0\">AI</h2><div data-tabit-sec=\"3\" data-tabit-secd=\"0\" style=\"position: absolute; left: 80px; top: 2338px; width: 640px; opacity: 0\"><div style=\"background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 40px 40px 42px\"><div data-tabit-ik=\"3\" data-tabit-in=\"1\" style=\"opacity: 0\"><div style=\"height: 150px\" aria-hidden=\"true\"></div></div><div data-tabit-ik=\"3\" data-tabit-in=\"2\" style=\"opacity: 0\"><div style=\"font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">A broader view of <span class=\"tb-key\">risk.</span></div></div><div data-tabit-ik=\"3\" data-tabit-in=\"3\" style=\"opacity: 0; margin-top: 18px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Insurance has a long history. New risks do not always offer it that luxury. Tabit works at the frontier of emerging risk. AI supports our underwriting, helping us assess risks that historical losses alone cannot explain.</div></div><div data-tabit-ik=\"3\" data-tabit-in=\"4\" style=\"opacity: 0; margin-top: 10px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Decades of executive experience, sharpened by AI. That is how we decide where and how to offer cover.</div></div></div></div><h2 style=\"position: absolute; left: -9999px; top: 2968px; margin: 0\">License and audit</h2><div data-tabit-sec=\"4\" data-tabit-secd=\"0\" style=\"position: absolute; left: 80px; top: 2968px; width: 640px; min-height: 632px; display: flex; flex-direction: column; justify-content: center; opacity: 0\"><div style=\"background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 40px 40px 42px\"><div data-tabit-ik=\"4\" data-tabit-in=\"1\" style=\"opacity: 0\"><div style=\"font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">Licensed, audited, <span class=\"tb-key\">accountable.</span></div></div><div data-tabit-ik=\"4\" data-tabit-in=\"2\" style=\"opacity: 0; margin-top: 18px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Tabit Insurance SCC is licensed by the Financial Services Commission of Barbados as a Class 2 global (re)insurer, covering life and non-life business.</div></div><div data-tabit-ik=\"4\" data-tabit-in=\"3\" style=\"opacity: 0; margin-top: 12px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Our accounts are independently audited. Each cell operates within Tabit\u2019s license and is subject to the applicable regulatory and reporting requirements.</div></div></div></div><h2 style=\"position: absolute; left: -9999px; top: 3688px; margin: 0\">About us</h2><div data-tabit-sec=\"5\" data-tabit-secd=\"0\" style=\"position: absolute; left: 80px; top: 3702px; width: 1104px; opacity: 0\"><div style=\"width: 640px; background: rgba(11,20,51,.58); border: 1px solid rgba(251,249,244,.12); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-radius: 2px; box-sizing: border-box; padding: 26px 40px 28px\"><div data-tabit-ik=\"5\" data-tabit-in=\"1\" style=\"opacity: 0\"><div style=\"font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)\">Named to <span class=\"tb-key\">endure.</span></div></div><div data-tabit-ik=\"5\" data-tabit-in=\"2\" style=\"opacity: 0; margin-top: 12px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Tabit brings together insurance expertise and a broader approach to capital. We help institutional and individual asset holders participate in the global reinsurance market through a regulated segregated cell structure.</div></div><div data-tabit-ik=\"5\" data-tabit-in=\"3\" style=\"opacity: 0; margin-top: 8px\"><div style=\"font-size: 15px; line-height: 24px; font-weight: 400; color: var(--tb-text,#FBF9F4)\">Our approach begins with the assets you hold and the risks you are prepared to take. From there, we structure participation with the aim of generating returns that are not closely tied to conventional financial markets.</div></div><div data-tabit-ik=\"5\" data-tabit-in=\"4\" style=\"opacity: 0; margin-top: 22px\"><button type=\"button\" data-tabit-more=\"1\" style=\"pointer-events: auto; cursor: pointer; font-family: Manrope, system-ui, sans-serif; font-size: 13px; font-weight: 500; letter-spacing: .02em; color: var(--tb-text,#FBF9F4); background: transparent; border: 1px solid rgba(251,249,244,.38); border-radius: 2px; padding: 10px 18px\">Learn more about our people</button></div></div><div data-tabit-ik=\"5\" data-tabit-in=\"5\" style=\"opacity: 0; margin-top: 14px; width: 640px; font-size: 12px; line-height: 18px; color: color-mix(in srgb,var(--tb-text,#FBF9F4) 72%,transparent)\">Tabit Insurance SCC is regulated and licensed in Barbados by the Financial Services Commission of Barbados. It is not regulated or licensed outside Barbados and deals only through appropriately licensed insurance brokers.</div></div>\n</div></div></div>\n<div style=\"position: absolute; inset: 0; z-index: 6; pointer-events: none\"><svg data-tabit-lockup=\"1\" viewBox=\"-4 -4 1408 395\" width=\"603.51\" height=\"169.31\" aria-hidden=\"true\" style=\"position: absolute; left: 338.25px; top: 275.39px; overflow: visible; pointer-events: none; transform-origin: 108.01px 84.61px\"><defs><radialGradient id=\"tabitHeadGlow\"><stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\".85\"></stop><stop offset=\".35\" stop-color=\"#FBF9F4\" stop-opacity=\".3\"></stop><stop offset=\"1\" stop-color=\"#FBF9F4\" stop-opacity=\"0\"></stop></radialGradient><mask id=\"tabitReveal\" maskUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"560\" height=\"450\"><path data-tabit-mask=\"A\" d=\"M247.90 193.20L192.93 248.18L137.95 303.15L192.93 358.13L247.90 303.15L302.88 248.18L357.86 193.20L412.83 138.22L467.81 193.20L412.83 248.18L357.86 193.20L302.88 138.22L247.90 83.25L192.93 28.27L137.95 83.25L192.93 138.22L247.90 193.20\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><path data-tabit-mask=\"B\" d=\"M247.90 193.20L302.88 248.18L357.86 303.15L302.88 358.13L247.90 303.15L192.93 248.18L137.95 193.20L82.97 138.22L28.00 193.20L82.97 248.18L137.95 193.20L192.93 138.22L247.90 83.25L302.88 28.27L357.86 83.25L302.88 138.22L247.90 193.20\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path></mask></defs><path data-tabit-mark=\"1\" mask=\"url(#tabitReveal)\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path><path data-tabit-line=\"A\" d=\"M247.90 193.20L192.93 248.18L137.95 303.15L192.93 358.13L247.90 303.15L302.88 248.18L357.86 193.20L412.83 138.22L467.81 193.20L412.83 248.18L357.86 193.20L302.88 138.22L247.90 83.25L192.93 28.27L137.95 83.25L192.93 138.22L247.90 193.20\" pathLength=\"1\" fill=\"none\" stroke=\"#FBF9F4\" stroke-width=\"1.3\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"miter\" style=\"stroke-dasharray: 1 1; stroke-dashoffset: 1; opacity: 0\"></path><path data-tabit-line=\"B\" d=\"M247.90 193.20L302.88 248.18L357.86 303.15L302.88 358.13L247.90 303.15L192.93 248.18L137.95 193.20L82.97 138.22L28.00 193.20L82.97 248.18L137.95 193.20L192.93 138.22L247.90 83.25L302.88 28.27L357.86 83.25L302.88 138.22L247.90 193.20\" pathLength=\"1\" fill=\"none\" stroke=\"#FBF9F4\" stroke-width=\"1.3\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"miter\" style=\"stroke-dasharray: 1 1; stroke-dashoffset: 1; opacity: 0\"></path><g data-tabit-head=\"A\" style=\"opacity: 0\"><circle r=\"22\" fill=\"url(#tabitHeadGlow)\"></circle><circle r=\"4.2\" fill=\"#FFFFFF\"></circle></g><g data-tabit-head=\"B\" style=\"opacity: 0\"><circle r=\"22\" fill=\"url(#tabitHeadGlow)\"></circle><circle r=\"4.2\" fill=\"#FFFFFF\"></circle></g><clipPath id=\"tabitWordClip\"><rect x=\"530\" y=\"40\" width=\"900\" height=\"266.3\"></rect></clipPath><g clip-path=\"url(#tabitWordClip)\"><path data-tabit-letter=\"0\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M542 81.3H710V131.3H654.7V305.3H596.7V131.3H542Z\"></path><path data-tabit-letter=\"1\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M793.3 81.3H860.7L935.3 305.3H874L863.3 268.7H790L778.7 305.3H717.3ZM827 149.3L804.7 220.7H848.7Z\"></path><path data-tabit-letter=\"2\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1084.06 302.52C1107.15 295.54 1121.96 280.22 1126.18 258.94C1128.06 249.43 1127.32 233.56 1124.64 225.77C1121.94 217.93 1118.02 211.13 1113.03 205.66C1107.47 199.56 1103.35 196.65 1095.45 193.22C1090.30 191.00 1089.15 190.20 1090.38 189.74C1104.30 184.50 1115.42 173.06 1120.11 159.15C1122.52 152.01 1123.16 132.87 1121.25 124.83C1118.80 114.48 1115.63 108.60 1108.38 100.94C1101.12 93.28 1094.39 89.12 1083.85 85.78C1071.62 81.91 1068.76 81.3 1010.39 81.3L954.6 81.3L954.6 305.3L1076.55 305.3C1079.2 305.3 1081.6 303.3 1084.06 302.52ZM1013.43 255.13L1012.82 255.13L1012.82 214.52L1033.32 214.81C1052.20 215.07 1054.11 215.24 1057.47 216.94C1059.48 217.95 1062.11 219.92 1063.32 221.31C1067.77 226.40 1069.25 235.96 1066.78 243.50C1065.15 248.44 1063.11 250.68 1058.00 253.10C1054.10 254.95 1052.45 255.11 1033.93 255.44C1022.99 255.63 1013.77 255.49 1013.43 255.13ZM1012.82 150.51L1012.82 130.81L1030.89 131.21C1041.69 131.45 1050.19 132.03 1052.05 132.66C1056.17 134.06 1061.21 139.06 1062.40 142.93C1063.61 146.89 1063.60 155.90 1062.37 159.31C1060.84 163.55 1056.67 167.52 1052.27 168.92C1049.26 169.88 1043.77 170.20 1030.54 170.20L1012.82 170.20L1012.82 150.51Z\"></path><path data-tabit-letter=\"3\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1152.7 81.3H1210V305.3H1152.7Z\"></path><path data-tabit-letter=\"4\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1232 81.3H1400V131.3H1344.7V305.3H1286.7V131.3H1232Z\"></path></g></svg></div>\n<button type=\"button\" data-tabit-cue=\"1\" class=\"tabit-cue\" aria-label=\"Scroll to the site\" style=\"position: absolute; left: 50%; bottom: 34px; transform: translateX(-50%); z-index: 8; opacity: 0; border: 0; background: transparent; padding: 8px 14px; cursor: pointer; font-family: Manrope, system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .26em; color: var(--tb-label,#B8C0D4)\"><span style=\"display: block\">EXPLORE</span><span class=\"tabit-cue-line\" style=\"display: block; width: 1px; height: 30px; margin: 10px auto 0; background: rgba(184,192,212,.5)\"></span></button><button type=\"button\" data-tabit-home=\"1\" class=\"tabit-home\" aria-label=\"Tabit, back to the top\" style=\"position: absolute; left: 32px; top: 16px; width: 156px; height: 56px; z-index: 9; display: none; border: 0; padding: 0; background: transparent; cursor: pointer\"></button></div>\n<div data-tabit-navlayer=\"1\" style=\"position: absolute; inset: 0; z-index: 3; pointer-events: none\"><div data-tabit-navbg=\"1\" style=\"position: absolute; left: 0; right: 0; top: 0; height: 88px; background: rgba(8,13,30,.5); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(184,192,212,.14); opacity: 0; z-index: 4\"></div><div data-tabit-nav=\"1\" style=\"position: absolute; left: 40px; right: 40px; top: 0; height: 88px; display: flex; align-items: center; justify-content: space-between; opacity: 0; z-index: 5\"><div data-tabit-navitem=\"0\" style=\"opacity: 0; pointer-events: auto\"><details class=\"tb-menu\"><summary aria-label=\"Menu\"><span class=\"tb-menu-ic\" aria-hidden=\"true\"><i></i><i></i></span></summary><nav class=\"tb-menu-nav\" aria-label=\"Main\"><a href=\"/reinsurance\">(Re)insurance</a><a href=\"/captives\">Captives</a><a href=\"/press\">Press</a><a href=\"/about-us\">About us</a><a class=\"tb-menu-contact\" href=\"/contact\">Contact us</a></nav></details></div><a href=\"/contact\" data-tabit-navitem=\"1\" style=\"opacity: 0; pointer-events: auto; cursor: pointer; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: .02em; border: 1px solid var(--tabit-line, rgba(251,249,244,.38)); color: var(--tabit-ink2, #FBF9F4); border-radius: 2px; padding: 10px 18px\">Contact us</a></div></div>\n\n<div data-tabit-dots=\"1\" style=\"position: absolute; right: 22px; top: 50%; transform: translateY(-50%); width: 60px; height: 248px; z-index: 8; opacity: 0\"><span data-tabit-plabel=\"0\" class=\"tabit-plabel\" aria-hidden=\"true\">Home</span><span data-tabit-plabel=\"1\" class=\"tabit-plabel\" aria-hidden=\"true\">(Re)insurance</span><span data-tabit-plabel=\"2\" class=\"tabit-plabel\" aria-hidden=\"true\">Captives</span><span data-tabit-plabel=\"3\" class=\"tabit-plabel\" aria-hidden=\"true\">AI</span><span data-tabit-plabel=\"4\" class=\"tabit-plabel\" aria-hidden=\"true\">License &amp; audit</span><span data-tabit-plabel=\"5\" class=\"tabit-plabel\" aria-hidden=\"true\">About us</span><button type=\"button\" data-tabit-ch=\"0\" class=\"tabit-dot\" aria-label=\"Go to Home\" style=\"left: 16px; top: 0px\"><span data-tabit-dot=\"0\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">Home</span></button><button type=\"button\" data-tabit-ch=\"1\" class=\"tabit-dot\" aria-label=\"Go to (Re)insurance\" style=\"left: 16px; top: 44px\"><span data-tabit-dot=\"1\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">(Re)insurance</span></button><button type=\"button\" data-tabit-ch=\"2\" class=\"tabit-dot\" aria-label=\"Go to Captives\" style=\"left: 16px; top: 88px\"><span data-tabit-dot=\"2\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">Captives</span></button><button type=\"button\" data-tabit-ch=\"3\" class=\"tabit-dot\" aria-label=\"Go to AI\" style=\"left: 16px; top: 132px\"><span data-tabit-dot=\"3\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">AI</span></button><button type=\"button\" data-tabit-ch=\"4\" class=\"tabit-dot\" aria-label=\"Go to License and audit\" style=\"left: 16px; top: 176px\"><span data-tabit-dot=\"4\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">License &amp; audit</span></button><button type=\"button\" data-tabit-ch=\"5\" class=\"tabit-dot\" aria-label=\"Go to About us\" style=\"left: 16px; top: 220px\"><span data-tabit-dot=\"5\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg></span><span class=\"tabit-dotlabel\">About us</span></button></div><div data-tabit-coords=\"1\" aria-hidden=\"true\" style=\"position: absolute; right: 64px; bottom: 30px; z-index: 7; font-size: 11px; line-height: 16px; letter-spacing: .14em; color: var(--tb-text,#FBF9F4); opacity: .8; pointer-events: none\">BRIDGETOWN, BARBADOS \u00b7 13.10\u00b0 N 59.61\u00b0 W</div>\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; pointer-events: none; opacity: .035; mix-blend-mode: screen; overflow: hidden; z-index: 7\"><div class=\"tabit-grain\" style=\"position: absolute; inset: -60px; background-image: url(&quot;data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E&quot;)\"></div></div>\n<button type=\"button\" data-tabit-skip=\"1\" class=\"tabit-skip\" aria-label=\"Skip the intro\" style=\"position: absolute; right: 40px; top: 30px; z-index: 9; opacity: 0; pointer-events: none; height: 32px; padding: 0 14px; border-radius: 2px; border: 1px solid rgba(184,192,212,.35); background: transparent; color: var(--tb-label,#B8C0D4); font-family: Manrope, system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .2em; cursor: pointer\">SKIP INTRO</button><button type=\"button\" class=\"tabit-replay\" style=\"position: absolute; left: 24px; bottom: 24px; z-index: 9; height: 36px; padding: 0 16px; border-radius: 2px; border: 1px solid rgba(184,192,212,.45); background: rgba(4,7,15,.35); color: var(--tb-text,#FBF9F4); font-family: Manrope, system-ui, sans-serif; font-weight: 600; font-size: 13px; cursor: pointer\">Replay</button>\n</div>";
var TABIT_FONTS = "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap";
var TB_AIPTF = null, TB_STF = null, TB_KQ = [], TB_POLL = [];   /* XR2.7.3: checks run inside the frame loop instead of on timers */   /* XR2.5.7: the AI figure's knots, queued by the scene and drawn on the A and I's own canvas, above the vignette, with their sprites */   // XR2.5.1: set by the logo's A and I code, read by the figure (they live in different scopes)
function runTabit(host, THREE, init) {
  var TABIT_OPT = (init && init.opt) || 0;   // X1.1 to X1.10: which colour option this board shows
  var TABIT_FLOW = TABIT_OPT > 0 || !!(init && init.flow);   // continuous scroll: no snapping to pages
  var TB_GOLD = TABIT_OPT === 1 || TABIT_OPT >= 11;   // gold streaks; the Captives satellite trails gold and feels the mouse
  var TB_SKYS = 0;   // XR2.5.1: the raw scroll, for the sky drifting slowly up the page (nearer stars faster)
  var TB_Y = 0;   // X1.12: the raw scroll position past Home, for the bow lifting out as soon as you scroll
  var TRK11 = null;   // X1.11: where the bow's stars are on screen, shared by the scene and the copy
  // XR2.n (TABIT_OPT 20 + n): X1.16 with the (Re)insurance page reworked round its compass. The page holds (pins) while
  // the heading steps clockwise N, E, S, W through the four lines of business, then the site carries on.
  var TB_RV = TABIT_OPT >= 32 ? 2 : TABIT_OPT >= 22 && TABIT_OPT <= 31 ? TABIT_OPT - 20 : 0;   // 31 is XR2.4.1, 32 is XR2.2.2 and XR2.2.3, 33 is XR2.2.4, 34 is XR2.2.5
  var TB_AIL = !!(init && init.x2313), TB_KNC = null; function TB_AIFX() { return tbLerp(TABIT_C0 + TABIT_DX + 230 * TABIT_TS, 640, TABIT_ST); }   // XR2.3.13: the AI figure on the left, under a large AI, all falling from the logo; the copy on the right
  var TB_X3 = !!(init && init.x23), /* XR2.3.8: one gold, the brand book's Brass #A8823A, for every accent */ TB_CAPS = -1, TB_X34 = !!(init && init.x234);   // XR2.3.5: the Captives lines travel up the page on the scroll, set off in turn, each faster than the last, and arrive together   // XR2.3: XR2.2.13 with the compass letters under the titles, the Captives satellite down its trail, and the night plate of Endurance behind About us
  var TB_V7 = TABIT_OPT >= 36;
  var TB_V8 = TABIT_OPT >= 37;   // XR2.2.8: Home headline at 84 (clear of Orion), Talk to us 44px tall, (Re)insurance copy at 17, buttons press down   // XR2.2.7: XR2.2.6 with Y1.0's Home and compass labels, the compass on the left, the bow constant, Captives reworked   // XR2.2.2: a large gold outline letter (N, E, S, W) stands behind each line
  var TB_STEPPX = 420, TB_QMIN = 0, TB_PIN = ((3 - TB_QMIN) * TB_STEPPX);
  var TB_RQ = TB_QMIN, TB_ON1 = 0, TB_RE = null;
  function tbcl(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function tbsg(x, a, b) { return tbcl((x - a) / (b - a)); }
  function tbio(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function TB_qv(q) { var k = Math.floor(q), f = q - k; return k + tbio(tbsg(f, .2, .8)); }   // rests on each line, turns between: the compass clicks round
  // where the compass of stars sits, how large, and how it is turned. h is the heading, clockwise from north; on the
  // dial versions the card turns under a fixed mark the way a ship's compass card does, so the heading still reads clockwise
  function TB_REcalc() {
    var G = TABIT_SUBJ, qv = TB_qv(TB_RQ), h = 90 * qv, R = { cx: G.cx - 40, cy: G.cy, sc: .9, rot: 0, sy: 1, qv: qv, h: h, zi: 1 };
    R.sc = tbLerp(4.2, 3.0, TABIT_ST) * tbLerp(1, Math.min(1, .75 / G.s), TABIT_ST); R.cx = tbLerp((TABIT_C0 + TABIT_DX + 270), 640, TABIT_ST); R.cy = tbLerp(560, tbLerp(575, 610, TABIT_HF), TABIT_ST) + 170 * G.s * R.sc; R.rot = -h;   // XR2.8: stacked, the arc is centred and a little smaller   // XR2.2.7: the compass on the left, the copy on the right
    if (TABIT_PH && TABIT_PHL) { var Pm = TABIT_PHL.mintaka; R.sc = Pm.rp / 170; R.cx = Pm.cx; R.cy = Pm.cy; R.rot = -h; }   // XR3.0: a phone: the top arc, edge to edge, at the foot of the screen
    TB_RE = R; return R;
  }
  function TB_GS() { return TABIT_PH && TABIT_PHL ? TABIT_PHL.mintaka.s : TABIT_SUBJ.s; }   // the compass's own size (on a phone each figure has its own)
  function TB_REX(dx, dy) { var R = TB_RE, r = R.rot * Math.PI / 180, c = Math.cos(r), s = Math.sin(r), k = R.sc * TB_GS(); return [R.cx + (dx * c - dy * s) * k, R.cy + (dx * s + dy * c) * k * R.sy]; }
  // XR2.2.5: where page k rests on the scroll, allowing for the extra scroll the (Re)insurance page holds for
  function TB_SK(k) { return k === 0 ? TABIT_HAND : TABIT_HAND + 720 * k + (TB_PIN && k >= 2 ? TB_PIN : 0); }
  var TB_COORDS = '13.097\u00b0 N 59.601\u00b0 W';   // XR2.2.5: The Grove, 21 Pine Road, Belleville, St. Michael, Barbados
  // XR2.2.6: no coloured glows behind the pages, just the night; the background stars are sharp pin points that drift a little with the mouse
  // XR2.2.7: Y1.0's Home (the statement at 120, one sentence, a brass Talk to us about 15% smaller than Y1.0's) and a reworked Captives page
  var TB_V7CSS = '[data-tabit-col] h1{font-size:120px!important;line-height:112px!important;font-weight:600!important;letter-spacing:-.035em!important}.tb-stack .tb-hl{left:0!important}'   // XR2.11.1 (Oscar, 12 Nov, on the live page: "Text wrong alignment also its a title and should be bold"): the Home headline is 600, as every other title; and each of its lines is set so its first letter's ink stands on the copy's left edge (a B, a bracket and an s start 5, 11 and 3 units in from their own edge at this size, the body copy's letters 1), except stacked, where the lines are centred
    + '.tb-talk{transition:background .3s ease}@media (hover:hover) and (pointer:fine){.tb-talk:hover{background:#A8823A!important;filter:brightness(1.12)}}.tb-talk:focus-visible,.tb-explore:focus-visible{outline:2px solid #A8823A;outline-offset:3px}'   // XR3.0: every hover state is a mouse's alone (on a phone a tapped button kept its hover look until the next tap elsewhere)
    + '.tb-explore{transition:background .25s ease,border-color .25s ease}@media (hover:hover) and (pointer:fine){.tb-explore:hover{background:rgba(251,249,244,.08)!important;border-color:rgba(251,249,244,.75)!important}}'
    + (TB_V8 ? '[data-tabit-col] h1{font-size:84px!important;line-height:94px!important}'   // XR2.11.2 (Oscar, 13 Nov, on the live page: "its the line spacing of the title i'm worried about ... I don't want the letters smaller just push the spacing"): 94, not 86. The 24 units the three lines gain: the copy starts on the nav bar's line (12 higher; stacked 8 above it, where there is room and Orion stands below), the body follows 30 under the headline's box, not 34 (the box itself now carries 4 more under the last line), and in two columns the trust row sits 6 lower (78 above the foot)
      + ''   // XR2.11.1: 86, not 80: at 600 the p of "Bespoke" ran into the dot of the i below it (a p reaches 21 below its line and an i-dot 62 above its own; 80 left them 3 units into each other, 86 leaves 3 clear), and 86 is the Headline's own ratio (64/66). The 18 units the three lines gain are found above them: the copy starts 12 under the nav bar's line (it was 30), which on Home is not drawn, so the headline still stands some 50 clear of the logo; below, the trust row would have met Replay at 16:9 and, stacked, Orion
      + ''   // XR2.2.8: 'Bespoke insurance' ends at x 752, 45px short of Orion
      + '.tb-talk,.tb-explore{transition:background .25s ease,border-color .25s ease,transform 160ms cubic-bezier(.23,1,.32,1)}.tb-talk:active,.tb-explore:active{transform:translateY(1px)}' : '');
  // XR3.0: the phone's rules (the root carries tb-phone when the stage is a phone's, see tabitLayout). The sizes are the style code's own:
  // Body 17/26, Small 13/20, Control 14/18 on a 44-tall button; the chapter headline is the Title step, 40/44, as the click-out pages set theirs
  // on a phone; the Home headline 46/52 and the compass point and dictionary titles 30/34 are the phone's two steps of their own (STYLE.md v1.32)
  var TB_PHCSS = "[data-tabit-root].tb-phone{-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;touch-action:pan-x pinch-zoom}[data-tabit-root].tb-phone.tb-nat{touch-action:manipulation}.tb-phone a,.tb-phone button,.tb-phone summary{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tb-phone .tb-menu summary:active,.tb-phone .tabit-skip:active{transform:translateY(1px)}.tb-phone .tb-menu-nav a:active{color:var(--tb-gold,#A8823A)}.tb-menu-contact{display:none!important}.tb-phone [data-tabit-sec],.tb-phone [data-tabit-col]{text-align:left}.tb-phone [data-tabit-col]{height:auto!important;min-height:0!important}.tb-phone [data-tabit-col]>div[style*='top: 0px']{position:static!important;width:auto!important}.tb-phone [data-tabit-col]>span[style*='bottom: 78px']{position:static!important;width:auto!important}.tb-phone [data-tabit-col] h1{font-size:46px!important;line-height:52px!important}.tb-phone [data-tabit-col] span[style*='margin-top: 30px']{margin-top:24px!important}.tb-phone [data-tabit-col] [style*='flex-wrap: wrap']{row-gap:0!important}.tb-phone [data-tabit-col] [style*='flex-wrap: wrap']>span:nth-child(4){display:none}.tb-phone [data-tabit-col] [style*='flex-wrap: wrap']>span:nth-child(5){flex-basis:100%}.tb-phone [data-tabit-sec]>div:first-child{padding:0!important;border:0!important}.tb-phone [data-tabit-sec] [style*='font-size: 44px']{font-size:40px!important;line-height:44px!important;text-wrap:balance}.tb-phone [data-tabit-sec] [style*='font-size: 15px; line-height: 24px'],.tb-phone [data-tabit-sec] [style*='font-size: 17px; line-height: 26px'],.tb-phone [data-tabit-col] [style*='font-size: 17px; line-height: 26px']{font-size:15px!important;line-height:23px!important}.tb-phone [data-tabit-sec] [data-tabit-in][style*='margin-top: 18px']{margin-top:24px!important}.tb-phone [data-tabit-sec='2'] [data-tabit-in][data-tb-ln][style]{margin-top:0!important}.tb-phone .tb-explore,.tb-phone .tb-talk{font-size:14px!important;line-height:18px!important;padding:13px 24px!important;letter-spacing:0!important}.tb-phone .tb-explore{padding:12px 23px!important}.tb-phone [data-tabit-sec='2'] .tb-explore,.tb-phone [data-tabit-sec='5'] .tb-talk{padding:12px 23px!important}.tb-phone .tb-talk,.tb-phone .tb-explore,.tb-phone .tb-menu summary{position:relative}.tb-phone .tb-talk::after,.tb-phone .tb-explore::after,.tb-phone .tb-menu summary::after{content:'';position:absolute;inset:-4px}.tb-phone [data-tabit-sec='3']{top:2248px!important}.tb-phone [data-tabit-sec='5']{top:3688px!important}.tb-phone [data-tabit-sec='5']>div:first-child{height:auto!important}.tb-phone [data-tabit-sec='5']>div:first-child>div{position:static!important;width:auto!important}.tb-phone [data-tabit-sec='5'] [style*='font-size: 64px']{font-size:40px!important;line-height:44px!important}.tb-phone [data-tb-about-seq]{margin-top:40px}.tb-phone [data-tb-about-seq] [style*='font-size: 40px']{font-size:30px!important;line-height:34px!important}.tb-phone [data-tb-about-seq] [style*='gap: 52px']{gap:0!important;margin-top:28px!important}.tb-phone [data-tb-about-seq] [style*='gap: 52px']>div{flex:1 1 0!important;white-space:normal!important;padding-right:8px}.tb-phone [data-tabit-sec='5'] [data-tabit-in='5']{position:static!important;width:auto!important;margin:var(--tb-ph-lg,40px) 0 0!important}.tb-phone .tb-clab{width:342px!important}.tb-phone .tb-clt{font-size:30px!important;line-height:34px!important}.tb-phone .tb-clab .ld{max-width:310px!important;min-height:78px}.tb-phone .tb-clb{font-size:46px!important;line-height:46px!important}.tb-phone [data-tabit-nav]{left:13px!important;right:13px!important}.tb-phone [data-tabit-navitem='1']{display:none!important}.tb-phone .tb-menu summary{min-width:44px;justify-content:center;padding:0}.tb-phone .tb-menu-contact{display:block!important}.tb-phone .tb-menu-nav{left:3px;width:358px;box-sizing:border-box;background:#04070F;-webkit-backdrop-filter:none;backdrop-filter:none}.tb-phone .tb-menu-nav a{padding:10px 0}.tb-phone .tabit-replay,.tb-phone [data-tabit-coords],.tb-phone .tb-bow,.tb-phone [data-tabit-dots]{display:none!important}.tb-phone [data-tabit-skip]{right:16px!important;top:calc(22px + var(--tb-pht,0px))!important;height:44px!important}.tb-phone [data-tabit-navlayer]{top:var(--tb-pht,0px)!important}.tb-phone [data-tabit-navbg]{top:calc(-1 * var(--tb-pht,0px))!important;height:calc(88px + var(--tb-pht,0px))!important}";
  function TB_V7DOM(host) {
    var CLIP = 'display: block; overflow: hidden; padding: 0 8px 14px; margin: 0 -8px -14px';
    var home = host.querySelector('[data-tabit-rise="2"]');
    if (home) {
      var facts = home.querySelector('[style*="border-top"]'), fh = facts ? facts.outerHTML : '';   // XR2.2.6's three facts, as they were
      home.style.width = '1120px'; home.style.height = '632px'; home.style.minHeight = '0'; home.style.display = 'block';
      // the headline is three lines since "(re)" joined it (Oscar, 12 Nov: "Bespoke (Re)Insurance Solutions"; on two lines "Bespoke (re)insurance" ran into Orion's club): the copy starts higher so the button keeps clear of the trust row (30 under the nav bar's line in XR2.11; 12 from XR2.11.1, when the headline became 600 on 86)
      home.innerHTML = '<div style="position: absolute; left: 0; top: 0px; width: 1100px">'
        + '<span style="' + CLIP + '"><span data-tabit-line-in="0" style="display: block; transform: translateY(110%)"><h1 style="margin: 0; font-weight: 600; font-size: ' + (TB_V8 ? '84px; line-height: 94px' : '120px; line-height: 112px') + '; letter-spacing: -.035em; color: var(--tb-hero-title,#FBF9F4)"><span class="tb-hl" style="position: relative; left: -.048em">Bespoke</span><br><span class="tb-hl" style="position: relative; left: -.119em">(re)insurance</span><br><span class="tb-hl" style="position: relative; left: -.024em; color: var(--tb-gold,#A8823A)">solutions.</span></h1></span></span>'
        + '<span style="' + CLIP + '; margin-top: 30px"><span data-tabit-line-in="1" style="display: block; transform: translateY(110%)"><div style="font-size: 17px; line-height: 26px; font-weight: 400; max-width: 610px; color: var(--tb-hero-body,#FBF9F4)">Bringing new approaches and creative applications of capital. Tabit structures insurance and reinsurance around your risks, your assets and your objectives.</div></span></span>'
        + '<span style="' + CLIP + '; margin-top: 28px"><span data-tabit-line-in="2" style="display: block; transform: translateY(110%)"><a class="tb-talk" href="/contact" style="display: inline-block; pointer-events: auto; background: #A8823A; color: #04070F; font-size: ' + (TB_V8 ? '14px' : '13px') + '; line-height: 18px; font-weight: 600; letter-spacing: 0; padding: ' + (TB_V8 ? '13px 24px' : '12px 22px') + '; border-radius: 2px; text-decoration: none">Talk to us</a></span></span>'
        + '</div>'
        + '<span style="position: absolute; left: 0; bottom: 78px; width: 560px; ' + CLIP + '"><span data-tabit-line-in="3" style="display: block; transform: translateY(110%)">' + fh + '</span></span>';
    }
    (function () {   // XR2.4: "Explore (re)insurance" under the (Re)insurance intro, linking to the XR2.4.reinsurance page
      var s1 = host.querySelector('[data-tabit-sec="1"]'); if (!s1) return;
      var intro = s1.querySelector('[data-tabit-in="2"]'); if (!intro) return;
      intro.insertAdjacentHTML('afterend', '<div data-tabit-ik="1" data-tabit-in="2.5" style="opacity: 0; margin-top: 28px"><a class="tb-talk" href="/reinsurance" style="display: inline-block; pointer-events: auto; cursor: pointer; background: var(--tb-gold,#A8823A); color: #04070F; font-family: Manrope, system-ui, sans-serif; font-size: 14px; line-height: 18px; font-weight: 600; letter-spacing: 0; padding: 13px 24px; border-radius: 2px; text-decoration: none">Explore (re)insurance</a></div>');
    })();
    var s2 = host.querySelector('[data-tabit-sec="2"]');
    if (s2) {   // Captives: the three short lines stacked, arriving one by one; then one sentence and Explore captives
      var ins = s2.querySelectorAll('[data-tabit-in]'), hd = ins[0], H = 'font-weight: 300; font-size: 44px; line-height: 50px; letter-spacing: -.03em; color: var(--tb-text,#FBF9F4)';
      hd.insertAdjacentHTML('beforebegin', ['Your risk.', 'Your premium.', 'Your reward.'].map(function (t, i) {
        return '<div data-tabit-ik="2" data-tabit-in="1" data-tb-ln="' + i + '" style="opacity: 0' + (TB_X34 && i ? '; margin-top: 18px' : '') + '"><div style="' + H + '">' + (i === 2 ? 'Your <span class="tb-key">reward.</span>' : t) + '</div></div>'; }).join(''));
      hd.parentNode.removeChild(hd);
      var body = ins[1]; body.setAttribute('data-tabit-in', '6.5'); body.style.marginTop = '24px';
      body.firstElementChild.style.fontSize = '17px'; body.firstElementChild.style.lineHeight = '26px'; body.firstElementChild.style.maxWidth = '520px';
      body.firstElementChild.textContent = 'Create a captive on our license and reap the benefits without the time and cost of doing it yourself.';
      for (var i7 = 2; i7 < ins.length; i7++) ins[i7].parentNode.removeChild(ins[i7]);
      body.insertAdjacentHTML('afterend', '<div data-tabit-ik="2" data-tabit-in="7" style="opacity: 0; margin-top: 28px"><a class="tb-explore" href="/captives" style="display: inline-block; text-decoration: none; pointer-events: auto; cursor: pointer; font-family: Manrope, system-ui, sans-serif; font-size: 13px; font-weight: 500; letter-spacing: .02em; color: var(--tb-text,#FBF9F4); background: transparent; border: 1px solid rgba(251,249,244,.38); border-radius: 2px; padding: 10px 18px">Explore captives</a></div>');
    }
  }
  var realDoc = window.document;
  // the board's code looks things up on the document; here every lookup stays inside this component's own markup
  var document = {
    querySelector: function (q) { return host.querySelector(q); },
    querySelectorAll: function (q) { return host.querySelectorAll(q); },
    createElement: function (t) { return realDoc.createElement(t); },
    createElementNS: function (n, t) { return realDoc.createElementNS(n, t); }
  };
  var NOBOX = '[data-tabit-sec]>div:first-child{background:transparent!important;border-color:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}';
  var OPT_CSS = {
    2: NOBOX + '.tb-key{color:var(--tb-gold,#A8823A)}[data-tabit-sec] [style*="font-size: 44px"]{font-size:50px!important;line-height:56px!important}',
    3: NOBOX, 4: NOBOX, 7: NOBOX, 8: NOBOX, 9: NOBOX,
    5: NOBOX + '.tb-key{color:#88F9C0}',
    6: '[data-tabit-sec]>div:first-child{background:rgba(7,45,89,.80)!important;border-color:rgba(219,242,252,.16)!important}.tb-key{color:#FD6E88}',
    10: NOBOX + '[data-tabit-sec] [style*="font-size: 44px"]{display:inline-block}',
    11: '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}',
    12: '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}',
    13: '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}',
    14: NOBOX + '[data-tabit-col]>div:first-child{background:transparent!important;border-color:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}' + '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}',
    15: NOBOX + '[data-tabit-col]>div:first-child{background:transparent!important;border-color:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}' + '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}[data-tabit-sec="5"] [data-tabit-in="5"]{position:absolute!important;left:40px;top:556px;width:920px!important;margin:0!important;padding-top:12px;border-top:1px solid rgba(251,249,244,.14);font-size:11px!important;line-height:17px!important;color:color-mix(in srgb,var(--tb-text,#FBF9F4) 60%,transparent)!important}',
    16: NOBOX + '[data-tabit-col]>div:first-child{background:transparent!important;border-color:transparent!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}' + '[data-tabit-dots]{visibility:hidden!important}.tb-bow{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border:0;padding:0;background:transparent;cursor:pointer;pointer-events:auto;z-index:9}[data-tabit-sec="5"] [data-tabit-in="5"]{position:absolute!important;left:40px;top:556px;width:920px!important;margin:0!important;padding-top:12px;border-top:1px solid rgba(251,249,244,.14);font-size:11px!important;line-height:17px!important;color:color-mix(in srgb,var(--tb-text,#FBF9F4) 60%,transparent)!important}[data-tabit-sec] [style*="font-size: 44px"],[data-tabit-col] h1{font-size:64px!important;line-height:66px!important;font-weight:600!important;letter-spacing:-.035em!important}'
  };
  for (var ocx = 17; ocx <= 40; ocx++) if (!OPT_CSS[ocx]) OPT_CSS[ocx] = OPT_CSS[16];   // later versions build on X1.16
  var TB_NOGRAIN = false; try { TB_NOGRAIN = /nograin/.test(location.search + location.hash) || !!window.__TABIT_NOGRAIN; } catch (e0) {}   // XR2.7.3: ?nograin hides the film grain, to A/B its cost
  host.innerHTML = '<style>' + (TB_NOGRAIN ? '.tabit-grain{display:none!important}' : '') + TABIT_STYLE + (OPT_CSS[TABIT_OPT] || '') + (TABIT_OPT >= 34 ? '.tabit-coordlink{transition:color .5s ease}.tabit-coordlink:focus-visible{color:var(--tb-gold,#A8823A)!important}@media (hover:hover) and (pointer:fine){.tabit-coordlink:hover{color:var(--tb-gold,#A8823A)!important}}.tabit-coordlink:focus-visible{outline:2px solid #A8823A;outline-offset:4px}' : '') + (TB_V7 ? TB_V7CSS : '') + TB_PHCSS + '</style>' + TABIT_MARKUP;
  TB_V7DOM(host);
  (function () {   // XR2.3.13: the AI page's copy moves to the right; the title no longer sits in it
    var s3 = host.querySelector('[data-tabit-sec="3"]'); if (!s3) return;
    s3.style.left = '660px'; s3.style.width = '430px';
    var sp = s3.querySelector('[data-tabit-in="1"]'); if (sp) sp.style.display = 'none';
  })();
  (function () {   // XR2.3.10: About us rebuilt from the dictionary-entry layout, in the site's style: brand Ivory, one brass word, the 64 / 40 / 17 / 13 scale, no kicker
    var s5 = host.querySelector('[data-tabit-sec="5"]'); if (!s5) return;
    var IV = 'var(--tb-about-text,var(--tb-text,#FBF9F4))', SUB = 'var(--tb-about-sub,color-mix(in srgb,var(--tb-text,#FBF9F4) 72%,transparent))', BR = 'var(--tb-gold,#A8823A)';
    var BTN = 'pointer-events: auto; cursor: pointer; font-family: Manrope, system-ui, sans-serif; font-size: 14px; line-height: 18px; font-weight: 500; letter-spacing: 0; color: ' + IV + '; background: transparent; border: 1px solid rgba(251,249,244,.38); border-radius: 2px; padding: 13px 24px; text-decoration: none; display: inline-block';   // XR2.9: the Control button size (STYLE.md §5)
    function blk(d, css, html) { return '<div data-tabit-ik="5" data-tabit-in="' + d + '" style="opacity: 0; ' + (css || '') + '">' + html + '</div>'; }
    function step(y, lab, n, gold) { var c1 = gold ? BR : IV, c2 = gold ? BR : SUB; return '<div class="tbq tbq-s' + n + '" style="flex: 0 0 auto; position: relative; padding-top: 26px; white-space: nowrap"><span style="position: absolute; left: 0; top: -4px; width: 7px; height: 7px; background: ' + c1 + '; transform: rotate(45deg)"></span><div style="font-size: 40px; line-height: 44px; font-weight: 600; letter-spacing: -.035em; color: ' + c1 + '">' + y + '</div><div style="margin-top: 6px; font-size: 13px; line-height: 20px; color: ' + c2 + '">' + lab + '</div></div>'; }
    var legal = s5.querySelector('[data-tabit-in="5"]'), lh = '';
    if (legal) { legal.style.top = '512px'; lh = ''; }   // Ashleigh13.11 (XR3.3): no legal line in About; the site footer (TabitHome.tsx) carries it
    s5.innerHTML = '<div style="position: relative; height: 520px">'
      + '<div style="position: absolute; left: 0; top: 40px; width: 470px">'
      + blk(1, '', '<div style="font-size: 64px; line-height: 66px; font-weight: 600; letter-spacing: -.035em; color: ' + IV + '">Named to <span style="color: ' + BR + '">endure.</span></div>')
      + blk(2, 'margin-top: 24px', '<div style="font-size: 17px; line-height: 26px; color: ' + IV + '">Tabit brings together insurance expertise and a broader approach to capital. Founded in 2020 and licensed in 2024, Tabit is domiciled in Barbados and works with partners worldwide.</div>')
      + blk(3, 'margin-top: 30px; display: flex; gap: 12px', '<a class="tb-explore" href="/about-us" style="' + BTN + '">Meet our people</a><a class="tb-talk" href="/contact" style="' + BTN.replace('color: ' + IV + '; background: transparent; border: 1px solid rgba(251,249,244,.38)', 'color: #04070F; background: ' + BR + '; border: 1px solid ' + BR).replace('font-weight: 500', 'font-weight: 600') + '">Contact us</a>')
      + '</div>'
      + '<div data-tb-about-seq="1" style="position: absolute; left: 560px; top: 52px; width: 420px">'   // XR2.4: the dictionary entry and timeline play in turn on arrival, as in the approved About us design
      + '<div style="display: flex; align-items: baseline; gap: 14px"><span aria-label="Tabit" style="font-size: 40px; line-height: 44px; font-weight: 600; letter-spacing: -.035em; color: ' + BR + '">' + 'Tabit'.split('').map(function (ch, i) { return '<span aria-hidden="true" class="tbq tbq-l' + i + '">' + ch + '</span>'; }).join('') + '</span><span class="tbq tbq-pr" style="display: inline-block; font-size: 17px; line-height: 26px; color: ' + SUB + '">/ Tay-Bit /</span><span class="tbq tbq-pr" style="display: inline-block; font-size: 13px; line-height: 20px; font-style: italic; color: ' + SUB + '">noun</span></div>'
      + '<div class="tbq tbq-def" style="margin-top: 14px; font-size: 17px; line-height: 26px; color: ' + IV + '">A star in the constellation Orion. From the Arabic <i style="white-space: nowrap">al-thābit</i>, &ldquo;the endurer&rdquo;: a fitting name for a business built on long-term commitments.</div>'
      + '<div style="position: relative; margin-top: 46px; display: flex; gap: 52px"><span class="tbq tbq-line" aria-hidden="true" style="position: absolute; left: 0; right: 0; top: 0; height: 1px; background: rgba(251,249,244,.22); transform-origin: left center"></span>'
      + step('2020', 'Founded', 0) + step('2024', 'Licensed in Barbados', 1) + step('Today', 'Partners worldwide', 2, true) + '</div>'
      + '</div></div>' + lh;
    var E = 'cubic-bezier(.3,.6,.3,1)', st = realDoc.createElement('style');
    st.textContent = '[data-tb-about-seq] .tbq{opacity:0}'
      + '[data-tb-about-seq].tb-play .tbq{animation-fill-mode:both;animation-timing-function:' + E + '}'
      + [0, 1, 2, 3, 4].map(function (i) { return '[data-tb-about-seq].tb-play .tbq-l' + i + '{animation-name:tbqIn;animation-duration:.07s;animation-delay:' + (.48 + .36 * i).toFixed(2) + 's}'; }).join('')
      + '[data-tb-about-seq].tb-play .tbq-pr{animation-name:tbqPr;animation-duration:.48s;animation-delay:2.28s}'
      + '[data-tb-about-seq].tb-play .tbq-def{animation-name:tbqUp10;animation-duration:.72s;animation-delay:3s}'
      + '[data-tb-about-seq] .tbq-line{opacity:1;transform:scaleX(0)}[data-tb-about-seq].tb-play .tbq-line{animation-name:tbqLine;animation-duration:2.64s;animation-delay:4.56s}'
      + [0, 1, 2].map(function (i) { return '[data-tb-about-seq].tb-play .tbq-s' + i + '{animation-name:tbqUp18;animation-duration:.6s;animation-delay:' + (5.04 + .96 * i).toFixed(2) + 's}'; }).join('')
      + '@keyframes tbqIn{from{opacity:0}to{opacity:1}}@keyframes tbqPr{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}}'
      + '@keyframes tbqUp10{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes tbqUp18{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}'
      + '@keyframes tbqLine{from{transform:scaleX(0)}to{transform:scaleX(1)}}'
      + '@media (prefers-reduced-motion: reduce){[data-tb-about-seq] .tbq{opacity:1!important;transform:none!important;animation:none!important}}';
    s5.appendChild(st);
    (function () {   // play when About us has arrived; reset once it has gone, so it plays again next time
      var seq = s5.querySelector('[data-tb-about-seq]'), on = false; TB_POLL.push(function () {   // XR2.7.3: run by the tick, not setInterval (cardinal rule 4)
        if (!host.contains(seq)) return false;
        var o = parseFloat(s5.style.opacity || '0');
        if (!on && o >= .98) { on = true; seq.classList.add('tb-play'); }
        else if (on && o <= .05) { on = false; seq.classList.remove('tb-play'); }
      });
    })();
  })();
  var cE0 = host.querySelector('[data-tabit-coords]'); if (cE0) { cE0.textContent = TB_COORDS; cE0.removeAttribute('aria-hidden'); cE0.setAttribute('role', 'link'); cE0.setAttribute('tabindex', '0'); cE0.setAttribute('aria-label', 'Our office, ' + TB_COORDS + '. Go to About us'); cE0.style.pointerEvents = 'auto'; cE0.style.cursor = 'pointer'; cE0.classList.add('tabit-coordlink'); }
  // ---- X1.1 to X1.10: how the words move as you scroll. Each option pairs one colour idea with one way of moving the copy.
  //   1 the box blooms out of the star and folds away    2 words light up one by one as you read down
  //   3 lines rise out of a mask and leave through it    4 the copy flows out of the figure and drifts away
  //   5 the headline's letters gather out of stardust    6 a navy panel unfolds from a line and folds up again
  //   7 layers at different speeds (the headline lingers) 8 a running index of the five pages along the bottom
  //   9 a brass line draws beside the copy; the headline drifts across   10 each headline opens as a large statement, then docks
  var CHOR = null;
  (function () {
    function c01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
    function put(el, k, v) { if (el['__' + k] !== v) { el['__' + k] = v; el.style[k] = v; } }   // writes only when the value changes
    var rootEl = host.querySelector('[data-tabit-root]');
    var SECS = Array.prototype.slice.call(host.querySelectorAll('[data-tabit-sec]')).map(function (el) {
      var hd = el.querySelector('[style*="font-size: 44px"]');
      var ins = Array.prototype.slice.call(el.querySelectorAll('[data-tabit-in]'));
      return { el: el, k: +el.getAttribute('data-tabit-sec'), box: el.firstElementChild, ins: ins, head: hd, headIn: hd ? hd.closest('[data-tabit-in]') : null };
    });
    var O = TABIT_OPT;
    var BOWB = null;
    if (O >= 11 && rootEl) BOWB = ['(Re)insurance', 'Captives', 'AI', 'License & audit', 'About us'].map(function (nm, i) {   // the bow's stars are the page links
      var b = realDoc.createElement('button'); b.type = 'button'; b.className = 'tb-bow'; b.setAttribute('aria-label', 'Go to ' + nm);
      b.addEventListener('click', function () { var t = host.querySelector('[data-tabit-ch="' + (i + 1) + '"]'); if (t) t.click(); });
      rootEl.appendChild(b); return b;
    });
    // ---- XR2: the (Re)insurance page round its compass, in the site's own style. The four lines sit at the compass
    //      points (N Property, E Specialty, S Casualty, W Retrocession) and the heading steps clockwise through them.
    var CHOR_RE = null;
    if (TB_RV && rootEl) (function () {
      var DIRS = ['N', 'E', 'S', 'W'], ANG = [0, 90, 180, 270];
      var IT = [{ t: 'Property', d: 'Per-risk and catastrophe cover, including retrocession of traditional and non-traditional carriers, and ILS.' },
        { t: 'Financial lines', d: 'Directors’ and officers’ and professional liability.' },
        { t: 'Casualty', d: 'General and excess liability, errors and omissions and cyber.' },
        { t: 'Structured solutions', d: 'From whole account covers to adverse development covers.' }];
      var INTRO = 'Providing capacity in traditional and new markets alike. We commit our own capital, assess each risk on its merits and build for the long term with brokers and cedants.';
      var S1 = SECS.filter(function (S) { return S.k === 1; })[0]; if (!S1) return;
      // the page's own copy: the headline stays, the intro is the new one, and the old list goes (the compass carries the four lines now)
      S1.ins.forEach(function (e) { var n = +e.getAttribute('data-tabit-in'); if (n === 2) { e.firstElementChild.textContent = INTRO.split('. We commit')[0] + '.'; } if (n >= 3) e.style.display = 'none'; });
      S1.el.__l0 = 680; S1.el.style.width = '480px'; S1.el.style.left = (TABIT_C0 + TABIT_DX + (680 - TABIT_C0) * TABIT_TS).toFixed(1) + 'px';
      S1.ins.forEach(function (e) { if (+e.getAttribute('data-tabit-in') === 2 && e.firstElementChild) { e.firstElementChild.style.fontSize = '17px'; e.firstElementChild.style.lineHeight = '26px'; } });   // XR2.2.8   // XR2.2.7: the copy on the right, the compass on the left
      function mk(css, html, parent) { var e = realDoc.createElement('div'); e.style.cssText = css; e.innerHTML = html || ''; (parent || rootEl).appendChild(e); return e; }
      var KICK = 'font-size:11px;font-weight:600;letter-spacing:.24em;color:var(--tb-gold,#A8823A)';
      function lab(i, w, tsz, align) { return mk('position:absolute;left:0;top:0;width:' + w + 'px;text-align:' + (align || 'center') + ';pointer-events:none;z-index:4;opacity:0;will-change:transform,opacity', '<div style="' + KICK + '">' + DIRS[i] + '</div><div style="font-size:' + tsz + 'px;font-weight:600;letter-spacing:-.02em;margin-top:6px;color:var(--tb-text,#FBF9F4)">' + IT[i].t + '</div><div class="ld" style="font-size:14px;line-height:22px;color:color-mix(in srgb,var(--tb-text,#FBF9F4) 80%,transparent);margin-top:8px">' + IT[i].d + '</div>'); }
      function at(e, x, y, tf, a) { put(e, 'transform', 'translate(' + x.toFixed(1) + 'px,' + (y + TABIT_OY).toFixed(1) + 'px) ' + (tf || '')); put(e, 'opacity', Math.max(0, a).toFixed(3)); }   // XR2.8.1: root-level labels follow the content box
      function sm(t) { t = c01(t); return t * t * (3 - 2 * t); }
      function nearq(q, i) { return c01(1 - Math.abs(q - i)); }
      var labs = [];
      labs = IT.map(function (_, i) { var e = lab(i, 520, 64); e.className = 'tb-clab'; e.children[1].className = 'tb-clt'; e.querySelector('.ld').style.fontSize = '17px'; e.querySelector('.ld').style.lineHeight = '26px'; e.children[1].style.fontWeight = '300'; e.children[1].style.letterSpacing = '-.03em'; var ld = e.querySelector('.ld'); ld.style.maxWidth = '420px'; ld.style.marginLeft = ld.style.marginRight = 'auto'; ld.style.setProperty('text-wrap', 'balance');   // XR2.11: a description sets on two even lines inside 420 (the shortest is 463 wide on one line, the longest 697), so every point's title sits at one height and a line keeps well clear of the copy beside it (the shorter descriptions of 12 Nov ran as one line to 6 px from it at 1.6:1)
        var t7 = e.children[1]; t7.style.fontSize = '40px'; t7.style.lineHeight = '44px'; t7.style.fontWeight = '600'; t7.style.letterSpacing = '-.035em'; t7.style.marginTop = '0';   // XR2.3.7: the compass titles in the headline's own style (semi-bold, tight), one step down the scale
        e.firstChild.style.display = 'none';   // XR2.2.3: the big letter replaces the small one
        var bg = realDoc.createElement('div'); bg.style.cssText = 'position:absolute;left:50%;top:100%;transform:translate(-50%,50px);font-size:84px;line-height:84px;font-weight:600;letter-spacing:0;color:transparent;-webkit-text-stroke:1.2px rgba(168,130,58,.62);pointer-events:none'; bg.textContent = DIRS[i]; bg.className = 'tb-clb'; e.insertBefore(bg, e.firstChild); e.__big = bg;
        return e; });

      CHOR_RE = function (yc) {
        var R = TB_REcalc(), OX = TABIT_OX, cx = R.cx + OX, cy = R.cy, Rp = 170 * TB_GS() * R.sc, pres = TB_ON1, qv = R.qv, h = R.h;
        // XR2.9.20: a title in transit never crosses the copy beside it or the window's edge. Arriving, it used to pass over the headline and the button at up
        // to 35 % strength; leaving, it ran off the left edge. Each title now travels only as far as the room it has (24 clear of the copy and of the edge)
        // and fades over that same distance: the one leaving is gone at the half-turn, exactly as the one arriving begins, so the compass is never without
        // a title for longer than an instant. Where a wide window has the room, the travel is the original one.
        var LH9 = (TABIT_PH ? TABIT_W - 48 : parseFloat(labs[0].style.width)) / 2, cl9 = parseFloat(S1.el.style.left) + 40 + OX, Dr9 = Math.max(24, tbLerp(cl9, TABIT_W, TABIT_ST) - 24 - (cx + LH9)), Dl9 = Math.max(24, cx - LH9 - 24);
        labs.forEach(function (e, i) { var dd9 = (ANG[i] - h) / 90, ph = dd9 * 90 * .38 * Math.PI / 180, RR = Rp * 1.153 + 44, w = nearq(qv, i), room9 = dd9 > 0 ? Dr9 : Dl9;
          var xo9 = (dd9 > 0 ? 1 : -1) * Math.min(RR * Math.sin(Math.min(Math.PI / 2, Math.abs(ph))), room9 * Math.abs(dd9) * 2), yo9 = Math.sqrt(Math.max(0, RR * RR - xo9 * xo9)), cut9 = 1 - sm(Math.abs(xo9) / room9);
          if (TB_X3 && e.__big) put(e.__big, 'transform', 'translate(-50%,' + ((31 + .153 * Rp + 44) / 2 - (TABIT_PH ? 23 : 42)).toFixed(1) + 'px)'); /* XR2.3: centred in the gap between the diamond (31px below the copy) and the rim */  at(e, cx + xo9, cy - yo9, 'translate(-50%,-100%)', pres * Math.pow(w, 1.5) * cut9); });
      };
    })();
    var geo = { w: -1 };
    function measure() {   // cached positions, re-read only when the window width changes
      if (geo.w === TABIT_W) return; geo.w = TABIT_W;
      SECS.forEach(function (S) {
        var t = S.el.style.transform; S.el.style.transform = 'none';
        S.x = S.el.offsetLeft; S.y = S.el.offsetTop; S.w = S.el.offsetWidth; S.h = S.el.offsetHeight;
        if (S.headIn) { var tt = S.headIn.style.transform; S.headIn.style.transform = 'none'; S.hx = S.headIn.offsetLeft; S.hy = S.headIn.offsetTop; S.hw = S.head.offsetWidth; S.hh = S.head.offsetHeight; S.headIn.style.transform = tt; }
        S.el.style.transform = t;
      });
    }
    CHOR = function (yc) {
      measure();
      SECS.forEach(function (S) {
        var p = (yc - 720 * S.k) / 720;   // -1 below the screen, 0 in place, +1 gone above
        if (p < -1.1 || p > 1.1) return;
      });
      if (BOWB) BOWB.forEach(function (b, i) { var Pb = TRK11 && TRK11.p[i + 1]; if (!Pb) { put(b, 'display', 'none'); return; } put(b, 'display', TRK11.a > .5 ? 'block' : 'none'); put(b, 'left', (Pb[0] + TABIT_OX).toFixed(1) + 'px'); put(b, 'top', (Pb[1] + TABIT_OY).toFixed(1) + 'px'); });   // XR2.9.20: + the stage's vertical offset; on a window taller than 720 units the click targets sat that far above the bow's stars
      if (CHOR_RE) CHOR_RE(yc);
    };
  })();

var TABIT_DATA = { mark: "M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z", nodes: [[247.9, 193.2, 0.0], [192.93, 248.18, 0.0625], [137.95, 303.15, 0.125], [192.93, 358.13, 0.1875], [247.9, 303.15, 0.25], [302.88, 248.18, 0.0625], [357.86, 193.2, 0.375], [412.83, 138.22, 0.4375], [467.81, 193.2, 0.5], [412.83, 248.18, 0.5625], [302.88, 138.22, 0.6875], [247.9, 83.25, 0.75], [192.93, 28.27, 0.8125], [137.95, 83.25, 0.875], [192.93, 138.22, 0.6875], [357.86, 303.15, 0.125], [302.88, 358.13, 0.1875], [137.95, 193.2, 0.375], [82.97, 138.22, 0.4375], [28.0, 193.2, 0.5], [82.97, 248.18, 0.5625], [302.88, 28.27, 0.8125], [357.86, 83.25, 0.875]] };
var TABIT_AI_SHIFT = 2, TABIT_AI = 'stars', TABIT_VARIANT = 'dc17', TABIT_END = 7.2;   // six pages: Home, AI, Capital, Life & PPLI, Licence & audit, About us
// AS12.10: the site fills any landscape screen and follows a window as it is resized. The design is 720 units tall and
// its width W follows the screen (960 to 1940). The centred 1280-wide stage keeps the logo and the copy where they were
// designed; the sky, the nav bar, the page markers and the corner captions run to the screen's edges.
var TABIT_WMAX = 4096, TABIT_W = 1280, TABIT_OX = 0, TABIT_DX = 0, TABIT_TS = 1, TABIT_RS = 1, TABIT_K = 1, TABIT_SUBJ = { cx: 940, cy: 360, s: 1 }, TABIT_C0 = 120;
var TABIT_PH = false;   // XR3.0: a phone (the stage is narrower than 600 units: TabitHome gives a phone a stage 390 wide)
var TABIT_PHL = null;   // XR3.0: the phone composition: where each chapter's figure stands on this screen (tbPhoneLayout)
var TABIT_XQ = 0;       // XR3.0: extra scroll after the last chapter, when About us is taller than the phone's screen
var TB_PH_CT = 104;     // XR3.0: on a phone the copy starts 16 under the nav bar
var TABIT_PHB = 0, TABIT_PHT = 0, TB_PHSKY = 360, TB_PHGL = 170;   /* XR3.1: TABIT_PHT: on a phone, the part of the stage above the page in view (under the status bar), as TABIT_PHB below it */   /* XR3.1: how far (units, nearest stars) a phone's sky travels up as the splash scrolls away */   /* XR3.1: on a phone, the part of the stage under the browser's bar (units): the sky runs to the foot of the screen, the layout stops above it */
var TABIT_ROOT = null;
function tbDpr(cap) { var d = window.devicePixelRatio || 1; if (TABIT_PH) { var r = TABIT_ROOT && TABIT_ROOT.getBoundingClientRect(), sc = r && r.width ? r.width / TABIT_W : 1; return Math.min(3, d * Math.max(1, sc)); } return Math.min(d * TABIT_K, cap); }   /* XR3.1: a phone's sky is drawn at the screen's own pixel density (up to 3), times the stage's own scale (read from the stage, not the window: in a preview the phone stage is a column in a wide window) */
function tbG(k) { return TABIT_PH && TABIT_PHL && TABIT_PHL[k] ? TABIT_PHL[k] : TABIT_SUBJ; }   // a chapter's figure: on a phone each has its own place and size
var TABIT_ST = 0, TABIT_H = 720, TABIT_OY = 0, TABIT_LIFT = 0, TABIT_HF = 0, TABIT_AIC = null;   // XR2.8: stack factor (0 two columns at >=1.6:1, 1 stacked at <=4:3), stage height, vertical offset
function tbLerp(a, b, t) { return a + (b - a) * t; }
function tabitLayout(root, k) {
  TABIT_ROOT = root;
  if (!root) return false;
  if (k) TABIT_K = k;
  if (!root.__ro && window.ResizeObserver) { root.__ro = new ResizeObserver(function () { root.__w = root.clientWidth; root.__h = root.clientHeight; }); root.__ro.observe(root); }
  if (root.__w == null) root.__w = root.clientWidth;
  if (root.__h == null) root.__h = root.clientHeight;
  var PH = (root.__w || 1280) < 600; TABIT_PH = PH;
  var H = Math.max(PH ? 600 : 720, Math.round(root.__h || 720)), OY = Math.round((H - 720) / 2);   // XR2.8.1: a taller stage on squarer screens; the content box sits centred
  var W = PH ? Math.round(root.__w) : Math.round(Math.max(960, Math.min(TABIT_WMAX, root.__w || 1280)));   // XR2.9.7: the stage runs to any window's edges (it was capped at 1940, which left starless bands beside it once sizes stopped shrinking)
  var A = (root.__w || 1280) / H, ST = PH ? 1 : Math.max(0, Math.min(1, (1.6 - A) / (1.6 - 4 / 3)));   // XR2.8: the stage is 720 units tall, so its width in units is the aspect ratio x 720
  if (PH && !root.__phF) { root.__phF = 1; try { realDoc.fonts.ready.then(function () { root.__phN = 19; }); } catch (e) {} }   // and as soon as the fonts are in, however late
  var PHT = PH ? Math.max(0, Math.min(200, Math.round(window.__TABIT_PHT || 0))) : 0, PHB = PH ? Math.max(0, Math.min(H - PHT - 320, Math.round(window.__TABIT_PHB || 0))) : 0;
  if (PH && root.__done) { root.__phN = (root.__phN || 0) + 1; if (root.__phN === 20 || root.__phN === 90 || root.__phN === 240) tbPhoneLayout(root, W, H - PHB, OY); }   // the copy's height again once the fonts are in (a measure that changes, changes where the figures stand)
  if (root.__done && W === TABIT_W && H === TABIT_H && PHB === TABIT_PHB && PHT === TABIT_PHT && Math.abs(ST - TABIT_ST) < .002) return false;
  TABIT_PHB = PHB; TABIT_PHT = PHT; root.style.setProperty('--tb-pht', PHT + 'px'); root.style.setProperty('--tb-phb', PHB + 'px');
  root.__done = true; root.__phN = 0; TABIT_ST = ST; TABIT_H = H; TABIT_OY = OY;
  var hf = Math.max(0, Math.min(1, (H - 720) / 560)), LIFT = Math.round(OY * .6 * ST); if (PH) { hf = 0; LIFT = OY + 88 - TB_PH_CT - PHT; }   // XR3.0: on a phone the copy starts at one height under the nav, whatever the screen's
  TABIT_LIFT = LIFT; TABIT_HF = hf;   // XR2.8.2: a taller stage uses its height
  var night = root.querySelector('[data-tabit-night]'); if (night) night.style.height = H + 'px';
  var stg = root.querySelector('[data-tabit-stage]'); if (stg) stg.style.top = OY + 'px';
  var pgc = root.querySelector('[data-tabit-pageclip]'), OXC = Math.max(0, Math.ceil((W - 1280) / 2));
  if (pgc) { pgc.style.top = (-LIFT) + 'px'; pgc.style.bottom = (-(H - 720 - OY)) + 'px'; pgc.style.left = pgc.style.right = (-OXC) + 'px'; if (pgc.firstElementChild) pgc.firstElementChild.style.left = OXC + 'px'; }   // XR2.8.2: the page clip runs from the lifted copy to the bottom of the screen. XR2.9.20: and from edge to edge of the screen; the clip is a box of its own, as wide as the window, because Safari clips a box on both axes when asked for one (it cut the copy at the 1280 stage's left edge on windows wider than about 1850 px)
  var cueB = root.querySelector('[data-tabit-cue]'); if (cueB) cueB.style.bottom = (34 - OY + PHB) + 'px';
  var homeB = root.querySelector('[data-tabit-home]'); if (homeB) homeB.style.top = (16 - OY + PHT) + 'px';   // XR3.4: with the nav bar, below the part of a phone's stage that stands under the status bar (the logo's tap target was left 100 above the screen)
  root.classList.toggle('tb-stack', ST > .5 && !PH); root.classList.toggle('tb-phone', PH);   // XR3.0: a phone is not the stacked page shrunk: it has its own rules (TB_PHCSS), left-aligned
  var OX = (W - 1280) / 2, C0 = TABIT_C0; TABIT_W = W; TABIT_OX = OX;
  var n = Math.max(0, (1280 - W) / 320);
  var left = W >= 1280 ? C0 * W / 1280 : C0 - 30 * n;   // the copy column's left edge on screen: the left-hand column
  TABIT_TS = PH ? 1 : tbLerp(1 - .18 * n, tbLerp(.8, 1.12, hf) * Math.min(1, (W - 120) / 640), ST);
  TABIT_SUBJ.s = tbLerp(1 - .4 * n, .46 * tbLerp(1, 1.9, hf), ST); TABIT_SUBJ.cx = tbLerp((W >= 1280 ? 940 + 1.5 * OX : 940 - 225 * n) - OX, 640, ST);   // the diagrams spread right, draw in, or (stacked) sit centred below the copy
  TABIT_SUBJ.cy = tbLerp(360, tbLerp(586, 630, hf), ST);
  TABIT_DX = left - C0 - OX;                    // ... as a shift inside the stage
  TABIT_RS = Math.min(1, (W - 80) / 1000);
  var st = root.querySelector('[data-tabit-stage]'); if (st) st.style.left = OX.toFixed(1) + 'px';
  ['gl', 'ov', 'scene'].forEach(function (n) { var c = root.querySelector('canvas[data-tabit-' + n + ']'); if (c) { c.style.width = W + 'px'; c.style.height = H + 'px'; } });
  function stackLeft(el, lNorm) {   // XR2.8: the block's left edge, two-column or centred, by the stack factor
    var w = parseFloat(el.style.width) || 640, ts = TABIT_TS; if (el.getAttribute('data-tabit-sec') === '5' && ST > .5) w = 470; if (w > 700 && !el.hasAttribute('data-tabit-col')) ts = Math.min(ts, (W - 80) / w);   // About's wide block shrinks to fit; stacked, it is its 470 column
    return tbLerp(lNorm, (W - w * ts) / 2 - OX, ST);
  }
  Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-sec]'), function (el) {
    if (el.__l0 == null) el.__l0 = parseFloat(el.style.left) || 0;
    if (PH) {   // XR3.0: a phone: every block is the screen's width less 24 either side, at its own size (no scale), top-aligned
      if (el.__w0 == null) el.__w0 = el.style.width;
      el.style.width = (W - 48) + 'px'; el.style.left = (24 - OX) + 'px'; el.style.scale = ''; el.style.transformOrigin = '0 0';
      if (el.__jc0 == null) el.__jc0 = el.style.justifyContent || '';
      el.style.justifyContent = 'flex-start'; el.style.paddingTop = '0px';
      if (el.__jc0 === 'center') { el.setAttribute('data-tb-vc', '1'); el.style.setProperty('--tb-vt', '0'); el.style.setProperty('--tb-vb', '2'); }
      if (el.getAttribute('data-tabit-sec') === '5') { var lgP = el.querySelector('[data-tabit-in="5"]'); if (lgP) { lgP.style.removeProperty('top'); lgP.style.removeProperty('left'); lgP.style.removeProperty('width'); } }
      return;
    }
    if (el.__w0 != null) { el.style.width = el.__w0; el.__w0 = null; el.style.removeProperty('--tb-ph-lg'); }
    var w = parseFloat(el.style.width) || 640; if (el.getAttribute('data-tabit-sec') === '5' && ST > .5) w = 470;   // XR2.8.2: About stacks its two inner columns
    var ts = w > 700 ? Math.min(TABIT_TS, (W - 80) / w) : TABIT_TS;
    var spr = W > 1280 ? W / 1280 - 1 : 0;   // XR2.9.20: how much wider than the design the window is
    el.style.left = stackLeft(el, C0 + TABIT_DX + (el.__l0 - C0) * TABIT_TS - (el.__l0 > 600 ? 70 * n : 0) + (el.__l0 > 600 ? (el.__l0 + 40 - C0) * spr : 0)).toFixed(1) + 'px'; el.style.transformOrigin = '0 0';   // XR2.9.20: copy in the right-hand column ((Re)insurance, AI) keeps its share of the width, as the left column's edge does. It used to stay a fixed distance from the left column, so on wide windows the gap to its figure stayed small while the gap to the chapter path grew without limit
    el.style.scale = ts !== 1 ? ts.toFixed(4) : '';
    if (el.__jc0 == null) el.__jc0 = el.style.justifyContent || '';
    el.style.justifyContent = el.__jc0 === 'center' || ST > .5 ? 'flex-start' : el.__jc0; el.style.paddingTop = ST > .5 ? '0px' : '';
    // XR2.9.20: in two columns the copy is vertically centred again, as each section was built (this pass used to clear the centring, which left every
    // page's copy hard under the nav). The room above and below it is shared by two spacers (TABIT_STYLE): equal in two columns, all of it below once
    // stacked, and in step with the stack factor between, so a window drag glides.
    if (el.__jc0 === 'center') { var kv = Math.min(1, 2 * ST); el.setAttribute('data-tb-vc', '1'); el.style.setProperty('--tb-vt', (1 - kv).toFixed(3)); el.style.setProperty('--tb-vb', (1 + kv).toFixed(3)); }
    if (el.getAttribute('data-tabit-sec') === '5') { var dq = el.querySelector('[data-tb-about-seq]'); if (dq) dq.style.left = (560 + 520 * spr).toFixed(1) + 'px';   // XR2.9.20: About's dictionary column likewise (stacked, the stylesheet centres it)
      var lg = el.querySelector('[data-tabit-in="5"]'); if (lg) { if (ST > .5) { lg.style.setProperty('top', Math.round((H - OY + LIFT - 88 - 24 - 60 * hf) / ts - 82) + 'px', 'important'); lg.style.setProperty('left', '-115px', 'important'); lg.style.setProperty('width', '700px', 'important'); } else { lg.style.top = '512px'; lg.style.removeProperty('left'); lg.style.removeProperty('width'); } } }   // XR2.8.2: About's legal line at the foot of the screen when stacked
  });
  Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-rise]'), function (el) {
    if (el.hasAttribute('data-tabit-col')) {   // Home's box sits in the copy column, like every page's box
      if (el.__l0 == null) el.__l0 = parseFloat(el.style.left) || 0;
      if (PH) { if (el.__w0 == null) el.__w0 = el.style.width; el.style.width = (W - 48) + 'px'; el.style.left = (24 - OX) + 'px'; el.style.scale = ''; el.style.transformOrigin = '0 0'; el.style.paddingTop = '0px'; return; }
      if (el.__w0 != null) { el.style.width = el.__w0; el.__w0 = null; }
      el.style.left = stackLeft(el, C0 + TABIT_DX + (el.__l0 - C0) * TABIT_TS).toFixed(1) + 'px'; el.style.transformOrigin = '0 0'; el.style.scale = TABIT_TS !== 1 ? TABIT_TS.toFixed(4) : '';
      el.style.justifyContent = ST > .5 ? 'flex-start' : ''; el.style.paddingTop = ST > .5 ? '0px' : '';  return;
    }
    el.style.transformOrigin = '50% 0'; el.style.scale = TABIT_RS < 1 ? TABIT_RS.toFixed(4) : ''; });
  if (PH) tbPhoneLayout(root, W, H - PHB, OY); else { TABIT_PHL = null; TABIT_XQ = 0; }
  return true;
}
// XR3.1 (phone): the intro is the sky alone: one slow zoom, Tabit's star comes up, the brass ring goes round it once, its name under it, then straight to the home (no splash, no knot, no spelt name); the home is the top. The sky is drawn at the screen's pixel density and runs under the browser's bar (TABIT_PHB). Search XR3.1.
// XR3.0: the phone composition. The copy is left-aligned at the top; each chapter's figure takes the room under it (AI's stands above
// its copy, falling from the logo). Everything is placed from the copy's measured height and the screen's, so it holds from a short
// phone with the browser's bars showing (about 390 x 660) to a tall one, and a figure too large for the room is cut by the screen's
// bottom edge, never drawn over the words. Screen positions are given from the top of the screen; the stage's own origin is OY lower.
function tbPhoneLayout(root, W, H, OY) {
  function q(s) { return root.querySelector(s); }
  function hh(el) { return el ? el.offsetHeight : 0; }
  var PT = TABIT_PHT, CT = TB_PH_CT + PT, col = q('[data-tabit-col]'), sec = [null, 1, 2, 3, 4, 5].map(function (k) { return k ? q('[data-tabit-sec="' + k + '"]') : null; });
  var box = sec.map(function (e) { return e ? e.firstElementChild : null; });
  // AI: the figure and the large AI stand at the top, 24 under the nav, and the copy follows 32 under them. The figure takes the room the copy leaves, between 150 and 232 tall
  // every height is read first, then the styles are written (one layout pass, not one per write)
  var h3 = hh(box[3]), h0 = hh(col), h1 = hh(box[1]), h2 = hh(box[2]), h4 = hh(box[4]), labs = root.querySelectorAll('.tb-clab'), labH = 0;
  Array.prototype.forEach.call(labs, function (e) { labH = Math.max(labH, e.offsetHeight); }); if (!labH) labH = 120;
  var figH = Math.max(150, Math.min(232, H - PT - 88 - 24 - 32 - h3 - 24)), aiS = figH / 314;
  if (sec[3]) sec[3].style.paddingTop = Math.round(88 + PT + 24 + figH + 32 - CT) + 'px';
  var CB = [CT + h0, CT + h1, CT + h2, 88 + PT + 24 + figH + 32 + h3, CT + h4];   // where each chapter's copy ends
  var L = { w: W, h: H, cb: CB, ov: [0, 1, 2, 3, 4, 5].map(function (k) { return k < 5 ? Math.max(0, CB[k] + 24 - H) : 0; }) };   // ov: how far a page's copy runs under the fold
  // Home: Orion under the copy, its legs cut by the bottom edge. The drawing is 359 x 554 about (342, 384) and is drawn at .48 s about (cx, cy + 70)
  var FG = 40;   // XR3.1: a figure under a chapter's copy stands at least 40 under it (it was 24; Oscar: "too close to the button. Give a little more padding")
  var oS = .565, oTop = Math.max(CB[0] + FG, H - 245);
  var oV = Math.max(0, Math.min(1, (H - oTop - 100) / 40));   // with under 100 of it in view Orion is left out: its club's tip alone at the foot of a short screen reads as a fault
  L.home = { cx: 640, cy: oTop + 277 * oS - 70 - OY, s: oS / .48, ax: 640, ay: Math.min(oTop + 90, H - 40) - OY, a: oV * oV * (3 - 2 * oV) };
  // (Re)insurance: the compass is centred under the screen, 343 in radius (wider than the screen), so its top arc runs edge to edge; the point's title stands above it
  var RP = 343, RT = Math.max(CB[1] + 32 + labH + .153 * RP + 44, H - 227);
  L.mintaka = { cx: 640, cy: RT + RP - OY, s: 1, rp: RP, ax: 640, ay: Math.min(RT + 36, H - 30) - OY };
  // Captives: the orbit, 337 wide and 206 tall at full size, centred on the screen; its centre is (40, 26) from the drawing's own. On a short
  // screen it draws in (to no less than .6) so it is seen whole (DESIGN.md: a figure is seen whole or not at all)
  var cS = Math.max(.6, Math.min(1, (H - CB[2] - FG - 20) / 206)), C2 = Math.max(CB[2] + FG + 103 * cS, H - 204);
  L.alnilam = { cx: 640 - 40 * cS, cy: C2 - 26 * cS - OY, s: cS, ax: 640, ay: C2 - OY };
  L.ai = { cx: 640, cy: 88 + PT + 24 + figH / 2 - OY, s: aiS, cap: 213 * aiS };
  // License: the padlock (240 x 347, its centre 6 under the drawing's) in the room under the copy, between .42 and .75 of its size, whole
  var lS = Math.max(.42, Math.min(.75, (H - CB[4] - FG - 24) / 347)), lTop = Math.max(CB[4] + FG, H - 24 - 347 * lS);
  L.licence = { cx: 640, cy: lTop + 167 * lS - OY, s: lS };
  L.contact = { cx: 640, cy: H + 80 - OY, s: .5 };   // About us has no figure
  // About us runs on under the fold: the scroll carries on until its last line is 24 above the bottom edge; on a screen it fits, the legal line stands at the foot
  var xq = 0;
  if (sec[5]) { sec[5].style.setProperty('--tb-ph-lg', '40px'); var b5 = CT + hh(sec[5]), ov5 = b5 + 24 - H; if (ov5 <= 24) sec[5].style.setProperty('--tb-ph-lg', Math.round(40 - ov5) + 'px'); else xq = Math.round(ov5); }   // short of the foot: the legal line drops to it; over by 24 or less: its gap closes (40 to no less than 16) rather than leave its last line on the edge; more: the scroll carries on
  TABIT_PHL = L; TABIT_XQ = xq;
}
function makeTabitHero(glCanvas, ovCanvas, DATA, DOM) {
  // Tabit hero, Night mode (Brand Book 2027). The sky, the flare and the knot's stars are WebGL;
  // the logo itself is the flat white lockup in the DOM, exactly as drawn.
  var T3 = THREE;
  var W = TABIT_W, H = TABIT_H, OX = TABIT_OX, OY = TABIT_OY, dpr = tbDpr(2), dpr0 = dpr;   // W follows the screen; OX centres the 1280 design in it
  var C_NIGHT = 0x04070F, BRASS = '168,130,58', DUSK = '184,192,212', IVORY = '251,249,244';
  var renderer = new T3.WebGLRenderer({ canvas: glCanvas, antialias: false, preserveDrawingBuffer: !!DATA.preserve });   // XR2.7.2: MSAA does nothing for point sprites and additive quads
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
  renderer.outputEncoding = T3.sRGBEncoding; renderer.setClearColor(C_NIGHT, 1);
  var scene = new T3.Scene();
  var cam = new T3.PerspectiveCamera(2 * Math.atan(Math.tan(11 * Math.PI / 180) * H / 720) * 180 / Math.PI, W / H, 1, 80000);
  var FPX = 360 / Math.tan(11 * Math.PI / 180);   // XR2.8.1: the design's focal length, for the 720-unit box
  ovCanvas.width = W * dpr; ovCanvas.height = H * dpr;
  var ox = ovCanvas.getContext('2d'); ox.setTransform(dpr, 0, 0, dpr, 0, 0);
  var ovInk = true;   // XR3.6: has anything been drawn on the overlay since it was last cleared? After the intro nothing is, and a canvas left alone costs the browser nothing
  ['fill', 'stroke', 'fillText', 'strokeText', 'fillRect', 'strokeRect', 'drawImage'].forEach(function (m) { var f = ox[m]; ox[m] = function () { ovInk = true; return f.apply(ox, arguments); }; });

  var seed = 1291;
  function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
  function gauss() { return (rnd() + rnd() + rnd() + rnd() - 2) / .58; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function seg(t, a, b) { return clamp((t - a) / (b - a), 0, 1); }
  function eIOS(x) { return -(Math.cos(Math.PI * x) - 1) / 2; }
  function eIOC(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function eOC(x) { return 1 - Math.pow(1 - x, 3); }
  function eOQ(x) { return 1 - Math.pow(1 - x, 4); }
  function lerp(a, b, k) { return a + (b - a) * k; }

  // Timeline (seconds): resolves in ~7.5s
  // B1: Orion stays on screen. The camera settles on the whole constellation, Tabit's knot forms at the star itself,
  // and the wordmark rises into the open sky beside it.
  // B10: no brightness flash at the start (sky fades straight to its focused level). B9: slower twinkle; background stars toned down so Orion leads. B8: twinkle made genuinely visible (no clipping, faster flicker, wider range). B7: Orion twinkles (Tabit steady), baseline reveal for the wordmark, black hole kept off the logo. B6: agreed brief; calm straight move, shift synced to the wordmark, layered realistic sky. B4: lockup centred, Manrope labels, smaller black hole, depth between camera and Orion. B3: splash screen only (no hero copy), straight grid, black-hole cursor. Based on B2: Tabit dead centre throughout; Orion to its left, the lockup and homepage hero to its right.
  var TL = {
    lines0: .9, draw0: 3.5, draw1: 4.7, grow0: 4.6, grow1: 5.15, settle0: 4.8, settle1: 5.25,
    shield0: 3.2, shield1: 3.9, word0: 4.95, slide0: 4.95, slide1: 6.1
  };
  var MARKW = 212.6, KM = MARKW / 496, TX = 640 - (700 - 248) * KM, TY = 360, KR = 127.6;   // D.C.2.1: the A16 splash logo (A12 size)   // B4: lockup centred, so Tabit sits at x≈512   // Tabit's place on screen; mark width in px

  // ------------------------------------------------------------------ textures
  function canvasTex(w, h, fn) {
    var c = document.createElement('canvas'); c.width = w; c.height = h; var g = c.getContext('2d'); fn(g, w, h);
    var tx = new T3.CanvasTexture(c); tx.encoding = T3.sRGBEncoding; return tx;
  }
  function radial(stops) {
    return canvasTex(256, 256, function (g) { var gr = g.createRadialGradient(128, 128, 0, 128, 128, 128); stops.forEach(function (s) { gr.addColorStop(s[0], s[1]); }); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); });
  }
  var texStar = radial([[0, 'rgba(255,255,255,1)'], [.05, 'rgba(255,255,255,.95)'], [.12, 'rgba(255,255,255,.38)'], [.3, 'rgba(255,255,255,.08)'], [.6, 'rgba(255,255,255,.015)'], [1, 'rgba(255,255,255,0)']]);
  var texBloom = radial([[0, 'rgba(255,255,255,1)'], [.18, 'rgba(255,255,255,.42)'], [.45, 'rgba(255,255,255,.1)'], [1, 'rgba(255,255,255,0)']]);
  function alphaTex(w, h, fa) {
    return canvasTex(w, h, function (g) {
      var id = g.createImageData(w, h), d = id.data;
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) { var a = fa(x - w / 2 + .5, y - h / 2 + .5, w, h), k = (y * w + x) * 4; d[k] = d[k + 1] = d[k + 2] = 255; d[k + 3] = clamp(a, 0, 1) * 255; }
      g.putImageData(id, 0, 0);
    });
  }
  // four-point diffraction cross, the way a real lens draws a bright star
  var texSpikes = alphaTex(512, 512, function (x, y) {
    var ax = Math.abs(x), ay = Math.abs(y);
    var h = Math.exp(-ay * ay / 2.2) * Math.pow(Math.max(0, 1 - ax / 256), 2.4), v = Math.exp(-ax * ax / 2.2) * Math.pow(Math.max(0, 1 - ay / 256), 2.4);
    return Math.max(h, v);
  });
  // thin anamorphic streak
  var texStreak = alphaTex(1024, 32, function (x, y) { return Math.exp(-y * y / 6) * Math.pow(Math.max(0, 1 - Math.abs(x) / 512), 3); });
  var texCloud = canvasTex(256, 256, function (g) {
    for (var i = 0; i < 26; i++) {
      var x = 70 + rnd() * 116, y = 70 + rnd() * 116, r = 18 + rnd() * 52, gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,255,255,.13)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    }
    g.globalCompositeOperation = 'destination-in';
    var mk = g.createRadialGradient(128, 128, 0, 128, 128, 128); mk.addColorStop(0, 'rgba(0,0,0,1)'); mk.addColorStop(.55, 'rgba(0,0,0,.55)'); mk.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = mk; g.fillRect(0, 0, 256, 256);
  });
  function addSprite(tex, color, order) {
    var s = new T3.Sprite(new T3.SpriteMaterial({ map: tex, color: new T3.Color(color[0], color[1], color[2]), transparent: true, depthWrite: false, depthTest: false, blending: T3.AdditiveBlending, opacity: 0 }));
    s.renderOrder = order || 0; scene.add(s); return s;
  }

  // ------------------------------------------------------------------ Orion, real positions and distances; Tabit (pi3) sits on the axis at the world origin
  var Zo = 1800;
  // Positions from catalogue RA/Dec (SIMBAD/Hipparcos via the List of stars in Orion), gnomonic projection centred on pi3 Ori, north up.
  var OR = {
    betel: [657.4, 299.0, 643, 0.42],
    rigel: [845.2, 597.3, 773, 0.18],
    bella: [799.9, 322.6, 243, 1.64],
    mintaka: [765.0, 446.2, 916, 2.20],
    alnilam: [744.5, 463.3, 1342, 1.69],
    alnitak: [722.2, 477.6, 817, 1.88],
    saiph: [683.1, 631.5, 721, 2.07],
    meissa: [754.7, 254.9, 1055, 3.47],
    pi1: [938.5, 254.4, 121, 4.64],
    pi2: [957.8, 277.4, 194, 4.35],
    pi3: [961.3, 312.8, 26, 3.19, [1, .97, .9]],
    pi4: [955.1, 337.6, 1259, 3.68],
    pi5: [941.1, 395.5, 1342, 3.71],
    pi6: [921.4, 408.9, 953, 4.47],
    mu: [623.4, 254.7, 152, 4.12],
    nu: [601.7, 153.5, 534, 4.42],
    xi: [579.3, 162.6, 634, 4.45],
    chi1: [670.0, 50.5, 28, 4.39],
    chi2: [624.1, 48.4, 1801, 4.64],
    omi2: [932.1, 192.5, 169, 4.06],
    o11: [895.7, 156.9, 400, 4.65],
    eta: [799.9, 485.7, 901, 3.35],
    tau: [831.0, 570.9, 554, 3.59]
  };
  // the chart is framed so Tabit is dead centre; the figure of Orion opens out to its left
  function scr(o) { return [640 + .92 * (o[0] - 961.3), 372 + .92 * (o[1] - 344)]; }
  var p3s = scr(OR.pi3), Ocx = -(p3s[0] - 640) * Zo / FPX, Ocy = (p3s[1] - 360) * Zo / FPX;
  function framePoint(sx, sy, D) { return new T3.Vector3(Ocx + (sx - 640) * D / FPX, Ocy - (sy - 360) * D / FPX, Zo - D); }
  var ori = {};
  Object.keys(OR).forEach(function (k) {
    var o = OR[k], s = scr(o), D = Zo + (k === 'pi3' ? 0 : 140 * Math.log(o[2] / 26) / Math.LN10);
    var v = framePoint(s[0], s[1], D), c = o[4] || [.9, .93, 1], b = Math.pow(10, -.4 * (o[3] - .13));
    var bb = k === 'pi3' ? .55 : Math.min(b, .18); var sp = addSprite(texStar, c, 2); sp.scale.setScalar((13 + 30 * Math.sqrt(bb)) * D / FPX); b = bb; sp.position.copy(v);
    ori[k] = { v: v, sp: sp, b: b, mag: o[3], col: c, tw1: .7 + rnd() * .6, tw2: 4.5 + rnd() * 2.5, tw3: 7.5 + rnd() * 3.5, ph: rnd() * 6.28, base: sp.scale.x, col0: c.slice() };
  });
  // Stick figure as drawn on the IAU / Sky & Telescope chart of Orion
  var LINES = [['pi3', 'pi2'], ['pi2', 'pi1'], ['pi1', 'omi2'], ['omi2', 'o11'], ['pi3', 'pi4'], ['pi4', 'pi5'], ['pi5', 'pi6'],
    ['pi3', 'bella'], ['bella', 'meissa'], ['meissa', 'betel'], ['betel', 'bella'],
    ['bella', 'mintaka'], ['mintaka', 'alnilam'], ['alnilam', 'alnitak'], ['betel', 'alnitak'], ['alnitak', 'saiph'],
    ['mintaka', 'eta'], ['eta', 'tau'], ['tau', 'rigel'],
    ['betel', 'mu'], ['mu', 'xi'], ['xi', 'chi2'], ['chi2', 'chi1'], ['chi1', 'nu']];
  // B7: Orion's stars scintillate gently (two slow sine terms per star, so no two pulse together). Tabit never does:
  // the fixed star, steady while its neighbours shimmer.
  // B8: real scintillation: a slow swell plus two faster, irregular flickers (about 2-5 per second). Range roughly 0.6-1.4.
  function twinkle(o, t) {
    var f = .5 + .5 * Math.sin(t * o.tw2 + o.ph * 1.7) * Math.sin(t * o.tw3 * .37 + o.ph);
    return 1 + .18 * Math.sin(t * o.tw1 + o.ph) + .36 * (Math.sin(t * o.tw2 + o.ph * 1.7) * .6 + Math.sin(t * o.tw3 + o.ph * 2.3) * .4) * f;
  }
  var SHIELD = { pi1: 1, pi2: 1, pi4: 1, pi5: 1, pi6: 1, omi2: 1, o11: 1 };
  var popAt = {};
  LINES.forEach(function (L, idx) {
    var a = TL.lines0 + idx * .035, b = a + .45;
    popAt[L[0]] = Math.min(popAt[L[0]] == null ? 99 : popAt[L[0]], a); popAt[L[1]] = Math.min(popAt[L[1]] == null ? 99 : popAt[L[1]], b);
  });

  // ------------------------------------------------------------------ the sky
  // B6: depth from layers, not speed. Four layers sit at different distances and none is ever passed by the camera,
  // so they slide against each other at different rates (like a multiplane camera) while the move stays calm.
  // Stars follow a realistic spread: a few bright ones with soft halos, many medium, a fine dust of faint ones,
  // in muted true colours; farther layers are dimmer and cooler. The Milky Way is clustered, with a dark dust lane.
  var pos = [], col = [], siz = [], pha = [];
  var TEMP = [[.80, .86, 1, .12], [.97, .97, 1, .38], [1, .96, .88, .28], [1, .91, .76, .14], [1, .82, .66, .08]];
  function pickCol() { var r = rnd(), acc = 0; for (var q = 0; q < TEMP.length; q++) { acc += TEMP[q][3]; if (r < acc) return TEMP[q]; } return TEMP[1]; }
  function addStar(x, y, z, bright, dim) { pos.push(x, y, z); var c = pickCol(), k = dim || 0; col.push(lerp(c[0], .74, k), lerp(c[1], .8, k), lerp(c[2], .94, k)); siz.push(bright); pha.push(rnd()); }
  function hsh(ix, iy) { var h = Math.sin(ix * 127.1 + iy * 311.7) * 43758.5453; return h - Math.floor(h); }
  function vnoise(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy, ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
    return lerp(lerp(hsh(ix, iy), hsh(ix + 1, iy), ux), lerp(hsh(ix, iy + 1), hsh(ix + 1, iy + 1), ux), uy);
  }
  var i, n;
  var ZF = Zo * .92 / .95, ZS = 3200, SHIFT = 640 - TX;
  function placeAt(sx, sy, z, zr, xr) { var d = zr - z; return [(xr || 0) + (sx - 640) * d / FPX, -(sy - 360) * d / FPX, z]; }
  var LAYERS = [
    { z0: 520, z1: 900, n: 900, pw: 2.8, amp: .85, dim: .03 },
    { z0: -1600, z1: -1000, n: 2600, pw: 3.3, amp: .78, dim: .11 },
    { z0: -5500, z1: -3500, n: 6000, pw: 4.0, amp: .7, dim: .25 },
    { z0: -16000, z1: -12000, n: 12000, pw: 6.0, amp: .5, dim: .45 }
  ];
  LAYERS.forEach(function (L, li) {
    for (var q = 0; q < L.n; q++) {
      var z = lerp(L.z0, L.z1, rnd()), early = li === 0 && q % 2 === 0, zr = early ? ZS : ZF, xr = early ? 0 : SHIFT * ZF / FPX;
      var p = placeAt(-220 + rnd() * 1720, -160 + rnd() * 1040, z, zr, xr);
      addStar(p[0], p[1], p[2], Math.pow(rnd(), L.pw) * L.amp, L.dim);
    }
  });
  for (n = 0, i = 0; i < 60000 && n < 11000; i++) {   // winter Milky Way, east of Betelgeuse: clustered, with a dust lane
    var a = rnd(), off = gauss() * 115, bx = lerp(-160, 330, a) + off * .85, by = lerp(-180, 900, a) - off * .53;
    var lane = Math.exp(-Math.pow((off - 22 * Math.sin(a * 9)) / 20, 2));
    var keep = clamp((vnoise(bx / 120, by / 120) - .3) / .45, 0, 1) * (1 - .85 * lane);
    if (rnd() > keep) continue;
    var zz = rnd() < .7 ? lerp(-16000, -12000, rnd()) : lerp(-5500, -3500, rnd()), p2 = placeAt(bx, by, zz, ZF, SHIFT * ZF / FPX * .5);
    addStar(p2[0], p2[1], p2[2], Math.pow(rnd(), 7) * .55, .4); n++;
  }
  (function () {   // the same sky carried out to the widest screen's edges (own random sequence, so the 1280 sky is exactly as before)
    var seedK = seed, ext = 330 - 200 + 80; seed = 7313;
    LAYERS.forEach(function (L) {
      var nx = Math.round(L.n * ext / 1720);
      for (var side = 0; side < 2; side++) for (var q = 0; q < nx; q++) {
        var z = lerp(L.z0, L.z1, rnd()), xr = SHIFT * ZF / FPX, sx = side ? 1500 + rnd() * ext : -220 - rnd() * ext;
        var p = placeAt(sx, -160 + rnd() * 1040, z, ZF, xr);
        addStar(p[0], p[1], p[2], Math.pow(rnd(), L.pw) * L.amp, L.dim);
      }
    });
    seed = seedK;
  })();
  if (TABIT_PH) (function () {   // XR3.1: a phone's view draws back to about half size to show the whole lockup, and so sees far above and below the 1280 x 720 sky: the same sky carried up and down to cover it (own random sequence, so the sky that was there is unchanged)
    var seedK = seed; seed = 9151;
    LAYERS.forEach(function (L) {
      var nb = Math.round(L.n * 1480 * 400 / (1720 * 1040));
      for (var side = 0; side < 2; side++) for (var q = 0; q < (side ? nb * 1.8 : nb); q++) {   // the band below runs further: the sky slides up as the splash scrolls away (F.phy)
        var z = lerp(L.z0, L.z1, rnd()), xr = SHIFT * ZF / FPX, sy = side ? 880 + rnd() * 720 : -160 - rnd() * 400;
        var p = placeAt(-100 + rnd() * 1480, sy, z, ZF, xr);
        addStar(p[0], p[1], p[2], Math.pow(rnd(), L.pw) * L.amp, L.dim);
      }
    });
    seed = seedK;
  })();
  var sg = new T3.BufferGeometry();
  sg.setAttribute('position', new T3.Float32BufferAttribute(pos, 3)); sg.setAttribute('color', new T3.Float32BufferAttribute(col, 3));
  sg.setAttribute('bright', new T3.Float32BufferAttribute(siz, 1)); sg.setAttribute('phase', new T3.Float32BufferAttribute(pha, 1));
  var starMat = new T3.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPR: { value: dpr }, uFade: { value: 0 }, uPar: { value: new T3.Vector2() }, uReveal: { value: 0 }, uLens: { value: new T3.Vector3(-999, -999, 0) }, uRes: { value: new T3.Vector2(W, H) }, uAsp: { value: W / 1280 } },
    vertexShader: 'attribute float bright; attribute vec3 color; attribute float phase; uniform float uTime; uniform float uPR; uniform float uFade; uniform vec2 uPar; uniform float uReveal; uniform vec3 uLens; uniform vec2 uRes; uniform float uAsp; varying vec3 vC; varying float vA; varying float vB; varying float vBr;' +
      'void main(){ vBr = bright; vec4 mv = modelViewMatrix * vec4(position,1.0); float d = -mv.z; mv.xy += uPar * clamp(9000.0 / d, 0.0, 3.0);' +
      'float tw = 0.86 + 0.14 * sin(uTime * (0.6 + phase * 1.3) + phase * 6.2831);' +
      'float blur = clamp(1.0 - d / 700.0, 0.0, 1.0); vB = blur;' +
      'gl_Position = projectionMatrix * mv; vec2 ndc = gl_Position.xy / gl_Position.w; float rr = length(ndc * vec2(uAsp, 0.5625));' +
      'if (uLens.z > 0.002) { vec2 sp = vec2((ndc.x * 0.5 + 0.5) * uRes.x, (0.5 - ndc.y * 0.5) * uRes.y); vec2 d = sp - uLens.xy; float r = max(length(d), 0.001);' +
      ' float f = clamp((135.0 - r) / 87.75, 0.0, 1.0); f = f * f * (3.0 - 2.0 * f) * uLens.z; float rl = 0.5 * (r + sqrt(r * r + 4.0 * 21.0 * 21.0)); float nr = r + (rl - r) * f;' +
      ' float sw = 0.5 * f * 21.0 / (r + 21.0); vec2 u = d / r; vec2 ru = vec2(u.x * cos(sw) - u.y * sin(sw), u.x * sin(sw) + u.y * cos(sw)); vec2 np = uLens.xy + ru * nr;' +
      ' ndc = vec2(np.x / uRes.x * 2.0 - 1.0, 1.0 - np.y / uRes.y * 2.0); gl_Position.xy = ndc * gl_Position.w; }' +
      'float rev = smoothstep(uReveal, uReveal - 0.35, rr);' +
      'vA = uFade * rev * tw * (0.32 + 0.68 * bright) * clamp(2600.0 / d, 0.5, 1.22);' +
      'gl_PointSize = (1.05 + 5.2 * pow(bright, 1.6)) * clamp(3400.0 / d, 0.75, 1.6) * uPR; vC = color; }',
    fragmentShader: 'varying vec3 vC; varying float vA; varying float vB; varying float vBr; void main(){ vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;' +
      'float a = exp(-r * r * 12.0) + (0.07 + 0.42 * vBr * vBr) * exp(-r * r * 2.3); gl_FragColor = vec4(vC, a * vA); }',
    transparent: true, depthWrite: false, depthTest: false, blending: T3.AdditiveBlending
  });
  var starPts = new T3.Points(sg, starMat); starPts.frustumCulled = false; starPts.renderOrder = 1; scene.add(starPts);
  // Barnard's Loop (the faint arc of gas around Orion's belt and sword) and the Orion Nebula, muted to the brand palette
  function chartToFrame(cx, cy) { return scr([cx, cy]); }
  var texLoop = canvasTex(512, 512, function (g) {
    g.filter = 'blur(22px)'; g.lineCap = 'round';
    for (var k = 0; k < 3; k++) {
      g.strokeStyle = 'rgba(255,255,255,' + [.55, .35, .2][k] + ')'; g.lineWidth = [26, 46, 80][k];
      g.beginPath(); g.ellipse(256, 256, 170, 220, 0, Math.PI * .52, Math.PI * 1.55); g.stroke();
    }
    g.filter = 'none';
  });
  var neb = [];
  (function () {
    var p = chartToFrame(752, 455), D = Zo + 520, sp = addSprite(texLoop, [.95, .66, .58], 0);
    sp.position.copy(framePoint(p[0], p[1], D)); sp.scale.setScalar(430 * .92 * D / FPX); sp.userData.op = .05; neb.push(sp);
    var m = chartToFrame(754, 539), D2 = Zo + 600;
    var m1 = addSprite(texBloom, [.98, .80, .82], 0); m1.position.copy(framePoint(m[0], m[1], D2)); m1.scale.setScalar(40 * .92 * D2 / FPX); m1.userData.op = .32; neb.push(m1);
    var m2 = addSprite(texBloom, [.86, .9, 1], 0); m2.position.copy(framePoint(m[0], m[1] - 3, D2)); m2.scale.setScalar(16 * .92 * D2 / FPX); m2.userData.op = .3; neb.push(m2);
  })();
  var clouds = [];
  for (i = 0; i < 9; i++) {
    var aa = i / 8, cl = addSprite(texCloud, i % 2 ? [.23, .29, .49] : [.17, .24, .44], 0);
    cl.position.copy(framePoint(lerp(-330, 300, aa) + gauss() * 30, lerp(-160, 900, aa), 22000)); cl.scale.setScalar(5600 + rnd() * 4200);
    cl.material.rotation = rnd() * 6.28; cl.userData.op = .1 + rnd() * .05; clouds.push(cl);
  }
  (function () {   // XR2.7.2: the nine clouds share one depth, so bake them into one sprite (same additive sum, same parallax): one full-screen fill a frame instead of nine
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    clouds.forEach(function (c) { var h = c.scale.x / 2; minX = Math.min(minX, c.position.x - h); maxX = Math.max(maxX, c.position.x + h); minY = Math.min(minY, c.position.y - h); maxY = Math.max(maxY, c.position.y + h); });
    var bw = maxX - minX, bh = maxY - minY, PX = 1024, PY = Math.round(PX * bh / bw), tints = {};
    function tinted(col) { var key = col.getHexString(); if (tints[key]) return tints[key]; var c = document.createElement('canvas'); c.width = c.height = 256; var g = c.getContext('2d'); g.fillStyle = '#' + key; g.fillRect(0, 0, 256, 256); g.globalCompositeOperation = 'destination-in'; g.drawImage(texCloud.image, 0, 0); return tints[key] = c; }
    var cvs = document.createElement('canvas'); cvs.width = PX; cvs.height = PY; var g = cvs.getContext('2d'); g.globalCompositeOperation = 'lighter';
    clouds.forEach(function (c) { var cx = (c.position.x - minX) / bw * PX, cy = (maxY - c.position.y) / bh * PY, s = c.scale.x / bw * PX; g.save(); g.translate(cx, cy); g.rotate(-c.material.rotation); g.globalAlpha = c.userData.op; g.drawImage(tinted(c.material.color), -s / 2, -s / 2, s, s); g.restore(); });
    var tex = new T3.CanvasTexture(cvs); tex.encoding = T3.sRGBEncoding;
    var one = addSprite(tex, [1, 1, 1], 0); one.position.set((minX + maxX) / 2, (minY + maxY) / 2, clouds[0].position.z); one.scale.set(bw, bh, 1); one.userData.op = 1;
    clouds.forEach(function (c) { scene.remove(c); c.material.dispose(); }); clouds = [one];
  })();

  // ------------------------------------------------------------------ Tabit's flare
  var flare = {
    bloom: addSprite(texBloom, [1, .97, .92], 3), streak: addSprite(texStreak, [1, .96, .9], 4),
    spikes: addSprite(texSpikes, [1, .97, .92], 5), core: addSprite(texStar, [1, .98, .93], 6), pulse: addSprite(texBloom, [.85, .88, 1], 3)
  };
  function pxScale(sp, wpx, hpx) { var d = Math.max(1, cam.position.z - sp.position.z); sp.scale.set(wpx * d / FPX, (hpx || wpx) * d / FPX, 1); }

  // ------------------------------------------------------------------ Tabit's own constellation lives at the star, tiny at first, and grows as we zoom in.
  // Each point of the knot lights as the line reaches it.
  var MCX = 248, MCY = 193.4, nodes = [];
  DATA.nodes.forEach(function (p) {
    if (p[2] < .002) return;   // the centre is Tabit itself
    nodes.push({ x: 640 + (p[0] - MCX) * KM, y: TY + (p[1] - MCY) * KM, f: p[2], ph: rnd() * 6.28 });
  });

  // ------------------------------------------------------------------ choreography
  var pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  // B3: the cursor is a small black hole. Stars around it are lensed outward into a ring (as light bends round a
  // compact mass) with a slight swirl; far stars are untouched. The logo is never distorted.
  var LENS = { mx: -999, my: -999, tx: -999, ty: -999, k: 0, on: 0, E: 21, R: 135 };
  function lensPt(x, y) {
    if (LENS.k < .002) return [x, y];
    var dx = x - LENS.mx, dy = y - LENS.my, r = Math.hypot(dx, dy) || .001, E = LENS.E, R = LENS.R;
    var f = clamp((R - r) / (R * .65), 0, 1); f = f * f * (3 - 2 * f); f *= LENS.k;
    var rr = .5 * (r + Math.sqrt(r * r + 4 * E * E)), nr = r + (rr - r) * f, sw = .5 * f * E / (r + E), c = Math.cos(sw), s = Math.sin(sw);
    var ux = dx / r, uy = dy / r; return [LENS.mx + (ux * c - uy * s) * nr, LENS.my + (ux * s + uy * c) * nr];
  }
  // C-series: hooks the page hand-off drives (all neutral at their defaults, so the splash is exactly B11)
  var FX = { sky: 1, ori: 1, grid: 0, snap: 0, gridLine: 1, hLine: 1, push: 0, camY: 0, lens: 1, keepGrid: 0, lineBoost: 1, creep: 1, colsOnly: 0, colMin: -1e9, colMax: 1e9, colKeep: null };
  var shiftK = 0;
  // XR3.0: a phone's view of the intro. The intro is composed for a wide screen (Orion to the left of Tabit, the lockup 604 units wide), so a
  // phone looks at it through a view of its own: a stage point (x, y) is shown at ((x - 640) z + cx, (y - 360) z + cy). It opens close on Orion's
  // shield and Tabit's star (z 1.55, the star left of centre so its name reads beside it), centres on the star as the ring opens round it and the
  // knot is drawn (z 1.2), and draws back as TABIT is spelt until the whole lockup stands across the screen (z about .54), Orion beside it as on a
  // wide screen. The sky, the drawing over it and the lockup all take the same view, so they stay in register; the sky is rendered through the
  // view (not enlarged afterwards), so it stays sharp. phk: the hand-off brings the view back to the stage's own scale as the site's sky takes over.
  var PV = null, PV0 = null;
  function phoneView(t) {
    if (!TABIT_PH) return null;
    var a = eIOS(seg(t, 0, 3.9)), b = eIOS(seg(t, 4.6, 5.5)), zC = Math.min(.567, (W - 64) / 603.5);
    var z = lerp(lerp(.92, 1.2, a), zC, b), cx = W / 2 - b * SHIFT * (1 - eIOS(seg(t, TL.word0 - .1, TL.word0 + 1.25))) * z, cy = Math.round(TABIT_PHT + (H - TABIT_PHT - TABIT_PHB) * .47), k = FX.phk || 0;   // XR3.1: a slow zoom in on Tabit's star (which stands at the design's centre) as it comes up and the ring goes round it; then, as in XR3.0, the view draws back and stands on the lockup's own centre before the third letter is spelt, so no letter is ever cut by the screen's edge; the sky goes on sliding behind it
    PV0 = { z: z, cx: cx, cy: cy };
    return { z: lerp(z, 1, k), cx: lerp(cx, W / 2, k), cy: lerp(cy, H / 2, k) + (FX.phy || 0) };
  }
  function camera(t) {
    var p = eIOS(seg(t, 0, 3.9));
    var z = Math.exp(lerp(Math.log(ZS), Math.log(ZF), p)) * Math.exp(-.0018 * Math.min(40, Math.max(0, t - 6.4)) * FX.creep) * (1 - .3 * FX.push);
    shiftK = eIOS(seg(t, TL.word0 - .1, TL.word0 + 1.25));
    var x = SHIFT * shiftK * z / FPX;   // camera slides right, so Tabit (and the mark) slide left by exactly SHIFT px
    var cy = FX.camY * z / FPX;
    cam.position.set(x, cy, z); cam.lookAt(x, cy, z - 1000);
    PV = phoneView(t);
    if (PV) cam.setViewOffset(W, H, W / 2 - PV.cx / PV.z, H / 2 - PV.cy / PV.z, W / PV.z, H / PV.z); else if (cam.view && cam.view.enabled) cam.clearViewOffset();
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();
  }
  (function precompile() {   // XR2.9.1: every program is compiled here, while the screen is still black, not when an object first appears
    var hidden = []; scene.traverse(function (o) { if (o.isSprite && !o.visible) { hidden.push(o); o.visible = true; } });
    try { renderer.compile(scene, cam); } catch (err) {}
    hidden.forEach(function (o) { o.visible = false; });
  })();
  var v3 = new T3.Vector3();
  function toScreen(v) { v3.copy(v).project(cam); return [(v3.x + 1) / 2 * W - OX, (1 - v3.y) / 2 * H - OY]; }   // in the 1280 design's units. XR2.9.20: vertically too; the overlay is drawn offset by OY, so on a stage taller than 720 the ring, Orion and the grid sat OY below the logo they frame

  var hid = false, whole = false;   // XR3.6: the two hero canvases are taken out of the page while the site's sky covers them; whole: a frame has been drawn in full at this size
  function render(t, covered) {
    if (TABIT_W !== W || TABIT_H !== H) {   // the window was resized: follow it, without rebuilding anything
      whole = false;
      W = TABIT_W; OX = TABIT_OX; H = TABIT_H; OY = TABIT_OY; renderer.setSize(W, H, false); cam.aspect = W / H; cam.fov = 2 * Math.atan(Math.tan(11 * Math.PI / 180) * H / 720) * 180 / Math.PI; cam.updateProjectionMatrix();
      ovCanvas.width = Math.round(W * dpr); ovCanvas.height = Math.round(H * dpr);
      starMat.uniforms.uRes.value.set(W, H); starMat.uniforms.uAsp.value = W / 1280;
    }
    pointer.sx += (pointer.x - pointer.sx) * .05; pointer.sy += (pointer.y - pointer.sy) * .05;
    camera(t);
    // XR3.6: from three tenths of the way into the hand-off the site's sky (the scene canvas, drawn on a full ground) lies over the hero's sky
    // and its overlay at full strength: nothing of either can be seen, so neither is drawn, and both are hidden so the browser does not
    // lay them into every frame. Coming back, they are drawn in the same frame they are shown. One frame is always drawn in full first, at
    // each size: the hand-off places the lockup from what that frame works out (FX.pvA, pvB, pvZ in drawDom), and a page that opens already
    // scrolled, or is resized there, would otherwise hand off from nothing.
    if (covered && whole) { if (!hid) { hid = true; glCanvas.style.visibility = ovCanvas.style.visibility = 'hidden'; } return; }
    if (hid) { hid = false; glCanvas.style.visibility = ovCanvas.style.visibility = ''; }
    var lcx = TX + SHIFT * (1 - shiftK) - 106.3, overLogo = t > TL.grow0 && LENS.tx > lcx - 24 && LENS.tx < lcx + 600 + 24 && LENS.ty > 360 - 84 - 24 && LENS.ty < 360 + 84 + 24;
    if (FX.inkHit !== undefined) { overLogo = FX.inkHit === 1; if (overLogo) LENS.k = 0; }   // F2.6: the black hole ends the moment the pointer reaches the logo
    LENS.k += ((LENS.on && !overLogo && FX.lens > .5 && !TABIT_PH ? 1 : 0) - LENS.k) * .07; LENS.mx += (LENS.tx - LENS.mx) * .22; LENS.my += (LENS.ty - LENS.my) * .22;
    starMat.uniforms.uLens.value.set(LENS.mx + OX, LENS.my, LENS.k);
    var fadeIn = eIOS(seg(t, 0, 1.3)), focus = eIOS(seg(t, .9, 1.9)) * (1 - .45 * eIOS(seg(t, 3.0, 4.0)));
    var skyFocus = 1 - .45 * eIOS(seg(t, 3.0, 4.0));   // B10: the sky starts at its dimmed level (no overshoot), same later easing
    starMat.uniforms.uTime.value = t; starMat.uniforms.uFade.value = fadeIn * (1 - .35 * skyFocus) * FX.sky;
    starMat.uniforms.uReveal.value = lerp(0, 2.2, eOC(seg(t, 0, 1.6)));
    starMat.uniforms.uPar.value.set(-pointer.sx * 1.6, pointer.sy * 1.0);
    clouds.forEach(function (c) { c.material.opacity = c.userData.op * fadeIn * (1 - .4 * skyFocus) * FX.sky; });
    var nebA = eIOS(seg(t, 1.0, 3.2)); neb.forEach(function (n) { n.material.opacity = n.userData.op * nebA * FX.sky; });
    var oriA = eIOS(seg(t, .3, 1.4));
    Object.keys(ori).forEach(function (k) {
      var o = ori[k], a = oriA * (.62 + .38 * focus);
      if (SHIELD[k]) a *= 1 - eIOS(seg(t, TL.shield0, TL.shield1));
      if (TABIT_PH && k !== 'pi3') a = 0;   // XR3.1: a phone's intro has no Orion: its stars' glows are not drawn (Oscar: "ditch the Orion guy ... Just zoom in on the star")
      if (k === 'pi3') a = oriA * (1 - eIOS(seg(t, 2.6, 3.0)));
      var tw = k === 'pi3' ? 1 : twinkle(o, t);
      o.sp.material.opacity = clamp(a * (.36 + .26 * Math.pow(o.b, .3)) * tw * FX.ori, 0, 1);   // base kept low so the twinkle never clips
      o.sp.scale.setScalar(o.base * (k === 'pi3' ? 1 : 1.2 * (.82 + .18 * tw)));
      if (k !== 'pi3') { var cs2 = .06 * Math.sin(t * o.tw3 * .8 + o.ph); o.sp.material.color.setRGB(clamp(o.col0[0] * (1 + cs2), 0, 1), o.col0[1], clamp(o.col0[2] * (1 - cs2), 0, 1)); }
      if (k !== 'pi3') {   // bend the star's glow with the lens: project, lens in screen space, unproject at the same depth
        v3.copy(o.v).project(cam); var ndz = v3.z, sp2 = lensPt((v3.x + 1) / 2 * W - OX, (1 - v3.y) / 2 * H);
        o.sp.position.set((sp2[0] + OX) / W * 2 - 1, 1 - (sp2[1] + OY) / H * 2, ndz).unproject(cam);
      }
    });

    // flare: Tabit brightens as we close in, peaks while the stars are called in, then gives its light to the mark
    var F = 0,   // A8: no flare; Tabit stays a calm point so the ring and tag carry the story
       sh = 1 + .035 * Math.sin(t * 31) + .02 * Math.sin(t * 17.3);
    flare.core.material.opacity = clamp((TABIT_PH ? .9 * eIOS(seg(t, .8, 1.8)) : .9 * seg(t, 2.4, 2.8)) * (1 - eIOS(seg(t, TL.settle0, TL.settle1))), 0, 1);   // XR3.1: on a phone Tabit's light comes up slowly out of the sky pxScale(flare.core, 14);
    flare.bloom.material.opacity = .2 * F; pxScale(flare.bloom, 80 + 460 * F);
    flare.spikes.material.opacity = .62 * F * sh; flare.spikes.material.rotation = -cam.rotation.z + .03 * Math.sin(t * .8); pxScale(flare.spikes, 60 + 540 * F);
    flare.streak.material.opacity = .22 * F; flare.streak.material.rotation = -cam.rotation.z; pxScale(flare.streak, 1300 * F + 1, 20 + 12 * F);
    flare.pulse.material.opacity = 0; pxScale(flare.pulse, 760);

    for (var si = 0; si < scene.children.length; si++) { var so = scene.children[si]; if (so.isSprite) so.visible = so.material.opacity > .002; }   // XR2.7.2: nothing is drawn for a sprite you cannot see
    renderer.render(scene, cam);
    if (PV) { cam.clearViewOffset(); cam.updateProjectionMatrix(); }   // XR3.0: the drawing over the sky is worked out in the stage's own units and takes the phone's view as one transform (drawOverlay)
    drawOverlay(t, focus);
    if (DOM) drawDom(t);
    whole = true;
  }

  // ------------------------------------------------------------------ star-chart overlay: Dusk hairlines, Tabit marked in Brass
  function rgba(c, a) { return 'rgba(' + c + ',' + clamp(a, 0, 1).toFixed(3) + ')'; }
  // Live RA/Dec grid on Tabit's own plane. It stays through the zoom and refines like a map:
  // 5 degree lines first, then 1 degree, then 20 arcminutes, with the edge labels homing in on Tabit.
  var GU = .92 * 18.26 * Zo / FPX, DEC0 = 6.9614, RA0 = 72.4583, COSD = Math.cos(DEC0 * Math.PI / 180);
  var GLEV = [{ d: 5, a: .085 }, { d: 1, a: .07 }, { d: 1 / 3, a: .055 }];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDec(d) {
    var sg = d < 0 ? '−' : '+', m = Math.round(Math.abs(d) * 60), dg = Math.floor(m / 60), mm = m % 60;
    return sg + pad2(dg) + '°' + (mm ? pad2(mm) + '′' : '');
  }
  function fmtRA(r) {
    var sec = Math.round(r / 15 * 3600), h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), sc = sec % 60;
    return pad2(h) + 'ʰ' + pad2(m) + 'ᵐ' + (sc ? pad2(sc) + 'ˢ' : '');
  }
  function drawGrid(t) {
    if (TABIT_PH) return;   // XR3.1: a phone's intro has no chart grid or coordinates: it opens on the sky alone
    var gA = Math.max(eIOS(seg(t, .5, 1.5)) * (FX.keepGrid ? 1 : 1 - eIOS(seg(t, TL.slide0, TL.slide1))), FX.grid);   // E2: keepGrid holds it through the splash   // B11: the grid and its coordinates fade out as TABIT is spelt (letters run 4.95 to 6.07s)
    if (gA <= 0) return;
    var ppu = FPX / cam.position.z, cx = cam.position.x, hw = (900 + Math.max(0, OX)) / ppu, hh = (420 + OY) / ppu;
    var XL = -OX, XR = W - OX, YT = -OY, YB = H - OY, zq = 1;   // the screen's edges, in the stage's units
    if (PV) { zq = PV.z; XL = 640 - PV.cx / zq; XR = XL + W / zq; YT = 360 - PV.cy / zq; YB = YT + H / zq; hh = Math.max(420 + OY, 360 - YT, YB - 360) / ppu; }
    var decMin = DEC0 - hh / GU, decMax = DEC0 + hh / GU, raMin = RA0 - (cx + hw) / (GU * COSD), raMax = RA0 - (cx - hw) / (GU * COSD);
    var labelLev = -1;
    GLEV.forEach(function (L, li) { if (L.d * GU * ppu >= 70) labelLev = li; });
    ox.lineWidth = 1; ox.font = '500 9px Manrope, "Inter Tight", system-ui, sans-serif';
    var decLabels = [], raLabels = [];
    GLEV.forEach(function (L, li) {
      var sp = L.d * GU * ppu, la = gA * L.a * clamp((sp - 14) / 36, 0, 1) * (1 - clamp((sp - 1100) / 900, 0, 1));
      if (la <= .002) return;
      ox.strokeStyle = rgba(DUSK, la * FX.gridLine);
      var coarser = li > 0 ? GLEV[li - 1].d : 0, k, v, p, n = 0;
      ox.globalAlpha = FX.hLine;   // G2: horizontal (declination) lines can be switched off
      for (k = Math.ceil(decMin / L.d); k * L.d <= decMax && n < 80; k++, n++) {
        v = k * L.d; if (coarser && Math.abs(v / coarser - Math.round(v / coarser)) < 1e-6) continue;
        p = toScreen(new T3.Vector3(0, (v - DEC0) * GU, 0));
        ox.beginPath(); var gy = lerp(p[1], p[1] < 360 ? 88 : 632, FX.snap); ox.moveTo(XL, Math.round(gy) + .5); ox.lineTo(XR, Math.round(gy) + .5); ox.stroke();
      }
      ox.globalAlpha = 1;
      for (k = Math.ceil(raMin / L.d), n = 0; k * L.d <= raMax && n < 80; k++, n++) {
        v = k * L.d; if (coarser && Math.abs(v / coarser - Math.round(v / coarser)) < 1e-6) continue;
        p = toScreen(new T3.Vector3(-(v - RA0) * GU * COSD, 0, 0));
        var keepCol = li === 0 && (FX.colKeep ? FX.colKeep.some(function (cx) { return Math.abs(cx - p[0]) < 2; }) : p[0] > FX.colMin && p[0] < FX.colMax); ox.globalAlpha = keepCol ? 1 : 1 - FX.colsOnly;   // E3: only the page's 13 column lines stay
        ox.beginPath(); var gx = lerp(p[0], clamp(80 + Math.round((p[0] - 80) / (1120 / 12)) * (1120 / 12), 80, 1200), FX.snap); ox.moveTo(Math.round(gx) + .5, YT); ox.lineTo(Math.round(gx) + .5, YB); ox.stroke();
      }
      ox.globalAlpha = 1;
      if (li === labelLev) {
        for (k = Math.ceil(decMin / L.d); k * L.d <= decMax; k++) { v = k * L.d; p = toScreen(new T3.Vector3(0, (v - DEC0) * GU, 0)); if (p[1] > YT + 24 / zq && p[1] < YB - 40 / zq) decLabels.push([fmtDec(v), p[1]]); }
        for (k = Math.ceil(raMin / L.d); k * L.d <= raMax; k++) { v = k * L.d; p = toScreen(new T3.Vector3(-(v - RA0) * GU * COSD, 0, 0)); if (p[0] > XL + (PV ? 60 : 130) / zq && p[0] < XR - 40 / zq) raLabels.push([fmtRA(v), p[0]]); }
      }
    });
    ox.fillStyle = rgba(DUSK, .42 * gA * (1 - FX.snap));
    ox.globalAlpha = FX.hLine; ox.textAlign = 'left'; decLabels.forEach(function (l) { ox.fillText(l[0], XL + 26 / zq, l[1] - 5 / zq); }); ox.globalAlpha = 1;
    ox.globalAlpha = 1 - FX.colsOnly;
    ox.textAlign = 'center'; raLabels.forEach(function (l) { ox.fillText(l[0], l[1], YB - 22 / zq); });
    ox.globalAlpha = 1;
  }

  function drawOverlay(t, focus) {
    if (ovInk) { ox.setTransform(dpr, 0, 0, dpr, 0, 0); ox.clearRect(0, 0, W, H); ovInk = false; }
    ox.setTransform(dpr, 0, 0, dpr, dpr * OX, dpr * OY);   // draw in the 1280 design's units, centred
    if (PV) ox.setTransform(dpr * PV.z, 0, 0, dpr * PV.z, dpr * (PV.cx - 640 * PV.z), dpr * (PV.cy - 360 * PV.z));
    if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
    ox.font = '500 9px Manrope, "Inter Tight", system-ui, sans-serif';
    drawGrid(t);
    var S = {}; Object.keys(ori).forEach(function (k) { var q = toScreen(ori[k].v); S[k] = k === 'pi3' ? q : lensPt(q[0], q[1]); });
    var PHI = TABIT_PH, dA = eIOS(seg(t, .4, 1.4)), shieldOut = 1 - eIOS(seg(t, TL.shield0, TL.shield1)), knotIn = eIOS(seg(t, TL.draw0 - .2, TL.draw0 + .6));
    if (dA > 0) Object.keys(ori).forEach(function (k) {
      if (k === 'pi3' && t > TL.settle1) return;
      if (PHI && k !== 'pi3') return;   // XR3.1: no Orion on a phone's intro
      var o = ori[k], s = S[k], c = o.col, pop = 0;   // B10: no brightness pop on Orion's stars as the figure is drawn (this was the early flash)
      var tw2 = k === 'pi3' ? 1 : twinkle(o, t);
      var rr = (k === 'pi3' ? 2.8 : Math.max(1.1, Math.min(2.2, 3.1 - .5 * o.mag)) * (.85 + .15 * tw2)) * (1 + .9 * pop);
      ox.fillStyle = 'rgba(' + (c[0] * 255 | 0) + ',' + (c[1] * 255 | 0) + ',' + (c[2] * 255 | 0) + ',' + clamp(dA * (SHIELD[k] ? shieldOut : 1) * (k === 'pi3' ? (PHI ? eIOS(seg(t, .8, 1.8)) / (.4 + .2 * focus) * .95 : 1) * (1 - seg(t, TL.settle0, TL.settle1)) : 1) * (.4 + .2 * focus + .4 * pop) * tw2 * FX.ori, 0, 1).toFixed(3) + ')';
      ox.beginPath(); ox.arc(s[0], s[1], rr, 0, 6.2832); ox.fill();
    });
    var lA = PHI ? 0 : seg(t, TL.lines0, TL.lines0 + .2) * (1 - .3 * eIOS(seg(t, 4.4, 5.2))) * (1 - eIOS(seg(t, TL.word0, TL.word0 + 1.12))) * FX.ori;   // A16: the tracing fades as TABIT is spelt
    if (lA > 0) {
      ox.lineWidth = 1;
      LINES.forEach(function (L, idx) {
        var pr = eIOC(seg(t, TL.lines0 + idx * .05, TL.lines0 + .65 + idx * .05)); if (pr <= 0) return;
        var a = S[L[0]], b = S[L[1]], dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy); if (len < 18) return;
        var sh = (SHIELD[L[0]] || SHIELD[L[1]]) ? shieldOut : 1; if (sh <= 0) return;
        var g0 = L[0] === 'pi3' ? lerp(7, KR + 6, knotIn) : 7, g1 = L[1] === 'pi3' ? lerp(7, KR + 6, knotIn) : 7;
        var ux = dx / len, uy = dy / len, ax = a[0] + ux * g0, ay = a[1] + uy * g0, bx = a[0] + ux * (g0 + (len - g0 - g1) * pr), by = a[1] + uy * (g0 + (len - g0 - g1) * pr);
        ox.strokeStyle = rgba(DUSK, .36 * FX.lineBoost * lA * sh); ox.beginPath(); ox.moveTo(ax, ay); ox.lineTo(bx, by); ox.stroke();
        if (pr < 1) { ox.fillStyle = rgba(IVORY, .9 * lA); ox.beginPath(); ox.arc(bx, by, 1.4, 0, 6.2832); ox.fill(); }
      });
    }
    var nA = PHI ? 0 : eIOS(seg(t, 1.1, 1.6)) * (1 - eIOS(seg(t, TL.word0, TL.word0 + 1.12))) * FX.ori * (FX.oriName == null ? 1 : FX.oriName);   // A16: the Orion label goes with it
    if (nA > 0) {
      // name the constellation first, so the eye reads Orion -> Tabit
      var mA = S.meissa, bA = S.betel, cx = (mA[0] + bA[0]) / 2 - 26, cy = Math.min(mA[1], bA[1]) - 40;
      ox.font = '600 11px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '4px';
      ox.textAlign = 'center'; ox.fillStyle = rgba(DUSK, .8 * nA); ox.fillText('ORION', cx, cy);
      ox.font = '500 9px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
      ox.fillStyle = rgba(DUSK, .5 * nA); ox.fillText('CONSTELLATION', cx, cy + 15);
    }
    // Tabit (catalogue name pi3 Orionis): a brass reticle tightens on it, centre frame
    if (PHI) {   // XR3.1: a phone: the brass ring goes once round the star as it comes up, its name under it; then the ring opens round the knot as it is drawn, and goes as the logo forms
      var sP = S.pi3, rk = eIOC(seg(t, 1.6, 2.6)), kd = eIOS(seg(t, TL.draw0 - .2, TL.draw0 + .5)), RP = lerp(18, KR, kd), rOut = 1 - eIOS(seg(t, TL.grow0, TL.grow1 - .05)), lk = eIOS(seg(t, 2.4, 3.0)) * (1 - eIOS(seg(t, 4.1, 4.6)));
      if (rk > 0 && rOut > 0) { ox.strokeStyle = rgba(BRASS, .95 * rOut); ox.lineWidth = 1; ox.beginPath(); ox.arc(sP[0], sP[1], RP, -1.5708, -1.5708 + 6.2832 * rk); ox.stroke(); }
      if (lk > 0) { ox.font = '600 13px Manrope, system-ui, sans-serif'; ox.textAlign = 'center'; if ('letterSpacing' in ox) ox.letterSpacing = '3px';
        ox.fillStyle = rgba(BRASS, lk); ox.fillText('TABIT', sP[0] + 1.5, sP[1] + RP + 26 + 6 * (1 - eIOS(seg(t, 2.4, 3.0)))); }
    }
    var rA = PHI ? 0 : eIOS(seg(t, 1.5, 2.1)) * (1 - eIOS(seg(t, TL.grow0, TL.grow1 - .05)));
    if (rA > 0) {
      var s = S.pi3, k = eOQ(seg(t, 1.5, 2.3)), R0 = lerp(30, 12, k), kd = eIOS(seg(t, TL.draw0 - .2, TL.draw0 + .5)), R = lerp(R0, KR, kd);
      ox.strokeStyle = rgba(BRASS, .95 * rA); ox.lineWidth = 1;
      ox.beginPath(); ox.arc(s[0], s[1], R, 0, 6.2832); ox.stroke();
      var tA = eIOS(seg(t, 1.7, 2.2)) * (1 - eIOS(PV ? seg(t, 2.95, 3.4) : seg(t, TL.word0 - .15, TL.word0 + .35)));   // XR3.0: on a phone the star's name goes as the ring opens: at that size the ring fills the width and the name would run off the edge
      if (tA > 0) {
        var lx2 = s[0] + R * .72 + 20, ly2 = s[1] - R * .72 - 12;
        ox.beginPath(); ox.strokeStyle = rgba(BRASS, .75 * tA); ox.moveTo(s[0] + R * .72, s[1] - R * .72); ox.lineTo(lx2 - 4, ly2 + 5); ox.lineTo(lx2 + 150, ly2 + 5); ox.stroke();
        ox.font = '600 13px Manrope, system-ui, sans-serif'; ox.textAlign = 'left'; if ('letterSpacing' in ox) ox.letterSpacing = '3px';
        ox.fillStyle = rgba(BRASS, tA); ox.fillText('TABIT', lx2, ly2 - 2);
        ox.font = '500 9px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
        ox.fillStyle = rgba(DUSK, .85 * tA); ox.fillText('A STAR IN ORION · π³ ORI', lx2, ly2 + 19);
      }
    }
    // the black hole itself: an empty core inside a faint ring of bent light
    if (LENS.k > .01) {
      var hr = LENS.E * 1.04, hg = ox.createRadialGradient(LENS.mx, LENS.my, hr * .7, LENS.mx, LENS.my, hr * 1.5);
      hg.addColorStop(0, rgba(IVORY, 0)); hg.addColorStop(.42, rgba(IVORY, .07 * LENS.k)); hg.addColorStop(1, rgba(IVORY, 0));
      ox.fillStyle = hg; ox.beginPath(); ox.arc(LENS.mx, LENS.my, hr * 1.5, 0, 6.2832); ox.fill();
      ox.strokeStyle = rgba(IVORY, .22 * LENS.k); ox.lineWidth = 1; ox.beginPath(); ox.arc(LENS.mx, LENS.my, hr, 0, 6.2832); ox.stroke();
    }
    // the knot's points light as the line reaches them
    var prk = eIOS(seg(t, TL.draw0, TL.draw1)), nodeOut = 1 - eIOS(seg(t, TL.settle0, TL.settle1));
    if (prk > 0 && nodeOut > 0) nodes.forEach(function (nd) {
      var u = (prk - nd.f) / .025, on = clamp(u, 0, 1); if (on <= 0) return;
      var pop = Math.exp(-u * u / 2), a = on * nodeOut, r = 5 + 6 * pop;
      var nx = nd.x - SHIFT * shiftK, gr = ox.createRadialGradient(nx, nd.y, 0, nx, nd.y, r); gr.addColorStop(0, rgba(IVORY, .9 * a)); gr.addColorStop(.25, rgba(IVORY, .35 * a)); gr.addColorStop(1, rgba(IVORY, 0));
      ox.fillStyle = gr; ox.beginPath(); ox.arc(nx, nd.y, r, 0, 6.2832); ox.fill();
    });
    if ('letterSpacing' in ox) ox.letterSpacing = '0px';
  }

  // ------------------------------------------------------------------ the logo: the flat white lockup. The mark forms centre frame, then makes room for the name.
  var LEN = {};
  function drawDom(t) {
    if (DOM.lock) { if (PV0 && TABIT_PH) { var lL = parseFloat(DOM.lock.style.left), lT = parseFloat(DOM.lock.style.top), qz = PV0.z; FX.pvA = PV0.cx - OX - lL + qz * (lL - 640); FX.pvB = PV0.cy - OY - lT + qz * (lT - 360); FX.pvZ = qz;
        if (!DOM.lock.__pvO) { DOM.lock.__pvO = 1; DOM.lock.style.transformOrigin = '0 0'; } DOM.lock.style.transform = 'translate(' + FX.pvA.toFixed(2) + 'px,' + FX.pvB.toFixed(2) + 'px) scale(' + qz.toFixed(4) + ') translateX(' + (SHIFT * (1 - shiftK)).toFixed(2) + 'px)'; }
      else { if (FX.pvZ != null) { FX.pvZ = null; DOM.lock.__pvO = 0; DOM.lock.style.transformOrigin = ''; } DOM.lock.style.transform = 'translateX(' + (SHIFT * (1 - shiftK)).toFixed(2) + 'px)'; } }
    // a fine line leaves Tabit both ways round the endless loop, then the mark resolves over it
    var pr = eIOS(seg(t, TL.draw0, TL.draw1)), lineA = 1 - eIOS(seg(t, TL.settle0, TL.settle1));
    ['A', 'B'].forEach(function (k) {
      var ln = DOM['line' + k], hd = DOM['head' + k]; if (!ln) return;
      if (LEN[k] == null) LEN[k] = ln.getTotalLength();
      ln.style.strokeDashoffset = (1 - pr).toFixed(4); ln.style.opacity = (pr > 0 ? lineA : 0).toFixed(3);
      if (hd) {
        var p = ln.getPointAtLength(pr * LEN[k]);
        hd.setAttribute('transform', 'translate(' + p.x.toFixed(2) + ' ' + p.y.toFixed(2) + ') scale(2)');
        hd.style.opacity = (seg(t, TL.draw0, TL.draw0 + .12) * (1 - seg(t, TL.draw1 - .12, TL.draw1 + .1))).toFixed(3);
      }
    });
    if (!DOM.__masksSet) { DOM.__masksSet = true; (DOM.masks || []).forEach(function (m) { m.setAttribute('stroke-width', 60); }); }   // XR2.7.2: once, not every frame (each write re-rasterised the mask)
    // the mark comes into focus over its constellation, like a lens pulling focus
    var g = eIOS(seg(t, TL.grow0, TL.grow1));
    if (DOM.mark) { var mo = g.toFixed(3), mf = g < 1 ? 'blur(' + (4 * (1 - g)).toFixed(2) + 'px)' : 'none'; if (DOM.__mo !== mo) { DOM.__mo = mo; DOM.mark.style.opacity = mo; } if (DOM.__mf !== mf) { DOM.__mf = mf; DOM.mark.style.filter = mf; } }
    (DOM.extras || []).forEach(function (el) {
      var d = parseFloat(el.getAttribute('data-tabit-in')) || 6, e = eOQ(seg(t, d, d + 1.0));
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (12 * (1 - e)).toFixed(2) + 'px)';
    });
    (DOM.letters || []).forEach(function (el, k) {
      var x = seg(t, TL.word0 + k * .08, TL.word0 + .8 + k * .08), e = 1 - Math.pow(1 - x, 4);
      el.style.opacity = x > 0 ? '1' : '0'; el.style.transform = 'translateY(' + (236 * (1 - e)).toFixed(2) + 'px)';   // user units: one letter height
    });
  }

  return {
    render: render,
    setDpr: function (d) {   // XR2.7.2: the governor lowers the sky's pixel ratio when frames are being dropped
      d = Math.max(TABIT_PH ? Math.min(2, dpr0 * .7) : .75, Math.min(TABIT_PH ? 3 : 2, d));   /* XR3.1: on a phone the governor may take a 3x sky to 2x, a 2x sky to 1.4x, and no further (a blurred sky reads as a fault there) */ if (Math.abs(d - dpr) < .01) return dpr; dpr = d;
      renderer.setPixelRatio(dpr); renderer.setSize(W, H, false); ovCanvas.width = Math.round(W * dpr); ovCanvas.height = Math.round(H * dpr); starMat.uniforms.uPR.value = dpr; return dpr;
    },
    getDpr: function () { return dpr; },
    pointer: function (x, y) { pointer.x = clamp(x, -1, 1); pointer.y = clamp(y, -1, 1); },
    mouse: function (px, py, on) { if (on && LENS.mx < -900) { LENS.mx = px; LENS.my = py; } LENS.tx = px; LENS.ty = py; LENS.on = on ? 1 : 0; },
    dispose: function () { renderer.dispose(); },
    fx: FX,
    _vlines: function () {   // debug: the vertical (RA) grid lines on screen now, per level
      var ppu = FPX / cam.position.z, cx = cam.position.x, hw = 900 / ppu, raMin = RA0 - (cx + hw) / (GU * COSD), raMax = RA0 - (cx - hw) / (GU * COSD), out = [];
      GLEV.forEach(function (L, li) { var sp = L.d * GU * ppu; for (var k = Math.ceil(raMin / L.d); k * L.d <= raMax; k++) { var p = toScreen(new T3.Vector3(-(k * L.d - RA0) * GU * COSD, 0, 0)); out.push([li, +p[0].toFixed(2), +sp.toFixed(2), k * L.d]); } });
      return out;
    },
    _ori: function () { return Object.keys(ori).map(function (k) { return [k].concat(toScreen(ori[k].v)); }); },
    duration: 7.2
  };
}

// C-series: the hand-off from the B11 splash into the main page. S = virtual scroll in px:
// 0..HAND plays the transition (p = 0..1), anything beyond scrolls the page content.
var TABIT_HAND = 900;
function makeHandoff(hero, root, V) {
  function q(s) { return root.querySelector(s); }
  function qa(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
  function cl(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function sg(x, a, b) { return cl((x - a) / (b - a), 0, 1); }
  function lp(a, b, k) { return a + (b - a) * k; }
  function io(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }   // ease in-out cubic
  function oq(x) { return 1 - Math.pow(1 - x, 4); }                                     // ease out quart
  function E(p, a, b) { return io(sg(p, a, b)); }
  var lock = q('[data-tabit-lockup]'), mark = q('[data-tabit-mark]'), letters = qa('[data-tabit-letter]');
  var night = q('[data-tabit-night]'), page = q('[data-tabit-page]'), scroller = q('[data-tabit-scroll]'), nav = q('[data-tabit-nav]');
  var navBg = q('[data-tabit-navbg]'), navLogo = q('[data-tabit-navlogo]'), cue = q('[data-tabit-cue]'), cols = q('[data-tabit-cols]');
  var rise = qa('[data-tabit-rise]'), wm = q('[data-tabit-wm]'), idx = qa('[data-tabit-idx]');
  var QMAX = scroller ? Math.max(0, parseFloat(scroller.getAttribute('data-h')) - 720) : 0, QM0 = QMAX; QMAX += TB_PIN;   // XR2: extra scroll while the (Re)insurance page holds
  // the white lockup's box inside its own svg, in px (measured from the B11 end state)
  var VB = { x: -4, y: -4 }, K = parseFloat(lock.getAttribute('width')) / 1408;
  var BX0 = (-2.75 - VB.x) * K, BY0 = (-2.48 - VB.y) * K, BX1 = (1400 - VB.x) * K, BY1 = (388.88 - VB.y) * K;
  var L0 = parseFloat(lock.style.left), T0 = parseFloat(lock.style.top);
  var LOGO_W = 140;   // brand book: never under 120px wide on screen
  var touched = false;
  var sceneCv = q('[data-tabit-scene]'), scene = (sceneCv && typeof makeScene === 'function') ? makeScene(sceneCv, V) : null;
  var dotsBox = q('[data-tabit-dots]'), dotEls = qa('[data-tabit-dot]');
  var conProg = q('[data-tabit-conprog]'), CONP = [[38, 10], [22, 66], [40, 122], [26, 178], [36, 232], [24, 288]], CONL = [], CONC = [0], CONT = 0;
  for (var ci = 0; ci < CONP.length - 1; ci++) { var cdl = Math.hypot(CONP[ci + 1][0] - CONP[ci][0], CONP[ci + 1][1] - CONP[ci][1]); CONL.push(cdl); CONT += cdl; CONC.push(CONT); }
  var homeBtn = q('[data-tabit-home]');
  if (homeBtn) homeBtn.style.left = '562px';   // AS12.5: the logo docks in the centre of the nav, so its home button sits there too   // D.C.2.4: the docked logo is alive
  // D.C.2.5: the docked logo as fine pixels with springs. Only the part under the mouse breaks up and is pushed aside; each piece
  // springs back, so a pass of the mouse leaves a ripple through the letters. The real logo shows whenever nothing is disturbed.
  var PTR = { x: -999, y: -999, px: -999, py: -999 }, RP = null;
  function rippleInit(tx, ty, s1) {
    var d = FL2.dpr, M = 40, wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var gx0 = Math.floor(L0 + tx - M), gy0 = Math.floor(T0 + ty - M), gw = Math.ceil(s1 * wL + 2 * M), gh = Math.ceil(s1 * hL + 2 * M);
    var cv = document.createElement('canvas'); cv.width = gw * d; cv.height = gh * d; var g = cv.getContext('2d', { willReadFrequently: true }), k = d * s1 * K;
    g.setTransform(k, 0, 0, k, d * (L0 + tx - gx0) - k * VB.x, d * (T0 + ty - gy0) - k * VB.y); g.fillStyle = '#fff';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var px = g.getImageData(0, 0, cv.width, cv.height).data, P = [];
    for (var yy = 0; yy < cv.height; yy++) for (var xx = 0; xx < cv.width; xx++) { var a = px[(yy * cv.width + xx) * 4 + 3]; if (a > 6) P.push({ hx: xx, hy: yy, a: a, dx: 0, dy: 0, vx: 0, vy: 0, r: (xx * 7.13 + yy * 3.71) % 1 }); }
    RP = { P: P, A: px, cw: cv.width, ch: cv.height, gx0: gx0, gy0: gy0, gw: gw, gh: gh, d: d, img: FL2.c.createImageData(gw * d, gh * d), live: false };
  }
  // D.C.2.6: a soft 'star field' follows the mouse over the logo. Inside it the solid logo gives way to tiny twinkling Tabit
  // stars sitting exactly on the letters (nothing is pushed aside, no hole); when the mouse moves on they settle back into the logo.
  var SG = null;
  function starUpdate(tx, ty, s1, t) {
    if (!RP) rippleInit(tx, ty, s1);
    var d = RP.d, C = 3;
    if (!SG) { SG = { w: Math.ceil(RP.gw / C), h: Math.ceil(RP.gh / C) }; SG.v = new Float32Array(SG.w * SG.h);
      SG.K = []; var sd = 5; function rr() { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }
      var dens = 1 / (3 * d * d);   // F2.8: the splash logo gets exactly the same little knots as the docked logo   // F2.3: the big splash logo gets sparser stars, so the letters visibly break up
      RP.P.forEach(function (o) { if (o.a < 160 || rr() > dens) return; var an = rr() * 6.283;   // a dense set of stars laid over the letters
        SG.K.push({ x: RP.gx0 + o.hx / d, y: RP.gy0 + o.hy / d, dx: Math.cos(an), dy: Math.sin(an), ph: rr() * 6.283, r2: rr(), r3: rr(), sp: (rr() - .5) * 1.6 }); }); }
    var inside = PTR.x > RP.gx0 && PTR.x < RP.gx0 + RP.gw && PTR.y > RP.gy0 && PTR.y < RP.gy0 + RP.gh;
    var splash = s1 > .6, mx = PTR.x - RP.gx0, my = PTR.y - RP.gy0, R = 18, mxv = 0; if (splash) inside = inside && SPL.on === 1;   // F2.8: same patch, stars and drift as the docked logo; on the splash, nothing until the pointer is on the logo   // F2.6: a tight patch round the pointer, and nothing until it is on the logo
    for (var gy = 0; gy < SG.h; gy++) for (var gx = 0; gx < SG.w; gx++) {
      var i = gy * SG.w + gx, v = SG.v[i] * .93;
      if (inside) { var dd = Math.hypot(gx * C + C / 2 - mx, gy * C + C / 2 - my); if (dd < R) { var f = 1 - dd / R; v = Math.min(1, v + f * f * .5); } }
      SG.v[i] = v < .004 ? 0 : v; if (v > mxv) mxv = v;
    }
    if (mxv < .01) { lock.style.opacity = '1'; return; }
    lock.style.opacity = '0';
    function act(x, y) { if (splash) {   // F2.8: smooth between cells, so no blocky edge shows at the big size
        var fx = Math.max(0, Math.min(SG.w - 1.001, x / C - .5)), fy = Math.max(0, Math.min(SG.h - 1.001, y / C - .5)), ix = Math.floor(fx), iy = Math.floor(fy), ax = fx - ix, ay = fy - iy, i0 = iy * SG.w + ix, i1 = Math.min(SG.h - 1, iy + 1) * SG.w + ix, ix1 = Math.min(SG.w - 1, ix + 1) - ix;
        var w = (SG.v[i0] * (1 - ax) + SG.v[i0 + ix1] * ax) * (1 - ay) + (SG.v[i1] * (1 - ax) + SG.v[i1 + ix1] * ax) * ay; return w * w * (3 - 2 * w); }
       var gx = Math.min(SG.w - 1, Math.max(0, Math.floor(x / C))), gy = Math.min(SG.h - 1, Math.max(0, Math.floor(y / C))), v = SG.v[gy * SG.w + gx]; return v * v * (3 - 2 * v); }
    var fc = /(\d+)\D+(\d+)\D+(\d+)/.exec(mark.style.fill || '') || [0, 255, 255, 255], cr = +fc[1], cg = +fc[2], cb = +fc[3];
    var W2 = RP.gw * d, data = RP.img.data; data.fill(0);
    RP.P.forEach(function (o) {   // the solid logo, thinning to nothing where it has turned to stars
      var a = o.a * (1 - act(o.hx / d, o.hy / d)); if (a < 2) return;
      var q = (o.hy * W2 + o.hx) * 4; data[q] = cr; data[q + 1] = cg; data[q + 2] = cb; data[q + 3] = a;
    });
    var c = FL2.c; c.setTransform(1, 0, 0, 1, 0, 0); c.putImageData(RP.img, RP.gx0 * d, (RP.gy0 + FL2.oy) * d); c.setTransform(d, 0, 0, d, 0, d * FL2.oy);
    c.globalCompositeOperation = 'lighter';
    SG.K.forEach(function (o) {   // the stars, on the letters, each drifting a hair and twinkling
      var hx = o.x, hy = o.y, a = act(hx - RP.gx0, hy - RP.gy0); if (a < .02) return;
      var tw = .65 + .35 * Math.sin(t * 5.2 + o.ph), dr = a * (.6 + 1.6 * o.r2) * (1);
      var x = hx + o.dx * dr + Math.sin(t * 1.3 + o.ph) * .35 * a, y = hy + o.dy * dr + Math.cos(t * 1.1 + o.ph) * .35 * a, sz = (2.4 + 1.6 * o.r3) * (1);
      c.globalAlpha = Math.min(1, a * tw * .7); var gs = sz * 2.8; c.drawImage(FL2.gl, x - gs / 2, y - gs / 2, gs, gs);
      c.globalAlpha = Math.min(1, a * (.55 + .6 * tw)); c.save(); c.translate(x, y); c.rotate(o.sp * .4 * a); c.drawImage(FL2.kn, -sz / 2, -sz / 2, sz, sz); c.restore();
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  var STB = { RP: null, SG: null }, STS = { RP: null, SG: null };   // F2.3: one star field for the docked logo, one for the big splash logo
  var SPL = { on: 0 };
  // F2.7: the splash logo is cut into tiny pieces. Only the pieces the pointer actually touches burst off as small Tabit knots,
  // then drift home and turn back into solid logo. No disc, no fading grid: untouched pieces stay exactly as they are.

  function inkAt(R, x, y) {   // F2.6: is the pointer on the logo's ink (within 3px)?
    if (!R || !R.A) return false; var d = R.d, mx = Math.round((x - R.gx0) * d), my = Math.round((y - R.gy0) * d), tl = Math.round(3 * d);
    for (var oy = -tl; oy <= tl; oy += tl) for (var ox = -tl; ox <= tl; ox += tl) { var xx = mx + ox, yy = my + oy; if (xx < 0 || yy < 0 || xx >= R.cw || yy >= R.ch) continue; if (R.A[(yy * R.cw + xx) * 4 + 3] > 100) return true; }
    return false;
  }
  function starAt(st, tx, ty, s1, t) { var r0 = RP, g0 = SG; RP = st.RP; SG = st.SG; starUpdate(tx, ty, s1, t); st.RP = RP; st.SG = SG; RP = r0; SG = g0; }
  var vig = q('[data-tabit-vig]'), secs = qa('[data-tabit-sec]'), ins = qa('[data-tabit-in]'), plabels = qa('[data-tabit-plabel]'), logoParts = [mark].concat(letters), coordsEl = q('[data-tabit-coords]');
  // XR3.7: a page marker's label has its height kept for it (the browser says when it changes), so no frame asks for it. Asked for between
  // writes, as it was in every frame, it made the browser lay the page out again several times a frame.
  var railRO = window.ResizeObserver ? new ResizeObserver(function (es) { es.forEach(function (e) { e.target.__lh = e.target.offsetHeight; }); }) : null; if (railRO) plabels.forEach(function (lb) { railRO.observe(lb); });
  function railH(lb) { if (!railRO) return lb.offsetHeight; if (lb.__lh == null) lb.__lh = lb.offsetHeight; return lb.__lh; }   // a browser without the observer is asked each time, as before
  function mixHex(a, b, k) { var A = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], B = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)]; return 'rgb(' + Math.round(lp(A[0], B[0], k)) + ',' + Math.round(lp(A[1], B[1], k)) + ',' + Math.round(lp(A[2], B[2], k)) + ')'; }
  var navItems = qa('[data-tabit-navitem]'), lineIn = qa('[data-tabit-line-in]'), cards = qa('[data-tabit-card]'), wwd = q('[data-tabit-wwd]');
  function io5(x) { return x < .5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2; }   // ease in-out quint

  var DK = { tx: 0, ty: 0, s: 1 };
  var DOCK_Y = 44;   // DD2-DD4: the logo docks at the bottom of the screen, not in the nav
  var AI_ON = typeof TABIT_AI !== 'undefined' && !!TABIT_AI;   // D.C.2.3: DD1.3's AI slide on page 2
  // DD series (DD1.1 to DD5.1): the A and I slide out of TABIT and become page 2's title. They are tied to the scroll,
  // never on a timer: scroll back and they slide back. Both letters move as one pair on the same curve, with no fall,
  // bounce, wobble or flip. Once they reach the title line they are locked to page 2 and travel with it.
  //   ddm  DD1.1 Meet halfway:   nav logo; the pair slides down, meets the title line rising, and is carried up into place.  Gaps, refilled once landed.
  //   ddr  DD2.1 Round trip:     logo at the bottom; the title line rises to the logo and picks the pair up; moving on to page 3 they let go and slide home.  Gaps until page 3.
  //   ddp  DD3.1 Waiting:        nav logo; the pair slides straight to the title spot and waits there while page 2 rises to meet it.  Logo always whole.
  //   ddb  DD4.1 Along the line: logo at the bottom; the pair steps up out of the word, slides left to the column, then the title line lifts it into place.  Gaps, refilled once landed.
  //   dds  DD5.1 Thread:         nav logo docked left, over page 2's column; the pair drops on a fine thread from its empty slot, which lets go once landed.  Gaps, refilled once landed.
  var aiOv = null, aiLet = [], aiClip = null, aiThr = [];
  var AIL = [{ i: 1, cx: 826.3, cy: 193.3, tx: 184.2 }, { i: 3, cx: 1181.35, cy: 193.3, tx: 281.8 }];
  AIL.forEach(function (L) { L.tx0 = L.tx; });
  var AI_CAP = 132, AI_TOP = 218, aiTick = 0, aiSecB = null;   // the title's cap height and top on page 2, px
  if (AI_ON && lock && lock.parentNode) {
    var NS = 'http://www.w3.org/2000/svg';
    aiOv = document.createElementNS(NS, 'svg');
    aiOv.setAttribute('width', '1280'); aiOv.setAttribute('height', '720'); aiOv.setAttribute('viewBox', '0 0 1280 720'); aiOv.setAttribute('aria-hidden', 'true');
    aiOv.style.cssText = 'position: absolute; left: 0; top: 0; overflow: visible; pointer-events: none; display: none';
    var defs = document.createElementNS(NS, 'defs'), cp = document.createElementNS(NS, 'clipPath'); cp.setAttribute('id', 'tabitAiClip');
    aiClip = document.createElementNS(NS, 'rect'); aiClip.setAttribute('x', '-330'); aiClip.setAttribute('y', '0'); aiClip.setAttribute('width', '1940'); aiClip.setAttribute('height', '720');
    cp.appendChild(aiClip); defs.appendChild(cp); aiOv.appendChild(defs);
    AIL.forEach(function () {
      var ln = document.createElementNS(NS, 'line'); ln.setAttribute('stroke', 'rgba(184,192,212,.55)'); ln.setAttribute('stroke-width', '1'); ln.style.opacity = '0';
      aiOv.appendChild(ln); aiThr.push(ln);
    });
    var wrap = document.createElementNS(NS, 'g'); wrap.setAttribute('clip-path', 'url(#tabitAiClip)'); aiOv.appendChild(wrap);
    AIL.forEach(function (L) {
      var g = document.createElementNS(NS, 'g'), pth = document.createElementNS(NS, 'path');
      pth.setAttribute('d', letters[L.i].getAttribute('d')); pth.setAttribute('fill-rule', 'evenodd'); pth.setAttribute('fill', '#FFFFFF');
      g.appendChild(pth); wrap.appendChild(g); aiLet.push({ g: g, p: pth });
    });
    lock.parentNode.appendChild(aiOv);
  }
  function ss(x) { return x * x * (3 - 2 * x); }
  // D.C.2.3.1: the A and I do not slide. Like the splash, they dissolve into tiny Tabit knots that stream down and
  // re-form as page 2's title; moving on, the title dissolves again and the knots stream back into the logo.
  // Tied to the scroll throughout, so scrolling back plays it in reverse.
  var AI_STARS = AI_ON && TABIT_AI === 'stars', ST = null;
  function starsInit() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2), P = [];
    var seed = 29; function rn() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    AIL.forEach(function (L, j) {
      var cv0 = document.createElement('canvas'); cv0.width = 1600; cv0.height = 400; var g = cv0.getContext('2d');
      g.fillStyle = '#fff'; g.fill(new Path2D(letters[L.i].getAttribute('d')), 'evenodd');   // the letter in its own units, 1:1
      var d = g.getImageData(0, 0, 1600, 400).data, step = 8;
      for (var y = 60; y < 340; y += step) for (var x = 680; x < 1420; x += step) {
        var xx = Math.min(1599, Math.round(x + rn() * step)), yy = Math.min(399, Math.round(y + rn() * step));
        if (d[(yy * 1600 + xx) * 4 + 3] < 128) continue;
        var a = rn() * 6.283;
        P.push({ j: j, ux: xx - L.cx, uy: yy - L.cy, r: rn(), r2: rn(), r3: rn(), dx: Math.cos(a), dy: Math.sin(a), ph: rn() * 6.283, s0: 6 + rn() * 3 });
      }
    });
    var kn = document.createElement('canvas'); kn.width = kn.height = 64; var kg = kn.getContext('2d'), ks = 60 / 501.3;
    kg.setTransform(ks, 0, 0, ks, 2 + 2.75 * ks, 32 - 193.2 * ks); kg.fillStyle = '#FBF9F4'; kg.fill(new Path2D(mark.getAttribute('d')), 'evenodd');
    var gl = document.createElement('canvas'); gl.width = gl.height = 64; var gg = gl.getContext('2d'), rg = gg.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, 'rgba(250,248,242,.95)'); rg.addColorStop(.18, 'rgba(251,249,244,.35)'); rg.addColorStop(.5, 'rgba(220,226,246,.08)'); rg.addColorStop(1, 'rgba(220,226,246,0)'); gg.fillStyle = rg; gg.fillRect(0, 0, 64, 64);
    var cv = document.createElement('canvas'); cv.width = 1940 * dpr; cv.height = 720 * dpr; cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;left:-330px;top:0;width:1940px;height:720px;pointer-events:none;z-index:7';
    lock.parentNode.appendChild(cv);
    ST = { P: P, kn: kn, gl: gl, c: cv.getContext('2d'), dpr: dpr, dpr0: dpr, ox: 330, oy: 0, w: 1940, h: 720, ink: false, vis: false };
    cv.style.visibility = 'hidden';
    // XR3.6: this canvas lies over the whole stage and is only drawn on around the AI page. It is cleared only when something was drawn on it,
    // and taken out of the page while it is empty (it was cleared, and so laid into the picture again, on every frame of every page)
    ['fill', 'stroke', 'drawImage', 'fillRect', 'fillText'].forEach(function (m) { var c0 = ST.c, f = c0[m]; c0[m] = function () { if (!ST.ink) { ST.ink = true; if (!ST.vis) { ST.vis = true; cv.style.visibility = ''; } } return f.apply(c0, arguments); }; });
  }
  function stClear() {   // the start of a frame on the figure's canvas
    var c = ST.c;
    if (ST.ink) { c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, c.canvas.width, c.canvas.height); ST.ink = false; }
    else if (ST.vis) { ST.vis = false; c.canvas.style.visibility = 'hidden'; }
  }
  // XR2.9.20: the canvas covers the screen, whatever its size. It was a fixed 1940 x 720 box from when the stage stopped at 1940 units: on wider
  // windows it cut the figure and the big A at its left edge, and on taller ones it cut the figure's foot and the knots leaving the logo.
  // The pixel count never exceeds what the fixed canvas had at 2x, so very large windows cost no more to clear.
  function stFit() {
    var ox = Math.max(0, Math.ceil(TABIT_OX / 64) * 64), oy = Math.max(0, Math.ceil(TABIT_OY / 64) * 64), w = 1280 + 2 * ox, h = Math.ceil((oy + Math.max(720, TABIT_H) - Math.max(0, TABIT_OY)) / 64) * 64;   // in 64-unit steps (the surplus is off screen), so a window drag does not reallocate the canvas on every frame
    if (ST.w === w && ST.h === h && ST.ox === ox && ST.oy === oy) return;
    var d = Math.min(ST.dpr0, Math.sqrt(1940 * 720 * 4 / (w * h))), cv = ST.c.canvas;
    ST.w = w; ST.h = h; ST.ox = ox; ST.oy = oy; ST.dpr = d;
    cv.width = Math.round(w * d); cv.height = Math.round(h * d); cv.style.left = (-ox) + 'px'; cv.style.top = (-oy) + 'px'; cv.style.width = w + 'px'; cv.style.height = h + 'px';
  }
  var AIF = { w: 0, h: 0 };
  function aiFit() {   // the settled title's clip box: from the top of the content box to the foot of the screen, edge to edge
    var ox = Math.max(0, Math.ceil(TABIT_OX)), w = 1280 + 2 * ox, h = Math.max(720, TABIT_H - Math.max(0, TABIT_OY));
    if (AIF.w === w && AIF.h === h) return; AIF.w = w; AIF.h = h;
    aiClip.setAttribute('x', String(-ox)); aiClip.setAttribute('width', String(w)); aiClip.setAttribute('height', String(h));
  }
  // one knot's path from (sx, sy) to (ex, ey): a small burst outward, then a curved stream to its place
  function stPath(o, sx, sy, ex, ey, k, down) {
    var b = o.r * .28, e = oq(sg(k, b, b + .14)), f = io(sg(k, b + .08, b + .62 + o.r2 * .1));
    var burst = (10 + 22 * o.r2) * e * (1 - f), ax = sx + o.dx * burst, ay = sy + o.dy * burst;
    var c1x = ax + (o.r3 - .5) * 120, c1y = ay + (down ? 70 : -70) + (o.r - .5) * 60;
    var c2x = ex + (o.r2 - .5) * 160, c2y = ey + (down ? -1 : 1) * 90 * (.4 + o.r3);
    var u = 1 - f;
    return [u * u * u * ax + 3 * u * u * f * c1x + 3 * u * f * f * c2x + f * f * f * ex, u * u * u * ay + 3 * u * u * f * c1y + 3 * u * f * f * c2y + f * f * f * ey, sg(k, b, b + .03), f];
  }
  function TB_AIPT(j) {   // XR2.5.1: a point inside the A or I of the docked logo, for figure star j (the AI figure comes out of, and goes back into, the A and I)
    var o = ST && ST.P.length ? ST.P[(j * 37) % ST.P.length] : { j: j % 2, ux: 0, uy: 0 }, L = AIL[o.j], s0 = DK.s * K;
    return [L0 + DK.tx + DK.s * (L.cx - VB.x) * K + o.ux * s0, T0 + DK.ty + DK.s * (L.cy - VB.y) * K + o.uy * s0];
  }
  TB_AIPTF = TB_AIPT; TB_STF = function () { if (!ST && AI_STARS) starsInit(); return ST; };
  function starsUpdate(yc, Hy, scT, s0) {
    if (!ST) starsInit();
    stFit(); var c = ST.c; stClear(); c.setTransform(ST.dpr, 0, 0, ST.dpr, ST.ox * ST.dpr, ST.oy * ST.dpr);
    var kOut = sg(yc, 40, 660), kBack = sg(yc, 735, 1120), tn = performance.now() / 1000;
    var titleA = sg(kOut, .72, .95) * (1 - sg(kBack, .02, .16));
    var logoA = cl(1 - sg(kOut, .01, .1) + sg(kBack, .78, .96), 0, 1);
    var slot = AIL.map(function (L, j) {
      var X0 = L0 + DK.tx + DK.s * (L.cx - VB.x) * K, Y0 = T0 + DK.ty + DK.s * (L.cy - VB.y) * K;
      aiLet[j].g.setAttribute('transform', 'translate(' + L.tx.toFixed(2) + ',' + Hy.toFixed(2) + ') scale(' + scT.toFixed(4) + ') translate(' + (-L.cx) + ',' + (-L.cy) + ')');
      aiLet[j].g.style.opacity = titleA.toFixed(3); aiLet[j].p.setAttribute('fill', '#FBF9F4');
      letters[L.i].style.fillOpacity = (.3 + .7 * logoA).toFixed(3);   // AS12.4: the A and I stay in the logo, dimmed, while they are away
      return [X0, Y0];
    });
    var back = kBack > 0, k = back ? kBack : kOut;
    if (TB_KQ.length) {   // XR2.5.7: the AI figure's knots, drawn here with the letters' own sprites so the two are one material
      c.globalCompositeOperation = 'lighter';
      for (var q9 = 0; q9 < TB_KQ.length; q9++) {
        var K9 = TB_KQ[q9], kx = K9[0], ky = K9[1], ksz = K9[2], ka = K9[3], kg = K9[4], kt = K9[5];
        if (kt) { var pv9 = [kx, ky]; c.strokeStyle = 'rgb(168,130,58)'; c.lineWidth = Math.max(.5, ksz * .15);
          for (var jt9 = 0; jt9 < kt.length; jt9++) { var qt9 = kt[jt9]; c.globalAlpha = Math.min(1, ka * .3 * (1 - (jt9 + 1) / 5) * 1.6); c.beginPath(); c.moveTo(pv9[0], pv9[1]); c.lineTo(qt9[0], qt9[1]); c.stroke(); pv9 = qt9; } }
        c.globalAlpha = Math.min(1, ka * .5 + kg * .8); var gs9 = ksz * (2.4 + 2 * kg); c.drawImage(ST.gl, kx - gs9 / 2, ky - gs9 / 2, gs9, gs9);
        c.globalAlpha = ka; c.drawImage(ST.kn, kx - ksz / 2, ky - ksz / 2, ksz, ksz);
      }
      c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; TB_KQ.length = 0;
    }
    if (k <= 0 || k >= 1) return;
    c.globalCompositeOperation = 'lighter';
    ST.P.forEach(function (o) {
      var L = AIL[o.j], lx = slot[o.j][0] + o.ux * s0, ly = slot[o.j][1] + o.uy * s0, tx = L.tx + o.ux * scT, ty = Hy + o.uy * scT;
      var q = back ? stPath(o, tx, ty, lx, ly, k, false) : stPath(o, lx, ly, tx, ty, k, true), f = q[3];
      var land = sg(f, .9, 1), glint = Math.sin(Math.PI * sg(f, .82, 1));
      var a = q[2] * (1 - land) * (.78 + .22 * Math.sin(tn * 2.6 + o.ph));
      if (a <= .01 && glint <= .01) return;
      var sz = back ? lp(o.s0, 2.4, f) : lp(2.4, o.s0, f);
      if (f > .02 && f < .96) {   // a short tapering tail along the path just travelled
        var prev = q; for (var jj = 1; jj <= 4; jj++) { var qj = back ? stPath(o, tx, ty, lx, ly, Math.max(0, k - .01 * jj), false) : stPath(o, lx, ly, tx, ty, Math.max(0, k - .01 * jj), true);
          c.globalAlpha = a * .3 * (1 - jj / 5) * (1.6); c.strokeStyle = 'rgb(168,130,58)'; c.lineWidth = Math.max(.5, sz * .15); c.beginPath(); c.moveTo(prev[0], prev[1]); c.lineTo(qj[0], qj[1]); c.stroke(); prev = qj; } }
      c.globalAlpha = Math.min(1, a * .5 + glint * .8); var gs = sz * (2.4 + 2 * glint); c.drawImage(ST.gl, q[0] - gs / 2, q[1] - gs / 2, gs, gs);
      c.globalAlpha = a; c.drawImage(ST.kn, q[0] - sz / 2, q[1] - sz / 2, sz, sz);
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  function aiUpdate(S, yc, ink) {
    if (!aiOv) return;
    AI_CAP = 176 * TABIT_TS * tbLerp(1, tbLerp(.7, .95, TABIT_HF), TABIT_ST); AI_TOP = TABIT_SUBJ.cy - AI_CAP / 2;
    if (TABIT_PH && TABIT_PHL) { AI_CAP = TABIT_PHL.ai.cap; AI_TOP = TABIT_PHL.ai.cy - AI_CAP / 2; }   // XR3.0
    else if (TABIT_ST > .5) {   // XR2.8.2: stacked, the figure sits under the AI page's copy, never on it
      aiTick++; if (aiSecB == null || aiTick % 60 === 1) { var s3 = document.querySelector('[data-tabit-sec="3"]'), b3 = s3 && s3.firstElementChild; aiSecB = b3 ? 88 - TABIT_LIFT + b3.offsetHeight * (parseFloat(s3.style.scale) || 1) : 0; }
      var aiT2 = Math.max(AI_TOP, aiSecB + 36), aiLim = 720 + TABIT_OY - 96; if (aiT2 + AI_CAP > aiLim) AI_CAP = Math.max(60, aiLim - aiT2); AI_TOP = aiT2; }
    AIL.forEach(function (L) { L.tx = TB_AIFX() + (L.tx0 - 233) * AI_CAP / 132; }); TABIT_AIC = AI_TOP + AI_CAP / 2 - (TABIT_PH ? Math.max(0, yc - 720) : 0); /* XR3.0: on a phone the figure leaves with its page, as the large AI does, so the copy under it never rides over it */   // the title follows the copy column
    if (S < TABIT_HAND) { if (ST) stClear(); aiOv.style.display = 'none'; AIL.forEach(function (L) { letters[L.i].style.fillOpacity = ''; }); return; }
    aiOv.style.display = ''; aiFit();
    var scT = AI_CAP / 224, s0 = DK.s * K, HR = AI_TOP + AI_CAP / 2, Hy = TB_AIL && yc <= 720 ? HR : HR + 720 - yc;   // XR2.3.13: while arriving, the AI's place is fixed over the figure; it scrolls away with the page after   // Hy: where page 2's title line is on screen now
    aiClip.setAttribute('y', '0');   // past page 2 the title slides under the nav with the rest of the text
    starsUpdate(yc, Hy, scT, s0); return;
  }
  function dock(e, mode, left, cxT, wT) {
    var F0 = hero.fx, pv = TABIT_PH && F0.pvZ != null;   // XR3.0: on a phone the lockup starts from where the phone's view of the intro shows it
    var w = BX1 - BX0, h = BY1 - BY0, s1 = (wT || LOGO_W) / w, s = lp(pv ? F0.pvZ : 1, s1, e);
    var tx1 = mode === 'centre' ? (cxT || 640) - L0 - s1 * (BX0 + BX1) / 2 : left - L0 - s1 * BX0;
    var ty1 = DOCK_Y + (TABIT_PH ? TABIT_PHT : 0) - TABIT_OY - h * s1 / 2 - T0 - s1 * BY0;   // XR2.8.1: the nav is at the top of the screen, the lockup lives in the content box
    var txe = pv ? lp(F0.pvA, tx1, e) : tx1 * e, tye = pv ? lp(F0.pvB, ty1, e) : ty1 * e;
    DK.tx = txe; DK.ty = tye; DK.s = s;
    lock.style.transformOrigin = '0 0';
    lock.style.transform = 'translate(' + txe.toFixed(2) + 'px,' + tye.toFixed(2) + 'px) scale(' + s.toFixed(4) + ')';
  }
  // D.C.2.2.1: the logo breaks into hundreds of tiny Tabit knots that streak like stars into the top-left corner and
  // reassemble there into the docked logo (each knot returns to its own place in the lockup; the real logo is never altered)
  // D.C.2.2.2: the polished flight. The word unravels from the knot to the final T into ~700 tiny knots set evenly over its
  // shape; each launches up and away on a curved path with a tapering tail, settles into the corner with a glint, and the
  // real logo is revealed left to right in step with the landings. Crisp on high-density screens; reduced motion gets the glide.
  var FL2 = null, RM = false;
  try { RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function fly2Init() {
    var wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var sc = document.createElement('canvas'); sc.width = Math.ceil(wL); sc.height = Math.ceil(hL); var g = sc.getContext('2d', { willReadFrequently: true });   // XR2.9.1: CPU canvas, no GPU readback
    g.setTransform(K, 0, 0, K, -VB.x * K, -VB.y * K); g.fillStyle = '#fff';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var px = g.getImageData(0, 0, sc.width, sc.height).data;
    var seed = 11; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var P = [], step = 7;
    for (var gy = 0; gy < sc.height; gy += step) for (var gx = 0; gx < sc.width; gx += step) {
      var xx = Math.min(sc.width - 1, Math.round(gx + rnd() * step)), yy = Math.min(sc.height - 1, Math.round(gy + rnd() * step));
      if (px[(yy * sc.width + xx) * 4 + 3] < 128) continue;
      var a = rnd() * 6.283, xn = xx / sc.width;
      P.push({ lx: xx, ly: yy, xn: xn, r: rnd(), r2: rnd(), r3: rnd(), dx: Math.cos(a), dy: Math.sin(a), ph: rnd() * 6.283, s0: 8 + rnd() * 3.5 });
    }
    P.forEach(function (o) { o.b = .04 + (o.xn * .55 + o.r * .12) * .22; o.dur = .3 + o.r2 * .1; o.f0 = o.b + .045; o.arr = o.f0 + o.dur; });
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var kn = document.createElement('canvas'); kn.width = kn.height = 64; var kg = kn.getContext('2d'), ks = 60 / 501.3;
    kg.setTransform(ks, 0, 0, ks, 2 + 2.75 * ks, 32 - 193.2 * ks); kg.fillStyle = '#FBF9F4'; kg.fill(new Path2D(mark.getAttribute('d')), 'evenodd');
    var gl = document.createElement('canvas'); gl.width = gl.height = 64; var gg = gl.getContext('2d'), rg = gg.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, 'rgba(250,248,242,.95)'); rg.addColorStop(.18, 'rgba(251,249,244,.35)'); rg.addColorStop(.5, 'rgba(220,226,246,.08)'); rg.addColorStop(1, 'rgba(220,226,246,0)'); gg.fillStyle = rg; gg.fillRect(0, 0, 64, 64);
    var cv = document.createElement('canvas'); cv.width = 1280 * dpr; cv.height = 720 * dpr; cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;left:0;top:0;width:1280px;height:720px;pointer-events:none;z-index:7';
    lock.parentNode.appendChild(cv);
    FL2 = { P: P, kn: kn, gl: gl, cv: cv, c: cv.getContext('2d'), dpr: dpr, oy: 0 };
  }
  // XR2.9.20: the knots' canvas runs up to the top of the screen. On a stage taller than 720 the nav, and the docked logo in it, sit above the
  // content box, where the fixed 1280 x 720 canvas ended: the knots vanished on their way to the nav and the hovered logo was cut off.
  function fl2Begin() {
    var d = FL2.dpr, oy = Math.max(0, Math.ceil(TABIT_OY / 64) * 64), c = FL2.c;   // in 64-unit steps (the surplus is above the screen), so a window drag does not reallocate the canvas on every frame
    if (FL2.oy !== oy) { FL2.oy = oy; FL2.cv.height = Math.round((720 + oy) * d); FL2.cv.style.top = (-oy) + 'px'; FL2.cv.style.height = (720 + oy) + 'px'; }
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, FL2.cv.width, FL2.cv.height); c.setTransform(d, 0, 0, d, 0, d * oy); return c;
  }
  // D.C.2.2.3: the logo pulls apart all at once (no sweep), bursts outward into a cloud of tiny knots, then the cloud swipes
  // up and curls into the top-left corner, where the knots settle and the real logo fades in evenly as they land.
  var FL3 = false;
  function fly3Update(p, t) {
    if (RM || TABIT_PH) { var hb9 = p > .9 ? 'block' : 'none'; dock(io5(sg(p, .04, .78)), 'centre'); if (homeBtn && homeBtn.style.display !== hb9) homeBtn.style.display = hb9;
      if (!lock.__ph9) { lock.__ph9 = 1; lock.style.opacity = ''; lock.style.webkitMaskImage = lock.style.maskImage = ''; if (FL2) { FL2.c.setTransform(1, 0, 0, 1, 0, 0); FL2.c.clearRect(0, 0, FL2.cv.width, FL2.cv.height); } } return; }
    lock.__ph9 = 0;   // XR3.0: a phone: the lockup itself glides up into the bar and shrinks to its docked size, on the scroll (and the docked logo still takes you back to the top)
    if (!FL2) fly2Init();
    if (!FL3) { var cxL = parseFloat(lock.getAttribute('width')) / 2, cyL = parseFloat(lock.getAttribute('height')) / 2;
      FL2.P.forEach(function (o) { o.b = .035 + o.r * .03; o.f0 = .24 + o.r2 * .12; o.arr = o.f0 + .26 + o.r * .08; o.ox = o.lx - cxL; o.oy = o.ly - cyL;
        o.sp = (o.r3 - .5) * 1.6; o.burst = 14 + 30 * o.r2; }); FL3 = true; }
    var c = fl2Begin();
    dock(1, 'centre'); var tx = DK.tx, ty = DK.ty, s1 = DK.s;
    var cx0 = L0 + parseFloat(lock.getAttribute('width')) / 2, cy0 = T0 + parseFloat(lock.getAttribute('height')) / 2;
    if (p < .45) { dock(0, 'centre'); lock.style.opacity = (1 - io(sg(p, .045, .13))).toFixed(3); }
    else lock.style.opacity = io(sg(p, .56, .72)).toFixed(3);
    lock.style.webkitMaskImage = lock.style.maskImage = '';
    if (homeBtn) homeBtn.style.display = p > .9 ? 'block' : 'none';
    if (p >= .8) {   // D.C.2.6: where the mouse is, the logo turns to stars in place
      if (STS.RP && (STS.tx !== tx || STS.ty !== ty || STS.s1 !== s1)) { STS.RP = null; STS.SG = null; }   // XR2.9.20: the dock moved (the window changed size), so the star field is rebuilt where the logo now is; it used to stay at the old place and drew the logo there
      STS.tx = tx; STS.ty = ty; STS.s1 = s1;
      if (!STS.RP) { var bx9 = L0 + tx, by9 = T0 + ty, bw9 = s1 * parseFloat(lock.getAttribute('width')), bh9 = s1 * parseFloat(lock.getAttribute('height'));   // built when the pointer first comes near, not on every frame of a window drag
        if (!(PTR.x > bx9 - 40 && PTR.x < bx9 + bw9 + 40 && PTR.y > by9 - 40 && PTR.y < by9 + bh9 + 40)) { lock.style.opacity = '1'; return; } }
      starAt(STS, tx, ty, s1, t); return; }
    if (p <= .03) return;
    function pos(o, pp) {
      var e = oq(sg(pp, o.b, .3)), fl = .35 * sg(pp, .3, o.f0);   // the burst, then a slow outward float until it leaves
      var k = 1 + .5 * e + .06 * fl, ax = cx0 + o.ox * k + o.dx * o.burst * (e + .3 * fl), ay = cy0 + o.oy * k + o.dy * o.burst * (e + .3 * fl);
      var fr = sg(pp, o.f0, o.arr); if (fr <= 0) return [ax, ay, 0];
      var ex = L0 + tx + s1 * o.lx, ey = T0 + ty + s1 * o.ly, f = io(fr);
      var c1x = ax + (o.r - .5) * 80, c1y = ay - 170 - 150 * o.r3, c2x = ex + 60 + 150 * o.r2, c2y = ey + 50 + 70 * o.r;   // up first, then in from the right
      var u1 = 1 - f; return [u1 * u1 * u1 * ax + 3 * u1 * u1 * f * c1x + 3 * u1 * f * f * c2x + f * f * f * ex, u1 * u1 * u1 * ay + 3 * u1 * u1 * f * c1y + 3 * u1 * f * f * c2y + f * f * f * ey, fr];
    }
    c.globalCompositeOperation = 'lighter';
    FL2.P.forEach(function (o) {
      if (p < o.b) return;
      var q0 = pos(o, p), fr = q0[2], f = io(fr);
      var land = sg(p, o.arr, o.arr + .05), glint = Math.sin(Math.PI * sg(p, o.arr - .012, o.arr + .03)), flash = Math.sin(Math.PI * sg(p, o.b, o.b + .05));
      var a = sg(p, o.b, o.b + .015) * (1 - land) * (.78 + .22 * Math.sin(t * 2.6 + o.ph)) * (1 + .25 * Math.sin(Math.PI * fr));
      if (a <= .01 && glint <= .01) return;
      var sz = lp(o.s0, o.s0 * .3, f);
      if (p - o.b > .02) {   // a tapering tail along the path just travelled (short in the burst, longer in flight)
        var prev = q0; for (var j = 1; j <= 5; j++) { var qj = pos(o, Math.max(o.b, p - .008 * j)); c.globalAlpha = a * .3 * (1 - j / 6);
          c.globalAlpha *= 1.6; c.strokeStyle = 'rgb(168,130,58)'; c.lineWidth = Math.max(.5, sz * .15 * (1 - j / 7)); c.beginPath(); c.moveTo(prev[0], prev[1]); c.lineTo(qj[0], qj[1]); c.stroke(); prev = qj; } }
      c.globalAlpha = Math.min(1, a * .5 + glint * .9 + flash * .5); var gs = sz * (2.4 + 2.2 * Math.max(glint, flash)); c.drawImage(FL2.gl, q0[0] - gs / 2, q0[1] - gs / 2, gs, gs);
      var rot = o.sp * (oq(sg(p, o.b, .3)) * .6 + f * 1.4) * (1 - land * 0);   // each knot turns a little as it goes, and lands square
      rot *= 1 - sg(fr, .8, 1);
      c.globalAlpha = a; c.save(); c.translate(q0[0], q0[1]); c.rotate(rot); c.drawImage(FL2.kn, -sz / 2, -sz / 2, sz, sz); c.restore();
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  function reset() {
    var F = hero.fx; F.oriName = 1; F.sky = 1; F.ori = 1; F.grid = 0; F.snap = 0; F.gridLine = 1; F.push = 0; F.camY = 0; F.lens = 1; F.phk = 0; F.phy = 0; F.hLine = 1; F.colsOnly = 0;
    if (night) night.style.transform = 'none';
    if (page) { page.style.clipPath = 'none'; page.style.pointerEvents = 'none'; }
    rise.forEach(function (el) { el.style.opacity = 0; });
    if (nav) nav.style.opacity = 0; if (navBg) navBg.style.opacity = 0; if (navLogo) navLogo.style.opacity = 0;
    if (wm) wm.style.opacity = 0; if (cols) cols.style.opacity = 0; idx.forEach(function (el) { el.style.opacity = 0; });
    if (scroller) scroller.style.transform = 'none';
    if (scene) { var db0 = q('[data-tabit-dots]'); if (db0) db0.style.opacity = 0; scene.draw(0, 0); logoParts.forEach(function (el) { if (el) el.style.fill = ''; }); dayW = null; if (vig) vig.style.opacity = 1; secs.forEach(function (el) { el.style.opacity = 0; }); }
    if (!(TABIT_PH && hero.fx.pvZ != null)) { lock.style.transformOrigin = ''; lock.__pvO = 0; }   // XR3.6: on a phone the hero has already placed the lockup for this frame, from its top left corner (drawDom): clearing the origin here drew the lockup one frame out of place whenever the page came back to the splash
    root.style.cursor = 'none';
    if (homeBtn) homeBtn.style.display = 'none';
    if (FL2) { FL2.c.setTransform(1, 0, 0, 1, 0, 0); FL2.c.clearRect(0, 0, FL2.cv.width, FL2.cv.height); lock.style.webkitMaskImage = lock.style.maskImage = ''; lock.style.transform = ''; lock.style.opacity = ''; }
  }

  function update(t, S) {
    var F = hero.fx;
    if (cue) { var ca = sg(t, 7.3, 7.9) * (1 - sg(S, 0, 140)); cue.style.opacity = ca.toFixed(3); cue.style.pointerEvents = ca > .1 ? 'auto' : 'none'; }
    if (S < .5) { if (touched) { reset(); touched = false; }
      if (V === 'dc17' && t >= TABIT_END && !RM && !TABIT_PH) {   // F2.8: the splash logo turns to little knots where the pointer touches it, like the docked logo, and the black hole ends right there
        if (!FL2) fly2Init();
        var wl = parseFloat(lock.getAttribute('width')), hl = parseFloat(lock.getAttribute('height')), inBox = PTR.x > L0 && PTR.x < L0 + wl && PTR.y > T0 && PTR.y < T0 + hl;
        if (inkAt(STB.RP, PTR.x, PTR.y)) SPL.on = 1; else if (!inBox) SPL.on = 0;   // on: touching the letters or the knot; off again once it leaves the logo
        F.inkHit = SPL.on; root.style.cursor = SPL.on ? 'default' : 'none';
        fl2Begin(); starAt(STB, 0, 0, 1, t);
      } else F.inkHit = undefined;
      return; }
    touched = true;
    var p = cl(S / TABIT_HAND, 0, 1), y = cl(S - TABIT_HAND, 0, QMAX + TABIT_XQ);
    root.style.cursor = p > .12 ? 'default' : 'none'; F.lens = p > .12 ? 0 : 1; F.phk = TABIT_PH ? 0 : io(sg(p, 0, .3));   // XR3.1: on a phone the splash's view holds: the whole sky moves up with the scroll instead (F.camY, and the site's sky's drift), from the first touch
    if (page) page.style.pointerEvents = p > .6 ? 'auto' : 'none';
    if (scroller) scroller.style.transform = 'translateY(' + (-y).toFixed(1) + 'px)';

    {      // D2: D1 with finesse: a calmer glide to centre, nav opening out from the logo, lines rising from their baselines, cards met as you scroll
      F.sky = lp(1, .8, E(p, 0, .7)); F.oriName = 1 - E(p, 0, .3);   // D14: the drawing stays, its label goes as the hand-off begins
      F.ori = 1; F.camY = -(70 * E(p, 0, 1) + .32 * y);
      if (TABIT_PH) F.phy = -TB_PHGL * (1 - Math.pow(1 - p, 2));   // XR3.1: and the splash's own (3D) sky slides up with it, as one
      fly3Update(p, t);   // D.C.2.2: the logo docks left in the nav; D.C.2.2.1: it flies there as stars
      if (nav) { nav.style.opacity = p > .3 ? '1' : '0'; nav.style.transform = 'none'; }
      if (navBg) navBg.style.opacity = sg(y, 10, 120).toFixed(3);
      navItems.forEach(function (el) { var r = +el.getAttribute('data-tabit-navitem'), e = oq(sg(p, .56 + r * .07, .84 + r * .07)); el.style.opacity = e.toFixed(3); el.style.pointerEvents = e > .5 ? 'auto' : 'none'; el.style.transform = 'translateY(' + (-8 * (1 - e)).toFixed(2) + 'px)'; el.style.display = 'inline-block'; });
      rise.forEach(function (el) {
        var d = +el.getAttribute('data-tabit-rise');
        if (d === 1) { el.style.opacity = p > .4 ? '1' : '0'; el.style.transform = 'none'; return; }
        var e = oq(sg(p, .46 + d * .09, .82 + d * .09)); el.style.opacity = e.toFixed(3);
        el.style.transform = 'translateY(' + (d === 0 ? 0 : 18 * (1 - e)).toFixed(2) + 'px)';
        if (d === 0) el.style.letterSpacing = lp(.62, .26, io(sg(p, .46, 1))).toFixed(3) + 'em';
      });
      lineIn.forEach(function (el, i) { var e = io(sg(p, .5 + i * .07, .78 + i * .07)); el.style.transform = 'translateY(' + (110 * (1 - e)).toFixed(1) + '%)'; });
      if (wwd) { var w0 = oq(sg(y, 60, 260)); wwd.style.opacity = w0.toFixed(3); wwd.style.transform = 'translateY(' + (12 * (1 - w0)).toFixed(2) + 'px)'; }
      cards.forEach(function (el, i) {
        var e = oq(sg(y, 140 + i * 60, 440 + i * 60)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (34 * (1 - e)).toFixed(2) + 'px)';
        var ln = el.querySelector('[data-tabit-cardline]'); if (ln) ln.style.width = (36 * io(sg(y, 260 + i * 60, 560 + i * 60))).toFixed(1) + 'px';
      });
    }
  }
  var update0 = update, dayW = null, inkW = null;
  if (scene) update = function (t, S) {   // D3: after the hand-off, scrolling descends from the night sky to the beach
    update0(t, S); TB_SKYS = S;
    if (S < .5) return;
    var F = hero.fx, y = cl(S - TABIT_HAND, 0, QMAX + TABIT_XQ), yc = y, u = QMAX ? y / QMAX : 0;
    // chapters: the text holds still while you read; it moves, and the scene mostly changes, between chapters
    TB_RQ = Math.max(TB_QMIN, Math.min(3, TB_QMIN + (y - 720) / TB_STEPPX)); y = y <= 720 ? y : y <= 720 + TB_PIN ? 720 : y - TB_PIN; TB_ON1 = 1 - Math.min(1, Math.abs(y - 720) / 90); var pgf = Math.min(y, QM0) / 720, pgk = Math.floor(pgf); yc = y; TB_Y = Math.min(y, QM0);   /* XR3.0: past the last page (a phone's About us running on) only the copy moves */ u = QM0 ? 720 * (pgk + io(sg(pgf - pgk, .22, .78))) / QM0 : 0;
    if (scroller) scroller.style.transform = 'translateY(' + (-yc).toFixed(1) + 'px)';
    var r = scene.draw(t, u, cl(S / TABIT_HAND, 0, 1)), ph = r.ph, day = r.day;
    F.sky *= 1 - .8 * sg(ph, .15, .8);
    if (TABIT_PH) F.sky = lp(1, F.sky, sg(S / TABIT_HAND, .5, 1));   // XR3.1: on a phone the splash's sky stays whole as it slides away, and gives way to the site's sky only over the second half of the scroll (dimmed from the first touch, it read as the stars going out) F.ori *= (V === 'd13' || (V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) ? 1 - sg(ph, .2, .62) : 1 - sg(u, 0, .1);   // D13: the constellation stays with the night and goes with the dawn, like the stars
    if (day !== dayW) {   // XR3.7: written when the day changes, and again after the splash (which clears the logo's), not in every frame
      dayW = day; inkW = mixHex('#FFFFFF', '#09154A', day);
      logoParts.forEach(function (el) { if (el) el.style.fill = inkW; });
      root.style.setProperty('--tabit-ink', mixHex('#FBF9F4', '#09154A', day).replace('rgb', 'rgba').replace(')', ',.84)'));
      root.style.setProperty('--tabit-ink2', mixHex('#FBF9F4', '#09154A', day));
      root.style.setProperty('--tabit-line', mixHex('#FBF9F4', '#09154A', day).replace('rgb', 'rgba').replace(')', ',.4)'));
      if (navBg) navBg.style.background = mixHex('#080D1E', '#FBF9F4', day).replace('rgb', 'rgba').replace(')', ',' + lp(.5, .58, day).toFixed(2) + ')');
      if (vig) vig.style.opacity = (1 - .9 * day).toFixed(3);
    }
    aiUpdate(S, yc - 720 * TABIT_AI_SHIFT, inkW);   // AI is page 4: its title animation runs two pages later than it did on page 2
    if (coordsEl) { var cS = (S - Math.max(0, Math.min(TB_PIN, S - TABIT_HAND - 720))), cO = 1 - sg(cS, TABIT_HAND + 720 * 4.35, TABIT_HAND + 720 * 4.75); coordsEl.style.opacity = cO.toFixed(3); coordsEl.style.pointerEvents = cO > .1 ? 'auto' : 'none'; }   // XR2.2.5: allows for the held page, and can't be clicked once it has gone
    if (dotsBox) { dotsBox.style.opacity = sg(S, TABIT_HAND * .6, TABIT_HAND).toFixed(3); var fi = cl(yc / 720, 0, dotEls.length - 1);   // D.C.2.4: the page markers are a small constellation
      var railY = 0;
      dotEls.forEach(function (el, i) { var on0 = 1 - Math.min(1, Math.abs(fi - i)), lb = plabels[i], btn = el.parentNode;
        var lh = lb ? railH(lb) : 0, open = lb ? ss(on0) * (lh + 26) : 0; railY += open;
        if (btn) btn.style.top = (44 * i + railY).toFixed(1) + 'px';
        if (lb) { lb.style.top = (44 * i + railY - 8 - open / 2 - lh / 2).toFixed(1) + 'px'; lb.style.opacity = sg(on0, .6, 1).toFixed(3); }
      });
      dotEls.forEach(function (el, i) { var on = 1 - Math.min(1, Math.abs(fi - i)); el.style.opacity = ((.45 + .55 * on) * (.86 + .14 * Math.sin(t * 1.7 + i * 1.9))).toFixed(3); if (on !== el.__on) { el.__on = on; el.style.transform = 'scale(' + (1 + .55 * on).toFixed(3) + ')'; el.style.filter = 'drop-shadow(0 0 ' + (1.5 + 4 * on).toFixed(1) + 'px rgba(251,249,244,' + (.2 + .5 * on).toFixed(2) + '))'; } });
      if (conProg) { var seg0 = Math.min(CONP.length - 2, Math.floor(fi)), done = CONC[seg0] + CONL[seg0] * (fi - seg0); conProg.style.strokeDashoffset = (1 - done / CONT).toFixed(4); } }
    secs.forEach(function (el) {
      var k = +el.getAttribute('data-tabit-sec'), d = +el.getAttribute('data-tabit-secd'), c0 = 720 * k - 560 + d * 50, e = oq(sg(yc, c0, c0 + 300));
      if (TABIT_FLOW && k < 5) { var fo = TABIT_PH && TABIT_PHL ? Math.max(120, TABIT_PHL.ov[k] + 60) : 240; e *= 1 - sg(yc, 720 * k + fo, 720 * k + fo + (TABIT_PH ? 180 : 300)); }   // continuous scroll: each page's copy fades as it passes under the nav. XR3.0: sooner on a phone, where the next page's figure is already on its way; never before a page that runs under the fold has been read to its end
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (24 * (1 - e)).toFixed(2) + 'px)';
    });
    ins.forEach(function (el) {   // inside a page's box: title, text and each item in turn
      var k = +el.getAttribute('data-tabit-ik'), d = +el.getAttribute('data-tabit-in'), ln = el.getAttribute('data-tb-ln'), c0 = ln != null ? 720 * k - 540 + 95 * ln : 720 * k - 520 + d * 34, e = oq(sg(yc, c0, c0 + (ln != null ? 170 : 280)));   // XR2.2.7: the stacked lines one by one
      if (TB_X34 && !TABIT_PH && k === 2 && (ln != null || d >= 6.5)) {   // XR2.3.4: on the scroll alone. Each line rises from the bottom of the screen to its place: risk sets off first, slowly; when it is halfway, premium sets off, faster; when premium is two thirds of the way, profit sets off, faster still; all three arrive together as the page rests
        var pf = io(sg(yc, 720 * k - 302, 720 * k - 72)), p4 = sg(yc, 720 * k - 72, 720 * k - 6), ST = [0, .5, .5 + .5 * 2 / 3];   // XR2.3.6: pf is the ring's own eased growth (io of F .58 to .9), so the lines keep pace with it exactly   // XR2.3.5: the lines share the figure's window (it grows from F .58 to .9 of the gap), so text and ring arrive in the same instant; the sentence follows
        if (ln != null) { var i4 = +ln, u4 = sg(pf, ST[i4], 1), D4 = 720 - (201 + 84 * i4), cp4 = Math.max(0, 720 * k - yc); el.style.opacity = sg(u4, 0, .06).toFixed(3); el.style.transform = 'translateY(' + (D4 * (1 - u4) - cp4).toFixed(1) + 'px)'; return; }   // XR2.3.9: measured on the screen. The page is still sliding up (by cp4) while the ring forms, so that slide is taken out: each line goes from the bottom edge to its resting place in step with the ring, whatever the page is doing underneath
        var f4 = oq(sg(p4, d >= 7 ? .4 : 0, 1)); el.style.opacity = f4.toFixed(3); el.style.transform = 'translateY(' + (24 * (1 - f4)).toFixed(2) + 'px)'; return;
      }
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + ((ln != null ? 26 : 14) * (1 - e)).toFixed(2) + 'px)';
    });
    if (CHOR) CHOR(yc);   // X1.1 to X1.10: this option's way of moving the copy
  };
  reset();
  // XR3.6: what was made at its first use (the site's sky and its star figures, the logo's knots, the AI figure's stars) is made here, once,
  // before the first frame is shown, while the screen is still black: made at first use, each held up the frame it fell in (the intro
  // from 2.5 s, the first scroll off the splash, the first sight of Home).
  function prepare() {
    try { if (scene && scene.prepare) scene.prepare(); } catch (e) {}
    try { if (V === 'dc17' && !TABIT_PH && !RM && !FL2) fly2Init(); } catch (e) {}
    try { if (aiOv && !ST) starsInit(); } catch (e) {}
  }
  function covered(S) { return !!scene && !!scene.ready && scene.ready() && S / TABIT_HAND >= .3; }   // XR3.6: the site's sky lies over the hero's at full strength (makeScene.draw: sg(r, .02, .3))
  return { update: update, qmax: QMAX, ptr: function (x, y) { PTR.x = x; PTR.y = y; }, prepare: prepare, covered: covered, dispose: function () { if (railRO) railRO.disconnect(); } };
}

// Alpha Stars · scroll concepts (AS6.1 to AS15.1). One light 2D engine shared by ten ideas.
// Every idea opens on the B11 framing (Orion drawn beside the lockup) and is driven only by scrolling:
// the scroll scrubs the scene (scroll back and it reverses), the camera eases to rest on each chapter so the text can be
// read (the soft anchors Aether 1 uses), a progress marker and a plain menu are always there, and the chapters are the
// same in every idea, so only the concept changes.
function makeScrollSky(root, IDEA, LOGO, OPT) {
  // OPT.headless: the scene only, drawn into the given canvas as the background of the shared Beta site shell (which owns
  // the splash, the logo, the nav, the page copy and the knot page markers). The copy there sits on the left, so the
  // scenes put their subject on the right.
  OPT = OPT || {}; var HL = !!OPT.headless;
  var W = 1280, H = 720, IVORY = '251,249,244', DUSK = '184,192,212', NIGHT = '#04070F';
  var OXS = TABIT_OX, WT = W + 2 * OXS;   // the canvas is the screen's width; scenes still draw in the 1280 design, centred
  var OYS = TABIT_OY, HT = H + 2 * OYS;   // XR2.8.2: and the screen's height on a taller stage
  var dpr = tbDpr(2);
  var cv = root, c = cv.getContext('2d');
  cv.width = Math.round(WT * dpr); cv.height = Math.round(HT * dpr);
  var seed = 1291; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function cl(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sg(t, a, b) { return cl((t - a) / (b - a), 0, 1); }
  function io(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function lp(a, b, k) { return a + (b - a) * k; }
  var RGBA = {};   // XR3.6: each colour's strings are kept, by the thousandth of strength (a frame built some two thousand of them, for the same few colours)
  function rgba(col, a) {
    var x = cl(a, 0, 1) * 1000, n = Math.round(x), t = RGBA[col] || (RGBA[col] = []);
    if (Math.abs(x - n) > .4999) return 'rgba(' + col + ',' + cl(a, 0, 1).toFixed(3) + ')';   // on the line between two thousandths: as toFixed rounds it, so the string is the one it always was
    return t[n] || (t[n] = 'rgba(' + col + ',' + (n / 1000).toFixed(3) + ')');
  }

  // ---- Orion as B11 frames it (screen positions at the end of the splash), with catalogue distance and magnitude
  var ORI = {
    betel: [237, 345, 643, .42], rigel: [416, 628, 773, .18], bella: [368, 368, 243, 1.64], mintaka: [340, 485, 916, 2.2], alnilam: [322, 501, 1342, 1.69],
    alnitak: [299, 515, 817, 1.88], saiph: [262, 661, 721, 2.07], meissa: [331, 303, 1055, 3.47], pi1: [497, 304, 121, 4.64], pi2: [517, 325, 194, 4.35],
    pi3: [512, 360, 26, 3.19], pi4: [522, 382, 1259, 3.68], pi5: [509, 436, 1342, 3.71], pi6: [489, 449, 953, 4.47], mu: [199, 304, 152, 4.12], nu: [183, 207, 534, 4.42],
    xi: [163, 216, 634, 4.45], chi1: [235, 110, 28, 4.39], chi2: [209, 107, 1801, 4.64], omi2: [492, 245, 169, 4.06], o11: [461, 210, 400, 4.65], eta: [373, 522, 901, 3.35], tau: [401, 603, 554, 3.59]
  };
  var LINES = [['pi3', 'pi2'], ['pi2', 'pi1'], ['pi1', 'omi2'], ['omi2', 'o11'], ['pi3', 'pi4'], ['pi4', 'pi5'], ['pi5', 'pi6'], ['pi3', 'bella'], ['bella', 'meissa'], ['meissa', 'betel'],
    ['betel', 'bella'], ['bella', 'mintaka'], ['mintaka', 'alnilam'], ['alnilam', 'alnitak'], ['betel', 'alnitak'], ['alnitak', 'saiph'], ['mintaka', 'eta'], ['eta', 'tau'], ['tau', 'rigel'],
    ['betel', 'mu'], ['mu', 'xi'], ['xi', 'chi2'], ['chi2', 'chi1'], ['chi1', 'nu']];
  function oriB(k) { return cl(Math.pow(10, -.4 * (ORI[k][3] - 1)), .15, 1); }

  // ---- the sky: three depth layers of real-looking stars (a few bright with halos, many faint), muted true colours
  var TEMP = ['150,180,255', '196,214,255', '255,236,196', '255,196,130', '255,150,110'];
  var SKY = [];
  for (var i = 0; i < 2400; i++) {
    var lay = i < 1500 ? 0 : i < 2150 ? 1 : 2, b = Math.pow(rnd(), lay === 0 ? 6 : lay === 1 ? 4 : 3);
    SKY.push({ x: rnd() * 1600 - 160, y: rnd() * 1040 - 160, z: [5, 2.6, 1.5][lay], b: b * [.5, .75, 1][lay] * (1.25), col: TEMP[((rnd() * 5) | 0)], ph: rnd() * 6.28 });
  }
  var SKYX = [];   // the same sky carried out to the widest screen's edges, from its own random sequence (SKY itself is untouched)
  var sx7 = 9137; var rx = function () { sx7 = (sx7 * 16807) % 2147483647; return (sx7 - 1) / 2147483646; };
  var ex = 330 - 120 + 60, nx = Math.round(2400 * ex / 1600);
  for (var side = 0; side < 2; side++) for (var i2 = 0; i2 < nx; i2++) {
    var lay2 = i2 % 32 < 20 ? 0 : i2 % 32 < 29 ? 1 : 2, b2 = Math.pow(rx(), lay2 === 0 ? 6 : lay2 === 1 ? 4 : 3);
    SKYX.push({ x: side ? 1440 + rx() * ex : -160 - rx() * ex, y: rx() * 1040 - 160, z: [5, 2.6, 1.5][lay2], b: b2 * [.5, .75, 1][lay2] * (1.25), col: TEMP[((rx() * 5) | 0)], ph: rx() * 6.28 });
  }
  var SKYY = [];   // XR2.8.2: the sky carried above and below the design for the taller stage
  var sy7 = 4421; var ry = function () { sy7 = (sy7 * 16807) % 2147483647; return (sy7 - 1) / 2147483646; };
  var ey = 480, ny = Math.round(2400 * ey / 1040 * (1600 + 2 * 270) / 1600);
  for (var vs = 0; vs < 2; vs++) for (var i3 = 0; i3 < ny; i3++) {
    var lay3 = i3 % 32 < 20 ? 0 : i3 % 32 < 29 ? 1 : 2, b3 = Math.pow(ry(), lay3 === 0 ? 6 : lay3 === 1 ? 4 : 3);
    SKYY.push({ x: rnd ? ry() * 2140 - 430 : 0, y: vs ? 880 + ry() * ey : -160 - ry() * ey, z: [5, 2.6, 1.5][lay3], b: b3 * [.5, .75, 1][lay3] * (1.25), col: TEMP[((ry() * 5) | 0)], ph: ry() * 6.28 });
  }
  function star(x, y, r, a, col) {
    if (a <= .01) return;
    var g = c.createRadialGradient(x, y, 0, x, y, r * 3.2); g.addColorStop(0, rgba(col || IVORY, a)); g.addColorStop(.25, rgba(col || IVORY, a * .45)); g.addColorStop(1, rgba(col || IVORY, 0));
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r * 3.2, 0, 6.2832); c.fill();
  }
  function dot(x, y, r, a, col) { if (a <= .01) return; c.fillStyle = rgba(col || IVORY, a); c.beginPath(); c.arc(x, y, r, 0, 6.2832); c.fill(); }
  function drawSky(dx, dy, a, map) {   // dx, dy: camera drift in px for the nearest layer; map: optional per-star transform
    for (var i = 0, nS = SKY.length, nX = OXS > 0 ? SKYX.length : 0, nA = nS + nX + (OYS > 0 ? SKYY.length : 0); i < nA; i++) {
      var s = i < nS ? SKY[i] : i < nS + nX ? SKYX[i - nS] : SKYY[i - nS - nX], x = s.x + dx / s.z, y = s.y + dy / s.z;
      if (x < -40 - OXS || x > W + 40 + OXS) continue;   // XR3.7: well off to the side (the map, skyMap, moves a star at most 12 units sideways, and only near the pointer): on a phone, three stars in four
      if (map) { var m = map(x, y, s); if (!m) continue; x = m[0]; y = m[1]; }
      if (x < -20 - OXS || x > W + 20 + OXS || y < -20 - OYS || y > H + 20 + OYS) continue;
      var al = a * (.25 + .75 * s.b) * (.85 + .15 * Math.sin(T * 1.2 + s.ph));
      var sc6 = SKYM[s.col] || s.col; dot(x, y, .42 + .9 * s.b, Math.min(1, al * (1.05 + .5 * s.b)), sc6); if (s.b > .5) dot(x, y, 1.4 + 2 * s.b, al * .07, sc6);
    }
  }
  function drawOrion(a, f, lineA) {   // f maps an Orion star key to [x, y]; default is the B11 frame
    f = f || function (k) { return [ORI[k][0], ORI[k][1]]; };
    if (lineA == null) lineA = 1;
    c.strokeStyle = rgba(DUSK, TB_VAR('--tb-orion-lines', .42) * a * lineA); c.lineWidth = 1;
    LINES.forEach(function (L) { var p = f(L[0]), q = f(L[1]); if (!p || !q) return; var dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy); if (d < 16) return; var ux = dx / d * 7, uy = dy / d * 7; c.beginPath(); c.moveTo(p[0] + ux, p[1] + uy); c.lineTo(q[0] - ux, q[1] - uy); c.stroke(); });
    Object.keys(ORI).forEach(function (k) { var p = f(k); if (!p) return; var b = oriB(k); star(p[0], p[1], 1 + 1.6 * b, a * (.55 + .45 * b), k === 'pi3' ? '255,248,232' : '232,238,255'); });
  }
  // the lockup's mark sits on Tabit: its svg units map to screen as x = 441.29 + (u + 4) * k, y = 304.28 + (v + 4) * k

  // ---- chapters: the same five sections in every idea (ideas may reorder them)
  var BASE = [{ k: 'home', t: 'Home' }, { k: 'mintaka', t: '(Re)insurance' }, { k: 'alnilam', t: 'Capital & cells' }, { k: 'alnitak', t: 'Life & PPLI' }, { k: 'meissa', t: 'AI' }, { k: 'contact', t: 'Contact' }];
  var CH = BASE;


  // ---- scrolling: wheel scrubs the scene; when the wheel goes quiet the camera settles on the nearest chapter

  var T = 0, scenes = {}, SHELLR = 1;
  var MPX = { x: 0, y: 0, k: 0, mx: -999, my: -999 };   // XR2.2.6: the mouse, eased, for the background stars
  var SKYM = { '150,180,255': '214,224,255', '196,214,255': '236,240,255', '255,236,196': '255,246,228', '255,196,130': '255,238,214', '255,150,110': '255,230,206' };   // XR2.2.6: the splash's muted, near-white tints
  var MP2 = [0, 0];   // XR3.6: the one pair the sky's map hands back, read at once by drawSky (a new pair was made for every star in every frame)
  function mlens(x, y) {   // XR2.2.6: stars near the pointer part round it a little, a gentler version of the splash's lens
    var dx = x - MPX.mx, dy = y - MPX.my, r = Math.hypot(dx, dy) || .001, R = 130, E = 12; if (r >= R) { MP2[0] = x; MP2[1] = y; return MP2; }
    var f = Math.min(1, (R - r) / (R * .65)); f = f * f * (3 - 2 * f) * MPX.k;
    var rr = .5 * (r + Math.sqrt(r * r + 4 * E * E)), nr = r + (rr - r) * f, sw = .4 * f * E / (r + E), cs = Math.cos(sw), sn = Math.sin(sw), ux = dx / r, uy = dy / r;
    MP2[0] = MPX.mx + (ux * cs - uy * sn) * nr; MP2[1] = MPX.my + (ux * sn + uy * cs) * nr; return MP2;
  }
  function skyMap(x, y) { y = ((y + 160) % 1040 + 1040) % 1040 - 160; if (MPX.k > .01) return mlens(x, y); MP2[0] = x; MP2[1] = y; return MP2; }   // the sky drifting up the page comes round again from below
  var GRAV = { x: -999, y: -999, on: 0, sx: -999, sy: -999, s: 0 };   // AS12.7: the mouse, as a small field of gravity
  // XR2.10: the home sky itself (stars, twinkle, drift against the mouse, parting round it, drift up with the scroll), drawn by
  // the diagrams scene on the home and alone behind the click-out pages, so a change made here holds on every page
  function skyLayer() {
    // XR2.2.6: the sky drifts a little against the mouse (nearer stars more) and parts round the pointer
    var pon = GRAV.on && GRAV.x > -900; MPX.x = lp(MPX.x, pon ? (GRAV.x - 640) / 640 : 0, .035); MPX.y = lp(MPX.y, pon ? (GRAV.y - 360) / 360 : 0, .035); MPX.k = lp(MPX.k, pon ? 1 : 0, .05);
    if (pon) { MPX.mx = MPX.mx < -900 ? GRAV.x : lp(MPX.mx, GRAV.x, .2); MPX.my = MPX.my < -900 ? GRAV.y : lp(MPX.my, GRAV.y, .2); }
    var dr7 = ((TABIT_PH ? TB_PHSKY * (1 - Math.pow(1 - Math.min(1, Math.max(0, TB_SKYS) / TABIT_HAND), 2)) : 0) + Math.max(0, TB_SKYS - TABIT_HAND) * .05);   // XR3.1: on a phone the sky moves from the first touch of the scroll off the splash (Oscar: "none of the stars move at all until the Tabit logo's got to the top"); the splash's sky is this one, drawn once when the splash comes to rest, so until now it stood still until the drift began at Home
    drawSky(-MPX.x * 22, -MPX.y * 14 - dr7, .72, skyMap);
  }

  // =========================================================================================== shared looks

  // shared centrepieces, each a different kind of object so no two chapters look alike (the Igloo lesson)

  // =========================================================================================== AS12 · Stars become the diagrams
  // Igloo's links section (particles swirl into the shape of what you choose): the starfield streams into each section's
  // explanation and scatters back into sky between chapters.
  seed = 2016984324;   // XR3.7: where the eleven scenes that stood before this one left the generator (they are gone; the figures' stars are drawn from it, and stay where they were)
  scenes.diagrams = (function () {
    var N = 900;
    function sample(drawFn, seed) {   // XR2.9.1: a CPU canvas (no GPU readback) and its own sequence, so it can run lazily
      var o = document.createElement('canvas'); o.width = 520; o.height = 420; var g = o.getContext('2d', { willReadFrequently: true }); g.fillStyle = '#fff'; g.strokeStyle = '#fff'; drawFn(g);
      var d = g.getImageData(0, 0, 520, 420).data, pts = []; for (var y = 0; y < 420; y += 3) for (var x = 0; x < 520; x += 3) if (d[(y * 520 + x) * 4 + 3] > 120) pts.push([x, y]);
      var s9 = seed || 2468; function r9() { s9 = (s9 * 16807) % 2147483647; return (s9 - 1) / 2147483646; }
      var out = []; for (var i = 0; i < N; i++) { var p = pts[Math.floor(r9() * pts.length)] || [260, 210]; out.push([(680) + p[0], 150 + p[1]]); } return out;
    }
    // Captives: a captured orbit. The geometry is shared by the stars' shape and the satellite that is caught into it
    var CAPO = { cx: 300, cy: 236, rx: 175, ry: 92, rot: -.32, t0: 3.5 }, capS = -1;
    function capE(t) { var cr = Math.cos(CAPO.rot), sr = Math.sin(CAPO.rot), x = CAPO.rx * Math.cos(t), y = CAPO.ry * Math.sin(t); return [CAPO.cx + x * cr - y * sr, CAPO.cy + x * sr + y * cr]; }
    function capIn() { var t0 = CAPO.t0, cr = Math.cos(CAPO.rot), sr = Math.sin(CAPO.rot), J = capE(t0), d = [-CAPO.rx * Math.sin(t0) * cr - CAPO.ry * Math.cos(t0) * sr, -CAPO.rx * Math.sin(t0) * sr + CAPO.ry * Math.cos(t0) * cr], l = Math.hypot(d[0], d[1]); return { a: [8, 18], c: [J[0] + d[0] / l * 150, J[1] + d[1] / l * 150], b: J }; }
    function capAt(st) {   // the satellite: 2.4s in along the incoming path, then round the orbit (about 5s a lap)
      if (st < 2.4) { var Q = capIn(), k = st / 2.4, v = 1 - k; return [v * v * Q.a[0] + 2 * v * k * Q.c[0] + k * k * Q.b[0], v * v * Q.a[1] + 2 * v * k * Q.c[1] + k * k * Q.b[1]]; }
      return capE(CAPO.t0 - (st - 2.4) * 1.2);
    }
    var SHDEF = {
      home: null,
      mintaka: function (g) {   // (Re)insurance: a navigator's compass rose, finding a way into risks the market has not charted
        g.lineWidth = 7; g.beginPath(); g.arc(260, 210, 170, 0, 6.2832); g.stroke();
        function pt(a, L, w) { g.beginPath(); g.moveTo(260 + L * Math.cos(a), 210 + L * Math.sin(a)); g.lineTo(260 + w * Math.cos(a + Math.PI / 2), 210 + w * Math.sin(a + Math.PI / 2)); g.lineTo(260 + w * Math.cos(a - Math.PI / 2), 210 + w * Math.sin(a - Math.PI / 2)); g.closePath(); g.fill(); }
        [0, 1, 2, 3].forEach(function (i) { pt(i * Math.PI / 2 - Math.PI / 2, 196, 26); pt(i * Math.PI / 2 - Math.PI / 4, 108, 18); }); },
      alnilam: function (g) {   // Captives: a captured orbit; what would have passed by is caught and kept in your orbit
        g.beginPath(); g.arc(CAPO.cx, CAPO.cy, 30, 0, 6.2832); g.fill();
        g.lineWidth = 6; g.beginPath(); for (var t = 0; t <= 6.29; t += .02) { var p = capE(t); if (t === 0) g.moveTo(p[0], p[1]); else g.lineTo(p[0], p[1]); } g.stroke();
        var Q = capIn(); g.lineWidth = 5; g.setLineDash([3, 13]); g.beginPath(); g.moveTo(Q.a[0], Q.a[1]); g.quadraticCurveTo(Q.c[0], Q.c[1], Q.b[0], Q.b[1]); g.stroke(); g.setLineDash([]); },
      alnitak: function (g) { g.lineWidth = 10; g.beginPath(); g.moveTo(30, 330); g.bezierCurveTo(180, 320, 300, 200, 490, 80); g.stroke(); for (var x = 40; x < 500; x += 60) g.fillRect(x, 352, 6, 22); g.fillRect(20, 380, 480, 6); },
      meissa: function (g) { g.font = '800 300px Manrope, Arial, sans-serif'; g.textAlign = 'center'; g.fillText('AI', 260, 320); },
      ai: function (g) {   // a small network: three layers of nodes, every node joined to the next layer
        var L = [[90, [110, 210, 310]], [260, [70, 160, 250, 340]], [430, [130, 290]]]; g.lineWidth = 3;
        for (var a = 0; a < 2; a++) L[a][1].forEach(function (y1) { L[a + 1][1].forEach(function (y2) { g.beginPath(); g.moveTo(L[a][0], y1); g.lineTo(L[a + 1][0], y2); g.stroke(); }); });
        L.forEach(function (l) { l[1].forEach(function (y) { g.beginPath(); g.arc(l[0], y, 22, 0, 6.2832); g.fill(); }); }); },
      licence: function (g) {   // Licence & audit: a padlock (no third-party logo)
        g.lineWidth = 30; g.lineCap = 'butt'; g.beginPath(); g.moveTo(178, 196); g.lineTo(178, 140); g.arc(260, 140, 82, Math.PI, 0); g.lineTo(342, 196); g.stroke();
        g.beginPath(); g.moveTo(140, 200); g.lineTo(380, 200); g.lineTo(380, 390); g.lineTo(140, 390); g.closePath(); g.fill();
        g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(260, 270, 24, 0, 6.2832); g.fill(); g.fillRect(250, 280, 20, 58); g.globalCompositeOperation = 'source-over'; },
      contact: function (g) { g.translate(260, 210); g.scale(.86, .86); g.translate(-247.9, -193.2); g.fill(new Path2D(LOGO.mark), 'evenodd'); }   // About: the mark sits beside the intro, above the team
    };
    var SHC = {}, SHKEYS = Object.keys(SHDEF), SH = {};
    SHKEYS.forEach(function (k, ix) { Object.defineProperty(SH, k, { get: function () { if (!(k in SHC)) SHC[k] = SHDEF[k] ? sample(SHDEF[k], 2468 + 97 * ix) : null; return SHC[k]; } }); });
    function warmShape() { for (var w = 0; w < SHELL_ORDER.length; w++) { var kw = SHELL_ORDER[w].k; if (!(kw in SHC)) { void SH[kw]; return true; } } return false; }   // one of the site's figures per call (XR3.6: only those the site shows, all of them before the first frame: makeScene.prepare)
    var SHELL_ORDER = [{ k: 'home', t: 'Home' }, { k: 'mintaka', t: '(Re)insurance' }, { k: 'alnilam', t: 'Captives' }, { k: 'ai', t: 'AI' }, { k: 'licence', t: 'License & audit' }, { k: 'contact', t: 'About us' }];
    var P = []; for (var i = 0; i < N; i++) { var s = SKY[(i * 7) % SKY.length]; P.push({ hx: s.x, hy: s.y, d: rnd() * .3, w: (rnd() - .5) * 2 }); }
    // XR3.0: on a phone a figure that stands under its copy (Captives, License) belongs to its page and travels with it, arriving and leaving, so the
    // words and the figure keep their distance all the way; fixed on the screen, the figure formed where its own copy was still rising through
    function gy9(i) { var kk = CH[i].k; return TABIT_PH && (kk === 'alnilam' || kk === 'licence') ? 720 * i - TB_Y : 0; }
    function shapeAt(i, j) { var sh = SH[CH[i].k]; if (TB_AIL && sh && HL && CH[i].k === 'ai') { var G0 = tbG('ai'); var aic = TABIT_AIC != null ? TABIT_AIC : G0.cy; return [TB_AIFX() + (sh[j][0] - 940) * G0.s, aic + (sh[j][1] - 360) * G0.s]; } if (!sh) return [P[j].hx, P[j].hy]; var G = tbG(CH[i].k); if (TB_RV && TB_RE && CH[i].k === 'mintaka') return TB_REX(sh[j][0] - 940, sh[j][1] - 360); return [G.cx + (sh[j][0] - 940) * G.s, G.cy + gy9(i) + (sh[j][1] - 360) * G.s]; }
    return {
      warm: warmShape, side: 'right', shell: { chapters: SHELL_ORDER, map: 'page' },
      draw: function (u, near, hold) {
        skyLayer();   // XR2.10: the sky itself, shared with the click-out pages (skyLayer)
        var k = Math.floor(u), f = u - k;
        var oA = TABIT_PH ? (1 - sg(TB_Y, 20, 170)) * (TABIT_PHL ? TABIT_PHL.home.a : 1) : (1 - sg(io(sg(TB_Y, 20, 360)), .05, .85));   // XR3.0: on a phone Orion stays where it is and is gone before the next page's words reach it   // X1.13: Orion fades as it enlarges
        if (TABIT_PH) oA *= sg(SHELLR, .72, 1);   // XR3.1: on a phone Orion comes in on the Home page itself, once the logo is in the bar: it never crosses the splash
        if (oA > 0) {
          var oe = TABIT_PH ? 1 : io(sg(SHELLR, .3, .9)), OG = tbG('home'), osc = .8 * OG.s * tbLerp(1, tbLerp(.6, .8, TABIT_HF), TABIT_ST);   // Orion's figure spans x 163 to 522 and y 107 to 661: centre (342, 384)
          drawOrion(oA, function (q) { if (TABIT_OPT >= 12 && /^(o11|omi2|pi[1-6])$/.test(q)) return null; var x = ORI[q][0], y = ORI[q][1], hx = lp(x, OG.cx + (x - 342) * osc, oe), hy = lp(y, OG.cy + tbLerp(44, tbLerp(70, 116, TABIT_HF), TABIT_ST) + (y - 384) * osc, oe); if (TABIT_OPT >= 13 && !TABIT_PH) { var te = io(sg(TB_Y, 20, 360)); return [lp(hx, 1280 + OXS - 106 + (x - 505) * 2.285, te), lp(hy, 64 + (y - 210) * 2.285, te)]; }   // X1.13: the whole drawing enlarges, centred on its bow
          return [hx, hy]; });
        }
        c.globalCompositeOperation = 'lighter'; TB_KQ.length = 0;
        // AS12.7: a soft field of gravity follows the mouse; stars within reach drift a little towards it and curl round it
        if (GRAV.on && GRAV.sx < -900) { GRAV.sx = GRAV.x; GRAV.sy = GRAV.y; }
        GRAV.sx = lp(GRAV.sx, GRAV.x, .16); GRAV.sy = lp(GRAV.sy, GRAV.y, .16); GRAV.s = lp(GRAV.s, GRAV.on ? 1 : 0, .06);
        var GR = 190;
        // X1.4, X1.5: an electric-indigo glow behind the figure; X1.7: a horizon that warms page by page
        var GS = TABIT_SUBJ;
        // XR2: where the compass of stars sits this frame; on XR2.2 its rim is also drawn, finely ticked, as a horizon
        var RE = TB_REcalc();
        if (TB_RV === 2 && TB_ON1 > 0) {
          var Rr = 170 * TB_GS() * RE.sc, rr0 = RE.rot * Math.PI / 180;
          c.strokeStyle = rgba(DUSK, .3 * TB_ON1); c.lineWidth = 1; c.beginPath(); c.arc(RE.cx, RE.cy, Rr, -Math.PI * .75, -Math.PI * .25); c.stroke();
          for (var tk = 0; tk < 360; tk += 3) { var ta = tk * Math.PI / 180 + rr0, sx = Math.sin(ta), sy2 = -Math.cos(ta); if (sy2 > -.55) continue; var big = tk % 45 === 0, l0 = Rr - (big ? 22 : tk % 15 === 0 ? 13 : 7);
            c.strokeStyle = rgba(IVORY, (big ? .55 : .26) * TB_ON1); c.beginPath(); c.moveTo(RE.cx + sx * l0, RE.cy + sy2 * l0); c.lineTo(RE.cx + sx * Rr, RE.cy + sy2 * Rr); c.stroke(); }
          c.fillStyle = 'rgba(168,130,58,' + (TB_VAR('--tb-diamond', .9) * TB_ON1).toFixed(3) + ')'; c.save(); c.translate(RE.cx, RE.cy - Rr * 1.153 - 20); c.rotate(Math.PI / 4); c.fillRect(-5, -5, 10, 10); c.restore();   // the lubber mark
        }
        // X1.3: gold figures; X1.8: each page's figure in its own colour
        // X1.1: between pages the stars gather into one bright clump, which streaks down the page as a gold shooting star and
        // swings back up to burst into the next page's figure. Scrolling back plays it in reverse.
        // X1.11: Orion's bow is the path, down the right-hand side, one of its stars for each page. Between pages the figure's
        // stars gather into one ball on this page's star, the ball runs down the bow to the next page's star (the stretch it has
        // covered turns brass), and there it bursts out into the next page's figure. Scrolling back runs it back up.
        var TB12 = TABIT_OPT === 12 && HL, TB13 = TABIT_OPT >= 13 && HL, TBB = TB12 || TB13;
        var BOWK = ['o11', 'omi2', 'pi1', 'pi2', 'pi3', 'pi4', 'pi5', 'pi6'], BY = [64, 108, 160, 250, 340, 430, 520, 610];   // the bow's real x; its stops spaced evenly down the page
        var BX = 1280 + OXS - 106, BPTS = BOWK.map(function (kb, n) { return [BX + (ORI[kb][0] - 505) * 1.3, BY[n]]; });
        // X1.12: on Home the bow is where it sits in the Orion drawing; leaving Home it lifts out and opens out to the right
        var oe12 = io(sg(SHELLR, .3, .9)), OG12 = tbG('home'), osc12 = .8 * OG12.s * tbLerp(1, tbLerp(.6, .8, TABIT_HF), TABIT_ST);
        function oriHome(q) { var x = ORI[q][0], y = ORI[q][1]; return [lp(x, OG12.cx + (x - 342) * osc12, oe12), lp(y, OG12.cy + tbLerp(44, tbLerp(70, 116, TABIT_HF), TABIT_ST) + (y - 384) * osc12, oe12)]; }
        var exB = TB12 ? io(sg(TB_Y, 30, 330)) : 1;   // starts with the first scroll, before the page itself moves on
        // X1.13: the whole drawing enlarges about its bow (tE), then the bow settles into the evenly spaced path (tS)
        var tE13 = io(sg(TB_Y, 20, 360)), tS13 = io(sg(TB_Y, 260, 440)); if (TABIT_PH) tE13 = tS13 = 0;   // XR3.0: a phone has no chapter path: the bow stays in Orion and goes with it
        function ori13(q) { var h = oriHome(q); return [lp(h[0], BX + (ORI[q][0] - 505) * 2.285, tE13), lp(h[1], 64 + (ORI[q][1] - 210) * 2.285, tE13)]; }
        exB = tS13; BPTS = BPTS.map(function (Pb, n) { var h = ori13(BOWK[n]); return [lp(h[0], Pb[0], tS13), lp(h[1], Pb[1], tS13)]; });
        // X1.13 runs on the scroll itself: page K, and F, how far through the gap to the next page (0 to 1)
        var ANC13 = [];   // XR3.0: each figure's anchor, worked out once a frame (it was built afresh for every star)
        var K13 = Math.min(5, Math.floor(TB_Y / 720)), F13 = K13 >= 5 ? 0 : TB_Y / 720 - K13;
        var Q13 = K13 === 0 ? [.58, .64, .64, .8, .8, .97] : [.1, .34, .34, .58, .58, .9];   // shrink (or, leaving Home, appear), run, grow
        var M13 = io(sg(F13, Q13[2], Q13[3]));
        function bowStop(i) { if (TABIT_PH) return anc13(Math.max(0, Math.min(5, i))); return BPTS[2 + Math.max(0, Math.min(5, i))]; }   // XR3.0: on a phone the ball of stars runs from one figure's place straight to the next's
        // leaving Home in X1.12 the bow opens out first; only then do the stars gather and run (other pages: gather, run, burst)
        function b13Pos(o, j) {   // X1.13: one body. The figure shrinks into a ball as it glides onto its star, the ball runs down the bow, the next figure grows out of it
          var K = K13, F = F13, a = shapeAt(K, j), b = shapeAt(Math.min(K + 1, CH.length - 1), j), P0 = bowStop(K), P1 = bowStop(K + 1), Q = Q13;
          // XR2.2.1: each figure shrinks into, and grows out of, its own visible centre, and the ball is always a small ball,
          // however large the figure (the giant compass used to travel down the shield as a miniature of itself)
          var Ca = anc13(K), Cb = anc13(Math.min(K + 1, CH.length - 1)), BLa = bl13(K), BLb = bl13(Math.min(K + 1, CH.length - 1));
          var s1 = K === 0 ? 1 : io(sg(F, Q[0], Q[1])), m = io(sg(F, Q[2], Q[3])), s2 = io(sg(F, Q[4], Q[5])), vis = K === 0 ? sg(F, Q[0], Q[1]) : 1;
          if (TB_AIL && K > 0 && CH[Math.min(K + 1, CH.length - 1)].k === 'ai') {   // XR2.3.13: into AI, the stars come from the logo
            var o9 = P[j], sA = TB_AIPTF ? TB_AIPTF(j) : [640, 46];   // XR2.5.1: each star's own point inside the A or I of the logo
            // XR2.3.14: each star leaves the logo on its own (staggered over the gap), drops, and curves down onto its place in the figure, drawn as a tiny knot with a tail, as the A and I are
            var rr = (Math.sin(j * 12.9898 + 4.1) * 43758.5453) % 1; rr = rr < 0 ? rr + 1 : rr;
            var t0 = .3 + rr * .32, t1 = Math.min(.9, t0 + .28);
            function fall9(ff) { var u = io(sg(ff, t0, t1)), cx = sA[0] + o9.w * 90, cy = sA[1] + 260 + o9.d * 300, v = 1 - u; return [v * v * sA[0] + 2 * v * u * cx + u * u * b[0], v * v * sA[1] + 2 * v * u * cy + u * u * b[1], u]; }
            if (F >= t0) { var p9 = fall9(F), tl9 = []; for (var jt = 1; jt <= 4; jt++) tl9.push(fall9(Math.max(t0, F - .01 * jt))); return [p9[0], p9[1], lp(.9, .85, p9[2]), 0, 1, tl9[0][0], tl9[0][1], p9[2], tl9]; }
            var fd9 = 1 - sg(F, Math.max(.3, t0 - .12), t0);   // XR2.5.6: Captives gathers onto its star and runs down the path as every page does; the ball fades as its star falls from the A and I
            if (m > 0 || s1 >= 1) return [lp(P0[0], P1[0], m) + (a[0] - Ca[0]) * BLa, lp(P0[1], P1[1], m) + (a[1] - Ca[1]) * BLa, .5 * fd9, 1];
            var sc9 = lp(1, BLa, s1); return [lp(Ca[0], P0[0], s1) + (a[0] - Ca[0]) * sc9, lp(Ca[1], P0[1], s1) + (a[1] - Ca[1]) * sc9, lp(1, .5, s1) * fd9, s1];
          }
          if (TB_AIL && CH[K].k === 'ai' && K + 1 < CH.length) {   // XR2.5.1: leaving AI, the figure's stars go back up into the A and I the way they came, staggered, with the letters
            var o8 = P[j], sB = TB_AIPTF ? TB_AIPTF(j) : [640, 46], rb = (Math.sin(j * 12.9898 + 4.1) * 43758.5453) % 1; rb = rb < 0 ? rb + 1 : rb;
            var u0 = .02 + (1 - rb) * .3, u1 = u0 + .26;   // the last to land is the first to leave
            function rise8(ff) { var u = 1 - io(sg(ff, u0, u1)), cx = sB[0] + o8.w * 90, cy = TABIT_PH ? (sB[1] + a[1]) / 2 : sB[1] + 260 + o8.d * 300, v = 1 - u; return [v * v * sB[0] + 2 * v * u * cx + u * u * a[0], v * v * sB[1] + 2 * v * u * cy + u * u * a[1], u]; }
            if (F < u0) return [a[0], a[1], TABIT_PH ? sg(a[1], 78 - TABIT_OY, 118 - TABIT_OY) : 1, 0, 1, a[0], a[1], 1];
            if (F < u1) { var p8 = rise8(F), tl8 = []; for (var jr = 1; jr <= 4; jr++) tl8.push(rise8(Math.max(u0, F - .01 * jr))); return [p8[0], p8[1], lp(.9, .85, p8[2]) * (1 - sg(F, u1 - .02, u1)), 0, 1, tl8[0][0], tl8[0][1], p8[2], tl8]; }
            if (s2 <= 0) return [sB[0], sB[1], 0, 0];
            var sc8 = lp(BLb, 1, s2); return [lp(P1[0], Cb[0], s2) + (b[0] - Cb[0]) * sc8, lp(P1[1], Cb[1], s2) + (b[1] - Cb[1]) * sc8, lp(.5, 1, s2) * sg(s2, 0, .2), 1 - s2];   // then Licence grows out of its own star on the path
          }
          var oAx = (a[0] - Ca[0]) * BLa, oAy = (a[1] - Ca[1]) * BLa, oBx = (b[0] - Cb[0]) * BLb, oBy = (b[1] - Cb[1]) * BLb;   // XR2.5.6: the small ball on the path, as XR2.4 had it
          if (init && init.noMark && CH[K].k === 'contact') return [P0[0], P0[1], TABIT_PH ? 0 : .5, 1];   // XR2.3: on About us the ball rests on its star; no knot of stars, so the picture stands clear
          if (s2 > 0 && init && init.noMark && CH[Math.min(K + 1, CH.length - 1)].k === 'contact') return [P1[0], P1[1], .5 * vis * (TABIT_PH ? 1 - s2 : 1), 1];
          if (s2 > 0) { return [lp(P1[0], Cb[0], s2) + lp(oBx, b[0] - Cb[0], s2), lp(P1[1], Cb[1], s2) + lp(oBy, b[1] - Cb[1], s2), lp(.5, 1, s2) * vis, 1 - s2]; }
          var ox = K === 0 ? oBx : lp(oAx, oBx, m), oy = K === 0 ? oBy : lp(oAy, oBy, m);
          if (m > 0 || s1 >= 1) return [lp(P0[0], P1[0], m) + ox, lp(P0[1], P1[1], m) + oy, .5 * vis, 1];
          return [lp(Ca[0], P0[0], s1) + lp(a[0] - Ca[0], oAx, s1), lp(Ca[1], P0[1], s1) + lp(a[1] - Ca[1], oAy, s1), lp(1, .5, s1), s1];
        }
        function anc13(kk) { return ANC13[kk] || (ANC13[kk] = anc13x(kk)); }
        function anc13x(kk) { if (TABIT_PH && TABIT_PHL && CH[kk].k !== 'ai') { var gp = TABIT_PHL[CH[kk].k]; if (gp) return [gp.ax != null ? gp.ax : gp.cx, (gp.ay != null ? gp.ay : gp.cy) + gy9(kk)]; } if (TB_AIL && CH[kk].k === 'ai') return [TB_AIFX(), TABIT_AIC != null ? TABIT_AIC : TABIT_SUBJ.cy]; if (TB_RV && TB_RE && CH[kk].k === 'mintaka') return [cl(TB_RE.cx, 140 - OXS, 1140 + OXS), cl(TB_RE.cy, 140, 600)]; return [GS.cx, 360]; }
        function bl13(kk) { if (TB_RV && TB_RE && CH[kk].k === 'mintaka') return Math.min(.03, 12 / (2 * 196 * TB_GS() * TB_RE.sc)); return .03; }
        var trA = TABIT_PH ? oA : 1, mh = M13, kb0 = K13;
        var hd11 = [lp(bowStop(kb0)[0], bowStop(kb0 + 1)[0], mh), lp(bowStop(kb0)[1], bowStop(kb0 + 1)[1], mh)];
        TRK11 = { a: exB, p: BPTS.slice(2) };
        if (trA > 0) {
          c.lineCap = 'round';
          if (TBB && oA > 0) {   // while it is still part of Orion, the bow keeps its line to Bellatrix (which fades with the rest)
            var pA = BPTS[4], pB = ori13('bella'), ddx = pB[0] - pA[0], ddy = pB[1] - pA[1], dd = Math.hypot(ddx, ddy) || 1;
            c.strokeStyle = rgba(DUSK, TB_VAR('--tb-orion-lines', .42) * oA); c.lineWidth = 1; c.beginPath(); c.moveTo(pA[0] + ddx / dd * 7, pA[1] + ddy / dd * 7); c.lineTo(pB[0] - ddx / dd * 7, pB[1] - ddy / dd * 7); c.stroke();
          }
          c.strokeStyle = rgba(DUSK, (lp(TB_VAR('--tb-orion-lines', .42), .22, exB)) * trA); c.lineWidth = 1; c.beginPath(); BPTS.forEach(function (Pb, n) { if (n) c.lineTo(Pb[0], Pb[1]); else c.moveTo(Pb[0], Pb[1]); }); c.stroke();   // the whole bow, faint
          if (!TABIT_PH) { c.strokeStyle = 'rgba(168,130,58,' + (TB_VAR('--tb-path-gold', .75) * trA).toFixed(3) + ')'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(bowStop(0)[0], bowStop(0)[1]);   // travelled so far, in brass
          for (var bi = 1; bi <= kb0; bi++) c.lineTo(bowStop(bi)[0], bowStop(bi)[1]);
          if (mh > 0) c.lineTo(hd11[0], hd11[1]); c.stroke(); }
          c.globalCompositeOperation = 'lighter';
          BPTS.forEach(function (Pb, n) {
            var st11 = n >= 2, on = st11 && n - 2 === near ? hold : 0, sz = st11 ? 2.2 + 2.4 * on : 1.3, al = st11 ? .7 + .3 * on : .4;
            var b12 = oriB(BOWK[n]); sz = lp(1 + 1.6 * b12, sz, exB); al = lp(.55 + .45 * b12, al, exB);   // drawn as Orion draws it, then as the path
            star(Pb[0], Pb[1], sz, trA * al, BOWK[n] === 'pi3' ? '255,248,232' : IVORY);
          });
          c.globalCompositeOperation = 'source-over';
          if (near >= 1 && !TABIT_PH) { var cs = bowStop(near); c.strokeStyle = rgba(IVORY, .5 * hold * trA); c.lineWidth = 1; c.beginPath(); c.arc(cs[0], cs[1], 9, 0, 6.2832); c.stroke();
            c.font = '600 10px Manrope, system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'top'; c.fillStyle = rgba(TB_RGB('--tb-path-label', IVORY), TB_VAR('--tb-path-label-a', .7) * hold * trA); c.fillText(CH[near].t.toUpperCase().split('').join(String.fromCharCode(8202)), cs[0], cs[1] + 15); c.textAlign = 'left'; c.textBaseline = 'alphabetic'; }
        }
        if (mh > 0 && mh < 1) {   // the ball and the brass trail it leaves along the bow
          c.globalCompositeOperation = 'lighter';
          for (var tt11 = 14; tt11 >= 0; tt11--) { var m2 = Math.max(0, mh - tt11 * .02), tp2 = [lp(bowStop(kb0)[0], bowStop(kb0 + 1)[0], m2), lp(bowStop(kb0)[1], bowStop(kb0 + 1)[1], m2)]; dot(tp2[0], tp2[1], 3.2 * (1 - tt11 / 15) + .6, .5 * (1 - tt11 / 15), '168,130,58'); }
          star(hd11[0], hd11[1], 5, .5, '255,244,224');
          c.globalCompositeOperation = 'source-over';
        }
        P.forEach(function (o, j) {
          var a = shapeAt(k, j), b = shapeAt(Math.min(k + 1, CH.length - 1), j), q = io(sg(f, .15 + o.d, .65 + o.d));
          var mx = (a[0] + b[0]) / 2 + o.w * 120 * Math.sin(Math.PI * q), my = (a[1] + b[1]) / 2 - 80 * Math.sin(Math.PI * q);   // a gentle curl on the way
          var x = (1 - q) * (1 - q) * a[0] + 2 * (1 - q) * q * mx + q * q * b[0], y = (1 - q) * (1 - q) * a[1] + 2 * (1 - q) * q * my + q * q * b[1];
          var vis13 = 1;
          var r13 = b13Pos(o, j); x = r13[0]; y = r13[1]; vis13 = r13[2];
          var gf = 0;
          if (GRAV.s > .01 && !(TB13 && r13 && (K13 > 0 || F13 > Q13[0]) && (r13[3] > .02 || r13[4]))) { /* XR2.5.4: on Home the stars still answer the mouse; only once they set off down the path are they out of reach */ var gx = GRAV.sx - x, gy = GRAV.sy - y, gd = Math.hypot(gx, gy); if (gd < GR) { gf = 1 - gd / GR; gf = gf * gf * GRAV.s; x += gx * .42 * gf - gy * .08 * gf; y += gy * .42 * gf + gx * .08 * gf; } }
          var fcol = IVORY;
          var kn9 = TB_AIL && TB13 && r13 && (r13[4] || (CH[K13].k === 'ai' && F13 < Q13[1] * .8));
          if (kn9 && vis13 > .004) {   // XR2.3.14: the AI figure is made of tiny Tabit knots. XR2.5.1: drawn with the very same sprites, sizes, glow, twinkle and glint as the A and I's knots
            var ST9 = TB_STF ? TB_STF() : null, rr9 = (Math.sin(j * 78.233 + 1.7) * 43758.5453) % 1; rr9 = rr9 < 0 ? rr9 + 1 : rr9;
            var s09 = 6 + rr9 * 3, fly9 = r13[4] && r13[7] < 1, u9 = fly9 ? r13[7] : 1, sz9 = fly9 ? lp(2.4, s09, u9) : s09, tn9 = performance.now() / 1000;
            var glint9 = fly9 ? Math.sin(Math.PI * sg(u9, .82, 1)) : 0, a9 = Math.min(1, vis13) * (.78 + .22 * Math.sin(tn9 * 2.6 + rr9 * 6.283));
            if (ST9) { TB_KQ.push([x, y, sz9, a9, glint9, fly9 && r13[7] > .02 && r13[8] ? r13[8] : null]);
            } else {
              if (!TB_KNC) { TB_KNC = realDoc.createElement('canvas'); TB_KNC.width = TB_KNC.height = 40; var kg9 = TB_KNC.getContext('2d'), ks9 = 36 / 501.3; kg9.setTransform(ks9, 0, 0, ks9, 2 + 2.75 * ks9, 20 - 193.2 * ks9); kg9.fillStyle = '#FBF9F4'; kg9.fill(new Path2D(LOGO.mark), 'evenodd'); }
              c.globalAlpha = a9; c.drawImage(TB_KNC, x - sz9 / 2, y - sz9 / 2, sz9, sz9); c.globalAlpha = 1;
            }
          } else if (vis13 > .004) dot(x, y, (1.3) + .5 * gf + (0), vis13 * Math.min(1, (.85) + .3 * gf + (0)), fcol);
        });
        c.globalCompositeOperation = 'source-over';
        var capI = -1; CH.forEach(function (ch, i) { if (ch.k === 'alnilam') capI = i; });
        if (HL && capI >= 0 && TB_V7 && TB13) {   // XR2.2.7
          var SG7 = tbG('alnilam'), mode7 = K13 === capI ? 0 : K13 + 1 === capI ? 1 : -1, s17 = io(sg(F13, Q13[0], Q13[1])), m7 = io(sg(F13, Q13[2], Q13[3])), s27 = io(sg(F13, Q13[4], Q13[5]));
          var C7 = anc13(capI), BL7 = bl13(capI), P07 = bowStop(K13), P17 = bowStop(K13 + 1);
          var sat7 = function (q) {   // a point of the orbit to the screen, placed exactly as the orbit's own stars are
            var p = [SG7.cx + (q[0] - 260) * SG7.s, SG7.cy + gy9(capI) + (q[1] - 210) * SG7.s], x, y, kk;
            if (mode7 === 0 && (m7 > 0 || s17 >= 1)) { x = lp(P07[0], P17[0], m7) + (p[0] - C7[0]) * BL7; y = lp(P07[1], P17[1], m7) + (p[1] - C7[1]) * BL7; }
            else if (mode7 === 0) { kk = lp(1, BL7, s17); x = lp(C7[0], P07[0], s17) + (p[0] - C7[0]) * kk; y = lp(C7[1], P07[1], s17) + (p[1] - C7[1]) * kk; }
            else { kk = lp(BL7, 1, s27); x = lp(P17[0], C7[0], s27) + (p[0] - C7[0]) * kk; y = lp(P17[1], C7[1], s27) + (p[1] - C7[1]) * kk; }
            if (GRAV.s > .01) { var gx = GRAV.sx - x, gy = GRAV.sy - y, gd = Math.hypot(gx, gy); if (gd < GR) { var gq = 1 - gd / GR; gq = gq * gq * GRAV.s; x += gx * .42 * gq - gy * .08 * gq; y += gy * .42 * gq + gx * .08 * gq; } }
            return [x, y];
          };
          // XR2.3: the satellite comes in down the dotted trail, then round the orbit; before, it circled while the trail led nowhere
          var form9 = (mode7 === 0 && F13 < Q13[0]) || (mode7 === 1 && s27 > .98);
          if (form9 && TB_CAPS < 0) TB_CAPS = T; if (mode7 < 0 || (mode7 === 1 && s27 < .5)) TB_CAPS = -1;
          var st9 = TB_CAPS < 0 ? -1 : T - TB_CAPS, sa9 = st9 < 0 ? 0 : Math.min(1, st9 / .5) * (mode7 === 0 ? (1 - m7) * (1 - .35 * s17) : 1);
          if (sa9 > .01) { c.globalCompositeOperation = 'lighter';
            for (var tj9 = 12; tj9 >= 1; tj9--) { if (st9 - tj9 * .045 < 0) continue; var pj9 = sat7(capAt(st9 - tj9 * .045)); dot(pj9[0], pj9[1], (2.2 - tj9 * .13) * 1.2, sa9 * .9 * (1 - tj9 / 13), '168,130,58'); }
            var ps9 = sat7(capAt(st9)); star(ps9[0], ps9[1], 5 * lp(.5, 1, sa9), sa9, '255,248,232'); dot(ps9[0], ps9[1], 2.8 * lp(.6, 1, sa9), sa9, '255,252,244');
            c.globalCompositeOperation = 'source-over'; }
        } else if (HL && capI >= 0) {
          var onCap = near === capI ? hold : 0;
          if (onCap > .9 && capS < 0) capS = T; if (onCap < .2) capS = -1;
          if (capS >= 0 && onCap > .01) {
            var SG = tbG('alnilam'), st = T - capS; c.globalCompositeOperation = 'lighter';
            function gpull(x, y) { if (!TB_GOLD || GRAV.s <= .01) return [x, y]; var gx = GRAV.sx - x, gy = GRAV.sy - y, gd = Math.hypot(gx, gy); if (gd >= 190) return [x, y]; var gf = 1 - gd / 190; gf = gf * gf * GRAV.s; return [x + gx * .42 * gf - gy * .08 * gf, y + gy * .42 * gf + gx * .08 * gf]; }
            for (var tj = 12; tj >= 1; tj--) { if (st - tj * .045 < 0) continue; var qj = capAt(st - tj * .045), pj = gpull(SG.cx + (qj[0] - 260) * SG.s, SG.cy + (qj[1] - 210) * SG.s); dot(pj[0], pj[1], (2.2 - tj * .13) * (1.2), onCap * (.9) * (1 - tj / 13), '168,130,58'); }   // a fading trail
            var qs = capAt(st), ps = gpull(SG.cx + (qs[0] - 260) * SG.s, SG.cy + (qs[1] - 210) * SG.s), sx0 = ps[0], sy0 = ps[1]; star(sx0, sy0, 5, onCap, '255,248,232'); dot(sx0, sy0, 2.8, onCap, '255,252,244');   // the satellite: brighter than any star in the figure
            c.globalCompositeOperation = 'source-over';
          }
        }
      }
    };
  })();
  seed = 173602983;   // and where the scenes after it left it

  // =========================================================================================== run
  var SC = scenes[IDEA];
  if (SC.chapters) CH = SC.chapters;
  if (HL && SC.shell) CH = SC.shell.chapters;
  function frameStart() {
    if (TABIT_OX !== OXS) { OXS = TABIT_OX; WT = W + 2 * OXS; cv.width = Math.round(WT * dpr); }   // the window was resized
    if (TABIT_OY !== OYS) { OYS = TABIT_OY; HT = H + 2 * OYS; cv.height = Math.round(HT * dpr); }
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; c.fillStyle = NIGHT; c.fillRect(0, 0, cv.width, cv.height);
    c.setTransform(dpr, 0, 0, dpr, OXS * dpr, OYS * dpr);   // the 1280 design, centred on the screen
  }
  function washes(u, r) {
    // legibility, as on F2.0: a light navy shade behind the copy column and under the nav
    var sa = sg(u, .05, .3);
    if (sa > 0) { var lw = c.createLinearGradient(-OXS, 0, 860 - OXS, 0); lw.addColorStop(0, rgba('8,13,30', .5 * sa)); lw.addColorStop(.55, rgba('8,13,30', .22 * sa)); lw.addColorStop(1, rgba('8,13,30', 0)); c.globalAlpha = 1 - TABIT_ST; c.fillStyle = lw; c.fillRect(-OXS, -OYS, WT, HT); c.globalAlpha = 1; }   // XR2.8.2: the left wash fades as the copy centres
    var tg = c.createLinearGradient(0, -OYS, 0, 160 - OYS); tg.addColorStop(0, rgba('8,13,30', .3 * sg(r, .5, 1))); tg.addColorStop(1, rgba('8,13,30', 0)); c.fillStyle = tg; c.fillRect(-OXS, -OYS, WT, 160);
  }
  return {
    warm: SC.warm,   // XR3.7: handed on, so makeScene.prepare reaches it (XR3.6's prepare asked for it and it was not there: the figures were still made at first sight, a held frame at each chapter the first time through)
    pointer: function (x, y, on) { GRAV.x = x; GRAV.y = y; GRAV.on = on ? 1 : 0; },
    // XR2.10: the sky alone, as on the home at a page (washes full on), for the click-out pages
    sky: function (t) { T = t; frameStart(); skyLayer(); washes(1, 1); },
    // t: seconds; u: 0..1 across the shell's five pages (Home, AI, Capital, Life & PPLI, Barbados); r: the hand-off, 0..1
    draw: function (t, u, r) {
      T = t; var sh = SC.shell, NS = CH.length - 1, su = sh.map === 'handoff' ? r + 4 * u : NS * u;
      var near = Math.round(su), hold = 1 - sg(Math.abs(su - near), .06, .24);
      frameStart();
      SHELLR = r;
      SC.draw(su, near, hold);
      washes(u, r);
    }
  };
}


// The background: an Alpha Stars scene (the stars become the diagrams), drawn by the shared scroll-sky engine in headless mode. Everything else
// on this board (splash, star-burst, docked logo with its stars under the mouse, AI page, knot page markers, skip) is the
// same as F2.0; only this background differs.
var SS_IDEA = 'diagrams';
function makeScene(cv, V0) {
  var sky = null, failed = false, bound = false, PT = { x: -999, y: -999, on: false };
  function bindPointer() {   // AS12.7: the scene reads the mouse over the board (in board pixels, whatever the zoom)
    bound = true; var root = cv.closest ? cv.closest('[data-tabit-root]') : null; if (!root) return;
    root.addEventListener('pointermove', function (e) { var r = root.getBoundingClientRect(), k = (r.height / TABIT_H) || 1; PT.x = (e.clientX - r.left) / k - TABIT_OX; PT.y = (e.clientY - r.top) / k - TABIT_OY; PT.on = true; });
    root.addEventListener('pointerleave', function () { PT.on = false; });
  }
  function cl(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function sg(x, a, b) { return cl((x - a) / (b - a), 0, 1); }
  var blank = false;   // XR3.6: the canvas has been cleared and hidden (once, not on every frame of the intro and the splash)
  function build() { if (!sky && !failed) { try { sky = makeScrollSky(cv, SS_IDEA, { mark: TABIT_DATA.mark }, { headless: true }); } catch (err) { failed = true; } } }
  // XR3.6: the sky and its star figures are made before the first frame (prepare), while the screen is still black. From XR2.9.1 they were
  // made "in idle time" from 2.5 s into the intro; Safari has no idle time to give, so there they were made inside the intro's own frames
  // (one long frame, then one more for each figure), which showed as the intro catching.
  function prepare() {
    build(); if (!sky) return;
    if (sky.warm) while (sky.warm()) {}
    try { sky.draw(0, 0, 1); } catch (e) {}   // one frame drawn and thrown away: the canvas is sized and the drawing code has run once before the first frame that counts
    var cx0 = cv.getContext('2d'); cx0.setTransform(1, 0, 0, 1, 0, 0); cx0.clearRect(0, 0, cv.width, cv.height); cv.style.opacity = '0'; blank = true;
  }
  function draw(t, u, r) {
    if (r == null) r = 0;
    if (!sky && !failed) build();
    var a = sg(r, .02, .3);   // the scene fades in over the hero's B11 sky (they match), then takes over from it
    if (!sky || a <= 0) { if (!blank) { blank = true; var cx0 = cv.getContext('2d'); cx0.setTransform(1, 0, 0, 1, 0, 0); cx0.clearRect(0, 0, cv.width, cv.height); cv.style.opacity = '0'; } return { ph: 0, day: 0 }; }
    blank = false;
    if (!bound) bindPointer();
    if (sky.pointer) sky.pointer(PT.x, PT.y, PT.on && (u > .02 || r > .98));   /* XR2.5.5: the sky answers the mouse on Home too, not only from the first scroll on */
    sky.draw(t, u, r); cv.style.opacity = a.toFixed(3);
    return { ph: a, day: 0 };
  }
  return { draw: draw, prepare: prepare, ready: function () { return !!sky; } };
}

function tabitDom() {
  return { extras: [], lock: document.querySelector('[data-tabit-lockup]'), mark: document.querySelector('[data-tabit-mark]'), letters: Array.prototype.slice.call(document.querySelectorAll('[data-tabit-letter]')), lineA: document.querySelector('[data-tabit-line="A"]'), lineB: document.querySelector('[data-tabit-line="B"]'), headA: document.querySelector('[data-tabit-head="A"]'), headB: document.querySelector('[data-tabit-head="B"]'), masks: Array.prototype.slice.call(document.querySelectorAll('[data-tabit-mask]')) };
}

// XR2.10: the click-out pages' sky. With init.sky the engine draws only the home's own sky (the same stars from the same
// seeds, twinkle, drift against the mouse and parting round it, drift up with the scroll, the washes, the vignette and the
// grain) into the given host, a fixed layer behind a click-out page, laid out on the home stage's fit (TABIT_FIT), so a
// given window shows the same sky on every page. No hero, no intro, no copy: nothing else of the home runs.
if (init && init.sky) return (function () {
  var cvS = host.querySelector('canvas[data-tabit-scene]'), vigS = host.querySelector('[data-tabit-vig]'), grS = host.querySelector('.tabit-grain');
  grS = grS ? grS.parentNode : null;
  host.innerHTML = '<style>' + (TB_NOGRAIN ? '.tabit-grain{display:none!important}' : '') + TABIT_STYLE + '</style>';
  var stg = realDoc.createElement('div');
  stg.style.cssText = 'position: absolute; left: 0; top: 0; overflow: hidden; pointer-events: none; transform-origin: 0 0; background: #04070F';
  host.appendChild(stg); stg.appendChild(cvS); if (vigS) stg.appendChild(vigS); if (grS) stg.appendChild(grS);
  cvS.style.opacity = '1';
  var k0 = 1, vw = -1, vh = -1, PS = { x: -999, y: -999, on: false }, offS = [], skyS = null, rafS = 0;
  function fitS() {
    vw = window.innerWidth; vh = window.innerHeight; var F = TABIT_FIT(vw, host.clientHeight || vh); k0 = F.s;   // XR3.6: the host's own height: on a phone the sky's layer runs above and below the window, as the home's pinned stage does (TABIT_PHONE)
    stg.style.width = F.w + 'px'; stg.style.height = F.h + 'px'; stg.style.transform = 'scale(' + F.s + ')';
    stg.__w = F.w; stg.__h = F.h; tabitLayout(stg, init.k || 1);
  }
  function onS(el, ev, fn, opt) { el.addEventListener(ev, fn, opt); offS.push(function () { el.removeEventListener(ev, fn, opt); }); }
  onS(window, 'pointermove', function (e) { PS.x = e.clientX / k0 - TABIT_OX; PS.y = e.clientY / k0 - TABIT_OY; PS.on = true; }, { passive: true });
  onS(realDoc.documentElement, 'pointerleave', function () { PS.on = false; });   // realDoc: inside the engine, document is the host-scoped shim
  fitS();
  skyS = makeScrollSky(cvS, SS_IDEA, { mark: TABIT_DATA.mark }, { headless: true });
  function tickS(now) {
    rafS = requestAnimationFrame(tickS);
    if (window.innerWidth !== vw || Math.abs(window.innerHeight - vh) > 120) fitS();   // a phone's toolbar showing and hiding as it scrolls does not refit the sky
    TB_SKYS = TABIT_HAND + Math.max(0, window.scrollY || window.pageYOffset || 0) / k0;   // the page's scroll, in the home's units, from Home's stop
    skyS.pointer(PS.x, PS.y, PS.on); skyS.sky(now / 1000);
  }
  rafS = requestAnimationFrame(tickS);
  return { dispose: function () { cancelAnimationFrame(rafS); offS.forEach(function (f) { f(); }); if (stg.__ro) { stg.__ro.disconnect(); stg.__ro = null; } host.innerHTML = ''; } };
})();

// ---- the page logic (ported from the canvas board's component): intro clock, virtual scroll, input, snapping
var self = {}, seen0 = false;
self.t = 0; self.S = 0; self.St = 0; self.ff = false; self.last = performance.now();
init = init || {};
if (init.t != null) { self.t = init.t; self.S = self.St = init.S || 0; }
else { try { if (window.sessionStorage.getItem('tabit-intro')) { self.t = TABIT_END; seen0 = true; } } catch (e0) {} }   // XR3.6 (Oscar, 16 Nov: "It's only played once"): the intro plays once in a visit; coming back to Home, or loading it again, opens on the splash
self.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (self.reduce) { self.t = 9; }
self.input = function (d) {
  if (self.t < TABIT_END) { if (d > 0) self.ff = true; return; }   // scrolling during the intro fast-forwards it
  var qm = (self.hand ? self.hand.qmax : 600) + TABIT_XQ;
  self.St = Math.max(0, Math.min(TABIT_HAND + qm, self.St + d)); self.lastIn = performance.now();
};
var root = host.querySelector('[data-tabit-root]'), offs = [];
function on(el, ev, fn, opt) { if (!el) return; el.addEventListener(ev, fn, opt); offs.push(function () { el.removeEventListener(ev, fn, opt); }); }
// XR3.4: on a phone the host may hand the engine the document's own scroll: window.__TABIT_NAT = { y(): how far the page is scrolled, in the home's units, from
// the splash (below 0 above it); to(S, smooth): scroll the page there; max(S): the engine tells the host how long the page is }. While it is there the engine
// reads its place from the page (self.St = y()) and listens to no wheel, touch or key itself: a listener that may stop the browser's scroll makes the
// browser wait for it on every move of the finger.
function natOn() { return TABIT_PH && window.__TABIT_NAT ? window.__TABIT_NAT : null; }
self.go = function (S) { var N = natOn(); if (N) N.to(S, true); else self.St = S; self.lastIn = performance.now(); };   // a link inside the home: the page scrolls there itself
var inOff = [];
function onIn(ev, fn, opt) { root.addEventListener(ev, fn, opt); inOff.push(function () { root.removeEventListener(ev, fn, opt); }); }
offs.push(function () { inOff.forEach(function (f) { f(); }); inOff = []; });
on(root, 'pointerdown', function () { try { root.focus({ preventScroll: true }); } catch (err) {} });
var hb = root.querySelector('[data-tabit-home]');
on(hb, 'click', function () { self.go(0); });
on(root, 'keydown', function (e) {
  if (natOn()) return;   // XR3.4: the browser's own keys scroll the page
  var k = e.key; if (k === 'ArrowDown' || k === 'PageDown' || k === ' ') { e.preventDefault(); self.input(k === 'ArrowDown' ? 160 : 520); }
  else if (k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); self.input(k === 'ArrowUp' ? -160 : -520); }
  else if (k === 'Home') { self.St = 0; } else if (k === 'End') { self.input(99999); }
});
// XR3.1 (phone): the intro is the sky alone: one slow zoom, Tabit's star comes up, the brass ring goes round it once, its name under it, then straight to the home (no splash, no knot, no spelt name); the home is the top. The sky is drawn at the screen's pixel density and runs under the browser's bar (TABIT_PHB). Search XR3.1.
// XR3.0: on a phone the page follows the finger one for one (it ran 1.6 times the finger and trailed a third of a second behind it), and when the
// finger lifts it glides on from the speed it had. The glide is the scroll's own ease (S closes on St at 3 a second), so carrying St on by the
// speed x a third of a second leaves the page moving exactly as fast as the finger was: no jump, no stop.
var ty = null, tv = 0, tt = 0, tl = 0, tk = 1, tacc = 0;
function bindInput(nat) {
  inOff.forEach(function (f) { f(); }); inOff = []; self.touch = false; self.fing = false;
  if (nat) {   // XR3.4: only whether a finger is down, and only passively
    onIn('touchstart', function () { self.fing = true; }, { passive: true });
    onIn('touchend', function (e) { self.fing = e.touches.length > 0; }, { passive: true }); onIn('touchcancel', function (e) { self.fing = e.touches.length > 0; }, { passive: true });
    return;
  }
  onIn('wheel', function (e) { e.preventDefault(); self.input(e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY); }, { passive: false });
  onIn('touchstart', function (e) { ty = e.touches[0].clientY; tv = 0; tacc = 0; tt = tl = performance.now(); self.touch = TABIT_PH; if (TABIT_PH) { self.St = self.S; tk = TABIT_H / (root.getBoundingClientRect().height || TABIT_H); } }, { passive: true });
  onIn('touchmove', function (e) { if (ty == null) return; var y = e.touches[0].clientY; e.preventDefault();
  if (!TABIT_PH) { self.input((ty - y) * 1.6); ty = y; return; }
  var d = (ty - y) * tk, now = performance.now(); ty = y; tl = now; tacc += d;
  if (now - tt >= 8) { tv = tv * .6 + (tacc / (now - tt)) * .4; tacc = 0; tt = now; }   // the finger's speed over at least 8 ms (events that arrive together would otherwise read as a burst)
  self.input(d); }, { passive: false });
function touchEnd() { if (self.touch && self.t >= TABIT_END && performance.now() - tl < 80 && Math.abs(tv) > .05) self.input(Math.max(-1400, Math.min(1400, tv * 333))); self.touch = false; ty = null; }
  onIn('touchend', touchEnd, { passive: true }); onIn('touchcancel', touchEnd, { passive: true });
}
var nb0 = !!window.__TABIT_NAT;   // XR3.4: the host has said, before the first frame, that this is a phone's page: no listener that can stop the scroll is ever bound there
bindInput(nb0); self.natB = nb0; if (nb0) { root.classList.add('tb-nat'); self.nat0 = true; self.natMax = -1; }
on(root, 'pointermove', function (e) {
  if (!self.hero) return; var r = root.getBoundingClientRect();
  self.hero.pointer(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
  if (self.hero.mouse) self.hero.mouse(((e.clientX - r.left) / r.width * TABIT_W - TABIT_OX), (e.clientY - r.top) / r.height * TABIT_H - TABIT_OY, true);
  if (self.hand && self.hand.ptr) self.hand.ptr(((e.clientX - r.left) / r.width * TABIT_W - TABIT_OX), (e.clientY - r.top) / r.height * TABIT_H - TABIT_OY);
});
on(root, 'pointerleave', function () { if (self.hand && self.hand.ptr) self.hand.ptr(-999, -999); if (self.hero) { self.hero.pointer(0, 0); if (self.hero.mouse) self.hero.mouse(-999, -999, false); } });
Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-ch]'), function (b) { on(b, 'click', function () { var k = +b.getAttribute('data-tabit-ch'); if (self.t < TABIT_END) self.t = TABIT_END; self.go(TB_SK(k)); }); });
// XR2.2.5: the coordinates take you to About us
var cEl = root.querySelector('[data-tabit-coords]'), goAbout = function () { if (self.t < TABIT_END) self.t = TABIT_END; self.go(TB_SK(5)); };
on(cEl, 'click', goAbout); on(cEl, 'keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goAbout(); } });
on(root.querySelector('[data-tabit-cue]'), 'click', function () { if (self.t < TABIT_END) { self.ff = true; return; } var qm = self.hand ? self.hand.qmax : 600; self.go(self.St < TABIT_HAND - 1 ? TABIT_HAND : TABIT_HAND + qm); });
on(root.querySelector('[data-tabit-skip]'), 'click', function () { self.t = TABIT_END; self.ff = false; });
on(root.querySelector('.tabit-replay'), 'click', function () { self.t = 0; self.S = 0; self.St = 0; self.ff = false; var N = natOn(); if (N) N.to(0, false); });
var skEl = host.querySelector('[data-tabit-skip]'), skA = null, seen = seen0;
self.tick = function () {
  var now = performance.now(), dt = Math.min(.05, (now - self.last) / 1000); self.last = now;
  tabitLayout(root);   // re-lays the site out when the width changes (a no-op otherwise)
  if (TB_POLL.length) for (var pi = TB_POLL.length - 1; pi >= 0; pi--) { if (TB_POLL[pi]() === false) TB_POLL.splice(pi, 1); }   // XR2.7.3
  if (!self.boundGL && !self.failed) {   // the first frame: the hero and the hand-off are made, and all they will need (XR3.6: once, not asked for again on every frame)
    var gl = host.querySelector('canvas[data-tabit-gl]'), ov = host.querySelector('canvas[data-tabit-ov]');
    if (gl && ov) {
      try { tabitLayout(root, init.k || 1); self.hero = makeTabitHero(gl, ov, TABIT_DATA, tabitDom()); self.boundGL = gl; self.hand = makeHandoff(self.hero, root, TABIT_VARIANT); self.hand.prepare(); }
      catch (err) { self.failed = true; if (window.console) console.error('Tabit hero failed', err); }
      now = performance.now(); dt = 0; self.last = now;   // the making is not counted as time passed
    }
  }
  // XR3.4: the page's own scroll, where the host gives it (a phone)
  var N = natOn();
  if (!!N !== self.natB) { self.natB = !!N; bindInput(!!N); root.classList.toggle('tb-nat', !!N); self.nat0 = !!N; self.natMax = -1; }
  if (N) {
    var smax = TABIT_HAND + (self.hand ? self.hand.qmax : 600) + TABIT_XQ;
    if (smax !== self.natMax) { self.natMax = smax; N.max(smax); }
    if (self.nat0) { self.nat0 = false;
      if (self.t >= TABIT_END && self.S > 1) N.to(self.S, false);   // the engine was already somewhere (the window was narrowed to a phone's width): the page goes there
      else if (self.t < 1 && N.y() > 24) { self.t = TABIT_END; self.S = Math.min(smax, N.y()); }   // the page was already scrolled when the home came up (the browser brought you back to your place): no intro, straight there
      self.natY = N.y(); }
    var ny = N.y();
    if (ny !== self.natY) { self.natY = ny; self.lastIn = now; }
    if (self.t < TABIT_END) { if (ny > 24) self.ff = true; self.St = 0; self.natC = true; }   // scrolling during the intro fast-forwards it; the page is caught up with when it ends
    else { self.St = Math.max(0, Math.min(smax, ny));
      if (!self.fing && now - (self.lastIn || 0) > 240) {   // the page has come to rest with no finger on it (240 ms, the wait the compass's hold has always had)
        var tg = null, yn = self.St - TABIT_HAND - 720;
        if (ny < -1) tg = 0;   // above the splash (the sky that stands under the status bar was pulled into view): back to the splash
        else if (TB_PIN && yn > 1 && yn < TB_PIN - 1) { var ln = Math.round(yn / TB_STEPPX) * TB_STEPPX; if (Math.abs(ln - yn) > 1.5) tg = TABIT_HAND + 720 + ln; }   // between two of the compass's lines: on to the nearer one, as before
        if (tg != null) { N.to(tg, true); self.lastIn = now; } } }
  }
  self.t += dt * (self.ff ? 7 : 1); if (self.t >= TABIT_END) self.ff = false;
  if (skEl) { var ska = (Math.min(1, Math.max(0, (self.t - .6) / .5)) * Math.min(1, Math.max(0, (TABIT_END - .3 - self.t) / .4))).toFixed(3); if (ska !== skA) { skA = ska; skEl.style.opacity = ska; skEl.style.pointerEvents = ska > .1 ? 'auto' : 'none'; } }   // Skip intro, shown only while the intro plays (XR3.6: written when it changes)
  if (!seen && self.t >= TABIT_END) { seen = true; try { window.sessionStorage.setItem('tabit-intro', '1'); } catch (e3) {} }   // XR3.6: the intro has played in this visit
  if (!N && TB_PIN && self.t >= TABIT_END && now - (self.lastIn || 0) > 240 && !self.touch) {   // XR2: while the page holds, settle on the nearest line when the wheel stops
    var yy = self.St - TABIT_HAND - 720; if (yy > 1 && yy < TB_PIN - 1) self.St += (Math.round(yy / TB_STEPPX) * TB_STEPPX - yy) * Math.min(1, dt * 7); }
  if (N) { if (self.natC) { self.S += (self.St - self.S) * (1 - Math.exp(-dt * 7)); if (Math.abs(self.St - self.S) < 1) { self.S = self.St; self.natC = false; } } else self.S = self.St; }   // XR3.4: the engine stands exactly where the page is scrolled; it only eases when it has to catch up after the intro
  else { self.S += (self.St - self.S) * (1 - Math.exp(-dt * (self.touch ? 30 : (3)))); if (Math.abs(self.St - self.S) < .3) self.S = self.St; }
  // XR2.7.2: frame governor. Watches the gaps between frames; when more than 12% of a window are dropped it steps the quality down:
  // level 1 renders every other frame on a 120 Hz display (a steady 60), levels 2 and 3 lower the sky's pixel ratio. Never steps back up.
  var G = self.gov || (self.gov = { gaps: [], lvl: 0, skip: false, hz: 60, base: 0 });
  if (self.last0) { G.gaps.push(now - self.last0); if (G.gaps.length >= 72) {
    var sorted = G.gaps.slice().sort(function (a, b) { return a - b; }), ref = sorted[Math.floor(sorted.length * .2)]; G.hz = ref < 10 ? 120 : 60;
    var budget = (G.hz === 120 && G.lvl >= 1 ? 2 : 1) * (1000 / G.hz) * 1.45, dropped = G.gaps.filter(function (x) { return x > budget; }).length / G.gaps.length;
    if (dropped > .12 && G.lvl < 3 && self.t < TABIT_END + 2 && !window.__TABIT_NOGOV && !(TABIT_PH && self.t < 1.6)) {   // XR3.1: on a phone the first frames (the page still loading) do not count
      G.lvl++; if (G.hz !== 120 && G.lvl === 1) G.lvl = 2;   // nothing to halve on a 60 Hz display: go straight to the pixel ratio
      if (G.lvl >= 2 && self.hero && self.hero.setDpr) { if (!G.base) G.base = self.hero.getDpr(); self.hero.setDpr(G.base * (G.lvl === 2 ? .75 : .55)); }
      if (window.console && (init.debug || window.__TABIT_DEBUG)) console.log('tabit governor: level ' + G.lvl + ' (' + Math.round(dropped * 100) + '% dropped at ' + G.hz + ' Hz)');
    }
    G.gaps.length = 0; } }
  self.lastGap = self.last0 ? now - self.last0 : 0; self.last0 = now;
  var DG = self.diag; if (DG === undefined) { try { DG = /diag/.test(location.search + location.hash) || !!window.__TABIT_DIAG; } catch (e2) { DG = false; }
    if (DG) { DG = self.diag = { el: document.createElement('div'), gaps: [], ticks: [], stalls: [], n: 0 }; DG.el.style.cssText = 'position:absolute;left:16px;top:96px;z-index:40;font:11px/15px ui-monospace,Menlo,monospace;color:#FBF9F4;background:rgba(4,7,15,.72);padding:8px 10px;border:1px solid rgba(251,249,244,.25);border-radius:2px;white-space:pre;pointer-events:none;letter-spacing:0'; root.appendChild(DG.el); } else self.diag = false; }
  if (DG) { DG.t0 = performance.now(); if (self.lastGap) { DG.gaps.push(self.lastGap); if (DG.gaps.length > 240) DG.gaps.shift(); } }
  G.skip = G.lvl >= 1 && G.hz === 120 ? !G.skip : false;
  if (self.hero) { if (!G.skip) { self.hero.render(self.t, !!self.hand && self.hand.covered(self.S)); if (self.hand) self.hand.update(self.t, self.S); } }
  if (DG) { var tk = performance.now() - DG.t0; DG.ticks.push(tk); if (DG.ticks.length > 240) DG.ticks.shift(); if (tk > 20 || (self.lastGap > 40 && self.t > .3)) DG.stalls.push('t=' + self.t.toFixed(2) + 's  gap ' + Math.round(self.lastGap) + 'ms  js ' + Math.round(tk) + 'ms'); if (DG.stalls.length > 7) DG.stalls.shift();
    if (++DG.n % 30 === 0) { var gs = DG.gaps.slice(-240).sort(function (a, b) { return a - b; }), ts = DG.ticks.slice(-240), hz = gs.length ? 1000 / gs[Math.floor(gs.length * .2)] : 0, bud = hz ? 1000 / hz * 1.45 : 30, drop = gs.length ? gs.filter(function (x) { return x > bud; }).length / gs.length : 0;
      var glc = host.querySelector('canvas[data-tabit-gl]'), ua = navigator.userAgent, br = /Chrome\//.test(ua) ? 'Chrome ' + (ua.match(/Chrome\/(\d+)/) || [])[1] : /Safari\//.test(ua) ? 'Safari ' + (ua.match(/Version\/([\d.]+)/) || [])[1] : /Firefox\//.test(ua) ? 'Firefox' : 'browser';
      DG.el.textContent = 'TABIT diag  ' + br + '  ' + innerWidth + 'x' + innerHeight + ' @' + (window.devicePixelRatio || 1) + 'x\n'
        + 'display ~' + Math.round(hz) + ' Hz   fps ' + (gs.length ? Math.round(1000 / (gs.reduce(function (a, b) { return a + b; }, 0) / gs.length)) : 0) + '   dropped ' + Math.round(drop * 100) + '%   gap p90 ' + (gs.length ? gs[Math.floor(gs.length * .9)].toFixed(1) : '-') + 'ms\n'
        + 'js/frame mean ' + (ts.reduce(function (a, b) { return a + b; }, 0) / Math.max(1, ts.length)).toFixed(1) + 'ms  max ' + Math.max.apply(null, ts.concat([0])).toFixed(1) + 'ms\n'
        + 'sky canvas ' + (glc ? glc.width + 'x' + glc.height : '-') + '  W ' + TABIT_W + '  governor level ' + G.lvl + (G.skip !== undefined && G.lvl >= 1 && G.hz === 120 ? ' (60 lock)' : '') + '  t ' + self.t.toFixed(1) + 's\n'
        + (DG.stalls.length ? 'stalls:\n  ' + DG.stalls.join('\n  ') : 'stalls: none'); } }
  else if (self.failed) { var d = tabitDom(); [d.mark].concat(d.letters).forEach(function (el) { if (el) { el.style.opacity = 1; el.style.transform = 'none'; } }); d.masks.forEach(function (m) { m.setAttribute('stroke-width', 60); }); }
  self.raf = requestAnimationFrame(self.tick);
};
self.raf = requestAnimationFrame(self.tick);
return {
  dispose: function () { cancelAnimationFrame(self.raf); offs.forEach(function (f) { f(); }); if (root.__ro) { root.__ro.disconnect(); root.__ro = null; } try { if (self.hero) self.hero.dispose(); } catch (err) {} if (self.hand) self.hand.dispose(); host.innerHTML = ''; },
  // for testing
  _state: self
};

}

// XR2.10: the home stage's fit (TabitHome.tsx's numbers): the scale follows the window's width, 1 unit = 1 px from 960 to 1152 px
// wide and at most 1.25 from 1440; a shorter window may tighten it only to .62; the stage runs to the window's edges, at least 720 tall
function TABIT_FIT(vw, vh) {
  if (vw < 600) { var sp = Math.min(vw / 390, 430 / 390); return { s: sp, w: Math.round(vw / sp), h: Math.round(vh / sp) }; }   // XR3.0: a phone: the home's phone stage (390 units wide), so the stars are the size they are on the home, not 40 % of it
  var sw = vw >= 1152 ? Math.min(1.25, vw / 1152) : Math.min(1, vw / 960), s = Math.min(sw, Math.max(vh / 720, .62));
  return { s: s, w: Math.round(Math.min(4096, vw / s)), h: Math.round(Math.max(720, vh / s)) };
}
// XR3.6: Safari's bars on a phone (iOS 26). Safari shows a page under its status bar and its toolbar. What it does there is read from its
// own source (WebKit: LocalFrameView::fixedContainerEdges, WKWebView's colour extension views, WKContentView's fixed clipping view) and
// was proven on Oscar's phone on the home (XR3.4, XR3.5):
// 1. It covers a bar's zone with a flat colour when the element at the middle of that edge of the screen sits in a pinned box (fixed, or
//    sticky) at least nine-tenths as wide as the screen and no taller than 1.05 times it. Our nav bars and Framer's badge holder are such
//    boxes. tabitEdge puts a marker in front of them at the middle of each edge: nothing to see or tap, and too small to count.
// 2. With no cover, whatever lies there is drawn, pinned or not, as long as it is inside the page's own length: so the sky and the nav
//    bar's glass run TABIT_PHONE.top above the view and .bot below it. Above the page's top and below its end there is only the page's
//    ground colour, so at a page's top the ground takes the glass's colour and the status bar stands on what reads as the nav bar.
var TABIT_PHONE = { top: 100, bot: 140, glass: '#060A17' };   // glass: the nav bar's glass (rgba(8,13,30,.5)) over Night, as one colour
// The markers are 12 px square (Safari looks 4 px in from the edge). They share the highest z-index with Framer's holder, so they have to
// be the last things in the body: they are put back there when something is added after them, eight times at most so two such things
// cannot chase each other. Each has an empty child on purpose: a box with no child and no background is one Safari looks through.
// One pair serves everyone who asks (going from a click-out page to the home, both ask for a frame). Returns the function that gives
// the caller's share back; the last to go takes the markers away.
var TB_EDGE = null;
function tabitEdge() {
  var E = TB_EDGE;
  if (!E) {
    var body = document.body, n = 0, marks = ['top', 'bottom'].map(function (side) {
      var m = document.createElement('div'); m.setAttribute('data-tb-edge', side); m.setAttribute('aria-hidden', 'true');
      m.style.cssText = 'position:fixed;left:calc(50% - 6px);' + side + ':0;width:12px;height:12px;z-index:2147483647;pointer-events:none';
      m.appendChild(document.createElement('span')); body.appendChild(m); return m;
    });
    var last = typeof MutationObserver !== 'undefined' ? new MutationObserver(function () { if (body.lastElementChild !== marks[1] && n < 8) { n++; body.appendChild(marks[0]); body.appendChild(marks[1]); } }) : null;
    if (last) last.observe(body, { childList: true });
    E = TB_EDGE = { n: 0, off: function () { if (last) last.disconnect(); marks.forEach(function (m) { if (m.parentNode) m.parentNode.removeChild(m); }); } };
  }
  E.n++;
  return function () { if (!--E.n) { E.off(); TB_EDGE = null; } };
}

// XR2.10: one sky per document behind the click-out pages. Each TabitPage or TabitArticle on a page takes a share and releases
// it when it goes; the last to go removes the sky. The sky is a fixed layer under the page (z-index -1), so the page's own
// grounds (body, the page frame, the components) are made clear while it is up and restored afterwards.
var TB_SKYL = { n: 0, el: null, inst: null, undo: [], off: null };
function mountTabitSky(from, opts) {
  TB_SKYL.n++;
  if (!TB_SKYL.el) {
    var el = document.createElement('div'); el.setAttribute('data-tabit-sky', '1'); el.setAttribute('aria-hidden', 'true');
    var de = document.documentElement; TB_SKYL.undo.push([de, de.style.background]); de.style.background = '#04070F';
    el.style.cssText = 'position: fixed; left: 0; right: 0; z-index: -1; pointer-events: none; overflow: hidden; background: #04070F';
    // XR3.6: on a phone the page runs under Safari's bars (see TABIT_PHONE). The sky stands where the home's pinned stage does (bottom: for a
    // browser that does not know lvh); the nav bar's glass runs on up under the status bar (.tb9 .tb9-nav: ahead of the pages' own
    // .tb9-nav, which come later in the document). It follows the window's width, as the home does: a phone turned upright gets it.
    var T = TABIT_PHONE.top, B = TABIT_PHONE.bot, css = document.createElement('style'), mq = window.matchMedia('(max-width:599.98px)'), offEdge = null, atTop = false;
    css.textContent = '[data-tabit-sky]{top:0;bottom:0}@media (max-width:599.98px){[data-tabit-sky]{top:' + -T + 'px;bottom:' + -B + 'px;height:calc(100lvh + ' + (T + B) + 'px)}.tb9 .tb9-nav{top:' + -T + 'px;height:calc(88*var(--u) + ' + T + 'px);padding-top:' + T + 'px}}';
    document.head.appendChild(css); document.body.insertBefore(el, document.body.firstChild); TB_SKYL.el = el;
    var onTop = function () { var t = !!offEdge && (window.scrollY || 0) < 2 * T; if (t !== atTop) { atTop = t; de.style.backgroundColor = t ? TABIT_PHONE.glass : '#04070F'; } };
    var onMq = function () {
      if (mq.matches === !!offEdge) return;
      if (offEdge) { offEdge(); offEdge = null; window.removeEventListener('scroll', onTop); } else { offEdge = tabitEdge(); window.addEventListener('scroll', onTop, { passive: true }); }
      onTop();
    };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
    onMq();
    TB_SKYL.off = function () { if (mq.removeEventListener) mq.removeEventListener('change', onMq); if (offEdge) { offEdge(); window.removeEventListener('scroll', onTop); } if (css.parentNode) css.parentNode.removeChild(css); };
    try { TB_SKYL.inst = runTabit(el, null, Object.assign({}, opts || {}, { sky: true })); } catch (err) { if (window.console) console.error('Tabit sky failed', err); }
  }
  for (var a = from && from.parentElement; a && a !== document.documentElement; a = a.parentElement) {   // clear the grounds between the page and the sky
    if (a.__tbClear) continue; var bg = getComputedStyle(a).backgroundColor;
    if (bg && bg !== 'transparent' && !/rgba\(.*,\s*0\)$/.test(bg)) { a.__tbClear = 1; TB_SKYL.undo.push([a, a.style.background]); a.style.background = 'transparent'; }
  }
  var done = false;
  return function release() {
    if (done) return; done = true; TB_SKYL.n--;
    requestAnimationFrame(function () {   // a page change mounts the next page's share before this frame ends
      if (TB_SKYL.n > 0 || !TB_SKYL.el) return;
      try { if (TB_SKYL.inst) TB_SKYL.inst.dispose(); } catch (err) {}
      if (TB_SKYL.el.parentNode) TB_SKYL.el.parentNode.removeChild(TB_SKYL.el);
      if (TB_SKYL.off) { TB_SKYL.off(); TB_SKYL.off = null; }
      TB_SKYL.undo.forEach(function (u) { u[0].style.background = u[1]; if (u[0].__tbClear) u[0].__tbClear = 0; }); TB_SKYL.undo = [];
      TB_SKYL.el = TB_SKYL.inst = null;
    });
  };
}

if (typeof window !== 'undefined') { window.runTabit = runTabit; window.TABIT_FONTS = TABIT_FONTS; }   // XR2.11: only in a browser. Since XR2.10 the click-out pages import this file (for the sky), and on Framer's server this line threw, so no page was rendered there: the HTML Framer serves held none of the page's copy


export { runTabit, TABIT_FONTS, TABIT_FIT, mountTabitSky, TABIT_PHONE, tabitEdge }
