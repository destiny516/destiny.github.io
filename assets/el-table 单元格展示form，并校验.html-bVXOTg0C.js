import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as n,a as t}from"./app-x8bEfOWx.js";const i={},a=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;template&gt;  
  &lt;el-dialog      v-model=&quot;showCreateDialog&quot;  
      :close-on-click-modal=&quot;false&quot;  
      :title=&quot;title&quot;  
      class=&quot;algorithmCreate&quot;  
      style=&quot;overflow: hidden;height: 79%&quot;  
  &gt;  
    &lt;div style=&quot;overflow-y: auto; height: 60vh&quot;&gt;  
      &lt;el-row class=&quot;header&quot;&gt;  
        &lt;el-col class=&quot;verCenter&quot;&gt;  
          &lt;div class=&quot;label&quot;&gt;算法名称&lt;/div&gt;  
          &lt;el-input v-model=&quot;name&quot; class=&quot;input&quot;/&gt;  
        &lt;/el-col&gt;        &lt;el-col class=&quot;upload&quot;&gt;  
          &lt;el-upload              v-show=&quot;flageer&quot;  
              v-model:file-list=&quot;fileList&quot;  
              :auto-upload=&quot;false&quot;  
              :on-change=&quot;handleChange&quot;  
              action=&quot;&quot;  
              class=&quot;upload-demo&quot;  
          &gt;  
            &lt;el-button bg text type=&quot;primary&quot;&gt;上传算法包&lt;/el-button&gt;  
            &lt;template #tip&gt;  
              &lt;div class=&quot;el-upload__tip&quot;&gt;&lt;/div&gt;  
            &lt;/template&gt;          &lt;/el-upload&gt;          &lt;div class=&quot;command&quot;&gt;  
            &lt;span style=&quot;width: 6em;text-align: center;line-height: 32px&quot;&gt;运行命令：&lt;/span&gt;  
            &lt;el-input v-model=&quot;commandValue&quot;&gt;&lt;/el-input&gt;  
          &lt;/div&gt;        &lt;/el-col&gt;      &lt;/el-row&gt;      &lt;div class=&quot;config-box&quot;&gt;  
        &lt;div&gt;变量设置&lt;/div&gt;  
        &lt;el-table :data=&quot;variableData&quot; :show-header=&quot;false&quot; border class=&quot;variable-set&quot; fit style=&quot;width: 100%&quot;&gt;  
          &lt;el-table-column label=&quot;名称&quot; prop=&quot;name&quot;&gt;&lt;/el-table-column&gt;  
          &lt;el-table-column label=&quot;方式（单选，多选）&quot; prop=&quot;mode&quot;&gt;  
            &lt;template #default=&quot;scope&quot;&gt;  
              &lt;el-select v-model=&quot;variableData[scope.$index].mode&quot;&gt;  
                &lt;el-option                    v-for=&quot;value in modeOption&quot;  
                    :label=&quot;value.label&quot;  
                    :value=&quot;value.value&quot;&gt;  
                &lt;/el-option&gt;              &lt;/el-select&gt;            &lt;/template&gt;          &lt;/el-table-column&gt;          &lt;el-table-column label=&quot;类型&quot; prop=&quot;type&quot;&gt;  
            &lt;template #default=&quot;scope&quot;&gt;  
              &lt;el-select v-model=&quot;variableData[scope.$index].type&quot; :multiple=&quot;true&quot;&gt;  
                &lt;el-option                    v-for=&quot;value in typeOption&quot;  
                    :label=&quot;value.label&quot;  
                    :value=&quot;value.value&quot;  
                &gt;&lt;/el-option&gt;  
              &lt;/el-select&gt;            &lt;/template&gt;          &lt;/el-table-column&gt;        &lt;/el-table&gt;        &lt;div class=&quot;params-set&quot;&gt;  
          &lt;div class=&quot;params-set-title&quot;&gt;参数设置  
            &lt;el-button :icon=&quot;Plus&quot; type=&quot;primary&quot; @click=&quot;addLine&quot;&gt;  
            &lt;/el-button&gt;          &lt;/div&gt;          &lt;el-form ref=&quot;variableForm&quot; :model=&quot;paramSet&quot; :show-message=&quot;false&quot; size=&quot;default&quot;&gt;  
            &lt;el-table :data=&quot;paramSet.tableData&quot; border fit style=&quot;width: 100%&quot;&gt;  
              &lt;el-table-column label=&quot;参数名&quot; prop=&quot;paramName&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.paramName&#39;&quot; :rules=&quot;rules.paramName&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.paramName&quot;&gt;  
                    &lt;/el-input&gt;                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;参数编码&quot; prop=&quot;paramCode&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.paramCode&#39;&quot; :rules=&quot;rules.paramCode&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.paramCode&quot;&gt;&lt;/el-input&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;参数类型&quot; prop=&quot;disType&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.disType&#39;&quot;&gt;  
                    &lt;el-select v-model=&quot;scope.row.disType&quot;&gt;  
                      &lt;el-option                          v-for=&quot;data in disType&quot;  
                          :label=&quot;data.label&quot;  
                          :value=&quot;data.value&quot;  
                      &gt;&lt;/el-option&gt;  
                    &lt;/el-select&gt;                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;下拉参数设置&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item&gt;                    &lt;el-button :disabled=&quot;scope.row.disType === &#39;text&#39;&quot; @click=&quot;selectParamsEdit(scope)&quot;&gt;编辑  
                    &lt;/el-button&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;默认值&quot; prop=&quot;defaultValue&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.defaultValue&#39;&quot; :rules=&quot;rules.defaultValue&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.defaultValue&quot;&gt;&lt;/el-input&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;参数说明&quot; prop=&quot;paramDescription&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.paramDescription&#39;&quot;  
                                :rules=&quot;rules.paramDescription&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.paramDescription&quot;&gt;&lt;/el-input&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;校验规则&quot; prop=&quot;prmFormat&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.prmFormat&#39;&quot; :rules=&quot;rules.prmFormat&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.prmFormat&quot;&gt;&lt;/el-input&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;校验错误提示&quot; prop=&quot;prmFormatPrompt&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item :prop=&quot;&#39;tableData.&#39; + scope.$index + &#39;.prmFormatPrompt&#39;&quot;  
                                :rules=&quot;rules.prmFormatPrompt&quot;&gt;  
                    &lt;el-input v-model=&quot;scope.row.prmFormatPrompt&quot;&gt;&lt;/el-input&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=&quot;操作&quot; width=&quot;65&quot;&gt;  
                &lt;template #default=&quot;scope&quot;&gt;  
                  &lt;el-form-item&gt;                    &lt;el-button :icon=&quot;DeleteFilled&quot; type=&quot;warning&quot; @click=&quot;deleteParamsSet(scope)&quot;&gt;&lt;/el-button&gt;  
                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;            &lt;/el-table&gt;          &lt;/el-form&gt;        &lt;/div&gt;      &lt;/div&gt;      &lt;el-row class=&quot;main&quot;&gt;  
        &lt;el-col&gt;          &lt;div class=&quot;title&quot;&gt;一、算法介绍&lt;/div&gt;  
          &lt;el-input              v-model=&quot;introduce1&quot;  
              :rows=&quot;3&quot;  
              placeholder=&quot;请输入内容&quot;  
              type=&quot;textarea&quot;  
          /&gt;  
        &lt;/el-col&gt;        &lt;el-col&gt;          &lt;div class=&quot;title&quot;&gt;二、适用场景&lt;/div&gt;  
          &lt;el-input              v-model=&quot;introduce2&quot;  
              :rows=&quot;3&quot;  
              placeholder=&quot;请输入内容&quot;  
              type=&quot;textarea&quot;  
          /&gt;  
        &lt;/el-col&gt;        &lt;el-col&gt;          &lt;div class=&quot;title&quot;&gt;三、数据源字段及参数说明&lt;/div&gt;  
          &lt;el-input              v-model=&quot;introduce3&quot;  
              :rows=&quot;3&quot;  
              placeholder=&quot;请输入内容&quot;  
              type=&quot;textarea&quot;  
          /&gt;  
        &lt;/el-col&gt;      &lt;/el-row&gt;    &lt;/div&gt;    &lt;template #footer&gt;  
        &lt;span class=&quot;dialog-footer&quot;&gt;  
          &lt;el-button @click=&quot;showCreateDialog = false&quot;&gt;关闭&lt;/el-button&gt;  
          &lt;el-button v-show=&quot;flageer&quot; type=&quot;primary&quot; @click=&quot;saveFile&quot;  
          &gt;保存&lt;/el-button&gt;  
          &lt;el-button v-show=&quot;!flageer&quot; type=&quot;primary&quot; @click=&quot;determine&quot;  
          &gt;确定&lt;/el-button&gt;  
        &lt;/span&gt;    &lt;/template&gt;  &lt;/el-dialog&gt;  &lt;el-dialog v-model=&quot;paramsEditShow&quot; :close-on-click-modal=&quot;false&quot; title=&quot;下拉参数设置&quot; top=&quot;25vh&quot; width=&quot;750px&quot;&gt;  
    &lt;div style=&quot;text-align: right&quot;&gt;  
      &lt;el-button @click=&quot;addOption&quot;&gt;添加&lt;/el-button&gt;  
    &lt;/div&gt;    &lt;el-form :inline=&quot;true&quot; :model=&quot;optionList&quot;&gt;  
      &lt;el-form-item v-for=&quot;(data,index) in optionList.list&quot;&gt;  
        &lt;el-form-item label=&quot;显示名称&quot;&gt;  
          &lt;el-input v-model=&quot;data.label&quot;&gt;&lt;/el-input&gt;  
        &lt;/el-form-item&gt;        &lt;el-form-item label=&quot;参数名称&quot;&gt;  
          &lt;el-input v-model=&quot;data.value&quot;&gt;&lt;/el-input&gt;  
        &lt;/el-form-item&gt;        &lt;el-form-item&gt;          &lt;el-button type=&quot;warning&quot; @click=&quot;deleteOption(data,index)&quot;&gt;删除&lt;/el-button&gt;  
        &lt;/el-form-item&gt;      &lt;/el-form-item&gt;    &lt;/el-form&gt;    &lt;template #footer&gt;  
      &lt;span class=&quot;dialog-footer&quot;&gt;  
        &lt;el-button @click=&quot;cancelFun&quot;&gt;取消&lt;/el-button&gt;  
        &lt;el-button type=&quot;primary&quot; @click=&quot;saveDialog&quot;&gt;  
          保存  
        &lt;/el-button&gt;  
      &lt;/span&gt;    &lt;/template&gt;  &lt;/el-dialog&gt;&lt;/template&gt;  
  
