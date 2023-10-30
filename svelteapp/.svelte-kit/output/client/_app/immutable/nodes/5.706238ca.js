import{d as n,s as o}from"../chunks/sanityConfig.2f41ecc9.js";import{S as s,i as a,s as i}from"../chunks/index.0e13f6b8.js";const c=n(o);async function l({params:e}){const t=e.slug,r=await c.fetch(`*[slug.current == "${t}"]{
    topicTitle,
    topicDescription[]{
      children,
        
      },
              
    
  }`);return r?{category:r}:{status:600,body:new Error("Internal Server Error")}}const d=Object.freeze(Object.defineProperty({__proto__:null,load:l},Symbol.toStringTag,{value:"Module"}));class f extends s{constructor(t){super(),a(this,t,null,null,i,{})}}export{f as component,d as universal};
