import{i as w,r as g,l as V,t as L,v as G,q as Q,j as d,a as P,y as U}from"./app-C5aQXtj4.js";import{x as J,g as Y,C as z,c as M,o as Z,ap as K,aq as k,ar as ee,as as te,at as re,T as A,au as I,av as oe,aw as ae,ax as E,S as ne,B as se,aa as ie}from"./index-DORmM16D.js";import{S as F,L as le,b as de,a as ce}from"./index-BtetBG5f.js";function ge(t,e,o){return typeof o=="boolean"?o:t.length?!0:J(e).some(a=>a.type===F)}const ue=t=>{const{componentCls:e,bodyBg:o,lightSiderBg:r,lightTriggerBg:a,lightTriggerColor:i}=t;return{[`${e}-sider-light`]:{background:r,[`${e}-sider-trigger`]:{color:i,background:a},[`${e}-sider-zero-width-trigger`]:{color:i,background:a,border:`1px solid ${o}`,borderInlineStart:0}}}},he=t=>{const{antCls:e,componentCls:o,colorText:r,triggerColor:a,footerBg:i,triggerBg:l,headerHeight:n,headerPadding:s,headerColor:c,footerPadding:u,triggerHeight:b,zeroTriggerHeight:S,zeroTriggerWidth:C,motionDurationMid:B,motionDurationSlow:h,fontSize:x,borderRadius:p,bodyBg:v,headerBg:T,siderBg:j}=t;return{[o]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:v,"&, *":{boxSizing:"border-box"},[`&${o}-has-sider`]:{flexDirection:"row",[`> ${o}, > ${o}-content`]:{width:0}},[`${o}-header, &${o}-footer`]:{flex:"0 0 auto"},[`${o}-sider`]:{position:"relative",minWidth:0,background:j,transition:`all ${B}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${e}-menu${e}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:b},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:b,color:a,lineHeight:w(b),textAlign:"center",background:l,cursor:"pointer",transition:`all ${B}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:n,insetInlineEnd:t.calc(C).mul(-1).equal(),zIndex:1,width:C,height:S,color:a,fontSize:t.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:j,borderStartStartRadius:0,borderStartEndRadius:p,borderEndEndRadius:p,borderEndStartRadius:0,cursor:"pointer",transition:`background ${h} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${h}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:t.calc(C).mul(-1).equal(),borderStartStartRadius:p,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:p}}}}},ue(t)),{"&-rtl":{direction:"rtl"}}),[`${o}-header`]:{height:n,padding:s,color:c,lineHeight:w(n),background:T,[`${e}-menu`]:{lineHeight:"inherit"}},[`${o}-footer`]:{padding:u,color:r,fontSize:x,background:i},[`${o}-content`]:{flex:"auto",color:r,minHeight:0}}},me=t=>{const{colorBgLayout:e,controlHeight:o,controlHeightLG:r,colorText:a,controlHeightSM:i,marginXXS:l,colorTextLightSolid:n,colorBgContainer:s}=t,c=r*1.25;return{colorBgHeader:"#001529",colorBgBody:e,colorBgTrigger:"#002140",bodyBg:e,headerBg:"#001529",headerHeight:o*2,headerPadding:`0 ${c}px`,headerColor:a,footerPadding:`${i}px ${c}px`,footerBg:e,siderBg:"#001529",triggerHeight:r+l*2,triggerBg:"#002140",triggerColor:n,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:s,lightTriggerBg:s,lightTriggerColor:a}},X=Y("Layout",t=>[he(t)],me,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var D=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(o[r[a]]=t[r[a]]);return o};function $(t){let{suffixCls:e,tagName:o,displayName:r}=t;return a=>g.forwardRef((l,n)=>g.createElement(a,Object.assign({ref:n,suffixCls:e,tagName:o},l)))}const H=g.forwardRef((t,e)=>{const{prefixCls:o,suffixCls:r,className:a,tagName:i}=t,l=D(t,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:n}=g.useContext(z),s=n("layout",o),[c,u,b]=X(s),S=r?`${s}-${r}`:s;return c(g.createElement(i,Object.assign({className:M(o||S,a,u,b),ref:e},l)))}),fe=g.forwardRef((t,e)=>{const{direction:o}=g.useContext(z),[r,a]=g.useState([]),{prefixCls:i,className:l,rootClassName:n,children:s,hasSider:c,tagName:u,style:b}=t,S=D(t,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),C=Z(S,["suffixCls"]),{getPrefixCls:B,layout:h}=g.useContext(z),x=B("layout",i),p=ge(r,s,c),[v,T,j]=X(x),W=M(x,{[`${x}-has-sider`]:p,[`${x}-rtl`]:o==="rtl"},h==null?void 0:h.className,l,n,T,j),_=g.useMemo(()=>({siderHook:{addSider:O=>{a(N=>[].concat(V(N),[O]))},removeSider:O=>{a(N=>N.filter(q=>q!==O))}}}),[]);return v(g.createElement(le.Provider,{value:_},g.createElement(u,Object.assign({ref:e,className:W,style:Object.assign(Object.assign({},h==null?void 0:h.style),b)},C),s)))}),be=$({tagName:"div",displayName:"Layout"})(fe),xe=$({suffixCls:"header",tagName:"header",displayName:"Header"})(H),pe=$({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(H),ye=$({suffixCls:"content",tagName:"main",displayName:"Content"})(H),f=be;f.Header=xe;f.Footer=pe;f.Content=ye;f.Sider=F;f._InternalSiderContext=de;const Se=t=>{const e=t!=null&&t.algorithm?L(t.algorithm):L(k),o=Object.assign(Object.assign({},K),t==null?void 0:t.token);return G(o,{override:t==null?void 0:t.token},e,ee)};function Ce(t){const{sizeUnit:e,sizeStep:o}=t,r=o-2;return{sizeXXL:e*(r+10),sizeXL:e*(r+6),sizeLG:e*(r+2),sizeMD:e*(r+2),sizeMS:e*(r+1),size:e*r,sizeSM:e*r,sizeXS:e*(r-1),sizeXXS:e*(r-1)}}const Be=(t,e)=>{const o=e??k(t),r=o.fontSizeSM,a=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),Ce(e??t)),te(r)),{controlHeight:a}),re(Object.assign(Object.assign({},o),{controlHeight:a})))},m=(t,e)=>new A(t).setAlpha(e).toRgbString(),y=(t,e)=>new A(t).lighten(e).toHexString(),je=t=>{const e=I(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},ke=(t,e)=>{const o=t||"#000",r=e||"#fff";return{colorBgBase:o,colorTextBase:r,colorText:m(r,.85),colorTextSecondary:m(r,.65),colorTextTertiary:m(r,.45),colorTextQuaternary:m(r,.25),colorFill:m(r,.18),colorFillSecondary:m(r,.12),colorFillTertiary:m(r,.08),colorFillQuaternary:m(r,.04),colorBgElevated:y(o,12),colorBgContainer:y(o,8),colorBgLayout:y(o,0),colorBgSpotlight:y(o,26),colorBgBlur:m(r,.04),colorBorder:y(o,26),colorBorderSecondary:y(o,19)}},$e=(t,e)=>{const o=Object.keys(oe).map(a=>{const i=I(t[a],{theme:"dark"});return new Array(10).fill(1).reduce((l,n,s)=>(l[`${a}-${s+1}`]=i[s],l[`${a}${s+1}`]=i[s],l),{})}).reduce((a,i)=>(a=Object.assign(Object.assign({},a),i),a),{}),r=e??k(t);return Object.assign(Object.assign(Object.assign({},r),o),ae(t,{generateColorPalettes:je,generateNeutralColorPalettes:ke}))};function ve(){const[t,e,o]=ne();return{theme:t,token:e,hashId:o}}const Te={defaultConfig:E,defaultSeed:E.token,useToken:ve,defaultAlgorithm:k,darkAlgorithm:$e,compactAlgorithm:Be,getDesignToken:Se},{Header:Oe,Content:Ne,Sider:ze}=f,R=[{key:"/admin/dashboard",label:"Dashboard"},{key:"/admin/brands",label:"Brands"},{key:"/admin/categories",label:"Categories"},{key:"/admin/products",label:"Products"},{key:"/admin/orders",label:"Orders"},{key:"/admin/sliders",label:"Sliders"}],He=({user:t,children:e})=>{const{token:{colorBgContainer:o,borderRadiusLG:r}}=Te.useToken(),a=n=>{U.visit(n.key)},{url:i}=Q(),l=(n,s)=>{let c="";return s.forEach(u=>{n.startsWith(u.key)&&u.key.length>c.length&&(c=u.key)}),c};return d.jsxs(f,{children:[d.jsxs(ze,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:n=>{console.log(n)},onCollapse:(n,s)=>{console.log(n,s)},children:[d.jsx("div",{className:"text-orange-500 font-bold text-2xl text-center p-4",children:"SuLoveSewa"}),d.jsx(ce,{theme:"dark",mode:"inline",defaultSelectedKeys:[l(i,R)],items:R,onClick:a})]}),d.jsxs(f,{children:[d.jsx(Oe,{style:{padding:0,background:o},children:d.jsxs("div",{className:"flex justify-end mr-2 gap-2",children:[d.jsx(P,{href:route("profile.edit"),children:d.jsx(se,{className:"uppercase font-bold text-green-500",children:t.name})}),d.jsx(P,{as:"button",href:route("logout"),className:"text-red-600",method:"post",children:d.jsx(ie,{size:20})})]})}),d.jsx(Ne,{style:{margin:"24px 16px 0"},children:d.jsx("div",{style:{padding:24,minHeight:"89vh",background:o,borderRadius:r},children:e})})]})]})},Ee=He;export{Ee as A};
