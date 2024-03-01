<template>
  <div class="app-main" style="position: relative">
    <div
      id="myChart"
      style="
        position: relative;
        height: 85%;
        top: 5%;
        left: 5%;
        width: 90%;
        background-color: #ffffff;
      "
    ></div>
    <div style="position:relative;height:10%;width:90%;left:5%;top:5%;">
        <el-button type="danger" size="mini" style="position:relative;height:50%;width:8%;border-radius:10px;background-color:#FA5E00;left:90%;top:30%;border:none" @click="goBack">返回</el-button></div>
  </div>
</template>
  
  <style>
</style>
  
  <script>
import * as echarts from "echarts";
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById('myChart'));
    var option;

    let base = +new Date(); // 使用当前日期作为起始日期
    base -= 30 * 24 * 3600 * 1000; // 减去30天的毫秒数
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 0; i < 30; i++) { // 修改循环次数为30
      var now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
      );
      // 获取纵轴值
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i]));
    }
    option = {
      tooltip: {
        trigger: "axis",
        position: function (pt) {
          return [pt[0], "10%"];
        },
      },
      title: {
        left: "center",
        text: "近30天点击量",
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date,
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
      },
      dataZoom: [
        {
          type: "inside",
          start: 0,
          end: 20,
        },
        {
          start: 0,
          end: 10,
        },
      ],
      series: [
        {
          name: "点击量",
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgb(250,94,0)",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255,195,0)",
              },
              {
                offset: 1,
                color: "rgb(250,94,0)",
              },
            ]),
          },
          data: data,
        },
      ],
    };

    option && myChart.setOption(option);
  },
  methods:{
    goBack(){
        this.$router.push("/foodDetail");
    },
  },
};
</script>