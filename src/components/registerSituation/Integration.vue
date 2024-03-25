<template>
      <div class="app-main" style="position: relative; background-color: #f0f3f4;">
            <div
                  style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
                  <div
                        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
                        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
                        <el-input v-model="search" placeholder="搜索"></el-input>
                  </div>
                  <div style="
                  margin-left: auto;
                  display: flex;
                  align-items: center;
                  margin-right:2%;
                ">
                    <el-avatar :size="35" :src="circleUrl"></el-avatar>
                    <div style="
                      margin-left: 10px;
                      color: #ffffff;
                  ">
                      <p style="margin: 0;">school@school.com</p>
                      <p style="margin: 0;font-size:14px;">管理员</p>
                    </div>
                    <div style="margin-left:10px;color:#ffffff">
                      <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                          <i class="el-icon-more" style="color:#ffffff;transform: rotate(90deg);"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item command="q">退出登录</el-dropdown-item>
                          <el-dropdown-item command="m">修改密码</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </div>
            </div>
            <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
                  <h2 style="
                      color: #747474;
                      display: inline-block;
                      left: 2%;
                      position:relative;
                      width:98%;
                    ">
                        往日注册情况
                  </h2>
                  <div
                        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
                        <el-breadcrumb separator="/">
                              <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
                                    id="active-link">首页</el-breadcrumb-item>
                              <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }"
                                    style="font-size: 17px; color: #747474;font-weight:600;"
                                    id="pre-link">学生注册情况</el-breadcrumb-item>
                              <el-breadcrumb-item style="font-size: 17px; color: #747474;font-weight:600;"
                                    id="current-link">往日注册情况</el-breadcrumb-item>
                        </el-breadcrumb>
                  </div>
            </div>
            <!-- 上方图表 -->
            <div style="position:relative;height:38%;width:100%;display:flex;">
                  <!-- 往日总注册率 -->
                  <div style="position:relative;height:100%;width:47%;background-color:#ffffff;left:2%;
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
                  border-radius:8px;" id="lineChartContainer">
                  </div>
                  <!-- 本科生注册率 -->
                  <div style="position:relative;height:100%;
                  left:4%;width:47%;background-color:#ffffff;
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
                  border-radius:8px;" id="UnderChartContainer">
                  </div>
            </div>
            <!-- 下方图表 -->
            <div style="position:relative;height:38%;width:100%;top:2%;display:flex;">
                  <div style="position:relative;height:100%;width:47%;background-color:#ffffff;left:2%;
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
                  border-radius:8px;" id="GraduateChartContainer">
                  </div>
                  <div style="position:relative;height:100%;
                  left:4%;width:47%;background-color:#ffffff;
                  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
                  border-radius:8px;">
                        <div style="position:relative;height:98%;top:1%;width:98%;left:1%;overflow-y:auto;">
                              <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                                    <el-table-column prop="college" label="学院" min-width="160" max-width="160"
                                          align="center">
                                    </el-table-column>
                                    <el-table-column label="日期" prop="date" min-width="120" max-width="160"
                                          align="center">
                                          <template slot-scope="scope">
                                                {{ scope.row.date }}
                                          </template>
                                    </el-table-column>
                                    <el-table-column prop="register" label="累计注册人数" min-width="160" max-width="200"
                                          align="center">
                                          <!-- 在表头中使用 el-select -->
                                          <template slot="header" slot-scope="scope">
                                                <el-select v-model="value" placeholder="请选择" id="typePicker" 
                                                       style="left: 10px">
                                                      <el-option v-for="item in options" :key="item.value"
                                                            :label="item.label" :value="item.value">
                                                      </el-option>
                                                </el-select>
                                          </template>
                                    </el-table-column>
                                    <el-table-column prop="menu" label="操作" min-width="130" max-width="200"
                                          align="center">
                                          <template slot-scope="scope">
                                                <el-button type="primary"
                                                      style="background-color: #209e91; border: #209e91;position:relative;"
                                                      size="small" @click="openDialog(scope.row)">名单</el-button>
                                          </template>
                                    </el-table-column>
                              </el-table>
                        </div>
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
                                    <el-button type="primary" style="background-color: #209e91; border: #209e91;"
                                          size="small" @click="remind" v-if="value === '累计未注册人数'">批量提醒</el-button>
                                    <!-- 下载按钮 -->
                                    <el-button type="primary" style="background-color: #209e91; border: #209e91;"
                                          size="small" @click="load">下载</el-button>
                              </div>
                        </el-dialog>
                  </div>
            </div>
      </div>
