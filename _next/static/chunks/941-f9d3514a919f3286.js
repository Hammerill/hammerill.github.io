"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{2988:function(e,n,t){t.d(n,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},8149:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},1584:function(e,n,t){t.d(n,{F:function(){return u},e:function(){return l}});var r=t(2265);function u(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function l(...e){return(0,r.useCallback)(u(...e),e)}},8324:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(2265);function u(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let l=(0,r.createContext)(u),o=t.length;function i(n){let{scope:t,children:u,...i}=n,c=(null==t?void 0:t[e][o])||l,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(c.Provider,{value:a},u)}return t=[...t,u],i.displayName=n+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][o])||l,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e)[`__scope${r}`];return{...n,...u}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},7513:function(e,n,t){t.d(n,{gm:function(){return l}});var r=t(2265);let u=(0,r.createContext)(void 0);function l(e){let n=(0,r.useContext)(u);return e||n||"ltr"}},1383:function(e,n,t){t.d(n,{z:function(){return i}});var r=t(2265),u=t(4887),l=t(1584),o=t(1336);let i=e=>{let{present:n,children:t}=e,i=function(e){var n,t;let[l,i]=(0,r.useState)(),a=(0,r.useRef)({}),f=(0,r.useRef)(e),d=(0,r.useRef)("none"),[s,m]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return(0,r.useEffect)(()=>{let e=c(a.current);d.current="mounted"===s?e:"none"},[s]),(0,o.b)(()=>{let n=a.current,t=f.current;if(t!==e){let r=d.current,u=c(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),f.current=e}},[e,m]),(0,o.b)(()=>{if(l){let e=e=>{let n=c(a.current).includes(e.animationName);e.target===l&&n&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===l&&(d.current=c(a.current))};return l.addEventListener("animationstart",n),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",n),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}m("ANIMATION_END")},[l,m]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(n),a="function"==typeof t?t({present:i.isPresent}):r.Children.only(t),f=(0,l.e)(i.ref,a.ref);return"function"==typeof t||i.isPresent?(0,r.cloneElement)(a,{ref:f}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},5171:function(e,n,t){t.d(n,{WV:function(){return i},jH:function(){return c}});var r=t(2988),u=t(2265),l=t(4887),o=t(1538);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:l,...i}=e,c=l?o.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&(0,l.flushSync)(()=>e.dispatchEvent(n))}},1538:function(e,n,t){t.d(n,{g7:function(){return o}});var r=t(2988),u=t(2265),l=t(1584);let o=(0,u.forwardRef)((e,n)=>{let{children:t,...l}=e,o=u.Children.toArray(t),c=o.find(a);if(c){let e=c.props.children,t=o.map(n=>n!==c?n:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},l,{ref:n}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,t):null)}return(0,u.createElement)(i,(0,r.Z)({},l,{ref:n}),t)});o.displayName="Slot";let i=(0,u.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let u=e[r],l=n[r];/^on[A-Z]/.test(r)?u&&l?t[r]=(...e)=>{l(...e),u(...e)}:u&&(t[r]=u):"style"===r?t[r]={...u,...l}:"className"===r&&(t[r]=[u,l].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:n?(0,l.F)(n,t.ref):t.ref}):u.Children.count(t)>1?u.Children.only(null):null});i.displayName="SlotClone";let c=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===c}},5137:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(2265);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},1336:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);