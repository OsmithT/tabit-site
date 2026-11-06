import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"
import * as reinsurance from "./pages/reinsurance.js"
import * as captives from "./pages/captives.js"
import * as aboutus from "./pages/aboutus.js"
import * as contact from "./pages/contact.js"

// Tabit XR2.4 pop-out pages (Ashleigh's). Put one on each page, full width, height "fit content".
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight auto
const PAGES: Record<string, { css: string; html: string }> = { reinsurance, captives, aboutus, contact }
const FONT_URL = "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap"

export default function TabitPage(props: { page: string; style?: any }) {
    const p = PAGES[props.page] || reinsurance
    useEffect(() => {
        if (!document.getElementById("tabit-fonts-pages")) {
            const l = document.createElement("link"); l.id = "tabit-fonts-pages"; l.rel = "stylesheet"; l.href = FONT_URL; document.head.appendChild(l)
        }
    }, [])
    return (
        <div className="tb-page" style={{ ...props.style, width: "100%", background: "#04070F" }}>
            <style>{p.css}</style>
            <div dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
    )
}

TabitPage.defaultProps = { page: "reinsurance" }
addPropertyControls(TabitPage, {
    page: { type: ControlType.Enum, title: "Page", options: ["reinsurance", "captives", "aboutus", "contact"], optionTitles: ["(Re)insurance", "Captives", "About us", "Contact"] },
})