&lt;script setup&gt;  
//#region  
import {inject, onUpdated, reactive, ref, toRefs, unref, watch} from &quot;vue&quot;;  
import {customFild, customUpdate, getDefinedAlgorithmParam} from &quot;@/services/algorithm&quot;;  
import {ElMessage} from &quot;element-plus&quot;;  
import {DeleteFilled, Plus} from &#39;@element-plus/icons-vue&#39;  
  
const {showCreateDialog, rower, title, flagAge} = inject(&quot;showCreateDialog&quot;);  
const customList = inject(&quot;customList&quot;, () =&gt; {  
}); //接父组件的方法  
const flageer = ref(true); //状态  
const fileList = ref([]); //绑定上传的文件  
const commandValue = ref(&#39;&#39;)//运行命令input  
//v-model绑定的值  
const fileData = ref([]); //上传对象  
const data = reactive({  
  alsID: &quot;&quot;,  
  name: &quot;&quot;,  
  introduce1: &quot;&quot;,  
  introduce2: &quot;&quot;,  
  introduce3: &quot;&quot;,  
});  
const {name, introduce1, introduce2, introduce3, alsID} = toRefs(data);  
//点击上传文件  
const handleChange = (file, fileLists) =&gt; {  
  fileList.value = {};  
  //如果第二次上传文件，将前一个文件删除  
  //这样fileList就一直保持一个文件  
  if (fileLists.length &gt; 1) {  
    fileLists.shift(); //往前添加  
  }  
  fileList.value = fileLists;  
  fileData.value = fileLists[0].raw;  
  // 方案2  
  // fileList.value = [file];};  
  
//保存  
const saveFile = async () =&gt; {  
  const myForm = unref(variableForm)  
  let flag = false  
  await myForm.validate((valid, fields) =&gt; {  
    if (valid) {  
      console.log(&#39;submit!&#39;)  
    } else {  
      flag = true  
      for (const fieldKey in fields) {  
        ElMessage.error(fields[fieldKey][0].message)  
      }  
    }  
  })  
  if (flag) return  
  if (data.name == &quot;&quot; || fileData.value.length == 0) {  
    ElMessage.error(&quot;请添加算法名称及上传文件&quot;);  
    return;  }  
  if (!commandValue.value) {  
    ElMessage.error(&#39;请输入运行命令&#39;)  
    return  
  }  
  const variableSet = {}  
  let errFlag = true  
  variableData.forEach((data, index) =&gt; {  
    if (index === 0) {  
      if (data.mode !== &#39;&#39; &amp;&amp; data.type.length === 0) {  
        ElMessage.error(&#39;请至少选择一个目标变量&#39;)  
        return errFlag = false  
      }  
      variableSet.destVar = [data.mode, [...data.type]]  
    } else if (index === 1) {  
      if (data.mode !== &#39;&#39; &amp;&amp; data.type.length === 0) {  
        ElMessage.error(&#39;请至少选择一个自变量&#39;)  
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
  formData.append(&quot;file&quot;, fileData.value);  
  formData.append(&quot;jsonObj&quot;, JSON.stringify(obj));  
  const respData = await customFild(formData);  
  showCreateDialog.value = false; //关闭弹窗  
  customList();  
  if (respData?.respCode == 200) {  
    ElMessage({  
      message: &quot;已保存&quot;,  
      type: &quot;success&quot;,  
    });  
  } else {  
    ElMessage.error(&quot;未保存&quot;);  
  }  
};  
//确定  
const determine = async () =&gt; {  
  const myForm = unref(variableForm)  
  let flag = false  
  await myForm.validate((valid, fields) =&gt; {  
    if (valid) {  
      console.log(&#39;submit!&#39;)  
    } else {  
      flag = true  
      console.log(&#39;error submit!&#39;, fields)  
    }  
  })  
  if (!commandValue.value) {  
    ElMessage.error(&#39;请输入运行命令&#39;)  
    return  
  }  
  const variableSet = {}  
  let errFlag = true  
  variableData.forEach((data, index) =&gt; {  
    if (index === 0) {  
      if (data.mode !== &#39;&#39; &amp;&amp; data.type.length === 0) {  
        ElMessage.error(&#39;请至少选择一个目标变量&#39;)  
        return errFlag = false  
      }  
      variableSet.destVar = [data.mode, [...data.type]]  
    } else if (index === 1) {  
      if (data.mode !== &#39;&#39; &amp;&amp; data.type.length === 0) {  
        ElMessage.error(&#39;请至少选择一个自变量&#39;)  
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
      message: &quot;修改算法信息成功&quot;,  
      type: &quot;success&quot;,  
    });  
  } else {  
    ElMessage.error(&quot;修改算法信息失败&quot;);  
  }  
  showCreateDialog.value = false;  
};  
//放在一个watch中监听 效果实现不对  
watch(  
    //监听数据回显  
    () =&gt; rower.value,  
    (newValue, oldValue) =&gt; {  
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
watch(() =&gt; showCreateDialog.value,  
    (newValue, oldValue) =&gt; {  
      if (newValue) {  
        variableData.splice(0, 2, {name: &#39;目标变量&#39;, mode: &#39;&#39;, type: []},  
            {name: &#39;自变量&#39;, mode: &#39;&#39;, type: []})  
        paramSet.tableData = []  
      }  
    })  
watch(  
    //标题和按钮显示状态  
    () =&gt; title.value,  
    (newValue, oldValue) =&gt; {  
      title.value = newValue;  
    },  
    {deep: true, immediate: true});  
watch(  
    // 按钮显示状态  
    () =&gt; flagAge.value,  
    (newValue, oldValue) =&gt; {  
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
      if (tempVariableKey === &#39;destVar&#39;) {  
        variableData[0].mode = tempVariable[tempVariableKey][0]  
        variableData[0].type = tempVariable[tempVariableKey][1]  
      } else if (tempVariableKey === &#39;varList&#39;) {  
        variableData[1].mode = tempVariable[tempVariableKey][0]  
        variableData[1].type = tempVariable[tempVariableKey][1]  
      }  
    }  
  } catch (e) {  
    console.log(e)  
  }  
}  
  
onUpdated(() =&gt; {  
  
})  
  
//变量设置中mode和type，select的option  
const modeOption = [  
  {label: &#39;无&#39;, value: &#39;&#39;},  
  {label: &#39;单选&#39;, value: &#39;1&#39;},  
  {label: &#39;多选&#39;, value: &#39;2&#39;},  
]  
const typeOption = [  
  {label: &#39;文本&#39;, value: &#39;1&#39;},  
  {label: &#39;数值&#39;, value: &#39;2&#39;},  
  {label: &#39;日期&#39;, value: &#39;3&#39;},  
  {label: &#39;枚举&#39;, value: &#39;4&#39;},  
]  
//变量设置vmodel  
const variableData = reactive([  
  {name: &#39;目标变量&#39;, mode: &#39;&#39;, type: []},  
  {name: &#39;自变量&#39;, mode: &#39;&#39;, type: []}  
])  
  
//参数设置相关  
const disType = [  
  {label: &#39;文本&#39;, value: &#39;text&#39;},  
  {label: &#39;下拉框&#39;, value: &#39;combobox&#39;}  
]  
const rules = {  
  paramName: {required: true, message: &#39;请输入参数名&#39;},  
  paramCode: {required: true, message: &#39;请输入参数编码&#39;},  
  /*  defaultValue: {required: true, message: &#39;请输入默认值&#39;, trigger: &#39;blur&#39;},  
    paramDescription: {required: true, message: &#39;请输入参数说明&#39;, trigger: &#39;blur&#39;},  
    prmFormat: {required: true, message: &#39;请输入校验规则&#39;, trigger: &#39;blur&#39;},  
    prmFormatPrompt: {required: true, message: &#39;请输入规则错误说明&#39;, trigger: &#39;blur&#39;}*/  
}  
const paramSet = reactive({tableData: []})  
  
//添加一条参数设置  
function addLine() {  
  paramSet.tableData.push({  
    paramName: &#39;&#39;,  
    paramCode: &#39;&#39;,  
    disType: &#39;text&#39;,  
    disTypeOption: [],  
    defaultValue: &#39;&#39;,  
    paramDescription: &#39;&#39;,  
    prmFormat: &#39;&#39;,  
    prmFormatPrompt: &#39;&#39;  
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
    optionList.list.push({label: &#39;&#39;, value: &#39;&#39;})  
  }  
}  
  
const optionList = reactive({  
  list: [  
    {label: &#39;&#39;, value: &#39;&#39;}  
  ]  
})  
  
//添加下拉选项  
function addOption() {  
  optionList.list.push({label: &#39;&#39;, value: &#39;&#39;})  
}  
  
//删除选项  
function deleteOption(data, index) {  
  optionList.list.splice(index, 1)  
}  
  
//dialog取消按钮方法  
function cancelFun() {  
  paramsEditShow.value = false  
  optionList.list = [{label: &#39;&#39;, value: &#39;&#39;}]  
}  
  
//dialog确定按钮方法  
function saveDialog() {  
  let errFlag = false  
  optionList.list.forEach(e =&gt; {  
    if (e.label === &#39;&#39; || e.value === &#39;&#39;) {  
      errFlag = true  
    }  
  })  
  if (errFlag) {  
    return ElMessage.error(&#39;请完整填写内容&#39;)  
  }  
  paramSet.tableData[paramsIndex.value].disTypeOption = optionList.list  
  const optionLabel = optionList.list.map(i =&gt; i.label).join(&#39;|&#39;)  
  const optionValue = optionList.list.map(i =&gt; i.value).join(&#39;|&#39;)  
  paramSet.tableData[paramsIndex.value].optionLabel = optionLabel  
  paramSet.tableData[paramsIndex.value].optionValue = optionValue  
  cancelFun()  
}  
&lt;/script&gt;  
  
&lt;style lang=&quot;scss&quot; scoped&gt;  
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
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),s=[a];function d(r,u){return l(),n("div",null,s)}const m=e(i,[["render",d],["__file","el-table 单元格展示form，并校验.html.vue"]]),c=JSON.parse(`{"path":"/%E5%B7%A5%E4%BD%9C%E9%9A%8F%E7%AC%94/el-table%20%E5%8D%95%E5%85%83%E6%A0%BC%E5%B1%95%E7%A4%BAform%EF%BC%8C%E5%B9%B6%E6%A0%A1%E9%AA%8C.html","title":"","lang":"zh-CN","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%B7%A5%E4%BD%9C%E9%9A%8F%E7%AC%94/el-table%20%E5%8D%95%E5%85%83%E6%A0%BC%E5%B1%95%E7%A4%BAform%EF%BC%8C%E5%B9%B6%E6%A0%A1%E9%AA%8C.html"}],["meta",{"property":"og:site_name","content":"ErWin的博客"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T07:11:45.000Z"}],["meta",{"property":"article:author","content":"Mr.ErWin"}],["meta",{"property":"article:modified_time","content":"2024-04-10T07:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T07:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.ErWin\\",\\"url\\":\\"https://gitee.com/destiny12327\\"}]}"]]},"headers":[],"git":{"createdTime":1712733105000,"updatedTime":1712733105000,"contributors":[{"name":"ma","email":"destiny0402@163.com","commits":1}]},"readingTime":{"minutes":7.05,"words":2116},"filePathRelative":"工作随笔/el-table 单元格展示form，并校验.md","localizedDate":"2024年4月10日","excerpt":"<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>&lt;template&gt;  \\n  &lt;el-dialog      v-model=\\"showCreateDialog\\"  \\n      :close-on-click-modal=\\"false\\"  \\n      :title=\\"title\\"  \\n      class=\\"algorithmCreate\\"  \\n      style=\\"overflow: hidden;height: 79%\\"  \\n  &gt;  \\n    &lt;div style=\\"overflow-y: auto; height: 60vh\\"&gt;  \\n      &lt;el-row class=\\"header\\"&gt;  \\n        &lt;el-col class=\\"verCenter\\"&gt;  \\n          &lt;div class=\\"label\\"&gt;算法名称&lt;/div&gt;  \\n          &lt;el-input v-model=\\"name\\" class=\\"input\\"/&gt;  \\n        &lt;/el-col&gt;        &lt;el-col class=\\"upload\\"&gt;  \\n          &lt;el-upload              v-show=\\"flageer\\"  \\n              v-model:file-list=\\"fileList\\"  \\n              :auto-upload=\\"false\\"  \\n              :on-change=\\"handleChange\\"  \\n              action=\\"\\"  \\n              class=\\"upload-demo\\"  \\n          &gt;  \\n            &lt;el-button bg text type=\\"primary\\"&gt;上传算法包&lt;/el-button&gt;  \\n            &lt;template #tip&gt;  \\n              &lt;div class=\\"el-upload__tip\\"&gt;&lt;/div&gt;  \\n            &lt;/template&gt;          &lt;/el-upload&gt;          &lt;div class=\\"command\\"&gt;  \\n            &lt;span style=\\"width: 6em;text-align: center;line-height: 32px\\"&gt;运行命令：&lt;/span&gt;  \\n            &lt;el-input v-model=\\"commandValue\\"&gt;&lt;/el-input&gt;  \\n          &lt;/div&gt;        &lt;/el-col&gt;      &lt;/el-row&gt;      &lt;div class=\\"config-box\\"&gt;  \\n        &lt;div&gt;变量设置&lt;/div&gt;  \\n        &lt;el-table :data=\\"variableData\\" :show-header=\\"false\\" border class=\\"variable-set\\" fit style=\\"width: 100%\\"&gt;  \\n          &lt;el-table-column label=\\"名称\\" prop=\\"name\\"&gt;&lt;/el-table-column&gt;  \\n          &lt;el-table-column label=\\"方式（单选，多选）\\" prop=\\"mode\\"&gt;  \\n            &lt;template #default=\\"scope\\"&gt;  \\n              &lt;el-select v-model=\\"variableData[scope.$index].mode\\"&gt;  \\n                &lt;el-option                    v-for=\\"value in modeOption\\"  \\n                    :label=\\"value.label\\"  \\n                    :value=\\"value.value\\"&gt;  \\n                &lt;/el-option&gt;              &lt;/el-select&gt;            &lt;/template&gt;          &lt;/el-table-column&gt;          &lt;el-table-column label=\\"类型\\" prop=\\"type\\"&gt;  \\n            &lt;template #default=\\"scope\\"&gt;  \\n              &lt;el-select v-model=\\"variableData[scope.$index].type\\" :multiple=\\"true\\"&gt;  \\n                &lt;el-option                    v-for=\\"value in typeOption\\"  \\n                    :label=\\"value.label\\"  \\n                    :value=\\"value.value\\"  \\n                &gt;&lt;/el-option&gt;  \\n              &lt;/el-select&gt;            &lt;/template&gt;          &lt;/el-table-column&gt;        &lt;/el-table&gt;        &lt;div class=\\"params-set\\"&gt;  \\n          &lt;div class=\\"params-set-title\\"&gt;参数设置  \\n            &lt;el-button :icon=\\"Plus\\" type=\\"primary\\" @click=\\"addLine\\"&gt;  \\n            &lt;/el-button&gt;          &lt;/div&gt;          &lt;el-form ref=\\"variableForm\\" :model=\\"paramSet\\" :show-message=\\"false\\" size=\\"default\\"&gt;  \\n            &lt;el-table :data=\\"paramSet.tableData\\" border fit style=\\"width: 100%\\"&gt;  \\n              &lt;el-table-column label=\\"参数名\\" prop=\\"paramName\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.paramName'\\" :rules=\\"rules.paramName\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.paramName\\"&gt;  \\n                    &lt;/el-input&gt;                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"参数编码\\" prop=\\"paramCode\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.paramCode'\\" :rules=\\"rules.paramCode\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.paramCode\\"&gt;&lt;/el-input&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"参数类型\\" prop=\\"disType\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.disType'\\"&gt;  \\n                    &lt;el-select v-model=\\"scope.row.disType\\"&gt;  \\n                      &lt;el-option                          v-for=\\"data in disType\\"  \\n                          :label=\\"data.label\\"  \\n                          :value=\\"data.value\\"  \\n                      &gt;&lt;/el-option&gt;  \\n                    &lt;/el-select&gt;                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"下拉参数设置\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item&gt;                    &lt;el-button :disabled=\\"scope.row.disType === 'text'\\" @click=\\"selectParamsEdit(scope)\\"&gt;编辑  \\n                    &lt;/el-button&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"默认值\\" prop=\\"defaultValue\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.defaultValue'\\" :rules=\\"rules.defaultValue\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.defaultValue\\"&gt;&lt;/el-input&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"参数说明\\" prop=\\"paramDescription\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.paramDescription'\\"  \\n                                :rules=\\"rules.paramDescription\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.paramDescription\\"&gt;&lt;/el-input&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"校验规则\\" prop=\\"prmFormat\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.prmFormat'\\" :rules=\\"rules.prmFormat\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.prmFormat\\"&gt;&lt;/el-input&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"校验错误提示\\" prop=\\"prmFormatPrompt\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item :prop=\\"'tableData.' + scope.$index + '.prmFormatPrompt'\\"  \\n                                :rules=\\"rules.prmFormatPrompt\\"&gt;  \\n                    &lt;el-input v-model=\\"scope.row.prmFormatPrompt\\"&gt;&lt;/el-input&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;              &lt;el-table-column label=\\"操作\\" width=\\"65\\"&gt;  \\n                &lt;template #default=\\"scope\\"&gt;  \\n                  &lt;el-form-item&gt;                    &lt;el-button :icon=\\"DeleteFilled\\" type=\\"warning\\" @click=\\"deleteParamsSet(scope)\\"&gt;&lt;/el-button&gt;  \\n                  &lt;/el-form-item&gt;                &lt;/template&gt;              &lt;/el-table-column&gt;            &lt;/el-table&gt;          &lt;/el-form&gt;        &lt;/div&gt;      &lt;/div&gt;      &lt;el-row class=\\"main\\"&gt;  \\n        &lt;el-col&gt;          &lt;div class=\\"title\\"&gt;一、算法介绍&lt;/div&gt;  \\n          &lt;el-input              v-model=\\"introduce1\\"  \\n              :rows=\\"3\\"  \\n              placeholder=\\"请输入内容\\"  \\n              type=\\"textarea\\"  \\n          /&gt;  \\n        &lt;/el-col&gt;        &lt;el-col&gt;          &lt;div class=\\"title\\"&gt;二、适用场景&lt;/div&gt;  \\n          &lt;el-input              v-model=\\"introduce2\\"  \\n              :rows=\\"3\\"  \\n              placeholder=\\"请输入内容\\"  \\n              type=\\"textarea\\"  \\n          /&gt;  \\n        &lt;/el-col&gt;        &lt;el-col&gt;          &lt;div class=\\"title\\"&gt;三、数据源字段及参数说明&lt;/div&gt;  \\n          &lt;el-input              v-model=\\"introduce3\\"  \\n              :rows=\\"3\\"  \\n              placeholder=\\"请输入内容\\"  \\n              type=\\"textarea\\"  \\n          /&gt;  \\n        &lt;/el-col&gt;      &lt;/el-row&gt;    &lt;/div&gt;    &lt;template #footer&gt;  \\n        &lt;span class=\\"dialog-footer\\"&gt;  \\n          &lt;el-button @click=\\"showCreateDialog = false\\"&gt;关闭&lt;/el-button&gt;  \\n          &lt;el-button v-show=\\"flageer\\" type=\\"primary\\" @click=\\"saveFile\\"  \\n          &gt;保存&lt;/el-button&gt;  \\n          &lt;el-button v-show=\\"!flageer\\" type=\\"primary\\" @click=\\"determine\\"  \\n          &gt;确定&lt;/el-button&gt;  \\n        &lt;/span&gt;    &lt;/template&gt;  &lt;/el-dialog&gt;  &lt;el-dialog v-model=\\"paramsEditShow\\" :close-on-click-modal=\\"false\\" title=\\"下拉参数设置\\" top=\\"25vh\\" width=\\"750px\\"&gt;  \\n    &lt;div style=\\"text-align: right\\"&gt;  \\n      &lt;el-button @click=\\"addOption\\"&gt;添加&lt;/el-button&gt;  \\n    &lt;/div&gt;    &lt;el-form :inline=\\"true\\" :model=\\"optionList\\"&gt;  \\n      &lt;el-form-item v-for=\\"(data,index) in optionList.list\\"&gt;  \\n        &lt;el-form-item label=\\"显示名称\\"&gt;  \\n          &lt;el-input v-model=\\"data.label\\"&gt;&lt;/el-input&gt;  \\n        &lt;/el-form-item&gt;        &lt;el-form-item label=\\"参数名称\\"&gt;  \\n          &lt;el-input v-model=\\"data.value\\"&gt;&lt;/el-input&gt;  \\n        &lt;/el-form-item&gt;        &lt;el-form-item&gt;          &lt;el-button type=\\"warning\\" @click=\\"deleteOption(data,index)\\"&gt;删除&lt;/el-button&gt;  \\n        &lt;/el-form-item&gt;      &lt;/el-form-item&gt;    &lt;/el-form&gt;    &lt;template #footer&gt;  \\n      &lt;span class=\\"dialog-footer\\"&gt;  \\n        &lt;el-button @click=\\"cancelFun\\"&gt;取消&lt;/el-button&gt;  \\n        &lt;el-button type=\\"primary\\" @click=\\"saveDialog\\"&gt;  \\n          保存  \\n        &lt;/el-button&gt;  \\n      &lt;/span&gt;    &lt;/template&gt;  &lt;/el-dialog&gt;&lt;/template&gt;  \\n  \\n&lt;script setup&gt;  \\n//#region  \\nimport {inject, onUpdated, reactive, ref, toRefs, unref, watch} from \\"vue\\";  \\nimport {customFild, customUpdate, getDefinedAlgorithmParam} from \\"@/services/algorithm\\";  \\nimport {ElMessage} from \\"element-plus\\";  \\nimport {DeleteFilled, Plus} from '@element-plus/icons-vue'  \\n  \\nconst {showCreateDialog, rower, title, flagAge} = inject(\\"showCreateDialog\\");  \\nconst customList = inject(\\"customList\\", () =&gt; {  \\n}); //接父组件的方法  \\nconst flageer = ref(true); //状态  \\nconst fileList = ref([]); //绑定上传的文件  \\nconst commandValue = ref('')//运行命令input  \\n//v-model绑定的值  \\nconst fileData = ref([]); //上传对象  \\nconst data = reactive({  \\n  alsID: \\"\\",  \\n  name: \\"\\",  \\n  introduce1: \\"\\",  \\n  introduce2: \\"\\",  \\n  introduce3: \\"\\",  \\n});  \\nconst {name, introduce1, introduce2, introduce3, alsID} = toRefs(data);  \\n//点击上传文件  \\nconst handleChange = (file, fileLists) =&gt; {  \\n  fileList.value = {};  \\n  //如果第二次上传文件，将前一个文件删除  \\n  //这样fileList就一直保持一个文件  \\n  if (fileLists.length &gt; 1) {  \\n    fileLists.shift(); //往前添加  \\n  }  \\n  fileList.value = fileLists;  \\n  fileData.value = fileLists[0].raw;  \\n  // 方案2  \\n  // fileList.value = [file];};  \\n  \\n//保存  \\nconst saveFile = async () =&gt; {  \\n  const myForm = unref(variableForm)  \\n  let flag = false  \\n  await myForm.validate((valid, fields) =&gt; {  \\n    if (valid) {  \\n      console.log('submit!')  \\n    } else {  \\n      flag = true  \\n      for (const fieldKey in fields) {  \\n        ElMessage.error(fields[fieldKey][0].message)  \\n      }  \\n    }  \\n  })  \\n  if (flag) return  \\n  if (data.name == \\"\\" || fileData.value.length == 0) {  \\n    ElMessage.error(\\"请添加算法名称及上传文件\\");  \\n    return;  }  \\n  if (!commandValue.value) {  \\n    ElMessage.error('请输入运行命令')  \\n    return  \\n  }  \\n  const variableSet = {}  \\n  let errFlag = true  \\n  variableData.forEach((data, index) =&gt; {  \\n    if (index === 0) {  \\n      if (data.mode !== '' &amp;&amp; data.type.length === 0) {  \\n        ElMessage.error('请至少选择一个目标变量')  \\n        return errFlag = false  \\n      }  \\n      variableSet.destVar = [data.mode, [...data.type]]  \\n    } else if (index === 1) {  \\n      if (data.mode !== '' &amp;&amp; data.type.length === 0) {  \\n        ElMessage.error('请至少选择一个自变量')  \\n        return errFlag = false  \\n      }  \\n      variableSet.varList = [data.mode, [...data.type]]  \\n    }  \\n  })  \\n  if (!errFlag) return  \\n  const obj = {  \\n    alsName: name.value,  \\n    alsIntro: introduce1.value,  \\n    alsScene: introduce2.value,  \\n    alsParam: introduce3.value,  \\n    runCommand: commandValue.value  \\n  };  \\n  \\n  const paramInfo = paramSet.tableData  \\n  obj.variableSet = variableSet  \\n  obj.paramInfo = paramInfo  \\n  const formData = reactive(new FormData()); //这样是vue3创建对象  \\n  formData.append(\\"file\\", fileData.value);  \\n  formData.append(\\"jsonObj\\", JSON.stringify(obj));  \\n  const respData = await customFild(formData);  \\n  showCreateDialog.value = false; //关闭弹窗  \\n  customList();  \\n  if (respData?.respCode == 200) {  \\n    ElMessage({  \\n      message: \\"已保存\\",  \\n      type: \\"success\\",  \\n    });  \\n  } else {  \\n    ElMessage.error(\\"未保存\\");  \\n  }  \\n};  \\n//确定  \\nconst determine = async () =&gt; {  \\n  const myForm = unref(variableForm)  \\n  let flag = false  \\n  await myForm.validate((valid, fields) =&gt; {  \\n    if (valid) {  \\n      console.log('submit!')  \\n    } else {  \\n      flag = true  \\n      console.log('error submit!', fields)  \\n    }  \\n  })  \\n  if (!commandValue.value) {  \\n    ElMessage.error('请输入运行命令')  \\n    return  \\n  }  \\n  const variableSet = {}  \\n  let errFlag = true  \\n  variableData.forEach((data, index) =&gt; {  \\n    if (index === 0) {  \\n      if (data.mode !== '' &amp;&amp; data.type.length === 0) {  \\n        ElMessage.error('请至少选择一个目标变量')  \\n        return errFlag = false  \\n      }  \\n      variableSet.destVar = [data.mode, [...data.type]]  \\n    } else if (index === 1) {  \\n      if (data.mode !== '' &amp;&amp; data.type.length === 0) {  \\n        ElMessage.error('请至少选择一个自变量')  \\n        return errFlag = false  \\n      }  \\n      variableSet.varList = [data.mode, [...data.type]]  \\n    }  \\n  })  \\n  \\n  const obj = {  \\n    alsID: alsID.value,  \\n    alsName: name.value,  \\n    alsIntro: introduce1.value,  \\n    alsScene: introduce2.value,  \\n    alsParam: introduce3.value,  \\n    runCommand: commandValue.value  \\n  };  \\n  const paramInfo = paramSet.tableData  \\n  obj.variableSet = variableSet  \\n  obj.paramInfo = paramInfo  \\n  const respData = await customUpdate(obj);  \\n  customList();  \\n  if (respData?.respCode == 200) {  \\n    ElMessage({  \\n      message: \\"修改算法信息成功\\",  \\n      type: \\"success\\",  \\n    });  \\n  } else {  \\n    ElMessage.error(\\"修改算法信息失败\\");  \\n  }  \\n  showCreateDialog.value = false;  \\n};  \\n//放在一个watch中监听 效果实现不对  \\nwatch(  \\n    //监听数据回显  \\n    () =&gt; rower.value,  \\n    (newValue, oldValue) =&gt; {  \\n      alsID.value = newValue.alsID;  \\n      name.value = newValue.alsName;  \\n      introduce1.value = newValue.alsIntro;  \\n      introduce2.value = newValue.alsScene;  \\n      introduce3.value = newValue.alsParam;  \\n      commandValue.value = newValue.runCommand  \\n      if (!flageer.value) {  \\n        getSetConfig()  \\n      }  \\n    },  \\n    {deep: true},  \\n    {immediate: true}  \\n);  \\nwatch(() =&gt; showCreateDialog.value,  \\n    (newValue, oldValue) =&gt; {  \\n      if (newValue) {  \\n        variableData.splice(0, 2, {name: '目标变量', mode: '', type: []},  \\n            {name: '自变量', mode: '', type: []})  \\n        paramSet.tableData = []  \\n      }  \\n    })  \\nwatch(  \\n    //标题和按钮显示状态  \\n    () =&gt; title.value,  \\n    (newValue, oldValue) =&gt; {  \\n      title.value = newValue;  \\n    },  \\n    {deep: true, immediate: true});  \\nwatch(  \\n    // 按钮显示状态  \\n    () =&gt; flagAge.value,  \\n    (newValue, oldValue) =&gt; {  \\n      flageer.value = newValue;  \\n    },  \\n    {deep: true, immediate: true}  \\n);  \\n  \\n//#endregion  \\n  \\nconst variableForm = ref(null)  \\n  \\nasync function getSetConfig() {  \\n  try {  \\n    const res = await getDefinedAlgorithmParam({alsID: alsID.value})  \\n    paramSet.tableData = res.respData.paramInfo  \\n    optionList.list = res.respData.paramInfo.disTypeOption  \\n    const tempVariable = JSON.parse(res.respData.variableSet)  \\n    for (const tempVariableKey in tempVariable) {  \\n      if (tempVariableKey === 'destVar') {  \\n        variableData[0].mode = tempVariable[tempVariableKey][0]  \\n        variableData[0].type = tempVariable[tempVariableKey][1]  \\n      } else if (tempVariableKey === 'varList') {  \\n        variableData[1].mode = tempVariable[tempVariableKey][0]  \\n        variableData[1].type = tempVariable[tempVariableKey][1]  \\n      }  \\n    }  \\n  } catch (e) {  \\n    console.log(e)  \\n  }  \\n}  \\n  \\nonUpdated(() =&gt; {  \\n  \\n})  \\n  \\n//变量设置中mode和type，select的option  \\nconst modeOption = [  \\n  {label: '无', value: ''},  \\n  {label: '单选', value: '1'},  \\n  {label: '多选', value: '2'},  \\n]  \\nconst typeOption = [  \\n  {label: '文本', value: '1'},  \\n  {label: '数值', value: '2'},  \\n  {label: '日期', value: '3'},  \\n  {label: '枚举', value: '4'},  \\n]  \\n//变量设置vmodel  \\nconst variableData = reactive([  \\n  {name: '目标变量', mode: '', type: []},  \\n  {name: '自变量', mode: '', type: []}  \\n])  \\n  \\n//参数设置相关  \\nconst disType = [  \\n  {label: '文本', value: 'text'},  \\n  {label: '下拉框', value: 'combobox'}  \\n]  \\nconst rules = {  \\n  paramName: {required: true, message: '请输入参数名'},  \\n  paramCode: {required: true, message: '请输入参数编码'},  \\n  /*  defaultValue: {required: true, message: '请输入默认值', trigger: 'blur'},  \\n    paramDescription: {required: true, message: '请输入参数说明', trigger: 'blur'},  \\n    prmFormat: {required: true, message: '请输入校验规则', trigger: 'blur'},  \\n    prmFormatPrompt: {required: true, message: '请输入规则错误说明', trigger: 'blur'}*/  \\n}  \\nconst paramSet = reactive({tableData: []})  \\n  \\n//添加一条参数设置  \\nfunction addLine() {  \\n  paramSet.tableData.push({  \\n    paramName: '',  \\n    paramCode: '',  \\n    disType: 'text',  \\n    disTypeOption: [],  \\n    defaultValue: '',  \\n    paramDescription: '',  \\n    prmFormat: '',  \\n    prmFormatPrompt: ''  \\n  })  \\n}  \\n  \\n//删除一条参数设置记录  \\nfunction deleteParamsSet(scope) {  \\n  const index = scope.$index  \\n  paramSet.tableData.splice(index, 1)  \\n}  \\n  \\n//dialog控制显示变量  \\nconst paramsEditShow = ref(false)  \\nconst paramsIndex = ref(0)  \\n  \\n//点击编辑按钮，将index的值更新  \\nfunction selectParamsEdit(scope) {  \\n  paramsEditShow.value = true  \\n  paramsIndex.value = scope.$index  \\n  optionList.list = paramSet.tableData[scope.$index].disTypeOption  \\n  if (optionList.list.length === 0) {  \\n    optionList.list.push({label: '', value: ''})  \\n  }  \\n}  \\n  \\nconst optionList = reactive({  \\n  list: [  \\n    {label: '', value: ''}  \\n  ]  \\n})  \\n  \\n//添加下拉选项  \\nfunction addOption() {  \\n  optionList.list.push({label: '', value: ''})  \\n}  \\n  \\n//删除选项  \\nfunction deleteOption(data, index) {  \\n  optionList.list.splice(index, 1)  \\n}  \\n  \\n//dialog取消按钮方法  \\nfunction cancelFun() {  \\n  paramsEditShow.value = false  \\n  optionList.list = [{label: '', value: ''}]  \\n}  \\n  \\n//dialog确定按钮方法  \\nfunction saveDialog() {  \\n  let errFlag = false  \\n  optionList.list.forEach(e =&gt; {  \\n    if (e.label === '' || e.value === '') {  \\n      errFlag = true  \\n    }  \\n  })  \\n  if (errFlag) {  \\n    return ElMessage.error('请完整填写内容')  \\n  }  \\n  paramSet.tableData[paramsIndex.value].disTypeOption = optionList.list  \\n  const optionLabel = optionList.list.map(i =&gt; i.label).join('|')  \\n  const optionValue = optionList.list.map(i =&gt; i.value).join('|')  \\n  paramSet.tableData[paramsIndex.value].optionLabel = optionLabel  \\n  paramSet.tableData[paramsIndex.value].optionValue = optionValue  \\n  cancelFun()  \\n}  \\n&lt;/script&gt;  \\n  \\n&lt;style lang=\\"scss\\" scoped&gt;  \\n.algorithmCreate {  \\n  .dialog-container {  \\n    height: 90vh;  \\n  }  \\n  \\n  .header {  \\n    padding: 0 15px;  \\n    height: 105px;  \\n  \\n    .label {  \\n      // width: 150px;  \\n      text-align: right;  \\n      padding-right: 10px;  \\n    }  \\n  \\n    .input {  \\n      width: 200px;  \\n    }  \\n  \\n    .verCenter {  \\n      display: flex;  \\n      align-items: center;  \\n      justify-content: flex-start;  \\n    }  \\n  \\n    .upload {  \\n      display: flex;  \\n      align-items: center;  \\n      justify-content: space-between;  \\n  \\n      .command {  \\n        width: 710px;  \\n        display: flex;  \\n      }  \\n    }  \\n  }  \\n  \\n  .main {  \\n    padding: 0 15px;  \\n    height: 340px;  \\n    overflow: auto;  \\n  \\n    .title {  \\n      padding: 10px 0;  \\n    }  \\n  }  \\n  \\n  .el-upload {  \\n    display: flex;  \\n    align-items: center;  \\n    justify-content: flex-start;  \\n  }  \\n  \\n  .upload-demo {  \\n    display: flex;  \\n  }  \\n  \\n  .el-upload-list--text {  \\n    width: auto;  \\n  }  \\n  \\n  .params-set {  \\n    margin-top: 15px;  \\n  \\n    .params-set-title {  \\n      display: flex;  \\n      justify-content: space-between;  \\n    }  \\n  }  \\n  \\n  .config-box {  \\n    padding: 0 15px;  \\n  \\n    .variable-set {  \\n      :deep(.el-select) {  \\n        width: 100%;  \\n      }  \\n  \\n      :deep(.el-input__wrapper) {  \\n        box-shadow: none;  \\n      }  \\n    }  \\n  }  \\n  \\n  \\n}  \\n  \\n.dialog-footer button:first-child {  \\n  margin-right: 10px;  \\n}  \\n  \\n:deep(.el-upload-list__item-file-name) {  \\n  overflow: visible;  \\n}  \\n  \\n:deep(.el-upload-list__item-name) {  \\n  padding: 0 26px;  \\n}  \\n&lt;/style&gt;\\n</code></pre></div>"}`);export{m as comp,c as data};
