<template>
  <div style="height: 100%; width: 100%; background-color: #ffffff">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        width: 80%;
        height: 8%;
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
      style="height: 40%; width: 100%; position: relative"
      ref="comChartContainer"
    ></div>
    <hr
      style="
        border: none;
        border-top: 2px solid #cccccc;
        margin: 0;
        position: relative;
      "
    />
    <div style="height: 50%; width: 100%; position: relative">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          height: 15%;
          width: 80%;
          left: 10%;
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
        style="height: 80%; width: 100%; position: relative"
        ref="inChartContainer"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      dateValue1: "",
      dateValue2: "",
      totalData2: {},
      totalData3:{},
      studentIds: [],
      compCount: [],
      taskNames:[],
      parCount:[],
    };
  },
  watch: {
    dateValue1() {
      this.renderComChart();
    },
    dateValue2(newVal) {
      this.renderJoinChart();
    },
  },
  mounted() {
    let currentDate = new Date();
    this.dateValue1 = currentDate;
    this.dateValue2 = currentDate;
    this.renderComChart();
    this.renderJoinChart();
  },
  methods: {
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
          this.totalData2=response.data.data;
          this.studentIds=this.totalData2.studentIds;
          this.compCount=this.totalData2.compCount;
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
                { offset: 0, color: "#FFDA9F" },
                { offset: 0.5, color: "#FFB27D" },
                { offset: 1, color: "#FA5E00" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFDA9F" },
                  { offset: 0.7, color: "#FFB27D" },
                  { offset: 1, color: "#FA5E00" },
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
          this.totalData3=response.data.data;
          this.taskNames=this.totalData3.taskNames;
          this.parCount=this.totalData3.parCount;
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
                { offset: 0, color: "#FFDA9F" },
                { offset: 0.5, color: "#FFB27D" },
                { offset: 1, color: "#FA5E00" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFDA9F" },
                  { offset: 0.7, color: "#FFB27D" },
                  { offset: 1, color: "#FA5E00" },
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
  },
};
</script>