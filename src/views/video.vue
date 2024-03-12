<template>
  <div class="app-main" style="position: relative;background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <router-link to="/mainMenu/help/helpFile"
        style="color: inherit; text-decoration: none; margin-right: 20px; margin-left: auto; color: #ffffff;">
        <span style="transition: color 0.3s;" class="hover-color">需要帮助吗？<span style="color: #209e91;">点击这里</span></span>
      </router-link>
      <i class="el-icon-s-home" style="color: #ffff;margin-right:10px; font-size: 24px;"></i>
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
    <div style="position:relative;height:60%;width:96%;left:2%;background-color:#ffffff;top:1%;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);border-radius:8px;">
      <router-view></router-view>
    </div>
    <!-- 数据展示 -->
    <div style="position:relative;height:25%;width:96%;left:2%;top:8%;display:flex">
      <!-- 实时人流量 -->
      <div style="position:relative;height:100%;width:33%;"></div>
      <!-- 人脸识别结果 -->
      <div style="position:relative;height:100%;width:33%;"></div>
      <!-- 手势识别结果 -->
      <div style="position:relative;height:100%;width:33%;"></div>
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
  methods: {
    isShowCircle(route) {
      // 根据当前路由判断是否显示圆形
      return this.$route.path === `${route}`;
    },
  },
};
</script>