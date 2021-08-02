import{d as e,u as a}from"./index.762b0a16.js";import{r as l,o as t,c as o,l as s,k as n,D as r,E as u,e as c,b as d,a as i,G as p,H as m,I as v,q as f,t as b,F as y,m as A,j as L}from"./vendor.6e1befea.js";const q={};q.render=function(e,a,c,d,i,p){const m=l("v-date-picker");return t(),o(m,{mode:"dateTime","minute-increment":30},{default:s((({inputValue:e,inputEvents:a})=>[n("input",r({class:"\r\n          px-2\r\n          py-1\r\n          border\r\n          rounded\r\n          focus:outline-none focus:border-blue-300\r\n        ",value:e},u(a)),null,16,["value"])])),_:1})};const D={components:{DatePick:q},setup(){const a=c(new Date),l=c(new Date),t=d({note:"",timestamp1:i((()=>Date.parse(a.value))),timestamp2:i((()=>Date.parse(l.value))),type:""});return{date1:a,date2:l,sendDayOff:async()=>{console.log(t);const a=await e(t),l=a.data.status;console.log(a),"ok"===l?alert("sent successfully"):alert("Please try again")},reqArr:t}}},g=n("h4",null,"Request a Leave",-1),h={class:"row g-3"},k={class:"col-md-4"},w=n("label",{for:"validationDefault01",class:"form-label"},"Leave Type",-1),I=A('<option disabled value="">Select Leave Type</option><option class="dropdown-item" value="Annual">Annual Leave</option><option class="dropdown-item" value="Sick">Sick Leave</option><option class="dropdown-item" value="Casual">Casual Leave</option><option class="dropdown-item" value="Others">Others</option>',5),T={class:"col-md-4"},V=n("label",{for:"validationStartTime",class:"form-label"},null,-1),S=n("span",{class:"input-group-text"}," Start Time",-1),x={class:"col-md-4"},R=n("label",{for:"validationEndTime",class:"form-label"},null,-1),O=n("span",{class:"input-group-text"}," End Time",-1),U={class:"col-md-3 mx-auto"},C=n("label",{class:"form-label"},"Total Days: ",-1),E={class:"col-12"};D.render=function(e,a,s,r,u,c){const d=l("DatePick");return t(),o(y,null,[g,n("form",h,[n("div",k,[w,p(n("select",{class:"form-select","onUpdate:modelValue":a[1]||(a[1]=e=>r.reqArr.type=e),required:""},[I],512),[[m,r.reqArr.type]]),p(n("input",{type:"text",class:"form-control",placeholder:"Reason / Other leave type","onUpdate:modelValue":a[2]||(a[2]=e=>r.reqArr.note=e)},null,512),[[v,r.reqArr.note]])]),n("div",T,[V,S,n(d,{class:"form-control",modelValue:r.date1,"onUpdate:modelValue":a[3]||(a[3]=e=>r.date1=e)},null,8,["modelValue"])]),n("div",x,[R,O,n(d,{class:"form-control",modelValue:r.date2,"onUpdate:modelValue":a[4]||(a[4]=e=>r.date2=e)},null,8,["modelValue"])]),n("div",U,[C,f(b(Math.floor((r.reqArr.timestamp2-r.reqArr.timestamp1)/864e5)),1)]),n("div",E,[n("button",{class:"btn btn-primary",type:"submit",onClick:a[5]||(a[5]=(...e)=>r.sendDayOff&&r.sendDayOff(...e))}," Send Requests ")])])],64)};const j={components:{LeaveRequest:D},setup(){L((()=>{e.dispatch("getUserInfo")}));const e=a();return{userInfoArr:i((()=>e.getters.getUserInfo))}}},P=n("h1",null,"Leave Requests",-1),F={class:"table table-bordered"},G=n("thead",null,[n("tr",null,[n("th",{scope:"col"}),n("th",{scope:"col"},"Annual Leave"),n("th",{scope:"col"},"Casual Leave"),n("th",{scope:"col"},"Sick Leave")])],-1),H=n("td",{scope:"col"},"Total Allowance (Days)",-1),M=n("td",{scope:"col"},"Allowance Remaining (Days)",-1),_=n("div",{class:"p-3"},null,-1);j.render=function(e,a,s,r,u,c){const d=l("LeaveRequest");return t(),o(y,null,[P,n("div",null,[n("table",F,[G,n("tbody",null,[n("tr",null,[H,n("td",null,b(r.userInfoArr.originAnnualLeave),1),n("td",null,b(r.userInfoArr.originCasualLeave),1),n("td",null,b(r.userInfoArr.originSickLeave),1)]),n("tr",null,[M,n("td",null,b(r.userInfoArr.annualLeave),1),n("td",null,b(r.userInfoArr.casualLeave),1),n("td",null,b(r.userInfoArr.sickLeave),1)])])])]),_,n(d)],64)};export default j;