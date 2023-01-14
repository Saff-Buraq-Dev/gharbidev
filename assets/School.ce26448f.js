import{Q as z,u as A,a as N,R as j}from"./vm.58da4068.js";import{c as q,d as R,h as S,a as V}from"./render.90902ff4.js";import{k as _,c as i,h as t,a as w,a6 as O,g as L,K as G,a7 as K,_ as U,j as J,q as f,z as y,d as u,t as c,v as $,x as b,F as k,A as Q,s as C,y as m,m as H}from"./index.d1b41836.js";import{Q as X}from"./QBadge.6c1266cd.js";import{u as T,a as E}from"./use-dark.f9e295d1.js";import{Q as W}from"./QSeparator.3910277e.js";import{b as Y,a as Z,Q as ee}from"./QItem.cca62b70.js";import"./use-router-link.46b9c5a9.js";var B=q({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:r}){const l=w(O,_);if(l===_)return console.error("QTimelineEntry needs to be child of QTimeline"),_;const d=i(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),n=i(()=>`q-timeline__dot text-${e.color||l.color}`),o=i(()=>l.layout==="comfortable"&&l.side==="left");return()=>{const a=R(r.default,[]);if(e.body!==void 0&&a.unshift(e.body),e.heading===!0){const v=[t("div"),t("div"),t(e.tag,{class:"q-timeline__heading-title"},a)];return t("div",{class:"q-timeline__heading"},o.value===!0?v.reverse():v)}let s;e.icon!==void 0?s=[t(z,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(s=[t("img",{class:"q-timeline__dot-img",src:e.avatar})]);const g=[t("div",{class:"q-timeline__subtitle"},[t("span",{},S(r.subtitle,[e.subtitle]))]),t("div",{class:n.value},s),t("div",{class:"q-timeline__content"},[t("h6",{class:"q-timeline__title"},S(r.title,[e.title]))].concat(a))];return t("li",{class:d.value},o.value===!0?g.reverse():g)}}});const te={xs:2,sm:4,md:6,lg:10,xl:14};function x(e,r,l){return{transform:r===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var ae=q({name:"QLinearProgress",props:{...T,...A,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:r}){const{proxy:l}=L(),d=E(e,l.$q),n=N(e,te),o=i(()=>e.indeterminate===!0||e.query===!0),a=i(()=>e.reverse!==e.query),s=i(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),g=i(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),v=i(()=>x(e.buffer!==void 0?e.buffer:1,a.value,l.$q)),h=i(()=>`with${e.instantFeedback===!0?"out":""}-transition`),P=i(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${h.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),D=i(()=>x(o.value===!0?1:e.value,a.value,l.$q)),I=i(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${h.value} q-linear-progress__model--${o.value===!0?"in":""}determinate`),F=i(()=>({width:`${e.value*100}%`})),M=i(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${h.value}`);return()=>{const p=[t("div",{class:P.value,style:v.value}),t("div",{class:I.value,style:D.value})];return e.stripe===!0&&o.value===!1&&p.push(t("div",{class:M.value,style:F.value})),t("div",{class:g.value,style:s.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},V(r.default,p))}}}),ie=q({name:"QTimeline",props:{...T,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:r}){const l=L(),d=E(e,l.proxy.$q);G(O,e);const n=i(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(d.value===!0?" q-timeline--dark":""));return()=>t("ul",{class:n.value},S(r.default))}});function le(){return w(K)}const re=J({name:"School",props:{lang:{type:String,default:"fr"}},data(){return{entries:[{title:{fr:"Baccalaur\xE9at en Informatique et G\xE9nie Logiciel",en:"Bachelor of Computer Science and Software Engineering"},subtitle:{fr:"Sep 2020 - En cours",en:"Sep 2020 - In progress"},icon:"fas fa-computer",side:"left",school:"Universit\xE9 du Qu\xE9bec \xE0 Montr\xE9al - UQAM",skills:{fr:["Langages et cadriciels: Java / C / C++ / Python / Flask / Angular","Programmation Orient\xE9e Objets","Outils de versionning: Git","Cycle de vie du logiciel"],en:["Languages and frameworks: Java / C / C++ / Python / Flask / Angular","Object Orientedd Programming","Versioning tools: Git","Software life cycle"]},progress:"0.6",progressLabel:"60%"},{title:{fr:"D.O Ost\xE9opathie",en:"Osteopathy D.O"},subtitle:{fr:"Sep 2013 - Mai 2016",en:"Sep 2013 - Mai 2016"},icon:"fas fa-notes-medical",side:"right",school:"Institut de l'Enseignement de l'Ost\xE9opathie du Qu\xE9bec - IEOQ",skills:{fr:["Ost\xE9opathie cr\xE2nienne, structurelle, fasciale et visc\xE9rale."],en:["Cranial, structural, fascial and visceral osteopathy."]},progress:"1",progressLabel:"100%"},{title:{fr:"Baccalaur\xE9at en Physioth\xE9rapie",en:"Bachelor of Physiotherapy"},subtitle:{fr:"Sep 2010 - Mai 2013",en:"Sep 2010 - Mai 2013"},icon:"fas fa-notes-medical",side:"left",school:"\xC9cole Sup\xE9rieure des Sciences et Techniques de la Sant\xE9 de Tunis - ESSTST",skills:{fr:["Anatomie du corps humain","\xC9tablir un diagnostic et un plan de traitement"],en:["Human Body Anatomy","Establish a diagnosis and a treatment plan"]},progress:"1",progressLabel:"100%"}]}},setup(){const e=le();return{layout:i(()=>e.screen.lt.sm?"dense":e.screen.lt.md?"comfortable":"loose")}}}),se={class:"q-px-lg q-pb-md"},ne={class:"q-pa-lg"},oe={class:"text-subtitle2"},ue={class:"absolute-full flex flex-center"},ce=m("br",null,null,-1),de=m("br",null,null,-1);function me(e,r,l,d,n,o){return f(),y("div",se,[u(ie,{layout:e.layout,color:"secondary"},{default:c(()=>[u(B,{heading:""},{default:c(()=>[$(b(e.$t("schooling")),1)]),_:1}),(f(!0),y(k,null,Q(e.entries,a=>(f(),C(B,{key:a.title,title:a.title[e.lang],subtitle:a.subtitle[e.lang],side:a.side,icon:a.icon},{default:c(()=>[m("div",ne,[m("p",oe,b(a.school),1),u(ae,{stripe:"",size:"25px",value:a.progress},{default:c(()=>[m("div",ue,[u(X,{color:"white","text-color":"primary",label:a.progressLabel},null,8,["label"])])]),_:2},1032,["value"]),ce,u(W,{inset:""}),de,m("div",null,[u(Y,{bordered:"",separator:""},{default:c(()=>[(f(!0),y(k,null,Q(a.skills[e.lang],s=>H((f(),C(Z,{clickable:"",key:s},{default:c(()=>[u(ee,null,{default:c(()=>[$(b(s),1)]),_:2},1024)]),_:2},1024)),[[j]])),128))]),_:2},1024)])])]),_:2},1032,["title","subtitle","side","icon"]))),128))]),_:1},8,["layout"])])}var qe=U(re,[["render",me]]);export{qe as default};
