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
    <!-- 上侧导航栏 -->
    <div
      style="
        display: flex;
        justify-content: space-between;
        height: 80px;
        padding: 10px;
      "
    >
      <el-button type="success" @click="redirectToTotal" class="select-button"
        >往日注册率总览图</el-button
      >
      <el-button
        type="success"
        class="select-button"
        @click="redirectToUndergraduate"
        >本科生往日注册情况总览图</el-button
      >
      <el-button
        type="success"
        class="select-button"
        @click="redirectToGraduate"
        >研究生往日注册情况总览图</el-button
      >
      <el-button
        type="success"
        style="
          background-color: #fa5e00;
          border: none;
          flex-grow: 1;
          height: 80%;
          font-size: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        "
        @click="redirectToCollege"
        >各学院往日注册情况总览表</el-button
      >
    </div>
    <!-- 中间可视化数据 -->
    <div
      style="
        margin-left: 100px;
        margin-right: 100px;
        height: 530px;
        background-color: #ffffff;
        overflow-y: auto;
      "
    >
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="college"
          label="学院"
          min-width="120"
          max-width="200"
        >
        </el-table-column>
        <el-table-column
          label="日期"
          prop="date"
          min-width="140"
          max-width="200"
        >
          <template slot-scope="scope">
            {{ scope.row.date }}
          </template>
          <!-- 在表头中使用日期选择器 -->
          <template slot="header" slot-scope="scope">
            <div class="block">
              <label for="datePicker">日期</label>
              <el-date-picker
                id="datePicker"
                v-model="selectedDate"
                type="date"
                placeholder="选择日期"
                style="left: 10px"
                @input="handleDateInput"
              >
              </el-date-picker>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="register"
          label="累计注册人数"
          min-width="140"
          max-width="200"
        >
          <!-- 在表头中使用 el-select -->
          <template slot="header" slot-scope="scope">
            <label for="typePicker">类型</label>
            <el-select
              v-model="value"
              placeholder="请选择"
              id="typePicker"
              style="left: 10px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="menu"
          label="操作"
          min-width="120"
          max-width="200"
        >
          <template slot-scope="scope">
            <el-button
              type="success"
              class="custom-button"
              @click="openDialog(scope.row)"
              >名单</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- 弹窗 -->
      <el-dialog :visible.sync="dialogVisible" :drag="true">
        <!-- 表格 -->
        <div style="max-height: 300px; overflow-y: auto">
          <!-- 表格 -->
          <el-table :data="dialogTableData">
            <el-table-column label="学号" prop="studentId"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="专业" prop="major"></el-table-column>
            <el-table-column label="联系电话" prop="phone"></el-table-column>
          </el-table>
        </div>

        <div slot="footer" class="dialog-footer">
          <!-- 批量提醒按钮 -->
          <el-button
            v-if="value === '选项2'"
            type="success"
            class="custom-button"
            @click="remind"
            >批量提醒
          </el-button>
          <!-- 下载按钮 -->
          <el-button type="success" class="custom-button" @click="load"
            >下载</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 下侧返回按钮 -->
    <div
      style="
        height: 108px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 50px;
      "
    >
      <el-button type="success" class="custom-button" @click="redirectToMain"
        >返回</el-button
      >
    </div>
  </div>
</template>

