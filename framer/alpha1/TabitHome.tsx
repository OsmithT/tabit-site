import { useEffect, useRef } from "react"
import { runTabit } from "./TabitSite.js"
import { TABIT_HOME_CSS } from "./TabitHomeStyles.js"

// Tabit XR2.7 home page: the animated night-sky site. Put it on the "/" page, full width and full height.
// XR2.9.6: the design keeps its size the way apple.com does: the scale follows the screen's width (capped at 1.25), a shorter
// window can tighten it only to 0.8, and below that the bottom is cropped rather than everything shrinking. The sky fills the
// screen edge to edge at any width (XR2.9.7).
// Squarer than 4:3 the stage keeps 960 units of width and grows taller, so the sky fills the screen and the engine stacks the content.
// XR3.0: a phone (under 600 px wide) has its own stage, 390 units wide, and the engine composes the site for it (TabitSite.js, tbPhoneLayout).
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js"
const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@300;400;500;600&display=swap"
const OPTIONS = { k: 1, opt: 37, x23: true, x2313: true, x2310: true, x237: true, x234: true, noMark: true, x251: true }
const H = 720, WMIN = 960, WMAX = 4096, SMIN = 0.62, SMAX = 1.25, PHONE_W = 390, PHONE_SMAX = 430 / 390
// XR3.4 (15 Nov 2026, Oscar: "Do the rebuild"): on a phone the home is a real page that scrolls. The stage is pinned (position: sticky) in a
// tall track laid in the document's body, and the engine reads the document's own scroll (window.__TABIT_NAT, TabitSite.js natOn): the
// browser's scrolling, momentum, rubber band and bars are its own, as on any page, and nothing here listens to the wheel or the finger.
// A phone's browser draws a page under its status bar and toolbar only where the page itself runs on there, so the pinned stage stands
// PH_TOP above the top of the part in view and runs PH_BOT below the tallest the view gets (100lvh); the engine lays the page out in the
// smallest view (100svh), so nothing moves when the bars tuck away (TABIT_PHT, TABIT_PHB). The page rests PH_TOP down: above that is only
// the sky that stands under the status bar, and the engine brings the page back if it is left there.
// It replaces XR3.1's page held scrolled PH_TOP down, which was never published.
// The page ends PH_RISE px of scroll after the last chapter, and the footer rises over that. A page cannot be drawn past its own end, so
// the track is cut there (clip: overflow clip, which does not make it a scroller, so the pin still sticks to the window) while the
// track itself runs on below the cut: the stage stays pinned to the very end instead of sliding up as the page runs out.
const PH_TOP = 100, PH_BOT = 140, PH_RISE = 240, PH_S0 = 7000   // PH_S0: the page's length in the home's units until the engine says (natMax)
// Ashleigh13.11 (XR3.3): the site footer (as pages/legal.js: the full regulatory text, © 2026, Contact Us · Privacy Policy · Terms & Conditions)
// rises over the foot of the stage when you keep scrolling past the last chapter, and goes back down as you scroll back. Scroll-driven and
// reversible; the engine is not changed: the wheel and touch are taken at the stage only while the footer is moving or once the page is at its end.
const FOOT_HTML = "<div style=\"max-width: 920px\"><p style=\"margin: 0\">Tabit Insurance SCC (“Tabit”) is regulated and licensed in Barbados by the Financial Services Commission of Barbados. Tabit is not regulated or licensed outside of Barbados and deals only through appropriately licensed insurance brokers. To ensure compliance regarding our insurance support of companies domiciled in jurisdictions outside of Barbados, any request for insurance coverage must be submitted through our appropriate broking channels. The publication and delivery of information herein is not intended as a direct solicitation for the purchase of insurance coverage.</p><p style=\"margin: 8px 0 0\"><span>© 2026 Tabit - All Rights Reserved.</span><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/contact\">Contact Us</a><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/privacy-policy\">Privacy Policy</a><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/terms-conditions\">Terms &amp; Conditions</a></p></div>"
// XR3.4: no grey flash when the footer is tapped on a phone, and its links take a tap at once (the footer is not inside the engine's root, which sets both for the rest of the page)
const FOOT_CSS = "[data-tb-foot]{-webkit-tap-highlight-color:transparent}[data-tb-foot] a{color:inherit;text-decoration:none;transition:color .25s ease;touch-action:manipulation}[data-tb-foot] a:active{color:#A8823A}@media (hover:hover) and (pointer:fine){[data-tb-foot] a:hover{color:#A8823A}}[data-tb-foot] a:focus-visible{outline:2px solid #A8823A;outline-offset:3px}"

