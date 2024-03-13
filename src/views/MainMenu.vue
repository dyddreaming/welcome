<template>
  <div class="body" id="app" style="width: 100%">
    <meta name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
    <!-- 左侧导航栏 -->
    <div class="app-sidebar">
      <div id="name" style="display: flex; align-items: center; text-align: center; background-color: rgb(28, 43, 54);">
        <img src="../../public/static/img/logo.png" alt="Image" style="margin-right: 5px;margin-left: 15px;" />
        <h2 >迎新管理</h2>
      </div>

      <!-- 导航栏内容，使用Element-UI的组件 -->
      <el-menu default-active="1" class="el-menu-vertical-demo"
        style="background-color: rgb(28, 43, 54);border-top: 2px solid rgb(23, 35, 43);">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1" style="background-color: rgb(28, 43, 54)" id="student">
                <template slot="title">
                  <i class="el-icon-user" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 0px"> 学生管理</span>
                </template>
                <router-link to="/mainMenu/student/register" tag="span">
                  <el-menu-item index="1-1" class="mbutton" style="color: #ffffff">学生注册情况</el-menu-item>
                </router-link>
                <router-link to="/mainMenu/student/import" tag="span">
                  <el-menu-item index="1-2" class="mbutton" style="color: #ffffff">新生信息导入</el-menu-item>
                </router-link>
                <router-link to="/mainMenu/student/manage" tag="span">
                  <el-menu-item index="1-3" class="mbutton" style="color: #ffffff">学生信息管理</el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="2" style="background-color: rgb(28, 43, 54)">
                <template slot="title">
                  <i class="el-icon-s-order" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">任务管理</span>
                </template>
                <router-link to="/mainMenu/task/complete" tag="span">
                  <el-menu-item index="2-1" class="mbutton" style="color: #ffffff">任务完成情况</el-menu-item>
                </router-link>
                <router-link to="/mainMenu/task/config" tag="span">
                  <el-menu-item index="2-2" class="mbutton" style="color: #ffffff">学生任务设置</el-menu-item>
                </router-link>
                <router-link to="/mainMenu/task/examine" tag="span">
                  <el-menu-item index="2-3" class="mbutton" style="color: #ffffff">手动任务审核</el-menu-item>
                </router-link>
              </el-submenu>
              <el-submenu index="3" style="background-color: rgb(28, 43, 54)">
                <template slot="title">
                  <i class="el-icon-document" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">数据管理</span>
                </template>
                <router-link to="/mainMenu/data/defineIntegration" tag="span">
                  <el-menu-item index="3-1" class="mbutton" style="color: #ffffff">数据调取集成</el-menu-item></router-link>
                <router-link to="/mainMenu/data/screen" tag="span">
                  <el-menu-item index="3-2" class="mbutton" style="color: #ffffff">大屏数据设置</el-menu-item></router-link>
              </el-submenu>
              <el-submenu index="4" style="background-color: rgb(28, 43, 54)">
                <template slot="title">
                  <i class="el-icon-lock" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">权限管理</span>
                </template>
                <router-link to="/mainMenu/limit/manager" tag="span">
                  <el-menu-item index="4-1" class="mbutton" style="color: #ffffff">管理员管理</el-menu-item></router-link>
                <router-link to="/mainMenu/college/manage" tag="span">
                  <el-menu-item index="4-2" class="mbutton" style="color: #ffffff">学院管理</el-menu-item></router-link>
              </el-submenu>
              <el-submenu index="5" style="background-color: rgb(28, 43, 54)">
                <template slot="title">
                  <i class="el-icon-message" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">附加功能管理</span>
                </template>
                <router-link to="/mainMenu/add/business" tag="span">
                  <el-menu-item index="5-1" class="mbutton" style="color: #ffff">商家广告管理</el-menu-item></router-link>
                <router-link to="/mainMenu/add/messageIntegration" tag="span">
                  <el-menu-item index="5-2" class="mbutton" style="color: #ffff">校园资讯管理</el-menu-item>
                </router-link>
              </el-submenu>
              <router-link to="/mainMenu/video" tag="span">
                <el-menu-item index="6" id="videoButton" style="color: #ffff;background-color: rgb(28, 43, 54);">
                  <i class="el-icon-video-play" style="color: #ffff"></i>
                  <span slot="title" style="margin-left: 5px">摄像头管理</span>
                </el-menu-item>
              </router-link>
              <router-link to="/mainMenu/config" tag="span">
                <el-menu-item index="7" id="setButton" style="color: #ffff;background-color: rgb(28, 43, 54);">
                  <i class="el-icon-setting" style="color: #ffff"></i>
                  <span slot="title" style="margin-left: 5px">平台参数配置</span>
                </el-menu-item>
              </router-link>
              <router-link to="/mainMenu/help" tag="span">
                <el-menu-item index="8" id="helpButton" style="color: #ffff;background-color: rgb(28, 43, 54);">
                  <i class="el-icon-service" style="color: #ffff"></i>
                  <span slot="title" style="margin-left: 5px">帮助中心</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </el-menu>
      <div style="position:relative;height:7%;width:100%;top:93%;text-align:center;color:#ffffff" id="quitText"
        @click="quit">
        <span>退出登录</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
