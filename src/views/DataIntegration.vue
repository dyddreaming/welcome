<template>
  <div class="app-main" style="position: relative">
    <!-- 上侧导航栏 -->
    <div
      style="
        width: 70%;
        left: 15%;
        position: relative;
        background-color: #fa5e00;
        height: 10%;
        top: 2%;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
      "
    >
      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px"><router-link to="/mainMenu/data/integration/registerMap" style="color: inherit; text-decoration: none;">首次注册地图</router-link></h3>
        <div v-if="isShowCircle('/mainMenu/data/integration/registerMap')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>

      <div style="flex: 1; border-right: 2px solid white"></div>

      <div 
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px"><router-link to="/mainMenu/data/integration/dayTask" style="color: inherit; text-decoration: none;">当日任务情况</router-link></h3>
        <div v-if="isShowCircle('/mainMenu/data/integration/dayTask')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>

      <div style="flex: 1; border-right: 2px solid white"></div>

      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px"><router-link to="/mainMenu/data/integration/advertiseClick" style="color: inherit; text-decoration: none;">广告点击情况</router-link></h3>
        <div v-if="isShowCircle('/mainMenu/data/integration/advertiseClick')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>

      <div style="flex: 1; border-right: 2px solid white"></div>

      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px"><router-link to="/mainMenu/data/integration/wordSearch" style="color: inherit; text-decoration: none;"> 关键词搜索</router-link></h3>
        <div v-if="isShowCircle('/mainMenu/data/integration/wordSearch')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>
      <div style="flex: 1"></div>
    </div>
    <!-- 数据展示部分 -->
    <div style="position: relative; height: 86%; top: 3%; width: 98%; left: 1%">
      <router-view></router-view>
    </div>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
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