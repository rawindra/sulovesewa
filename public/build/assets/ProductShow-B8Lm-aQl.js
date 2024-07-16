import{r as C,_ as ce,G as v,f as De,e as O,d as se,i as $e,j as a,a as Fe,q as Oe,W as ie,Y as Ee,y as ke}from"./app-BN3q3q7l.js";import{I as Le,c as A,K as k,k as ne,g as Ve,m as Me,r as Pe,C as Be,M as Te,N as Ke,O as le,P as oe}from"./index-C6X0TU9u.js";import{p as Ae}from"./index-S9qC58eN.js";import{F as ze}from"./FrontLayout-D37uUopS.js";import"./index-Ddx50a0N.js";var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},Ge=function(t,s){return C.createElement(Le,ce({},t,{ref:s,icon:We}))},Xe=C.forwardRef(Ge);function Qe(e,t){var s=e.disabled,r=e.prefixCls,o=e.character,f=e.characterRender,c=e.index,b=e.count,d=e.value,S=e.allowHalf,u=e.focused,j=e.onHover,l=e.onClick,i=function(w){j(w,c)},R=function(w){l(w,c)},H=function(w){w.keyCode===k.ENTER&&l(w,c)},I=c+1,g=new Set([r]);d===0&&c===0&&u?g.add("".concat(r,"-focused")):S&&d+.5>=I&&d<I?(g.add("".concat(r,"-half")),g.add("".concat(r,"-active")),u&&g.add("".concat(r,"-focused"))):(I<=d?g.add("".concat(r,"-full")):g.add("".concat(r,"-zero")),I===d&&u&&g.add("".concat(r,"-focused")));var m=typeof o=="function"?o(e):o,_=v.createElement("li",{className:A(Array.from(g)),ref:t},v.createElement("div",{onClick:s?null:R,onKeyDown:s?null:H,onMouseMove:s?null:i,role:"radio","aria-checked":d>c?"true":"false","aria-posinset":c+1,"aria-setsize":b,tabIndex:s?-1:0},v.createElement("div",{className:"".concat(r,"-first")},m),v.createElement("div",{className:"".concat(r,"-second")},m)));return f&&(_=f(_,e)),_}const qe=v.forwardRef(Qe);function Ue(){var e=C.useRef({});function t(r){return e.current[r]}function s(r){return function(o){e.current[r]=o}}return[t,s]}function Ye(e){var t=e.pageXOffset,s="scrollLeft";if(typeof t!="number"){var r=e.document;t=r.documentElement[s],typeof t!="number"&&(t=r.body[s])}return t}function Je(e){var t,s,r=e.ownerDocument,o=r.body,f=r&&r.documentElement,c=e.getBoundingClientRect();return t=c.left,s=c.top,t-=f.clientLeft||o.clientLeft||0,s-=f.clientTop||o.clientTop||0,{left:t,top:s}}function Ze(e){var t=Je(e),s=e.ownerDocument,r=s.defaultView||s.parentWindow;return t.left+=Ye(r),t.left}var ea=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","keyboard","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function aa(e,t){var s=e.prefixCls,r=s===void 0?"rc-rate":s,o=e.className,f=e.defaultValue,c=e.value,b=e.count,d=b===void 0?5:b,S=e.allowHalf,u=S===void 0?!1:S,j=e.allowClear,l=j===void 0?!0:j,i=e.keyboard,R=i===void 0?!0:i,H=e.character,I=H===void 0?"★":H,g=e.characterRender,m=e.disabled,_=e.direction,D=_===void 0?"ltr":_,w=e.tabIndex,de=w===void 0?0:w,ue=e.autoFocus,$=e.onHoverChange,L=e.onChange,V=e.onFocus,M=e.onBlur,P=e.onKeyDown,B=e.onMouseLeave,me=De(e,ea),fe=Ue(),z=O(fe,2),xe=z[0],ve=z[1],T=v.useRef(null),W=function(){if(!m){var n;(n=T.current)===null||n===void 0||n.focus()}};v.useImperativeHandle(t,function(){return{focus:W,blur:function(){if(!m){var n;(n=T.current)===null||n===void 0||n.blur()}}}});var ge=ne(f||0,{value:c}),G=O(ge,2),N=G[0],he=G[1],be=ne(null),X=O(be,2),ye=X[0],K=X[1],Q=function(n,p){var x=D==="rtl",h=n+1;if(u){var ae=xe(n),te=Ze(ae),re=ae.clientWidth;(x&&p-te>re/2||!x&&p-te<re/2)&&(h-=.5)}return h},F=function(n){he(n),L==null||L(n)},pe=v.useState(!1),q=O(pe,2),je=q[0],U=q[1],Ne=function(){U(!0),V==null||V()},we=function(){U(!1),M==null||M()},Ce=v.useState(null),Y=O(Ce,2),J=Y[0],Z=Y[1],Se=function(n,p){var x=Q(p,n.pageX);x!==ye&&(Z(x),K(null)),$==null||$(x)},ee=function(n){m||(Z(null),K(null),$==null||$(void 0)),n&&(B==null||B(n))},Re=function(n,p){var x=Q(p,n.pageX),h=!1;l&&(h=x===N),ee(),F(h?0:x),K(h?x:null)},He=function(n){var p=n.keyCode,x=D==="rtl",h=u?.5:1;R&&(p===k.RIGHT&&N<d&&!x?(F(N+h),n.preventDefault()):p===k.LEFT&&N>0&&!x||p===k.RIGHT&&N>0&&x?(F(N-h),n.preventDefault()):p===k.LEFT&&N<d&&x&&(F(N+h),n.preventDefault())),P==null||P(n)};v.useEffect(function(){ue&&!m&&W()},[]);var Ie=new Array(d).fill(0).map(function(y,n){return v.createElement(qe,{ref:ve(n),index:n,count:d,disabled:m,prefixCls:"".concat(r,"-star"),allowHalf:u,value:J===null?N:J,onClick:Re,onHover:Se,key:y||n,character:I,characterRender:g,focused:je})}),_e=A(r,o,se(se({},"".concat(r,"-disabled"),m),"".concat(r,"-rtl"),D==="rtl"));return v.createElement("ul",ce({className:_e,onMouseLeave:ee,tabIndex:m?-1:de,onFocus:m?null:Ne,onBlur:m?null:we,onKeyDown:m?null:He,ref:T,role:"radiogroup"},Ae(me,{aria:!0,data:!0,attr:!0})),Ie)}const ta=v.forwardRef(aa),ra=e=>{const{componentCls:t}=e;return{[`${t}-star`]:{position:"relative",display:"inline-block",color:"inherit",cursor:"pointer","&:not(:last-child)":{marginInlineEnd:e.marginXS},"> div":{transition:`all ${e.motionDurationMid}, outline 0s`,"&:hover":{transform:e.starHoverScale},"&:focus":{outline:0},"&:focus-visible":{outline:`${$e(e.lineWidth)} dashed ${e.starColor}`,transform:e.starHoverScale}},"&-first, &-second":{color:e.starBg,transition:`all ${e.motionDurationMid}`,userSelect:"none"},"&-first":{position:"absolute",top:0,insetInlineStart:0,width:"50%",height:"100%",overflow:"hidden",opacity:0},[`&-half ${t}-star-first, &-half ${t}-star-second`]:{opacity:1},[`&-half ${t}-star-first, &-full ${t}-star-second`]:{color:"inherit"}}}},sa=e=>({[`&-rtl${e.componentCls}`]:{direction:"rtl"}}),na=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},Pe(e)),{display:"inline-block",margin:0,padding:0,color:e.starColor,fontSize:e.starSize,lineHeight:1,listStyle:"none",outline:"none",[`&-disabled${t} ${t}-star`]:{cursor:"default","> div:hover":{transform:"scale(1)"}}}),ra(e)),sa(e))}},la=e=>({starColor:e.yellow6,starSize:e.controlHeightLG*.5,starHoverScale:"scale(1.1)",starBg:e.colorFillContent}),oa=Ve("Rate",e=>{const t=Me(e,{});return[na(t)]},la);var ca=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s};const ia=C.forwardRef((e,t)=>{const{prefixCls:s,className:r,rootClassName:o,style:f,tooltips:c,character:b=C.createElement(Xe,null)}=e,d=ca(e,["prefixCls","className","rootClassName","style","tooltips","character"]),S=(m,_)=>{let{index:D}=_;return c?C.createElement(Te,{title:c[D]},m):m},{getPrefixCls:u,direction:j,rate:l}=C.useContext(Be),i=u("rate",s),[R,H,I]=oa(i),g=Object.assign(Object.assign({},l==null?void 0:l.style),f);return R(C.createElement(ta,Object.assign({ref:t,character:b,characterRender:S},d,{className:A(r,o,H,I,l==null?void 0:l.className),style:g,prefixCls:i,direction:j})))}),da=({category:e,title:t})=>a.jsxs("div",{className:"container flex items-center gap-3 my-10",children:[a.jsx(Fe,{href:"/",className:"text-primary text-base",children:a.jsx(Ke,{})}),a.jsx("span",{className:"text-sm text-gray-400",children:a.jsx(le,{})}),a.jsx("p",{className:"text-gray-600 font-medium",children:e}),a.jsx("span",{className:"text-sm text-gray-400",children:a.jsx(le,{})}),a.jsx("p",{className:"text-gray-600 font-medium",children:t})]}),E=({width:e,star:t})=>a.jsxs("div",{className:"flex md:gap-3 items-center my-1",children:[a.jsxs("div",{className:"w-20 whitespace-nowrap text-gray-700 dark:text-gray-400 font-medium",children:[t," stars"]}),a.jsx("div",{className:"h-2 w-full rounded bg-gray-200 dark:bg-gray-700 border border-gray-500",children:a.jsx("div",{style:{width:e+"%"},className:"bg-black dark:bg-gray-200 h-full rounded-md"})})]}),ua=({product:e,avgRating:t,reviews:s,totalRating:r})=>{const o=Oe().props.auth.user,{data:f,setData:c,post:b,processing:d,reset:S}=ie({rating:0,review:"",product:e.id}),u=l=>s.filter(R=>R.rating===l).length/s.length*100,j=l=>{l.preventDefault(),b("/submit-review",{data:f,onSuccess:()=>{f.review=""}})};return a.jsxs("div",{children:[a.jsx("div",{className:"mt-4 text-orange-800 text-med md:text-lg font-semibold",children:"Customer Ratings"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[a.jsxs("div",{className:"flex gap-2 md:gap-0 md:flex-col pb-2 items-center md:justify-center md:pb-0",children:[a.jsx("div",{className:"text-lg md:text-4xl font-semibold md:pt-1.5",children:t}),a.jsx("div",{className:"flex flex-wrap items-center gap-1 md:pt-1.5",children:[...Array(t)].map((l,i)=>a.jsx(oe,{className:"w-3 sm:w-3.5"},i))}),a.jsxs("div",{className:"text-base md:text-lg text-gray-600 md:pt-1.5",children:[r," Ratings"]})]}),a.jsxs("div",{className:"w-full",children:[a.jsx(E,{width:u(5),star:5}),a.jsx(E,{width:u(4),star:4}),a.jsx(E,{width:u(3),star:3}),a.jsx(E,{width:u(2),star:2}),a.jsx(E,{width:u(1),star:1})]})]}),s.map((l,i)=>a.jsxs("div",{className:"mb-4",children:[a.jsxs("div",{className:"flex gap-2",children:[a.jsx("div",{className:"mr-2 font-semibold text-orange-500",children:l.user.name}),a.jsx("div",{className:"flex flex-wrap items-center gap-1 md:pt-1.5",children:[...Array(l.rating)].map((R,H)=>a.jsx(oe,{className:"w-3 sm:w-3.5"},H))})]}),a.jsx("div",{className:"ml-auto text-sm text-gray-700 dark:text-gray-400",children:new Date(l.created_at).toDateString()}),a.jsx("div",{className:"no-tailwindcss-base",dangerouslySetInnerHTML:{__html:l.review}})]},i)),o&&a.jsxs("form",{className:"grid cols-1 md:grid-cols-1",onSubmit:j,children:[a.jsx("div",{className:"mb-2",children:a.jsx(ia,{onChange:l=>c("rating",l)})}),a.jsx("textarea",{className:"textarea textarea-primary mb-2",placeholder:"write your review",value:f.review,onChange:l=>c("review",l.target.value)}),a.jsx("button",{type:"submit",className:"bg-blue-500 p-2 mt-1 text-white",disabled:d,children:"Submit"})]})]})},ha=({app:e,cartItems:t,product:s,reviews:r,avgRating:o,totalRating:f})=>{const[c,b]=C.useState(1),{data:d,setData:S}=ie({product_id:s.id,quantity:c}),u=()=>{b(i=>i+1)},j=()=>{b(i=>i>1?i-1:1)},l=i=>{i.preventDefault(),ke.post(route("cart.store"),{...d,quantity:c})};return a.jsxs(ze,{cartItems:t,children:[a.jsx(Ee,{title:"Product Show"}),a.jsxs("div",{className:" p-4 m-auto md:px-40",children:[a.jsx(da,{category:"Category Name",title:"Product Detail"}),a.jsxs("div",{className:"container grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx("div",{className:"flex justify-center",children:a.jsx("img",{src:e.storage_url+"/"+s.image,className:"w-[400px] h-[400px]"})}),a.jsxs("div",{className:"flex flex-col justify-center",children:[a.jsx("h2",{className:"text-3xl font-medium uppercase mb-2",children:s.name.toUpperCase()}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("p",{className:"text-orange-800 font-semibold space-x-2",children:[a.jsx("span",{children:"Availability: "}),a.jsx("span",{className:"text-green-600",children:'"In Stock"'})]}),a.jsxs("p",{className:"space-x-2",children:[a.jsx("span",{className:"text-orange-800 font-semibold",children:"Brand: "}),a.jsx("span",{className:"text-gray-600",children:s.brand.name})]}),a.jsxs("p",{className:"space-x-2",children:[a.jsx("span",{className:"text-orange-800 font-semibold",children:"Category: "}),a.jsx("span",{className:"text-gray-600",children:s.category.name})]}),a.jsx("div",{className:"flex items-baseline space-x-2 font-roboto",children:a.jsxs("p",{className:"text-xl text-primary font-semibold",children:["Rs ",s.price]})}),a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("h3",{className:"text-sm text-orange-800 uppercase mb-1",children:"Quantity"}),a.jsxs("div",{className:"flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max",children:[a.jsx("div",{className:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none",onClick:j,children:"-"}),a.jsx("div",{className:"h-8 w-8  text-base flex items-center justify-center",children:c}),a.jsx("div",{className:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none",onClick:u,children:"+"})]})]})]}),a.jsx("div",{className:"mt-4",children:a.jsx("button",{onClick:l,className:"bg-orange-500 text-white border border-primary  px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-600",children:"Add to cart"})})]})]}),a.jsxs("div",{className:"container mt-6 border-b border-gray-200",children:[a.jsx("h3",{className:"border-b border-gray-200 font-roboto text-orange-800 pt-3 pb-3 font-medium",children:"Product Description"}),a.jsx("div",{className:"md:w-3/5 pt-4 pb-4",children:a.jsx("p",{children:s.description})})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2",children:a.jsx(ua,{product:s,avgRating:o,reviews:r,totalRating:f})})]})]})};export{ha as default};
