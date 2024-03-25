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
    <div style="position: relative; height: 260%; top: 1%; width: 100%">
      <!-- 第一行 -->
      <div style="position: relative; height: 34%; width: 100%">
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
      <div style="position: relative; height: 33%; display: flex; width: 100%">
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
      <div style="position:relative;height:2%;width:100%;display: flex;
      justify-content: center;color:#747474;
      align-items: center;"><h3>首次注册地图</h3></div>
      <!-- 第三行 -->
      <div style="position: relative; height: 33%; width: 100%">
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
            style="position: relative; height: 100%; width: 100%"
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
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
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
      threshold2: null,
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
        // {
        //   name: "十九大精神",
        //   value: 15000,
        // },
        // {
        //   name: "两学一做",
        //   value: 10081,
        // },
        // {
        //   name: "中华民族",
        //   value: 9386,
        // },
        // {
        //   name: "马克思主义",
        //   value: 7500,
        // },
        // {
        //   name: "民族复兴",
        //   value: 7500,
        // },
        // {
        //   name: "社会主义制度",
        //   value: 6500,
        // },
        // {
        //   name: "国防白皮书",
        //   value: 6500,
        // },
        // {
        //   name: "创新",
        //   value: 6000,
        // },
        // {
        //   name: "民主革命",
        //   value: 4500,
        // },
        // {
        //   name: "文化强国",
        //   value: 3800,
        // },
        // {
        //   name: "国家主权",
        //   value: 3000,
        // },
        // {
        //   name: "伟大复兴",
        //   value: 2500,
        // },
        // {
        //   name: "领土完整",
        //   value: 2300,
        // },
        // {
        //   name: "安全",
        //   value: 2000,
        // },
        // {
        //   name: "从严治党",
        //   value: 1900,
        // },
        // {
        //   name: "现代化经济体系",
        //   value: 1800,
        // },
        // {
        //   name: "国防动员",
        //   value: 1700,
        // },
        // {
        //   name: "信息化战争",
        //   value: 1600,
        // },
        // {
        //   name: "局部战争",
        //   value: 1500,
        // },
        // {
        //   name: "教育",
        //   value: 1200,
        // },
        // {
        //   name: "中国梦",
        //   value: 1100,
        // },
        // {
        //   name: "孙子兵法",
        //   value: 900,
        // },
        // {
        //   name: "一国两制",
        //   value: 800,
        // },
      ],
      map: null,
      totalData9: {},
      areaName: [],
      areaNumber: [],
      source:null,
    };
  },
  watch: {
    dateValue1() {
      console.log("dateValue1", this.dateValue1);
      this.getList1().then(() => {
        this.renderComChart();
      });
    },
    dateValue2() {
      console.log("dateValue2", this.dateValue2);
      this.getList2().then(() => {
        this.renderJoinChart();
      });
    },
    threshold() {
      this.loadSource().then(() => {
        this.loadData();
      });
    },
    dateValue() {
      this.loadSource().then(() => {
        this.loadData();
      });
    },
    type() {
      this.loadSource().then(() => {
        this.loadData();
      });
    },
    dateValue5() {
      console.log("dateValue5", this.dateValue5);
      this.getWord().then(() => {
        this.initChart();
      });
    },
    threshold2() {
      this.getWord().then(() => {
        this.initChart();
      });
    },
  },
  mounted() {
    let currentDate = new Date("2024-03-15");
    this.dateValue1 = currentDate;
    this.dateValue2 = currentDate;
    this.dateValue5 = currentDate;
    // this.getList1().then(() => {
    //   this.renderComChart();
    // });
    // this.getList2().then(() => {
    //   this.renderJoinChart();
    // });
    // this.getWord().then(() => {
    //   this.initChart();
    // });
    this.dateValue = new Date("2024-03-16");
    let date = new Date(this.dateValue);
    this.dateString = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
    // this.loadSource().then(() => {
    //     this.loadData();
    //   });
    this.getData().then(() => {
      this.initMap();
      this.addArea(Array.from(areaGeo));
      this.addHeatMap();
    });
  },
  methods: {
    // 获取完成任务排行榜
    getList1() {
      return new Promise((resolve, reject) => {
        // 时间格式化
        const date1 = new Date(this.dateValue1);
        const year = date1.getFullYear();
        const month = (date1.getMonth() + 1).toString().padStart(2, "0");
        const day = date1.getDate().toString().padStart(2, "0");
        const formattedDate = `${year}-${month}-${day} 00:00:00`;

        axios
          .get(`${this.$store.getters.getIp}/tasks/students/completion/rank`, {
            params: {
              time: "2024-03-15 00:00:00",
            },
          })
          .then((response) => {
            this.totalData2 = response.data.data;
            this.studentIds = this.totalData2.studentIds;
            this.compCount = this.totalData2.compCount;
            // console.log(this.studentIds);
            // console.log(this.compCount);
            resolve(); // 异步操作完成后 resolve
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error); // 出错时 reject
          });
      });
    },
    // 获取参与人数排行榜
    getList2() {
      return new Promise((resolve, reject) => {
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
              time: "2024-03-15 00:00:00",
            },
          })
          .then((response) => {
            this.totalData3 = response.data.data;
            this.taskNames = this.totalData3.taskNames;
            this.parCount = this.totalData3.parCount;
            // console.log(this.studentIds);
            // console.log(this.compCount);
            resolve(); // 异步操作完成后 resolve
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error); // 出错时 reject
          });
      });
    },
    // 完成任务排行榜
    renderComChart() {
      let dataAxis = this.studentIds;
      // console.log(this.studentIds);
      // console.log(dataAxis);
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
          name: "学号",
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
    loadSource(){
      return new Promise((resolve, reject) => {
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
          // console.log("广告名称",this.adNames);
          // console.log("点击次数",this.clicks);
          this.source = [
            ["heat", "amount", "advertise"],
            // [89.3, 58212, "Matcha Latte"],
            // [57.1, 78254, "Milk Tea"],
            // [44.4, 41032, "Cheese Cocoa"],
            // [20.1, 12755, "Cheese Brownie"],
            // [89.7, 56667, "Matcha Cocoa"],
            // [68.1, 79146, "Tea"],
            // [89.6, 91852, "Orange Juice"],
            // [90.6, 101852, "Lemon Juice"],
            // [32.7, 20112, "Walnut Brownie"],
          ];
          for (let i = 0; i < this.adNames.length; i++) {
            let heat =
              10 +
              ((this.clicks[i] - Math.min(...this.clicks)) /
                (Math.max(...this.clicks) - Math.min(...this.clicks))) *
                90;
            let item = [heat, this.clicks[i], this.adNames[i]];
            this.source.push(item);
          }
          resolve(); // 异步操作完成后 resolve
          // console.log(this.source);
        })
        .catch((error) => {
          reject(error); // 出错时 reject
          console.error("Error fetching data:", error);
        });
      })
    },
    // 获取当日广告点击情况
    loadData() {
      console.log(this.source);
      var chartContainer = document.getElementById("chartContainer");
      var myChart = echarts.init(chartContainer);
      let option = {
        dataset: {
          source: this.source,
        },
        grid: { containLabel: true },
        xAxis: { name: "次数", min: 0, max: 40000 },
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
        this.$router.push("/mainMenu/data/sevenClick");
        // console.log("查看7日点击情况");
      });
    },
    // 获取关键词
    getWord() {
      return new Promise((resolve, reject) => {
        // 时间格式化
        const date1 = new Date(this.dateValue5);
        const year = date1.getFullYear();
        const month = (date1.getMonth() + 1).toString().padStart(2, "0");
        const day = date1.getDate().toString().padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        this.wordData = [];
        let floor = 0;
        if (this.threshold2) {
          floor = this.threshold2;
        }
        axios
          .get(`${this.$store.getters.getIp}/keywords/times/daily`, {
            params: {
              time: "2024-03-15",
              floor: floor,
            },
          })
          .then((response) => {
            this.totalData5 = response.data.data;
            // console.log(this.totalData5);
            this.keywords = this.totalData5.keywords;
            this.timesList = this.totalData5.timesList;
            // console.log(this.keywords);
            // console.log(this.timesList);
            this.keywords.forEach((item, index) => {
              this.wordData.push({
                name: this.keywords[index],
                value: this.timesList[index],
              });
            });
            resolve(); // 异步操作完成后 resolve
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            reject(error); // 出错时 reject
          });
      });
    },
    // 生成搜索词云
    initChart() {
      let date = new Date(this.dateValue5);
      let dateString = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;

      this.chart = echarts.init(document.getElementById("wordCloud"));
      const option = {
        title: {
          text: `${dateString}搜索关键词云`,
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
      let colors = ["#E8D225", "#16D9CC", "#4DEE12", "#2200FF", "#0e8174"];
      let hatmapData = [];
      for (let i = 0; i < this.areaName.length; i++) {
        const name = this.areaName[i];
        const number = this.areaNumber[i];
        for (let j = 0; j < number; j++) {
          hatmapData.push({ name: name });
        }
      }
      // console.log(hatmapData);
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
        radius: 4.5,
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