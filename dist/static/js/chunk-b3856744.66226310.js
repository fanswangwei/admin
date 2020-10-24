(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3856744"],{"07d7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"news-list"},[a("div",{staticClass:"search"},[a("span",{staticClass:"label"},[e._v("新闻类型")]),a("div",{staticClass:"news-item"},[a("el-select",{attrs:{placeholder:"请选择新闻类型"},on:{change:e.typeChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,(function(t){return a("el-option-group",{key:t.key,attrs:{label:t.group}},e._l(t.option,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"news-list-table",staticStyle:{width:"100%"},attrs:{data:e.newsList,border:""}},[a("el-table-column",{attrs:{prop:"title",align:"center",label:"标题"}}),a("el-table-column",{attrs:{prop:"remark",align:"center",label:"摘要"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.row.remark,placement:"top"}},[a("p",{staticClass:"news-remark"},[e._v(e._s(t.row.remark))])])]}}])}),a("el-table-column",{attrs:{prop:"type",align:"center",label:"栏目"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.filterType(t.row.type)))])]}}])}),a("el-table-column",{attrs:{prop:"coverUrl",align:"center",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.coverUrl,target:"_blank"}},[a("img",{attrs:{src:e.row.coverUrl,alt:"封面图片",width:"80%",height:"80"}})])]}}])}),a("el-table-column",{attrs:{prop:"createdTime",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.dateFormat("yy-MM-dd",t.row.createdTime)))])]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.deleteNews(t)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{background:"","current-page":e.page.pageNum,layout:"prev, pager, next",total:e.page.total},on:{"current-change":e.currentChange}})],1)],1)},l=[],s=(a("d3b7"),a("ac1f"),a("1276"),a("4ec3")),r=a("21f4"),o={name:"",data:function(){return{newsList:[{}],page:{total:100,pageNum:1,pageSize:10},type:"",options:[{group:"关于我们",key:"us",option:[{label:"公司简介",value:"us_company"},{label:"新闻动态",value:"us_news"},{label:"联系我们",value:"us_contact"}]},{group:"化验项目",key:"pro",option:[{label:"无创产前DNA",value:"pro_dna"},{label:"CTC检查",value:"pro_ctc"}]},{group:"科研中心",key:"center",option:[{label:"技术团队",value:"center_team"},{label:"成果与专利",value:"center_result"},{label:"案例分享",value:"center_example"}]}],loading:!1}},created:function(){this.getNews()},methods:{dateFormat:r["a"],filterType:function(e){if(e){var t=e&&e.split("_"),a="",n="";switch(t[0]){case"us":a="关于我们";break;case"pro":a="化验项目";break;case"center":a="科研中心";break}switch(e){case"us_company":n="公司简介";break;case"us_news":n="新闻动态";break;case"us_contact":n="联系我们";break;case"pro_dna":n="无创产前DNA";break;case"pro_ctc":n="CTC检查";break;case"center_team":n="技术团队";break;case"center_result":n="成果与专利";break;case"center_example":n="案例分享";break}return a+"-"+n}},getNews:function(){var e=this;this.loading=!0;var t={type:this.type,pageNum:this.page.pageNum,pageSize:10};Object(s["c"])(t).then((function(t){200==t.code?(e.newsList=t.data,e.page.total=t.total):(e.newsList=[],e.page.total=0)})).finally((function(){e.loading=!1}))},deleteNews:function(e){var t=this,a={_id:e.row._id};console.log(a),this.$confirm("此操作将永久删除新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,Object(s["b"])(a).then((function(e){200==e.code?(t.$message({message:"删除成功！",type:"success"}),t.getNews()):t.$message.error("删除失败！")})).finally((function(){t.loading=!1}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},currentChange:function(e){this.page.pageNum=e,this.getNews()},typeChange:function(){this.getNews()}}},c=o,i=(a("5d7f"),a("2877")),u=Object(i["a"])(c,n,l,!1,null,"58c0794c",null);t["default"]=u.exports},"5d7f":function(e,t,a){"use strict";var n=a("f29f"),l=a.n(n);l.a},f29f:function(e,t,a){}}]);