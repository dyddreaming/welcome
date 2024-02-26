<template>
  <div
    class="body"
    id="app"
    style="
      background-color: #ffda9f;
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;
    "
  >
    <!-- 标题行 -->
    <div
      style="
        position: relative;
        height: 6%;
        width: 80%;
        left: 10%;
        background-color: #fa5e00;
        top: 2%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <h2 style="color: #ffffff; margin: 0">各学院{{ taskName }}完成情况</h2>
    </div>
    <!--  数据部分 -->
    <div style="position: relative; height: 82%; left: 5%; width: 90%; top: 3%">
      <hr
        style="
          width: 100%;
          border: 1px solid #ffffff;
          margin-left: 0%;
          position: absolute;
        "
      />
      <!-- 第一行 -->
      <div
        style="
          left: 1%;
          width: 98%;
          height: 20%;
          top: 4%;
          position: relative;
          display: flex;
          justify-content: space-between;
        "
      >
        <div
          v-for="data in firstData"
          :key="data.collegeName"
          style="
            width: 18%;
            height: 100%;
            position: relative;
            background-color: #ffffff;
          "
          class="show-data"
        >
          <!-- 学院名 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 20%;
              text-align: center;
              font-weight: 600;
            "
          >
            {{ data.collegeName }}
          </div>
          <hr
            style="
              width: 100%;
              border: 1px solid #cccccc;
              margin-left: 0%;
              margin-top: 0%;
              margin-bottom: 0%;
              position: relative;
            "
          />
          <!-- 数据 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 34%;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              未完成人数（人）
              <div style="color: #000000">{{ data.completed }}</div>
            </div>
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              完成人数（人）
              <div style="color: #000000">{{ data.inCompleted }}</div>
            </div>
          </div>
          <!-- 操作 -->
          <div style="position: relative; width: 100%; height: 40%; top: 5%">
            <div style="flex: 1">
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 5%;
                "
                @click="seeNoComplete(data)"
              >
                查看名单
              </el-button>
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 10%;
                "
                @click="seeComplete(data)"
              >
                查看名单
              </el-button>
            </div>
          </div>
          <!-- 添加竖线 -->
          <div
            style="
              position: absolute;
              top: 20%;
              bottom: 0;
              left: 50%;
              width: 1.5px;
              background-color: #cccccc;
              content: '';
              transform: translateX(-50%);
            "
          ></div>
        </div>
      </div>
      <!-- 竖线 -->
      <div
        style="
          width: 1.5px;
          background-color: #ffffff;
          height: 98%;
          position: absolute;
          left: 20%;
          top: 1%;
        "
      ></div>
      <hr
        style="
          width: 100%;
          border: 1px solid #ffffff;
          margin-left: 0%;
          position: absolute;
          top: 25%;
        "
      />
      <!-- 第二行 -->
      <div
        style="
          left: 1%;
          width: 98%;
          height: 20%;
          top: 9%;
          position: relative;
          display: flex;
          justify-content: space-between;
        "
      >
        <div
          v-for="data in secondData"
          :key="data.collegeName"
          style="
            width: 18%;
            height: 100%;
            position: relative;
            background-color: #ffffff;
          "
          class="show-data"
        >
          <!-- 学院名 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 20%;
              text-align: center;
              font-weight: 600;
            "
          >
            {{ data.collegeName }}
          </div>
          <hr
            style="
              width: 100%;
              border: 1px solid #cccccc;
              margin-left: 0%;
              margin-top: 0%;
              margin-bottom: 0%;
              position: relative;
            "
          />
          <!-- 数据 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 34%;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              未完成人数（人）
              <div style="color: #000000">{{ data.completed }}</div>
            </div>
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              完成人数（人）
              <div style="color: #000000">{{ data.inCompleted }}</div>
            </div>
          </div>
          <!-- 操作 -->
          <div style="position: relative; width: 100%; height: 40%; top: 5%">
            <div style="flex: 1">
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 5%;
                "
                @click="seeNoComplete"
              >
                查看名单
              </el-button>
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 10%;
                "
                @click="seeComplete"
              >
                查看名单
              </el-button>
            </div>
          </div>
          <!-- 添加竖线 -->
          <div
            style="
              position: absolute;
              top: 20%;
              bottom: 0;
              left: 50%;
              width: 1.5px;
              background-color: #cccccc;
              content: '';
              transform: translateX(-50%);
            "
          ></div>
        </div>
      </div>
      <div
        style="
          width: 1.5px;
          background-color: #ffffff;
          height: 98%;
          position: absolute;
          left: 40%;
          top: 1%;
        "
      ></div>
      <hr
        style="
          width: 100%;
          border: 1px solid #ffffff;
          margin-left: 0%;
          position: absolute;
          top: 50%;
        "
      />
      <!-- 第三行 -->
      <div
        style="
          left: 1%;
          width: 98%;
          height: 20%;
          top: 14%;
          position: relative;
          display: flex;
          justify-content: space-between;
        "
      >
        <div
          v-for="data in thirdData"
          :key="data.collegeName"
          style="
            width: 18%;
            height: 100%;
            position: relative;
            background-color: #ffffff;
          "
          class="show-data"
        >
          <!-- 学院名 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 20%;
              text-align: center;
              font-weight: 600;
            "
          >
            {{ data.collegeName }}
          </div>
          <hr
            style="
              width: 100%;
              border: 1px solid #cccccc;
              margin-left: 0%;
              margin-top: 0%;
              margin-bottom: 0%;
              position: relative;
            "
          />
          <!-- 数据 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 34%;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              未完成人数（人）
              <div style="color: #000000">{{ data.completed }}</div>
            </div>
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              完成人数（人）
              <div style="color: #000000">{{ data.inCompleted }}</div>
            </div>
          </div>
          <!-- 操作 -->
          <div style="position: relative; width: 100%; height: 40%; top: 5%">
            <div style="flex: 1">
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 5%;
                "
                @click="seeNoComplete"
              >
                查看名单
              </el-button>
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 10%;
                "
                @click="seeComplete"
              >
                查看名单
              </el-button>
            </div>
          </div>
          <!-- 添加竖线 -->
          <div
            style="
              position: absolute;
              top: 20%;
              bottom: 0;
              left: 50%;
              width: 1.5px;
              background-color: #cccccc;
              content: '';
              transform: translateX(-50%);
            "
          ></div>
        </div>
      </div>
      <div
        style="
          width: 1.5px;
          background-color: #ffffff;
          height: 98%;
          position: absolute;
          left: 60%;
          top: 1%;
        "
      ></div>
      <hr
        style="
          width: 100%;
          border: 1px solid #ffffff;
          margin-left: 0%;
          position: absolute;
          top: 75%;
        "
      />
      <!-- 第四行 -->
      <div
        style="
          left: 1%;
          width: 98%;
          height: 20%;
          top: 18%;
          position: relative;
          display: flex;
          justify-content: space-between;
        "
      >
        <div
          v-for="data in fourthData"
          :key="data.collegeName"
          style="
            width: 18%;
            height: 100%;
            position: relative;
            background-color: #ffffff;
          "
          class="show-data"
        >
          <!-- 学院名 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 20%;
              text-align: center;
              font-weight: 600;
            "
          >
            {{ data.collegeName }}
          </div>
          <hr
            style="
              width: 100%;
              border: 1px solid #cccccc;
              margin-left: 0%;
              margin-top: 0%;
              margin-bottom: 0%;
              position: relative;
            "
          />
          <!-- 数据 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 34%;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              未完成人数（人）
              <div style="color: #000000">{{ data.completed }}</div>
            </div>
            <div
              style="
                text-align: center;
                flex: 1;
                color: #a6a6a6;
                font-size: 12px;
              "
            >
              完成人数（人）
              <div style="color: #000000">{{ data.inCompleted }}</div>
            </div>
          </div>
          <!-- 操作 -->
          <div style="position: relative; width: 100%; height: 40%; top: 5%">
            <div style="flex: 1">
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 5%;
                "
                @click="seeNoComplete"
              >
                查看名单
              </el-button>
              <el-button
                type="danger"
                round
                style="
                  background-color: #fa5e00;
                  border-radius: 5px;
                  font-size: 12px;
                  position: relative;
                  width: 40%;
                  left: 10%;
                "
                @click="seeComplete"
              >
                查看名单
              </el-button>
            </div>
          </div>
          <!-- 添加竖线 -->
          <div
            style="
              position: absolute;
              top: 20%;
              bottom: 0;
              left: 50%;
              width: 1.5px;
              background-color: #cccccc;
              content: '';
              transform: translateX(-50%);
            "
          ></div>
        </div>
      </div>
      <div
        style="
          width: 1.5px;
          background-color: #ffffff;
          height: 98%;
          position: absolute;
          left: 80%;
          top: 1%;
        "
      ></div>
      <hr
        style="
          width: 100%;
          border: 1px solid #ffffff;
          margin-left: 0%;
          top: 98%;
          position: absolute;
        "
      />
      <el-dialog :visible.sync="dialogVisible" title="名单详情">
        <el-table :data="dialogData" style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="studentId" label="学号"></el-table-column>
          <el-table-column prop="major" label="专业"></el-table-column>
          <el-table-column
            prop="completionTime"
            label="完成时间"
          ></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button type="success" class="custom-button" @click="downLoad">
            下载</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 返回按钮 -->
    <div
      style="
        position: relative;
        height: 6%;
        top: 4%;
        left: 5%;
        width: 90%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      "
    >
      <div style="position: absolute; right: 0; bottom: 0; width: 10%">
        <el-button
          type="danger"
          round
          style="
            background-color: #fa5e00;
            border-radius: 5px;
            font-size: 14px;
            width: 60%;
            left: 5%;
          "
          @click="redirectToList"
          >返回</el-button
        >
      </div>
    </div>
  </div>
