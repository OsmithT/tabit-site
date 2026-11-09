import { useEffect, useRef } from "react"
import { runTabit } from "./TabitSite.js"
import { TABIT_HOME_CSS } from "./TabitHomeStyles.js"

// Tabit XR2.7 home page: the animated night-sky site. Put it on the "/" page, full width and full height.
// The design is 720 units tall and its width follows the screen (960 to 1940 units, the copy column centred),
// so the stage is scaled to the component's HEIGHT and its width is let run to the component's edges:
// a 1366×768 laptop, a 1440×900 MacBook and a 2560×1080 ultrawide are all filled, no letterbox.
// Narrow (portrait) screens scale to the width instead, until the phone layout is designed.
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js"
const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@300;400;500;600&display=swap"
const OPTIONS = { k: 1, opt: 37, x23: true, x2313: true, x2310: true, x237: true, x234: true, noMark: true, x251: true }
const H = 720, WMIN = 960, WMAX = 1940

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
            let s = r.height / H                              // fill the height…
            let w = r.width / s                               // …and let the width run to the edges
            if (w < WMIN) { s = r.width / WMIN; w = WMIN }    // too narrow for the copy column: fit the width instead
            if (w > WMAX) w = WMAX                            // wider than the design allows: the night continues either side
            const st = stage.current.style
            st.width = Math.round(w) + "px"
            st.transform = `translate(-50%, -50%) scale(${s})`
        }
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        return () => { alive = false; ro.disconnect(); try { inst && inst.dispose() } catch (e) {} }
    }, [])

    return (
        <div ref={wrap} style={{ ...props.style, position: "relative", width: "100%", height: "100%", minHeight: 400, background: "#04070F", overflow: "hidden" }}>
            <div ref={stage} style={{ position: "absolute", left: "50%", top: "50%", width: 1280, height: H, overflow: "hidden", background: "#04070F", fontFamily: "Manrope, system-ui, sans-serif", color: "#FBF9F4", transform: "translate(-50%, -50%)", transformOrigin: "center center" }}>
                <div ref={host} style={{ position: "absolute", inset: 0 }} />
            </div>
        </div>
    )
}
