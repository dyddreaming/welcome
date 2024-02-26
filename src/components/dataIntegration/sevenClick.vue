<template>
  <div style="height: 100%; width: 100%; background-color: #ffda9f">
    <div style="position: relative; width: 90%; height: 8%; top: 5%; left: 5%">
      <div style="text-align: center; font-size: 24px; font-weight: 600">
        {{ lastDays[0] }}至{{ lastDays[6] }}广告总点击情况
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 78%;
        top: 5%;
        width: 90%;
        left: 5%;
        background-color: #ffffff;
      "
      id="chartContainer"
    ></div>
    <div style="position: relative; height: 9%; width: 90%; left: 5%; top: 5%">
      <el-button
        type="danger"
        size="mini"
        style="
          background-color: #fa5e00;
          border: none;
          height: 60%;
          position: relative;
          top: 15%;
          border-radius: 10px;
          font-size: 14px;
          left: 92%;
          width: 8%;
        "
        @click="goHome"
        >返回</el-button
      >
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      totalData5: {},
      adNames: [],
      clicks: [],
      time: null,
      lastDays: [],
    };
  },
  mounted() {
    this.initChart();
  },
  created() {
    let rowTime = new Date(this.$store.getters.getAdvertiseTime);
    this.time = `${rowTime.getFullYear()}-${(rowTime.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${rowTime.getDate().toString().padStart(2, "0")}`;
    // console.log("接收到的时间数据:", this.time);
    for (let i = 0; i < 7; i++) {
      const day = new Date(rowTime.getTime() - i * 24 * 60 * 60 * 1000);
      const formattedDay = `${day.getFullYear()}-${(day.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
      this.lastDays.unshift(formattedDay);
    }
    // console.log(this.lastDays);
  },
  methods: {
    initChart() {
      axios
        .get(`${this.$store.getters.getIp}/ads/clicks/seven`)
        .then((response) => {
          this.totalData5 = response.data.data;
          this.adNames = this.totalData5.adNames;
          this.clicks = this.totalData5.clicks;
          // console.log(this.adNames);
          // console.log(this.clicks);
        })
        .catch((error) => {
          console.error("Axios request error:", error);
        });
      var chartContainer = document.getElementById("chartContainer");
      var chart = echarts.init(chartContainer);

      // 图表配置
      var option = {
        xAxis: {
          name: "广告",
          type: "category",
          boundaryGap: false,
          data: this.adNames,
        },
        yAxis: {
          name: "累计点击次数",
          type: "value",
          min: 0,
          max: 1500,
        },
        series: [
          {
            data: this.clicks,
            type: "line",
            itemStyle: {
              color: "rgb(255, 132, 0,1)",
            },
            areaStyle: {
              color: "rgb(255, 132, 0,0.4)",
            },
          },
        ],
      };

      // 使用配置项显示图表
      chart.setOption(option);
    },
    goHome() {
      this.$router.push("/mainMenu/data/integration/advertiseClick");
    },
  },
};
</script>