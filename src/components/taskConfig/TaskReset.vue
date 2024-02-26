<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 92%;
        width: 98%;
        left: 1%;
        background-color: #ffffff;
        top: 1%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      "
    >
      <!-- 标题部分 -->
      <div style="height: 5%">
        <h2 style="position: relative; left: 1%">任务进度列表</h2>
      </div>
      <!-- 搜索部分 -->
      <div
        style="
          height: 10%;
          top: 2%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        "
      >
        <div
          style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >学院：</span
          >
          <el-select v-model="collegeValue" style="width: 60%">
            <el-option
              v-for="item in collegeOptions"
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
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >任务进度：</span
          >
          <el-input
            v-model="taskProcess"
            placeholder="输入0-100"
            style="width: 60%"
          ></el-input>
        </div>

        <div
          style="
            position: relative;
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <el-button
            class="search-button"
            type="danger"
            round
            style="
              background-color: #f89300;
              border-radius: 5px;
              font-size: 14px;
              padding: 5px;
              border: none;
            "
          >
            <i
              class="el-icon-search"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >搜索
          </el-button>
          <el-button
            round
            style="
              border-radius: 5px;
              border: none;
              font-size: 14px;
              padding: 5px;
              border: 1px solid #ccc;
            "
            @click="resetValue"
          >
            <i
              class="el-icon-refresh-right"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >重置
          </el-button>
        </div>
      </div>
      <!-- 表格部分 -->
      <div style="width: 100%; height: 88%; position: relative">
        <el-table
          :data="tableData"
          border
          style="width: 90%; height: 94%; top: 4%; left: 5%"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="200px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="id"
            label="学号"
            width="200px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="major"
            label="专业"
            width="200px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="enroll"
            label="是否注册"
            width="200px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="process"
            label="任务进度/% "
            width="200px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <div style="items-align: center">
                <el-button
                  type="success"
                  size="mini"
                  style="background-color: #fa5e00; border: none"
                  @click="handleReset(scope.row)"
                  >重置</el-button
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 下侧按钮部分 -->
      <div
        style="
          position: relative;
          top: 6%;
          width: 100%;
          height: 6%;
          display: flex;
          justify-content: flex-end;
        "
      >
        <el-button
          type="success"
          size="mini"
          style="
            background-color: #f89300;
            border: none;
            margin-right: 20px;
            width: 80px;
          "
          @click="goToList"
        >
          返回
        </el-button>
        <el-button
          type="success"
          size="mini"
          style="background-color: #fa5e00; border: none"
          @click="handleReset"
        >
          批量重置
        </el-button>
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
      collegeValue: "",
      taskProcess: "",
      collegeOptions: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "建筑学院",
          label: "建筑学院",
        },
        {
          value: "信息学院",
          label: "信息学院",
        },
      ],
      tableData: [
        {
          name: "张三",
          id: "2021112802",
          major: "计算机科学与技术",
          enroll: "是",
          process: "100",
        },
      ],
    };
  },
  methods: {
    resetValue() {
      this.collegeValue = "";
      this.taskProcess = "";
    },
    goToList() {
      this.$router.push("/mainMenu/task/config");
    },
    handleReset(row) {
      this.$confirm("确认重置吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 发起axios请求重置数据

          // 重置成功后，弹出重置成功提示框
          this.$message({
            type: "success",
            message: "重置成功！",
          });
        })
        .catch(() => {});
    },
  },
};
</script>