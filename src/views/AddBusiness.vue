<template>
  <div class="app-main" style="position: relative">
    <div style="
        position: relative;
        height: 87%;
        width: 96%;
        left: 2%;
        top:5%;
        background-color: #ffffff;
        border-radius:8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
                <el-button type="danger" size="mini"
                  :style="{ backgroundColor: scope.row.status === '正常投放' ? '#cccccc' : '#FA5E00', border: 'none' }"
                  @click="putAd(scope.row)">投放</el-button>
                <el-button type="danger" size="mini"
                  :style="{ backgroundColor: scope.row.status === '暂停投放' ? '#cccccc' : '#FA5E00', border: 'none' }"
                  @click="pauseAd(scope.row)">暂停投放</el-button>
                <el-button type="danger" size="mini" style="background-color:#FA5E00"
                  @click="seeDetail(scope.row)">查看</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="position: relative; width: 90%; left: 5%; height: 10%;display:flex;top:5%;">
      <el-button type="danger" size="mini" style="
            background-color: #fa5e00;
            border: none;
            position: relative;
            height: 50%;
            width: 8%;
            left: 86%;
            top: 20%;
            border-radius: 10px;
          " @click="goToSet">广告设置</el-button>
      <el-button type="danger" size="mini" style="
          background-color: #fa5e00;
          border: none;
          position: relative;
          height: 50%;
          width: 8%;
          left: 86%;
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
      totalData: null,
      tableData: [
        // {
        //   adName: "不吃火锅就吃烤匠",
        //   adType: "美食",
        //   meName: "烤匠",
        //   admitTime: "2024-08-28 10:16:23",
        //   setTime: "2024-08-28 10:16:23",
        //   setLong: "3天",
        //   charge: "2000",
        //   status: "正常投放",
        // },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 查看未通过列表
    goNoPass() {
      this.$router.push("/noPass");
    },
    // 查看详情界面
    seeDetail(ad) {
      this.$store.commit("setSeeAdID", ad.id);
      this.$nextTick(() => {
        if(ad.status == "美食" || ad.status == "娱乐")
        {
          this.$router.push("/foodDetail");
        }
        else{
          this.$router.push("/workDetail");
        }
      });
    },
    // 获取广告列表
    getData() {
      let queryString = `?page=1&pageSize=6&isExamine=true`;
      axios
        .get(`${this.$store.getters.getIp}/advertisements/examine/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.records;
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
              status: item.status == 0 ? "正常投放" : "暂停投放",
              id: item.id,
            });
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 广告设置
    goToSet() {
      this.$router.push("/advertiseSet");
    },
    // 投放广告
    putAd(ad) {
      this.$confirm("确认投放吗？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let data = {
            id: parseInt(ad.id),
            status: 1,
          };
          const queryString = Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');
          axios
            .put(`${this.$store.getters.getIp}/advertisements/status?${queryString}`)
            .then((response) => {
              // console.log(response.data);
              if (response.data.code) {
                this.$message({
                  message: "投放成功",
                  type: "success",
                });
                ad.status = "正常投放";
              }
            })
            .catch((error) => {
              console.error("修改错误:", error);
            });
        })
        .catch(() => { });
    },
    // 暂停投放广告
    pauseAd(ad) {
      this.$prompt('请输入暂停投放原因', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPlaceholder: '请输入暂停投放原因',
      }).then(({ value }) => {
        if (value == null) {
          this.$message.error("请输入暂停投放原因");
        }
        else {
          let data = {
            id: parseInt(ad.id),
            status: 1,
            feedback: value
          };

          const queryString = Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');

          axios
            .put(`${this.$store.getters.getIp}/advertisements/status?${queryString}`)
            .then((response) => {
              // console.log(response.data);
              if (response.data.code) {
                this.$message({
                  message: "暂停投放成功",
                  type: "success",
                });
                ad.status = "暂停投放";
              }
            })
            .catch((error) => {
              console.error("修改错误:", error);
            });
        }
      }).catch(() => {
        console.log('取消暂停投放');
      });
    },
  },
};
</script>