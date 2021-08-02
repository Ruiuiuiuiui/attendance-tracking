var a=Object.assign;import{a as e}from"./index.762b0a16.js";import{_ as t}from"./DatePickRange.dc33b242.js";import{o as n,c as l,k as s,A as r,F as o,J as i,t as g,b as u,e as c,j as p,w as m,a as d,r as b,l as v}from"./vendor.6e1befea.js";const P={props:["totalPages","page"],emits:["changePage","getData"],setup:(e,{emit:t})=>a(a({},e),{updatePage:a=>{a+1>=e.totalPages?t("changePage",e.totalPages-1):t("changePage",a+1<1?0:a),t("getData")}})},h={"aria-label":"Page navigation example"},k={class:"pagination"},f=s("span",{"aria-hidden":"true"},"«",-1),y=s("span",{"aria-hidden":"true"},"»",-1);function T(){const a=c(""),e=u({timestamp1:"",timestamp2:""}),{getPage:t,totalPages:n}={getPage:u({page:0,size:10}),totalPages:c(0)},l=c([]);return{durationArr:c({}),sumWorkingTime:c({}),currentSort:a,getData:async(s,r,o)=>{"search"===o&&(t.page=0),a.value=r,t.sort=r,t.timestamp1=e.timestamp1,t.timestamp2=e.timestamp2;const i=await s(t);l.value=i.data.body.content,n.value=i.data.body.totalPages},getPage:t,totalPages:n,data:l,dateRang:e,changePage:a=>{t.page=a}}}P.render=function(a,e,t,u,c,p){return n(),l("nav",h,[s("ul",k,[s("li",{class:["page-item",{disabled:0===t.page}]},[s("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=r((a=>u.updatePage(t.page-1)),["prevent"]))},[f])],2),(n(!0),l(o,null,i(t.totalPages,(a=>(n(),l("li",{class:["page-item",{active:a===t.page+1}],key:a},[s("a",{class:"page-link",href:"#",onClick:r((e=>u.updatePage(a-1)),["prevent"])},g(a),9,["onClick"])],2)))),128)),s("li",{class:["page-item",{disabled:t.page===t.totalPages-1}]},[s("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=r((a=>u.updatePage(t.page+1)),["prevent"]))},[y])],2)])])};const D={components:{Pagination:P,DatePickRange:t},setup(){p((()=>{a.value="key.date,desc",n(e,a.value),k()}));const{currentSort:a,dateRang:t,getData:n,getPage:l,totalPages:s,data:r,timestamp1:o,timestamp2:i,changePage:g,sumWorkingTime:b}=T();m((()=>n(e,a.value)));const v=c(new Date),P=u({size:1e3,timestamp1:"",timestamp:"",type:"work"}),h=c({}),k=async()=>{P.timestamp1=t.timestamp1,P.timestamp2=t.timestamp2;const a=await e(P);h.value=a.data.body.content.map((a=>(a.duration||"").replace("PT","").replace("H",":").replace("M",":").replace("S","")));let n=0,l=0,s=0;for(const e of h.value.filter((a=>a.length>0))){let a=e.split(":");3==a.length?(n+=new Number(a[0]),l+=new Number(a[1]),s+=new Number(a[2])):2==a.length?(l+=new Number(a[0]),s+=new Number(a[1])):s+=new Number(a[0])}b.value={hh:n+parseInt(l/60),mm:(l+parseInt(s/60))%60,ss:s%60}};return{getSumWorkingTime:k,sumWorkingTime:b,range:v,dateRang:t,getReportList:async()=>{console.log(v.value.start),t.timestamp1=d((()=>Date.parse(v.value.start))),t.timestamp2=d((()=>Date.parse(v.value.end))),await n(e,a.value),k(),console.log(P)},getPage:l,totalPages:s,changePage:g,timestamp1:o,timestamp2:i,currentSort:a,data:r,getData:n}}},w=s("h3",null,"Attendance Report",-1),S=s("hr",null,null,-1),W={class:"navbar navbar-expand-lg navbar-light bg-light"},C={class:"container-fluid"},R=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),x={class:"collapse navbar-collapse",id:"navbarSupportedContent"},N={class:"navbar-nav me-auto mb-2 mb-lg-0"},j={class:"d-flex align-items-center"},I={class:"d-flex align-items-center"},M=s("button",{type:"button",class:"btn btn-success"}," Daily ",-1),_=s("button",{type:"button",class:"btn btn-success"}," Weekly ",-1),A=s("button",{type:"button",class:"btn btn-success"}," Monthly ",-1),L={class:"table-responsive"},V={class:"table mt-3"},z=s("thead",null,[s("tr",null,[s("th",null,"Date"),s("th",null,"Punch In Time"),s("th",null,"Punch Out Time"),s("th",null,"Working Time")])],-1),H=s("th",null,"Total Working Time",-1);D.render=function(a,e,t,r,u,c){const p=b("DatePickRange"),m=b("router-link"),d=b("router-view"),P=b("Pagination");return n(),l(o,null,[w,S,s("nav",W,[s("div",C,[R,s("div",x,[s("ul",N,[s("li",j,[s(p,{modelValue:r.range,"onUpdate:modelValue":e[1]||(e[1]=a=>r.range=a)},null,8,["modelValue"]),s("button",{class:"btn btn-outline-success",onClick:e[2]||(e[2]=a=>r.getReportList())}," Search ")])]),s("div",I,[s(m,{class:"nav-link",to:"/record/report"},{default:v((()=>[M])),_:1}),s(m,{class:"nav-link",to:"/report/reportWeekly"},{default:v((()=>[_])),_:1}),s(m,{class:"nav-link",to:"/report/reportMonthly"},{default:v((()=>[A])),_:1})])])])]),s(d),s("div",L,[s("table",V,[z,s("tbody",null,[(n(!0),l(o,null,i(r.data,(a=>(n(),l("tr",{key:a},[s("td",null,g(a.key.date),1),s("td",null,g(a.startTime),1),s("td",null,g(a.endTime),1),s("td",null,g((a.duration||"").replace("PT","").replace("H",":").replace("M",":").split(".")[0]+"S"),1)])))),128))]),s("thead",null,[s("tr",null,[H,s("th",null,g(r.sumWorkingTime.hh)+"hours",1),s("th",null,g(r.sumWorkingTime.mm)+"minutes",1),s("th",null,g(parseInt(r.sumWorkingTime.ss))+"seconds",1)])])]),s(P,{onGetData:e[3]||(e[3]=e=>r.getData(a.attendanceList,r.currentSort)),page:r.getPage.page,totalPages:r.totalPages,onChangePage:r.changePage},null,8,["page","totalPages","onChangePage"])])],64)};export default D;
