if(!self.define){let e,r={};const t=(t,i)=>(t=new URL(t+".js",i).href,r[t]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=r,document.head.appendChild(e)}else e=t,importScripts(t),r()})).then((()=>{let e=r[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let c={};const o=e=>t(e,n),a={module:{uri:n},exports:c,require:o};r[n]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Bqm2ajl7.css",revision:null},{url:"index.html",revision:"6a71a0c3571377aa95ae771392c6d723"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"theater_react.ico",revision:"0bd42574b6ace3ede077334f8923e803"},{url:"theater_react.png",revision:"3dfb8f629300e1eb4f58f200ac59773b"},{url:"masked-theater_react.svg",revision:"5f688be51ec8dc9d55986b204978ba51"},{url:"theater_react192.png",revision:"538a83446504300563f6f3b10494c26b"},{url:"theater_react512.png",revision:"834a0945964c0574d9de732d1167d399"},{url:"manifest.webmanifest",revision:"0d7278cd1ff0f56d4a96808392aa066a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
