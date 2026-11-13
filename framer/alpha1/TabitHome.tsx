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
            hold()
        }
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        window.addEventListener("resize", fit)   // a phone's bars showing or hiding change the height in view without changing the frame
        window.addEventListener("scroll", onScroll, { passive: true })
        if (window.innerWidth < 600) once("tabit-theme", () => Object.assign(document.createElement("meta"), { name: "theme-color", content: "#04070F" }))   // a phone's browser bars take the night's colour
        return () => { alive = false; ro.disconnect(); window.removeEventListener("resize", fit); window.removeEventListener("scroll", onScroll); if (snap) cancelAnimationFrame(snap); de.style.overscrollBehavior = ob; body.style.minHeight = bmh; if (S0 && S0.parentNode === body) body.removeChild(S0); try { inst && inst.dispose() } catch (e) {} }
    }, [])

    return (
        <div ref={wrap} style={{ ...props.style, position: "relative", width: "100%", height: "100%", minHeight: 400, background: "#04070F", overflow: "hidden" }}>
            <div ref={stage} style={{ position: "absolute", left: "50%", top: 0, width: 1280, height: H, overflow: "hidden", background: "#04070F", fontFamily: "Manrope, system-ui, sans-serif", color: "#FBF9F4", transform: "translate(-50%, 0)", transformOrigin: "top center" }}>
                <div ref={host} style={{ position: "absolute", inset: 0 }} />
            </div>
        </div>
    )
}
