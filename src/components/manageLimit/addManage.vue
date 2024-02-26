<template>
  <div style="height: 100%; width: 100%; background-color: #ffda9f">
    <div
      style="
        position: relative;
        height: 70%;
        top: 15%;
        width: 80%;
        left: 10%;
        background-color: #ffffff;
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
          width: 100%;
          height: 10%;
          top: 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <el-button
          type="primary"
          size="mini"
          style="background-color: #fa5e00; border: none; height: 65%"
          @click="save"
          >保存</el-button
        >
        <el-button
          type="success"
          size="mini"
          style="
            background-color: #f89300;
            border: none;
            height: 65%;
            margin-left: 10px;
          "
          @click="saveContinue"
          >保存并继续添加</el-button
        >
        <el-button
          type="danger"
          size="mini"
          style="
            background-color: #cccccc;
            border: none;
            height: 65%;
            margin-left: 10px;
          "
          @click="cancel"
          >取消</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameInput: "",
      radio: "",
      collegeValue: "",
      CollegeOptions: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "建筑学院",
          label: "建筑学院",
        },
        {
          value: "数学学院",
          label: "数学学院",
        },
        {
          value: "经济学院",
          label: "经济学院",
        },
        {
          value: "无",
          value: "无",
        },
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
    };
  },
  methods:{
    cancel(){
        this.$router.push("/mainMenu/limit/manager");
    }
  },
};
</script>