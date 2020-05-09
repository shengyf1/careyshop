(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b77489b"],{6962:function(t,e,a){"use strict";var o=a("e211"),r=a.n(o);r.a},d4f2:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增品牌")])],1):t._e(),t.auth.enable||t.auth.disable?a("el-form-item",[a("el-button-group",[t.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,1,!0)}}},[t._v("启用")]):t._e(),t.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:t.loading},on:{click:function(e){return t.handleStatus(null,0,!0)}}},[t._v("禁用")]):t._e()],1)],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.logo?a("el-popover",{attrs:{width:"150",placement:"right",trigger:"hover"}},[a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(e.row.logo),fit:"fill"},on:{click:function(a){return a.stopPropagation(),t.$preview(e.row.logo)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):t._e(),t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"首拼",prop:"phonetic",sortable:"custom","min-width":"90"}}),a("el-table-column",{attrs:{label:"所属分类",prop:"category_name","show-overflow-tooltip":!0,"min-width":"140"}}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center",sortable:"custom","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type,effect:t.auth.enable||t.auth.disable?"light":"plain"},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.url&&t.auth.url?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleView(e.$index)}}},[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 打开方式："+t._s(t.targetMap[e.row.target].text)),a("br"),t._v(" 链接地址："+t._s(e.row.url)+" ")]),a("i",{staticClass:"el-icon-link"})]),t._v(" 链接 ")],1):t._e(),t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入品牌名称",clearable:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"首拼",prop:"phonetic"}},[a("el-input",{attrs:{placeholder:"不填写系统将自动识别",clearable:!0},model:{value:t.form.phonetic,callback:function(e){t.$set(t.form,"phonetic",e)},expression:"form.phonetic"}})],1)],1)],1),a("el-form-item",{attrs:{label:"所属分类",prop:"goods_category_id"}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"可选择品牌所属的分类 试试搜索：手机",options:t.catData,props:t.catProps,filterable:"",clearable:""},model:{value:t.form.goods_category_id,callback:function(e){t.$set(t.form,"goods_category_id",e)},expression:"form.goods_category_id"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入品牌描述",clearable:!0},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("el-form-item",{attrs:{label:"Logo",prop:"logo"}},[a("el-input",{attrs:{placeholder:"可输入品牌Logo",clearable:!0},model:{value:t.form.logo,callback:function(e){t.$set(t.form,"logo",e)},expression:"form.logo"}},[a("template",{slot:"prepend"},[t.form.logo?a("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(t.form.logo),fit:"fill"},on:{click:function(e){return e.stopPropagation(),t.$preview(t.form.logo)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):t._e()],1),a("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:t.handleCommand},slot:"append"},[a("el-button",{attrs:{icon:"el-icon-upload"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[t._v("资源选择")]),a("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[t._v("上传资源")])],1)],1)],2)],1),a("el-form-item",{attrs:{label:"链接",prop:"url"}},[a("el-input",{attrs:{placeholder:"可输入品牌链接地址",clearable:!0},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),a("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[a("el-radio-group",{model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[a("el-radio",{attrs:{label:"_self"}},[t._v("当前窗口")]),a("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")])],1)],1),a("el-form-item",{attrs:{label:"排序值",prop:"sort"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:t.form.sort,callback:function(e){t.$set(t.form,"sort",e)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:t._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:t._getUploadFileList}})],1)],1)},r=[],l=(a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("5530")),i=a("b85c"),n=a("4239"),s=a("ca00"),c=a("c54e"),d={components:{csUpload:function(){return a.e("chunk-17909d0b").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-37826a7f").then(a.bind(null,"8704"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}},catData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,sort:!1,url:!1,enable:!1,disable:!1},targetMap:{_self:{text:"当前窗口",value:"_self"},_blank:{text:"新窗口",value:"_blank"}},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑品牌",create:"新增品牌"},catProps:{value:"goods_category_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1},form:{goods_category_id:void 0,name:void 0,phonetic:void 0,description:void 0,logo:void 0,url:void 0,target:void 0,sort:void 0,status:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],phonetic:[{max:10,message:"长度不能大于 10 个字符",trigger:"blur"}],description:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],logo:[{max:512,message:"长度不能大于 512 个字符",trigger:"blur"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},filters:{getPreviewUrl:function(t){return t?s["a"].getImageCodeUrl(t,"goods_brand"):""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/goods/setting/brand/add"),this.auth.set=this.$permission("/goods/setting/brand/set"),this.auth.del=this.$permission("/goods/setting/brand/del"),this.auth.sort=this.$permission("/goods/setting/brand/sort"),this.auth.url=this.$permission("/goods/setting/brand/url"),this.auth.enable=this.$permission("/goods/setting/brand/enable"),this.auth.disable=this.$permission("/goods/setting/brand/disable")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.brand_id)})):e.push(this.currentTableData[t].brand_id),e},handleCommand:function(t){switch(t){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&0===e.data[0].type&&(this.form.logo=e.data[0].url)}},_getStorageFileList:function(t){if(t.length){var e,a=Object(i["a"])(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(0===o.type){this.form.logo=o.url;break}}}catch(r){a.e(r)}finally{a.f()}}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,o=t.order,r={order_type:void 0,order_field:void 0};e&&o&&(r.order_type="ascending"===o?"asc":"desc",r.order_field=a),this.$emit("sort",r)},handleCreate:function(){var t=this;this.form={goods_category_id:0,name:"",phonetic:"",description:"",logo:"",url:"",target:"_blank",sort:50,status:1},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Promise.all([Object(n["a"])(Object(l["a"])({},t.form)),Object(c["c"])(t.form.goods_category_id)]).then((function(e){t.currentTableData.unshift(Object(l["a"])(Object(l["a"])({},e[0].data),{},{category_name:e[1].data?e[1].data.name:""})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleUpdate:function(t){var e=this;this.currentIndex=t,this.form=Object(l["a"])({},this.currentTableData[t]),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Promise.all([Object(n["e"])(Object(l["a"])({},t.form)),Object(c["c"])(t.form.goods_category_id)]).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(l["a"])(Object(l["a"])(Object(l["a"])({},t.currentTableData[t.currentIndex]),e[0].data),{},{category_name:e[1].data?e[1].data.name:""})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._getIdList(t);if(0!==r.length){if(!o){var i=this.currentTableData[t],s=i.status?0:1;if(i.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(l["a"])(Object(l["a"])({},i),{},{status:2})),void c(r,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(r,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(t,e,a){Object(n["g"])(t,e).then((function(){a.currentTableData.forEach((function(o,r){-1!==t.indexOf(o.brand_id)&&a.$set(a.currentTableData,r,Object(l["a"])(Object(l["a"])({},o),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(n["b"])(a).then((function(){s["a"].deleteDataList(e.currentTableData,a,"brand_id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleView:function(t){this.currentTableData[t].url?this.$open(this.currentTableData[t].url):this.$message.warning("无效的链接地址")},handleSort:function(t){Object(n["f"])(this.currentTableData[t].brand_id,this.currentTableData[t].sort)}}},u=d,m=(a("6962"),a("2877")),p=Object(m["a"])(u,o,r,!1,null,"00fbdb65",null);e["default"]=p.exports},e211:function(t,e,a){}}]);