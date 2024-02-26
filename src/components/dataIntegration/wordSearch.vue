<template>
  <div
    style="
      height: 100%;
      width: 90%;
      left: 5%;
      position: relative;
      background-color: #ffffff;
    "
  >
  <div style="height: 8%; display: flex; align-items: center;">
    <div style="display: flex; justify-content: center; align-items: center; width: 50%;">
      <span style="margin-right: 10px;">时间:</span>
      <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" style="height: 40px !important; width: 38%;"></el-date-picker>
    </div>
    <div style="display: flex; justify-content: center; align-items: center; width: 50%;">
      <span style="margin-right: 10px;">点击次数下限:</span>
      <el-input v-model="threshold" placeholder="请输入" style="position: relative; height: 40px !important; width: 38%;"></el-input>
    </div>
  </div>

    <div
      style="position: relative; height: 92%; width: 100%"
      id="wordCloud"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
import axios from "axios";

export default {
  data() {
    return {
      totalData6:{},
      threshold:"",
      dateValue: "",
      keywords:[],
      timesList:[],
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
        {
          name: "特色社会主义思想",
          value: 700,
        },
      ],
    };
  },
  mounted() {
    let currentDate = new Date();
    this.dateValue = currentDate.toISOString();
    this.initChart();
  },
  methods: {
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
      var dateParts = this.dateValue.split("T")[0].split("-");
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
            fontSize: 24,
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
                return (
                  "rgb(" +
                  Math.round(Math.random() * 50 + 200) +
                  ", " +
                  Math.round(Math.random() * 100 + 100) +
                  ", " +
                  Math.round(Math.random() * 50) +
                  ")"
                );
              },
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
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
          //   tooltip.style.background = "rgba(255, 255, 255, 0.8)";
          tooltip.style.padding = "5px";
          document.body.appendChild(tooltip);
        }
        tooltip.innerHTML = " 搜索次数：" + clickCount;
        tooltip.style.left = params.event.offsetX + "px";
        tooltip.style.top = params.event.offsetY + "px";
      });
      this.chart.on("mouseout", function () {
        var tooltip = document.getElementById("tooltip");
        if (tooltip) {
          tooltip.parentNode.removeChild(tooltip);
        }
      });
    },
  },
};
</script>