function once(id: string, make: () => HTMLElement) {
    if (!document.getElementById(id)) { const el = make(); el.id = id; document.head.appendChild(el) }
}
function loadThree(): Promise<any> {
    const w = window as any
    if (w.THREE) return Promise.resolve(w.THREE)
    if (w.__tabitThree) return w.__tabitThree
    w.__tabitThree = new Promise((resolve, reject) => {
        const s = document.createElement("script")
        s.src = THREE_URL; s.onload = () => resolve(w.THREE); s.onerror = reject
        document.head.appendChild(s)
    })
    return w.__tabitThree
}

export default function TabitHome(props: { style?: any }) {
    const wrap = useRef<HTMLDivElement>(null)
    const stage = useRef<HTMLDivElement>(null)
    const host = useRef<HTMLDivElement>(null)

    useEffect(() => {
        once("tabit-fonts", () => Object.assign(document.createElement("link"), { rel: "stylesheet", href: FONT_URL }))
        once("tabit-home-css", () => Object.assign(document.createElement("style"), { textContent: TABIT_HOME_CSS }))
        once("tabit-home-foot-css", () => Object.assign(document.createElement("style"), { textContent: FOOT_CSS }))
        let inst: any = null, alive = true
        loadThree().then((THREE) => { if (alive && host.current) inst = runTabit(host.current, THREE, OPTIONS) })
        const body = document.body, bmh = body.style.minHeight
        const S0 = stage.current   // held here: React clears the ref before this effect's clean-up runs, and on a phone the stage is in the document's body
        // XR3.4: a phone. track: as tall as the page is long; pin: the pinned window the stage is in; ps: px to a unit; smax: the engine's page length (units)
        let clip: HTMLDivElement | null = null, track: HTMLDivElement | null = null, pin: HTMLDivElement | null = null, pSv: HTMLDivElement | null = null, pLv: HTMLDivElement | null = null
        let ps = 1, smax = PH_S0, pinH = 0, lvh = 0, docH = 0, fitKey = ""
        const canClip = typeof CSS !== "undefined" && !!CSS.supports && CSS.supports("overflow", "clip")   // not before Safari 16: there the track ends with the page, and the stage slides up over the page's last PH_BOT or so
        const yEnd = () => PH_TOP + smax * ps   // the scroll at which the last chapter has ended and the footer starts to rise
        const size = () => { if (clip && track) { docH = Math.round(yEnd() + PH_RISE + lvh); clip.style.height = docH + "px"; body.style.minHeight = docH + "px"; track.style.height = Math.round(docH + (canClip ? pinH : 0)) + "px" } }
        const nat = {
            y: () => (window.scrollY - PH_TOP) / ps,
            to: (S: number, smooth: boolean) => window.scrollTo({ top: Math.round(PH_TOP + S * ps), behavior: smooth ? "smooth" : "auto" }),   // "auto": at once (a browser that does not know "instant" would throw on it)
            max: (S: number) => { if (S !== smax) { smax = S; size(); onScroll() } },
        }
        const probe = (h: string) => { const d = document.createElement("div"); d.style.cssText = "position:fixed;left:0;top:0;width:0;height:" + h + ";visibility:hidden;pointer-events:none"; body.appendChild(d); return d }
        const enter = () => {
            clip = document.createElement("div"); clip.setAttribute("data-tb-track", "1")
            clip.style.cssText = "position:absolute;left:0;top:0;width:100%;z-index:1;overflow:clip"
            track = document.createElement("div")
            pin = document.createElement("div")
            pin.style.cssText = "position:sticky;top:-" + PH_TOP + "px;width:100%;overflow:hidden;background:#04070F"
            track.appendChild(pin); pin.appendChild(S0!); clip.appendChild(track); body.appendChild(clip)
            pSv = probe("100svh"); pLv = probe("100lvh")
            ;(window as any).__TABIT_NAT = nat
            footBind(false)
        }
        const leave = () => {
            if (wrap.current && S0) wrap.current.appendChild(S0)
            if (clip) clip.remove(); if (pSv) pSv.remove(); if (pLv) pLv.remove()
            clip = track = pin = pSv = pLv = null
            if ((window as any).__TABIT_NAT === nat) delete (window as any).__TABIT_NAT
            delete (window as any).__TABIT_PHT; delete (window as any).__TABIT_PHB
            body.style.minHeight = bmh; setFoot(0)
        }
        const fit = () => {
            if (!wrap.current || !S0) return
            const r = wrap.current.getBoundingClientRect()
            if (!r.width || !r.height) return
            // XR2.9.6: sized like apple.com, not to fill the window. The size follows the WIDTH (1 unit = 1 px from 960 to 1152 px wide,
            // growing to at most 1.25 at 1440 and above); a shorter window may tighten it only down to SMIN, and below that the page
            // keeps its size and the bottom is cropped. A very wide window gets night either side; a big monitor no longer blows everything up.
            // XR3.0: a phone (narrower than 600 px) gets a stage of its own, 390 units wide, one unit to a pixel on a 390 px phone and in
            // proportion on narrower ones and up to 430 px (1.1 px a unit); wider than that the stage grows wider instead of the type larger; the engine lays that stage out for a phone (TABIT_PH). Before, a phone was given the
            // 960-unit stage shrunk to fit, which left every word and button at about 40 % of its size.
            const phone = r.width < 600
            const fresh = phone && !track
            if (fresh) enter(); else if (!phone && track) { leave(); footBind(true); window.scrollTo(0, 0) }
            const sw = phone ? Math.min(r.width / PHONE_W, PHONE_SMAX) : r.width >= 1152 ? Math.min(SMAX, r.width / 1152) : Math.min(1, r.width / WMIN)
            const s = phone ? sw : Math.min(sw, Math.max(r.height / H, SMIN))
            // a phone: the smallest and the tallest the view gets (the browser's bars showing, and tucked away). Read from CSS's own units, so
            // the bars coming and going as the page scrolls change nothing here; a browser without them gives the window's height for both.
            const ih = Math.max(320, window.innerHeight), sv = phone ? Math.max(320, (pSv && pSv.offsetHeight) || ih) : 0, lv = phone ? Math.max(sv, (pLv && pLv.offsetHeight) || ih) : 0
            // nothing to do when nothing it depends on has changed: a phone fires resize each time its bars show or hide
            const key = [phone, r.width, phone ? 0 : r.height, sv, lv].join("|")
            if (key === fitKey) { onScroll(); return }
            fitKey = key
            ps = s; lvh = lv; pinH = phone ? PH_TOP + lv + PH_BOT : 0
            const w = phone ? r.width / s : Math.min(WMAX, r.width / s)
            const h = phone ? pinH / s : Math.max(H, r.height / s)   // squarer than 4:3 the stage grows taller and the engine stacks (DESIGN.md rule 8)
            const phb = phone ? (pinH - PH_TOP - sv) / s : 0
            ;(window as any).__TABIT_PHT = phone ? PH_TOP / s : 0
            ;(window as any).__TABIT_PHB = phb
            const st = S0.style
            st.width = Math.round(w) + "px"
            st.height = Math.round(h) + "px"
            st.transform = `translate(-50%, 0) scale(${s})`
            const ft = foot()   // Ashleigh13.11 (XR3.3): the site footer. XR3.4: on a phone its glass runs to the stage's foot, under the browser's toolbar, and its text ends above the smallest view's foot
            if (ft) ft.style.padding = phone ? "18px 16px " + Math.round(22 + phb) + "px" : "22px 80px 26px"
            if (phone && pin) { pin.style.height = Math.round(pinH) + "px"; size(); if (fresh && window.scrollY < PH_TOP) window.scrollTo(0, PH_TOP); onScroll() }   // the page starts PH_TOP down, at the splash
        }
        // Ashleigh13.11 (XR3.3): the footer's rise, 0 (hidden below the stage) to 1 (in view), driven by the wheel or the finger
        let footF = 0, touchY: number | null = null
        let footEl: HTMLElement | null | undefined
        const foot = () => footEl !== undefined ? footEl : (footEl = S0 ? (S0.querySelector("[data-tb-foot]") as HTMLElement | null) : null)   // looked up once: it is asked for as the page scrolls
        const atEnd = () => {   // the engine's page has scrolled to its last chapter (its scroller's translate has reached data-h - 720)
            const sc = S0 && (S0.querySelector("[data-tabit-scroll]") as HTMLElement | null); if (!sc) return false
            const m = /translateY\((-?[\d.]+)px\)/.exec(sc.style.transform || ""), y = m ? parseFloat(m[1]) : 0
            return -y >= parseFloat(sc.getAttribute("data-h") || "720") - 720 - 4
        }
        const setFoot = (v: number) => {
            v = Math.max(0, Math.min(1, v)); if (v < 0.001) v = 0
            if (v === footF) return
            footF = v
            const f = foot(); if (f) f.style.transform = "translateY(" + ((1 - footF) * 100).toFixed(2) + "%)"
        }
        const footStep = (d: number, e: Event) => {
            if (footF > 0 || (d > 0 && atEnd())) {
                if (footF === 0 && d < 0) return
                e.stopPropagation(); if (e.cancelable) e.preventDefault()
                setFoot(footF + d)
            }
        }
        const onWheel = (e: WheelEvent) => footStep(e.deltaY / 300, e)
        const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY }
        const onTouchMove = (e: TouchEvent) => { if (touchY == null) return; const y = e.touches[0].clientY, d = (touchY - y) / 200; touchY = y; footStep(d, e) }
        // XR3.4: those listeners are only on the stage where the engine takes the scroll itself (wider than a phone): on a phone a listener
        // that may stop the scroll would make the browser wait for it on every move of the finger. There the footer rises with the page's own
        // scroll, over what is left of the page after the last chapter, and is up when the page is at its end.
        let footOn = false
        const footBind = (on: boolean) => {
            if (!S0 || on === footOn) return
            footOn = on
            if (on) {
                S0.addEventListener("wheel", onWheel, { capture: true, passive: false })
                S0.addEventListener("touchstart", onTouchStart, { capture: true, passive: true })
                S0.addEventListener("touchmove", onTouchMove, { capture: true, passive: false })
            } else { S0.removeEventListener("wheel", onWheel, true); S0.removeEventListener("touchstart", onTouchStart, true); S0.removeEventListener("touchmove", onTouchMove, true) }
        }
        const onScroll = () => {
            if (!track) return
            const y0 = yEnd(), y1 = Math.max(y0 + 1, docH - window.innerHeight)   // the page's end, from its own length: nothing is measured while it scrolls
            setFoot((window.scrollY - y0) / (y1 - y0))
        }
        footBind(true)
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        window.addEventListener("resize", fit)   // a turn of the phone, or a window dragged narrower or wider
        window.addEventListener("scroll", onScroll, { passive: true })
        if (window.innerWidth < 600) once("tabit-theme", () => Object.assign(document.createElement("meta"), { name: "theme-color", content: "#04070F" }))   // a phone's browser bars take the night's colour
        return () => { alive = false; footBind(false); ro.disconnect(); window.removeEventListener("resize", fit); window.removeEventListener("scroll", onScroll); if (track) { leave(); window.scrollTo(0, 0) } try { inst && inst.dispose() } catch (e) {} }
    }, [])

    return (
        <div ref={wrap} style={{ ...props.style, position: "relative", width: "100%", height: "100%", minHeight: 400, background: "#04070F", overflow: "hidden" }}>
            <div ref={stage} style={{ position: "absolute", left: "50%", top: 0, width: 1280, height: H, overflow: "hidden", background: "#04070F", fontFamily: "Manrope, system-ui, sans-serif", color: "#FBF9F4", transform: "translate(-50%, 0)", transformOrigin: "top center" }}>
                <div ref={host} style={{ position: "absolute", inset: 0 }} />
                <footer data-tb-foot="1" aria-label="Legal" dangerouslySetInnerHTML={{ __html: FOOT_HTML }} style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 40, transform: "translateY(100%)", background: "rgba(8,13,30,.5)", WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)", borderTop: "1px solid rgba(251,249,244,.14)", padding: "22px 80px 26px", fontFamily: "Manrope, system-ui, sans-serif", fontSize: 11, lineHeight: "17px", color: "rgba(251,249,244,.60)" }} />
            </div>
        </div>
    )
}
