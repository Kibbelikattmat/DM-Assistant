import{s as I,n as _,r as T,o as S}from"../chunks/scheduler.B38kYqKd.js";import{S as D,i as V,e as d,s as x,c as h,a as f,d as c,f as g,l as u,g as A,h as p,o as y,m as E}from"../chunks/index.UftirYqY.js";function q(o){let e,r,a,t,i,s,m,v;return{c(){e=d("div"),r=d("div"),a=x(),t=d("textarea"),i=x(),s=d("div"),this.h()},l(n){e=h(n,"DIV",{class:!0});var l=f(e);r=h(l,"DIV",{class:!0}),f(r).forEach(c),a=g(l),t=h(l,"TEXTAREA",{placeholder:!0,class:!0}),f(t).forEach(c),i=g(l),s=h(l,"DIV",{class:!0}),f(s).forEach(c),l.forEach(c),this.h()},h(){u(r,"class","decor-left svelte-1y7px7l"),u(t,"placeholder","Write your adventure here..."),u(t,"class","svelte-1y7px7l"),u(s,"class","decor-right svelte-1y7px7l"),u(e,"class","note-container svelte-1y7px7l")},m(n,l){A(n,e,l),p(e,r),p(e,a),p(e,t),y(t,o[0]),p(e,i),p(e,s),m||(v=[E(t,"input",o[2]),E(t,"input",o[1])],m=!0)},p(n,[l]){l&1&&y(t,n[0])},i:_,o:_,d(n){n&&c(e),m=!1,T(v)}}}function C(o,e,r){let a="";S(()=>{const s=localStorage.getItem("noteText");s&&r(0,a=s)});function t(s){r(0,a=s.target.value),localStorage.setItem("noteText",a)}function i(){a=this.value,r(0,a)}return[a,t,i]}class R extends D{constructor(e){super(),V(this,e,C,q,I,{})}}export{R as component};