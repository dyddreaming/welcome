<template>
  <div class="app-main" style="position: relative">
    <div style="
        position: relative;
        width: 90%;
        left: 5%;
        height: 10%;
        display: flex;
      ">
      <div style="position: relative; top: 35%; font-size: 18px;">
        广告列表更新了4条广告
      </div>
      <div style="position: relative; top: 35%; left: 10%">
        <el-button type="danger" size="mini" style="border-radius: 10px">全部已读</el-button>
      </div>
      <div style="position:relative;height:100%;width:20%;left:60%;">
        <el-button type="danger" size="mini" style="
          background-color: #fa5e00;
          border: none;
          position: relative;
          height: 50%;
          width: 30%;
          left:70%;
          top: 30%;
          border-radius: 10px;
        " @click="goBack">返回</el-button>
      </div>
    </div>
    <div style="
        position: relative;
        height: 85%;
        width: 90%;
        left: 5%;
        background-color: #ffffff;
        border-radius:8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      ">
      <div style="position: relative; height: 8%; width: 100%; font-size: 20px">
        广告列表——未审核
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
          <el-table-column prop="setLong" label="投放时长" min-width="70" :align="'center'">

            <template slot="header" slot-scope="scope">
              <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" min-width="100" :align="'center'">

            <template slot-scope="scope">
              <div style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <el-button type="danger" size="mini" @click="examine(scope.row)"
                  style="background-color:#fa5e00">审核</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalData: null,
      tableData: [
        // {
        //   adName: "不吃火锅就吃烤匠",
        //   adType: "美食",
        //   meName: "烤匠",
        //   admitTime: "2024-08-28 10:16:23",
        //   setLong: "3天",
        // },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goBack() {
      this.$router.push("/mainMenu/add/business");
    },
    examine(ad) {
      this.$store.commit("setExamineID", ad.id);
      this.$nextTick(() => {
        if (ad.status == "美食" || ad.status == "娱乐") {
          this.$router.push("/examineFood");
        }
        else {
          this.$router.push("/examinePart");
        }
      });
    },
    // 获取广告列表
    getData() {
      let queryString = `?page=1&pageSize=6&isExamine=false`;
      axios
        .get(`${this.$store.getters.getIp}/advertisements/examine/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.records;
          // console.log(this.totalData);
          this.totalData.forEach((item) => {
            let adTypeText = "";
            switch (item.category) {
              case 0:
                adTypeText = "社团";
                break;
              case 1:
                adTypeText = "兼职";
                break;
              case 2:
                adTypeText = "美食";
                break;
              case 3:
                adTypeText = "娱乐";
                break;
              default:
                adTypeText = "未知类型";
                break;
            }
            this.tableData.push({
              adName: item.title,
              adType: adTypeText,
              meName: item.name,
              admitTime: item.create_time,
              setTime: item.release_time,
              setLong: item.duration,
              charge: item.cost,
              id: item.id,
            });
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
  },
};
</script>