<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
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
        学生信息管理
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">学生信息管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 横线 -->
    <hr style="
        width: 99%;
        border: 1px solid #ffffff;
        margin-top: 5px;
        position: relative;
      " />
    <!-- 筛选部分 -->
    <div style="
        width: 100%;
        height: 10%;
        position: relative;
        display: flex;
        top:1%;
        align-items: center;
        justify-content: space-between;
      ">
      <div style="flex: 1; position: relative; height: 100%; left: 2%;width:96%;top:20%;">
        <span>学院:</span>
        <el-select v-model="collegeValue" placeholder="请选择" style="left: 3%; position: relative; width: 70%">
          <el-option v-for="item in CollegeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="flex: 1; position: relative; height: 100%;top:20%;">
        <span>类别:</span>
        <el-select v-model="typeValue" placeholder="请选择" style="left: 3%; position: relative; width: 70%">
          <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div style="flex: 1; position: relative; height: 100%;top:20%;">
        <span>任务完成度:</span>
        <el-input v-model="completeDegree" placeholder="输入0-100" style="position: relative; left: 3%; width: 70%">
        </el-input>
      </div>
    </div>
    <!-- 表格 -->
    <div style="width: 96%;left:2%; height: 62%; position: relative; top: 1%;background-color:#ffffff;border-radius:8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);">
      <div style="position:relative;width:98%;left:1%;height:98%;top:1%">
        <el-table :data="tableData" @selection-change="handleSelectionChange">
          <el-table-column type="selection" label="选择" width="50" :align="centerAlign">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" min-width="50" :align="centerAlign">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="gender" label="性别" min-width="50" :align="centerAlign" :formatter="formatGender">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="学号" min-width="100" :align="centerAlign">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="major" label="专业" min-width="160" :align="centerAlign">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="username" label="用户名" min-width="100" :align="centerAlign">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="isRegistered" label="注册" min-width="100" :align="centerAlign"
            :formatter="formatRegister">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="completion" label="任务完成度/%" min-width="100" :align="centerAlign">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="code" label="密码" min-width="100" :align="centerAlign">

            <template slot-scope="scope">
              <div style="text-align: center">
                <!-- 按钮元素放在这里 -->
                <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="small"
                  @click="singleReset(scope.row.id)">重置</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" min-width="100" :align="centerAlign">

            <template slot-scope="scope">
              <div style="text-align: center">
                <!-- 按钮元素放在这里 -->
                <el-button type="primary" style="background-color: #e85656; border: #e85656;" size="small"
                  @click="singleDelete(scope.row.id)">删除</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="message" label="详细信息" min-width="100" :align="centerAlign">

            <template slot-scope="scope">
              <div style="text-align: center">
                <!-- 按钮元素和图标放在一起 -->
                <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
                  @click="goToDetail(scope.row)"><i class="el-icon-right"></i></el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 操作按钮 -->
    <div style="position:relative; height:7%; width:96%; top:1%; left:2%; display: flex; justify-content: flex-end; align-items: center;">
      <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c;" size="small" @click="codeReset">批量重置</el-button>
      <el-button type="primary" style="background-color: #e85656; border: #e85656;" size="small" @click="studentDelete">批量删除</el-button>
      <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small">批量提醒</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

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

/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474
}

.tableButton {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 10px !important;
}
</style>

