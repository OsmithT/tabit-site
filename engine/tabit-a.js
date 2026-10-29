var TABIT_STYLE = "\n\n@keyframes tabitGrain{0%{transform:translate(0,0)}25%{transform:translate(-40px,22px)}50%{transform:translate(18px,-36px)}75%{transform:translate(-22px,-14px)}100%{transform:translate(0,0)}}\n.tabit-grain{animation:tabitGrain .5s steps(4) infinite}\n@keyframes tabitCue{0%{transform:scaleY(0);transform-origin:top}45%{transform:scaleY(1);transform-origin:top}55%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}\n.tabit-cue-line{animation:tabitCue 2.2s cubic-bezier(.65,0,.35,1) infinite}\n.tabit-cue:focus-visible,.tabit-replay:focus-visible{outline:2px solid #A8823A;outline-offset:3px}\n.tabit-replay{transition:background .25s ease,border-color .25s ease}\n.tabit-replay:hover{background:rgba(246,242,234,.08);border-color:rgba(246,242,234,.75)}\n.tabit-dot{position:absolute;width:28px;height:28px;border:0;padding:0;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}\n.tabit-star{display:block;width:11px;height:8.6px;color:var(--tabit-ink2,#F6F2EA);transition:transform .35s ease,opacity .35s ease,filter .35s ease}\n.tabit-dotlabel{position:absolute;right:30px;top:50%;transform:translate(8px,-50%);opacity:0;white-space:nowrap;pointer-events:none;font-family:Manrope,system-ui,sans-serif;font-size:11px;font-weight:600;letter-spacing:.2em;color:var(--tabit-ink2,#F6F2EA);transition:opacity .3s ease,transform .3s ease}\n.tabit-dotlabel b{color:#A8823A;font-weight:600;margin-right:8px}\n.tabit-dot:hover .tabit-dotlabel,.tabit-dot:focus-visible .tabit-dotlabel{opacity:1;transform:translate(0,-50%)}\n.tabit-dot:hover .tabit-star{filter:drop-shadow(0 0 5px rgba(246,242,234,.9))!important}\n.tabit-dot:focus-visible,.tabit-home:focus-visible,.tabit-skip:focus-visible{outline:2px solid #A8823A;outline-offset:3px}\n.tabit-skip{transition:background .25s ease,border-color .25s ease,color .25s ease}\n.tabit-skip:hover{background:rgba(246,242,234,.08);border-color:rgba(246,242,234,.7);color:#F6F2EA}\n@media (prefers-reduced-motion: reduce){.tabit-grain,.tabit-cue-line{animation:none}}\n";
var TABIT_MARKUP = "<div data-tabit-root=\"1\" tabindex=\"0\" style=\"width: 100%; height: 720px; position: relative; overflow: hidden; background: #04070F; cursor: none; outline: none; font-family: Manrope, system-ui, sans-serif\">\n<div data-tabit-night=\"1\" style=\"position: absolute; left: 0; top: 0; width: 100%; height: 720px; z-index: 2; background: #04070F\">\n<canvas data-tabit-gl=\"1\" role=\"img\" aria-label=\"Animated hero: the night sky draws in to the constellation Orion and its star pi-3 Orionis, Tabit; the Tabit knot is drawn from the star and the TABIT wordmark appears\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block\"></canvas>\n<canvas data-tabit-ov=\"1\" aria-hidden=\"true\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block; pointer-events: none\"></canvas>\n<canvas data-tabit-scene=\"1\" aria-hidden=\"true\" width=\"1280\" height=\"720\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px; display: block; pointer-events: none\"></canvas><div data-tabit-vig=\"1\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; pointer-events: none; background: radial-gradient(120% 92% at 50% 48%, rgba(0,0,0,0) 56%, rgba(0,0,0,.42) 100%)\"></div>\n\n</div>\n<div data-tabit-stage=\"1\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 720px\"><div data-tabit-page=\"1\" style=\"position: absolute; inset: 0;   z-index: 3; pointer-events: none; overflow-x: visible; overflow-y: clip\"><div data-tabit-scroll=\"1\" data-h=\"3600\" style=\"position: absolute; left: 0; top: 0; width: 1280px; height: 3600px\"><svg data-tabit-wm=\"1\" viewBox=\"-3 -3 502 392\" width=\"820\" height=\"640.3\" aria-hidden=\"true\" style=\"position: absolute; right: -330px; top: 90px; opacity: 0\"><path fill=\"rgba(246,242,234,.06)\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path></svg><div data-tabit-rise=\"1\" style=\"position: absolute; left: 0; right: 0; top: 276px; text-align: center; font-family: Manrope, system-ui, sans-serif; font-weight: 300; font-size: 80px; line-height: 86px; letter-spacing: -.035em; color: #F6F2EA; white-space: nowrap; opacity: 0\"><span style=\"display: block; overflow: hidden; padding: 0 8px 12px; margin: 0 -8px -12px\"><span data-tabit-line-in=\"0\" style=\"display: block; transform: translateY(110%)\">Bridging (Re)insurance,</span></span><span style=\"display: block; overflow: hidden; padding: 0 8px 12px; margin: 0 -8px -12px\"><span data-tabit-line-in=\"1\" style=\"display: block; transform: translateY(110%)\">Crypto <span style=\"color: #A8823A\">and</span> TradFi</span></span></div><div data-tabit-rise=\"2\" style=\"position: absolute; left: 0; right: 0; top: 486px; display: flex; justify-content: center; gap: 16px; font-size: 13px; line-height: 20px; letter-spacing: .02em; color: rgba(184,192,212,.75); opacity: 0\"><span>Licensed in Barbados</span><span style=\"color: rgba(168,130,58,.8)\">\u00b7</span><span>Class 2 global (re)insurer</span><span style=\"color: rgba(168,130,58,.8)\">\u00b7</span><span>Cells capitalised in Bitcoin</span></div><h2 style=\"position: absolute; left: -9999px; top: 938px; margin: 0\">AI</h2><div data-tabit-sec=\"1\" data-tabit-secd=\"0\" style=\"position: absolute; left: 610px; top: 1096px; font-size: 12px; line-height: 18px; font-weight: 600; letter-spacing: .26em; color: #A8823A; opacity: 0\">02 \u00b7 ARTIFICIAL INTELLIGENCE</div><div data-tabit-sec=\"1\" data-tabit-secd=\"1\" style=\"position: absolute; left: 608px; top: 1132px; width: 600px; font-family: Manrope, system-ui, sans-serif; font-weight: 300; font-size: 32px; line-height: 40px; letter-spacing: -.025em; color: #F6F2EA; opacity: 0\">[Placeholder line on how Tabit uses AI]</div><div data-tabit-sec=\"1\" data-tabit-secd=\"2\" style=\"position: absolute; left: 608px; top: 1192px; width: 520px; font-size: 16px; line-height: 26px; color: #B8C0D4; opacity: 0\">[Placeholder copy. Two or three lines introducing this section will sit here.] <span style=\"opacity: .7\">Scene: \u03c0\u00b9 Orionis, 121 light years.</span></div><div data-tabit-sec=\"2\" data-tabit-secd=\"0\" style=\"position: absolute; left: 608px; top: 1676px; font-size: 12px; line-height: 18px; font-weight: 600; letter-spacing: .26em; color: #A8823A; opacity: 0\">03 \u00b7 CAPITAL</div><div data-tabit-sec=\"2\" data-tabit-secd=\"1\" style=\"position: absolute; left: 608px; top: 1710px; width: 560px; font-family: Manrope, system-ui, sans-serif; font-weight: 300; font-size: 46px; line-height: 52px; letter-spacing: -.03em; color: #F6F2EA; opacity: 0\">[Placeholder headline for this section]</div><div data-tabit-sec=\"2\" data-tabit-secd=\"2\" style=\"position: absolute; left: 608px; top: 1838px; width: 520px; font-size: 16px; line-height: 26px; color: #B8C0D4; opacity: 0\">[Placeholder copy. Two or three lines introducing this section will sit here.] <span style=\"opacity: .7\">Scene: \u03c0\u00b3 Orionis, Tabit, 26 light years.</span></div><div data-tabit-sec=\"3\" data-tabit-secd=\"0\" style=\"position: absolute; left: 608px; top: 2310px; font-size: 12px; line-height: 18px; font-weight: 600; letter-spacing: .26em; color: #A8823A; opacity: 0\">04 \u00b7 LIFE &AMP; PPLI</div><div data-tabit-sec=\"3\" data-tabit-secd=\"1\" style=\"position: absolute; left: 608px; top: 2344px; width: 560px; font-family: Manrope, system-ui, sans-serif; font-weight: 300; font-size: 46px; line-height: 52px; letter-spacing: -.03em; color: #F6F2EA; opacity: 0\">[Placeholder headline for this section]</div><div data-tabit-sec=\"3\" data-tabit-secd=\"2\" style=\"position: absolute; left: 608px; top: 2472px; width: 520px; font-size: 16px; line-height: 26px; color: #B8C0D4; opacity: 0\">[Placeholder copy. Two or three lines introducing this section will sit here.] <span style=\"opacity: .7\">Scene: \u03c0\u2075 Orionis, 1,342 light years.</span></div><div data-tabit-sec=\"4\" data-tabit-secd=\"0\" style=\"position: absolute; left: 584px; top: 3244px; width: 600px; height: 236px; background: rgba(8,13,30,.42); border: 1px solid rgba(184,192,212,.18); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); opacity: 0\"></div><div data-tabit-sec=\"4\" data-tabit-secd=\"0\" style=\"position: absolute; left: 608px; top: 3284px; font-size: 12px; line-height: 18px; font-weight: 600; letter-spacing: .26em; color: #A8823A; opacity: 0\">05 \u00b7 BARBADOS</div><div data-tabit-sec=\"4\" data-tabit-secd=\"1\" style=\"position: absolute; left: 608px; top: 3318px; width: 560px; font-family: Manrope, system-ui, sans-serif; font-weight: 300; font-size: 46px; line-height: 52px; letter-spacing: -.03em; color: #F6F2EA; opacity: 0\">[Placeholder headline for this section]</div><div data-tabit-sec=\"4\" data-tabit-secd=\"2\" style=\"position: absolute; left: 608px; top: 3446px; width: 520px; font-size: 16px; line-height: 26px; color: #B8C0D4; opacity: 0\">[Placeholder copy. Two or three lines introducing this section will sit here.] <span style=\"opacity: .7\">Scene: \u03c0\u2076 Orionis, the foot of the bow.</span></div><div data-tabit-sec=\"4\" data-tabit-secd=\"3\" style=\"position: absolute; left: 608px; top: 3550px; font-size: 12px; line-height: 18px; font-weight: 500; color: #F6F2EA; opacity: 0\">Tabit Insurance SCC is regulated and licensed in Barbados by the Financial Services Commission of Barbados.<br><span style=\"color: #B8C0D4\">The Grove, 21 Pine Road, Belleville, St. Michael, Barbados BB11113</span></div></div></div>\n<div style=\"position: absolute; inset: 0; z-index: 6; pointer-events: none\"><svg data-tabit-lockup=\"1\" viewBox=\"-4 -4 1408 395\" width=\"397.42\" height=\"111.49\" aria-hidden=\"true\" style=\"position: absolute; left: 441.29px; top: 304.28px; overflow: visible; pointer-events: none; transform-origin: 71.13px 55.72px\"><defs><radialGradient id=\"tabitHeadGlow\"><stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\".85\"/><stop offset=\".35\" stop-color=\"#F6F2EA\" stop-opacity=\".3\"/><stop offset=\"1\" stop-color=\"#F6F2EA\" stop-opacity=\"0\"/></radialGradient><mask id=\"tabitReveal\" maskUnits=\"userSpaceOnUse\" x=\"-30\" y=\"-30\" width=\"560\" height=\"450\"><path data-tabit-mask=\"A\" d=\"M247.90 193.20L192.93 248.18L137.95 303.15L192.93 358.13L247.90 303.15L302.88 248.18L357.86 193.20L412.83 138.22L467.81 193.20L412.83 248.18L357.86 193.20L302.88 138.22L247.90 83.25L192.93 28.27L137.95 83.25L192.93 138.22L247.90 193.20\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path><path data-tabit-mask=\"B\" d=\"M247.90 193.20L302.88 248.18L357.86 303.15L302.88 358.13L247.90 303.15L192.93 248.18L137.95 193.20L82.97 138.22L28.00 193.20L82.97 248.18L137.95 193.20L192.93 138.22L247.90 83.25L302.88 28.27L357.86 83.25L302.88 138.22L247.90 193.20\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"0\" stroke-linejoin=\"miter\" stroke-linecap=\"square\"></path></mask></defs><path data-tabit-mark=\"1\" mask=\"url(#tabitReveal)\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"></path><path data-tabit-line=\"A\" d=\"M247.90 193.20L192.93 248.18L137.95 303.15L192.93 358.13L247.90 303.15L302.88 248.18L357.86 193.20L412.83 138.22L467.81 193.20L412.83 248.18L357.86 193.20L302.88 138.22L247.90 83.25L192.93 28.27L137.95 83.25L192.93 138.22L247.90 193.20\" pathLength=\"1\" fill=\"none\" stroke=\"#F6F2EA\" stroke-width=\"1.3\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"miter\" style=\"stroke-dasharray: 1 1; stroke-dashoffset: 1; opacity: 0\"></path><path data-tabit-line=\"B\" d=\"M247.90 193.20L302.88 248.18L357.86 303.15L302.88 358.13L247.90 303.15L192.93 248.18L137.95 193.20L82.97 138.22L28.00 193.20L82.97 248.18L137.95 193.20L192.93 138.22L247.90 83.25L302.88 28.27L357.86 83.25L302.88 138.22L247.90 193.20\" pathLength=\"1\" fill=\"none\" stroke=\"#F6F2EA\" stroke-width=\"1.3\" vector-effect=\"non-scaling-stroke\" stroke-linejoin=\"miter\" style=\"stroke-dasharray: 1 1; stroke-dashoffset: 1; opacity: 0\"></path><g data-tabit-head=\"A\" style=\"opacity: 0\"><circle r=\"22\" fill=\"url(#tabitHeadGlow)\"></circle><circle r=\"4.2\" fill=\"#FFFFFF\"></circle></g><g data-tabit-head=\"B\" style=\"opacity: 0\"><circle r=\"22\" fill=\"url(#tabitHeadGlow)\"></circle><circle r=\"4.2\" fill=\"#FFFFFF\"></circle></g><clipPath id=\"tabitWordClip\"><rect x=\"530\" y=\"40\" width=\"900\" height=\"266.3\"></rect></clipPath><g clip-path=\"url(#tabitWordClip)\"><path data-tabit-letter=\"0\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M542 81.3H710V131.3H654.7V305.3H596.7V131.3H542Z\"></path><path data-tabit-letter=\"1\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M793.3 81.3H860.7L935.3 305.3H874L863.3 268.7H790L778.7 305.3H717.3ZM827 149.3L804.7 220.7H848.7Z\"></path><path data-tabit-letter=\"2\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1084.06 302.52C1107.15 295.54 1121.96 280.22 1126.18 258.94C1128.06 249.43 1127.32 233.56 1124.64 225.77C1121.94 217.93 1118.02 211.13 1113.03 205.66C1107.47 199.56 1103.35 196.65 1095.45 193.22C1090.30 191.00 1089.15 190.20 1090.38 189.74C1104.30 184.50 1115.42 173.06 1120.11 159.15C1122.52 152.01 1123.16 132.87 1121.25 124.83C1118.80 114.48 1115.63 108.60 1108.38 100.94C1101.12 93.28 1094.39 89.12 1083.85 85.78C1071.62 81.91 1068.76 81.3 1010.39 81.3L954.6 81.3L954.6 305.3L1076.55 305.3C1079.2 305.3 1081.6 303.3 1084.06 302.52ZM1013.43 255.13L1012.82 255.13L1012.82 214.52L1033.32 214.81C1052.20 215.07 1054.11 215.24 1057.47 216.94C1059.48 217.95 1062.11 219.92 1063.32 221.31C1067.77 226.40 1069.25 235.96 1066.78 243.50C1065.15 248.44 1063.11 250.68 1058.00 253.10C1054.10 254.95 1052.45 255.11 1033.93 255.44C1022.99 255.63 1013.77 255.49 1013.43 255.13ZM1012.82 150.51L1012.82 130.81L1030.89 131.21C1041.69 131.45 1050.19 132.03 1052.05 132.66C1056.17 134.06 1061.21 139.06 1062.40 142.93C1063.61 146.89 1063.60 155.90 1062.37 159.31C1060.84 163.55 1056.67 167.52 1052.27 168.92C1049.26 169.88 1043.77 170.20 1030.54 170.20L1012.82 170.20L1012.82 150.51Z\"></path><path data-tabit-letter=\"3\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1152.7 81.3H1210V305.3H1152.7Z\"></path><path data-tabit-letter=\"4\" fill=\"#FFFFFF\" fill-rule=\"evenodd\" style=\"opacity: 0; transform-box: fill-box\" d=\"M1232 81.3H1400V131.3H1344.7V305.3H1286.7V131.3H1232Z\"></path></g></svg></div>\n<button type=\"button\" data-tabit-cue=\"1\" class=\"tabit-cue\" aria-label=\"Scroll to the site\" style=\"position: absolute; left: 50%; bottom: 34px; transform: translateX(-50%); z-index: 8; opacity: 0; border: 0; background: transparent; padding: 8px 14px; cursor: pointer; font-family: Manrope, system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .26em; color: #B8C0D4\"><span style=\"display: block\">SCROLL</span><span class=\"tabit-cue-line\" style=\"display: block; width: 1px; height: 30px; margin: 10px auto 0; background: rgba(184,192,212,.5)\"></span></button><button type=\"button\" data-tabit-home=\"1\" class=\"tabit-home\" aria-label=\"Tabit, back to the top\" style=\"position: absolute; left: 32px; top: 16px; width: 156px; height: 56px; z-index: 9; display: none; border: 0; padding: 0; background: transparent; cursor: pointer\"></button></div>\n<div data-tabit-navlayer=\"1\" style=\"position: absolute; inset: 0; z-index: 3; pointer-events: none\"><div data-tabit-navbg=\"1\" style=\"position: absolute; left: 0; right: 0; top: 0; height: 88px; background: rgba(8,13,30,.5); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(184,192,212,.14); opacity: 0; z-index: 4\"></div><div data-tabit-nav=\"1\" style=\"position: absolute; left: 40px; right: 40px; top: 0; height: 88px; display: flex; align-items: center; justify-content: flex-end; opacity: 0; z-index: 5\"><span style=\"display: flex; align-items: center; gap: 34px; font-size: 13px; font-weight: 500; letter-spacing: .02em; color: var(--tabit-ink, rgba(246,242,234,.82))\"><span data-tabit-navitem=\"0\" style=\"opacity: 0\">(Re)insurance</span><span data-tabit-navitem=\"1\" style=\"opacity: 0\">Captives</span><span data-tabit-navitem=\"2\" style=\"opacity: 0; border: 1px solid var(--tabit-line, rgba(246,242,234,.38)); color: var(--tabit-ink2, #F6F2EA); border-radius: 2px; padding: 10px 18px\">Contact us</span></span></div></div>\n\n<div data-tabit-dots=\"1\" style=\"position: absolute; right: 22px; top: 50%; transform: translateY(-50%); width: 60px; height: 204px; z-index: 8; opacity: 0\"><button type=\"button\" data-tabit-ch=\"0\" class=\"tabit-dot\" aria-label=\"Go to Home\" style=\"left: 16px; top: 0px\"><span data-tabit-dot=\"0\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"/></svg></span><span class=\"tabit-dotlabel\"><b>01</b>Home</span></button><button type=\"button\" data-tabit-ch=\"1\" class=\"tabit-dot\" aria-label=\"Go to AI\" style=\"left: 16px; top: 44px\"><span data-tabit-dot=\"1\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"/></svg></span><span class=\"tabit-dotlabel\"><b>02</b>AI</span></button><button type=\"button\" data-tabit-ch=\"2\" class=\"tabit-dot\" aria-label=\"Go to Capital\" style=\"left: 16px; top: 88px\"><span data-tabit-dot=\"2\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"/></svg></span><span class=\"tabit-dotlabel\"><b>03</b>Capital</span></button><button type=\"button\" data-tabit-ch=\"3\" class=\"tabit-dot\" aria-label=\"Go to Life and PPLI\" style=\"left: 16px; top: 132px\"><span data-tabit-dot=\"3\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"/></svg></span><span class=\"tabit-dotlabel\"><b>04</b>Life &amp; PPLI</span></button><button type=\"button\" data-tabit-ch=\"4\" class=\"tabit-dot\" aria-label=\"Go to Barbados\" style=\"left: 16px; top: 176px\"><span data-tabit-dot=\"4\" class=\"tabit-star\" style=\"opacity: .45\"><svg viewBox=\"-4 -4 506 395\" width=\"11\" height=\"8.6\" aria-hidden=\"true\" style=\"display: block; overflow: visible\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z\"/></svg></span><span class=\"tabit-dotlabel\"><b>05</b>Barbados</span></button></div><div data-tabit-coords=\"1\" aria-hidden=\"true\" style=\"position: absolute; right: 64px; bottom: 30px; z-index: 7; font-size: 11px; line-height: 16px; letter-spacing: .14em; color: rgba(184,192,212,.75); pointer-events: none\">BRIDGETOWN, BARBADOS \u00b7 13.10\u00b0 N 59.61\u00b0 W</div>\n<div aria-hidden=\"true\" style=\"position: absolute; inset: 0; pointer-events: none; opacity: .035; mix-blend-mode: screen; overflow: hidden; z-index: 7\"><div class=\"tabit-grain\" style=\"position: absolute; inset: -60px; background-image: url(&quot;data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E&quot;)\"></div></div>\n<button type=\"button\" data-tabit-skip=\"1\" class=\"tabit-skip\" aria-label=\"Skip the intro\" style=\"position: absolute; right: 40px; top: 30px; z-index: 9; opacity: 0; pointer-events: none; height: 32px; padding: 0 14px; border-radius: 2px; border: 1px solid rgba(184,192,212,.35); background: transparent; color: #B8C0D4; font-family: Manrope, system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .2em; cursor: pointer\">SKIP INTRO</button><button type=\"button\" class=\"tabit-replay\" style=\"position: absolute; left: 24px; bottom: 24px; z-index: 9; height: 36px; padding: 0 16px; border-radius: 2px; border: 1px solid rgba(184,192,212,.45); background: rgba(4,7,15,.35); color: #F6F2EA; font-family: Manrope, system-ui, sans-serif; font-weight: 600; font-size: 13px; cursor: pointer\">Replay</button>\n</div>";
var TABIT_FONTS = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@300;400;500;600&display=swap";
function runTabit(host, THREE, init) {
  var realDoc = window.document;
  // the board's code looks things up on the document; here every lookup stays inside this component's own markup
  var document = {
    querySelector: function (q) { return host.querySelector(q); },
    querySelectorAll: function (q) { return host.querySelectorAll(q); },
    createElement: function (t) { return realDoc.createElement(t); },
    createElementNS: function (n, t) { return realDoc.createElementNS(n, t); }
  };
  host.innerHTML = '<style>' + TABIT_STYLE + '</style>' + TABIT_MARKUP;

var TABIT_DATA = { mark: "M247.90 52.50L302.88 -2.48L388.60 83.25L333.63 138.23L357.86 162.45L412.83 107.48L498.56 193.20L412.83 278.93L357.86 223.95L333.63 248.18L388.60 303.16L302.88 388.88L247.90 333.90L192.93 388.88L107.20 303.16L162.18 248.18L137.95 223.95L82.97 278.93L-2.75 193.20L82.97 107.48L137.95 162.45L162.18 138.23L107.20 83.25L192.93 -2.48ZM124.46 83.25L225.78 184.57L239.27 171.08L151.44 83.25L192.93 41.76L225.78 74.62L239.27 61.13L192.93 14.78ZM201.55 116.11L215.04 129.60L302.88 41.76L344.36 83.25L311.51 116.11L325.00 129.60L371.35 83.25L302.88 14.78ZM168.70 83.25L192.93 107.48L217.15 83.25L192.93 59.02ZM278.65 83.25L302.88 107.48L327.11 83.25L302.88 59.02ZM256.53 105.37L335.74 184.57L349.23 171.08L270.02 91.88ZM223.67 138.23L247.90 162.45L272.13 138.23L247.90 114.00ZM14.50 193.20L82.97 261.67L184.30 160.34L170.81 146.85L82.97 234.69L41.49 193.20L82.97 151.72L115.83 184.57L129.32 171.08L82.97 124.74ZM311.51 226.06L325.00 239.55L412.83 151.72L454.32 193.20L412.83 234.69L379.97 201.83L366.48 215.32L412.83 261.67L481.30 193.20L412.83 124.74ZM201.55 226.06L215.04 239.55L294.25 160.34L280.76 146.85ZM58.74 193.20L82.97 217.43L107.20 193.20L82.97 168.97ZM168.70 193.20L192.93 217.43L217.15 193.20L192.93 168.97ZM278.65 193.20L302.88 217.43L327.11 193.20L302.88 168.97ZM388.60 193.20L412.83 217.43L437.06 193.20L412.83 168.97ZM146.58 215.32L225.78 294.53L239.27 281.04L160.07 201.83ZM256.53 215.32L344.36 303.16L302.88 344.64L270.02 311.78L256.53 325.27L302.88 371.62L371.35 303.16L270.02 201.83ZM223.67 248.18L247.90 272.41L272.13 248.18L247.90 223.95ZM124.46 303.16L192.93 371.62L294.25 270.30L280.76 256.81L192.93 344.64L151.44 303.16L184.30 270.30L170.81 256.81ZM168.70 303.16L192.93 327.38L217.15 303.16L192.93 278.93ZM278.65 303.16L302.88 327.38L327.11 303.16L302.88 278.93Z", nodes: [[247.9, 193.2, 0.0], [192.93, 248.18, 0.0625], [137.95, 303.15, 0.125], [192.93, 358.13, 0.1875], [247.9, 303.15, 0.25], [302.88, 248.18, 0.0625], [357.86, 193.2, 0.375], [412.83, 138.22, 0.4375], [467.81, 193.2, 0.5], [412.83, 248.18, 0.5625], [302.88, 138.22, 0.6875], [247.9, 83.25, 0.75], [192.93, 28.27, 0.8125], [137.95, 83.25, 0.875], [192.93, 138.22, 0.6875], [357.86, 303.15, 0.125], [302.88, 358.13, 0.1875], [137.95, 193.2, 0.375], [82.97, 138.22, 0.4375], [28.0, 193.2, 0.5], [82.97, 248.18, 0.5625], [302.88, 28.27, 0.8125], [357.86, 83.25, 0.875]] };
var TABIT_AI = true, TABIT_VARIANT = 'dc17', TABIT_END = 7.2, TABIT_SNAP = [0, 900, 1620, 2340, 3060, 3780];
// AS7.14: the site fills any landscape screen and follows a window as it is resized. The design is 720 units tall and
// its width W follows the screen (960 to 1940). The centred 1280-wide stage keeps the logo and the copy where they were
// designed; the sky, the nav bar, the page markers and the corner captions run to the screen's edges.
var TABIT_W = 1280, TABIT_OX = 0, TABIT_DX = 0, TABIT_TS = 1, TABIT_RS = 1, TABIT_K = 1, TABIT_FOCUS = 240, TABIT_SUBJ = { cx: 940, s: 1 }, TABIT_C0 = 608;
function tabitLayout(root, k) {
  if (!root) return false;
  if (k) TABIT_K = k;
  if (!root.__ro && window.ResizeObserver) { root.__ro = new ResizeObserver(function () { root.__w = root.clientWidth; }); root.__ro.observe(root); }
  if (root.__w == null) root.__w = root.clientWidth;
  var W = Math.round(Math.max(960, Math.min(1940, root.__w || 1280)));
  if (root.__done && W === TABIT_W) return false;
  root.__done = true;
  var OX = (W - 1280) / 2, C0 = TABIT_C0; TABIT_W = W; TABIT_OX = OX;
  var left = W >= 1280 ? C0 + OX : C0 - (1280 - W) * .7125;   // the copy column's left edge on screen: the right-hand column
  TABIT_TS = W >= 1280 ? 1 : Math.min(1, (W - left - 80) / 560);
  TABIT_FOCUS = 240 - Math.max(0, OX) * .5;   // the path keeps to the left
  TABIT_DX = left - C0 - OX;                    // ... as a shift inside the stage
  TABIT_RS = Math.min(1, (W - 80) / 1000);
  var st = root.querySelector('[data-tabit-stage]'); if (st) st.style.left = OX.toFixed(1) + 'px';
  ['gl', 'ov', 'scene'].forEach(function (n) { var c = root.querySelector('canvas[data-tabit-' + n + ']'); if (c) c.style.width = W + 'px'; });
  Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-sec]'), function (el) {
    if (el.__l0 == null) el.__l0 = parseFloat(el.style.left) || 0;
    el.style.left = (C0 + TABIT_DX + (el.__l0 - C0) * TABIT_TS).toFixed(1) + 'px'; el.style.transformOrigin = '0 0';
    var box = !!el.style.height;   // the frosted panel behind page 5 keeps its height
    el.style.scale = TABIT_TS < 1 ? (box ? TABIT_TS.toFixed(4) + ' 1' : TABIT_TS.toFixed(4)) : '';
  });
  Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-rise]'), function (el) { el.style.transformOrigin = '50% 0'; el.style.scale = TABIT_RS < 1 ? TABIT_RS.toFixed(4) : ''; });
  return true;
}
function makeTabitHero(glCanvas, ovCanvas, DATA, DOM) {
  // Tabit hero, Night mode (Brand Book 2027). The sky, the flare and the knot's stars are WebGL;
  // the logo itself is the flat white lockup in the DOM, exactly as drawn.
  var T3 = THREE;
  var W = TABIT_W, H = 720, OX = TABIT_OX, dpr = Math.min((window.devicePixelRatio || 1) * TABIT_K, 2);   // W follows the screen; OX centres the 1280 design in it
  var C_NIGHT = 0x04070F, BRASS = '168,130,58', DUSK = '184,192,212', IVORY = '246,242,234';
  var renderer = new T3.WebGLRenderer({ canvas: glCanvas, antialias: true, preserveDrawingBuffer: !!DATA.preserve });
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
  renderer.outputEncoding = T3.sRGBEncoding; renderer.setClearColor(C_NIGHT, 1);
  var scene = new T3.Scene();
  var cam = new T3.PerspectiveCamera(22, W / H, 1, 80000);
  var FPX = (H / 2) / Math.tan(11 * Math.PI / 180);
  ovCanvas.width = W * dpr; ovCanvas.height = H * dpr;
  var ox = ovCanvas.getContext('2d'); ox.setTransform(dpr, 0, 0, dpr, 0, 0);

  var seed = 1291;
  function rnd() { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }
  function gauss() { return (rnd() + rnd() + rnd() + rnd() - 2) / .58; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function seg(t, a, b) { return clamp((t - a) / (b - a), 0, 1); }
  function eIOS(x) { return -(Math.cos(Math.PI * x) - 1) / 2; }
  function eIOC(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function eIOQ(x) { return x < .5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2; }
  function eOC(x) { return 1 - Math.pow(1 - x, 3); }
  function eOQ(x) { return 1 - Math.pow(1 - x, 4); }
  function lerp(a, b, k) { return a + (b - a) * k; }

  // Timeline (seconds): resolves in ~7.5s
  // B1: Orion stays on screen. The camera settles on the whole constellation, Tabit's knot forms at the star itself,
  // and the wordmark rises into the open sky beside it.
  // B10: no brightness flash at the start (sky fades straight to its focused level). B9: slower twinkle; background stars toned down so Orion leads. B8: twinkle made genuinely visible (no clipping, faster flicker, wider range). B7: Orion twinkles (Tabit steady), baseline reveal for the wordmark, black hole kept off the logo. B6: agreed brief; calm straight move, shift synced to the wordmark, layered realistic sky. B4: lockup centred, Manrope labels, smaller black hole, depth between camera and Orion. B3: splash screen only (no hero copy), straight grid, black-hole cursor. Based on B2: Tabit dead centre throughout; Orion to its left, the lockup and homepage hero to its right.
  var TL = {
    lines0: .9, draw0: 3.5, draw1: 4.7, grow0: 4.6, grow1: 5.15, settle0: 4.8, settle1: 5.25,
    shield0: 3.2, shield1: 3.9, word0: 4.95, slide0: 4.95, slide1: 6.1
  };
  var MARKW = 140, KM = MARKW / 496, TX = 640 - (700 - 248) * KM, TY = 360, KR = 84;   // AS7.5: the B11 splash (Orion stays with Tabit)   // B4: lockup centred, so Tabit sits at x≈512   // Tabit's place on screen; mark width in px

  // ------------------------------------------------------------------ textures
  function canvasTex(w, h, fn) {
    var c = document.createElement('canvas'); c.width = w; c.height = h; var g = c.getContext('2d'); fn(g, w, h);
    var tx = new T3.CanvasTexture(c); tx.encoding = T3.sRGBEncoding; return tx;
  }
  function radial(stops) {
    return canvasTex(256, 256, function (g) { var gr = g.createRadialGradient(128, 128, 0, 128, 128, 128); stops.forEach(function (s) { gr.addColorStop(s[0], s[1]); }); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); });
  }
  var texStar = radial([[0, 'rgba(255,255,255,1)'], [.05, 'rgba(255,255,255,.95)'], [.12, 'rgba(255,255,255,.38)'], [.3, 'rgba(255,255,255,.08)'], [.6, 'rgba(255,255,255,.015)'], [1, 'rgba(255,255,255,0)']]);
  var texBloom = radial([[0, 'rgba(255,255,255,1)'], [.18, 'rgba(255,255,255,.42)'], [.45, 'rgba(255,255,255,.1)'], [1, 'rgba(255,255,255,0)']]);
  function alphaTex(w, h, fa) {
    return canvasTex(w, h, function (g) {
      var id = g.createImageData(w, h), d = id.data;
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) { var a = fa(x - w / 2 + .5, y - h / 2 + .5, w, h), k = (y * w + x) * 4; d[k] = d[k + 1] = d[k + 2] = 255; d[k + 3] = clamp(a, 0, 1) * 255; }
      g.putImageData(id, 0, 0);
    });
  }
  // four-point diffraction cross, the way a real lens draws a bright star
  var texSpikes = alphaTex(512, 512, function (x, y) {
    var ax = Math.abs(x), ay = Math.abs(y);
    var h = Math.exp(-ay * ay / 2.2) * Math.pow(Math.max(0, 1 - ax / 256), 2.4), v = Math.exp(-ax * ax / 2.2) * Math.pow(Math.max(0, 1 - ay / 256), 2.4);
    return Math.max(h, v);
  });
  // thin anamorphic streak
  var texStreak = alphaTex(1024, 32, function (x, y) { return Math.exp(-y * y / 6) * Math.pow(Math.max(0, 1 - Math.abs(x) / 512), 3); });
  var texCloud = canvasTex(256, 256, function (g) {
    for (var i = 0; i < 26; i++) {
      var x = 70 + rnd() * 116, y = 70 + rnd() * 116, r = 18 + rnd() * 52, gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(255,255,255,.13)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    }
    g.globalCompositeOperation = 'destination-in';
    var mk = g.createRadialGradient(128, 128, 0, 128, 128, 128); mk.addColorStop(0, 'rgba(0,0,0,1)'); mk.addColorStop(.55, 'rgba(0,0,0,.55)'); mk.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = mk; g.fillRect(0, 0, 256, 256);
  });
  function addSprite(tex, color, order) {
    var s = new T3.Sprite(new T3.SpriteMaterial({ map: tex, color: new T3.Color(color[0], color[1], color[2]), transparent: true, depthWrite: false, depthTest: false, blending: T3.AdditiveBlending, opacity: 0 }));
    s.renderOrder = order || 0; scene.add(s); return s;
  }

  // ------------------------------------------------------------------ Orion, real positions and distances; Tabit (pi3) sits on the axis at the world origin
  var Zo = 1800;
  // Positions from catalogue RA/Dec (SIMBAD/Hipparcos via the List of stars in Orion), gnomonic projection centred on pi3 Ori, north up.
  var OR = {
    betel: [657.4, 299.0, 643, 0.42],
    rigel: [845.2, 597.3, 773, 0.18],
    bella: [799.9, 322.6, 243, 1.64],
    mintaka: [765.0, 446.2, 916, 2.20],
    alnilam: [744.5, 463.3, 1342, 1.69],
    alnitak: [722.2, 477.6, 817, 1.88],
    saiph: [683.1, 631.5, 721, 2.07],
    meissa: [754.7, 254.9, 1055, 3.47],
    pi1: [938.5, 254.4, 121, 4.64],
    pi2: [957.8, 277.4, 194, 4.35],
    pi3: [961.3, 312.8, 26, 3.19, [1, .97, .9]],
    pi4: [955.1, 337.6, 1259, 3.68],
    pi5: [941.1, 395.5, 1342, 3.71],
    pi6: [921.4, 408.9, 953, 4.47],
    mu: [623.4, 254.7, 152, 4.12],
    nu: [601.7, 153.5, 534, 4.42],
    xi: [579.3, 162.6, 634, 4.45],
    chi1: [670.0, 50.5, 28, 4.39],
    chi2: [624.1, 48.4, 1801, 4.64],
    omi2: [932.1, 192.5, 169, 4.06],
    o11: [895.7, 156.9, 400, 4.65],
    eta: [799.9, 485.7, 901, 3.35],
    tau: [831.0, 570.9, 554, 3.59]
  };
  // the chart is framed so Tabit is dead centre; the figure of Orion opens out to its left
  function scr(o) { return [640 + .92 * (o[0] - 961.3), 372 + .92 * (o[1] - 344)]; }
  var p3s = scr(OR.pi3), Ocx = -(p3s[0] - 640) * Zo / FPX, Ocy = (p3s[1] - 360) * Zo / FPX;
  function framePoint(sx, sy, D) { return new T3.Vector3(Ocx + (sx - 640) * D / FPX, Ocy - (sy - 360) * D / FPX, Zo - D); }
  var ori = {};
  Object.keys(OR).forEach(function (k) {
    var o = OR[k], s = scr(o), D = Zo + (k === 'pi3' ? 0 : 140 * Math.log(o[2] / 26) / Math.LN10);
    var v = framePoint(s[0], s[1], D), c = o[4] || [.9, .93, 1], b = Math.pow(10, -.4 * (o[3] - .13));
    var bb = k === 'pi3' ? .55 : Math.min(b, .18); var sp = addSprite(texStar, c, 2); sp.scale.setScalar((13 + 30 * Math.sqrt(bb)) * D / FPX); b = bb; sp.position.copy(v);
    ori[k] = { v: v, sp: sp, b: b, mag: o[3], col: c, tw1: .7 + rnd() * .6, tw2: 4.5 + rnd() * 2.5, tw3: 7.5 + rnd() * 3.5, ph: rnd() * 6.28, base: sp.scale.x, col0: c.slice() };
  });
  // Stick figure as drawn on the IAU / Sky & Telescope chart of Orion
  var LINES = [['pi3', 'pi2'], ['pi2', 'pi1'], ['pi1', 'omi2'], ['omi2', 'o11'], ['pi3', 'pi4'], ['pi4', 'pi5'], ['pi5', 'pi6'],
    ['pi3', 'bella'], ['bella', 'meissa'], ['meissa', 'betel'], ['betel', 'bella'],
    ['bella', 'mintaka'], ['mintaka', 'alnilam'], ['alnilam', 'alnitak'], ['betel', 'alnitak'], ['alnitak', 'saiph'],
    ['mintaka', 'eta'], ['eta', 'tau'], ['tau', 'rigel'],
    ['betel', 'mu'], ['mu', 'xi'], ['xi', 'chi2'], ['chi2', 'chi1'], ['chi1', 'nu']];
  // B7: Orion's stars scintillate gently (two slow sine terms per star, so no two pulse together). Tabit never does:
  // the fixed star, steady while its neighbours shimmer.
  // B8: real scintillation: a slow swell plus two faster, irregular flickers (about 2-5 per second). Range roughly 0.6-1.4.
  function twinkle(o, t) {
    var f = .5 + .5 * Math.sin(t * o.tw2 + o.ph * 1.7) * Math.sin(t * o.tw3 * .37 + o.ph);
    return 1 + .18 * Math.sin(t * o.tw1 + o.ph) + .36 * (Math.sin(t * o.tw2 + o.ph * 1.7) * .6 + Math.sin(t * o.tw3 + o.ph * 2.3) * .4) * f;
  }
  var SHIELD = { pi1: 1, pi2: 1, pi4: 1, pi5: 1, pi6: 1, omi2: 1, o11: 1 };
  var popAt = {};
  LINES.forEach(function (L, idx) {
    var a = TL.lines0 + idx * .035, b = a + .45;
    popAt[L[0]] = Math.min(popAt[L[0]] == null ? 99 : popAt[L[0]], a); popAt[L[1]] = Math.min(popAt[L[1]] == null ? 99 : popAt[L[1]], b);
  });

  // ------------------------------------------------------------------ the sky
  // B6: depth from layers, not speed. Four layers sit at different distances and none is ever passed by the camera,
  // so they slide against each other at different rates (like a multiplane camera) while the move stays calm.
  // Stars follow a realistic spread: a few bright ones with soft halos, many medium, a fine dust of faint ones,
  // in muted true colours; farther layers are dimmer and cooler. The Milky Way is clustered, with a dark dust lane.
  var pos = [], col = [], siz = [], pha = [];
  var TEMP = [[.80, .86, 1, .12], [.97, .97, 1, .38], [1, .96, .88, .28], [1, .91, .76, .14], [1, .82, .66, .08]];
  function pickCol() { var r = rnd(), acc = 0; for (var q = 0; q < TEMP.length; q++) { acc += TEMP[q][3]; if (r < acc) return TEMP[q]; } return TEMP[1]; }
  function addStar(x, y, z, bright, dim) { pos.push(x, y, z); var c = pickCol(), k = dim || 0; col.push(lerp(c[0], .74, k), lerp(c[1], .8, k), lerp(c[2], .94, k)); siz.push(bright); pha.push(rnd()); }
  function hsh(ix, iy) { var h = Math.sin(ix * 127.1 + iy * 311.7) * 43758.5453; return h - Math.floor(h); }
  function vnoise(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy, ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
    return lerp(lerp(hsh(ix, iy), hsh(ix + 1, iy), ux), lerp(hsh(ix, iy + 1), hsh(ix + 1, iy + 1), ux), uy);
  }
  var i, v, D, n;
  var ZF = Zo * .92 / .95, ZS = 3200, SHIFT = 640 - TX;
  function placeAt(sx, sy, z, zr, xr) { var d = zr - z; return [(xr || 0) + (sx - 640) * d / FPX, -(sy - 360) * d / FPX, z]; }
  var XEND = 45.2, LOCK_W = 600, ZEND = 140 * FPX / LOCK_W, SLIDE = (700 - 248) * LOCK_W / 1400;
  var LAYERS = [
    { z0: 520, z1: 900, n: 900, pw: 2.8, amp: .85, dim: .03 },
    { z0: -1600, z1: -1000, n: 2600, pw: 3.3, amp: .78, dim: .11 },
    { z0: -5500, z1: -3500, n: 6000, pw: 4.0, amp: .7, dim: .25 },
    { z0: -16000, z1: -12000, n: 12000, pw: 6.0, amp: .5, dim: .45 }
  ];
  LAYERS.forEach(function (L, li) {
    for (var q = 0; q < L.n; q++) {
      var z = lerp(L.z0, L.z1, rnd()), early = li === 0 && q % 2 === 0, zr = early ? ZS : ZF, xr = early ? 0 : SHIFT * ZF / FPX;
      var p = placeAt(-220 + rnd() * 1720, -160 + rnd() * 1040, z, zr, xr);
      addStar(p[0], p[1], p[2], Math.pow(rnd(), L.pw) * L.amp, L.dim);
    }
  });
  for (n = 0, i = 0; i < 60000 && n < 11000; i++) {   // winter Milky Way, east of Betelgeuse: clustered, with a dust lane
    var a = rnd(), off = gauss() * 115, bx = lerp(-160, 330, a) + off * .85, by = lerp(-180, 900, a) - off * .53;
    var lane = Math.exp(-Math.pow((off - 22 * Math.sin(a * 9)) / 20, 2));
    var keep = clamp((vnoise(bx / 120, by / 120) - .3) / .45, 0, 1) * (1 - .85 * lane);
    if (rnd() > keep) continue;
    var zz = rnd() < .7 ? lerp(-16000, -12000, rnd()) : lerp(-5500, -3500, rnd()), p2 = placeAt(bx, by, zz, ZF, SHIFT * ZF / FPX * .5);
    addStar(p2[0], p2[1], p2[2], Math.pow(rnd(), 7) * .55, .4); n++;
  }
  (function () {   // the same sky carried out to the widest screen's edges (own random sequence, so the 1280 sky is exactly as before)
    var seedK = seed, ext = 330 - 200 + 80; seed = 7313;
    LAYERS.forEach(function (L) {
      var nx = Math.round(L.n * ext / 1720);
      for (var side = 0; side < 2; side++) for (var q = 0; q < nx; q++) {
        var z = lerp(L.z0, L.z1, rnd()), xr = SHIFT * ZF / FPX, sx = side ? 1500 + rnd() * ext : -220 - rnd() * ext;
        var p = placeAt(sx, -160 + rnd() * 1040, z, ZF, xr);
        addStar(p[0], p[1], p[2], Math.pow(rnd(), L.pw) * L.amp, L.dim);
      }
    });
    seed = seedK;
  })();
  var sg = new T3.BufferGeometry();
  sg.setAttribute('position', new T3.Float32BufferAttribute(pos, 3)); sg.setAttribute('color', new T3.Float32BufferAttribute(col, 3));
  sg.setAttribute('bright', new T3.Float32BufferAttribute(siz, 1)); sg.setAttribute('phase', new T3.Float32BufferAttribute(pha, 1));
  var starMat = new T3.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPR: { value: dpr }, uFade: { value: 0 }, uPar: { value: new T3.Vector2() }, uReveal: { value: 0 }, uLens: { value: new T3.Vector3(-999, -999, 0) }, uRes: { value: new T3.Vector2(W, H) }, uAsp: { value: W / 1280 } },
    vertexShader: 'attribute float bright; attribute vec3 color; attribute float phase; uniform float uTime; uniform float uPR; uniform float uFade; uniform vec2 uPar; uniform float uReveal; uniform vec3 uLens; uniform vec2 uRes; uniform float uAsp; varying vec3 vC; varying float vA; varying float vB; varying float vBr;' +
      'void main(){ vBr = bright; vec4 mv = modelViewMatrix * vec4(position,1.0); float d = -mv.z; mv.xy += uPar * clamp(9000.0 / d, 0.0, 3.0);' +
      'float tw = 0.86 + 0.14 * sin(uTime * (0.6 + phase * 1.3) + phase * 6.2831);' +
      'float blur = clamp(1.0 - d / 700.0, 0.0, 1.0); vB = blur;' +
      'gl_Position = projectionMatrix * mv; vec2 ndc = gl_Position.xy / gl_Position.w; float rr = length(ndc * vec2(uAsp, 0.5625));' +
      'if (uLens.z > 0.002) { vec2 sp = vec2((ndc.x * 0.5 + 0.5) * uRes.x, (0.5 - ndc.y * 0.5) * uRes.y); vec2 d = sp - uLens.xy; float r = max(length(d), 0.001);' +
      ' float f = clamp((135.0 - r) / 87.75, 0.0, 1.0); f = f * f * (3.0 - 2.0 * f) * uLens.z; float rl = 0.5 * (r + sqrt(r * r + 4.0 * 21.0 * 21.0)); float nr = r + (rl - r) * f;' +
      ' float sw = 0.5 * f * 21.0 / (r + 21.0); vec2 u = d / r; vec2 ru = vec2(u.x * cos(sw) - u.y * sin(sw), u.x * sin(sw) + u.y * cos(sw)); vec2 np = uLens.xy + ru * nr;' +
      ' ndc = vec2(np.x / uRes.x * 2.0 - 1.0, 1.0 - np.y / uRes.y * 2.0); gl_Position.xy = ndc * gl_Position.w; }' +
      'float rev = smoothstep(uReveal, uReveal - 0.35, rr);' +
      'vA = uFade * rev * tw * (0.32 + 0.68 * bright) * clamp(2600.0 / d, 0.5, 1.22);' +
      'gl_PointSize = (1.05 + 5.2 * pow(bright, 1.6)) * clamp(3400.0 / d, 0.75, 1.6) * uPR; vC = color; }',
    fragmentShader: 'varying vec3 vC; varying float vA; varying float vB; varying float vBr; void main(){ vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;' +
      'float a = exp(-r * r * 12.0) + (0.07 + 0.42 * vBr * vBr) * exp(-r * r * 2.3); gl_FragColor = vec4(vC, a * vA); }',
    transparent: true, depthWrite: false, depthTest: false, blending: T3.AdditiveBlending
  });
  var starPts = new T3.Points(sg, starMat); starPts.frustumCulled = false; starPts.renderOrder = 1; scene.add(starPts);
  // Barnard's Loop (the faint arc of gas around Orion's belt and sword) and the Orion Nebula, muted to the brand palette
  var chartCX = 961.3, chartCY = 312.8;
  function chartToFrame(cx, cy) { return scr([cx, cy]); }
  var texLoop = canvasTex(512, 512, function (g) {
    g.filter = 'blur(22px)'; g.lineCap = 'round';
    for (var k = 0; k < 3; k++) {
      g.strokeStyle = 'rgba(255,255,255,' + [.55, .35, .2][k] + ')'; g.lineWidth = [26, 46, 80][k];
      g.beginPath(); g.ellipse(256, 256, 170, 220, 0, Math.PI * .52, Math.PI * 1.55); g.stroke();
    }
    g.filter = 'none';
  });
  var neb = [];
  (function () {
    var p = chartToFrame(752, 455), D = Zo + 520, sp = addSprite(texLoop, [.95, .66, .58], 0);
    sp.position.copy(framePoint(p[0], p[1], D)); sp.scale.setScalar(430 * .92 * D / FPX); sp.userData.op = .05; neb.push(sp);
    var m = chartToFrame(754, 539), D2 = Zo + 600;
    var m1 = addSprite(texBloom, [.98, .80, .82], 0); m1.position.copy(framePoint(m[0], m[1], D2)); m1.scale.setScalar(40 * .92 * D2 / FPX); m1.userData.op = .32; neb.push(m1);
    var m2 = addSprite(texBloom, [.86, .9, 1], 0); m2.position.copy(framePoint(m[0], m[1] - 3, D2)); m2.scale.setScalar(16 * .92 * D2 / FPX); m2.userData.op = .3; neb.push(m2);
  })();
  var clouds = [];
  for (i = 0; i < 9; i++) {
    var aa = i / 8, cl = addSprite(texCloud, i % 2 ? [.23, .29, .49] : [.17, .24, .44], 0);
    cl.position.copy(framePoint(lerp(-330, 300, aa) + gauss() * 30, lerp(-160, 900, aa), 22000)); cl.scale.setScalar(5600 + rnd() * 4200);
    cl.material.rotation = rnd() * 6.28; cl.userData.op = .1 + rnd() * .05; clouds.push(cl);
  }

  // ------------------------------------------------------------------ Tabit's flare
  var flare = {
    bloom: addSprite(texBloom, [1, .97, .92], 3), streak: addSprite(texStreak, [1, .96, .9], 4),
    spikes: addSprite(texSpikes, [1, .97, .92], 5), core: addSprite(texStar, [1, .98, .93], 6), pulse: addSprite(texBloom, [.85, .88, 1], 3)
  };
  function pxScale(sp, wpx, hpx) { var d = Math.max(1, cam.position.z - sp.position.z); sp.scale.set(wpx * d / FPX, (hpx || wpx) * d / FPX, 1); }

  // ------------------------------------------------------------------ Tabit's own constellation lives at the star, tiny at first, and grows as we zoom in.
  // Each point of the knot lights as the line reaches it.
  var MS = .1, MCX = 248, MCY = 193.4, nodes = [];
  DATA.nodes.forEach(function (p) {
    if (p[2] < .002) return;   // the centre is Tabit itself
    nodes.push({ x: 640 + (p[0] - MCX) * KM, y: TY + (p[1] - MCY) * KM, f: p[2], ph: rnd() * 6.28 });
  });

  // ------------------------------------------------------------------ choreography
  var pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  // B3: the cursor is a small black hole. Stars around it are lensed outward into a ring (as light bends round a
  // compact mass) with a slight swirl; far stars are untouched. The logo is never distorted.
  var LENS = { mx: -999, my: -999, tx: -999, ty: -999, k: 0, on: 0, E: 21, R: 135 };
  function lensPt(x, y) {
    if (LENS.k < .002) return [x, y];
    var dx = x - LENS.mx, dy = y - LENS.my, r = Math.hypot(dx, dy) || .001, E = LENS.E, R = LENS.R;
    var f = clamp((R - r) / (R * .65), 0, 1); f = f * f * (3 - 2 * f); f *= LENS.k;
    var rr = .5 * (r + Math.sqrt(r * r + 4 * E * E)), nr = r + (rr - r) * f, sw = .5 * f * E / (r + E), c = Math.cos(sw), s = Math.sin(sw);
    var ux = dx / r, uy = dy / r; return [LENS.mx + (ux * c - uy * s) * nr, LENS.my + (ux * s + uy * c) * nr];
  }
  // C-series: hooks the page hand-off drives (all neutral at their defaults, so the splash is exactly B11)
  var FX = { sky: 1, ori: 1, grid: 0, snap: 0, gridLine: 1, hLine: 1, push: 0, camY: 0, lens: 1, keepGrid: 0, lineBoost: 1, creep: 1, colsOnly: 0, colMin: -1e9, colMax: 1e9, colKeep: null };
  var slideK = 0;
  var zoomS = 0;
  var shiftK = 0;
  function camera(t) {
    var p = eIOS(seg(t, 0, 3.9));
    var z = Math.exp(lerp(Math.log(ZS), Math.log(ZF), p)) * Math.exp(-.0018 * Math.min(40, Math.max(0, t - 6.4)) * FX.creep) * (1 - .3 * FX.push);
    shiftK = eIOS(seg(t, TL.word0 - .1, TL.word0 + 1.25));
    zoomS = 1;
    var x = SHIFT * shiftK * z / FPX;   // camera slides right, so Tabit (and the mark) slide left by exactly SHIFT px
    var cy = FX.camY * z / FPX;
    cam.position.set(x, cy, z); cam.lookAt(x, cy, z - 1000);
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();
  }
  var v3 = new T3.Vector3(), ORIGIN = new T3.Vector3();
  function toScreen(v) { v3.copy(v).project(cam); return [(v3.x + 1) / 2 * W - OX, (1 - v3.y) / 2 * H]; }   // in the 1280 design's units

  function render(t) {
    if (TABIT_W !== W) {   // the window was resized: follow it, without rebuilding anything
      W = TABIT_W; OX = TABIT_OX; renderer.setSize(W, H, false); cam.aspect = W / H; cam.updateProjectionMatrix();
      ovCanvas.width = Math.round(W * dpr); ovCanvas.height = Math.round(H * dpr);
      starMat.uniforms.uRes.value.set(W, H); starMat.uniforms.uAsp.value = W / 1280;
    }
    pointer.sx += (pointer.x - pointer.sx) * .05; pointer.sy += (pointer.y - pointer.sy) * .05;
    camera(t);
    var lcx = TX + SHIFT * (1 - shiftK) - 70, overLogo = t > TL.grow0 && LENS.tx > lcx - 24 && LENS.tx < lcx + 395 + 24 && LENS.ty > 360 - 55 - 24 && LENS.ty < 360 + 55 + 24;
    if (FX.inkHit !== undefined) { overLogo = FX.inkHit === 1; if (overLogo) LENS.k = 0; }   // F2.6: the black hole ends the moment the pointer reaches the logo
    LENS.k += ((LENS.on && !overLogo && FX.lens > .5 ? 1 : 0) - LENS.k) * .07; LENS.mx += (LENS.tx - LENS.mx) * .22; LENS.my += (LENS.ty - LENS.my) * .22;
    starMat.uniforms.uLens.value.set(LENS.mx + OX, LENS.my, LENS.k);
    var fadeIn = eIOS(seg(t, 0, 1.3)), focus = eIOS(seg(t, .9, 1.9)) * (1 - .45 * eIOS(seg(t, 3.0, 4.0)));
    var skyFocus = 1 - .45 * eIOS(seg(t, 3.0, 4.0));   // B10: the sky starts at its dimmed level (no overshoot), same later easing
    starMat.uniforms.uTime.value = t; starMat.uniforms.uFade.value = fadeIn * (1 - .35 * skyFocus) * FX.sky;
    starMat.uniforms.uReveal.value = lerp(0, 2.2, eOC(seg(t, 0, 1.6)));
    starMat.uniforms.uPar.value.set(-pointer.sx * 1.6, pointer.sy * 1.0);
    clouds.forEach(function (c) { c.material.opacity = c.userData.op * fadeIn * (1 - .4 * skyFocus) * FX.sky; });
    var nebA = eIOS(seg(t, 1.0, 3.2)); neb.forEach(function (n) { n.material.opacity = n.userData.op * nebA * FX.sky; });
    var oriA = eIOS(seg(t, .3, 1.4));
    Object.keys(ori).forEach(function (k) {
      var o = ori[k], a = oriA * (.62 + .38 * focus);
      if (SHIELD[k]) a *= 1 - eIOS(seg(t, TL.shield0, TL.shield1));
      if (k === 'pi3') a = oriA * (1 - eIOS(seg(t, 2.6, 3.0)));
      var tw = k === 'pi3' ? 1 : twinkle(o, t);
      o.sp.material.opacity = clamp(a * (.36 + .26 * Math.pow(o.b, .3)) * tw * FX.ori, 0, 1);   // base kept low so the twinkle never clips
      o.sp.scale.setScalar(o.base * (k === 'pi3' ? 1 : 1.2 * (.82 + .18 * tw)));
      if (k !== 'pi3') { var cs2 = .06 * Math.sin(t * o.tw3 * .8 + o.ph); o.sp.material.color.setRGB(clamp(o.col0[0] * (1 + cs2), 0, 1), o.col0[1], clamp(o.col0[2] * (1 - cs2), 0, 1)); }
      if (k !== 'pi3') {   // bend the star's glow with the lens: project, lens in screen space, unproject at the same depth
        v3.copy(o.v).project(cam); var ndz = v3.z, sp2 = lensPt((v3.x + 1) / 2 * W - OX, (1 - v3.y) / 2 * H);
        o.sp.position.set((sp2[0] + OX) / W * 2 - 1, 1 - sp2[1] / H * 2, ndz).unproject(cam);
      }
    });

    // flare: Tabit brightens as we close in, peaks while the stars are called in, then gives its light to the mark
    var F = 0,   // A8: no flare; Tabit stays a calm point so the ring and tag carry the story
       sh = 1 + .035 * Math.sin(t * 31) + .02 * Math.sin(t * 17.3);
    flare.core.material.opacity = clamp(.9 * seg(t, 2.4, 2.8) * (1 - eIOS(seg(t, TL.settle0, TL.settle1))), 0, 1); pxScale(flare.core, 14);
    flare.bloom.material.opacity = .2 * F; pxScale(flare.bloom, 80 + 460 * F);
    flare.spikes.material.opacity = .62 * F * sh; flare.spikes.material.rotation = -cam.rotation.z + .03 * Math.sin(t * .8); pxScale(flare.spikes, 60 + 540 * F);
    flare.streak.material.opacity = .22 * F; flare.streak.material.rotation = -cam.rotation.z; pxScale(flare.streak, 1300 * F + 1, 20 + 12 * F);
    var pu = Math.exp(-Math.pow((t - (TL.pulse + .1)) / .32, 2));
    flare.pulse.material.opacity = 0; pxScale(flare.pulse, 760);

    renderer.render(scene, cam);
    drawOverlay(t, focus);
    if (DOM) drawDom(t);
  }

  // ------------------------------------------------------------------ star-chart overlay: Dusk hairlines, Tabit marked in Brass
  var GZ = -900;
  function rgba(c, a) { return 'rgba(' + c + ',' + clamp(a, 0, 1).toFixed(3) + ')'; }
  // Live RA/Dec grid on Tabit's own plane. It stays through the zoom and refines like a map:
  // 5 degree lines first, then 1 degree, then 20 arcminutes, with the edge labels homing in on Tabit.
  var GU = .92 * 18.26 * Zo / FPX, DEC0 = 6.9614, RA0 = 72.4583, COSD = Math.cos(DEC0 * Math.PI / 180);
  var GLEV = [{ d: 5, a: .085 }, { d: 1, a: .07 }, { d: 1 / 3, a: .055 }];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDec(d) {
    var sg = d < 0 ? '−' : '+', m = Math.round(Math.abs(d) * 60), dg = Math.floor(m / 60), mm = m % 60;
    return sg + pad2(dg) + '°' + (mm ? pad2(mm) + '′' : '');
  }
  function fmtRA(r) {
    var sec = Math.round(r / 15 * 3600), h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), sc = sec % 60;
    return pad2(h) + 'ʰ' + pad2(m) + 'ᵐ' + (sc ? pad2(sc) + 'ˢ' : '');
  }
  function drawGrid(t) {
    var gA = Math.max(eIOS(seg(t, .5, 1.5)) * (FX.keepGrid ? 1 : 1 - eIOS(seg(t, TL.slide0, TL.slide1))), FX.grid);   // E2: keepGrid holds it through the splash   // B11: the grid and its coordinates fade out as TABIT is spelt (letters run 4.95 to 6.07s)
    if (gA <= 0) return;
    var ppu = FPX / cam.position.z, cx = cam.position.x, hw = (900 + Math.max(0, OX)) / ppu, hh = 420 / ppu;
    var decMin = DEC0 - hh / GU, decMax = DEC0 + hh / GU, raMin = RA0 - (cx + hw) / (GU * COSD), raMax = RA0 - (cx - hw) / (GU * COSD);
    var labelLev = -1;
    GLEV.forEach(function (L, li) { if (L.d * GU * ppu >= 70) labelLev = li; });
    ox.lineWidth = 1; ox.font = '500 9px Manrope, "Inter Tight", system-ui, sans-serif';
    var decLabels = [], raLabels = [];
    GLEV.forEach(function (L, li) {
      var sp = L.d * GU * ppu, la = gA * L.a * clamp((sp - 14) / 36, 0, 1) * (1 - clamp((sp - 1100) / 900, 0, 1));
      if (la <= .002) return;
      ox.strokeStyle = rgba(DUSK, la * FX.gridLine);
      var coarser = li > 0 ? GLEV[li - 1].d : 0, k, v, p, n = 0;
      ox.globalAlpha = FX.hLine;   // G2: horizontal (declination) lines can be switched off
      for (k = Math.ceil(decMin / L.d); k * L.d <= decMax && n < 80; k++, n++) {
        v = k * L.d; if (coarser && Math.abs(v / coarser - Math.round(v / coarser)) < 1e-6) continue;
        p = toScreen(new T3.Vector3(0, (v - DEC0) * GU, 0));
        ox.beginPath(); var gy = lerp(p[1], p[1] < 360 ? 88 : 632, FX.snap); ox.moveTo(-OX, Math.round(gy) + .5); ox.lineTo(W - OX, Math.round(gy) + .5); ox.stroke();
      }
      ox.globalAlpha = 1;
      for (k = Math.ceil(raMin / L.d), n = 0; k * L.d <= raMax && n < 80; k++, n++) {
        v = k * L.d; if (coarser && Math.abs(v / coarser - Math.round(v / coarser)) < 1e-6) continue;
        p = toScreen(new T3.Vector3(-(v - RA0) * GU * COSD, 0, 0));
        var keepCol = li === 0 && (FX.colKeep ? FX.colKeep.some(function (cx) { return Math.abs(cx - p[0]) < 2; }) : p[0] > FX.colMin && p[0] < FX.colMax); ox.globalAlpha = keepCol ? 1 : 1 - FX.colsOnly;   // E3: only the page's 13 column lines stay
        ox.beginPath(); var gx = lerp(p[0], clamp(80 + Math.round((p[0] - 80) / (1120 / 12)) * (1120 / 12), 80, 1200), FX.snap); ox.moveTo(Math.round(gx) + .5, 0); ox.lineTo(Math.round(gx) + .5, H); ox.stroke();
      }
      ox.globalAlpha = 1;
      if (li === labelLev) {
        for (k = Math.ceil(decMin / L.d); k * L.d <= decMax; k++) { v = k * L.d; p = toScreen(new T3.Vector3(0, (v - DEC0) * GU, 0)); if (p[1] > 24 && p[1] < H - 40) decLabels.push([fmtDec(v), p[1]]); }
        for (k = Math.ceil(raMin / L.d); k * L.d <= raMax; k++) { v = k * L.d; p = toScreen(new T3.Vector3(-(v - RA0) * GU * COSD, 0, 0)); if (p[0] > 130 - OX && p[0] < W - OX - 40) raLabels.push([fmtRA(v), p[0]]); }
      }
    });
    ox.fillStyle = rgba(DUSK, .42 * gA * (1 - FX.snap));
    ox.globalAlpha = FX.hLine; ox.textAlign = 'left'; decLabels.forEach(function (l) { ox.fillText(l[0], 26 - OX, l[1] - 5); }); ox.globalAlpha = 1;
    ox.globalAlpha = 1 - FX.colsOnly;
    ox.textAlign = 'center'; raLabels.forEach(function (l) { ox.fillText(l[0], l[1], H - 22); });
    ox.globalAlpha = 1;
  }

  function drawOverlay(t, focus) {
    ox.setTransform(dpr, 0, 0, dpr, 0, 0); ox.clearRect(0, 0, W, H); ox.setTransform(dpr, 0, 0, dpr, dpr * OX, 0);   // draw in the 1280 design's units, centred
    if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
    ox.font = '500 9px Manrope, "Inter Tight", system-ui, sans-serif';
    drawGrid(t);
    var S = {}; Object.keys(ori).forEach(function (k) { var q = toScreen(ori[k].v); S[k] = k === 'pi3' ? q : lensPt(q[0], q[1]); });
    var dA = eIOS(seg(t, .4, 1.4)), shieldOut = 1 - eIOS(seg(t, TL.shield0, TL.shield1)), knotIn = eIOS(seg(t, TL.draw0 - .2, TL.draw0 + .6));
    if (dA > 0) Object.keys(ori).forEach(function (k) {
      if (k === 'pi3' && t > TL.settle1) return;
      var o = ori[k], s = S[k], c = o.col, pop = 0;   // B10: no brightness pop on Orion's stars as the figure is drawn (this was the early flash)
      var tw2 = k === 'pi3' ? 1 : twinkle(o, t);
      var rr = (k === 'pi3' ? 2.8 : Math.max(1.1, Math.min(2.2, 3.1 - .5 * o.mag)) * (.85 + .15 * tw2)) * (1 + .9 * pop);
      ox.fillStyle = 'rgba(' + (c[0] * 255 | 0) + ',' + (c[1] * 255 | 0) + ',' + (c[2] * 255 | 0) + ',' + clamp(dA * (SHIELD[k] ? shieldOut : 1) * (k === 'pi3' ? 1 - seg(t, TL.settle0, TL.settle1) : 1) * (.4 + .2 * focus + .4 * pop) * tw2 * FX.ori, 0, 1).toFixed(3) + ')';
      ox.beginPath(); ox.arc(s[0], s[1], rr, 0, 6.2832); ox.fill();
    });
    var lA = seg(t, TL.lines0, TL.lines0 + .2) * (1 - .3 * eIOS(seg(t, 4.4, 5.2))) * FX.ori;   // AS7.5: the tracing stays
    if (lA > 0) {
      ox.lineWidth = 1;
      LINES.forEach(function (L, idx) {
        var pr = eIOC(seg(t, TL.lines0 + idx * .05, TL.lines0 + .65 + idx * .05)); if (pr <= 0) return;
        var a = S[L[0]], b = S[L[1]], dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy); if (len < 18) return;
        var sh = (SHIELD[L[0]] || SHIELD[L[1]]) ? shieldOut : 1; if (sh <= 0) return;
        var g0 = L[0] === 'pi3' ? lerp(7, KR + 6, knotIn) : 7, g1 = L[1] === 'pi3' ? lerp(7, KR + 6, knotIn) : 7;
        var ux = dx / len, uy = dy / len, ax = a[0] + ux * g0, ay = a[1] + uy * g0, bx = a[0] + ux * (g0 + (len - g0 - g1) * pr), by = a[1] + uy * (g0 + (len - g0 - g1) * pr);
        ox.strokeStyle = rgba(DUSK, .36 * FX.lineBoost * lA * sh); ox.beginPath(); ox.moveTo(ax, ay); ox.lineTo(bx, by); ox.stroke();
        if (pr < 1) { ox.fillStyle = rgba(IVORY, .9 * lA); ox.beginPath(); ox.arc(bx, by, 1.4, 0, 6.2832); ox.fill(); }
      });
    }
    var nA = eIOS(seg(t, 1.1, 1.6)) * FX.ori * (FX.oriName == null ? 1 : FX.oriName);   // A16: the Orion label goes with it
    if (nA > 0) {
      // name the constellation first, so the eye reads Orion -> Tabit
      var mA = S.meissa, bA = S.betel, cx = (mA[0] + bA[0]) / 2 - 26, cy = Math.min(mA[1], bA[1]) - 40;
      ox.font = '600 11px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '4px';
      ox.textAlign = 'center'; ox.fillStyle = rgba(DUSK, .8 * nA); ox.fillText('ORION', cx, cy);
      ox.font = '500 9px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
      ox.fillStyle = rgba(DUSK, .5 * nA); ox.fillText('CONSTELLATION', cx, cy + 15);
    }
    // Tabit (catalogue name pi3 Orionis): a brass reticle tightens on it, centre frame
    var rA = eIOS(seg(t, 1.5, 2.1)) * (1 - eIOS(seg(t, TL.grow0, TL.grow1 - .05)));
    if (rA > 0) {
      var s = S.pi3, k = eOQ(seg(t, 1.5, 2.3)), R0 = lerp(30, 12, k), kd = eIOS(seg(t, TL.draw0 - .2, TL.draw0 + .5)), R = lerp(R0, KR, kd), rot = lerp(.8, 0, k);
      ox.strokeStyle = rgba(BRASS, .95 * rA); ox.lineWidth = 1;
      ox.beginPath(); ox.arc(s[0], s[1], R, 0, 6.2832); ox.stroke();
      var tA = eIOS(seg(t, 1.7, 2.2)) * (1 - eIOS(seg(t, TL.word0 - .15, TL.word0 + .35)));
      if (tA > 0) {
        var lx2 = s[0] + R * .72 + 20, ly2 = s[1] - R * .72 - 12;
        ox.beginPath(); ox.strokeStyle = rgba(BRASS, .75 * tA); ox.moveTo(s[0] + R * .72, s[1] - R * .72); ox.lineTo(lx2 - 4, ly2 + 5); ox.lineTo(lx2 + 150, ly2 + 5); ox.stroke();
        ox.font = '600 13px Manrope, system-ui, sans-serif'; ox.textAlign = 'left'; if ('letterSpacing' in ox) ox.letterSpacing = '3px';
        ox.fillStyle = rgba(BRASS, tA); ox.fillText('TABIT', lx2, ly2 - 2);
        ox.font = '500 9px Manrope, system-ui, sans-serif'; if ('letterSpacing' in ox) ox.letterSpacing = '1.6px';
        ox.fillStyle = rgba(DUSK, .85 * tA); ox.fillText('A STAR IN ORION · π³ ORI', lx2, ly2 + 19);
      }
    }
    // the black hole itself: an empty core inside a faint ring of bent light
    if (LENS.k > .01) {
      var hr = LENS.E * 1.04, hg = ox.createRadialGradient(LENS.mx, LENS.my, hr * .7, LENS.mx, LENS.my, hr * 1.5);
      hg.addColorStop(0, rgba(IVORY, 0)); hg.addColorStop(.42, rgba(IVORY, .07 * LENS.k)); hg.addColorStop(1, rgba(IVORY, 0));
      ox.fillStyle = hg; ox.beginPath(); ox.arc(LENS.mx, LENS.my, hr * 1.5, 0, 6.2832); ox.fill();
      ox.strokeStyle = rgba(IVORY, .22 * LENS.k); ox.lineWidth = 1; ox.beginPath(); ox.arc(LENS.mx, LENS.my, hr, 0, 6.2832); ox.stroke();
    }
    // the knot's points light as the line reaches them
    var prk = eIOS(seg(t, TL.draw0, TL.draw1)), nodeOut = 1 - eIOS(seg(t, TL.settle0, TL.settle1));
    if (prk > 0 && nodeOut > 0) nodes.forEach(function (nd) {
      var u = (prk - nd.f) / .025, on = clamp(u, 0, 1); if (on <= 0) return;
      var pop = Math.exp(-u * u / 2), a = on * nodeOut, r = 5 + 6 * pop;
      var nx = nd.x - SHIFT * shiftK, gr = ox.createRadialGradient(nx, nd.y, 0, nx, nd.y, r); gr.addColorStop(0, rgba(IVORY, .9 * a)); gr.addColorStop(.25, rgba(IVORY, .35 * a)); gr.addColorStop(1, rgba(IVORY, 0));
      ox.fillStyle = gr; ox.beginPath(); ox.arc(nx, nd.y, r, 0, 6.2832); ox.fill();
    });
    if ('letterSpacing' in ox) ox.letterSpacing = '0px';
  }

  // ------------------------------------------------------------------ the logo: the flat white lockup. The mark forms centre frame, then makes room for the name.
  var LEN = {};
  function drawDom(t) {
    if (DOM.lock) DOM.lock.style.transform = 'translateX(' + (SHIFT * (1 - shiftK)).toFixed(2) + 'px)';
    // a fine line leaves Tabit both ways round the endless loop, then the mark resolves over it
    var pr = eIOS(seg(t, TL.draw0, TL.draw1)), lineA = 1 - eIOS(seg(t, TL.settle0, TL.settle1));
    ['A', 'B'].forEach(function (k) {
      var ln = DOM['line' + k], hd = DOM['head' + k]; if (!ln) return;
      if (LEN[k] == null) LEN[k] = ln.getTotalLength();
      ln.style.strokeDashoffset = (1 - pr).toFixed(4); ln.style.opacity = (pr > 0 ? lineA : 0).toFixed(3);
      if (hd) {
        var p = ln.getPointAtLength(pr * LEN[k]);
        hd.setAttribute('transform', 'translate(' + p.x.toFixed(2) + ' ' + p.y.toFixed(2) + ') scale(2)');
        hd.style.opacity = (seg(t, TL.draw0, TL.draw0 + .12) * (1 - seg(t, TL.draw1 - .12, TL.draw1 + .1))).toFixed(3);
      }
    });
    (DOM.masks || []).forEach(function (m) { m.setAttribute('stroke-width', 60); });
    // the mark comes into focus over its constellation, like a lens pulling focus
    var g = eIOS(seg(t, TL.grow0, TL.grow1));
    if (DOM.mark) { DOM.mark.style.opacity = g.toFixed(3); DOM.mark.style.filter = g < 1 ? 'blur(' + (4 * (1 - g)).toFixed(2) + 'px)' : 'none'; }
    (DOM.extras || []).forEach(function (el) {
      var d = parseFloat(el.getAttribute('data-tabit-in')) || 6, e = eOQ(seg(t, d, d + 1.0));
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (12 * (1 - e)).toFixed(2) + 'px)';
    });
    (DOM.letters || []).forEach(function (el, k) {
      var x = seg(t, TL.word0 + k * .08, TL.word0 + .8 + k * .08), e = 1 - Math.pow(1 - x, 4);
      el.style.opacity = x > 0 ? '1' : '0'; el.style.transform = 'translateY(' + (236 * (1 - e)).toFixed(2) + 'px)';   // user units: one letter height
    });
  }

  return {
    render: render,
    pointer: function (x, y) { pointer.x = clamp(x, -1, 1); pointer.y = clamp(y, -1, 1); },
    mouse: function (px, py, on) { if (on && LENS.mx < -900) { LENS.mx = px; LENS.my = py; } LENS.tx = px; LENS.ty = py; LENS.on = on ? 1 : 0; },
    dispose: function () { renderer.dispose(); },
    fx: FX,
    _vlines: function () {   // debug: the vertical (RA) grid lines on screen now, per level
      var ppu = FPX / cam.position.z, cx = cam.position.x, hw = 900 / ppu, raMin = RA0 - (cx + hw) / (GU * COSD), raMax = RA0 - (cx - hw) / (GU * COSD), out = [];
      GLEV.forEach(function (L, li) { var sp = L.d * GU * ppu; for (var k = Math.ceil(raMin / L.d); k * L.d <= raMax; k++) { var p = toScreen(new T3.Vector3(-(k * L.d - RA0) * GU * COSD, 0, 0)); out.push([li, +p[0].toFixed(2), +sp.toFixed(2), k * L.d]); } });
      return out;
    },
    _ori: function () { return Object.keys(ori).map(function (k) { return [k].concat(toScreen(ori[k].v)); }); },
    duration: 7.2
  };
}

