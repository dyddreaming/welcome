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
    <div style="margin-top: 10px; width: 100%; height: 9%; display: flex">
      <h2
        style="
          color: #747474;
          display: inline-block;
          left: 2%;
          position: relative;
          width: 98%;
        "
      >
        学院列表
      </h2>
      <div
        style="
          position: relative;
          height: 100%;
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          right: 2%;
        "
      >
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            :to="{ path: '/mainMenu/student/register' }"
            style="font-size: 17px"
            id="active-link"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >学院列表</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <hr style="border: none; border-top: 2px solid #ffffff; margin-top: 10px" />
    <div
      style="
        position: relative;
        height: 73%;
        width: 96%;
        left: 2%;
        overflow-y: auto;
        display: flex;
      "
    >
      <!-- 左侧数据表 -->
      <div
        style="
          position: relative;
          height: 100%;
          background-color: #209e91;
          width: 32%;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        "
      >
        <el-table
          @selection-change="handleSelectionChange1"
          :data="tableData1"
          border
          style="width: 100%; height: 100vh;"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="学院名"
            width="160px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center" width="180px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                @click="handleDefine(scope.row.name)"
                >修改</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                @click="handleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 中间数据表 -->
      <div
        style="
          position: relative;
          height: 100%;
          left: 2%;
          background-color: #e85656;
          width: 32%;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        "
      >
        <el-table
          @selection-change="handleSelectionChange2"
          :data="tableData2"
          border
          style="width: 100%; height: 100vh;"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="学院名"
            width="160px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center" width="180px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                @click="handleDefine(scope.row.name)"
                >修改</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                @click="handleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 右侧数据表 -->
      <div
        style="
          position: relative;
          height: 100%;
          left: 4%;
          background-color: aquamarine;
          width: 32%;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        "
      >
        <el-table
          @selection-change="handleSelectionChange3"
          :data="tableData3"
          border
          style="width: 100%; height: 100vh;"
        >
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="学院名"
            width="160px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center" width="180px">
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                @click="handleDefine(scope.row.name)"
                >修改</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                @click="handleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 新增学院弹出框 -->
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="closeDialog"
      >
        <el-form ref="form" label-width="100px" label-position="top">
          <el-form-item label="请输入新增学院名：">
            <el-input v-model="inputValue"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确认</el-button>
        </span>
      </el-dialog>
      <!-- 修改学院弹出框 -->
      <el-dialog
        :visible.sync="editDialogVisible"
        width="30%"
        :before-close="closeEditDialog"
      >
        <el-form ref="form" label-width="100px" label-position="top">
          <el-form-item label="学院名：">
            <el-input v-model="collegeName"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleModify">确认</el-button>
        </span></el-dialog
      >
    </div>
    <div
      style="
        position: relative;
        height: 5%;
        width: 96%;
        left: 2%;
        top: 1%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      "
    >
      <el-button
        type="primary"
        style="background-color: #209e91; border: #209e91"
        size="small"
        @click="showDialog"
        >新增</el-button
      >
      <el-button
        type="primary"
        style="background-color: #e85656; border: #e85656"
        size="small"
        @click="groupDelete"
        >批量删除</el-button
      >
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
      select: "",
      dialogVisible: false,
      editDialogVisible: false,
      inputValue: "",
      collegeName: "",
      totalData: [],
      collegeList: [],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      selectedIds1: [],
      selectedIds2: [],
      selectedIds3: [],
      selectedIds: [],
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  mounted() {
    this.fetchCollegesRegisterData();
  },
  methods: {
    // 获取选择项
    handleSelectionChange1(selection) {
      this.selectedIds1 = selection.map((item) => item.id);
    },
    handleSelectionChange2(selection) {
      this.selectedIds2 = selection.map((item) => item.id);
    },
    handleSelectionChange3(selection) {
      this.selectedIds3 = selection.map((item) => item.id);
    },
    // 获取学院数据
    fetchCollegesRegisterData() {
        this.tableData1 = [];
        this.tableData2 = [];
        this.tableData3 = [];
      axios
        .get(`${this.$store.getters.getIp}/colleges/list`)
        .then((response) => {
          this.totalData = response.data.data;
          // console.log(this.totalData);
          this.totalData.forEach((item) => {
            this.collegeList.push({
              id: item.id,
              name: item.name,
              selected: false,
            });
            this.tableData1 = this.collegeList.slice(0, 10);
            this.tableData2 = this.collegeList.slice(10, 20);
            this.tableData3 = this.collegeList.slice(20);
          });
          console.log(this.collegeList);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // console.log(this.$store.getters.getIp);
        });
    },
    // 展示对话框
    showDialog() {
      this.dialogVisible = true;
    },
    openEditDialog() {
      this.editDialogVisible = true;
    },
    // 关闭对话框
    closeDialog(done) {
      if (done) {
        this.inputValue = "";
        this.dialogVisible = false;
      }
    },
    closeEditDialog() {
      this.editDialogVisible = false;
    },
    // 提交表单
    handleConfirm() {
      if (this.inputValue === "") {
        this.$message.error("学院名称不能为空，请输入内容!");
      } else {
        // console.log(this.inputValue);
        let name = this.inputValue;
        axios
          .post(`${this.$store.getters.getIp}/colleges`, {
            name,
          })
          .then((response) => {
            this.$nextTick(() => {
              //   window.location.reload();
              this.$message.success("添加成功");
              this.fetchCollegesRegisterData();
            });
            console.log(response.data);
          })
          .catch((error) => {
            console.error("添加失败:", error);
          });
      }
      this.closeDialog(true);
    },
    // 批量删除
    groupDelete() {
      this.selectedIds = this.selectedIds1.concat(
        this.selectedIds2,
        this.selectedIds3
      );
      console.log("选择的学院ID值", this.selectedIds);
      if (this.selectedIds.length === 0) {
        this.$message.warning("请先选择要操作的项");
      } else {
        this.$confirm("确认删除吗？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.doDelete();
            this.selectedIds = [];
          })
          .catch(() => {});
      }
    },
    doDelete() {
      // 发送axios请求删除学院
      const url = `${
        this.$store.getters.getIp
      }/colleges?ids=${this.selectedIds.join("&ids=")}`;

      axios
        .delete(url)
        .then((response) => {
          if (response.data.code) {
            console.log(response.data);
            this.$nextTick(() => {
              // window.location.reload();
              this.fetchCollegesRegisterData();
              this.$message({
                message: "删除成功",
                type: "success",
              });
              this.selectedIds = [];
            });
          } else {
            console.log(response.data);
            // 去掉末尾的\（如果存在）
            const collegeName = response.data.msg.replace(/\\$/, "");
            this.$message.error(
              "错误信息：" + collegeName + "已有学生无法删除"
            );
          }
        })
        .catch((error) => {
          console.error("删除失败", error);
          this.$message.error("删除失败，请稍后重试");
        });
    },
    handleDelete(id) {
      this.$confirm("确认删除吗？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(id);
          this.selectedIds.push(id);
          this.doDelete();
        })
        .catch(() => {});
    },
    // 修改学院
    handleDefine(college) {
      this.collegeName = college;
      this.$store.commit("setCollegeID", college.id);
      this.openEditDialog();
    },
    handleModify() {
      if (this.collegeName === "") {
        this.$message.error("学院名称不能为空，请输入内容!");
      } else {
        let name = this.collegeName;
        let id = this.$store.getters.getCollegeID;
        axios
          .put(`${this.$store.getters.getIp}/colleges`, {
            id,
            name,
          })
          .then((response) => {
            this.$nextTick(() => {
              //   window.location.reload();
              this.$message.success("修改成功");
              this.fetchCollegesRegisterData();
            });
            console.log(response.data);
          })
          .catch((error) => {
            console.error("修改失败:", error);
          });
      }
      this.closeDialog(true);
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
};
</script>