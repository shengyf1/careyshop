(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc1659c"],{4239:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return d})),a.d(e,"g",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return u}));var n=a("bc07");function o(t){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"add.brand.item"},data:t})}function r(t){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.item"},data:t})}function d(t){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"del.brand.list"},data:{brand_id:t}})}function i(t,e){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.status"},data:{brand_id:t,status:e}})}function c(t){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"get.brand.list"},data:t})}function s(t){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"get.brand.select"},data:t})}function u(t,e){return Object(n["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.sort"},data:{brand_id:t,sort:e}})}},c54e:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return r})),a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"g",(function(){return s})),a.d(e,"e",(function(){return u}));var n=a("bc07");function o(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"add.goods.category.item"},data:t})}function r(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.item"},data:t})}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"del.goods.category.list"},data:{goods_category_id:t,not_empty:e}})}function i(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.item"},data:{goods_category_id:t}})}function c(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.list"},data:t})}function s(t,e){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.status"},data:{goods_category_id:t,status:e}})}function u(t){return Object(n["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.index"},data:{goods_category_id:t}})}},e81e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"cat-data":t.cat},on:{submit:t.handleSubmit},slot:"header"}),a("page-main",{attrs:{loading:t.loading,"cat-data":t.cat,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}}),a("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),a("5530")),d=a("ca00"),i=a("4239"),c=a("c54e"),s={name:"goods-setting-brand",components:{PageHeader:function(){return a.e("chunk-2d21ef35").then(a.bind(null,"d86a"))},PageMain:function(){return a.e("chunk-7b77489b").then(a.bind(null,"d4f2"))},PageFooter:function(){return a.e("chunk-2d225417").then(a.bind(null,"e42d"))}},data:function(){return{loading:!1,cat:[],table:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(c["d"])(null),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.cat=d["a"].formatDataToTree(e[0].data,"goods_category_id"),t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.page.current=1),this.loading=!0,Object(i["c"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},u=s,h=a("2877"),g=Object(h["a"])(u,n,o,!1,null,null,null);e["default"]=g.exports}}]);