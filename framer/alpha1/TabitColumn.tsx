import { forwardRef, useEffect, useState, type ComponentType } from "react"

// XR2.10: a code override for Framer-built parts of a click-out page (the Contact form on /contact). Framer's own layers are sized
// in pixels, so the part is built at the pages' widest unit (1 unit = 1.25 px, 1440 px wide and up) and this override scales it
// with the window exactly as the pages' unit does (clamp(1px, 100vw / 1152, 1.25px)), and places it as the copy column is placed:
// left at 80 units inside the 1440-unit page on two-column windows (at least 1024 px wide and 1.6:1), centred on stacked ones.
// Scroll- and resize-driven only; no timers. In Framer the file sits beside TabitPage.tsx as TabitColumn.tsx.
const BASE = 1.25

function measure() {
    if (typeof window === "undefined") return { zoom: 1, left: 0, two: true, max: 0 }
    const vw = window.innerWidth, vh = window.innerHeight
    const u = Math.min(BASE, Math.max(1, vw / 1152))
    const two = vw >= 1024 && vw / vh >= 1.6
    const left = Math.max(0, (vw - 1440 * u) / 2) + 80 * u
    return { zoom: u / BASE, left, two, max: vw - 32 }
}

export function withTabitColumn(Component: ComponentType<any>): ComponentType<any> {
    return forwardRef<any, any>(function TabitColumn(props, ref) {
        const [m, setM] = useState(measure)
        useEffect(() => {
            const on = () => setM(measure())
            on(); window.addEventListener("resize", on)
            return () => window.removeEventListener("resize", on)
        }, [])
        const { style, ...rest } = props
        const place = m.two ? { marginLeft: m.left / m.zoom, marginRight: 0, alignSelf: "flex-start" } : { marginLeft: "auto", marginRight: "auto", alignSelf: "center" }
        return <Component {...rest} ref={ref} style={{ ...style, zoom: m.zoom, maxWidth: m.max / m.zoom, ...place }} />
    })
}
