import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType, RenderTarget } from "framer"
import { mountTabitSky } from "./TabitSite.js"
import * as reinsurance from "./pages/reinsurance.js"
import * as captives from "./pages/captives.js"
import * as aboutus from "./pages/aboutus.js"
import * as contact from "./pages/contact.js"
import * as press from "./pages/press.js"
import * as pressHeader from "./pages/press-header.js"
import * as contactTop from "./pages/contact-top.js"
import * as legal from "./pages/legal.js"
import * as articleBitcoin from "./pages/article-why-insurers-fear-bitcoin.js"
import * as articleTemplate from "./pages/article-template.js"

// XR2.10 (Oscar, 12 Nov: "IT SHOULD BE IDENTICAL"): every click-out page shows the home's own live sky, drawn by the home engine in a
// fixed layer behind the page (mountTabitSky in TabitSite.js), never a picture or a page's own star field. One sky per document.
// Ashleigh11.11 (XR2.8): adds Press, Press: header, Contact: top, Legal line and the two article pages (see cms/SETUP.md).
// Tabit XR2.9.2 click-out pages, restyled to STYLE.md (the approved XR2.4 copy). Put one on each page, full width, height "fit content".
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight auto
const PAGES: Record<string, { css: string; html: string; js?: string }> = { reinsurance, captives, aboutus, contact, press, pressHeader, contactTop, legal, articleBitcoin, articleTemplate }
const SKY_OPTIONS = { k: 1, opt: 37, x23: true, x2313: true, x2310: true, x237: true, x234: true, noMark: true, x251: true }   // TabitHome.tsx's options
const FONT_URL = "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap"

export default function TabitPage(props: { page: string; style?: any }) {
    const p = PAGES[props.page] || reinsurance
    const ref = useRef<HTMLDivElement>(null)
    const onCanvas = RenderTarget.current() === RenderTarget.canvas
    useEffect(() => {
        if (!document.getElementById("tabit-fonts-pages")) {
            const l = document.createElement("link"); l.id = "tabit-fonts-pages"; l.rel = "stylesheet"; l.href = FONT_URL; document.head.appendChild(l)
        }
        if (onCanvas || !ref.current) return
        return mountTabitSky(ref.current, SKY_OPTIONS)   // the home's live sky behind the page; released when the page goes
    }, [onCanvas])
    return (
        <div ref={ref} className="tb-page" style={{ ...props.style, width: "100%", background: onCanvas ? "#04070F" : "transparent" }}>
            <style>{p.css}</style>
            <div dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
    )
}

TabitPage.defaultProps = { page: "reinsurance" }
addPropertyControls(TabitPage, {
    page: { type: ControlType.Enum, title: "Page", options: ["reinsurance", "captives", "aboutus", "contact", "press", "pressHeader", "contactTop", "legal", "articleBitcoin", "articleTemplate"], optionTitles: ["(Re)insurance", "Captives", "About us", "Contact", "Press", "Press: header", "Contact: top", "Legal line", "Article: Bitcoin vs private credit", "Article template"] },
})
