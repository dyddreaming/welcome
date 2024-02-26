<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 98%;
        width: 98%;
        left: 1%;
        top: 1%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      "
    >
      <!-- 标题部分 -->
      <div style="height: 5%">
        <p style="position: relative; left: 1%; font-size: 16px">
          您有8条任务待手动审核哦~
        </p>
      </div>
      <div
        style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <div
          style="
            width: 100%;
            top:10%;
            height: 30%;
            position: relative;
          "
        >
          <p>2024-09-10 14:55:16</p>
        </div>
        <div
          style="
            width: 100%;
            height: 50%;
            position: relative;
            display: flex;
            align-items: center;
          "
        >
          <p style="margin-right: 50%;position:relative;">
            用户张三的报到倒计时任务审核存在问题，点击审核查看详细信息。
          </p>
          <el-button
            type="success"
            size="mini"
            style="background-color: #f89300; border: none;width:5%;position:relative;"
            @click="taskExamine"
            >审核</el-button
          >
        </div>
      </div>

      <div
        style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 10%;
        "
      >
      <div
          style="
            width: 100%;
            top:10%;
            height: 30%;
            position: relative;
          "
        >
          <p>2024-09-10 14:55:16</p>
        </div>
        <div
          style="
            width: 100%;
            height: 40%;
            position: relative;
            display: flex;
            align-items: center;
          "
        >
          <p style="margin-right: 50%;position:relative;">
            用户张三的报到倒计时任务审核存在问题，点击审核查看详细信息。
          </p>
          <el-button
            type="success"
            size="mini"
            style="background-color: #f89300; border: none;width:5%;position:relative;"
            @click="taskExamine"
            >审核</el-button
          >
        </div>
    </div>
      <div
        style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 15%;
        "
      ></div>
      <div
        style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 20%;
        "
      ></div>
    </div>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
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