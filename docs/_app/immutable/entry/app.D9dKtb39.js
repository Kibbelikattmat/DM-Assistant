const __vite__fileDeps=["../nodes/0.CttMjsEa.js","../chunks/scheduler.B38kYqKd.js","../chunks/index.UftirYqY.js","../chunks/each.D6YF6ztN.js","../chunks/paths.BwxU6EJV.js","../assets/0.BvmWCsnS.css","../nodes/1.mAKuiL4m.js","../chunks/entry.Xe3bHRbe.js","../nodes/2.Bkv9eWS0.js","../assets/2.Cm6k35bD.css","../nodes/3.Coz8R0ma.js","../assets/3.9Q1IV2zF.css","../nodes/4.CGkv3hX6.js","../assets/4.Bqf-cMP4.css","../nodes/5.BjIc9uOP.js","../assets/5.DS6JMf9T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as B,d as N,o as U,e as D,t as j}from"../chunks/scheduler.B38kYqKd.js";import{S as z,i as W,s as F,p,f as G,g as k,q as h,r as A,u as g,d as w,e as H,c as J,a as K,l as I,v as d,t as Q,b as X,j as Y,w as S,x as y,y as R,z as O,A as P,B as L}from"../chunks/index.UftirYqY.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},E=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const v=u[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Z,f||(_.as="script",_.crossOrigin=""),_.href=o,r&&_.setAttribute("nonce",r),document.head.appendChild(_),f)return new Promise((b,v)=>{_.addEventListener("load",b),_.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(u=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=u,window.dispatchEvent(t),!t.defaultPrevented)throw u})},re={};function $(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=y(s,u(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){S();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,u(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function u(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=y(s,u(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){S();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,u(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function u(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=y(s,u(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,r){e&&P(e,t,r),k(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){S();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,u(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&L(e,t)}}}function V(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(w),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){k(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function C(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,u;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&V(a);return{c(){n.c(),i=F(),f&&f.c(),s=p()},l(l){n.l(l),i=G(l),f&&f.l(l),s=p()},m(l,m){r[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,s,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?r[e].p(l,m):(S(),h(r[_],1,1,()=>{r[_]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=V(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){u||(g(n),u=!0)},o(l){h(n),u=!1},d(l){l&&(w(i),w(s)),r[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;N(i.page.notify);let l=!1,m=!1,_=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function q(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,u,r,o,f,l,m,_,i,s,b,v,q]}class oe extends z{constructor(e){super(),W(this,e,ne,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>E(()=>import("../nodes/0.CttMjsEa.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>E(()=>import("../nodes/1.mAKuiL4m.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>E(()=>import("../nodes/2.Bkv9eWS0.js"),__vite__mapDeps([8,1,2,4,9]),import.meta.url),()=>E(()=>import("../nodes/3.Coz8R0ma.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>E(()=>import("../nodes/4.CGkv3hX6.js"),__vite__mapDeps([12,1,2,3,13]),import.meta.url),()=>E(()=>import("../nodes/5.BjIc9uOP.js"),__vite__mapDeps([14,1,2,15]),import.meta.url)],le=[],fe={"/":[2],"/Combat":[3],"/Rules":[4],"/Session":[5]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
