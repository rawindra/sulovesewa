import{W as l,j as e,Y as d}from"./app-C5aQXtj4.js";import{P as u}from"./PrimaryButton-CBfrB9e_.js";import{A as p}from"./AuthenticatedLayout-H0Jw6ZYV.js";import{I as x}from"./index-CiCkcclO.js";import"./index-DORmM16D.js";import"./index-BtetBG5f.js";import"./index-DUXohZCm.js";function C({auth:r}){const{data:s,setData:n,post:m,processing:i,errors:t}=l({name:""});function o(a){a.preventDefault(),m("/admin/brands")}return e.jsxs(p,{user:r.user,children:[e.jsx(d,{title:"Create Brand"}),e.jsxs("form",{onSubmit:o,className:"flex flex-col gap-2 max-w-md",children:[e.jsx("label",{children:"Name"}),e.jsx(x,{value:s.name,onChange:a=>n("name",a.target.value)}),t.name&&e.jsx("span",{className:"text-red-500",children:t.name}),e.jsx("div",{children:e.jsx(u,{disabled:i,children:"Create"})})]})]})}export{C as default};
