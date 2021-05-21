(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var i=a.apply(null,t);i&&e.push(i)}else if("object"===o)for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},2123:function(e,n,t){"use strict";t.d(n,{q:function(){return l},oG:function(){return f},ZP:function(){return d}});var r=t(5893),a=t(6156),o=t(7294),i=t(1664);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=[{title:"Kolese Loyola",type:"Web Application",thumbnail:"/static/loyola.jpg",scope:["UI/UX","Web Development"],tags:[1,3],description:"Kolese Loyola is a group of Projects that consist of New Student Admissions Applicaiton"},{title:"C-Smart",type:"Web Application",thumbnail:"/static/csmart.jpg",scope:["UI/UX","Web Development"],tags:[2],description:"CSMART is a web application that functions as a Swift Message Investigation Tool. The main function of the application is to investigate problematic Swift Message Case and repair it through a specific set of processes depending on the type of case and the problem it encounters. CSMART consume Spring Boot API as the main backend system.\n    \nOn the front-end side, CSMART Utilize Angular 6 and bootstrap 4 CSS framework as the main foundation. With a combination of RxJS and a modular nature of Angular 6, making this application excels in term of speed performance, effectiveness, and accessibility.\n    "},{title:"Marketplace Auction Price",type:"Web Application",thumbnail:"/static/map.jpg",tags:[1,3],scope:["UI/UX","Web Development"],snapshot:["/static/map1.jpg","/static/map2.jpg"],description:"Market Auction Price is a service from IBID, the largest automotive auction center in Indonesia, which presents the market price statistics of auction cars in various graphic formats and details according to user needs. MAP is integrated with ACV (Astra Car Valuation) as a reliable and comprehensive standard for car valuation so that the analysis and price trends presented are more precise and accurate.\n    \nMAP helped the decision to buy a dream car with a sense of comfort within the budget. Know the market price of the car to be purchased in detail according to the conditions, location and within a certain time so that it can know the price trend.\n    "},{title:"Trav",type:"Mobile Design",thumbnail:"/static/trav1.jpg",scope:["UI/UX"],snapshot:["/static/trav2.jpg"],tags:[3],description:"Trav is an Mobile app that focus on helping you planned out your next holiday trip. Trav will help you find the great spot for you to spend your time. A place to eat, place to stay, family destination, romantic place, adventure time, or maybe a beautiful place to take a photos? we got you covered. \n    \nA Clean design and responsive interaction, will help you plan the perfect trip you've been dreaming of. Combine that with over 500.000 Destination all around the globe, this app eliminate the needs to check each destination one by one, making it easier to make a perfect travel in a short time."},{title:"Volimond Lab",type:"Website",thumbnail:"/static/vmdlab1.jpg",tags:[3],snapshot:["/static/vmdlab2.jpg","/static/vmdlab2.jpg","/static/vmdlab2.jpg","/static/vmdlab2.jpg"],description:"VMDLAB (pronounced V.M.D Lab) is a Modern and Simplistic HTML5 Based Web template. Carefully constructed using latest trends in technology to make it look professional and classy but also user friendly. Suitable for every use case, starting from personal web, company profile, landing page, product description and other cool things.\n    \nThis is my personal project and also a project that i work on, to complete assignment in one of my class back at Vocational School."}],f=["All Tags","React JS","Angular","UI/UX","Node JS","ExpressJS"];function d(){var e=(0,o.useState)(""),n=e[0],t=e[1],a=n?l.map((function(e){return s(s({},e),{},{isHidden:!e.tags.includes(n)})})):l,c=a.filter((function(e){return!e.isHidden}));return(0,r.jsx)("div",{className:"section padded full-height",style:{paddingTop:"80px"},children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{style:{textAlign:"center",marginBottom:"2em"},children:[(0,r.jsx)("h2",{className:"title",children:"This is what i've worked on"}),(0,r.jsx)("h4",{className:"subtitle",children:"I'm a professional Web Developer."})]}),(0,r.jsx)("div",{style:{textAlign:"center",marginBottom:"4em"},children:(0,r.jsx)("div",{className:"tags",children:f.map((function(e,a){var o=0===a?"":a;return(0,r.jsx)("span",{className:"".concat(n===o?"active":""),onClick:function(e){t(o)},children:e},"tagItem".concat(a))}))})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"projects",children:a.map((function(e,n){return(0,r.jsx)(i.default,{href:"/projects/".concat(n),children:(0,r.jsx)("div",{className:"project ".concat(e.isHidden?"hidden":""),children:(0,r.jsx)(u,s({},e))})},"projectItem".concat(n))}))}),(0,r.jsx)("div",{className:"no-data ".concat(c.length>0?"hidden":""),children:"I'm still working on it"})]})]})})}var u=function(e){var n=e.title,t=void 0===n?"":n,a=e.type,o=void 0===a?"":a,i=e.tags,c=void 0===i?[]:i,s=e.thumbnail;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"project-picture",children:(0,r.jsx)("img",{src:s})}),(0,r.jsxs)("div",{className:"project-desc",children:[(0,r.jsx)("div",{className:"project-title",children:t}),(0,r.jsx)("div",{className:"project-type",children:o}),(0,r.jsx)("div",{className:"project-tags",children:c.map((function(e,n){return(0,r.jsx)("span",{children:f[e]},"projectItem".concat(n))}))})]})]})}},2554:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return me}});var r=t(5893),a=t(7294),o=t(1163),i=t(1664),c=t(9008),s=t(2123),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=t(6156);function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=t(4184),m=t.n(h),g=(0,a.createContext)({});function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,n){(function(e){return"string"===typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var t=function(e){return"string"===typeof e&&-1!==e.indexOf("%")}(e);return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:e=360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n))}function j(e){return e<=1?100*Number(e)+"%":e}function w(e){return 1===e.length?"0"+e:String(e)}function k(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*t*(n-e):t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function C(e){return A(e)/255}function A(e){return parseInt(e,16)}var N={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function O(e){var n,t,r,a={r:0,g:0,b:0},o=1,i=null,c=null,s=null,l=!1,f=!1;return"string"===typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var n=!1;if(N[e])e=N[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var t=E.rgb.exec(e);if(t)return{r:t[1],g:t[2],b:t[3]};if(t=E.rgba.exec(e))return{r:t[1],g:t[2],b:t[3],a:t[4]};if(t=E.hsl.exec(e))return{h:t[1],s:t[2],l:t[3]};if(t=E.hsla.exec(e))return{h:t[1],s:t[2],l:t[3],a:t[4]};if(t=E.hsv.exec(e))return{h:t[1],s:t[2],v:t[3]};if(t=E.hsva.exec(e))return{h:t[1],s:t[2],v:t[3],a:t[4]};if(t=E.hex8.exec(e))return{r:A(t[1]),g:A(t[2]),b:A(t[3]),a:C(t[4]),format:n?"name":"hex8"};if(t=E.hex6.exec(e))return{r:A(t[1]),g:A(t[2]),b:A(t[3]),format:n?"name":"hex"};if(t=E.hex4.exec(e))return{r:A(t[1]+t[1]),g:A(t[2]+t[2]),b:A(t[3]+t[3]),a:C(t[4]+t[4]),format:n?"name":"hex8"};if(t=E.hex3.exec(e))return{r:A(t[1]+t[1]),g:A(t[2]+t[2]),b:A(t[3]+t[3]),format:n?"name":"hex"};return!1}(e)),"object"===typeof e&&(I(e.r)&&I(e.g)&&I(e.b)?(n=e.r,t=e.g,r=e.b,a={r:255*x(n,255),g:255*x(t,255),b:255*x(r,255)},l=!0,f="%"===String(e.r).substr(-1)?"prgb":"rgb"):I(e.h)&&I(e.s)&&I(e.v)?(i=j(e.s),c=j(e.v),a=function(e,n,t){e=6*x(e,360),n=x(n,100),t=x(t,100);var r=Math.floor(e),a=e-r,o=t*(1-n),i=t*(1-a*n),c=t*(1-(1-a)*n),s=r%6;return{r:255*[t,i,o,o,c,t][s],g:255*[c,t,t,i,o,o][s],b:255*[o,o,c,t,t,i][s]}}(e.h,i,c),l=!0,f="hsv"):I(e.h)&&I(e.s)&&I(e.l)&&(i=j(e.s),s=j(e.l),a=function(e,n,t){var r,a,o;if(e=x(e,360),n=x(n,100),t=x(t,100),0===n)a=t,o=t,r=t;else{var i=t<.5?t*(1+n):t+n-t*n,c=2*t-i;r=k(c,i,e+1/3),a=k(c,i,e),o=k(c,i,e-1/3)}return{r:255*r,g:255*a,b:255*o}}(e.h,i,s),l=!0,f="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(o=e.a)),o=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(o),{ok:l,format:e.format||f,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o}}var S="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",M="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?",T="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?",E={CSS_UNIT:new RegExp(S),rgb:new RegExp("rgb"+M),rgba:new RegExp("rgba"+T),hsl:new RegExp("hsl"+M),hsla:new RegExp("hsla"+T),hsv:new RegExp("hsv"+M),hsva:new RegExp("hsva"+T),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function I(e){return Boolean(E.CSS_UNIT.exec(String(e)))}var F=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function P(e){var n=function(e,n,t){e=x(e,255),n=x(n,255),t=x(t,255);var r=Math.max(e,n,t),a=Math.min(e,n,t),o=0,i=r,c=r-a,s=0===r?0:c/r;if(r===a)o=0;else{switch(r){case e:o=(n-t)/c+(n<t?6:0);break;case n:o=(t-e)/c+2;break;case t:o=(e-n)/c+4}o/=6}return{h:o,s:s,v:i}}(e.r,e.g,e.b);return{h:360*n.h,s:n.s,v:n.v}}function D(e){var n=e.r,t=e.g,r=e.b;return"#".concat(function(e,n,t,r){var a=[w(Math.round(e).toString(16)),w(Math.round(n).toString(16)),w(Math.round(t).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}(n,t,r,!1))}function R(e,n,t){var r=t/100;return{r:(n.r-e.r)*r+e.r,g:(n.g-e.g)*r+e.g,b:(n.b-e.b)*r+e.b}}function B(e,n,t){var r;return(r=Math.round(e.h)>=60&&Math.round(e.h)<=240?t?Math.round(e.h)-2*n:Math.round(e.h)+2*n:t?Math.round(e.h)+2*n:Math.round(e.h)-2*n)<0?r+=360:r>=360&&(r-=360),r}function L(e,n,t){return 0===e.h&&0===e.s?e.s:((r=t?e.s-.16*n:4===n?e.s+.16:e.s+.05*n)>1&&(r=1),t&&5===n&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function U(e,n,t){var r;return(r=t?e.v+.05*n:e.v-.15*n)>1&&(r=1),Number(r.toFixed(2))}function _(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],r=O(e),a=5;a>0;a-=1){var o=P(r),i=D(O({h:B(o,a,!0),s:L(o,a,!0),v:U(o,a,!0)}));t.push(i)}t.push(D(r));for(var c=1;c<=4;c+=1){var s=P(r),l=D(O({h:B(s,c),s:L(s,c),v:U(s,c)}));t.push(l)}return"dark"===n.theme?F.map((function(e){var r=e.index,a=e.opacity;return D(R(O(n.backgroundColor||"#141414"),O(t[r]),100*a))})):t}var q={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},W={},H={};Object.keys(q).forEach((function(e){W[e]=_(q[e]),W[e].primary=W[e][5],H[e]=_(q[e],{theme:"dark",backgroundColor:"#141414"}),H[e].primary=H[e][5]}));W.red,W.volcano,W.gold,W.orange,W.yellow,W.lime,W.green,W.cyan,W.blue,W.geekblue,W.purple,W.magenta,W.grey;var X={};function V(e,n){0}function z(e,n,t){n||X[t]||(e(!1,t),X[t]=!0)}var Z=function(e,n){z(V,e,n)};function $(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var J="rc-util-key";function G(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function K(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!$())return null;var r,a=document.createElement("style");(null===(n=t.csp)||void 0===n?void 0:n.nonce)&&(a.nonce=null===(r=t.csp)||void 0===r?void 0:r.nonce);a.innerHTML=e;var o=G(t),i=o.firstChild;return t.prepend&&o.prepend?o.prepend(a):t.prepend&&i?o.insertBefore(a,i):o.appendChild(a),a}var Y=new Map;function Q(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=G(t);if(!Y.has(r)){var a=K("",t),o=a.parentNode;Y.set(r,o),o.removeChild(a)}var i=Array.from(Y.get(r).children).find((function(e){return"STYLE"===e.tagName&&e[J]===n}));if(i){var c,s,l;if((null===(c=t.csp)||void 0===c?void 0:c.nonce)&&i.nonce!==(null===(s=t.csp)||void 0===s?void 0:s.nonce))i.nonce=null===(l=t.csp)||void 0===l?void 0:l.nonce;return i.innerHTML!==e&&(i.innerHTML=e),i}var f=K(e,t);return f[J]=n,f}function ee(e){return"object"===v(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===v(e.icon)||"function"===typeof e.icon)}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var r=e[t];switch(t){case"class":n.className=r,delete n.class;break;default:n[t]=r}return n}),{})}function te(e,n,t){return t?a.createElement(e.tag,y(y({key:n},ne(e.attrs)),t),(e.children||[]).map((function(t,r){return te(t,"".concat(n,"-").concat(e.tag,"-").concat(r))}))):a.createElement(e.tag,y({key:n},ne(e.attrs)),(e.children||[]).map((function(t,r){return te(t,"".concat(n,"-").concat(e.tag,"-").concat(r))})))}function re(e){return _(e)[0]}function ae(e){return e?Array.isArray(e)?e:[e]:[]}var oe="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",ie={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var ce=function(e){var n,t,r=e.icon,o=e.className,i=e.onClick,c=e.style,s=e.primaryColor,l=e.secondaryColor,f=p(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),d=ie;if(s&&(d={primaryColor:s,secondaryColor:l||re(s)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,n=(0,a.useContext)(g).csp;(0,a.useEffect)((function(){Q(e,"@ant-design-icons",{prepend:!0,csp:n})}),[])}(),n=ee(r),t="icon should be icon definiton, but got ".concat(r),Z(n,"[@ant-design/icons] ".concat(t)),!ee(r))return null;var u=r;return u&&"function"===typeof u.icon&&(u=y(y({},u),{},{icon:u.icon(d.primaryColor,d.secondaryColor)})),te(u.icon,"svg-".concat(u.name),y({className:o,onClick:i,style:c,"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};ce.displayName="IconReact",ce.getTwoToneColors=function(){return y({},ie)},ce.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;ie.primaryColor=n,ie.secondaryColor=t||re(n),ie.calculated=!!t};var se=ce;function le(e){var n=d(ae(e),2),t=n[0],r=n[1];return se.setTwoToneColors({primaryColor:t,secondaryColor:r})}le("#1890ff");var fe=a.forwardRef((function(e,n){var t,r=e.className,o=e.icon,i=e.spin,c=e.rotate,s=e.tabIndex,l=e.onClick,f=e.twoToneColor,h=p(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=a.useContext(g).prefixCls,y=void 0===b?"anticon":b,v=m()(y,(t={},(0,u.Z)(t,"".concat(y,"-").concat(o.name),!!o.name),(0,u.Z)(t,"".concat(y,"-spin"),!!i||"loading"===o.name),t),r),x=s;void 0===x&&l&&(x=-1);var j=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,w=d(ae(f),2),k=w[0],C=w[1];return a.createElement("span",Object.assign({role:"img","aria-label":o.name},h,{ref:n,tabIndex:x,onClick:l,className:v}),a.createElement(se,{icon:o,primaryColor:k,secondaryColor:C,style:j}))}));fe.displayName="AntdIcon",fe.getTwoToneColor=function(){var e=se.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},fe.setTwoToneColor=le;var de=fe,ue=function(e,n){return a.createElement(de,Object.assign({},e,{ref:n,icon:l}))};ue.displayName="ArrowLeftOutlined";var pe=a.forwardRef(ue),he={scope:"Scope",summary:"Summary",tags:"Tags #",goBack:"Go Back"};function me(e){var n=(0,o.useRouter)().query.projectId,t=s.q[n]||{},a=he;return(0,r.jsxs)("div",{className:"root project-detail",children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"Project"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"container",style:{height:"100%"},children:[(0,r.jsxs)("div",{className:"project-desc",children:[(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsxs)("div",{className:"custom-link",children:[(0,r.jsx)(pe,{style:{marginRight:"1em"}}),(0,r.jsx)("span",{children:a.goBack})]})})}),(0,r.jsxs)("div",{className:"heading",children:[(0,r.jsx)("h1",{className:"title",children:t.title}),(0,r.jsx)("span",{className:"label",style:{marginBottom:"0px"},children:t.type||"Project Type"}),(0,r.jsx)("p",{className:"text",children:t.year||"-"})]}),(0,r.jsxs)("div",{className:"scope",children:[(0,r.jsx)("span",{className:"label",children:a.scope}),t.scope&&t.scope.map((function(e,n){return(0,r.jsx)("p",{className:"text",children:e},"scopeItem".concat(n))}))]}),(0,r.jsxs)("div",{className:"summary",children:[(0,r.jsx)("span",{className:"label",children:a.summary}),(0,r.jsx)("p",{className:"text",children:t.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"label",children:a.tags}),(0,r.jsx)("div",{className:"tags",children:t.tags&&t.tags.map((function(e,n){return(0,r.jsx)("span",{children:s.oG[e]},"tagItem".concat(n))}))})]})]}),(0,r.jsx)("div",{className:"project-picture",children:(0,r.jsx)("img",{src:t.thumbnail})}),(0,r.jsx)("div",{className:"project-snapshot",children:t.snapshot&&t.snapshot.map((function(e,n){return(0,r.jsx)("div",{className:"snapshot-item",children:(0,r.jsx)("img",{src:e})},"snapshotItem".concat(n))}))})]})]})}},9909:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[projectId]",function(){return t(2554)}])},1163:function(e,n,t){e.exports=t(2441)}},function(e){e.O(0,[996,774,888,179],(function(){return n=9909,e(e.s=n);var n}));var n=e.O();_N_E=n}]);