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
        广告设置
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
            :to="{ path: '/mainMenu/add/business' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >广告通过列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >广告设置</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 73%;
        top: 1%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      "
    >
      <!-- 广告推送机制 -->
      <div style="position: relative; height: 24%; width: 100%; top: 1%">
        <div
          style="
            position: relative;
            height: 25%;
            width: 100%;
            text-align: center;
            font-size: 25px;
            background-color: #ffffff;
            color: #747474;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            border-bottom: 2px solid #e0e0e0;
          "
        >
          广告推送机制设置
        </div>
        <div
          style="
            position: relative;
            height: 75%;
            width: 100%;
            text-align: center;
            display: flex;
          "
        >
          <div style="position: relative; height: 70%; width: 25%; top: 30%">
            <el-checkbox
              v-model="address"
              label="所在地"
              border
              style="position: relative; width: 40%"
            ></el-checkbox>
          </div>
          <div style="position: relative; height: 70%; width: 25%; top: 30%">
            <el-checkbox
              v-model="keyword"
              label="关键词"
              border
              style="position: relative; width: 40%"
            ></el-checkbox>
          </div>
          <div style="position: relative; height: 70%; width: 25%; top: 30%">
            <el-checkbox
              v-model="college"
              label="学院"
              border
              style="position: relative; width: 40%"
            ></el-checkbox>
          </div>
          <div style="position: relative; height: 70%; width: 25%; top: 30%">
            <el-checkbox
              v-model="gender"
              label="性别"
              border
              style="position: relative; width: 40%"
            ></el-checkbox>
          </div>
        </div>
      </div>
      <!-- 广告推广费用设置 -->
      <div style="position: relative; height: 74%; width: 100%; top: 1%">
        <div
          style="
            position: relative;
            height: 9%;
            width: 100%;
            text-align: center;
            background-color: #ffffff;
            color: #747474;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            border-bottom: 2px solid #e0e0e0;
            border-top: 2px solid #e0e0e0;
          "
        >
          广告推广费用设置
        </div>
        <div
          style="position: relative; height: 92%; width: 100%; display: flex"
        >
          <div
            style="
              position: relative;
              width: 33%;
              height: 100%;
              border-right: 2px solid #e0e0e0;
            "
          >
            <div
              style="
                position: relative;
                height: 8%;
                width: 100%;
                text-align: center;
                color: #808080;
                display: flex;
                top: 5%;
                justify-content: center;
                align-items: center;
                font-size: 18px;
              "
            >
              关键词个数
            </div>
            <div
              style="
                position: relative;
                top: 10%;
                width: 100%;
                display: flex;
                height: 10%;
                align-items: center;
              "
            >
              <span
                style="
                  margin-right: 16%;
                  position: relative;
                  left: 14%;
                  color: #808080;
                "
                >单个关键词费用:</span
              >
              <el-input
                v-model="wordValue"
                placeholder="单位：元"
                style="position: relative; height: 40px !important; width: 40%"
              >
              </el-input>
            </div>
            <div
              style="
                position: relative;
                height: 20%;
                width: 86%;
                top: 10%;
                display: flex;
                left: 5%;
                align-items: center;
              "
            >
              <el-checkbox v-model="overFive" label="大于5个8折"></el-checkbox>
              <el-checkbox
                v-model="overTen"
                label="大于10个7.5折"
              ></el-checkbox>
              <el-checkbox
                v-model="oveFifteen"
                label="大于15个7折"
              ></el-checkbox>
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 33%;
              height: 100%;
              border-right: 2px solid #e0e0e0;
            "
          >
            <div
              style="
                position: relative;
                height: 8%;
                width: 100%;
                text-align: center;
                color: #808080;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                top: 5%;
              "
            >
              关键词等级
            </div>
            <div
              style="
                position: relative;
                top: 10%;
                width: 100%;
                height: 50%;
                align-items: center;
              "
            >
              <div
                style="
                  position: relative;
                  height: 25%;
                  width: 100%;
                  align-items: center;
                "
              >
                <span
                  style="
                    margin-right: 16%;
                    position: relative;
                    left: 14%;
                    color: #808080;
                  "
                  >一级关键词费用:</span
                >
                <el-input
                  v-model="first"
                  placeholder="单位：元"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 40%;
                  "
                >
                </el-input>
              </div>
              <div
                style="position: relative; height: 25%; width: 100%; top: 7%"
              >
                <span
                  style="
                    margin-right: 16%;
                    position: relative;
                    left: 14%;
                    color: #808080;
                  "
                  >二级关键词费用:</span
                >
                <el-input
                  v-model="second"
                  placeholder="单位：元"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 40%;
                  "
                >
                </el-input>
              </div>
              <div
                style="position: relative; height: 25%; width: 100%; top: 14%"
              >
                <span
                  style="
                    margin-right: 16%;
                    position: relative;
                    left: 14%;
                    color: #808080;
                  "
                  >三级关键词费用:</span
                >
                <el-input
                  v-model="third"
                  placeholder="单位：元"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 40%;
                  "
                >
                </el-input>
              </div>
            </div>
          </div>
          <div style="position: relative; width: 34%; height: 100%">
            <div
              style="
                position: relative;
                height: 50%;
                width: 100%;
                border-bottom: 2px solid #e0e0e0;
              "
            >
              <div
                style="
                  position: relative;
                  height: 8%;
                  width: 100%;
                  text-align: center;
                  color: #808080;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 18px;
                  top: 15%;
                "
              >
                投放时长
              </div>
              <div
                style="
                  position: relative;
                  top: 28%;
                  width: 100%;
                  height: 50%;
                  align-items: center;
                "
              >
                <span
                  style="
                    margin-right: 16%;
                    position: relative;
                    left: 14%;
                    color: #808080;
                  "
                  >每小时费用:</span
                >
                <el-input
                  v-model="putValue"
                  placeholder="单位：元"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 40%;
                  "
                >
                </el-input>
              </div>
            </div>
            <div style="position: relative; height: 50%; width: 100%">
              <div
                style="
                  position: relative;
                  height: 8%;
                  width: 100%;
                  text-align: center;
                  color: #808080;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 18px;
                  top: 15%;
                "
              >
                首页推广时长
              </div>
              <div
                style="
                  position: relative;
                  top: 28%;
                  width: 100%;
                  height: 50%;
                  align-items: center;
                "
              >
                <span
                  style="
                    margin-right: 16%;
                    position: relative;
                    left: 14%;
                    color: #808080;
                  "
                  >首页推广时长:</span
                >
                <el-input
                  v-model="topValue"
                  placeholder="单位：元"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 40%;
                  "
                >
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 5%;
        width: 96%;
        display: flex;
        left: 2%;
        justify-content: flex-end;
        align-items: center;
        top: 2%;
      "
    >
      <el-button
        type="primary"
        style="background-color: #209e91; border: #209e91"
        size="small"
        @click="save"
        >保存</el-button
      >
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
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    searchWord:"",
      address: "",
      college: "",
      gender: "",
      keyword: "",
      wordValue: "",
      overFive: "",
      overTen: "",
      oveFifteen: "",
      first: "",
      second: "",
      third: "",
      putValue: "",
      topValue: "",
    };
  },
  methods:{
    save(){
      this.$message({
            message: "保存成功",
            type: "success",
          });
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