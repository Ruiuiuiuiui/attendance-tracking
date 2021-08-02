import{a as e}from"./index.762b0a16.js";import{_ as t}from"./DatePickRange.dc33b242.js";import{j as a,e as l,b as n,a as o,r,o as s,c as u,k as c,l as i,F as g,J as b,t as d}from"./vendor.6e1befea.js";const p={components:{DatePickRange:t},setup(){a((()=>{i()}));const t=l(new Date),r=n({size:1e3,type:"work"}),s=l([]),u=l([]),c=n(new Map),i=async()=>{const a=await e(r);s.value=a.data.body.content,u.value=a.data.body.content.map((e=>{let t=new Date(e.key.date),a=new Date(t.getFullYear(),0,1),l=t.getDay();0==l&&(l=7);let n=a.getDay();0==n&&(n=7);let o=Math.round((t.getTime()-a.getTime()+864e5*(n-l))/864e5);return{week:Math.ceil(o/7)+1,weekNumber:new Date(e.key.date).getDay(),date:e.key.date,duration:e.duration}})),console.log(u.value),r.timestamp1=o((()=>Date.parse(t.value.start))),r.timestamp2=o((()=>Date.parse(t.value.end))),c.clear();for(const e of u.value){let t=e.week,a=(e.duration||"").replace("PT","").replace("H",":").replace("M",":").replace("S","").split(":");a=3==a.length?60*(60*new Number(a[0])+new Number(a[1]))+new Number(a[2]):2==a.length?60*new Number(a[0])+new Number(a[1]):new Number(a[0]);let l=c.get(t);null==l?c.set(t,a):c.set(t,l+a)}console.log(s.value),console.log(c),console.log(new Date(new Date((new Date).getFullYear(),0,1).getTime()+133056e5-864e5*(new Date((new Date).getFullYear(),0,1).getDay()-7)).toLocaleDateString())};return{durationArr:s,tempMap:c,getSumWorkingTime:i,range:t}}},m=c("h3",null,"Attendance Report",-1),D=c("hr",null,null,-1),v={class:"navbar navbar-expand-lg navbar-light bg-light"},w={class:"container-fluid"},h=c("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[c("span",{class:"navbar-toggler-icon"})],-1),y={class:"collapse navbar-collapse"},k={class:"navbar-nav me-auto mb-2 mb-lg-0"},f={class:"d-flex align-items-center"},M={class:"d-flex align-items-center"},T=c("button",{type:"button",class:"btn btn-success"}," Daily ",-1),S=c("button",{type:"button",class:"btn btn-success"},"Weekly",-1),N=c("button",{type:"button",class:"btn btn-success"}," Monthly ",-1),x={class:"table-responsive"},F=c("h5",null,"Status：Work",-1),W={class:"table mt-3"},Y=c("thead",null,[c("tr",null,[c("th",null,"Date"),c("th",null,"Total Working Time")])],-1);p.render=function(e,t,a,l,n,o){const p=r("DatePickRange"),j=r("router-link");return s(),u(g,null,[m,D,c("nav",v,[c("div",w,[h,c("div",y,[c("ul",k,[c("li",f,[c(p,{modelValue:l.range,"onUpdate:modelValue":t[1]||(t[1]=e=>l.range=e)},null,8,["modelValue"]),c("button",{class:"btn btn-outline-success",onClick:t[2]||(t[2]=e=>l.getSumWorkingTime())}," Search ")])]),c("div",M,[c(j,{class:"nav-link",to:"/record/report"},{default:i((()=>[T])),_:1}),S,c(j,{class:"nav-link",to:"/report/reportmonthly"},{default:i((()=>[N])),_:1})])])])]),c("div",x,[F,c("table",W,[Y,c("tbody",null,[(s(!0),u(g,null,b(l.tempMap,(e=>(s(),u("tr",{key:e},[c("td",null,d(new Date(new Date((new Date).getFullYear(),0,1).getTime()+7*(e[0]-1)*864e5-864e5*(new Date((new Date).getFullYear(),0,1).getDay()-7)).toLocaleDateString().replaceAll("/","-")),1),c("td",null,d(`${Math.floor(e[1]/3600)}hr ${Math.floor((e[1]-3600*Math.floor(e[1]/3600))/60)} min ${parseInt(e[1]-3600*Math.floor(e[1]/3600)-60*Math.floor((e[1]-3600*Math.floor(e[1]/3600))/60))}s`),1)])))),128))])])])],64)};export default p;