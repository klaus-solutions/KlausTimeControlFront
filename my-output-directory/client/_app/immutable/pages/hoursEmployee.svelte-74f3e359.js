var ne=Object.defineProperty;var X=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var Y=(s,e,t)=>e in s?ne(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Z=(s,e)=>{for(var t in e||(e={}))oe.call(e,t)&&Y(s,t,e[t]);if(X)for(var t of X(e))le.call(e,t)&&Y(s,t,e[t]);return s};import{S as ie,i as ue,s as de,e as v,t as W,k as A,w as P,c as g,a as b,h as j,d as f,m as C,x as U,b as h,g as K,M as l,y as F,o as L,p as ce,q as O,j as fe,B as G,v as pe,K as me,n as _e,E as N,T as ee,U as te,I as he,V as ve,W as se}from"../chunks/index-19f775f8.js";import{f as ae,h as ge}from"../chunks/hours-fb0dbe42.js";import{f as be}from"../chunks/tasks-dc514f39.js";import{I as re}from"../chunks/inputs-cc0c41a8.js";import{T as ye}from"../chunks/Table-7b25a902.js";import{u as ke}from"../chunks/login-868b565c.js";import"../chunks/index-3cd74ee4.js";import"../chunks/inline-svg-44d6d57a.js";function we(s){let e,t,u;return{c(){e=v("div"),t=v("span"),u=W(`"Currently you do not have assigned tasks, therefore you will not be able to record hours
					worked"`),this.h()},l(a){e=g(a,"DIV",{class:!0});var c=b(e);t=g(c,"SPAN",{class:!0});var n=b(t);u=j(n,`"Currently you do not have assigned tasks, therefore you will not be able to record hours
					worked"`),n.forEach(f),c.forEach(f),this.h()},h(){h(t,"class","text-base text-primary font-bold text-center"),h(e,"class","flex justify-center")},m(a,c){K(a,e,c),l(e,t),l(t,u)},p:N,i:N,o:N,d(a){a&&f(e)}}}function Ee(s){let e,t,u,a,c,n,r,d,I,p,_,y,k,x,H;function M(o){s[6](o)}let D={class:"mb-4",label:"Start",name:"start",type:"number",minLength:"1",required:!0};s[0].start!==void 0&&(D.value=s[0].start),u=new re({props:D}),ee.push(()=>te(u,"value",M));function V(o){s[7](o)}let $={class:"mb-4",label:"End",name:"end",type:"number",minLength:"1",required:!0};return s[0].end!==void 0&&($.value=s[0].end),r=new re({props:$}),ee.push(()=>te(r,"value",V)),{c(){e=v("form"),t=v("div"),P(u.$$.fragment),c=A(),n=v("div"),P(r.$$.fragment),I=A(),p=v("div"),_=v("button"),y=W("Add"),this.h()},l(o){e=g(o,"FORM",{class:!0});var w=b(e);t=g(w,"DIV",{class:!0});var E=b(t);U(u.$$.fragment,E),E.forEach(f),c=C(w),n=g(w,"DIV",{class:!0});var T=b(n);U(r.$$.fragment,T),T.forEach(f),I=C(w),p=g(w,"DIV",{class:!0});var i=b(p);_=g(i,"BUTTON",{class:!0,type:!0});var m=b(_);y=j(m,"Add"),m.forEach(f),i.forEach(f),w.forEach(f),this.h()},h(){h(t,"class","col-span-1 md:col-span-6"),h(n,"class","col-span-1 md:col-span-6"),h(_,"class","bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg"),h(_,"type","submit"),h(p,"class","col-span-1 md:col-span-12 flex justify-center"),h(e,"class","grid grid-cols-1 md:grid-cols-12 gap-x-8")},m(o,w){K(o,e,w),l(e,t),F(u,t,null),l(e,c),l(e,n),F(r,n,null),l(e,I),l(e,p),l(p,_),l(_,y),k=!0,x||(H=he(e,"submit",ve(s[5])),x=!0)},p(o,w){const E={};!a&&w&1&&(a=!0,E.value=o[0].start,se(()=>a=!1)),u.$set(E);const T={};!d&&w&1&&(d=!0,T.value=o[0].end,se(()=>d=!1)),r.$set(T)},i(o){k||(O(u.$$.fragment,o),O(r.$$.fragment,o),k=!0)},o(o){L(u.$$.fragment,o),L(r.$$.fragment,o),k=!1},d(o){o&&f(e),G(u),G(r),x=!1,H()}}}function He(s){let e,t,u,a,c,n,r,d,I,p,_,y,k,x,H,M,D=(s[2]?s[2].totalHoursWorked:"")+"",V,$,o;const w=[Ee,we],E=[];function T(i,m){return i[1]?0:1}return r=T(s),d=E[r]=w[r](s),y=new ye({props:{config:s[4],results:s[3]}}),{c(){e=v("div"),t=v("div"),u=v("h1"),a=W("My Hours"),c=A(),n=v("div"),d.c(),I=A(),p=v("div"),_=v("div"),P(y.$$.fragment),k=A(),x=v("div"),H=v("p"),M=W("Totals Hours Worked: "),V=W(D),$=W("h"),this.h()},l(i){e=g(i,"DIV",{class:!0});var m=b(e);t=g(m,"DIV",{class:!0});var q=b(t);u=g(q,"H1",{class:!0});var S=b(u);a=j(S,"My Hours"),S.forEach(f),q.forEach(f),c=C(m),n=g(m,"DIV",{class:!0});var z=b(n);d.l(z),z.forEach(f),I=C(m),p=g(m,"DIV",{class:!0});var R=b(p);_=g(R,"DIV",{class:!0});var J=b(_);U(y.$$.fragment,J),J.forEach(f),k=C(R),x=g(R,"DIV",{class:!0});var Q=b(x);H=g(Q,"P",{class:!0});var B=b(H);M=j(B,"Totals Hours Worked: "),V=j(B,D),$=j(B,"h"),B.forEach(f),Q.forEach(f),R.forEach(f),m.forEach(f),this.h()},h(){h(u,"class","text-secondary text-3xl font-bold"),h(t,"class","flex justify-start my-12 pb-6 border-b-[1px] border-tertiary/30"),h(n,"class","w-full bg-white rounded-xl p-6 mb-6 shadow-lg"),h(_,"class","relative overflow-x-auto "),h(H,"class","text-center text-2xl font-bold text-secondary"),h(x,"class","mt-4"),h(p,"class","w-full bg-white rounded-xl p-6 shadow-lg mb-6"),h(e,"class","container md:max-w-5xl px-6 mx-auto h-max")},m(i,m){K(i,e,m),l(e,t),l(t,u),l(u,a),l(e,c),l(e,n),E[r].m(n,null),l(e,I),l(e,p),l(p,_),F(y,_,null),l(p,k),l(p,x),l(x,H),l(H,M),l(H,V),l(H,$),o=!0},p(i,[m]){let q=r;r=T(i),r===q?E[r].p(i,m):(_e(),L(E[q],1,1,()=>{E[q]=null}),ce(),d=E[r],d?d.p(i,m):(d=E[r]=w[r](i),d.c()),O(d,1),d.m(n,null));const S={};m&8&&(S.results=i[3]),y.$set(S),(!o||m&4)&&D!==(D=(i[2]?i[2].totalHoursWorked:"")+"")&&fe(V,D)},i(i){o||(O(d),O(y.$$.fragment,i),o=!0)},o(i){L(d),L(y.$$.fragment,i),o=!1},d(i){i&&f(e),E[r].d(),G(y)}}}function xe(s,e,t){let a={start:void 0,end:void 0},c="",n={},r={},d=[],I={param:"Hour",actions:!1,route:"",fields:[{name:"Grupo 1",type:"group",align:"start",keys:[{name:"Hours Worked",type:"titleHour",align:"start",key:"hours_worked"}]},{name:"Start",type:"Hour",key:"start",align:"center"},{name:"End",type:"Hour",key:"end",align:"center"},{name:"Task",type:"twoLevels",key:"task",key2:"title",align:"start"},{name:"Date",type:"Date",key:"createdAt",align:"end"}]};pe(async()=>{t(2,c=await ae()),c?t(3,d=await c.Registers):t(3,d=[]),r=me(ke),t(1,n=await be(r.body._id))});async function p(){await ge(a),t(0,a={}),t(2,c=await ae()),t(3,d=await c.Registers)}function _(k){s.$$.not_equal(a.start,k)&&(a.start=k,t(0,a),t(1,n))}function y(k){s.$$.not_equal(a.end,k)&&(a.end=k,t(0,a),t(1,n))}return s.$$.update=()=>{s.$$.dirty&3&&t(0,a=Object.assign(a,Z({},n&&{task:n._id})))},[a,n,c,d,I,p,_,y]}class Se extends ie{constructor(e){super(),ue(this,e,xe,He,de,{})}}export{Se as default};
