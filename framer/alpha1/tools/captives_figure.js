// Tabit Captives figure (board XR2.9.31E): a disk of stars that whirls and flattens into one ring a cell as the page scrolls,
// growing to its final size as it lands, with the Tabit knot gathering in stars at its centre. This is a function body:
// TabitPage.tsx runs it as new Function("root", js)(pageElement) once the fonts are in, and calls the function it returns
// when the page goes. Scroll- and pointer-driven, apart from the figure's slow turn (3 degrees a second, only while it is
// on screen, still under reduced motion). tools/captives_figure.js is this same text, kept readable (pages/captives.js holds it
// as one string); MK below is the Tabit knot as star points, unaltered.
// the teardown, for when the page goes (or if anything below fails): the clock stops and nothing is left listening. It is built up as
// things are added
const undo=[]; let dead=false;
function teardown(){dead=true;while(undo.length){try{undo.pop()();}catch(e){}}}
try{

const RM=matchMedia('(prefers-reduced-motion: reduce)').matches, FINE=matchMedia('(hover: hover) and (pointer: fine)');
const STACK=matchMedia('(max-aspect-ratio: 1599/1000), (max-width: 1023.98px)');
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)), rad=a=>a*Math.PI/180, sm=x=>x*x*(3-2*x);
const RISE=[...root.querySelectorAll('[data-rise]')];
const sec=root.querySelector('.cx-top');
let fig=null;
if(sec){
const HEAD=sec.querySelector('#cx-cells'), S=sec.querySelector('.cx-svg'), FIG=sec.querySelector('.cx-fig'), FCOL=sec.querySelector('.cx-figcol'), HCOPY=sec.querySelector('.cx-hero .tb9-copy'), LIST=sec.querySelector('.cx-list'), LIS=[...sec.querySelectorAll('.cx-list li')];
const NS='http://www.w3.org/2000/svg', N=LIS.length;
const PAPER='#FBF9F4', BRASS='#A8823A', DUSK='#B8C0D4', NIGHT='#04070F';
S.textContent='';
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);(p||S).appendChild(e);return e;}

// ---- the system, in units at full size: the SCC at the centre; one orbit per cell, each a ring of stars,
// seen a little from above (T). The whole system turns together, slowly: 3 degrees a second, two minutes a revolution
// (Oscar, 11 Nov: the exception to cardinal rule 4 for this figure); reduced motion holds it still
const T=.6, R0=118, DR=34, PAD=8, LBL=12, VW=3;
// LBL: room under the outer ring for its own name (to XR2.9.30 it was 34, for the SCC's name, now gone). XR2.9.25: the
// first orbit closer in (was 150), every orbit further from the last (34, was 26)
const rI=i=>R0+i*DR, RC=rI(N-1), RREF=(R0+RC)/2;
let TS=0;                                                    // seconds of turning so far
let LVH=innerHeight,UP=1,G=.6,G0=.6,G1=.6,GS=-1,W=0,H=0,CX=0,CX0=0,CX1=0,CY=0,PW=.5,QA=0,HA=0,LASTH=-1,HOVER=-1,ENTER=-1,running=false,last=0;   // HA: how lit the hovered ring is, 0..1
let P=0,PT=0,SD=0,DSEP=600;                                   // P: how far the disk has settled into the orbits, 0..1 (PT: where the scroll says)
const sys=el('g',{});
const ell=(r,ry)=>`M${-r},0 A${r},${ry} 0 1 1 ${r},0 A${r},${ry} 0 1 1 ${-r},0`;
const orbG=el('g',{opacity:0},sys), orbs=LIS.map((l,i)=>el('path',{d:ell(rI(i),rI(i)*T),fill:'none',stroke:DUSK,'stroke-opacity':.14,'stroke-width':1,'vector-effect':'non-scaling-stroke'},orbG));
// a ring answers the mouse over the whole band it runs in
const hitG=el('g',{style:'display:none'},sys), hits=LIS.map((l,i)=>el('path',{d:ell(rI(i),rI(i)*T),fill:'none',stroke:NIGHT,'stroke-opacity':0,'stroke-width':DR,'pointer-events':'stroke'},hitG));

