import{Q as K}from"./QImg.5a00b40d.js";import{Q as X}from"./QCardSection.3ecaca4e.js";import{Q as Y}from"./QCard.7e580682.js";import{c as A,h as Z,b as ee,a as te}from"./render.90902ff4.js";import{u as oe,a as ae,b as ne,c as le}from"./use-panel.1c8f15ae.js";import{c as d,h as u,r as re,w as x,a1 as ie,o as O,l as R,V as M,g as W,a2 as se,_ as ce,j as ue,q as P,z as B,y as l,d as f,t as h,F as de,A as ve,x as p}from"./index.d1b41836.js";import{Q as C}from"./QBtn.66b481e4.js";import{u as me,a as fe}from"./use-dark.f9e295d1.js";import{v as ge}from"./vm.58da4068.js";import"./QSpinner.47b09b71.js";import"./touch.70a9dd44.js";import"./selection.b2ff507d.js";import"./use-router-link.46b9c5a9.js";var F=A({name:"QCarouselSlide",props:{...oe,imgSrc:String},setup(e,{slots:o}){const r=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>u("div",{class:"q-carousel__slide",style:r.value},Z(o.default))}});let q=0;const _e={fullscreen:Boolean,noRouteFullscreenExit:Boolean},he=["update:fullscreen","fullscreen"];function pe(){const e=W(),{props:o,emit:r,proxy:i}=e;let s,v,a;const c=re(!1);ge(e)===!0&&x(()=>i.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&m()}),x(()=>o.fullscreen,g=>{c.value!==g&&b()}),x(c,g=>{r("update:fullscreen",g),r("fullscreen",g)});function b(){c.value===!0?m():_()}function _(){c.value!==!0&&(c.value=!0,a=i.$el.parentNode,a.replaceChild(v,i.$el),document.body.appendChild(i.$el),q++,q===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:m},M.add(s))}function m(){c.value===!0&&(s!==void 0&&(M.remove(s),s=void 0),a.replaceChild(i.$el,v),c.value=!1,q=Math.max(0,q-1),q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return ie(()=>{v=document.createElement("span")}),O(()=>{o.fullscreen===!0&&_()}),R(m),Object.assign(i,{toggleFullscreen:b,setFullscreen:_,exitFullscreen:m}),{inFullscreen:c,toggleFullscreen:b}}const be=["top","right","bottom","left"],ye=["regular","flat","outline","push","unelevated"];var qe=A({name:"QCarousel",props:{...me,...ae,..._e,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ye.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>be.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...he,...ne],setup(e,{slots:o}){const{proxy:{$q:r}}=W(),i=fe(e,r);let s,v;const{updatePanelsList:a,getPanelContent:c,panelDirectives:b,goToPanel:_,previousPanel:m,nextPanel:g,getEnabledPanels:j,panelIndex:w}=le(),{inFullscreen:Q}=pe(),H=d(()=>Q.value!==!0&&e.height!==void 0?{height:e.height}:{}),$=d(()=>e.vertical===!0?"vertical":"horizontal"),U=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(Q.value===!0?" fullscreen":"")+(i.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${$.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),T=d(()=>{const t=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?t.reverse():t}),V=d(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),G=d(()=>e.navigationActiveIcon||V.value),E=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),S=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));x(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(s),k())}),x(()=>e.autoplay,t=>{t?k():clearInterval(s)});function k(){const t=se(e.autoplay)===!0?e.autoplay:5e3;s=setTimeout(t>=0?g:m,Math.abs(t))}O(()=>{e.autoplay&&k()}),R(()=>{clearInterval(s)});function N(t,y){return u("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[u("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},j().map(y))])}function J(){const t=[];if(e.navigation===!0){const y=o["navigation-icon"]!==void 0?o["navigation-icon"]:n=>u(C,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),I=v-1;t.push(N("buttons",(n,D)=>{const L=n.props.name,z=w.value===D;return y({index:D,maxIndex:I,name:L,active:z,btnProps:{icon:z===!0?G.value:V.value,size:"sm",...S.value},onClick:()=>{_(L)}})}))}else if(e.thumbnails===!0){const y=e.controlColor!==void 0?` text-${e.controlColor}`:"";t.push(N("thumbnails",I=>{const n=I.props;return u("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+y,src:n.imgSrc||n["img-src"],onClick:()=>{_(n.name)}})}))}return e.arrows===!0&&w.value>=0&&((e.infinite===!0||w.value>0)&&t.push(u("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${$.value} absolute flex flex-center`},[u(C,{icon:T.value[0],...S.value,onClick:m})])),(e.infinite===!0||w.value<v-1)&&t.push(u("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${$.value} absolute flex flex-center`},[u(C,{icon:T.value[1],...S.value,onClick:g})]))),te(o.control,t)}return()=>(v=a(o),u("div",{class:U.value,style:H.value},[ee("div",{class:"q-carousel__slides-container"},c(),"sl-cont",e.swipeable,()=>b.value)].concat(J())))}}),xe="/saff-quasar-portfolio/assets/saff.8fe7a0bf.png",we="/saff-quasar-portfolio/assets/programming.6af85416.png",Ce="/saff-quasar-portfolio/assets/collaboration.be7a9a3e.png",$e="/saff-quasar-portfolio/assets/thinking.5ce973f4.png";const Se=ue({name:"Welcome",props:{lang:{type:String,default:"fr"}},data(){return{usefulLinks:[{url:"https://github.com/Saff-Buraq-Dev",color:"black",icon:"fab fa-github"},{url:"https://www.linkedin.com/in/safouene-gharbi-523155138/",color:"primary",icon:"fab fa-linkedin"},{url:"https://www.credly.com/badges/8d1cf179-5bdb-495d-8225-e1bde963acdb/public_url",color:"warning",icon:"img:ccp.png"},{url:`src/assets/resume-${this.lang}.pdf`,color:"negative",icon:"img:cv.png"},{url:"mailto: gharbi.safwen@hotmail.com",color:"black",icon:"fas fa-envelope"}],slide:1}},computed:{}}),ke={class:"row"},Ie={class:"col-3 q-pa-sm q-gutter-sm"},Pe={class:"col-9 q-pa-md q-gutter-md"},Be={class:"absolute-bottom custom-caption"},Fe={class:"text-h2"},Qe={class:"text-subtitle1"},Te={class:"absolute-bottom custom-caption"},Ve={class:"text-h2"},Ee={class:"text-subtitle1"},Ne={class:"absolute-bottom custom-caption"},De={class:"text-h2"},Le={class:"text-subtitle1"},ze={class:"text-center q-pa-md bordered"},Me=["href"];function Ae(e,o,r,i,s,v){return P(),B("div",ke,[l("div",Ie,[f(Y,{class:"full-height",bordered:""},{default:h(()=>[f(X,{horizontal:""},{default:h(()=>[f(K,{src:xe,fit:"contain"})]),_:1})]),_:1})]),l("div",Pe,[f(qe,{animated:"",modelValue:e.slide,"onUpdate:modelValue":o[0]||(o[0]=a=>e.slide=a),arrows:"",infinite:"","control-color":"primary",autoplay:5e3,swipeable:""},{default:h(()=>[f(F,{name:1,"img-src":we},{default:h(()=>[l("div",Be,[l("div",Fe,p(e.$t("intro.passion")),1),l("div",Qe,p(e.$t("intro.passionText")),1)])]),_:1}),f(F,{name:2,"img-src":Ce},{default:h(()=>[l("div",Te,[l("div",Ve,p(e.$t("intro.collaboration")),1),l("div",Ee,p(e.$t("intro.collaborationText")),1)])]),_:1}),f(F,{name:3,"img-src":$e},{default:h(()=>[l("div",Ne,[l("div",De,p(e.$t("intro.problemSolving")),1),l("div",Le,p(e.$t("intro.problemSolvingText")),1)])]),_:1})]),_:1},8,["modelValue"]),l("div",ze,[(P(!0),B(de,null,ve(e.usefulLinks,a=>(P(),B("a",{key:a.icon,href:a.url,target:"_blank"},[f(C,{flat:"",round:"",color:a.color,icon:a.icon,size:"40px"},null,8,["color","icon"])],8,Me))),128))])])])}var tt=ce(Se,[["render",Ae],["__scopeId","data-v-3cbc8260"]]);export{tt as default};
