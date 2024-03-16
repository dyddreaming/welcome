<template>
    <div class="app-main" style="position: relative;background-color:#ffffff;height:65%;width:100%;border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
      <span style="position:relative;margin-right:20px;font-size:20px;">手动任务审核提醒：</span>
      <el-switch
          v-model="taskValue"
          active-color="#209e91"
          inactive-color="#cccccc"
        ></el-switch>
    </div>
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
    <span style="position:relative;margin-right:20px;font-size:20px;">商家广告信息提醒：</span>
    <el-switch
        v-model="advertiseValue"
        active-color="#209e91"
        inactive-color="#cccccc"
      ></el-switch></div>
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
    <span style="position:relative;margin-right:20px;font-size:20px;">学生留言信息提醒：</span>
    <el-switch
        v-model="messageValue"
        active-color="#209e91"
        inactive-color="#cccccc"
      ></el-switch></div>
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-end;
    align-items: center;">
    <el-button
    type="primary"
    style="background-color: #dfb81c; border: #dfb81c"
    size="small"
    >保存更改 </el-button
  ></div>
    </div>
  </template>
  
  <style>
  </style>
  
  <script>
  export default {
    data(){
      return{
        taskValue:"",
        advertiseValue:"",
        messageValue:""
      };
    }
  };
  </script>