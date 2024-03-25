<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
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
        摄像头管理
      </h2>
      <div
        style="position: relative; height: 100%; width: 30%;display: flex; align-items: center; justify-content: flex-end;right:2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474;font-weight:600;" id="current-link">摄像头管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 摄像头位置选择 -->
    <div style="position:relative;height:10%;width:96%;left:2%;background-color:#ffffff;top:1%;border-radius:8px;display:flex;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);">
      <div
        style="position:relative;height:100%;width:20%;color:#747474;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:solid 1px #747474;">
        <p style="margin: 0;">编号1</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position1"
            style="color: inherit; text-decoration: none">ID1</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#747474;font-size:20px;display:flex;flex-direction:column;align-items:center;border-right:solid 1px #747474;justify-content:center;">
        <p style="margin: 0;">编号2</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position2"
            style="color: inherit; text-decoration: none">ID1</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#747474;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:solid 1px #747474;">
        <p style="margin: 0;">编号</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position3"
            style="color: inherit; text-decoration: none">ID1</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#747474;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:solid 1px #747474;">
        <p style="margin: 0;">编号</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position4"
            style="color: inherit; text-decoration: none">ID1</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#747474;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">编号</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position5"
            style="color: inherit; text-decoration: none">ID1</router-link></p>
      </div>
    </div>
    <div style="position:relative;height:5%;width:96%;left:2%;top:1%;display:flex;">
      <div
        style="position:relative;height:100%;width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div v-if="isShowCircle('/mainMenu/video/position1')" class="triangle" style="margin-right: 10px;"></div>
      </div>
      <div
        style="position:relative;height:100%;width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div v-if="isShowCircle('/mainMenu/video/position2')" class="triangle" style="margin-right: 10px;"></div>
      </div>
      <div
        style="position:relative;height:100%;width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div v-if="isShowCircle('/mainMenu/video/position3')" class="triangle" style="margin-right: 10px;"></div>
      </div>
      <div
        style="position:relative;height:100%;width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div v-if="isShowCircle('/mainMenu/video/position4')" class="triangle" style="margin-right: 10px;"></div>
      </div>
      <div
        style="position:relative;height:100%;width:20%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div v-if="isShowCircle('/mainMenu/video/position5')" class="triangle" style="margin-right: 10px;"></div>
      </div>
    </div>
    <!-- 摄像头画面展示 -->
    <div style="position:relative;height:45%;width:96%;left:2%;top:1%;background-color:#ffffff;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);border-radius:8px;">
      <router-view></router-view>
    </div>
    <!-- 数据展示 -->
    <div style="position:relative;height:17%;width:96%;left:2%;top:3%;display:flex">
      <!-- 实时人流量 -->
      <div style="position:relative;height:100%;width:32%;background-color:#ffffff;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);border-radius:8px;color:#747474;">
        <div style="position:relative;height:15%;width:100%;text-align:center;">当日实时人流量</div>
        <div style="position:relative;height:85%;width:100%;"></div>
      </div>
      <!-- 人脸识别结果 -->
      <div style="position:relative;height:100%;width:32%;background-color:#ffffff;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);border-radius:8px;left:2%;color:#747474;">
        <div style="position:relative;height:15%;width:100%;text-align:center;">人脸识别结果</div>
        <!-- <div style="position:relative;height:85%;width:100%;">结果列表</div> -->
      </div>
      <!-- 手势识别结果 -->
      <div style="position:relative;height:100%;width:32%;background-color:#ffffff;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);border-radius:8px;left:4%;color:#747474;">
        <div style="position:relative;height:15%;width:100%;text-align:center;">手势识别结果</div>
        <!-- <div style="position:relative;height:85%;width:100%;">结果列表</div>s -->
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
  color: #747474
}
</style>

<script>
export default {
  data(){
    return{
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search:"",
    };
  },
  methods: {
    isShowCircle(route) {
      // 根据当前路由判断是否显示圆形
      return this.$route.path === `${route}`;
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