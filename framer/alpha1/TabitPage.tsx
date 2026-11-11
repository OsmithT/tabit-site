import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"
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

// Ashleigh11.11 (XR2.8): adds Press, Press: header, Contact: top, Legal line and the two article pages (see cms/SETUP.md).
// Tabit XR2.9.2 click-out pages, restyled to STYLE.md (the approved XR2.4 copy). Put one on each page, full width, height "fit content".
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight auto
const PAGES: Record<string, { css: string; html: string; js?: string }> = { reinsurance, captives, aboutus, contact, press, pressHeader, contactTop, legal, articleBitcoin, articleTemplate }
const FONT_URL = "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap"

export default function TabitPage(props: { page: string; style?: any }) {
    const p = PAGES[props.page] || reinsurance
    useEffect(() => {
        if (!document.getElementById("tabit-fonts-pages")) {
            const l = document.createElement("link"); l.id = "tabit-fonts-pages"; l.rel = "stylesheet"; l.href = FONT_URL; document.head.appendChild(l)
        }
        // XR2.9.2: the page sky drifts with the scroll and leans toward the pointer (the page module's own script; scroll- and pointer-driven only)
        if (p.js && !(window as any).__tabitPageSky) { (window as any).__tabitPageSky = true; try { new Function(p.js)() } catch (e) {} }
    }, [p.js])
    return (
        <div className="tb-page" style={{ ...props.style, width: "100%", background: "#04070F" }}>
            <style>{p.css}</style>
            <div dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
    )
}

TabitPage.defaultProps = { page: "reinsurance" }
addPropertyControls(TabitPage, {
    page: { type: ControlType.Enum, title: "Page", options: ["reinsurance", "captives", "aboutus", "contact", "press", "pressHeader", "contactTop", "legal", "articleBitcoin", "articleTemplate"], optionTitles: ["(Re)insurance", "Captives", "About us", "Contact", "Press", "Press: header", "Contact: top", "Legal line", "Article: Bitcoin vs private credit", "Article template"] },
})
