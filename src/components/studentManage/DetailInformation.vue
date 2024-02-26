<template>
  <div
    class="body"
    id="app"
    style="
      background-color: #ffda9f;
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;
    "
  >
    <!-- 上侧提示框 -->
    <div class="centered-button">
      <el-button
        type="danger"
        round
        style="
          background-color: #fa5e00;
          border-radius: 5px;
          width: 50%; /* 调整宽度 */
          height: 7%;
          font-size: 20px;
        "
        >{{ rowData.name }}详细信息表
      </el-button>
    </div>
    <!-- 中间数据表格 -->
    <div
      style="
        background-color: #ffffff;
        width: 70%;
        height: 75%;
        margin-top: 3%;
        left: 15%;
        position: relative;
      "
    >
      <!-- 左侧信息 -->
      <div style="width: 50%; float: left; height: 100%">
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 2%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">姓名：{{ rowData.name }}</p>
        </div>

        <!-- 第一条横线 -->
        <div
          style="
            position: absolute;
            top: 11.1%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 5%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">类别：{{ rowData.category | formatCategory }}</p>
        </div>
        <!-- 第二条横线 -->
        <div
          style="
            position: absolute;
            top: 22.2%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 8%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">性别：{{ rowData.gender | formatGender }}</p>
        </div>
        <!-- 第三条横线 -->
        <div
          style="
            position: absolute;
            top: 33.3%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 11%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">民族：{{ rowData.nation }}</p>
        </div>
        <!-- 第四条横线 -->
        <div
          style="
            position: absolute;
            top: 44.4%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 14%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">所在地：{{ rowData.address }}</p>
        </div>
        <!-- 第五条横线 -->
        <div
          style="
            position: absolute;
            top: 55.5%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 17%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">专业学院：{{ rowData.college }}</p>
        </div>
        <!-- 第六条横线 -->
        <div
          style="
            position: absolute;
            top: 66.6%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 20%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">专业班级：{{ rowData.majorClass }}</p>
        </div>
        <!-- 第七条横线 -->
        <div
          style="
            position: absolute;
            top: 77.7%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 23%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">
            是否注册：{{ rowData.isRegistered | formatIsRegistered }}
          </p>
        </div>
        <!-- 第八条横线 -->
        <div
          style="
            position: absolute;
            top: 88.8%;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #a6a6a6;
          "
        ></div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 26%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">注册时间：{{ rowData.registerTime }}</p>
        </div>
      </div>

      <!-- 竖线 -->
      <div
        style="
          width: 1.5px;
          background-color: #a6a6a6;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 0;
        "
      ></div>

      <!-- 右侧信息 -->
      <div style="width: 50%; float: right; height: 100%">
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 2%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">学号：{{ rowData.id }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 5%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">身份证号：{{ rowData.idNumber }}</p>
        </div>

        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 8%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">出生日期：{{ rowData.birth }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 11%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">当前年级：{{ rowData.grade }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 14%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">联系电话：{{ rowData.phone }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 17%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">就读专业：{{ rowData.major }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 20%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">所在校区：{{ rowData.campus }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 23%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">用户名：{{ rowData.username }}</p>
        </div>
        <div
          style="
            height: 8%;
            width: 80%;
            left: 10%;
            top: 26%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <p style="margin: 0">完成进度：{{ rowData.completion }}</p>
        </div>
      </div>
    </div>
    <!--  下侧操作键 -->
    <div style="width: 100%; display: flex; margin-top: 1%">
      <el-button
        type="danger"
        round
        style="
          background-color: #fa5e00;
          border-radius: 5px;
          width: 7%; /* 调整宽度 */
          height: 5%;
          font-size: 16px;
          margin-left: 80%;
          margin-right: 2%;
        "
        @click="GoToEdit"
        >修改
      </el-button>
      <el-button
        type="danger"
        round
        style="
          background-color: #fa5e00;
          border-radius: 5px;
          width: 7%; /* 调整宽度 */
          height: 5%;
          font-size: 16px;
        "
        @click="GoToTable"
        >返回
      </el-button>
    </div>
  </div>
</template>
<style>
.centered-button {
  display: flex;
  justify-content: center;
  margin-top: 2%; /* 上边距 */
}
</style>
<script>
export default {
  data() {
    return {
      rowData: {},
    };
  },
  created() {
    this.rowData = this.$store.getters.getRowData;
    console.log("接收到的学生数据:", this.rowData);
  },

  methods: {
    GoToTable() {
      if (this.$route.path !== "/mainMenu/student/manage") {
        this.$router.push("/mainMenu/student/manage");
      }
    },
    GoToEdit() {
      this.$router.push("/editInformation");
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