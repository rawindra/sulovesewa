import{W as o,j as e,Y as d}from"./app-BM7AwQ8q.js";import{P as c}from"./PrimaryButton-DOiMIgwY.js";import{A as x}from"./AuthenticatedLayout-BHOzn-kr.js";import"./index-mZEDTe4X.js";import"./index-nsjdkozt.js";function h({auth:s}){const{data:r,setData:i,post:m,processing:n,errors:a}=o({image:""});function l(t){t.preventDefault(),m("/admin/sliders",r)}return e.jsxs(x,{user:s.user,children:[e.jsx(d,{title:"Create Slider"}),e.jsxs("form",{onSubmit:l,className:"flex flex-col gap-2 max-w-md",children:[e.jsx("label",{children:"Pick a Image"}),e.jsx("input",{type:"file",onChange:t=>{i("image",t.target.files[0])}}),a.image&&e.jsx("span",{className:"text-red-500",children:a.image}),e.jsx("div",{className:"mt-2",children:e.jsx(c,{disabled:n,children:"Create"})})]})]})}export{h as default};