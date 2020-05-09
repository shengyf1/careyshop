(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40b59533"],{"2e23":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"}},[r("el-form-item",{directives:[{name:"permission",rawName:"v-permission",value:"/member/user/address/add",expression:"'/member/user/address/add'"}]},[r("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增地址")])],1),r("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),r("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0}},[r("el-table-column",{attrs:{label:"收货人",prop:"consignee",width:"100"}}),r("el-table-column",{attrs:{label:"所在地区",prop:"region","min-width":"150","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"详细地址",prop:"address","min-width":"200","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"邮编",prop:"zipcode"}}),r("el-table-column",{attrs:{label:"手机",prop:"mobile",width:"120"}}),r("el-table-column",{attrs:{label:"电话",prop:"tel",width:"120"}}),r("el-table-column",{attrs:{label:"操作",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"/member/user/address/set",expression:"'/member/user/address/set'"}],attrs:{size:"small",type:"text"},on:{click:function(r){return e.handleUpdate(t.$index)}}},[e._v("编辑")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"/member/user/address/del",expression:"'/member/user/address/del'"}],attrs:{size:"small",type:"text"},on:{click:function(r){return e.handleDelete(t.$index)}}},[e._v("删除")]),r("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"/member/user/address/default",expression:"'/member/user/address/default'"}],attrs:{disabled:t.row.user_address_id===e.addressId,size:"small",type:"text"},on:{click:function(r){return e.handleDefault(t.row.user_address_id)}}},[e._v(" "+e._s(t.row.user_address_id===e.addressId?"默认地址":"设为默认")+" ")])]}}])})],1),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t},open:e.openDialog}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"consignee"}},[r("el-input",{attrs:{placeholder:"请输入姓名",clearable:!0},model:{value:e.form.consignee,callback:function(t){e.$set(e.form,"consignee",t)},expression:"form.consignee"}})],1),r("el-form-item",{attrs:{label:"所在地区",prop:"regions"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所在地区",options:e.treeData,props:e.treeProps,clearable:""},model:{value:e.form.regions,callback:function(t){e.$set(e.form,"regions",t)},expression:"form.regions"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[r("el-input",{attrs:{placeholder:"请输入详细地址",clearable:!0},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",{attrs:{label:"邮编",prop:"zipcode"}},[r("el-input",{attrs:{placeholder:"可输入邮编",clearable:!0},model:{value:e.form.zipcode,callback:function(t){e.$set(e.form,"zipcode",t)},expression:"form.zipcode"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机",clearable:!0},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),r("el-form-item",{attrs:{label:"电话",prop:"tel"}},[r("el-input",{attrs:{placeholder:"可输入电话",clearable:!0},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),e.form.user_address_id!==e.addressId?r("el-form-item",{attrs:{prop:"is_default"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.form.is_default,callback:function(t){e.$set(e.form,"is_default",t)},expression:"form.is_default"}},[e._v(" 是否设为默认收货地址 ")])],1):e._e()],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?r("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):r("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},i=[],o=(r("4160"),r("a434"),r("159b"),r("5530")),s=r("e558"),l=r("ca00"),n=r("f86b"),d={props:{loading:{default:!1},addressId:{default:0},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑地址",create:"新增地址"},form:{client_id:void 0,consignee:void 0,regions:void 0,address:void 0,zipcode:void 0,tel:void 0,mobile:void 0,is_default:void 0},rules:{consignee:[{required:!0,message:"姓名不能为空",trigger:"blur"},{max:30,message:"姓名不能大于 30 个字符",trigger:"blur"}],regions:[{required:!0,message:"所在地区不能为空",trigger:"change"}],address:[{required:!0,message:"详细地址不能为空",trigger:"blur"},{max:255,message:"详细地址不能大于 255 个字符",trigger:"blur"}],mobile:[{required:!0,message:"手机不能为空",trigger:"blur"},{min:7,max:15,message:"长度在 7 到 15 个字符",trigger:"blur"}],zipcode:[{max:20,message:"邮编不能大于 20 个字符",trigger:"blur"}],tel:[{max:20,message:"电话不能大于 20 个字符",trigger:"blur"}]},treeData:[],treeProps:{value:"region_id",label:"region_name",children:"children"}}},watch:{tableData:{handler:function(e){this.currentTableData=e}}},methods:{handleDelete:function(e){var t=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])(t.$route.params.client_id,[t.currentTableData[e].user_address_id]).then((function(){t.currentTableData.splice(e,1),t.$message.success("操作成功")}))})).catch((function(){}))},handleDefault:function(e){var t=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["e"])(e).then((function(){t.$emit("update:addressId",e),t.$message.success("操作成功")}))})).catch((function(){}))},openDialog:function(){var e=this;this.treeData.length||Object(n["d"])({region_id:1}).then((function(t){var r={key:"parent_id",value:[1]};e.treeData=l["a"].formatDataToTree(t.data,"region_id","parent_id",r)}))},handleCreate:function(){var e=this;Object(s["d"])(this.$route.params.client_id).then((function(){e.form={client_id:e.$route.params.client_id,consignee:void 0,regions:void 0,address:void 0,zipcode:void 0,tel:void 0,mobile:void 0,is_default:0},e.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))})).catch((function(){e.dialogFormVisible=!1}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.form.regions.forEach((function(t,r){switch(r){case 0:e.form.province=t;break;case 1:e.form.city=t;break;case 2:e.form.district=t;break}})),e.dialogLoading=!0,Object(s["a"])(Object(o["a"])({},e.form)).then((function(t){1===e.form.is_default&&e.$emit("update:addressId",t.data.user_address_id),e.currentTableData.push(t.data),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e,this.form=Object(o["a"])(Object(o["a"])({},this.currentTableData[e]),{},{client_id:this.$route.params.client_id}),this.form.regions=[this.form.province||0,this.form.city||0,this.form.district||0],this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.form.regions.forEach((function(t,r){switch(r){case 0:e.form.province=t;break;case 1:e.form.city=t;break;case 2:e.form.district=t;break}})),e.dialogLoading=!0,Object(s["f"])(Object(o["a"])({},e.form)).then((function(t){1===e.form.is_default&&e.$emit("update:addressId",t.data.user_address_id),e.$set(e.currentTableData,e.currentIndex,Object(o["a"])(Object(o["a"])({},e.currentTableData[e.currentIndex]),t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))}}},c=d,u=r("2877"),m=Object(u["a"])(c,a,i,!1,null,null,null);t["default"]=m.exports},f86b:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return d}));var a=r("bc07");function i(e){return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"add.region.item"},data:e})}function o(e){return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"set.region.item"},data:e})}function s(e){return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"del.region.list"},data:{region_id:e}})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"get.region.list"},data:e})}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"get.region.son.list"},data:e})}function d(e){return Object(a["a"])({url:"/v1/region",method:"post",params:{method:"set.region.index"},data:{region_id:e}})}}}]);