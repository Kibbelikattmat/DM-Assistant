import{s as E,e as O,u as R,g as j,f as B,n as A}from"../chunks/scheduler.BfJEPAwo.js";import{S as D,i as H,e as b,s as y,c as k,a as v,d as f,f as g,k as I,l as p,g as d,r as P,p as z,n as N,o as $,t as T,b as x,h as S}from"../chunks/index.CModtRE8.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import"../chunks/paths.BhLh_5-u.js";const U=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function L(c,e,r){const n=c.slice();return n[3]=e[r],n[5]=r,n}function w(c){let e,r=c[3].label+"",n;return{c(){e=b("li"),n=T(r),this.h()},l(i){e=k(i,"LI",{class:!0});var l=v(e);n=x(l,r),l.forEach(f),this.h()},h(){p(e,"class","crumb svelte-1a02xkq")},m(i,l){d(i,e,l),S(e,n)},p:A,d(i){i&&f(e)}}}function F(c){let e,r,n=c[3].label+"",i,l,a,m="›";return{c(){e=b("li"),r=b("a"),i=T(n),l=y(),a=b("li"),a.textContent=m,this.h()},l(s){e=k(s,"LI",{class:!0});var h=v(e);r=k(h,"A",{class:!0,id:!0,href:!0});var u=v(r);i=x(u,n),u.forEach(f),h.forEach(f),l=g(s),a=k(s,"LI",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),I(a)!=="svelte-16i7nlm"&&(a.textContent=m),this.h()},h(){p(r,"class","anchor svelte-1a02xkq"),p(r,"id",c[3].label),p(r,"href",c[3].link),p(e,"class","crumb svelte-1a02xkq"),p(a,"class","crumb-separator svelte-1a02xkq"),p(a,"aria-hidden","")},m(s,h){d(s,e,h),S(e,r),S(r,i),d(s,l,h),d(s,a,h)},p:A,d(s){s&&(f(e),f(l),f(a))}}}function M(c){let e;function r(l,a){return l[5]<l[0].length?F:w}let i=r(c)(c);return{c(){i.c(),e=$()},l(l){i.l(l),e=$()},m(l,a){i.m(l,a),d(l,e,a)},p(l,a){i.p(l,a)},d(l){l&&f(e),i.d(l)}}}function G(c){let e,r,n,i='<source src="Bugbears.mp3" type="audio/mpeg"/>',l,a,m=C(c[0]),s=[];for(let t=0;t<m.length;t+=1)s[t]=M(L(c,m,t));const h=c[2].default,u=O(h,c,c[1],null);return{c(){e=b("ol");for(let t=0;t<s.length;t+=1)s[t].c();r=y(),n=b("audio"),n.innerHTML=i,l=y(),u&&u.c(),this.h()},l(t){e=k(t,"OL",{class:!0});var _=v(e);for(let o=0;o<s.length;o+=1)s[o].l(_);_.forEach(f),r=g(t),n=k(t,"AUDIO",{class:!0,"data-svelte-h":!0}),I(n)!=="svelte-1mq10ee"&&(n.innerHTML=i),l=g(t),u&&u.l(t),this.h()},h(){p(e,"class","breadcrumb svelte-1a02xkq"),n.controls=!0,n.autoplay=!0,p(n,"class","svelte-1a02xkq")},m(t,_){d(t,e,_);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);d(t,r,_),d(t,n,_),d(t,l,_),u&&u.m(t,_),a=!0},p(t,[_]){if(_&1){m=C(t[0]);let o;for(o=0;o<m.length;o+=1){const q=L(t,m,o);s[o]?s[o].p(q,_):(s[o]=M(q),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=m.length}u&&u.p&&(!a||_&2)&&R(u,h,t,t[1],a?B(h,t[1],_,null):j(t[1]),null)},i(t){a||(P(u,t),a=!0)},o(t){z(u,t),a=!1},d(t){t&&(f(e),f(r),f(n),f(l)),N(s,t),u&&u.d(t)}}}function J(c,e,r){let{$$slots:n={},$$scope:i}=e;const l=[{label:"Session Planner",link:"/Session"},{label:"Rules Reference",link:"/Rules"},{label:"DM-ASSISTANT"},{label:"Combat Assistant",link:"/Combat"},{label:"Main Menu",link:"/"}];return c.$$set=a=>{"$$scope"in a&&r(1,i=a.$$scope)},[l,i,n]}class Y extends D{constructor(e){super(),H(this,e,J,G,E,{})}}export{Y as component,X as universal};
