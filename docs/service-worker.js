if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let o={};const r=s=>a(s,t),b={module:{uri:t},exports:o,require:r};e[t]=Promise.all(c.map((s=>b[s]||r(s)))).then((s=>(i(...s),o)))}}define(["./workbox-5b385ed2"],(function(s){"use strict";s.setCacheNameDetails({prefix:"backstage-vue3"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/backstage-vue3/css/146.3a49afba.css",revision:null},{url:"/backstage-vue3/css/331.3a49afba.css",revision:null},{url:"/backstage-vue3/css/545.15d37a70.css",revision:null},{url:"/backstage-vue3/css/653.3a49afba.css",revision:null},{url:"/backstage-vue3/css/824.4916a807.css",revision:null},{url:"/backstage-vue3/css/app.4ec54d1f.css",revision:null},{url:"/backstage-vue3/css/chunk-vendors.c93aebbb.css",revision:null},{url:"/backstage-vue3/index.html",revision:"fdcb86c94b094e83f0985510941023d7"},{url:"/backstage-vue3/js/126.2a7793a1.js",revision:null},{url:"/backstage-vue3/js/146.3cd1c469.js",revision:null},{url:"/backstage-vue3/js/331.971e2d17.js",revision:null},{url:"/backstage-vue3/js/545.61c4e24b.js",revision:null},{url:"/backstage-vue3/js/653.82888ac1.js",revision:null},{url:"/backstage-vue3/js/824.23fdc32b.js",revision:null},{url:"/backstage-vue3/js/app.488df1ba.js",revision:null},{url:"/backstage-vue3/manifest.json",revision:"e8216205f04020829134dd81c493724d"},{url:"/backstage-vue3/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"/backstage-vue3/static/apiDocs2/.nojekyll",revision:"527ed13d9651065487492991875c804a"},{url:"/backstage-vue3/static/apiDocs2/assets/highlight.css",revision:"b41df4610cf386a38309bb9e9cd1f0fc"},{url:"/backstage-vue3/static/apiDocs2/assets/icons.css",revision:"a4aa88c9a84d35ffe64bbfa1b6c15967"},{url:"/backstage-vue3/static/apiDocs2/assets/icons.png",revision:"4236e5a0bb47422905ea154fc1d0d776"},{url:"/backstage-vue3/static/apiDocs2/assets/icons@2x.png",revision:"f961196de7df03267d72862d1efb2080"},{url:"/backstage-vue3/static/apiDocs2/assets/main.js",revision:"e0dd5bb6e3dc0316c12db108ccad6f1a"},{url:"/backstage-vue3/static/apiDocs2/assets/search.js",revision:"972008d47f814a43c7dc92f9810531ae"},{url:"/backstage-vue3/static/apiDocs2/assets/style.css",revision:"54a24b8d00af53a480b7b7bb7be97d7c"},{url:"/backstage-vue3/static/apiDocs2/assets/widgets.png",revision:"7688cb8a394f86c2603e79bac2957930"},{url:"/backstage-vue3/static/apiDocs2/assets/widgets@2x.png",revision:"a93614f3258df0e43a85d15ae6280cb0"},{url:"/backstage-vue3/static/apiDocs2/index.html",revision:"d9604f8072c90061b0b2f683361e399d"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsButtons.buttonFace.html",revision:"3af3d2507bd91ab9a0abe43dd9299a11"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsDialog.dialogFace.html",revision:"f1199597e0346e0147e3d8b5a9865346"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsDialog_BsFormDialog.dialogFormFace.html",revision:"ecb1e23571fe91a990660d22ac306c44"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsDialog_BsFormDialog.dialogFormShowConfigFace.html",revision:"a39bc475ecd824d9d4414ece2ae5f89f"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsDialog_BsListDialog.dialogListFace.html",revision:"e653941bc6a1d03006dfc3b14412c882"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsDialog_BsListDialog.dialogListShowConfigFace.html",revision:"a1d9834dbf65deedc0f3ac15df846307"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsEditTable.editTableColumnsItemConfig.html",revision:"498ed251bc71662279441a6b8512c751"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsEditTable.editTableConfigFace.html",revision:"e9c68e815a879b4a9728ab0aedf9d927"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.cascaderProps.html",revision:"8827d443f071dd5232c65b909e6de425"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.checkboxProps.html",revision:"d32df7feff9ff8a4b8dd99419b7b240e"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.collapseProps.html",revision:"41dc93bb95d49bbf5bc789431f27fce9"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.dateProps.html",revision:"c61607793957b99a7d64bf79140e7875"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.dateRangeProps.html",revision:"44014ed4cea6c2849c1e0eb996b89d24"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.editTableProps.html",revision:"68da0372963cfe110371e203dde5ab8a"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.formConfig.html",revision:"6eb7e6108de9bd9411e9cc1cfa94bfc3"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.inputProps.html",revision:"ceaf97948bc2c47b59aba643ecbc4e3a"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.numberProps.html",revision:"3f7923e49b2436fadfda89ef4ad7d020"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.numberRangeProps.html",revision:"8d36f71c4bdc608dd8ff6546922303d0"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.passwordProps.html",revision:"e2d8c383d5b3db58c9fd70098d55dba7"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.radioProps.html",revision:"30b14f9d67146a58af785383d6568747"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.renderProps.html",revision:"c8dd7991ce8777e9c4658ddf6f975f48"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.selectProps.html",revision:"88de31dba6f3ae686490ef8cd6667205"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.switchProps.html",revision:"8d2736f7ea062de692081150f82609c8"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.textProps.html",revision:"d727876cc044a950da343b8304fe6e54"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsForm.textareaProps.html",revision:"4383d095641c631e9d8550548965597f"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsTable.columnsConfigFace.html",revision:"c116e2ea9a68811d5084fd20d9a2b8ae"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsTable.loadDataFace.html",revision:"86a9a455b7e1a3a4027bdeaadf9bddf6"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsTable.pagingConfigFace.html",revision:"a23ce9c087a15c823588b91b259b197c"},{url:"/backstage-vue3/static/apiDocs2/interfaces/BsTable.tableConfigFace.html",revision:"74dfe44122915ce614a5b7411cef3b7a"},{url:"/backstage-vue3/static/apiDocs2/modules.html",revision:"6653b22c68c8098eeb29fb4942f8c9b7"},{url:"/backstage-vue3/static/apiDocs2/modules/BsButtons.html",revision:"a28a7d05491cea986686fe6993c2a152"},{url:"/backstage-vue3/static/apiDocs2/modules/BsDialog.html",revision:"e336a1231088698bbc5939079a145dd8"},{url:"/backstage-vue3/static/apiDocs2/modules/BsDialog_BsFormDialog.html",revision:"359e0c98156ab1a0233198d165b29bf2"},{url:"/backstage-vue3/static/apiDocs2/modules/BsDialog_BsListDialog.html",revision:"58b3bb38a8a83d07e494a9652088095b"},{url:"/backstage-vue3/static/apiDocs2/modules/BsEditTable.html",revision:"6cc4797488daf87f9d3692d8d0d7a2f6"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm.html",revision:"c81d5cc5e0e48679b5392f66b95e27fb"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsCascader.html",revision:"7567fbf92617b73b596c2e0c75420c1e"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsCheckbox.html",revision:"2b2e80dab30b04afbcd70ebe60088208"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsCollapse.html",revision:"70db0db6256c2c8d36081914420721dd"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsDate.html",revision:"c4eec12474fdcce8c58b6d0d22a22d1a"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsDateRange.html",revision:"e446c8e4610c1f727c547165da0d45a2"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsInput.html",revision:"875259bc32ef3998f2d95b92d7aac412"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsNumber.html",revision:"6764afe3184734f477cf62747aab5eeb"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsNumberRange.html",revision:"a5ae3ddb58d6d6e344919b824eafd636"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsPasswod.html",revision:"8b7abb5e58dabb6b7064d74d3085e524"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsRadio.html",revision:"62595ba5195d165316995039c6bd1b68"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsSelect.html",revision:"d25113e6c37c086a43135f98fb4b198c"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsSwitch.html",revision:"ed20682a19242f8d6619154ef714db6b"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsText.html",revision:"67fb653cda4df3c02b4091bdda7dbd5f"},{url:"/backstage-vue3/static/apiDocs2/modules/BsForm_components_BsTextarea.html",revision:"f41aa7f195d480b9340b4d9a59fb864c"},{url:"/backstage-vue3/static/apiDocs2/modules/BsTable.html",revision:"22a1d691717143a02c75d1754655cc9a"},{url:"/backstage-vue3/static/image/README/1693816439592.png",revision:"441d51cc5c925f6c620ff124db154194"}],{})}));
