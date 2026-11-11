# Star field tile following the home engine (OsmithT/tabit-site TabitSite.js): same four layers, brightness curves,
# point size / alpha by depth, star colours and the Gaussian core + halo, additive on Night #04070F.
import numpy as np, math
from PIL import Image
import os
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','images')+'/'
W,H,PR=1280,1440,2            # tile: one 1280-wide column, two screens tall, rendered at 2x
seed=[11]
def rnd():
    seed[0]=(seed[0]*16807)%2147483647; return (seed[0]-1)/2147483646
lerp=lambda a,b,t:a+(b-a)*t
TEMP=[[.80,.86,1,.12],[.97,.97,1,.38],[1,.96,.88,.28],[1,.91,.76,.14],[1,.82,.66,.08]]
def pickCol():
    r=rnd(); acc=0
    for c in TEMP:
        acc+=c[3]
        if r<acc: return c
    return TEMP[1]
Zo=1800; ZF=Zo*.92/.95
LAYERS=[dict(z0=520,z1=900,n=900,pw=2.8,amp=.85,dim=.03),dict(z0=-1600,z1=-1000,n=2600,pw=3.3,amp=.78,dim=.11),
        dict(z0=-5500,z1=-3500,n=6000,pw=4.0,amp=.7,dim=.25),dict(z0=-16000,z1=-12000,n=12000,pw=6.0,amp=.5,dim=.45)]
area=(W*H)/(1720*1040)           # home spreads each layer over 1720 x 1040 screen units
img=np.zeros((H*PR,W*PR,3),np.float64)
cl=lambda x,a,b:max(a,min(b,x))
count=0
for L in LAYERS:
    for q in range(int(round(L['n']*area))):
        z=lerp(L['z0'],L['z1'],rnd()); x=rnd()*W; y=rnd()*H
        b=(rnd()**L['pw'])*L['amp']; c=pickCol(); k=L['dim']
        col=np.array([lerp(c[0],.74,k),lerp(c[1],.8,k),lerp(c[2],.94,k)])
        d=ZF-z
        size=(1.05+5.2*b**1.6)*cl(3400/d,.75,1.6)*PR
        a=(0.32+0.68*b)*cl(2600/d,.5,1.22)*0.93*0.8   # 0.93 = mean twinkle; 0.8 matched by eye to the live home page
        rad=size/2; R=int(math.ceil(rad))+1
        cx,cy=x*PR,y*PR
        x0,x1=int(cx)-R,int(cx)+R+1; y0,y1=int(cy)-R,int(cy)+R+1
        yy,xx=np.mgrid[y0:y1,x0:x1]+0.5
        r=np.sqrt((xx-cx)**2+(yy-cy)**2)/rad
        g=(np.exp(-r*r*12)+(0.07+0.42*b*b)*np.exp(-r*r*2.3))*a
        g[r>1]=0
        # wrap so the tile repeats seamlessly
        img[np.ix_(np.arange(y0,y1)%(H*PR),np.arange(x0,x1)%(W*PR))]+=g[...,None]*col
        count+=1
bg=np.array([4,7,15])/255.
out=np.clip(bg+img,0,1)
Image.fromarray((out*255+.5).astype(np.uint8)).save(OUT+'tabit-sky-tile.jpg',quality=88,optimize=True,progressive=True)
print(count)
