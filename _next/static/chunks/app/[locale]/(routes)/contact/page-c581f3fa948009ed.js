(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732,995],{2611:function(e,t,n){Promise.resolve().then(n.bind(n,4327)),Promise.resolve().then(n.bind(n,11)),Promise.resolve().then(n.bind(n,9888))},11:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(2887),o=n(2265),i=n(4480);function a(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return o.createElement(i.P,(0,r.g)({locale:t},n))}},4480:function(e,t,n){"use strict";var r=n(2265),o=n(2764),i=n(7082),a=r&&r.__esModule?r:{default:r};t.P=function(e){let{children:t,defaultTranslationValues:n,formats:l,getMessageFallback:s,locale:u,messages:c,now:f,onError:d,timeZone:m}=e,[g]=r.useState(()=>new Map),h=r.useMemo(()=>({...o.initializeConfig({locale:u,defaultTranslationValues:n,formats:l,getMessageFallback:s,messages:c,now:f,onError:d,timeZone:m}),messageFormatCache:g}),[n,l,s,u,g,c,f,d,m]);return a.default.createElement(i.IntlContext.Provider,{value:h},t)}},2764:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function r(e){return n(e.namespace,e.key)}function o(e){console.error(e)}t.defaultGetMessageFallback=r,t.defaultOnError=o,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:i,...a}=e;return{...a,messages:n,onError:i||o,getMessageFallback:t||r}},t.joinPath=n},9888:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),o=n(2265),i=n(4783),a=n(9354),l=n(348);function s(e){let{children:t,className:n="",...s}=e,u=(0,o.useRef)(null),c=function(e){let[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=new IntersectionObserver(e=>{let[t]=e;n(t.isIntersecting)});return t.observe(e.current),()=>{t.disconnect()}},[e]),t}(u),f=(0,l.o)(),d="",m="";switch(f){case i.z.high:d="opacity-100 blur-none",m="opacity-0 blur-sm";break;case i.z.medium:d="opacity-100",m="opacity-0";break;default:d="opacity-100"}return(0,r.jsx)("div",{ref:u,...s,className:(0,a.cn)(f!=i.z.low?"transition duration-300":"",c||f==i.z.low?d:m,"print:opacity-100 print:blur-none print:transition-none",n),children:t})}},4783:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});let r={title:"hammerill_graphics",low:"low",medium:"medium",high:"high"}},348:function(e,t,n){"use strict";function r(){return"medium"}n.d(t,{o:function(){return r}})},9354:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(4839),o=n(6164);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m6)((0,r.W)(t))}}},function(e){e.O(0,[327,868,971,23,744],function(){return e(e.s=2611)}),_N_E=e.O()}]);