</template>
<style scoped>
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

/deep/ #typePicker {
      background-color: #ffffff;
      font-weight: 600;
      color: #909090;
}

#pre-link /deep/ .el-breadcrumb__inner:hover {
      font-weight: 600 !important;
      color: #209e91;
}

#pre-link /deep/ .el-breadcrumb__inner {
      font-weight: 600 !important;
      color: #209e91;
}

/deep/.el-input__inner {
      background-color: rgb(28, 43, 54);
      border: none;
      color: #747474
}
</style>
<script>
import axios from "axios";
import * as echarts from "echarts";
import FileSaver from "file-saver";
export default {
      data() {
            return {
                  circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                  search: "",
                  rowTotalData: [],
                  TotalNumber: 0,
                  rowRegisterData: [],
                  RegisterNumber: [0, 0, 0, 0, 0, 0, 0],
                  data: [],
                  underTotal: 0,
                  underEnrollment: [0, 0, 0, 0, 0, 0, 0],
                  rowEnrollmentData: [],
                  postTotal: 0,
                  postEnrollment: [0, 0, 0, 0, 0, 0, 0],
                  colleges: [],
                  registerCounts: [0, 0, 0, 0, 0],
                  tableData: [],
                  selectedDate: new Date().toLocaleDateString("en-CA"),
                  options: [
                        {
                              value: "累计注册人数",
                              label: "累计注册人数",
                        },
                        {
                              value: "累计未注册人数",
                              label: "累计未注册人数",
                        },
                  ],
                  value: "累计注册人数",
                  totalData: [],
                  dialogVisible: false, // 弹窗可见性
                  dialogTableData: [], // 弹窗中的表格数据
            };
      },
      mounted() {
            this.fetchTotalData()
                  .then(() => this.fetchTotalRegisterData())
                  .then(() => this.initLineChart())
                  .then(() => this.initUnderChart())
                  .then(() => this.initPostChart());
            this.fetchCollegeRegisterData();
            this.handleDateInput(this.selectedDate);
      },
      watch: {
            selectedDate: function (newDate, oldDate) {
                  this.fetchCollegeRegisterData();
            },
            value: function (newValue, oldValue) {
                  this.fetchCollegeRegisterData();
            },
      },
      methods: {
            // 获取总人数
            fetchTotalData() {
                  return axios
                        .get(`${this.$store.getters.getIp}/students/register/info`)
                        .then((response) => {
                              this.rowTotalData = response.data.data;
                              this.TotalNumber =
                                    this.rowTotalData.underCount + this.rowTotalData.postCount;
                              this.underTotal = this.rowTotalData.underCount;
                              this.postTotal = this.rowTotalData.postCount;
                        })
                        .catch((error) => {
                              console.error("Error fetching data:", error);
                        });
            },
            // 获取7天注册人数
            fetchTotalRegisterData() {
                  return axios
                        .get(`${this.$store.getters.getIp}/students/register/info/history`)
                        .then((response) => {
                              this.rowRegisterData = response.data.data;
                              this.rowRegisterData.forEach((data, index) => {
                                    const number = data.underEnrollment + data.postEnrollment;
                                    this.RegisterNumber[index] = number;
                              });
                              this.rowEnrollmentData = response.data.data;
                              this.rowEnrollmentData.forEach((data, index) => {
                                    this.underEnrollment[index] = data.underEnrollment;
                                    this.postEnrollment[index] = data.postEnrollment;
                              });
                              // console.log(this.RegisterNumber);
                        })
                        .catch((error) => {
                              console.error("Error fetching data:", error);
                        });
            },
            initLineChart() {
                  // 获取当前日期
                  const currentDate = new Date();
                  // 初始化日期数组，存放近 7 天的日期
                  const last7Days = [];
                  // 循环获取近 7 天的日期
                  for (let i = 6; i >= 0; i--) {
                        const day = new Date(currentDate);
                        day.setDate(currentDate.getDate() - i);

                        // 将日期格式化为字符串，可以根据需要调整格式
                        const formattedDate = `${day.getFullYear()}-${(day.getMonth() + 1)
                              .toString()
                              .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;

                        // 将日期添加到数组
                        last7Days.push(formattedDate);
                  }
                  // console.log(last7Days);

                  last7Days.forEach((date, index) => {
                        const enrollment = this.RegisterNumber[index];
                        // console.log(enrollment);
                        const percentage = (enrollment / this.TotalNumber) * 100;
                        // console.log(percentage);
                        this.data[index] = [date, percentage];
                  });

                  const dateList = this.data.map(function (item) {
                        return item[0];
                  });
                  const valueList = this.data.map(function (item) {
                        return item[1];
                  });

                  const lineChart = echarts.init(
                        document.getElementById("lineChartContainer")
                  );

                  const option = {
                        title: {
                              text: `${last7Days[0]} 至 ${last7Days[6]} 累计注册率折线图`,
                              left: "center",
                              top: "3%",
                              textStyle: {
                                    fontSize: 16,
                                    fontWeight: "bold",
                              },
                        },
                        xAxis: {
                              type: "category",
                              name: "时间",
                              data: dateList,
                              axisLabel: {
                                    formatter: function (value) {
                                          return value;
                                    },
                              },
                        },
                        yAxis: {
                              type: "value",
                              name: "累计注册率/%",
                              max: 100,
                              axisLabel: {
                                    formatter: "{value}",
                              },
                              interval: 20,
                        },
                        series: [
                              {
                                    type: "line",
                                    data: valueList,
                                    symbol: "circle",
                                    symbolSize: 6,
                                    lineStyle: {
                                          color: "#10c4b5",
                                          width: 2,
                                    },
                                    itemStyle: {
                                          color: "#0b6d62",
                                    },
                                    areaStyle: {
                                          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                                {
                                                      offset: 0,
                                                      color: "#6eba8c",
                                                },
                                                {
                                                      offset: 1,
                                                      color: "#0b6d62",
                                                },
                                          ]),
                                    },
                              },
                        ],
                  };

                  lineChart.setOption(option);
            },
            initUnderChart() {
                  // 获取当前日期
                  const currentDate = new Date();
                  // 初始化日期数组，存放近 7 天的日期
                  const last7Days = [];
                  // 循环获取近 7 天的日期
                  for (let i = 6; i >= 0; i--) {
                        const day = new Date(currentDate);
                        day.setDate(currentDate.getDate() - i);

                        // 将日期格式化为字符串，可以根据需要调整格式
                        const formattedDate = `${day.getFullYear()}-${(day.getMonth() + 1)
                              .toString()
                              .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;

                        // 将日期添加到数组
                        last7Days.push(formattedDate);
                  }
                  // console.log(last7Days);

                  last7Days.forEach((date, index) => {
                        const enrollment = this.underEnrollment[index];
                        // console.log(enrollment);
                        this.data[index] = [date, enrollment];
                  });

                  const dateList = this.data.map(function (item) {
                        return item[0];
                  });
                  const valueList = this.data.map(function (item) {
                        return item[1];
                  });

                  const lineChart = echarts.init(
                        document.getElementById("UnderChartContainer")
                  );

                  const option = {
                        title: {
                              text: `${last7Days[0]} 至 ${last7Days[6]} 本科生累计注册情况折线图`,
                              left: "center",
                              top: "3%",
                              textStyle: {
                                    fontSize: 16,
                                    fontWeight: "bold",
                              },
                        },
                        xAxis: {
                              type: "category",
                              name: "时间",
                              data: dateList,
                              axisLabel: {
                                    formatter: function (value) {
                                          return value;
                                    },
                              },
                        },
                        yAxis: {
                              type: "value",
                              name: "累计注册人数/人",
                              max: 1000,
                              axisLabel: {
                                    formatter: "{value}",
                              },
                              interval: 100,
                        },
                        series: [
                              {
                                    type: "line",
                                    data: valueList,
                                    symbol: "circle",
                                    symbolSize: 6,
                                    lineStyle: {
                                          color: "#9dcd88",
                                          width: 2,
                                    },
                                    itemStyle: {
                                          color: "#5d9e77",
                                    },
                                    areaStyle: {
                                          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                                {
                                                      offset: 0,
                                                      color: "#9dcd88",
                                                },
                                                {
                                                      offset: 1,
                                                      color: "#5d9e77",
                                                },
                                          ]),
                                    },
                              },
                        ],
                  };

                  lineChart.setOption(option);
            },
            initPostChart() {
                  // 获取当前日期
                  const currentDate = new Date();
                  // 初始化日期数组，存放近 7 天的日期
                  const last7Days = [];
                  // 循环获取近 7 天的日期
                  for (let i = 6; i >= 0; i--) {
                        const day = new Date(currentDate);
                        day.setDate(currentDate.getDate() - i);
                        // 将日期格式化为字符串，可以根据需要调整格式
                        const formattedDate = `${day.getFullYear()}-${(day.getMonth() + 1)
                              .toString()
                              .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
                        // 将日期添加到数组
                        last7Days.push(formattedDate);
                  }
                  console.log(last7Days);
                  last7Days.forEach((date, index) => {
                        const enrollment = this.postEnrollment[index];
                        // console.log(enrollment);
                        this.data[index] = [date, enrollment];
                  });
                  const dateList = this.data.map(function (item) {
                        return item[0];
                  });
                  const valueList = this.data.map(function (item) {
                        return item[1];
                  });
                  const lineChart = echarts.init(
                        document.getElementById("GraduateChartContainer")
                  );
                  const option = {
                        title: {
                              text: `${last7Days[0]} 至 ${last7Days[6]} 研究生累计注册情况折线图`,
                              left: "center",
                              top: "3%",
                              textStyle: {
                                    fontSize: 16,
                                    fontWeight: "bold",
                              },
                        },
                        xAxis: {
                              type: "category",
                              name: "时间",
                              data: dateList,
                              axisLabel: {
                                    formatter: function (value) {
                                          return value;
                                    },
                              },
                        },
                        yAxis: {
                              type: "value",
                              name: "累计注册人数/人",
                              max: 1000,
                              axisLabel: {
                                    formatter: "{value}",
                              },
                              interval: 100,
                        },
                        series: [
                              {
                                    type: "line",
                                    data: valueList,
                                    symbol: "circle",
                                    symbolSize: 6,
                                    lineStyle: {
                                          color: "#9dcd88",
                                          width: 2,
                                    },
                                    itemStyle: {
                                          color: "#5d9e77",
                                    },
                                    areaStyle: {
                                          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                                {
                                                      offset: 0,
                                                      color: "#9dcd88",
                                                },
                                                {
                                                      offset: 1,
                                                      color: "#5d9e77",
                                                },
                                          ]),
                                    },
                              },
                        ],
                  };
                  lineChart.setOption(option);
            },
            fetchCollegeRegisterData() {
                  this.colleges = [];
                  this.registerCounts = [];
                  this.tableData = [];
                  // 处理参数isRegistered
                  const isRegisteredValue = this.value === "累计注册人数" ? 1 : 0;
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
                        return "#e5e5e5";
                  } else if (rowIndex % 2 === 0) {
                        return "#ffffff";
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
            // 学院注册数据名单
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
            handleCommand(command) {
      if (command == 'q') {
        this.quit();
      }
      else if (command == 'm') {
        this.$router.push("/mainMenu/config/safety");
      }
    },
    quit() {
      axios
        .post(`${this.$store.getters.getIp}/administrators/logout`)
        .then((response) => {
          if (response.data.code) {
            this.$message.success('退出成功');
            this.$router.push('/login');
          }
          else {
            this.$message.error(response.data.msg);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
      },
}
</script>