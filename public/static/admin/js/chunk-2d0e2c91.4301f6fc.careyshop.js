(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2c91"],{"7fd0":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("cs-container",[n.goods_id?[t("page-edit",{ref:"update",attrs:{state:"update","confirm-loading":n.confirmLoading},on:{"update:confirmLoading":function(e){n.confirmLoading=e},"update:confirm-loading":function(e){n.confirmLoading=e},close:n.handleClose}}),t("template",{slot:"footer"},[t("div",{staticStyle:{margin:"-10px 0"}},[t("el-button",{attrs:{type:"primary",size:"small",loading:n.confirmLoading},on:{click:n.handleConfirm}},[n._v("确定")]),t("el-button",{attrs:{size:"small"},on:{click:n.handleClose}},[n._v("取消")])],1)])]:n._e()],2)},i=[],a=(t("a9e3"),t("d3b7"),t("5530")),d=t("5880"),c={name:"goods-admin-update",components:{PageEdit:function(){return t.e("chunk-7dc57a40").then(t.bind(null,"fc45"))}},props:{goods_id:{type:[Number,String],required:!1}},data:function(){return{confirmLoading:!1}},activated:function(){this.goods_id||(this.$router.push({name:"index"}),this.handleClose())},methods:Object(a["a"])(Object(a["a"])({},Object(d["mapActions"])("careyshop/page",["close"])),{},{handleConfirm:function(){this.$refs.update.handleConfirm()},handleClose:function(){this.close({tagName:this.$route.fullPath})}})},s=c,r=t("2877"),l=Object(r["a"])(s,o,i,!1,null,null,null);e["default"]=l.exports}}]);