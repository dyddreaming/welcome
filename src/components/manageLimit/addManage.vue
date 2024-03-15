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
        新增管理员
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
            :to="{ path: '/mainMenu/limit/manager' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >管理员列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >新增管理员</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 75%;
        top: 1%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        color: #747474;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <!-- 第一行 -->
      <div
        style="
          position: relative;
          height: 20%;
          width: 90%;
          top: 5%;
          left: 5%;
          display: flex;
        "
      >
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px">姓名*:</span>
          <el-input
            v-model="nameInput"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 46%"
          >
          </el-input>
        </div>
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px; left: 7%">性别*:</span>
          <div style="position: relative">
            <el-radio v-model="radio" label="0">女</el-radio>
            <el-radio v-model="radio" label="1">男</el-radio>
          </div>
        </div>
      </div>
      <!-- 第二行 -->
      <div
        style="
          position: relative;
          height: 20%;
          width: 90%;
          top: 5%;
          left: 5%;
          display: flex;
        "
      >
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px; left: 7%">专业学院*:</span>
          <el-select
            v-model="collegeValue"
            placeholder="请选择"
            :popper-class="'scrollable-dropdown'"
            style="position: relative; height: 30px; width: 40%"
          >
            <el-option
              v-for="item in CollegeOptions"
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
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px">账号*:</span>
          <el-input
            v-model="accountInput"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 46%"
          >
          </el-input>
        </div>
      </div>
      <!-- 第三行 -->
      <div
        style="
          position: relative;
          height: 20%;
          width: 90%;
          top: 5%;
          left: 5%;
          display: flex;
        "
      >
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px; left: 7%">身份证号*:</span>
          <el-input
            v-model="cardInput"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 40%"
          >
          </el-input>
        </div>
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px; left: 7%">手机号*:</span>
          <el-input
            v-model="phoneInput"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 43%"
          >
          </el-input>
        </div>
      </div>
      <!-- 第四行 -->
      <div
        style="
          position: relative;
          height: 20%;
          width: 90%;
          top: 5%;
          left: 5%;
          display: flex;
        "
      >
        <div
          style="
            position: relative;
            width: 50%;
            display: flex;
            align-items: center;
          "
        >
          <span style="margin-right: 10px; left: 7%">等级*:</span>
          <el-select
            v-model="grade"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 46%"
          >
            <el-option
              v-for="item in gradeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 操作 -->
      <div
        style="
          position: relative;
          width: 96%;
          height: 10%;
          top: 10%;
          left:2%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <el-button
          type="primary"
          style="background-color: #209e91; border: #209e91"
          size="small"
          @click="save"
          >保存</el-button
        >
        <el-button
          type="primary"
          style="background-color: #2dacd1; border: #2dacd1"
          size="small"
          @click="saveContinue"
          >保存并继续添加</el-button
        >
        <el-button
          type="primary"
          style="background-color: #90b900; border: #90b900"
          size="small"
          @click="cancel"
          >取消</el-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "../../../public/static/css/aside.css";

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

#pre-link /deep/ .el-breadcrumb__inner:hover {
  font-weight: 600 !important;
  color: #209e91;
}

#pre-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #209e91;
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
      nameInput: "",
      radio: "",
      collegeValue: "",
      CollegeOptions: [
        // {
        //   value: "计算机学院",
        //   label: "计算机学院",
        // },
        // {
        //   value: "建筑学院",
        //   label: "建筑学院",
        // },
        // {
        //   value: "数学学院",
        //   label: "数学学院",
        // },
        // {
        //   value: "经管学院",
        //   label: "经管学院",
        // },
        // {
        //   value: "无",
        //   value: "无",
        // },
      ],
      accountInput: "",
      cardInput: "",
      phoneInput: "",
      grade: "",
      gradeOptions: [
        {
          value: "校级",
          label: "校级",
        },
        {
          value: "院级",
          label: "院级",
        },
      ],
      newManage: null,
    };
  },
  mounted() {
    // this.loadData();
    this.fetchCollegesRegisterData();
  },
  methods: {
    // 获取学院数据
    fetchCollegesRegisterData() {
      this.CollegeOptions = [];
      axios
        .get(`${this.$store.getters.getIp}/colleges/list`)
        .then((response) => {
          this.totalData = response.data.data;
          // console.log(this.totalData);
          this.totalData.forEach((item) => {
            this.CollegeOptions.push({
              value : item.name,
              label : item.name,
            });
          });
          console.log(this.CollegeOptions);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // console.log(this.$store.getters.getIp);
        });
    },
    loadData() {
      this.newManage = this.$store.getters.getNewManage;
      if (this.newManage != null) {
        this.nameInput = this.newManage.nameInput;
        this.radio = this.newManage.radio;
        this.collegeValue = this.newManage.collegeValue;
        this.accountInput = this.newManage.accountInput;
        this.cardInput = this.newManage.cardInput;
        this.phoneInput = this.newManage.phoneInput;
        this.grade = this.newManage.grade;
      }
    },
    putData() {
      let putForm = {
        nameInput: this.nameInput,
        radio: this.radio,
        collegeValue: this.collegeValue,
        accountInput: this.accountInput,
        cardInput: this.cardInput,
        phoneInput: this.phoneInput,
        grade: this.grade,
      };
      this.$store.commit("setNewManage", putForm);
    },
    cancel() {
      this.reset();
      this.$router.push("/mainMenu/limit/manager");
    },
    save() {
      let name = this.nameInput;
      let username = this.accountInput;
      let gender = this.radio === "1" ? 1 : 0;
      let college = this.collegeValue === "无" ? null : this.collegeValue;
      let level = this.grade === "校级" ? 0 : 1;
      let idNumber = this.cardInput;
      let phone = this.phoneInput;
      let form = {
        name: name,
        username: username,
        gender: gender,
        college: college,
        idNumber,
        phone: phone,
        level: level,
      };
      console.log(form);
      axios
        .post(`${this.$store.getters.getIp}/administrators`, {
          name,
          username,
          gender,
          college,
          idNumber,
          phone,
          level,
        })
        .then((response) => {
          let message = response.data.msg;
          if (message == "success") {
            this.$message.success("添加成功");
            this.reset();
            // this.putData();
          } else if (message == "账号重复") {
            this.$message.error("账号重复");
          } else {
            this.$message.error("该身份证号已经拥有过一个账号，无法重复添加");
          }
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("提交失败:", error);
        });
    },
    saveContinue() {
      this.save();
      this.reset();
    },
    reset() {
      this.nameInput = "";
      this.radio = "";
      this.collegeValue = "";
      this.accountInput = "";
      this.cardInput = "";
      this.phoneInput = "";
      this.grade = "";
      // this.putData();
    },
  },
};
</script>