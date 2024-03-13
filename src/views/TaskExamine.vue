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
        overflow-y: auto; /* 添加滚动条 */
      ">
    <!-- 使用 v-for 循环渲染数据 -->
    <div v-for="(item, index) in examineList" :key="index" class="exam-item">
      <!-- 内容部分 -->
      <div class="exam-content">
        <div class="exam-date">{{ item.updateTime }}</div>
        <div class="exam-detail" style="position:relative;width:100%;">
          <div style="position:relative;width:85%;"><p>{{ item.stuCollege }}的报到倒计时任务审核存在问题，点击审核查看详细信息。</p></div>
          <div style="position:relative;width:15%;">
            <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
          @click="taskExamine(item)">审核</el-button>
          </div>
        </div>
      </div>
    </div>
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

/deep/ .exam-item {
  width: 100%;
  height: 15%;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 2%; /* 添加间距 */
}

/deep/ .exam-content {
  width: 98%;
  left: 2%;
  top: 10%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
}

/deep/ .exam-date {
  height: 30%;
}

/deep/ .exam-detail {
  height: 70%;
  display: flex;
  align-items: center;
}

/deep/ .exam-detail p {
  margin-right: 50%;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchWord: "",
      examineList:[],
    };
  },
  mounted(){
    // this.getExamineList();
    this.examineList = [
        {
          "id": 1,
          "studentId": 1,
          "taskId": 1,
          "stuCollege": "计算机学院",
          "status": 100,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-02-21 11:57:00"
        },
        {
          "id": 4,
          "studentId": 2,
          "taskId": 1,
          "stuCollege": "建筑学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-02-21 11:57:51"
        },
        {
          "id": 3,
          "studentId": 1,
          "taskId": 3,
          "stuCollege": "计算机学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-02-21 11:59:00"
        },
      ];
  },
  methods: {
    taskExamine() {
      this.$router.push("/mainMenu/task/taskInspect");
    },
    getExamineList(){
      axios
        .get(`${this.$store.getters.getIp}/tasks/students/examine/list`)
        .then((response) => {
          this.examineList = response.data.data;
          console.log(this.examineList);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
  }
};
</script>