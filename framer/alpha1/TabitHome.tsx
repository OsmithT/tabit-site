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
const H = 720, WMIN = 960, WMAX = 4096, SMIN = 0.62, SMAX = 1.25, PHONE_W = 390

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
        const fit = () => {
            if (!wrap.current || !stage.current) return
            const r = wrap.current.getBoundingClientRect()
            if (!r.width || !r.height) return
            // XR2.9.6: sized like apple.com, not to fill the window. The size follows the WIDTH (1 unit = 1 px from 960 to 1152 px wide,
            // growing to at most 1.25 at 1440 and above); a shorter window may tighten it only down to SMIN, and below that the page
            // keeps its size and the bottom is cropped. A very wide window gets night either side; a big monitor no longer blows everything up.
            // XR3.0: a phone (narrower than 600 px) gets a stage of its own, 390 units wide, one unit to a pixel on a 390 px phone and in
            // proportion on wider and narrower ones; the engine lays that stage out for a phone (TABIT_PH). Before, a phone was given the
            // 960-unit stage shrunk to fit, which left every word and button at about 40 % of its size.
            // On a phone the stage is as tall as the part of the page in view: the frame Framer gives the home can be the browser's tallest
            // viewport (its bars hidden), and the home never scrolls the document, so the bars never hide and the frame's foot would stay under them.
            const phone = r.width < 600
            const vis = phone ? Math.max(320, Math.min(r.height, window.innerHeight - Math.max(0, r.top))) : r.height
            const sw = phone ? r.width / PHONE_W : r.width >= 1152 ? Math.min(SMAX, r.width / 1152) : Math.min(1, r.width / WMIN)
            const s = phone ? sw : Math.min(sw, Math.max(r.height / H, SMIN))
            const w = phone ? PHONE_W : Math.min(WMAX, r.width / s)
            const h = phone ? vis / s : Math.max(H, r.height / s)   // squarer than 4:3 the stage grows taller and the engine stacks (DESIGN.md rule 8)
            const st = stage.current.style
            st.width = Math.round(w) + "px"
            st.height = Math.round(h) + "px"
            st.transform = `translate(-50%, 0) scale(${s})`
        }
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        window.addEventListener("resize", fit)   // a phone's bars showing or hiding change the height in view without changing the frame
        // XR3.0: the home is a pinned scene that takes the scroll itself, so the page behind it must not rubber-band or pull to refresh under the finger
        const de = document.documentElement, ob = de.style.overscrollBehavior
        de.style.overscrollBehavior = "none"
        once("tabit-theme", () => Object.assign(document.createElement("meta"), { name: "theme-color", content: "#04070F" }))   // the browser's bars take the night's colour
        return () => { alive = false; ro.disconnect(); window.removeEventListener("resize", fit); de.style.overscrollBehavior = ob; try { inst && inst.dispose() } catch (e) {} }
    }, [])

    return (
        <div ref={wrap} style={{ ...props.style, position: "relative", width: "100%", height: "100%", minHeight: 400, background: "#04070F", overflow: "hidden" }}>
            <div ref={stage} style={{ position: "absolute", left: "50%", top: 0, width: 1280, height: H, overflow: "hidden", background: "#04070F", fontFamily: "Manrope, system-ui, sans-serif", color: "#FBF9F4", transform: "translate(-50%, 0)", transformOrigin: "top center" }}>
                <div ref={host} style={{ position: "absolute", inset: 0 }} />
            </div>
        </div>
    )
}
