if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const c=e=>r(e,n),b={module:{uri:n},exports:d,require:c};s[n]=Promise.all(a.map((e=>b[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.DtNn7IgY.css",revision:"fe7c53867dbf73116d836b46a6839a28"},{url:"_app/immutable/assets/favicon.DUlhd3VQ.avif",revision:"fb304283b3696cc5db531a49744b3de9"},{url:"_app/immutable/chunks/entry.DEiLJATV.js",revision:"f97dfc520b3652ac56fd4e865c6a0e6c"},{url:"_app/immutable/chunks/index.BI7v63FY.js",revision:"d5368d39bd3bf59876e42a1851d811fe"},{url:"_app/immutable/chunks/index.YtH8uGs3.js",revision:"d9b14617b0802317a49b08d3979502a8"},{url:"_app/immutable/chunks/post_card.BSYtupfZ.js",revision:"2ea61a0a8efa6e4c79774c29588bb90c"},{url:"_app/immutable/chunks/post_layout.Bvx-xpBr.js",revision:"1f2d7decd22e48e13403251fc7c399ef"},{url:"_app/immutable/chunks/posts.82Sfq-Il.js",revision:"9f81fa592889ea9cac9dcbe1be54e96e"},{url:"_app/immutable/chunks/posts.BfFMgC-B.js",revision:"156e3de166fde353897b0480aaaf49e5"},{url:"_app/immutable/chunks/preload-helper.BQ24v_F8.js",revision:"472c6113b1d8c07d0abf58e2dc75283f"},{url:"_app/immutable/chunks/scheduler.FGUOCI5T.js",revision:"2fa015b27503f1afd3bacdc5aa48436f"},{url:"_app/immutable/chunks/stores.yYliZSne.js",revision:"be5b89b26d725c740b202942e52a8bcd"},{url:"_app/immutable/entry/app.DgxW9Ngq.js",revision:"7e943dfd272319f498de9a4f297cd8bb"},{url:"_app/immutable/entry/start.DGKDmw0C.js",revision:"fdbe85c899a0dbe82e2e3f60103ace90"},{url:"_app/immutable/nodes/0.CXQbNdyK.js",revision:"01b6320099f0085a5e5e7f74b3dc11e3"},{url:"_app/immutable/nodes/1.BF0ZPmnA.js",revision:"a4875b1ce79ab7a3599be43e16dc8a5a"},{url:"_app/immutable/nodes/2.a6Eiv7_S.js",revision:"aa059f8df70384e31e2c143216112735"},{url:"_app/immutable/nodes/3.sAilHrpZ.js",revision:"53847204880a1f70d0f8e5d4e0868786"},{url:"_app/immutable/nodes/4.ZvCY8WKQ.js",revision:"156cb9c0756ed3ed37bcf37b4616c094"},{url:"_app/immutable/nodes/5.BUmOLD-t.js",revision:"2922232d8901fce7a4542ea79ffc4fcb"},{url:"_app/immutable/nodes/6.Bm8kwBRw.js",revision:"9cf7612d09244e93a4913a51bb14760d"},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/GPU.png",revision:"4b14f6fc0d2a854d36df1e8b850411c9"},{url:"assets/linkedin_icon.png",revision:"3e7bba6fbfaf446335f2032a9c43aae4"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"assets/MatrixFree.png",revision:"3bc6e0b931f54835acf11b1e9dd92ba9"},{url:"assets/profile.png",revision:"a4446d81c31f73d5b55954857b533d88"},{url:"assets/quasiCrystal.png",revision:"fb1c6b802c0351010d889becd55b232c"},{url:"favicon.png",revision:"294caf1571d1c3053beb1c7bd1a76d28"},{url:"server/_app/immutable/assets/_layout.BT102rWk.css",revision:"62c50e54fd0188331c1194408432211f"},{url:"server/_app/immutable/assets/favicon.DUlhd3VQ.avif",revision:"fb304283b3696cc5db531a49744b3de9"},{url:"server/chunks/exports.js",revision:"e920d81e281ea3c66d681d1d6b1ea6aa"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"97697a2ab6f1d6a9d7d8126521bf45ac"},{url:"server/chunks/index.js",revision:"7d516ecf4065d6cd7f1cfd479a26ee95"},{url:"server/chunks/index2.js",revision:"8ebae786535102fbe234640fd4f6ebcc"},{url:"server/chunks/internal.js",revision:"0cb8a009cd7c66464a6cea2d2551c1d8"},{url:"server/chunks/post_card.js",revision:"3d57c4082ebe6a52766275310f0ae28b"},{url:"server/chunks/posts.js",revision:"790b196d724e38177e99691ddd302060"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"7bf51c8949cf5bae1c7927cdb9a1bf23"},{url:"server/chunks/ssr.js",revision:"47d1ebcbf5650d714c61c4e1161270ee"},{url:"server/chunks/stores.js",revision:"3f2ffa1498dcccbaaa2b35aa23b94315"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"738b71b8d25896b7825c5b82eda3a17f"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"9683781fe90d1aca90c3ba085f82d4d2"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"a55751f0342c61e027c4401460e67ccc"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"48ac44a8bfeb2b172771a8410ce00d7a"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"2696d65cf912a1c762ac6c693cb1842c"},{url:"server/entries/fallbacks/error.svelte.js",revision:"872888901dc3cf741c337a764cc7f3bd"},{url:"server/entries/pages/_layout.svelte.js",revision:"3377abcf69fcf5860516cf43777c0b58"},{url:"server/entries/pages/_layout.ts.js",revision:"c16450e3e496b092d739d84611674b71"},{url:"server/entries/pages/_page.svelte.js",revision:"250535536f0210a22c7180c5a5ed3627"},{url:"server/entries/pages/about/_page.svelte.md.js",revision:"ab28d9df6bef95228f154278e476af7e"},{url:"server/entries/pages/conferences/_page.md.js",revision:"566b6bf1fb3853aba9bc8ac334e02e09"},{url:"server/entries/pages/publications/_page.svelte.md.js",revision:"f53aee372bf49ae6126b9846a3ed1fe2"},{url:"server/entries/pages/workshops/_page.md.js",revision:"6aa87738b2b5c4fd55f055e1209d0d17"},{url:"server/index.js",revision:"62dfafb09409741d2cf4a51bc6f3b054"},{url:"server/internal.js",revision:"3981fc423a6eed9c7b6608a12de568ea"},{url:"server/manifest-full.js",revision:"028f45d17d794410fde63ab49fc1e9e6"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
