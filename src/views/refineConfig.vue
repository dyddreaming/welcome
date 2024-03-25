<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4;height: 100vh;
  overflow-y: auto;">
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
          v-model="search"
          placeholder="搜索"
          id="searchPart"
        ></el-input>
      </div>
      <div
        style="
          margin-left: auto;
          display: flex;
          align-items: center;
          margin-right: 2%;
        "
      >
        <el-avatar :size="35" :src="circleUrl"></el-avatar>
        <div style="margin-left: 10px; color: #ffffff">
          <p style="margin: 0">school@school.com</p>
          <p style="margin: 0; font-size: 14px">管理员</p>
        </div>
        <div style="margin-left: 10px; color: #ffffff">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i
                class="el-icon-more"
                style="color: #ffffff; transform: rotate(90deg)"
              ></i>
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
        平台参数配置
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
            >平台参数配置</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div style="position: relative; height: 125%; width: 100%">
      <div style="position: relative; height: 33%; width: 100%; display: flex">
        <div
          style="
            position: relative;
            height: 90%;
            width: 47%;
            left: 2%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          "
        >
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 3%;
              color: #747474;
              text-align:center;
            "
          >
            密码安全
          </div>
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              left: 3%;
              font-size: 14px;
              color: #cccccc;
            "
          >
            更改或查看密码
          </div>
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              left: 3%;
              font-size: 14px;
              color: #cccccc;
            "
          >
            旧密码
          </div>
          <div
            style="
              position: relative;
              height: 15%;
              width: 95%;
              left: 3%;
              display: flex;
            "
          >
            <input
              type="password"
              style="
                width: 50%;
                height: 80%;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
              v-model="oldPassWord"
            />
          </div>
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              left: 3%;
              font-size: 14px;
              color: #cccccc;
            "
          >
            新密码
          </div>
          <div style="position: relative; height: 15%; width: 95%; left: 3%">
            <input
              type="password"
              style="
                width: 50%;
                height: 80%;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
              "
              v-model="newPassWord"
            />
          </div>
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              left: 3%;
              font-size: 14px;
              color: #cccccc;
            "
          >
            最少5个字符
          </div>
          <div
            style="
              position: relative;
              height: 10%;
              width: 96%;
              left: 2%;
              top:2%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改</el-button
            >
          </div>
        </div>
        <div
          style="
            position: relative;
            height: 90%;
            width: 47%;
            left: 4%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            color: #747474;
          "
        >
        <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 2%;
              color: #747474;
              text-align:center;
            "
          >
            消息提醒
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >手动任务审核提醒：</span
            >
            <el-switch
              v-model="taskValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >商家广告信息提醒：</span
            >
            <el-switch
              v-model="advertiseValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >学生留言信息提醒：</span
            >
            <el-switch
              v-model="messageValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 25%;
              width: 96%;
              left: 2%;
              top:4%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改
            </el-button>
          </div>
        </div>
      </div>
      <div style="position: relative; height: 33%; width: 100%; display: flex">
        <div
          style="
          color:#747474;
            position: relative;
            height: 90%;
            width: 47%;
            left: 2%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          "
        >
        <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 2%;
              color: #747474;
              text-align:center;
            "
          >
            数据备份
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份策略：</span
            >
            <template style="font-size: 18px !important">
              <el-radio v-model="type" label="1">完整备份</el-radio>
              <el-radio v-model="type" label="2">增量备份</el-radio>
              <el-radio v-model="type" label="3">差异备份</el-radio>
            </template>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份周期：</span
            >
            <el-radio v-model="time" label="1" id="data">每日备份</el-radio>
            <el-radio v-model="time" label="2">每周备份</el-radio>
            <el-radio v-model="time" label="3">每月备份</el-radio>
            <el-radio v-model="time" label="4">每年备份</el-radio>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份存储位置：</span
            >
            <el-input
              style="position: relative; width: 50%"
              v-model="position"
            ></el-input>
          </div>
          <div
            style="
              position: relative;
              top:4%;
              height: 25%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改
            </el-button>
          </div>
        </div>
        <div
          style="
          color:#747474;
            position: relative;
            height: 90%;
            width: 47%;
            left: 4%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            display:flex;
          "
        >
        <div style="position:relative;height:100%;width:50%;border-right:2px solid #e0e0e0;">
            <div style="position:relative;height:10%;width:100%;text-align:center;font-size:20px;border-bottom:2px solid #e0e0e0;display: flex;
            justify-content: center;
            align-items: center;">常规版</div>
            <div style="position:relative;height:70%;width:100%;">
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>学生管理</span>
              </div>
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>任务管理</span>
              </div>
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>数据管理</span>
              </div>
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>权限管理</span>
              </div>
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>可发布200项任务</span>
              </div>
              <div style="position:relative;height:16%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>同时在人数50000人</span>
              </div>
              
            </div>
            <div style="position:relative;height:10%;width:40%;left:32%;display: flex;top:6%;
          justify-content: center;
          align-items: center;">
          <el-button
          type="primary"
          style="background-color: #c0c0c0; border: #c0c0c0"
          size="small"
          >当前版本 </el-button
        ></div>
          </div>
          <div style="position:relative;height:100%;width:50%;">
            <div style="position:relative;height:10%;width:100%;text-align:center;font-size:20px;border-bottom:2px solid #e0e0e0;display: flex;
            justify-content: center;
            align-items: center;">专业版</div>
            <div style="position:relative;height:75%;width:100%;">
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>学生管理</span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>任务管理</span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>数据管理</span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>权限管理</span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>附加功能管理 </span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>可发布500项任务</span>
              </div>
              <div style="position:relative;height:14%;width:70%;left:25%;font-size:18px;display: flex;
              justify-content: flex-start;
              align-items: center;">
                <i class="el-icon-success" style="color: #209e91;margin-right:20px"></i>
                <span>同时在人数80000人</span>
              </div>
              <div style="position:relative;height:10%;top:5%;width:40%;left:32%;display: flex;
          justify-content: center;
          align-items: center;">
          <el-button
          type="primary"
          style="background-color: #209e91; border: #209e91"
          size="small"
          >立即升级 </el-button
        ></div>
            </div>
          </div></div>
      </div>
      <div style="position: relative; height: 33%; width: 96%;left:2%;background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      color: #747474;">
      <div
      style="
        position: relative;
        height: 10%;
        width: 100%;
        top:3%;
        font-size: 20px;
        color: #747474;
        text-align:center;
      "
    >
    移动端广告设置
    </div>
    <div style="position:relative;height:29%;width:100%;display:flex;">
        <div style="position:relative;height:60%;top:10%;width:47%;left:2%;background-color:#209e91">
            <div style="
              position: relative;
              width: 50%;
              display: flex;
              align-items: center;
            ">
            <span style="margin-right: 10px; left: 7%">联系电话<lable style="color:#e85656">*</lable>:</span>
            <el-input v-model="phoneInput" placeholder="请输入"
              style="position: relative; height: 40px !important; width: 58%"
              id="phoneImport">
            </el-input>
          </div>
        </div>
        <div style="position:relative;height:60%;top:10%;width:47%;left:4%;background-color:#209e91"></div>
    </div>
    <div style="position:relative;height:29%;width:100%;background-color:#ffffff;display:flex;">
        <div style="position:relative;height:60%;top:10%;width:47%;left:2%;background-color:#209e91"></div>
        <div style="position:relative;height:60%;top:10%;width:47%;left:4%;background-color:#209e91"></div>
    </div>
    <div style="position:relative;height:29%;width:100%;display:flex;">
        <div style="position:relative;height:60%;top:10%;width:96%;left:2%;background-color:#209e91"></div>
    </div>
</div>
    </div>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #209e91;
}

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
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search: "",
      oldPassWord: "",
      newPassWord: "",
      taskValue: "",
      advertiseValue: "",
      messageValue: "",
      position:"D:/data",
        type:"",
        time:"",
    };
  },
  methods: {
    isShowTriangle(route) {
      // 根据当前路由判断是否显示圆形
      return this.$route.path === `${route}`;
    },
    handleCommand(command) {
      if (command == "q") {
        this.quit();
      } else if (command == "m") {
        this.$router.push("/mainMenu/config/safety");
      }
    },
    quit() {
      axios
        .post(`${this.$store.getters.getIp}/administrators/logout`)
        .then((response) => {
          if (response.data.code) {
            this.$message.success("退出成功");
            this.$router.push("/login");
          } else {
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