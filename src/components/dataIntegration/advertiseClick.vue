<template>
  <div style="height: 90%; width: 100%; background-color: #ffffff">
    <div
      style="
        height: 15%;
        width: 90%;
        left: 5%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div style="margin-right: 150px">
        <span style="margin-right: 10px">类型:</span>
        <el-select
          v-model="type"
          placeholder="请选择"
          style="height: 40px !important; width: 80%"
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
          position: relative;
          width: 50%;
          display: flex;
          align-items: center;
        "
      >
        <span style="margin-right: 10px">点击次数下限:</span>
        <el-input
          v-model="threshold"
          placeholder="请输入"
          style="position: relative; height: 40px !important; width: 38%"
        >
        </el-input>
      </div>
      <div>
        <span style="margin-right: 10px">时间:</span>
        <el-date-picker
          v-model="dateValue"
          type="date"
          placeholder="选择日期"
          style="height: 40px !important; width: 78%"
        ></el-date-picker>
      </div>
    </div>
    <div style="height: 85%; width: 100%; position: relative">
      <diV
        style="
          position: relative;
          height: 5%;
          width: 100%;
          text-align: center;
          font-size: 22px;
          font-weight: 600;
        "
        >{{ dateString }}广告点击情况
      </diV>
      <div
        style="position: relative; height: 85%; width: 100%"
        id="chartContainer"
      ></div>
    </div>
    <div style="position: relative; width: 100%; height: 10%">
      <el-button
        type="danger"
        size="mini"
        style="
          background-color: #fa5e00;
          border: none;
          height: 80%;
          position: relative;
          top: 15%;
          border-radius: 10px;
          font-size: 14px;
          left: 90%;
        "
        @click="seeDetail"
        >七日点击情况</el-button
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
      threshold: "",
      dateValue: "",
      dateString: "",
      totalData4: {},
      adNames: [],
      clicks: [],
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
    };
  },
  watch: {
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
    this.dateValue = currentDate;
    // console.log(this.dateValue);
    let date = new Date(this.dateValue);
    this.dateString = `${date.getFullYear()}年${
      date.getMonth() + 1
    }月${date.getDate()}日`;
    // 加载图表
    this.loadData();
  },
  methods: {
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
            color: ["#65B581", "#FFCE34", "#FD665F"],
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
    seeDetail() {
      this.$store.commit("setAdvertiseTime", this.dateValue);
      this.$nextTick(() => {
        this.$router.push("/sevenClick");
        // console.log("查看7日点击情况");
      });
    },
  },
};
</script>