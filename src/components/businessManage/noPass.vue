<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4">
    <div style="
        position: relative;
        height: 8%;
        width: 100%;
        background-color: rgb(28, 43, 54);
        display: flex;
        align-items: center;
      ">
      <div style="
          position: relative;
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          left: 2%;
          background-color: rgb(28, 43, 54);
        ">
        <i class="el-icon-search" style="color: #ffff; margin-right: 10px"></i>
        <el-input v-model="searchWord" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <router-link to="/mainMenu/help/helpFile" style="
          color: inherit;
          text-decoration: none;
          margin-right: 20px;
          margin-left: auto;
          color: #ffffff;
        ">
        <span style="transition: color 0.3s" class="hover-color">需要帮助吗？<span style="color: #209e91">点击这里</span></span>
      </router-link>
      <i class="el-icon-s-home" style="color: #ffff; margin-right: 10px; font-size: 24px"></i>
    </div>
    <div style="margin-top: 10px; width: 100%; height: 9%; display: flex">
      <h2 style="
          color: #747474;
          display: inline-block;
          left: 2%;
          position: relative;
          width: 98%;
        ">
        广告未通过列表
      </h2>
      <div style="
          position: relative;
          height: 100%;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          right: 2%;
        ">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/add/business' }"
            style="font-size: 17px; color: #747474; font-weight: 600" id="pre-link">通过列表</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link">未通过列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div style="
        position: relative;
        height: 75%;
        width: 96%;
        left: 2%;
        top: 1%;
        background-color: #ffffff;
        color: #747474;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      ">
      <div style="position: relative; height: 98%; width: 100%; top: 1%">
        <el-table :data="tableData" border style="color: #747474">
          <el-table-column prop="adName" label="广告名称" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="adType" label="广告类型" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="meName" label="商家名称" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="admitTime" label="提交时间" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="setLong" label="投放时长" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" min-width="100" :align="'center'">
            <template slot-scope="scope">
              <div style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <el-button type="primary" style="background-color: #dfb81c; border: #dfb81c" size="small"
                  @click="examine(scope.row)">审核</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="
        position: relative;
        height: 7%;
        width: 100%;
        top: 2%;
        display: flex;
      ">
        <!-- 分页 -->
        <div style="position:relative;height:100%;width:50%; display: flex;
    justify-content: flex-start;
    align-items: center;">
          <!-- 上一页按钮 -->
          <button class="changePage" @click="goToPrevPage" :disabled="currentPage === 1"
            style="position:relative;margin-right:10px">上一页</button>
          <!-- 显示页码的部分 -->
          <button v-for="pageNumber in displayedPages" :key="pageNumber" @click="goToPage(pageNumber)"
            :class="{ 'active': pageNumber === currentPage, 'pagination': true }">
            {{ pageNumber }}
          </button>
          <!-- 下一页按钮 -->
          <button class="changePage" @click="goToNextPage" :disabled="currentPage === totalPages"
            style="position:relative;margin-left:10px">下一页</button>
        </div>
        <div style="
          position: relative;
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "><el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
            @click="goBack">返回</el-button></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../public/static/css/aside.css";

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
      totalData: null,
      currentPage: 1,
      pageSize: 7,
      totalPages: 1,
      searchWord:"",
      tableData: [
        // {
        //   adName: "不吃火锅就吃烤匠",
        //   adType: "美食",
        //   meName: "烤匠",
        //   admitTime: "2024-08-28 10:16:23",
        //   setLong: "3天",
        // },
        {
          adName: "周末兼职",
          adType: "兼职",
          meName: "临时剧组",
          admitTime: "2024-02-28 10:16:23",
          setLong: "20天",
        },{
          adName: "荣胜和火锅自助",
          adType: "美食",
          meName: "荣胜和",
          admitTime: "2024-02-28 10:16:23",
          setLong: "30天",
        },
        {
          adName: "欢乐蛋糕",
          adType: "美食",
          meName: "每日蛋糕",
          admitTime: "2024-02-28 10:16:23",
          setLong: "20天",
        },{
          adName: "经典密室逃脱",
          adType: "娱乐",
          meName: "明天密室",
          admitTime: "2024-02-28 10:16:23",
          setLong: "20天",
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
  created() {
    // this.goToPage(1);
  },
  methods: {
    goBack() {
      this.$router.push("/mainMenu/add/business");
    },
    examine(ad) {
      this.$store.commit("setExamineID", ad.id);
      this.$nextTick(() => {
        if (ad.type == "美食" || ad.type == "娱乐") {
          this.$router.push("/examineFood");
        } else {
          this.$router.push("/examinePart");
          console.log("跳转到兼职审核界面");
        }
      });
    },
    // 获取广告列表
    getData() {
      let queryString = `?page=${this.currentPage}&pageSize=6
      ${this.pageSize}&isExamine=false`;
      this.tableData = [];
      axios
        .get(
          `${this.$store.getters.getIp}/advertisements/examine/page${queryString}`
        )
        .then((response) => {
          this.totalData = response.data.data.records;
          this.totalPages = response.data.data.pages;
          // console.log(this.totalData);
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
              id: item.id,
            });
          });
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
  },
};
</script>