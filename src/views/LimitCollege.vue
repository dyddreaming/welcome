<template>
  <div class="app-main" style="position: relative">
    <div style="
        position: relative;
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      ">
      <div style="position:relative;height:100%;width:20%;left:40%;">
        <h2 style="text-align: center; flex: 1">当前学院列表</h2>
      </div>
      <el-button type="primary" style="
          background-color: #fa5e00;
          border: none;
          margin-right: 50px;
          border-radius: 5px;
          position: relative;
          left:30%;
          width: 7%;
        " @click="showDialog">新增</el-button>
      <el-button type="primary" style="
          background-color: #fa5e00;
          border: none;
          margin-right: 50px;
          border-radius: 5px;
          position: relative;
          width: 9%;
        " @click="groupDelete">批量删除</el-button>
      <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="closeDialog">
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
      <el-dialog :visible.sync="editDialogVisible" width="30%" :before-close="closeEditDialog">
        <el-form ref="form" label-width="100px" label-position="top">
          <el-form-item label="学院名：">
            <el-input v-model="collegeName"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleModify">确认</el-button>
        </span></el-dialog>
    </div>
    <hr style="border: none; border-top: 2px solid #ffffff; margin-top: 10px" />
    <div style="position: relative; height: 83%; width: 96%; left: 2%;overflow-y:auto">
      <div v-for="(college, index) in collegeList" :key="index" style="
          position: relative;
          width: calc(100% / 7);
          height: 25%;
          float: left;
        ">
        <div class="showData" style="position: relative; width: 100%; height: 100%">
          <div style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            ">
            <div style="
                position: relative;
                left: 8%;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: linear-gradient(to bottom, #fa5e00, #f79400);
              ">
              <span style="
                  position: absolute;
                  top: 40%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: white;
                  font-size: 14px;
                  white-space: nowrap;
                ">{{ college.name }}</span>
              <el-checkbox v-model="college.selected" style="
                  position: absolute;
                  bottom: 25%;
                  left: 50%;
                  transform: translateX(-50%);
                "></el-checkbox>
            </div>
            <div style="
                text-align: center;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                left: 15%;
              ">
              <el-button type="success" size="mini" style="background-color: #f89300; border: none"
                @click="handleDefine(college)">修改</el-button>
              <el-button type="danger" size="mini" style="background-color: #fa5e00; border: none"
                @click="handleDelete(college.id)">删除</el-button>
            </div>
          </div>
        </div>
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
      select: "",
      dialogVisible: false,
      editDialogVisible: false,
      inputValue: "",
      collegeName: "",
      totalData: [],
      collegeList: [],
      selectedIds: [],
    };
  },
  mounted() {
    this.fetchCollegesRegisterData();
  },
  methods: {
    // 获取学院数据
    fetchCollegesRegisterData() {
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
              window.location.reload();
              this.$message.success("添加成功");
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
      this.collegeList.forEach((item) => {
        if (item.selected) {
          this.selectedIds.push(item.id);
        }
      });
      // console.log("选择的学院ID值", this.selectedIds);
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
          .catch(() => { });
      }
    },
    doDelete() {
      // 发送axios请求删除学院
      const url = `${this.$store.getters.getIp
        }/colleges?ids=${this.selectedIds.join("&ids=")}`;

      axios
        .delete(url)
        .then((response) => {
          if (response.data.code) {
            console.log(response.data);
            this.$nextTick(() => {
              window.location.reload();
              this.$message({
                message: "删除成功",
                type: "success",
              });
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
          this.selectedIds.push(id);
          this.doDelete();
        })
        .catch(() => { });
    },
    // 修改学院
    handleDefine(college) {
      this.collegeName = college.name;
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
              window.location.reload();
              this.$message.success("修改成功");
            });
            console.log(response.data);
          })
          .catch((error) => {
            console.error("修改失败:", error);
          });
      }
      this.closeDialog(true);
    },
  },
};
</script>