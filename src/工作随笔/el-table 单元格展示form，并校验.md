```
<template>  
  <el-dialog      v-model="showCreateDialog"  
      :close-on-click-modal="false"  
      :title="title"  
      class="algorithmCreate"  
      style="overflow: hidden;height: 79%"  
  >  
    <div style="overflow-y: auto; height: 60vh">  
      <el-row class="header">  
        <el-col class="verCenter">  
          <div class="label">算法名称</div>  
          <el-input v-model="name" class="input"/>  
        </el-col>        <el-col class="upload">  
          <el-upload              v-show="flageer"  
              v-model:file-list="fileList"  
              :auto-upload="false"  
              :on-change="handleChange"  
              action=""  
              class="upload-demo"  
          >  
            <el-button bg text type="primary">上传算法包</el-button>  
            <template #tip>  
              <div class="el-upload__tip"></div>  
            </template>          </el-upload>          <div class="command">  
            <span style="width: 6em;text-align: center;line-height: 32px">运行命令：</span>  
            <el-input v-model="commandValue"></el-input>  
          </div>        </el-col>      </el-row>      <div class="config-box">  
        <div>变量设置</div>  
        <el-table :data="variableData" :show-header="false" border class="variable-set" fit style="width: 100%">  
          <el-table-column label="名称" prop="name"></el-table-column>  
          <el-table-column label="方式（单选，多选）" prop="mode">  
            <template #default="scope">  
              <el-select v-model="variableData[scope.$index].mode">  
                <el-option                    v-for="value in modeOption"  
                    :label="value.label"  
                    :value="value.value">  
                </el-option>              </el-select>            </template>          </el-table-column>          <el-table-column label="类型" prop="type">  
            <template #default="scope">  
              <el-select v-model="variableData[scope.$index].type" :multiple="true">  
                <el-option                    v-for="value in typeOption"  
                    :label="value.label"  
                    :value="value.value"  
                ></el-option>  
              </el-select>            </template>          </el-table-column>        </el-table>        <div class="params-set">  
          <div class="params-set-title">参数设置  
            <el-button :icon="Plus" type="primary" @click="addLine">  
            </el-button>          </div>          <el-form ref="variableForm" :model="paramSet" :show-message="false" size="default">  
            <el-table :data="paramSet.tableData" border fit style="width: 100%">  
              <el-table-column label="参数名" prop="paramName">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.paramName'" :rules="rules.paramName">  
                    <el-input v-model="scope.row.paramName">  
                    </el-input>                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="参数编码" prop="paramCode">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.paramCode'" :rules="rules.paramCode">  
                    <el-input v-model="scope.row.paramCode"></el-input>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="参数类型" prop="disType">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.disType'">  
                    <el-select v-model="scope.row.disType">  
                      <el-option                          v-for="data in disType"  
                          :label="data.label"  
                          :value="data.value"  
                      ></el-option>  
                    </el-select>                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="下拉参数设置">  
                <template #default="scope">  
                  <el-form-item>                    <el-button :disabled="scope.row.disType === 'text'" @click="selectParamsEdit(scope)">编辑  
                    </el-button>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="默认值" prop="defaultValue">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.defaultValue'" :rules="rules.defaultValue">  
                    <el-input v-model="scope.row.defaultValue"></el-input>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="参数说明" prop="paramDescription">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.paramDescription'"  
                                :rules="rules.paramDescription">  
                    <el-input v-model="scope.row.paramDescription"></el-input>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="校验规则" prop="prmFormat">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.prmFormat'" :rules="rules.prmFormat">  
                    <el-input v-model="scope.row.prmFormat"></el-input>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="校验错误提示" prop="prmFormatPrompt">  
                <template #default="scope">  
                  <el-form-item :prop="'tableData.' + scope.$index + '.prmFormatPrompt'"  
                                :rules="rules.prmFormatPrompt">  
                    <el-input v-model="scope.row.prmFormatPrompt"></el-input>  
                  </el-form-item>                </template>              </el-table-column>              <el-table-column label="操作" width="65">  
                <template #default="scope">  
                  <el-form-item>                    <el-button :icon="DeleteFilled" type="warning" @click="deleteParamsSet(scope)"></el-button>  
                  </el-form-item>                </template>              </el-table-column>            </el-table>          </el-form>        </div>      </div>      <el-row class="main">  
        <el-col>          <div class="title">一、算法介绍</div>  
          <el-input              v-model="introduce1"  
              :rows="3"  
              placeholder="请输入内容"  
              type="textarea"  
          />  
        </el-col>        <el-col>          <div class="title">二、适用场景</div>  
          <el-input              v-model="introduce2"  
              :rows="3"  
              placeholder="请输入内容"  
              type="textarea"  
          />  
        </el-col>        <el-col>          <div class="title">三、数据源字段及参数说明</div>  
          <el-input              v-model="introduce3"  
              :rows="3"  
              placeholder="请输入内容"  
              type="textarea"  
          />  
        </el-col>      </el-row>    </div>    <template #footer>  
        <span class="dialog-footer">  
          <el-button @click="showCreateDialog = false">关闭</el-button>  
          <el-button v-show="flageer" type="primary" @click="saveFile"  
          >保存</el-button>  
          <el-button v-show="!flageer" type="primary" @click="determine"  
          >确定</el-button>  
        </span>    </template>  </el-dialog>  <el-dialog v-model="paramsEditShow" :close-on-click-modal="false" title="下拉参数设置" top="25vh" width="750px">  
    <div style="text-align: right">  
      <el-button @click="addOption">添加</el-button>  
    </div>    <el-form :inline="true" :model="optionList">  
      <el-form-item v-for="(data,index) in optionList.list">  
        <el-form-item label="显示名称">  
          <el-input v-model="data.label"></el-input>  
        </el-form-item>        <el-form-item label="参数名称">  
          <el-input v-model="data.value"></el-input>  
        </el-form-item>        <el-form-item>          <el-button type="warning" @click="deleteOption(data,index)">删除</el-button>  
        </el-form-item>      </el-form-item>    </el-form>    <template #footer>  
      <span class="dialog-footer">  
        <el-button @click="cancelFun">取消</el-button>  
        <el-button type="primary" @click="saveDialog">  
          保存  
        </el-button>  
      </span>    </template>  </el-dialog></template>  
  
<script setup>  
//#region  
import {inject, onUpdated, reactive, ref, toRefs, unref, watch} from "vue";  
import {customFild, customUpdate, getDefinedAlgorithmParam} from "@/services/algorithm";  
import {ElMessage} from "element-plus";  
import {DeleteFilled, Plus} from '@element-plus/icons-vue'  
  
const {showCreateDialog, rower, title, flagAge} = inject("showCreateDialog");  
const customList = inject("customList", () => {  
}); //接父组件的方法  
const flageer = ref(true); //状态  
const fileList = ref([]); //绑定上传的文件  
const commandValue = ref('')//运行命令input  
//v-model绑定的值  
const fileData = ref([]); //上传对象  
const data = reactive({  
  alsID: "",  
  name: "",  
  introduce1: "",  
  introduce2: "",  
  introduce3: "",  
});  
const {name, introduce1, introduce2, introduce3, alsID} = toRefs(data);  
//点击上传文件  
const handleChange = (file, fileLists) => {  
  fileList.value = {};  
  //如果第二次上传文件，将前一个文件删除  
  //这样fileList就一直保持一个文件  
  if (fileLists.length > 1) {  
    fileLists.shift(); //往前添加  
  }  
  fileList.value = fileLists;  
  fileData.value = fileLists[0].raw;  
  // 方案2  
  // fileList.value = [file];};  
  
//保存  
const saveFile = async () => {  
  const myForm = unref(variableForm)  
  let flag = false  
  await myForm.validate((valid, fields) => {  
    if (valid) {  
      console.log('submit!')  
    } else {  
      flag = true  
      for (const fieldKey in fields) {  
        ElMessage.error(fields[fieldKey][0].message)  
      }  
    }  
  })  
  if (flag) return  
  if (data.name == "" || fileData.value.length == 0) {  
    ElMessage.error("请添加算法名称及上传文件");  
    return;  }  
  if (!commandValue.value) {  
    ElMessage.error('请输入运行命令')  
    return  
  }  
  const variableSet = {}  
  let errFlag = true  
  variableData.forEach((data, index) => {  
    if (index === 0) {  
      if (data.mode !== '' && data.type.length === 0) {  
        ElMessage.error('请至少选择一个目标变量')  
        return errFlag = false  
      }  
      variableSet.destVar = [data.mode, [...data.type]]  
    } else if (index === 1) {  
      if (data.mode !== '' && data.type.length === 0) {  
        ElMessage.error('请至少选择一个自变量')  
        return errFlag = false  
      }  
      variableSet.varList = [data.mode, [...data.type]]  
    }  
  })  
  if (!errFlag) return  
  const obj = {  
    alsName: name.value,  
    alsIntro: introduce1.value,  
    alsScene: introduce2.value,  
    alsParam: introduce3.value,  
    runCommand: commandValue.value  
  };  
  
  const paramInfo = paramSet.tableData  
  obj.variableSet = variableSet  
  obj.paramInfo = paramInfo  
  const formData = reactive(new FormData()); //这样是vue3创建对象  
  formData.append("file", fileData.value);  
  formData.append("jsonObj", JSON.stringify(obj));  
  const respData = await customFild(formData);  
  showCreateDialog.value = false; //关闭弹窗  
  customList();  
  if (respData?.respCode == 200) {  
    ElMessage({  
      message: "已保存",  
      type: "success",  
    });  
  } else {  
    ElMessage.error("未保存");  
  }  
};  
//确定  
const determine = async () => {  
  const myForm = unref(variableForm)  
  let flag = false  
  await myForm.validate((valid, fields) => {  
    if (valid) {  
      console.log('submit!')  
    } else {  
      flag = true  
      console.log('error submit!', fields)  
    }  
  })  
  if (!commandValue.value) {  
    ElMessage.error('请输入运行命令')  
    return  
  }  
  const variableSet = {}  
  let errFlag = true  
  variableData.forEach((data, index) => {  
    if (index === 0) {  
      if (data.mode !== '' && data.type.length === 0) {  
        ElMessage.error('请至少选择一个目标变量')  
        return errFlag = false  
      }  
      variableSet.destVar = [data.mode, [...data.type]]  
    } else if (index === 1) {  
      if (data.mode !== '' && data.type.length === 0) {  
        ElMessage.error('请至少选择一个自变量')  
        return errFlag = false  
      }  
      variableSet.varList = [data.mode, [...data.type]]  
    }  
  })  
  
  const obj = {  
    alsID: alsID.value,  
    alsName: name.value,  
    alsIntro: introduce1.value,  
    alsScene: introduce2.value,  
    alsParam: introduce3.value,  
    runCommand: commandValue.value  
  };  
  const paramInfo = paramSet.tableData  
  obj.variableSet = variableSet  
  obj.paramInfo = paramInfo  
  const respData = await customUpdate(obj);  
  customList();  
  if (respData?.respCode == 200) {  
    ElMessage({  
      message: "修改算法信息成功",  
      type: "success",  
    });  
  } else {  
    ElMessage.error("修改算法信息失败");  
  }  
  showCreateDialog.value = false;  
};  
//放在一个watch中监听 效果实现不对  
watch(  
    //监听数据回显  
    () => rower.value,  
    (newValue, oldValue) => {  
      alsID.value = newValue.alsID;  
      name.value = newValue.alsName;  
      introduce1.value = newValue.alsIntro;  
      introduce2.value = newValue.alsScene;  
      introduce3.value = newValue.alsParam;  
      commandValue.value = newValue.runCommand  
      if (!flageer.value) {  
        getSetConfig()  
      }  
    },  
    {deep: true},  
    {immediate: true}  
);  
watch(() => showCreateDialog.value,  
    (newValue, oldValue) => {  
      if (newValue) {  
        variableData.splice(0, 2, {name: '目标变量', mode: '', type: []},  
            {name: '自变量', mode: '', type: []})  
        paramSet.tableData = []  
      }  
    })  
watch(  
    //标题和按钮显示状态  
    () => title.value,  
    (newValue, oldValue) => {  
      title.value = newValue;  
    },  
    {deep: true, immediate: true});  
watch(  
    // 按钮显示状态  
    () => flagAge.value,  
    (newValue, oldValue) => {  
      flageer.value = newValue;  
    },  
    {deep: true, immediate: true}  
);  
  
//#endregion  
  
const variableForm = ref(null)  
  
async function getSetConfig() {  
  try {  
    const res = await getDefinedAlgorithmParam({alsID: alsID.value})  
    paramSet.tableData = res.respData.paramInfo  
    optionList.list = res.respData.paramInfo.disTypeOption  
    const tempVariable = JSON.parse(res.respData.variableSet)  
    for (const tempVariableKey in tempVariable) {  
      if (tempVariableKey === 'destVar') {  
        variableData[0].mode = tempVariable[tempVariableKey][0]  
        variableData[0].type = tempVariable[tempVariableKey][1]  
      } else if (tempVariableKey === 'varList') {  
        variableData[1].mode = tempVariable[tempVariableKey][0]  
        variableData[1].type = tempVariable[tempVariableKey][1]  
      }  
    }  
  } catch (e) {  
    console.log(e)  
  }  
}  
  
onUpdated(() => {  
  
})  
  
//变量设置中mode和type，select的option  
const modeOption = [  
  {label: '无', value: ''},  
  {label: '单选', value: '1'},  
  {label: '多选', value: '2'},  
]  
const typeOption = [  
  {label: '文本', value: '1'},  
  {label: '数值', value: '2'},  
  {label: '日期', value: '3'},  
  {label: '枚举', value: '4'},  
]  
//变量设置vmodel  
const variableData = reactive([  
  {name: '目标变量', mode: '', type: []},  
  {name: '自变量', mode: '', type: []}  
])  
  
//参数设置相关  
const disType = [  
  {label: '文本', value: 'text'},  
  {label: '下拉框', value: 'combobox'}  
]  
const rules = {  
  paramName: {required: true, message: '请输入参数名'},  
  paramCode: {required: true, message: '请输入参数编码'},  
  /*  defaultValue: {required: true, message: '请输入默认值', trigger: 'blur'},  
    paramDescription: {required: true, message: '请输入参数说明', trigger: 'blur'},  
    prmFormat: {required: true, message: '请输入校验规则', trigger: 'blur'},  
    prmFormatPrompt: {required: true, message: '请输入规则错误说明', trigger: 'blur'}*/  
}  
const paramSet = reactive({tableData: []})  
  
//添加一条参数设置  
function addLine() {  
  paramSet.tableData.push({  
    paramName: '',  
    paramCode: '',  
    disType: 'text',  
    disTypeOption: [],  
    defaultValue: '',  
    paramDescription: '',  
    prmFormat: '',  
    prmFormatPrompt: ''  
  })  
}  
  
//删除一条参数设置记录  
function deleteParamsSet(scope) {  
  const index = scope.$index  
  paramSet.tableData.splice(index, 1)  
}  
  
//dialog控制显示变量  
const paramsEditShow = ref(false)  
const paramsIndex = ref(0)  
  
//点击编辑按钮，将index的值更新  
function selectParamsEdit(scope) {  
  paramsEditShow.value = true  
  paramsIndex.value = scope.$index  
  optionList.list = paramSet.tableData[scope.$index].disTypeOption  
  if (optionList.list.length === 0) {  
    optionList.list.push({label: '', value: ''})  
  }  
}  
  
const optionList = reactive({  
  list: [  
    {label: '', value: ''}  
  ]  
})  
  
//添加下拉选项  
function addOption() {  
  optionList.list.push({label: '', value: ''})  
}  
  
//删除选项  
function deleteOption(data, index) {  
  optionList.list.splice(index, 1)  
}  
  
//dialog取消按钮方法  
function cancelFun() {  
  paramsEditShow.value = false  
  optionList.list = [{label: '', value: ''}]  
}  
  
//dialog确定按钮方法  
function saveDialog() {  
  let errFlag = false  
  optionList.list.forEach(e => {  
    if (e.label === '' || e.value === '') {  
      errFlag = true  
    }  
  })  
  if (errFlag) {  
    return ElMessage.error('请完整填写内容')  
  }  
  paramSet.tableData[paramsIndex.value].disTypeOption = optionList.list  
  const optionLabel = optionList.list.map(i => i.label).join('|')  
  const optionValue = optionList.list.map(i => i.value).join('|')  
  paramSet.tableData[paramsIndex.value].optionLabel = optionLabel  
  paramSet.tableData[paramsIndex.value].optionValue = optionValue  
  cancelFun()  
}  
</script>  
  
<style lang="scss" scoped>  
.algorithmCreate {  
  .dialog-container {  
    height: 90vh;  
  }  
  
  .header {  
    padding: 0 15px;  
    height: 105px;  
  
    .label {  
      // width: 150px;  
      text-align: right;  
      padding-right: 10px;  
    }  
  
    .input {  
      width: 200px;  
    }  
  
    .verCenter {  
      display: flex;  
      align-items: center;  
      justify-content: flex-start;  
    }  
  
    .upload {  
      display: flex;  
      align-items: center;  
      justify-content: space-between;  
  
      .command {  
        width: 710px;  
        display: flex;  
      }  
    }  
  }  
  
  .main {  
    padding: 0 15px;  
    height: 340px;  
    overflow: auto;  
  
    .title {  
      padding: 10px 0;  
    }  
  }  
  
  .el-upload {  
    display: flex;  
    align-items: center;  
    justify-content: flex-start;  
  }  
  
  .upload-demo {  
    display: flex;  
  }  
  
  .el-upload-list--text {  
    width: auto;  
  }  
  
  .params-set {  
    margin-top: 15px;  
  
    .params-set-title {  
      display: flex;  
      justify-content: space-between;  
    }  
  }  
  
  .config-box {  
    padding: 0 15px;  
  
    .variable-set {  
      :deep(.el-select) {  
        width: 100%;  
      }  
  
      :deep(.el-input__wrapper) {  
        box-shadow: none;  
      }  
    }  
  }  
  
  
}  
  
.dialog-footer button:first-child {  
  margin-right: 10px;  
}  
  
:deep(.el-upload-list__item-file-name) {  
  overflow: visible;  
}  
  
:deep(.el-upload-list__item-name) {  
  padding: 0 26px;  
}  
</style>
```