(function(e){function t(t){for(var a,s,o=t[0],i=t[1],l=t[2],u=0,b=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d50dd569"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0a0c":function(e,t,n){},1:function(e,t){},1602:function(e,t,n){"use strict";n("c584")},"161b":function(e,t,n){},2734:function(e,t,n){"use strict";n("161b")},3889:function(e,t,n){"use strict";n("aad7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"4b4b":function(e,t,n){},"4f59":function(e,t,n){e.exports=n.p+"img/Spotify_Logo_RGB_White.31bad8d4.png"},"567b":function(e,t,n){"use strict";n("ab58")},"7d51":function(e,t,n){"use strict";n("0a0c")},"9c16":function(e,t,n){"use strict";n("c8d9")},aad7:function(e,t,n){},ab58:function(e,t,n){},aeb9:function(e,t,n){"use strict";n("4b4b")},b1aa:function(e,t,n){"use strict";n("c6cb")},c584:function(e,t,n){},c6cb:function(e,t,n){},c8d9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=(n("a15b"),{id:"scroll-container"}),c={id:"page-container"},s=Object(a["g"])("h1",null,"musictools",-1),o={id:"navbar"},i=Object(a["h"])("Tools"),l=Object(a["h"])("About"),u={id:"user-container"},f={class:"menu"},b={class:"menu-head"},j=Object(a["h"])("Not signed in"),d={class:"menu-content"},p={class:"menu-head"},m={class:"menu-head"},O=Object(a["g"])("hr",null,null,-1),v=Object(a["g"])("footer",null,[Object(a["g"])("p",null,[Object(a["h"])(" Made with "),Object(a["g"])("a",{href:"https://v3.vuejs.org/"},"Vue 3"),Object(a["h"])(". Available under the "),Object(a["g"])("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License"),Object(a["h"])(". ")])],-1);function h(e,t,n,h,y,g){var k=Object(a["A"])("router-link"),w=Object(a["A"])("OctocatCorner"),S=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["f"])("div",r,[Object(a["g"])("div",c,[Object(a["g"])("header",null,[s,Object(a["g"])("section",o,[Object(a["g"])("nav",null,[Object(a["i"])(k,{to:"/"},{default:Object(a["G"])((function(){return[i]})),_:1}),Object(a["i"])(k,{to:"/about"},{default:Object(a["G"])((function(){return[l]})),_:1})]),Object(a["g"])("nav",u,[Object(a["g"])("ul",null,[Object(a["g"])("li",f,[Object(a["g"])("div",b,[0!==e.authenticatedServices.length?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Object(a["h"])(" Signed in to "+Object(a["D"])(e.authenticatedServices.join(", ")),1)],64)):(Object(a["t"])(),Object(a["f"])(a["a"],{key:1},[j],64))]),Object(a["g"])("div",d,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[Object(a["g"])("div",p,[e.spotifyCurrentUser?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Object(a["h"])(" Signed in to Spotify as "+Object(a["D"])(e.spotifyUsername)+" ",1),Object(a["g"])("span",{class:"sign-in",onClick:t[0]||(t[0]=function(){return e.spotifyLogout&&e.spotifyLogout.apply(e,arguments)})},"(sign out)")],64)):(Object(a["t"])(),Object(a["f"])("span",{key:1,class:"sign-in",onClick:t[1]||(t[1]=function(){return e.spotifyLogin&&e.spotifyLogin.apply(e,arguments)})},"Sign in to Spotify"))]),Object(a["g"])("div",m,[e.lastfmCurrentUser?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Object(a["h"])(" Last.fm user: "+Object(a["D"])(e.lastfmCurrentUser)+" ",1),Object(a["g"])("span",{class:"sign-in",onClick:t[2]||(t[2]=function(){return e.lastfmLogin&&e.lastfmLogin.apply(e,arguments)})},"(change)")],64)):(Object(a["t"])(),Object(a["f"])("span",{key:1,class:"sign-in",onClick:t[3]||(t[3]=function(){return e.lastfmLogin&&e.lastfmLogin.apply(e,arguments)})},"Set Last.fm username"))])])])])])])])]),O]),Object(a["i"])(w),Object(a["i"])(S),v])])}var y=n("5502"),g=n("399f"),k=n("756e"),w=n.n(k),S={href:"https://github.com/musubii/musictools",class:"github-corner","aria-label":"View source on GitHub"},C=Object(a["g"])("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},"aria-hidden":"true"},[Object(a["g"])("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(a["g"])("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),Object(a["g"])("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1),x=[C];function T(e,t,n,r,c,s){return Object(a["t"])(),Object(a["f"])("a",S,x)}var L=Object(a["j"])({name:"OctocatCorner",components:{},setup:function(){return{}}}),U=(n("1602"),n("d959")),A=n.n(U);const P=A()(L,[["render",T]]);var _=P,z=(n("a4d3"),n("e01a"),n("d3b7"),Symbol("SpotifyWebApi")),D=Symbol("SpotifyCurrentUser"),E=Symbol("LastfmApi"),N=Symbol("ShuffleGotoStep"),I=Object(a["j"])({components:{OctocatCorner:_},setup:function(){var e=Object(y["b"])(),t="6bebebaf68e407eab01ea7ca182a81a",n=Object(a["b"])((function(){return e.state.spotifyAccessToken}));Object(a["r"])((function(){return e.dispatch("loadStoredState")}));var r=Object(a["C"])(new g["a"]({clientId:t})),c=Object(a["y"])(null),s=function(t){t.users.getMe().then((function(e){return c.value=e})).catch((function(t){e.commit("setSpotifyToken",null),c.value=null,console.error(t)}))};Object(a["F"])(n,(function(e){if(console.log("token changed to",e),e){var n=new g["a"]({clientId:t,accessToken:e});s(n),r.value=n}else r.value=new g["a"]({clientId:t}),c.value=null})),Object(a["v"])(z,r),Object(a["v"])(D,c);var o="0300c01497ac7540c65f931b3baf50c9",i=Object(a["C"])(new w.a(o)),l=Object(a["b"])((function(){return e.state.lastfmUsername}));return Object(a["v"])(E,i),{authenticatedServices:Object(a["b"])((function(){var e=[];return c.value&&e.push("Spotify"),l.value&&e.push("Last.fm"),e})),spotifyLogin:function(){return e.dispatch("getNewSpotifyToken")},spotifyLogout:function(){return e.commit("setSpotifyToken",null)},spotifyCurrentUser:c,spotifyUsername:Object(a["b"])((function(){var e;return null===(e=c.value)||void 0===e?void 0:e.display_name})),lastfmLogin:function(){var t=prompt("Enter Last.fm username:");null!=t&&e.commit("setLastfmUsername",t)},lastfmCurrentUser:l}}});n("3889");const M=A()(I,[["render",h]]);var R=M,F=(n("3ca3"),n("ddb0"),n("6c02"));Object(a["w"])("data-v-6bddd5d8");var G=Object(a["g"])("h2",null,"List of tools",-1),B=Object(a["g"])("h3",null,"Spotify tools",-1),W={class:"tool-list"},q=Object(a["g"])("div",{class:"tool-item"},[Object(a["g"])("div",{class:"tool-header"},"Randomize playlist order"),Object(a["g"])("p",{class:"tool-body"}," Randomizes the order of a playlist in place, permanently, unlike simply shuffling the playlist. This affects the default ordering of a playlist. ")],-1),H=Object(a["g"])("p",null,"(more tools coming soon 🙂)",-1),Y={key:1,class:"warn"},J=Object(a["g"])("h3",null,"Last.fm tools",-1),V={key:2,class:"tool-list"},Z=Object(a["g"])("div",{class:"tool-item"},[Object(a["g"])("div",{class:"tool-header"},"Top artists chart"),Object(a["g"])("p",{class:"tool-body"},"Chart visualization of your listening history")],-1),K={key:3,class:"warn"};function Q(e,t,n,r,c,s){var o=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["f"])(a["a"],null,[G,B,e.spotifyUser?(Object(a["t"])(),Object(a["f"])(a["a"],{key:0},[Object(a["g"])("div",W,[Object(a["i"])(o,{to:"/tools/shuffle"},{default:Object(a["G"])((function(){return[q]})),_:1})]),H],64)):(Object(a["t"])(),Object(a["f"])("p",Y,"You aren't signed in to Spotify.")),J,e.lastfmUser?(Object(a["t"])(),Object(a["f"])("div",V,[Object(a["i"])(o,{to:"/tools/artists"},{default:Object(a["G"])((function(){return[Z]})),_:1})])):(Object(a["t"])(),Object(a["f"])("p",K,"You haven't set your Last.fm username."))],64)}Object(a["u"])();var X=Object(a["j"])({name:"Home",setup:function(){var e=Object(y["b"])(),t=Object(a["m"])(D);if(!t)throw new Error("No SpotifyCurrentUser injected");var n=Object(a["b"])((function(){return e.state.lastfmUsername}));return{spotifyUser:t,lastfmUser:n}}});n("567b");const $=A()(X,[["render",Q],["__scopeId","data-v-6bddd5d8"]]);var ee=$,te=Object(a["g"])("h2",null,"Randomize playlist order",-1),ne=Object(a["g"])("div",{class:"warn"},[Object(a["g"])("p",null,[Object(a["g"])("b",null,"Note"),Object(a["h"])(": This tool will create a new playlist in your library, rather than modifying the existing one.")]),Object(a["g"])("p",null,"This is partially due to API limitations, and it also helps prevent bugs from ruining playlists.")],-1);function ae(e,t,n,r,c,s){return Object(a["t"])(),Object(a["f"])(a["a"],null,[te,ne,(Object(a["t"])(),Object(a["d"])(Object(a["B"])(e.currentComponent)))],64)}var re=Object(a["g"])("h3",null,"Step 1",-1),ce=Object(a["g"])("h4",null,"Select a source",-1);function se(e,t,n,r,c,s){var o=Object(a["A"])("SpotifyShelf");return Object(a["t"])(),Object(a["f"])(a["a"],null,[re,ce,Object(a["i"])(o)],64)}var oe=n("4f59"),ie=n.n(oe);Object(a["w"])("data-v-194fe630");var le=Object(a["g"])("div",{class:"shelf-icon"},[Object(a["g"])("img",{src:ie.a,alt:"Spotify"})],-1),ue={class:"shelf"};function fe(e,t,n,r,c,s){var o=Object(a["A"])("PlaylistCard");return Object(a["t"])(),Object(a["f"])("section",null,[le,Object(a["g"])("div",ue,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.playlists,(function(t,n){return Object(a["t"])(),Object(a["d"])(o,{key:n,source:t,onClick:function(t){return e.selectIndex(n)}},null,8,["source","onClick"])})),128))])])}Object(a["u"])();var be=n("3835"),je=n("b85c"),de=n("2909"),pe=n("1da1");n("96cf"),n("ac1f"),n("1276"),n("4ec9"),n("a9e3"),n("d81d"),n("4de4"),n("b0c0");Object(a["w"])("data-v-3c435780");var me={class:"playlist-card"},Oe=["src"];function ve(e,t,n,r,c,s){var o;return Object(a["t"])(),Object(a["f"])("div",me,[Object(a["g"])("img",{src:null===(o=e.source.images[0])||void 0===o?void 0:o.url,alt:""},null,8,Oe),Object(a["h"])(" "+Object(a["D"])(e.source.name),1)])}Object(a["u"])();var he=Object(a["j"])({name:"PlaylistCard",props:{source:{type:Object,required:!0}},setup:function(){}});n("aeb9");const ye=A()(he,[["render",ve],["__scopeId","data-v-3c435780"]]);var ge=ye,ke=Object(a["j"])({name:"SpotifyShelf",components:{PlaylistCard:ge},setup:function(){var e=Object(y["b"])(),t=Object(a["m"])(z);if(!t)throw new Error("No SpotifyWebApi instance injected");var n=Object(a["m"])(D);if(!n)throw new Error("No SpotifyCurrentUser injected");var r=Object(a["y"])([]);Object(a["r"])((function(){var e=function(){var e=Object(pe["a"])(regeneratorRuntime.mark((function e(){var a,r,c,s,o,i,l,u,f,b,j,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.value.playlists.getMyPlaylists();case 2:a=e.sent,r=Object(de["a"])(a.items);case 4:if(!a.next){e.next=15;break}i=null===(c=a.next)||void 0===c?void 0:c.split("?")[1],l=new Map,u=Object(je["a"])(null!==(s=null===i||void 0===i||null===(o=i.split("&"))||void 0===o?void 0:o.map((function(e){return e.split("=")})))&&void 0!==s?s:[]);try{for(u.s();!(f=u.n()).done;)b=Object(be["a"])(f.value,2),j=b[0],d=b[1],l.set(j,d)}catch(p){u.e(p)}finally{u.f()}return e.next=11,t.value.playlists.getMyPlaylists({offset:Number(l.get("offset")),limit:Number(l.get("limit"))});case 11:a=e.sent,r.push.apply(r,Object(de["a"])(a.items)),e.next=4;break;case 15:return e.abrupt("return",r.filter((function(e){var t;return e.owner.id===(null===(t=n.value)||void 0===t?void 0:t.id)})));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return r.value=Object(de["a"])(e)})).catch((function(e){return console.error(e)}))}));var c=function(t){var n=r.value[t];e.commit("setTrackSource",n)};return{playlists:r,selectIndex:c}}});n("2734");const we=A()(ke,[["render",fe],["__scopeId","data-v-194fe630"]]);var Se=we,Ce=Object(a["j"])({name:"PlaylistShuffleStep1",components:{SpotifyShelf:Se},setup:function(){var e=Object(y["b"])(),t=Object(a["b"])((function(){return e.state.selectedTrackSource})),n=Object(a["m"])(N);if(!n)throw new Error("No ShuffleGotoStep function injected");Object(a["F"])(t,(function(e){null!==e&&n(2)}))}});const xe=A()(Ce,[["render",se]]);var Te=xe;Object(a["w"])("data-v-64a00546");var Le=Object(a["g"])("h3",null,"Step 2",-1),Ue=Object(a["g"])("h4",null,"Selected source:",-1),Ae={class:"split"},Pe=Object(a["g"])("div",{class:"left"},[Object(a["g"])("h4",null,"Current order:")],-1),_e={class:"right buttons"};function ze(e,t,n,r,c,s){var o=Object(a["A"])("PlaylistCard"),i=Object(a["A"])("TrackList");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Le,Ue,Object(a["i"])(o,{source:e.selectedSource},null,8,["source"]),Object(a["g"])("div",Ae,[Pe,Object(a["g"])("div",_e,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(){return e.shuffle&&e.shuffle.apply(e,arguments)})},"Preview shuffle"),Object(a["g"])("button",{onClick:t[1]||(t[1]=function(){return e.save&&e.save.apply(e,arguments)})},"Save")])]),Object(a["i"])(i,{tracks:e.tracks},null,8,["tracks"])],64)}Object(a["u"])();n("fb6a");Object(a["w"])("data-v-40065e22");var De={class:"tracklist-container"},Ee={class:"left"},Ne=["src"],Ie={class:"right"};function Me(e,t,n,r,c,s){return Object(a["t"])(),Object(a["f"])("div",De,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(e.tracks,(function(e,t){var n;return Object(a["t"])(),Object(a["f"])("div",{key:t,class:"tracklist-track"},[Object(a["g"])("div",Ee,[Object(a["g"])("img",{src:null===(n=e.track.album.images[0])||void 0===n?void 0:n.url,alt:""},null,8,Ne),Object(a["h"])(" "+Object(a["D"])(e.track.name),1)]),Object(a["g"])("div",Ie,Object(a["D"])(e.track.album.artists.map((function(e){return e.name})).join(", ")),1)])})),128))])}Object(a["u"])();var Re=Object(a["j"])({name:"TrackList",props:{tracks:{type:Array,required:!0}},setup:function(){}});n("9c16");const Fe=A()(Re,[["render",Me],["__scopeId","data-v-40065e22"]]);var Ge=Fe;function Be(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}var We=Object(a["j"])({name:"PlaylistShuffleStep2",components:{TrackList:Ge,PlaylistCard:ge},setup:function(){var e=Object(y["b"])(),t=Object(a["b"])((function(){return e.state.selectedTrackSource})),n=Object(a["m"])(z);if(!n)throw new Error("No SpotifyWebApi instance injected");var r=Object(a["m"])(D);if(!r)throw new Error("No SpotifyCurrentUser injected");var c=Object(a["y"])([]),s=function(){var e=Object(pe["a"])(regeneratorRuntime.mark((function e(t){var a,r,c,s,o,i,l,u,f,b,j,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.value.playlists.getPlaylistItems(t);case 2:a=e.sent,r=Object(de["a"])(a.items);case 4:if(!a.next){e.next=15;break}i=null===(c=a.next)||void 0===c?void 0:c.split("?")[1],l=new Map,u=Object(je["a"])(null!==(s=null===i||void 0===i||null===(o=i.split("&"))||void 0===o?void 0:o.map((function(e){return e.split("=")})))&&void 0!==s?s:[]);try{for(u.s();!(f=u.n()).done;)b=Object(be["a"])(f.value,2),j=b[0],d=b[1],l.set(j,d)}catch(p){u.e(p)}finally{u.f()}return e.next=11,n.value.playlists.getPlaylistItems(t,{offset:Number(l.get("offset")),limit:Number(l.get("limit"))});case 11:a=e.sent,r.push.apply(r,Object(de["a"])(a.items)),e.next=4;break;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=t.value;e?s(e.id).then((function(e){c.value=Object(de["a"])(e)})).catch((function(e){return console.error(e)})):c.value=[]};Object(a["r"])((function(){return o()})),Object(a["F"])(t,(function(){return o()}));var i=function(){var e=Object(de["a"])(c.value);Be(e),c.value=Object(de["a"])(e)},l=function(){var e=Object(pe["a"])(regeneratorRuntime.mark((function e(){var a,s,o,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.value,s=r.value,!a||!s){e.next=14;break}return e.next=5,n.value.playlists.createPlaylist(s.id,"Shuffled: ".concat(a.name),{public:a.public,collaborative:a.collaborative,description:a.description});case 5:o=e.sent,i=0;case 7:if(!(i<c.value.length)){e.next=14;break}return l=c.value.slice(i,i+100),e.next=11,n.value.playlists.addItemsToPlaylist(o.id,l.map((function(e){return e.track.uri})));case 11:i+=100,e.next=7;break;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{selectedSource:t,tracks:c,shuffle:i,save:function(){return l().then((function(){return alert("A new playlist has been added to your Spotify library.")})).catch((function(e){console.error(e),alert("An error occurred: ".concat(e))}))}}}});n("7d51");const qe=A()(We,[["render",ze],["__scopeId","data-v-64a00546"]]);var He=qe,Ye=Object(a["j"])({name:"PlaylistShuffle",components:{PlaylistShuffleStep1:Te,PlaylistShuffleStep2:He},setup:function(){var e=Object(a["m"])(D);if(!e)throw new Error("No SpotifyCurrentUser injected");null===e.value&&st.push("/");var t=Object(a["C"])(Te),n=function(e){switch(e){case 1:t.value=Te;break;case 2:t.value=He;break;default:throw new Error("Unknown PlaylistShuffle step ".concat(e))}};return Object(a["v"])(N,n),{currentUser:e,currentComponent:t}}});const Je=A()(Ye,[["render",ae]]);var Ve=Je;Object(a["w"])("data-v-5af42656");var Ze=Object(a["g"])("h2",null,"Top artists",-1),Ke={key:0,class:"chart-wrapper"},Qe={key:0,class:"loading"},Xe={key:1,class:"warn"};function $e(e,t,n,r,c,s){return Object(a["t"])(),Object(a["f"])(a["a"],null,[Ze,e.lastfmUser?(Object(a["t"])(),Object(a["f"])("div",Ke,[Object(a["g"])("canvas",{id:"artist-chart",class:Object(a["o"])({hidden:!e.data})},null,2),e.data?Object(a["e"])("",!0):(Object(a["t"])(),Object(a["f"])("p",Qe,"Loading... ("+Object(a["D"])(e.loadProgress)+"/"+Object(a["D"])(e.totalWeeks)+")",1))])):(Object(a["t"])(),Object(a["f"])("p",Xe,"You haven't set your Last.fm username."))],64)}Object(a["u"])();n("159b"),n("99af"),n("a630");var et=n("d549"),tt=(n("1c86"),Object(a["j"])({name:"TopArtistsChart",setup:function(){var e=Object(y["b"])(),t=Object(a["b"])((function(){return e.state.lastfmUsername})),n=Object(a["m"])(E);if(!n)throw new Error("No LastfmApi injected");var r=Object(a["y"])(null),c=Object(a["y"])(0),s=Object(a["y"])(NaN),o=function(){var e=Object(pe["a"])(regeneratorRuntime.mark((function e(){var a,o,i,l,u,f,b,j,d,p,m,O,v,h,y,g,k,w,S,C,x,T,L,U,A;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Date(Date.now()),e.next=3,n.value.user.getInfo({user:t.value});case 3:return o=e.sent,e.next=6,n.value.user.getTopArtists({user:o.user.name,period:"overall"});case 6:for(i=e.sent,l=i.topartists.artist.slice(0,20),u=new Array,f=new Map,l.map((function(e){return e.name})).filter((function(e){return void 0!==e})).forEach((function(e){return f.set(e,[])})),b=new Date(1e3*Number(o.user.registered.unixtime)),b.setUTCHours(0,0,0,0),j=new Date(a),d=[],p=new Date(b);p<j;p.setDate(p.getDate()+7))d.push(new Date(p));p.getTime()!==j.getTime()&&(m=new Date(p),m.setDate(m.getDate()+7),d.push(new Date(m))),s.value=d.length,O=0,v=d;case 20:if(!(O<v.length)){e.next=69;break}return h=v[O],console.log("Fetched data from ".concat(b," to ").concat(h)),e.next=25,n.value.user.getWeeklyArtistChart({user:o.user.name,from:"".concat(b.getTime()/1e3),to:"".concat(h.getTime()/1e3)});case 25:y=e.sent,g=y.weeklyartistchart.artist.filter((function(e){return l.some((function(t){return e.name===t.name}))})),console.log(h,g),u.push(new Date(h)),k=Object(je["a"])(l),e.prev=30,k.s();case 32:if((w=k.n()).done){e.next=57;break}if(S=w.value,!S.name){e.next=55;break}x=0,T=Object(je["a"])(g),e.prev=37,T.s();case 39:if((L=T.n()).done){e.next=46;break}if(U=L.value,U.name!==S.name){e.next=44;break}return x=Number(null!==(A=U.playcount)&&void 0!==A?A:0),e.abrupt("break",46);case 44:e.next=39;break;case 46:e.next=51;break;case 48:e.prev=48,e.t0=e["catch"](37),T.e(e.t0);case 51:return e.prev=51,T.f(),e.finish(51);case 54:null===(C=f.get(S.name))||void 0===C||C.push(x);case 55:e.next=32;break;case 57:e.next=62;break;case 59:e.prev=59,e.t1=e["catch"](30),k.e(e.t1);case 62:return e.prev=62,k.f(),e.finish(62);case 65:c.value++;case 66:O++,e.next=20;break;case 69:r.value={weeks:u,dataMap:f};case 70:case"end":return e.stop()}}),e,null,[[30,59,62,65],[37,48,51,54]])})));return function(){return e.apply(this,arguments)}}();return Object(a["r"])((function(){t.value&&o()})),Object(a["F"])(t,(function(){window.location.reload()})),Object(a["F"])(r,(function(e){if(e){var t=document.querySelector("#artist-chart");if(!t)throw new Error("Chart element not found");var n=["#5899DA","#E8743B","#19A979","#ED4A7B","#945ECF","#13A4B4","#525DF4","#BF399E","#6C8893","#EE6868","#2F6497"],a=n.map((function(e){return"".concat(e,"11")})),r=0,c=Array.from(e.dataMap,(function(e){var t=Object(be["a"])(e,2),n=t[0],a=t[1];return{key:n,value:a}})).map((function(e){var t=r++%n.length;return{label:e.key,data:e.value,fill:"origin",color:n[t],borderColor:n[t],backgroundColor:a[t]}}));new et["a"](t,{type:"line",data:{labels:e.weeks,datasets:c},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,mode:"nearest"},scales:{x:{type:"time",time:{unit:"month"}}},plugins:{tooltip:{position:"nearest"}}}})}})),{lastfmUser:t,data:r,loadProgress:c,totalWeeks:s}}}));n("b1aa");const nt=A()(tt,[["render",$e],["__scopeId","data-v-5af42656"]]);var at=nt,rt=[{path:"/",name:"Home",component:ee},{path:"/tools/shuffle",name:"PlaylistShuffle",component:Ve},{path:"/tools/artists",name:"TopArtistsChart",component:at},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ct=Object(F["a"])({history:Object(F["b"])("/"),routes:rt}),st=ct,ot=(n("2b3d"),n("25f0"),Object(y["a"])({state:{spotifyAccessToken:null,lastfmUsername:null,selectedTrackSource:null},mutations:{setSpotifyToken:function(e,t){e.spotifyAccessToken=t,t?localStorage.setItem("spotifyToken",t):localStorage.removeItem("spotifyToken")},setTrackSource:function(e,t){e.selectedTrackSource=t},setLastfmUsername:function(e,t){e.lastfmUsername=t,t?localStorage.setItem("lastfmUsername",t):localStorage.removeItem("lastfmUsername")}},actions:{loadStoredState:function(e){e.dispatch("loadLastfmUsername"),e.dispatch("loadSpotifyToken")},loadLastfmUsername:function(e){e.commit("setLastfmUsername",localStorage.getItem("lastfmUsername"))},loadSpotifyToken:function(e){var t,n=window.location.hash.slice(1),a=new Map,r=Object(je["a"])(n.split("&").map((function(e){return e.split("=")})));try{for(r.s();!(t=r.n()).done;){var c=Object(be["a"])(t.value,2),s=c[0],o=c[1];a.set(s,o)}}catch(u){r.e(u)}finally{r.f()}var i=a.get("access_token");if(i)e.commit("setSpotifyToken",i),setTimeout((function(){history.replaceState({},document.title,".")}),0);else{var l=localStorage.getItem("spotifyToken");l&&e.commit("setSpotifyToken",l)}},getNewSpotifyToken:function(e){var t=window.location.href.split("?")[0].split("#")[0],n=new URLSearchParams([["client_id","1189301921ea4fd9872c18ce32944382"],["response_type","token"],["redirect_uri",t],["scope",["user-library-read","user-read-playback-state","user-modify-playback-state","playlist-read-private","playlist-modify-public","playlist-modify-private"].join(" ")],["show_dialog","false"]]),a="https://accounts.spotify.com/authorize?".concat(n.toString());window.location.href=a}},modules:{}}));Object(a["c"])(R).use(ot).use(st).mount("#app")}});
//# sourceMappingURL=app.4ef4ffbf.js.map