(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c26da"],{"49ed":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增模型")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:"编号",prop:"goods_type_id",sortable:"custom",width:"100"}}),a("el-table-column",{attrs:{label:"名称",prop:"type_name",sortable:"custom"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.spec?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleSpec(e.row.goods_type_id)}}},[t._v("规格列表")]):t._e(),t.auth.attribute?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleAttribute(e.row.goods_type_id)}}},[t._v("属性列表")]):t._e(),t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"50px","label-position":"left"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"名称",prop:"type_name"}},[a("el-input",{ref:"input",attrs:{placeholder:"请输入模型名称",clearable:!0},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;"create"===t.dialogStatus?t.create():t.update()}},model:{value:t.form.type_name,callback:function(e){t.$set(t.form,"type_name",e)},expression:"form.type_name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},n=[],o=(a("a434"),a("5530")),s=a("7f04"),r={props:{loading:{default:!1},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],auth:{add:!1,set:!1,del:!1,attribute:!1,spec:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑模型",create:"新增模型"},form:{type_name:void 0},rules:{type_name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:60,message:"长度不能大于 60 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/goods/setting/type/add"),this.auth.set=this.$permission("/goods/setting/type/set"),this.auth.del=this.$permission("/goods/setting/type/del"),this.auth.attribute=this.$permission("/goods/setting/type/attribute"),this.auth.spec=this.$permission("/goods/setting/type/spec")},sortChange:function(t){var e=t.column,a=t.prop,i=t.order,n={order_type:void 0,order_field:void 0};e&&i&&(n.order_type="ascending"===i?"asc":"desc",n.order_field=a),this.$emit("sort",n)},handleCreate:function(){var t=this;this.form={type_name:""},this.$nextTick((function(){t.$refs.form.clearValidate(),t.$refs.input.focus()})),this.dialogStatus="create",this.dialogLoading=!1,this.dialogFormVisible=!0},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["a"])(t.form.type_name).then((function(e){t.currentTableData.unshift(e.data),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleUpdate:function(t){var e=this;this.currentIndex=t,this.form=Object(o["a"])({},this.currentTableData[t]),this.$nextTick((function(){e.$refs.form.clearValidate(),e.$refs.input.select()})),this.dialogStatus="update",this.dialogLoading=!1,this.dialogFormVisible=!0},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["e"])(Object(o["a"])({},t.form)).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(o["a"])(Object(o["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleDelete:function(t){var e=this;this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(s["b"])([e.currentTableData[t].goods_type_id]).then((function(){e.currentTableData.splice(t,1),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){}))},handleAttribute:function(t){this.$router.push({name:"goods-setting-attribute",params:{goods_type_id:t}})},handleSpec:function(t){this.$router.push({name:"goods-setting-spec",params:{goods_type_id:t}})}}},l=r,d=a("2877"),c=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=c.exports}}]);