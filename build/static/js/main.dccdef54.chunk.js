(this["webpackJsonpdemo-ssr"]=this["webpackJsonpdemo-ssr"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var s=n(32),r=n(0),a=n(27),o=n.n(a),i=n(7),l=n(14),c=n(16),u=n(31),d=n(30),p=n.n(d),m=n(2),b=function(e){var t=e.users,n=Object(r.useState)(""),s=Object(c.a)(n,2),a=(s[0],s[1]),o=Object(r.useState)(""),d=Object(c.a)(o,2),b=(d[0],d[1]),j=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onSubmit",t),e.next=3,p.a.post("http://localhost:3006/submit",t);case 3:n=e.sent,console.log(n,"response");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t?console.log("it has users"):console.log("doesnt have users")}),[t]),Object(m.jsx)(u.a,{initialValues:{email:t&&t.user1?t.user1.name:"",password:t&&t.user1?t.user1.password:""},validate:function(e){var t={};return e.email?e.password?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.password="Required":t.email="Required",t},onSubmit:function(){var e=Object(l.a)(Object(i.a)().mark((function e(t,n){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setSubmitting,e.next=3,j(t);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.values,n=e.errors,s=e.touched,r=e.handleChange,o=e.handleBlur,i=e.handleSubmit,l=e.isSubmitting;return Object(m.jsx)("form",{onSubmit:i,children:Object(m.jsxs)("div",{style:{display:"flex",margin:"30px auto",flexDirection:"column",width:"50%"},children:[Object(m.jsxs)("div",{style:{textAlign:"center",marginBottom:"20px"},children:[Object(m.jsxs)("label",{children:["Email: ",Object(m.jsx)("input",{type:"email",name:"email",onChange:function(e){a(e.target.value),r(e)},onBlur:o,value:t.email,style:{width:"300px"},placeholder:"Please enter email"})]}),n.email&&s.email&&Object(m.jsx)("div",{style:{color:"red"},children:n.email})]}),Object(m.jsxs)("div",{style:{textAlign:"center",marginBottom:"20px"},children:[Object(m.jsxs)("label",{children:["Password: ",Object(m.jsx)("input",{type:"password",name:"password",onChange:function(e){b(e.target.value),r(e)},onBlur:o,value:t.password,style:{width:"300px"},placeholder:"Please enter password"})]}),n.password&&s.password&&Object(m.jsx)("div",{style:{color:"red"},children:n.password})]}),Object(m.jsx)("div",{style:{textAlign:"center",marginBottom:"20px"},children:Object(m.jsx)("button",{type:"submit",disabled:l,style:{width:"200px",backgroundColor:"#4895d0",color:"#fff",fontWeight:"bold",padding:"5px"},children:"Submit"})})]})})}})},j=b;var h=function(e){var t=e.users;return console.log(t,"APP"),Object(m.jsx)(j,{users:t})},x={};console.log(document.getElementById("__PAGE_DATA__"),"PAGE DATA"),document.getElementById("__PAGE_DATA__")&&(x=JSON.parse(document.getElementById("__PAGE_DATA__").textContent)),console.log(x,"pageProps"),o.a.hydrate(Object(m.jsx)(h,Object(s.a)({},x)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.dccdef54.chunk.js.map