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
        任务提交信息
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/task/examine' }"
            style="font-size: 17px; color: #747474;font-weight:600;" id="pre-link">任务审核</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">任务提交信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div style="
        position: relative;
        height: 85%;
        width: 100%;
        top: 1%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      ">
      <div style="position: relative; height: 5%; left: 2%; width: 96%">
        <h3 style="margin-top: 0;color:#747474;">任务基本信息</h3>
      </div>
      <div style="
          position: relative;
          top: 2%;
          height: 25%;
          width: 96%;
          background-color: #ffffff;
          left: 2%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
          color:#747474;
        ">
        <p style="position: relative; left: 2%">任务名称：报到倒计时1:</p>
        <p style="position: relative; left: 2%">任务描述：准备通知书</p>
        <p style="position: relative; left: 2%">任务类型：主线</p>
        <p style="position: relative; left: 2%;color:#e85656;">
          审核问题：上传物品可能不是通知书
        </p>
      </div>
      <div style="position: relative; height: 5%; left: 2%; width: 96%; top: 5%">
        <h3 style="margin-top: 0;color:#747474;">用户提交信息</h3>
      </div>
      <div style="
          position: relative;
          top: 8%;
          height: 25%;
          width: 96%;
          background-color: #ffffff;
          left: 2%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius:8px;
        "></div>
      <div style="position: relative; height: 5%; left: 2%; width: 96%; top: 10%">
        <h3 style="margin-top: 0;color:#747474;">审核结果<lable style="color:#e85656;font-weight:600">*</lable></h3>
        <el-select v-model="resultValue" placeholder="请选择">
          <el-option v-for="item in resultOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="
          position: relative;
          height: 5%;
          left: 2%;
          width: 96%;
          top: 22%;
          display: flex;
          justify-content: flex-end;
        ">
        <el-button type="primary" style="background-color: #e85656; border: #e85656;" size="small"
          @click="submit">提交</el-button>
        <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
          @click="goBack">返回</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../public/static/css/aside.css";

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
      resultValue: "",
      searchWord: "",
      taskId:"",
      studentId:"",
      resultOptions: [
        {
          value: "审核通过",
          label: "审核通过",
        },
        {
          value: "审核不通过",
          label: "审核不通过",
        },
      ],
    };
  },
  created(){
    this.taskId = this.$store.getters.getExamineTaskID;
    this.studentId = this.$store.getters.getExamineStuID;
    // console.log("studentId",this.studentId);
    // console.log("taskId:",this.taskId);
  },
  methods: {
    submit() {
      if (this.resultValue === "审核不通过") {
        this.$prompt("请输入审核不通过原因", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        })
          .then(({ value }) => {
            //发送axios请求

            this.$message({
              type: "success",
              message: "审核成功！",
            });
            this.$router.push("/mainMenu/task/examine");
          })
          .catch(() => {
          });
      }
      else if (this.resultValue === "审核通过") {
        this.$confirm("确认提交审核结果吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            // 发起axios请求

            this.$message({
              type: "success",
              message: "审核成功！",
            });
            this.$router.push("/mainMenu/task/examine");
          })
          .catch(() => {
          });
      }
      else {
        this.$message.error('提交前请给出审核结果！');
      }
    },

    goBack() {
      this.$router.push("/mainMenu/task/examine");
    },
  },
};
</script>