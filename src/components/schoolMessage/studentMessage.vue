<template>
    <div class="app-main" style="position: relative">
        <!-- 标题部分 -->
        <div style="height: 10%;position:relative;width:100%;font-size:20px;display:flex;">
            <div style="position: relative; top: 35%; font-size: 18px; left: 2%">
                您有8条留言待读哦~
              </div>
              <div style="position: relative; top: 35%; left: 10%">
                <el-button type="danger" size="mini" style="border-radius: 10px;background-color:#fa5e00;"
                  >全部已读</el-button
                ></div>
      </div>
      <div style="height:85%;position:relative;width:100%;">
        <div style="position:relative;height:15%;width:100%;background-color:#ffffff">
            <div style="position:relative;height:50%;width:90%;left:2%;font-size:18px">
                2024-09-10 14:55:16
            </div>
            <div style="position:relative;height:50%;width:90%;left:2%;display:flex">
                <div style="position:relative;height:100%;width:50%;font-size:18px">
                    用户张三留言啦，点击查看了解详细信息。
                </div>
                <div style="position:relative;height:100%;width:50%;font-size:18px">
                    <el-button type="danger" size="mini" @click="see" style="background-color:#fa5e00;border-radius:10px;position:relative;height:85%;width:12%;"
                  >查看</el-button
                >
                </div>
            </div>
        </div>
        <div style="position:relative;height:15%;width:100%;background-color:#ffffff;top:5%;">
            <div style="position:relative;height:50%;width:90%;left:2%;font-size:18px">
                2024-09-10 14:55:16
            </div>
            <div style="position:relative;height:50%;width:90%;left:2%;display:flex">
                <div style="position:relative;height:100%;width:50%;font-size:18px">
                    用户张三留言啦，点击查看了解详细信息。
                </div>
                <div style="position:relative;height:100%;width:50%;font-size:18px">
                    <el-button type="danger" size="mini" @click="see" style="background-color:#fa5e00;border-radius:10px;position:relative;height:85%;width:12%;"
                  >查看</el-button
                >
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
    
    <style>
  </style>
    
    <script>
  export default {
    methods:{
      taskExamine(){
        this.$router.push("/taskInspect");
      }
    }
  };
  </script>