<template>
  <div class="app-main" style="position: relative">
    <el-button
      type="danger"
      round
      id="reviewSituation"
      style="background-color: #fa5e00; border-radius: 5px"
      @click="redirectToPrevious"
      >往日注册情况
    </el-button>

    <div style="margin-top: 71px; text-align: center">
      <h2
        style="
          color: #fa5e00;
          display: inline-block;
          margin-right: 220px;
          margin-left: 0;
        "
      >
        总体累计注册情况
      </h2>
      <h2
        style="
          color: #fa5e00;
          display: inline-block;
          margin-left: 220px;
          margin-right: 0;
        "
      >
        各学院累计注册情况
      </h2>
    </div>
    <!-- 横线 -->
    <hr
      style="
        width: 99%;
        border: 1.5px solid #ffffff;
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
        height: calc(100% - 170px);
        border-left: 2px solid #ffffff;
      "
    ></div>
    <!-- 左侧内容 -->
    <div
      style="
        position: absolute;
        left: 0;
        top: 175px;
        bottom: 0;
        width: 50%;
        border-right: 2px solid #ffffff;
      "
    >
      <!-- 上方环形进度图 -->
      <div ref="chartContainer" style="width: 100%; height: 50%"></div>
      <!-- 下侧进度条 -->
      <div style="width: 100%; height: 50%">
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
            <p style="display: inline; font-size: 14px">单位: 人数</p>
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
            <p style="display: inline; font-size: 12px; margin-right: 560px">
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
          <p style="display: inline; font-size: 14px">单位:人数</p>
          <div style="margin-left: 20px; width: 95%">
            <el-progress
              :percentage="calculateTotalRate(GraduateC, GraduateE)"
              :color="customColor"
              :stroke-width="13"
              :show-text="false"
            ></el-progress>
          </div>
          <div style="margin-left: 20px">
            <p style="display: inline; font-size: 12px; margin-right: 560px">
              {{ GraduateE }}
            </p>
            <p style="display: inline; font-size: 12px">{{ GraduateC }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧内容 -->
    <!-- 各学院累计注册情况 -->
    <div
      style="
        position: absolute;
        left: 52%;
        top: 170px;
        bottom: 20px;
        width: 46%;
        background-color: #ffffff;
        border-radius: 10px;
        overflow-y: auto;
        max-height: 570px;
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
</template>

<style>
  @import "../../public/static/css/aside.css";
</style>

<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  data() {
    return {
      customColor: "#FA5E00",
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
      if (percentage < 30) {
        return "#FFD023";
      } else if (percentage < 70) {
        return "#F89100";
      } else {
        return "#FA5E00";
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
                  color: "#FA5E00",
                },
              },
              {
                value: this.TotalUnRegisterRate,
                itemStyle: {
                  color: "#FFFFFF",
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
              fill: "#FA5E00",
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

    redirectToPrevious(){
      this.$router.push("/totalPrevious");
    },
  },
};
</script>