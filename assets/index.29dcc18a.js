import{r as h,j as e,F as r,a as s,d as p,N as l,b as f,c as y,e as N,f as g,S as x,R as c,H as b,g as v,h as w}from"./vendor.d3961574.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function u(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=u(t);fetch(t.href,a)}};S();const O=h.exports.createContext(null);function k({children:m}){const[o,u]=h.exports.useState(null),i={state:o,setState:u};return h.exports.useEffect(()=>{},[]),e(r,{children:e(O.Provider,{value:i,children:m})})}var n={route:{home:{path:"/",name:"home",display:"Start"},about:{path:"/about",name:"about",display:"O nas"},management:{path:"/management",name:"management",display:"Zarz\u0105d"},news:{path:"/news",name:"news",display:"Aktualno\u015Bci"}}};function A(){return e(r,{children:s("nav",{id:"navbar",children:[s("header",{className:"logo",children:[e("span",{className:"text",children:"KONAR"}),e(p,{})]}),s(l,{className:"link",exact:!0,to:n.route.home.path,children:[e(f,{}),e("span",{className:"text",children:n.route.home.display})]}),s(l,{className:"link",exact:!0,to:n.route.about.path,children:[e(y,{}),e("span",{className:"text",children:n.route.about.display})]}),s(l,{className:"link",exact:!0,to:n.route.management.path,children:[e(N,{}),e("span",{className:"text",children:n.route.management.display})]}),s(l,{className:"link",exact:!0,to:n.route.news.path,children:[e(g,{}),e("span",{className:"text",children:n.route.news.display})]})]})})}function L(){return e(r,{children:e("h1",{className:"display-3",children:"Home"})})}function M(){return e(r,{children:e("h1",{className:"display-3",children:"About"})})}function R(){return e(r,{children:e("h1",{className:"display-3",children:"Managment"})})}function _(){return e(r,{children:e("h1",{className:"display-3",children:"News"})})}function j(){return e(r,{children:e("main",{id:"view",children:s(x,{children:[e(c,{exact:!0,path:n.route.about.path,render:()=>e(M,{})}),e(c,{exact:!0,path:n.route.management.path,render:()=>e(R,{})}),e(c,{exact:!0,path:n.route.news.path,render:()=>e(_,{})}),e(c,{render:()=>e(L,{})})]})})})}function H(){return s(r,{children:[e(A,{}),e(j,{})]})}function P(){return e(r,{children:e(k,{children:e(b,{children:e(H,{})})})})}v.render(e(w.StrictMode,{children:e(P,{})}),document.getElementById("root"));