// ---- the disk of stars, on a canvas under the figure (Oscar, 12 Nov, from the Originkit "Black Hole" component, and
// on XR2.9.23: "Why does the planet look so much better on here … keep the orbit looking like this and highlight it
// with the brass colour … the rings could be slightly larger … Make the center our blue"). As the reference has it:
// the disk starts 34 from the centre and is densest there; the far side of the disk passes behind the centre and the
// near side in front of it (to XR2.9.29 the centre was a planet, a shaded sphere in Dusk); and every star in the disk
// carries a streak along its path, the inner ones longer. The streak is drawn, not left behind: the canvas is cleared every frame.
const DK=FIG.querySelector('.cx-disk'), dc=DK.getContext('2d'), NP=1400, A0=18, A1=Math.asin(T)*180/Math.PI, RO0=-16, PD=1600, WH=180, RP=34, ROUT=380, TA0=9;
// the stretch (shares of the scroll's stretch): the disk tilts flat and its stars gather onto the orbits, one a cell, an
// equal share to each, their streaks shortening to points, and as it does so the figure grows to the size it keeps
// beside the list (Oscar, 12 Nov, on XR2.9.26, where it grew after it had landed: "the spin should hide that resize
// ... it should spin up to the correct size"). It lands flat at PW already at that size (PW and QA, the share of the
// settling after which it grows, are set at layout, from when the hero copy has left the room); the orbit lines come
// up under the stars as it lands. The rings of stars stay
const HOLD=!window.CSS||!CSS.supports||CSS.supports('overflow','clip');   // HOLD: the page can hold the figure in place (older Safari cannot: it stays beside the headline)
let DPR=1, WSP=0, WHL=0; const KT=new Float64Array(21).fill(1);
const PTS=[];
(()=>{let sd=11;const rr=()=>(sd=(sd*16807)%2147483647)/2147483647;
  for(let k=0;k<NP;k++)PTS.push({r:RP+Math.pow(rr(),1.8)*(ROUT-RP),a:rr()*360,h:(rr()-.5)*16,s:.45+rr()*.8,o:.55+rr()*.45,j:(rr()-.5)*4});
  PTS.sort((p,q)=>p.r-q.r);
  PTS.forEach((p,k)=>{p.oi=Math.floor(k*N/NP);p.rf=rI(p.oi)+p.j;p.w=Math.sqrt(RREF/Math.max(p.r,60));});   // the inner stars to the inner orbits; w: how much faster the inner ones go
})();
// The centre, the SCC (XR2.9.31E; Oscar, 12 Nov: "We are using version 31E"). There is no planet and nothing stands at
// the centre while the disk turns: the disk has an empty eye. As the disk lands the Tabit knot's stars come in off the
// disk's inner edge, each from its own bearing, brightening as it comes and running along the edge on its way, the
// knot's inner stars first. The figure ends with the knot in stars at the centre of the rings.
const SW=40;   // how far round the edge a star starts from its own bearing, in degrees
const Q=new Float64Array(4), V=new Float64Array(4);   // the view for this frame (tilt and roll), and the last star placed
function diskView(f){const al=rad(A0+(A1-A0)*f),ro=rad(RO0*(1-f));V[0]=Math.cos(al);V[1]=Math.sin(al);V[2]=Math.cos(ro);V[3]=Math.sin(ro);}
function diskPose(r,a,h,f){   // a star's place on the figure (units from the centre) for a settling f, 0 in depth .. 1 flat
  const ca=V[0],sa=V[1],cr=V[2],sr=V[3],th=rad(a),x=r*Math.cos(th),zr=r*Math.sin(th),hh=h*(1-f),y=zr*sa+hh*ca,z=-zr*ca+hh*sa,sc=1+(PD/(PD+z)-1)*(1-f);
  const X=x*sc,Y=y*sc;Q[0]=X*cr-Y*sr;Q[1]=X*sr+Y*cr;Q[2]=z;Q[3]=sc;}
// the stars by kind (0 behind the centre, 1 in front; 2 and 3 the same for the ring under the mouse) and brightness
// (eight steps): one fill per step; S_ their points, T_ their streaks
const S_=[0,1,2,3].map(()=>[[],[],[],[],[],[],[],[]]), T_=[0,1,2,3].map(()=>[[],[],[],[],[],[],[],[]]);
const fQ=q=>sm(q), gQ=q=>sm(clamp((q-.16)/.84)), OUT=[];
for(let t=0;t<=20;t++){const q=t/20,f=fQ(q),rm=ROUT+(RC+2-ROUT)*gQ(q),o=[];let mx=1,my=1;diskView(f);
  for(let a=0;a<360;a+=5)for(const h of[-8,8]){diskPose(rm,a,h,f);mx=Math.max(mx,Math.abs(Q[0]));my=Math.max(my,Math.abs(Q[1]));if(Q[0]<0)o.push(Q[0],Q[1]);}
  OUT.push(o);KT[t]=Math.min(1,(RC+PAD-3)/mx,(RC*T+5)/my);}
const grown=p=>sm(clamp((clamp(p/PW)-QA)/(1-QA)));   // how far the figure has grown at the stretch p
const mix=(a,b,t)=>Math.round(a+(b-a)*t);
function fillKind(kd){
  for(let lv=0;lv<8;lv++){const L=S_[kd][lv],R=T_[kd][lv];if(!L.length&&!R.length)continue;dc.globalAlpha=(lv+.5)/8;dc.beginPath();
    for(let k=0;k<L.length;k+=3){dc.moveTo(L[k]+L[k+2],L[k+1]);dc.arc(L[k],L[k+1],L[k+2],0,6.2832);}
    for(let k=0;k<R.length;k+=6){dc.moveTo(R[k]+R[k+2],R[k+1]+R[k+3]);dc.lineTo(R[k+4],R[k+5]);dc.lineTo(R[k]-R[k+2],R[k+1]-R[k+3]);dc.closePath();}
    dc.fill();}}
