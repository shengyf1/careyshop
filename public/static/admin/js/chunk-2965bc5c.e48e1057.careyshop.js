(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2965bc5c"],{"12f4":function(e,t,a){},"2edc":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"h",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return s})),a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return u}));var i=a("bc07");function r(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"add.delivery.company.item"},data:e})}function o(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"set.delivery.company.item"},data:e})}function n(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"del.delivery.company.list"},data:{delivery_item_id:e}})}function c(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.item"},data:{delivery_item_id:e}})}function l(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.list"},data:e})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.select"},data:{type:e}})}function d(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.recognise"},data:{code:e}})}function u(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"copy.delivery.company.hot"},data:{delivery_item_id:e}})}},6261:function(e,t,a){"use strict";var i=a("12f4"),r=a.n(i);r.a},f9ad:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:"/system/aided/dist/trace",expression:"'/system/aided/dist/trace'"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-map-location",disabled:e.loading,plain:""},on:{click:e.handleTrace}},[e._v("即时查询")])],1),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.tableData,"highlight-current-row":!0},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{attrs:{"label-position":"left",inline:""}},[Object.keys(t.row["trace"]).length>0?a("el-timeline",e._l(t.row["trace"],(function(t,i){return a("el-timeline-item",{key:i,attrs:{timestamp:t.accept_time,type:"primary"}},[e._v(" "+e._s(t.accept_station)+" ")])})),1):a("div",{staticClass:"not-trace"},[a("span",[e._v("暂无轨迹")])])],1)]}}])}),a("el-table-column",{attrs:{label:"流水号",prop:"order_code","min-width":"210",sortable:"custom"}}),a("el-table-column",{attrs:{label:"快递公司",prop:"get_delivery_item.name","min-width":"120"}}),a("el-table-column",{attrs:{label:"快递单号",prop:"logistic_code","min-width":"170",sortable:"custom","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"所属账号/昵称","min-width":"160","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getUserInfo")(t.row.get_user))+" ")]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"state",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("getStateType")(t.row.state),effect:"plain",size:"mini"}},[e._v(" "+e._s(e.traceState[t.row.state])+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建日期",prop:"create_time",align:"center",width:"160"}})],1),a("el-dialog",{attrs:{title:"即时查询",visible:e.traceFormVisible,"append-to-body":!0,width:"600px"},on:{"update:visible":function(t){e.traceFormVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.traceLoading,expression:"traceLoading"}],staticStyle:{"margin-top":"-25px"},attrs:{"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"快递单号",prop:"logistic_code"}},[e.traceFormVisible?a("el-autocomplete",{ref:"logisticCode",staticClass:"input-with-select",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入快递单号",clearable:!0},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[a("span",[e._v(e._s(i.value)+" "+e._s(i.name))])]}}],null,!1,1805238878),model:{value:e.traceForm.logistic_code,callback:function(t){e.$set(e.traceForm,"logistic_code",t)},expression:"traceForm.logistic_code"}},[a("el-select",{staticStyle:{width:"105px"},attrs:{slot:"prepend",placeholder:"请选择"},on:{change:e.getDeliveryCompany},slot:"prepend",model:{value:e.traceType,callback:function(t){e.traceType=t},expression:"traceType"}},[a("el-option",{attrs:{label:"智能识别",value:0}}),a("el-option",{attrs:{label:"手动获取",value:1}})],1),e.traceType?a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.trace},slot:"append"}):e._e()],1):e._e()],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.traceType,expression:"traceType"}],attrs:{label:"快递公司",prop:"delivery_code"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择快递公司，试试搜索：顺丰 或 s",filterable:"","filter-method":e.filterDelivery,clearable:""},on:{change:e.handleChange,"visible-change":e.handleVisibleChange},model:{value:e.traceForm.delivery_code,callback:function(t){e.$set(e.traceForm,"delivery_code",t)},expression:"traceForm.delivery_code"}},e._l(e.companyList,(function(e){return a("el-option",{key:e.delivery_item_id,attrs:{label:e.name,value:e.code}})})),1)],1)],1),null!==e.traceData?a("div",[a("el-divider",[e._v("物流轨迹")]),e.traceData.length>0?a("el-timeline",e._l(e.traceData,(function(t,i){return a("el-timeline-item",{key:i,attrs:{timestamp:t.accept_time,type:"primary"}},[e._v(" "+e._s(t.accept_station)+" ")])})),1):a("div",{staticClass:"not-trace"},[a("span",[e._v("暂无轨迹")])])],1):e._e()],1)],1)},r=[],o=(a("99af"),a("4de4"),a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("159b"),a("5530")),n=a("65b0"),c=a("2edc"),l={props:{loading:{default:!1},tableData:{default:function(){return[]}},traceState:{default:function(){}}},data:function(){return{companyList:[],companyCopy:[],traceType:0,traceData:null,traceLoading:!1,traceFormVisible:!1,traceForm:{delivery_code:void 0,logistic_code:void 0}}},filters:{getStateType:function(e){switch(e){case 3:return"success";case 4:return"danger";default:return"info"}},getUserInfo:function(e){var t=e.username||"-",a=e.nickname||"-";return"".concat(t," / ").concat(a)}},methods:{sortChange:function(e){var t=e.column,a=e.prop,i=e.order,r={order_type:void 0,order_field:void 0};t&&i&&(r.order_type="ascending"===i?"asc":"desc",r.order_field=a),this.$emit("sort",r)},getDeliveryCompany:function(e){var t=this;this.traceData=null,!e||this.companyList.length>0?this.$refs.logisticCode.focus():Object(c["g"])().then((function(e){t.companyList=e.data||[],t.companyCopy=t.companyList}))},handleChange:function(e){this.traceForm.logistic_code.length>5&&(this.traceForm.delivery_code=e,this.trace())},handleVisibleChange:function(e){var t=this;e||setTimeout((function(){t.companyList=t.companyCopy}),500)},filterDelivery:function(e){this.companyList=e?this.companyCopy.filter((function(t){if(~t.name.indexOf(e)||~t.phonetic.toLowerCase().indexOf(e.toLowerCase()))return!0})):this.companyCopy},handleTrace:function(){this.traceForm={delivery_code:"",logistic_code:""},this.traceType=0,this.traceData=null,this.traceLoading=!1,this.traceFormVisible=!0},handleSelect:function(e){this.traceForm={delivery_code:e.code,logistic_code:e.value},this.trace()},trace:function(){var e=this;this.traceData=null,this.traceLoading=!0,Object(n["c"])(Object(o["a"])({},this.traceForm)).then((function(t){e.traceData=t.data.trace})).finally((function(){e.traceLoading=!1}))},querySearchAsync:function(e,t){var a=[];this.traceData=null,e.length<5||this.traceType?t(a):Object(c["f"])(e).then((function(t){t.data.shippers.forEach((function(t){a.push({value:e,name:t.shipper_name,code:t.shipper_code})}))})).finally((function(){t(a)}))}}},s=l,d=(a("6261"),a("2877")),u=Object(d["a"])(s,i,r,!1,null,"39604bb1",null);t["default"]=u.exports}}]);