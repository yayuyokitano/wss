const d={context:void 0,registry:void 0};function j(e){d.context=e}function Et(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const At=(e,t)=>e===t,de=Symbol("solid-proxy"),he={equals:At};let se=null,Je=rt;const _=1,ie=2,Qe={owned:null,cleanups:null,context:null,owner:null},Se={};var m=null;let a=null,S=null,$=null,C=null,pe=0;const[ar,_e]=k(!1);function Te(e,t){const n=S,s=m,r=e.length===0,i=r?Qe:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=r?e:()=>e(()=>O(()=>F(i)));m=i,S=null;try{return R(l,!0)}finally{S=n,m=s}}function k(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(a&&a.running&&a.sources.has(n)?r=r(n.tValue):r=r(n.value)),nt(n,r));return[tt.bind(n),s]}function je(e,t,n){const s=ce(e,t,!0,_);Z(s)}function M(e,t,n){const s=ce(e,t,!1,_);Z(s)}function Ct(e,t,n){Je=_t;const s=ce(e,t,!1,_),r=W&&ue(m,W.id);r&&(s.suspense=r),(!n||!n.render)&&(s.user=!0),C?C.push(s):Z(s)}function E(e,t,n){n=n?Object.assign({},he,n):he;const s=ce(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Z(s),tt.bind(s)}function $t(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let l=null,o=Se,c=null,f=!1,u=!1,h="initialValue"in i,y=typeof s=="function"&&E(s);const w=new Set,[v,x]=(i.storage||k)(i.initialValue),[T,N]=k(void 0),[L,H]=k(void 0,{equals:!1}),[B,I]=k(h?"ready":"unresolved");if(d.context){c=`${d.context.id}${d.context.count++}`;let g;i.ssrLoadFrom==="initial"?o=i.initialValue:d.load&&(g=d.load(c))&&(o=g[0])}function D(g,p,A,q){return l===g&&(l=null,h=!0,(g===o||p===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(q,{value:p})),o=Se,a&&g&&f?(a.promises.delete(g),f=!1,R(()=>{a.running=!0,ee(p,A)},!1)):ee(p,A)),p}function ee(g,p){R(()=>{p===void 0&&x(()=>g),I(p!==void 0?"errored":"ready"),N(p);for(const A of w.keys())A.decrement();w.clear()},!1)}function te(){const g=W&&ue(m,W.id),p=v(),A=T();if(A!==void 0&&!l)throw A;return S&&!S.user&&g&&je(()=>{L(),l&&(g.resolved&&a&&f?a.promises.add(l):w.has(g)||(g.increment(),w.add(g)))}),p}function P(g=!0){if(g!==!1&&u)return;u=!1;const p=y?y():s;if(f=a&&a.running,p==null||p===!1){D(l,O(v));return}a&&l&&a.promises.delete(l);const A=o!==Se?o:O(()=>r(p,{value:v(),refetching:g}));return typeof A!="object"||!(A&&"then"in A)?(D(l,A,void 0,p),A):(l=A,u=!0,queueMicrotask(()=>u=!1),R(()=>{I(h?"refreshing":"pending"),H()},!1),A.then(q=>D(A,q,void 0,p),q=>D(A,void 0,ot(q),p)))}return Object.defineProperties(te,{state:{get:()=>B()},error:{get:()=>T()},loading:{get(){const g=B();return g==="pending"||g==="refreshing"}},latest:{get(){if(!h)return te();const g=T();if(g&&!l)throw g;return v()}}}),y?je(()=>P(!1)):P(!1),[te,{refetch:P,mutate:x}]}function O(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function Ze(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(i){i=!1;return}const c=O(()=>t(o,r,l));return r=o,c}}function le(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Tt(e,t){se||(se=Symbol("error")),m=ce(void 0,void 0,!0),m.context={[se]:[t]},a&&a.running&&a.sources.add(m);try{return e()}catch(n){we(n)}finally{m=m.owner}}function et(){return m}function Ot(e,t){const n=m,s=S;m=e,S=null;try{return R(t,!0)}catch(r){we(r)}finally{m=n,S=s}}function kt(e){if(a&&a.running)return e(),a.done;const t=S,n=m;return Promise.resolve().then(()=>{S=t,m=n;let s;return W&&(s=a||(a={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),R(e,!1),S=m=null,s?s.done:void 0})}function Nt(e){C.push.apply(C,e),e.length=0}function Q(e,t){const n=Symbol("context");return{id:n,Provider:jt(n),defaultValue:e}}function X(e){let t;return(t=ue(m,e.id))!==void 0?t:e.defaultValue}function Oe(e){const t=E(e),n=E(()=>Ee(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let W;function Lt(){return W||(W=Q({}))}function tt(){const e=a&&a.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===_)Z(this);else{const t=$;$=null,R(()=>ye(this),!1),$=t}if(S){const t=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(t)):(S.sources=[this],S.sourceSlots=[t]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return e&&a.sources.has(this)?this.tValue:this.value}function nt(e,t,n){let s=a&&a.running&&a.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(a){const r=a.running;(r||!n&&a.sources.has(e))&&(a.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&R(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=a&&a.running;l&&a.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?$.push(i):C.push(i),i.observers&&st(i)),l?i.tState=_:i.state=_)}if($.length>1e6)throw $=[],new Error},!1)}return t}function Z(e){if(!e.fn)return;F(e);const t=m,n=S,s=pe;S=m=e,qe(e,a&&a.running&&a.sources.has(e)?e.tValue:e.value,s),a&&!a.running&&a.sources.has(e)&&queueMicrotask(()=>{R(()=>{a&&(a.running=!0),S=m=e,qe(e,e.tValue,s),S=m=null},!1)}),S=n,m=t}function qe(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(a&&a.running?(e.tState=_,e.tOwned&&e.tOwned.forEach(F),e.tOwned=void 0):(e.state=_,e.owned&&e.owned.forEach(F),e.owned=null)),e.updatedAt=n+1,we(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?nt(e,s,!0):a&&a.running&&e.pure?(a.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function ce(e,t,n,s=_,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return a&&a.running&&(i.state=0,i.tState=s),m===null||m!==Qe&&(a&&a.running&&m.pure?m.tOwned?m.tOwned.push(i):m.tOwned=[i]:m.owned?m.owned.push(i):m.owned=[i]),i}function ge(e){const t=a&&a.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===ie)return ye(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);){if(t&&a.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(a.disposed.has(r))return}if((t?e.tState:e.state)===_)Z(e);else if((t?e.tState:e.state)===ie){const r=$;$=null,R(()=>ye(e,n[0]),!1),$=r}}}function R(e,t){if($)return e();let n=!1;t||($=[]),C?n=!0:C=[],pe++;try{const s=e();return Rt(n),s}catch(s){n||(C=null),$=null,we(s)}}function Rt(e){if($&&(rt($),$=null),e)return;let t;if(a){if(!a.promises.size&&!a.queue.size){const s=a.sources,r=a.disposed;C.push.apply(C,a.effects),t=a.resolve;for(const i of C)"tState"in i&&(i.state=i.tState),delete i.tState;a=null,R(()=>{for(const i of r)F(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)F(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}_e(!1)},!1)}else if(a.running){a.running=!1,a.effects.push.apply(a.effects,C),C=null,_e(!0);return}}const n=C;C=null,n.length&&R(()=>Je(n),!1),t&&t()}function rt(e){for(let t=0;t<e.length;t++)ge(e[t])}function _t(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ge(s)}for(d.context&&j(),t=0;t<n;t++)ge(e[t])}function ye(e,t){const n=a&&a.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===_?r!==t&&(!r.updatedAt||r.updatedAt<pe)&&ge(r):i===ie&&ye(r,t)}}}function st(e){const t=a&&a.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=ie:s.state=ie,s.pure?$.push(s):C.push(s),s.observers&&st(s))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(a&&a.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}it(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}a&&a.running?e.tState=0:e.state=0,e.context=null}function it(e,t){if(t||(e.tState=0,a.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)it(e.owned[n])}function ot(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ie(e,t){for(const n of e)n(t)}function we(e){const t=se&&ue(m,se);if(!t)throw e;const n=ot(e);C?C.push({fn(){Ie(t,n)},state:_}):Ie(t,n)}function ue(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ue(e.owner,t):void 0}function Ee(e){if(typeof e=="function"&&!e.length)return Ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Ee(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function jt(e,t){return function(s){let r;return M(()=>r=O(()=>(m.context={[e]:s.value},Oe(()=>s.children))),void 0),r}}let lt=!1;function qt(){lt=!0}function b(e,t){if(lt&&d.context){const n=d.context;j(Et());const s=O(()=>e(t||{}));return j(n),s}return O(()=>e(t||{}))}function ae(){return!0}const Ae={get(e,t,n){return t===de?n:e.get(t)},has(e,t){return t===de?!0:e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function ve(e){return(e=typeof e=="function"?e():e)?e:{}}function Me(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&de in r,e[s]=typeof r=="function"?(t=!0,E(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=ve(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in ve(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(ve(e[r])));return[...new Set(s)]}},Ae);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function It(e,...t){const n=new Set(t.length>1?t.flat():t[0]);if(de in e){const r=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Ae));return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Ae)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const i={};for(let l=0;l<r.length;l++){const o=r[l];o in e&&Object.defineProperty(i,o,s[o]?s[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}function He(e){let t,n;const s=r=>{const i=d.context;if(i){const[o,c]=k();(n||(n=e())).then(f=>{j(i),c(()=>f.default),j()}),t=o}else if(!t){const[o]=$t(()=>(n||(n=e())).then(c=>c.default));t=o}let l;return E(()=>(l=t())&&O(()=>{if(!i)return l(r);const o=d.context;j(i);const c=l(r);return j(o),c}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Mt=0;function Ht(){const e=d.context;return e?`${e.id}${e.count++}`:`cl-${Mt++}`}const Bt=e=>`Stale read from <${e}>.`;function ke(e){const t=e.keyed,n=E(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return E(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?O(()=>r(t?s:()=>{if(!O(n))throw Bt("Show");return e.when})):r}return e.fallback},void 0,void 0)}let z;function ct(){z&&[...z].forEach(e=>e())}function Vt(e){let t,n;d.context&&d.load&&(n=d.load(d.context.id+d.context.count))&&(t=n[0]);const[s,r]=k(t,void 0);return z||(z=new Set),z.add(r),le(()=>z.delete(r)),E(()=>{let i;if(i=s()){const l=e.fallback;return typeof l=="function"&&l.length?O(()=>l(i,()=>r())):l}return Tt(()=>e.children,r)},void 0,void 0)}const Ut=Q();function Ft(e){let t=0,n,s,r,i,l;const[o,c]=k(!1),f=Lt(),u={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:o,effects:[],resolved:!1},h=et();if(d.context&&d.load){const v=d.context.id+d.context.count;let x=d.load(v);if(x&&(r=x[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[T,N]=k(void 0,{equals:!1});i=T,r.then(L=>{if(L||d.done)return L&&(l=L),N();d.gather(v),j(s),N(),j()})}}const y=X(Ut);y&&(n=y.register(u.inFallback));let w;return le(()=>w&&w()),b(f.Provider,{value:u,get children(){return E(()=>{if(l)throw l;if(s=d.context,i)return i(),i=void 0;s&&r==="$$f"&&j();const v=E(()=>e.children);return E(x=>{const T=u.inFallback(),{showContent:N=!0,showFallback:L=!0}=n?n():{};if((!T||r&&r!=="$$f")&&N)return u.resolved=!0,w&&w(),w=s=r=void 0,Nt(u.effects),v();if(L)return w?x:Te(H=>(w=H,s&&(j({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const Dt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Kt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Dt]),Wt=new Set(["innerHTML","textContent","innerText","children"]),Xt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Yt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function zt(e,t){const n=Yt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Jt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Qt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,f=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const u=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],u)}else if(i===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!f){f=new Map;let h=o;for(;h<i;)f.set(n[h],h++)}const u=f.get(t[l]);if(u!=null)if(o<u&&u<i){let h=l,y=1,w;for(;++h<r&&h<i&&!((w=f.get(t[h]))==null||w!==u+y);)y++;if(y>u-o){const v=t[l];for(;o<u;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Be="_$DX_DELEGATE";function Zt(e,t,n,s={}){let r;return Te(i=>{r=i,t===document?e():me(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function ut(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>(s||(s=r())).cloneNode(!0):()=>O(()=>document.importNode(s||(s=r()),!0));return i.cloneNode=i,i}function Ne(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ht))}}function Ce(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function en(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function tn(e,t){t==null?e.removeAttribute("class"):e.className=t}function at(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function nn(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Ve(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Ve(e,o,!0),n[o]=c)}return n}function rn(e,t,n){if(!t)return n?Ce(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function G(e,t={},n,s){const r={};return s||M(()=>r.children=J(e,t.children,r.children)),M(()=>t.ref&&t.ref(e)),M(()=>sn(e,t,n,!0,r,!0)),r}function me(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return J(e,t,s,n);M(r=>J(e,t(),r,n),s)}function sn(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Ue(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||J(e,t.children);continue}const o=t[l];r[l]=Ue(e,l,o,r[l],n,i)}}function on(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=r=>De(t,r),d.registry=new Map,d.context={id:n.renderId||"",count:0},De(t,n.renderId);const s=Zt(e,t,[...t.childNodes],n);return d.context=null,s}function ft(e){let t,n;if(!d.context||!(t=d.registry.get(n=cn()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return d.completed&&d.completed.add(t),d.registry.delete(n),t}function fr(e){let t=e,n=0,s=[];if(d.context)for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="#")n++;else if(r==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function dt(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;ht(s),t.shift()}}),d.events.queued=!0)}function ln(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ve(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Ue(e,t,n,s,r,i){let l,o,c,f,u;if(t==="style")return rn(e,n,s);if(t==="classList")return nn(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),y=Gt.has(h);if(!y&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(h,w)}(y||n)&&(at(e,h,n,y),y&&Ne([h]))}else if(t.slice(0,5)==="attr:")Ce(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=Wt.has(t))||!r&&((f=zt(t,e.tagName))||(o=Kt.has(t)))||(l=e.nodeName.includes("-")))u&&(t=t.slice(5),o=!0),t==="class"||t==="className"?tn(e,n):l&&!o&&!c?e[ln(t)]=n:e[f||t]=n;else{const h=r&&t.indexOf(":")>-1&&Jt[t.split(":")[0]];h?en(e,h,t,n):Ce(e,Xt[t]||t,n)}return n}function ht(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function J(e,t,n,s,r){if(d.context){!n&&(n=[...e.childNodes]);let o=[];for(let c=0;c<n.length;c++){const f=n[c];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():o.push(f)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(d.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=Y(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(d.context)return n;n=Y(e,n,s)}else{if(i==="function")return M(()=>{let o=t();for(;typeof o=="function";)o=o();n=J(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if($e(o,t,n,r))return M(()=>n=J(e,o,n,s,!0)),()=>n;if(d.context){if(!o.length)return n;for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=Y(e,n,s),l)return n}else c?n.length===0?Fe(e,o,s):Qt(e,n,o):(n&&Y(e),Fe(e,o));n=o}else if(t.nodeType){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=Y(e,n,s,t);Y(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function $e(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=$e(e,o,c)||r;else if(f==="function")if(s){for(;typeof o=="function";)o=o();r=$e(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function Fe(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function Y(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function De(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const r=n[s],i=r.getAttribute("data-hk");(!t||i.startsWith(t))&&!d.registry.has(i)&&d.registry.set(i,r)}}function cn(){const e=d.context;return`${e.id}${e.count++}`}function un(e){return d.context?void 0:e.children}function an(){}const gt=!1,fn=(...e)=>(qt(),on(...e)),dn="modulepreload",hn=function(e){return"/wss/"+e},Ke={},We=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=hn(i),i in Ke)return;Ke[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":dn,l||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function gn(e,t){e&&t&&fn(e,t)}const Le=Q(),yn=["title","meta"],Xe=e=>e.tag+(e.name?`.${e.name}"`:""),mn=e=>{if(!d.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,i=>i.parentNode.removeChild(i))}const t=new Map;function n(r){if(r.ref)return r.ref;let i=document.querySelector(`[data-sm="${r.id}"]`);return i?(i.tagName.toLowerCase()!==r.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(r.tag)),i.removeAttribute("data-sm")):i=document.createElement(r.tag),i}const s={addClientTag:r=>{let i=Xe(r);if(yn.indexOf(r.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),c=o.length;o=[...o,r],t.set(i,o);{let f=n(r);r.ref=f,G(f,r.props);let u=null;for(var l=c-1;l>=0;l--)if(o[l]!=null){u=o[l];break}f.parentNode!=document.head&&document.head.appendChild(f),u&&u.ref&&document.head.removeChild(u.ref)}return c}{let o=n(r);r.ref=o,G(o,r.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(r,i)=>{const l=Xe(r);if(r.ref){const o=t.get(l);if(o){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let c=i-1;c>=0;c--)o[c]!=null&&document.head.appendChild(o[c].ref)}o[i]=null,t.set(l,o)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return b(Le.Provider,{value:s,get children(){return e.children}})},yt=(e,t,n)=>{const s=Ht();if(!X(Le))throw new Error("<MetaProvider /> should be in the tree");return pn({tag:e,props:t,setting:n,id:s,get name(){return t.name||t.property}}),null};function pn(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=X(Le);M(()=>{{let r=t(e);le(()=>n(e,r))}})}const wn=e=>yt("title",e,{escape:!0}),Ye=e=>yt("meta",e,{escape:!0});function bn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function xn([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Sn(e){try{return document.querySelector(e)}catch{return null}}function vn(e,t){const n=Sn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Pn(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=xn(k(i(e()),{equals:(o,c)=>o.value===c.value}),void 0,o=>(!r&&t(o),o));return n&&le(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function En(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:k({value:""})};return e}function An(){return Pn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),vn(window.location.hash.slice(1),n)},e=>bn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Cn(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:c=>{c&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const $n=/^(?:[a-z0-9]+:)?\/\//i,Tn=/^\/+|(\/)\/+$/g;function K(e,t=!1){const n=e.replace(Tn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function fe(e,t,n){if($n.test(t))return;const s=K(e),r=n&&K(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+K(t,!i)}function On(e,t){if(e==null)throw new Error(t);return e}function mt(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function kn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Nn(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const c=o.split("/").filter(Boolean),f=c.length-l;if(f<0||f>0&&r===void 0&&!t)return null;const u={path:l?"":"/",params:{}},h=y=>n===void 0?void 0:n[y];for(let y=0;y<l;y++){const w=i[y],v=c[y],x=w[0]===":",T=x?w.slice(1):w;if(x&&Pe(v,h(T)))u.params[T]=v;else if(x||!Pe(v,w))return null;u.path+=`/${v}`}if(r){const y=f?c.slice(-f).join("/"):"";if(Pe(y,h(r)))u.params[r]=y;else return null}return u}}function Pe(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ln(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function pt(e){const t=new Map,n=et();return new Proxy({},{get(s,r){return t.has(r)||Ot(n,()=>t.set(r,E(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function wt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return wt(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const Rn=100,bt=Q(),be=Q(),xe=()=>On(X(bt),"Make sure your app is wrapped in a <Router />");let oe;const Re=()=>oe||X(be)||xe().base,_n=e=>{const t=Re();return E(()=>t.resolvePath(e()))},jn=e=>{const t=xe();return E(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},qn=()=>xe().location;function In(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>b(s,{}):()=>{const{element:c}=e;return c===void 0&&n?b(n,{}):c},preload:e.component?s.preload:e.preload,data:r};return xt(e.path).reduce((c,f)=>{for(const u of wt(f)){const h=mt(t,u),y=l?h:h.split("/*",1)[0];c.push({...o,originalPath:u,pattern:y,matcher:Nn(y,!l,e.matchFilters)})}return c},[])}function Mn(e,t=0){return{routes:e,score:Ln(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function xt(e){return Array.isArray(e)?e:[e]}function St(e,t="",n,s=[],r=[]){const i=xt(e);for(let l=0,o=i.length;l<o;l++){const c=i[l];if(c&&typeof c=="object"&&c.hasOwnProperty("path")){const f=In(c,t,n);for(const u of f){s.push(u);const h=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!h)St(c.children,u.pattern,n,s,r);else{const y=Mn([...s],r.length);r.push(y)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function Hn(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Bn(e,t){const n=new URL("http://sar"),s=E(c=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),c}},n,{equals:(c,f)=>c.href===f.href}),r=E(()=>s().pathname),i=E(()=>s().search,!0),l=E(()=>s().hash),o=E(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:pt(Ze(i,()=>kn(s())))}}function Vn(e,t="",n,s){const{signal:[r,i],utils:l={}}=En(e),o=l.parsePath||(P=>P),c=l.renderPath||(P=>P),f=l.beforeLeave||Cn(),u=fe("",t),h=void 0;if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&i({value:u,replace:!0,scroll:!1});const[y,w]=k(!1),v=async P=>{w(!0);try{await kt(P)}finally{w(!1)}},[x,T]=k(r().value),[N,L]=k(r().state),H=Bn(x,N),B=[],I={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(P){return fe(u,P)}};if(n)try{oe=I,I.data=n({data:void 0,params:{},location:H,navigate:ee(I)})}finally{oe=void 0}function D(P,g,p){O(()=>{if(typeof g=="number"){g&&(l.go?f.confirm(g,p)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:q,scroll:V,state:ne}={replace:!1,resolve:!0,scroll:!0,...p},U=q?P.resolvePath(g):fe("",g);if(U===void 0)throw new Error(`Path '${g}' is not a routable path`);if(B.length>=Rn)throw new Error("Too many redirects");const re=x();if((U!==re||ne!==N())&&!gt){if(f.confirm(U,p)){const Pt=B.push({value:re,replace:A,scroll:V,state:N()});v(()=>{T(U),L(ne),ct()}).then(()=>{B.length===Pt&&te({value:U,state:ne})})}}})}function ee(P){return P=P||X(be)||I,(g,p)=>D(P,g,p)}function te(P){const g=B[0];g&&((P.value!==g.value||P.state!==g.state)&&i({...P,replace:g.replace,scroll:g.scroll}),B.length=0)}M(()=>{const{value:P,state:g}=r();O(()=>{P!==x()&&v(()=>{T(P),L(g)})})});{let P=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const p=g.composedPath().find(re=>re instanceof Node&&re.nodeName.toUpperCase()==="A");if(!p||!p.hasAttribute("link"))return;const A=p.href;if(p.target||!A&&!p.hasAttribute("state"))return;const q=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||q&&q.includes("external"))return;const V=new URL(A);if(V.origin!==window.location.origin||u&&V.pathname&&!V.pathname.toLowerCase().startsWith(u.toLowerCase()))return;const ne=o(V.pathname+V.search+V.hash),U=p.getAttribute("state");g.preventDefault(),D(I,ne,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:U&&JSON.parse(U)})};Ne(["click"]),document.addEventListener("click",P),le(()=>document.removeEventListener("click",P))}return{base:I,out:h,location:H,isRouting:y,renderPath:c,parsePath:o,navigatorFactory:ee,beforeLeave:f}}function Un(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:c,element:f,preload:u,data:h}=s().route,y=E(()=>s().path);u&&u();const w={parent:t,pattern:c,get child(){return n()},path:y,params:r,data:t.data,outlet:f,resolvePath(v){return fe(i.path(),v,y())}};if(h)try{oe=w,w.data=h({data:t.data,params:r,location:l,navigate:o(w)})}finally{oe=void 0}return w}const Fn=ut("<a link>"),Dn=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||An(),o=Vn(l,s,r);return b(bt.Provider,{value:o,get children(){return e.children}})},Kn=e=>{const t=xe(),n=Re(),s=Oe(()=>e.children),r=E(()=>St(s(),mt(n.pattern,e.base||""),Wn)),i=E(()=>Hn(r(),t.location.pathname)),l=pt(()=>{const u=i(),h={};for(let y=0;y<u.length;y++)Object.assign(h,u[y].params);return h});t.out&&t.out.matches.push(i().map(({route:u,path:h,params:y})=>({originalPath:u.originalPath,pattern:u.pattern,path:h,params:y})));const o=[];let c;const f=E(Ze(i,(u,h,y)=>{let w=h&&u.length===h.length;const v=[];for(let x=0,T=u.length;x<T;x++){const N=h&&h[x],L=u[x];y&&N&&L.route.key===N.route.key?v[x]=y[x]:(w=!1,o[x]&&o[x](),Te(H=>{o[x]=H,v[x]=Un(t,v[x-1]||n,()=>f()[x+1],()=>i()[x],l)}))}return o.splice(u.length).forEach(x=>x()),y&&w?y:(c=v[0],v)}));return b(ke,{get when(){return f()&&c},keyed:!0,children:u=>b(be.Provider,{value:u,get children(){return u.outlet()}})})},Wn=()=>{const e=Re();return b(ke,{get when(){return e.child},keyed:!0,children:t=>b(be.Provider,{value:t,get children(){return t.outlet()}})})};function Xn(e){e=Me({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=It(e,["href","state","class","activeClass","inactiveClass","end"]),n=_n(()=>e.href),s=jn(n),r=qn(),i=E(()=>{const l=n();if(l===void 0)return!1;const o=K(l.split(/[?#]/,1)[0]).toLowerCase(),c=K(r.pathname).toLowerCase();return e.end?o===c:c.startsWith(o)});return(()=>{const l=ft(Fn);return G(l,Me(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),dt(),l})()}const Yn=[{component:He(()=>We(()=>import("./_...404_-9f14a250.js"),[])),path:"/*404"},{component:He(()=>We(()=>import("./index-163975a1.js"),["assets/index-163975a1.js","assets/index-fdb6b3cf.css"])),path:"/"}],zn=()=>Yn,vt=Q({}),ze=Xn,Gn=Kn,Jn="$FETCH",Qn=ut('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function Zn(e){return b(Vt,{fallback:(t,n)=>b(ke,{get when(){return!e.fallback},get fallback(){return E(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return b(er,{error:t})}}),get children(){return e.children}})}function er(e){return Ct(()=>console.error(e.error)),(()=>{const t=ft(Qn),n=t.firstChild,s=n.firstChild,r=s.nextSibling,i=r.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),s.style.setProperty("font-weight","bold"),me(s,()=>e.error.message),at(r,"click",ct,!0),r.style.setProperty("color","rgba(252, 165, 165)"),r.style.setProperty("background-color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),me(i,()=>e.error.stack),dt(),t})()}Ne(["click"]);const tr=!1,nr=!1;function rr(){return X(vt),[b(an,{}),nr,b(un,{get children(){return gt}}),tr]}function sr(e){return G(document.documentElement,e,!1,!0),e.children}function ir(e){return G(document.head,e,!1,!0),e.children}function or(e){{let t=Oe(()=>e.children);return G(document.body,e,!1,!0),me(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let s=n.filter(r=>!!r);return s.length?s:null}return n}return null},null,[...document.body.childNodes]),document.body}}function lr(){return b(sr,{lang:"en",get children(){return[b(ir,{get children(){return[b(wn,{children:"SolidStart - Bare"}),b(Ye,{charset:"utf-8"}),b(Ye,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),b(or,{get children(){return[b(Ft,{get children(){return b(Zn,{get children(){return[b(ze,{href:"/",children:"Index"}),b(ze,{href:"/about",children:"About"}),b(Gn,{get children(){return b(zn,{})}})]}})}}),b(rr,{})]}})]}})}const Ge=Object.values(Object.assign({}))[0],cr=Ge?Ge.default:void 0,ur=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Jn,fetch};function t(n){return b(Dn,n)}return b(vt.Provider,{value:e,get children(){return b(mn,{get children(){return b(t,{get base(){return"/wss"},data:cr,get children(){return b(lr,{})}})}})}})};gn(()=>b(ur,{}),document);export{vt as S,wn as T,fr as a,k as b,b as c,Ne as d,ft as g,me as i,le as o,dt as r,ut as t,X as u};