function diskDraw(dt){
  // every frame starts from a clear canvas: nothing a star has drawn is ever left behind
  dc.setTransform(1,0,0,1,0,0);dc.globalAlpha=1;dc.clearRect(0,0,DK.width,DK.height);
  dc.setTransform(DPR*UP,0,0,DPR*UP,0,0);
  const wq=clamp(P/PW), f=fQ(wq), g=gQ(wq), ti=Math.min(19,Math.floor(wq*20)), kk=KT[ti]+(KT[ti+1]-KT[ti])*(wq*20-ti);
  const whl=WH*(1-(1-wq)*(1-wq));                 // the scroll whirls the disk, the inner stars further; it eases out as the disk comes to rest. WH: 180 degrees in all for a star half way out (XR2.9.28; 300 before, which Oscar found too quick: "slow down the rotation a little when you scroll. Maybe by 40%")
  if(dt>0)WSP+=(Math.abs(whl-WHL)/dt-WSP)*(1-Math.pow(.8,dt*60));else WSP=0;WHL=whl;
  const tb=TA0*(1-g)+Math.min(24,WSP*.08), hot=HA>0?LASTH:-1, sc0=G*kk, kq=clamp((P-PW+.05)/(.95-PW));   // the centre opens into the knot from just before the disk lands to 90 % of the stretch (Oscar: "a bit more gradual" than XR2.9.23's 60 % to 88 %)
  // a streak's length in degrees: the disk's own, shortening to a point on the orbits, and longer while the scroll whirls it
  diskView(f);for(let kd=0;kd<4;kd++)for(let lv=0;lv<8;lv++){S_[kd][lv].length=0;T_[kd][lv].length=0;}
  for(let k=0;k<NP;k++){const p=PTS[k], rg=p.r+(p.rf-p.r)*g, ang=p.a+VW*TS+whl*p.w;
    diskPose(rg,ang,p.h,f);
    const ih=p.oi===hot,x=CX+sc0*Q[0],y=CY+sc0*Q[1],s=p.s*Q[3]*(ih?1+.35*HA:1),kd=(Q[2]>0?0:1)+(ih?2:0);
    const a=Math.max(.3,Math.min(1,1-((Q[2]+360)/720)*.45))*p.o, lv=Math.min(7,Math.floor(a*8));
    S_[kd][lv].push(x,y,s);
    const ta=Math.min(tb*Math.min(p.w,1.4),3438/rg);if(ta>.4){ /* a streak is never longer than 60 figure units along its path (3438 = 60 x 57.3) */ diskPose(rg,ang-ta,p.h,f);const tx=CX+sc0*Q[0],ty=CY+sc0*Q[1],dx=x-tx,dy=y-ty,l=Math.sqrt(dx*dx+dy*dy);
      if(l>s*1.2)T_[kd][Math.floor(a*4)].push(x,y,-dy/l*s,dx/l*s,tx,ty);}}
  const hc=hot<0?PAPER:HA>=1?BRASS:`rgb(${mix(251,168,HA)},${mix(249,130,HA)},${mix(244,58,HA)})`;   // the ring under the mouse turns Brass
  dc.fillStyle=PAPER;fillKind(0);if(hot>=0){dc.fillStyle=hc;fillKind(2);}
  // the centre, between the far side of the disk and the near side: the knot's stars on their way in as the disk
  // lands (the figure's own knot shows once they are all home). A star shows only once it has left the edge
  if(P<.9&&kq>0){for(let k=0;k<=20;k++)KB[k].length=0;
    for(let j=0;j<KS.length;j++){const s=KS[j],m=MK.P[j],e=sm(clamp((kq-s.d)/.6));if(e<=0)continue;
      const aa=s.a-rad(SW)*(1-e)*(1-e), x0=s.r*Math.cos(aa), y0=s.r*T*Math.sin(aa), bk=Math.round(m[3]*e*20);   // it starts further back round the edge and runs along it as it comes in
      if(bk>0)KB[bk].push(CX+G*(x0+(m[0]-x0)*e),CY+G*(y0+(m[1]-y0)*e),m[2]*G*(.6+.4*e));}
    dc.fillStyle=PAPER;for(let k=1;k<=20;k++){const L=KB[k];if(!L.length)continue;dc.globalAlpha=k/20;dc.beginPath();
      for(let i=0;i<L.length;i+=3){dc.moveTo(L[i]+L[i+2],L[i+1]);dc.arc(L[i],L[i+1],L[i+2],0,6.2832);}dc.fill();}}
  dc.fillStyle=PAPER;fillKind(1);if(hot>=0){dc.fillStyle=hc;fillKind(3);}
  dc.globalAlpha=1;
}
// the SCC at the centre once the figure has settled: the Tabit knot drawn in Paper star points, as the About figure
// draws it (Oscar, 12 Nov: "what I want as the Tabit logo in the center")
const MK={"MW": 120, "MH": 94.5, "P": [[-18.0, 1.5, 1.45, 1], [-6.0, 38.2, 1.45, 1], [-18.8, -12.8, 1.45, 1], [-3.0, -18.8, 1.45, 1], [22.5, 24.8, 1.45, 1], [28.5, 6.8, 1.45, 1], [14.2, -35.2, 1.45, 1], [11.2, 42.0, 1.45, 1], [-48.8, 9.8, 1.44, 1], [-33.0, -15.0, 1.44, 1], [-10.5, 7.5, 1.44, 1], [23.2, -18.0, 1.44, 1], [12.8, 19.5, 1.44, 1], [-12.8, 45.0, 1.44, 1], [20.2, -25.5, 1.44, 1], [6.8, -40.5, 1.44, 1], [7.5, -30.8, 1.44, 1], [3.8, -36.0, 1.44, 1], [-8.2, -23.2, 1.44, 1], [16.5, 44.2, 1.44, 1], [-26.2, -23.2, 1.44, 1], [27.8, -19.5, 1.44, 1], [-3.8, -12.8, 1.44, 1], [32.2, -25.5, 1.44, 1], [-44.2, 2.2, 1.44, 1], [-22.5, 9.0, 1.44, 1], [-24.8, 33.8, 1.44, 1], [11.2, 30.0, 1.43, 1], [-22.5, -10.5, 1.43, 1], [-27.8, -31.5, 1.43, 1], [5.2, 36.0, 1.43, 1], [40.5, 15.0, 1.43, 1], [-19.5, 39.8, 1.43, 1], [-16.5, 15.0, 1.43, 1], [28.5, -34.5, 1.43, 1], [-41.2, -19.5, 1.43, 1], [26.2, -37.5, 1.43, 1], [-26.2, 4.5, 1.43, 1], [-15.8, -34.5, 1.42, 1], [-21.8, 36.8, 1.42, 1], [-47.2, 12.0, 1.42, 1], [43.5, 8.2, 1.42, 1], [45.0, -7.5, 1.42, 1], [26.2, 18.0, 1.42, 1], [-9.0, 10.5, 1.42, 1], [-24.0, -8.2, 1.42, 1], [36.8, 2.2, 1.42, 1], [9.0, 11.2, 1.42, 1], [-5.2, 15.0, 1.42, 1], [25.5, -0.8, 1.42, 1], [-2.2, -29.2, 1.42, 1], [19.5, 39.8, 1.42, 1], [11.2, -31.5, 1.42, 1], [7.5, -12.8, 1.42, 1], [12.8, 32.2, 1.41, 1], [19.5, 1.5, 1.41, 1], [22.5, -30.8, 1.41, 1], [-30.0, -10.5, 1.41, 1], [-6.0, -40.5, 1.41, 1], [-21.0, 17.2, 1.41, 1], [-18.0, -42.8, 1.41, 1], [24.0, 37.5, 1.41, 1], [-5.2, 11.2, 1.41, 1], [-14.2, 31.5, 1.41, 1], [-22.5, -19.5, 1.41, 1], [-10.5, -35.2, 1.4, 1], [-9.8, -44.2, 1.4, 1], [-15.0, -46.5, 1.4, 1], [15.8, -45.0, 1.4, 1], [-9.8, -18.0, 1.4, 1], [21.0, 27.8, 1.4, 1], [0.8, 34.5, 1.4, 1], [20.2, 14.2, 1.4, 1], [-20.2, 27.8, 1.4, 1], [-51.8, -7.5, 1.4, 1], [-21.0, -38.2, 1.4, 1], [10.5, -3.8, 1.4, 1], [-25.5, 20.2, 1.4, 1], [45.8, -16.5, 1.4, 1], [30.0, -8.2, 1.4, 1], [5.2, 8.2, 1.4, 1], [-6.0, -2.2, 1.39, 1], [49.5, 10.5, 1.39, 1], [-2.2, 23.2, 1.39, 1], [3.8, 19.5, 1.39, 1], [20.2, 30.8, 1.39, 1], [-42.8, 14.2, 1.39, 1], [15.8, -20.2, 1.39, 1], [-8.2, -31.5, 1.39, 1], [-35.2, -6.0, 1.39, 1], [-59.2, 0.8, 1.39, 1], [-42.0, -5.2, 1.39, 1], [-7.5, -26.2, 1.38, 1], [-9.0, 21.8, 1.38, 1], [-15.0, -10.5, 1.38, 1], [4.5, -11.2, 1.38, 1], [-35.2, -2.2, 1.38, 1], [-19.5, -30.0, 1.38, 1], [-19.5, -27.0, 1.37, 1], [11.2, 14.2, 1.37, 1], [34.5, 12.0, 1.37, 1], [40.5, 5.2, 1.37, 1], [0.8, -22.5, 1.37, 1], [-34.5, -12.8, 1.37, 1], [8.2, 29.2, 1.37, 1], [0.0, -33.8, 1.36, 1], [-12.0, -20.2, 1.36, 1], [35.2, -12.8, 1.36, 1], [14.2, 7.5, 1.36, 1], [6.0, 11.2, 1.36, 1], [-18.8, 30.8, 1.36, 1], [21.8, -12.0, 1.36, 1], [29.2, 20.2, 1.36, 1], [27.0, -7.5, 1.36, 1], [24.8, 27.0, 1.36, 1], [24.0, 15.0, 1.36, 1], [16.5, 18.8, 1.36, 1], [3.8, 31.5, 1.36, 1], [-1.5, 9.0, 1.36, 1], [-21.8, 0.0, 1.36, 1], [12.0, 23.2, 1.35, 1], [-31.5, -27.0, 1.35, 1], [12.8, -6.0, 1.35, 1], [-33.0, 27.8, 1.35, 1], [13.5, -12.0, 1.35, 1], [-16.5, -3.8, 1.34, 1], [4.5, 16.5, 1.34, 1], [21.8, -2.2, 1.34, 1], [-29.2, -3.8, 1.34, 1], [-57.0, -0.8, 1.34, 1], [50.2, -12.8, 1.34, 1], [30.0, 33.0, 1.34, 1], [-11.2, 18.8, 1.34, 1], [-30.8, -30.8, 1.34, 1], [-45.0, -5.2, 1.34, 1], [2.2, 4.5, 1.34, 1], [-15.0, -22.5, 1.34, 1], [9.0, -15.8, 1.34, 1], [0.8, -4.5, 1.33, 1], [52.5, -8.2, 1.33, 1], [-9.0, 42.0, 1.33, 1], [59.2, -3.8, 1.32, 1], [8.2, 14.2, 1.32, 1], [0.8, 21.8, 1.32, 1], [23.2, 12.0, 1.32, 1], [6.0, -9.0, 1.32, 1], [47.2, 2.2, 1.32, 1], [6.0, 27.0, 1.32, 1], [42.8, 18.8, 1.32, 1], [33.0, 0.0, 1.32, 1], [6.0, -0.8, 1.31, 1], [47.2, -3.0, 1.31, 1], [-39.0, -21.0, 1.31, 1], [-7.5, 29.2, 1.31, 1], [-26.2, -4.5, 1.31, 1], [7.5, -27.8, 1.31, 1], [17.2, 3.8, 1.31, 1], [-4.5, -15.8, 1.3, 1], [-10.5, -5.2, 1.3, 1], [-33.8, 13.5, 1.3, 1], [3.8, -24.0, 1.3, 1], [-9.8, 33.0, 1.3, 1], [-27.0, 30.0, 1.3, 1], [18.0, 32.2, 1.29, 1], [-54.0, -5.2, 1.29, 1], [-30.0, 30.0, 1.29, 1], [20.2, 22.5, 1.29, 1], [58.5, 2.2, 1.28, 1], [21.8, -42.8, 1.28, 1], [3.0, -21.0, 1.28, 1], [-27.0, 22.5, 1.28, 1], [48.0, 14.2, 1.28, 1], [-45.8, 14.2, 1.28, 1], [-48.0, -13.5, 1.28, 1], [-6.8, 3.0, 1.28, 1], [26.2, 9.0, 1.27, 1], [13.5, -23.2, 1.27, 1], [38.2, -3.8, 1.26, 1], [15.8, -6.8, 1.26, 1], [-31.5, -1.5, 1.26, 1], [40.5, -18.0, 1.26, 1], [-6.0, 27.0, 1.26, 1], [-39.8, 8.2, 1.26, 1], [-13.5, 36.0, 1.26, 1], [30.8, -22.5, 1.26, 1], [-24.0, -36.0, 1.25, 1], [-7.5, 24.8, 1.25, 1], [35.2, -27.0, 1.25, 1], [-44.2, -16.5, 1.25, 1], [48.8, -15.0, 1.25, 1], [14.2, -9.0, 1.24, 1], [-13.5, 8.2, 1.24, 1], [-29.2, 24.0, 1.24, 1], [9.8, -24.8, 1.24, 0.8], [25.5, -9.8, 1.24, 0.8], [1.5, -7.5, 1.24, 0.8], [-13.5, -7.5, 1.22, 0.8], [-11.2, -46.5, 1.22, 0.8], [29.2, 3.8, 1.21, 0.8], [44.2, 15.0, 1.21, 0.8], [-48.0, 1.5, 1.2, 0.8], [6.0, 2.2, 1.2, 0.8], [-38.2, 16.5, 1.2, 0.8], [-21.0, -16.5, 1.2, 0.8], [30.0, -30.8, 1.19, 0.8], [18.8, -42.0, 1.19, 0.8], [-57.0, -3.8, 1.19, 0.8], [-24.0, 1.5, 1.18, 0.8], [9.8, -43.5, 1.18, 0.8], [-15.0, 6.0, 1.18, 0.8], [23.2, -37.5, 1.17, 0.8], [-57.8, 3.0, 1.16, 0.8], [-31.5, 12.0, 1.16, 0.8], [32.2, 30.8, 1.16, 0.8], [19.5, -3.8, 1.16, 0.8], [14.2, -47.2, 1.14, 0.8], [9.8, 1.5, 1.14, 0.8], [-6.0, -30.0, 1.14, 0.8], [-54.8, 3.8, 1.14, 0.8], [33.8, 27.8, 1.14, 0.8], [-0.8, -20.2, 1.14, 0.8], [-3.8, -27.0, 1.14, 0.8], [-15.0, 42.0, 1.14, 0.8], [-41.2, 6.0, 1.13, 0.8], [-19.5, -2.2, 1.13, 0.8], [21.0, 42.0, 1.12, 0.8], [-1.5, -1.5, 1.12, 0.8], [54.0, 6.0, 1.12, 0.8], [-29.2, -7.5, 1.12, 0.8], [-44.2, 16.5, 1.12, 0.8], [57.0, 6.0, 1.12, 0.8], [27.0, 33.0, 1.12, 0.8], [36.0, -2.2, 1.12, 0.8], [33.8, -10.5, 1.11, 0.8], [-1.5, -10.5, 1.11, 0.8], [-1.5, 19.5, 1.11, 0.8], [50.2, -1.5, 1.11, 0.8], [-7.5, 13.5, 1.1, 0.8], [-24.8, -33.0, 1.09, 0.8], [-16.5, -14.2, 1.09, 0.8], [24.8, -20.2, 1.09, 0.8], [-33.8, 0.0, 1.09, 0.8], [52.5, 9.0, 1.09, 0.8], [18.8, -31.5, 1.08, 0.8], [6.0, -17.2, 1.08, 0.8], [-17.2, -24.8, 1.08, 0.8], [42.8, -20.2, 1.07, 0.8], [56.2, -7.5, 1.07, 0.8], [17.2, 7.5, 1.07, 0.8], [19.5, -16.5, 1.06, 0.8], [-16.5, 24.0, 1.06, 0.8], [-45.0, -13.5, 1.05, 0.8], [-3.0, 17.2, 1.05, 0.8], [-21.0, 12.0, 1.04, 0.8], [42.8, -9.0, 1.04, 0.8], [33.0, 9.8, 1.03, 0.8], [-24.8, -21.0, 1.03, 0.8], [10.5, -12.0, 1.03, 0.8], [-29.2, -24.8, 1.03, 0.8], [-49.5, -10.5, 1.02, 0.8], [-3.0, -37.5, 1.02, 0.8], [-38.2, -16.5, 1.02, 0.8], [37.5, -14.2, 1.02, 0.8], [18.8, -6.8, 1.01, 0.8], [-4.5, 24.8, 1.0, 0.8], [-18.8, -39.8, 1.0, 0.8], [19.5, -22.5, 1.0, 0.8], [22.5, 2.2, 0.98, 0.8], [32.2, 3.0, 0.98, 0.8], [-35.2, -16.5, 0.96, 0.8], [15.0, 33.8, 0.95, 0.8], [-29.2, -28.5, 0.94, 0.6], [-38.2, 5.2, 0.94, 0.6], [-27.8, 8.2, 0.94, 0.6], [31.5, 6.8, 0.92, 0.6], [4.5, -39.0, 0.92, 0.6], [-9.0, 4.5, 0.91, 0.6], [-39.8, -9.8, 0.91, 0.6], [-15.8, 20.2, 0.9, 0.6], [23.2, -27.0, 0.9, 0.6], [9.0, 40.5, 0.9, 0.6], [0.8, 6.8, 0.9, 0.6], [28.5, -5.2, 0.89, 0.6], [9.0, 24.0, 0.88, 0.6], [-14.2, 17.2, 0.88, 0.6], [-8.2, -3.8, 0.88, 0.6], [13.5, 16.5, 0.87, 0.6], [-12.8, -37.5, 0.86, 0.6], [18.0, 10.5, 0.86, 0.6], [12.8, 44.2, 0.85, 0.6], [12.8, -43.5, 0.84, 0.6], [52.5, -11.2, 0.84, 0.6], [-50.2, 7.5, 0.83, 0.6], [6.8, 39.0, 0.82, 0.6], [9.0, -1.5, 0.82, 0.6], [-15.8, 45.0, 0.8, 0.6], [60.0, -0.8, 0.8, 0.6], [-6.8, -12.8, 0.78, 0.6], [6.0, -25.5, 0.78, 0.6], [-40.5, 20.2, 0.78, 0.6], [-4.5, 1.5, 0.78, 0.6], [-2.2, 36.0, 0.77, 0.6], [-20.2, 24.8, 0.74, 0.6], [20.2, 4.5, 0.72, 0.6], [-36.0, 2.2, 0.72, 0.6], [29.2, -24.8, 0.72, 0.6], [-39.0, -6.8, 0.69, 0.6], [12.8, 4.5, 0.68, 0.6], [9.8, -29.2, 0.67, 0.6]]}, markG=el('g',{style:'display:none'},sys), KS=[], KB=[];for(let k=0;k<=20;k++)KB.push([]);
MK.P.forEach(p=>el('circle',{cx:p[0],cy:p[1],r:p[2],fill:PAPER,'fill-opacity':p[3]},markG));
{let sd=29;const rr=()=>(sd=(sd*16807)%2147483647)/2147483647, rad2=m=>Math.hypot(m[0],m[1]), rm=Math.max(...MK.P.map(rad2));
 // where each of the knot's stars comes in from, and when (d, a share of the opening): on the disk's inner edge as it
 // lies once the disk is flat (34 to 42 from the centre), at the star's own bearing from the centre
 MK.P.forEach((m,i)=>{const th=Math.atan2(m[1],m[0]), a=Math.atan2(Math.sin(th)/T,Math.cos(th)), r=RP+rr()*8;
   KS[i]={r,a,d:.35*rad2(m)/rm+rr()*.05};});}
