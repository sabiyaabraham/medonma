"use strict";(self.webpackChunkmedonma=self.webpackChunkmedonma||[]).push([[252],{1472:(e,a,n)=>{n.d(a,{c:()=>o});const o=function(){const e="https://api.medonma.me/api/v1/",a=async(a,n,o)=>{var t="".concat(e).concat(n);const i=localStorage.getItem("token"),r={"Content-Type":"application/json"};i&&(r.Authorization="Bearer ".concat(i));let s={method:a,headers:r};if("GET"!==a)s.body=JSON.stringify(o);else if(o){const i=new URLSearchParams(o).toString();s={...s,method:a,headers:r},t="".concat(e).concat(n,"?").concat(i)}try{const e=await fetch(t,s);return await e.json()}catch(l){return console.error("Request failed:",l.message),{error:!0,message:l.message}}};return{get:(e,n)=>a("GET",e,n),put:(e,n)=>a("PUT",e,n),post:(e,n)=>a("POST",e,n),del:(e,n)=>a("DELETE",e,n)}}()},3148:(e,a,n)=>{n.d(a,{c:()=>c});n(9060);var o=n(6600),t=n(6768),i=n(6880),r=n(7256),s=n(9e3),l=n(2496);const c=()=>(0,l.jsx)(o.c,{position:"static",style:{boxShadow:"none"},children:(0,l.jsxs)(t.c,{children:[(0,l.jsx)(i.c,{variant:"h6",component:"div",sx:{flexGrow:1},children:"MEDONMA LIFE CARE"}),(0,l.jsxs)(r.c,{sx:{display:{xs:"none",md:"flex"}},children:[(0,l.jsx)(s.c,{color:"inherit",onClick:()=>window.location.href="/home",children:"Home"}),(0,l.jsx)(s.c,{color:"inherit",onClick:()=>window.location.href="/about",children:"About"}),(0,l.jsx)(s.c,{color:"inherit",onClick:()=>window.location.href="/contact",children:"Contact"}),(0,l.jsx)(s.c,{color:"inherit",onClick:()=>window.location.href="/login",children:"Login"}),(0,l.jsx)(s.c,{color:"inherit",onClick:()=>window.location.href="/signup",children:"Signup"})]})]})})},3788:(e,a,n)=>{n.d(a,{c:()=>C});var o=n(9060),t=n(7828),i=n(6880),r=n(1076),s=n(2552),l=n(1948),c=n(9e3),d=n(272),m=n(4240),u=n(916),h=n(2128),p=n(3200),g=n(2924),x=n(5624),j=n(7256),b=n(784),v=n(2888),f=n(1472),w=n(2496);const y=(0,b.c)();const C=e=>{let{formType:a,submitBtn:n,formTitle:b}=e;const[C,D]=(0,o.useState)({email:"",password:"",role:"donar",dob:"",name:"",organisationName:"",hospitalName:"",website:"",address:"",phone:""}),S=e=>{const{name:a,value:n}=e.target;D({...C,[a]:n})},[k,T]=(0,o.useState)(null),[I,N]=(0,o.useState)(!1),W=(e,a)=>{"clickaway"!==a&&N(!1)},q=async e=>{if(e.preventDefault(),C.email){if(T(null),"login"===a)try{const e=await fetch("https://api.ipregistry.co/?key=avx02aeoi63vo3vt"),a=await e.json(),n={email:C.email,password:C.password,"deviceData[publicIP]":a.ip,"deviceData[timeZone]":a.time_zone.id,"deviceData[location][latitude]":a.location.latitude,"deviceData[location][longitude]":a.location.longitude,"deviceData[location_]":"".concat(a.location.city,", ").concat(a.location.region.name),"deviceData[browser][isBrowser]":!0,"deviceData[browser][isMobile]":navigator.userAgentData.mobile,"deviceData[browser][userAgent]":a.user_agent.header,"deviceData[browser][browserName]":a.user_agent.name,"deviceData[browser][browserVersion]":a.user_agent.version,"deviceData[os]":a.user_agent.os.name,"deviceData[device]":a.user_agent.device.name,"deviceData[deviceID]":"fyuusvjhatsyudyguyjcmkdksajdasidjydfudsiufbd"},o=await f.c.get("auth/login",n);o.error?(T(o.message),N(!0)):(localStorage.setItem("token",o.data.token),localStorage.setItem("email",o.data.email),localStorage.setItem("role",C.role),window.location.href="/"+C.role+"/dashboard")}catch(k){T(k.message),N(!0)}else try{const e=await f.c.get("auth/create",C);e.error?(T(e.message),N(!0)):(localStorage.setItem("email",e.data.email),localStorage.setItem("verify",!0),window.location.href="/verify")}catch(k){T(k.message),N(!0)}D({email:"",password:"",role:"donar",dob:"",name:"",organisationName:"",hospitalName:"",website:"",address:"",phone:""})}else T("Please provide an email address."),N(!0)};return(0,w.jsx)(v.c,{theme:y,children:(0,w.jsxs)(t.cp,{container:!0,component:"main",sx:{height:"95vh"},children:[(0,w.jsx)(h.cp,{}),(0,w.jsx)(t.cp,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"login"===a?"url(https://medonma.me/assets/images/banner1.jpg)":"url(https://medonma.me/assets/images/banner2.jpg)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}}),(0,w.jsx)(t.cp,{item:!0,xs:6,sm:8,md:5,component:x.c,elevation:6,square:!0,children:(0,w.jsxs)(j.c,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(i.c,{component:"h1",variant:"h5",children:b}),(0,w.jsx)("hr",{}),(0,w.jsx)(t.cp,{item:!0,xs:12,children:(0,w.jsxs)(r.c,{row:!0,value:C.role,name:"role",onChange:S,children:[(0,w.jsx)(s.c,{value:"donar",control:(0,w.jsx)(l.c,{}),label:"Donar"}),(0,w.jsx)(s.c,{value:"admin",control:(0,w.jsx)(l.c,{}),label:"Admin"}),(0,w.jsx)(s.c,{value:"hospital",control:(0,w.jsx)(l.c,{}),label:"Hospital"}),(0,w.jsx)(s.c,{value:"organisation",control:(0,w.jsx)(l.c,{}),label:"Organisation"})]})}),"login"===a?(0,w.jsxs)(j.c,{component:"form",noValidate:!0,onSubmit:q,sx:{mt:5},children:[(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:C.email,onChange:S,autoFocus:!0}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:C.password,onChange:S,id:"password",autoComplete:"current-password"}),(0,w.jsx)(s.c,{control:(0,w.jsx)(g.c,{value:"remember",color:"primary"}),label:"Remember me"}),(0,w.jsx)(c.c,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,w.jsxs)(t.cp,{container:!0,children:[(0,w.jsx)(t.cp,{item:!0,xs:!0,children:(0,w.jsx)(d.c,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,w.jsx)(t.cp,{item:!0,children:(0,w.jsx)(d.c,{href:"signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]}):(0,w.jsxs)(j.c,{component:"form",noValidate:!0,onSubmit:q,sx:{mt:1},children:[("admin"===C.role||"donar"===C.role)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Name",inputType:"text",name:"name",autoComplete:"name",id:"name",value:C.name,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Date of Birth",inputType:"Date",name:"dob",autoComplete:"dob",id:"dob",value:C.dob,onChange:S})]}),"organisation"===C.role&&(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Organisation Name",inputType:"text",name:"organisationName",value:C.organisationName,onChange:S}),"hospital"===C.role&&(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Hospital Name",inputType:"text",name:"hospitalName",value:C.hospitalName,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Email",inputType:"email",name:"email",value:C.email,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Password",inputType:"password",name:"password",value:C.password,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Website",inputType:"text",name:"website",value:C.website,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Address",inputType:"text",name:"address",value:C.address,onChange:S}),(0,w.jsx)(p.c,{margin:"normal",required:!0,fullWidth:!0,label:"Phone",inputType:"text",name:"phone",value:C.phone,onChange:S}),(0,w.jsx)(c.c,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign UP"}),(0,w.jsx)(t.cp,{container:!0,children:(0,w.jsx)(t.cp,{item:!0,children:(0,w.jsx)(d.c,{href:"/login",variant:"body2",children:"Do you have an account? Sign in"})})})]}),(0,w.jsx)(m.c,{open:I,autoHideDuration:6e3,onClose:W,children:(0,w.jsx)(u.c,{elevation:6,variant:"filled",severity:"error",onClose:W,children:k})})]})})]})})}},3252:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});var o=n(9060),t=n(3148),i=n(3788),r=n(2496);const s=()=>((0,o.useEffect)((()=>{if(localStorage.getItem("token")){const e=localStorage.getItem("role");window.location.href="/"+e+"/dashboard"}}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.c,{}),(0,r.jsx)(i.c,{formTitle:"Register",submitBtn:"Register",formType:"register"})]}))}}]);
//# sourceMappingURL=252.378b02aa.chunk.js.map