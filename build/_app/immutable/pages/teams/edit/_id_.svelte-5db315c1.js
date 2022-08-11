import{K as ge,S as ve,i as he,s as be,T as Q,U as X,l as f,w as B,a as O,r as ue,m as _,n as g,x as U,h as c,c as C,u as de,p as d,b as $e,O as l,y as F,I as ye,V as we,W as Y,f as M,t as R,B as z,o as xe}from"../../../chunks/index-213b7a90.js";import{a as Ee,b as ce,u as Ie}from"../../../chunks/login-3638f510.js";import{I as Z}from"../../../chunks/inputs-abead974.js";import{I as pe}from"../../../chunks/inline-svg-eb4ea3fd.js";import{u as je}from"../../../chunks/teams-d734c265.js";import{f as De}from"../../../chunks/employees-06ed2a42.js";import"../../../chunks/index-01a17379.js";function Te(s){let o,a,i,n,v,r,E,I,$,u,y,p,t,j,V,h,H,K,k,b,L,N,S,w,D,W,G,J,ee;n=new pe({props:{class:"w-[20px] h-[20px]",src:"/icons/arrow-left-solid.svg"}});function me(e){s[5](e)}let te={class:"mb-4",label:"Title",name:"title",type:"text",required:!0};s[1].title!==void 0&&(te.value=s[1].title),p=new Z({props:te}),Q.push(()=>X(p,"value",me));function fe(e){s[6](e)}let se={class:"mb-4",label:"Description",textarea:!0,name:"description",rows:"6",required:!0};s[1].description!==void 0&&(se.value=s[1].description),h=new Z({props:se}),Q.push(()=>X(h,"value",fe));function _e(e){s[7](e)}let ae={class:"mb-4",label:"Admin",select:!0,multiselect:null,options:s[3]};return s[2]!==void 0&&(ae.selected=s[2]),b=new Z({props:ae}),Q.push(()=>X(b,"selected",_e)),D=new pe({props:{class:"text-white w-[15px] h-fit mr-3",src:"/icons/floppy-disk-solid.svg"}}),{c(){o=f("div"),a=f("div"),i=f("a"),B(n.$$.fragment),v=O(),r=f("h1"),E=ue("Edit Team"),I=O(),$=f("div"),u=f("form"),y=f("div"),B(p.$$.fragment),j=O(),V=f("div"),B(h.$$.fragment),K=O(),k=f("div"),B(b.$$.fragment),N=O(),S=f("div"),w=f("button"),B(D.$$.fragment),W=ue("Save"),this.h()},l(e){o=_(e,"DIV",{class:!0});var m=g(o);a=_(m,"DIV",{class:!0});var T=g(a);i=_(T,"A",{href:!0,class:!0});var A=g(i);U(n.$$.fragment,A),A.forEach(c),v=C(T),r=_(T,"H1",{class:!0});var q=g(r);E=de(q,"Edit Team"),q.forEach(c),T.forEach(c),I=C(m),$=_(m,"DIV",{class:!0});var ne=g($);u=_(ne,"FORM",{class:!0});var x=g(u);y=_(x,"DIV",{class:!0});var ie=g(y);U(p.$$.fragment,ie),ie.forEach(c),j=C(x),V=_(x,"DIV",{class:!0});var re=g(V);U(h.$$.fragment,re),re.forEach(c),K=C(x),k=_(x,"DIV",{class:!0});var le=g(k);U(b.$$.fragment,le),le.forEach(c),N=C(x),S=_(x,"DIV",{class:!0});var oe=g(S);w=_(oe,"BUTTON",{class:!0,type:!0});var P=g(w);U(D.$$.fragment,P),W=de(P,"Save"),P.forEach(c),oe.forEach(c),x.forEach(c),ne.forEach(c),m.forEach(c),this.h()},h(){d(i,"href","/teams"),d(i,"class","flex items-center justify-center cursor-pointer text-white bg-primary px-3 py-3 rounded-full shadow-sm"),d(r,"class","text-secondary text-3xl font-bold ml-6"),d(a,"class","flex justify-start items-center my-12 pb-6 border-b-[1px] border-tertiary/30"),d(y,"class","col-span-1 md:col-span-12"),d(V,"class","col-span-1 md:col-span-12"),d(k,"class","col-span-1 md:col-span-12 mb-4"),d(w,"class","bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"),d(w,"type","submit"),d(S,"class","col-span-1 md:col-span-12 flex justify-center"),d(u,"class","grid grid-cols-1 md:grid-cols-12 gap-x-8"),d($,"class","w-full bg-white rounded-xl p-6 shadow-sm"),d(o,"class","container md:max-w-5xl px-6 mx-auto h-max")},m(e,m){$e(e,o,m),l(o,a),l(a,i),F(n,i,null),l(a,v),l(a,r),l(r,E),l(o,I),l(o,$),l($,u),l(u,y),F(p,y,null),l(u,j),l(u,V),F(h,V,null),l(u,K),l(u,k),F(b,k,null),l(u,N),l(u,S),l(S,w),F(D,w,null),l(w,W),G=!0,J||(ee=ye(u,"submit",we(s[8])),J=!0)},p(e,[m]){const T={};!t&&m&2&&(t=!0,T.value=e[1].title,Y(()=>t=!1)),p.$set(T);const A={};!H&&m&2&&(H=!0,A.value=e[1].description,Y(()=>H=!1)),h.$set(A);const q={};m&8&&(q.options=e[3]),!L&&m&4&&(L=!0,q.selected=e[2],Y(()=>L=!1)),b.$set(q)},i(e){G||(M(n.$$.fragment,e),M(p.$$.fragment,e),M(h.$$.fragment,e),M(b.$$.fragment,e),M(D.$$.fragment,e),G=!0)},o(e){R(n.$$.fragment,e),R(p.$$.fragment,e),R(h.$$.fragment,e),R(b.$$.fragment,e),R(D.$$.fragment,e),G=!1},d(e){e&&c(o),z(n),z(p),z(h),z(b),z(D),J=!1,ee()}}}async function Ce({fetch:s,params:o}){ce.set(!0);let a=o.id,i=ge(Ie),n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${i.token}`}};const v=`${Ee}/api/teams/${a}`,r=await s(v,n);let I=(await r.json()).Team;if(r.ok)return ce.set(!1),{props:{results:I}}}function Ve(s,o,a){let{results:i}=o,n={},v=[],r=[],E=[];xe(async()=>{a(4,v=await De())});function I(){let t={};return t.label=`${i.admin?i.admin.first_name:""} ${i.admin?i.admin.last_name:""}`,t.value=i.admin?i.admin._id:"",t}n=i;function $(t){s.$$.not_equal(n.title,t)&&(n.title=t,a(1,n),a(2,r))}function u(t){s.$$.not_equal(n.description,t)&&(n.description=t,a(1,n),a(2,r))}function y(t){r=t,a(2,r)}const p=async()=>{await je(n,i._id)};return s.$$set=t=>{"results"in t&&a(0,i=t.results)},s.$$.update=()=>{s.$$.dirty&6&&a(1,n=Object.assign(n,{admin:r[0]?r[0].value:""})),s.$$.dirty&16&&a(3,E=v.map(function(t){let j={};return j.label=`${t.first_name} ${t.last_name}`,j.value=t._id,j}))},a(2,r=[I()]),[i,n,r,E,v,$,u,y,p]}class Fe extends ve{constructor(o){super(),he(this,o,Ve,Te,be,{results:0})}}export{Fe as default,Ce as load};