// a mouse over a list item, a ring or its name reads that cell: its ring's stars turn Brass (no line: Oscar, 12 Nov) and its name shows on it
function hover(i){if(!FINE.matches)return;if(HOVER>=0)LIS[HOVER].classList.remove('cx-hov','cx-on');
  HOVER=i;if(i>=0)LIS[i].classList.add('cx-hov','cx-on');
  labs.forEach((b,k)=>b.t.classList.toggle('cx-hov',k===i));if(!running)step(0);}
const cv=document.createElement('canvas').getContext('2d'), NAMEF='400 13px Manrope';
function wrap(t,w){cv.font=NAMEF;const ws=t.split(' '),L=[];let l='';for(const x of ws){const n=l?l+' '+x:x;if(cv.measureText(n).width>w&&l){L.push(l);l=x;}else l=n;}if(l)L.push(l);return L;}
const labG=el('g',{});
const labs=LIS.map((l,i)=>{const t=el('text',{class:'cx-lab','text-anchor':'middle','font-size':13,'font-weight':400,opacity:0,style:'display:none'},labG);
  [t,l,hits[i]].forEach(n=>{n.addEventListener('pointerenter',()=>hover(i));n.addEventListener('pointerleave',()=>{if(HOVER===i)hover(-1);});});
  return {t,ts:[],n:0,lo:'0'};});
