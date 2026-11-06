import { useEffect, useRef } from "react"
import { runTabit } from "./TabitSite.js"
import { TABIT_HOME_CSS } from "./TabitHomeStyles.js"

// Tabit XR2.5.7 home page: the animated night-sky site, drawn on a 1280×720 stage
// that is scaled to fit this component. Put it on the "/" page, full width and full height.
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js"
const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@300;400;500;600&display=swap"
const OPTIONS = { k: 1, opt: 37, x23: true, x2313: true, x2310: true, x237: true, x234: true, noMark: true, x251: true }

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
            const s = Math.min(r.width / 1280, r.height / 720) || 1
            stage.current.style.transform = `scale(${s})`
        }
        const ro = new ResizeObserver(fit); if (wrap.current) ro.observe(wrap.current); fit()
        return () => { alive = false; ro.disconnect(); try { inst && inst.dispose() } catch (e) {} }
    }, [])

    return (
        <div ref={wrap} style={{ ...props.style, position: "relative", width: "100%", height: "100%", minHeight: 400, background: "#04070F", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div ref={stage} style={{ position: "relative", flex: "none", width: 1280, height: 720, overflow: "hidden", background: "#04070F", fontFamily: "Manrope, system-ui, sans-serif", color: "#FBF9F4", transformOrigin: "center center" }}>
                <div ref={host} style={{ position: "absolute", inset: 0 }} />
            </div>
        </div>
    )
}
