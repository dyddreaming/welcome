<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4">
    <div
      style="
        position: relative;
        height: 8%;
        width: 100%;
        background-color: rgb(28, 43, 54);
        display: flex;
        align-items: center;
      "
    >
      <div
        style="
          position: relative;
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          left: 2%;
          background-color: rgb(28, 43, 54);
        "
      >
        <i class="el-icon-search" style="color: #ffff; margin-right: 10px"></i>
        <el-input
          v-model="search"
          placeholder="搜索"
          id="searchPart"
        ></el-input>
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
    <div style="margin-top: 10px; width: 100%; height: 9%; display: flex">
      <h2
        style="
          color: #747474;
          display: inline-block;
          left: 2%;
          position: relative;
          width: 98%;
        "
      >
        日志管理
      </h2>
      <div
        style="
          position: relative;
          height: 100%;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          right: 2%;
        "
      >
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            :to="{ path: '/mainMenu/student/register' }"
            style="font-size: 17px"
            id="active-link"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >日志管理</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <!-- 横线 -->
    <hr
      style="
        width: 99%;
        border: 1px solid #ffffff;
        margin-top: 5px;
        position: relative;
      "
    />
    <!-- 筛选部分 -->
    <div
      style="
        width: 100%;
        height: 10%;
        position: relative;
        display: flex;
        top: 1%;
        align-items: center;
        justify-content: space-between;
      "
    >
      <div
        style="
          flex: 1;
          position: relative;
          height: 100%;
          left: 2%;
          width: 96%;
          top: 20%;
        "
      >
        <span>操作模块:</span>
        <el-select
          v-model="operationValue"
          placeholder="请选择"
          style="left: 3%; position: relative; width: 70%"
        >
          <el-option
            v-for="item in operationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div style="flex: 1; position: relative; height: 100%; top: 20%">
        <span>操作时间：</span>
        <el-date-picker
          v-model="operationTime"
          type="date"
          placeholder="请选择"
          style="width: 70%"
        ></el-date-picker>
      </div>
      <div style="flex: 1; position: relative; height: 100%; top: 20%">
        <span>操作账号:</span>
        <el-input
          v-model="operationAccount"
          placeholder="请输入账号名称"
          style="position: relative; left: 3%; width: 70%"
        >
        </el-input>
      </div>
    </div>
    <!-- 表格 -->
    <div
      style="
        width: 96%;
        left: 2%;
        height: 62%;
        position: relative;
        top: 1%;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      "
    >
      <el-table
        :data="tableData"
        style="position: relative; height: 99%; top: 1%; width: 98%; left: 1%"
      >
        <el-table-column
          prop="list"
          label="序号"
          min-width="30"
          max-width="60"
          :align="centerAlign"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作时间"
          min-width="100"
          max-width="100"
          :align="centerAlign"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="user"
          label="操作账号"
          min-width="100"
          max-width="100"
          :align="centerAlign"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="module"
          label="操作模块"
          min-width="100"
          max-width="100"
          :align="centerAlign"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          label="操作内容"
          min-width="160"
          :align="centerAlign"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div
      style="
        position: relative;
        height: 7%;
        width: 96%;
        top: 1%;
        left: 2%;
        display: flex;
      "
    >
      <!-- 分页 -->
      <div
        style="
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <!-- 上一页按钮 -->
        <button
          class="changePage"
          @click="goToPrevPage"
          :disabled="currentPage === 1"
          style="position: relative; margin-right: 10px"
        >
          上一页
        </button>
        <!-- 显示页码的部分 -->
        <button
          v-for="pageNumber in displayedPages"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
          :class="{ active: pageNumber === currentPage, pagination: true }"
        >
          {{ pageNumber }}
        </button>
        <!-- 下一页按钮 -->
        <button
          class="changePage"
          @click="goToNextPage"
          :disabled="currentPage === totalPages"
          style="position: relative; margin-left: 10px"
        >
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #209e91;
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

/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474;
}

/deep/ .pagination {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #747474;
  width: 40px;
  height: 30px;
}

/deep/ .changePage {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  color: #747474;
  width: 60px;
  height: 30px;
}

/deep/ .active {
  background-color: #209e91;
  color: #ffffff;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search: "",
      centerAlign: "center",
      operationAccount: "",
      operationValue: "",
      operationTime: "",
      operationOptions: [
        {
          value: "学生管理",
          label: "学生管理",
        },
        {
          value: "任务管理",
          label: "任务管理",
        },
        {
          value: "数据管理",
          label: "数据管理",
        },
        {
          value: "权限管理",
          label: "权限管理",
        },
        {
          value: "附加功能管理",
          label: "附加功能管理",
        },
        {
          value: "摄像头管理",
          label: "摄像头管理",
        },
        {
          value: "平台参数配置",
          label: "平台参数配置",
        },
        {
          value: "帮助中心",
          label: "帮助中心",
        },
      ],
      currentPage: 1,
      pageSize: 8,
      totalPages: 1,
      fetchData: null,
      tableData:[],
    };
  },
  watch: {
    operationAccount() {
      this.goToPage(1);
    },
    operationValue() {
      this.goToPage(1);
    },
    operationTime() {
      this.goToPage(1);
    },
  },
  mounted() {
    this.goToPage(1);
  },
  computed: {
    displayedPages() {
      const maxDisplayedPages = 5; // 最多显示的页码数量
      const pages = [];
      let startPage = Math.max(
        1,
        this.currentPage - Math.floor(maxDisplayedPages / 2)
      );
      let endPage = Math.min(
        this.totalPages,
        startPage + maxDisplayedPages - 1
      );

      if (endPage - startPage < maxDisplayedPages - 1) {
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);
      }

      if (startPage > 1) {
        pages.push(1); // 添加第一页
        if (startPage > 2) {
          pages.push("..."); // 添加省略号
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < this.totalPages) {
        if (endPage < this.totalPages - 1) {
          pages.push("..."); // 添加省略号
        }
        pages.push(this.totalPages); // 添加最后一页
      }

      return pages;
    },
  },
  methods: {
    getData() {
      this.tableData = [];
      // 构造查询字符串
      let queryString = `?page=${this.currentPage}&pageSize=${this.pageSize}`;
      if (this.operationValue != "") {
        queryString += `&module=${this.operationValue}`;
      }
      if (this.operationTime != "") {
        var date = new Date(this.operationTime);
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, "0");
        var day = date.getDate().toString().padStart(2, "0");
        var formattedDate = year + "-" + month + "-" + day;
        queryString += `&time=${formattedDate}`;
      }
      if (this.operationAccount != "") {
        queryString += `&user=${this.operationAccount}`;
      }
      axios
        .get(`${this.$store.getters.getIp}/logs/page${queryString}`)
        .then((response) => {
          this.fetchData = response.data.data;
          // console.log("响应数据：", this.fetchData);
          let records = this.fetchData.records;
          records.forEach((item, index) => {
            this.tableData.push({
              list: index,
              time: item.time,
              user: item.user,
              module: item.module,
              content: item.content,
            });
          });
          this.totalPages = this.fetchData.pages;
          console.log(this.tableData);
          // console.log("日志数据：", this.tableData);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 获取分页数据
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.getData();
    },
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getData();
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getData();
      }
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
  },
};
</script>