<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="searchWord" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <div style="
      margin-left: auto;
      display: flex;
      align-items: center;
      margin-right:2%;
    ">
        <el-avatar :size="35" :src="circleUrl"></el-avatar>
        <div style="
          margin-left: 10px;
          color: #ffffff;
      ">
          <p style="margin: 0;">school@school.com</p>
          <p style="margin: 0;font-size:14px;">管理员</p>
        </div>
        <div style="margin-left:10px;color:#ffffff">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-more" style="color:#ffffff;transform: rotate(90deg);"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="q">退出登录</el-dropdown-item>
              <el-dropdown-item command="m">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
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
          <div style="position:relative;width:90%;font-size:14px;"><p>{{ item.stuCollege }}{{item.name}}的{{item.taskName}}审核存在问题，点击审核查看详细信息。</p></div>
          <div style="position:relative;width:10%;">
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
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      searchWord: "",
      examineList:[],
    };
  },
  mounted(){
    // this.getExamineList();
    this.examineList = [
        {
          "id": 1,
          "name":"高致德",
          "studentId": 1,
          "taskId": 1,
          "stuCollege": "土木工程学院",
          "status": 100,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-15 11:57:00",
          "taskName":"新生报到①",
        },
        {
          "id": 4,
          "studentId": 2,
          "name":"颜茗希",
          "taskId": 1,
          "stuCollege": "计算机与人工智能学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-11 11:57:51",
          "taskName":"新生报到①",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"尹梓涵",
          "taskId": 3,
          "stuCollege": "生命科学与工程学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"新生报到②",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"傅天宇",
          "taskId": 3,
          "stuCollege": "生命科学与工程学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"校史学习②",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"裴子轩",
          "taskId": 3,
          "stuCollege": "化学学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"校史学习②",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"贾天宇",
          "taskId": 3,
          "stuCollege": "化学学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"校史学习②",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"元韵真",
          "taskId": 3,
          "stuCollege": "计算机与人工智能学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"校史学习①",
        },
        {
          "id": 3,
          "studentId": 1,
          "name":"刁蕊启",
          "taskId": 3,
          "stuCollege": "计算机与人工智能学院",
          "status": 0,
          "completeTime": null,
          "examine": 1,
          "createTime": null,
          "updateTime": "2024-03-09 11:59:00",
          "taskName":"新生报到②",
        },
      ];
  },
  methods: {
    taskExamine(item) {
      this.$store.commit("setExamineTaskID", item.taskId);
      this.$store.commit("setExamineStuID", item.studentId);
      this.$nextTick(() => {
        this.$router.push("/mainMenu/task/taskInspect");
      });
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
    handleCommand(command) {
      if (command == 'q') {
        this.quit();
      }
      else if (command == 'm') {
        this.$router.push("/mainMenu/config/safety");
      }
    },
    quit() {
      axios
        .post(`${this.$store.getters.getIp}/administrators/logout`)
        .then((response) => {
          if (response.data.code) {
            this.$message.success('退出成功');
            this.$router.push('/login');
          }
          else {
            this.$message.error(response.data.msg);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  }
};
</script>