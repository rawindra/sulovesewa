import{j as r,Y as d}from"./app-C5aQXtj4.js";import{A as i}from"./AuthenticatedLayout-H0Jw6ZYV.js";import"./index-DORmM16D.js";import"./index-BtetBG5f.js";function a({auth:e,orderItems:s}){return r.jsxs(i,{user:e.user,children:[r.jsx(d,{title:"Show Order"}),r.jsx("div",{className:"overflow-x-auto mt-4",children:r.jsxs("table",{className:"table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Product Name"}),r.jsx("th",{children:"Quantity"}),r.jsx("th",{children:"Price"})]})}),r.jsx("tbody",{children:s.map(t=>r.jsxs("tr",{children:[r.jsx("td",{children:t.product.name}),r.jsx("td",{children:t.quantity}),r.jsx("td",{children:t.price})]},t.id))})]})})]})}export{a as default};
