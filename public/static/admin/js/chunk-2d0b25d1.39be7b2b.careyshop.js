(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b25d1"],{2492:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.create}},[t._v("新增广告")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"180","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"广告位置",prop:"ads_position_id",sortable:"custom","min-width":"180","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row["get_ads_position"]["name"])+" ")]}}])}),a("el-table-column",{attrs:{label:"编码",prop:"code","min-width":"80"}}),a("el-table-column",{attrs:{label:"平台","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.platformTable[e.row.platform])+" ")]}}])}),a("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{class:t.typeMap[e.row.type].type})]}}])}),a("el-table-column",{attrs:{label:"背景色","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{style:"background-color:"+e.row.color},[t._v(t._s(e.row.color))])]}}])}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"投放日期",prop:"begin_time",align:"center",sortable:"custom","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 开始投放日期："+t._s(e.row.begin_time)),a("br"),t._v(" 投放结束日期："+t._s(e.row.end_time)+" ")]),a("el-tag",{attrs:{size:"mini",effect:"plain",type:"info"}},[t._v("详细")])],1)]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleView(e.$index)}}},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 打开方式："+t._s(t.targetMap[e.row.target])),a("br"),t._v(" 链接地址："+t._s(e.row.url)+" ")]),a("i",{staticClass:"el-icon-link"})]),t._v(" 链接 ")],1),t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.updata(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入广告名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"广告位置",prop:"ads_position_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:t.switchPosition},model:{value:t.form.ads_position_id,callback:function(e){t.$set(t.form,"ads_position_id",e)},expression:"form.ads_position_id"}},t._l(t.positionTable,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.ads_position_id}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{placeholder:"可输入广告编码",clearable:!0},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1)],1)],1),t.dialogFormVisible?a("el-form-item",{attrs:{label:void 0!==t.adsType?t.typeMap[t.adsType]["text"]:"内容",prop:"content"}},[0===t.adsType?a("div",[a("cs-photo",{model:{value:t.content.image,callback:function(e){t.$set(t.content,"image",e)},expression:"content.image"}},[a("template",{slot:"upload"},[t.content.image.length?t._e():a("div",{staticClass:"el-upload el-upload--picture-card",staticStyle:{"margin-bottom":"8px"},attrs:{tabindex:"0"},on:{click:function(e){return t.$refs.upload.handleUploadDlg()}}},[a("i",{staticClass:"el-icon-plus"})])])],2),a("el-button",{attrs:{icon:"el-icon-finished",size:"small"},on:{click:function(e){return t.$refs.storage.handleStorageDlg([0,2])}}},[t._v("资源选择")]),a("el-button",{attrs:{icon:"el-icon-upload2",size:"small"},on:{click:function(e){return t.$refs.upload.handleUploadDlg()}}},[t._v("上传图片")])],1):t._e(),1===t.adsType?a("cs-tinymce",{attrs:{code:"inside_content",height:180},model:{value:t.content.code,callback:function(e){t.$set(t.content,"code",e)},expression:"content.code"}}):t._e(),void 0===t.adsType?a("el-alert",{attrs:{title:"请先选择广告位置",type:"info",closable:!1,center:""}}):t._e()],1):t._e(),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"投放日期",prop:"begin_time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择广告开始投放日期"},model:{value:t.form.begin_time,callback:function(e){t.$set(t.form,"begin_time",e)},expression:"form.begin_time"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"结束日期",prop:"end_time"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择广告投放结束日期"},model:{value:t.form.end_time,callback:function(e){t.$set(t.form,"end_time",e)},expression:"form.end_time"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"链接地址",prop:"url"}},[a("el-input",{attrs:{placeholder:"请输入广告链接地址",clearable:!0},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[a("el-radio-group",{model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[a("el-radio",{attrs:{label:"_self"}},[t._v("当前窗口")]),a("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")])],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:0,max:255,"controls-position":"right"},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"背景色",prop:"color"}},[a("el-color-picker",{model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1)],1)],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.handleCreate}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.handleUpdate}},[t._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},on:{confirm:t._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*"},on:{confirm:t._getUploadFileList}})],1)],1)},n=[],i=(a("7db0"),a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("2909")),l=a("5530"),s=a("b85c"),r=a("8e29"),c=a("ca00"),u={components:{csUpload:function(){return a.e("chunk-17909d0b").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-37826a7f").then(a.bind(null,"8704"))},csPhoto:function(){return a.e("chunk-37978ff3").then(a.bind(null,"aa07"))},csTinymce:function(){return Promise.all([a.e("chunk-5fb06de8"),a.e("chunk-56353b7a")]).then(a.bind(null,"4b93"))}},props:{tableData:{default:function(){return[]}},positionTable:{default:function(){return[]}},platformTable:{default:function(){return[]}},loading:{default:!1}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},data:function(){return{adsType:void 0,content:{image:[],code:""},currentTableData:[],multipleSelection:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",form:{},auth:{add:!1,set:!1,del:!1,sort:!1,enable:!1,disable:!1},textMap:{update:"编辑广告",create:"新增广告"},typeMap:{0:{text:"图片",type:"el-icon-picture-outline"},1:{text:"代码",type:"el-icon-document"}},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},targetMap:{_self:"当前窗口",_blank:"新窗口"},rules:{ads_position_id:[{required:!0,message:"至少选择一项",trigger:"change"}],code:[{max:16,message:"长度不能大于 16 个字符",trigger:"blur"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],url:[{required:!0,message:"链接地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],begin_time:[{required:!0,message:"投放日期不能为空",trigger:"change"}],end_time:[{required:!0,message:"结束日期不能为空",trigger:"change"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/system/ads/ads/add"),this.auth.set=this.$permission("/system/ads/ads/set"),this.auth.del=this.$permission("/system/ads/ads/del"),this.auth.sort=this.$permission("/system/ads/ads/sort"),this.auth.enable=this.$permission("/system/ads/ads/enable"),this.auth.disable=this.$permission("/system/ads/ads/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.ads_id)})):e.push(this.currentTableData[t].ads_id),e},_getUploadFileList:function(t){if(t.length){var e,a=Object(s["a"])(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;if("success"===o.status){var n=o.response;n&&200===n.status&&n.data&&0===n.data[0].type&&this.content.image.push({name:n.data[0].name,source:n.data[0].url,url:"//"+n.data[0].url})}}}catch(i){a.e(i)}finally{a.f()}}},_getStorageFileList:function(t){var e=this;t.length&&t.forEach((function(t){0===t.type&&e.content.image.push({name:t.name,source:t.url,url:"//"+t.url})}))},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,o=t.order,n={order_type:void 0,order_field:void 0};e&&o&&(n.order_type="ascending"===o?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this._getIdList(t);if(0!==n.length){if(!o){var i=this.currentTableData[t],s=i.status?0:1;if(i.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(l["a"])(Object(l["a"])({},i),{},{status:2})),void c(n,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(n,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(t,e,a){Object(r["f"])(t,e).then((function(){a.currentTableData.forEach((function(o,n){-1!==t.indexOf(o.ads_id)&&a.$set(a.currentTableData,n,Object(l["a"])(Object(l["a"])({},o),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(r["b"])(a).then((function(){c["a"].deleteDataList(e.currentTableData,a,"ads_id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleView:function(t){this.currentTableData[t].url?this.$open(this.currentTableData[t].url):this.$message.warning("无效的链接地址")},handleSort:function(t){Object(r["e"])(this.currentTableData[t].ads_id,this.currentTableData[t].sort)},switchPosition:function(t){var e,a=Object(s["a"])(this.positionTable);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(o.ads_position_id===t){this.adsType=o.type;break}}}catch(n){a.e(n)}finally{a.f()}},create:function(){var t=this;this.form={ads_position_id:void 0,code:"",name:"",url:"",target:"_blank",content:void 0,color:"#FFFFFF",begin_time:void 0,end_time:void 0,sort:50,status:"1"},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.adsType=void 0,t.content={image:[],code:""},t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},getFormContent:function(){return 0===this.adsType?this.content.image:this.content.code},handleCreate:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,t.form.color=t.form.color||"",t.form.content=t.getFormContent(),Object(r["a"])(Object(l["a"])({},t.form)).then((function(e){t.currentTableData.unshift(Object(l["a"])(Object(l["a"])({},e.data),{},{get_ads_position:Object(l["a"])({},t.positionTable.find((function(t){return t.ads_position_id===e.data.ads_position_id})))})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},updata:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.adsType=a.type,this.form=Object(l["a"])(Object(l["a"])({},a),{},{status:a.status.toString()}),this.positionTable.find((function(t){return t.ads_position_id===e.form.ads_position_id}))||(this.form.ads_position_id=void 0),this.$nextTick((function(){if(e.$refs.form&&e.$refs.form.clearValidate(),e.content={image:[],code:""},0===e.adsType){var t=Array.isArray(e.form.content)?e.form.content:[];e.content.image=Object(i["a"])(t)}else e.content.code=e.form.content.toString();e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},handleUpdate:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,t.form.color=t.form.color||"",t.form.content=t.getFormContent(),Object(r["d"])(Object(l["a"])({},t.form)).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(l["a"])(Object(l["a"])(Object(l["a"])({},t.currentTableData[t.currentIndex]),e.data),{},{get_ads_position:Object(l["a"])({},t.positionTable.find((function(e){return e.ads_position_id===t.form.ads_position_id})))})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))}}},d=u,m=a("2877"),f=Object(m["a"])(d,o,n,!1,null,null,null);e["default"]=f.exports}}]);