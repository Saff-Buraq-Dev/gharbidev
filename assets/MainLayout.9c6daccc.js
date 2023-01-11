import{Q as ot,g as Bt,c as Qe,a as Tt,u as xt,b as Et,d as $t}from"./QBtn.961aa16e.js";import{c as $,a as Vt}from"./create.22a8c9b7.js";import{h as F,a as nt,b as lt,c as He}from"./render.69441bda.js";import{c as v,h as L,r as T,j as at,o as U,k as I,n as Ee,l as Y,g as D,m as P,p as Q,w as C,a as $e,q as se,H as We,s as O,t as Ve,u as _t,v as zt,x as Ot,y as ne,z as pe,A as Fe,B as be,C as Be,D as ye,E as Pt,G as it,I as Dt,J as le,b as Mt,K as Qt,L as rt,_ as ut,M as ee,N as ue,O as z,d as E,P as Ht,Q as Te,R as Ae,S as Re,U as Wt,V as Ft,W as At,F as Rt,X as Ie}from"./index.2309271c.js";import{u as _e,a as ze,g as Ne,s as je,c as It,Q as Nt}from"./selection.c5776ec2.js";import{v as jt,a as Xt}from"./vm.ef90d616.js";var Ut=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:n.value},F(o.default))}}),Yt=$({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const n=v(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${a.length>0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>L("div",{class:n.value},F(o.default))}});const Kt={name:String};function Gt(e={}){return(o,n,a)=>{o[n](L("input",{class:"hidden"+(a||""),...e.value}))}}var Jt=$({name:"QBtnToggle",props:{...Kt,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(o=>("label"in o||"icon"in o||"slot"in o)&&"value"in o)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:o,emit:n}){const a=v(()=>e.options.find(p=>p.value===e.modelValue)!==void 0),t=v(()=>({type:"hidden",name:e.name,value:e.modelValue})),l=Gt(t),u=v(()=>Bt(e)),m=v(()=>({rounded:e.rounded,dense:e.dense,...u.value})),c=v(()=>e.options.map((p,f)=>{const{attrs:g,value:k,slot:S,...h}=p;return{slot:S,props:{key:f,"aria-pressed":k===e.modelValue?"true":"false",...g,...h,...m.value,disable:e.disable===!0||h.disable===!0,color:k===e.modelValue?i(h,"toggleColor"):i(h,"color"),textColor:k===e.modelValue?i(h,"toggleTextColor"):i(h,"textColor"),noCaps:i(h,"noCaps")===!0,noWrap:i(h,"noWrap")===!0,size:i(h,"size"),padding:i(h,"padding"),ripple:i(h,"ripple"),stack:i(h,"stack")===!0,stretch:i(h,"stretch")===!0,onClick(s){d(k,p,s)}}}}));function d(p,f,g){e.readonly!==!0&&(e.modelValue===p?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",p,f),n("click",g))}function i(p,f){return p[f]===void 0?e[f]:p[f]}function q(){const p=c.value.map(f=>L(ot,f.props,f.slot!==void 0?o[f.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&a.value===!0&&l(p,"push"),nt(o.default,p)}return()=>L(Yt,{class:"q-btn-toggle",...u.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},q)}}),Zt=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:n.value,role:"toolbar"},F(o.default))}});function eo(){const e=T(!at.value);return e.value===!1&&U(()=>{e.value=!0}),e}const st=typeof ResizeObserver!="undefined",Xe=st===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,a,t={width:-1,height:-1};function l(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(clearTimeout(n),n=null,a){const{offsetWidth:c,offsetHeight:d}=a;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:m}=D();if(st===!0){let c;const d=i=>{a=m.$el.parentNode,a?(c=new ResizeObserver(l),c.observe(a),u()):i!==!0&&Y(()=>{d(!0)})};return U(()=>{d()}),I(()=>{clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():a&&c.unobserve(a))}),Ee}else{let i=function(){clearTimeout(n),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",l,P.passive),d=void 0)},q=function(){i(),a&&a.contentDocument&&(d=a.contentDocument.defaultView,d.addEventListener("resize",l,P.passive),u())};const c=eo();let d;return U(()=>{Y(()=>{a=m.$el,a&&q()})}),I(i),m.trigger=l,()=>{if(c.value===!0)return L("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:q})}}}}),to=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=D(),t=$e(se,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const l=T(parseInt(e.heightHint,10)),u=T(!0),m=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||a.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?l.value:0;const s=l.value-t.scroll.value.position;return s>0?s:0}),d=v(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),i=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),q=v(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=v(()=>{const s=t.rows.value.top,b={};return s[0]==="l"&&t.left.space===!0&&(b[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(b[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function f(s,b){t.update("header",s,b)}function g(s,b){s.value!==b&&(s.value=b)}function k({height:s}){g(l,s),f("size",s)}function S(s){i.value===!0&&g(u,!0),n("focusin",s)}C(()=>e.modelValue,s=>{f("space",s),g(u,!0),t.animate()}),C(c,s=>{f("offset",s)}),C(()=>e.reveal,s=>{s===!1&&g(u,e.modelValue)}),C(u,s=>{t.animate(),n("reveal",s)}),C(t.scroll,s=>{e.reveal===!0&&g(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const h={};return t.instances.header=h,e.modelValue===!0&&f("size",l.value),f("space",e.modelValue),f("offset",c.value),I(()=>{t.instances.header===h&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const s=lt(o.default,[]);return e.elevated===!0&&s.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(L(xe,{debounce:0,onResize:k})),L("header",{class:q.value,style:p.value,onFocusin:S},s)}}}),oo=$({name:"QList",props:{..._e,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=D(),a=ze(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:t.value},F(o.default))}});function no(e,o,n){let a;function t(){a!==void 0&&(We.remove(a),a=void 0)}return I(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){a={condition:()=>n.value===!0,handler:o},We.add(a)}}}const lo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ao=["beforeShow","show","beforeHide","hide"];function io({showing:e,canShow:o,hideOnRouteChange:n,handleShow:a,handleHide:t,processOnMount:l}){const u=D(),{props:m,emit:c,proxy:d}=u;let i;function q(s){e.value===!0?g(s):p(s)}function p(s){if(m.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const b=m["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!0),i=s,Y(()=>{i===s&&(i=void 0)})),(m.modelValue===null||b===!1)&&f(s)}function f(s){e.value!==!0&&(e.value=!0,c("beforeShow",s),a!==void 0?a(s):c("show",s))}function g(s){if(m.disable===!0)return;const b=m["onUpdate:modelValue"]!==void 0;b===!0&&(c("update:modelValue",!1),i=s,Y(()=>{i===s&&(i=void 0)})),(m.modelValue===null||b===!1)&&k(s)}function k(s){e.value!==!1&&(e.value=!1,c("beforeHide",s),t!==void 0?t(s):c("hide",s))}function S(s){m.disable===!0&&s===!0?m["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?f:k)(i)}C(()=>m.modelValue,S),n!==void 0&&jt(u)===!0&&C(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&g()}),l===!0&&U(()=>{S(m.modelValue)});const h={show:p,hide:g,toggle:q};return Object.assign(d,h),h}const ro=[null,document,document.body,document.scrollingElement,document.documentElement];function uo(e,o){let n=Tt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ro.includes(n)?window:n}function dt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ct(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ae;function we(){if(ae!==void 0)return ae;const e=document.createElement("p"),o=document.createElement("div");Qe(e,{width:"100%",height:"200px"}),Qe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=o.clientWidth),o.remove(),ae=n-a,ae}function so(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,qe,Le,Z,Ce=!1,Ue,Ye,X;function co(e){fo(e)&&Ve(e)}function fo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=_t(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||a?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const u=o[l];if(so(u,a))return a?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function Ke(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=a),a>Z&&(document.scrollingElement.scrollTop-=Math.ceil((a-Z)/8))}))}function Ge(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:t}=window.getComputedStyle(o);qe=ct(window),Le=dt(window),Ue=o.style.left,Ye=o.style.top,o.style.left=`-${qe}px`,o.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,P.passiveCapture),window.visualViewport.addEventListener("scroll",ie,P.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ke,P.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",co,P.notPassive),e==="remove"&&(O.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ie,P.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,P.passiveCapture)):window.removeEventListener("scroll",Ke,P.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ue,o.style.top=Ye,window.scrollTo(qe,Le),Z=void 0)}function vo(e){let o="add";if(e===!0){if(J++,X!==void 0){clearTimeout(X),X=void 0;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){clearTimeout(X),X=setTimeout(()=>{Ge(o),X=void 0},100);return}}Ge(o)}function mo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,vo(o))}}}function ho(){let e;const o=D();function n(){clearTimeout(e)}return zt(n),I(n),{removeTimeout:n,registerTimeout(a,t){clearTimeout(e),Xt(o)===!1&&(e=setTimeout(a,t))}}}function Se(e,o,n){const a=Be(e);let t,l=a.left-o.event.x,u=a.top-o.event.y,m=Math.abs(l),c=Math.abs(u);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=u<0?"up":"down":d.up===!0&&u<0?(t="up",m>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.down===!0&&u>0?(t="down",m>c&&(d.left===!0&&l<0?t="left":d.right===!0&&l>0&&(t="right"))):d.left===!0&&l<0?(t="left",m<c&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down"))):d.right===!0&&l>0&&(t="right",m<c&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(a.left-=l,m=0,l=0):(a.top-=u,c=0,u=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:a,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:m,y:c},offset:{x:l,y:u},delta:{x:a.left-o.event.lastX,y:a.top-o.event.lastY}}}}let go=0;var ke=Vt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&O.has.touch!==!0)return;function a(l,u){n.mouse===!0&&u===!0?Ve(l):(n.stop===!0&&be(l),n.prevent===!0&&Fe(l))}const t={uid:"qvtp_"+go++,handler:o,modifiers:n,direction:Ne(n),noop:Ee,mouseStart(l){je(l,t)&&Ot(l)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(je(l,t)){const u=l.target;ne(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,u){if(O.is.firefox===!0&&pe(e,!0),t.lastEvt=l,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Fe(d),l.cancelBubble===!0&&be(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:d}}be(l)}const{left:m,top:c}=Be(l);t.event={x:m,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(l){if(t.event===void 0)return;const u=Be(l),m=u.left-t.event.x,c=u.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=l;const d=t.event.mouse===!0,i=()=>{a(l,d);let f;n.preserveCursor!==!0&&n.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),It(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),d===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{k(),g()},50):k()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&a(l,t.event.mouse);const{payload:f,synthetic:g}=Se(l,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=g===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const q=Math.abs(m),p=Math.abs(c);q!==p&&(t.direction.horizontal===!0&&q>p||t.direction.vertical===!0&&q<p||t.direction.up===!0&&q<p&&c<0||t.direction.down===!0&&q<p&&c>0||t.direction.left===!0&&q>p&&m<0||t.direction.right===!0&&q>p&&m>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,u){if(t.event!==void 0){if(ye(t,"temp"),O.is.firefox===!0&&pe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(l===void 0?t.lastEvt:l,t).payload);const{payload:m}=Se(l===void 0?t.lastEvt:l,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ne(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),O.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Je=150;var po=$({name:"QDrawer",inheritAttrs:!1,props:{...lo,..._e,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ao,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:a}){const t=D(),{proxy:{$q:l}}=t,u=ze(e,l),{preventBodyScroll:m}=mo(),{registerTimeout:c,removeTimeout:d}=ho(),i=$e(se,Q);if(i===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let q,p,f;const g=T(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),k=v(()=>e.mini===!0&&g.value!==!0),S=v(()=>k.value===!0?e.miniWidth:e.width),h=T(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),s=v(()=>e.persistent!==!0&&(g.value===!0||ft.value===!0));function b(r,w){if(A(),r!==!1&&i.animate(),_(0),g.value===!0){const x=i.instances[te.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),H(1),i.isContainer.value!==!0&&m(!0)}else H(0),r!==!1&&me(!1);c(()=>{r!==!1&&me(!0),w!==!0&&n("show",r)},Je)}function y(r,w){K(),r!==!1&&i.animate(),H(0),_(N.value*S.value),he(),w!==!0?c(()=>{n("hide",r)},Je):d()}const{show:B,hide:V}=io({showing:h,hideOnRouteChange:s,handleShow:b,handleHide:y}),{addToHistory:A,removeFromHistory:K}=no(h,V,s),R={belowBreakpoint:g,hide:V},M=v(()=>e.side==="right"),N=v(()=>(l.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),Oe=T(0),j=T(!1),de=T(!1),Pe=T(S.value*N.value),te=v(()=>M.value===!0?"left":"right"),ce=v(()=>h.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(M.value?"R":"L")>-1||l.platform.is.ios===!0&&i.isContainer.value===!0),G=v(()=>e.overlay===!1&&h.value===!0&&g.value===!1),ft=v(()=>e.overlay===!0&&h.value===!0&&g.value===!1),vt=v(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&j.value===!1?" hidden":"")),mt=v(()=>({backgroundColor:`rgba(0,0,0,${Oe.value*.4})`})),De=v(()=>M.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),ht=v(()=>M.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),gt=v(()=>{const r={};return i.header.space===!0&&De.value===!1&&(fe.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&ht.value===!1&&(fe.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),pt=v(()=>{const r={width:`${S.value}px`,transform:`translateX(${Pe.value}px)`};return g.value===!0?r:Object.assign(r,gt.value)}),bt=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),yt=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(fe.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),wt=v(()=>{const r=l.lang.rtl===!0?e.side:te.value;return[[ke,St,void 0,{[r]:!0,mouse:!0}]]}),qt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[ke,Me,void 0,{[r]:!0,mouse:!0}]]}),Lt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[ke,Me,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){kt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}C(g,r=>{r===!0?(q=h.value,h.value===!0&&V(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(h.value===!0?(_(0),H(0),he()):B(!1))}),C(()=>e.side,(r,w)=>{i.instances[w]===R&&(i.instances[w]=void 0,i[w].space=!1,i[w].offset=0),i.instances[r]=R,i[r].size=S.value,i[r].space=G.value,i[r].offset=ce.value}),C(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),C(()=>e.behavior+e.breakpoint,ve),C(i.isContainer,r=>{h.value===!0&&m(r!==!0),r===!0&&ve()}),C(i.scrollbarWidth,()=>{_(h.value===!0?0:void 0)}),C(ce,r=>{W("offset",r)}),C(G,r=>{n("onLayout",r),W("space",r)}),C(M,()=>{_()}),C(S,r=>{_(),ge(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{ge(r,S.value)}),C(()=>l.lang.rtl,()=>{_()}),C(()=>e.mini,()=>{e.modelValue===!0&&(Ct(),i.animate())}),C(k,r=>{n("miniState",r)});function _(r){r===void 0?Y(()=>{r=h.value===!0?0:S.value,_(N.value*r)}):(i.isContainer.value===!0&&M.value===!0&&(g.value===!0||Math.abs(r)===S.value)&&(r+=N.value*i.scrollbarWidth.value),Pe.value=r)}function H(r){Oe.value=r}function me(r){const w=r===!0?"remove":i.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function Ct(){clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,p=setTimeout(()=>{de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function St(r){if(h.value!==!1)return;const w=S.value,x=re(r.distance.x,0,w);if(r.isFinal===!0){x>=Math.min(75,w)===!0?B():(i.animate(),H(0),_(N.value*w)),j.value=!1;return}_((l.lang.rtl===!0?M.value!==!0:M.value)?Math.max(w-x,0):Math.min(0,x-w)),H(re(x/w,0,1)),r.isFirst===!0&&(j.value=!0)}function Me(r){if(h.value!==!0)return;const w=S.value,x=r.direction===e.side,oe=(l.lang.rtl===!0?x!==!0:x)?re(r.distance.x,0,w):0;if(r.isFinal===!0){Math.abs(oe)<Math.min(75,w)===!0?(i.animate(),H(1),_(0)):V(),j.value=!1;return}_(N.value*oe),H(re(1-oe/w,0,1)),r.isFirst===!0&&(j.value=!0)}function he(){m(!1),me(!0)}function W(r,w){i.update(e.side,r,w)}function kt(r,w){r.value!==w&&(r.value=w)}function ge(r,w){W("size",r===!0?e.miniWidth:w)}return i.instances[e.side]=R,ge(e.miniToOverlay,S.value),W("space",G.value),W("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",G.value),n("miniState",k.value),q=e.showIfAbove===!0;const r=()=>{(h.value===!0?b:y)(!1,!0)};if(i.totalWidth.value!==0){Y(r);return}f=C(i.totalWidth,()=>{f(),f=void 0,h.value===!1&&e.showIfAbove===!0&&g.value===!1?B(!1):r()})}),I(()=>{f!==void 0&&f(),clearTimeout(p),h.value===!0&&he(),i.instances[e.side]===R&&(i.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const r=[];g.value===!0&&(e.noSwipeOpen===!1&&r.push(Pt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),wt.value)),r.push(He("div",{ref:"backdrop",class:vt.value,style:mt.value,"aria-hidden":"true",onClick:V},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Lt.value)));const w=k.value===!0&&o.mini!==void 0,x=[L("div",{...a,key:""+w,class:[bt.value,a.class]},w===!0?o.mini():F(o.default))];return e.elevated===!0&&h.value===!0&&x.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(He("aside",{ref:"content",class:yt.value,style:pt.value},x,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>qt.value)),L("div",{class:"q-drawer-container"},r)}}}),bo=$({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=D(),a=$e(se,Q);if(a===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;it(Dt,!0);const t=v(()=>{const l={};return a.header.space===!0&&(l.paddingTop=`${a.header.size}px`),a.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(l.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),l});return()=>L("div",{class:"q-page-container",style:t.value},F(o.default))}});const{passive:Ze}=P,yo=["both","horizontal","vertical"];var wo=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,l;C(()=>e.scrollTarget,()=>{c(),m()});function u(){a!==null&&a();const q=Math.max(0,dt(t)),p=ct(t),f={top:q-n.position.top,left:p-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const g=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:q,left:p},n.directionChanged=n.direction!==g,n.delta=f,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),o("scroll",{...n})}function m(){t=uo(l,e.scrollTarget),t.addEventListener("scroll",d,Ze),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Ze),t=void 0)}function d(q){if(q===!0||e.debounce===0||e.debounce==="0")u();else if(a===null){const[p,f]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];a=()=>{f(p),a=null}}}const{proxy:i}=D();return C(()=>i.$q.lang.rtl,u),U(()=>{l=i.$el.parentNode,m()}),I(()=>{a!==null&&a(),c()}),Object.assign(i,{trigger:d,getPosition:()=>n}),Ee}}),qo=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=D(),t=T(null),l=T(a.screen.height),u=T(e.container===!0?0:a.screen.width),m=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),d=T(at.value===!0?0:we()),i=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=v(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),p=v(()=>d.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),f=v(()=>d.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const B={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};m.value=B,e.onScroll!==void 0&&n("scroll",B)}}function k(y){const{height:B,width:V}=y;let A=!1;l.value!==B&&(A=!0,l.value=B,e.onScrollHeight!==void 0&&n("scrollHeight",B),h()),u.value!==V&&(A=!0,u.value=V),A===!0&&e.onResize!==void 0&&n("resize",y)}function S({height:y}){c.value!==y&&(c.value=y,h())}function h(){if(e.container===!0){const y=l.value>c.value?we():0;d.value!==y&&(d.value=y)}}let s;const b={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:c,scrollbarWidth:d,totalWidth:v(()=>u.value+d.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:m,animate(){s!==void 0?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),s=void 0},155)},update(y,B,V){b[y][B]=V}};if(it(se,b),we()>0){let V=function(){y=null,B.classList.remove("hide-scrollbar")},A=function(){if(y===null){if(B.scrollHeight>a.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(V,300)},K=function(R){y!==null&&R==="remove"&&(clearTimeout(y),V()),window[`${R}EventListener`]("resize",A)},y=null;const B=document.body;C(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Mt(()=>{K("remove")})}return()=>{const y=nt(o.default,[L(wo,{onScroll:g}),L(xe,{onResize:k})]),B=L("div",{class:i.value,style:q.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(xe,{onResize:S}),L("div",{class:"absolute-full",style:p.value},[L("div",{class:"scroll",style:f.value},[B])])]):B}}}),et=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},F(o.default))}}),tt=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),a=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>L("div",{style:t.value,class:a.value},F(o.default))}}),Lo=$({name:"QItem",props:{..._e,...xt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=D(),t=ze(e,a),{hasLink:l,linkAttrs:u,linkClass:m,linkTag:c,navigateOnClick:d}=Et(),i=T(null),q=T(null),p=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),f=v(()=>e.disable!==!0&&p.value===!0),g=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=v(()=>{if(e.insetLevel===void 0)return null;const b=a.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function S(b){f.value===!0&&(q.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===i.value?q.value.focus():document.activeElement===q.value&&i.value.focus()),d(b))}function h(b){if(f.value===!0&&Qt(b,13)===!0){Ve(b),b.qKeyEvent=!0;const y=new MouseEvent("click",b);y.qKeyEvent=!0,i.value.dispatchEvent(y)}n("keyup",b)}function s(){const b=lt(o.default,[]);return f.value===!0&&b.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:q})),b}return()=>{const b={ref:i,class:g.value,style:k.value,role:"listitem",onClick:S,onKeyup:h};return f.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,u.value)):p.value===!0&&(b["aria-disabled"]="true"),L(c.value,b,s())}}});const Co=rt({name:"EssentialLink",props:{title:{type:Object,required:!0},caption:{type:Object,default:""},link:{type:String,default:"#"},icon:{type:String,required:!0},lang:{type:String,default:"fr"}}});function So(e,o,n,a,t,l){return ee(),ue(Lo,{clickable:"",tag:"router-link",to:e.link},{default:z(()=>[e.icon?(ee(),ue(et,{key:0,avatar:""},{default:z(()=>[E($t,{name:e.icon},null,8,["name"])]),_:1})):Ht("",!0),E(et,null,{default:z(()=>[E(tt,null,{default:z(()=>[Te(Ae(e.title[e.lang]),1)]),_:1}),E(tt,{caption:""},{default:z(()=>[Te(Ae(e.caption[e.lang]),1)]),_:1})]),_:1})]),_:1},8,["to"])}var ko=ut(Co,[["render",So]]),Bo="/saff-quasar-portfolio/assets/gharbidev.b778950d.png";const To=[{label:"FR",value:"fr"},{label:"EN",value:"en"}],xo=rt({name:"MainLayout",components:{EssentialLink:ko},data(){return{essentialLinks:[{title:{fr:"Introduction",en:"Introduction"},caption:{fr:"Une courte introduction",en:"A quick introduction"},icon:"account_circle",link:"/intro"},{title:{fr:"Scolarit\xE9",en:"School"},caption:{fr:"Voir mon parcours",en:"See my cursus"},icon:"school",link:"/school"},{title:{fr:"Exp\xE9riences",en:"Experiences"},caption:{fr:"Voir mon cheminement professionnel",en:"See my career path"},icon:"work",link:"/experiences"}],langs:To,selectedLang:this.getLang()}},mounted(){this.$i18n.locale=this.getLang()},methods:{getLang(){return localStorage.getItem("lang")?localStorage.getItem("lang"):"fr"},toggleLang(e){this.$i18n.locale=e,this.selectedLang=e.substring(0,2),this.setLang(e)},setLang(e){localStorage.setItem("lang",e)}},setup(){const e=T(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Eo={href:"/"};function $o(e,o,n,a,t,l){const u=Ie("EssentialLink"),m=Ie("router-view");return ee(),ue(qo,{view:"lHh Lpr lFf"},{default:z(()=>[E(to,{elevated:""},{default:z(()=>[E(Zt,null,{default:z(()=>[E(ot,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),E(Ut,null,{default:z(()=>[Te(" Safouene Gharbi ")]),_:1}),Re("div",null,[E(Jt,{modelValue:e.selectedLang,"onUpdate:modelValue":[o[0]||(o[0]=c=>e.selectedLang=c),e.toggleLang],class:"my-custom-toggle","no-caps":"",rounded:"",unelevated:"","toggle-color":"secondary",color:"white",value:e.selectedLang,"text-color":"primary",options:e.langs},null,8,["modelValue","value","options","onUpdate:modelValue"])])]),_:1})]),_:1}),E(po,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:z(()=>[E(oo,null,{default:z(()=>[Re("a",Eo,[E(Nt,{src:Bo,contain:""})]),(ee(!0),Wt(Rt,null,Ft(e.essentialLinks,c=>(ee(),ue(u,At({key:c.title[e.selectedLang],lang:e.selectedLang},c),null,16,["lang"]))),128))]),_:1})]),_:1},8,["modelValue"]),E(bo,null,{default:z(()=>[E(m,{lang:e.selectedLang},null,8,["lang"])]),_:1})]),_:1})}var Qo=ut(xo,[["render",$o]]);export{Qo as default};
