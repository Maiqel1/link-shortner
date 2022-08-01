(function(){"use strict";var e={7370:function(e,t,s){var r=s(9242),a=s(3396);function o(e,t,s,r,o,n){const i=(0,a.up)("Navbar"),l=(0,a.up)("HeroSection"),c=(0,a.up)("Form"),u=(0,a.up)("Statistics"),d=(0,a.up)("Boost"),m=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(u),(0,a.Wm)(d),(0,a.Wm)(m)],64)}const n=e=>((0,a.dD)("data-v-4db25ebe"),e=e(),(0,a.Cn)(),e),i={class:"bg-gray-500",id:"form"},l={class:"form-background container mx-auto p-8 mb-12"},c={key:0,class:"container text-red-500 ml-0 md:ml-16"},u=n((()=>(0,a._)("button",{class:"rounded bg-blue-500 ml-2 mt-8 p-3 text-lg text-white"}," Shorten it! ",-1))),d={key:0};function m(e,t,s,o,n,m){const x=(0,a.up)("ShortenedLink");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",l,[(0,a._)("form",{onSubmit:t[1]||(t[1]=(0,r.iM)(((...e)=>m.shortenLink&&m.shortenLink(...e)),["prevent"])),class:"flex flex-wrap md:flex-row justify-center"},[(0,a.wy)((0,a._)("input",{class:"w-4/5 mt-8 p-2",type:"text",placeholder:"Shorten a link here","onUpdate:modelValue":t[0]||(t[0]=e=>n.url=e),autofocus:""},null,512),[[r.nr,n.url]]),n.visible?((0,a.wg)(),(0,a.iD)("p",c," Please input a link ")):(0,a.kq)("",!0),u],32)]),n.shorten?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(x,{shorten:n.shorten,links:n.links},null,8,["shorten","links"])])):(0,a.kq)("",!0)])}var x=s(7139);const f={class:"container bg-white p-3 flex justify-center flex flex-row"},h={class:"truncate text-gray-500"},p=["href"];function v(e,t,s,r,o,n){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.links,(e=>((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("p",h,(0,x.zw)(e.url),1),(0,a._)("a",{href:e.shorten,target:"_blank",class:"p-1 text-blue-600"},(0,x.zw)(e.shorten),9,p),e.shorten?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>n.copyUrl&&n.copyUrl(...e)),class:"bg-blue-500 mx-4 p-1 rounded copy-button"}," Copy to clipboard ")):(0,a.kq)("",!0)])))),256)}var b={name:"ShortenedLink",props:{shorten:String,links:Array},methods:{copyUrl(){try{navigator.clipboard.writeText(this.shorten)}catch(e){throw e}}}},g=s(89);const y=(0,g.Z)(b,[["render",v]]);var w=y,k={name:"Form",components:{ShortenedLink:w},data(){return{url:"",shorten:"",links:[],visible:!1}},methods:{async shortenLink(){const e=await fetch(`https://api.shrtco.de/v2/shorten?url=${this.url}`),t=await e.json();this.url?(this.shorten=t.result.full_short_link,this.links.push({url:this.url},{shorten:t.result.full_short_link}),this.visible=!1,this.url=""):this.visible=!0}}};const _=(0,g.Z)(k,[["render",m],["__scopeId","data-v-4db25ebe"]]);var S=_,j=s.p+"img/logo.ec39d9d2.svg";const D={class:"bg-white"},C=(0,a._)("div",{class:"max-w-6xl mx-auto px-4"},[(0,a._)("div",{class:"flex justify-between"},[(0,a._)("div",{class:"flex space-x-7"},[(0,a._)("div",null,[(0,a._)("a",{href:"#",class:"flex items-center py-4 px-2"},[(0,a._)("img",{src:j,alt:""})])]),(0,a._)("div",{class:"hidden md:flex items-center space-x-1"},[(0,a._)("a",{href:"#",class:"py-4 px-2 text-blue-500 font-semibold"},"Home"),(0,a._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"Services"),(0,a._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"About"),(0,a._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"Contact Us")])]),(0,a._)("div",{class:"hidden md:flex items-center space-x-3"},[(0,a._)("a",{href:"#",class:"py-2 px-2 font-medium text-gray-500 rounded hover:text-gray-300 transition duration-300"},"Log In"),(0,a._)("a",{href:"#form",class:"py-2 px-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-200 transition duration-300"},"Get Started")]),(0,a._)("div",{class:"md:hidden flex items-center"},[(0,a._)("button",{class:"outline-none mobile-menu-button"},[(0,a._)("svg",{class:"w-6 h-6 text-gray-500 hover:text-green-500","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,a._)("path",{d:"M4 6h16M4 12h16M4 18h16"})])])])])],-1),L=(0,a.uE)('<div class="hidden mobile-menu"><ul class=""><li class="active"><a href="#" class="block text-sm px-2 py-4 font-semibold">Home</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">Services</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">About</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">Contact Us</a></li></ul></div>',1),O=[C,L];function q(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("nav",D,O)}var B={name:"Navbar",mounted(){const e=document.querySelector("button.mobile-menu-button"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(()=>{t.classList.toggle("hidden")}))}};const E=(0,g.Z)(B,[["render",q]]);var F=E,Z=s.p+"img/illustration-working.ea534631.svg";const A={id:"hero"},W=(0,a.uE)('<div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-o" data-v-35d08014><div class="flex flex-col mb-24 space-y-8 md:w-1/2" data-v-35d08014><h2 class="max-w-md text-8xl font-bold text-center mt-12 md:text-5xl md:text-left" data-v-35d08014> More than just shorter links </h2><p class="max-w-sm text-center text-grey md:text-left" data-v-35d08014> Build your brand&#39;s recognition and get detailed insights on how your links are performing </p><div class="flex justify-center md:justify-start" data-v-35d08014><a href="#form" class="p-3 text-xl leading-none border rounded-full bg-blue-500 text-white hover:bg-blue-300 mt-1 lg:mt-0" data-v-35d08014>Get Started </a></div></div><div class="md:w-1/2" data-v-35d08014><img src="'+Z+'" alt="" data-v-35d08014></div></div>',1),H=[W];function M(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("section",A,H)}var R={name:"HeroSection"};const U=(0,g.Z)(R,[["render",M],["__scopeId","data-v-35d08014"]]);var I=U;const T=e=>((0,a.dD)("data-v-1b0e1ee9"),e=e(),(0,a.Cn)(),e),z={class:"flex flex-col items-center justify-center align-center p-3"},G=T((()=>(0,a._)("h2",{class:"text-4xl font-semibold mt-20 text-center"},"Advanced Statistics",-1))),N=T((()=>(0,a._)("p",{class:"text-xl text-gray-800 text-center md:tracking-wide mt-3"},"Track how your links are performing across the web with our Advanced statistics dashboard",-1)));function P(e,t,s,r,o,n){const i=(0,a.up)("Cards");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("section",z,[G,N,(0,a.Wm)(i)])])}var Y=s.p+"img/icon-brand-recognition.22883b05.svg",K=s.p+"img/icon-detailed-records.22cea633.svg",V=s.p+"img/icon-fully-customizable.8ef2cdc7.svg";const $={class:"container flex flex-col md:flex-row items-center space-x-0 mt-36 md:space-x-10"},J=(0,a.uE)('<div class="flex flex-col card-box1 items-center md:block mt-12 md:mt-4 h-full w-full"><div class="back md:ml-12 align-center"><img src="'+Y+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4">Brand Recognition</h2><p class="mx-auto text-center text-gray-600 md:leading-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div><div class="flex flex-col items-center md:block card-box2 mt-12 md:mt-36 md:mt-4 mb-5 md:mb-0 w-full h-full"><div class="back md:ml-12 align-center"><img src="'+K+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4 text-center">Detailed Records</h2><p class="mx-auto text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div><div class="flex flex-col card-box3 items-center md:block mt-12 md:mt-60 md:mt-4 w-full h-full"><div class="back md:ml-12"><img src="'+V+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4">Fully Customisable</h2><p class="mx-auto text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div>',3),Q=[J];function X(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("div",$,Q)}var ee={name:"Card"};const te=(0,g.Z)(ee,[["render",X]]);var se=te,re={name:"Statistics",components:{Cards:se}};const ae=(0,g.Z)(re,[["render",P],["__scopeId","data-v-1b0e1ee9"]]);var oe=ae;const ne=e=>((0,a.dD)("data-v-02c47673"),e=e(),(0,a.Cn)(),e),ie=ne((()=>(0,a._)("div",{class:"boost-container flex flex-col items-center space-y-6 p-6"},[(0,a._)("h2",{class:"text-center text-3xl font-semibold text-white font-bold"},"Boost your links today"),(0,a._)("a",{href:"#form"},[(0,a._)("button",{class:"rounded-full text-xl hover:bg-blue-200 p-3 bg-blue-500 text-center mx-auto"},"Get Started")])],-1))),le=[ie];function ce(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("div",null,le)}var ue={name:"Boost"};const de=(0,g.Z)(ue,[["render",ce],["__scopeId","data-v-02c47673"]]);var me=de,xe=s.p+"img/icon-facebook.deee9da4.svg",fe=s.p+"img/icon-twitter.46516874.svg",he=s.p+"img/icon-pinterest.6d4a036d.svg",pe=s.p+"img/icon-instagram.d9c0fd77.svg";const ve=(0,a.uE)('<div class="flex flex-col md:flex-row p-28 justify-between h-full w-full space-x-6"><div><h2 class="text-5xl text-white font-bold mb-20">Shortly</h2></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Features </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">Link Shortening</a><a href="#" class="text-gray-400 hover:text-blue-500">Branded Links</a><a href="#" class="text-gray-400 hover:text-blue-500">Analytics</a></li></ul></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Resources </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">Blog</a><a href="#" class="text-gray-400 hover:text-blue-500">Developers</a><a href="#" class="text-gray-400 hover:text-blue-500">Support</a></li></ul></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Company </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">About</a><a href="#" class="text-gray-400 hover:text-blue-500">Our Team</a><a href="#" class="text-gray-400 hover:text-blue-500">Careers</a><a href="#" class="text-gray-400 hover:text-blue-500">Contact</a></li></ul></div><div><li class="flex flex-row mx-auto justify-center align-center items-center"><img src="'+xe+'" class="object-scale-down h-20 w-20" alt=""><img src="'+fe+'" class="object-scale-down h-20 w-20" alt=""><img src="'+he+'" class="object-scale-down h-20 w-20" alt=""><img src="'+pe+'" class="object-scale-down h-20 w-20" alt=""></li></div></div>',1),be=[ve];function ge(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("footer",null,be)}var ye={name:"Footer"};const we=(0,g.Z)(ye,[["render",ge]]);var ke=we,_e={name:"App",components:{Form:S,Navbar:F,HeroSection:I,Statistics:oe,Boost:me,Footer:ke}};const Se=(0,g.Z)(_e,[["render",o]]);var je=Se;(0,r.ri)(je).mount("#app")}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,a,o){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var u=l(s)}for(t&&t(r);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=self["webpackChunklink_shortner"]=self["webpackChunklink_shortner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7370)}));r=s.O(r)})();
//# sourceMappingURL=app.9b1c1bc4.js.map