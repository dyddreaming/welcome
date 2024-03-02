<template>
    <div class="app-main" style="position: relative; display: flex">
      <!-- 导航栏 -->
      <div
        style="
          position: relative;
          height: 80%;
          top: 10%;
          width: 15%;
          background-color: #ffffff;
          left: 2%;
          border-radius:5px;
        "
      >
        <div style="position: relative; height: 25%; width: 100%">
          <div
            style="
              position: relative;
              height: 60%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 20%;
              font-size: 20px;
            "
            id="safety"
          >
          <template>
              <div
                v-if="isShowTriangle('/mainMenu/help/helpFile')"
                class="triangle"
                style="margin-right: 10px;"
              ></div>
            </template>
            <router-link
              to="/mainMenu/help/helpFile"
              style="color: inherit; text-decoration: none"
            >
              入门指南</router-link
            >
          </div>
        </div>
        <div style="position: relative; height: 25%; width: 100%">
          <div
            style="
              position: relative;
              height: 60%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 20%;
              font-size: 20px;
             
            "
            id="message"
          >
          <template>
              <div
                v-if="isShowTriangle('/mainMenu/help/questionAnswer')"
                class="triangle"
                style="margin-right: 10px;"
              ></div>
            </template>
            <router-link
              to="/mainMenu/help/questionAnswer"
              style="color: inherit; text-decoration: none"
            >
              常见问题解答</router-link
            >
          </div>
        </div>
        <div style="position: relative; height: 25%; width: 100%">
          <div
            style="
              position: relative;
              height: 60%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 20%;
              font-size: 20px;
             
            "
            id="data"
          >
          <template>
              <div
                v-if="isShowTriangle('/mainMenu/help/technology')"
                class="triangle"
                style="margin-right: 10px;"
              ></div>
            </template>
            <router-link
              to="/mainMenu/help/technology"
              style="color: inherit; text-decoration: none"
            >
              技术支持</router-link
            >
          </div>
        </div>
        <div style="position: relative; height: 25%; width: 100%">
          <div
            style="
              position: relative;
              height: 60%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              top: 20%;
              font-size: 20px;
             
            "
            id="version"
          >
          <template>
              <div
                v-if="isShowTriangle('/mainMenu/help/feedback')"
                class="triangle"
                style="margin-right: 10px;"
              ></div>
            </template>
            <router-link
              to="/mainMenu/help/feedback"
              style="color: inherit; text-decoration: none"
            >
              用户反馈</router-link
            >
          </div>
        </div>
      </div>
      <!-- 数据部分 -->
      <div
        style="position: relative; height: 80%; top: 10%; width: 70%; left: 5%;"
      >
        <router-view></router-view>
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
    border-bottom: 20px solid #FFDA9F;
  }
  </style>
    
    <script>
  export default {
    methods: {
      isShowTriangle(route) {
        // 根据当前路由判断是否显示圆形
        return this.$route.path === `${route}`;
      },
    },
  };
  </script>