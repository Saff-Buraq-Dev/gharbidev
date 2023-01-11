import{h as Xe,e as wt,r as z,c as Q,w as ce,F as Wt,i as Ut,g as Ye,a as Vt,o as xt,b as jt,d as Gt,T as $t,f as Ht}from"./index.2309271c.js";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ie=typeof window!="undefined",Bt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",j=e=>Bt?Symbol(e):e,Kt=(e,t,n)=>Xt({l:e,k:t,s:n}),Xt=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),S=e=>typeof e=="number"&&isFinite(e),Yt=e=>pe(e)==="[object Date]",ae=e=>pe(e)==="[object RegExp]",re=e=>T(e)&&Object.keys(e).length===0;function Jt(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const w=Object.assign;function Fe(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const qt=Object.prototype.hasOwnProperty;function Ee(e,t){return qt.call(e,t)}const A=Array.isArray,D=e=>typeof e=="function",_=e=>typeof e=="string",C=e=>typeof e=="boolean",y=e=>e!==null&&typeof e=="object",Je=Object.prototype.toString,pe=e=>Je.call(e),T=e=>pe(e)==="[object Object]",zt=e=>e==null?"":A(e)||T(e)&&e.toString===Je?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const qe={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function ze(e,t,n={}){const{domain:a,messages:r,args:s}=n,l=e,i=new SyntaxError(String(l));return i.code=e,t&&(i.location=t),i.domain=a,i}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Qt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const G=[];G[0]={w:[0],i:[3,0],["["]:[4],o:[7]};G[1]={w:[1],["."]:[2],["["]:[4],o:[7]};G[2]={w:[2],i:[3,0],[0]:[3,0]};G[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};G[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};G[5]={["'"]:[4,0],o:8,l:[5,0]};G[6]={['"']:[4,0],o:8,l:[6,0]};const Zt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function en(e){return Zt.test(e)}function tn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function nn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function an(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:en(t)?tn(t):"*"+t}function rn(e){const t=[];let n=-1,a=0,r=0,s,l,i,c,m,d,b;const g=[];g[0]=()=>{l===void 0?l=i:l+=i},g[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},g[2]=()=>{g[0](),r++},g[3]=()=>{if(r>0)r--,a=4,g[0]();else{if(r=0,l===void 0||(l=an(l),l===!1))return!1;g[1]()}};function E(){const N=e[n+1];if(a===5&&N==="'"||a===6&&N==='"')return n++,i="\\"+N,g[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&E())){if(c=nn(s),b=G[a],m=b[c]||b.l||8,m===8||(a=m[0],m[1]!==void 0&&(d=g[m[1]],d&&(i=s,d()===!1))))return;if(a===7)return t}}const Ce=new Map;function ln(e,t){return y(e)?e[t]:null}function sn(e,t){if(!y(e))return null;let n=Ce.get(t);if(n||(n=rn(t),n&&Ce.set(t,n)),!n)return null;const a=n.length;let r=e,s=0;for(;s<a;){const l=r[n[s]];if(l===void 0)return null;r=l,s++}return r}const on=e=>e,cn=e=>"",un="text",mn=e=>e.length===0?"":e.join(""),fn=zt;function Ae(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function _n(e){const t=S(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(S(e.named.count)||S(e.named.n))?S(e.named.count)?e.named.count:S(e.named.n)?e.named.n:t:t}function gn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function dn(e={}){const t=e.locale,n=_n(e),a=y(e.pluralRules)&&_(t)&&D(e.pluralRules[t])?e.pluralRules[t]:Ae,r=y(e.pluralRules)&&_(t)&&D(e.pluralRules[t])?Ae:void 0,s=p=>p[a(n,p.length,r)],l=e.list||[],i=p=>l[p],c=e.named||{};S(e.pluralIndex)&&gn(n,c);const m=p=>c[p];function d(p){const O=D(e.messages)?e.messages(p):y(e.messages)?e.messages[p]:!1;return O||(e.parent?e.parent.message(p):cn)}const b=p=>e.modifiers?e.modifiers[p]:on,g=T(e.processor)&&D(e.processor.normalize)?e.processor.normalize:mn,E=T(e.processor)&&D(e.processor.interpolate)?e.processor.interpolate:fn,N=T(e.processor)&&_(e.processor.type)?e.processor.type:un,h={list:i,named:m,plural:s,linked:(p,...O)=>{const[R,I]=O;let f="text",F="";O.length===1?y(R)?(F=R.modifier||F,f=R.type||f):_(R)&&(F=R||F):O.length===2&&(_(R)&&(F=R||F),_(I)&&(f=I||f));let M=d(p)(h);return f==="vnode"&&A(M)&&F&&(M=M[0]),F?b(F)(M,f):M},message:d,type:N,interpolate:E,normalize:g};return h}let bn=null;Qt.FunctionTranslate;function En(e){return t=>bn}const pn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Nn(e,t,n){return[...new Set([n,...A(t)?t:y(t)?Object.keys(t):_(t)?[t]:[n]])]}function Qe(e,t,n){const a=_(n)?n:Ne,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(a);if(!s){s=[];let l=[n];for(;A(l);)l=Re(s,l,t);const i=A(t)||!T(t)?t:t.default?t.default:null;l=_(i)?[i]:i,A(l)&&Re(s,l,!1),r.__localeChainCache.set(a,s)}return s}function Re(e,t,n){let a=!0;for(let r=0;r<t.length&&C(a);r++){const s=t[r];_(s)&&(a=Tn(e,t[r],n))}return a}function Tn(e,t,n){let a;const r=t.split("-");do{const s=r.join("-");a=In(e,s,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function In(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(A(n)||T(n))&&n[r]&&(a=n[r])}return a}const Ln="9.2.2",le=-1,Ne="en-US",ve="",Se=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function On(){return{upper:(e,t)=>t==="text"&&_(e)?e.toUpperCase():t==="vnode"&&y(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&_(e)?e.toLowerCase():t==="vnode"&&y(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&_(e)?Se(e):t==="vnode"&&y(e)&&"__v_isVNode"in e?Se(e.children):e}}let yn,Ze;function hn(e){Ze=e}let et;function Fn(e){et=e}let De=0;function Cn(e={}){const t=_(e.version)?e.version:Ln,n=_(e.locale)?e.locale:Ne,a=A(e.fallbackLocale)||T(e.fallbackLocale)||_(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=T(e.messages)?e.messages:{[n]:{}},s=T(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=T(e.numberFormats)?e.numberFormats:{[n]:{}},i=w({},e.modifiers||{},On()),c=e.pluralRules||{},m=D(e.missing)?e.missing:null,d=C(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,b=C(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,E=!!e.unresolving,N=D(e.postTranslation)?e.postTranslation:null,L=T(e.processor)?e.processor:null,h=C(e.warnHtmlMessage)?e.warnHtmlMessage:!0,p=!!e.escapeParameter,O=D(e.messageCompiler)?e.messageCompiler:yn,R=D(e.messageResolver)?e.messageResolver:Ze||ln,I=D(e.localeFallbacker)?e.localeFallbacker:et||Nn,f=y(e.fallbackContext)?e.fallbackContext:void 0,F=D(e.onWarn)?e.onWarn:Jt,M=e,X=y(M.__datetimeFormatters)?M.__datetimeFormatters:new Map,Y=y(M.__numberFormatters)?M.__numberFormatters:new Map,J=y(M.__meta)?M.__meta:{};De++;const V={version:t,cid:De,locale:n,fallbackLocale:a,messages:r,modifiers:i,pluralRules:c,missing:m,missingWarn:d,fallbackWarn:b,fallbackFormat:g,unresolving:E,postTranslation:N,processor:L,warnHtmlMessage:h,escapeParameter:p,messageCompiler:O,messageResolver:R,localeFallbacker:I,fallbackContext:f,onWarn:F,__meta:J};return V.datetimeFormats=s,V.numberFormats=l,V.__datetimeFormatters=X,V.__numberFormatters=Y,V}function Te(e,t,n,a,r){const{missing:s,onWarn:l}=e;if(s!==null){const i=s(e,n,t,r);return _(i)?i:t}else return t}function Z(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let tt=qe.__EXTEND_POINT__;const oe=()=>++tt,B={INVALID_ARGUMENT:tt,INVALID_DATE_ARGUMENT:oe(),INVALID_ISO_DATE_ARGUMENT:oe(),__EXTEND_POINT__:oe()};function K(e){return ze(e,null,void 0)}const Me=()=>"",$=e=>D(e);function ke(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,messageCompiler:s,fallbackLocale:l,messages:i}=e,[c,m]=ue(...t),d=C(m.missingWarn)?m.missingWarn:e.missingWarn,b=C(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=C(m.escapeParameter)?m.escapeParameter:e.escapeParameter,E=!!m.resolvedMessage,N=_(m.default)||C(m.default)?C(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",L=n||N!=="",h=_(m.locale)?m.locale:e.locale;g&&An(m);let[p,O,R]=E?[c,h,i[h]||{}]:nt(e,c,h,l,b,d),I=p,f=c;if(!E&&!(_(I)||$(I))&&L&&(I=N,f=I),!E&&(!(_(I)||$(I))||!_(O)))return r?le:c;let F=!1;const M=()=>{F=!0},X=$(I)?I:at(e,c,O,I,f,M);if(F)return I;const Y=Sn(e,O,R,m),J=dn(Y),V=Rn(e,X,J);return a?a(V,c):V}function An(e){A(e.list)?e.list=e.list.map(t=>_(t)?Fe(t):t):y(e.named)&&Object.keys(e.named).forEach(t=>{_(e.named[t])&&(e.named[t]=Fe(e.named[t]))})}function nt(e,t,n,a,r,s){const{messages:l,onWarn:i,messageResolver:c,localeFallbacker:m}=e,d=m(e,a,n);let b={},g,E=null;const N="translate";for(let L=0;L<d.length&&(g=d[L],b=l[g]||{},(E=c(b,t))===null&&(E=b[t]),!(_(E)||D(E)));L++){const h=Te(e,t,g,s,N);h!==t&&(E=h)}return[E,g,b]}function at(e,t,n,a,r,s){const{messageCompiler:l,warnHtmlMessage:i}=e;if($(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}if(l==null){const m=()=>a;return m.locale=n,m.key=t,m}const c=l(a,vn(e,n,r,a,i,s));return c.locale=n,c.key=t,c.source=a,c}function Rn(e,t,n){return t(n)}function ue(...e){const[t,n,a]=e,r={};if(!_(t)&&!S(t)&&!$(t))throw K(B.INVALID_ARGUMENT);const s=S(t)?String(t):($(t),t);return S(n)?r.plural=n:_(n)?r.default=n:T(n)&&!re(n)?r.named=n:A(n)&&(r.list=n),S(a)?r.plural=a:_(a)?r.default=a:T(a)&&w(r,a),[s,r]}function vn(e,t,n,a,r,s){return{warnHtmlMessage:r,onError:l=>{throw s&&s(l),l},onCacheKey:l=>Kt(t,n,l)}}function Sn(e,t,n,a){const{modifiers:r,pluralRules:s,messageResolver:l,fallbackLocale:i,fallbackWarn:c,missingWarn:m,fallbackContext:d}=e,g={locale:t,modifiers:r,pluralRules:s,messages:E=>{let N=l(n,E);if(N==null&&d){const[,,L]=nt(d,E,t,i,c,m);N=l(L,E)}if(_(N)){let L=!1;const p=at(e,E,t,N,E,()=>{L=!0});return L?Me:p}else return $(N)?N:Me}};return e.processor&&(g.processor=e.processor),a.list&&(g.list=a.list),a.named&&(g.named=a.named),S(a.plural)&&(g.pluralIndex=a.plural),g}function Pe(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:i}=e,[c,m,d,b]=me(...t),g=C(d.missingWarn)?d.missingWarn:e.missingWarn;C(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,N=_(d.locale)?d.locale:e.locale,L=l(e,r,N);if(!_(c)||c==="")return new Intl.DateTimeFormat(N,b).format(m);let h={},p,O=null;const R="datetime format";for(let F=0;F<L.length&&(p=L[F],h=n[p]||{},O=h[c],!T(O));F++)Te(e,c,p,g,R);if(!T(O)||!_(p))return a?le:c;let I=`${p}__${c}`;re(b)||(I=`${I}__${JSON.stringify(b)}`);let f=i.get(I);return f||(f=new Intl.DateTimeFormat(p,w({},O,b)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const rt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function me(...e){const[t,n,a,r]=e,s={};let l={},i;if(_(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw K(B.INVALID_ISO_DATE_ARGUMENT);const m=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(m);try{i.toISOString()}catch{throw K(B.INVALID_ISO_DATE_ARGUMENT)}}else if(Yt(t)){if(isNaN(t.getTime()))throw K(B.INVALID_DATE_ARGUMENT);i=t}else if(S(t))i=t;else throw K(B.INVALID_ARGUMENT);return _(n)?s.key=n:T(n)&&Object.keys(n).forEach(c=>{rt.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:T(a)&&(l=a),T(r)&&(l=r),[s.key||"",i,s,l]}function we(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function We(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:i}=e,[c,m,d,b]=fe(...t),g=C(d.missingWarn)?d.missingWarn:e.missingWarn;C(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,N=_(d.locale)?d.locale:e.locale,L=l(e,r,N);if(!_(c)||c==="")return new Intl.NumberFormat(N,b).format(m);let h={},p,O=null;const R="number format";for(let F=0;F<L.length&&(p=L[F],h=n[p]||{},O=h[c],!T(O));F++)Te(e,c,p,g,R);if(!T(O)||!_(p))return a?le:c;let I=`${p}__${c}`;re(b)||(I=`${I}__${JSON.stringify(b)}`);let f=i.get(I);return f||(f=new Intl.NumberFormat(p,w({},O,b)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const lt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fe(...e){const[t,n,a,r]=e,s={};let l={};if(!S(t))throw K(B.INVALID_ARGUMENT);const i=t;return _(n)?s.key=n:T(n)&&Object.keys(n).forEach(c=>{lt.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:T(a)&&(l=a),T(r)&&(l=r),[s.key||"",i,s,l]}function Ue(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Dn="9.2.2";pn.__EXTEND_POINT__;let st=qe.__EXTEND_POINT__;const P=()=>++st,W={UNEXPECTED_RETURN_TYPE:st,INVALID_ARGUMENT:P(),MUST_BE_CALL_SETUP_TOP:P(),NOT_INSLALLED:P(),NOT_AVAILABLE_IN_LEGACY_MODE:P(),REQUIRED_VALUE:P(),INVALID_VALUE:P(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:P(),NOT_INSLALLED_WITH_PROVIDE:P(),UNEXPECTED_ERROR:P(),NOT_COMPATIBLE_LEGACY_VUE_I18N:P(),BRIDGE_SUPPORT_VUE_2_ONLY:P(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:P(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:P(),__EXTEND_POINT__:P()};function U(e,...t){return ze(e,null,void 0)}const _e=j("__transrateVNode"),ge=j("__datetimeParts"),de=j("__numberParts"),Mn=j("__setPluralRules");j("__intlifyMeta");const kn=j("__injectWithOption");function be(e){if(!y(e))return e;for(const t in e)if(!!Ee(e,t))if(!t.includes("."))y(e[t])&&be(e[t]);else{const n=t.split("."),a=n.length-1;let r=e;for(let s=0;s<a;s++)n[s]in r||(r[n[s]]={}),r=r[n[s]];r[n[a]]=e[t],delete e[t],y(r[n[a]])&&be(r[n[a]])}return e}function ot(e,t){const{messages:n,__i18n:a,messageResolver:r,flatJson:s}=t,l=T(n)?n:A(a)?{}:{[e]:{}};if(A(a)&&a.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:m}=i;c?(l[c]=l[c]||{},ee(m,l[c])):ee(m,l)}else _(i)&&ee(JSON.parse(i),l)}),r==null&&s)for(const i in l)Ee(l,i)&&be(l[i]);return l}const ne=e=>!y(e)||A(e);function ee(e,t){if(ne(e)||ne(t))throw U(W.INVALID_VALUE);for(const n in e)Ee(e,n)&&(ne(e[n])||ne(t[n])?t[n]=e[n]:ee(e[n],t[n]))}function Pn(e){return e.type}function wn(e,t,n){let a=y(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=ot(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const r=Object.keys(a);r.length&&r.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(y(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(y(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function Ve(e){return Gt($t,null,e,0)}let xe=0;function je(e){return(t,n,a,r)=>e(n,a,Ye()||void 0,r)}function ct(e={},t){const{__root:n}=e,a=n===void 0;let r=C(e.inheritLocale)?e.inheritLocale:!0;const s=z(n&&r?n.locale.value:_(e.locale)?e.locale:Ne),l=z(n&&r?n.fallbackLocale.value:_(e.fallbackLocale)||A(e.fallbackLocale)||T(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),i=z(ot(s.value,e)),c=z(T(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),m=z(T(e.numberFormats)?e.numberFormats:{[s.value]:{}});let d=n?n.missingWarn:C(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,b=n?n.fallbackWarn:C(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=n?n.fallbackRoot:C(e.fallbackRoot)?e.fallbackRoot:!0,E=!!e.fallbackFormat,N=D(e.missing)?e.missing:null,L=D(e.missing)?je(e.missing):null,h=D(e.postTranslation)?e.postTranslation:null,p=n?n.warnHtmlMessage:C(e.warnHtmlMessage)?e.warnHtmlMessage:!0,O=!!e.escapeParameter;const R=n?n.modifiers:T(e.modifiers)?e.modifiers:{};let I=e.pluralRules||n&&n.pluralRules,f;f=(()=>{const o={version:Dn,locale:s.value,fallbackLocale:l.value,messages:i.value,modifiers:R,pluralRules:I,missing:L===null?void 0:L,missingWarn:d,fallbackWarn:b,fallbackFormat:E,unresolving:!0,postTranslation:h===null?void 0:h,warnHtmlMessage:p,escapeParameter:O,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return o.datetimeFormats=c.value,o.numberFormats=m.value,o.__datetimeFormatters=T(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=T(f)?f.__numberFormatters:void 0,Cn(o)})(),Z(f,s.value,l.value);function M(){return[s.value,l.value,i.value,c.value,m.value]}const X=Q({get:()=>s.value,set:o=>{s.value=o,f.locale=s.value}}),Y=Q({get:()=>l.value,set:o=>{l.value=o,f.fallbackLocale=l.value,Z(f,s.value,o)}}),J=Q(()=>i.value),V=Q(()=>c.value),Oe=Q(()=>m.value);function mt(){return D(h)?h:null}function ft(o){h=o,f.postTranslation=o}function _t(){return N}function gt(o){o!==null&&(L=je(o)),N=o,f.missing=L}const H=(o,u,x,k,se,te)=>{M();let q;if(q=o(f),S(q)&&q===le){const[Pt,aa]=u();return n&&g?k(n):se(Pt)}else{if(te(q))return q;throw U(W.UNEXPECTED_RETURN_TYPE)}};function ye(...o){return H(u=>Reflect.apply(ke,null,[u,...o]),()=>ue(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>_(u))}function dt(...o){const[u,x,k]=o;if(k&&!y(k))throw U(W.INVALID_ARGUMENT);return ye(u,x,w({resolvedMessage:!0},k||{}))}function bt(...o){return H(u=>Reflect.apply(Pe,null,[u,...o]),()=>me(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>ve,u=>_(u))}function Et(...o){return H(u=>Reflect.apply(We,null,[u,...o]),()=>fe(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>ve,u=>_(u))}function pt(o){return o.map(u=>_(u)||S(u)||C(u)?Ve(String(u)):u)}const Nt={normalize:pt,interpolate:o=>o,type:"vnode"};function Tt(...o){return H(u=>{let x;const k=u;try{k.processor=Nt,x=Reflect.apply(ke,null,[k,...o])}finally{k.processor=null}return x},()=>ue(...o),"translate",u=>u[_e](...o),u=>[Ve(u)],u=>A(u))}function It(...o){return H(u=>Reflect.apply(We,null,[u,...o]),()=>fe(...o),"number format",u=>u[de](...o),()=>[],u=>_(u)||A(u))}function Lt(...o){return H(u=>Reflect.apply(Pe,null,[u,...o]),()=>me(...o),"datetime format",u=>u[ge](...o),()=>[],u=>_(u)||A(u))}function Ot(o){I=o,f.pluralRules=I}function yt(o,u){const x=_(u)?u:s.value,k=he(x);return f.messageResolver(k,o)!==null}function ht(o){let u=null;const x=Qe(f,l.value,s.value);for(let k=0;k<x.length;k++){const se=i.value[x[k]]||{},te=f.messageResolver(se,o);if(te!=null){u=te;break}}return u}function Ft(o){const u=ht(o);return u!=null?u:n?n.tm(o)||{}:{}}function he(o){return i.value[o]||{}}function Ct(o,u){i.value[o]=u,f.messages=i.value}function At(o,u){i.value[o]=i.value[o]||{},ee(u,i.value[o]),f.messages=i.value}function Rt(o){return c.value[o]||{}}function vt(o,u){c.value[o]=u,f.datetimeFormats=c.value,we(f,o,u)}function St(o,u){c.value[o]=w(c.value[o]||{},u),f.datetimeFormats=c.value,we(f,o,u)}function Dt(o){return m.value[o]||{}}function Mt(o,u){m.value[o]=u,f.numberFormats=m.value,Ue(f,o,u)}function kt(o,u){m.value[o]=w(m.value[o]||{},u),f.numberFormats=m.value,Ue(f,o,u)}xe++,n&&ie&&(ce(n.locale,o=>{r&&(s.value=o,f.locale=o,Z(f,s.value,l.value))}),ce(n.fallbackLocale,o=>{r&&(l.value=o,f.fallbackLocale=o,Z(f,s.value,l.value))}));const v={id:xe,locale:X,fallbackLocale:Y,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,Z(f,s.value,l.value))},get availableLocales(){return Object.keys(i.value).sort()},messages:J,get modifiers(){return R},get pluralRules(){return I||{}},get isGlobal(){return a},get missingWarn(){return d},set missingWarn(o){d=o,f.missingWarn=d},get fallbackWarn(){return b},set fallbackWarn(o){b=o,f.fallbackWarn=b},get fallbackRoot(){return g},set fallbackRoot(o){g=o},get fallbackFormat(){return E},set fallbackFormat(o){E=o,f.fallbackFormat=E},get warnHtmlMessage(){return p},set warnHtmlMessage(o){p=o,f.warnHtmlMessage=o},get escapeParameter(){return O},set escapeParameter(o){O=o,f.escapeParameter=o},t:ye,getLocaleMessage:he,setLocaleMessage:Ct,mergeLocaleMessage:At,getPostTranslationHandler:mt,setPostTranslationHandler:ft,getMissingHandler:_t,setMissingHandler:gt,[Mn]:Ot};return v.datetimeFormats=V,v.numberFormats=Oe,v.rt=dt,v.te=yt,v.tm=Ft,v.d=bt,v.n=Et,v.getDateTimeFormat=Rt,v.setDateTimeFormat=vt,v.mergeDateTimeFormat=St,v.getNumberFormat=Dt,v.setNumberFormat=Mt,v.mergeNumberFormat=kt,v[kn]=e.__injectWithOption,v[_e]=Tt,v[ge]=Lt,v[de]=It,v}const Ie={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Wn({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,r)=>a=[...a,...A(r.children)?r.children:[r]],[]):t.reduce((n,a)=>{const r=e[a];return r&&(n[a]=r()),n},{})}function it(e){return Wt}const Ge={name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>S(e)||!isNaN(e)}},Ie),setup(e,t){const{slots:n,attrs:a}=t,r=e.i18n||Le({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(b=>b!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=_(e.plural)?+e.plural:e.plural);const i=Wn(t,s),c=r[_e](e.keypath,i,l),m=w({},a),d=_(e.tag)||y(e.tag)?e.tag:it();return Xe(d,m,c)}}};function Un(e){return A(e)&&!_(e[0])}function ut(e,t,n,a){const{slots:r,attrs:s}=t;return()=>{const l={part:!0};let i={};e.locale&&(l.locale=e.locale),_(e.format)?l.key=e.format:y(e.format)&&(_(e.format.key)&&(l.key=e.format.key),i=Object.keys(e.format).reduce((g,E)=>n.includes(E)?w({},g,{[E]:e.format[E]}):g,{}));const c=a(e.value,l,i);let m=[l.key];A(c)?m=c.map((g,E)=>{const N=r[g.type],L=N?N({[g.type]:g.value,index:E,parts:c}):[g.value];return Un(L)&&(L[0].key=`${g.type}-${E}`),L}):_(c)&&(m=[c]);const d=w({},s),b=_(e.tag)||y(e.tag)?e.tag:it();return Xe(b,d,m)}}const $e={name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},Ie),setup(e,t){const n=e.i18n||Le({useScope:"parent",__useComponent:!0});return ut(e,t,lt,(...a)=>n[de](...a))}},He={name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ie),setup(e,t){const n=e.i18n||Le({useScope:"parent",__useComponent:!0});return ut(e,t,rt,(...a)=>n[ge](...a))}};function Vn(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function xn(e){const t=l=>{const{instance:i,modifiers:c,value:m}=l;if(!i||!i.$)throw U(W.UNEXPECTED_ERROR);const d=Vn(e,i.$),b=Be(m);return[Reflect.apply(d.t,d,[...Ke(b)]),d]};return{created:(l,i)=>{const[c,m]=t(i);ie&&e.global===m&&(l.__i18nWatcher=ce(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),l.__composer=m,l.textContent=c},unmounted:l=>{ie&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:i})=>{if(l.__composer){const c=l.__composer,m=Be(i);l.textContent=Reflect.apply(c.t,c,[...Ke(m)])}},getSSRProps:l=>{const[i]=t(l);return{textContent:i}}}}function Be(e){if(_(e))return{path:e};if(T(e)){if(!("path"in e))throw U(W.REQUIRED_VALUE,"path");return e}else throw U(W.INVALID_VALUE)}function Ke(e){const{path:t,locale:n,args:a,choice:r,plural:s}=e,l={},i=a||{};return _(n)&&(l.locale=n),S(r)&&(l.plural=r),S(s)&&(l.plural=s),[t,i,l]}function jn(e,t,...n){const a=T(n[0])?n[0]:{},r=!!a.useI18nComponentName;(C(a.globalInstall)?a.globalInstall:!0)&&(e.component(r?"i18n":Ge.name,Ge),e.component($e.name,$e),e.component(He.name,He)),e.directive("t",xn(t))}const Gn=j("global-vue-i18n");function $n(e={},t){const n=C(e.globalInjection)?e.globalInjection:!0,a=!0,r=new Map,[s,l]=Hn(e),i=j("");function c(b){return r.get(b)||null}function m(b,g){r.set(b,g)}function d(b){r.delete(b)}{const b={get mode(){return"composition"},get allowComposition(){return a},async install(g,...E){g.__VUE_I18N_SYMBOL__=i,g.provide(g.__VUE_I18N_SYMBOL__,b),n&&Qn(g,b.global),jn(g,b,...E);const N=g.unmount;g.unmount=()=>{b.dispose(),N()}},get global(){return l},dispose(){s.stop()},__instances:r,__getInstance:c,__setInstance:m,__deleteInstance:d};return b}}function Le(e={}){const t=Ye();if(t==null)throw U(W.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw U(W.NOT_INSLALLED);const n=Bn(t),a=Xn(n),r=Pn(t),s=Kn(e,r);if(s==="global")return wn(a,e,r),a;if(s==="parent"){let c=Yn(n,t,e.__useComponent);return c==null&&(c=a),c}const l=n;let i=l.__getInstance(t);if(i==null){const c=w({},e);"__i18n"in r&&(c.__i18n=r.__i18n),a&&(c.__root=a),i=ct(c),Jn(l,t),l.__setInstance(t,i)}return i}function Hn(e,t,n){const a=wt();{const r=a.run(()=>ct(e));if(r==null)throw U(W.UNEXPECTED_ERROR);return[a,r]}}function Bn(e){{const t=Vt(e.isCE?Gn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw U(e.isCE?W.NOT_INSLALLED_WITH_PROVIDE:W.UNEXPECTED_ERROR);return t}}function Kn(e,t){return re(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Xn(e){return e.mode==="composition"?e.global:e.global.__composer}function Yn(e,t,n=!1){let a=null;const r=t.root;let s=t.parent;for(;s!=null;){const l=e;if(e.mode==="composition"&&(a=l.__getInstance(s)),a!=null||r===s)break;s=s.parent}return a}function Jn(e,t,n){xt(()=>{},t),jt(()=>{e.__deleteInstance(t)},t)}const qn=["locale","fallbackLocale","availableLocales"],zn=["t","rt","d","n","tm"];function Qn(e,t){const n=Object.create(null);qn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw U(W.UNEXPECTED_ERROR);const s=Ut(r.value)?{get(){return r.value.value},set(l){r.value.value=l}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,zn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw U(W.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)})}hn(sn);Fn(Qe);var Zn={sections:"Sections",intro:{passion:"Passion",passionText:"For me, programming is more than a career choice. It has become a real passion!",collaboration:"Collaboration",collaborationText:"I believe that effective communication and collaboration are essential to delivering high quality projects and I always strive to maintain these standards in my current and past projects.",problemSolving:"Problem Solving",problemSolvingText:"I have a great ability to solve complex problems. I am able to diagnose problems quickly and efficiently, and offer proven solutions to resolve them."}},ea={sections:"Sections",intro:{passion:"Passion",passionText:"Pour moi la programmation c'est plus qu'un choix de carri\xE8re. C'est devenu une r\xE9elle passion !",collaboration:"Collaboration",collaborationText:"Je crois que la communication efficace et la collaboration sont essentielles pour r\xE9aliser des projets de haute qualit\xE9 et je m'efforce toujours de maintenir ces normes dans mes projets actuels et pass\xE9s.",problemSolving:"R\xE9solution de probl\xE8mes",problemSolvingText:"J'ai une grande aptitude \xE0 r\xE9soudre les probl\xE8mes complexes. Je suis capable de diagnostiquer les probl\xE8mes de mani\xE8re rapide et efficace, et de proposer des solutions \xE9prouv\xE9es pour les r\xE9soudre."}},ta={en:Zn,fr:ea},la=Ht(({app:e})=>{const t=$n({locale:"en",globalInjection:!0,messages:ta});e.use(t)});export{la as default};
