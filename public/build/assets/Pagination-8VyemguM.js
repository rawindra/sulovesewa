import{j as i,a as n}from"./app-BM7AwQ8q.js";const a=({className:t="",disabled:e,children:s,...o})=>i.jsx(n,{as:"button",...o,className:`inline-flex items-center uppercase px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${e&&"opacity-25"} `+t,disabled:e,children:s}),c=a,r=({links:t})=>i.jsx("div",{className:"flex justify-end",children:t.map((e,s)=>i.jsx(n,{href:e.url||"#","aria-current":"page",dangerouslySetInnerHTML:{__html:e.label},className:`${e.active?"active":""} relative z-10 inline-flex text-orange-500 items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"`},s))}),l=r;export{c as L,l as P};