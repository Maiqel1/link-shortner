(function(){"use strict";var e={1025:function(e,t,s){var a=s(9242),r=s(3396);function o(e,t,s,a,o,n){const i=(0,r.up)("Navbar"),l=(0,r.up)("HeroSection"),c=(0,r.up)("Form"),u=(0,r.up)("Statistics"),d=(0,r.up)("Boost"),m=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(i),(0,r.Wm)(l),(0,r.Wm)(c),(0,r.Wm)(u),(0,r.Wm)(d),(0,r.Wm)(m)],64)}const n=e=>((0,r.dD)("data-v-7a82d3f0"),e=e(),(0,r.Cn)(),e),i={class:"bg-gray-500"},l={class:"form-background container mx-auto p-8 mb-12"},c={key:0,class:"container text-red-500"},u=n((()=>(0,r._)("button",{class:"rounded bg-blue-500 ml-2 mt-8 p-3 text-lg text-white"}," Shorten it! ",-1))),d={key:0};function m(e,t,s,o,n,m){const x=(0,r.up)("ShortenedLink");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",l,[(0,r._)("form",{onSubmit:t[1]||(t[1]=(0,a.iM)(((...e)=>m.shortenLink&&m.shortenLink(...e)),["prevent"])),class:"flex flex-wrap md:flex-row justify-center"},[(0,r.wy)((0,r._)("input",{class:"w-4/5 mt-8 p-2",type:"text",placeholder:"Shorten a link here","onUpdate:modelValue":t[0]||(t[0]=e=>n.url=e),autofocus:""},null,512),[[a.nr,n.url]]),n.visible?((0,r.wg)(),(0,r.iD)("p",c,"Please input a link")):(0,r.kq)("",!0),u],32)]),n.shorten?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(x,{shorten:n.shorten,links:n.links},null,8,["shorten","links"])])):(0,r.kq)("",!0)])}var x=s(7139);const f={class:"container bg-white p-3 flex justify-center"},h=["href"];function p(e,t,s,a,o,n){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.links,(e=>((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("a",{href:e.shorten,target:"_blank",class:"p-1 text-blue-600"},(0,x.zw)(e.shorten),9,h),e.shorten?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>n.copyUrl&&n.copyUrl(...e)),class:"bg-blue-500 mx-4 p-1 rounded copy-button"}," Copy to clipboard ")):(0,r.kq)("",!0)])))),256)}var v={name:"ShortenedLink",props:{shorten:String,links:Array},methods:{copyUrl(){try{navigator.clipboard.writeText(this.shorten)}catch(e){throw e}}}},b=s(89);const g=(0,b.Z)(v,[["render",p]]);var y=g,w={name:"Form",components:{ShortenedLink:y},data(){return{url:"",shorten:"",links:[],visible:!1}},methods:{async shortenLink(){const e=await fetch(`https://api.shrtco.de/v2/shorten?url=${this.url}`),t=await e.json();console.log(t.result),this.url?(this.shorten=t.result.full_short_link,this.links.push({shorten:t.result.full_short_link},{url:this.url}),this.visible=!1):this.visible=!0}}};const k=(0,b.Z)(w,[["render",m],["__scopeId","data-v-7a82d3f0"]]);var _=k,S=s.p+"img/logo.ec39d9d2.svg";const j={class:"bg-white"},D=(0,r._)("div",{class:"max-w-6xl mx-auto px-4"},[(0,r._)("div",{class:"flex justify-between"},[(0,r._)("div",{class:"flex space-x-7"},[(0,r._)("div",null,[(0,r._)("a",{href:"#",class:"flex items-center py-4 px-2"},[(0,r._)("img",{src:S,alt:""})])]),(0,r._)("div",{class:"hidden md:flex items-center space-x-1"},[(0,r._)("a",{href:"#",class:"py-4 px-2 text-blue-500 font-semibold"},"Home"),(0,r._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"Services"),(0,r._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"About"),(0,r._)("a",{href:"#",class:"py-4 px-2 text-gray-500 font-semibold hover:text-gray-300 transition duration-300"},"Contact Us")])]),(0,r._)("div",{class:"hidden md:flex items-center space-x-3"},[(0,r._)("a",{href:"#",class:"py-2 px-2 font-medium text-gray-500 rounded hover:text-gray-300 transition duration-300"},"Log In"),(0,r._)("a",{href:"#",class:"py-2 px-2 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-200 transition duration-300"},"Get Started")]),(0,r._)("div",{class:"md:hidden flex items-center"},[(0,r._)("button",{class:"outline-none mobile-menu-button"},[(0,r._)("svg",{class:"w-6 h-6 text-gray-500 hover:text-green-500","x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r._)("path",{d:"M4 6h16M4 12h16M4 18h16"})])])])])],-1),C=(0,r.uE)('<div class="hidden mobile-menu"><ul class=""><li class="active"><a href="#" class="block text-sm px-2 py-4 font-semibold">Home</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">Services</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">About</a></li><li><a href="#" class="block text-sm px-2 py-4 hover:bg-gray-500 transition duration-300">Contact Us</a></li></ul></div>',1),L=[D,C];function O(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("nav",j,L)}var q={name:"Navbar",mounted(){const e=document.querySelector("button.mobile-menu-button"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(()=>{t.classList.toggle("hidden")}))}};const B=(0,b.Z)(q,[["render",O]]);var E=B,F=s.p+"img/illustration-working.ea534631.svg";const Z={id:"hero"},A=(0,r.uE)('<div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-o" data-v-fed52c30><div class="flex flex-col mb-24 space-y-8 md:w-1/2" data-v-fed52c30><h2 class="max-w-md text-8xl font-bold text-center md:text-5xl md:text-left" data-v-fed52c30> More than just shorter links </h2><p class="max-w-sm text-center text-grey md:text-left" data-v-fed52c30> Build your brand&#39;s recognition and get detailed insights on how your links are performing </p><div class="flex justify-center md:justify-start" data-v-fed52c30><a href="#" class="p-3 text-xl leading-none border rounded-full bg-blue-400 hover:text-teal-500 hover:bg-white mt-1 lg:mt-0" data-v-fed52c30>Get Started </a></div></div><div class="md:w-1/2" data-v-fed52c30><img src="'+F+'" alt="" data-v-fed52c30></div></div>',1),W=[A];function H(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("section",Z,W)}var M={name:"HeroSection"};const R=(0,b.Z)(M,[["render",H],["__scopeId","data-v-fed52c30"]]);var U=R;const I=e=>((0,r.dD)("data-v-64a24994"),e=e(),(0,r.Cn)(),e),T={class:"flex flex-col items-center justify-center align-center p-3"},G=I((()=>(0,r._)("h2",{class:"text-4xl font-semibold mt-20"},"Advanced Statistics",-1))),N=I((()=>(0,r._)("p",{class:"text-xl text-gray-800 text-center md:tracking-wide mt-3"},"Track how your links are performing across the web with our Advanced statistics dashboard",-1)));function P(e,t,s,a,o,n){const i=(0,r.up)("Cards");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("section",T,[G,N,(0,r.Wm)(i)])])}var z=s.p+"img/icon-brand-recognition.22883b05.svg",Y=s.p+"img/icon-detailed-records.22cea633.svg",K=s.p+"img/icon-fully-customizable.8ef2cdc7.svg";const V={class:"container flex flex-col md:flex-row items-center space-x-0 mt-36 md:space-x-10"},$=(0,r.uE)('<div class="flex flex-col card-box1 items-center md:block mt-12 md:mt-4"><div class="back md:ml-12 align-center"><img src="'+z+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4">Brand Recognition</h2><p class="mx-auto text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div><div class="flex flex-col items-center md:block card-box2 mt-12 md:mt-36 md:mt-4 mb-5 md:mb-0"><div class="back md:ml-12 align-center"><img src="'+Y+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4 text-center">Detailed Records</h2><p class="mx-auto text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div><div class="flex flex-col card-box3 items-center md:block mt-12 md:mt-60 md:mt-4"><div class="back md:ml-12"><img src="'+K+'" class="mx-auto py-3" alt=""></div><h2 class="text-xl font-semibold mx-auto p-3 mt-4">Fully Customisable</h2><p class="mx-auto text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus fugiat perspiciatis modi labore aut voluptates, architecto saepe voluptas, ipsam ea accusamus ducimus minus temporibus eius libero! Ex, quos doloremque?</p></div>',3),J=[$];function Q(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("div",V,J)}var X={name:"Card"};const ee=(0,b.Z)(X,[["render",Q]]);var te=ee,se={name:"Statistics",components:{Cards:te}};const ae=(0,b.Z)(se,[["render",P],["__scopeId","data-v-64a24994"]]);var re=ae;const oe=e=>((0,r.dD)("data-v-5b52ead6"),e=e(),(0,r.Cn)(),e),ne=oe((()=>(0,r._)("div",{class:"boost-container flex flex-col items-center space-y-6 p-6"},[(0,r._)("h2",{class:"text-center text-3xl font-semibold text-white font-bold"},"Boost your links today"),(0,r._)("button",{class:"rounded-full text-xl hover:bg-blue-200 p-3 bg-blue-500 text-center mx-auto"},"Get Started")],-1))),ie=[ne];function le(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("div",null,ie)}var ce={name:"Boost"};const ue=(0,b.Z)(ce,[["render",le],["__scopeId","data-v-5b52ead6"]]);var de=ue,me=s.p+"img/icon-facebook.deee9da4.svg",xe=s.p+"img/icon-twitter.46516874.svg",fe=s.p+"img/icon-pinterest.6d4a036d.svg",he=s.p+"img/icon-instagram.d9c0fd77.svg";const pe=(0,r.uE)('<div class="flex flex-col md:flex-row p-28 justify-between h-full w-full space-x-6"><div><h2 class="text-5xl text-white font-bold mb-20">Shortly</h2></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Features </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">Link Shortening</a><a href="#" class="text-gray-400 hover:text-blue-500">Branded Links</a><a href="#" class="text-gray-400 hover:text-blue-500">Analytics</a></li></ul></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Resources </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">Blog</a><a href="#" class="text-gray-400 hover:text-blue-500">Developers</a><a href="#" class="text-gray-400 hover:text-blue-500">Support</a></li></ul></div><div><ul><li class="flex flex-col space-y-4"><a href="#"><h2 class="text-white text-3xl font-bold"> Company </h2></a><a href="#" class="text-gray-400 hover:text-blue-500">About</a><a href="#" class="text-gray-400 hover:text-blue-500">Our Team</a><a href="#" class="text-gray-400 hover:text-blue-500">Careers</a><a href="#" class="text-gray-400 hover:text-blue-500">Contact</a></li></ul></div><div><li class="flex flex-row mx-auto justify-center align-center items-center"><img src="'+me+'" class="object-scale-down h-20 w-20" alt=""><img src="'+xe+'" class="object-scale-down h-20 w-20" alt=""><img src="'+fe+'" class="object-scale-down h-20 w-20" alt=""><img src="'+he+'" class="object-scale-down h-20 w-20" alt=""></li></div></div>',1),ve=[pe];function be(e,t,s,a,o,n){return(0,r.wg)(),(0,r.iD)("footer",null,ve)}var ge={name:"Footer"};const ye=(0,b.Z)(ge,[["render",be]]);var we=ye,ke={name:"App",components:{Form:_,Navbar:E,HeroSection:U,Statistics:re,Boost:de,Footer:we}};const _e=(0,b.Z)(ke,[["render",o]]);var Se=_e;(0,a.ri)(Se).mount("#app")}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,a,r,o){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,n=a[0],i=a[1],l=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var u=l(s)}for(t&&t(a);c<n.length;c++)o=n[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},a=self["webpackChunklink_shortner"]=self["webpackChunklink_shortner"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(1025)}));a=s.O(a)})();
//# sourceMappingURL=app.935dc4e2.js.map