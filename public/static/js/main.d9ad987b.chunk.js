(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l);a(32);var o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dashboard"))},m=a(25),i=function(e){var t=e.type,a=void 0===t?"text":t,n=e.register,l=e.className,c=e.name,o=e.addClass,m=e.placeholder,i=e.required,u=l||"w-full p-2 border border-gray-600 border-solid outline-none";return r.a.createElement("input",{type:a,ref:n({required:i}),name:c,className:"".concat(u," ").concat(o),placeholder:m})},u=a(23),s=a.n(u);var d=function(){var e=Object(m.a)(),t=e.register,a=e.errors,n=e.handleSubmit;return r.a.createElement("form",{onSubmit:n((function(e){s.a.post("/api/auth/login",e).then((function(e){console.log(e)}))})),className:"px-8 pt-6 pb-8"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",null,r.a.createElement(i,{placeholder:"Email",name:"email",register:t,required:!0}),a.email&&"Email is required")),r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",null,r.a.createElement(i,{placeholder:"Password",name:"password",register:t,required:!0}))),r.a.createElement("button",{type:"submit",className:"bg-primary px-4 py-2 text-white w-full cursor-pointer"},"Submit"))};var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-gray-300 w-full"},r.a.createElement("div",{className:"flex-col flex justify-center h-screen md:w-1/3 lg:w-1/4 mx-auto"},r.a.createElement("div",{className:"bg-white mb-16 pt-4"},r.a.createElement("h1",{className:"text-center text-3xl font-heading font-semibold"},"RxCP"),r.a.createElement(d,null)))))},E=a(8),h=a(1),b=a(26),g=Object(n.createContext)(null);var f=function(e){var t=e.component,a=Object(b.a)(e,["component"]),l=Object(n.useContext)(g);return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/admin/login"})}}))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404 Page Not Found."))};var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.Provider,{value:null},r.a.createElement(E.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/admin/login",component:p}),r.a.createElement(f,{exact:!0,path:"/",component:o}),r.a.createElement(f,{path:"/admin",component:o}),r.a.createElement(f,{path:"/dashboard",component:o}),r.a.createElement(h.b,{path:"*"},r.a.createElement(v,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d9ad987b.chunk.js.map