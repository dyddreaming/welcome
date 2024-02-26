<template>
  <div
    style="
      height: 100vh;
      width: 100vw;
      background-image: url('/static/img/background.png');
      background-size: cover;
      background-position: center top -35px;
    "
  >
    <div style="position: relative; height: 6%; width: 100%">
      <div
        style="
          position: relative;
          left: 3%;
          width: 30%;
          height: 100%;
          color: #ffffff;
          font-family: 'Times New Roman', serif;
        "
      >
        welcome
      </div>
      <div
        style="
          position: absolute;
          top: 0;
          left: 35%;
          width: 30%;
          height: 100%;
          color: #ffffff;
          text-align: center;
          font-size: 24px;
          font-family: '黑体', 'SimHei', sans-serif;
        "
      >
        注册数据可视化
      </div>
      <div
        style="
          position: absolute;
          top: 0;
          right: 46px; /* 将 right 值设为 0 */
          width: 30%;
          height: 100%;
          color: #ffffff;
          font-family: 'Times New Roman', serif;
        "
      >
        {{ currentTime }}
      </div>
    </div>
    <div
      style="
        position: relative;
        width: 90%;
        left: 5%;
        height: 85%;
        top: 4%;
        display: flex;
      "
    >
      <div style="flex: 1; margin-left: 10px">
        <div
          style="
            position: relative;
            height: 5%;
            width: 100%;
            text-align: center;
            color: #ffffff;
            top: 2%;
          "
        >
          各学院注册情况
        </div>
        <div style="position: relative; height: 95%; width: 100%">
          <div
            v-for="(college, index) in CollegeList"
            :key="index"
            class="college-item"
          >
            <p style="margin-left: 20px; font-size: 14px; color: #ffffff">
              {{ college }}
            </p>
            <div style="margin-left: 20px; width: 95%">
              <el-progress
                :percentage="50"
                :stroke-width="8"
                :color="customColor"
                define-back-color="#f5f5f5"
                text-color="#ffffff"
              ></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div style="flex: 2">
        <div
          style="
            height: 100%;
            width: 96%;
            left: 2%;
            position: relative;
            top: 2%;
          "
          ref="mapChart"
        ></div>
      </div>
      <div
        style="
          flex: 1;
          margin-right: 25px;
          display: flex;
          flex-direction: column;
        "
      >
        <div style="flex: 1; margin-bottom: 20px">
          <div
            style="
              position: relative;
              height: 5%;
              width: 100%;
              text-align: center;
              color: #ffffff;
            "
          >
            本科生注册情况
          </div>
          <div
            style="position: relative; height: 95%; width: 100%"
            id="underContainer"
          ></div>
        </div>
        <div style="flex: 1">
          <div
            style="
              position: relative;
              height: 5%;
              width: 100%;
              text-align: center;
              color: #ffffff;
            "
          >
            研究生注册情况
          </div>
          <div
            style="position: relative; height: 95%; width: 100%; top: 8%"
            id="graduateContainer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import * as echarts from "echarts";
