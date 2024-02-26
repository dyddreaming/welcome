<template>
  <div
    style="
      height: 100vh;
      width: 100vw;
      background-image: url('/static/img/background3.png');
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
        广告数据可视化
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
        height: 89%;
        width: 100%;
        top: 2%;
        display: flex;
      "
    >
      <div style="position: relative; height: 100%; width: 42%; left: 6%">
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
          当日点击量排行榜
        </div>
        <div
          style="position: relative; height: 95%; width: 100%"
          id="chartContainer"
        ></div>
      </div>
      <div style="position: relative; height: 100%; width: 42%; left: 10%">
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
          7日点击量排行榜
        </div>
        <div
          style="position: relative; height: 95%; width: 100%"
          id="sevenContainer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      currentTime: "",
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.loadData();
    this.initChart();
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
    loadData() {
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
        textStyle: { color: "white" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Click", "Low Click"],
          textStyle: {
            color: "white",
          },
          dimension: 0,
          inRange: {
            color: ["#6BE8CF", "#9FE0FF", "#0F5DC0"],
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
    initChart() {
      var chartContainer = document.getElementById("sevenContainer");
      var chart = echarts.init(chartContainer);

      // 图表配置
      var option = {
        xAxis: {
          name: "广告",
          type: "category",
          boundaryGap: false,
          data: [
            "舞蹈社招新",
            "烤匠",
            "xxxx",
            "yyy",
            "zzz",
            "xxxxx",
            "xxxxxxx",
          ],
        },
        yAxis: {
          name: "累计点击次数",
          type: "value",
          min: 0,
          max: 1500,
        },
        textStyle: { color: "white" },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
              color: "rgb(24, 219, 253,1)",
            },
            areaStyle: {
              color: "rgb(24, 219, 253,0.4)",
            },
          },
        ],
      };

      // 使用配置项显示图表
      chart.setOption(option);
    },
  },
};
</script>