// C-series: the hand-off from the B11 splash into the main page. S = virtual scroll in px:
// 0..HAND plays the transition (p = 0..1), anything beyond scrolls the page content.
var TABIT_HAND = 900;
function makeHandoff(hero, root, V) {
  function q(s) { return root.querySelector(s); }
  function qa(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
  function cl(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function sg(x, a, b) { return cl((x - a) / (b - a), 0, 1); }
  function lp(a, b, k) { return a + (b - a) * k; }
  function io(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }   // ease in-out cubic
  function oq(x) { return 1 - Math.pow(1 - x, 4); }                                     // ease out quart
  function E(p, a, b) { return io(sg(p, a, b)); }
  var lock = q('[data-tabit-lockup]'), mark = q('[data-tabit-mark]'), letters = qa('[data-tabit-letter]');
  var night = q('[data-tabit-night]'), page = q('[data-tabit-page]'), scroller = q('[data-tabit-scroll]'), nav = q('[data-tabit-nav]');
  var navBg = q('[data-tabit-navbg]'), navLogo = q('[data-tabit-navlogo]'), cue = q('[data-tabit-cue]'), cols = q('[data-tabit-cols]');
  var rise = qa('[data-tabit-rise]'), wm = q('[data-tabit-wm]'), idx = qa('[data-tabit-idx]'), horizon = q('[data-tabit-horizon]');
  var QMAX = scroller ? Math.max(0, parseFloat(scroller.getAttribute('data-h')) - 720) : 0;
  // the white lockup's box inside its own svg, in px (measured from the B11 end state)
  var VB = { x: -4, y: -4 }, K = parseFloat(lock.getAttribute('width')) / 1408;
  var BX0 = (-2.75 - VB.x) * K, BY0 = (-2.48 - VB.y) * K, BX1 = (1400 - VB.x) * K, BY1 = (388.88 - VB.y) * K;
  var MX = (247.9 - VB.x) * K, MY = (193.2 - VB.y) * K;
  var L0 = parseFloat(lock.style.left), T0 = parseFloat(lock.style.top);
  var LOGO_W = 140;   // brand book: never under 120px wide on screen
  var touched = false;
  var sceneCv = q('[data-tabit-scene]'), scene = (sceneCv && typeof makeScene === 'function') ? makeScene(sceneCv, V) : null;
  var dotsBox = q('[data-tabit-dots]'), dotEls = qa('[data-tabit-dot]');
  var conProg = q('[data-tabit-conprog]'), CONP = [[38, 10], [22, 66], [40, 122], [26, 178], [36, 232]], CONL = [], CONC = [0], CONT = 0;
  for (var ci = 0; ci < 4; ci++) { var cdl = Math.hypot(CONP[ci + 1][0] - CONP[ci][0], CONP[ci + 1][1] - CONP[ci][1]); CONL.push(cdl); CONT += cdl; CONC.push(CONT); }
  var homeBtn = q('[data-tabit-home]'), HV = { t0: -99 };
  if (homeBtn) homeBtn.style.left = '562px';   // AS7.8: the logo docks in the centre of the nav, so its home button sits there too   // D.C.2.4: the docked logo is alive
  // D.C.2.5: the docked logo as fine pixels with springs. Only the part under the mouse breaks up and is pushed aside; each piece
  // springs back, so a pass of the mouse leaves a ripple through the letters. The real logo shows whenever nothing is disturbed.
  var PTR = { x: -999, y: -999, px: -999, py: -999 }, RP = null;
  function rippleInit(tx, ty, s1) {
    var d = FL2.dpr, M = 40, wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var gx0 = Math.floor(L0 + tx - M), gy0 = Math.floor(T0 + ty - M), gw = Math.ceil(s1 * wL + 2 * M), gh = Math.ceil(s1 * hL + 2 * M);
    var cv = document.createElement('canvas'); cv.width = gw * d; cv.height = gh * d; var g = cv.getContext('2d'), k = d * s1 * K;
    g.setTransform(k, 0, 0, k, d * (L0 + tx - gx0) - k * VB.x, d * (T0 + ty - gy0) - k * VB.y); g.fillStyle = '#fff';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var px = g.getImageData(0, 0, cv.width, cv.height).data, P = [];
    for (var yy = 0; yy < cv.height; yy++) for (var xx = 0; xx < cv.width; xx++) { var a = px[(yy * cv.width + xx) * 4 + 3]; if (a > 6) P.push({ hx: xx, hy: yy, a: a, dx: 0, dy: 0, vx: 0, vy: 0, r: (xx * 7.13 + yy * 3.71) % 1 }); }
    RP = { P: P, A: px, cw: cv.width, ch: cv.height, gx0: gx0, gy0: gy0, gw: gw, gh: gh, d: d, img: FL2.c.createImageData(gw * d, gh * d), live: false };
  }
  // D.C.2.6: a soft 'star field' follows the mouse over the logo. Inside it the solid logo gives way to tiny twinkling Tabit
  // stars sitting exactly on the letters (nothing is pushed aside, no hole); when the mouse moves on they settle back into the logo.
  var SG = null;
  function starUpdate(tx, ty, s1, t) {
    if (!RP) rippleInit(tx, ty, s1);
    var d = RP.d, C = 3;
    if (!SG) { SG = { w: Math.ceil(RP.gw / C), h: Math.ceil(RP.gh / C) }; SG.v = new Float32Array(SG.w * SG.h);
      SG.K = []; var sd = 5; function rr() { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }
      var dens = 1 / (3 * d * d);   // F2.8: the splash logo gets exactly the same little knots as the docked logo   // F2.3: the big splash logo gets sparser stars, so the letters visibly break up
      RP.P.forEach(function (o) { if (o.a < 160 || rr() > dens) return; var an = rr() * 6.283;   // a dense set of stars laid over the letters
        SG.K.push({ x: RP.gx0 + o.hx / d, y: RP.gy0 + o.hy / d, dx: Math.cos(an), dy: Math.sin(an), ph: rr() * 6.283, r2: rr(), r3: rr(), sp: (rr() - .5) * 1.6 }); }); }
    var inside = PTR.x > RP.gx0 && PTR.x < RP.gx0 + RP.gw && PTR.y > RP.gy0 && PTR.y < RP.gy0 + RP.gh;
    var big = false, splash = s1 > .6, mx = PTR.x - RP.gx0, my = PTR.y - RP.gy0, R = 18, mxv = 0; if (splash) inside = inside && SPL.on === 1;   // F2.8: same patch, stars and drift as the docked logo; on the splash, nothing until the pointer is on the logo   // F2.6: a tight patch round the pointer, and nothing until it is on the logo
    for (var gy = 0; gy < SG.h; gy++) for (var gx = 0; gx < SG.w; gx++) {
      var i = gy * SG.w + gx, v = SG.v[i] * .93;
      if (inside) { var dd = Math.hypot(gx * C + C / 2 - mx, gy * C + C / 2 - my); if (dd < R) { var f = 1 - dd / R; v = Math.min(1, v + f * f * .5); } }
      SG.v[i] = v < .004 ? 0 : v; if (v > mxv) mxv = v;
    }
    if (mxv < .01) { lock.style.opacity = '1'; return; }
    lock.style.opacity = '0';
    function act(x, y) { if (splash) {   // F2.8: smooth between cells, so no blocky edge shows at the big size
        var fx = Math.max(0, Math.min(SG.w - 1.001, x / C - .5)), fy = Math.max(0, Math.min(SG.h - 1.001, y / C - .5)), ix = Math.floor(fx), iy = Math.floor(fy), ax = fx - ix, ay = fy - iy, i0 = iy * SG.w + ix, i1 = Math.min(SG.h - 1, iy + 1) * SG.w + ix, ix1 = Math.min(SG.w - 1, ix + 1) - ix;
        var w = (SG.v[i0] * (1 - ax) + SG.v[i0 + ix1] * ax) * (1 - ay) + (SG.v[i1] * (1 - ax) + SG.v[i1 + ix1] * ax) * ay; return w * w * (3 - 2 * w); }
       var gx = Math.min(SG.w - 1, Math.max(0, Math.floor(x / C))), gy = Math.min(SG.h - 1, Math.max(0, Math.floor(y / C))), v = SG.v[gy * SG.w + gx]; return v * v * (3 - 2 * v); }
    var fc = /(\d+)\D+(\d+)\D+(\d+)/.exec(mark.style.fill || '') || [0, 255, 255, 255], cr = +fc[1], cg = +fc[2], cb = +fc[3];
    var W2 = RP.gw * d, data = RP.img.data; data.fill(0);
    RP.P.forEach(function (o) {   // the solid logo, thinning to nothing where it has turned to stars
      var a = o.a * (1 - act(o.hx / d, o.hy / d)); if (a < 2) return;
      var q = (o.hy * W2 + o.hx) * 4; data[q] = cr; data[q + 1] = cg; data[q + 2] = cb; data[q + 3] = a;
    });
    var c = FL2.c; c.setTransform(1, 0, 0, 1, 0, 0); c.putImageData(RP.img, RP.gx0 * d, RP.gy0 * d); c.setTransform(d, 0, 0, d, 0, 0);
    c.globalCompositeOperation = 'lighter';
    SG.K.forEach(function (o) {   // the stars, on the letters, each drifting a hair and twinkling
      var hx = o.x, hy = o.y, a = act(hx - RP.gx0, hy - RP.gy0); if (a < .02) return;
      var tw = .65 + .35 * Math.sin(t * 5.2 + o.ph), dr = a * (.6 + 1.6 * o.r2) * (big ? 4 : 1);
      var x = hx + o.dx * dr + Math.sin(t * 1.3 + o.ph) * .35 * a, y = hy + o.dy * dr + Math.cos(t * 1.1 + o.ph) * .35 * a, sz = (2.4 + 1.6 * o.r3) * (big ? 1.9 : 1);
      c.globalAlpha = Math.min(1, a * tw * .7); var gs = sz * 2.8; c.drawImage(FL2.gl, x - gs / 2, y - gs / 2, gs, gs);
      c.globalAlpha = Math.min(1, a * (.55 + .6 * tw)); c.save(); c.translate(x, y); c.rotate(o.sp * .4 * a); c.drawImage(FL2.kn, -sz / 2, -sz / 2, sz, sz); c.restore();
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  var STB = { RP: null, SG: null }, STS = { RP: null, SG: null };   // F2.3: one star field for the docked logo, one for the big splash logo
  var SPL = { on: 0 };
  // F2.7: the splash logo is cut into tiny pieces. Only the pieces the pointer actually touches burst off as small Tabit knots,
  // then drift home and turn back into solid logo. No disc, no fading grid: untouched pieces stay exactly as they are.
  var BU = null, BT = 6;   // F2.9: slightly bigger pieces, so each knot reads clearly
  function burstInit() {
    var d = FL2.dpr, M = 6, wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var gx0 = Math.floor(L0 - M), gy0 = Math.floor(T0 - M), gw = Math.ceil(wL + 2 * M + 1), gh = Math.ceil(hL + 2 * M + 1);
    var cv = document.createElement('canvas'); cv.width = gw * d; cv.height = gh * d; var g = cv.getContext('2d'), k = d * K;
    var fc = /(\d+)\D+(\d+)\D+(\d+)/.exec(mark.style.fill || '') || [0, 255, 255, 255];
    g.setTransform(k, 0, 0, k, d * (L0 - gx0) - k * VB.x, d * (T0 - gy0) - k * VB.y); g.fillStyle = 'rgb(' + fc[1] + ',' + fc[2] + ',' + fc[3] + ')';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var A = g.getImageData(0, 0, cv.width, cv.height).data, P = [], sd = 17;
    function rr() { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }
    for (var ty = 0; ty < gh; ty += BT) for (var tx = 0; tx < gw; tx += BT) {
      var cov = 0, n = 0;
      for (var yy = ty * d; yy < Math.min(gh, ty + BT) * d; yy += 1) for (var xx = tx * d; xx < Math.min(gw, tx + BT) * d; xx += 1) { cov += A[(yy * cv.width + xx) * 4 + 3]; n++; }
      cov /= n * 255; if (cov < .06) continue;
      P.push({ hx: gx0 + tx, hy: gy0 + ty, sx: tx * d, sy: ty * d, jx: (rr() - .5) * BT * .7, jy: (rr() - .5) * BT * .7, th: .55 + .9 * rr(), k: .035 + .022 * rr(), cov: cov, dx: 0, dy: 0, vx: 0, vy: 0, tch: 0, ph: rr() * 6.283, rot: (rr() - .5) * 2, r: rr(), sz: 7.5 + 3 * rr() });   // F2.12: F2.9 plus its own reach (th), an off-grid spot (jx, jy) and its own pace home (k)
    }
    var hs = document.createElement('canvas'); hs.width = hs.height = 32; var hg = hs.getContext('2d'), hr = hg.createRadialGradient(16, 16, 0, 16, 16, 16);   // a soft-edged hole, so no squares ever show
    hr.addColorStop(0, 'rgba(0,0,0,1)'); hr.addColorStop(.5, 'rgba(0,0,0,1)'); hr.addColorStop(1, 'rgba(0,0,0,0)'); hg.fillStyle = hr; hg.fillRect(0, 0, 32, 32);
    BU = { P: P, hs: hs, cv: cv, A: A, gx0: gx0, gy0: gy0, gw: gw, gh: gh, d: d, px: -999, py: -999, live: false };
  }
  function inkB(x, y) {   // is the pointer on the logo's ink (within 2px)?
    if (!BU) return false; var d = BU.d, mx = Math.round((x - BU.gx0) * d), my = Math.round((y - BU.gy0) * d), tl = Math.round(2 * d), W = BU.gw * d, H = BU.gh * d;
    for (var oy = -tl; oy <= tl; oy += tl) for (var ox = -tl; ox <= tl; ox += tl) { var xx = mx + ox, yy = my + oy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue; if (BU.A[(yy * W + xx) * 4 + 3] > 100) return true; }
    return false;
  }
  function burstUpdate(t, on) {
    var c = FL2.c, RH = 10, moved = BU.px > -900 ? Math.hypot(PTR.x - BU.px, PTR.y - BU.py) : 0, mvx = BU.px > -900 ? PTR.x - BU.px : 0, mvy = BU.px > -900 ? PTR.y - BU.py : 0;
    BU.px = PTR.x; BU.py = PTR.y; var energy = 0;
    BU.P.forEach(function (o) {
      var cx = o.hx + BT / 2 - PTR.x, cy = o.hy + BT / 2 - PTR.y, dd = Math.hypot(cx, cy) || 1, near = on && dd < RH * o.th;   // F2.12: a ragged, crumbly edge rather than a circle
      if (near && (!o.tch || moved > .6)) {   // touched: this piece bursts away from the pointer tip
        var an = Math.atan2(cy, cx) + (o.r - .5) * 1.8, sp = (1.0 + 1.4 * o.r) * (1 - .4 * dd / RH);   // F2.9: about a third of F2.7's energy
        o.vx += Math.cos(an) * sp + mvx * .08; o.vy += Math.sin(an) * sp + mvy * .08;
      } else if (near && Math.random() < .035) {   // resting on a letter: the pieces under the tip keep fizzing gently
        var an2 = Math.random() * 6.283; o.vx += Math.cos(an2) * .7; o.vy += Math.sin(an2) * .7;
      }
      o.tch = near ? 1 : 0;
      o.vx = (o.vx - o.dx * o.k) * .88; o.vy = (o.vy - o.dy * o.k) * .88; o.dx += o.vx; o.dy += o.vy;
      var e = Math.abs(o.dx) + Math.abs(o.dy) + Math.abs(o.vx) + Math.abs(o.vy); if (e < .04) { o.dx = o.dy = o.vx = o.vy = 0; } energy += e;
    });
    BU.live = energy > .5;
    if (!BU.live) { lock.style.opacity = ''; return; }
    lock.style.opacity = '0';
    c.drawImage(BU.cv, BU.gx0, BU.gy0, BU.gw, BU.gh);   // the logo, exactly as it is...
    c.globalCompositeOperation = 'destination-out';      // ...minus the pieces that have flown
    var HS = BT * 2.3; BU.P.forEach(function (o) { var D = Math.hypot(o.dx, o.dy); if (D > .2) { c.globalAlpha = sg(D, .2, 2.5); c.drawImage(BU.hs, o.hx + BT / 2 - HS / 2, o.hy + BT / 2 - HS / 2, HS, HS); } });
    c.globalCompositeOperation = 'source-over';
    c.globalCompositeOperation = 'lighter';
    BU.P.forEach(function (o) {
      var D = Math.hypot(o.dx, o.dy); if (D <= .2) return; var m = sg(D, .2, 2.5), tw = .8 + .2 * Math.sin(t * 5.5 + o.ph);
      var x = o.hx + BT / 2 + o.jx + o.dx, y = o.hy + BT / 2 + o.jy + o.dy, sz = o.sz, a = m * Math.min(1, .45 + o.cov) * tw;
      c.globalAlpha = a * .22; var gs = sz * 1.7;   // F2.9: less glow, so the knots stay sharp c.drawImage(FL2.gl, x - gs / 2, y - gs / 2, gs, gs);
      c.globalAlpha = a; c.save(); c.translate(x, y); c.rotate(o.rot * Math.min(1, D / 10) + Math.sin(t * 2.5 + o.ph) * .3 * m); c.drawImage(FL2.kn, -sz / 2, -sz / 2, sz, sz); c.restore();
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }

  function inkAt(R, x, y) {   // F2.6: is the pointer on the logo's ink (within 3px)?
    if (!R || !R.A) return false; var d = R.d, mx = Math.round((x - R.gx0) * d), my = Math.round((y - R.gy0) * d), tl = Math.round(3 * d);
    for (var oy = -tl; oy <= tl; oy += tl) for (var ox = -tl; ox <= tl; ox += tl) { var xx = mx + ox, yy = my + oy; if (xx < 0 || yy < 0 || xx >= R.cw || yy >= R.ch) continue; if (R.A[(yy * R.cw + xx) * 4 + 3] > 100) return true; }
    return false;
  }
  function starAt(st, tx, ty, s1, t) { var r0 = RP, g0 = SG; RP = st.RP; SG = st.SG; starUpdate(tx, ty, s1, t); st.RP = RP; st.SG = SG; RP = r0; SG = g0; }
  function rippleUpdate(tx, ty, s1, t) {
    if (!RP) rippleInit(tx, ty, s1);
    var d = RP.d, inside = PTR.x > RP.gx0 && PTR.x < RP.gx0 + RP.gw && PTR.y > RP.gy0 && PTR.y < RP.gy0 + RP.gh;
    var mx = (PTR.x - RP.gx0) * d, my = (PTR.y - RP.gy0) * d, mvx = PTR.px > -900 ? (PTR.x - PTR.px) * d : 0, mvy = PTR.py > -900 ? (PTR.y - PTR.py) * d : 0; PTR.px = PTR.x; PTR.py = PTR.y;
    if (!inside && !RP.live) { lock.style.opacity = '1'; return; }
    var R = 13 * d, energy = 0;
    RP.P.forEach(function (o) {
      if (inside) { var ex = o.hx + o.dx - mx, ey = o.hy + o.dy - my, dist = Math.hypot(ex, ey);
        if (dist < R) { var f = (1 - dist / R); f *= f; o.vx += (ex / (dist || 1)) * f * 1.3 * d + mvx * f * .16; o.vy += (ey / (dist || 1)) * f * 1.3 * d + mvy * f * .16; } }
      o.vx = (o.vx - o.dx * .11) * .82; o.vy = (o.vy - o.dy * .11) * .82; o.dx += o.vx; o.dy += o.vy;
      energy += Math.abs(o.dx) + Math.abs(o.dy);
    });
    RP.live = inside || energy > RP.P.length * .004;
    if (!RP.live) { RP.P.forEach(function (o) { o.dx = o.dy = o.vx = o.vy = 0; }); lock.style.opacity = '1'; return; }
    lock.style.opacity = '0';
    var fc = /(\d+)\D+(\d+)\D+(\d+)/.exec(mark.style.fill || '') || [0, 255, 255, 255], cr = +fc[1], cg = +fc[2], cb = +fc[3];
    var W2 = RP.gw * d, H2 = RP.gh * d, data = RP.img.data; data.fill(0);
    RP.P.forEach(function (o) {
      var x = Math.round(o.hx + o.dx), y = Math.round(o.hy + o.dy); if (x < 0 || y < 0 || x >= W2 || y >= H2) return;
      var q = (y * W2 + x) * 4, disp = Math.abs(o.dx) + Math.abs(o.dy), a = disp > 1.5 * d ? Math.min(255, o.a * 1.15) : o.a;
      if (a > data[q + 3]) { data[q] = cr; data[q + 1] = cg; data[q + 2] = cb; data[q + 3] = a; }
    });
    var c = FL2.c; c.setTransform(1, 0, 0, 1, 0, 0); c.putImageData(RP.img, RP.gx0 * d, RP.gy0 * d); c.setTransform(d, 0, 0, d, 0, 0);
    c.globalCompositeOperation = 'lighter';   // the most disturbed pieces glint as tiny Tabit stars
    RP.P.forEach(function (o) {
      if (o.r > .035) return; var disp = Math.hypot(o.dx, o.dy) / d; if (disp < 1.6) return;
      var x = RP.gx0 + (o.hx + o.dx) / d, y = RP.gy0 + (o.hy + o.dy) / d, ga = Math.min(1, (disp - 1.6) / 4), sz = 3.4;
      c.globalAlpha = ga * .45; c.drawImage(FL2.gl, x - sz * 1.3, y - sz * 1.3, sz * 2.6, sz * 2.6);
      c.globalAlpha = ga; c.drawImage(FL2.kn, x - sz / 2, y - sz / 2, sz, sz);
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  var vig = q('[data-tabit-vig]'), secs = qa('[data-tabit-sec]'), logoParts = [mark].concat(letters);
  function mixHex(a, b, k) { var A = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], B = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)]; return 'rgb(' + Math.round(lp(A[0], B[0], k)) + ',' + Math.round(lp(A[1], B[1], k)) + ',' + Math.round(lp(A[2], B[2], k)) + ')'; }
  var navItems = qa('[data-tabit-navitem]'), lineIn = qa('[data-tabit-line-in]'), cards = qa('[data-tabit-card]'), wwd = q('[data-tabit-wwd]');
  function io5(x) { return x < .5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2; }   // ease in-out quint
  if (V === 'e2') { hero.fx.keepGrid = 1; hero.fx.lineBoost = 1.65; }
  if (V === 'e4') { hero.fx.keepGrid = 1; hero.fx.lineBoost = 1.65; hero.fx.creep = 0; hero.fx.colKeep = [124.27, 468.65, 813.04, 1157.42]; }   // E4: four of the chart's lines, three wide columns
  if (V === 'e3') { hero.fx.keepGrid = 1; hero.fx.lineBoost = 1.65; hero.fx.creep = 0; hero.fx.colMin = 123; hero.fx.colMax = 1159; }   // E3: a still chart whose 13 lines (124.3 to 1157.4px) are the page columns   // E2: the grid stays through the splash; Orion's lines carry more light

  var DK = { tx: 0, ty: 0, s: 1 };
  var DOCK_Y = (V === 'dd2' || V === 'dd3' || V === 'dd4') ? 668 : 44;   // DD2-DD4: the logo docks at the bottom of the screen, not in the nav
  var AI_ON = typeof TABIT_AI !== 'undefined' && !!TABIT_AI;   // D.C.2.3: DD1.3's AI slide on page 2
  // DD series (DD1.1 to DD5.1): the A and I slide out of TABIT and become page 2's title. They are tied to the scroll,
  // never on a timer: scroll back and they slide back. Both letters move as one pair on the same curve, with no fall,
  // bounce, wobble or flip. Once they reach the title line they are locked to page 2 and travel with it.
  //   ddm  DD1.1 Meet halfway:   nav logo; the pair slides down, meets the title line rising, and is carried up into place.  Gaps, refilled once landed.
  //   ddr  DD2.1 Round trip:     logo at the bottom; the title line rises to the logo and picks the pair up; moving on to page 3 they let go and slide home.  Gaps until page 3.
  //   ddp  DD3.1 Waiting:        nav logo; the pair slides straight to the title spot and waits there while page 2 rises to meet it.  Logo always whole.
  //   ddb  DD4.1 Along the line: logo at the bottom; the pair steps up out of the word, slides left to the column, then the title line lifts it into place.  Gaps, refilled once landed.
  //   dds  DD5.1 Thread:         nav logo docked left, over page 2's column; the pair drops on a fine thread from its empty slot, which lets go once landed.  Gaps, refilled once landed.
  var aiOv = null, aiLet = [], aiClip = null, aiThr = [];
  var AIL = [{ i: 1, cx: 826.3, cy: 193.3, tx: 672.2 }, { i: 3, cx: 1181.35, cy: 193.3, tx: 769.8 }];   // AS7.5: the AI title in the right-hand column
  AIL.forEach(function (L) { L.tx0 = L.tx; });
  var AI_CAP = 132, AI_TOP = 218;   // the title's cap height and top on page 2, px
  if (AI_ON && lock && lock.parentNode) {
    var NS = 'http://www.w3.org/2000/svg';
    aiOv = document.createElementNS(NS, 'svg');
    aiOv.setAttribute('width', '1280'); aiOv.setAttribute('height', '720'); aiOv.setAttribute('viewBox', '0 0 1280 720'); aiOv.setAttribute('aria-hidden', 'true');
    aiOv.style.cssText = 'position: absolute; left: 0; top: 0; overflow: visible; pointer-events: none; display: none';
    var defs = document.createElementNS(NS, 'defs'), cp = document.createElementNS(NS, 'clipPath'); cp.setAttribute('id', 'tabitAiClip');
    aiClip = document.createElementNS(NS, 'rect'); aiClip.setAttribute('x', '-330'); aiClip.setAttribute('y', '0'); aiClip.setAttribute('width', '1940'); aiClip.setAttribute('height', '720');
    cp.appendChild(aiClip); defs.appendChild(cp); aiOv.appendChild(defs);
    AIL.forEach(function () {
      var ln = document.createElementNS(NS, 'line'); ln.setAttribute('stroke', 'rgba(184,192,212,.55)'); ln.setAttribute('stroke-width', '1'); ln.style.opacity = '0';
      aiOv.appendChild(ln); aiThr.push(ln);
    });
    var wrap = document.createElementNS(NS, 'g'); wrap.setAttribute('clip-path', 'url(#tabitAiClip)'); aiOv.appendChild(wrap);
    AIL.forEach(function (L) {
      var g = document.createElementNS(NS, 'g'), pth = document.createElementNS(NS, 'path');
      pth.setAttribute('d', letters[L.i].getAttribute('d')); pth.setAttribute('fill-rule', 'evenodd'); pth.setAttribute('fill', '#FFFFFF');
      g.appendChild(pth); wrap.appendChild(g); aiLet.push({ g: g, p: pth });
    });
    lock.parentNode.appendChild(aiOv);
  }
  function ss(x) { return x * x * (3 - 2 * x); }
  function smin(a, b, k) { var m = Math.min(a, b); return m - k * Math.log(Math.exp((m - a) / k) + Math.exp((m - b) / k)); }   // a soft min, so a pick-up has no jolt
  function aiUpdate(S, yc, ink) {
    if (!aiOv) return;
    AIL.forEach(function (L) { L.tx = TABIT_C0 + TABIT_DX + (L.tx0 - TABIT_C0) * TABIT_TS; }); AI_CAP = 132 * TABIT_TS;   // the title follows the copy column
    if (S < TABIT_HAND) { aiOv.style.display = 'none'; AIL.forEach(function (L) { letters[L.i].style.fillOpacity = ''; }); return; }
    aiOv.style.display = '';
    var scT = AI_CAP / 224, s0 = DK.s * K, HR = AI_TOP + AI_CAP / 2, Hy = HR + 720 - yc;   // Hy: where page 2's title line is on screen now
    aiClip.setAttribute('y', yc > 720 && V !== 'ddr' && V !== 'ddf' && !AI_ON ? '88' : '0');   // past page 2 the title slides under the nav with the rest of the text
    AIL.forEach(function (L, j) {
      var X0 = L0 + DK.tx + DK.s * (L.cx - VB.x) * K, Y0 = T0 + DK.ty + DK.s * (L.cy - VB.y) * K;   // the letter's own place in the docked logo
      var x = X0, y = Y0, sc = s0, show = 0, fill = 1, k = 0, thr = 0;
      if (V === 'ddm' || V === 'ddf' || AI_ON) {
        var YM = 400, ycm = HR + 720 - YM;
        y = smin(lp(Y0, YM, ss(sg(yc, 0, ycm))), Hy, 14);
        k = ss(sg(yc, 0, 720)); x = lp(X0, L.tx, k); sc = lp(s0, scT, k);
        show = yc > .5 ? 1 : 0; fill = show ? sg(yc, 640, 720) : 1;
        if (V === 'ddf' || AI_ON) {   // the letters stay out while page 2 is up, then fold back into the logo as the page lifts away
          var kf2 = ss(sg(yc, 720, 1010));   // they leave the page as it starts to lift and are home before its text reaches the nav
          if (kf2 > 0) { x = lp(L.tx, X0, kf2); y = lp(HR, Y0, kf2); sc = lp(scT, s0, kf2); k = 1 - kf2; }
          show = (yc > .5 && kf2 < 1) ? 1 : 0; fill = show ? 0 : 1;
        }
      } else if (V === 'ddr') {
        var ycc = HR + 720 - Y0;
        y = smin(Y0, Hy, 14);
        k = ss(sg(yc, ycc - 40, 720)); x = lp(X0, L.tx, k); sc = lp(s0, scT, k);
        var kr = ss(sg(yc, 780, 1300));   // moving on to page 3: they let go of the page and slide back into the word
        x = lp(x, X0, kr); y = lp(y, Y0, kr); sc = lp(sc, s0, kr); k *= 1 - kr;
        show = (Hy < Y0 + 40 && kr < 1) ? 1 : 0; fill = show ? 0 : 1;
      } else if (V === 'ddp') {
        k = ss(sg(yc, 0, 380)); x = lp(X0, L.tx, k); y = lp(Y0, HR, k); sc = lp(s0, scT, k);
        if (yc > 720) y = Hy;   // page 2 has arrived under them: from here they travel with it
        show = yc > .5 ? 1 : 0; fill = 1;
      } else if (V === 'ddb') {
        var cap = 224 * s0, YL = Y0 - 1.3 * cap, ycb = HR + 720 - YL;
        var yFree = lp(Y0, YL, ss(sg(yc, 0, 90)));
        x = lp(X0, L.tx, ss(sg(yc, 60, ycb - 20)));
        y = smin(yFree, Hy, 12);
        k = ss(sg(yc, ycb - 30, 720)); sc = lp(s0, scT, k);
        show = yc > .5 ? 1 : 0; fill = show ? sg(yc, 640, 720) : 1;
      } else if (V === 'dds') {
        var YD = 430, ycd = HR + 720 - YD;
        y = smin(lp(Y0, YD, ss(sg(yc, 0, ycd))), Hy, 14);
        k = ss(sg(yc, 0, 720)); x = lp(X0, L.tx, k); sc = lp(s0, scT, k);
        show = yc > .5 ? 1 : 0; fill = show ? sg(yc, 640, 720) : 1;
        thr = show * (1 - sg(yc, 600, 720));
      }
      aiLet[j].g.setAttribute('transform', 'translate(' + x.toFixed(2) + ',' + y.toFixed(2) + ') scale(' + sc.toFixed(4) + ') translate(' + (-L.cx) + ',' + (-L.cy) + ')');
      aiLet[j].g.style.opacity = show ? '1' : '0';
      aiLet[j].p.setAttribute('fill', mixHex(ink.charAt(0) === '#' ? ink : '#FFFFFF', '#F6F2EA', k));
      letters[L.i].style.fillOpacity = (.3 + .7 * fill).toFixed(3);   // AS7.7: the A and I stay in the logo, dimmed, while they are away
      var t2 = aiThr[j]; t2.style.opacity = thr.toFixed(3);
      if (thr > 0) { t2.setAttribute('x1', X0.toFixed(1)); t2.setAttribute('y1', (Y0 + 112 * s0).toFixed(1)); t2.setAttribute('x2', x.toFixed(1)); t2.setAttribute('y2', (y - 112 * sc).toFixed(1)); }
    });
  }
  function dock(e, mode, left, cxT, wT) {
    var w = BX1 - BX0, h = BY1 - BY0, s1 = (wT || LOGO_W) / w, s = lp(1, s1, e);
    var tx1 = mode === 'centre' ? (cxT || 640) - L0 - s1 * (BX0 + BX1) / 2 : left - L0 - s1 * BX0;
    var ty1 = DOCK_Y - h * s1 / 2 - T0 - s1 * BY0;
    DK.tx = tx1 * e; DK.ty = ty1 * e; DK.s = s;
    lock.style.transformOrigin = '0 0';
    lock.style.transform = 'translate(' + (tx1 * e).toFixed(2) + 'px,' + (ty1 * e).toFixed(2) + 'px) scale(' + s.toFixed(4) + ')';
  }
  // D.C.2.2.1: the logo breaks into hundreds of tiny Tabit knots that streak like stars into the top-left corner and
  // reassemble there into the docked logo (each knot returns to its own place in the lockup; the real logo is never altered)
  var FLY = null;
  function flyInit() {
    var wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var sc = document.createElement('canvas'); sc.width = Math.ceil(wL); sc.height = Math.ceil(hL); var g = sc.getContext('2d');
    g.setTransform(K, 0, 0, K, -VB.x * K, -VB.y * K); g.fillStyle = '#fff';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var px = g.getImageData(0, 0, sc.width, sc.height).data, pts = [];
    for (var yy = 0; yy < sc.height; yy += 2) for (var xx = 0; xx < sc.width; xx += 2) if (px[(yy * sc.width + xx) * 4 + 3] > 128) pts.push([xx, yy]);
    var seed = 7; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var N = 380, P = [];
    for (var i = 0; i < N; i++) { var pt = pts[Math.floor(rnd() * pts.length)], a = rnd() * 6.283;
      P.push({ lx: pt[0], ly: pt[1], r: rnd(), r2: rnd(), r3: rnd(), dx: Math.cos(a), dy: Math.sin(a), ph: rnd() * 6.283 }); }
    // the tiny knot and a soft star glow, drawn once
    var kn = document.createElement('canvas'); kn.width = kn.height = 48; var kg = kn.getContext('2d'), ks = 44 / 501.3;
    kg.setTransform(ks, 0, 0, ks, 2 + 2.75 * ks, 24 - 193.2 * ks); kg.fillStyle = '#F6F2EA'; kg.fill(new Path2D(mark.getAttribute('d')), 'evenodd');
    var gl = document.createElement('canvas'); gl.width = gl.height = 48; var gg = gl.getContext('2d'), rg = gg.createRadialGradient(24, 24, 0, 24, 24, 24);
    rg.addColorStop(0, 'rgba(246,242,234,.9)'); rg.addColorStop(.25, 'rgba(246,242,234,.25)'); rg.addColorStop(1, 'rgba(246,242,234,0)'); gg.fillStyle = rg; gg.fillRect(0, 0, 48, 48);
    var cv = document.createElement('canvas'); cv.width = 1280; cv.height = 720; cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;left:0;top:0;width:1280px;height:720px;pointer-events:none;z-index:7';
    lock.parentNode.appendChild(cv);
    FLY = { P: P, kn: kn, gl: gl, cv: cv, c: cv.getContext('2d') };
  }
  function flyUpdate(p, t) {
    if (!FLY) flyInit();
    var c = FLY.c; c.clearRect(0, 0, 1280, 720);
    dock(1, 'centre'); var tx = DK.tx, ty = DK.ty, s1 = DK.s;   // where the docked logo sits
    var landed = sg(p, .7, .86);
    if (p < .5) dock(0, 'centre');
    lock.style.opacity = (p < .5 ? 1 - sg(p, .05, .2) : landed).toFixed(3);
    if (p <= .02 || p >= .92) return;
    c.globalCompositeOperation = 'lighter';
    FLY.P.forEach(function (o) {
      var sx = L0 + o.lx, sy = T0 + o.ly, ex = L0 + tx + s1 * o.lx, ey = T0 + ty + s1 * o.ly;
      var d = sg(p, .03 + o.r * .1, .14 + o.r * .1);                                   // the logo breaks into knots
      var f = io(sg(p, .18 + o.r * .2, .56 + o.r * .14));                             // the flight, staggered
      var drift = 22 * (.5 + o.r2) * Math.sin(Math.PI * Math.min(1, d * .5 + f * .5)) * (1 - f);
      var ax = sx + o.dx * drift, ay = sy + o.dy * drift;
      var cx = lp(ax, ex, .35) - 60 - 160 * o.r2, cy = Math.min(ay, ey) - 40 - 140 * o.r3;   // an arc up and over to the corner
      function at(k) { var u1 = 1 - k; return [u1 * u1 * ax + 2 * u1 * k * cx + k * k * ex, u1 * u1 * ay + 2 * u1 * k * cy + k * k * ey]; }
      var q0 = at(f), sz = lp(lp(9, 13, o.r3), 3.2, f), a = d * (1 - landed) * (.7 + .3 * Math.sin(t * 3 + o.ph));
      if (a <= .01) return;
      if (f > .02 && f < .98) {                                                        // a faint streak behind it
        var q1 = at(Math.max(0, f - .09)); c.globalAlpha = a * .35; c.strokeStyle = 'rgba(246,242,234,1)'; c.lineWidth = Math.max(.6, sz * .14);
        c.beginPath(); c.moveTo(q1[0], q1[1]); c.lineTo(q0[0], q0[1]); c.stroke(); }
      c.globalAlpha = a * .45; c.drawImage(FLY.gl, q0[0] - sz * 1.3, q0[1] - sz * 1.3, sz * 2.6, sz * 2.6);
      c.globalAlpha = a; c.drawImage(FLY.kn, q0[0] - sz / 2, q0[1] - sz / 2, sz, sz);
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  // D.C.2.2.2: the polished flight. The word unravels from the knot to the final T into ~700 tiny knots set evenly over its
  // shape; each launches up and away on a curved path with a tapering tail, settles into the corner with a glint, and the
  // real logo is revealed left to right in step with the landings. Crisp on high-density screens; reduced motion gets the glide.
  var FL2 = null, RM = false;
  try { RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function fly2Init() {
    var wL = parseFloat(lock.getAttribute('width')), hL = parseFloat(lock.getAttribute('height'));
    var sc = document.createElement('canvas'); sc.width = Math.ceil(wL); sc.height = Math.ceil(hL); var g = sc.getContext('2d');
    g.setTransform(K, 0, 0, K, -VB.x * K, -VB.y * K); g.fillStyle = '#fff';
    g.fill(new Path2D(mark.getAttribute('d')), 'evenodd'); letters.forEach(function (el) { g.fill(new Path2D(el.getAttribute('d')), 'evenodd'); });
    var px = g.getImageData(0, 0, sc.width, sc.height).data;
    var seed = 11; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    var P = [], step = 7;
    for (var gy = 0; gy < sc.height; gy += step) for (var gx = 0; gx < sc.width; gx += step) {
      var xx = Math.min(sc.width - 1, Math.round(gx + rnd() * step)), yy = Math.min(sc.height - 1, Math.round(gy + rnd() * step));
      if (px[(yy * sc.width + xx) * 4 + 3] < 128) continue;
      var a = rnd() * 6.283, xn = xx / sc.width;
      P.push({ lx: xx, ly: yy, xn: xn, r: rnd(), r2: rnd(), r3: rnd(), dx: Math.cos(a), dy: Math.sin(a), ph: rnd() * 6.283, s0: 8 + rnd() * 3.5 });
    }
    P.forEach(function (o) { o.b = .04 + (o.xn * .55 + o.r * .12) * .22; o.dur = .3 + o.r2 * .1; o.f0 = o.b + .045; o.arr = o.f0 + o.dur; });
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var kn = document.createElement('canvas'); kn.width = kn.height = 64; var kg = kn.getContext('2d'), ks = 60 / 501.3;
    kg.setTransform(ks, 0, 0, ks, 2 + 2.75 * ks, 32 - 193.2 * ks); kg.fillStyle = '#F6F2EA'; kg.fill(new Path2D(mark.getAttribute('d')), 'evenodd');
    var gl = document.createElement('canvas'); gl.width = gl.height = 64; var gg = gl.getContext('2d'), rg = gg.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, 'rgba(250,248,242,.95)'); rg.addColorStop(.18, 'rgba(246,242,234,.35)'); rg.addColorStop(.5, 'rgba(220,226,246,.08)'); rg.addColorStop(1, 'rgba(220,226,246,0)'); gg.fillStyle = rg; gg.fillRect(0, 0, 64, 64);
    var cv = document.createElement('canvas'); cv.width = 1280 * dpr; cv.height = 720 * dpr; cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;left:0;top:0;width:1280px;height:720px;pointer-events:none;z-index:7';
    lock.parentNode.appendChild(cv);
    FL2 = { P: P, kn: kn, gl: gl, cv: cv, c: cv.getContext('2d'), dpr: dpr };
  }
  function lockMask(dir, x) {   // dir 1: show what is right of x (the word still to unravel); -1: show what is left of x (the logo written so far)
    var a = (x * 100).toFixed(2), b = ((x + .07) * 100).toFixed(2), m = dir > 0 ? 'linear-gradient(90deg, transparent ' + a + '%, #000 ' + b + '%)' : 'linear-gradient(90deg, #000 ' + a + '%, transparent ' + b + '%)';
    lock.style.webkitMaskImage = m; lock.style.maskImage = m;
  }
  function fly2Update(p, t) {
    if (RM) { lock.style.webkitMaskImage = lock.style.maskImage = ''; dock(io5(sg(p, .04, .78)), 'centre'); return; }
    if (!FL2) fly2Init();
    var c = FL2.c, d = FL2.dpr; c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, 1280, 720);
    dock(1, 'centre'); var tx = DK.tx, ty = DK.ty, s1 = DK.s;
    if (p < .45) { dock(0, 'centre'); lockMask(1, ((p - .04) / .22 - .06) / .55 - .035); }
    else lockMask(-1, (p - .5) / .135 - .035);
    lock.style.opacity = '1';
    if (p <= .03 || p >= .8) return;
    c.globalCompositeOperation = 'lighter';
    FL2.P.forEach(function (o) {
      if (p < o.b) return;
      var sx = L0 + o.lx, sy = T0 + o.ly, ex = L0 + tx + s1 * o.lx, ey = T0 + ty + s1 * o.ly;
      var dr = sg(p, o.b, o.f0), drift = (5 + 9 * o.r3) * Math.sin(Math.PI * .5 * dr);
      var ax = sx + o.dx * drift, ay = sy + o.dy * drift;
      var c1x = ax - 70 - 150 * o.r2, c1y = ay - 150 - 170 * o.r3, c2x = ex + 110 + 170 * o.r, c2y = ey + 30 + 70 * o.r3;
      function at(k) { var u1 = 1 - k; return [u1 * u1 * u1 * ax + 3 * u1 * u1 * k * c1x + 3 * u1 * k * k * c2x + k * k * k * ex, u1 * u1 * u1 * ay + 3 * u1 * u1 * k * c1y + 3 * u1 * k * k * c2y + k * k * k * ey]; }
      var fr = sg(p, o.f0, o.arr), f = io(fr), q0 = fr > 0 ? at(f) : [ax, ay];
      var land = sg(p, o.arr, o.arr + .05), glint = Math.sin(Math.PI * sg(p, o.arr - .012, o.arr + .03));
      var a = sg(p, o.b, o.b + .02) * (1 - land) * (.78 + .22 * Math.sin(t * 2.6 + o.ph)) * (1 + .25 * Math.sin(Math.PI * fr));
      if (a <= .01 && glint <= .01) return;
      var sz = lp(o.s0, o.s0 * .3, f);
      if (fr > .03 && fr < .985) {   // a tapering tail along the path just travelled
        var prev = q0; for (var j = 1; j <= 5; j++) { var qj = at(Math.max(0, io(Math.max(0, fr - .022 * j)))); c.globalAlpha = a * .32 * (1 - j / 6);
          c.strokeStyle = 'rgb(240,238,232)'; c.lineWidth = Math.max(.5, sz * .16 * (1 - j / 7)); c.beginPath(); c.moveTo(prev[0], prev[1]); c.lineTo(qj[0], qj[1]); c.stroke(); prev = qj; } }
      c.globalAlpha = Math.min(1, a * .5 + glint * .9); var gs = sz * (2.4 + 2.2 * glint); c.drawImage(FL2.gl, q0[0] - gs / 2, q0[1] - gs / 2, gs, gs);
      c.globalAlpha = a; c.drawImage(FL2.kn, q0[0] - sz / 2, q0[1] - sz / 2, sz, sz);
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  // D.C.2.2.3: the logo pulls apart all at once (no sweep), bursts outward into a cloud of tiny knots, then the cloud swipes
  // up and curls into the top-left corner, where the knots settle and the real logo fades in evenly as they land.
  var FL3 = false;
  function fly3Update(p, t) {
    if (RM) { lock.style.opacity = ''; dock(io5(sg(p, .04, .78)), 'centre'); return; }
    if (!FL2) fly2Init();
    if (!FL3) { var cxL = parseFloat(lock.getAttribute('width')) / 2, cyL = parseFloat(lock.getAttribute('height')) / 2;
      FL2.P.forEach(function (o) { o.b = .035 + o.r * .03; o.f0 = .24 + o.r2 * .12; o.arr = o.f0 + .26 + o.r * .08; o.ox = o.lx - cxL; o.oy = o.ly - cyL;
        o.sp = (o.r3 - .5) * 1.6; o.burst = 14 + 30 * o.r2; }); FL3 = true; }
    var c = FL2.c, d = FL2.dpr; c.setTransform(d, 0, 0, d, 0, 0); c.clearRect(0, 0, 1280, 720);
    dock(1, 'centre'); var tx = DK.tx, ty = DK.ty, s1 = DK.s;
    var cx0 = L0 + parseFloat(lock.getAttribute('width')) / 2, cy0 = T0 + parseFloat(lock.getAttribute('height')) / 2;
    if (p < .45) { dock(0, 'centre'); lock.style.opacity = (1 - io(sg(p, .045, .13))).toFixed(3); }
    else lock.style.opacity = io(sg(p, .56, .72)).toFixed(3);
    lock.style.webkitMaskImage = lock.style.maskImage = '';
    if (homeBtn) homeBtn.style.display = p > .9 ? 'block' : 'none';
    if (p >= .8) { starAt(STS, tx, ty, s1, t); return; }   // D.C.2.6: where the mouse is, the logo turns to stars in place
    if (p <= .03) return;
    function pos(o, pp) {
      var e = oq(sg(pp, o.b, .3)), fl = .35 * sg(pp, .3, o.f0);   // the burst, then a slow outward float until it leaves
      var k = 1 + .5 * e + .06 * fl, ax = cx0 + o.ox * k + o.dx * o.burst * (e + .3 * fl), ay = cy0 + o.oy * k + o.dy * o.burst * (e + .3 * fl);
      var fr = sg(pp, o.f0, o.arr); if (fr <= 0) return [ax, ay, 0];
      var ex = L0 + tx + s1 * o.lx, ey = T0 + ty + s1 * o.ly, f = io(fr);
      var c1x = ax + (o.r - .5) * 80, c1y = ay - 170 - 150 * o.r3, c2x = ex + 60 + 150 * o.r2, c2y = ey + 50 + 70 * o.r;   // up first, then in from the right
      var u1 = 1 - f; return [u1 * u1 * u1 * ax + 3 * u1 * u1 * f * c1x + 3 * u1 * f * f * c2x + f * f * f * ex, u1 * u1 * u1 * ay + 3 * u1 * u1 * f * c1y + 3 * u1 * f * f * c2y + f * f * f * ey, fr];
    }
    c.globalCompositeOperation = 'lighter';
    FL2.P.forEach(function (o) {
      if (p < o.b) return;
      var q0 = pos(o, p), fr = q0[2], f = io(fr);
      var land = sg(p, o.arr, o.arr + .05), glint = Math.sin(Math.PI * sg(p, o.arr - .012, o.arr + .03)), flash = Math.sin(Math.PI * sg(p, o.b, o.b + .05));
      var a = sg(p, o.b, o.b + .015) * (1 - land) * (.78 + .22 * Math.sin(t * 2.6 + o.ph)) * (1 + .25 * Math.sin(Math.PI * fr));
      if (a <= .01 && glint <= .01) return;
      var sz = lp(o.s0, o.s0 * .3, f);
      if (p - o.b > .02) {   // a tapering tail along the path just travelled (short in the burst, longer in flight)
        var prev = q0; for (var j = 1; j <= 5; j++) { var qj = pos(o, Math.max(o.b, p - .008 * j)); c.globalAlpha = a * .3 * (1 - j / 6);
          c.strokeStyle = 'rgb(240,238,232)'; c.lineWidth = Math.max(.5, sz * .15 * (1 - j / 7)); c.beginPath(); c.moveTo(prev[0], prev[1]); c.lineTo(qj[0], qj[1]); c.stroke(); prev = qj; } }
      c.globalAlpha = Math.min(1, a * .5 + glint * .9 + flash * .5); var gs = sz * (2.4 + 2.2 * Math.max(glint, flash)); c.drawImage(FL2.gl, q0[0] - gs / 2, q0[1] - gs / 2, gs, gs);
      var rot = o.sp * (oq(sg(p, o.b, .3)) * .6 + f * 1.4) * (1 - land * 0);   // each knot turns a little as it goes, and lands square
      rot *= 1 - sg(fr, .8, 1);
      c.globalAlpha = a; c.save(); c.translate(q0[0], q0[1]); c.rotate(rot); c.drawImage(FL2.kn, -sz / 2, -sz / 2, sz, sz); c.restore();
    });
    c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  }
  function riseIn(p, a) {
    rise.forEach(function (el) {
      var d = parseFloat(el.getAttribute('data-tabit-rise')) || 0, e = oq(sg(p, a + d * .07, a + .32 + d * .07));
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (26 * (1 - e)).toFixed(2) + 'px)';
    });
  }
  function navIn(e, y) {
    if (nav) { nav.style.opacity = e.toFixed(3); nav.style.transform = 'translateY(' + (-10 * (1 - e)).toFixed(2) + 'px)'; }
    if (navBg) navBg.style.opacity = sg(y, 10, 120).toFixed(3);
  }
  function reset() {
    var F = hero.fx; F.oriName = 1; F.sky = 1; F.ori = 1; F.grid = 0; F.snap = 0; F.gridLine = 1; F.push = 0; F.camY = 0; F.lens = 1; F.hLine = 1; F.colsOnly = 0;
    if (night) night.style.transform = 'none';
    if (page) { page.style.clipPath = 'none'; page.style.pointerEvents = 'none'; }
    if (V === 'c4' || V === 'c5') { if (page) page.style.visibility = V === 'c5' ? 'visible' : 'hidden'; }
    rise.forEach(function (el) { el.style.opacity = 0; });
    if (nav) nav.style.opacity = 0; if (navBg) navBg.style.opacity = 0; if (navLogo) navLogo.style.opacity = 0;
    if (wm) wm.style.opacity = 0; if (cols) cols.style.opacity = 0; idx.forEach(function (el) { el.style.opacity = 0; });
    if (scroller) scroller.style.transform = 'none';
    if (scene) { var db0 = q('[data-tabit-dots]'); if (db0) db0.style.opacity = 0; scene.draw(0, 0); logoParts.forEach(function (el) { if (el) el.style.fill = ''; }); if (vig) vig.style.opacity = 1; secs.forEach(function (el) { el.style.opacity = 0; }); }
    lock.style.transformOrigin = ''; root.style.cursor = 'none';
    if (FLY) { FLY.c.clearRect(0, 0, 1280, 720); lock.style.opacity = ''; lock.style.transform = ''; }
    if (homeBtn) homeBtn.style.display = 'none';
    if (FL2) { FL2.c.setTransform(1, 0, 0, 1, 0, 0); FL2.c.clearRect(0, 0, FL2.cv.width, FL2.cv.height); lock.style.webkitMaskImage = lock.style.maskImage = ''; lock.style.transform = ''; lock.style.opacity = ''; }
  }

  function update(t, S) {
    var F = hero.fx;
    if (cue) { var ca = sg(t, 7.3, 7.9) * (1 - sg(S, 0, 140)); cue.style.opacity = ca.toFixed(3); cue.style.pointerEvents = ca > .1 ? 'auto' : 'none'; }
    if (S < .5) { if (touched) { reset(); touched = false; }
      if (V === 'dc17' && t >= TABIT_END && !RM) {   // F2.9: the splash logo breaks into knots where the pointer touches it (gentler than F2.7, livelier than F2.8), and the black hole ends right there
        if (!FL2) fly2Init(); if (!BU) burstInit();
        var wl = parseFloat(lock.getAttribute('width')), hl = parseFloat(lock.getAttribute('height')), inBox = PTR.x > L0 && PTR.x < L0 + wl && PTR.y > T0 && PTR.y < T0 + hl;
        if (inkB(PTR.x, PTR.y)) SPL.on = 1; else if (!inBox) SPL.on = 0;   // on: touching the letters or the knot; off again once it leaves the logo
        F.inkHit = SPL.on; root.style.cursor = SPL.on ? 'default' : 'none';
        var c2 = FL2.c, d2 = FL2.dpr; c2.setTransform(d2, 0, 0, d2, 0, 0); c2.clearRect(0, 0, 1280, 720); burstUpdate(t, SPL.on === 1);
      } else F.inkHit = undefined;
      return; }
    touched = true;
    var p = cl(S / TABIT_HAND, 0, 1), y = cl(S - TABIT_HAND, 0, QMAX);
    root.style.cursor = p > .12 ? 'default' : 'none'; F.lens = p > .12 ? 0 : 1;
    if (page) page.style.pointerEvents = p > .6 ? 'auto' : 'none';
    if (scroller) scroller.style.transform = 'translateY(' + (-y).toFixed(1) + 'px)';

    if (V === 'c1') {             // the logo docks into the nav; the sky dims behind the hero
      F.sky = lp(1, .4, E(p, 0, .6)); F.ori = 1 - E(p, 0, .45);
      dock(E(p, .05, .75), 'left', 40); navIn(E(p, .45, .85), y); riseIn(p, .42);
      if (wm) wm.style.opacity = E(p, .5, 1).toFixed(3);
    } else if (V === 'c2') {      // the sky becomes the page: it stays alive and drifts in depth behind glass panels
      F.sky = lp(1, .78, E(p, 0, .7)); F.ori = lp(1, .22, E(p, 0, .5)); F.camY = -(70 * E(p, 0, 1) + .32 * y);
      dock(E(p, .05, .75), 'centre'); navIn(E(p, .45, .85), y); riseIn(p, .42);
    } else if (V === 'c3') {      // the coordinate grid returns and settles into the page's column grid
      F.sky = lp(1, .35, E(p, 0, .6)); F.ori = 1 - E(p, 0, .4);
      F.grid = E(p, 0, .28); F.snap = E(p, .22, .72); F.gridLine = 1 - E(p, .6, .95);
      if (cols) cols.style.opacity = E(p, .55, .9).toFixed(3);
      dock(E(p, .2, .8), 'left', 92); navIn(E(p, .55, .9), y); riseIn(p, .55);
      idx.forEach(function (el, i) { var e = oq(sg(p, .72 + i * .06, .98 + i * .06)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'g1') {      // G1 (C2 + C3): the grid settles into the layout while the sky stays alive behind glass cards
      F.sky = lp(1, .78, E(p, 0, .7)); F.ori = lp(1, .1, E(p, 0, .5)); F.camY = -(70 * E(p, 0, 1) + .32 * y);
      F.grid = E(p, 0, .28); F.snap = E(p, .22, .72); F.gridLine = 1 - E(p, .6, .95);
      if (cols) cols.style.opacity = E(p, .55, .9).toFixed(3);
      dock(E(p, .2, .8), 'left', 92); navIn(E(p, .55, .9), y); riseIn(p, .55);
      idx.forEach(function (el, i) { var e = oq(sg(p, .72 + i * .06, .98 + i * .06)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'g2') {      // G2: as G1, but the logo docks to the centre (as D1) and only the vertical grid lines return
      F.sky = lp(1, .78, E(p, 0, .7)); F.ori = lp(1, .1, E(p, 0, .5)); F.camY = -(70 * E(p, 0, 1) + .32 * y); F.hLine = 0;
      F.grid = E(p, 0, .28); F.snap = E(p, .22, .72); F.gridLine = 1 - E(p, .6, .95);
      if (cols) cols.style.opacity = E(p, .55, .9).toFixed(3);
      dock(E(p, .2, .8), 'centre'); navIn(E(p, .55, .9), y); riseIn(p, .55);
      idx.forEach(function (el, i) { var e = oq(sg(p, .72 + i * .06, .98 + i * .06)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'e4') {      // E4: the chart sheds all but four lines; they hand over to page lines that run the full height, through the nav, at the same strength
      F.sky = lp(1, .35, E(p, 0, .6)); F.ori = 1 - E(p, 0, .4);
      F.hLine = 1 - E(p, .04, .4); F.colsOnly = E(p, .04, .4); F.gridLine = 1 - E(p, .42, .62);
      if (cols) cols.style.opacity = E(p, .42, .62).toFixed(3);
      dock(E(p, .15, .75), 'centre', 0, 640.84, 172.19); navIn(E(p, .5, .85), y); riseIn(p, .5);
      idx.forEach(function (el, i) { var e = oq(sg(p, .7 + i * .06, .96 + i * .06)) * (1 - sg(y, 0, 160)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'e3') {      // E3: nothing moves sideways; the chart sheds every line except the 13 page columns, and the page is laid on them
      F.sky = lp(1, .35, E(p, 0, .6)); F.ori = 1 - E(p, 0, .4);
      F.hLine = 1 - E(p, .04, .4); F.colsOnly = E(p, .04, .4);
      dock(E(p, .15, .75), 'centre', 0, 640.84, 172.19); navIn(E(p, .5, .85), y); riseIn(p, .5);
      idx.forEach(function (el, i) { var e = oq(sg(p, .7 + i * .06, .96 + i * .06)) * (1 - sg(y, 0, 160)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'e2') {      // E2: the splash grid never leaves; its horizontals fall away and the verticals settle into the columns
      F.sky = lp(1, .35, E(p, 0, .6)); F.ori = 1 - E(p, 0, .4);
      F.hLine = 1 - E(p, .04, .4); F.snap = E(p, .2, .7); F.gridLine = 1 - E(p, .6, .95);
      if (cols) cols.style.opacity = E(p, .55, .9).toFixed(3);
      dock(E(p, .2, .8), 'centre'); navIn(E(p, .55, .9), y); riseIn(p, .55);
      idx.forEach(function (el, i) { var e = oq(sg(p, .72 + i * .06, .98 + i * .06)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (10 * (1 - e)).toFixed(2) + 'px)'; });
    } else if (V === 'd2' || V === 'd3' || V === 'd4' || V === 'd5' || V === 'd6' || V === 'd7' || V === 'd8' || V === 'd9' || V === 'd10' || V === 'd11' || V === 'd12' || V === 'd13' || (V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) {      // D2: D1 with finesse: a calmer glide to centre, nav opening out from the logo, lines rising from their baselines, cards met as you scroll
      F.sky = lp(1, .8, E(p, 0, .7)); if ((V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) F.oriName = 1 - E(p, 0, .3);   // D14: the drawing stays, its label goes as the hand-off begins
      F.ori = (V === 'd13' || (V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) ? 1 : lp(1, (V === 'd11' || V === 'd12') ? 0 : V === 'd10' ? .07 : .2, E(p, 0, .5)); F.camY = -(70 * E(p, 0, 1) + .32 * y);
      var dk = io5(sg(p, .04, .78)); if (V === 'dc17') fly3Update(p, t); else if (V === 'dc16') fly2Update(p, t); else if (V === 'dc15' || V === 'dc16' || V === 'dc17') flyUpdate(p, t); else dock(dk, V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17' ? 'left' : 'centre', 40);   // D.C.2.2: the logo docks left in the nav; D.C.2.2.1: it flies there as stars
      if (nav) { nav.style.opacity = p > .3 ? '1' : '0'; nav.style.transform = 'none'; }
      if (navBg) navBg.style.opacity = sg(y, 10, 120).toFixed(3);
      navItems.forEach(function (el) { var r = +el.getAttribute('data-tabit-navitem'), e = oq(sg(p, .56 + r * .07, .84 + r * .07)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (-8 * (1 - e)).toFixed(2) + 'px)'; el.style.display = 'inline-block'; });
      rise.forEach(function (el) {
        var d = +el.getAttribute('data-tabit-rise');
        if (d === 1) { el.style.opacity = p > .4 ? '1' : '0'; el.style.transform = 'none'; return; }
        var e = oq(sg(p, .46 + d * .09, .82 + d * .09)); el.style.opacity = e.toFixed(3);
        el.style.transform = 'translateY(' + (d === 0 ? 0 : 18 * (1 - e)).toFixed(2) + 'px)';
        if (d === 0) el.style.letterSpacing = lp(.62, .26, io(sg(p, .46, 1))).toFixed(3) + 'em';
      });
      lineIn.forEach(function (el, i) { var e = io(sg(p, .52 + i * .1, .9 + i * .1)); el.style.transform = 'translateY(' + (110 * (1 - e)).toFixed(1) + '%)'; });
      if (wwd) { var w0 = oq(sg(y, 60, 260)); wwd.style.opacity = w0.toFixed(3); wwd.style.transform = 'translateY(' + (12 * (1 - w0)).toFixed(2) + 'px)'; }
      cards.forEach(function (el, i) {
        var e = oq(sg(y, 140 + i * 60, 440 + i * 60)); el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (34 * (1 - e)).toFixed(2) + 'px)';
        var ln = el.querySelector('[data-tabit-cardline]'); if (ln) ln.style.width = (36 * io(sg(y, 260 + i * 60, 560 + i * 60))).toFixed(1) + 'px';
      });
    } else if (V === 'c4') {      // through the knot: the name steps aside, the mark opens into a window onto the page
      F.ori = 1 - E(p, 0, .3); F.push = E(p, 0, 1); F.sky = lp(1, .7, E(p, .3, 1));
      letters.forEach(function (el, k) { var e = E(p, k * .03, .24 + k * .03); el.style.opacity = (1 - e).toFixed(3); el.style.transform = 'translateY(' + (120 * e).toFixed(2) + 'px)'; });
      var g = Math.pow(sg(p, .1, .9), 1.9), sc = 1 + 30 * g;
      lock.style.transformOrigin = MX.toFixed(2) + 'px ' + MY.toFixed(2) + 'px';
      lock.style.transform = 'scale(' + sc.toFixed(4) + ')';
      if (mark) { mark.style.opacity = (1 - E(p, .26, .58)).toFixed(3); mark.style.filter = 'none'; }
      var r = 1500 * Math.pow(sg(p, .16, .95), 1.6), cx = L0 + MX, cy = T0 + MY;
      if (page) { page.style.visibility = 'visible'; page.style.clipPath = 'circle(' + r.toFixed(1) + 'px at ' + cx.toFixed(1) + 'px ' + cy.toFixed(1) + 'px)'; }
      if (navLogo) navLogo.style.opacity = E(p, .78, 1).toFixed(3);
      navIn(E(p, .7, 1), y); riseIn(p, .55);
      if (wm) wm.style.opacity = E(p, .6, 1).toFixed(3);
    } else if (V === 'c5') {      // a horizon curtain: night lifts away and the Day page is underneath
      var e5 = E(p, .04, .96), up = -724 * e5;
      if (night) night.style.transform = 'translateY(' + up.toFixed(1) + 'px)';
      lock.style.transformOrigin = '0 0'; lock.style.transform = 'translateY(' + up.toFixed(1) + 'px)';
      if (horizon) horizon.style.opacity = sg(p, 0, .08).toFixed(3);
      if (page) page.style.transform = 'translateY(' + (90 * (1 - e5)).toFixed(1) + 'px)';
      if (navLogo) navLogo.style.opacity = E(p, .34, .74).toFixed(3);
      navIn(E(p, .34, .74), y); riseIn(p, .3);
      if (wm) wm.style.opacity = E(p, .4, 1).toFixed(3);
    } else if (V === 'c6') {      // recommended: 1 + 2, the logo docks left and the sky stays alive behind glass
      F.sky = lp(1, .62, E(p, 0, .7)); F.ori = lp(1, .16, E(p, 0, .5)); F.camY = -(50 * E(p, 0, 1) + .3 * y);
      dock(E(p, .05, .75), 'left', 40); navIn(E(p, .45, .85), y); riseIn(p, .42);
      if (wm) wm.style.opacity = E(p, .5, 1).toFixed(3);
    }
  }
  var update0 = update;
  if (scene) update = function (t, S) {   // D3: after the hand-off, scrolling descends from the night sky to the beach
    update0(t, S);
    if (S < .5) return;
    var F = hero.fx, y = cl(S - TABIT_HAND, 0, QMAX), yc = y, u = QMAX ? y / QMAX : 0;
    if (V === 'd6' || V === 'd7' || V === 'd8' || V === 'd9' || V === 'd10' || V === 'd11' || V === 'd12' || V === 'd13' || (V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) {   // chapters: the text holds still while you read; it moves, and the scene mostly changes, between chapters
      var Dw = 170, k2 = Math.round(y / 720), rest = 720 * k2;
      if (Math.abs(y - rest) <= Dw) yc = rest;
      else { var k0 = Math.floor((y - Dw) / 720), a0 = 720 * k0 + Dw; yc = lp(720 * k0, 720 * (k0 + 1), io(sg(y, a0, a0 + 720 - 2 * Dw))); }
      u = lp(u, yc / QMAX, .6);
      if (scroller) scroller.style.transform = 'translateY(' + (-yc).toFixed(1) + 'px)';
    }
    var r = scene.draw(t, u, cl(S / TABIT_HAND, 0, 1)), ph = r.ph, day = r.day;
    F.sky *= 1 - .8 * sg(ph, .15, .8); F.ori *= (V === 'd13' || (V === 'd14' || /^dd/.test(V) || /^d[abc][1-6]$/.test(V) || V === 'db3' || V === 'dc3' || V === 'dc4' || V === 'dc5' || V === 'dc6' || V === 'dc7' || V === 'dc8' || V === 'dc9' || V === 'dc10' || V === 'dc11' || V === 'dc12' || V === 'dc13' || V === 'dc14' || V === 'dc15' || V === 'dc16' || V === 'dc17')) ? 1 - sg(ph, .2, .62) : 1 - sg(u, 0, .1);   // D13: the constellation stays with the night and goes with the dawn, like the stars
    var ink = mixHex('#FFFFFF', '#09154A', day);
    logoParts.forEach(function (el) { if (el) el.style.fill = ink; });
    aiUpdate(S, yc, ink);
    root.style.setProperty('--tabit-ink', mixHex('#F6F2EA', '#09154A', day).replace('rgb', 'rgba').replace(')', ',.84)'));
    root.style.setProperty('--tabit-ink2', mixHex('#F6F2EA', '#09154A', day));
    root.style.setProperty('--tabit-line', mixHex('#F6F2EA', '#09154A', day).replace('rgb', 'rgba').replace(')', ',.4)'));
    if (navBg) navBg.style.background = mixHex('#080D1E', '#F6F2EA', day).replace('rgb', 'rgba').replace(')', ',' + lp(.5, .58, day).toFixed(2) + ')');
    if (vig) vig.style.opacity = (1 - .9 * day).toFixed(3);
    var hc = q('[data-tabit-herocue]'); if (hc) hc.style.opacity = (sg(S, TABIT_HAND * .85, TABIT_HAND) * (1 - sg(yc, 30, 220))).toFixed(3);
    var coordsEl = q('[data-tabit-coords]'); if (coordsEl) coordsEl.style.opacity = (1 - sg(S, TABIT_HAND + 720 * 3.35, TABIT_HAND + 720 * 3.75)).toFixed(3);
    if (dotsBox) { dotsBox.style.opacity = sg(S, TABIT_HAND * .6, TABIT_HAND).toFixed(3); var fi = cl(yc / 720, 0, 4);   // D.C.2.4: the page markers are a small constellation
      dotEls.forEach(function (el, i) { var on = 1 - Math.min(1, Math.abs(fi - i)); el.style.opacity = ((.45 + .55 * on) * (.86 + .14 * Math.sin(t * 1.7 + i * 1.9))).toFixed(3); el.style.transform = 'scale(' + (1 + .55 * on).toFixed(3) + ')'; el.style.filter = 'drop-shadow(0 0 ' + (1.5 + 4 * on).toFixed(1) + 'px rgba(246,242,234,' + (.2 + .5 * on).toFixed(2) + '))'; });
      if (conProg) { var seg0 = Math.min(3, Math.floor(fi)), done = CONC[seg0] + CONL[seg0] * (fi - seg0); conProg.style.strokeDashoffset = (1 - done / CONT).toFixed(4); } }
    secs.forEach(function (el) {
      var k = +el.getAttribute('data-tabit-sec'), d = +el.getAttribute('data-tabit-secd'), c0 = 720 * k - 560 + d * 50, e = oq(sg(yc, c0, c0 + 300));
      el.style.opacity = e.toFixed(3); el.style.transform = 'translateY(' + (24 * (1 - e)).toFixed(2) + 'px)';
    });
  };
  reset();
  return { update: update, qmax: QMAX, hoverLogo: function (tn) {}, ptr: function (x, y) { PTR.x = x; PTR.y = y; } };
}

// Alpha Stars · scroll concepts (AS6.1 to AS15.1). One light 2D engine shared by ten ideas.
// Every idea opens on the B11 framing (Orion drawn beside the lockup) and is driven only by scrolling:
// the scroll scrubs the scene (scroll back and it reverses), the camera eases to rest on each chapter so the text can be
// read (the soft anchors Aether 1 uses), a progress marker and a plain menu are always there, and the chapters are the
// same in every idea, so only the concept changes.
function makeScrollSky(root, IDEA, LOGO, OPT) {
  // OPT.headless: the scene only, drawn into the given canvas as the background of the shared Beta site shell (which owns
  // the splash, the logo, the nav, the page copy and the knot page markers). The copy there sits on the left, so the
  // scenes put their subject on the right.
  OPT = OPT || {}; var HL = !!OPT.headless, CL = HL && OPT.side === 'left', FOCUSX = HL && !CL ? 860 : CL && OPT.focus ? OPT.focus : 420;   // AS7.6: OPT.focus sets the path's x   // CL: copy on the right, subject on the left (AS7.5)
  var W = 1280, H = 720, BRASS = '#A8823A', IVORY = '246,242,234', DUSK = '184,192,212', NIGHT = '#04070F';
  var OXS = HL ? TABIT_OX : 0, WT = W + 2 * OXS;   // the canvas is the screen's width; scenes still draw in the 1280 design, centred
  var dpr = HL ? Math.min((window.devicePixelRatio || 1) * TABIT_K, 1.5) : Math.min(window.devicePixelRatio || 1, 2);
  var cv = HL ? root : root.querySelector('canvas[data-ss]'), c = cv.getContext('2d');
  cv.width = Math.round(WT * dpr); cv.height = Math.round(H * dpr);
  var lockEl, ui;
  if (HL) {   // stand-ins for the interface the shell provides
    lockEl = document.createElement('div'); ui = document.createElement('div');
    ui.innerHTML = '<div data-ss-panel><div data-ss-kick></div><div data-ss-head></div><div data-ss-body></div></div><div data-ss-prog></div><div data-ss-menu></div><div data-ss-meter></div><div data-ss-cue></div>';
  } else { lockEl = root.querySelector('[data-ss-lock]'); ui = root.querySelector('[data-ss-ui]'); }
  var seed = 1291; function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function cl(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sg(t, a, b) { return cl((t - a) / (b - a), 0, 1); }
  function io(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function ss(x) { return x * x * (3 - 2 * x); }
  function lp(a, b, k) { return a + (b - a) * k; }
  function rgba(col, a) { return 'rgba(' + col + ',' + cl(a, 0, 1).toFixed(3) + ')'; }

  // ---- Orion as B11 frames it (screen positions at the end of the splash), with catalogue distance and magnitude
  var ORI = {
    betel: [237, 345, 643, .42], rigel: [416, 628, 773, .18], bella: [368, 368, 243, 1.64], mintaka: [340, 485, 916, 2.2], alnilam: [322, 501, 1342, 1.69],
    alnitak: [299, 515, 817, 1.88], saiph: [262, 661, 721, 2.07], meissa: [331, 303, 1055, 3.47], pi1: [497, 304, 121, 4.64], pi2: [517, 325, 194, 4.35],
    pi3: [512, 360, 26, 3.19], pi4: [522, 382, 1259, 3.68], pi5: [509, 436, 1342, 3.71], pi6: [489, 449, 953, 4.47], mu: [199, 304, 152, 4.12], nu: [183, 207, 534, 4.42],
    xi: [163, 216, 634, 4.45], chi1: [235, 110, 28, 4.39], chi2: [209, 107, 1801, 4.64], omi2: [492, 245, 169, 4.06], o11: [461, 210, 400, 4.65], eta: [373, 522, 901, 3.35], tau: [401, 603, 554, 3.59]
  };
  var LINES = [['pi3', 'pi2'], ['pi2', 'pi1'], ['pi1', 'omi2'], ['omi2', 'o11'], ['pi3', 'pi4'], ['pi4', 'pi5'], ['pi5', 'pi6'], ['pi3', 'bella'], ['bella', 'meissa'], ['meissa', 'betel'],
    ['betel', 'bella'], ['bella', 'mintaka'], ['mintaka', 'alnilam'], ['alnilam', 'alnitak'], ['betel', 'alnitak'], ['alnitak', 'saiph'], ['mintaka', 'eta'], ['eta', 'tau'], ['tau', 'rigel'],
    ['betel', 'mu'], ['mu', 'xi'], ['xi', 'chi2'], ['chi2', 'chi1'], ['chi1', 'nu']];
  var NAMES = { pi3: 'Tabit', mintaka: 'Mintaka', alnilam: 'Alnilam', alnitak: 'Alnitak', meissa: 'Meissa', bella: 'Bellatrix', betel: 'Betelgeuse', rigel: 'Rigel', saiph: 'Saiph' };
  var DESIG = { pi3: 'π³ Ori', mintaka: 'δ Ori', alnilam: 'ε Ori', alnitak: 'ζ Ori', meissa: 'λ Ori', bella: 'γ Ori', betel: 'α Ori', rigel: 'β Ori', saiph: 'κ Ori' };
  function oriB(k) { return cl(Math.pow(10, -.4 * (ORI[k][3] - 1)), .15, 1); }

  // ---- the sky: three depth layers of real-looking stars (a few bright with halos, many faint), muted true colours
  var TEMP = ['210,222,255', '246,246,255', '255,246,226', '255,232,200', '255,214,176'];
  var SKY = [];
  for (var i = 0; i < 2400; i++) {
    var lay = i < 1500 ? 0 : i < 2150 ? 1 : 2, b = Math.pow(rnd(), lay === 0 ? 6 : lay === 1 ? 4 : 3);
    SKY.push({ x: rnd() * 1600 - 160, y: rnd() * 1040 - 160, z: [5, 2.6, 1.5][lay], b: b * [.5, .75, 1][lay], col: TEMP[(rnd() * rnd() * 5) | 0], ph: rnd() * 6.28 });
  }
  var SKYX = [];   // the same sky carried out to the widest screen's edges, from its own random sequence (SKY itself is untouched)
  if (HL) { var sx7 = 9137; var rx = function () { sx7 = (sx7 * 16807) % 2147483647; return (sx7 - 1) / 2147483646; };
    var ex = 330 - 120 + 60, nx = Math.round(2400 * ex / 1600);
    for (var side = 0; side < 2; side++) for (var i2 = 0; i2 < nx; i2++) {
      var lay2 = i2 % 32 < 20 ? 0 : i2 % 32 < 29 ? 1 : 2, b2 = Math.pow(rx(), lay2 === 0 ? 6 : lay2 === 1 ? 4 : 3);
      SKYX.push({ x: side ? 1440 + rx() * ex : -160 - rx() * ex, y: rx() * 1040 - 160, z: [5, 2.6, 1.5][lay2], b: b2 * [.5, .75, 1][lay2], col: TEMP[(rx() * rx() * 5) | 0], ph: rx() * 6.28 });
    } }
  function star(x, y, r, a, col) {
    if (a <= .01) return;
    var g = c.createRadialGradient(x, y, 0, x, y, r * 3.2); g.addColorStop(0, rgba(col || IVORY, a)); g.addColorStop(.25, rgba(col || IVORY, a * .45)); g.addColorStop(1, rgba(col || IVORY, 0));
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r * 3.2, 0, 6.2832); c.fill();
  }
  function dot(x, y, r, a, col) { if (a <= .01) return; c.fillStyle = rgba(col || IVORY, a); c.beginPath(); c.arc(x, y, r, 0, 6.2832); c.fill(); }
  function drawSky(dx, dy, a, map) {   // dx, dy: camera drift in px for the nearest layer; map: optional per-star transform
    for (var i = 0, nS = SKY.length, nA = nS + (OXS > 0 ? SKYX.length : 0); i < nA; i++) {
      var s = i < nS ? SKY[i] : SKYX[i - nS], x = s.x + dx / s.z, y = s.y + dy / s.z;
      if (map) { var m = map(x, y, s); if (!m) continue; x = m[0]; y = m[1]; }
      if (x < -20 - OXS || x > W + 20 + OXS || y < -20 || y > H + 20) continue;
      var al = a * (.25 + .75 * s.b) * (.85 + .15 * Math.sin(T * 1.2 + s.ph));
      if (s.b > .55) star(x, y, .9 + 1.6 * s.b, al * .8, s.col); else dot(x, y, .5 + .9 * s.b, al, s.col);
    }
  }
  function drawOrion(a, f, lineA) {   // f maps an Orion star key to [x, y]; default is the B11 frame
    f = f || function (k) { return [ORI[k][0], ORI[k][1]]; };
    if (lineA == null) lineA = 1;
    c.strokeStyle = rgba(DUSK, .42 * a * lineA); c.lineWidth = 1;
    LINES.forEach(function (L) { var p = f(L[0]), q = f(L[1]); if (!p || !q) return; var dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy); if (d < 16) return; var ux = dx / d * 7, uy = dy / d * 7; c.beginPath(); c.moveTo(p[0] + ux, p[1] + uy); c.lineTo(q[0] - ux, q[1] - uy); c.stroke(); });
    Object.keys(ORI).forEach(function (k) { var p = f(k); if (!p) return; var b = oriB(k); star(p[0], p[1], 1 + 1.6 * b, a * (.55 + .45 * b), k === 'pi3' ? '255,248,232' : '232,238,255'); });
  }
  function lock(op, tx, ty, s) { lockEl.style.opacity = cl(op, 0, 1).toFixed(3); lockEl.style.transform = 'translate(' + (tx || 0).toFixed(1) + 'px,' + (ty || 0).toFixed(1) + 'px) scale(' + (s || 1).toFixed(4) + ')'; }
  function knotPath() { return new Path2D(LOGO.mark); }
  // the lockup's mark sits on Tabit: its svg units map to screen as x = 441.29 + (u + 4) * k, y = 304.28 + (v + 4) * k
  var LK = 397.42 / 1408, MARKC = [441.29 + (247.9 + 4) * LK, 304.28 + (193.2 + 4) * LK];

  // ---- chapters: the same five sections in every idea (ideas may reorder them)
  var BASE = [{ k: 'home', t: 'Home' }, { k: 'mintaka', t: '(Re)insurance' }, { k: 'alnilam', t: 'Capital & cells' }, { k: 'alnitak', t: 'Life & PPLI' }, { k: 'meissa', t: 'AI' }, { k: 'contact', t: 'Contact' }];
  var S = { u: 0, uAim: 0, vel: 0, last: 0, idle: 0 };
  var CH = BASE;

  // ---- interface: text panel, progress marker, plain menu, scroll cue
  var panel = ui.querySelector('[data-ss-panel]'), kick = panel.querySelector('[data-ss-kick]'), head = panel.querySelector('[data-ss-head]'), body = panel.querySelector('[data-ss-body]');
  var prog = ui.querySelector('[data-ss-prog]'), menu = ui.querySelector('[data-ss-menu]'), cue = ui.querySelector('[data-ss-cue]'), meter = ui.querySelector('[data-ss-meter]');
  function buildNav() {
    prog.innerHTML = ''; menu.innerHTML = '';
    CH.forEach(function (ch, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'ss-dot'; b.setAttribute('aria-label', ch.t);
      var d = document.createElement('span'); b.appendChild(d); b.addEventListener('click', function () { S.uAim = i; }); prog.appendChild(b);
      if (i > 0) { var m = document.createElement('button'); m.type = 'button'; m.className = 'ss-lnk'; m.textContent = ch.t; m.addEventListener('click', function () { S.uAim = i; }); menu.appendChild(m); }
    });
  }
  var shown = -1;
  function setPanel(i) {
    var ch = CH[i]; shown = i;
    if (ch.k === 'home') { kick.textContent = ''; head.textContent = ''; body.textContent = ''; return; }
    if (ch.k === 'contact') { kick.textContent = ch.kick || 'Contact'; head.textContent = ch.head || 'Speak to the team'; body.textContent = '[Placeholder contact details and enquiry form]'; return; }
    kick.textContent = ch.kick || (NAMES[ch.k] ? NAMES[ch.k] + ' · ' + DESIG[ch.k] : '');
    head.textContent = ch.t; body.textContent = '[Placeholder line on ' + ch.t + '. Two or three lines introducing this section will sit here.]';
  }
  function placePanel(side, top) { panel.style.left = side === 'left' ? '96px' : side === 'centre' ? '440px' : '760px'; panel.style.top = (top || 250) + 'px'; }

  // ---- scrolling: wheel scrubs the scene; when the wheel goes quiet the camera settles on the nearest chapter
  if (!HL) root.addEventListener('wheel', function (e) { e.preventDefault(); S.uAim = cl(S.uAim + e.deltaY / 900, 0, CH.length - 1); S.idle = 0; }, { passive: false });
  var touchY = null;
  if (!HL) root.addEventListener('touchstart', function (e) { touchY = e.touches[0].clientY; }, { passive: true });
  if (!HL) root.addEventListener('touchmove', function (e) { if (touchY == null) return; var y = e.touches[0].clientY; S.uAim = cl(S.uAim + (touchY - y) / 500, 0, CH.length - 1); touchY = y; S.idle = 0; e.preventDefault(); }, { passive: false });

  var T = 0, scenes = {}, SHELLR = 1, SHELLU = 0, meterTxt = '';
  function inCopy(x, y, hold) {   // is this point under the text? (labels keep clear of it)
    if (hold <= .3) return false;
    if (!HL) return x > 740 && x < 1220 && y > 230 && y < 420;
    if (SHELLU < .1) return x > 230 && x < 1050 && y > 260 && y < 520;
    return CL ? x > 570 && x < 1200 && y > 200 && y < 640 : x > 90 && x < 720 && y > 200 && y < 640;
  }

  // =========================================================================================== shared looks
  function homeFrame(a) { drawSky(0, 0, a); drawOrion(a); }

  // =========================================================================================== AS6 · Through the knot
  // Igloo (one continuous camera, distinct scenes) + Lusion (spend the drama on a few beats): every chapter break is a
  // dive through Tabit's knot; you come out in a new region of sky, each with its own colour and centrepiece.
  scenes.knot = (function () {
    var REG = [null, { tint: '96,120,190', obj: 'spikes' }, { tint: '170,96,120', obj: 'nebula' }, { tint: '90,150,170', obj: 'cluster' }, { tint: '130,110,190', obj: 'double' }, { tint: '160,140,90', obj: 'tabit' }];
    function region(i, a) {
      var R = REG[i]; if (!R || a <= 0) return;
      var g = c.createRadialGradient(360, 380, 0, 360, 380, 620); g.addColorStop(0, rgba(R.tint, .28 * a)); g.addColorStop(1, rgba(R.tint, 0)); c.fillStyle = g; c.fillRect(0, 0, W, H);
      centrepiece(R.obj, 360, 380, a, i);
    }
    return {
      side: 'right',
      draw: function (u, near, hold) {
        var k = Math.floor(u), f = u - k;
        var dive = sg(f, .15, .85), e = io(dive), flash = Math.sin(Math.PI * e);
        if (u < .001) { homeFrame(1); lock(1); return; }
        // leaving chapter k: we fall towards Tabit and through the knot
        var zoom = Math.exp(e * 5.2), ax = k === 0 ? MARKC[0] : 360, ay = k === 0 ? MARKC[1] : 380;
        var tunnel = function (x, y) { var dx = x - ax, dy = y - ay; return [ax + dx * lp(1, 1 + 3 * e, sg(f, .1, .5)), ay + dy * lp(1, 1 + 3 * e, sg(f, .1, .5))]; };
        drawSky(0, 0, 1 - .6 * flash, tunnel);
        if (k === 0) { drawOrion(1 - sg(f, .1, .45), function (q) { var p = tunnel(ORI[q][0], ORI[q][1]); return p; }); }
        region(k, 1 - sg(f, .1, .5));
        // the knot grows from Tabit until we are through it
        var kx = k === 0 ? MARKC[0] : 360, ky = k === 0 ? MARKC[1] : 380, ks = (k === 0 ? 1 : .35) * zoom;
        if (k === 0) lock(1 - sg(f, .05, .3)); else lock(0);
        if (f > .02 && f < .98) {
          c.save(); c.translate(kx, ky); c.scale(LK * ks, LK * ks); c.translate(-247.9, -193.2);
          c.strokeStyle = rgba(IVORY, .9 * (1 - sg(e, .55, .8))); c.lineWidth = 1.4 / (LK * ks); c.stroke(knotPath()); c.restore();
          var fl = c.createRadialGradient(kx, ky, 0, kx, ky, 700); fl.addColorStop(0, rgba('235,240,255', .22 * Math.pow(flash, 4))); fl.addColorStop(1, rgba('235,240,255', 0)); c.fillStyle = fl; c.fillRect(0, 0, W, H);   // a brief glow at the centre, not a white-out
        }
        // arriving: the next region opens out from the centre of the knot
        region(k + 1, sg(f, .55, 1));
        if (f >= .55) drawSky(0, 0, sg(f, .55, 1), function (x, y) { var s2 = lp(.25, 1, io(sg(f, .55, 1))); return [360 + (x - 360) * s2, 380 + (y - 380) * s2]; });
      }
    };
  })();

  // shared centrepieces, each a different kind of object so no two chapters look alike (the Igloo lesson)
  function centrepiece(kind, x, y, a, seedN) {
    if (kind === 'spikes') { star(x, y, 9, a, '214,226,255'); c.strokeStyle = rgba('224,232,255', .5 * a); c.lineWidth = 1; c.beginPath(); c.moveTo(x - 120, y); c.lineTo(x + 120, y); c.moveTo(x, y - 120); c.lineTo(x, y + 120); c.stroke(); }
    else if (kind === 'nebula') { [[0, 0, 160, '200,120,150'], [60, -30, 120, '120,140,220'], [-50, 40, 110, '220,160,140']].forEach(function (b) { var g = c.createRadialGradient(x + b[0], y + b[1], 0, x + b[0], y + b[1], b[2]); g.addColorStop(0, rgba(b[3], .35 * a)); g.addColorStop(1, rgba(b[3], 0)); c.fillStyle = g; c.beginPath(); c.arc(x + b[0], y + b[1], b[2], 0, 6.2832); c.fill(); }); star(x + 10, y, 4, a, '255,240,240'); }
    else if (kind === 'cluster') { var sd = 77; for (var i = 0; i < 46; i++) { sd = (sd * 16807) % 2147483647; var r1 = sd / 2147483647; sd = (sd * 16807) % 2147483647; var r2 = sd / 2147483647; sd = (sd * 16807) % 2147483647; var r3 = sd / 2147483647; var rr = 90 * Math.sqrt(r1), an = r2 * 6.2832; star(x + rr * Math.cos(an), y + rr * Math.sin(an) * .8, 1 + 2.4 * r3 * r3, a, '200,220,255'); } }
    else if (kind === 'double') { var an2 = T * .6; star(x + 46 * Math.cos(an2), y + 18 * Math.sin(an2), 5, a, '255,226,190'); star(x - 46 * Math.cos(an2), y - 18 * Math.sin(an2), 3.6, a, '200,220,255'); c.strokeStyle = rgba(DUSK, .25 * a); c.beginPath(); c.ellipse(x, y, 46, 18, 0, 0, 6.2832); c.stroke(); }
    else if (kind === 'tabit') { star(x, y, 6, a, '255,248,232'); c.save(); c.translate(x, y); c.scale(.42, .42); c.translate(-247.9, -193.2); c.fillStyle = rgba(IVORY, .9 * a); c.fill(knotPath(), 'evenodd'); c.restore(); }
  }

  // =========================================================================================== AS7 · Deeper into Orion
  // ERA's "road" camera flight and Virgin Galactic's real-object focus: the scroll travels outwards through Orion's real
  // depth; each section is a real star met at its true distance; the light-year counter is the progress bar.
  scenes.deeper = (function () {
    var ORDER = [{ k: 'home', t: 'Home' }, { k: 'bella', t: 'Regulation' }, { k: 'alnitak', t: 'Life & PPLI' }, { k: 'mintaka', t: '(Re)insurance' }, { k: 'meissa', t: 'AI' }, { k: 'alnilam', t: 'Capital & cells' }, { k: 'contact', t: 'Contact', kick: '1,342 light years out' }];
    var SHELL_ORDER = [{ k: 'home', t: 'Home' }, { k: 'bella', t: 'AI' }, { k: 'alnitak', t: 'Capital' }, { k: 'meissa', t: 'Life & PPLI' }, { k: 'alnilam', t: 'Barbados' }];
    if (HL) ORDER = SHELL_ORDER;
    var F = 800, SC = 1.6, AIMX = HL ? 900 : 380;   // world depth = light years × SC
    function Z(k) { return ORI[k][2] * SC; }
    function stopZ(i) { var ch = ORDER[i]; if (ch.k === 'home') return 0; if (ch.k === 'contact') return Z('alnilam') + 300; return Z(ch.k) - 240; }
    var FIELD = []; for (var i = 0; i < 1400; i++) { var z = rnd() * 2600; FIELD.push({ X: (rnd() - .5) * 2.4 * (z + 300), Y: (rnd() - .5) * 1.5 * (z + 300), Z: z, b: Math.pow(rnd(), 4), col: TEMP[(rnd() * rnd() * 5) | 0] }); }
    return {
      chapters: ORDER, side: 'right', meter: true, shell: { chapters: SHELL_ORDER, map: 'page' },
      draw: function (u, near, hold) {
        var k = Math.min(Math.floor(u), ORDER.length - 2), f = u - k, e = io(sg(f, .25, 1));
        var cz = lp(stopZ(k), stopZ(k + 1), e); if (u >= ORDER.length - 1) cz = stopZ(ORDER.length - 1);
        // keep the star we are heading for at the left third of the screen
        function aimX(i) { var ch = ORDER[i]; if (!ORI[ch.k]) return 0; var z = Z(ch.k), d = Math.max(60, z - stopZ(i)); return (ORI[ch.k][0] - 640) * z / F - (AIMX - 640) * d / F; }
        function aimY(i) { var ch = ORDER[i]; if (!ORI[ch.k]) return 0; var z = Z(ch.k), d = Math.max(60, z - stopZ(i)); return (ORI[ch.k][1] - 360) * z / F - (380 - 360) * d / F; }
        var cx = lp(aimX(k), aimX(k + 1), e), cy = lp(aimY(k), aimY(k + 1), e);
        drawSky(-cx * .02, -cy * .02, .7);
        FIELD.forEach(function (s) { var d = s.Z - cz; if (d < 40) return; var x = 640 + (s.X - cx) * F / d, y = 360 + (s.Y - cy) * F / d; if (x < -10 || x > W + 10 || y < -10 || y > H + 10) return; dot(x, y, cl(.4 + 120 / d, .4, 2.2), (.25 + .75 * s.b) * sg(d, 40, 200), s.col); });
        var P = {};
        Object.keys(ORI).forEach(function (q) { var z = ORI[q][2] * SC, d = z - cz; if (d < 30) return; var X = (ORI[q][0] - 640) * z / F, Y = (ORI[q][1] - 360) * z / F; P[q] = [640 + (X - cx) * F / d, 360 + (Y - cy) * F / d, d]; });
        var lineA = 1 - sg(u, 0, .6);
        drawOrion(1, function (q) { return P[q] ? [P[q][0], P[q][1]] : null; }, lineA);
        Object.keys(P).forEach(function (q) { var d = P[q][2]; if (d < 700) star(P[q][0], P[q][1], cl(1600 / d, 2, 26), sg(d, 30, 120), q === 'betel' ? '255,200,160' : '220,230,255'); });
        var ch = ORDER[near]; if (ORI[ch.k] && P[ch.k] && hold > .3) { c.strokeStyle = rgba('168,130,58', hold); c.lineWidth = 1.2; c.beginPath(); c.arc(P[ch.k][0], P[ch.k][1], cl(1600 / P[ch.k][2], 2, 26) * 3.6 + 10, 0, 6.2832); c.stroke(); }
        lock(1 - sg(u, 0, .3), 0, 0, 1 + .4 * sg(u, 0, .3));
        meterTxt = meter.textContent = Math.round(cz / SC).toLocaleString('en-GB') + ' light years from Earth';
      }
    };
  })();

  // =========================================================================================== AS7.2 · Down the bow
  // AS7's depth, given a track. The camera flies one continuous path down Orion's bow (the arc of π stars that holds
  // Tabit), from the top of the arc to π⁶. Each section is one bow star, met at its real distance, and the camera turns
  // to follow the track rather than hopping between scattered stars. The bow's stars sit at very different distances
  // (Tabit 26 ly, its neighbours up to 1,342 ly), so the path swings in and out through real depth.
  scenes.bow = (function () {
    var F = 800, D = 175;
    function zOf(ly) { return 300 + 700 * Math.log(ly / 20) / Math.LN10; }   // depth, compressed (log) so near and far both read
    function lyOf(z) { return 20 * Math.pow(10, (z - 300) / 700); }
    // The bow is laid out as a road into depth: each bow star stays on its B11 sight-line (so the opening frame is exactly
    // B11), but sits one step further away than the last, so the arc that reads flat on the splash turns out to recede
    // into the distance. Real distances are kept for the labels and the meter. The rest of Orion is a far backdrop.
    var TRACK = ['o11', 'omi2', 'pi1', 'pi2', 'pi3', 'pi4', 'pi5', 'pi6'];
    var P3 = {}; Object.keys(ORI).forEach(function (k) { var ti = TRACK.indexOf(k), z = ti >= 0 ? 560 * Math.pow(1.32, ti) : 9000; P3[k] = [(ORI[k][0] - 640) * z / F, (ORI[k][1] - 360) * z / F, z]; });
    var COL = { o11: '230,236,255', omi2: '255,222,186', pi1: '236,240,255', pi2: '240,243,255', pi3: '255,246,226', pi4: '204,218,255', pi5: '210,224,255', pi6: '255,212,168' };
    var SUP = { pi1: 'π¹', pi2: 'π²', pi3: 'π³', pi4: 'π⁴', pi5: 'π⁵', pi6: 'π⁶' };
    function lyTxt(k) { return Number(ORI[k][2]).toLocaleString('en-GB') + ' light years'; }
    var ORDER = [{ k: 'home', t: 'Home' },
      { k: 'pi1', t: '(Re)insurance', kick: 'π¹ Orionis · ' + lyTxt('pi1') },
      { k: 'pi2', t: 'Capital & cells', kick: 'π² Orionis · ' + lyTxt('pi2') },
      { k: 'pi3', t: 'About Tabit', kick: 'Tabit · π³ Orionis · ' + lyTxt('pi3') },
      { k: 'pi4', t: 'Life & PPLI', kick: 'π⁴ Orionis · ' + lyTxt('pi4') },
      { k: 'pi5', t: 'AI', kick: 'π⁵ Orionis · ' + lyTxt('pi5') },
      { k: 'contact', star: 'pi6', t: 'Contact', kick: 'π⁶ Orionis · ' + lyTxt('pi6') + ' · the foot of the bow', head: 'Speak to the team' }];
    // on the Beta site the bow carries the site's five pages: Home holds the B11 view while the route draws itself down the
    // bow, then one stop per page, ending at the foot of the bow
    var SHELL_ORDER = [{ k: 'home', t: 'Home' }, { k: 'pi1', t: 'AI' }, { k: 'pi3', t: 'Capital' }, { k: 'pi5', t: 'Life & PPLI' }, { k: 'contact', star: 'pi6', t: 'Barbados' }];
    if (HL) ORDER = SHELL_ORDER;
    function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
    function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
    function mul(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
    function nrm(a) { var l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
    function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
    function dot3(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
    // centripetal Catmull-Rom (no overshoot or loops where neighbouring stars sit at very different depths)
    function crom(p0, p1, p2, p3, t) {
      function kn(a, b) { return Math.pow(Math.max(1e-3, Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2])), .5); }
      if (p0 === p1) p0 = sub(p1, sub(p2, p1)); if (p3 === p2) p3 = add(p2, sub(p2, p1));
      var t0 = 0, t1 = t0 + kn(p0, p1), t2 = t1 + kn(p1, p2), t3 = t2 + kn(p2, p3), tt = t1 + (t2 - t1) * t;
      function L(a, b, ta, tb) { var w = (tt - ta) / (tb - ta); return [a[0] + (b[0] - a[0]) * w, a[1] + (b[1] - a[1]) * w, a[2] + (b[2] - a[2]) * w]; }
      var A1 = L(p0, p1, t0, t1), A2 = L(p1, p2, t1, t2), A3 = L(p2, p3, t2, t3), B1 = L(A1, A2, t0, t2), B2 = L(A2, A3, t1, t3);
      return L(B1, B2, t1, t2);
    }
    function trackAt(t) {   // the path itself runs through the bow's stars
      var i = Math.min(Math.floor(t), TRACK.length - 2), u2 = t - i, P = TRACK.map(function (k) { return P3[k]; });
      return crom(P[Math.max(0, i - 1)], P[i], P[i + 1], P[Math.min(P.length - 1, i + 2)], u2);
    }
    // arc-length table, so the camera moves at an even pace whatever the gaps between stars
    var ARC = [{ t: 0, l: 0, p: trackAt(0) }];
    for (var j = 1; j <= 700; j++) { var tt = j / 700 * (TRACK.length - 1), pp = trackAt(tt), lst = ARC[ARC.length - 1]; ARC.push({ t: tt, l: lst.l + Math.hypot(pp[0] - lst.p[0], pp[1] - lst.p[1], pp[2] - lst.p[2]), p: pp }); }
    var TOT = ARC[ARC.length - 1].l;
    var LS = TRACK.map(function (_, i) { var best = 0; ARC.forEach(function (a, n) { if (Math.abs(a.t - i) < Math.abs(ARC[best].t - i)) best = n; }); return ARC[best].l; });
    function lOfStar(i) { return LS[i]; }
    function ptL(L) {
      if (L <= 0) { var t0 = nrm(sub(ARC[3].p, ARC[0].p)); return add(ARC[0].p, mul(t0, L)); }
      if (L >= TOT) { var n = ARC.length - 1, t1 = nrm(sub(ARC[n].p, ARC[n - 3].p)); return add(ARC[n].p, mul(t1, L - TOT)); }
      var lo = 0, hi = ARC.length - 1; while (hi - lo > 1) { var m = (lo + hi) >> 1; if (ARC[m].l < L) lo = m; else hi = m; }
      var w = (L - ARC[lo].l) / (ARC[hi].l - ARC[lo].l || 1); return add(ARC[lo].p, mul(sub(ARC[hi].p, ARC[lo].p), w));
    }
    // a chase camera: a little behind and above the track, looking down it, so the path ahead reads like a road
    var BACK = 240, HIGH = -105, AHEAD = 700;   // the camera rides just under the line, so the road ahead runs down the screen as you scroll down
    function chase(L) {
      var tg = nrm(sub(ptL(L + 140), ptL(L - 140))), up = [0, -1, 0];
      up = nrm(sub(up, mul(tg, dot3(up, tg))));
      var pos = add(add(ptL(L), mul(tg, -BACK)), mul(up, HIGH));
      return { c: pos, f: nrm(sub(ptL(L + AHEAD), pos)) };
    }
    var STAR_I = { pi1: 2, pi2: 3, pi3: 4, pi4: 5, pi5: 6, pi6: 7 };
    var FIELD = []; for (var i = 0; i < 2600; i++) FIELD.push([(rnd() - .5) * 3400, (rnd() - .5) * 2200, rnd() * 3000 - 200, Math.pow(rnd(), 4), TEMP[(rnd() * rnd() * 5) | 0]]);
    return {
      chapters: ORDER, side: 'right', meter: true, shell: { chapters: SHELL_ORDER, map: 'page' },
      draw: function (u, near, hold) {
        var k = Math.min(Math.floor(u), ORDER.length - 2), f = u - k, e = io(sg(f, .18, .82));
        function stopL(i) { var ch = ORDER[i]; return ch.k === 'home' ? 0 : lOfStar(STAR_I[ch.star || ch.k]); }
        var Lc = lp(stopL(k), stopL(k + 1), e); if (u >= ORDER.length - 1) Lc = stopL(ORDER.length - 1);
        var ch0 = chase(Lc), C = ch0.c, fw = ch0.f;
        if (k === 0 && u < 1) {   // leaving home: ease from the B11 view onto the track
          var bl = ss(sg(e, 0, .55)); C = add(mul([0, 0, 0], 1 - bl), mul(ch0.c, bl)); fw = nrm(add(mul([0, 0, 1], 1 - bl), mul(ch0.f, bl)));
        }
        var n = 1 + Lc / TOT * (TRACK.length - 1);
        var rt = nrm(cross([0, 1, 0], fw)), dn = cross(fw, rt);
        var away = sg(u, 0, .7), cx = lp(640, FOCUSX, away), cy = lp(360, HL ? 560 : 460, away);
        function P(p) { var d = sub(p, C), zc = dot3(d, fw); if (zc < 18) return null; return [cx + dot3(d, rt) * F / zc, cy + dot3(d, dn) * F / zc, zc]; }
        var NEAR = 26;
        function V(p) { var d = sub(p, C); return [dot3(d, rt), dot3(d, dn), dot3(d, fw)]; }
        function seg(a, b) {   // a 3D segment clipped to the near plane, in screen space; null if wholly behind
          var A = V(a), B = V(b);
          if (A[2] < NEAR && B[2] < NEAR) return null;
          if (A[2] < NEAR) { var w = (NEAR - A[2]) / (B[2] - A[2]); A = [A[0] + (B[0] - A[0]) * w, A[1] + (B[1] - A[1]) * w, NEAR]; }
          if (B[2] < NEAR) { var w2 = (NEAR - B[2]) / (A[2] - B[2]); B = [B[0] + (A[0] - B[0]) * w2, B[1] + (A[1] - B[1]) * w2, NEAR]; }
          return [cx + A[0] * F / A[2], cy + A[1] * F / A[2], cx + B[0] * F / B[2], cy + B[1] * F / B[2], Math.min(A[2], B[2])];
        }
        // far sky turns with the camera; the near field moves in true 3D
        var yaw = Math.atan2(fw[0], fw[2]), pitch = Math.asin(cl(fw[1], -1, 1));
        drawSky(-yaw * 1400 - (cx - 640) * 2, -pitch * 1400 - (cy - 360) * 2, .75);
        FIELD.forEach(function (s) { var q = P(s); if (!q || q[0] < -10 - OXS || q[0] > W + 10 + OXS || q[1] < -10 || q[1] > H + 10) return; var r = cl(.35 + 90 / q[2], .35, 2.4); dot(q[0], q[1], r, (.15 + .4 * s[3]) * sg(q[2], 18, 160) * (1 - sg(q[2], 2400, 3200)), s[4]); });
        // Orion's figure, fading back as we go in; the bow is drawn as the track
        var figA = lp(1, .2, away);
        c.lineWidth = 1;
        LINES.forEach(function (L) {
          if (TRACK.indexOf(L[0]) >= 0 && TRACK.indexOf(L[1]) >= 0 && away > .02) return;
          var q = seg(P3[L[0]], P3[L[1]]); if (!q) return;
          c.strokeStyle = rgba(DUSK, .4 * figA * (u < .02 ? 1 : sg(q[4], 60, 700))); c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[2], q[3]); c.stroke();
        });
        // the track: the whole bow faintly ahead, the part travelled in brass
        var doneL = Lc, reveal = HL ? sg(SHELLR, .55, 1) : 0, trA = Math.max(sg(u, 0, .5), .8 * reveal), L0 = lOfStar(2), Lend = u < .02 ? lp(L0, TOT, reveal) : TOT;
        if (trA > 0) {
          for (var pass = 0; pass < 2; pass++) {
            var prev = ptL(L0);
            for (var L2 = L0 + 8; L2 <= Lend + 1e-6; L2 += 8) {
              var cur3 = ptL(L2), q = seg(prev, cur3); prev = cur3; if (!q) continue;
              var trav = L2 <= doneL + 1, prox = sg(q[4], NEAR, 110);   // the track fades out as it passes the camera, so it never slices the screen
              if (prox <= 0) continue;
              c.strokeStyle = trav ? rgba('168,130,58', (pass ? .95 : .18) * trA * prox) : rgba(DUSK, (pass ? .4 : .07) * trA * prox);
              c.lineWidth = (pass ? 1.3 : 6) * cl(500 / q[4], .6, 2.6); c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[2], q[3]); c.stroke();
            }
          }
        }
        // the stars, each in its true colour; the bow's stars swell as the camera reaches them
        var cur = ORDER[near].star || ORDER[near].k, LBL = [];
        var STOPT = {}; ORDER.forEach(function (o) { if (o.k !== 'home') STOPT[o.star || o.k] = o.t; });
        Object.keys(P3).forEach(function (key) {
          var q = P(P3[key]); if (!q) return; var b = oriB(key), r = (1 + 1.6 * b) * cl(380 / q[2], .55, 15) * (key === cur ? 1 + .6 * hold : 1), col = COL[key] || (key === 'betel' ? '255,200,160' : '226,234,255');
          star(q[0], q[1], r, sg(q[2], 18, 70), col);
          var ti = TRACK.indexOf(key);
          if (ti >= 2 && key !== cur && away > .3 && q[2] > 60) {   // the stops still ahead (and behind) carry a small station ring
            var ahead = lOfStar(ti) > Lc; c.strokeStyle = ahead ? rgba(IVORY, .38 * away) : rgba('168,130,58', .45 * away); c.lineWidth = 1; c.beginPath(); c.arc(q[0], q[1], Math.max(4, r * 2.2), 0, 6.2832); c.stroke();
            var nxt = ORDER[Math.min(near + 1, ORDER.length - 1)], isNext = ahead && (nxt.star || nxt.k) === key;
            // every star on the line is named: the stops by their section, the stars passed on the way by their designation
            LBL.push({ x: q[0] + Math.max(4, r * 2.2) + 9, y: q[1], z: q[2], txt: (SUP[key] || '') + '  ' + (STOPT[key] ? STOPT[key] : 'Orionis') + (key === 'pi3' ? ' · Tabit' : ''), a: (isNext ? .8 : STOPT[key] ? (ahead ? .55 : .4) : .32) * away, pri: isNext ? 0 : STOPT[key] ? 1 : 2 });
          }
          if (key === cur && hold > .3 && P3[key]) { c.strokeStyle = rgba('168,130,58', hold); c.lineWidth = 1.2; c.beginPath(); c.arc(q[0], q[1], r * 3.3 + 10, 0, 6.2832); c.stroke(); }
        });
        LBL.sort(function (a, b2) { return a.pri - b2.pri || a.z - b2.z; });
        var placed = []; c.font = '600 10px Manrope, system-ui, sans-serif'; c.textBaseline = 'middle';
        LBL.forEach(function (l) {
          if (l.x > W - 150 || l.y < 96 || l.y > H - 40) return;
          if (placed.some(function (p2) { return Math.abs(p2.y - l.y) < 15 && Math.abs(p2.x - l.x) < 170; })) return;
          placed.push(l); c.fillStyle = rgba(DUSK, l.a); c.fillText(l.txt.toUpperCase().split('').join(String.fromCharCode(8202)), l.x, l.y);
        });
        lock(1 - sg(u, 0, .22), 0, 0, 1 + .25 * sg(u, 0, .22));
        var at = 0; for (var ai = 0; ai < ARC.length && ARC[ai].l < Lc; ai++) at = ARC[ai].t;
        var i0 = Math.floor(at), i1 = Math.min(TRACK.length - 1, i0 + 1), ly = lp(ORI[TRACK[i0]][2], ORI[TRACK[i1]][2], at - i0); if (u < .05) ly = ORI[TRACK[0]][2];
        meterTxt = meter.textContent = hold > .5 && ORDER[near].k !== 'home' ? (SUP[cur] || '') + ' Orionis · ' + lyTxt(cur) + ' from Earth' : 'Travelling · ' + Math.round(cl(ly, 20, 2000)).toLocaleString('en-GB') + ' light years';
      }
    };
  })();

  // =========================================================================================== AS8 · The constellation draws itself
  // Ten Years Away's "panels arrive" and ERA's zoom into one detailed image: each chapter draws its part of the real figure
  // in brass, the camera eases onto it; at the end the finished figure is the sitemap.
  scenes.draws = (function () {
    var PART = { mintaka: [['bella', 'mintaka'], ['mintaka', 'eta'], ['eta', 'tau'], ['tau', 'rigel']], alnilam: [['mintaka', 'alnilam'], ['alnilam', 'alnitak']], alnitak: [['alnitak', 'saiph'], ['betel', 'alnitak']], meissa: [['bella', 'meissa'], ['meissa', 'betel'], ['betel', 'bella']], contact: [['pi3', 'bella'], ['pi3', 'pi2'], ['pi2', 'pi1'], ['pi3', 'pi4'], ['pi4', 'pi5'], ['pi5', 'pi6']] };
    return {
      side: 'right',
      draw: function (u, near, hold) {
        var k = Math.floor(u), f = u - k, e = io(sg(f, .2, .9));
        function focus(i) { var ch = CH[i]; if (ch.k === 'home' || ch.k === 'contact') return [640, 360, 1]; var segs = PART[ch.k], xs = [], ys = []; segs.forEach(function (s) { s.forEach(function (q) { xs.push(ORI[q][0]); ys.push(ORI[q][1]); }); }); return [(Math.min.apply(0, xs) + Math.max.apply(0, xs)) / 2, (Math.min.apply(0, ys) + Math.max.apply(0, ys)) / 2, 1.9]; }
        var a = focus(k), b = focus(Math.min(k + 1, CH.length - 1)), fx = lp(a[0], b[0], e), fy = lp(a[1], b[1], e), s = lp(a[2], b[2], e);
        var tx = 420 - fx * s, ty = 380 - fy * s; if (s < 1.05) { tx = lp(0, tx, (s - 1) / .9); ty = lp(0, ty, (s - 1) / .9); }
        drawSky(tx * .3, ty * .3, 1);
        c.save(); c.translate(tx, ty); c.scale(s, s);
        drawOrion(1, null, .55);
        // the drawn lines: every finished chapter stays drawn; the current one draws with the scroll
        c.lineWidth = 1.6 / s; c.strokeStyle = BRASS;
        CH.forEach(function (ch, i) {
          var segs = PART[ch.k]; if (!segs) return; var p = i < u ? Math.min(1, (u - i + 1) / 1) : 0; if (i > u + 1) return;
          var pr = i <= Math.floor(u) ? 1 : sg(f, .2, .9); if (i <= k) pr = 1; else if (i === k + 1) pr = sg(f, .2, .9); else pr = 0;
          segs.forEach(function (sgm, j) { var q = sg(pr * segs.length - j, 0, 1); if (q <= 0) return; var A = ORI[sgm[0]], B = ORI[sgm[1]]; c.beginPath(); c.moveTo(A[0], A[1]); c.lineTo(lp(A[0], B[0], q), lp(A[1], B[1], q)); c.stroke(); });
        });
        c.restore();
        lock(ch_is(near, 'home') || ch_is(near, 'contact') ? 1 - sg(Math.abs(u - near), .05, .3) : 0);
        if (ch_is(near, 'contact')) { placePanel('centre', 470); } else placePanel('right', 250);
      }
    };
  })();
  function ch_is(i, k) { return CH[i] && CH[i].k === k; }

  // =========================================================================================== AS9 · Orbit Tabit
  // IVRESS's closed loop and Messenger's small world you can turn: the camera swings round Tabit as you scroll; Orion's
  // flat figure opens into its true depth, then closes back into the familiar shape at Contact.
  scenes.orbit = (function () {
    var F = 800, R = 1600;
    function rel(k) { return 260 * Math.log(ORI[k][2] / 26 + 1) / Math.LN10 * 2.4; }
    var P3 = {}; Object.keys(ORI).forEach(function (k) { var z = R + rel(k); P3[k] = [(ORI[k][0] - 640) * z / F, (ORI[k][1] - 360) * z / F, z]; });
    var piv = P3.pi3;
    var FIELD = []; for (var i = 0; i < 900; i++) { var z = R + (rnd() - .3) * 2400; FIELD.push([(rnd() - .5) * 2.6 * z, (rnd() - .5) * 1.6 * z, z, Math.pow(rnd(), 4)]); }
    function proj(p, th) { var x = p[0] - piv[0], z = p[2] - piv[2]; var xr = x * Math.cos(th) - z * Math.sin(th), zr = x * Math.sin(th) + z * Math.cos(th); var X = xr + piv[0], Z = zr + piv[2]; if (Z < 60) return null; return [640 + X * F / Z, 360 + p[1] * F / Z, Z]; }
    return {
      side: 'right', meter: true,
      draw: function (u, near, hold) {
        var p = u / (CH.length - 1), th = Math.sin(Math.PI * p) * 1.15 * (p < .5 ? 1 : 1);   // swings out to ~66° and home again
        drawSky(-th * 260, 0, .8);
        FIELD.forEach(function (s) { var q = proj(s, th); if (!q || q[0] < -10 - OXS || q[0] > W + 10 + OXS || q[1] < -10 || q[1] > H + 10) return; dot(q[0], q[1], .5 + .8 * s[3], .3 + .6 * s[3]); });
        drawOrion(1, function (k) { var q = proj(P3[k], th); return q ? [q[0], q[1]] : null; }, 1);
        var ch = CH[near]; if (ORI[ch.k] && hold > .3) { var q = proj(P3[ch.k], th); if (q) { c.strokeStyle = rgba('168,130,58', hold); c.lineWidth = 1.2; c.beginPath(); c.arc(q[0], q[1], 14, 0, 6.2832); c.stroke(); } }
        lock(1 - sg(th, 0, .12));
        meterTxt = meter.textContent = 'Viewing Orion from ' + Math.round(th * 57.3) + '° round Tabit';
        if (ch_is(near, 'contact')) placePanel('centre', 470); else placePanel('right', 250);
      }
    };
  })();

  // =========================================================================================== AS10 · Star trails
  // Ten Years Away's scroll-speed shader (slow = soft clusters, fast = streaks) applied to a long exposure: scrolling turns
  // the sky and every star draws an arc; Tabit alone holds still. The idea of the name, shown rather than said.
  scenes.trails = (function () {
    var PX = 640, PY = -1500;
    var TR = SKY.filter(function (s, i) { return i % 2 === 0; });
    return {
      side: 'right',
      draw: function (u, near, hold) {
        var p = u / (CH.length - 1), ang = .34 * ss(sg(p, 0, 1)) + .02 * sg(S.vel, 0, 2);
        function arc(x, y, a, w, col) { var dx = x - PX, dy = y - PY, r = Math.hypot(dx, dy), a0 = Math.atan2(dy, dx); c.strokeStyle = rgba(col, a); c.lineWidth = w; c.beginPath(); c.arc(PX, PY, r, a0, a0 + ang); c.stroke(); }
        c.lineCap = 'round';
        TR.forEach(function (s) { var x = s.x, y = s.y; if (x < -400 || x > W + 400 || y < -50 || y > H + 50) return; if (ang < .002) dot(x, y, .5 + .9 * s.b, .25 + .7 * s.b, s.col); else arc(x, y, (.15 + .6 * s.b) * lp(1, .7, sg(ang, 0, .3)), .6 + 1.3 * s.b, s.col); });
        Object.keys(ORI).forEach(function (k) { if (k === 'pi3') return; var b = oriB(k); if (ang < .002) return; arc(ORI[k][0], ORI[k][1], .5 + .45 * b, 1 + 1.6 * b, '232,238,255'); });
        drawOrion(1 - sg(ang, 0, .05), null, 1);
        // Tabit never moves: the fixed point of the whole picture
        star(ORI.pi3[0], ORI.pi3[1], 3.2, 1, '255,248,232');
        if (ang > .02) { c.strokeStyle = rgba('168,130,58', .9); c.lineWidth = 1.2; c.beginPath(); c.arc(ORI.pi3[0], ORI.pi3[1], 13, 0, 6.2832); c.stroke(); }
        lock(ch_is(near, 'home') ? 1 - sg(u, 0, .3) : ch_is(near, 'contact') ? sg(u, CH.length - 1.4, CH.length - 1) : 0);
        if (ch_is(near, 'contact')) placePanel('centre', 470); else placePanel('right', 250);
      }
    };
  })();

  // =========================================================================================== AS11 · Gravitational lens
  // The splash's black-hole cursor becomes the scroll. Each chapter break passes through the lens's edge (a short
  // controlled swirl, the "tumble"); content emerges from the bend.
  scenes.lens = (function () {
    return {
      side: 'right',
      draw: function (u, near, hold) {
        var k = Math.floor(u), f = u - k, e = io(sg(f, .1, .9)), swell = Math.sin(Math.PI * e);
        var lx = 400, ly = 370 + 40 * Math.sin(u * 1.7), rad = (u < .3 ? 70 * sg(u, 0, .3) : 70) + 760 * Math.pow(swell, 2);
        var E = rad * .65, swirl = 2.4 * swell;
        function lensMap(x, y) { var dx = x - lx, dy = y - ly, r = Math.hypot(dx, dy) || .001; if (r < rad * .55) return null; var rl = .5 * (r + Math.sqrt(r * r + 4 * E * E)), tw = swirl * E / (r + E); var ca = Math.cos(tw), sa = Math.sin(tw), ux = dx / r, uy = dy / r; return [lx + (ux * ca - uy * sa) * rl, ly + (ux * sa + uy * ca) * rl]; }
        drawSky(0, -u * 60, 1, lensMap);
        if (u < 1.1) drawOrion(1 - sg(u, .1, .8), function (q) { return lensMap(ORI[q][0], ORI[q][1]); }, 1);
        // the photon ring and the dark centre
        var g = c.createRadialGradient(lx, ly, rad * .45, lx, ly, rad * 1.2); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(.42, 'rgba(0,0,0,1)'); g.addColorStop(.5, rgba('255,236,210', .55)); g.addColorStop(.58, rgba('255,236,210', .08)); g.addColorStop(1, 'rgba(0,0,0,0)');
        c.fillStyle = g; c.beginPath(); c.arc(lx, ly, rad * 1.2, 0, 6.2832); c.fill();
        lock(1 - sg(u, 0, .25));
        if (ch_is(near, 'contact')) placePanel('right', 250); else placePanel('right', 250);
      }
    };
  })();

  // =========================================================================================== AS12 · Stars become the diagrams
  // Igloo's links section (particles swirl into the shape of what you choose): the starfield streams into each section's
  // explanation and scatters back into sky between chapters.
  scenes.diagrams = (function () {
    var N = 900, PTS = [];
    function sample(drawFn) {
      var o = document.createElement('canvas'); o.width = 520; o.height = 420; var g = o.getContext('2d'); g.fillStyle = '#fff'; g.strokeStyle = '#fff'; drawFn(g);
      var d = g.getImageData(0, 0, 520, 420).data, pts = []; for (var y = 0; y < 420; y += 3) for (var x = 0; x < 520; x += 3) if (d[(y * 520 + x) * 4 + 3] > 120) pts.push([x, y]);
      var out = []; for (var i = 0; i < N; i++) { var p = pts[Math.floor(rnd() * pts.length)] || [260, 210]; out.push([(HL ? 680 : 640) + p[0], 150 + p[1]]); } return out;
    }
    var SH = {
      home: null,
      mintaka: sample(function (g) { g.lineWidth = 14; g.beginPath(); g.arc(190, 210, 120, 0, 6.2832); g.stroke(); g.beginPath(); g.arc(330, 210, 120, 0, 6.2832); g.stroke(); }),
      alnilam: sample(function (g) { [160, 115, 70].forEach(function (r, i) { g.lineWidth = [10, 8, 6][i]; g.beginPath(); g.arc(260, 210, r, 0, 6.2832); g.stroke(); }); g.beginPath(); g.arc(260, 210, 22, 0, 6.2832); g.fill(); }),
      alnitak: sample(function (g) { g.lineWidth = 10; g.beginPath(); g.moveTo(30, 330); g.bezierCurveTo(180, 320, 300, 200, 490, 80); g.stroke(); for (var x = 40; x < 500; x += 60) g.fillRect(x, 352, 6, 22); g.fillRect(20, 380, 480, 6); }),
      meissa: sample(function (g) { g.font = '800 300px Manrope, Arial, sans-serif'; g.textAlign = 'center'; g.fillText('AI', 260, 320); }),
      ai: sample(function (g) {   // a small network: three layers of nodes, every node joined to the next layer
        var L = [[90, [110, 210, 310]], [260, [70, 160, 250, 340]], [430, [130, 290]]]; g.lineWidth = 3;
        for (var a = 0; a < 2; a++) L[a][1].forEach(function (y1) { L[a + 1][1].forEach(function (y2) { g.beginPath(); g.moveTo(L[a][0], y1); g.lineTo(L[a + 1][0], y2); g.stroke(); }); });
        L.forEach(function (l) { l[1].forEach(function (y) { g.beginPath(); g.arc(l[0], y, 22, 0, 6.2832); g.fill(); }); }); }),
      contact: sample(function (g) { g.translate(260, 210); g.scale(.8, .8); g.translate(-247.9, -193.2); g.fill(new Path2D(LOGO.mark), 'evenodd'); })
    };
    var SHELL_ORDER = [{ k: 'home', t: 'Home' }, { k: 'ai', t: 'AI' }, { k: 'alnilam', t: 'Capital' }, { k: 'alnitak', t: 'Life & PPLI' }, { k: 'contact', t: 'Barbados' }];
    var P = []; for (var i = 0; i < N; i++) { var s = SKY[(i * 7) % SKY.length]; P.push({ hx: s.x, hy: s.y, d: rnd() * .3, w: (rnd() - .5) * 2 }); }
    function shapeAt(i, j) { var sh = SH[CH[i].k]; if (!sh) return [P[j].hx, P[j].hy]; return sh[j]; }
    return {
      side: 'right', shell: { chapters: SHELL_ORDER, map: 'page' },
      draw: function (u, near, hold) {
        drawSky(0, 0, .55);
        var k = Math.floor(u), f = u - k;
        if (u < .02) drawOrion(1);
        else drawOrion(1 - sg(u, 0, .4));
        c.globalCompositeOperation = 'lighter';
        P.forEach(function (o, j) {
          var a = shapeAt(k, j), b = shapeAt(Math.min(k + 1, CH.length - 1), j), q = io(sg(f, .15 + o.d, .65 + o.d));
          var mx = (a[0] + b[0]) / 2 + o.w * 120 * Math.sin(Math.PI * q), my = (a[1] + b[1]) / 2 - 80 * Math.sin(Math.PI * q);   // a gentle curl on the way
          var x = (1 - q) * (1 - q) * a[0] + 2 * (1 - q) * q * mx + q * q * b[0], y = (1 - q) * (1 - q) * a[1] + 2 * (1 - q) * q * my + q * q * b[1];
          var inShape = (CH[k].k !== 'home' && q < .5) || (CH[Math.min(k + 1, CH.length - 1)].k !== 'home' && q >= .5);
          dot(x, y, inShape ? 1.3 : .8, inShape ? .85 : .5, inShape ? IVORY : '220,226,246');
        });
        c.globalCompositeOperation = 'source-over';
        lock(ch_is(near, 'home') ? 1 - sg(u, 0, .25) : 0);
        placePanel('left', 250);
      }
    };
  })();

  // =========================================================================================== AS13 · Powers of ten
  // ERA's scroll zoom into a detailed image, taken all the way: from the constellation down to the planet, the island, the
  // town and finally a single document on a desk. Each scale is a chapter.
  scenes.powers = (function () {
    function layer(i, s, a) {
      if (a <= .01 || s < .02 || s > 60) return;
      c.save(); c.translate(640, 360); c.scale(s, s); c.globalAlpha = a;
      if (i === 0) { c.restore(); c.save(); c.globalAlpha = a; c.translate(640, 360); c.scale(s, s); c.translate(-512, -360); drawOrion(1); c.restore(); return; }
      if (i === 1) { var g = c.createRadialGradient(-60, -60, 20, 0, 0, 240); g.addColorStop(0, '#2a3d6e'); g.addColorStop(1, '#0a1230'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, 220, 0, 6.2832); c.fill(); c.fillStyle = 'rgba(255,214,150,.8)'; var sd = 5; for (var j = 0; j < 120; j++) { sd = (sd * 16807) % 2147483647; var r1 = sd / 2147483647; sd = (sd * 16807) % 2147483647; var r2 = sd / 2147483647; var rr = 200 * Math.sqrt(r1), an = r2 * 6.28; c.fillRect(rr * Math.cos(an), rr * Math.sin(an), 1.6, 1.6); } c.strokeStyle = 'rgba(168,130,58,.9)'; c.lineWidth = 1.5 / s; c.beginPath(); c.arc(0, 0, 6, 0, 6.2832); c.stroke(); }
      if (i === 2) { c.fillStyle = '#16244d'; c.beginPath(); c.moveTo(-40, -150); c.bezierCurveTo(60, -140, 90, -40, 70, 60); c.bezierCurveTo(50, 150, -20, 170, -60, 120); c.bezierCurveTo(-90, 60, -100, -60, -40, -150); c.fill(); c.strokeStyle = 'rgba(184,192,212,.6)'; c.lineWidth = 1 / s; c.stroke(); c.fillStyle = BRASS; c.beginPath(); c.arc(0, 0, 4, 0, 6.2832); c.fill(); }
      if (i === 3) { c.strokeStyle = 'rgba(184,192,212,.5)'; c.lineWidth = 1 / s; for (var gx = -200; gx <= 200; gx += 40) { c.beginPath(); c.moveTo(gx, -160); c.lineTo(gx + 20, 160); c.stroke(); } for (var gy = -160; gy <= 160; gy += 40) { c.beginPath(); c.moveTo(-200, gy); c.lineTo(200, gy + 10); c.stroke(); } c.strokeStyle = 'rgba(246,242,234,.8)'; c.beginPath(); c.moveTo(-220, 120); c.bezierCurveTo(-80, 90, 60, 140, 220, 100); c.stroke(); c.fillStyle = BRASS; c.fillRect(-6, -6, 12, 12); }
      if (i === 4) { c.strokeStyle = 'rgba(246,242,234,.7)'; c.lineWidth = 1.5 / s; c.strokeRect(-180, -110, 360, 220); c.beginPath(); c.moveTo(-40, -110); c.lineTo(-40, 110); c.moveTo(-40, 0); c.lineTo(180, 0); c.stroke(); c.fillStyle = 'rgba(246,242,234,.12)'; c.fillRect(-20, -20, 40, 26); }
      if (i === 5) { c.fillStyle = '#F4EFE6'; c.fillRect(-60, -80, 120, 160); c.fillStyle = 'rgba(9,21,74,.5)'; for (var ly = -50; ly < 60; ly += 10) c.fillRect(-44, ly, 88 - (ly % 20 ? 20 : 0), 2); c.save(); c.translate(0, -66); c.scale(.04, .04); c.translate(-247.9, -193.2); c.fillStyle = 'rgba(9,21,74,.8)'; c.fill(new Path2D(LOGO.mark), 'evenodd'); c.restore(); }
      c.restore();
    }
    var LAB = ['', 'Earth, at night', 'Barbados', 'Bridgetown', 'The office', 'The document'];
    return {
      side: 'right', meter: true,
      draw: function (u, near, hold) {
        drawSky(0, 0, 1 - sg(u, .3, 1.2) * .7);
        for (var i = 0; i < CH.length; i++) { var s = Math.pow(10, (u - i) * 1.2), a = sg(s, .06, .3) * (1 - sg(s, 4, 14)); if (i === 0) a = 1 - sg(u, .35, .9); layer(i, i === 0 ? s : s, a); }
        lock(1 - sg(u, 0, .25), 0, 0, Math.pow(10, u * 1.2));
        meterTxt = meter.textContent = LAB[near] || '';
      }
    };
  })();

  // =========================================================================================== AS14 · The night passes
  // Aten7's living world (dynamic seasons, an interactive timeline): scrolling runs one night over Bridgetown. Orion
  // rises at dusk, crosses and sets at dawn; a clock is the progress bar.
  scenes.night = (function () {
    var HOURS = ['', '19:00', '22:00', '00:30', '03:00', '05:40'];
    return {
      side: 'right', meter: true,
      draw: function (u, near, hold) {
        var tilt = 220 * sg(u, 0, .8), p = sg(u, .6, CH.length - 1), rot = lp(-.5, .5, p), dawn = sg(p, .72, 1), dusk = 1 - sg(p, 0, .25);
        var g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgb(' + Math.round(lp(4, 40, dawn)) + ',' + Math.round(lp(7, 52, dawn)) + ',' + Math.round(lp(15, 96, dawn)) + ')');
        g.addColorStop(1, 'rgb(' + Math.round(lp(4, 196, dawn) + 30 * dusk * sg(u, .2, .8)) + ',' + Math.round(lp(7, 150, dawn) + 18 * dusk * sg(u, .2, .8)) + ',' + Math.round(lp(15, 120, dawn)) + ')'); c.fillStyle = g; c.fillRect(0, 0, W, H);
        var CX = 640, CY = 2600 - tilt;
        function rotP(x, y) { var dx = x - CX, dy = y + (-tilt) + 900 * sg(u, 0, .8) * 0 - CY, a = rot, ca = Math.cos(a), sa = Math.sin(a); var X = CX + dx * ca - dy * sa, Y = CY + dx * sa + dy * ca; return [X, Y]; }
        var starA = 1 - .8 * dawn, hz = 720 - 150 * sg(u, 0, .8);
        drawSky(0, 0, starA, function (x, y) { var q = rotP(x, y); return q[1] < hz ? q : null; });
        var oriShift = function (k) { var q = rotP(ORI[k][0] + 400 * sg(u, .2, .8), ORI[k][1] + 120 * sg(u, .2, .8)); return q[1] < hz - 6 ? q : null; };
        drawOrion(starA, u < .2 ? null : oriShift, 1);
        if (hz < 720) { var sea = c.createLinearGradient(0, hz, 0, H); sea.addColorStop(0, 'rgba(' + Math.round(lp(10, 120, dawn)) + ',' + Math.round(lp(16, 110, dawn)) + ',' + Math.round(lp(36, 120, dawn)) + ',1)'); sea.addColorStop(1, '#03050c'); c.fillStyle = sea; c.fillRect(0, hz, W, H - hz); c.fillStyle = 'rgba(8,12,24,.95)'; c.beginPath(); c.moveTo(0, hz); for (var x = 0; x <= W; x += 40) c.lineTo(x, hz - 6 - 10 * Math.abs(Math.sin(x * .013)) - (x > 380 && x < 700 ? 14 + 10 * Math.sin(x * .1) : 0)); c.lineTo(W, hz); c.fill(); }
        lock(1 - sg(u, 0, .25));
        meterTxt = meter.textContent = HOURS[near] ? 'Bridgetown · ' + HOURS[near] : '';
      }
    };
  })();

  // =========================================================================================== AS14.2 · The night passes
  // One real night over Bridgetown (8 December, when Orion rises at dusk and sets at dawn), worked out properly: every star
  // sits at its true position for the hour, so the sky turns the way it really does from 13° north (rising in the east,
  // climbing over the south, setting in the west). Orion's neighbours come and go with it: Taurus and the Pleiades lead,
  // Sirius and Canopus follow, Gemini rides above, the moon sets over Carlisle Bay. Scrolling is the clock.
  scenes.night2 = (function () {
    var LAT = 13.1 * Math.PI / 180, LON = -59.62, JD0 = 2461382.5, RAD = Math.PI / 180, FPX = 480;
    function lstAt(h) { var D = JD0 - 2451545 + (h + 4) / 24; return ((18.697374558 + 24.06570982441908 * D + LON / 15) % 24 + 24) % 24; }
    function hor(ra, dec, L) {   // horizon vector [east, north, up] for RA (h), Dec (deg) at sidereal time L
      var H = (L - ra) * 15 * RAD, d = dec * RAD, cd = Math.cos(d);
      return [-cd * Math.sin(H), Math.sin(d) * Math.cos(LAT) - cd * Math.sin(LAT) * Math.cos(H), Math.sin(d) * Math.sin(LAT) + cd * Math.cos(LAT) * Math.cos(H)];
    }
    // Orion (the B11 stars) in RA / Dec
    var OEQ = { betel: [5.9195, 7.407], rigel: [5.2423, -8.202], bella: [5.4189, 6.350], mintaka: [5.5334, -0.299], alnilam: [5.6036, -1.202], alnitak: [5.6793, -1.943], saiph: [5.7959, -9.670],
      meissa: [5.5856, 9.934], pi1: [4.9149, 10.151], pi2: [4.8435, 8.900], pi3: [4.8307, 6.961], pi4: [4.8535, 5.605], pi5: [4.9042, 2.441], pi6: [4.9758, 1.714], mu: [6.0397, 9.648],
      nu: [6.1263, 14.768], xi: [6.2002, 14.209], chi1: [5.9065, 20.276], chi2: [6.0657, 20.138], omi2: [4.9395, 13.514], o11: [5.0762, 15.404], eta: [5.4078, -2.397], tau: [5.2932, -6.845] };
    // the neighbours: [RA h, Dec deg, magnitude, colour]
    var NB = {
      ald: [4.5987, 16.509, .87, '255,206,160'], elnath: [5.4382, 28.608, 1.65], zetT: [5.6274, 21.143, 3.0], gamT: [4.3297, 15.628, 3.65], delT: [4.3825, 17.543, 3.76], epsT: [4.4769, 19.180, 3.53], the2T: [4.4777, 15.871, 3.4], lamT: [4.0110, 12.490, 3.4],
      alcy: [3.7914, 24.105, 2.87], atlas: [3.8193, 24.053, 3.62], elec: [3.7479, 24.113, 3.7], maia: [3.7636, 24.368, 3.87], merope: [3.7721, 23.948, 4.18], tayg: [3.7535, 24.467, 4.3], pleio: [3.8196, 24.137, 5.0],
      sirius: [6.7525, -16.716, -1.46, '226,236,255'], mirzam: [6.3783, -17.956, 1.98], adhara: [6.9771, -28.972, 1.5], wezen: [7.1399, -26.393, 1.83], aludra: [7.4016, -29.303, 2.45], furud: [6.3385, -30.063, 3.0], omi2C: [7.0501, -23.833, 3.0], iotC: [6.9356, -17.054, 4.4], mulip: [7.0624, -15.633, 4.1],
      procyon: [7.6550, 5.225, .34, '255,248,228'], gomeisa: [7.4527, 8.289, 2.9],
      castor: [7.5767, 31.888, 1.58], pollux: [7.7553, 28.026, 1.14, '255,214,170'], alhena: [6.6285, 16.399, 1.9], mebsuta: [6.7322, 25.131, 3.0], tejat: [6.3827, 22.514, 2.87], propus: [6.2479, 22.507, 3.3], wasat: [7.3354, 21.982, 3.5], mekbuda: [7.0685, 20.570, 3.9],
      arneb: [5.5455, -17.822, 2.58], nihal: [5.4709, -20.759, 2.84], epsL: [5.0913, -22.371, 3.19], muL: [5.2156, -16.205, 3.3], gamL: [5.7445, -22.448, 3.6], delL: [5.8555, -20.879, 3.8],
      canopus: [6.3992, -52.696, -.74, '255,250,236'],
      acrux: [12.4433, -63.099, .77, '220,230,255'], mimosa: [12.7954, -59.689, 1.25, '220,230,255'], gacrux: [12.5194, -57.113, 1.6, '255,210,170'], delCr: [12.2524, -58.749, 2.8],
      rigilK: [14.6600, -60.835, -.27, '255,240,214'], hadar: [14.0637, -60.373, .61, '220,230,255'],
      capella: [5.2782, 45.998, .08, '255,240,200'], menkal: [5.9921, 44.948, 1.9], hassal: [4.9499, 33.166, 2.69],
      achernar: [1.6286, -57.237, .46, '220,230,255'], fomal: [22.9608, -29.622, 1.16], hamal: [2.1196, 23.463, 2.0, '255,214,176'], sheratan: [1.9107, 20.808, 2.64], menkar: [3.0380, 4.090, 2.5, '255,206,170']
    };
    var NLINES = [['lamT', 'gamT'], ['gamT', 'delT'], ['delT', 'epsT'], ['epsT', 'elnath'], ['gamT', 'the2T'], ['the2T', 'ald'], ['ald', 'zetT'],
      ['mirzam', 'sirius'], ['sirius', 'iotC'], ['iotC', 'mulip'], ['sirius', 'omi2C'], ['omi2C', 'wezen'], ['wezen', 'adhara'], ['adhara', 'furud'], ['wezen', 'aludra'],
      ['procyon', 'gomeisa'], ['castor', 'mebsuta'], ['mebsuta', 'tejat'], ['tejat', 'propus'], ['pollux', 'wasat'], ['wasat', 'mekbuda'], ['mekbuda', 'alhena'], ['castor', 'pollux'],
      ['muL', 'arneb'], ['arneb', 'nihal'], ['nihal', 'epsL'], ['arneb', 'gamL'], ['gamL', 'delL'], ['nihal', 'gamL'],
      ['gacrux', 'acrux'], ['mimosa', 'delCr'], ['capella', 'menkal'], ['capella', 'hassal'], ['hamal', 'sheratan']];
    var LABELS = [['ald', 'Taurus', 14, -14], ['alcy', 'The Pleiades', 12, -12], ['sirius', 'Sirius', 12, 4], ['canopus', 'Canopus', 12, 4], ['procyon', 'Procyon', 12, 4], ['castor', 'Gemini', 12, -12],
      ['arneb', 'Lepus', 12, 4], ['acrux', 'Southern Cross', 14, 4], ['rigilK', 'Alpha Centauri', 12, 4], ['capella', 'Capella', 12, 4], ['betel', 'Orion', -54, -16], ['wezen', 'Canis Major', 12, 4], ['hamal', 'Aries', 12, 4]];
    // the sky behind: faint stars spread over the whole sphere, and the winter Milky Way
    var BG = []; for (var i = 0; i < 2200; i++) BG.push([rnd() * 24, Math.asin(2 * rnd() - 1) / RAD, Math.pow(rnd(), 5), TEMP[(rnd() * rnd() * 5) | 0]]);
    var MW = [];
    (function () {   // galactic plane to RA / Dec (J2000): north galactic pole RA 192.859, Dec 27.128, l of the celestial pole 122.932
      var aP = 192.85948 * RAD, dP = 27.12825 * RAD, lN = 122.93192 * RAD;
      for (var j = 0; j < 2600; j++) {
        var l = rnd() * 360, g = (rnd() + rnd() + rnd() - 1.5) * 9, b = g * RAD, L2 = l * RAD;
        var sd = Math.sin(dP) * Math.sin(b) + Math.cos(dP) * Math.cos(b) * Math.cos(lN - L2), dec = Math.asin(sd);
        var ra = aP + Math.atan2(Math.cos(b) * Math.sin(lN - L2), Math.cos(dP) * Math.sin(b) - Math.sin(dP) * Math.cos(b) * Math.cos(lN - L2));
        var bright = .35 + .65 * Math.pow(Math.max(0, Math.cos((l - 300) * RAD)), 2);   // brighter towards Carina and the Cross, faint at the anticentre by Orion
        MW.push([((ra / RAD / 15) % 24 + 24) % 24, dec / RAD, bright * (1 - Math.abs(g) / 14), rnd()]);
      }
    })();
    var MOON = [2.0, 12.0], SUN = [16.95, -22.7], MOONK = .86;   // a waxing gibbous moon on the ecliptic below Aries, west of Taurus
    // chapters: the clock (local time, hours, running past midnight) and where you are looking [azimuth, altitude]
    var ORDER = [{ k: 'home', t: 'Home', h: 18.33, cam: [118, 0, 630] },
      { k: 'mintaka', t: '(Re)insurance', h: 18.75, cam: [118, 0, 630], kick: '18:45 · Orion rises over the island in the east' },
      { k: 'alnilam', t: 'Capital & cells', h: 21.5, cam: [128, 0, 640], kick: '21:30 · Sirius and Canopus follow it up' },
      { k: 'alnitak', t: 'Life & PPLI', h: 24.5, cam: [225, 78, 300], kick: '00:30 · Orion stands highest, due south' },
      { k: 'meissa', t: 'AI', h: 27.0, cam: [268, 12, 560], kick: '03:00 · The moon sets over Carlisle Bay' },
      { k: 'contact', t: 'Contact', h: 29.0, cam: [280, 0, 610], kick: '05:00 · First light · Orion goes down in the west', head: 'Speak to the team' }];
    // on the Beta site: the sky morphs out of B11 during the hand-off, then one hour per page, with the subject kept right of the copy
    var SHELL_ORDER = [{ k: 'home', t: 'Home', h: 18.33, cam: [62, 0, 630] },
      { k: 'p1', t: 'Home', h: 18.75, cam: [62, 0, 630] },
      { k: 'p2', t: 'AI', h: 21.5, cam: [80, 0, 640] },
      { k: 'p3', t: 'Capital', h: 24.5, cam: [200, 78, 300] },
      { k: 'p4', t: 'Life & PPLI', h: 27.0, cam: [246, 12, 560] },
      { k: 'p5', t: 'Barbados', h: 29.0, cam: [246, 0, 610] }];
    if (HL) ORDER = SHELL_ORDER;
    var COMP = [[90, 'E'], [112.5, 'ESE'], [135, 'SE'], [157.5, 'SSE'], [180, 'S'], [202.5, 'SSW'], [225, 'SW'], [247.5, 'WSW'], [270, 'W'], [292.5, 'WNW']];
    function facing(az) { var n = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west']; return n[Math.round(((az % 360) + 360) % 360 / 45) % 8]; }
    function landH(az) {   // the skyline in degrees: the island to the east (low hills, Bridgetown), sea from the south round to the west
      var a = ((az % 360) + 360) % 360;
      if (a > 30 && a < 160) return .9 + .5 * Math.sin(a * .21) + .3 * Math.sin(a * .77) + .25 * Math.sin(a * 2.3) + (a > 95 && a < 125 ? .35 : 0) * (1 + Math.sin(a * 3.1)) * sg(a, 30, 50) * (1 - sg(a, 140, 160));
      if (a >= 160 && a < 176) return .35 * (1 - sg(a, 168, 176));   // Needham's Point
      return 0;
    }
    var LIGHTS = []; for (var i2 = 0; i2 < 90; i2++) LIGHTS.push([40 + rnd() * 128, rnd(), rnd() * 6.28]);
    return {
      chapters: ORDER, side: 'right', meter: true, shell: { chapters: SHELL_ORDER, map: 'handoff' },
      draw: function (u, near, hold) {
        var k = Math.min(Math.floor(u), ORDER.length - 2), f = u - k, e = io(sg(f, .1, .9));
        if (u >= ORDER.length - 1) { k = ORDER.length - 2; e = 1; }
        var A = ORDER[k], B = ORDER[k + 1], hrs = lp(A.h, B.h, e), L = lstAt(hrs);
        var az0 = lp(A.cam[0], B.cam[0], ss(e)) * RAD, al0 = lp(A.cam[1], B.cam[1], ss(e)) * RAD, PY = lp(A.cam[2], B.cam[2], ss(e));
        var fw = [Math.cos(al0) * Math.sin(az0), Math.cos(al0) * Math.cos(az0), Math.sin(al0)], rt = [Math.cos(az0), -Math.sin(az0), 0];
        var up = [rt[1] * fw[2] - rt[2] * fw[1], rt[2] * fw[0] - rt[0] * fw[2], rt[0] * fw[1] - rt[1] * fw[0]];
        function proj(v) { var cz = v[0] * fw[0] + v[1] * fw[1] + v[2] * fw[2]; if (cz < -.2) return null; var kk = 2 * FPX / (1 + cz); return [640 + kk * (v[0] * rt[0] + v[1] * rt[1] + v[2] * rt[2]), PY - kk * (v[0] * up[0] + v[1] * up[1] + v[2] * up[2])]; }
        function azal(az, al) { var a = az * RAD, b = al * RAD; return [Math.cos(b) * Math.sin(a), Math.cos(b) * Math.cos(a), Math.sin(b)]; }
        var dome = sg(u, .08, .75), b11 = 1 - sg(u, 0, .45);
        // ---- the sky's colour from the sun's real height: dusk glow in the west early on, first light from the east at the end
        var sv = hor(SUN[0], SUN[1], L), sunAlt = Math.asin(sv[2]) / RAD, tw = sg(sunAlt, -19, -4);
        var sunAz = Math.atan2(sv[0], sv[1]), toward = Math.max(0, Math.cos(sunAz - az0));
        var top = [lp(4, 22, tw * .8), lp(7, 34, tw * .8), lp(15, 70, tw * .8)], low = [lp(8, lp(70, 190, toward), tw), lp(12, lp(86, 140, toward), tw), lp(26, lp(130, 140, toward), tw)];
        var g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, 'rgb(' + top.map(Math.round) + ')'); g.addColorStop(.5, 'rgb(' + top.map(function (x, q) { return Math.round(lp(x, low[q], .3)); }) + ')'); g.addColorStop(1, 'rgb(' + low.map(Math.round) + ')');
        c.globalAlpha = dome; c.fillStyle = g; c.fillRect(0, 0, W, H); c.globalAlpha = 1;
        if (b11 > 0) drawSky(0, 0, b11);
        var starA = dome * (1 - .88 * tw);
        // the moon, and how much it washes out the stars near it
        var mv = hor(MOON[0], MOON[1], L), moonAlt = Math.asin(mv[2]) / RAD, mUp = sg(moonAlt, -1, 2);
        function glare(v) { if (mUp <= 0) return 1; var d = Math.acos(cl(v[0] * mv[0] + v[1] * mv[1] + v[2] * mv[2], -1, 1)) / RAD; return lp(1, .35 + .65 * sg(d, 5, 28), mUp); }
        function ext(alt) { return sg(alt, -.5, 7); }   // stars dim into the haze near the horizon
        if (starA > .01) {
          // Milky Way
          for (var i = 0; i < MW.length; i++) { var m = MW[i], v = hor(m[0], m[1], L); if (v[2] < 0) continue; var p = proj(v); if (!p || p[0] < -4 || p[0] > W + 4 || p[1] < -4 || p[1] > H + 4) continue; dot(p[0], p[1], .5 + .7 * m[3], starA * .16 * m[2] * ext(Math.asin(v[2]) / RAD) * glare(v), '214,222,246'); }
          for (var i = 0; i < BG.length; i++) { var s = BG[i], v = hor(s[0], s[1], L); if (v[2] < 0) continue; var p = proj(v); if (!p || p[0] < -4 || p[0] > W + 4 || p[1] < -4 || p[1] > H + 4) continue; var al = starA * (.22 + .7 * s[2]) * ext(Math.asin(v[2]) / RAD) * glare(v) * (.88 + .12 * Math.sin(T * 1.3 + i)); if (s[2] > .5) star(p[0], p[1], .8 + 1.4 * s[2], al * .8, s[3]); else dot(p[0], p[1], .45 + .8 * s[2], al, s[3]); }
        }
        // the neighbouring constellations
        var NP = {};
        Object.keys(NB).forEach(function (key) { var n = NB[key], v = hor(n[0], n[1], L); if (v[2] < -.01) return; var p = proj(v); if (p) NP[key] = [p[0], p[1], Math.asin(v[2]) / RAD, glare(v)]; });
        c.lineWidth = 1;
        NLINES.forEach(function (ln) { var a = NP[ln[0]], b = NP[ln[1]]; if (!a || !b) return; var dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy); if (d < 14 || d > 900) return; var ux = dx / d * 6, uy = dy / d * 6; c.strokeStyle = rgba(DUSK, .26 * starA * Math.min(ext(a[2]), ext(b[2]))); c.beginPath(); c.moveTo(a[0] + ux, a[1] + uy); c.lineTo(b[0] - ux, b[1] - uy); c.stroke(); });
        Object.keys(NP).forEach(function (key) { var n = NB[key], p = NP[key], br = cl(Math.pow(10, -.4 * (n[2] - 1)), .1, 2.4); star(p[0], p[1], .9 + 1.5 * Math.sqrt(br), starA * cl(.4 + .5 * br, .3, 1) * ext(p[2]) * p[3], n[3] || '236,240,255'); });
        // Orion: B11 at the top of the page, easing into its true place in tonight's sky
        var mo = io(sg(u, .05, .85)), OP = {};
        Object.keys(OEQ).forEach(function (key) { var v = hor(OEQ[key][0], OEQ[key][1], L), p = proj(v); if (!p) return; var alt = Math.asin(v[2]) / RAD; if (alt < -.3 && mo > .99) return; OP[key] = [lp(ORI[key][0], p[0], mo), lp(ORI[key][1], p[1], mo), alt]; });
        var oA = lp(1, starA / Math.max(dome, .001) * 1, mo) * (mo > .99 ? 1 : 1);
        drawOrion(cl(oA, 0, 1) * (u < .02 ? 1 : 1), function (key) { var p = OP[key]; if (!p) return null; if (mo > .5 && p[2] < 0) return null; return [p[0], p[1]]; }, lp(1, .9, mo));
        // Tabit, marked quietly
        if (OP.pi3 && mo > .6 && OP.pi3[2] > 1) { var ta = sg(mo, .6, 1) * (1 - .7 * tw); c.strokeStyle = rgba('168,130,58', .8 * ta); c.lineWidth = 1; c.beginPath(); c.arc(OP.pi3[0], OP.pi3[1], 8, 0, 6.2832); c.stroke(); c.font = '600 9px Manrope, system-ui, sans-serif'; c.textBaseline = 'middle'; c.fillStyle = rgba('168,130,58', .85 * ta); c.fillText('T A B I T', OP.pi3[0] + 13, OP.pi3[1]); }
        // labels for the neighbours
        if (dome > .5) {
          c.font = '600 9px Manrope, system-ui, sans-serif'; c.textBaseline = 'middle';
          LABELS.forEach(function (lb) { var p = lb[0] === 'betel' ? OP.betel : NP[lb[0]]; if (!p || p[2] < 3 || p[0] < 20 || p[0] > W - 120 || p[1] < 60 || p[1] > H - 40) return; if (inCopy(p[0], p[1], hold)) return; c.fillStyle = rgba(DUSK, .55 * sg(dome, .5, 1) * (1 - .6 * tw) * ext(p[2])); c.fillText(lb[1].toUpperCase().split('').join(String.fromCharCode(8202)), p[0] + lb[2], p[1] + lb[3]); });
        }
        // the moon: a gibbous moon, lit on the side facing the (set) sun
        var horizonY = null;
        var mp = proj(mv);
        if (mp && moonAlt > -1.2 && dome > 0) {
          var t3 = [sv[0] - mv[0] * (sv[0] * mv[0] + sv[1] * mv[1] + sv[2] * mv[2]), sv[1] - mv[1] * (sv[0] * mv[0] + sv[1] * mv[1] + sv[2] * mv[2]), sv[2] - mv[2] * (sv[0] * mv[0] + sv[1] * mv[1] + sv[2] * mv[2])], tl = Math.hypot(t3[0], t3[1], t3[2]) || 1;
          var q2 = proj([mv[0] + t3[0] / tl * .05, mv[1] + t3[1] / tl * .05, mv[2] + t3[2] / tl * .05]), ang = q2 ? Math.atan2(q2[1] - mp[1], q2[0] - mp[0]) : 0, R = 13;
          var halo = c.createRadialGradient(mp[0], mp[1], 0, mp[0], mp[1], 170); halo.addColorStop(0, rgba('240,236,224', .16 * dome)); halo.addColorStop(1, rgba('240,236,224', 0)); c.fillStyle = halo; c.fillRect(mp[0] - 170, mp[1] - 170, 340, 340);
          c.save(); c.translate(mp[0], mp[1]); c.rotate(ang);
          c.fillStyle = rgba('70,76,96', .55 * dome); c.beginPath(); c.arc(0, 0, R, 0, 6.2832); c.fill();
          c.fillStyle = rgba('250,246,234', .97 * dome); c.beginPath(); c.arc(0, 0, R, -Math.PI / 2, Math.PI / 2); c.ellipse(0, 0, R * (2 * MOONK - 1), R, 0, Math.PI / 2, -Math.PI / 2, false); c.fill();
          c.restore();
          if (dome > .5) { c.font = '600 9px Manrope, system-ui, sans-serif'; c.fillStyle = rgba(DUSK, .55 * sg(dome, .5, 1)); c.textBaseline = 'middle'; if (mp[1] > 40 && moonAlt > 3) c.fillText('M O O N', mp[0] + R + 10, mp[1]); }
        }
        // the skyline: the island to the east with Bridgetown's lights, the sea of Carlisle Bay from the south to the west
        if (dome > 0) {
          var pts = [], az = az0 / RAD;
          for (var a = az - 95; a <= az + 95; a += 1.5) { var p = proj(azal(a, landH(a))); if (p) pts.push([p[0], p[1], a]); }
          var seaPts = []; for (var a2 = az - 95; a2 <= az + 95; a2 += 1.5) { var p2 = proj(azal(a2, 0)); if (p2) seaPts.push(p2); }
          var hy = proj(azal(az, 0)); horizonY = hy ? hy[1] : null;
          if (horizonY != null && horizonY < H + 40) {
            c.globalAlpha = dome;
            // sea
            var sg2 = c.createLinearGradient(0, horizonY, 0, H); sg2.addColorStop(0, 'rgb(' + [lp(12, 70, tw), lp(18, 82, tw), lp(36, 112, tw)].map(Math.round) + ')'); sg2.addColorStop(1, 'rgb(3,5,12)');
            c.fillStyle = sg2; c.beginPath(); c.moveTo(-10, H + 10); seaPts.forEach(function (p) { c.lineTo(p[0], p[1]); }); c.lineTo(W + 10, H + 10); c.closePath(); c.fill();
            // moonlight on the water
            if (mp && moonAlt > -.5 && moonAlt < 40 && mp[0] > -40 && mp[0] < W + 40) {
              for (var r = 0; r < 60; r++) { var yy = horizonY + 3 + Math.pow(r / 60, 1.6) * (H - horizonY), wv = (3 + 40 * Math.pow(r / 60, 1.4)) * (.6 + .4 * Math.sin(T * 1.7 + r * 1.3)); c.fillStyle = rgba('240,232,210', .22 * (1 - r / 60) * sg(moonAlt, -.5, 3) * (1 - sg(moonAlt, 20, 40))); c.fillRect(mp[0] - wv / 2 + 6 * Math.sin(T + r), yy, wv, 1.2); }
            }
            // land
            c.fillStyle = 'rgb(' + [lp(5, 26, tw), lp(8, 32, tw), lp(16, 50, tw)].map(Math.round) + ')';
            c.beginPath(); c.moveTo(pts[0][0], H + 10); var inL = false;
            pts.forEach(function (p) { c.lineTo(p[0], p[1]); }); c.lineTo(pts[pts.length - 1][0], H + 10); c.closePath(); c.fill();
            // town lights along the island's edge
            LIGHTS.forEach(function (lt) { var p = proj(azal(lt[0], lt[1] * landH(lt[0]) * .8)); if (!p || p[0] < 0 || p[0] > W) return; dot(p[0], p[1] + 1, .7 + .5 * lt[1], (.45 + .25 * Math.sin(T * 2 + lt[2])) * (1 - .7 * tw), '255,206,140'); });
            // compass points on the horizon
            c.font = '600 9px Manrope, system-ui, sans-serif'; c.textBaseline = 'top'; c.textAlign = 'center';
            COMP.forEach(function (cp) { var p = proj(azal(cp[0], 0)); if (!p || p[0] < 30 || p[0] > W - 30) return; c.fillStyle = rgba(DUSK, .5); c.fillRect(p[0] - .5, p[1] + 4, 1, 5); c.fillText(cp[1], p[0], p[1] + 12); });
            c.textAlign = 'start'; c.globalAlpha = 1;
          }
        }
        lock(1 - sg(u, 0, .22));
        var hh = ((Math.floor(hrs) % 24) + 24) % 24, mm = Math.floor((hrs - Math.floor(hrs)) * 60);
        meterTxt = meter.textContent = (HL ? '' : 'Bridgetown · ') + (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm + (al0 / RAD > 55 ? ' · looking straight up' : ' · facing ' + facing(az0 / RAD));
      }
    };
  })();

  // =========================================================================================== AS15 · A column of stars
  // Igloo's structure, taken literally: you descend a vertical shaft of space past one striking object per section, each a
  // different kind of thing (Igloo's own lesson: blocks that looked alike blurred together).
  scenes.column = (function () {
    var OBJ = [null, 'spikes', 'nebula', 'cluster', 'double', 'tabit'], GAP = 760;
    return {
      side: 'auto',
      draw: function (u, near, hold) {
        var cy = u * GAP;
        drawSky(0, -cy * .6, 1);
        for (var j = 0; j < 2; j++) { var off = j ? -cy * .25 : -cy * .4; }
        if (u < 1) { c.save(); c.translate(0, -cy); drawOrion(1); c.restore(); }
        for (var i = 1; i < CH.length; i++) { var oy = 360 + i * GAP - cy; if (oy < -300 || oy > H + 300) continue; var ox = i % 2 ? 360 : 920; centrepiece(OBJ[i], ox, oy, 1, i); }
        lock(1, 0, -cy);
        placePanel(near % 2 ? 'right' : 'left', 250);
      }
    };
  })();

  // =========================================================================================== run
  var SC = scenes[IDEA];
  if (SC.chapters) CH = SC.chapters;
  if (HL && SC.shell) CH = SC.shell.chapters;
  buildNav();
  if (HL) return {
    // t: seconds; u: 0..1 across the shell's five pages (Home, AI, Capital, Life & PPLI, Barbados); r: the hand-off, 0..1
    draw: function (t, u, r) {
      T = t; var sh = SC.shell, su = sh.map === 'handoff' ? r + 4 * u : 4 * u;
      var near = Math.round(su), hold = 1 - sg(Math.abs(su - near), .06, .24);
      if (TABIT_OX !== OXS) { OXS = TABIT_OX; WT = W + 2 * OXS; cv.width = Math.round(WT * dpr); }   // the window was resized
      if (OPT.focusFn) FOCUSX = OPT.focusFn();
      c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; c.fillStyle = NIGHT; c.fillRect(0, 0, cv.width, cv.height);
      c.setTransform(dpr, 0, 0, dpr, OXS * dpr, 0);   // the 1280 design, centred on the screen
      SHELLR = r; SHELLU = u; meterTxt = '';
      SC.draw(su, near, hold);
      // legibility, as on F2.0: a light navy shade behind the copy column and under the nav
      var sa = sg(u, .05, .3);
      if (sa > 0) { var lw = CL ? c.createLinearGradient(W + OXS, 0, 420, 0) : c.createLinearGradient(-OXS, 0, 860 - OXS, 0); lw.addColorStop(0, rgba('8,13,30', .5 * sa)); lw.addColorStop(.55, rgba('8,13,30', .22 * sa)); lw.addColorStop(1, rgba('8,13,30', 0)); c.fillStyle = lw; c.fillRect(-OXS, 0, WT, H); }
      var tg = c.createLinearGradient(0, 0, 0, 160); tg.addColorStop(0, rgba('8,13,30', .3 * sg(r, .5, 1))); tg.addColorStop(1, rgba('8,13,30', 0)); c.fillStyle = tg; c.fillRect(-OXS, 0, WT, 160);
      var mA = .8 * sg(r, .7, 1) * (1 - sg(u, .85, .97)) * (sh.map === 'page' ? sg(su, .3, .8) : 1);   // off on page 5, where the address line sits
      if (meterTxt && SC.meter && mA > .01) { c.font = '600 11px Manrope, system-ui, sans-serif'; c.textBaseline = 'alphabetic'; c.fillStyle = rgba(DUSK, mA); c.fillText(meterTxt.toUpperCase().split('').join(String.fromCharCode(8202)), Math.max(124 - Math.max(0, OXS) * .5, 64 - OXS), 694); }
    }
  };
  var lastT = performance.now() / 1000;
  return {
    frame: function (now) {
      var t = now / 1000, dt = Math.min(.1, t - lastT); lastT = t; T = t;
      S.idle += dt; if (S.idle > .28) S.uAim += (Math.round(S.uAim) - S.uAim) * (1 - Math.exp(-dt * 5));   // settle on the nearest chapter
      var pu = S.u; S.u += (S.uAim - S.u) * (1 - Math.exp(-dt * 5.5)); S.vel = lp(S.vel, Math.abs(S.u - pu) / Math.max(dt, .001), .2);
      var u = S.u, near = Math.round(u), hold = 1 - sg(Math.abs(u - near), .06, .24);
      c.setTransform(dpr, 0, 0, dpr, 0, 0); c.fillStyle = NIGHT; c.fillRect(0, 0, W, H);
      if (SC.side === 'right' || SC.side === 'auto' || !SC.side) placePanel(SC.side === 'auto' ? (near % 2 ? 'right' : 'left') : 'right', 250);
      SC.draw(u, near, hold);
      if (near !== shown) setPanel(near);
      var on = CH[near].k !== 'home';
      panel.style.opacity = (on ? hold : 0).toFixed(3); panel.style.transform = 'translateY(' + (16 * (1 - hold)).toFixed(1) + 'px)';
      Array.prototype.forEach.call(prog.children, function (b, i) { var d = b.firstChild; d.style.opacity = i === near ? '1' : '.35'; d.style.height = i === near ? '14px' : '6px'; d.style.background = i === near ? BRASS : 'rgb(' + IVORY + ')'; });
      cue.style.opacity = (1 - sg(u, 0, .15)).toFixed(3);
      meter.style.opacity = SC.meter ? sg(u, .1, .5).toFixed(3) : 0;
    },
    jump: function (i) { S.uAim = i; }, set: function (v) { S.u = S.uAim = v; }
  };
}


// The background: an Alpha Stars scene (down the bow of Orion, the path on the left), drawn by the shared scroll-sky engine in headless mode. Everything else
// on this board (splash, star-burst, docked logo with its stars under the mouse, AI page, knot page markers, skip) is the
// same as F2.0; only this background differs.
var SS_IDEA = 'bow', SS_SIDE = 'left', SS_FOCUS = 240;
function makeScene(cv, V0) {
  var sky = null, failed = false;
  function cl(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function sg(x, a, b) { return cl((x - a) / (b - a), 0, 1); }
  function draw(t, u, r) {
    if (r == null) r = 0;
    if (!sky && !failed) { try { sky = makeScrollSky(cv, SS_IDEA, { mark: TABIT_DATA.mark }, { headless: true, side: SS_SIDE, focus: SS_FOCUS, focusFn: SS_SIDE === 'left' ? function () { return TABIT_FOCUS; } : null }); } catch (err) { failed = true; } }
    var a = sg(r, .02, .3);   // the scene fades in over the hero's B11 sky (they match), then takes over from it
    if (!sky || a <= 0) { var cx0 = cv.getContext('2d'); cx0.setTransform(1, 0, 0, 1, 0, 0); cx0.clearRect(0, 0, cv.width, cv.height); cv.style.opacity = '0'; return { ph: 0, day: 0 }; }
    sky.draw(t, u, r); cv.style.opacity = a.toFixed(3);
    return { ph: a, day: 0 };
  }
  return { draw: draw };
}

function tabitDom() {
  return { extras: [], lock: document.querySelector('[data-tabit-lockup]'), mark: document.querySelector('[data-tabit-mark]'), letters: Array.prototype.slice.call(document.querySelectorAll('[data-tabit-letter]')), lineA: document.querySelector('[data-tabit-line="A"]'), lineB: document.querySelector('[data-tabit-line="B"]'), headA: document.querySelector('[data-tabit-head="A"]'), headB: document.querySelector('[data-tabit-head="B"]'), masks: Array.prototype.slice.call(document.querySelectorAll('[data-tabit-mask]')) };
}

// ---- the page logic (ported from the canvas board's component): intro clock, virtual scroll, input, snapping
var self = {};
self.t = 0; self.S = 0; self.St = 0; self.ff = false; self.last = performance.now();
init = init || {};
if (init.t != null) { self.t = init.t; self.S = self.St = init.S || 0; }
self.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (self.reduce) { self.t = 9; }
self.input = function (d) {
  if (self.t < TABIT_END) { if (d > 0) self.ff = true; return; }   // scrolling during the intro fast-forwards it
  var qm = self.hand ? self.hand.qmax : 600;
  self.St = Math.max(0, Math.min(TABIT_HAND + qm, self.St + d)); self.lastIn = performance.now();
};
var root = host.querySelector('[data-tabit-root]'), offs = [];
function on(el, ev, fn, opt) { if (!el) return; el.addEventListener(ev, fn, opt); offs.push(function () { el.removeEventListener(ev, fn, opt); }); }
on(root, 'wheel', function (e) { e.preventDefault(); self.input(e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY); }, { passive: false });
on(root, 'pointerdown', function () { try { root.focus({ preventScroll: true }); } catch (err) {} });
var hb = root.querySelector('[data-tabit-home]');
on(hb, 'pointerenter', function () { if (self.hand && self.hand.hoverLogo) self.hand.hoverLogo(self.t); });
on(hb, 'focus', function () { if (self.hand && self.hand.hoverLogo) self.hand.hoverLogo(self.t); });
on(hb, 'click', function () { self.St = 0; self.lastIn = performance.now(); });
on(root, 'keydown', function (e) {
  var k = e.key; if (k === 'ArrowDown' || k === 'PageDown' || k === ' ') { e.preventDefault(); self.input(k === 'ArrowDown' ? 160 : 520); }
  else if (k === 'ArrowUp' || k === 'PageUp') { e.preventDefault(); self.input(k === 'ArrowUp' ? -160 : -520); }
  else if (k === 'Home') { self.St = 0; } else if (k === 'End') { self.input(99999); }
});
var ty = null;
on(root, 'touchstart', function (e) { ty = e.touches[0].clientY; }, { passive: true });
on(root, 'touchmove', function (e) { if (ty == null) return; var y = e.touches[0].clientY; e.preventDefault(); self.input((ty - y) * 1.6); ty = y; }, { passive: false });
on(root, 'pointermove', function (e) {
  if (!self.hero) return; var r = root.getBoundingClientRect();
  self.hero.pointer(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
  if (self.hero.mouse) self.hero.mouse(((e.clientX - r.left) / r.width * TABIT_W - TABIT_OX), (e.clientY - r.top) / r.height * 720, true);
  if (self.hand && self.hand.ptr) self.hand.ptr(((e.clientX - r.left) / r.width * TABIT_W - TABIT_OX), (e.clientY - r.top) / r.height * 720);
});
on(root, 'pointerleave', function () { if (self.hand && self.hand.ptr) self.hand.ptr(-999, -999); if (self.hero) { self.hero.pointer(0, 0); if (self.hero.mouse) self.hero.mouse(-999, -999, false); } });
Array.prototype.forEach.call(root.querySelectorAll('[data-tabit-ch]'), function (b) { on(b, 'click', function () { var k = +b.getAttribute('data-tabit-ch'); if (self.t < TABIT_END) self.t = TABIT_END; self.St = k === 0 ? TABIT_HAND : TABIT_HAND + 720 * k; self.lastIn = performance.now(); }); });
on(root.querySelector('[data-tabit-cue]'), 'click', function () { if (self.t < TABIT_END) { self.ff = true; return; } var qm = self.hand ? self.hand.qmax : 600; self.St = self.St < TABIT_HAND - 1 ? TABIT_HAND : TABIT_HAND + qm; });
on(root.querySelector('[data-tabit-skip]'), 'click', function () { self.t = TABIT_END; self.ff = false; });
on(root.querySelector('.tabit-replay'), 'click', function () { self.t = 0; self.S = 0; self.St = 0; self.ff = false; });
self.tick = function () {
  var now = performance.now(), dt = Math.min(.05, (now - self.last) / 1000); self.last = now;
  tabitLayout(root);   // re-lays the site out when the width changes (a no-op otherwise)
  var gl = host.querySelector('canvas[data-tabit-gl]'), ov = host.querySelector('canvas[data-tabit-ov]');
  if (gl && ov && gl !== self.boundGL && !self.failed) {
    try { tabitLayout(root, init.k || 1); if (self.hero) self.hero.dispose(); self.hero = makeTabitHero(gl, ov, TABIT_DATA, tabitDom()); self.boundGL = gl; self.hand = makeHandoff(self.hero, root, TABIT_VARIANT); }
    catch (err) { self.failed = true; if (window.console) console.error('Tabit hero failed', err); }
  }
  self.t += dt * (self.ff ? 7 : 1); if (self.t >= TABIT_END) self.ff = false;
  var skEl = host.querySelector('[data-tabit-skip]');   // Skip intro, shown only while the intro plays
  if (skEl) { var ska = Math.min(1, Math.max(0, (self.t - .6) / .5)) * Math.min(1, Math.max(0, (TABIT_END - .3 - self.t) / .4)); skEl.style.opacity = ska.toFixed(3); skEl.style.pointerEvents = ska > .1 ? 'auto' : 'none'; }
  if (TABIT_SNAP && self.t >= TABIT_END && now - (self.lastIn || 0) > 160) {   // settle onto the nearest chapter when the wheel goes quiet
    var near = TABIT_SNAP.reduce(function (a, b) { return Math.abs(b - self.St) < Math.abs(a - self.St) ? b : a; });
    if (Math.abs(near - self.St) < 300) self.St = near;
  }
  self.S += (self.St - self.S) * (1 - Math.exp(-dt * (TABIT_SNAP ? 4.2 : 5.5))); if (Math.abs(self.St - self.S) < .3) self.S = self.St;
  if (self.hero) { self.hero.render(self.t); if (self.hand) self.hand.update(self.t, self.S); }
  else if (self.failed) { var d = tabitDom(); [d.mark].concat(d.letters).forEach(function (el) { if (el) { el.style.opacity = 1; el.style.transform = 'none'; } }); d.masks.forEach(function (m) { m.setAttribute('stroke-width', 60); }); }
  self.raf = requestAnimationFrame(self.tick);
};
self.raf = requestAnimationFrame(self.tick);
return {
  dispose: function () { cancelAnimationFrame(self.raf); offs.forEach(function (f) { f(); }); if (root.__ro) { root.__ro.disconnect(); root.__ro = null; } try { if (self.hero) self.hero.dispose(); } catch (err) {} host.innerHTML = ''; },
  // for testing
  _state: self
};

}

export { runTabit, TABIT_FONTS };
