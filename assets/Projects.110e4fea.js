import{Q as E}from"./QImg.740f29bf.js";import{Q}from"./QBtn.79b85322.js";import{Q as b,a as I}from"./QCardActions.2b8a95c9.js";import{Q as S}from"./vm.f03cae0e.js";import{Q as L}from"./QSeparator.3616fe9a.js";import{l as M,h as F,D as R,_ as j,j as z,q as m,z as f,F as q,A as T,d as a,t as d,y as h,x as _,v as B,m as D,bS as H}from"./index.9c08f5fd.js";import{c as N}from"./render.232ced95.js";import{Q as P}from"./QCard.ccf5bc96.js";import{a as A,b as V,s as Y,d as O}from"./techs.a02f8db6.js";import"./QSpinner.3609528e.js";import"./use-router-link.9563fb93.js";import"./use-dark.17d061b1.js";var U=N({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(n,{slots:y,emit:w}){let u=!1,c,p,t,s,o,v;function g(){c&&c(),c=null,u=!1,clearTimeout(t),clearTimeout(s),p!==void 0&&p.removeEventListener("transitionend",o),o=null}function x(e,r,i){e.style.overflowY="hidden",r!==void 0&&(e.style.height=`${r}px`),e.style.transition=`height ${n.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,c=i}function k(e,r){e.style.overflowY=null,e.style.height=null,e.style.transition=null,g(),r!==v&&w(r)}function C(e,r){let i=0;p=e,u===!0?(g(),i=e.offsetHeight===e.scrollHeight?0:void 0):v="hide",x(e,i,r),t=setTimeout(()=>{e.style.height=`${e.scrollHeight}px`,o=l=>{(Object(l)!==l||l.target===e)&&k(e,"show")},e.addEventListener("transitionend",o),s=setTimeout(o,n.duration*1.1)},100)}function $(e,r){let i;p=e,u===!0?g():(v="show",i=e.scrollHeight),x(e,i,r),t=setTimeout(()=>{e.style.height=0,o=l=>{(Object(l)!==l||l.target===e)&&k(e,"hide")},e.addEventListener("transitionend",o),s=setTimeout(o,n.duration*1.1)},100)}return M(()=>{u===!0&&g()}),()=>F(R,{css:!1,appear:n.appear,onEnter:C,onLeave:$},y.default)}});const W=z({name:"Projects",props:{lang:{type:String,default:"fr"}},data(){return{projects:[{name:"RoboMed",url:"https://github.com/Saff-Buraq-Dev/RoboMed",image:"projects/robomed.png",status:{fr:"En cours de construction",en:"In progress"},statusIcon:"pending",description:{fr:`RoboMed se veut \xEAtre un robot m\xE9decin, capable de donner un diagnostic fiable, quand cel\xE0 est possible, gr\xE2ce \xE0 un questionnaire assez pr\xE9cis. 
                        Quand il n'est pas certain du diagnostic, il va donner des prescriptions pour des examens compl\xE9mentaires (radiographie, analyse sanguine, etc.).
                        Le but principal de ce robot, est d'all\xE9ger la charge de travail aux urgences, en diminuant le nombre de personnes qui affluent seulement parce
                        qu'ils sont inquiets, et qu'ils n'ont pas la bonne information. Une simple visite sur RoboMed pourrait leur donner l'heure juste et leur faire
                        sauver le temps de se d\xE9placer aux urgences et ainsi all\xE9ger le travail aux urgences.`,en:`RoboMed wants to be a robot doctor, capable of giving a reliable diagnosis, when possible, thanks to a fairly precise questionnaire.
                        When he is not sure of the diagnosis, he will give prescriptions for additional examinations (X-ray, blood test, etc.).
                        The main purpose of this robot is to lighten the workload in the emergency room, by reducing the number of people who come only because
                        that they are worried, and that they don't have the right information. A simple visit to RoboMed could give them the facts and make them
                        save time traveling to the emergency room and thus lighten the work in the emergency room.`},expanded:!1,stack:[A]},{name:"Server-App",url:"https://github.com/Saff-Buraq-Dev/Server-App",image:"projects/servers.png",status:{fr:"Termin\xE9",en:"Finished"},statusIcon:"check_circle_outline",description:{fr:`Server-App vous permet d'enregistrer vos diff\xE9rents serveurs et voir leur \xE9tat. Ce projet m'a permis de bien explorer SpringBoot
                        et mieux pratiquer Angular.`,en:`Server-App allows you to register your different servers and see their status. This project allowed me to fully explore SpringBoot
                        and better practice Angular.`},stack:[A,V,Y,O]}]}},computed:{}}),X={class:"row q-pa-md justify-center"},G=["href"],J={class:"row no-wrap items-center"},K={class:"col text-h6 ellipsis"},Z={class:"text-subtitle1"},ee=["href"];function te(n,y,w,u,c,p){return m(),f("div",X,[(m(!0),f(q,null,T(n.projects,t=>(m(),f("div",{class:"col-6 q-pa-md",key:t.name},[a(P,{class:"my-card"},{default:d(()=>[a(E,{src:t.image,draggable:"",fit:"contain",height:"200px"},null,8,["src"]),a(b,null,{default:d(()=>[h("a",{href:t.url,target:"_blank"},[a(Q,{fab:"",color:"black",icon:"fab fa-github",class:"absolute",style:{top:"0",right:"12px",transform:"translateY(-50%)"}})],8,G),h("div",J,[h("div",K,_(t.name),1)])]),_:2},1024),a(b,{class:"q-pt-none"},{default:d(()=>[h("div",Z,[a(S,{size:"md",name:t.statusIcon,color:t.status.en=="Finished"?"secondary":"primary"},null,8,["name","color"]),B(_(t.status[n.lang]),1)])]),_:2},1024),a(I,null,{default:d(()=>[a(Q,{color:"grey",flat:"",dense:"",label:n.$t("seeMore"),icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:s=>t.expanded=!t.expanded},null,8,["label","icon","onClick"])]),_:2},1024),a(U,null,{default:d(()=>[D(h("div",null,[a(L),a(b,{class:"text-subitle2"},{default:d(()=>[B(_(t.description[n.lang]),1)]),_:2},1024),a(b,{class:"justify-left"},{default:d(()=>[(m(!0),f(q,null,T(t.stack,s=>(m(),f("a",{key:s.name,href:s.website,target:"_blank"},[a(S,{name:"img:"+s.url,size:"48px"},null,8,["name"])],8,ee))),128))]),_:2},1024)],512),[[H,t.expanded]])]),_:2},1024)]),_:2},1024)]))),128))])}var fe=j(W,[["render",te],["__scopeId","data-v-67ebde65"]]);export{fe as default};