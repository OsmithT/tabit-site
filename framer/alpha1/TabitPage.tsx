import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType, RenderTarget } from "framer"
import { mountTabitSky } from "./TabitSite.js"
import * as reinsurance from "./pages/reinsurance.js"
import * as captives from "./pages/captives.js"
import * as aboutus from "./pages/aboutus.js"
import * as contact from "./pages/contact.js"
import * as press from "./pages/press.js"
import * as pressHeader from "./pages/press_header.js"
import * as contactTop from "./pages/contact_top.js"
import * as legal from "./pages/legal.js"
import * as articleBitcoin from "./pages/article_why_insurers_fear_bitcoin.js"
import * as articleTemplate from "./pages/article_template.js"
import * as privacyPolicy from "./pages/privacy_policy.js"
import * as termsConditions from "./pages/terms_conditions.js"

// Ashleigh13.11 (XR3.3): adds Privacy Policy and Terms & Conditions (pages/privacy_policy.js, pages/terms_conditions.js).
// XR2.11 (Oscar, 12 Nov): a page module may carry its own script (Captives: its figure, board XR2.9.31E). It is a function body run with
// the page's element once the page's fonts are in, and it returns its own teardown; scroll- and pointer-driven (see the module).
// XR2.10: page files are named with underscores, as Framer names code files (press_header.js, not press-header.js).
// XR2.10 (Oscar, 12 Nov: "IT SHOULD BE IDENTICAL"): every click-out page shows the home's own live sky, drawn by the home engine in a
// fixed layer behind the page (mountTabitSky in TabitSite.js), never a picture or a page's own star field. One sky per document.
// Ashleigh11.11 (XR2.8): adds Press, Press: header, Contact: top, Legal line and the two article pages (see cms/SETUP.md).
// Tabit XR2.9.2 click-out pages, restyled to STYLE.md (the approved XR2.4 copy). Put one on each page, full width, height "fit content".
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight auto
const PAGES: Record<string, { css: string; html: string; js?: string }> = { reinsurance, captives, aboutus, contact, press, pressHeader, contactTop, legal, articleBitcoin, articleTemplate, privacyPolicy, termsConditions }
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
        if (window.innerWidth < 600 && !document.getElementById("tabit-theme")) {   // XR3.0: a phone's browser bars take the night's colour
            const m = document.createElement("meta"); m.id = "tabit-theme"; m.name = "theme-color"; m.content = "#04070F"; document.head.appendChild(m)
        }
        if (onCanvas || !ref.current) return
        const release = mountTabitSky(ref.current, SKY_OPTIONS)   // the home's live sky behind the page; released when the page goes
        let off: any = null, gone = false
        if (p.js) {   // XR2.11: the page's own script, after its fonts so names measure true (it runs regardless if they fail)
            const go = () => {
                if (gone || !ref.current) return
                try { off = new Function("root", p.js as string)(ref.current) } catch (e) { if (window.console) console.error("Tabit page script failed", e) }
            }
            const f = (document as any).fonts, link = document.getElementById("tabit-fonts-pages") as HTMLLinkElement | null
            // the faces are known only once the fonts' stylesheet is in; a late face re-measures anyway (the script listens for it)
            const sheet = new Promise<void>((res) => { if (!link || link.sheet) res(); else { link.addEventListener("load", () => res(), { once: true }); link.addEventListener("error", () => res(), { once: true }); window.setTimeout(res, 3000) } })   // a stylesheet that never answers must not hold the page's script back for good
            if (f && f.load) sheet.then(() => Promise.all([f.load("600 17px Manrope"), f.load("400 17px Manrope"), f.load("400 13px Manrope")])).catch(() => {}).then(go)
            else go()
        }
        return () => { gone = true; try { if (off) off() } catch (e) {} release() }
    }, [onCanvas, p])
    return (
        <div ref={ref} className="tb-page" style={{ ...props.style, width: "100%", background: onCanvas ? "#04070F" : "transparent" }}>
            <style dangerouslySetInnerHTML={{ __html: p.css }} />{/* XR2.11: as written, not as text: on the server React turns a ">" in a style's text into "&gt;", which breaks every child selector until the page wakes up */}
            <div dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
    )
}

TabitPage.defaultProps = { page: "reinsurance" }
addPropertyControls(TabitPage, {
    page: { type: ControlType.Enum, title: "Page", options: ["reinsurance", "captives", "aboutus", "contact", "press", "pressHeader", "contactTop", "legal", "articleBitcoin", "articleTemplate", "privacyPolicy", "termsConditions"], optionTitles: ["(Re)insurance", "Captives", "About us", "Contact", "Press", "Press: header", "Contact: top", "Legal line", "Article: Bitcoin vs private credit", "Article template", "Privacy Policy", "Terms & Conditions"] },
})
