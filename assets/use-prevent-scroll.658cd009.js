import{l as Y,V as q,w as M,o as z,g as $,n as x,W as p,J as d,E as k,X as B}from"./index.a9b9d143.js";import{v as F}from"./vm.296147d2.js";import{a as _,b as j,h as I}from"./scroll.930ea583.js";function N(e,o,i){let l;function r(){l!==void 0&&(q.remove(l),l=void 0)}return Y(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>i.value===!0,handler:o},q.add(l)}}}const Q={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Z=["beforeShow","show","beforeHide","hide"];function ee({showing:e,canShow:o,hideOnRouteChange:i,handleShow:l,handleHide:r,processOnMount:v}){const s=$(),{props:n,emit:a,proxy:V}=s;let u;function X(t){e.value===!0?h(t):L(t)}function L(t){if(n.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(a("update:modelValue",!0),u=t,x(()=>{u===t&&(u=void 0)})),(n.modelValue===null||c===!1)&&E(t)}function E(t){e.value!==!0&&(e.value=!0,a("beforeShow",t),l!==void 0?l(t):a("show",t))}function h(t){if(n.disable===!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(a("update:modelValue",!1),u=t,x(()=>{u===t&&(u=void 0)})),(n.modelValue===null||c===!1)&&H(t)}function H(t){e.value!==!1&&(e.value=!1,a("beforeHide",t),r!==void 0?r(t):a("hide",t))}function P(t){n.disable===!0&&t===!0?n["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):t===!0!==e.value&&(t===!0?E:H)(u)}M(()=>n.modelValue,P),i!==void 0&&F(s)===!0&&M(()=>V.$route.fullPath,()=>{i.value===!0&&e.value===!0&&h()}),v===!0&&z(()=>{P(n.modelValue)});const S={show:L,hide:h,toggle:X};return Object.assign(V,S),S}let m=0,b,g,w,T=!1,C,A,f;function J(e){K(e)&&k(e)}function K(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=B(e),i=e.shiftKey&&!e.deltaX,l=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=i||l?e.deltaY:e.deltaX;for(let v=0;v<o.length;v++){const s=o[v];if(I(s,l))return l?r<0&&s.scrollTop===0?!0:r>0&&s.scrollTop+s.clientHeight===s.scrollHeight:r<0&&s.scrollLeft===0?!0:r>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){T!==!0&&(T=!0,requestAnimationFrame(()=>{T=!1;const{height:o}=e.target,{clientHeight:i,scrollTop:l}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=i-o,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function W(e){const o=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=_(window),g=j(window),C=o.style.left,A=o.style.top,o.style.left=`-${b}px`,o.style.top=`-${g}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,d.passiveCapture),window.visualViewport.addEventListener("scroll",y,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",J,d.notPassive),e==="remove"&&(p.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",y,d.passiveCapture),window.visualViewport.removeEventListener("scroll",y,d.passiveCapture)):window.removeEventListener("scroll",U,d.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=C,o.style.top=A,window.scrollTo(b,g),w=void 0)}function O(e){let o="add";if(e===!0){if(m++,f!==void 0){clearTimeout(f),f=void 0;return}if(m>1)return}else{if(m===0||(m--,m>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(f),f=setTimeout(()=>{W(o),f=void 0},100);return}}W(o)}function oe(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,O(o))}}}export{Z as a,ee as b,N as c,oe as d,Q as u};