if(!self.define){let s,l={};const r=(r,c)=>(r=new URL(r+".js",c).href,l[r]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=l,document.head.appendChild(s)}else s=r,importScripts(r),l()})).then((()=>{let s=l[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(c,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let e={};const u=s=>r(s,n),o={module:{uri:n},exports:e,require:u};l[n]=Promise.all(c.map((s=>o[s]||u(s)))).then((s=>(i(...s),e)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ease-form"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/116.dc28bc4d.css",revision:null},{url:"/css/117.dc28bc4d.css",revision:null},{url:"/css/253.dc28bc4d.css",revision:null},{url:"/css/346.dc28bc4d.css",revision:null},{url:"/css/370.dc28bc4d.css",revision:null},{url:"/css/534.dc28bc4d.css",revision:null},{url:"/css/694.dc28bc4d.css",revision:null},{url:"/css/935.dc28bc4d.css",revision:null},{url:"/css/962.dc28bc4d.css",revision:null},{url:"/css/97.dc28bc4d.css",revision:null},{url:"/css/app.b2a3382f.css",revision:null},{url:"/index.html",revision:"87540d33259edc1ab554a69c590287a4"},{url:"/js/116.0f6ecd40.js",revision:null},{url:"/js/117.cdea99c5.js",revision:null},{url:"/js/223.33790ab0.js",revision:null},{url:"/js/253.27aac785.js",revision:null},{url:"/js/346.0dd2d0a2.js",revision:null},{url:"/js/370.1c8ca5b6.js",revision:null},{url:"/js/534.035213ea.js",revision:null},{url:"/js/564.10d4b088.js",revision:null},{url:"/js/694.39dcc44c.js",revision:null},{url:"/js/935.cb0ddd15.js",revision:null},{url:"/js/962.8bb75c40.js",revision:null},{url:"/js/97.196273d3.js",revision:null},{url:"/js/app.0bac394c.js",revision:null},{url:"/js/chunk-vendors.fbdb7051.js",revision:null},{url:"/manifest.json",revision:"8b6b1668cf8bd50059e4b574d474b9b1"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
