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
        管理员列表
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
            >管理员列表</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        height: 75%;
        top: 1%;
        position: relative;
        width: 96%;
        left: 2%;
        background: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
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
          <el-select
            v-model="college"
            placeholder="请选择学院"
            style="width: 60%"
          >
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
            >等级：</span
          >
          <el-select
            v-model="type"
            placeholder="请选择管理员等级"
            style="width: 60%"
          >
            <el-option
              v-for="item in typeOptions"
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
            style="background-color: #209e91; border: #209e91"
            size="mini"
            @click="search"
            ><i
              class="el-icon-search"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >搜索</el-button
          >
          <el-button
            type="primary"
            style="background-color: #dfb81c; border: #dfb81c"
            size="mini"
            @click="resetValue"
          >
            <i
              class="el-icon-refresh-right"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >重置</el-button
          >
        </div>
      </div>
      <!-- 数据部分 -->
      <div style="height: 87%; width: 100%; position: relative">
        <el-table :data="tableData" border style="width: 100%; height: 100%" @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="college"
            label="学院"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="username"
            label="账号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="idNumber"
            label="身份证号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="level"
            label="等级"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                @click="handleEdit(scope.row)"
                >修改</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                @click="singleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div
        style="
          position: relative;
          height: 7%;
          width: 100%;
          top: 3%;
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
            @click="add"
            >新增</el-button
          >
          <el-button
            type="primary"
            style="background-color: #e85656; border: #e85656"
            size="small"
            @click="manageDelete"
            >批量删除</el-button
          >
        </div>
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
      dialogVisible: false,
      college: "所有",
      type: "所有",
      collegeOptions: [
        {
          value: "所有",
          label: "所有",
        },
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "建筑学院",
          label: "建筑学院",
        },
        {
          value: "数学学院",
          label: "数学学院",
        },
        {
          value: "经管学院",
          label: "经管学院",
        },
      ],
      typeOptions: [
        {
          value: "所有",
          label: "所有",
        },
        {
          value: "校级",
          label: "校级",
        },
        {
          value: "院级",
          label: "院级",
        },
      ],
      // tableData: [
      //   {
      //     name: "张三",
      //     gender: "男",
      //     college: "无",
      //     account: "xxxxxxxx",
      //     id: "xxxxxxxxxxxxxxxxxx",
      //     phone: "xxxxxxxxxxx",
      //     grade: "校级",
      //   },
      // ],
      totalData: [],
      tableData: [],
      selectedIds: [],
      currentPage: 1,
      pageSize: 6,
      totalPages: 1,
    };
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
  created() {
    this.goToPage(1);
  },
  methods: {
    handleSelectionChange(selection) {
      this.selectedIds = selection.map((item) => item.id);
      console.log(this.selectedIds);
    },
    resetValue() {
      this.college = "所有";
      this.type = "所有";
      this.loadList();
    },
    // 单个删除
    singleDelete(id) {
      this.selectedIds.push(id);
      this.manageDelete();
    },
    // 删除对象
    manageDelete() {
      console.log("选择的管理员ID值", this.selectedIds);
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
            this.selectedIds = [];
          })
          .catch(() => {});
      }
    },
    doDelete() {
      // 发送axios请求删除管理员
      const url = `${
        this.$store.getters.getIp
      }/administrators?ids=${this.selectedIds.join("&ids=")}`;
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
    add() {
      this.$router.push("/mainMenu/limit/addManage");
    },
    handleEdit(row) {
      this.$store.commit("setManageRow", row);
      this.$nextTick(() => {
        this.$router.push("/mainMenu/limit/modifyManage");
        // console.log("前往修改界面");
      });
    },
    loadList() {
      axios
        .get(`${this.$store.getters.getIp}/administrators/page`, {
          params: {
            page: this.currentPage,
            pageSize: this.pageSize,
            ...(this.college !== "所有" && { college: this.college }),
            ...(this.type !== "所有" && {
              // 根据 this.type 的值添加不同的 level 参数
              level: this.type === "校级" ? 0 : this.type === "院级" ? 1 : null,
            }),
          },
        })
        .then((response) => {
          this.totalData = response.data.data.records;
          this.totalPages = response.data.data.pages;
          this.tableData = this.totalData.map((item) => {
            return {
              id: item.id,
              name: item.name,
              username: item.username,
              gender:
                item.gender === 1 ? "男" : item.gender === 0 ? "女" : "其他",
              college: item.college ? item.college : "无",
              idNumber: item.idNumber,
              phone: item.phone,
              level:
                item.level === 0 ? "校级" : item.level === 1 ? "院级" : "其他",
            };
          });
          // console.log(this.totalData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    search() {
      this.goToPage(1);
    },
    // 获取分页数据
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.loadList();
    },
    goToPrevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadList();
      }
    },
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadList();
      }
    },
  },
};
</script>