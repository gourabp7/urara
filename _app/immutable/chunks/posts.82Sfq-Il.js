import{w as a}from"./index.BI7v63FY.js";import{C as c}from"./scheduler.FGUOCI5T.js";function $(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}var r={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const t={author:{avatar:"/assets/profile.png",bio:'PhD Student <br>  <a href="https://sites.google.com/view/matrix-lab" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> MATRIX Lab</a>  <br> <a href="https://cds.iisc.ac.in" target="_blank" rel="noopener noreferrer" style="color: #007acc;"> Department of Computational and Data Sciences</a> <br> <a href="https://iisc.ac.in" target="_blank" rel="noopener noreferrer" style="color: #007acc;">Indian Institute of Science (IISc), Bangalore</a> <br>',name:"Gourab Panigrahi",metadata:[{icon:"i-simple-icons-github",link:"https://github.com/gourabp7"},{icon:"i-simple-icons-googlescholar",link:"https://scholar.google.com/citations?user=Cn4q0OQAAAAJ&hl=en"},{icon:"i-simple-icons-linkedin",link:"https://www.linkedin.com/in/gourab-panigrahi-083939237"},{icon:"i-simple-icons-orcid",link:"https://orcid.org/0000-0001-8121-3320"},{icon:"i-simple-icons-acm",link:"https://dl.acm.org/profile/99661043822"},{icon:"i-simple-icons-gmail",link:"mailto:pgourab@iisc.ac.in"}]},description:"Powered by SvelteKit/Urara",domain:r.URARA_SITE_DOMAIN??"gourabp7.github.io/",lang:"en-US",protocol:r.URARA_SITE_PROTOCOL??!1?"http://":"https://",themeColor:"#3D4451",title:"Gourab Panigrahi"},w={sizes:"48x48",src:`${t.protocol+t.domain}/favicon.png`,type:"image/png"},R={180:{sizes:"180x180",src:`${t.protocol+t.domain}/assets/favicon.png`,type:"image/png"},192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/favicon.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/favicon.png`,type:"image/png"}},D={192:{sizes:"192x192",src:`${t.protocol+t.domain}/assets/favicon.png`,type:"image/png"},512:{sizes:"512x512",src:`${t.protocol+t.domain}/assets/favicon.png`,type:"image/png"}},C=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"},{name:"valentine",text:"🌸 Valentine"},{name:"aqua",text:"💦 Aqua"},{name:"synthwave",text:"🌃 Synthwave"},{name:"night",text:"🌃 Night"},{name:"lofi",text:"🎶 Lo-Fi"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"garden",text:"🏡 Garden"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"}],I={},O={nav:[{link:"/about",text:"About"},{link:"/publications",text:"Publications"},{link:"/conferences",text:"Conferences"},{link:"/workshops",text:"Workshops"}]},U={nav:[]},P={locales:"en-US",options:{day:"numeric",month:"short",weekday:"long",year:"2-digit"}},z={},L=a({});function v(e){const n=e-1;return n*n*n+1}function E(e,{delay:n=0,duration:l=400,easing:p=v,x:m=0,y:g=0,opacity:u=0}={}){const o=getComputedStyle(e),s=+o.opacity,f=o.transform==="none"?"":o.transform,h=s*(1-u),[d,b]=c(m),[x,k]=c(g);return{delay:n,duration:l,easing:p,css:(i,y)=>`
			transform: ${f} translate(${(1-i)*d}${b}, ${(1-i)*x}${k});
			opacity: ${s-h*y}`}}const T=a([]),V=a([]);export{V as a,w as b,R as c,z as d,$ as e,E as f,O as g,I as h,C as i,U as j,P as k,D as m,T as p,t as s,L as t};
