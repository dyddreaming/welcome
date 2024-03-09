<template>
  <div class="app-main" style="position: relative">
    <div style="
        position: relative;
        height: 98%;
        width: 90%;
        left: 5%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      ">
      <!-- 标题部分 -->
      <div style="
          height: 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          top: 1%;
        ">
        <h2 style="margin-left: 1%">任务发布列表</h2>
      </div>

      <!-- 数据部分 -->
      <div style="
          height: 85%;
          background-color: #ffffff;
          position: relative;
          top: 4%;
          border-radius:8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        ">
        <!-- 搜索部分 -->
        <div style="
            height: 10%;
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            top: 2%;
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
            <span style="position: relative; margin-right: 10px; left: 5%">任务状态：</span>
            <el-select v-model="statusValue" placeholder="请选择任务状态" style="width: 60%">
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="
              position: relative;
              width: 25%;
              height: 100%;
              display: flex;
              align-items: center;
            ">
            <span style="position: relative; margin-right: 10px; left: 5%">任务级别：</span>
            <el-select v-model="taskLevel" placeholder="请选择任务级别" style="width: 60%">
              <el-option v-for="item in levelOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="
              position: relative;
              width: 16%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            ">
            <el-button class="search-button" type="danger" round style="
                background-color: #f89300;
                border-radius: 5px;
                font-size: 14px;
                padding: 5px;
                border: none;
              ">
              <i class="el-icon-search" style="margin-right: 3px; font-size: 14px"></i>搜索
            </el-button>
            <el-button round style="
                border-radius: 5px;
                border: none;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #ccc;
              " @click="resetValue">
              <i class="el-icon-refresh-right" style="margin-right: 3px; font-size: 14px"></i>重置
            </el-button>
          </div>
        </div>
        <!-- 表格部分 -->
        <div style="
            height: 87%;
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            top: 3%;
          ">
          <el-table :data="tableData" border style="width: 100%; height: 100%">
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="name" label="任务名称" width="140px" align="center"></el-table-column>
            <el-table-column prop="target" label="任务对象" width="140px" align="center"></el-table-column>
            <el-table-column prop="level" label="任务级别" width="140px" align="center"></el-table-column>
            <el-table-column prop="category" label="任务类型" width="140px" align="center"></el-table-column>
            <el-table-column prop="taskStatus" label="任务状态" width="140px" align="center"></el-table-column>
            <el-table-column prop="createUser" label="任务发布者" width="140px" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <div style="display: flex; justify-content: space-between">
                  <el-button type="primary" size="mini" style="background-color: #ffc300; border: none"
                    @click="handleEdit(scope.row)">修改</el-button>
                  <el-button type="success" size="mini" style="background-color: #f89300; border: none"
                    @click="handleReset(scope.row)">重置</el-button>
                  <el-button type="danger" size="mini" style="background-color: #fa5e00; border: none"
                    @click="handleDelete(scope.row)">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <!-- 批量删除按钮 -->
      <div style="position: relative; height: 5%; top: 6%; width: 100%;display:flex;">
        <el-button type="danger" size="mini" style="
            background-color: #fa5e00;
            border: none;
            height: 80%;
            position: relative;
            top: 15%;
            left: 85%;
          " @click="taskRelease">发布任务</el-button>
        <el-button type="danger" size="mini" style="
            background-color: #fa5e00;
            border: none;
            height: 80%;
            position: relative;
            top: 15%;
            left: 85%;
          " @click="handleDelete">批量删除</el-button>
      </div>
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
      nameInput: "",
      statusValue: "",
      taskLevel: "",
      statusOptions: [
        {
          value: "草稿",
          label: "草稿",
        },
        {
          value: "未发布",
          label: "未发布",
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
      levelOptions: [
        {
          value: "校级",
          label: "校级",
        },
        {
          value: "院级",
          label: "院级",
        },
      ],
      tableData: [
        // {
        //   name: "校史学习",
        //   target: "本科生",
        //   status: "发布状态",
        //   level: "校级",
        //   category: "主线",
        //   createUser: "计算机学院",
        // },
      ],
      totalData: null,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let queryString = `?page=1&pageSize=6`;
      axios
        .get(`${this.$store.getters.getIp}/tasks/page${queryString}`)
        .then((response) => {
          this.totalData = response.data.data.records;
          // console.log("获取到的任务列表:", this.totalData);
          this.tableData = this.totalData.map(item => {
            let target = "";
            switch (item.target) {
              case 0:
                target = "本科生";
                break;
              case 1:
                target = "研究生";
                break;
              case 2:
                target = "全体";
                break;
              default:
                target = "未知";
            }
            let level = "";
            switch (item.level) {
              case 0:
                level = "校级";
                break;
              case 1:
                level = "院级";
                break;
              default:
                level = "未知";
            };
            let status = "";
            switch (item.status) {
              case 0:
                status = "草稿";
                break;
              case 1:              // 需要根据时间细化状态
                {
                  var currentTime = new Date();
                  var releaseTime = new Date(item.releaseTime);
                  var endTime = new Date(item.endTime);
                  if (currentTime < releaseTime) {
                    status = "未发布";
                  } else if (currentTime >= releaseTime && currentTime <= endTime) {
                    status = "进行中";
                  } else {
                    status = "已结束";
                  }
                  break;
                }
            };
            let category = "";
            switch (item.category) {
              case 0:
                category = "主线";
                break;
              case 1:
                category = "支线";
                break;
              case 2:
                category = "挑战";
                break;
              default:
                category = "未知";
            }
            return {
              name: item.name,
              target: target,
              taskStatus: status,
              level: level,
              category: category,
              createUser: item.createUser
            };
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    resetValue() {
      this.nameInput = "";
      this.statusValue = "";
      this.taskLevel = "";
    },
    taskRelease() {
      this.$router.push("/taskRelease");
    },
    handleEdit(row) {
      this.$router.push("/taskRefine");
    },
    handleReset(row) {
      this.$store.commit("setRestTaskID", row.id);
      this.$nextTick(() => {
        this.$router.push("/taskReset");
      });
    },
    handleDelete(row) {
      this.$confirm("确认删除该条数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 发起axios请求删除数据

          // 删除成功后，弹出删除成功提示框
          this.$message({
            type: "success",
            message: "删除成功！",
          });
        })
        .catch(() => { });
    },
  },
};
</script>