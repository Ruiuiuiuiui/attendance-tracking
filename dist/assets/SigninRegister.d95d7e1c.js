import{e as s,f as e,r as a,g as t}from"./index.762b0a16.js";import{b as o,j as r,o as n,c as l,k as c,G as i,I as u,L as d}from"./vendor.6e1befea.js";const m={setup(){const n=s(),l=o({username:"",siteId:1,password:""}),c=async()=>{const s=await e(l),t=s.data.status;console.log(s),"ok"===t?(localStorage.setItem("transAdmin",s.data.body),a.push("/")):alert(s.data.msg)};!n.query.token&&r((()=>localStorage.removeItem("transAdmin")));return{user:l,userSignIn:c,userRegister:async()=>{const s=await t(l),e=s.data.status;console.log(s.data.msg),console.log(s),"ok"===e?(alert("Registration Successful !"),c()):alert(s.data.msg)}}}},g={class:"container"},p=c("div",{class:"col-md-6 mx-auto text-center"},[c("div",{class:"header-title"},[c("h1",{class:"wv-heading--title"},"Attendance Tracking")])],-1),f={class:"row"},v={class:"col-md-4 mx-auto"},b={class:"myform form"},y={name:"login"},w={class:"form-group"},I=c("div",{class:"space"},null,-1),k={class:"form-group"},x=c("div",{class:"space"},null,-1),S={class:"text-center"},h=c("div",{class:"col-md-12"},[c("div",{class:"login-or"},[c("hr",{class:"hr-or"}),c("span",{class:"span-or"},"or")])],-1),R={class:"form-group"};m.render=function(s,e,a,t,o,r){return n(),l("div",g,[p,c("div",f,[c("div",v,[c("div",b,[c("form",y,[c("div",w,[i(c("input",{type:"text",id:"userName",class:"form-control my-input",placeholder:"Username","onUpdate:modelValue":e[1]||(e[1]=s=>t.user.username=s)},null,512),[[u,t.user.username]])]),I,c("div",k,[i(c("input",{type:"password",id:"UserPassword",class:"form-control my-input",placeholder:"Password","onUpdate:modelValue":e[2]||(e[2]=s=>t.user.password=s),onKeyup:e[3]||(e[3]=d(((...s)=>t.userSignIn&&t.userSignIn(...s)),["enter"]))},null,544),[[u,t.user.password]])]),x,c("div",S,[c("button",{type:"button",class:"btn btn-block signin-button tx-tfm",onClick:e[4]||(e[4]=(...s)=>t.userSignIn&&t.userSignIn(...s))}," Sign In ")]),h,c("div",R,[c("button",{type:"button",class:"btn btn-block register-button tx-tfm",onClick:e[5]||(e[5]=(...s)=>t.userRegister&&t.userRegister(...s))}," Register ")])])])])])])};export default m;
