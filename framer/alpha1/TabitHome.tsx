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
// XR3.1: on a phone the sky runs on above and below the page in view, under the browser's status bar and its toolbar. A phone's browser
// draws a page under its bars only where the page itself runs on under them (a page that does not scroll gets a flat band of colour there),
// so on a phone the home is laid in the document itself, PH_TOP above and PH_BOT below the part in view, and the document is held
// scrolled PH_TOP down: the bars show the sky. The engine lays the page out in the part in view (TABIT_PHT, TABIT_PHB).
const PH_TOP = 100, PH_BOT = 140
// Ashleigh13.11 (XR3.3): the site footer (as pages/legal.js: the full regulatory text, © 2026, Contact Us · Privacy Policy · Terms & Conditions)
// rises over the foot of the stage when you keep scrolling past the last chapter, and goes back down as you scroll back. Scroll-driven and
// reversible; the engine is not changed: the wheel and touch are taken at the stage only while the footer is moving or once the page is at its end.
const FOOT_HTML = "<div style=\"max-width: 920px\"><p style=\"margin: 0\">Tabit Insurance SCC (“Tabit”) is regulated and licensed in Barbados by the Financial Services Commission of Barbados. Tabit is not regulated or licensed outside of Barbados and deals only through appropriately licensed insurance brokers. To ensure compliance regarding our insurance support of companies domiciled in jurisdictions outside of Barbados, any request for insurance coverage must be submitted through our appropriate broking channels. The publication and delivery of information herein is not intended as a direct solicitation for the purchase of insurance coverage.</p><p style=\"margin: 8px 0 0\"><span>© 2026 Tabit - All Rights Reserved.</span><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/contact\">Contact Us</a><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/privacy-policy\">Privacy Policy</a><span aria-hidden=\"true\" style=\"margin: 0 10px\">·</span><a href=\"/terms-conditions\">Terms &amp; Conditions</a></p></div>"
const FOOT_CSS = "[data-tb-foot] a{color:inherit;text-decoration:none;transition:color .25s ease}[data-tb-foot] a:active{color:#A8823A}@media (hover:hover) and (pointer:fine){[data-tb-foot] a:hover{color:#A8823A}}[data-tb-foot] a:focus-visible{outline:2px solid #A8823A;outline-offset:3px}"

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
        const de = document.documentElement, ob = de.style.overscrollBehavior, body = document.body, bmh = body.style.minHeight
        let inDoc = false, snap = 0
        const S0 = stage.current   // held here: React clears the ref before this effect's clean-up runs, and the stage may then be in the document's body
        const hold = () => { if (inDoc && Math.abs(window.scrollY - PH_TOP) > 1) window.scrollTo(0, PH_TOP) }
        const onScroll = () => { if (inDoc && !snap) snap = requestAnimationFrame(() => { snap = 0; hold() }) }
        const fit = () => {
            if (!wrap.current || !stage.current) return
            const r = wrap.current.getBoundingClientRect()
            if (!r.width || !r.height) return
            // XR2.9.6: sized like apple.com, not to fill the window. The size follows the WIDTH (1 unit = 1 px from 960 to 1152 px wide,
            // growing to at most 1.25 at 1440 and above); a shorter window may tighten it only down to SMIN, and below that the page
            // keeps its size and the bottom is cropped. A very wide window gets night either side; a big monitor no longer blows everything up.
            // XR3.0: a phone (narrower than 600 px) gets a stage of its own, 390 units wide, one unit to a pixel on a 390 px phone and in
            // proportion on narrower ones and up to 430 px (1.1 px a unit); wider than that the stage grows wider instead of the type larger; the engine lays that stage out for a phone (TABIT_PH). Before, a phone was given the
            // 960-unit stage shrunk to fit, which left every word and button at about 40 % of its size.
            // XR3.1: on a phone the stage is the part of the page in view (the window's inner height) with PH_TOP above it and PH_BOT below it,
            // laid in the document's body (the Framer frame clips), the document held scrolled PH_TOP down; see PH_TOP.
            const phone = r.width < 600
            const vis = phone ? Math.max(320, window.innerHeight) : r.height
            const sw = phone ? Math.min(r.width / PHONE_W, PHONE_SMAX) : r.width >= 1152 ? Math.min(SMAX, r.width / 1152) : Math.min(1, r.width / WMIN)
            const s = phone ? sw : Math.min(sw, Math.max(r.height / H, SMIN))
            const w = phone ? r.width / s : Math.min(WMAX, r.width / s)
            const h = phone ? (PH_TOP + vis + PH_BOT) / s : Math.max(H, r.height / s)
            ;(window as any).__TABIT_PHT = phone ? PH_TOP / s : 0
            ;(window as any).__TABIT_PHB = phone ? PH_BOT / s : 0   // squarer than 4:3 the stage grows taller and the engine stacks (DESIGN.md rule 8)
            const el = S0!
            if (phone && !inDoc) { body.appendChild(el); el.style.position = "absolute"; el.style.zIndex = "1"; inDoc = true }
            else if (!phone && inDoc) { wrap.current.appendChild(el); el.style.zIndex = ""; body.style.minHeight = bmh; inDoc = false }
            if (phone) body.style.minHeight = Math.round(PH_TOP + vis + PH_BOT) + "px"
            de.style.overscrollBehavior = phone ? "none" : ob   // XR3.0: on a phone the home takes the scroll itself, so the page behind it must not rubber-band or pull to refresh under the finger
            const st = stage.current.style
            st.width = Math.round(w) + "px"
            st.height = Math.round(h) + "px"
            st.transform = `translate(-50%, 0) scale(${s})`
            const ft = foot()   // Ashleigh13.11 (XR3.3): on a phone the footer sits at the foot of the part in view, above PH_BOT
            if (ft) { ft.style.bottom = phone ? Math.round(PH_BOT / s) + "px" : "0px"; ft.style.padding = phone ? "18px 16px 22px" : "22px 80px 26px" }
            hold()
        }
        // Ashleigh13.11 (XR3.3): the footer's rise, 0 (hidden below the stage) to 1 (in view), driven by the wheel or the finger
        let footF = 0, touchY: number | null = null
        const foot = () => S0 && (S0.querySelector("[data-tb-foot]") as HTMLElement | null)
        const atEnd = () => {   // the engine's page has scrolled to its last chapter (its scroller's translate has reached data-h - 720)
            const sc = S0 && (S0.querySelector("[data-tabit-scroll]") as HTMLElement | null); if (!sc) return false
            const m = /translateY\((-?[\d.]+)px\)/.exec(sc.style.transform || ""), y = m ? parseFloat(m[1]) : 0
            return -y >= parseFloat(sc.getAttribute("data-h") || "720") - 720 - 4
        }
        const setFoot = (v: number) => {
            footF = Math.max(0, Math.min(1, v)); if (footF < 0.001) footF = 0
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
        if (S0) {
            S0.addEventListener("wheel", onWheel, { capture: true, passive: false })
            S0.addEventListener("touchstart", onTouchStart, { capture: true, passive: true })
            S0.addEventListener("touchmove", onTouchMove, { capture: true, passive: false })
        }
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        window.addEventListener("resize", fit)   // a phone's bars showing or hiding change the height in view without changing the frame
        window.addEventListener("scroll", onScroll, { passive: true })
        if (window.innerWidth < 600) once("tabit-theme", () => Object.assign(document.createElement("meta"), { name: "theme-color", content: "#04070F" }))   // a phone's browser bars take the night's colour
        return () => { alive = false; if (S0) { S0.removeEventListener("wheel", onWheel, true); S0.removeEventListener("touchstart", onTouchStart, true); S0.removeEventListener("touchmove", onTouchMove, true) }; ro.disconnect(); window.removeEventListener("resize", fit); window.removeEventListener("scroll", onScroll); if (snap) cancelAnimationFrame(snap); de.style.overscrollBehavior = ob; body.style.minHeight = bmh; if (S0 && S0.parentNode === body) body.removeChild(S0); try { inst && inst.dispose() } catch (e) {} }
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
