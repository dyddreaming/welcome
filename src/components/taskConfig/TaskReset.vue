<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4;">
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
        任务重置
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/task/config' }"
            style="font-size: 17px; color: #747474;font-weight:600;" id="pre-link">任务发布列表</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">任务重置</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div style="
        position: relative;
        height: 73%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        top: 1%;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      ">
      <!-- 搜索部分 -->
      <div style="
          height: 10%;
          top: 2%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          color:#747474;
        ">
        <div style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          ">
          <span style="position: relative; margin-right: 10px; left: 5%">学院：</span>
          <el-select v-model="collegeValue" style="width: 60%">
            <el-option v-for="item in collegeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div style="
            position: relative;
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="mini" @click="search"><i
              class="el-icon-search" style="margin-right: 3px; font-size: 14px" ></i>搜索</el-button>
          <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="mini" @click="resetValue">
            <i class="el-icon-refresh-right" style="margin-right: 3px; font-size: 14px"></i>重置</el-button>
        </div>
      </div>
      <!-- 表格部分 -->
      <div style="width: 100%; height: 92%; position: relative;top:4%;">
        <el-table :data="tableData" border style="width: 100%; height: 100%;">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" width="200px" align="center"></el-table-column>
          <el-table-column prop="id" label="学号" width="200px" align="center"></el-table-column>
          <el-table-column prop="college" label="学院" width="200px" align="center"></el-table-column>
          <el-table-column prop="major" label="专业" width="200px" align="center"></el-table-column>
          <el-table-column prop="enroll" label="是否注册" width="200px" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <div style="items-align: center">
                <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="small"
                  @click="handleReset(scope.row)">重置</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 下侧按钮部分 -->
      <div style="
          position: relative;
          top: 8%;
          width: 100%;
          height: 6%;
          display: flex;
          justify-content: flex-end;
        ">
        <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
        @click="goToList">返回</el-button>
        <el-button type="primary" style="background-color: #e85656; border: #e85656;" size="small"
        @click="handleReset">批量重置</el-button>
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
import axios from "axios";
export default {
  data() {
    return {
      searchWord: "",
      id: null,
      totalData: null,
      collegeValue: "",
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
        {
          name: "张三",
          id: "2021112802",
          major: "计算机科学与技术",
          enroll: "是",
          process: "100",
        },
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
  mounted() {
    this.id = this.$store.getters.getRestTaskID;
    // console.log("查询任务ID为:",this.id);
    this.getList();
  },
  methods: {
    search(){
      this.getList();
    },
    resetValue() {
      this.collegeValue = "";
    },
    goToList() {
      this.$router.push("/mainMenu/task/config");
    },
    getList() {
      let queryString = `?page=1&pageSize=6&taskId=${this.id}`;
      if(this.collegeValue)
      {
        queryString += `&college=${this.collegeValue}`;
      }
      axios
        .get(`${this.$store.getters.getIp}/tasks/students/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data;
          console.log("获取到的学院任务进度列表:", this.totalData);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
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
        .catch(() => { });
    },
  },
};
</script>