<script>
import { MessageBox } from "element-ui";
import axios from "axios";
export default {
  data() {
    return {
      fixedWidth: 100,
      centerAlign: "center",
      CollegeOptions: [
        {
          value: "所有",
          label: "所有"
        }
      ],
      TypeOptions: [
        {
          value: "本科生",
          label: "本科生",
        },
        {
          value: "研究生",
          label: "研究生",
        },
      ],
      collegeValue: "所有",
      typeValue: "本科生",
      completeDegree: 0,
      tableData: [],
      fetchData: {},
      selectedIds: [],
      ids: [],
      CollegeList: [],
    };
  },
  created() {
    this.fetchCollegesData();
    this.getData();
  },
  watch: {
    collegeValue() {
      this.getData();
    },
    typeValue() {
      this.getData();
    },
    completeDegree() {
      this.getData();
    },
  },
  methods: {
    handleSelectionChange(selection) {
      this.selectedIds = selection.map((item) => item.id);
      console.log(this.selectedIds);
    },
    // 单个重置
    singleReset(id) {
      this.selectedIds.push(id);
      this.codeReset();
    },
    // 单个删除
    singleDelete(id) {
      this.selectedIds.push(id);
      this.studentDelete();
    },
    // 获取表格数据
    getData() {
      // 构造查询字符串
      let queryString = `?page=1&pageSize=7`;
      const category = this.typeValue === "本科生" ? 0 : 1;
      if (this.collegeValue == "所有") {
        queryString += `&category=${category}&compDegree=${this.completeDegree}`;
      } else {
        const collegeEncoded = encodeURIComponent(this.collegeValue);
        queryString += `&college=${collegeEncoded}&category=${category}&compDegree=${this.completeDegree}`;
      }
      axios
        .get(`${this.$store.getters.getIp}/students/page${queryString}`)
        .then((response) => {
          this.fetchData = response.data.data;
          // console.log("响应数据：", this.fetchData);
          this.tableData = this.fetchData.records;
          console.log("表格数据：", this.tableData);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 前往详细界面
    goToDetail(row) {
      this.$store.commit("setRowData", row);
      this.$nextTick(() => {
        this.$router.push("/mainMenu/student/detailInformation");
        console.log("前往详细界面");
      });
    },
    arrayToQueryString(key, array) {
      return array.map((item) => `${key}=${item}`).join("&");
    },
    // 密码重置
    codeReset() {
      if (this.selectedIds.length === 0) {
        this.$message.warning("请先选择要操作的项");
      } else {
        // 弹出确认对话框
        this.$confirm("确认将账户密码重置为身份证后6位吗？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.doReset();
          })
          .catch(() => { });
      }
    },
    doReset() {
      const url = `${this.$store.getters.getIp
        }/students/reset?ids=${this.selectedIds.join("&ids=")}`;
      axios
        .put(url)
        .then((response) => {
          console.log("密码重置成功", response.data);
          this.$message({
            message: "密码重置成功",
            type: "success",
          });
        })
        .catch((error) => {
          console.error("密码重置失败", error);
          this.$message.error("密码重置失败，请稍后重试");
        });
    },
    // 删除对象
    studentDelete() {
      if (this.selectedIds.length === 0) {
        this.$message.warning("请先选择要操作的项");
      } else {
        this.$confirm("确认删除吗？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.doDelete();
          })
          .catch(() => { });
      }
    },
    doDelete() {
      // 发送axios请求删除学生
      const url = `${this.$store.getters.getIp
        }/students?ids=${this.selectedIds.join("&ids=")}`;
      axios
        .delete(url)
        .then((response) => {
          console.log("删除成功", response.data);
          this.$message({
            message: "删除成功",
            type: "success",
          });
          // 成功删除后刷新页面
          location.reload();
        })
        .catch((error) => {
          console.error("删除失败", error);
          this.$message.error("删除失败，请稍后重试");
        });
    },
    // 格式转换
    formatGender(row) {
      return row.gender === 0 ? "女" : "男";
    },
    formatRegister(row) {
      return row.isRegistered === 0 ? "否" : "是";
    },
    // 获取学院列表
    fetchCollegesData() {
      axios
        .get(`${this.$store.getters.getIp}/colleges/list`)
        .then((response) => {
          this.CollegeList = response.data.data;
          console.log("学院数据:", this.CollegeList);
          this.CollegeList.forEach(college => {
            this.CollegeOptions.push({
              value: college.name,
              label: college.name,
            });
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          console.log(this.$store.getters.getIp);
        });
    },
  },
};
</script>