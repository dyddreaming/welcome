<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
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
    <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
      <h2 style="
          color: #747474;
          display: inline-block;
          left: 2%;
          position:relative;
          width:98%;
        ">
        7日点击情况
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/data/defineIntegration' }"
            style="font-size: 17px; color: #747474;font-weight:600;" id="pre-link">数据调取集成</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">7日点击情况</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 73%;
        top: 1%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        border-radius:8px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      "
      id="chartContainer"
    ></div>
    <div style="position: relative; height: 9%; width: 96%; left: 2%; top: 1%;display: flex; justify-content: flex-end; align-items: center;">
      <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
        @click="goHome">返回</el-button>
    </div>
  </div>
</template>
<style scoped>
/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474
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
import * as echarts from "echarts";
import axios from "axios";
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      totalData5: {},
      adNames: [],
      clicks: [],
      time: null,
      lastDays: [],
      search:"",
    };
  },
  mounted() {
    this.getData().then(() => {
        this.initChart();
      });
  },
  created() {
    let rowTime = new Date(this.$store.getters.getAdvertiseTime);
    this.time = `${rowTime.getFullYear()}-${(rowTime.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${rowTime.getDate().toString().padStart(2, "0")}`;
    for (let i = 0; i < 7; i++) {
      const day = new Date(rowTime.getTime() - i * 24 * 60 * 60 * 1000);
      const formattedDay = `${day.getFullYear()}-${(day.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
      this.lastDays.unshift(formattedDay);
    }
  },
  methods: {
    getData(){
      return new Promise((resolve, reject) => {
      axios
        .get(`${this.$store.getters.getIp}/ads/clicks/seven`,{
            params: {
              time: "2024-03-16",
            },
          })
        .then((response) => {
          this.totalData5 = response.data.data;
          this.adNames = this.totalData5.adNames;
          this.clicks = this.totalData5.clicks;
          // console.log(this.adNames);
          console.log(this.clicks);
          resolve();
        })
        .catch((error) => {
          reject(error);
          console.error("Axios request error:", error);
        });})
    },
    initChart() {
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
          max: 40000,
        },
        series: [
          {
            data: this.clicks,
            type: "line",
            itemStyle: {
              color: "rgb(14, 129, 116,1)",
            },
            areaStyle: {
              color: "rgb(13, 166, 153,0.4)",
            },
          },
        ],
      };
      chart.setOption(option);
    },
    goHome() {
      this.$router.push("/mainMenu/data/defineIntegration");
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