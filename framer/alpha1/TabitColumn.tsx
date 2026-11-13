import { forwardRef, useEffect, useState, type ComponentType } from "react"

// XR2.10: a code override for Framer-built parts of a click-out page (the Contact form on /contact). Framer's own layers are sized
// in pixels, so the part is built at the pages' widest unit (1 unit = 1.25 px, 1440 px wide and up) and this override scales it
// with the window exactly as the pages' unit does (clamp(1px, 100vw / 1152, 1.25px)), and places it as the copy column is placed:
// left at 80 units inside the 1440-unit page on two-column windows (at least 1024 px wide and 1.6:1), centred on stacked ones.
// Scroll- and resize-driven only; no timers. In Framer the file sits beside TabitPage.tsx as TabitColumn.tsx.
// XR3.0: the server render has no window, so the first render adds nothing (Framer's own layout stands) and the measured
// placement is applied after mount, when it differs from what was rendered and React writes it. Earlier the server fallback
// (max-width 0) stayed in the page after hydration and collapsed the form. Below 810 px (Framer's Phone breakpoint) the override
// adds nothing: the Phone breakpoint lays the form out full width.
const BASE = 1.25
type M = { zoom: number; left: number; two: boolean; max: number; phone: boolean }

function measure(): M {
    const vw = window.innerWidth, vh = window.innerHeight
    const u = Math.min(BASE, Math.max(1, vw / 1152))
    const two = vw >= 1024 && vw / vh >= 1.6
    const left = Math.max(0, (vw - 1440 * u) / 2) + 80 * u
    return { zoom: u / BASE, left, two, max: vw - 32, phone: vw < 810 }
}

export function withTabitColumn(Component: ComponentType<any>): ComponentType<any> {
    return forwardRef<any, any>(function TabitColumn(props, ref) {
        const [m, setM] = useState<M | null>(null)
        useEffect(() => {
            const on = () => setM(measure())
            on(); window.addEventListener("resize", on)
            return () => window.removeEventListener("resize", on)
        }, [])
        const { style, ...rest } = props
        if (!m || m.phone) return <Component {...rest} ref={ref} style={style} />
        const place = m.two ? { marginLeft: m.left / m.zoom, marginRight: 0, alignSelf: "flex-start" } : { marginLeft: "auto", marginRight: "auto", alignSelf: "center" }
        return <Component {...rest} ref={ref} style={{ ...style, zoom: m.zoom, maxWidth: m.max / m.zoom, ...place }} />
    })
}
