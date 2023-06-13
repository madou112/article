import{a as $,b as y,c as z,d as B,e as E,f as M}from"./article-cat-936f24bd.js";import{_ as S,j as _,r as p,o as A,c as j,d as l,w as d,b as t,f as u,p as q,g as F}from"./index-0fd3abc3.js";const i=c=>(q("data-v-3b72c058"),c=c(),F(),c),G={class:"card-header"},H=i(()=>t("span",null,"知识库分类管理",-1)),J=i(()=>t("br",null,null,-1)),K=i(()=>t("br",null,null,-1)),L=i(()=>t("br",null,null,-1)),P=i(()=>t("br",null,null,-1)),Q=i(()=>t("br",null,null,-1)),R=i(()=>t("br",null,null,-1)),W=i(()=>t("br",null,null,-1)),X=i(()=>t("br",null,null,-1)),Y={__name:"typeMgrView",setup(c){const f=_(!1),V=_(!1),w=_([]),n=_({catName:"",deleted:0,id:0,parentId:"",showInNav:"",sortOrder:""}),o=_(),C=()=>{n.value={catName:"",createTime:new Date,deleted:"",id:0,parentId:0,showInNav:"",sortOrder:"",updateTime:new Date},f.value=!0},O=()=>{let r={catName:n.value.catName,createTime:"",deleted:0,id:0,parentId:parseInt(n.value.parentId),showInNav:n.value.showInNav,sortOrder:parseInt(n.value.sortOrder),updateTime:""};y(r.catName).then(e=>{e.data.code==1?z(r).then(s=>{s.data.code==1&&(alert("新增成功。"),b(),f.value=!1)}):alert(e.data.msg)})},g=r=>{B(r).then(e=>{o.value=e.data.data.articleCat,V.value=!0})},k=()=>{let r={catName:o.value.catName,createTime:o.value.createTime,deleted:o.value.deleted,id:o.value.id,parentId:parseInt(o.value.parentId),showInNav:o.value.showInNav,sortOrder:parseInt(n.value.sortOrder),updateTime:o.value.updateTime};y(r.catName).then(e=>{e.data.code==1?E(r).then(s=>{s.data.code==1&&(alert("修改成功。"),b(),V.value=!1)}):alert(e.data.msg)})},D=r=>{confirm("是否要删除该知识库分类？")&&M(r).then(e=>{e.data.code==1&&(alert("该知识库分类删除成功。"),b())})},b=()=>{$().then(r=>{w.value=r.data.data.articleCats})};return b(),(r,e)=>{const s=p("el-button"),v=p("el-table-column"),U=p("el-table"),T=p("el-card"),m=p("el-input"),I=p("el-radio"),N=p("el-radio-group"),h=p("el-dialog");return A(),j("div",null,[l(T,{class:"box-card"},{header:d(()=>[t("div",G,[H,l(s,{type:"primary",onClick:e[0]||(e[0]=a=>C())},{default:d(()=>[u("新增")]),_:1})])]),default:d(()=>[t("div",null,[l(U,{data:w.value,style:{width:"100%"}},{default:d(()=>[l(v,{prop:"id",label:"ID"}),l(v,{prop:"catName",label:"类别名称"}),l(v,{prop:"sortOrder",label:"sortOrder"}),l(v,{prop:"parentId",label:"上级ID"}),l(v,{fixed:"right",label:"操作"},{default:d(a=>[l(s,{link:"",type:"primary",size:"small",onClick:x=>g(a.row.id)},{default:d(()=>[u("编辑")]),_:2},1032,["onClick"]),l(s,{link:"",type:"danger",size:"small",onClick:x=>D(a.row.id)},{default:d(()=>[u("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),_:1}),l(h,{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=a=>f.value=a),title:"新增知识库分类",style:{width:"40%"}},{default:d(()=>[t("div",null,[t("div",null,[l(m,{modelValue:n.value.catName,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.catName=a),placeholder:"知识库分类名称"},null,8,["modelValue"])]),J,t("div",null,[l(m,{modelValue:n.value.sortOrder,"onUpdate:modelValue":e[2]||(e[2]=a=>n.value.sortOrder=a),placeholder:"sortOrder"},null,8,["modelValue"])]),K,t("div",null,[l(m,{modelValue:n.value.parentId,"onUpdate:modelValue":e[3]||(e[3]=a=>n.value.parentId=a),placeholder:"上级ID"},null,8,["modelValue"])]),L,t("div",null,[u(" 是否显示： "),l(N,{modelValue:n.value.showInNav,"onUpdate:modelValue":e[4]||(e[4]=a=>n.value.showInNav=a),size:"small"},{default:d(()=>[l(I,{label:!0,border:""},{default:d(()=>[u("true")]),_:1}),l(I,{label:!1,border:""},{default:d(()=>[u("false")]),_:1})]),_:1},8,["modelValue"])]),P,t("div",null,[l(s,{type:"primary",style:{width:"100%"},onClick:e[5]||(e[5]=a=>O())},{default:d(()=>[u("添加")]),_:1})])])]),_:1},8,["modelValue"]),l(h,{modelValue:V.value,"onUpdate:modelValue":e[12]||(e[12]=a=>V.value=a),title:"修改知识库分类",style:{width:"40%"}},{default:d(()=>[t("div",null,[t("div",null,[l(m,{modelValue:o.value.catName,"onUpdate:modelValue":e[7]||(e[7]=a=>o.value.catName=a),placeholder:"知识库分类名称"},null,8,["modelValue"])]),Q,t("div",null,[l(m,{modelValue:o.value.sortOrder,"onUpdate:modelValue":e[8]||(e[8]=a=>o.value.sortOrder=a),placeholder:"sortOrder"},null,8,["modelValue"])]),R,t("div",null,[l(m,{modelValue:o.value.parentId,"onUpdate:modelValue":e[9]||(e[9]=a=>o.value.parentId=a),placeholder:"上级ID"},null,8,["modelValue"])]),W,t("div",null,[u(" 是否显示： "),l(N,{modelValue:o.value.showInNav,"onUpdate:modelValue":e[10]||(e[10]=a=>o.value.showInNav=a),size:"small"},{default:d(()=>[l(I,{label:!0,border:""},{default:d(()=>[u("true")]),_:1}),l(I,{label:!1,border:""},{default:d(()=>[u("false")]),_:1})]),_:1},8,["modelValue"])]),X,t("div",null,[l(s,{type:"primary",style:{width:"100%"},onClick:e[11]||(e[11]=a=>k())},{default:d(()=>[u("修改")]),_:1})])])]),_:1},8,["modelValue"])])}}},le=S(Y,[["__scopeId","data-v-3b72c058"]]);export{le as default};
