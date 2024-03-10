<template>
  <div
    class="app-main"
    style="
      position: relative;
      background-color: #f0f3f4;
      height: 100vh;
      overflow-y: auto;
    "
  >
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
        数据调取集成
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
            >数据调取集成</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div style="position: relative; height: 260%; top: 1%">
      <!-- 第一行 -->
      <div style="position: relative; height: 34%">
        <div
          style="
            position: relative;
            height: 46%;
            background-color: #ffffff;
            width: 96%;
            left: 2%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            color: #747474;
          "
        >
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
              position: relative;
              width: 80%;
              height: 8%;
              top: 4%;
              left: 10%;
            "
          >
            <span style="margin-right: 10px">时间:</span>
            <el-date-picker
              v-model="dateValue1"
              type="date"
              placeholder="选择日期"
              style="height: 40px !important; width: 20%"
            >
            </el-date-picker>
          </div>
          <div
            style="height: 90%; width: 100%; position: relative; top: 2%"
            ref="comChartContainer"
          ></div>
        </div>
        <div
          style="
            position: relative;
            height: 46%;
            width: 96%;
            background-color: #ffffff;
            left: 2%;
            top: 4%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            color: #747474;
          "
        >
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-end;
              position: relative;
              height: 15%;
              width: 80%;
              left: 10%;
              top: 1%;
            "
          >
            <span style="margin-right: 10px">时间:</span>
            <el-date-picker
              v-model="dateValue2"
              type="date"
              placeholder="选择日期"
              style="height: 40px !important; width: 20%"
            >
            </el-date-picker>
          </div>
          <div
            style="height: 90%; width: 100%; position: relative"
            ref="inChartContainer"
          ></div>
        </div>
      </div>
      <!-- 第二行 -->
      <div style="position: relative; height: 33%; display: flex">
        <!-- 广告点击情况 -->
        <div
          style="
            position: relative;
            height: 92%;
            background-color: #ffffff;
            width: 47%;
            left: 2%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            top: 2%;
          "
        >
          <!-- 选择部分 -->
          <div
            style="
              position: relative;
              height: 10%;
              color: #747474;
              width: 98%;
              left: 1%;
              display: flex;
            "
          >
            <div
              style="
                margin-right: 10px;
                width: 35%;
                display: flex;
                align-items: center;
              "
            >
              <span style="margin-right: 10px">类型:</span>
              <el-select
                v-model="type"
                placeholder="请选择"
                style="height: 40px !important; width: 70%"
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div
              style="
                margin-right: 10px;
                width: 44%;
                display: flex;
                align-items: center;
              "
            >
              <span style="margin-right: 10px">点击次数下限:</span>
              <el-input
                v-model="threshold"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 45%"
              >
              </el-input>
            </div>
            <div
              style="
                margin-right: 10px;
                width: 43%;
                display: flex;
                align-items: center;
              "
            >
              <span style="margin-right: 10px">时间:</span>
              <el-date-picker
                v-model="dateValue"
                type="date"
                placeholder="选择日期"
                style="height: 40px !important; width: 67%"
              ></el-date-picker>
            </div>
          </div>
          <!-- 数据部分 -->
          <div style="position: relative; height: 82%; width: 100%">
            <diV
              style="
                position: relative;
                height: 5%;
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: 600;
                color: #747474;
              "
              >{{ dateString }}广告点击情况
            </diV>
            <div
              style="position: relative; height: 95%; width: 100%"
              id="chartContainer"
            ></div>
          </div>
          <!-- 按钮部分 -->
          <div
            style="
              position: relative;
              height: 5%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-end;
              top: 1%;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #0da699; border: #0da699"
              size="small"
              @click="seeDetail"
              >七日点击情况</el-button
            >
          </div>
        </div>
        <!-- 关键词云 -->
        <div
          style="
            position: relative;
            height: 92%;
            width: 47%;
            background-color: #ffffff;
            left: 4%;
            top: 2%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
          "
        >
          <!-- 搜索部分 -->
          <div
            style="
              position: relative;
              height: 10%;
              width: 98%;
              left: 1%;
              display: flex;
              color: #747474;
            "
          >
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
              "
            >
              <span style="margin-right: 10px">时间:</span>
              <el-date-picker
                v-model="dateValue5"
                type="date"
                placeholder="选择日期"
                style="height: 40px !important; width: 45%"
              ></el-date-picker>
            </div>
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
              "
            >
              <span style="margin-right: 10px">搜索次数下限:</span>
              <el-input
                v-model="threshold2"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 45%"
              ></el-input>
            </div>
          </div>
          <!-- 数据部分 -->
          <div style="position: relative; height: 90%; width: 98%; left: 1%">
            <div
              style="position: relative; height: 100%; width: 100%"
              id="wordCloud"
            ></div>
          </div>
        </div>
      </div>
      <!-- 第三行 -->
      <div style="position: relative; height: 33%">
        <div
          style="
            position: relative;
            height: 96%;
            width: 96%;
            left: 2%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          "
        >
          <!-- 首次注册地图 -->
          <div
            style="position: relative; height: 100%; width: 100%;"
            id="Map"
            ref="map"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../public/static/css/aside.css";

