<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="searchWord" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <router-link to="/mainMenu/help/helpFile"
        style="color: inherit; text-decoration: none; margin-right: 20px; margin-left: auto; color: #ffffff;">
        <span style="transition: color 0.3s;" class="hover-color">需要帮助吗？<span style="color: #209e91;">点击这里</span></span>
      </router-link>
      <i class="el-icon-s-home" style="color: #ffff;margin-right:10px; font-size: 24px;"></i>
    </div>
    <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
      <h2 style="
        color: #747474;
        display: inline-block;
        left: 2%;
        position:relative;
        width:98%;
      ">
        手动任务审核
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">手动任务审核</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div style="
        position: relative;
        height: 80%;
        width: 96%;
        left: 2%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        color:#747474;
      ">
      <div style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 2%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
        ">
        <div style="
            width: 98%;
            left:2%;
            top:10%;
            height: 30%;
            position: relative;
          ">
          <p>2024-09-10 14:55:16</p>
        </div>
        <div style="
            width: 98%;
            left:2%;
            height: 50%;
            position: relative;
            display: flex;
            align-items: center;
          ">
          <p style="margin-right: 50%;position:relative;">
            用户张三的报到倒计时任务审核存在问题，点击审核查看详细信息。
          </p>
          <el-button type="primary" style="background-color: #dfb81c; border: #f7b07e;" size="small"
            @click="taskExamine">审核</el-button>
        </div>
      </div>

      <div style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
          top:4%;
        ">
        <div style="
        width: 98%;
        left:2%;
            top:8%;
            height: 22%;
            position: relative;
          ">
          <p>2024-09-10 14:55:16</p>
        </div>
        <div style="
        width: 98%;
        left:2%;
            height: 40%;
            position: relative;
            display: flex;
            align-items: center;
          ">
          <p style="margin-right: 50%;position:relative;">
            用户张三的报到倒计时任务审核存在问题，点击审核查看详细信息。
          </p>
          <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="small"
            @click="taskExamine">审核</el-button>
        </div>
      </div>
      <div style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 6%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
        "></div>
      <div style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 8%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
        "></div>

      <div style="
          width: 100%;
          height: 15%;
          position: relative;
          background-color: #ffffff;
          top: 10%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
        "></div>
    </div>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474
}

#active-link /deep/ .el-breadcrumb__inner:hover {
  font-weight: 600 !important;
  color: #209e91;
}

#active-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #209e91;
}

#current-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #747474;
}

#pre-link /deep/ .el-breadcrumb__inner:hover {
  font-weight: 600 !important;
  color: #209e91;
}

#pre-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #209e91;
}
</style>

<script>
export default {
  data() {
    return {
      searchWord: "",
    };
  },
  methods: {
    taskExamine() {
      this.$router.push("/mainMenu/task/taskInspect");
    }
  }
};
</script>