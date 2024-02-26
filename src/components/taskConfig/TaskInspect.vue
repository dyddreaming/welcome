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
      <div style="position: relative; height: 5%; left: 5%; width: 90%">
        <h2 style="margin-top: 0">任务基本信息</h2>
      </div>
      <div
        style="
          position: relative;
          top: 2%;
          height: 25%;
          width: 90%;
          background-color: #ffffff;
          left: 5%;
        "
      >
        <p style="position: relative; left: 5%">任务名称：报到倒计时1:</p>
        <p style="position: relative; left: 5%">任务描述：准备通知书</p>
        <p style="position: relative; left: 5%">任务类型：主线</p>
        <p style="position: relative; left: 5%">
          审核问题：上传物品可能不是通知书
        </p>
      </div>
      <div
        style="position: relative; height: 5%; left: 5%; width: 90%; top: 5%"
      >
        <h2 style="margin-top: 0">用户提交信息</h2>
      </div>
      <div
        style="
          position: relative;
          top: 8%;
          height: 25%;
          width: 90%;
          background-color: #ffffff;
          left: 5%;
        "
      ></div>
      <div
        style="position: relative; height: 5%; left: 5%; width: 90%; top: 10%"
      >
        <h2 style="margin-top: 0">审核结果</h2>
        <el-select v-model="resultValue" placeholder="请选择">
          <el-option
            v-for="item in resultOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div
        style="
          position: relative;
          height: 10%;
          left: 5%;
          width: 90%;
          top: 25%;
          display: flex;
          justify-content: flex-end;
        "
      >
        <el-button
          type="success"
          size="medium"
          style="
            background-color: #fa5e00;
            border: none;
            width: 5%;
            height: 50%;
          "
          @click="submit"
          >提交</el-button
        >
        <el-button
          type="success"
          size="medium"
          style="
            background-color: #f89300;
            border: none;
            width: 5%;
            height: 50%;
          "
          @click="goBack"
          >返回</el-button
        >
      </div>
    </div>
  </div>
</template>
  
  <style>
@import "../../../public/static/css/aside.css";
</style>
  
  <script>
export default {
  data() {
    return {
      resultValue: "",
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
      else if(this.resultValue === "审核通过"){
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
      else{
        this.$message.error('提交前请给出审核结果！');
      }
    },

    goBack() {
      this.$router.push("/mainMenu/task/examine");
    },
  },
};
</script>