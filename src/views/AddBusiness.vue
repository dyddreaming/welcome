<template>
  <div class="app-main" style="position: relative">
    <div style="position: relative; width: 90%; left: 5%; height: 10%">
      <el-button type="danger" size="mini" style="
          background-color: #fa5e00;
          border: none;
          position: relative;
          height: 50%;
          width: 8%;
          left: 92%;
          top: 20%;
          border-radius: 10px;
        "
        @click="goToSet">广告设置</el-button>
    </div>
    <div style="
        position: relative;
        height: 80%;
        width: 90%;
        left: 5%;
        background-color: #ffffff;
      ">
      <div style="position: relative; height: 8%; width: 100%; font-size: 20px">
        广告列表——审核通过
      </div>
      <div style="position: relative; height: 92%; width: 100%">
        <el-table :data="tableData" border>
          <el-table-column prop="adName" label="广告名称" min-width="70" :align="'center'">
            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="adType" label="广告类型" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="meName" label="商家名称" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="admitTime" label="提交时间" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="setTime" label="投放时间" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="setLong" label="投放时长" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="charge" label="收取费用/元" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="投放状态" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" min-width="140" :align="'center'">

            <template slot-scope="scope">
              <div style="display: flex">
                <el-button type="danger" size="mini" style="background-color:#cccccc;border:none">投放</el-button>
                <el-button type="danger" size="mini" style="background-color:#FA5E00">暂停投放</el-button>
                <el-button type="danger" size="mini" style="background-color:#FA5E00" @click="seeDetail">查看</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="position: relative; width: 90%; left: 5%; height: 10%">
      <el-button type="danger" size="mini" style="
          background-color: #fa5e00;
          border: none;
          position: relative;
          height: 50%;
          width: 8%;
          left: 92%;
          top: 20%;
          border-radius: 10px;
        " @click="goNoPass">待审核列表</el-button>
    </div>
  </div>
</template>

<style>
@import "../../public/static/css/aside.css";
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalData:null,
      tableData: [
        {
          adName: "不吃火锅就吃烤匠",
          adType: "美食",
          meName: "烤匠",
          admitTime: "2024-08-28 10:16:23",
          setTime: "2024-08-28 10:16:23",
          setLong: "3天",
          charge: "2000",
          status: "正常投放",
        },
      ],
    };
  },
  mounted(){
    this.getData();
  },
  methods: {
    goNoPass() {
      this.$router.push("/noPass");
    },
    seeDetail() {
      this.$router.push("/foodDetail");
    },
    getData() {
      let queryString = `?page=1&pageSize=6&isExamine=true`;
      axios
        .get(`${this.$store.getters.getIp}/advertisements/examine/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.records;
          console.log("广告数据",this.totalData);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    goToSet(){
      this.$router.push("/advertiseSet");
    },
  },
};
</script>