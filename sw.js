if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let b={};const d=e=>r(e,n),c={module:{uri:n},exports:b,require:d};s[n]=Promise.all(a.map((e=>c[e]||d(e)))).then((e=>(i(...e),b)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.DJxJb8ki.css",revision:"aaa0352bffd681465251c5043b4921b7"},{url:"_app/immutable/assets/favicon.DUlhd3VQ.avif",revision:"fb304283b3696cc5db531a49744b3de9"},{url:"_app/immutable/chunks/entry.B6989TeS.js",revision:"5bce14b8c230b7e9187150f5da11e13a"},{url:"_app/immutable/chunks/index.9evdQr_5.js",revision:"d913fc64221820baa111372185315f99"},{url:"_app/immutable/chunks/index.BI7v63FY.js",revision:"d5368d39bd3bf59876e42a1851d811fe"},{url:"_app/immutable/chunks/post_card.DhSvpDMV.js",revision:"6c1e253b949f9d387e4d35e4dc18801b"},{url:"_app/immutable/chunks/post_layout.fefH80cq.js",revision:"9e8b8976e0e5abe89a37f8b92d8bd2ee"},{url:"_app/immutable/chunks/posts.C_a7OzRK.js",revision:"ab1531fb608eed3baedc2bc610e78251"},{url:"_app/immutable/chunks/posts.DF4sdUAY.js",revision:"27f49311f28562592ff19eec6cad7bf3"},{url:"_app/immutable/chunks/preload-helper.BQ24v_F8.js",revision:"472c6113b1d8c07d0abf58e2dc75283f"},{url:"_app/immutable/chunks/scheduler.FGUOCI5T.js",revision:"2fa015b27503f1afd3bacdc5aa48436f"},{url:"_app/immutable/chunks/stores.BK_Dzb7P.js",revision:"178a1f4488e0992c2106d2a340426067"},{url:"_app/immutable/entry/app.C57us49A.js",revision:"192cbaa881dfa9f34b98a3142898f002"},{url:"_app/immutable/entry/start.BwzCKY-P.js",revision:"fc94365aa5331bbc59c18a58105ed6fc"},{url:"_app/immutable/nodes/0.B0LhBetC.js",revision:"04b9ffe63f0dbbf89086db1d7598551b"},{url:"_app/immutable/nodes/1.ByhH_FgR.js",revision:"fc1b00809e5423ded37fdd216bb29883"},{url:"_app/immutable/nodes/2.qRwPDKMJ.js",revision:"ae38e05a4dd6cd54fd0a30f33017d873"},{url:"_app/immutable/nodes/3.Du0JhQVi.js",revision:"f7e5f53f45ecbc328d7e012a79e88edc"},{url:"_app/immutable/nodes/4.CrR9QWdq.js",revision:"69b1ff8fc058365cfb96c2d1d07c3088"},{url:"_app/immutable/nodes/5.Cn8pMcD2.js",revision:"a3c0a5c5f59f0a46f243a8f95363a069"},{url:"_app/immutable/nodes/6.DqZTiD66.js",revision:"c1caaab875ba5374389d7929a2bc82c9"},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/GPU.png",revision:"4b14f6fc0d2a854d36df1e8b850411c9"},{url:"assets/linkedin_icon.png",revision:"3e7bba6fbfaf446335f2032a9c43aae4"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"assets/MatrixFree.png",revision:"3bc6e0b931f54835acf11b1e9dd92ba9"},{url:"assets/profile.png",revision:"a4446d81c31f73d5b55954857b533d88"},{url:"assets/quasiCrystal.png",revision:"fb1c6b802c0351010d889becd55b232c"},{url:"favicon.png",revision:"294caf1571d1c3053beb1c7bd1a76d28"},{url:"server/_app/immutable/assets/_layout.CDSb_F5v.css",revision:"4793d2db9a072a63f352135f56200586"},{url:"server/_app/immutable/assets/favicon.DUlhd3VQ.avif",revision:"fb304283b3696cc5db531a49744b3de9"},{url:"server/chunks/exports.js",revision:"e920d81e281ea3c66d681d1d6b1ea6aa"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"963cfe0b891755bd1bb5fdb650a90262"},{url:"server/chunks/index.js",revision:"7d516ecf4065d6cd7f1cfd479a26ee95"},{url:"server/chunks/index2.js",revision:"8ebae786535102fbe234640fd4f6ebcc"},{url:"server/chunks/internal.js",revision:"7cc77ec1a54202d871b7805725dba442"},{url:"server/chunks/post_card.js",revision:"b4246333d2a92543f66b29b0b0f8751a"},{url:"server/chunks/posts.js",revision:"e044eb69a1dcf85a89e4584d04566afe"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"597c498581e2156692d2fcda07125856"},{url:"server/chunks/ssr.js",revision:"47d1ebcbf5650d714c61c4e1161270ee"},{url:"server/chunks/stores.js",revision:"3f2ffa1498dcccbaaa2b35aa23b94315"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"738b71b8d25896b7825c5b82eda3a17f"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"9683781fe90d1aca90c3ba085f82d4d2"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"a55751f0342c61e027c4401460e67ccc"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"48ac44a8bfeb2b172771a8410ce00d7a"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"2696d65cf912a1c762ac6c693cb1842c"},{url:"server/entries/fallbacks/error.svelte.js",revision:"872888901dc3cf741c337a764cc7f3bd"},{url:"server/entries/pages/_layout.svelte.js",revision:"3377abcf69fcf5860516cf43777c0b58"},{url:"server/entries/pages/_layout.ts.js",revision:"c16450e3e496b092d739d84611674b71"},{url:"server/entries/pages/_page.svelte.js",revision:"250535536f0210a22c7180c5a5ed3627"},{url:"server/entries/pages/about/_page.svelte.md.js",revision:"ab28d9df6bef95228f154278e476af7e"},{url:"server/entries/pages/conferences/_page.md.js",revision:"566b6bf1fb3853aba9bc8ac334e02e09"},{url:"server/entries/pages/publications/_page.svelte.md.js",revision:"f53aee372bf49ae6126b9846a3ed1fe2"},{url:"server/entries/pages/teaching/_page.md.js",revision:"6aa87738b2b5c4fd55f055e1209d0d17"},{url:"server/index.js",revision:"62dfafb09409741d2cf4a51bc6f3b054"},{url:"server/internal.js",revision:"3981fc423a6eed9c7b6608a12de568ea"},{url:"server/manifest-full.js",revision:"1e993687fa0c403f447eb004bd894144"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