</template>

<style>
.show-data {
  width: 18%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
}

.show-data:last-child {
  margin-right: 0;
}

/* 返回按钮 */
.custom-button {
  background-color: #ffb27d !important;
  border: none !important;
  width: 100px !important;
}

.custom-button:hover {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}

.custom-button:focus {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}
</style>

<script>
import axios from "axios";
import FileSaver from "file-saver";
export default {
  data() {
    return {
      taskId: null,
      taskName: null,
      totalData: [],
      dialogVisible: false,
      fetchData: [],
      dialogData: [],
      option: null,
    };
  },
  created() {
    this.taskId = this.$store.getters.getTaskId;
    this.taskName = this.$store.getters.getTaskName;
    // console.log("接收到的任务ID:", this.taskId);
    this.getTotalData();
  },
  computed: {
    firstData() {
      return this.totalData.slice(0, 5);
    },
    secondData() {
      return this.totalData.slice(5, 10);
    },
    thirdData() {
      return this.totalData.slice(10, 15);
    },
    fourthData() {
      return this.totalData.slice(15, 20);
    },
  },
  methods: {
    getTotalData() {
      // 发送axios请求
      let queryString = `?taskId=${this.taskId}`;
      axios
        .get(`${this.$store.getters.getIp}/tasks/students/list${queryString}`)
        .then((response) => {
          this.totalData = response.data.data;
          console.log("响应数据：", this.totalData);
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    redirectToList() {
      this.$router.push("/mainMenu/task/complete");
    },
    seeNoComplete(data) {
      this.dialogData = [];
      this.option = 0;
      console.log("请求学院:",data.collegeName);
      let queryString = `?taskId=${this.taskId}&college=${data.collegeName}&option=${this.option}`;
      axios
        .get(
          `${this.$store.getters.getIp}/tasks/students/list/detail${queryString}`
        )
        .then((response) => {
          this.fetchData = response.data.data;
          if (this.fetchData != null) {
            console.log("未完成名单：", this.fetchData);
            this.fetchData.forEach((list, index) => {
              this.dialogData.push({
                name: list.name,
                studentId: list.id,
                major: list.major,
                completionTime: list.completeTime,
              });
            });
          }
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
      this.dialogVisible = true;
    },
    seeComplete(data) {
      this.dialogData = [];
      this.option = 1;
      let queryString = `?taskId=${this.taskId}&college=${data.collegeName}&option=${this.option}`;
      axios
        .get(
          `${this.$store.getters.getIp}/tasks/students/list/detail${queryString}`
        )
        .then((response) => {
          this.fetchData = response.data.data;
          if (this.fetchData != null) {
            console.log("未完成名单：", this.fetchData);
            this.fetchData.forEach((list, index) => {
              this.dialogData.push({
                name: list.name,
                studentId: list.id,
                major: list.major,
                completionTime: list.completeTime,
              });
            });
          }
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
      this.dialogVisible = true;
    },
    downLoad() {
      axios({
        url: `${this.$store.getters.getIp}/tasks/students/export`,
        method: "post",
        data: { students: this.fetchData },
        responseType: "blob", // 返回二进制流数据
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: "application/vnd.ms-excel;charset=utf-8",
          });
          let fileName;
          if (this.option === 0) {
            fileName = `${this.taskName}${this.fetchData[0].college}未完成名单.xlsx`;
          } else {
            fileName = `${this.taskName}${this.fetchData[0].college}完成名单.xlsx`;
          }

          FileSaver.saveAs(blob, fileName);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>