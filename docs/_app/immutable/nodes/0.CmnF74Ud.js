import{s as q,f as R,u as j,g as B,h as D,n as T}from"../chunks/scheduler.B38kYqKd.js";import{S as H,i as P,e as p,s as y,c as v,a as k,d as _,f as g,k as x,l as b,g as d,u as z,q as N,n as U,p as C,t as E,b as O,h as S}from"../chunks/index.UftirYqY.js";import{e as L}from"../chunks/each.D6YF6ztN.js";import{b as M}from"../chunks/paths.BXGWWobZ.js";const w=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:w},Symbol.toStringTag,{value:"Module"}));function A(c,e,r){const n=c.slice();return n[3]=e[r],n[5]=r,n}function F(c){let e,r=c[3].label+"",n;return{c(){e=p("li"),n=E(r),this.h()},l(i){e=v(i,"LI",{class:!0});var l=k(e);n=O(l,r),l.forEach(_),this.h()},h(){b(e,"class","crumb svelte-18hbfdx")},m(i,l){d(i,e,l),S(e,n)},p:T,d(i){i&&_(e)}}}function G(c){let e,r,n=c[3].label+"",i,l,a,m="›";return{c(){e=p("li"),r=p("a"),i=E(n),l=y(),a=p("li"),a.textContent=m,this.h()},l(s){e=v(s,"LI",{class:!0});var h=k(e);r=v(h,"A",{class:!0,id:!0,href:!0});var u=k(r);i=O(u,n),u.forEach(_),h.forEach(_),l=g(s),a=v(s,"LI",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),x(a)!=="svelte-16i7nlm"&&(a.textContent=m),this.h()},h(){b(r,"class","anchor svelte-18hbfdx"),b(r,"id",c[3].label),b(r,"href",""+((M?M:"")+c[3].link)),b(e,"class","crumb svelte-18hbfdx"),b(a,"class","crumb-separator svelte-18hbfdx"),b(a,"aria-hidden","")},m(s,h){d(s,e,h),S(e,r),S(r,i),d(s,l,h),d(s,a,h)},p:T,d(s){s&&(_(e),_(l),_(a))}}}function I(c){let e;function r(l,a){return l[5]<l[0].length?G:F}let i=r(c)(c);return{c(){i.c(),e=C()},l(l){i.l(l),e=C()},m(l,a){i.m(l,a),d(l,e,a)},p(l,a){i.p(l,a)},d(l){l&&_(e),i.d(l)}}}function J(c){let e,r,n,i='<source src="Bugbears.mp3" type="audio/mpeg"/>',l,a,m=L(c[0]),s=[];for(let t=0;t<m.length;t+=1)s[t]=I(A(c,m,t));const h=c[2].default,u=R(h,c,c[1],null);return{c(){e=p("ol");for(let t=0;t<s.length;t+=1)s[t].c();r=y(),n=p("audio"),n.innerHTML=i,l=y(),u&&u.c(),this.h()},l(t){e=v(t,"OL",{class:!0});var f=k(e);for(let o=0;o<s.length;o+=1)s[o].l(f);f.forEach(_),r=g(t),n=v(t,"AUDIO",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-1mq10ee"&&(n.innerHTML=i),l=g(t),u&&u.l(t),this.h()},h(){b(e,"class","breadcrumb svelte-18hbfdx"),n.controls=!0,n.autoplay=!0,b(n,"class","svelte-18hbfdx")},m(t,f){d(t,e,f);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);d(t,r,f),d(t,n,f),d(t,l,f),u&&u.m(t,f),a=!0},p(t,[f]){if(f&1){m=L(t[0]);let o;for(o=0;o<m.length;o+=1){const $=A(t,m,o);s[o]?s[o].p($,f):(s[o]=I($),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=m.length}u&&u.p&&(!a||f&2)&&j(u,h,t,t[1],a?D(h,t[1],f,null):B(t[1]),null)},i(t){a||(z(u,t),a=!0)},o(t){N(u,t),a=!1},d(t){t&&(_(e),_(r),_(n),_(l)),U(s,t),u&&u.d(t)}}}function K(c,e,r){let{$$slots:n={},$$scope:i}=e;const l=[{label:"Session Planner",link:"/Session"},{label:"Rules Reference",link:"/Rules"},{label:"DM-ASSISTANT",link:""},{label:"Combat Assistant",link:"/Combat"},{label:"Main Menu",link:"/"}];return c.$$set=a=>{"$$scope"in a&&r(1,i=a.$$scope)},[l,i,n]}class Z extends H{constructor(e){super(),P(this,e,K,J,q,{})}}export{Z as component,Y as universal};
