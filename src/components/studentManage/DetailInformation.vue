<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
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
        {{ rowData.name }}详细信息
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/manage' }"
            style="font-size: 17px; color: #747474;font-weight:600;" id="pre-link">学生信息管理</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">详细信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <hr style="
        width: 99%;
        border: 1px solid #ffffff;
        margin-top: 5px;
        position: relative;
      " />
    <!-- 中间数据表格 -->
    <div style="
        background-color: #ffffff;
        width: 96%;
        height: 68%;
        margin-top: 2%;
        left: 2%;
        border-radius:8px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        position: relative;
        color:#747474;
      ">
      <!-- 左侧信息 -->
      <div style="width: 50%; float: left; height: 100%">
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 2%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">姓名：{{ rowData.name }}</p>
        </div>

        <!-- 第一条横线 -->
        <div style="
            position: absolute;
            top: 11.1%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 5%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">类别：{{ rowData.category | formatCategory }}</p>
        </div>
        <!-- 第二条横线 -->
        <div style="
            position: absolute;
            top: 22.2%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 8%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">性别：{{ rowData.gender | formatGender }}</p>
        </div>
        <!-- 第三条横线 -->
        <div style="
            position: absolute;
            top: 33.3%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 11%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">民族：{{ rowData.nation }}</p>
        </div>
        <!-- 第四条横线 -->
        <div style="
            position: absolute;
            top: 44.4%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 14%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">所在地：{{ rowData.address }}</p>
        </div>
        <!-- 第五条横线 -->
        <div style="
            position: absolute;
            top: 55.5%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 17%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">专业学院：{{ rowData.college }}</p>
        </div>
        <!-- 第六条横线 -->
        <div style="
            position: absolute;
            top: 66.6%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 20%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">专业班级：{{ rowData.majorClass }}</p>
        </div>
        <!-- 第七条横线 -->
        <div style="
            position: absolute;
            top: 77.7%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 23%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">
            是否注册：{{ rowData.isRegistered | formatIsRegistered }}
          </p>
        </div>
        <!-- 第八条横线 -->
        <div style="
            position: absolute;
            top: 88.8%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e0e0e0;
          "></div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 26%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">注册时间：{{ rowData.registerTime }}</p>
        </div>
      </div>

      <!-- 竖线 -->
      <div style="
          width: 1.5px;
          background-color: #e0e0e0;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 0;
        "></div>

      <!-- 右侧信息 -->
      <div style="width: 50%; float: right; height: 100%">
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 2%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">学号：{{ rowData.id }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 5%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">身份证号：{{ rowData.idNumber }}</p>
        </div>

        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 8%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">出生日期：{{ rowData.birth }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 11%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">当前年级：{{ rowData.grade }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 14%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">联系电话：{{ rowData.phone }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 17%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">就读专业：{{ rowData.major }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 20%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">所在校区：{{ rowData.campus }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 23%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">用户名：{{ rowData.username }}</p>
        </div>
        <div style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 26%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <p style="margin: 0">完成进度：{{ rowData.completion }}</p>
        </div>
      </div>
    </div>
    <!--  下侧操作键 -->
    <div style="width: 96%;left:2%; margin-top: 1%;display: flex; justify-content: flex-end; align-items: center;position:relative;height:8%;">
      <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="small"
        @click="GoToEdit">修改</el-button>
        <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
        @click="GoToTable">返回</el-button>
    </div>
  </div>
</template>
<style scoped>
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
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search: "",
      rowData: {},
    };
  },
  created() {
    this.rowData = this.$store.getters.getRowData;
    console.log("接收到的学生数据:", this.rowData);
  },

  methods: {
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
    GoToTable() {
      if (this.$route.path !== "/mainMenu/student/manage") {
        this.$router.push("/mainMenu/student/manage");
      }
    },
    GoToEdit() {
      this.$router.push("/mainMenu/student/editInformation");
      console.log("前往编辑界面");
    },
  },
  filters: {
    formatCategory(value) {
      return value === 0 ? "本科生" : "研究生";
    },
    formatGender(value) {
      return value === 1 ? "男" : "女";
    },
    formatIsRegistered(value) {
      return value === 1 ? "是" : "否";
    },
  },
};
</script>