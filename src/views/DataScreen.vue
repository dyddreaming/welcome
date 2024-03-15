<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4">
    <div
      style="
        position: relative;
        height: 8%;
        width: 100%;
        background-color: rgb(28, 43, 54);
        display: flex;
        align-items: center;
      "
    >
      <div
        style="
          position: relative;
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          left: 2%;
          background-color: rgb(28, 43, 54);
        "
      >
        <i class="el-icon-search" style="color: #ffff; margin-right: 10px"></i>
        <el-input
          v-model="searchWord"
          placeholder="搜索"
          id="searchPart"
        ></el-input>
      </div>
      <router-link
        to="/mainMenu/help/helpFile"
        style="
          color: inherit;
          text-decoration: none;
          margin-right: 20px;
          margin-left: auto;
          color: #ffffff;
        "
      >
        <span style="transition: color 0.3s" class="hover-color"
          >需要帮助吗？<span style="color: #209e91">点击这里</span></span
        >
      </router-link>
      <i
        class="el-icon-s-home"
        style="color: #ffff; margin-right: 10px; font-size: 24px"
      ></i>
    </div>
    <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
      <h2 style="
        color: #747474;
        display: inline-block;
        left: 2%;
        position:relative;
        width:98%;
      ">
        大屏数据设置
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">大屏数据设置</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 74%;
        left: 2%;
        width: 96%;
        top: 1%;
        background-color: #ffffff;
        color: #747474;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <!-- 左侧竖线 -->
      <div
        style="
          position: absolute;
          left: 5%;
          top: 0;
          width: 1px;
          height: 100%;
          background-color: #cccccc;
        "
      ></div>
      <div
        style="
          position: relative;
          top: 2%;
          left: 8%;
          height: 5%;
          width: 30%;
          display: flex;
          align-items: center;
        "
      >
        <h3 style="margin-right: 15px">大屏数据展示</h3>
        <el-switch
          v-model="value"
          active-color="#209e91"
          inactive-color="#cccccc"
        ></el-switch>
      </div>

      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 学生模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 90%; top: 2%"
      >
        <div style="position: relative; height: 20%; width: 80%; top: 5%">
          学生模块
        </div>
        <div style="position: relative; height: 70%; width: 100%; top: 2%">
          <!-- 第一行 -->
          <div
            style="
              position: relative;
              height: 50%;
              width: 100%;
              top: 2%;
              display: flex;
            "
          >
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="registerS" border
                >各学院注册情况</el-checkbox
              >
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="mapS" border>首次注册地图</el-checkbox>
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="totalS" border>总体注册情况</el-checkbox>
            </div>
          </div>
          <!-- 第二行 -->
          <div
            style="
              position: relative;
              height: 50%;
              width: 100%;
              top: 2%;
              display: flex;
            "
          >
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="studentR" border
                >学生任务排行榜</el-checkbox
              >
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="taskP" border
                >任务完成总进度排行榜</el-checkbox
              >
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="taskC" border
                >单项任务完成速度排行榜</el-checkbox
              >
            </div>
            <div
              v-if="taskC"
              style="position: relative; height: 30%; top: 20%; width: 23%"
            >
              <span style="margin-right: 10px; color: #666666">任务:</span>
              <el-select
                v-model="selectTask"
                placeholder="请选择"
                style="position: relative; height: 40px !important; width: 58%"
              >
                <el-option
                  v-for="item in taskOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 任务模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 100%; top: 2%"
      >
        <div style="position: relative; height: 30%; width: 80%; top: 10%">
          任务模块
        </div>
        <div style="position: relative; height: 60%; width: 90%; display: flex">
          <div style="position: relative; height: 30%; top: 20%; width: 23%">
            <el-checkbox v-model="cTaskC" border
              >当日完成任务排行榜</el-checkbox
            >
          </div>
          <div style="position: relative; height: 30%; top: 20%; width: 23%">
            <el-checkbox v-model="cTaskH" border>当日热点任务情况</el-checkbox>
          </div>
          <div style="position: relative; height: 30%; top: 20%; width: 23%">
            <el-checkbox v-model="cTaskJ" border
              >当日参与人数排行榜</el-checkbox
            >
          </div>
          <div style="position: relative; height: 30%; top: 20%; width: 23%">
            <span style="margin-right: 10px; left: 7%; color: #666666"
              >时间:</span
            >
            <el-date-picker
              v-model="dateValueT"
              type="date"
              placeholder="选择日期"
              style="position: relative; height: 40px !important; width: 58%"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 广告模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 100%; top: 2%"
      >
        <div style="position: relative; height: 30%; width: 90%; top: 10%">
          广告模块
        </div>
        <div
          style="
            position: relative;
            height: 60%;
            width: 90%;
            top: 2%;
            display: flex;
          "
        >
          <div
            style="position: relative; height: 50%; width: 100%; display: flex"
          >
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="cClick" border
                >当日点击量排行榜</el-checkbox
              >
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <el-checkbox v-model="sevenClick" border
                >7日点击量排行榜</el-checkbox
              >
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <span style="margin-right: 10px; left: 7%; color: #666666"
                >时间:</span
              >
              <el-date-picker
                v-model="dateValueA"
                type="date"
                placeholder="选择日期"
                style="position: relative; height: 40px !important; width: 58%"
              >
              </el-date-picker>
            </div>
            <div style="position: relative; height: 30%; top: 20%; width: 23%">
              <span style="margin-right: 10px; left: 7%; color: #666666"
                >类型:</span
              >
              <el-select
                v-model="adType"
                placeholder="请选择"
                style="position: relative; height: 40px !important; width: 58%"
              >
                <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        height: 4%;
        position: relative;
        width: 96%;
        left: 2%;
        top: 2%;
        display: flex;
        justify-content: flex-end;
      "
    >
      <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
      @click="defineSet">修改</el-button>
      <el-button type="primary" style="background-color: #6cc4de; border: #6cc4de;" size="small"
      @click="screenPreview">预览</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

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

