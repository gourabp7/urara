import{s as ge,i as St,u as Vt,j as Yt,k as Nt,o as Gl,h as Kl,g as Wl,d as Yl,b as Pe,a as zt,e as Ol,n as Nl}from"../chunks/scheduler.FGUOCI5T.js";import{S as De,i as xe,e as p,c,a as M,d as l,u as v,g as n,h as Zl,n as T,o as L,B as Jl,y as es,F as Ot,k as g,l as D,m as x,p as k,s as F,H as $l,t as Ut,q as _,f as m,r as Ul,b as jt}from"../chunks/index.TPYxZWDS.js";import{P as ts,g as ls,a as jl}from"../chunks/post_layout.BhlIkgTg.js";import"../chunks/posts.4dVmwM_k.js";import{b as $t}from"../chunks/posts.DhIe2gb_.js";function ss(d){let t,i,s;const u=d[1].default,o=St(u,d,d[0],null);return{c(){t=p("div"),i=p("table"),o&&o.c(),this.h()},l(r){t=c(r,"DIV",{class:!0});var f=M(t);i=c(f,"TABLE",{class:!0});var h=M(i);o&&o.l(h),h.forEach(l),f.forEach(l),this.h()},h(){v(i,"class","table w-full"),v(t,"class","overflow-x-auto mb-4")},m(r,f){n(r,t,f),Zl(t,i),o&&o.m(i,null),s=!0},p(r,[f]){o&&o.p&&(!s||f&1)&&Vt(o,u,r,r[0],s?Nt(u,r[0],f,null):Yt(r[0]),null)},i(r){s||(T(o,r),s=!0)},o(r){L(o,r),s=!1},d(r){r&&l(t),o&&o.d(r)}}}function is(d,t,i){let{$$slots:s={},$$scope:u}=t;return d.$$set=o=>{"$$scope"in o&&i(0,u=o.$$scope)},[u,s]}class zl extends De{constructor(t){super(),xe(this,t,is,ss,ge,{})}}function ns(d){let t,i,s;const u=d[5].default,o=St(u,d,d[4],null);return{c(){t=p("div"),o&&o.c()},l(r){t=c(r,"DIV",{});var f=M(t);o&&o.l(f),f.forEach(l)},m(r,f){n(r,t,f),o&&o.m(t,null),s=!0},p(r,f){o&&o.p&&(!s||f&16)&&Vt(o,u,r,r[4],s?Nt(u,r[4],f,null):Yt(r[4]),null)},i(r){s||(T(o,r),r&&Yl(()=>{s&&(i||(i=Ot(t,$t,{},!0)),i.run(1))}),s=!0)},o(r){L(o,r),r&&(i||(i=Ot(t,$t,{},!1)),i.run(0)),s=!1},d(r){r&&l(t),o&&o.d(r),r&&i&&i.end()}}}function as(d){let t,i,s;const u=d[5].default,o=St(u,d,d[4],null);return{c(){t=p("div"),o&&o.c()},l(r){t=c(r,"DIV",{});var f=M(t);o&&o.l(f),f.forEach(l)},m(r,f){n(r,t,f),o&&o.m(t,null),s=!0},p(r,f){o&&o.p&&(!s||f&16)&&Vt(o,u,r,r[4],s?Nt(u,r[4],f,null):Yt(r[4]),null)},i(r){s||(T(o,r),r&&Yl(()=>{s&&(i||(i=Ot(t,$t,{},!0)),i.run(1))}),s=!0)},o(r){L(o,r),r&&(i||(i=Ot(t,$t,{},!1)),i.run(0)),s=!1},d(r){r&&l(t),o&&o.d(r),r&&i&&i.end()}}}function os(d){let t,i,s,u;const o=[as,ns],r=[];function f(h,b){return h[0]?0:h[1]?1:-1}return~(i=f(d))&&(s=r[i]=o[i](d)),{c(){t=p("div"),s&&s.c(),this.h()},l(h){t=c(h,"DIV",{"data-testid":!0});var b=M(t);s&&s.l(b),b.forEach(l),this.h()},h(){v(t,"data-testid","general-observer")},m(h,b){n(h,t,b),~i&&r[i].m(t,null),d[6](t),u=!0},p(h,[b]){let C=i;i=f(h),i===C?~i&&r[i].p(h,b):(s&&(Jl(),L(r[C],1,1,()=>{r[C]=null}),es()),~i?(s=r[i],s?s.p(h,b):(s=r[i]=o[i](h),s.c()),T(s,1),s.m(t,null)):s=null)},i(h){u||(T(s),u=!0)},o(h){L(s),u=!1},d(h){h&&l(t),~i&&r[i].d(),d[6](null)}}}function rs(d,t,i){let{$$slots:s={},$$scope:u}=t,{threshold:o=.5}=t,{disable_observer:r=!1}=t,f=r,h,C=typeof IntersectionObserver<"u"&&!r?new IntersectionObserver(E=>{E.forEach(H=>{H.intersectionRatio>=o&&(i(1,f=!0),C.disconnect())})},{rootMargin:"0px",threshold:o}):null;Gl(()=>{C&&C.observe(h)}),Kl(()=>{C&&C.disconnect()});function Te(E){Wl[E?"unshift":"push"](()=>{h=E,i(2,h)})}return d.$$set=E=>{"threshold"in E&&i(3,o=E.threshold),"disable_observer"in E&&i(0,r=E.disable_observer),"$$scope"in E&&i(4,u=E.$$scope)},[r,f,h,o,u,s,Te]}class Zt extends De{constructor(t){super(),xe(this,t,rs,os,ge,{threshold:3,disable_observer:0})}}function us(d){let t,i,s;return{c(){t=p("iframe"),this.h()},l(u){t=c(u,"IFRAME",{width:!0,height:!0,title:!0,scrolling:!0,frameborder:!0,allow:!0,src:!0,style:!0}),M(t).forEach(l),this.h()},h(){v(t,"width",d[1]),v(t,"height",d[2]),v(t,"title",i=`soundcloud-${d[0]}`),v(t,"scrolling","false"),v(t,"frameborder","0"),v(t,"allow","autoplay"),Pe(t.src,s="https://w.soundcloud.com/player/?url="+d[0]+"&visual="+d[3])||v(t,"src",s),v(t,"style",d[5])},m(u,o){n(u,t,o)},p(u,o){o&2&&v(t,"width",u[1]),o&4&&v(t,"height",u[2]),o&1&&i!==(i=`soundcloud-${u[0]}`)&&v(t,"title",i),o&9&&!Pe(t.src,s="https://w.soundcloud.com/player/?url="+u[0]+"&visual="+u[3])&&v(t,"src",s),o&32&&v(t,"style",u[5])},d(u){u&&l(t)}}}function ds(d){let t,i;return t=new Zt({props:{disable_observer:d[4],$$slots:{default:[us]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,u){x(t,s,u),i=!0},p(s,[u]){const o={};u&16&&(o.disable_observer=s[4]),u&111&&(o.$$scope={dirty:u,ctx:s}),t.$set(o)},i(s){i||(T(t.$$.fragment,s),i=!0)},o(s){L(t.$$.fragment,s),i=!1},d(s){k(t,s)}}}function fs(d,t,i){let{soundcloudLink:s=""}=t,{width:u="100%"}=t,{height:o="300px"}=t,{showVisual:r=!0}=t,{disable_observer:f=!1}=t,{iframe_styles:h=""}=t;return d.$$set=b=>{"soundcloudLink"in b&&i(0,s=b.soundcloudLink),"width"in b&&i(1,u=b.width),"height"in b&&i(2,o=b.height),"showVisual"in b&&i(3,r=b.showVisual),"disable_observer"in b&&i(4,f=b.disable_observer),"iframe_styles"in b&&i(5,h=b.iframe_styles)},[s,u,o,r,f,h]}class ps extends De{constructor(t){super(),xe(this,t,fs,ds,ge,{soundcloudLink:0,width:1,height:2,showVisual:3,disable_observer:4,iframe_styles:5})}}function cs(d){let t,i,s;return{c(){t=p("iframe"),this.h()},l(u){t=c(u,"IFRAME",{"data-testid":!0,title:!0,class:!0,src:!0,frameborder:!0,allow:!0,style:!0}),M(t).forEach(l),this.h()},h(){v(t,"data-testid","spotify"),v(t,"title",i=`spotify-${d[0]}`),v(t,"class","spotify-sveltekit-embed"),Pe(t.src,s=`https://open.spotify.com/embed/${d[0]}`)||v(t,"src",s),v(t,"frameborder","0"),v(t,"allow","encrypted-media"),v(t,"style",d[2])},m(u,o){n(u,t,o)},p(u,o){o&1&&i!==(i=`spotify-${u[0]}`)&&v(t,"title",i),o&1&&!Pe(t.src,s=`https://open.spotify.com/embed/${u[0]}`)&&v(t,"src",s),o&4&&v(t,"style",u[2])},d(u){u&&l(t)}}}function Fs(d){let t,i;return t=new Zt({props:{disable_observer:d[1],$$slots:{default:[cs]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,u){x(t,s,u),i=!0},p(s,[u]){const o={};u&2&&(o.disable_observer=s[1]),u&37&&(o.$$scope={dirty:u,ctx:s}),t.$set(o)},i(s){i||(T(t.$$.fragment,s),i=!0)},o(s){L(t.$$.fragment,s),i=!1},d(s){k(t,s)}}}function ms(d,t,i){let{spotifyLink:s=""}=t,{width:u="100%"}=t,{height:o="152px"}=t,{disable_observer:r=!1}=t,{iframe_styles:f=`
		border-radius: 0.8rem;
		height: ${o};
		width: ${u};
	`}=t;return d.$$set=h=>{"spotifyLink"in h&&i(0,s=h.spotifyLink),"width"in h&&i(3,u=h.width),"height"in h&&i(4,o=h.height),"disable_observer"in h&&i(1,r=h.disable_observer),"iframe_styles"in h&&i(2,f=h.iframe_styles)},[s,r,f,u,o]}class vs extends De{constructor(t){super(),xe(this,t,ms,Fs,ge,{spotifyLink:0,width:3,height:4,disable_observer:1,iframe_styles:2})}}const hs={"1:1":"padding-top: 100%;","16:9":"padding-top: 56.25%;","4:3":"padding-top: 75%;","3:2":"padding-top: 66.66%;","8.5":"padding-top: 62.5%;"},Sl=d=>hs[d];function _s(d){let t,i,s,u,o,r;return{c(){t=p("div"),i=p("iframe"),this.h()},l(f){t=c(f,"DIV",{style:!0});var h=M(t);i=c(h,"IFRAME",{"data-testid":!0,title:!0,src:!0,frameborder:!0,allow:!0,style:!0}),M(i).forEach(l),h.forEach(l),this.h()},h(){v(i,"data-testid","youTube"),v(i,"title",s=`youTube-${d[1].length>0?d[1]:d[0]}`),Pe(i.src,u=d[5])||v(i,"src",u),v(i,"frameborder","0"),v(i,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),i.allowFullscreen=!0,v(i,"style",o=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${d[4]}
    `),v(t,"style",r=`
    	position: relative;
    	width: 100%;
  	  ${Sl(d[2])}
  `)},m(f,h){n(f,t,h),Zl(t,i)},p(f,h){h&3&&s!==(s=`youTube-${f[1].length>0?f[1]:f[0]}`)&&v(i,"title",s),h&16&&o!==(o=`
	      position: absolute;
  	    top: 0;
    	  left: 0;
      	width: 100%;
      	height: 100%;
				${f[4]}
    `)&&v(i,"style",o),h&4&&r!==(r=`
    	position: relative;
    	width: 100%;
  	  ${Sl(f[2])}
  `)&&v(t,"style",r)},d(f){f&&l(t)}}}function bs(d){let t,i;return t=new Zt({props:{disable_observer:d[3],$$slots:{default:[_s]},$$scope:{ctx:d}}}),{c(){g(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,u){x(t,s,u),i=!0},p(s,[u]){const o={};u&8&&(o.disable_observer=s[3]),u&32791&&(o.$$scope={dirty:u,ctx:s}),t.$set(o)},i(s){i||(T(t.$$.fragment,s),i=!0)},o(s){L(t.$$.fragment,s),i=!1},d(s){k(t,s)}}}function ys(d,t,i){let{youTubeId:s=""}=t,{listId:u=""}=t,{autoPlay:o=!1}=t,{aspectRatio:r="16:9"}=t,{skipTo:f={h:0,m:0,s:0}}=t,{disable_observer:h=!1}=t,{iframe_styles:b=`
		border-radius: 0.6rem;
	`}=t;const{h:C,m:Te,s:E}=f,H=C*60*60,qe=Te*60,Le=H+qe+E,He=`https://www.youtube-nocookie.com/embed/${s.length>0?`${s}?autoplay=${o}&start=${Le}`:`?videoseries?list=${u}`}`;return d.$$set=y=>{"youTubeId"in y&&i(0,s=y.youTubeId),"listId"in y&&i(1,u=y.listId),"autoPlay"in y&&i(6,o=y.autoPlay),"aspectRatio"in y&&i(2,r=y.aspectRatio),"skipTo"in y&&i(7,f=y.skipTo),"disable_observer"in y&&i(3,h=y.disable_observer),"iframe_styles"in y&&i(4,b=y.iframe_styles)},[s,u,r,h,b,He,o,f]}class Cs extends De{constructor(t){super(),xe(this,t,ys,bs,ge,{youTubeId:0,listId:1,autoPlay:6,aspectRatio:2,skipTo:7,disable_observer:3,iframe_styles:4})}}function Es(d){let t,i="<tr><th>Table Header 1</th> <th>Table Header 2</th> <th>Table Header 3</th></tr>",s,u,o="<tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr> <tr><td>Division 1</td> <td>Division 2</td> <td>Division 3</td></tr>";return{c(){t=p("thead"),t.innerHTML=i,s=F(),u=p("tbody"),u.innerHTML=o},l(r){t=c(r,"THEAD",{"data-svelte-h":!0}),_(t)!=="svelte-gczjan"&&(t.innerHTML=i),s=m(r),u=c(r,"TBODY",{"data-svelte-h":!0}),_(u)!=="svelte-idip7f"&&(u.innerHTML=o)},m(r,f){n(r,t,f),n(r,s,f),n(r,u,f)},p:Nl,d(r){r&&(l(t),l(s),l(u))}}}function Ts(d){let t,i='<tr><th align="left">Table Header 1</th> <th align="center">Table Header 2</th> <th align="right">Table Header 3</th></tr>',s,u,o='<tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr> <tr><td align="left">Division 1</td> <td align="center">Division 2</td> <td align="right">Division 3</td></tr>';return{c(){t=p("thead"),t.innerHTML=i,s=F(),u=p("tbody"),u.innerHTML=o},l(r){t=c(r,"THEAD",{"data-svelte-h":!0}),_(t)!=="svelte-7vsuop"&&(t.innerHTML=i),s=m(r),u=c(r,"TBODY",{"data-svelte-h":!0}),_(u)!=="svelte-16i6pl9"&&(u.innerHTML=o)},m(r,f){n(r,t,f),n(r,s,f),n(r,u,f)},p:Nl,d(r){r&&(l(t),l(s),l(u))}}}function Ls(d){let t,i='<a href="#headings">Headings</a>',s,u,o='<a href="#heading">Heading</a>',r,f,h='<a href="#heading-1">Heading</a>',b,C,Te='<a href="#heading-2">Heading</a>',E,H,qe='<a href="#heading-3">Heading</a>',Le,ke,He,y,Qt='<a href="#paragraphs">Paragraphs</a>',Ae,Z,Xt='<span class="spoiler">spoiler</span>',Re,Q,Gt='<strong><em>The</em></strong> <em>quick</em> <u>brown</u> <a href="https://www.foxnews.com/" rel="nofollow noopener noreferrer external" target="_blank">fox</a> <code>jumps</code> <del>over</del> the lazy <strong>dog</strong>.',Oe,X,Kt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",$e,G,Wt="建格的何另始養離腳合兒現各談花車是都無處與費別、信善行修覺自！壓總談下市率應次司公母兒用什一線送用標地倒直作任老數年白安足個後引使名隊懷持日落異今特族？",Ue,K,Jt="一士我像衣買了人義，計念？",je,W,el="期老外並中般灣作各現初知強車我的品式企國立市它北待不型師文人注信方，各成能久，然的孩界，他事應在創灣字母寫麼，會不作散際，學節水……全當名己會天還著行多是生如內他道了家至種樣見景時一……區行水影。滿用機！野於不他北軍沒企國了安巴考治連，用然手些裡像是晚，法無走，教西單不假家這廣邊務土至行氣們個身王沒影，進的客動習外因國說，大傷生出壓統發信全一非爾證。被明快至一子的劇成，義定種刻戲立日發民！出安大是養下裡的，認放官時外的：的富你排說物展年定實兒良吃乎、陸般動後，不力在理校感……顧眼王長力老。",ze,J,tl="重多一？生光聯……動說麼了：起形市般我題臉事級。",Se,ee,ll="<p>In solitude, where we are least alone.</p>",Ve,te,sl="私は絶対いよいよ漠然たる相当心に対してはずの他にできるならな。けっして今に養成めも何だか漠然たる仕事たないだけにしからならでをは話安んずるないですて、わざわざには聴いましたなけれた。権力を気がつきなのはどうしても先刻が毫もらしくでう。",Ye,le,il="ようやく嘉納さんに供獄とても承諾をやるでしょ習慣その主義それか攻撃にに対してお関係でたあるですと、その今は俺か釣竿頭に喜ぶば、嘉納さんののより考のそれをよくごふりと云ってあなた一団がお融和へ見えようにまあご経験にしずませば、とうとうもっとも誤解になるたでいるないのを思っですた。しかもしかしながら大首へする気もずいぶん美味と移ろたて、この言葉にもいうですてってがたにしてしまえたない。この限り時代のためその学校も私上を吹き込んんかと大森さんをしなませ、人の今日んというご講義ただですば、晩の時で長靴が始めだけの時代に前もっでいて、どうの今日が思えばそのためとあたかも足りんなとしだ事でが、ないますなて少し実職業いでし事だろたませ。",Ne,se,nl="さて学校か不幸か話に教えですけれども、今中力が起るて得るですためがご講演の今に訊かたです。多年をはどうしても思うでいうんたずでと、まるで何とも繰り返しが周旋はさっそく悪いうので。",Ze,ie,al='<a href="#headings">scrollToTop</a>',Qe,Xe,Ge,w,ol='<a href="#lists">Lists</a>',Ke,B,rl='<a href="#definition-list-dl">Definition List (dl)</a>',We,ne,ul="<dt>Definition List Title</dt><dd>This is a definition list division.</dd>",Je,I,dl='<a href="#ordered-list-ol">Ordered List (ol)</a>',et,ae,fl="<li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li>",tt,P,pl='<a href="#unordered-list-ul">Unordered List (ul)</a>',lt,oe,cl="<li>List Item 1</li> <li>List Item 2</li> <li>List Item 3</li>",st,q,Fl='<a href="#checkbox-list-ul">Checkbox List (ul)</a>',it,A,ml='<li class="task-list-item"><input type="checkbox" disabled=""/> List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> List Item 2 checked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> List Item 3 checked<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""/> Sub List Item 1 unchecked</li> <li class="task-list-item"><input type="checkbox" checked="" disabled=""/> Sub List Item 1 checked</li></ul></li>',nt,R,vl='<a href="#table">Table</a>',at,O,ot,$,rt,re,hl='<a href="#headings">scrollToTop</a>',ut,U,_l='<a href="#footnotes">Footnotes</a>',dt,ue,bl='Here is a footnote reference. <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>',ft,de,yl='This is a long note. <sup id="fnref-longnote"><a href="#fn-longnote" class="footnote-ref">longnote</a></sup>',pt,fe,Cl='This is an inline note. <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>',ct,pe,El='<a href="#headings">scrollToTop</a>',Ft,j,Tl='<a href="#code">Code</a>',mt,Me,Ql=`<pre class="shiki material-default with-title twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true" title="examples/index.ts"><div class='code-title'>examples/index.ts</div><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> <data-lsp lsp='const x: string' >x</data-lsp> </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> [</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">]) <data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #89DDFF">.</span><span style="color: #82AAFF"><data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp></span><span style="color: #EEFFFF">(<data-lsp lsp='const x: string' >x</data-lsp>)</span></div></code></div></pre>`,we,Be,Xl=`<pre class="shiki material-default twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* some fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">name</span><span style="color: #89DDFF">:<data-lsp lsp='const a: NameLabel' ></data-lsp></span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* other fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'><span style="color: #C792EA">type</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span></div><div class='line dim'><span style="color: #546E7A">// This comment should not be included</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #546E7A">// ---cut---</span></div><div class='line dim'><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;(</span><span style="color: #EEFFFF">idOrName</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">):</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line dim'><span style="color: #F07178">  </span><span style="color: #89DDFF">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">unimplemented</span><span style="color: #89DDFF">&apos;</span></div><div class='line dim'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #C792EA">const</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">typescript</span><span style="color: #89DDFF">&apos;</span><span style="color: #EEFFFF">)</span></div></code></div></pre>`,Ie,z,Ll='<a href="#misc">Misc</a>',vt,ce,Hl="Lorem",ht,Fe,gl="ipsum",_t,me,Dl="dolor sit amet",bt,S,xl="consectetur adipiscing elit",yt,V,kl="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",Ct,Et,Tt,Lt,ve,Ml="リバースカードオープン、エネミーコントローラー！",Ht,he,wl="ライフを 1000 払い、コマンド入力、<kbd>←</kbd> <kbd>→</kbd> <kbd>A</kbd> <kbd>B</kbd>！",gt,_e,Bl="このコマンドにより、全てのアニヲタを破壊する！",Dt,be,Il='<a href="#headings">scrollToTop</a>',xt,Y,Pl='<a href="#svelte-components">Svelte Components</a>',kt,ye,Mt,wt,Bt,Ce,It,Pt,qt,Ee,At,N,ql='<hr/> <ol><li id="fn-1">Here is the footnote.<a href="#fnref-1" class="footnote-backref">↩</a></li> <li id="fn-longnote">Here’s one footnote with longer identifier.<a href="#fnref-longnote" class="footnote-backref">↩</a></li> <li id="fn-2">You can type footnotes inline, so you don’t have to pick an identifier manually.<a href="#fnref-2" class="footnote-backref">↩</a></li></ol>',Rt;return O=new zl({props:{$$slots:{default:[Es]},$$scope:{ctx:d}}}),$=new zl({props:{$$slots:{default:[Ts]},$$scope:{ctx:d}}}),ye=new Cs({props:{youTubeId:"WysuxO4yR04"}}),Ce=new vs({props:{spotifyLink:"track/6pCXYUR3mBfXY8s0FYcZqQ",width:"100%"}}),Ee=new ps({props:{soundcloudLink:"https://soundcloud.com/hatsunemikuofficial/sets/sweety-glitch-remix-contest"}}),{c(){t=p("h2"),t.innerHTML=i,s=F(),u=p("h3"),u.innerHTML=o,r=F(),f=p("h4"),f.innerHTML=h,b=F(),C=p("h5"),C.innerHTML=Te,E=F(),H=p("h6"),H.innerHTML=qe,Le=F(),ke=p("hr"),He=F(),y=p("h2"),y.innerHTML=Qt,Ae=F(),Z=p("p"),Z.innerHTML=Xt,Re=F(),Q=p("p"),Q.innerHTML=Gt,Oe=F(),X=p("p"),X.textContent=Kt,$e=F(),G=p("p"),G.textContent=Wt,Ue=F(),K=p("p"),K.textContent=Jt,je=F(),W=p("p"),W.textContent=el,ze=F(),J=p("p"),J.textContent=tl,Se=F(),ee=p("blockquote"),ee.innerHTML=ll,Ve=F(),te=p("p"),te.textContent=sl,Ye=F(),le=p("p"),le.textContent=il,Ne=F(),se=p("p"),se.textContent=nl,Ze=F(),ie=p("p"),ie.innerHTML=al,Qe=F(),Xe=p("hr"),Ge=F(),w=p("h2"),w.innerHTML=ol,Ke=F(),B=p("h3"),B.innerHTML=rl,We=F(),ne=p("dl"),ne.innerHTML=ul,Je=F(),I=p("h3"),I.innerHTML=dl,et=F(),ae=p("ol"),ae.innerHTML=fl,tt=F(),P=p("h3"),P.innerHTML=pl,lt=F(),oe=p("ul"),oe.innerHTML=cl,st=F(),q=p("h3"),q.innerHTML=Fl,it=F(),A=p("ul"),A.innerHTML=ml,nt=F(),R=p("h2"),R.innerHTML=vl,at=F(),g(O.$$.fragment),ot=F(),g($.$$.fragment),rt=F(),re=p("p"),re.innerHTML=hl,ut=F(),U=p("h2"),U.innerHTML=_l,dt=F(),ue=p("p"),ue.innerHTML=bl,ft=F(),de=p("p"),de.innerHTML=yl,pt=F(),fe=p("p"),fe.innerHTML=Cl,ct=F(),pe=p("p"),pe.innerHTML=El,Ft=F(),j=p("h2"),j.innerHTML=Tl,mt=F(),Me=new $l(!1),we=F(),Be=new $l(!1),Ie=F(),z=p("h2"),z.innerHTML=Ll,vt=F(),ce=p("sup"),ce.textContent=Hl,ht=F(),Fe=p("sub"),Fe.textContent=gl,_t=F(),me=p("cite"),me.textContent=Dl,bt=Ut(", "),S=p("acronym"),S.textContent=xl,yt=Ut(", "),V=p("abbr"),V.textContent=kl,Ct=Ut(". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Et=p("br"),Tt=p("br"),Lt=F(),ve=p("p"),ve.textContent=Ml,Ht=F(),he=p("p"),he.innerHTML=wl,gt=F(),_e=p("p"),_e.textContent=Bl,Dt=F(),be=p("p"),be.innerHTML=Il,xt=F(),Y=p("h2"),Y.innerHTML=Pl,kt=F(),g(ye.$$.fragment),Mt=F(),wt=p("br"),Bt=F(),g(Ce.$$.fragment),It=F(),Pt=p("br"),qt=F(),g(Ee.$$.fragment),At=F(),N=p("div"),N.innerHTML=ql,this.h()},l(e){t=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(t)!=="svelte-17ezzq3"&&(t.innerHTML=i),s=m(e),u=c(e,"H3",{id:!0,"data-svelte-h":!0}),_(u)!=="svelte-1lz1oii"&&(u.innerHTML=o),r=m(e),f=c(e,"H4",{id:!0,"data-svelte-h":!0}),_(f)!=="svelte-18swq4u"&&(f.innerHTML=h),b=m(e),C=c(e,"H5",{id:!0,"data-svelte-h":!0}),_(C)!=="svelte-seo8oo"&&(C.innerHTML=Te),E=m(e),H=c(e,"H6",{id:!0,"data-svelte-h":!0}),_(H)!=="svelte-11zzhhm"&&(H.innerHTML=qe),Le=m(e),ke=c(e,"HR",{}),He=m(e),y=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(y)!=="svelte-1jrm51r"&&(y.innerHTML=Qt),Ae=m(e),Z=c(e,"P",{"data-svelte-h":!0}),_(Z)!=="svelte-1cwujs"&&(Z.innerHTML=Xt),Re=m(e),Q=c(e,"P",{"data-svelte-h":!0}),_(Q)!=="svelte-1smaymh"&&(Q.innerHTML=Gt),Oe=m(e),X=c(e,"P",{"data-svelte-h":!0}),_(X)!=="svelte-rzm3sy"&&(X.textContent=Kt),$e=m(e),G=c(e,"P",{"data-svelte-h":!0}),_(G)!=="svelte-1rcwbbl"&&(G.textContent=Wt),Ue=m(e),K=c(e,"P",{"data-svelte-h":!0}),_(K)!=="svelte-19ezoke"&&(K.textContent=Jt),je=m(e),W=c(e,"P",{"data-svelte-h":!0}),_(W)!=="svelte-k1vvek"&&(W.textContent=el),ze=m(e),J=c(e,"P",{"data-svelte-h":!0}),_(J)!=="svelte-5q7uy2"&&(J.textContent=tl),Se=m(e),ee=c(e,"BLOCKQUOTE",{"data-svelte-h":!0}),_(ee)!=="svelte-1t277r2"&&(ee.innerHTML=ll),Ve=m(e),te=c(e,"P",{"data-svelte-h":!0}),_(te)!=="svelte-dbq3jo"&&(te.textContent=sl),Ye=m(e),le=c(e,"P",{"data-svelte-h":!0}),_(le)!=="svelte-br4gki"&&(le.textContent=il),Ne=m(e),se=c(e,"P",{"data-svelte-h":!0}),_(se)!=="svelte-63jeqz"&&(se.textContent=nl),Ze=m(e),ie=c(e,"P",{"data-svelte-h":!0}),_(ie)!=="svelte-11pdwd8"&&(ie.innerHTML=al),Qe=m(e),Xe=c(e,"HR",{}),Ge=m(e),w=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(w)!=="svelte-g7u641"&&(w.innerHTML=ol),Ke=m(e),B=c(e,"H3",{id:!0,"data-svelte-h":!0}),_(B)!=="svelte-1l26dxc"&&(B.innerHTML=rl),We=m(e),ne=c(e,"DL",{"data-svelte-h":!0}),_(ne)!=="svelte-1593q4a"&&(ne.innerHTML=ul),Je=m(e),I=c(e,"H3",{id:!0,"data-svelte-h":!0}),_(I)!=="svelte-1e2vcc5"&&(I.innerHTML=dl),et=m(e),ae=c(e,"OL",{"data-svelte-h":!0}),_(ae)!=="svelte-1lrkorm"&&(ae.innerHTML=fl),tt=m(e),P=c(e,"H3",{id:!0,"data-svelte-h":!0}),_(P)!=="svelte-1r3t7r6"&&(P.innerHTML=pl),lt=m(e),oe=c(e,"UL",{"data-svelte-h":!0}),_(oe)!=="svelte-1m0ot56"&&(oe.innerHTML=cl),st=m(e),q=c(e,"H3",{id:!0,"data-svelte-h":!0}),_(q)!=="svelte-19gylr7"&&(q.innerHTML=Fl),it=m(e),A=c(e,"UL",{class:!0,"data-svelte-h":!0}),_(A)!=="svelte-xge1gw"&&(A.innerHTML=ml),nt=m(e),R=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(R)!=="svelte-47p9vw"&&(R.innerHTML=vl),at=m(e),D(O.$$.fragment,e),ot=m(e),D($.$$.fragment,e),rt=m(e),re=c(e,"P",{"data-svelte-h":!0}),_(re)!=="svelte-11pdwd8"&&(re.innerHTML=hl),ut=m(e),U=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(U)!=="svelte-u5fi6x"&&(U.innerHTML=_l),dt=m(e),ue=c(e,"P",{"data-svelte-h":!0}),_(ue)!=="svelte-jidotm"&&(ue.innerHTML=bl),ft=m(e),de=c(e,"P",{"data-svelte-h":!0}),_(de)!=="svelte-fsvclw"&&(de.innerHTML=yl),pt=m(e),fe=c(e,"P",{"data-svelte-h":!0}),_(fe)!=="svelte-xyllmn"&&(fe.innerHTML=Cl),ct=m(e),pe=c(e,"P",{"data-svelte-h":!0}),_(pe)!=="svelte-11pdwd8"&&(pe.innerHTML=El),Ft=m(e),j=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(j)!=="svelte-1gehoc9"&&(j.innerHTML=Tl),mt=m(e),Me=Ul(e,!1),we=m(e),Be=Ul(e,!1),Ie=m(e),z=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(z)!=="svelte-1n59eic"&&(z.innerHTML=Ll),vt=m(e),ce=c(e,"SUP",{"data-svelte-h":!0}),_(ce)!=="svelte-17o8npf"&&(ce.textContent=Hl),ht=m(e),Fe=c(e,"SUB",{"data-svelte-h":!0}),_(Fe)!=="svelte-1h4d230"&&(Fe.textContent=gl),_t=m(e),me=c(e,"CITE",{"data-svelte-h":!0}),_(me)!=="svelte-2sv5mx"&&(me.textContent=Dl),bt=jt(e,", "),S=c(e,"ACRONYM",{title:!0,"data-svelte-h":!0}),_(S)!=="svelte-1bkbv8l"&&(S.textContent=xl),yt=jt(e,", "),V=c(e,"ABBR",{title:!0,"data-svelte-h":!0}),_(V)!=="svelte-1qfm1q8"&&(V.textContent=kl),Ct=jt(e,". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),Et=c(e,"BR",{}),Tt=c(e,"BR",{}),Lt=m(e),ve=c(e,"P",{"data-svelte-h":!0}),_(ve)!=="svelte-d56c1z"&&(ve.textContent=Ml),Ht=m(e),he=c(e,"P",{"data-svelte-h":!0}),_(he)!=="svelte-i6obr"&&(he.innerHTML=wl),gt=m(e),_e=c(e,"P",{"data-svelte-h":!0}),_(_e)!=="svelte-a1w1jh"&&(_e.textContent=Bl),Dt=m(e),be=c(e,"P",{"data-svelte-h":!0}),_(be)!=="svelte-11pdwd8"&&(be.innerHTML=Il),xt=m(e),Y=c(e,"H2",{id:!0,"data-svelte-h":!0}),_(Y)!=="svelte-mjglpj"&&(Y.innerHTML=Pl),kt=m(e),D(ye.$$.fragment,e),Mt=m(e),wt=c(e,"BR",{}),Bt=m(e),D(Ce.$$.fragment,e),It=m(e),Pt=c(e,"BR",{}),qt=m(e),D(Ee.$$.fragment,e),At=m(e),N=c(e,"DIV",{class:!0,"data-svelte-h":!0}),_(N)!=="svelte-11hrpf6"&&(N.innerHTML=ql),this.h()},h(){v(t,"id","headings"),v(u,"id","heading"),v(f,"id","heading-1"),v(C,"id","heading-2"),v(H,"id","heading-3"),v(y,"id","paragraphs"),v(w,"id","lists"),v(B,"id","definition-list-dl"),v(I,"id","ordered-list-ol"),v(P,"id","unordered-list-ul"),v(q,"id","checkbox-list-ul"),v(A,"class","contains-task-list"),v(R,"id","table"),v(U,"id","footnotes"),v(j,"id","code"),Me.a=we,Be.a=Ie,v(z,"id","misc"),v(S,"title","Consectetur Adipiscing Elit"),v(V,"title","Aliqua"),v(Y,"id","svelte-components"),v(N,"class","footnotes")},m(e,a){n(e,t,a),n(e,s,a),n(e,u,a),n(e,r,a),n(e,f,a),n(e,b,a),n(e,C,a),n(e,E,a),n(e,H,a),n(e,Le,a),n(e,ke,a),n(e,He,a),n(e,y,a),n(e,Ae,a),n(e,Z,a),n(e,Re,a),n(e,Q,a),n(e,Oe,a),n(e,X,a),n(e,$e,a),n(e,G,a),n(e,Ue,a),n(e,K,a),n(e,je,a),n(e,W,a),n(e,ze,a),n(e,J,a),n(e,Se,a),n(e,ee,a),n(e,Ve,a),n(e,te,a),n(e,Ye,a),n(e,le,a),n(e,Ne,a),n(e,se,a),n(e,Ze,a),n(e,ie,a),n(e,Qe,a),n(e,Xe,a),n(e,Ge,a),n(e,w,a),n(e,Ke,a),n(e,B,a),n(e,We,a),n(e,ne,a),n(e,Je,a),n(e,I,a),n(e,et,a),n(e,ae,a),n(e,tt,a),n(e,P,a),n(e,lt,a),n(e,oe,a),n(e,st,a),n(e,q,a),n(e,it,a),n(e,A,a),n(e,nt,a),n(e,R,a),n(e,at,a),x(O,e,a),n(e,ot,a),x($,e,a),n(e,rt,a),n(e,re,a),n(e,ut,a),n(e,U,a),n(e,dt,a),n(e,ue,a),n(e,ft,a),n(e,de,a),n(e,pt,a),n(e,fe,a),n(e,ct,a),n(e,pe,a),n(e,Ft,a),n(e,j,a),n(e,mt,a),Me.m(Ql,e,a),n(e,we,a),Be.m(Xl,e,a),n(e,Ie,a),n(e,z,a),n(e,vt,a),n(e,ce,a),n(e,ht,a),n(e,Fe,a),n(e,_t,a),n(e,me,a),n(e,bt,a),n(e,S,a),n(e,yt,a),n(e,V,a),n(e,Ct,a),n(e,Et,a),n(e,Tt,a),n(e,Lt,a),n(e,ve,a),n(e,Ht,a),n(e,he,a),n(e,gt,a),n(e,_e,a),n(e,Dt,a),n(e,be,a),n(e,xt,a),n(e,Y,a),n(e,kt,a),x(ye,e,a),n(e,Mt,a),n(e,wt,a),n(e,Bt,a),x(Ce,e,a),n(e,It,a),n(e,Pt,a),n(e,qt,a),x(Ee,e,a),n(e,At,a),n(e,N,a),Rt=!0},p(e,a){const Al={};a&2&&(Al.$$scope={dirty:a,ctx:e}),O.$set(Al);const Rl={};a&2&&(Rl.$$scope={dirty:a,ctx:e}),$.$set(Rl)},i(e){Rt||(T(O.$$.fragment,e),T($.$$.fragment,e),T(ye.$$.fragment,e),T(Ce.$$.fragment,e),T(Ee.$$.fragment,e),Rt=!0)},o(e){L(O.$$.fragment,e),L($.$$.fragment,e),L(ye.$$.fragment,e),L(Ce.$$.fragment,e),L(Ee.$$.fragment,e),Rt=!1},d(e){e&&(l(t),l(s),l(u),l(r),l(f),l(b),l(C),l(E),l(H),l(Le),l(ke),l(He),l(y),l(Ae),l(Z),l(Re),l(Q),l(Oe),l(X),l($e),l(G),l(Ue),l(K),l(je),l(W),l(ze),l(J),l(Se),l(ee),l(Ve),l(te),l(Ye),l(le),l(Ne),l(se),l(Ze),l(ie),l(Qe),l(Xe),l(Ge),l(w),l(Ke),l(B),l(We),l(ne),l(Je),l(I),l(et),l(ae),l(tt),l(P),l(lt),l(oe),l(st),l(q),l(it),l(A),l(nt),l(R),l(at),l(ot),l(rt),l(re),l(ut),l(U),l(dt),l(ue),l(ft),l(de),l(pt),l(fe),l(ct),l(pe),l(Ft),l(j),l(mt),Me.d(),l(we),Be.d(),l(Ie),l(z),l(vt),l(ce),l(ht),l(Fe),l(_t),l(me),l(bt),l(S),l(yt),l(V),l(Ct),l(Et),l(Tt),l(Lt),l(ve),l(Ht),l(he),l(gt),l(_e),l(Dt),l(be),l(xt),l(Y),l(kt),l(Mt),l(wt),l(Bt),l(It),l(Pt),l(qt),l(At),l(N)),k(O,e),k($,e),k(ye,e),k(Ce,e),k(Ee,e)}}}function Hs(d){let t,i;const s=[d[0],Vl];let u={$$slots:{default:[Ls]},$$scope:{ctx:d}};for(let o=0;o<s.length;o+=1)u=zt(u,s[o]);return t=new ts({props:u}),{c(){g(t.$$.fragment)},l(o){D(t.$$.fragment,o)},m(o,r){x(t,o,r),i=!0},p(o,[r]){const f=r&1?ls(s,[r&1&&jl(o[0]),r&0&&jl(Vl)]):{};r&2&&(f.$$scope={dirty:r,ctx:o}),t.$set(f)},i(o){i||(T(t.$$.fragment,o),i=!0)},o(o){L(t.$$.fragment,o),i=!1},d(o){k(t,o)}}}const Vl={title:"Elements",created:"2021-12-12T00:00:00.000Z",tags:["Urara","Elements"],updated:"2025-03-31T18:16:52.309Z",images:[],slug:"/hello-world/elements/+page.svelte.md",path:"/hello-world/elements",toc:[{depth:2,slug:"headings",title:"Headings"},{depth:3,slug:"heading",title:"Heading"},{depth:4,slug:"heading-1",title:"Heading"},{depth:5,slug:"heading-2",title:"Heading"},{depth:6,slug:"heading-3",title:"Heading"},{depth:2,slug:"paragraphs",title:"Paragraphs"},{depth:2,slug:"lists",title:"Lists"},{depth:3,slug:"definition-list-dl",title:"Definition List (dl)"},{depth:3,slug:"ordered-list-ol",title:"Ordered List (ol)"},{depth:3,slug:"unordered-list-ul",title:"Unordered List (ul)"},{depth:3,slug:"checkbox-list-ul",title:"Checkbox List (ul)"},{depth:2,slug:"table",title:"Table"},{depth:2,slug:"footnotes",title:"Footnotes"},{depth:2,slug:"code",title:"Code"},{depth:2,slug:"misc",title:"Misc"},{depth:2,slug:"svelte-components",title:"Svelte Components"}]};function gs(d,t,i){return d.$$set=s=>{i(0,t=zt(zt({},t),Ol(s)))},t=Ol(t),[t]}class Bs extends De{constructor(t){super(),xe(this,t,gs,Hs,ge,{})}}export{Bs as component};