function measureLabs(){labs.forEach((b,i)=>{const L=wrap(LIS[i].querySelector('.cx-term').textContent,220);b.t.textContent='';
  b.ts=L.map((s,k)=>{const sp=el('tspan',{dy:k?20:0},b.t);sp.textContent=s;return sp;});b.n=L.length;});}
measureLabs();
let SHOWLAB=true;
// the one name that shows sits on its own ring, at the ring's lowest point, the sky's Night keeping the stars off it;
// clear of the knot
function placeLabs(ro){
  if(!SHOWLAB)return;
  labs.forEach((L,i)=>{const v=i===LASTH?HA*ro:0,show=v>0,lo=show?v.toFixed(2):'0';if(lo!==L.lo){L.lo=lo;L.t.setAttribute('opacity',lo);L.t.style.display=show?'':'none';}
    if(!show)return;
    L.t.setAttribute('y',(CY+rI(i)*T*G+4-(i<N/2?0:(L.n-1)*20)).toFixed(1)); /* more than one line: down from the ring on the inner rings, up to it on the outer ones */ const tx=CX.toFixed(1);L.ts.forEach(sp=>sp.setAttribute('x',tx));});
}
function draw(dt){
  if(ENTER!==S.__e){S.__e=ENTER;S.style.opacity=DK.style.opacity=ENTER.toFixed(3);}
  // the figure grows, and moves a little towards the list, while the disk settles: it lands at its full size. Scrolling
  // back up it gives the room back at once (the scroll's own place, not the eased one), so it never meets the copy
  const sz=grown(Math.min(P,PT)), gn=G0+(G1-G0)*sz;
  if(gn!==GS){GS=G=gn;CX=CX0+(CX1-CX0)*sz;sys.setAttribute('transform',`translate(${CX.toFixed(1)},${CY.toFixed(1)}) scale(${G.toFixed(4)})`);
}
  diskDraw(dt);
  // the orbit lines come up as the disk settles onto them
  const ro=sm(clamp((P-PW+.1)/.2)), oo=ro.toFixed(3), hs=P>PW+.05, kd=P>=.9;
  if(kd!==markG.__d){markG.__d=kd;markG.style.display=kd?'':'none';}
  if(oo!==orbG.__o){orbG.__o=oo;orbG.setAttribute('opacity',oo);}
  if(hs!==hitG.__s){hitG.__s=hs;hitG.style.display=hs?'':'none';}
  placeLabs(ro);
}
// one clock for the turning and a hover's quarter-second fade; it runs only while the figure is on screen
let RAF=0, LD=0;
function step(ts){
  const dt=(running&&last&&ts)?Math.min(.1,Math.max(0,(ts-last)/1000)):0; if(running&&ts)last=ts;   // a manual redraw (ts 0) moves no time
  if(!RM)TS+=dt;
  if(HOVER>=0)LASTH=HOVER;
  const ht=HOVER>=0?1:0;
  if(RM||!running)HA=ht;else{HA+=(ht-HA)*(1-Math.pow(.8,dt*60));if(Math.abs(ht-HA)<.01)HA=ht;}   // ~.25 s, the same at 60 or 120 Hz
  if(RM)P=1;else if(!dt)P=PT;else{P+=(PT-P)*(1-Math.pow(.82,dt*60));if(Math.abs(PT-P)<.001)P=PT;}
  const still=running&&ts&&P===PT&&HA===ht&&P>=PW;
  if(!still||ts-LD>30){LD=ts||0;draw(running?dt:0);}   // settled, the rings turn slowly: about 30 redraws a second are enough
  if(running)RAF=requestAnimationFrame(step);
}
function start(){if(running||RM)return;running=true;last=0;RAF=requestAnimationFrame(step);}
function stop(){running=false;cancelAnimationFrame(RAF);}
undo.push(stop);
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?start():stop()),{rootMargin:'120px'});io.observe(FIG);undo.push(()=>io.disconnect());}
else start();

