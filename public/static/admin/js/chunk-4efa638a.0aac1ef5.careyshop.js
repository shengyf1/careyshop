(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4efa638a"],{"1c93":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{"table-data":t.table},on:{refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],r=(n("d3b7"),n("5530")),i=n("5880"),s=n("f663"),d={name:"goods-opinion-comment",components:{PageHeader:function(){return n.e("chunk-70a47208").then(n.bind(null,"2a42"))},PageMain:function(){return n.e("chunk-bcf58686").then(n.bind(null,"8703"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{table:[],loading:!1,page:{current:1,size:0,total:0}}},mounted:function(){var t=this;this.$store.dispatch("careyshop/db/databasePage",{user:!0}).then((function(e){t.page.size=e.get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:Object(r["a"])(Object(r["a"])({},Object(i["mapActions"])("careyshop/update",["updateData"])),{},{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(s["c"])(Object(r["a"])(Object(r["a"])({},t),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.updateData({type:"clear",name:"goods-opinion-comment"}),e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}})},c=d,u=n("2877"),m=Object(u["a"])(c,o,a,!1,null,null,null);e["default"]=m.exports},f663:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u}));var o=n("bc07");function a(t){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"reply.goods.comment.item"},data:t})}function r(t){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"del.goods.comment.item"},data:{goods_comment_id:t}})}function i(t,e){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"set.goods.comment.show"},data:{goods_comment_id:t,is_show:e}})}function s(t,e){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"set.goods.comment.top"},data:{goods_comment_id:t,is_top:e}})}function d(t,e){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"set.goods.comment.status"},data:{goods_comment_id:t,status:e}})}function c(t){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"get.goods.comment.item"},data:{goods_comment_id:t}})}function u(t){return Object(o["a"])({url:"/v1/goods_comment",method:"post",params:{method:"get.goods.comment.list"},data:t})}}}]);