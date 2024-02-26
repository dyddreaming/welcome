<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <h2 style="text-align: center; flex: 1">当前学院列表</h2>
      <el-button
        type="primary"
        style="
          background-color: #fa5e00;
          border: none;
          margin-right: 50px;
          border-radius: 10px;
          position: relative;
          width: 7%;
        "
        @click="showDialog"
        >新增</el-button
      >
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
    </div>
    <hr style="border: none; border-top: 2px solid #ffffff; margin-top: 10px" />
    <div style="position: relative; height: 80%; width: 100%">
      <!-- 第一行 -->
      <div style="position: relative; width: 100%; height: 25%">
        <div
          class="showData"
          style="position: relative; height: 100%; width: 20%"
        >
          <div
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            "
          >
            <div
              style="
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: linear-gradient(to bottom, #fa5e00, #f79400);
              "
            >
              <span
                style="
                  position: absolute;
                  top: 35%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  color: white;
                  font-size: 14px;
                  white-space: nowrap;
                "
              >
                计算机学院
              </span>
              <el-checkbox
                v-model="select"
                style="
                  position: absolute;
                  bottom: 40%;
                  left: 50%;
                  transform: translateX(-50%);
                "
              ></el-checkbox>
            </div>
            <div
              style="
                text-align: center;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <el-button
                type="success"
                size="mini"
                style="background-color: #f89300; border: none"
                @click="handleReset(scope.row)"
                >重置</el-button
              >
              <el-button
                type="danger"
                size="mini"
                style="background-color: #fa5e00; border: none"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 第二行 -->
      <div
        style="
          position: relative;
          width: 100%;
          height: 25%;
          background-color: aquamarine;
        "
      ></div>
      <!-- 第三行 -->
      <div
        style="
          position: relative;
          width: 100%;
          height: 25%;
          background-color: coral;
        "
      ></div>
      <!-- 第四行 -->
      <div
        style="
          position: relative;
          width: 100%;
          height: 25%;
          background-color: darksalmon;
        "
      ></div>
    </div>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
</style>
  
  <script>
export default {
  data() {
    return {
      select: "",
      dialogVisible: false,
      inputValue: "",
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    closeDialog(done) {
      if (done) {
        this.inputValue = "";
        this.dialogVisible = false;
      }
    },
    handleConfirm() {
      if (this.inputValue === "") {
        this.$message.error("学院名称不能为空，请输入内容!");
      } else {
        console.log(this.inputValue);
        this.closeDialog(true);
      }
    },
  },
};
</script>