import{u as ae,a as oe,g as G,s as J,c as se,Q as le}from"./selection.c5776ec2.js";import{f as ue,h as ce,Q as I}from"./QBtn.961aa16e.js";import{c as L,a as de}from"./create.22a8c9b7.js";import{h as D,c as ve,a as fe}from"./render.69441bda.js";import{c as d,h as f,g as U,s as Q,n as me,x as pe,y as H,z as K,C as ee,t as X,D as Y,r as Z,w as V,Z as ge,l as he,a1 as _e,a2 as be,o as re,k as ie,H as te,a3 as ye,_ as xe,L as qe,M as Ce,U as Pe,S as p,d as x,O as k,R as A}from"./index.2309271c.js";import{g as we,v as Se}from"./vm.ef90d616.js";var $e=L({name:"QCardActions",props:{...ue,vertical:Boolean},setup(e,{slots:n}){const r=ce(e),s=d(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>f("div",{class:s.value},D(n.default))}}),ke=L({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const r=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:r.value},D(n.default))}}),Ie=L({name:"QCard",props:{...ae,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:r}}=U(),s=oe(e,r),i=d(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:i.value},D(n.default))}});function Be(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,s)=>{const i=parseFloat(r);i&&(n[s]=i)}),n}var Te=de({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:s}){if(s.mouse!==!0&&Q.has.touch!==!0)return;const i=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Be(r),direction:G(s),noop:me,mouseStart(o){J(o,t)&&pe(o)&&(H(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(J(o,t)){const l=o.target;H(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,l){Q.is.firefox===!0&&K(e,!0);const h=ee(o);t.event={x:h.left,y:h.top,time:Date.now(),mouse:l===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){X(o);return}const l=Date.now()-t.event.time;if(l===0)return;const h=ee(o),_=h.left-t.event.x,u=Math.abs(_),g=h.top-t.event.y,v=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&v<t.sensitivity[1]){t.end(o);return}}else if(u<t.sensitivity[2]&&v<t.sensitivity[2])return;const b=u/l,q=v/l;t.direction.vertical===!0&&u<v&&u<100&&q>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>v&&v<100&&b>t.sensitivity[0]&&(t.event.dir=_<0?"left":"right"),t.direction.up===!0&&u<v&&g<0&&u<100&&q>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<v&&g>0&&u<100&&q>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>v&&_<0&&v<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>v&&_>0&&v<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(X(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),se(),t.styleCleanup=B=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:v}})):t.end(o)},end(o){t.event!==void 0&&(Y(t,"temp"),Q.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&X(o),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const o=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";H(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}Q.has.touch===!0&&H(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=G(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(Y(n,"main"),Y(n,"temp"),Q.is.firefox===!0&&K(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ae(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const Ve={name:{required:!0},disable:Boolean},ne={setup(e,{slots:n}){return()=>f("div",{class:"q-panel scroll",role:"tabpanel"},D(n.default))}},De={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ee=["update:modelValue","beforeTransition","transition"];function Ne(){const{props:e,emit:n,proxy:r}=U(),{getCacheWithFn:s}=Ae();let i,t;const o=Z(null),l=Z(null);function h(a){const c=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const _=d(()=>[[Te,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=d(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=d(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),v=d(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=d(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=d(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=d(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);V(()=>e.modelValue,(a,c)=>{const y=w(a)===!0?N(a):-1;t!==!0&&T(y===-1?0:y<N(c)?-1:1),o.value!==y&&(o.value=y,n("beforeTransition",a,c),he(()=>{n("transition",a,c)}))});function C(){P(1)}function W(){P(-1)}function E(a){n("update:modelValue",a)}function w(a){return a!=null&&a!==""}function N(a){return i.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function O(){return i.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const c=a!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?u.value:g.value):null;l.value!==c&&(l.value=c)}function P(a,c=o.value){let y=c+a;for(;y>-1&&y<i.length;){const $=i[y];if($!==void 0&&$.props.disable!==""&&$.props.disable!==!0){T(a),t=!0,n("update:modelValue",$.props.name),setTimeout(()=>{t=!1});return}y+=a}e.infinite===!0&&i.length>0&&c!==-1&&c!==i.length&&P(a,a===-1?i.length:-1)}function z(){const a=N(e.modelValue);return o.value!==a&&(o.value=a),!0}function R(){const a=w(e.modelValue)===!0&&z()&&i[o.value];return e.keepAlive===!0?[f(_e,q.value,[f(B.value===!0?s(b.value,()=>({...ne,name:b.value})):ne,{key:b.value,style:v.value},()=>a)])]:[f("div",{class:"q-panel scroll",style:v.value,key:b.value,role:"tabpanel"},[a])]}function m(){if(i.length!==0)return e.animated===!0?[f(ge,{name:l.value},R)]:R()}function S(a){return i=we(D(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),i.length}function F(){return i}return Object.assign(r,{next:C,previous:W,goTo:E}),{panelIndex:o,panelDirectives:_,updatePanelsList:S,updatePanelIndex:z,getPanelContent:m,getEnabledPanels:O,getPanels:F,isValidPanelName:w,keepAliveProps:q,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:P,goToPanel:E,nextPanel:C,previousPanel:W}}var j=L({name:"QCarouselSlide",props:{...Ve,imgSrc:String},setup(e,{slots:n}){const r=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>f("div",{class:"q-carousel__slide",style:r.value},D(n.default))}});let M=0;const ze={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Fe=["update:fullscreen","fullscreen"];function Qe(){const e=U(),{props:n,emit:r,proxy:s}=e;let i,t,o;const l=Z(!1);Se(e)===!0&&V(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),V(()=>n.fullscreen,g=>{l.value!==g&&h()}),V(l,g=>{r("update:fullscreen",g),r("fullscreen",g)});function h(){l.value===!0?u():_()}function _(){l.value!==!0&&(l.value=!0,o=s.$el.parentNode,o.replaceChild(t,s.$el),document.body.appendChild(s.$el),M++,M===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},te.add(i))}function u(){l.value===!0&&(i!==void 0&&(te.remove(i),i=void 0),o.replaceChild(s.$el,t),l.value=!1,M=Math.max(0,M-1),M===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return be(()=>{t=document.createElement("span")}),re(()=>{n.fullscreen===!0&&_()}),ie(u),Object.assign(s,{toggleFullscreen:h,setFullscreen:_,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:h}}const Me=["top","right","bottom","left"],Le=["regular","flat","outline","push","unelevated"];var We=L({name:"QCarousel",props:{...ae,...De,...ze,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Le.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Me.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Fe,...Ee],setup(e,{slots:n}){const{proxy:{$q:r}}=U(),s=oe(e,r);let i,t;const{updatePanelsList:o,getPanelContent:l,panelDirectives:h,goToPanel:_,previousPanel:u,nextPanel:g,getEnabledPanels:v,panelIndex:b}=Ne(),{inFullscreen:q}=Qe(),B=d(()=>q.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=d(()=>e.vertical===!0?"vertical":"horizontal"),W=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(q.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${O.value}`:"")),E=d(()=>{const m=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?m.reverse():m}),w=d(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),N=d(()=>e.navigationActiveIcon||w.value),O=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));V(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(i),P())}),V(()=>e.autoplay,m=>{m?P():clearInterval(i)});function P(){const m=ye(e.autoplay)===!0?e.autoplay:5e3;i=setTimeout(m>=0?g:u,Math.abs(m))}re(()=>{e.autoplay&&P()}),ie(()=>{clearInterval(i)});function z(m,S){return f("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${O.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[f("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},v().map(S))])}function R(){const m=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:a=>f(I,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),F=t-1;m.push(z("buttons",(a,c)=>{const y=a.props.name,$=b.value===c;return S({index:c,maxIndex:F,name:y,active:$,btnProps:{icon:$===!0?N.value:w.value,size:"sm",...T.value},onClick:()=>{_(y)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(z("thumbnails",F=>{const a=F.props;return f("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+S,src:a.imgSrc||a["img-src"],onClick:()=>{_(a.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&m.push(f("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[f(I,{icon:E.value[0],...T.value,onClick:u})])),(e.infinite===!0||b.value<t-1)&&m.push(f("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[f(I,{icon:E.value[1],...T.value,onClick:g})]))),fe(n.control,m)}return()=>(t=o(n),f("div",{class:W.value,style:B.value},[ve("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>h.value)].concat(R())))}}),Oe="/saff-quasar-portfolio/assets/saff.8fe7a0bf.png",Re="/saff-quasar-portfolio/assets/programming.6af85416.png",He="/saff-quasar-portfolio/assets/collaboration.be7a9a3e.png",Ue="/saff-quasar-portfolio/assets/thinking.5ce973f4.png";const Ke=qe({name:"Welcome",props:{lang:{type:String,default:"fr"}},data(){return{slide:1}},computed:{pdfHref(){return`src/assets/resume-${this.lang}.pdf`}}}),Xe={class:"row"},Ye={class:"col-3 q-pa-md q-gutter-md"},je={target:"_blank",href:"https://github.com/Saff-Buraq-Dev"},Ze={target:"_blank",href:"https://www.linkedin.com/in/safouene-gharbi-523155138/"},Ge={target:"_blank",href:"https://www.credly.com/badges/8d1cf179-5bdb-495d-8225-e1bde963acdb/public_url"},Je=["href"],et={class:"col-9 q-pa-md q-gutter-md"},tt={class:"full-height"},nt={class:"absolute-bottom custom-caption"},at={class:"text-h2"},ot={class:"text-subtitle1"},rt={class:"absolute-bottom custom-caption"},it={class:"text-h2"},st={class:"text-subtitle1"},lt={class:"absolute-bottom custom-caption"},ut={class:"text-h2"},ct={class:"text-subtitle1"};function dt(e,n,r,s,i,t){return Ce(),Pe("div",Xe,[p("div",Ye,[x(Ie,{class:"full-height",bordered:""},{default:k(()=>[x(ke,{horizontal:""},{default:k(()=>[x(le,{class:"col",src:Oe,fit:"contain"}),x($e,{vertical:""},{default:k(()=>[p("a",je,[x(I,{flat:"",round:"",icon:"fab fa-github",size:"xl"})]),p("a",Ze,[x(I,{flat:"",round:"",color:"primary",icon:"fab fa-linkedin",size:"xl"})]),p("a",Ge,[x(I,{flat:"",round:"",color:"warning",icon:"fab fa-aws",size:"xl"})]),p("a",{target:"_blank",href:e.pdfHref},[x(I,{flat:"",round:"",color:"negative",icon:"fas fa-file-pdf",size:"xl"})],8,Je)]),_:1})]),_:1})]),_:1})]),p("div",et,[p("div",tt,[x(We,{animated:"",modelValue:e.slide,"onUpdate:modelValue":n[0]||(n[0]=o=>e.slide=o),arrows:"",infinite:"","control-color":"primary"},{default:k(()=>[x(j,{name:1,"img-src":Re},{default:k(()=>[p("div",nt,[p("div",at,A(e.$t("intro.passion")),1),p("div",ot,A(e.$t("intro.passionText")),1)])]),_:1}),x(j,{name:2,"img-src":He},{default:k(()=>[p("div",rt,[p("div",it,A(e.$t("intro.collaboration")),1),p("div",st,A(e.$t("intro.collaborationText")),1)])]),_:1}),x(j,{name:3,"img-src":Ue},{default:k(()=>[p("div",lt,[p("div",ut,A(e.$t("intro.problemSolving")),1),p("div",ct,A(e.$t("intro.problemSolvingText")),1)])]),_:1})]),_:1},8,["modelValue"])])])])}var _t=xe(Ke,[["render",dt],["__scopeId","data-v-0846a28c"]]);export{_t as default};