function layout(){
  const vw=innerWidth,vh=innerHeight,stacked=STACK.matches,col=FCOL.clientWidth; LVH=vh; UP=vw<=600?1:Math.min(1.25,Math.max(1,vw/1152));
  // every read before any write
  const fr=FCOL.getBoundingClientRect(),lr=LIST.getBoundingClientRect(),hc=HCOPY.getBoundingClientRect(),sr=sec.getBoundingClientRect(),sy=scrollY,hd=HEAD.getBoundingClientRect().top+sy;
  // the hero copy as it is set: every line of the headline and the paragraph, and each button (right edge, top and bottom on the page)
  const lines=[], rg=document.createRange();
  [...HCOPY.children].forEach(e=>{const b=e.getBoundingClientRect();
    if(e.matches('h1,h2,h3,p')){rg.selectNodeContents(e);for(const r of rg.getClientRects())lines.push([r.right,Math.max(r.top,b.top)+sy,Math.min(r.bottom,b.bottom)+sy]);}
    else (e.matches('a,button')||!e.children.length?[e]:[...e.children]).forEach(c=>{const r=c.getBoundingClientRect();lines.push([r.right,r.top+sy,r.bottom+sy]);});});
  // two columns: beside the headline the figure keeps to its column; beside the list it spreads left, to 24 from the
  // list (only where the page can hold it in place while the copy passes; and not under reduced motion, where the
  // figure is the finished orbits from the start and keeps one size)
  // held: the figure can be held in place while the copy passes. An ancestor that scrolls or hides its overflow (a wrapper the
  // host page puts round this one) would stop that; the figure then keeps its column size, as where the browser cannot hold it
  let held=HOLD; if(held)for(let a=FIG.parentElement;a&&a!==document.body&&a!==document.documentElement;a=a.parentElement){const o=getComputedStyle(a).overflowY;if(o!=='visible'&&o!=='clip'){held=false;break;}}
  const ext=stacked||!held||RM?0:Math.max(0,Math.min(120*UP,fr.left-lr.right-24*UP));
  const W0=col/UP; W=(col+ext)/UP;
  const fit=w=>Math.min(1.15,w/(2*(RC+PAD)));
  G1=fit(W); G0=Math.min(G1,fit(W0));
  // whole or not at all: on a short window the figure tightens just enough to fit between the nav and the bottom edge
  const run=Math.max(40,vh*.08), room=(vh-2*run)/UP-88;
  if(2*(RC*T*G1+PAD)+LBL>room)G1=Math.max(.2,(room-2*PAD-LBL)/(2*RC*T)); G0=Math.min(G0,G1);
  // its size beside the list (g1) sets its box: its middle level with the hero copy's, and held there while the list
  // passes; never nearer the nav or the bottom than the fade stretch, so it is always whole. Grown, its right tip
  // stays where it was
  const sd=sr.top+sy; let top=0; CX0=W-W0/2;
  const size=g1=>{G1=g1>G0+.005?g1:G0; H=2*(RC*T*G1+PAD)+LBL; CY=PAD+RC*T*G1; CX1=G1>G0?W-(RC+PAD)*G1:CX0;
    top=Math.max(88*UP+run,Math.min(hc.top+hc.height/2-sr.top-H*UP/2,vh-H*UP-run));};
  size(G1); PW=.5; QA=0;
  if(!stacked){SD=sd; DSEP=Math.max(240,hd-vh*.5-sd);
    if(G1>G0){
      // when to grow. The figure is held while the hero copy rises past it. clear(pw,qa): with the disk landing at pw
      // and growing over the last 1-qa of its settling, does the figure stay 12 clear of every line of the copy, at
      // every scroll until the copy has gone above it? (the disk's own outline at each stage, against each line)
      const m=12*UP, bl=fr.left-ext, near=lines.filter(l=>l[0]+m>bl), xm=near.reduce((a,l)=>Math.max(a,l[0]+m),0);
      const clear=(pw,qa)=>{const cy=top+CY*UP, end=near.reduce((a,l)=>Math.max(a,l[2]+m-top),0);
        for(let s=0;s<=end;s+=10){const p=clamp(s/DSEP),q=clamp(p/pw),sz=sm(clamp((q-qa)/(1-qa))),g=G0+(G1-G0)*sz,cx=bl+(CX0+(CX1-CX0)*sz)*UP;
          for(let t=Math.floor(q*20),t1=Math.ceil(q*20);t<=t1;t++){const o=OUT[t],k=g*KT[t]*UP;
            for(let j=0;j<o.length;j+=2){const x=cx+o[j]*k;if(x>=xm)continue;const y=cy+o[j+1]*k+sd+s;
              for(const l of near)if(x<l[0]+m&&y>l[1]-m&&y<l[2]+m)return false;}}}
        return true;};
      // the earliest landing that stays clear, growing over as much of the settling as it can; where the copy is still
      // in the way at 70 % of the stretch, the figure grows only as far as stays clear
      let found=false;
      for(let pw=.5;pw<.705&&!found;pw+=.04)for(let qa=0;qa<.65&&!found;qa+=.1)if(clear(pw,qa)){PW=pw;QA=qa;found=true;}
      if(!found){PW=.7;QA=.6;let lo=G0,hi=G1;for(let k=0;k<10;k++){const md=(lo+hi)/2;size(md);if(G1>G0&&clear(PW,QA))lo=md;else hi=md;}size(lo);}
    }}
  S.setAttribute('viewBox',`0 0 ${W.toFixed(1)} ${H.toFixed(1)}`);
  FIG.style.width=(col+ext).toFixed(1)+'px';FIG.style.marginLeft=(-ext).toFixed(1)+'px';
  // the column is padded down to where the figure is held, so it never jumps when it starts to be held
  if(stacked){FIG.style.top='';FCOL.style.paddingTop='';}
  else{FIG.style.top=held?top.toFixed(0)+'px':'';FCOL.style.paddingTop=Math.max(0,top-sd).toFixed(0)+'px';}
  SHOWLAB=W>=300; labG.style.display=SHOWLAB?'':'none';   // a very small figure keeps no names
  DPR=Math.min(window.devicePixelRatio||1,2); const bw=Math.round((col+ext)*DPR), bh=Math.round(H*UP*DPR);
  if(DK.width!==bw)DK.width=bw; if(DK.height!==bh)DK.height=bh; DK.style.width=(col+ext).toFixed(1)+'px'; DK.style.height=(H*UP).toFixed(1)+'px';
  GS=-1;
}
layout();
fig={
  // the scroll only brings the figure in, and only whole: it fades in over a short stretch once its bottom edge is in
  // the window, and out as its top passes under the nav (88). Never seen cut off by either edge
  read:()=>{const r=FIG.getBoundingClientRect(),vh=innerHeight,nav=88*UP,run=Math.max(40,vh*.08);
    // stacked: from the scroll at which the figure is first whole (the top of the page, if it is whole there) until
    // it has risen a third of the window further; on the last layout's height, so an address bar coming and going does not jump it
    let p;if(STACK.matches){const lr=Math.max(40,LVH*.08),s0=Math.max(0,r.top+scrollY-(LVH-r.height-lr));p=clamp((scrollY-s0)/Math.max(200,LVH*.35));}
    else p=clamp((scrollY-SD)/DSEP);
    return {e:Math.min(clamp((vh-r.bottom)/run),clamp((r.top-nav)/run)),p};},
  write:s=>{const ch=s.e!==ENTER||(!RM&&s.p!==PT);ENTER=s.e;PT=s.p;if(ch&&!running)step(0);},
  relayout:()=>{layout();if(!running)step(0);},
  refont:()=>{measureLabs();layout();if(!running)step(0);}};
}
// one scroll pipeline: every read first, then every write
function frame(){
  const H=innerHeight, s=fig?fig.read():null, tops=RISE.map(e=>e.getBoundingClientRect().top);
  if(fig)fig.write(s);
  RISE.forEach((e,i)=>{const v=clamp((H*.94-tops[i])/(H*.2));if(e.__v!==v){e.__v=v;e.style.opacity=v.toFixed(3);e.style.transform=RM?'':'translate3d(0,'+((1-v)*18).toFixed(1)+'px,0)';}});
}
let q=false;const ask=()=>{if(!q){q=true;requestAnimationFrame(()=>{q=false;if(!dead)frame();});}};
let rz=false;const onResize=()=>{if(!rz){rz=true;requestAnimationFrame(()=>{rz=false;if(dead)return;if(fig)fig.relayout();frame();});}};
let fz=false;const onFonts=()=>{if(!fz){fz=true;requestAnimationFrame(()=>{fz=false;if(dead)return;if(fig){fig.refont();frame();}});}};
addEventListener('scroll',ask,{passive:true});undo.push(()=>removeEventListener('scroll',ask));
addEventListener('resize',onResize);undo.push(()=>removeEventListener('resize',onResize));
if(document.fonts&&document.fonts.addEventListener){document.fonts.addEventListener('loadingdone',onFonts);undo.push(()=>document.fonts.removeEventListener('loadingdone',onFonts));}
frame();
return teardown;
}catch(err){teardown();throw err;}


