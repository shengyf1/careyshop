(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9692202"],{"14db":function(e,t,n){},"2af1":function(e,t,n){"use strict";var l=n("14db"),i=n.n(l);i.a},"3b44":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"物流信息",visible:e.visible,"append-to-body":!0,width:"600px"},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{staticStyle:{"margin-top":"-25px"},attrs:{"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"快递公司"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"请选择"},model:{value:e.companyIndex,callback:function(t){e.companyIndex=t},expression:"companyIndex"}},e._l(e.result,(function(t,l){return n("el-option",{key:l,attrs:{label:t.get_delivery_item.name,value:l}},[n("span",{staticStyle:{float:"left"},attrs:{title:"快递公司"}},[e._v(e._s(t.get_delivery_item.name))]),n("span",{staticStyle:{float:"right",color:"#8492A6","font-size":"13px"},attrs:{title:"创建日期"}},[e._v(e._s(t.create_time))])])})),1),null!==e.result&&e.result.length>0?[n("el-tag",{staticClass:"cs-ml-10",attrs:{type:e._f("getStateType")(e.result[e.companyIndex].state),effect:"plain",size:"mini"}},[e._v(" "+e._s(e.stateMap[e.result[e.companyIndex].state])+" ")])]:e._e()],2)],1),null!==e.result?n("div",[n("el-divider",[e._v("物流轨迹")]),e.result.length>0&&e.result[e.companyIndex]["trace"].length?n("el-timeline",[n("el-timeline-item",{attrs:{type:"success"}},[e._v(" 物流单号："+e._s(e.result[e.companyIndex]["logistic_code"])+" 快递公司："+e._s(e.result[e.companyIndex]["get_delivery_item"]["name"])+" ")]),e._l(e.result[e.companyIndex].trace,(function(t,l){return n("el-timeline-item",{key:l,attrs:{timestamp:t.accept_time,type:"primary"}},[e._v(" "+e._s(t.accept_station)+" ")])}))],2):n("div",{staticClass:"not-trace"},[e.result.length?n("p",[e._v(" 物流单号："+e._s(e.result[e.companyIndex]["logistic_code"])+" 快递公司："+e._s(e.result[e.companyIndex]["get_delivery_item"]["name"])+" ")]):e._e(),n("p",[e._v("暂无轨迹")])])],1):e._e()],1)},i=[],a=n("65b0"),s={name:"cs-delivery-dist",data:function(){return{visible:!1,companyIndex:void 0,result:[],stateMap:{0:"无轨迹",1:"已揽收",2:"在途中",3:"签收",4:"问题件",201:"到达派件城市"}}},filters:{getStateType:function(e){switch(e){case 3:return"success";case 4:return"danger";default:return"info"}}},methods:{show:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={order_code:e,logistic_code:n,exclude_code:l};this.visible=!0,this.companyIndex=null,this.result=null,Object(a["a"])(i).then((function(e){t.result=e.data||[],t.companyIndex=t.result.length>0?0:null}))}}},r=s,c=(n("2af1"),n("2877")),o=Object(c["a"])(r,l,i,!1,null,"2fc4a9e5",null);t["default"]=o.exports},"65b0":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s}));var l=n("bc07");function i(e){return Object(l["a"])({url:"/v1/delivery_dist",method:"post",params:{method:"get.delivery.dist.code"},data:e})}function a(e){return Object(l["a"])({url:"/v1/delivery_dist",method:"post",params:{method:"get.delivery.dist.list"},data:e})}function s(e){return Object(l["a"])({url:"/v1/delivery_dist",method:"post",params:{method:"get.delivery.dist.trace"},data:e})}}}]);