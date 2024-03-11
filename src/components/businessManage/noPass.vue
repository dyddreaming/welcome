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
        广告未通过列表
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
            :to="{ path: '/mainMenu/add/business' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >通过列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >未通过列表</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 75%;
        width: 96%;
        left: 2%;
        top: 1%;
        background-color: #ffffff;
        color: #747474;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <div style="position: relative; height: 98%; width: 100%; top: 1%">
        <el-table :data="tableData" border style="color: #747474">
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
            prop="operation"
            label="操作"
            min-width="100"
            :align="'center'"
          >
            <template slot-scope="scope">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <el-button
                  type="primary"
                  style="background-color: #dfb81c; border: #dfb81c"
                  size="small"
                  @click="examine(scope.row)"
                  >审核</el-button
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="position:relative;height:5%;width:100%;top:3%;justify-content: flex-end;display: flex;
      align-items: center;">
        <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
          @click="goBack">返回</el-button>
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
</style>


<script>
import axios from "axios";
export default {
  data() {
    return {
      totalData: null,
      tableData: [
        // {
        //   adName: "不吃火锅就吃烤匠",
        //   adType: "美食",
        //   meName: "烤匠",
        //   admitTime: "2024-08-28 10:16:23",
        //   setLong: "3天",
        // },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goBack() {
      this.$router.push("/mainMenu/add/business");
    },
    examine(ad) {
      this.$store.commit("setExamineID", ad.id);
      this.$nextTick(() => {
        if (ad.status == "美食" || ad.status == "娱乐") {
          this.$router.push("/examineFood");
        } else {
          this.$router.push("/examinePart");
        }
      });
    },
    // 获取广告列表
    getData() {
      let queryString = `?page=1&pageSize=6&isExamine=false`;
      axios
        .get(
          `${this.$store.getters.getIp}/advertisements/examine/page${queryString}`
        )
        .then((response) => {
          this.totalData = response.data.data.records;
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
  },
};
</script>