@import "../../public/static/css/aside.css";

.app-sidebar {
  width: 185px;
  background-color: rgb(28, 43, 54);
  /* padding: 20px; */
  box-sizing: border-box;
  height: 100%;
}

#name {
  position: absolute;
  width: 185px;
  /* background-color: #F89300; */
  height: 8%;
  color: #ffffff;
  font-size: 16px;
}

.el-menu-vertical-demo {
  /* border-radius: 20px; */
  top: 8%;
  height: 83%;
  width: 200px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  position: absolute;
}

.el-submenu :hover {
  background-color: rgb(28, 43, 54) !important;
  color: rgb(32, 158, 145) !important;
}

.el-submenu__title:hover .el-icon-user,
.el-submenu__title:hover span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu__title:hover .el-icon-s-order,
.el-submenu__title:hover span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu__title:hover .el-icon-document,
.el-submenu__title:hover span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu__title:hover .el-icon-lock,
.el-submenu__title:hover span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu__title:hover .el-icon-message,
.el-submenu__title:hover span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu.is-opened .el-submenu__title .el-icon-user,
.el-submenu.is-opened .el-submenu__title span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu.is-opened .el-submenu__title .el-icon-s-order,
.el-submenu.is-opened .el-submenu__title span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu.is-opened .el-submenu__title .el-icon-document,
.el-submenu.is-opened .el-submenu__title span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu.is-opened .el-submenu__title .el-icon-lock,
.el-submenu.is-opened .el-submenu__title span {
  color: rgb(32, 158, 145) !important;
}

.el-submenu.is-opened .el-submenu__title .el-icon-message,
.el-submenu.is-opened .el-submenu__title span {
  color: rgb(32, 158, 145) !important;
}

.mbutton {
  background-color: rgb(28, 43, 54) !important;
  color: #ffffff !important;
}

.mbutton:hover {
  background-color: rgb(28, 43, 54) !important;
  color: rgb(32, 158, 145) !important;
}

.mbutton.is-active {
  background-color: rgb(32, 158, 145) !important;
  color: #ffffff !important;
}

#helpButton:hover {
  background-color: rgb(28, 43, 54) !important;
  color: rgb(32, 158, 145) !important;
}

#helpButton:hover .el-icon-service {
  color: rgb(32, 158, 145) !important;
}

#helpButton.is-active .el-icon-service {
  color: #ffffff !important;
}

#helpButton.is-active {
  background-color: rgb(32, 158, 145) !important;
  color: #ffffff !important;
}

#setButton:hover {
  background-color: rgb(28, 43, 54) !important;
  color: rgb(32, 158, 145) !important;
}

#setButton:hover .el-icon-setting {
  color: rgb(32, 158, 145) !important;
}

#setButton.is-active .el-icon-setting {
  color: #ffffff !important;
}

#setButton.is-active {
  background-color: rgb(32, 158, 145) !important;
  color: #ffffff !important;
}

#videoButton:hover {
  background-color: rgb(28, 43, 54) !important;
  color: rgb(32, 158, 145) !important;
}

#videoButton:hover .el-icon-video-play {
  color: rgb(32, 158, 145) !important;
}

#videoButton.is-active .el-icon-video-play {
  color: #ffffff !important;
}

#videoButton.is-active {
  background-color: rgb(32, 158, 145) !important;
  color: #ffffff !important;
}

#quitText:hover {
  color: rgb(32, 158, 145) !important;
}
</style>

<script>
import axios from "axios";
import * as echarts from "echarts";
export default {
  data() {
    return {
      customColor: "#FA5E00",
      myChart: null,
      ip: "http://740bfd98.r6.cpolar.top",
      CollegeList: [], // 存储返回各学院信息
      UndergraduateC: {}, // 本科生总人数
      UndergraduateE: {}, // 本科生注册人数
      GraduateC: {}, // 研究生总人数
      GraduateE: {}, // 研究生注册人数
      TotalRegisterRate: 0.0,
      TotalUnRegisterRate: 0.0,
    };
  },
  mounted() { },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
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