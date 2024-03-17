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
          v-model="searchWord"
          placeholder="搜索"
          id="searchPart"
        ></el-input>
      </div>
      <router-link
        to="/mainMenu/help/helpFile"
        style="
          color: inherit;
          text-decoration: none;
          margin-right: 20px;
          margin-left: auto;
          color: #ffffff;
        "
      >
        <span style="transition: color 0.3s" class="hover-color"
          >需要帮助吗？<span style="color: #209e91">点击这里</span></span
        >
      </router-link>
      <i
        class="el-icon-s-home"
        style="color: #ffff; margin-right: 10px; font-size: 24px"
      ></i>
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
        任务发布列表
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
            >任务发布列表</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <!-- 数据部分 -->
    <div
      style="
        height: 73%;
        top: 1%;
        background-color: #ffffff;
        position: relative;
        border-radius: 8px;
        width: 96%;
        left: 2%;
        color: #747474;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <!-- 搜索部分 -->
      <div
        style="
          height: 10%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          top: 2%;
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
            >任务名称：</span
          >
          <el-input
            v-model="nameInput"
            placeholder="请输入任务名称"
            style="width: 60%"
          ></el-input>
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
            >任务状态：</span
          >
          <el-select
            v-model="statusValue"
            placeholder="请选择任务状态"
            style="width: 60%"
          >
            <el-option
              v-for="item in statusOptions"
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
            >任务级别：</span
          >
          <el-select
            v-model="taskLevel"
            placeholder="请选择任务级别"
            style="width: 60%"
          >
            <el-option
              v-for="item in levelOptions"
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
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <el-button
            type="primary"
            style="
              background-color: #209e91;
              border-color: #209e91;
              color: #ffffff;
            "
            size="mini"
            @click="search"
          >
            <i
              class="el-icon-search"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >搜索
          </el-button>

          <el-button
            type="primary"
            style="
              background-color: #ffffff;
              border-color: #e0e0e0;
              color: #808080;
            "
            size="mini"
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
      <div
        style="
          height: 86%;
          position: relative;
          width: 98%;
          display: flex;
          left: 1%;
          align-items: center;
          top: 3%;
        "
      >
        <el-table
          :data="tableData"
          @selection-change="handleSelectionChange"
          border
          style="width: 100%; height: 100%"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="任务名称"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="target"
            label="任务对象"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="level"
            label="任务级别"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="category"
            label="任务类型"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="taskStatus"
            label="任务状态"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="createUser"
            label="任务发布者"
            width="150px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <div style="display: flex; justify-content: center;">
                <el-button
                  type="primary"
                  style="background-color: #209e91; border: #209e91"
                  size="small"
                  @click="handleEdit(scope.row)"
                >修改</el-button>
                <el-button
                  type="primary"
                  style="background-color: #dfb81c; border: #dfb81c"
                  size="small"
                  @click="handleReset(scope.row)"
                >重置</el-button>
                <el-button
                  type="primary"
                  style="background-color: #e85656; border: #e85656"
                  size="small"
                  @click="singleDelete(scope.row.id)"
                >删除</el-button>
              </div>
            </template>
          </el-table-column>
          
        </el-table>
      </div>
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
          width: 50%;
          display: flex;
          justify-content: flex-start;
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
      <!-- 操作按钮 -->
      <div
        style="
          position: relative;
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <el-button
          type="primary"
          style="background-color: #209e91; border: #209e91"
          size="small"
          @click="taskRelease"
          >发布任务</el-button
        >
        <el-button
          type="primary"
          style="background-color: #e85656; border: #e85656"
          size="small"
          @click="taskDelete"
          >批量删除</el-button
        >
      </div>
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
  color: #747474;
}
/deep/ .pagination{
  background-color:#ffffff;
  border:1px solid #e0e0e0;
  color:#747474;
  width:40px;
  height:30px;
}
/deep/ .changePage{
  background-color:#ffffff;
  border:1px solid #e0e0e0;
  color:#747474;
  width:60px;
  height:30px;
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
      searchWord: "",
      nameInput: "",
      statusValue: null,
      taskLevel: null,
      selectedIds: [],
      statusOptions: [
        {
          value: 0,
          label: "草稿",
        },
        {
          value: 1,
          label: "未发布",
        },
        {
          value: 2,
          label: "进行中",
        },
        {
          value: 3,
          label: "已结束",
        },
      ],
      levelOptions: [
        {
          value: 0,
          label: "校级",
        },
        {
          value: 1,
          label: "院级",
        },
      ],
      tableData: [
        // {
        //   name: "校史学习",
        //   target: "本科生",
        //   status: "发布状态",
        //   level: "校级",
        //   category: "主线",
        //   createUser: "计算机学院",
        // },
      ],
      totalData: null,
      currentPage: 1,
      pageSize: 8,
      totalPages: 1,
    };
  },
  created(){
    this.goToPage(1);
  },
  mounted() {
    this.getList();
  },
  computed: {
    displayedPages() {
      const maxDisplayedPages = 5; // 最多显示的页码数量
      const pages = [];
      let startPage = Math.max(1, this.currentPage - Math.floor(maxDisplayedPages / 2));
      let endPage = Math.min(this.totalPages, startPage + maxDisplayedPages - 1);
      
      if (endPage - startPage < maxDisplayedPages - 1) {
        startPage = Math.max(1, endPage - maxDisplayedPages + 1);
      }
      
      if (startPage > 1) {
        pages.push(1); // 添加第一页
        if (startPage > 2) {
          pages.push('...'); // 添加省略号
        }
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (endPage < this.totalPages) {
        if (endPage < this.totalPages - 1) {
          pages.push('...'); // 添加省略号
        }
        pages.push(this.totalPages); // 添加最后一页
      }
      
      return pages;
    }
  },
  methods: {
    search(){
      this.getList();
    },
    getList() {
      let queryString = `?page=${this.currentPage}&pageSize=${this.pageSize}`;
      if(this.nameInput)
      {
        queryString += `&name=${this.nameInput}`;
      }
      if(this.statusValue == 0 | this.statusValue == 1 | this.statusValue == 2 | this.statusValue == 3)
      {
        queryString += `&status=${this.statusValue}`;
      }
      if(this.taskLevel == 0 | this.taskLevel == 1)
      {
        queryString += `&level=${this.taskLevel}`;
      }
      axios
        .get(`${this.$store.getters.getIp}/tasks/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.records;
          console.log("获取到的任务列表:", this.totalData);
          this.totalPages = response.data.data.pages;
          this.tableData = this.totalData.map((item) => {
            let target = "";
            switch (item.target) {
              case 0:
                target = "本科生";
                break;
              case 1:
                target = "研究生";
                break;
              case 2:
                target = "全体";
                break;
              default:
                target = "未知";
            }
            let level = "";
            switch (item.level) {
              case 0:
                level = "校级";
                break;
              case 1:
                level = "院级";
                break;
              default:
                level = "未知";
            }
            let status = "";
            switch (item.status) {
              case 0:
                status = "草稿";
                break;
              case 1: {
                // 需要根据时间细化状态
                var currentTime = new Date();
                var releaseTime = new Date(item.releaseTime);
                var endTime = new Date(item.endTime);
                if (currentTime < releaseTime) {
                  status = "未发布";
                } else if (
                  currentTime >= releaseTime &&
                  currentTime <= endTime
                ) {
                  status = "进行中";
                } else {
                  status = "已结束";
                }
                break;
              }
            }
            let category = "";
            switch (item.category) {
              case 0:
                category = "主线";
                break;
              case 1:
                category = "支线";
                break;
              case 2:
                category = "挑战";
                break;
              default:
                category = "未知";
            }
            // console.log(item.id);
            return {
              id: item.id,
              name: item.name,
              target: target,
              taskStatus: status,
              level: level,
              category: category,
              createUser: item.createUser,
            };
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    resetValue() {
      this.nameInput = "";
      this.statusValue = "";
      this.taskLevel = "";
      this.getList();
    },
    taskRelease() {
      this.$router.push("/taskRelease");
    },
    handleEdit(row) {
      this.$store.commit("setSeeTaskID", row.id);
      // console.log("修改任务ID值",row.id);
      this.$nextTick(() => {
        this.$router.push("/taskRefine");
      });
    },
    handleReset(row) {
      this.$store.commit("setRestTaskID", row.id);
      this.$nextTick(() => {
        this.$router.push("/mainMenu/task/taskReset");
      });
    },
    handleSelectionChange(selection) {
      this.selectedIds = selection.map((item) => item.id);
      // console.log(this.selectedIds);
    },
    singleDelete(id) {
      this.selectedIds.push(id);
      // console.log(this.selectedIds);
      this.taskDelete();
    },
    taskDelete() {
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
          .catch(() => {});
      }
    },
    doDelete() {
      // 发送axios请求删除学生
      const url = `${
        this.$store.getters.getIp
      }/tasks?ids=${this.selectedIds.join("&ids=")}`;
      axios
        .delete(url)
        .then((response) => {
          if (response.data.code) {
            console.log("删除成功", response.data);
            this.$message({
              message: "删除成功",
              type: "success",
            });
            // 成功删除后刷新页面
            this.getList();
          } else {
            const errorMessage = response.data.msg;
            this.$message.error(errorMessage);
          }
        })
        .catch((error) => {
          console.error("删除失败", error);
          this.$message.error("删除失败，请稍后重试");
        });
    },
    // 获取分页数据
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.getList();
    },
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getList();
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getList();
      }
    },
  },
};
</script>