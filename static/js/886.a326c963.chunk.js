"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[886],{2886:function(t,n,e){e.r(n),e.d(n,{default:function(){return I}});var r,i,a,o,c,s=e(2561),l=e(6909),d=e(4420),u=e(2580),m=e(184),f=function(){var t=(0,d.I0)(),n=(0,d.v9)(u.Af).map((function(t){return t.name}));var e=function(t){"Escape"===t.key&&r()},r=function t(n){var r=document.querySelector(".modalDivContactForm"),i=document.querySelector(".firstDivContactForm"),a=document.querySelectorAll(".inputsAdd");function o(){r.removeEventListener("click",t),document.removeEventListener("keydown",e),a.forEach((function(t){return t.blur()})),r.classList.remove(l.Z.modalDivContactFormActive),i.classList.remove(l.Z.firstDivContactFormActive)}n?n.target.classList.contains(l.Z.modalDivContactFormActive)&&o():o()};return(0,m.jsx)("div",{className:[l.Z.modalDivContactForm,"modalDivContactForm"].join(" "),children:(0,m.jsxs)("div",{className:[l.Z.firstDivContactForm,"firstDivContactForm"].join(" "),children:[(0,m.jsx)("div",{className:l.Z.divForMiniContactForm,children:(0,m.jsx)("button",{className:l.Z.buttonAddMiniContactForm,type:"button",onClick:function(){var t=document.querySelector(".modalDivContactForm"),n=document.querySelector(".firstDivContactForm"),i=document.querySelector(".inputNameAdd");t.classList.add(l.Z.modalDivContactFormActive),n.classList.add(l.Z.firstDivContactFormActive),setTimeout((function(){i.focus()}),100),t.addEventListener("click",r),document.addEventListener("keydown",e)},children:"Add"})}),(0,m.jsx)("div",{className:l.Z.divContactForm,children:(0,m.jsxs)("form",{className:l.Z.formContactForm,onSubmit:function(e){e.preventDefault();var i=e.currentTarget.elements.name.value;if(n.some((function(t){return t.toLowerCase()===i.toLowerCase()})))alert("".concat(i," is already in contacts."));else{var a=e.currentTarget.elements.number.value,o={name:i,number:a};t((0,s.uK)(o)),e.currentTarget.reset(),r()}},children:[(0,m.jsxs)("label",{className:l.Z.labelContactForm,children:[(0,m.jsx)("span",{className:l.Z.nameInputContactForm,children:"Name"}),(0,m.jsx)("input",{className:[l.Z.inputContactForm,"inputNameAdd","inputsAdd"].join(" "),type:"text",name:"name",required:!0})]}),(0,m.jsxs)("label",{className:l.Z.labelContactForm,children:[(0,m.jsx)("span",{className:l.Z.nameInputContactForm,children:"Number"}),(0,m.jsx)("input",{className:[l.Z.inputContactForm,"inputsAdd"].join(" "),type:"tel",name:"number",required:!0})]}),(0,m.jsx)("button",{className:l.Z.buttonContactForm,type:"submit",children:"Add contact"})]})})]})})},v=e(1473),h=function(){var t=(0,d.v9)(u.AD),n=(0,d.I0)();return(0,m.jsx)("label",{className:l.Z.labelFilter,children:(0,m.jsx)("input",{value:t,className:l.Z.inputFilter,type:"text",name:"filter",placeholder:"Please start typing the desired name",onChange:function(t){t.preventDefault();var e=t.target.value;n((0,v.T)(e))}})})},p=e(2791),x=e(3433),C=e(168),Z=e(7924),g=(0,Z.F4)(r||(r=(0,C.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),j=Z.ZP.div(i||(i=(0,C.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),y=Z.ZP.div(a||(a=(0,C.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 1200px;\n  height: 1200px;\n"]))),F=Z.ZP.div(o||(o=(0,C.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),g),b=(0,Z.ZP)(F)(c||(c=(0,C.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),L=function(){return(0,m.jsx)(j,{children:(0,m.jsx)(y,{children:(0,x.Z)(Array(8)).map((function(t,n){return(0,m.jsx)(b,{},n)}))})})},w=e(7392),N=e(9439),A=function(t){var n=t.contact,e=(0,d.I0)();return(0,m.jsxs)("li",{className:l.Z.itemContscts,children:[(0,m.jsxs)("p",{className:l.Z.pItemContactsName,children:[n.name,":"]}),(0,m.jsx)("p",{className:l.Z.pItemContactsNumber,children:n.phone}),(0,m.jsx)("button",{id:n.id,className:l.Z.buttonDelete,type:"button",onClick:function(){var t=n.id;e((0,s.GK)(t))},children:"Delete"})]},n.id)},E=e(7386),D=function(){var t=(0,d.I0)(),n=(0,d.v9)(u.Af),e=(0,d.v9)(u.AD),r=(0,d.v9)(u.yS),i=(0,p.useState)(null),a=(0,N.Z)(i,2),o=a[0],c=a[1],s=(0,p.useState)(0),f=(0,N.Z)(s,2),v=f[0],h=f[1],x=(0,p.useState)(!1),C=(0,N.Z)(x,2),Z=C[0],g=C[1],j=(0,p.useRef)(null),y=j.current;return(0,p.useEffect)((function(){r>0&&j.current&&(j.current.scrollLeft=r+50,t((0,E.B)(0)))})),e.length>0&&(n=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))),(0,p.useEffect)((function(){var t=document.querySelectorAll(".itemContact"),n=document.querySelector(".listContactsForGap"),e=window.innerWidth;t.forEach((function(t){t.style.minWidth=e/2+"px",t.style.height=e/3.334+"px"})),n.style.gap=e/20+"px";var r=function(){h(j.current.scrollLeft),t.forEach((function(t){return a(t)}))};!Z&&j.current&&(g(!0),j.current.removeEventListener("scroll",r),j.current.addEventListener("scroll",r));var i=function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.forEach((function(t){t.style.minWidth=e/2+"px",t.style.height=e/3.334+"px",t.classList.remove(l.Z.itemContactActive)})),n.style.minWidth=e/2*1.4+"px",n.style.height=e/3.334*1.4+"px",n.classList.add(l.Z.itemContactActive),c(n.getAttribute("id"));var a=j.current.scrollLeft;j.current.style.scrollBehavior="smooth",0!==i&&(j.current.scrollLeft=a+i),j.current.removeEventListener("scroll",r),j.current.removeEventListener("scroll",r),setTimeout((function(){j.current&&j.current.addEventListener("scroll",r)}),1e3)};t.forEach((function(t){return t.addEventListener("click",(function(){var n=t.getBoundingClientRect(),e=j.current.getBoundingClientRect();if(n.x<e.x+e.width/2){var r=0-e.width/2+n.x+280;i(t,r)}else{var a=0-e.width/2+n.x+80;i(t,a)}}))}));var a=function(t){var n=t.getBoundingClientRect(),e=j.current.getBoundingClientRect(),r=e.x+e.width/2-n.width/2+50-270,a=e.x+e.width/2+n.width/2-50-270;if(n.x>r&&n.x<e.x+e.width/2&&!t.classList.contains(l.Z.itemContactActive)){var o=0-n.width/2+200;i(t,o)}else if(n.x>e.x+e.width/2&&n.x<a&&!t.classList.contains(l.Z.itemContactActive)){var c=0+n.width/2-100;i(t,c)}};return function(){y&&y.removeEventListener("scroll",r)}}),[n,Z,y]),(0,m.jsx)("ul",{ref:j,className:[l.Z.listContacts,"listContactsForGap"].join(" "),children:0!==n.length&&n.map((function(t){return(0,m.jsx)("li",{id:t.id,className:[l.Z.itemContact,"itemContact"].join(" "),children:(0,m.jsx)(A,{contact:t,index:n.indexOf(t),id:t.id,activeId:o,actualScroll:v})},t.id)}))})},k=function(){var t=window.innerWidth,n=(0,d.v9)(u.gt),e=(0,d.v9)(u.MH),r=(0,d.I0)(),i=(0,d.v9)(u.xU),a=(0,d.v9)(u.zh);(0,p.useEffect)((function(){e.length<n.length&&r((0,w.Kj)(function(){var t=[],e=n.length-1;function r(){var n=Math.floor(Math.random()*e),i=t.length;t[i-1]!==n&&t[i-2]!==n&&t[i-3]!==n&&t[i-4]!==n&&t[i-5]!==n?t.push(n):r()}for(var i=0;i<=e;i++)r();return t}()))})),(0,p.useEffect)((function(){r((0,s.yF)())}),[r]);var o=20;return o=t>1e3?50:t>500&&t<=1e3?t/20:t/40,(0,m.jsx)(m.Fragment,{children:a?(0,m.jsx)("h2",{children:"Oopsss...Something went wrong..."}):(0,m.jsx)("div",{id:"divForContactList",className:l.Z.divForContactList,style:{paddingLeft:o,paddingRight:o},children:i&&!a?(0,m.jsx)(L,{}):(0,m.jsx)(D,{})})})},S=e(5294),q=e(7379),I=function(){var t=(0,d.v9)(q.rK);return t&&(S.Z.defaults.headers.common.Authorization="Bearer ".concat(t)),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:l.Z.divContFiltPageUsers,children:[(0,m.jsx)(h,{}),(0,m.jsx)(f,{})]}),(0,m.jsx)(k,{})]})}}}]);
//# sourceMappingURL=886.a326c963.chunk.js.map