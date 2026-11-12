import { addPropertyControls, ControlType } from "framer"

// XR2.10: one row of the Press and media list, for the Framer Collection List on /press (Press collection). It draws the row
// exactly as pages/press.js does (the term/description list of STYLE.md §5 Lists, in the click-out pages' unit, so it grows with
// the window like the header and the legal line around it): Outlet (Body 600) beside the headline (Body, Paper, Brass on hover,
// .25 s) and, 4 below, Type · Date (Small, Paper 72 %); one column, centred, on stacked windows (narrower than 1024 px or squarer
// than 1.6:1). Bind each property to its field; bind "First" to the list's item index equals 1 (the list starts 96 below the intro).
// In Framer the file sits beside TabitPage.tsx as TabitPressItem.tsx.
// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight auto
const CSS =
    ".tb9{--u:clamp(1px, 100vw / 1152, 1.25px);position:relative;color:#FBF9F4;font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}" +
    ".tb9 *{box-sizing:border-box}" +
    ".tb9-pi{max-width:calc(1440*var(--u));margin:0 auto;padding:0 calc(80*var(--u)) calc(16*var(--u))}" +
    ".tb9-pi.tb9-first{padding-top:calc(96*var(--u))}" +
    ".tb9-pi .tb9-list{width:calc(880*var(--u));max-width:100%;margin:0;padding:0;display:grid;grid-template-columns:calc(240*var(--u)) minmax(0,1fr);column-gap:calc(32*var(--u))}" +
    ".tb9-pi dt,.tb9-pi dd{margin:0;min-width:0}" +
    ".tb9-b6{margin:0;font-weight:600;font-size:max(16px,calc(17*var(--u)));line-height:max(24px,calc(26*var(--u)));color:#FBF9F4}" +
    ".tb9-b{margin:0;font-weight:400;font-size:max(16px,calc(17*var(--u)));line-height:max(24px,calc(26*var(--u)));color:#FBF9F4}" +
    ".tb9-s{margin:0;font-weight:400;font-size:calc(13*var(--u));line-height:calc(20*var(--u));color:#FBF9F4}" +
    ".tb9-sub{color:rgba(251,249,244,.72)}" +
    ".tb9-plink{color:#FBF9F4;text-decoration:none;transition:color .25s ease;overflow-wrap:anywhere}" +
    ".tb9-plink:active{color:#A8823A}" +
    ".tb9-plink:focus-visible{outline:2px solid #A8823A;outline-offset:3px}" +
    "@media (hover:hover) and (pointer:fine){.tb9-plink:hover{color:#A8823A}}" +
    "@media (max-aspect-ratio:1599/1000),(max-width:1023.98px){.tb9-pi{text-align:center;padding-bottom:calc(20*var(--u))}.tb9-pi .tb9-list{grid-template-columns:1fr;margin:0 auto}}" +
    "@media (max-width:600px){.tb9-pi{padding-left:16px;padding-right:16px}.tb9-pi .tb9-list{width:100%}}"

export default function TabitPressItem(props: { outlet: string; headline: string; type: string; date: string; link: string; newTab: boolean; first: boolean; style?: any }) {
    const meta = [props.type, props.date].filter(Boolean).join(" · ")
    const ext = props.newTab ? { target: "_blank", rel: "noopener" } : {}
    return (
        <div className="tb9" style={{ ...props.style, width: "100%" }}>
            <style>{CSS}</style>
            <div className={"tb9-pi" + (props.first ? " tb9-first" : "")}>
                <dl className="tb9-list">
                    <dt className="tb9-b6">{props.outlet}</dt>
                    <dd>
                        <a className="tb9-plink tb9-b" href={props.link || "#"} {...ext}>{props.headline}</a>
                        <p className="tb9-s tb9-sub" style={{ marginTop: "calc(4*var(--u))" }}>{meta}</p>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

TabitPressItem.defaultProps = { outlet: "Tabit", headline: "Why Do Insurers Fear Bitcoin but Trust Private Credit?", type: "Article", date: "13 Aug 2026", link: "/press/why-insurers-fear-bitcoin", newTab: false, first: false }
addPropertyControls(TabitPressItem, {
    outlet: { type: ControlType.String, title: "Outlet" },
    headline: { type: ControlType.String, title: "Headline" },
    type: { type: ControlType.String, title: "Type" },
    date: { type: ControlType.String, title: "Date", placeholder: "13 Aug 2026" },
    link: { type: ControlType.Link, title: "Link" },
    newTab: { type: ControlType.Boolean, title: "New tab" },
    first: { type: ControlType.Boolean, title: "First" },
})
