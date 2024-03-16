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
        广告通过列表
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
            >通过列表</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 74%;
        width: 96%;
        left: 2%;
        top: 1%;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <div style="position: relative; height: 92%; width: 100%; top: 1%">
        <el-table
          :data="tableData"
          border
          style="position: relative; color: #747474"
        >
          <el-table-column
            prop="adName"
            label="广告名称"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="adType"
            label="广告类型"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="meName"
            label="商家名称"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="admitTime"
            label="提交时间"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="setTime"
            label="投放时间"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="setLong"
            label="投放时长"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="charge"
            label="收取费用/元"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="status"
            label="投放状态"
            min-width="70"
            :align="'center'"
          >
            <template slot="header" slot-scope="scope">
              <span
                style="display: inline-block; width: 100%; text-align: center"
                >{{ scope.column.label }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作"
            min-width="140"
            :align="'center'"
          >
            <template slot-scope="scope">
              <div style="display: flex">
                <el-button
                  type="danger"
                  size="mini"
                  :style="{
                    backgroundColor:
                      scope.row.status === '正常投放' ? '#cccccc' : '#e85656',
                    border: 'none',
                  }"
                  @click="putAd(scope.row)"
                  >投放</el-button
                >
                <el-button
                  type="danger"
                  size="mini"
                  :style="{
                    backgroundColor:
                      scope.row.status === '暂停投放' ? '#cccccc' : '#e85656',
                    border: 'none',
                  }"
                  @click="pauseAd(scope.row)"
                  >暂停投放</el-button
                >
                <el-button
                  type="danger"
                  size="mini"
                  style="background-color: #209e91; border: none"
                  @click="seeDetail(scope.row)"
                  >查看</el-button
                >
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
          @click="goToSet"
          >广告设置</el-button
        >
        <el-button
          type="primary"
          style="background-color: #dfb81c; border: #dfb81c"
          size="small"
          @click="goNoPass"
          >待审核列表</el-button
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
      totalData: null,
      currentPage: 1,
      pageSize: 7,
      totalPages: 1,
      tableData: [
        {
          adName: "不吃火锅就吃烤匠",
          adType: "美食",
          meName: "烤匠",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "30天",
          charge: "3000",
          status: "正常投放",
        },{
          adName: "专注兔肉30年",
          adType: "美食",
          meName: "芭夯兔",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "20天",
          charge: "2000",
          status: "正常投放",
        },{
          adName: "经典烤肉",
          adType: "美食",
          meName: "九田家",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "30天",
          charge: "3000",
          status: "暂停投放",
        },{
          adName: "暑期兼职",
          adType: "兼职",
          meName: "软件组",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "60天",
          charge: "6000",
          status: "暂停投放",
        },
        {
          adName: "平台兼职",
          adType: "兼职",
          meName: "小小手作店",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "10天",
          charge: "1000",
          status: "正常投放",
        },
        {
          adName: "欢乐剧本杀",
          adType: "娱乐",
          meName: "哈哈剧本杀",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "20天",
          charge: "2000",
          status: "正常投放",
        },{
          adName: "温馨手工制作",
          adType: "娱乐",
          meName: "甜甜手作店",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "20天",
          charge: "2000",
          status: "正常投放",
        },
      ],
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
  create() {
    this.goToPage(1);
  },
  methods: {
    // 查看未通过列表
    goNoPass() {
      this.$router.push("/mainMenu/add/noPass");
    },
    // 查看详情界面
    seeDetail(ad) {
      this.$store.commit("setSeeAdID", ad.id);
      this.$nextTick(() => {
        if (ad.adType == "美食" || ad.adType == "娱乐") {
          this.$router.push("/foodDetail");
        } else {
          this.$router.push("/workDetail");
        }
      });
    },
    // 获取广告列表
    getData() {
      let queryString = `?page=${this.currentPage}&pageSize=${this.pageSize}&isExamine=true`;
      this.tableData = [];
      axios
        .get(
          `${this.$store.getters.getIp}/advertisements/examine/page${queryString}`
        )
        .then((response) => {
          this.totalData = response.data.data.records;
          this.totalPages = response.data.data.pages;
          this.totalData.forEach((item) => {
            if (item.category === 0) {
              return;
            }
            let adTypeText = "";
            switch (item.category) {
              case 1:
                adTypeText = "兼职";
                break;
              case 2:
                adTypeText = "美食";
                break;
              case 3:
                adTypeText = "娱乐";
                break;
              default:
                adTypeText = "未知类型";
                break;
            }
            this.tableData.push({
              adName: item.title,
              adType: adTypeText,
              meName: item.name,
              admitTime: item.create_time,
              setTime: item.release_time,
              setLong: item.duration,
              charge: item.cost,
              status: item.status == 0 ? "正常投放" : "暂停投放",
              id: item.id,
            });
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 广告设置
    goToSet() {
      this.$router.push("/mainMenu/add/advertiseSet");
    },
    // 投放广告
    putAd(ad) {
      this.$confirm("确认投放吗？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: parseInt(ad.id),
            status: 1,
          };
          const queryString = Object.keys(data)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join("&");
          axios
            .put(
              `${this.$store.getters.getIp}/advertisements/status?${queryString}`
            )
            .then((response) => {
              // console.log(response.data);
              if (response.data.code) {
                this.$message({
                  message: "投放成功",
                  type: "success",
                });
                ad.status = "正常投放";
              }
            })
            .catch((error) => {
              console.error("修改错误:", error);
            });
        })
        .catch(() => {});
    },
    // 暂停投放广告
    pauseAd(ad) {
      this.$prompt("请输入暂停投放原因", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "请输入暂停投放原因",
      })
        .then(({ value }) => {
          if (value == null) {
            this.$message.error("请输入暂停投放原因");
          } else {
            let data = {
              id: parseInt(ad.id),
              status: 1,
              feedback: value,
            };

            const queryString = Object.keys(data)
              .map(
                (key) =>
                  `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
              )
              .join("&");

            axios
              .put(
                `${this.$store.getters.getIp}/advertisements/status?${queryString}`
              )
              .then((response) => {
                // console.log(response.data);
                if (response.data.code) {
                  this.$message({
                    message: "暂停投放成功",
                    type: "success",
                  });
                  ad.status = "暂停投放";
                }
              })
              .catch((error) => {
                console.error("修改错误:", error);
              });
          }
        })
        .catch(() => {
          console.log("取消暂停投放");
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
  },
};
</script>