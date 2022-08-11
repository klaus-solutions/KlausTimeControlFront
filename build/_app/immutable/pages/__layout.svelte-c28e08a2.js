import{F as mt,G as ht,S as qe,i as He,s as je,H as ct,e as Ne,b as J,I as ie,g as we,t as j,d as ye,f as S,h as f,J as ke,o as _t,K as gt,l as b,w as z,a as U,L as Ae,m as $,n as g,x as G,c as L,M as Ue,p as c,N as Le,O as u,y as M,B as F,P as ft,r as Z,u as ee,Q as Pe,v as pe,R as pt,T as ge,U as ve,V as vt,W as be,E as ze,X as bt,Y as We,Z as $t,_ as wt,$ as yt,a0 as kt}from"../chunks/index-213b7a90.js";import{I as re}from"../chunks/inline-svg-eb4ea3fd.js";import{c as Et,a as xt,f as It,b as Vt}from"../chunks/hours-62e4a776.js";import{g as dt}from"../chunks/navigation-75a744b1.js";import{u as Ee,l as Dt,a as Se,s as Re,b as Be}from"../chunks/login-3638f510.js";import{I as $e}from"../chunks/inputs-abead974.js";import"../chunks/index-01a17379.js";import"../chunks/singletons-eca981c1.js";function Qe(r,{delay:e=0,duration:t=400,easing:s=mt}={}){const l=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:s,css:a=>`opacity: ${a*l}`}}const Tt=()=>{const r=ht("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},St={subscribe(r){return Tt().page.subscribe(r)}};function Xe(r,e,t){const s=r.slice();return s[15]=e[t],s}function Ye(r,e,t){const s=r.slice();return s[15]=e[t],s}function jt(r){let e,t,s,l,a,n,o,i,_,d,y,v,N,I,x,k,h,E,p;l=new re({props:{class:"text-white w-[50px] h-fit drop-shadow-lg",src:"/icons/chart-line-solid.svg"}}),v=new re({props:{class:"cursor-pointer text-white max-w-[23px] h-[23px] absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-[90%]",src:"/icons/right-from-bracket-solid.svg"}}),v.$on("click",r[6]);let T=r[1],m=[];for(let w=0;w<T.length;w+=1)m[w]=tt(Xe(r,T,w));const P=w=>j(m[w],1,1,()=>{m[w]=null});return{c(){e=b("div"),t=b("div"),s=b("a"),z(l.$$.fragment),a=U(),n=b("button"),o=Ae("svg"),i=Ae("line"),_=Ae("line"),d=Ae("line"),y=U(),z(v.$$.fragment),N=U(),I=b("aside"),x=b("nav"),k=b("ul");for(let w=0;w<m.length;w+=1)m[w].c();this.h()},l(w){e=$(w,"DIV",{class:!0});var V=g(e);t=$(V,"DIV",{class:!0});var D=g(t);s=$(D,"A",{class:!0,href:!0});var Q=g(s);G(l.$$.fragment,Q),Q.forEach(f),a=L(D),n=$(D,"BUTTON",{class:!0});var C=g(n);o=Ue(C,"svg",{width:!0,height:!0,class:!0});var B=g(o);i=Ue(B,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(i).forEach(f),_=Ue(B,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(_).forEach(f),d=Ue(B,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(d).forEach(f),B.forEach(f),C.forEach(f),y=L(D),G(v.$$.fragment,D),D.forEach(f),N=L(V),I=$(V,"ASIDE",{class:!0});var te=g(I);x=$(te,"NAV",{class:!0});var R=g(x);k=$(R,"UL",{});var K=g(k);for(let X=0;X<m.length;X+=1)m[X].l(K);K.forEach(f),R.forEach(f),te.forEach(f),V.forEach(f),this.h()},h(){c(s,"class","absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2"),c(s,"href","/"),c(i,"id","top"),c(i,"x1","0"),c(i,"y1","2"),c(i,"x2","32"),c(i,"y2","2"),c(i,"class","svelte-1krymwh"),c(_,"id","middle"),c(_,"x1","0"),c(_,"y1","12"),c(_,"x2","24"),c(_,"y2","12"),c(_,"class","svelte-1krymwh"),c(d,"id","bottom"),c(d,"x1","0"),c(d,"y1","22"),c(d,"x2","32"),c(d,"y2","22"),c(d,"class","svelte-1krymwh"),c(o,"width","32"),c(o,"height","24"),c(o,"class","svelte-1krymwh"),c(n,"class","text-white cursor-pointer mr-4 border-none focus:outline-none absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-[10%] svelte-1krymwh"),Le(n,"open",r[0]),c(t,"class","bg-primary w-full min-h-[70px] fixed shadow-md"),c(x,"class","py-12 px-4 sm:px-6"),c(I,"class","fixed w-10/12 bg-white border-r-2 shadow-lg h-[calc(100%-70px)] bottom-0  svelte-1krymwh"),Le(I,"openA",r[0]),c(e,"class","w-full z-50")},m(w,V){J(w,e,V),u(e,t),u(t,s),M(l,s,null),u(t,a),u(t,n),u(n,o),u(o,i),u(o,_),u(o,d),u(t,y),M(v,t,null),u(e,N),u(e,I),u(I,x),u(x,k);for(let D=0;D<m.length;D+=1)m[D].m(k,null);h=!0,E||(p=ie(n,"click",r[12]),E=!0)},p(w,V){if(V&1&&Le(n,"open",w[0]),V&55){T=w[1];let D;for(D=0;D<T.length;D+=1){const Q=Xe(w,T,D);m[D]?(m[D].p(Q,V),S(m[D],1)):(m[D]=tt(Q),m[D].c(),S(m[D],1),m[D].m(k,null))}for(we(),D=T.length;D<m.length;D+=1)P(D);ye()}V&1&&Le(I,"openA",w[0])},i(w){if(!h){S(l.$$.fragment,w),S(v.$$.fragment,w);for(let V=0;V<T.length;V+=1)S(m[V]);h=!0}},o(w){j(l.$$.fragment,w),j(v.$$.fragment,w),m=m.filter(Boolean);for(let V=0;V<m.length;V+=1)j(m[V]);h=!1},d(w){w&&f(e),F(l),F(v),ft(m,w),E=!1,p()}}}function At(r){let e,t,s,l,a,n,o,i,_,d,y,v,N,I,x,k,h;l=new re({props:{class:"text-primary w-[75px] h-fit drop-shadow-lg",src:"/icons/chart-line-solid.svg"}});let E=r[1],p=[];for(let m=0;m<E.length;m+=1)p[m]=rt(Ye(r,E,m));const T=m=>j(p[m],1,1,()=>{p[m]=null});return y=new re({props:{class:"text-primary max-w-[23px] h-[23px] ",src:"/icons/right-from-bracket-solid.svg"}}),{c(){e=b("nav"),t=b("div"),s=b("a"),z(l.$$.fragment),a=U(),n=b("nav"),o=b("ul");for(let m=0;m<p.length;m+=1)p[m].c();i=U(),_=b("div"),d=b("div"),z(y.$$.fragment),v=U(),N=b("h2"),I=Z("Sign Out"),this.h()},l(m){e=$(m,"NAV",{class:!0});var P=g(e);t=$(P,"DIV",{class:!0});var w=g(t);s=$(w,"A",{href:!0});var V=g(s);G(l.$$.fragment,V),V.forEach(f),w.forEach(f),a=L(P),n=$(P,"NAV",{class:!0});var D=g(n);o=$(D,"UL",{});var Q=g(o);for(let R=0;R<p.length;R+=1)p[R].l(Q);Q.forEach(f),D.forEach(f),i=L(P),_=$(P,"DIV",{class:!0});var C=g(_);d=$(C,"DIV",{class:!0});var B=g(d);G(y.$$.fragment,B),B.forEach(f),v=L(C),N=$(C,"H2",{class:!0});var te=g(N);I=ee(te,"Sign Out"),te.forEach(f),C.forEach(f),P.forEach(f),this.h()},h(){c(s,"href","/"),c(t,"class","flex justify-center mt-6"),c(n,"class","py-12 px-6"),c(d,"class","flex ml-6 mr-4 items-center justify-center w-[25px]"),c(N,"class","text-gray-400 text-left text-sm font-medium py-1"),c(_,"class","mt-auto px-6 flex items-center cursor-pointer"),c(e,"class","bg-white h-full w-[290px] relative py-12 px-2 flex flex-col ")},m(m,P){J(m,e,P),u(e,t),u(t,s),M(l,s,null),u(e,a),u(e,n),u(n,o);for(let w=0;w<p.length;w+=1)p[w].m(o,null);u(e,i),u(e,_),u(_,d),M(y,d,null),u(_,v),u(_,N),u(N,I),x=!0,k||(h=ie(_,"click",r[6]),k=!0)},p(m,P){if(P&54){E=m[1];let w;for(w=0;w<E.length;w+=1){const V=Ye(m,E,w);p[w]?(p[w].p(V,P),S(p[w],1)):(p[w]=rt(V),p[w].c(),S(p[w],1),p[w].m(o,null))}for(we(),w=E.length;w<p.length;w+=1)T(w);ye()}},i(m){if(!x){S(l.$$.fragment,m);for(let P=0;P<E.length;P+=1)S(p[P]);S(y.$$.fragment,m),x=!0}},o(m){j(l.$$.fragment,m),p=p.filter(Boolean);for(let P=0;P<p.length;P+=1)j(p[P]);j(y.$$.fragment,m),x=!1},d(m){m&&f(e),F(l),ft(p,m),F(y),k=!1,h()}}}function Ze(r){let e,t,s;return{c(){e=b("div"),t=b("p"),s=Z(r[4]),this.h()},l(l){e=$(l,"DIV",{class:!0});var a=g(e);t=$(a,"P",{class:!0});var n=g(t);s=ee(n,r[4]),n.forEach(f),a.forEach(f),this.h()},h(){c(t,"class","text-[0.6rem]"),c(e,"class","text-white bg-primary rounded-full ml-auto mr-6 w-[15px] h-[15px] flex justify-center items-center shadow-btnCount")},m(l,a){J(l,e,a),u(e,t),u(t,s)},p(l,a){a&16&&pe(s,l[4])},d(l){l&&f(e)}}}function et(r){let e,t,s;return{c(){e=b("div"),t=b("p"),s=Z(r[5]),this.h()},l(l){e=$(l,"DIV",{class:!0});var a=g(e);t=$(a,"P",{class:!0});var n=g(t);s=ee(n,r[5]),n.forEach(f),a.forEach(f),this.h()},h(){c(t,"class","text-[0.6rem]"),c(e,"class","text-white bg-primary rounded-full ml-auto mr-6 w-[15px] h-[15px] flex justify-center items-center shadow-btnCount")},m(l,a){J(l,e,a),u(e,t),u(t,s)},p(l,a){a&32&&pe(s,l[5])},d(l){l&&f(e)}}}function tt(r){let e,t,s,l,a,n,o=r[15].title+"",i,_,d,y,v,N,I,x,k;l=new re({props:{class:" max-w-[23px] h-[23px] ",src:`/icons/${r[15].icon}.svg`}});let h=r[15].to==="/hoursEmployee"&&Ze(r),E=r[15].to==="/hoursTeam"&&et(r);return{c(){e=b("li"),t=b("a"),s=b("div"),z(l.$$.fragment),a=U(),n=b("h2"),i=Z(o),_=U(),h&&h.c(),d=U(),E&&E.c(),N=U(),this.h()},l(p){e=$(p,"LI",{class:!0});var T=g(e);t=$(T,"A",{class:!0,href:!0});var m=g(t);s=$(m,"DIV",{class:!0});var P=g(s);G(l.$$.fragment,P),P.forEach(f),a=L(m),n=$(m,"H2",{class:!0});var w=g(n);i=ee(w,o),w.forEach(f),_=L(m),h&&h.l(m),d=L(m),E&&E.l(m),m.forEach(f),N=L(T),T.forEach(f),this.h()},h(){c(s,"class","flex ml-6 mr-4 items-center justify-center w-[30px]"),c(n,"class","text-left text-sm font-medium py-1"),c(t,"class",y=Pe(`flex items-center rounded-md py-2  ${r[2]===r[15].to?"text-primary bg-selago border-l-[3px] border-primary":"text-tertiary border-l-[3px] border-transparent"}`)+" svelte-1krymwh"),c(t,"href",v=r[15].to),c(e,"class","pb-4")},m(p,T){J(p,e,T),u(e,t),u(t,s),M(l,s,null),u(t,a),u(t,n),u(n,i),u(t,_),h&&h.m(t,null),u(t,d),E&&E.m(t,null),u(e,N),I=!0,x||(k=ie(t,"click",r[13]),x=!0)},p(p,T){const m={};T&2&&(m.src=`/icons/${p[15].icon}.svg`),l.$set(m),(!I||T&2)&&o!==(o=p[15].title+"")&&pe(i,o),p[15].to==="/hoursEmployee"?h?h.p(p,T):(h=Ze(p),h.c(),h.m(t,d)):h&&(h.d(1),h=null),p[15].to==="/hoursTeam"?E?E.p(p,T):(E=et(p),E.c(),E.m(t,null)):E&&(E.d(1),E=null),(!I||T&6&&y!==(y=Pe(`flex items-center rounded-md py-2  ${p[2]===p[15].to?"text-primary bg-selago border-l-[3px] border-primary":"text-tertiary border-l-[3px] border-transparent"}`)+" svelte-1krymwh"))&&c(t,"class",y),(!I||T&2&&v!==(v=p[15].to))&&c(t,"href",v)},i(p){I||(S(l.$$.fragment,p),I=!0)},o(p){j(l.$$.fragment,p),I=!1},d(p){p&&f(e),F(l),h&&h.d(),E&&E.d(),x=!1,k()}}}function st(r){let e,t,s;return{c(){e=b("div"),t=b("p"),s=Z(r[4]),this.h()},l(l){e=$(l,"DIV",{class:!0});var a=g(e);t=$(a,"P",{class:!0});var n=g(t);s=ee(n,r[4]),n.forEach(f),a.forEach(f),this.h()},h(){c(t,"class","text-[0.6rem]"),c(e,"class","text-white bg-primary rounded-full ml-auto mr-6 w-[15px] h-[15px] flex justify-center items-center shadow-btnCount")},m(l,a){J(l,e,a),u(e,t),u(t,s)},p(l,a){a&16&&pe(s,l[4])},d(l){l&&f(e)}}}function lt(r){let e,t,s;return{c(){e=b("div"),t=b("p"),s=Z(r[5]),this.h()},l(l){e=$(l,"DIV",{class:!0});var a=g(e);t=$(a,"P",{class:!0});var n=g(t);s=ee(n,r[5]),n.forEach(f),a.forEach(f),this.h()},h(){c(t,"class","text-[0.6rem]"),c(e,"class","text-white bg-primary rounded-full ml-auto mr-6 w-[15px] h-[15px] flex justify-center items-center shadow-btnCount")},m(l,a){J(l,e,a),u(e,t),u(t,s)},p(l,a){a&32&&pe(s,l[5])},d(l){l&&f(e)}}}function rt(r){let e,t,s,l,a,n,o=r[15].title+"",i,_,d,y,v,N,I;l=new re({props:{class:" max-w-[23px] h-[23px] ",src:`/icons/${r[15].icon}.svg`}});let x=r[15].to==="/hoursEmployee"&&st(r),k=r[15].to==="/hoursTeam"&&lt(r);return{c(){e=b("li"),t=b("a"),s=b("div"),z(l.$$.fragment),a=U(),n=b("h2"),i=Z(o),_=U(),x&&x.c(),d=U(),k&&k.c(),N=U(),this.h()},l(h){e=$(h,"LI",{class:!0});var E=g(e);t=$(E,"A",{class:!0,href:!0});var p=g(t);s=$(p,"DIV",{class:!0});var T=g(s);G(l.$$.fragment,T),T.forEach(f),a=L(p),n=$(p,"H2",{class:!0});var m=g(n);i=ee(m,o),m.forEach(f),_=L(p),x&&x.l(p),d=L(p),k&&k.l(p),p.forEach(f),N=L(E),E.forEach(f),this.h()},h(){c(s,"class","flex ml-6 mr-4 items-center justify-center w-[30px]"),c(n,"class","text-left text-sm font-medium py-1"),c(t,"class",y=Pe(`flex items-center rounded-md py-2  ${r[2]===r[15].to?"text-primary bg-selago border-l-[3px] border-primary":"text-tertiary border-l-[3px] border-transparent"}`)+" svelte-1krymwh"),c(t,"href",v=r[15].to),c(e,"class","pb-4")},m(h,E){J(h,e,E),u(e,t),u(t,s),M(l,s,null),u(t,a),u(t,n),u(n,i),u(t,_),x&&x.m(t,null),u(t,d),k&&k.m(t,null),u(e,N),I=!0},p(h,E){const p={};E&2&&(p.src=`/icons/${h[15].icon}.svg`),l.$set(p),(!I||E&2)&&o!==(o=h[15].title+"")&&pe(i,o),h[15].to==="/hoursEmployee"?x?x.p(h,E):(x=st(h),x.c(),x.m(t,d)):x&&(x.d(1),x=null),h[15].to==="/hoursTeam"?k?k.p(h,E):(k=lt(h),k.c(),k.m(t,null)):k&&(k.d(1),k=null),(!I||E&6&&y!==(y=Pe(`flex items-center rounded-md py-2  ${h[2]===h[15].to?"text-primary bg-selago border-l-[3px] border-primary":"text-tertiary border-l-[3px] border-transparent"}`)+" svelte-1krymwh"))&&c(t,"class",y),(!I||E&2&&v!==(v=h[15].to))&&c(t,"href",v)},i(h){I||(S(l.$$.fragment,h),I=!0)},o(h){j(l.$$.fragment,h),I=!1},d(h){h&&f(e),F(l),x&&x.d(),k&&k.d()}}}function Ut(r){let e,t,s,l,a,n;ct(r[11]);const o=[At,jt],i=[];function _(d,y){return d[3]>767?0:1}return e=_(r),t=i[e]=o[e](r),{c(){t.c(),s=Ne()},l(d){t.l(d),s=Ne()},m(d,y){i[e].m(d,y),J(d,s,y),l=!0,a||(n=ie(window,"resize",r[11]),a=!0)},p(d,[y]){let v=e;e=_(d),e===v?i[e].p(d,y):(we(),j(i[v],1,1,()=>{i[v]=null}),ye(),t=i[e],t?t.p(d,y):(t=i[e]=o[e](d),t.c()),S(t,1),t.m(s.parentNode,s))},i(d){l||(S(t),l=!0)},o(d){j(t),l=!1},d(d){i[e].d(d),d&&f(s),a=!1,n()}}}function Lt(r,e,t){let s,l,a;ke(r,St,h=>t(10,s=h)),ke(r,Et,h=>t(4,l=h)),ke(r,xt,h=>t(5,a=h));let n,o,i,_=!1,d=[],y,v;_t(async()=>{o&&!i&&await It(),n&&!i&&await Vt()});async function N(){await Dt(),Ee.loginUser({login:!1}),dt("/"),localStorage.clear()}function I(){t(3,v=window.innerWidth)}const x=()=>t(0,_=!_),k=()=>{t(0,_=!_)};r.$$.update=()=>{if(r.$$.dirty&1024){let h=s.url.pathname.split("/")[1];t(2,y="/"+h)}r.$$.dirty&896&&t(1,d=[{title:"Home",to:"/",icon:"house-solid"},...(n||o)&&!i?[{title:"Profile",to:"/profile",icon:"person-solid"}]:[],...(n||o)&&!i?[{title:"My Hours",to:"/hoursEmployee",icon:"user-clock-solid"}]:[],...n&&!i?[{title:"Team Hours",to:"/hoursTeam",icon:"clock-solid"}]:[],...n&&!i?[{title:"Tasks Team",to:"/tasksTeam",icon:"list-check-solid"}]:[],...i?[{title:"Employees",to:"/employees",icon:"person-solid"}]:[],...i?[{title:"Teams",to:"/teams",icon:"people-group-solid"}]:[],...i?[{title:"Hours",to:"/hours",icon:"clock-solid"}]:[],...i?[{title:"Tasks",to:"/tasks",icon:"list-check-solid"}]:[]])};{let h=gt(Ee);if(h){const E=h.body.roles;for(let p=0;p<E.length;p++)E[p].name==="user"&&t(8,o=!0),E[p].name==="admin"&&t(7,n=!0),E[p].name==="superAdmin"&&t(9,i=!0)}}return[_,d,y,v,l,a,N,n,o,i,s,I,x,k]}class Nt extends qe{constructor(e){super(),He(this,e,Lt,Ut,je,{})}}function nt(r){let e,t,s=r[2].message+"",l,a,n=r[2].isSignUp&&at(r);return{c(){e=b("div"),t=b("p"),l=Z(s),a=U(),n&&n.c(),this.h()},l(o){e=$(o,"DIV",{class:!0});var i=g(e);t=$(i,"P",{});var _=g(t);l=ee(_,s),_.forEach(f),a=L(i),n&&n.l(i),i.forEach(f),this.h()},h(){c(e,"class","col-span-2 md:col-span-12 flex flex-col items-center mt-4")},m(o,i){J(o,e,i),u(e,t),u(t,l),u(e,a),n&&n.m(e,null)},p(o,i){i&4&&s!==(s=o[2].message+"")&&pe(l,s),o[2].isSignUp?n?n.p(o,i):(n=at(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&f(e),n&&n.d()}}}function at(r){let e,t,s,l;return{c(){e=b("p"),t=Z("Login Now!"),this.h()},l(a){e=$(a,"P",{class:!0});var n=g(e);t=ee(n,"Login Now!"),n.forEach(f),this.h()},h(){c(e,"class","text-primary font-semibold mt-3 cursor-pointer")},m(a,n){J(a,e,n),u(e,t),s||(l=ie(e,"click",function(){pt(r[0])&&r[0].apply(this,arguments)}),s=!0)},p(a,n){r=a},d(a){a&&f(e),s=!1,l()}}}function Pt(r){let e,t,s,l,a,n,o,i,_,d,y,v,N,I,x,k,h,E,p,T,m,P,w,V,D,Q,C,B,te,R,K,X,le,de,oe,me,xe;l=new re({props:{class:"w-[23px] h-[23px]   ",src:"/icons/arrow-left-solid.svg"}}),l.$on("click",function(){pt(r[0])&&r[0].apply(this,arguments)});function Oe(A){r[4](A)}let Ie={class:"mb-4",placeholder:"First name",name:"firstName",type:"text",required:!0};r[1].first_name!==void 0&&(Ie.value=r[1].first_name),v=new $e({props:Ie}),ge.push(()=>ve(v,"value",Oe));function Ce(A){r[5](A)}let Ve={class:"mb-4",placeholder:"Last Name",name:"lastName",type:"text",required:!0};r[1].last_name!==void 0&&(Ve.value=r[1].last_name),k=new $e({props:Ve}),ge.push(()=>ve(k,"value",Ce));function W(A){r[6](A)}let q={class:"mb-4",placeholder:"Phone",name:"phone",type:"number",minLength:"1",required:!0};r[1].phone!==void 0&&(q.value=r[1].phone),T=new $e({props:q}),ge.push(()=>ve(T,"value",W));function ne(A){r[7](A)}let ae={class:"mb-4",placeholder:"Email",name:"email",type:"email",required:!0};r[1].email!==void 0&&(ae.value=r[1].email),V=new $e({props:ae}),ge.push(()=>ve(V,"value",ne));function he(A){r[8](A)}let De={class:"mb-4",placeholder:"Password",name:"password",type:"password",required:!0};r[1].password!==void 0&&(De.value=r[1].password),B=new $e({props:De}),ge.push(()=>ve(B,"value",he));let H=r[2].status&&nt(r);return{c(){e=b("div"),t=b("div"),s=b("div"),z(l.$$.fragment),a=U(),n=b("form"),o=b("div"),i=b("h1"),_=Z("Sign up"),d=U(),y=b("div"),z(v.$$.fragment),I=U(),x=b("div"),z(k.$$.fragment),E=U(),p=b("div"),z(T.$$.fragment),P=U(),w=b("div"),z(V.$$.fragment),Q=U(),C=b("div"),z(B.$$.fragment),R=U(),K=b("div"),X=b("button"),le=Z("Sign Up"),de=U(),H&&H.c(),this.h()},l(A){e=$(A,"DIV",{class:!0});var Y=g(e);t=$(Y,"DIV",{class:!0});var se=g(t);s=$(se,"DIV",{class:!0});var ue=g(s);G(l.$$.fragment,ue),ue.forEach(f),a=L(se),n=$(se,"FORM",{class:!0});var O=g(n);o=$(O,"DIV",{class:!0});var ce=g(o);i=$(ce,"H1",{class:!0});var fe=g(i);_=ee(fe,"Sign up"),fe.forEach(f),ce.forEach(f),d=L(O),y=$(O,"DIV",{class:!0});var _e=g(y);G(v.$$.fragment,_e),_e.forEach(f),I=L(O),x=$(O,"DIV",{class:!0});var Te=g(x);G(k.$$.fragment,Te),Te.forEach(f),E=L(O),p=$(O,"DIV",{class:!0});var Ge=g(p);G(T.$$.fragment,Ge),Ge.forEach(f),P=L(O),w=$(O,"DIV",{class:!0});var Me=g(w);G(V.$$.fragment,Me),Me.forEach(f),Q=L(O),C=$(O,"DIV",{class:!0});var Fe=g(C);G(B.$$.fragment,Fe),Fe.forEach(f),R=L(O),K=$(O,"DIV",{class:!0});var Je=g(K);X=$(Je,"BUTTON",{class:!0,type:!0});var Ke=g(X);le=ee(Ke,"Sign Up"),Ke.forEach(f),Je.forEach(f),de=L(O),H&&H.l(O),O.forEach(f),se.forEach(f),Y.forEach(f),this.h()},h(){c(s,"class","absolute px-3 py-3 text-white bg-primary top-[5%] left-[0%] translate-x-1/2 cursor-pointer rounded-full shadow-sm"),c(i,"class","font-semibold text-3xl text-secondary uppercase"),c(o,"class","col-span-2 md:col-span-12 flex justify-center py-6"),c(y,"class","col-span-2 md:col-span-6 flex flex-col w-full "),c(x,"class","col-span-2 md:col-span-6 flex flex-col w-full "),c(p,"class","col-span-2 md:col-span-12 flex flex-col w-full "),c(w,"class","col-span-2 md:col-span-6 flex flex-col w-full "),c(C,"class","col-span-2 md:col-span-6 flex flex-col w-full "),c(X,"class","bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg"),c(X,"type","submit"),c(K,"class","col-span-2 md:col-span-12 flex justify-center mt-6"),c(n,"class","grid grid-cols-1 md:grid-cols-12 gap-x-6 w-full p-6"),c(t,"class","bg-white rounded-xl w-full md:w-[700px] h-[500px] flex flex-col justify-center items-center align-middle shadow-lg relative "),c(e,"class","container mx-auto flex justify-center items-center h-full px-6")},m(A,Y){J(A,e,Y),u(e,t),u(t,s),M(l,s,null),u(t,a),u(t,n),u(n,o),u(o,i),u(i,_),u(n,d),u(n,y),M(v,y,null),u(n,I),u(n,x),M(k,x,null),u(n,E),u(n,p),M(T,p,null),u(n,P),u(n,w),M(V,w,null),u(n,Q),u(n,C),M(B,C,null),u(n,R),u(n,K),u(K,X),u(X,le),u(n,de),H&&H.m(n,null),oe=!0,me||(xe=ie(n,"submit",vt(r[3])),me=!0)},p(A,[Y]){r=A;const se={};!N&&Y&2&&(N=!0,se.value=r[1].first_name,be(()=>N=!1)),v.$set(se);const ue={};!h&&Y&2&&(h=!0,ue.value=r[1].last_name,be(()=>h=!1)),k.$set(ue);const O={};!m&&Y&2&&(m=!0,O.value=r[1].phone,be(()=>m=!1)),T.$set(O);const ce={};!D&&Y&2&&(D=!0,ce.value=r[1].email,be(()=>D=!1)),V.$set(ce);const fe={};!te&&Y&2&&(te=!0,fe.value=r[1].password,be(()=>te=!1)),B.$set(fe),r[2].status?H?H.p(r,Y):(H=nt(r),H.c(),H.m(n,null)):H&&(H.d(1),H=null)},i(A){oe||(S(l.$$.fragment,A),S(v.$$.fragment,A),S(k.$$.fragment,A),S(T.$$.fragment,A),S(V.$$.fragment,A),S(B.$$.fragment,A),oe=!0)},o(A){j(l.$$.fragment,A),j(v.$$.fragment,A),j(k.$$.fragment,A),j(T.$$.fragment,A),j(V.$$.fragment,A),j(B.$$.fragment,A),oe=!1},d(A){A&&f(e),F(l),F(v),F(k),F(T),F(V),F(B),H&&H.d(),me=!1,xe()}}}function qt(r,e,t){let s={first_name:"",last_name:"",email:"",password:"",team:[""],phone:void 0},l={status:void 0},{stateLoginActive:a}=e;const n=async()=>{let v={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)};const N=`${Se}/api/signup`,x=await(await fetch(N,v)).json();t(2,l=x)};function o(v){r.$$.not_equal(s.first_name,v)&&(s.first_name=v,t(1,s))}function i(v){r.$$.not_equal(s.last_name,v)&&(s.last_name=v,t(1,s))}function _(v){r.$$.not_equal(s.phone,v)&&(s.phone=v,t(1,s))}function d(v){r.$$.not_equal(s.email,v)&&(s.email=v,t(1,s))}function y(v){r.$$.not_equal(s.password,v)&&(s.password=v,t(1,s))}return r.$$set=v=>{"stateLoginActive"in v&&t(0,a=v.stateLoginActive)},[a,s,l,n,o,i,_,d,y]}class Ht extends qe{constructor(e){super(),He(this,e,qt,Pt,je,{stateLoginActive:0})}}function Ot(r){let e,t;return e=new Ht({props:{stateLoginActive:r[3]}}),{c(){z(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,l){M(e,s,l),t=!0},p:ze,i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){j(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}function Ct(r){let e,t,s,l,a,n,o,i,_,d,y,v,N,I,x,k,h,E,p,T,m,P,w,V,D,Q,C,B,te,R,K,X,le,de,oe,me,xe;a=new re({props:{class:"text-primary w-[75px] h-fit drop-shadow-lg",src:"/icons/chart-line-solid.svg"}});function Oe(q){r[7](q)}let Ie={class:"mb-4",placeholder:"Enter Email",name:"user",type:"email",required:!0};r[1].email!==void 0&&(Ie.value=r[1].email),i=new $e({props:Ie}),ge.push(()=>ve(i,"value",Oe));function Ce(q){r[8](q)}let Ve={class:"mb-4",placeholder:"Enter Password",name:"password",type:"password",required:!0,onKeyPressEnter:r[5]};r[1].password!==void 0&&(Ve.value=r[1].password),y=new $e({props:Ve}),ge.push(()=>ve(y,"value",Ce)),p=new re({props:{class:" w-[15px] h-[15px] drop-shadow-lg",src:"/icons/google-brands.svg"}}),D=new re({props:{class:" w-[15px] h-[15px] drop-shadow-lg",src:"/icons/facebook-brands.svg"}});let W=r[2]&&it(r);return{c(){e=b("div"),t=b("div"),s=b("div"),l=b("a"),z(a.$$.fragment),n=U(),o=b("div"),z(i.$$.fragment),d=U(),z(y.$$.fragment),N=U(),I=b("button"),x=Z("Log In"),k=U(),h=b("div"),E=b("button"),z(p.$$.fragment),T=U(),m=b("span"),P=Z("Google"),w=U(),V=b("button"),z(D.$$.fragment),Q=U(),C=b("span"),B=Z("Facebook"),te=U(),R=b("div"),K=b("div"),W&&W.c(),X=U(),le=b("p"),de=Z("Sign Up"),this.h()},l(q){e=$(q,"DIV",{class:!0});var ne=g(e);t=$(ne,"DIV",{class:!0});var ae=g(t);s=$(ae,"DIV",{class:!0});var he=g(s);l=$(he,"A",{href:!0});var De=g(l);G(a.$$.fragment,De),De.forEach(f),he.forEach(f),n=L(ae),o=$(ae,"DIV",{class:!0});var H=g(o);G(i.$$.fragment,H),d=L(H),G(y.$$.fragment,H),N=L(H),I=$(H,"BUTTON",{class:!0,type:!0});var A=g(I);x=ee(A,"Log In"),A.forEach(f),k=L(H),h=$(H,"DIV",{class:!0});var Y=g(h);E=$(Y,"BUTTON",{class:!0,type:!0});var se=g(E);G(p.$$.fragment,se),T=L(se),m=$(se,"SPAN",{class:!0});var ue=g(m);P=ee(ue,"Google"),ue.forEach(f),se.forEach(f),w=L(Y),V=$(Y,"BUTTON",{class:!0,type:!0});var O=g(V);G(D.$$.fragment,O),Q=L(O),C=$(O,"SPAN",{class:!0});var ce=g(C);B=ee(ce,"Facebook"),ce.forEach(f),O.forEach(f),Y.forEach(f),te=L(H),R=$(H,"DIV",{class:!0});var fe=g(R);K=$(fe,"DIV",{class:!0});var _e=g(K);W&&W.l(_e),X=L(_e),le=$(_e,"P",{class:!0});var Te=g(le);de=ee(Te,"Sign Up"),Te.forEach(f),_e.forEach(f),fe.forEach(f),H.forEach(f),ae.forEach(f),ne.forEach(f),this.h()},h(){c(l,"href","/"),c(s,"class","flex justify-center mt-6"),c(I,"class","bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg"),c(I,"type","submit"),c(m,"class","ml-1"),c(E,"class","bg-red-600 hover:bg-red-700 w-1/2 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center my-3"),c(E,"type","submit"),c(C,"class","ml-2"),c(V,"class","bg-blue-600 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center my-3"),c(V,"type","submit"),c(h,"class","flex gap-x-3"),c(le,"class","text-center text-primary font-semibold mt-2 cursor-pointer"),c(K,"class","absolute left-1/2 -translate-x-1/2 flex flex-col"),c(R,"class","relative mt-4"),c(o,"class","flex flex-col w-full p-6"),c(t,"class","bg-white rounded-xl w-full sm:w-[25rem] h-[30rem] flex flex-col justify-center items-center align-middle shadow-lg"),c(e,"class","container mx-auto flex justify-center items-center h-full px-6")},m(q,ne){J(q,e,ne),u(e,t),u(t,s),u(s,l),M(a,l,null),u(t,n),u(t,o),M(i,o,null),u(o,d),M(y,o,null),u(o,N),u(o,I),u(I,x),u(o,k),u(o,h),u(h,E),M(p,E,null),u(E,T),u(E,m),u(m,P),u(h,w),u(h,V),M(D,V,null),u(V,Q),u(V,C),u(C,B),u(o,te),u(o,R),u(R,K),W&&W.m(K,null),u(K,X),u(K,le),u(le,de),oe=!0,me||(xe=[ie(I,"click",r[4]),ie(E,"click",r[9]),ie(V,"click",r[10]),ie(le,"click",r[11])],me=!0)},p(q,ne){const ae={};!_&&ne&2&&(_=!0,ae.value=q[1].email,be(()=>_=!1)),i.$set(ae);const he={};!v&&ne&2&&(v=!0,he.value=q[1].password,be(()=>v=!1)),y.$set(he),q[2]?W?W.p(q,ne):(W=it(q),W.c(),W.m(K,X)):W&&(W.d(1),W=null)},i(q){oe||(S(a.$$.fragment,q),S(i.$$.fragment,q),S(y.$$.fragment,q),S(p.$$.fragment,q),S(D.$$.fragment,q),oe=!0)},o(q){j(a.$$.fragment,q),j(i.$$.fragment,q),j(y.$$.fragment,q),j(p.$$.fragment,q),j(D.$$.fragment,q),oe=!1},d(q){q&&f(e),F(a),F(i),F(y),F(p),F(D),W&&W.d(),me=!1,bt(xe)}}}function it(r){let e,t;return{c(){e=b("p"),t=Z(r[2]),this.h()},l(s){e=$(s,"P",{class:!0});var l=g(e);t=ee(l,r[2]),l.forEach(f),this.h()},h(){c(e,"class","text-center text-red-600 ")},m(s,l){J(s,e,l),u(e,t)},p(s,l){l&4&&pe(t,s[2])},d(s){s&&f(e)}}}function ot(r){let e,t,s,l;const a=[Ct,Ot],n=[];function o(i,_){return i[0]?0:1}return e=o(r),t=n[e]=a[e](r),{c(){t.c(),s=Ne()},l(i){t.l(i),s=Ne()},m(i,_){n[e].m(i,_),J(i,s,_),l=!0},p(i,_){let d=e;e=o(i),e===d?n[e].p(i,_):(we(),j(n[d],1,1,()=>{n[d]=null}),ye(),t=n[e],t?t.p(i,_):(t=n[e]=a[e](i),t.c()),S(t,1),t.m(s.parentNode,s))},i(i){l||(S(t),l=!0)},o(i){j(t),l=!1},d(i){n[e].d(i),i&&f(s)}}}function Bt(r){let e,t=r[0],s,l=ot(r);return{c(){e=b("div"),l.c(),this.h()},l(a){e=$(a,"DIV",{class:!0});var n=g(e);l.l(n),n.forEach(f),this.h()},h(){c(e,"class","bg-selago w-full h-[100vh]")},m(a,n){J(a,e,n),l.m(e,null),s=!0},p(a,[n]){n&1&&je(t,t=a[0])?(we(),j(l,1,1,ze),ye(),l=ot(a),l.c(),S(l,1),l.m(e,null)):l.p(a,n)},i(a){s||(S(l),s=!0)},o(a){j(l),s=!1},d(a){a&&f(e),l.d(a)}}}function zt(r,e,t){let s;ke(r,Ee,k=>t(6,s=k));let l=!0,a={email:"",password:""},n;const o=()=>{t(0,l=!0)},i=async()=>{let k={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)};const h=`${Se}/api/login`,p=await(await fetch(h,k)).json();Ee.loginUser(p),dt("/"),Re(p)};(async()=>{Be.set(!0);let k={method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"}};const h=`${Se}/auth/login/success`,p=await(await fetch(h,k)).json();Ee.loginUser(p),Re(p),Be.set(!1)})();const d=k=>{k.charCode===13&&i()};function y(k){r.$$.not_equal(a.email,k)&&(a.email=k,t(1,a))}function v(k){r.$$.not_equal(a.password,k)&&(a.password=k,t(1,a))}const N=async()=>{const k=`${Se}/auth/google`;window.open(k,"_self")},I=async()=>{const k=`${Se}/auth/facebook`;window.open(k,"_self")},x=()=>{t(0,l=!1)};return r.$$.update=()=>{r.$$.dirty&64&&(s.message?s.message=="User not found"?t(2,n="User not found"):t(2,n="Incorrect Password"):t(2,n=void 0))},[l,a,n,o,i,d,s,y,v,N,I,x]}class Gt extends qe{constructor(e){super(),He(this,e,zt,Bt,je,{})}}function ut(r){let e,t,s,l;return t=new re({props:{class:"text-indigo-500 w-[75px] h-fit",src:"/icons/loading.svg"}}),{c(){e=b("div"),z(t.$$.fragment),this.h()},l(a){e=$(a,"DIV",{class:!0});var n=g(e);G(t.$$.fragment,n),n.forEach(f),this.h()},h(){c(e,"class","absolute z-30 w-full h-full bg-white/80 flex justify-center items-center")},m(a,n){J(a,e,n),M(t,e,null),l=!0},i(a){l||(S(t.$$.fragment,a),ct(()=>{s||(s=We(e,Qe,{},!0)),s.run(1)}),l=!0)},o(a){j(t.$$.fragment,a),s||(s=We(e,Qe,{},!1)),s.run(0),l=!1},d(a){a&&f(e),F(t),a&&s&&s.end()}}}function Mt(r){let e,t;return e=new Gt({}),{c(){z(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,l){M(e,s,l),t=!0},p:ze,i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){j(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}function Ft(r){let e,t,s,l,a;t=new Nt({});const n=r[3].default,o=$t(n,r,r[2],null);return{c(){e=b("div"),z(t.$$.fragment),s=U(),l=b("div"),o&&o.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var _=g(e);G(t.$$.fragment,_),_.forEach(f),s=L(i),l=$(i,"DIV",{class:!0});var d=g(l);o&&o.l(d),d.forEach(f),this.h()},h(){c(e,"class","shadow-xl z-20 h-[100vh] md:fixed"),c(l,"class","flex w-full overflow-auto bg-selago md:px-2 mt-[70px] md:mt-0 z-10 ml-0 md:ml-[290px]")},m(i,_){J(i,e,_),M(t,e,null),J(i,s,_),J(i,l,_),o&&o.m(l,null),a=!0},p(i,_){o&&o.p&&(!a||_&4)&&wt(o,n,i,i[2],a?kt(n,i[2],_,null):yt(i[2]),null)},i(i){a||(S(t.$$.fragment,i),S(o,i),a=!0)},o(i){j(t.$$.fragment,i),j(o,i),a=!1},d(i){i&&f(e),F(t),i&&f(s),i&&f(l),o&&o.d(i)}}}function Jt(r){let e,t,s,l,a,n=r[0]&&ut();const o=[Ft,Mt],i=[];function _(d,y){return d[1].login?0:1}return s=_(r),l=i[s]=o[s](r),{c(){e=b("div"),n&&n.c(),t=U(),l.c(),this.h()},l(d){e=$(d,"DIV",{id:!0,class:!0});var y=g(e);n&&n.l(y),t=L(y),l.l(y),y.forEach(f),this.h()},h(){c(e,"id","app"),c(e,"class","flex overflow-hidden")},m(d,y){J(d,e,y),n&&n.m(e,null),u(e,t),i[s].m(e,null),a=!0},p(d,[y]){d[0]?n?y&1&&S(n,1):(n=ut(),n.c(),S(n,1),n.m(e,t)):n&&(we(),j(n,1,1,()=>{n=null}),ye());let v=s;s=_(d),s===v?i[s].p(d,y):(we(),j(i[v],1,1,()=>{i[v]=null}),ye(),l=i[s],l?l.p(d,y):(l=i[s]=o[s](d),l.c()),S(l,1),l.m(e,null))},i(d){a||(S(n),S(l),a=!0)},o(d){j(n),j(l),a=!1},d(d){d&&f(e),n&&n.d(),i[s].d()}}}function Kt(r,e,t){let s,l;ke(r,Be,o=>t(0,s=o)),ke(r,Ee,o=>t(1,l=o));let{$$slots:a={},$$scope:n}=e;return r.$$set=o=>{"$$scope"in o&&t(2,n=o.$$scope)},[s,l,n,a]}class ss extends qe{constructor(e){super(),He(this,e,Kt,Jt,je,{})}}export{ss as default};