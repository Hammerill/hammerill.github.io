(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{4041:function(e,n,t){Promise.resolve().then(t.bind(t,4327)),Promise.resolve().then(t.bind(t,11))},11:function(e,n,t){"use strict";t.d(n,{default:function(){return l}});var r=t(2887),o=t(2265),a=t(4480);function l(e){let{locale:n,...t}=e;if(!n)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return o.createElement(a.P,(0,r.g)({locale:n},t))}},4480:function(e,n,t){"use strict";var r=t(2265),o=t(2764),a=t(7082),l=r&&r.__esModule?r:{default:r};n.P=function(e){let{children:n,defaultTranslationValues:t,formats:s,getMessageFallback:i,locale:c,messages:u,now:f,onError:d,timeZone:g}=e,[m]=r.useState(()=>new Map),p=r.useMemo(()=>({...o.initializeConfig({locale:c,defaultTranslationValues:t,formats:s,getMessageFallback:i,messages:u,now:f,onError:d,timeZone:g}),messageFormatCache:m}),[t,s,i,c,m,u,f,d,g]);return l.default.createElement(a.IntlContext.Provider,{value:p},n)}},2764:function(e,n){"use strict";function t(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(".")}function r(e){return t(e.namespace,e.key)}function o(e){console.error(e)}n.defaultGetMessageFallback=r,n.defaultOnError=o,n.initializeConfig=function(e){let{getMessageFallback:n,messages:t,onError:a,...l}=e;return{...l,messages:t,onError:a||o,getMessageFallback:n||r}},n.joinPath=t}},function(e){e.O(0,[327,971,23,744],function(){return e(e.s=4041)}),_N_E=e.O()}]);