/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474;
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
import "echarts-wordcloud";
import * as echarts from "echarts";
import axios from "axios";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Tile as TileLayer, Heatmap as HeatmapLayer } from "ol/layer";
import Proj from "ol/proj/Projection";
import XYZ from "ol/source/XYZ";
import { Map, View, Feature, ol } from "ol";
import { Style, Stroke, Fill } from "ol/style";
import { Polygon, Point } from "ol/geom";
import { defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import areaGeo from "../../assets/province/510000.json";
export default {
  data() {
    return {
      searchWord: "",
      dateValue1: "",
      dateValue2: "",
      totalData2: {},
      totalData3: {},
      studentIds: [],
      compCount: [],
      taskNames: [],
      parCount: [],
      threshold: "",
      dateValue: "",
      dateString: "",
      totalData4: {},
      adNames: [],
      clicks: [],
      totalData6: {},
      threshold2: "",
      dateValue5: "",
      keywords: [],
      timesList: [],
      type: "全部",
      typeOptions: [
        {
          value: "全部",
          label: "全部",
        },
        {
          value: "社团",
          label: "社团",
        },
        {
          value: "兼职",
          label: "兼职",
        },
        {
          value: "美食",
          label: "美食",
        },
        {
          value: "娱乐",
          label: "娱乐",
        },
      ],
      wordData: [
        {
          name: "十九大精神",
          value: 15000,
        },
        {
          name: "两学一做",
          value: 10081,
        },
        {
          name: "中华民族",
          value: 9386,
        },
        {
          name: "马克思主义",
          value: 7500,
        },
        {
          name: "民族复兴",
          value: 7500,
        },
        {
          name: "社会主义制度",
          value: 6500,
        },
        {
          name: "国防白皮书",
          value: 6500,
        },
        {
          name: "创新",
          value: 6000,
        },
        {
          name: "民主革命",
          value: 4500,
        },
        {
          name: "文化强国",
          value: 3800,
        },
        {
          name: "国家主权",
          value: 3000,
        },
        {
          name: "伟大复兴",
          value: 2500,
        },
        {
          name: "领土完整",
          value: 2300,
        },
        {
          name: "安全",
          value: 2000,
        },
        {
          name: "从严治党",
          value: 1900,
        },
        {
          name: "现代化经济体系",
          value: 1800,
        },
        {
          name: "国防动员",
          value: 1700,
        },
        {
          name: "信息化战争",
          value: 1600,
        },
        {
          name: "局部战争",
          value: 1500,
        },
        {
          name: "教育",
          value: 1200,
        },
        {
          name: "中国梦",
          value: 1100,
        },
        {
          name: "孙子兵法",
          value: 900,
        },
        {
          name: "一国两制",
          value: 800,
        },
      ],
      map: null,
      totalData9: {},
      areaName: [],
      areaNumber: [],
    };
  },
  watch: {
    dateValue1() {
      this.renderComChart();
    },
    dateValue2() {
      this.renderJoinChart();
    },
    threshold() {
      this.loadData();
    },
    dateValue() {
      this.loadData();
    },
    type() {
      this.loadData();
    },
  },
  mounted() {
    let currentDate = new Date();
    this.dateValue1 = currentDate;
    this.dateValue2 = currentDate;
    this.renderComChart();
    this.renderJoinChart();
    this.dateValue = currentDate;
    // console.log(this.dateValue);
    let date = new Date(this.dateValue);
    this.dateString = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
    // 加载图表
    this.loadData();
    this.dateValue5 = currentDate.toISOString();
    this.initChart();
    this.getData().then(() => {
      this.initMap(); // 初始化地图
      this.addArea(Array.from(areaGeo)); // 添加四川省的边界描边和填充
      this.addHeatMap(); // 添加热力图数据
    });
  },
  methods: {
    // 完成任务排行榜
    renderComChart() {
      // 时间格式化
      const date1 = new Date(this.dateValue1);
      const year = date1.getFullYear();
      const month = (date1.getMonth() + 1).toString().padStart(2, "0");
      const day = date1.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day} 00:00:00`;
      // console.log("dateValue1:",formattedDate);

      axios
        .get(`${this.$store.getters.getIp}/tasks/students/completion/rank`, {
          params: {
            time: formattedDate,
          },
        })
        .then((response) => {
          this.totalData2 = response.data.data;
          this.studentIds = this.totalData2.studentIds;
          this.compCount = this.totalData2.compCount;
          // console.log(this.studentIds);
          // console.log(this.compCount);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      let dataAxis = this.studentIds;
      let data = this.compCount;
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.comChartContainer);

      let date = new Date(this.dateValue1);
      let dateString = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;

      let option = {
        grid: {
          top: "30%",
        },
        title: {
          text: `${dateString}完成任务排行榜`,
          textStyle: {
            color: "#747474", // 设置字体颜色
            fontSize: 18,
          },
        },
        xAxis: {
          name: "用户名",
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#999",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          name: "完成任务数",
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            label: {
              show: true,
              position: "top",
            },
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#62bbb2" },
                { offset: 0.5, color: "#62bbb2" },
                { offset: 1, color: "#6cc4de" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#62bbb2" },
                  { offset: 0.7, color: "#62bbb2" },
                  { offset: 1, color: "#6cc4de" },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      const zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
            ],
        });
      });

      myChart.setOption(option);
    },
    // 参与人数排行榜
    renderJoinChart() {
      // 时间格式化
      const date1 = new Date(this.dateValue2);
      const year = date1.getFullYear();
      const month = (date1.getMonth() + 1).toString().padStart(2, "0");
      const day = date1.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day} 00:00:00`;
      // console.log("dateValue2:",formattedDate);

      axios
        .get(`${this.$store.getters.getIp}/tasks/students/participant/rank`, {
          params: {
            time: formattedDate,
          },
        })
        .then((response) => {
          this.totalData3 = response.data.data;
          this.taskNames = this.totalData3.taskNames;
          this.parCount = this.totalData3.parCount;
          // console.log(this.studentIds);
          // console.log(this.compCount);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      let dataAxis = this.taskNames;
      let data = this.parCount;
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.inChartContainer);

      let date = new Date(this.dateValue2);
      let dateString = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;

      let option = {
        grid: {
          top: "30%",
        },
        title: {
          text: `${dateString}参与人数排行榜`,
          textStyle: {
            color: "#747474", // 设置字体颜色
            fontSize: 18,
          },
        },
        xAxis: {
          name: "任务名",
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#999",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          name: "人数",
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            label: {
              show: true,
              position: "top",
            },
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#b9f2a1" },
                { offset: 0.5, color: "#6eba8c" },
                { offset: 1, color: "#0da699" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#b9f2a1" },
                  { offset: 0.7, color: "#6eba8c" },
                  { offset: 1, color: "#0da699" },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      const zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
            ],
        });
      });

      myChart.setOption(option);
    },
    // 获取当日广告点击情况
    loadData() {
      // 类型
      let category = null;
      if (this.type !== "全部") {
        if (this.type === "社团") {
          category = 0;
        } else if (this.type === "兼职") {
          category = 1;
        } else if (this.type === "美食") {
          category = 2;
        } else if (this.type === "娱乐") {
          category = 3;
        }
      }

      // 时间格式化
      const date1 = new Date(this.dateValue);
      const year = date1.getFullYear();
      const month = (date1.getMonth() + 1).toString().padStart(2, "0");
      const day = date1.getDate().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      // console.log("dateValue1:",formattedDate);

      let url = `${this.$store.getters.getIp}/ads/clicks/daily?${
        category !== null ? `category=${category}&` : ""
      }time=${formattedDate}${
        this.threshold !== "" ? `&floor=${this.threshold}` : ""
      }`;

      axios
        .get(url)
        .then((response) => {
          this.totalData4 = response.data.data;
          this.adNames = this.totalData4.adNames;
          this.clicks = this.totalData4.clicks;
          // console.log(this.totalData4);
          // console.log(this.adNames);
          // console.log(this.clicks);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      var chartContainer = document.getElementById("chartContainer");
      var myChart = echarts.init(chartContainer);
      let option = {
        dataset: {
          source: [
            ["heat", "amount", "advertise"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [44.4, 41032, "Cheese Cocoa"],
            [20.1, 12755, "Cheese Brownie"],
            [89.7, 56667, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [89.6, 91852, "Orange Juice"],
            [90.6, 101852, "Lemon Juice"],
            [32.7, 20112, "Walnut Brownie"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "次数", min: 0, max: 120000 },
        yAxis: { type: "category", name: "广告" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Click", "Low Click"],
          dimension: 0,
          inRange: {
            color: ["#6eba8c", "#6cc4de", "#10c4b5"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              x: "amount",
              y: "advertise",
            },
          },
        ],
      };

      myChart.setOption(option);
    },
    // 查看7日点击情况
    seeDetail() {
      this.$store.commit("setAdvertiseTime", this.dateValue);
      this.$nextTick(() => {
        this.$router.push("/sevenClick");
        // console.log("查看7日点击情况");
      });
    },
    // 生成搜索词云
    initChart() {
      axios
        .get(`${this.$store.getters.getIp}/keywords/times/daily`)
        .then((response) => {
          this.totalData5 = response.data.data;
          console.log(this.totalData5);
          this.keywords = this.totalData5.keywords;
          this.timesList = this.totalData5.timesList;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      var dateParts = this.dateValue5.split("T")[0].split("-");
      var year = dateParts[0];
      var month = dateParts[1];
      var day = dateParts[2];
      var formattedDate = year + "年" + month + "月" + day + "日";

      this.chart = echarts.init(document.getElementById("wordCloud"));
      const option = {
        title: {
          text: `${formattedDate}搜索关键词云`,
          x: "center",
          textStyle: {
            color: "#747474", // 设置字体颜色
            fontSize: 18,
          },
        },
        backgroundColor: "#fff",
        series: [
          {
            type: "wordCloud",
            shape: "pentagon",
            //用来调整词之间的距离
            gridSize: 30,
            //用来调整字的大小范围
            sizeRange: [14, 60],
            rotationRange: [0, 0],
            textStyle: {
              color: function () {
                var colors = ["#2aa296", "#57bdda"]; // 蓝色和绿色系的颜色数组
                return colors[Math.floor(Math.random() * colors.length)];
              },
            },
            left: "center", // 水平居中
            top: "middle", // 垂直居中
            width: "100%", // 词云宽度
            height: "90%", // 词云高度
            data: this.wordData,
            emphasis: {
              focus: "self",
              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
          },
        ],
      };
      this.chart.setOption(option);

      this.chart.on("mouseover", "series", function (params) {
        var clickCount = params.data.value;
        var tooltip = document.getElementById("tooltip");
        if (!tooltip) {
          tooltip = document.createElement("div");
          tooltip.id = "tooltip";
          tooltip.style.position = "absolute";
          tooltip.style.background = "rgba(255, 255, 255, 0.8)";
          tooltip.style.padding = "5px";
          tooltip.style.borderRadius = "5px"; // 添加圆角
          // tooltip.style.border = "1px solid #ddd"; // 添加边框
          tooltip.style.fontSize = "16px"; // 调整字体大小
          tooltip.style.color = "#747474"; // 调整字体颜色
          document.body.appendChild(tooltip);
        }
        tooltip.innerHTML = "搜索次数：" + clickCount;
        // 计算右下角位置
        var offsetX = params.event.offsetX;
        var offsetY = params.event.offsetY;
        var tooltipWidth = tooltip.offsetWidth;
        var tooltipHeight = tooltip.offsetHeight;
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        tooltip.style.left = viewportWidth - offsetX - tooltipWidth - 10 + "px"; // 调整左侧位置
        tooltip.style.top =
          viewportHeight - offsetY - tooltipHeight - 10 + "px"; // 调整顶部位置
      });
      this.chart.on("mouseout", function () {
        var tooltip = document.getElementById("tooltip");
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
        }
      });
    },
    // 生成首次注册地图
    getData() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/location`)
        .then((response) => {
          this.totalData9 = response.data.data;
          // console.log(this.totalData9);
          this.areaName = this.totalData9.addresses;
          this.areaNumber = this.totalData9.addressCounts;
          // console.log("注册地:", this.areaName);
          // console.log("注册人数:", this.areaNumber);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 初始化地图
    initMap() {
      this.map = new Map({
        target: "Map",
        controls: defaultControls({
          zoom: true,
        }).extend([]),
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([104.065735, 35.959962]),
          zoom: 4.5,
          maxZoom: 8,
          minZoom: 4.5,
        }),
      });
    },
    // 设置区域
    addArea(geo = []) {
      if (geo.length == 0) {
        return false;
      }
      let features = [];
      geo.forEach((g) => {
        let lineData = g.features[0];
        let routeFeature = "";
        if (lineData.geometry.type == "MultiPolygon") {
          routeFeature = new Feature({
            geometry: new MultiPolygon(lineData.geometry.coordinates).transform(
              "EPSG:4326",
              "EPSG:3857"
            ),
          });
        } else if (lineData.geometry.type == "Polygon") {
          routeFeature = new Feature({
            geometry: new Polygon(lineData.geometry.coordinates).transform(
              "EPSG:4326",
              "EPSG:3857"
            ),
          });
        }
        routeFeature.setStyle(
          new Style({
            fill: new Fill({
              color: "#4e98f444",
            }),
            stroke: new Stroke({
              width: 3,
              color: [71, 137, 227, 1],
            }),
          })
        );
        features.push(routeFeature);
      });
      // 设置图层
      let routeLayer = new VectorLayer({
        source: new VectorSource({
          features: features,
        }),
      });
      // 添加图层
      this.map.addLayer(routeLayer);
    },
    // 添加热力图
    addHeatMap() {
      let colors = ["#2200FF", "#16D9CC", "#4DEE12", "#E8D225", "#EF1616"];
      let hatmapData = [];
      for (let i = 0; i < this.areaName.length; i++) {
        const name = this.areaName[i];
        const number = this.areaNumber[i];
        for (let j = 0; j < number; j++) {
          hatmapData.push({ name: name });
        }
      }
      console.log(hatmapData);
      let codeList = {
        四川省: { center: { lng: 104.061902, lat: 30.609503 } },
        云南省: { center: { lng: 101.592433, lat: 24.864212 } },
        广东省: { center: { lng: 113.26653, lat: 23.132191 } },
        北京市: { center: { lng: 116.407526, lat: 39.90403 } },
        浙江省: { center: { lng: 120.152792, lat: 30.267447 } },
        江苏省: { center: { lng: 118.796877, lat: 32.060255 } },
        重庆市: { center: { lng: 106.504959, lat: 29.533155 } },
        安徽省: { center: { lng: 117.329949, lat: 31.733806 } },
        福建省: { center: { lng: 119.295143, lat: 26.10078 } },
        甘肃省: { center: { lng: 103.823557, lat: 36.058039 } },
        广西壮族自治区: { center: { lng: 108.320004, lat: 22.82402 } },
        贵州省: { center: { lng: 106.713478, lat: 26.578343 } },
        海南省: { center: { lng: 110.349228, lat: 20.017377 } },
        河北省: { center: { lng: 114.530828, lat: 38.037057 } },
        黑龙江省: { center: { lng: 126.642464, lat: 45.756967 } },
        湖北省: { center: { lng: 114.298572, lat: 30.584355 } },
        湖南省: { center: { lng: 112.982279, lat: 28.19409 } },
        吉林省: { center: { lng: 125.3245, lat: 43.886841 } },
        江西省: { center: { lng: 115.816654, lat: 28.77829 } },
        辽宁省: { center: { lng: 123.429096, lat: 41.796767 } },
        内蒙古自治区: { center: { lng: 111.670801, lat: 40.818311 } },
        宁夏回族自治区: { center: { lng: 106.278179, lat: 38.46637 } },
        青海省: { center: { lng: 101.780268, lat: 36.620939 } },
        山东省: { center: { lng: 117.000923, lat: 36.675808 } },
        上海市: { center: { lng: 121.473701, lat: 31.230416 } },
        山西省: { center: { lng: 112.562678, lat: 37.873499 } },
        陕西省: { center: { lng: 108.948024, lat: 34.263161 } },
        天津市: { center: { lng: 117.200983, lat: 39.084158 } },
        新疆维吾尔自治区: { center: { lng: 87.617733, lat: 43.792818 } },
        西藏自治区: { center: { lng: 91.132212, lat: 29.660361 } },
        河南省: { center: { lng: 113.753394, lat: 34.765869 } },
        澳门特别行政区: { center: { lng: 113.54909, lat: 22.198951 } },
        香港特别行政区: { center: { lng: 114.173355, lat: 22.320048 } },
      };
      this.layer = new HeatmapLayer({
        source: new VectorSource(),
        blur: 30,
        radius: 15,
        gradient: colors,
      });
      this.map.addLayer(this.layer);
      this.AppendFeatures(hatmapData, colors, codeList, 50);
    },
    // 增加要素至热力图
    AppendFeatures(hatmapData, colors, points, max) {
      for (var i in hatmapData) {
        if (points[hatmapData[i].name]) {
          var coords = points[hatmapData[i].name];
          this.max = max;
          var f = new Feature({
            geometry: new Point(
              fromLonLat([coords.center.lng, coords.center.lat])
            ),
          });
          this.layer.getSource().addFeature(f);
        }
      }
    },
  },
};
</script>