import{s as x,n as f,f as S}from"../chunks/scheduler.4f32addc.js";import{S as j,i as q,g as _,m as d,s as y,h as g,j as h,n as v,f as u,c as C,a as m,x as $,o as E}from"../chunks/index.390a2d35.js";import{d as H}from"../chunks/singletons.286e78ff.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return P().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=d(r),n=y(),i=_("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=C(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:f,o:f,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return S(s,k,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),q(this,t,z,w,x,{})}};export{F as component};
