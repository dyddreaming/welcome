<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="searchWord" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <router-link to="/mainMenu/help/helpFile"
        style="color: inherit; text-decoration: none; margin-right: 20px; margin-left: auto; color: #ffffff;">
        <span style="transition: color 0.3s;" class="hover-color">需要帮助吗？<span style="color: #209e91;">点击这里</span></span>
      </router-link>
      <i class="el-icon-s-home" style="color: #ffff;margin-right:10px; font-size: 24px;"></i>
    </div>
    <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
      <h2 style="
        color: #747474;
        display: inline-block;
        left: 2%;
        position:relative;
        width:98%;
      ">
        任务完成情况
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
            id="current-link">任务完成情况</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div style="
        position: relative;
        height: 75%;
        width: 96%;
        left: 2%;
        background-color:#ffffff;border-radius:8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        top: 1%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      ">
      <!-- 搜索部分 -->
      <div style="
          height: 10%;
          color:#747474;
          top: 2%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        ">
        <div style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          ">
          <span style="position: relative; margin-right: 10px; left: 5%">任务名称：</span>
          <el-input v-model="nameInput" placeholder="请输入任务名称" style="width: 60%"></el-input>
        </div>
        <div style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          ">
          <span style="position: relative; margin-right: 10px; left: 5%">发布状态：</span>
          <el-select v-model="statusValue" placeholder="请选择发布状态" style="width: 60%;color:#747474;">
            <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
          ">
          <span>发布时间：</span>
          <el-date-picker v-model="startTime" type="date" placeholder="请选择" style="width: 30%"></el-date-picker>
          <span style="margin-left: 1%; margin-right: 1%">至</span>
          <el-date-picker v-model="endTime" type="date" placeholder="请选择" style="width: 30%"></el-date-picker>
        </div>
        <div style="
            position: relative;
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
          <el-button type="primary" style="background-color: #209e91; border-color: #209e91; color: #ffffff;" size="mini" @click="search">
            <i class="el-icon-search" style="margin-right: 3px; font-size: 14px"></i>搜索
          </el-button>
          
          <el-button type="primary" style="background-color: #ffffff; border-color: #e0e0e0; color: #808080;" size="mini" @click="resetValue">
            <i class="el-icon-refresh-right" style="margin-right: 3px; font-size: 14px"></i>重置
          </el-button>
        </div>
      </div>
      <!-- 数据表格部分 -->
      <div style="height: 85%; position: relative; top: 4%; width: 100%;">
        <el-table :data="tableData" border style="width: 100%;">
          <el-table-column label="任务名称" width="auto" align="center">
            <template slot-scope="scope">
              <div style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                <!-- 任务图片 -->
                <img :src="scope.row.img" style="margin-right: 10px; width: 40px; height: 40px" />
                <!-- 任务名称和ID -->
                <div>
                  <div style="color: #747474">{{ scope.row.name }}</div>
                  <div>ID: {{ scope.row.id }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="发布时间" width="auto" align="center">
            <template slot-scope="scope">
              <span style="color: #747474">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="任务类型" width="auto" align="center">
            <template slot-scope="scope">
              <span style="color: 747474">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="number" label="已完成人数" width="auto" align="center">
            <template slot-scope="scope">
              <el-progress :percentage="50" :color="customColor"></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="发布状态" width="auto" align="center">
            <template slot-scope="scope">
              <span style="color: 747474">{{ scope.row.status }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="完成情况" width="150" align="center">
            <template slot-scope="scope">
              <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
                @click="seeDetail(scope.row)">查看</el-button>
            </template></el-table-column></el-table>
      </div>
    </div>
  </div>
</template>
</el-table-column>
</el-table>
</div>
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
  color: #747474
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      searchWord: "",
      customColor: "#5d9e77",
      statusValue: "",
      startTime: "",
      endTime: "",
      nameInput: "",
      statusOptions: [
        {
          value: "",
          label: "所有",
        },
        {
          value: "进行中",
          label: "进行中",
        },
        {
          value: "已结束",
          label: "已结束",
        },
      ],
      tableData: [],
      totalData: {},
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    seeDetail(row) {
      this.$store.commit("setTaskId", row.id);
      this.$store.commit("setTaskName", row.name);
      this.$router.push({ path: `/mainMenu/task/collegeTask` });
    },
    resetValue() {
      this.nameInput = "";
      this.startTime = "";
      this.endTime = "";
      this.statusValue = "";
      this.loadData();
    },
    loadData() {
      // 每次请求前进行清空
      this.tableData = [];
      let queryString = `?page=1&pageSize=6`;
      if (this.nameInput != "") {
        queryString += `&name=${this.nameInput}`;
      }
      if (this.statusValue != "") {
        if (this.statusValue == "进行中") {
          queryString += `&status=2`;
        }
        else if (this.statusValue == "已结束") {
          queryString += `&status=3`;
        }
      }
      if (this.startTime != "") {
        const startDate = new Date(this.startTime)
          .toISOString()
          .replace(/T/, " ")
          .replace(/\.\d+Z$/, "");
        queryString += `&begin=${startDate}`;
      }
      if (this.endTime != "") {
        const endDate = new Date(this.endTime)
          .toISOString()
          .replace(/T/, " ")
          .replace(/\.\d+Z$/, "");
        queryString += `&end=${endDate}`;
      }
      axios
        .get(`${this.$store.getters.getIp}/tasks/completion/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.taskPage;
          console.log("响应数据：", this.totalData);
          const records = this.totalData.records;
          records.forEach((task, index) => {
            this.tableData.push({
              img: require(`@/assets/${task.name}.png`),
              name: task.name,
              id: task.id,
              date: task.releaseTime.replace("T", " "),
              type: this.transformType(task.category),
              number: task.completed,
              status: this.transformStatus(task),
            });
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    transformType(type) {
      if (type == 0) {
        return "主线";
      } else {
        return "支线";
      }
    },
    transformStatus(task) {
      const now = new Date();
      const release = new Date(task.releaseTime);
      const end = new Date(task.endTime);
      // console.log("当前时间:",now);
      // console.log("发布时间:",release);
      // console.log("截止时间:",end)
      if (release <= now && now <= end) {
        return "进行中";
      } else if (now > end) {
        return "已结束";
      }
    },
    search() {
      this.loadData();
    }
  },
};
</script>