<style>
/* 未选中按钮 */
.select-button {
  background-color: #ffb27d !important;
  border: none !important;
  flex-grow: 1 !important;
  height: 80% !important;
  font-size: 20px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

.select-button:hover {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
}

.select-button:focus {
  background-color: #fa5e00 !important;
  color: #ffffff !important;
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
.el-table .odd-row {
  background: oldlace;
}

.el-table .even-row {
  background: ffffff;
}
</style>

<script>
import axios from "axios";
import FileSaver from "file-saver";
export default {
  data() {
    return {
      // ip: "http://6cffad79.r24.cpolar.top",
      colleges: [],
      registerCounts: [0, 0, 0, 0, 0], // 当value为“累计注册人数”时，表示注册人数，反之表示未注册人数
      tableData: [],
      selectedDate: new Date().toLocaleDateString("en-CA"), // 默认显示当前日期
      options: [
        {
          value: "选项1",
          label: "累计注册人数",
        },
        {
          value: "选项2",
          label: "累计未注册人数",
        },
      ],
      value: "选项1",
      totalData: [],
      dialogVisible: false, // 弹窗可见性
      dialogTableData: [], // 弹窗中的表格数据
    };
  },
  watch: {
    selectedDate: function (newDate, oldDate) {
      this.fetchCollegeRegisterData();
    },
    value: function (newValue, oldValue) {
      this.fetchCollegeRegisterData();
    },
  },
  mounted() {
    this.fetchCollegeRegisterData();
    this.handleDateInput(this.selectedDate);
  },
  methods: {
    fetchCollegeRegisterData() {
      this.colleges = [];
      this.registerCounts = [];
      this.tableData = [];
      // 处理参数isRegistered
      const isRegisteredValue = this.value === "选项1" ? 1 : 0;
      // console.log(this.value);
      // 处理参数time为yyyy-mm-dd hh-mm-ss
      const formattedDate = new Date(this.selectedDate)
        .toISOString()
        .replace(/T/, " ")
        .replace(/\.\d+Z$/, "");
      // console.log(formattedDate);
      // const ip = this.$store.getters.getIp;
      axios
        .get(
          `${this.$store.getters.getIp}/students/register/info/history/colleges`,
          {
            params: {
              time: formattedDate,
              isRegistered: isRegisteredValue,
            },
          }
        )
        .then((response) => {
          this.colleges = response.data.data.colleges;
          this.registerCounts = response.data.data.registerCounts;

          this.colleges.forEach((college, index) => {
            this.tableData.push({
              college: college,
              date: this.selectedDate,
              register: this.registerCounts[index],
            });
          });
          // console.log(this.tableData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "odd-row";
      } else if (rowIndex % 2 === 0) {
        return "even-row";
      }
      return "";
    },
    handleDateInput(value) {
      // console.log(typeof(this.selectedDate));
      this.selectedDate = new Date(value).toLocaleDateString("en-CA");
      this.tableData.forEach((row) => {
        row.date = this.selectedDate;
      });
    },
    openDialog(row) {
      this.dialogTableData = [];
      const isRegisteredValue = this.value === "选项1" ? 1 : 0;
      const formattedDate = new Date(row.date)
        .toISOString()
        .replace(/T/, " ")
        .replace(/\.\d+Z$/, "");

      axios
        .get(
          `${this.$store.getters.getIp}/students/register/info/history/college`,
          {
            params: {
              college: row.college,
              time: formattedDate,
              isRegistered: isRegisteredValue,
            },
          }
        )
        .then((response) => {
          this.totalData = response.data.data;
          // console.log("返回结果：", this.totalData);
          this.totalData.forEach((student, index) => {
            this.dialogTableData.push({
              studentId: student.id,
              name: student.name,
              major: student.major,
              phone: student.phone,
            });
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      this.dialogVisible = true;
    },
    load() {
      console.log(this.totalData);
      axios({
        url: `${this.$store.getters.getIp}/students/export`,
        method: "post",
        data: { students: this.totalData },
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
          if (this.value === "选项1") {
            fileName = `${this.totalData[0].college}注册名单.xlsx`;
          } else {
            fileName = `${this.totalData[0].college}未注册名单.xlsx`;
          }

          FileSaver.saveAs(blob, fileName);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    remind() {
      // 批量提醒按钮点击事件
    },
    redirectToTotal() {
      if (this.$route.path !== "/totalPrevious") {
        this.$router.push("/totalPrevious");
      }
    },
    redirectToUndergraduate() {
      if (this.$route.path !== "/underPrevious") {
        this.$router.push("/underPrevious");
      }
    },

    redirectToGraduate() {
      if (this.$route.path !== "/graduatePrevious") {
        this.$router.push("/graduatePrevious");
      }
    },

    redirectToCollege() {
      if (this.$route.path !== "/collegePrevious") {
        this.$router.push("/collegePrevious");
      }
    },

    redirectToMain() {
      this.$router.push("/mainMenu/student/register");
    },
  },
};
</script>