/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchWord: "",
      value: true,
      registerS: null,
      mapS: null,
      totalS: null,
      taskP: null,
      taskC: null,
      studentR: null,
      selectTask: null,
      cTaskC: null,
      cTaskH: null,
      cTaskJ: null,
      dateValueT: null,
      dateValueA: null,
      cClick: null,
      sevenClick: null,
      adType: null,
      taskId:null,
      idList:[],
      taskOptions: [
        // {
        //   value: "校史学习",
        //   label: "校史学习",
        // },
        // {
        //   value: "报到倒计时",
        //   label: "报到倒计时",
        // },
        // {
        //   value: "新生报到",
        //   label: "新生报到",
        // },
      ],
      typeOptions: [
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
      idMap: {
        1: "registerS",
        2: "mapS",
        3: "totalS",
        4: "dateValueT",
        5: "taskP",
        6: "studentR",
        7: "taskC",
        8: "selectTask",
        9: "cTaskC",
        10: "cTaskJ",
        11: "cTaskH",
        12: "adType",
        13: "cClick",
        14: "dateValueA",
        15: "sevenClick",
      },
      nameMap: {
        registerS: "各学院注册情况",
        mapS: "首次注册地图",
        totalS: "总体注册情况",
        dateValueT: "任务时间",
        taskP: "任务完成总进度排行榜",
        studentR: "学生任务排行榜",
        taskC: "单项任务完成速度排行榜",
        selectTask: "任务名",
        cTaskC: "当日完成任务排行榜",
        cTaskJ: "当日参与人数排行榜",
        cTaskH: "当日热点任务情况",
        adType: "广告类型",
        cClick: "当日点击量排行榜",
        dateValueA: "广告时间",
        sevenClick: "7日点击量排行榜",
      },
    };
  },
  mounted() {
    if (this.value) {
      this.getScreenSet();
      this.getTotalMainTask();
    };
  },
  methods: {
    screenPreview() {
      this.getTaskId(this.selectTask);
      this.$store.commit("setSelectedTaskId", this.taskId);
      this.$nextTick(() => {
        this.$router.push("/dataScroll");
      });
    },
    getScreenSet() {
      axios
        .get(`${this.$store.getters.getIp}/screen/options/list`)
        .then((response) => {
          let totalData = response.data.data;
          // console.log("屏幕设置:",response.data.data);
          totalData.forEach((item) => {
            const variableName = this.idMap[item.id];
            if (variableName) {
              if (
                (variableName == "selectTask") |
                (variableName == "dateValueT") |
                (variableName == "dateValueA") |
                (variableName == "adType")
              ) {
                this[variableName] = item.val;
              } else {
                this[variableName] = item.val == "1" ? true : false;
              }
              // console.log(this[variableName]);
            }
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    defineSet() {
      let data = Object.keys(this.idMap).map((key) => {
        let val = this[this.idMap[key]];
        if (typeof val === "boolean") {
          val = val ? "1" : "0";
        } else if (val instanceof Date) {
          const year = val.getFullYear();
          const month = String(val.getMonth() + 1).padStart(2, "0");
          const day = String(val.getDate()).padStart(2, "0");
          val = `${year}-${month}-${day}`;
        }

        return {
          id: parseInt(key),
          name: this.nameMap[this.idMap[key]],
          val: val,
        };
      });
      console.log(data);
      axios
        .put(`${this.$store.getters.getIp}/screen/options`, {
          data,
        })
        .then((response) => {
          if(response.data.code)
          {
            this.$message({
            message: "修改成功",
            type: "success",
          });
          }
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("提交失败:", error);
        });
    },
    // 获取所有主线任务
    getTotalMainTask() {
      this.idList = [];
      axios
        .get(`${this.$store.getters.getIp}/tasks/principal/list`)
        .then((response) => {
          let totalData = response.data.data;
          this.taskOptions = totalData.map((item) => {
            // console.log(item.name,item.priNum);
            this.idList.push(item.id);
            return {
              value: item.name,
              label: item.name,
            };
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 获取选择主线任务的ID值
    getTaskId(value){
      // console.log(this.idList);
      this.taskOptions.forEach((item, index)=>{
        if(item.value == value)
        {
          this.taskId = this.idList[index];
        }
      });
      // console.log("选中任务ID值",this.taskId);
    },
  },
};
</script>