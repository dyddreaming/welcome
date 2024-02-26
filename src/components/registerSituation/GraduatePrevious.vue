<template>
  <div
    class="body"
    id="app"
    style="
      background-color: #ffda9f;
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;
    "
  >
    <!-- 上侧导航栏 -->
    <div
      style="
        display: flex;
        justify-content: space-between;
        height: 80px;
        padding: 10px;
      "
    >
      <el-button type="success" @click="redirectToTotal" class="select-button"
        >往日注册率总览图</el-button
      >
      <el-button
        type="success"
        class="select-button"
        @click="redirectToUndergraduate"
        >本科生往日注册情况总览图</el-button
      >
      <el-button
        type="success"
        style="
          background-color: #fa5e00;
          border: none;
          flex-grow: 1;
          height: 80%;
          font-size: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        "
        @click="redirectToGraduate"
        >研究生往日注册情况总览图</el-button
      >
      <el-button type="success" class="select-button" @click="redirectToCollege"
        >各学院往日注册情况总览表</el-button
      >
    </div>
    <!-- 中间可视化数据 -->
    <div
      style="
        margin-left: 100px;
        margin-right: 100px;
        height: 530px;
        background-color: #ffffff;
      "
    >
      <div
        id="GraduateChartContainer"
        style="
          margin-left: 100px;
          margin-right: 100px;
          height: 530px;
          background-color: #ffffff;
        "
      ></div>
    </div>
    <!-- 下侧返回按钮 -->
    <div
      style="
        height: 108px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 50px;
      "
    >
      <el-button type="success" class="custom-button" @click="redirectToMain"
        >返回</el-button
      >
    </div>
  </div>
</template>

<style>
/* 未选中按钮 */
.select-button {
  background-color: #ffb27d !important;
  border: none !important;
  flex-grow: 1 !important;
  height: 80% !important;
  font-size: 20px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

.select-button:hover {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}

.select-button:focus {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}

/* 返回按钮 */
.custom-button {
  background-color: #ffb27d !important;
  border: none !important;
  width: 100px !important;
}

.custom-button:hover {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}

.custom-button:focus {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}
</style>

<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  data() {
    return {
      // ip: "http://6cffad79.r24.cpolar.top",
      rowTotalData: [],
      rowEnrollmentData: [],
      // underTotal: 0,
      postTotal:0,
      // underEnrollment: [0, 0, 0, 0, 0, 0, 0],
      postEnrollment:[0,0,0,0,0,0,0],
      data: [],
    };
  },
  mounted() {
    this.fetchTotalData()
      .then(() => this.fetchTotalRegisterData())
      .then(() => this.initLineChart());
  },
  methods: {
    // 获取总人数
    fetchTotalData() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/info`)
        .then((response) => {
          this.rowTotalData = response.data.data;
          // this.underTotal = this.rowTotalData.underCount;
          this.postTotal=this.rowTotalData.postCount;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 获取7天注册人数
    fetchTotalRegisterData() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/info/history`)
        .then((response) => {
          this.rowEnrollmentData = response.data.data;
          this.rowEnrollmentData.forEach((data, index) => {
            // this.underEnrollment[index] = data.underEnrollment;
            this.postEnrollment[index] = data.postEnrollment;
          });
          console.log(this.postEnrollment);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    initLineChart() {
      // 获取当前日期
      const currentDate = new Date();
      // 初始化日期数组，存放近 7 天的日期
      const last7Days = [];
      // 循环获取近 7 天的日期
      for (let i = 6; i >= 0; i--) {
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() - i);

        // 将日期格式化为字符串，可以根据需要调整格式
        const formattedDate = `${day.getFullYear()}-${(day.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;

        // 将日期添加到数组
        last7Days.push(formattedDate);
      }
      console.log(last7Days);

      last7Days.forEach((date, index) => {
        const enrollment = this.postEnrollment[index];
        // console.log(enrollment);
        this.data[index] = [date, enrollment];
      });

      const dateList = this.data.map(function (item) {
        return item[0];
      });
      const valueList = this.data.map(function (item) {
        return item[1];
      });

      const lineChart = echarts.init(
        document.getElementById("GraduateChartContainer")
      );

      const option = {
        title: {
          text: `${last7Days[0]} 至 ${last7Days[6]} 研究生累计注册情况折线图`,
          left: "center",
          top: "3%",
          textStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        xAxis: {
          type: "category",
          name: "时间/年-月-日",
          data: dateList,
          axisLabel: {
            formatter: function (value) {
              return value;
            },
          },
        },
        yAxis: {
          type: "value",
          name: "累计注册人数/人",
          max: 1000,
          axisLabel: {
            formatter: "{value}",
          },
          interval: 100,
        },
        series: [
          {
            type: "line",
            data: valueList,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              color: "#FFDA9F",
              width: 2,
            },
            itemStyle: {
              color: "#FA5E00",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#FFD700",
                },
                {
                  offset: 1,
                  color: "#FA5E00",
                },
              ]),
            },
          },
        ],
      };

      lineChart.setOption(option);
    },
    redirectToTotal() {
      if (this.$route.path !== "/totalPrevious") {
        this.$router.push("/totalPrevious");
      }
    },
    redirectToUndergraduate() {
      if (this.$route.path !== "/underPrevious") {
        this.$router.push("/underPrevious");
      }
    },

    redirectToGraduate() {
      if (this.$route.path !== "/graduatePrevious") {
        this.$router.push("/graduatePrevious");
      }
    },

    redirectToCollege() {
      if (this.$route.path !== "/collegePrevious") {
        this.$router.push("/collegePrevious");
      }
    },

    redirectToMain() {
      this.$router.push("/mainMenu/student/register");
    },
  },
};
</script>