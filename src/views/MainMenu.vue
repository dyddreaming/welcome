<template>
  <div class="body" id="app" style="width: 100%">
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
    />
    <!-- 左侧导航栏 -->
    <div class="app-sidebar">
      <div id="name" style="text-align: center">
        <img
          src="../../public/static/img/logo.png"
          alt="Image"
          style="display: inline-block; vertical-align: middle"
        />
        <h2
          style="
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
          "
        >
          迎新管理
        </h2>
      </div>

      <!-- 导航栏内容，使用Element-UI的组件 -->
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        style="background-color: #f89300"
      >
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1" style="background-color: #f89300">
                <template slot="title">
                  <i class="el-icon-user" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 0px"> 学生管理</span>
                </template>
                <router-link to="/mainMenu/student/register" tag="span">
                  <el-menu-item
                    index="1-1"
                    class="mbutton"
                    style="color: #ffffff"
                    >学生注册情况</el-menu-item
                  >
                </router-link>
                <router-link to="/mainMenu/student/import" tag="span">
                  <el-menu-item
                    index="1-2"
                    class="mbutton"
                    style="color: #ffffff"
                    >新生信息导入</el-menu-item
                  >
                </router-link>
                <router-link to="/mainMenu/student/manage" tag="span">
                  <el-menu-item
                    index="1-3"
                    class="mbutton"
                    style="color: #ffffff"
                    >学生信息管理</el-menu-item
                  >
                </router-link>
              </el-submenu>
              <el-submenu index="2" style="background-color: #f89300">
                <template slot="title">
                  <i class="el-icon-s-order" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">任务管理</span>
                </template>
                <router-link to="/mainMenu/task/complete" tag="span">
                  <el-menu-item
                    index="2-1"
                    class="mbutton"
                    style="color: #ffffff"
                    >任务完成情况</el-menu-item
                  >
                </router-link>
                <router-link to="/mainMenu/task/config" tag="span">
                  <el-menu-item
                    index="2-2"
                    class="mbutton"
                    style="color: #ffffff"
                    >学生任务设置</el-menu-item
                  >
                </router-link>
                <router-link to="/mainMenu/task/examine" tag="span">
                  <el-menu-item
                    index="2-3"
                    class="mbutton"
                    style="color: #ffffff"
                    >手动任务审核</el-menu-item
                  >
                </router-link>
              </el-submenu>
              <el-submenu index="3" style="background-color: #f89300">
                <template slot="title">
                  <i class="el-icon-document" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">数据管理</span>
                </template>
                <router-link to="/mainMenu/data/integration" tag="span">
                  <el-menu-item
                    index="3-1"
                    class="mbutton"
                    style="color: #ffffff"
                    >数据调取集成</el-menu-item
                  ></router-link
                >
                <router-link to="/mainMenu/data/screen" tag="span">
                  <el-menu-item
                    index="3-2"
                    class="mbutton"
                    style="color: #ffffff"
                    >大屏数据设置</el-menu-item
                  ></router-link
                >
              </el-submenu>
              <el-submenu index="4" style="background-color: #f89300">
                <template slot="title">
                  <i class="el-icon-lock" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px">权限管理</span>
                </template>
                <router-link to="/mainMenu/limit/manager" tag="span">
                  <el-menu-item
                    index="4-1"
                    class="mbutton"
                    style="color: #ffffff"
                    >管理员管理</el-menu-item
                  ></router-link
                >
                <router-link to="/mainMenu/limit/college" tag="span">
                  <el-menu-item
                    index="4-2"
                    class="mbutton"
                    style="color: #ffffff"
                    >学院管理</el-menu-item
                  ></router-link
                >
              </el-submenu>
              <el-submenu index="5" style="background-color: #f89300">
                <template slot="title">
                  <i class="el-icon-message" style="color: #ffff"></i>
                  <span style="color: #ffff; margin-left: 5px"
                    >附加功能管理</span
                  >
                </template>
                <router-link to="/mainMenu/add/business" tag="span">
                  <el-menu-item index="5-1" class="mbutton" style="color: #ffff"
                    >商家广告管理</el-menu-item
                  ></router-link
                >
                <router-link to="/mainMenu/add/message" tag="span">
                  <el-menu-item index="5-2" class="mbutton" style="color: #ffff"
                    >校园资讯管理</el-menu-item
                  >
                </router-link>
              </el-submenu>
              <router-link to="/mainMenu/video" tag="span">
                <el-menu-item
                  index="6"
                  class="clickbutton"
                  style="color: #ffff"
                >
                  <i class="el-icon-video-play" style="color: #ffff"></i>
                  <span slot="title" style="margin-left: 5px"
                    >摄像头管理</span
                  >
                </el-menu-item>
              </router-link>
              <router-link to="/mainMenu/config" tag="span">
                <el-menu-item
                  index="7"
                  class="clickbutton"
                  style="color: #ffff"
                >
                  <i class="el-icon-setting" style="color: #ffff"></i>
                  <span slot="title" style="margin-left: 5px"
                    >平台参数配置</span
                  >
                </el-menu-item>
              </router-link>
              <router-link to="/mainMenu/help" tag="span">
              <el-menu-item index="8" class="clickbutton" style="color: #ffff">
                <i class="el-icon-service" style="color: #ffff"></i>
                <span slot="title" style="margin-left: 5px">帮助中心</span>
              </el-menu-item>
            </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </el-menu>

      <div id="quit">
        <img
          src="../../public/static/img/quit.png"
          alt="Centered Image"
          style="display: block; margin: 0 auto"
          id="quitimg"
        />
        <el-button
          type="danger"
          round
          id="quitregister"
          style="background-color: #fa5e00"
          @click="quit"
          >退出登录</el-button
        >
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
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
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    quit(){
      axios
        .post(`${this.$store.getters.getIp}/administrators/logout`)
        .then((response) => {
          if(response.data.code){
            this.$message.success('退出成功');
            this.$router.push('/login');
          }
          else{
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