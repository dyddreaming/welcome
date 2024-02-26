<template>
  <div
    style="
      height: 100vh;
      width: 100vw;
      background-image: url('/static/img/background2.png');
      background-size: cover;
      background-position: center top -35px;
    "
  >
    <div style="position: relative; height: 6%; width: 100%;">
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
        任务数据可视化
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
      <div style="position: relative; height: 100%; width: 42%; left: 6%;">
        <div style="position: relative; height: 49%; width: 100%">
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
            9月1日完成任务排行榜
          </div>
          <div
            style="position: relative; height: 95%; width: 98%"
            ref="comChartContainer"
          ></div>
        </div>
        <div style="position: relative; height: 49%; width: 100%; top: 2%">
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
            9月1日参与人数排行榜
          </div>
          <div
            style="position: relative; width: 98%; height: 95%"
            ref="inChartContainer"
          ></div>
        </div>
      </div>
      <div style="position: relative; height: 100%; width: 42%; left: 10%;">
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
          热点任务情况
        </div>
        <div
          style="position: relative; width: 58%; height: 93%; top: 2%;left:21%;"
          class="myTable"
        >
          <el-table :data="taskData" style="width: 100%">
            <el-table-column prop="name" label="任务名" width="180">
            </el-table-column>
            <el-table-column prop="value" label="热度值" width="180">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep.myTable .el-table,
:deep.myTable .el-table__expanded-cell {
  background-color: transparent !important;
}
:deep.myTable .el-table th,
:deep.myTable .el-table tr,
:deep.myTable .el-table td {
  background-color: transparent !important;
  color: white !important;
  border-color: white !important;
}
:deep.myTable .el-table td:not(:last-child)::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: white; /* 竖线颜色为白色 */
}
</style>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      currentTime: "",
      taskData: [
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
      ],
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.renderComChart();
    this.renderJoinChart();
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
    renderComChart() {
      let dataAxis = ["张三", "李四", "王五", "xx", "yy", "zz", "ww"];
      let data = [20, 18, 17, 15, 10, 9, 5];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.comChartContainer);

      let option = {
        grid: {
          top: "30%",
        },
        xAxis: {
          name: "用户名",
          nameTextStyle: {
            color: "#ffffff",
          },
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#ffffff",
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
          nameTextStyle: {
            color: "#ffffff",
          },
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#ffffff",
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
                { offset: 0, color: "#18DBFD" },
                { offset: 0.5, color: "#1883FD" },
                { offset: 1, color: "#1782FC" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#18DBFD" },
                  { offset: 0.7, color: "#1883FD" },
                  { offset: 1, color: "#1782FC" },
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
      let dataAxis = [
        "校史学习",
        "新生报到",
        "食堂打卡",
        "xxx",
        "yyx",
        "zzz",
        "www",
      ];
      let data = [200, 180, 170, 150, 100, 90, 50];
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.inChartContainer);
      let option = {
        grid: {
          top: "30%",
        },
        xAxis: {
          name: "任务名",
          nameTextStyle: {
            color: "#ffffff",
          },
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#ffffff",
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
          nameTextStyle: {
            color: "#ffffff",
          },
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#ffffff",
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
                { offset: 0, color: "#18DBFD" },
                { offset: 0.5, color: "#1883FD" },
                { offset: 1, color: "#1782FC" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#18DBFD" },
                  { offset: 0.7, color: "#1883FD" },
                  { offset: 1, color: "#1782FC" },
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