(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4392f48"],{"1a19":function(t,a,e){"use strict";e.d(a,"a",(function(){return c})),e.d(a,"e",(function(){return i})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"d",(function(){return u})),e.d(a,"g",(function(){return s})),e.d(a,"f",(function(){return d}));var r=e("bc07");function c(t){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"add.article.item"},data:t})}function i(t){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"set.article.item"},data:t})}function n(t){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"del.article.list"},data:{article_id:t}})}function o(t){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"get.article.item"},data:{article_id:t}})}function u(t){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"get.article.list"},data:t})}function s(t,a){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"set.article.top"},data:{article_id:t,is_top:a}})}function d(t,a){return Object(r["a"])({url:"/v1/article",method:"post",params:{method:"set.article.status"},data:{article_id:t,status:a}})}},"57ab":function(t,a,e){"use strict";e.d(a,"a",(function(){return c})),e.d(a,"e",(function(){return i})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"d",(function(){return u}));var r=e("bc07");function c(t){return Object(r["a"])({url:"/v1/article_cat",method:"post",params:{method:"add.article.cat.item"},data:t})}function i(t){return Object(r["a"])({url:"/v1/article_cat",method:"post",params:{method:"set.article.cat.item"},data:t})}function n(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(r["a"])({url:"/v1/article_cat",method:"post",params:{method:"del.article.cat.list"},data:{article_cat_id:t,not_empty:a}})}function o(t){return Object(r["a"])({url:"/v1/article_cat",method:"post",params:{method:"get.article.cat.list"},data:t})}function u(t){return Object(r["a"])({url:"/v1/article_cat",method:"post",params:{method:"set.article.cat.index"},data:{article_cat_id:t}})}},e17f:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("cs-container",[e("page-edit",{attrs:{state:"update",catList:t.catList,catData:t.catData,formData:t.formData}})],1)},c=[],i=(e("a9e3"),e("b64b"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0"),e("5530")),n=e("ca00"),o=e("57ab"),u=e("1a19"),s={name:"system-article-update",components:{PageEdit:function(){return e.e("chunk-0891509b").then(e.bind(null,"a05e"))}},props:{article_id:{type:[Number,String],required:!0}},data:function(){return{catList:[],catData:[],formData:{},formBuffer:{},isSourceRoute:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.isSourceRoute||Object.keys(t.formBuffer).length||t.switchData(t.article_id)}))},beforeRouteEnter:function(t,a,e){t.params.article_id?e((function(a){a.switchData(t.params.article_id),a.isSourceRoute=!0})):e(new Error("未指定ID"))},beforeRouteUpdate:function(t,a,e){t.params.article_id?(this.switchData(t.params.article_id),e()):e(new Error("未指定ID"))},methods:{setArticleData:function(t){return t.is_top=t.is_top.toString(),t.status=t.status.toString(),t},switchData:function(t){var a=this;this.formBuffer[t]?this.formData=this.formBuffer[t]||{}:this.$nextTick((function(){a.formData={},a.catList.length?Object(u["c"])(t).then((function(e){a.formBuffer[t]=a.setArticleData(Object(i["a"])({},e.data)),a.formData=a.formBuffer[t]})):Promise.all([Object(o["c"])(null),Object(u["c"])(t)]).then((function(e){a.catList=e[0].data||[],a.catData=n["a"].formatDataToTree(a.catList,"article_cat_id"),a.formBuffer[t]=a.setArticleData(Object(i["a"])({},e[1].data)),a.formData=a.formBuffer[t]}))}))}}},d=s,f=e("2877"),l=Object(f["a"])(d,r,c,!1,null,null,null);a["default"]=l.exports}}]);