import "../charts/china.js";
export default {
  data() {
    return {
      currentTime: "",
      customColor: "#18DBFD",
      CollegeList: ["计算机学院", "信息学院"],
    };
  },
  created() {},
  mounted() {
    this.initUnderChart();
    this.initGraduateChart();
    this.initChartMap();
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      let time = new Date();
      let year = time.getFullYear();
      let month = String(time.getMonth() + 1).padStart(2, "0");
      let day = String(time.getDate()).padStart(2, "0");
      let hour = String(time.getHours()).padStart(2, "0");
      let minute = String(time.getMinutes()).padStart(2, "0");
      let second = String(time.getSeconds()).padStart(2, "0");

      this.currentTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
    initUnderChart() {
      // 初始化图表实例
      var chartDom = document.getElementById("underContainer");
      var myChart = echarts.init(chartDom);

      // 配置选项
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 1048,
                name: "注册人数",
                itemStyle: { color: "#18DBFD" },
              },
              {
                value: 735,
                name: "未注册人数",
                itemStyle: { color: "#1883FD" },
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
    initGraduateChart() {
      var chartDom = document.getElementById("graduateContainer");
      var myChart = echarts.init(chartDom);

      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            type: "pie",
            radius: "70%",
            data: [
              {
                value: 1048,
                name: "注册人数",
                itemStyle: { color: "#18DBFD" },
                label: {
                    show: false
                }
              },
              {
                value: 735,
                name: "未注册人数",
                itemStyle: { color: "#1883FD" },
                label: {
                    show: false
                }
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    initChartMap() {
      let dataList = [
        {
          name: "北京",
          value: 540,
        },
        {
          name: "南海诸岛",
          value: 0,
        },
        {
          name: "天津",
          value: 130,
        },
        {
          name: "上海",
          value: 400,
        },
        {
          name: "重庆",
          value: 750,
        },
        {
          name: "河北",
          value: 103,
        },
        {
          name: "河南",
          value: 830,
        },
        {
          name: "云南",
          value: 110,
        },
        {
          name: "辽宁",
          value: 190,
        },
        {
          name: "黑龙江",
          value: 150,
        },
        {
          name: "湖南",
          value: 690,
        },
        {
          name: "安徽",
          value: 600,
        },
        {
          name: "山东",
          value: 390,
        },
        {
          name: "新疆",
          value: 40,
        },
        {
          name: "江苏",
          value: 310,
        },
        {
          name: "浙江",
          value: 1040,
        },
        {
          name: "江西",
          value: 360,
        },
        {
          name: "湖北",
          value: 1052,
        },
        {
          name: "广西",
          value: 330,
        },
        {
          name: "甘肃",
          value: 70,
        },
        {
          name: "山西",
          value: 90,
        },
        {
          name: "内蒙古",
          value: 70,
        },
        {
          name: "陕西",
          value: 22,
        },
        {
          name: "吉林",
          value: 4,
        },
        {
          name: "福建",
          value: 18,
        },
        {
          name: "贵州",
          value: 5,
        },
        {
          name: "广东",
          value: 98,
        },
        {
          name: "青海",
          value: 1,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 440,
        },
        {
          name: "宁夏",
          value: 4,
        },
        {
          name: "海南",
          value: 22,
        },
        {
          name: "台湾",
          value: 3,
        },
        {
          name: "香港",
          value: 5,
        },
        {
          name: "澳门",
          value: 5,
        },
      ];

      let myChart = echarts.init(this.$refs.mapChart);

      let options = {
        title: {
          text: "首次注册地图",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 30,
          },
        },
        tooltip: {
          triggerOn: "mousemove",
          formatter: function (e, t, n) {
            return e.seriesName + "<br />" + e.name + "：" + e.value;
          },
        },
        // 热力地图
        visualMap: {
          min: 0,
          max: 1000,
          left: 240,
          textStyle: {
            color: "#fff",
          },
          pieces: [
            {
              gt: 700,
              label: "> 700 人",
              color: "#044480",
            },
            {
              gte: 400,
              lte: 700,
              label: "400 - 700 人",
              color: "#0444ab",
            },
            {
              gte: 100,
              lt: 400,
              label: "100 - 400 人",
              color: "#0d7fe9",
            },
            {
              gte: 0,
              lt: 100,
              label: "< 100 人",
              color: "#2dc3f4",
            },
          ],
        },

        series: [
          {
            name: "注册数",
            data: dataList,
            type: "map",
            map: "china",
            zoom: 1.2,
            aspectScale: 0.75,
            label: {
              // 默认文本标签样式
              normal: {
                color: "white",
                show: true,
              },
              // 高亮文本标签样式
              emphasis: {
                color: "yellow",
                fontSize: 22,
                fontWeight: "bold",
              },
            },
            itemStyle: {
              // 默认区域样式
              normal: {
                // 区域背景透明
                areaColor: "transparent",
                borderColor: "rgba(39,211,233, 1)",
                borderWidth: 1,
              },
              // 高亮区域样式
              emphasis: {
                // 高亮区域背景色
                areaColor: "#01ADF2",
              },
            },
          },
        ],
      };

      myChart.setOption(options);
    },
  },
};
</script>