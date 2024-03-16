<template>
    <div class="app-main" style="position: relative;background-color:#ffffff;height:100%;width:100%;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
    <span style="position:relative;margin-right:20px;font-size:20px;">备份策略：</span>
    <template style="font-size:18px !important">
      <el-radio v-model="type" label="1">完整备份</el-radio>
      <el-radio v-model="type" label="2">增量备份</el-radio>
      <el-radio v-model="type" label="3">差异备份</el-radio>
    </template></div>
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
    <span style="position:relative;margin-right:20px;font-size:20px;">备份周期：</span>
    <el-radio v-model="time" label="1" id="data">每日备份</el-radio>
    <el-radio v-model="time" label="2">每周备份</el-radio>
    <el-radio v-model="time" label="3">每月备份</el-radio>
    <el-radio v-model="time" label="4">每年备份</el-radio></div>
    <div style="position:relative;height:25%;width:96%;left:2%;display: flex;
    justify-content: flex-start;
    align-items: center;">
    <span style="position:relative;margin-right:20px;font-size:20px;">备份存储位置：</span>
    <el-input
    style="position:relative;width:50%;"
    v-model="position"
  ></el-input></div>
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
  
  <style scoped>

  </style>
  
  <script>
  export default {
    data(){
      return{
        position:"D:/data",
        type:"",
        time:"",
      };
    },
  };
  </script>