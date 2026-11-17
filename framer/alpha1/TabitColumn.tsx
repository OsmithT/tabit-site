import { forwardRef, useEffect, useState, type ComponentType } from "react"

// XR2.10: a code override for Framer-built parts of a click-out page (the Contact form on /contact). Framer's own layers are sized
// in pixels, so the part is built at the pages' widest unit (1 unit = 1.25 px, 1440 px wide and up) and this override scales it
// with the window exactly as the pages' unit does (clamp(1px, 100vw / 1152, 1.25px)). Scroll- and resize-driven only; no timers.
// In Framer the file sits beside TabitPage.tsx as TabitColumn.tsx.
// XR3.0: the server render has no window, so the first render adds no zoom (Framer's own layout stands) and the zoom is applied
// after mount. Below 810 px (Framer's Phone breakpoint) there is no zoom: the Phone breakpoint is built at 1 px a unit.
// XR3.3 (Ashleigh's two-column Contact, cms/SETUP.md): the form column now sits in a row with "Contact: top", and the row's
// layout is set by CSS, with the pages' own media queries, so it is right from the first paint (server render included):
//   two columns (at least 1024 px wide and 1.6:1): the row is at most 1440 units wide, centred; "Contact: top" takes half
//   less 48 units (it brings its own 80 on the left and 176 at the top); the form column takes the rest, with 96 on its left
//   (the gap), 80 on its right and 176 above it, so its first label is level with the headline (as pages/contact.js);
//   stacked (narrower or squarer): "Contact: top" full width, then the form 56 below, at most 640 units wide and within the
//   pages' 80-unit side margins, centred; 600 px and narrower: full width, 24 from the edges.
// Put withTabitContactRow on the row and withTabitColumn on the form column (its padding values here are in Framer pixels at
// 1.25 px a unit; the zoom brings them to the window's unit).
const BASE = 1.25

const ROW_CSS =
    ".tbc-row{--u:clamp(1px, 100vw / 1152, 1.25px)}" +
    "@media (min-aspect-ratio:1600/1000) and (min-width:1024px){" +
    ".tbc-row{flex-direction:row!important;align-items:flex-start!important;justify-content:flex-start!important;gap:0px!important;padding:0!important;width:100%!important;max-width:calc(1440*var(--u))!important;margin-left:auto!important;margin-right:auto!important}" +
    ".tbc-row>:not(.tbc-form){flex:0 0 calc(50% - 48*var(--u))!important;width:auto!important;min-width:0!important}" +
    ".tbc-row>.tbc-form{flex:1 1 0px!important;width:auto!important;min-width:0!important;max-width:none!important;margin:0!important;padding:220px 100px 0 120px!important}" +
    "}" +
    "@media (max-aspect-ratio:1599/1000),(max-width:1023.98px){" +
    ".tbc-row{flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;gap:0px!important;padding:0!important;width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}" +
    ".tbc-row>:not(.tbc-form){flex:none!important;width:100%!important}" +
    ".tbc-row>.tbc-form{flex:none!important;width:800px!important;max-width:calc(100% - 200px)!important;margin:0!important;padding:70px 0 0!important}" +
    "}" +
    "@media (max-width:809.98px){.tbc-row>.tbc-form{width:640px!important;max-width:calc(100% - 160px)!important;padding:56px 0 0!important}}" +
    "@media (max-width:600px){.tbc-row{align-items:stretch!important}.tbc-row>.tbc-form{width:100%!important;max-width:none!important;padding:56px 24px 0!important}}"

const cx = (a: any, b: string) => (a ? a + " " + b : b)

export function withTabitContactRow(Component: ComponentType<any>): ComponentType<any> {
    return forwardRef<any, any>(function TabitContactRow(props, ref) {
        const { className, ...rest } = props
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: ROW_CSS }} />
                <Component {...rest} ref={ref} className={cx(className, "tbc-row")} />
            </>
        )
    })
}

function zoomFor(): number | null {
    const vw = window.innerWidth
    if (vw < 810) return null
    return Math.min(BASE, Math.max(1, vw / 1152)) / BASE
}

export function withTabitColumn(Component: ComponentType<any>): ComponentType<any> {
    return forwardRef<any, any>(function TabitColumn(props, ref) {
        const [z, setZ] = useState<number | null>(null)
        useEffect(() => {
            const on = () => setZ(zoomFor())
            on(); window.addEventListener("resize", on)
            return () => window.removeEventListener("resize", on)
        }, [])
        const { style, className, ...rest } = props
        return <Component {...rest} ref={ref} className={cx(className, "tbc-form")} style={z && z !== 1 ? { ...style, zoom: z } : style} />
    })
}
