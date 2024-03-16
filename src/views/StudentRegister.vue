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
        <el-input v-model="search" placeholder="搜索"></el-input>
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
        学生注册情况
      </h2>
      <div
        style="
          position: relative;
          height: 100%;
          width: 20%;
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
            >学生注册情况</el-breadcrumb-item
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
    <!-- 竖线 -->
    <div
      style="
        position: absolute;
        left: 50%;
        top: 148px;
        bottom: 0;
        height: calc(100%);
        border-left: 2px solid #ffffff;
      "
    ></div>
    <div
      style="
        position: relative;
        height: 77%;
        width: 96%;
        left: 2%;
        top: 1%;
        display: flex;
      "
    >
      <!-- 左侧内容 -->
      <div
        style="
          position: relative;
          height: 100%;
          bottom: 0;
          width: 48%;
          border-right: 2px solid #ffffff;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        "
      >
        <!-- 上方环形进度图 -->
        <div ref="chartContainer" style="width: 100%; height: 50%"></div>
        <!-- 下侧进度条 -->
        <div style="width: 100%; height: 40%">
          <div id="UndergraduateR" style="width: 100%; height: 50%">
            <div>
              <p
                style="
                  display: inline;
                  margin-left: 20px;
                  margin-right: 440px;
                  font-size: 14px;
                "
              >
                本科生注册情况
              </p>
              <p style="display: inline; font-size: 14px">人数</p>
            </div>
            <div style="margin-left: 20px; width: 95%">
              <el-progress
                :percentage="calculateTotalRate(UndergraduateC, UndergraduateE)"
                :color="customColor"
                :stroke-width="13"
                :show-text="false"
              ></el-progress>
            </div>
            <div style="margin-left: 20px">
              <p style="display: inline; font-size: 12px; margin-right: 520px">
                {{ UndergraduateE }}
              </p>
              <p style="display: inline; font-size: 12px">
                {{ UndergraduateC }}
              </p>
            </div>
          </div>
          <div id="GraduateR" style="width: 100%; height: 50%">
            <p
              style="
                display: inline;
                margin-left: 20px;
                margin-right: 440px;
                font-size: 14px;
              "
            >
              研究生注册情况
            </p>
            <p style="display: inline; font-size: 14px">人数</p>
            <div style="margin-left: 20px; width: 95%">
              <el-progress
                :percentage="calculateTotalRate(GraduateC, GraduateE)"
                :color="customColor"
                :stroke-width="13"
                :show-text="false"
              ></el-progress>
            </div>
            <div style="margin-left: 20px">
              <p style="display: inline; font-size: 12px; margin-right: 520px">
                {{ GraduateE }}
              </p>
              <p style="display: inline; font-size: 12px">{{ GraduateC }}</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              height: 10%;
              width: 100%;
            "
          >
            <el-button
              type="primary"
              style="background-color: #209e91; border: #209e91"
              size="small"
              @click="redirectToPrevious"
              >往日注册情况</el-button
            >
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div
        style="
          position: relative;
          height: 100%;
          bottom: 0;
          width: 48%;
          left: 4%;
          border-right: 2px solid #ffffff;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        "
      >
        <h3 style="margin-left: 20px">学院</h3>
        <div
          v-for="(college, index) in CollegeList"
          :key="index"
          class="college-item"
        >
          <p style="margin-left: 20px; font-size: 14px">{{ college.name }}</p>
          <div style="margin-left: 20px; width: 95%">
            <el-progress
              :percentage="calculateRegistrationRate(index)"
              :stroke-width="10"
              :color="customColorMethod"
            >
            </el-progress>
          </div>
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

/deep/.el-input__inner {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474;
}
</style>
<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  data() {
    return {
      search: "",
      customColor: "#0da699",
      myChart: null,
      // ip: "http://740bfd98.r6.cpolar.top",
      CollegeList: [], // 存储返回各学院信息
      UndergraduateC: {}, // 本科生总人数
      UndergraduateE: {}, // 本科生注册人数
      GraduateC: {}, // 研究生总人数
      GraduateE: {}, // 研究生注册人数
      TotalRegisterRate: 0.0,
      TotalUnRegisterRate: 0.0,
    };
  },
  mounted() {
    this.fetchCollegesRegisterData();
    this.initECharts();
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 15) {
        return "#d1ffcc";
      }else if(percentage <30){
        return "#b9f2a1";
      } else if (percentage < 50) {
        return "#6eba8c";
      } else if(percentage < 70){
        return "#0e8174";
      }else{
        return "#0b6d62";
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    fetchCollegesRegisterData() {
      axios
        .get(`${this.$store.getters.getIp}/colleges/list`)
        .then((response) => {
          this.CollegeList = response.data.data;
          // console.log(this.CollegeList);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          console.log(this.$store.getters.getIp);
        });
    },
    calculateRegistrationRate(index) {
      const registerCount = this.CollegeList[index].enrollment;
      const total = this.CollegeList[index].headcount;
      return total === 0 ? 0 : Math.floor((registerCount / total) * 100);
    },
    initECharts() {
      // 获取 ECharts 容器
      const chartContainer = this.$refs.chartContainer;
      // 初始化 ECharts 实例
      this.myChart = echarts.init(chartContainer);
      // 计算环形的宽度
      const ringWidth = 30;
      // 获取本科生和研究生总体注册情况
      axios
        .get(`${this.$store.getters.getIp}/students/register/info`)
        .then((response) => {
          this.UndergraduateC = response.data.data.underCount;
          this.UndergraduateE = response.data.data.underEnrollment;
          this.GraduateC = response.data.data.postCount;
          this.GraduateE = response.data.data.postEnrollment;
          this.TotalRegisterRate = Math.floor(
            ((this.UndergraduateE + this.GraduateE) /
              (this.UndergraduateC + this.GraduateC)) *
              100
          );
          this.TotalUnRegisterRate = 100 - this.TotalRegisterRate;
          console.log(this.TotalRegisterRate);
          console.log(this.TotalUnRegisterRate);
          this.updateChart();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    updateChart() {
      const option = {
        series: [
          {
            type: "pie",
            radius: ["50%", "65%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: this.TotalRegisterRate,
                itemStyle: {
                  color: "#0da699",
                },
              },
              {
                value: this.TotalUnRegisterRate,
                itemStyle: {
                  color: "#e0e0e0",
                },
              },
            ],
          },
        ],
        graphic: [
          {
            type: "text",
            left: "center",
            top: "115px",
            style: {
              text: `当前注册率: ${this.TotalRegisterRate}%`,
              fill: "#000000",
              fontSize: 14,
            },
          },
          {
            type: "text",
            left: "center",
            top: "150px",
            style: {
              text: `${this.TotalRegisterRate}`,
              fill: "#747474",
              fontSize: 40,
            },
          },
        ],
      };
      this.myChart.setOption(option);
    },
    calculateTotalRate(totalCount, enrollmentCount) {
      return totalCount === 0
        ? 0
        : Math.floor((enrollmentCount / totalCount) * 100);
    },
    redirectToPrevious() {
      this.$router.push("/mainMenu/student/integration");
    },
  },
};
</script>