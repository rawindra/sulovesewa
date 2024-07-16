import{W as j,j as e,Y as u,y as g}from"./app-C5aQXtj4.js";import{P as b}from"./PrimaryButton-CBfrB9e_.js";import{A as f}from"./AuthenticatedLayout-H0Jw6ZYV.js";import{S as r}from"./index-DkyBHFyX.js";import{I as c}from"./index-CiCkcclO.js";import{T as d}from"./index-Cg0nGuYt.js";import"./index-DORmM16D.js";import"./index-BtetBG5f.js";import"./index-DUXohZCm.js";function O({auth:m,brands:l,categories:o,product:n}){const{data:t,setData:s,processing:p,errors:i}=j({name:n.name,description:n.description,image:"",price:n.price,stock:n.stock,category_id:n.category_id,brand_id:n.brand_id}),{TextArea:x}=c;function h(a){a.preventDefault(),g.post(route("admin.products.update",n.id),{_method:"put",...t})}return e.jsxs(f,{user:m.user,children:[e.jsx(u,{title:"Create Brand"}),e.jsxs("form",{onSubmit:h,className:"flex flex-col gap-2 max-w-md",children:[e.jsx("label",{children:"Select Brand"}),e.jsxs(r,{placeholder:"Select a brand",optionFilterProp:"label",value:t.brand_id,onChange:a=>s("brand_id",a),children:[e.jsx(r.Option,{value:"",children:"None"}),l&&l.map(a=>e.jsx(r.Option,{value:a.id,label:a.name,children:a.name},a.id))]}),e.jsx("label",{children:"Select Category"}),e.jsxs(r,{placeholder:"Select a category",optionFilterProp:"label",value:t.category_id,onChange:a=>s("category_id",a),children:[e.jsx(r.Option,{value:"",children:"None"}),o&&o.map(a=>e.jsx(r.Option,{value:a.id,label:a.name,children:a.name},a.id))]}),e.jsx("label",{children:"Name"}),e.jsx(c,{value:t.name,onChange:a=>s("name",a.target.value)}),i.name&&e.jsx("span",{className:"text-red-500",children:i.name}),e.jsx("label",{children:"Description"}),e.jsx(x,{rows:4,value:t.description,onChange:a=>s("description",a.target.value)}),i.description&&e.jsx("span",{className:"text-red-500",children:i.description}),e.jsx("label",{children:"Price"}),e.jsx(d,{min:1,value:t.price,onChange:a=>s("price",a)}),i.price&&e.jsx("span",{className:"text-red-500",children:i.price}),e.jsx("label",{children:"Stock"}),e.jsx(d,{min:1,value:t.stock,onChange:a=>s("stock",a)}),i.stock&&e.jsx("span",{className:"text-red-500",children:i.stock}),e.jsx("label",{children:"Pick a Image"}),e.jsx("input",{type:"file",onChange:a=>{s("image",a.target.files[0])}}),i.image&&e.jsx("span",{className:"text-red-500",children:i.image}),e.jsx("div",{className:"mt-2",children:e.jsx(b,{disabled:p,children:"Update"})})]})]})}export{O as default};
