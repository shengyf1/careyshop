(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cfb345b"],{2111:function(t,a,n){"use strict";n.d(a,"a",(function(){return r})),n.d(a,"f",(function(){return u})),n.d(a,"d",(function(){return d})),n.d(a,"b",(function(){return o})),n.d(a,"e",(function(){return p})),n.d(a,"g",(function(){return i})),n.d(a,"c",(function(){return c}));var e=n("bc07");function r(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"add.app.item"},data:t})}function u(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"set.app.item"},data:t})}function d(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"get.app.list"},data:t})}function o(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"del.app.list"},data:{app_id:t}})}function p(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"replace.app.secret"},data:{app_id:t}})}function i(t,a){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"set.app.status"},data:{app_id:t,status:a}})}function c(t){return Object(e["a"])({url:"/v1/app",method:"post",params:{method:"get.app.captcha"},data:{appkey:t}})}},"863b":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{refresh:t.handleRefresh}})],1)},r=[],u=(n("d3b7"),n("5530")),d=n("2111"),o={name:"setting-app-app",components:{PageHeader:function(){return n.e("chunk-2d0a30dd").then(n.bind(null,"0117"))},PageMain:function(){return n.e("chunk-2d20fac8").then(n.bind(null,"b543"))}},data:function(){return{loading:!1,table:[]}},mounted:function(){this.handleSubmit()},methods:{handleRefresh:function(){var t=this;this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var a=this;this.loading=!0,Object(d["d"])(Object(u["a"])({},t)).then((function(t){a.table=t.data||[]})).finally((function(){a.loading=!1}))}}},p=o,i=n("2877"),c=Object(i["a"])(p,e,r,!1,null,null,null);a["default"]=c.exports}}]);