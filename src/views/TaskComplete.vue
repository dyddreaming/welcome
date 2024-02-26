<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 98%;
        width: 98%;
        left: 1%;
        background-color: #ffffff;
        top: 1%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      "
    >
      <!-- 标题部分 -->
      <div style="height: 5%">
        <h2 style="position: relative; left: 1%">任务列表</h2>
      </div>

      <!-- 搜索部分 -->
      <div
        style="
          height: 10%;
          top: 2%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        "
      >
        <div
          style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >任务名称：</span
          >
          <el-input
            v-model="nameInput"
            placeholder="请输入任务名称"
            style="width: 60%"
          ></el-input>
        </div>

        <div
          style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >发布状态：</span
          >
          <el-select
            v-model="statusValue"
            placeholder="请选择发布状态"
            style="width: 60%"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div
          style="
            position: relative;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span>发布时间：</span>
          <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="请选择"
            style="width: 30%"
          ></el-date-picker>
          <span style="margin-left: 1%; margin-right: 1%">至</span>
          <el-date-picker
            v-model="endTime"
            type="date"
            placeholder="请选择"
            style="width: 30%"
          ></el-date-picker>
        </div>

        <div
          style="
            position: relative;
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <el-button
            class="search-button"
            type="danger"
            round
            style="
              background-color: #f89300;
              border-radius: 5px;
              font-size: 14px;
              padding: 5px;
              border: none;
            "
            @click="search"
          >
            <i
              class="el-icon-search"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >搜索
          </el-button>
          <el-button
            round
            style="
              border-radius: 5px;
              border: none;
              font-size: 14px;
              padding: 5px;
              border: 1px solid #ccc;
            "
            @click="resetValue"
          >
            <i
              class="el-icon-refresh-right"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >重置
          </el-button>
        </div>
      </div>

      <!-- 数据表格部分 -->
      <div style="height: 78%; position: relative; top: 3%; width: 100%">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="任务名称" width="auto" align="center">
            <template slot-scope="scope">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <!-- 任务图片 -->
                <img
                  :src="scope.row.img"
                  style="margin-right: 10px; width: 40px; height: 40px"
                />
                <!-- 任务名称和ID -->
                <div>
                  <div style="color: #000000">{{ scope.row.name }}</div>
                  <div>ID: {{ scope.row.id }}</div>
                </div>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            prop="date"
            label="发布时间"
            width="auto"
            align="center"
          >
            <template slot-scope="scope">
              <span style="color: black">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="type"
            label="任务类型"
            width="auto"
            align="center"
          >
            <template slot-scope="scope">
              <span style="color: black">{{ scope.row.type }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="number"
            label="已完成人数"
            width="auto"
            align="center"
          >
            <template slot-scope="scope">
              <el-progress :percentage="50" :color="customColor"></el-progress>
            </template>
          </el-table-column>
          <el-table-column
            prop="status"
            label="发布状态"
            width="auto"
            align="center"
          >
            <template slot-scope="scope">
              <span style="color: black">{{ scope.row.status }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="operation"
            label="完成情况"
            width="150"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                type="danger"
                round
                style="background-color: #fa5e00; border-radius: 5px"
                @click="seeDetail(scope.row)"
              >
                查看
              </el-button>
            </template></el-table-column
          ></el-table
        >
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

<style>
@import "../../public/static/css/aside.css";
.search-button {
  background-color: #f89300 !important;
  border-radius: 5px !important;
  font-size: 14px !important;
  padding: 5px !important;
  border: non !important;
}
.search-button:focus {
  background-color: #fa5e00 !important;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      customColor: "#FA5E00",
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
      this.$router.push({ path: `/collegeTask` });
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

      if(this.nameInput!="")
      {
        queryString += `&name=${this.nameInput}`;
      }

      if(this.statusValue!="")
      {
        if(this.statusValue=="进行中")
        {
          queryString += `&status=2`;
        }
        else if(this.statusValue=="已结束")
        {
          queryString += `&status=3`;
        }
      }

      if(this.startTime!="")
      {
        const startDate = new Date(this.startTime)
        .toISOString()
        .replace(/T/, " ")
        .replace(/\.\d+Z$/, "");

        queryString += `&begin=${startDate}`;
      }

      if(this.endTime!="")
      {
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
              img:require(`@/assets/${task.name}.png`),
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
    search()
    {
      this.loadData();
    }
  },
};
</script>