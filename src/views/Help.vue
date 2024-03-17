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
          v-model="search"
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
        帮助中心
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
            >帮助中心</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 80%;
        width: 96%;
        left: 2%;
        display: flex;
        color: #747474;
      "
    >
      <!-- 导航栏 -->
      <div
        style="
          position: relative;
          height: 100%;
          width: 15%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
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
                style="margin-right: 10px"
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
                style="margin-right: 10px"
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
                style="margin-right: 10px"
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
                style="margin-right: 10px"
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
        style="position: relative; height: 90%;  width: 80%; left: 5%"
      >
        <router-view></router-view>
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
  methods: {
    isShowTriangle(route) {
      // 根据当前路由判断是否显示圆形
      return this.$route.path === `${route}`;
    },
  },
};
</script>