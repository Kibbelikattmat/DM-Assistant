import{s as R,f as j,u as B,g as D,h as H,n as T}from"../chunks/scheduler.B38kYqKd.js";import{S as P,i as z,e as d,s as k,c as v,a as g,d as f,f as y,k as E,l as b,g as p,u as N,q as U,n as w,p as C,t as O,b as q,h as S}from"../chunks/index.UftirYqY.js";import{e as L}from"../chunks/each.D6YF6ztN.js";import{b as M}from"../chunks/paths.BwxU6EJV.js";const F=!0,Z=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));function A(c,e,n){const r=c.slice();return r[3]=e[n],r[5]=n,r}function G(c){let e,n=c[3].label+"",r;return{c(){e=d("li"),r=O(n),this.h()},l(i){e=v(i,"LI",{class:!0});var l=g(e);r=q(l,n),l.forEach(f),this.h()},h(){b(e,"class","crumb svelte-1bhg6r")},m(i,l){p(i,e,l),S(e,r)},p:T,d(i){i&&f(e)}}}function J(c){let e,n,r=c[3].label+"",i,l,a,m="›";return{c(){e=d("li"),n=d("a"),i=O(r),l=k(),a=d("li"),a.textContent=m,this.h()},l(s){e=v(s,"LI",{class:!0});var h=g(e);n=v(h,"A",{class:!0,id:!0,href:!0});var u=g(n);i=q(u,r),u.forEach(f),h.forEach(f),l=y(s),a=v(s,"LI",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),E(a)!=="svelte-16i7nlm"&&(a.textContent=m),this.h()},h(){b(n,"class","anchor svelte-1bhg6r"),b(n,"id",c[3].label),b(n,"href",""+((M?M:"")+c[3].link)),b(e,"class","crumb svelte-1bhg6r"),b(a,"class","crumb-separator svelte-1bhg6r"),b(a,"aria-hidden","")},m(s,h){p(s,e,h),S(e,n),S(n,i),p(s,l,h),p(s,a,h)},p:T,d(s){s&&(f(e),f(l),f(a))}}}function I(c){let e;function n(l,a){return l[5]<l[0].length?J:G}let i=n(c)(c);return{c(){i.c(),e=C()},l(l){i.l(l),e=C()},m(l,a){i.m(l,a),p(l,e,a)},p(l,a){i.p(l,a)},d(l){l&&f(e),i.d(l)}}}function K(c){let e,n,r,i='<source src="Bugbears.mp3" type="audio/mpeg"/>',l,a,m=L(c[0]),s=[];for(let t=0;t<m.length;t+=1)s[t]=I(A(c,m,t));const h=c[2].default,u=j(h,c,c[1],null);return{c(){e=d("ol");for(let t=0;t<s.length;t+=1)s[t].c();n=k(),r=d("audio"),r.innerHTML=i,l=k(),u&&u.c(),this.h()},l(t){e=v(t,"OL",{class:!0});var _=g(e);for(let o=0;o<s.length;o+=1)s[o].l(_);_.forEach(f),n=y(t),r=v(t,"AUDIO",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-1mq10ee"&&(r.innerHTML=i),l=y(t),u&&u.l(t),this.h()},h(){b(e,"class","breadcrumb svelte-1bhg6r"),r.controls=!0,r.autoplay=!0,b(r,"class","svelte-1bhg6r")},m(t,_){p(t,e,_);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);p(t,n,_),p(t,r,_),p(t,l,_),u&&u.m(t,_),a=!0},p(t,[_]){if(_&1){m=L(t[0]);let o;for(o=0;o<m.length;o+=1){const $=A(t,m,o);s[o]?s[o].p($,_):(s[o]=I($),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=m.length}u&&u.p&&(!a||_&2)&&B(u,h,t,t[1],a?H(h,t[1],_,null):D(t[1]),null)},i(t){a||(N(u,t),a=!0)},o(t){U(u,t),a=!1},d(t){t&&(f(e),f(n),f(r),f(l)),w(s,t),u&&u.d(t)}}}function Q(c,e,n){let{$$slots:r={},$$scope:i}=e;const l=[{label:"Session Planner",link:"/Session"},{label:"Rules Reference",link:"/Rules"},{label:"DM-ASSISTANT",link:""},{label:"Combat Assistant",link:"/Combat"},{label:"Main Menu",link:"/"}];return c.$$set=a=>{"$$scope"in a&&n(1,i=a.$$scope)},[l,i,r]}class x extends P{constructor(e){super(),z(this,e,Q,K,R,{})}}export{x as component,Z as universal};