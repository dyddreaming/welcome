<template>
  <div class="app-main" style="position: relative">
    <!-- 上侧导航栏 -->
    <div
      style="
        width: 80%;
        left: 10%;
        position: relative;
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
          background-color:  rgba(250, 94, 0, 0.8);
          border-radius: 50%;
          margin-right:20px;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px">
          <router-link
            to="/mainMenu/add/Message/clubMessage"
            style="color: inherit; text-decoration: none"
            >社团资讯</router-link
          >
        </h3>
        <div
          v-if="isShowCircle('/mainMenu/add/Message/clubMessage')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>

      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
          background-color: rgba(250, 94, 0, 0.8);
          border-radius: 50%;
          margin-right:20px;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px">
          <router-link
            to="/mainMenu/add/Message/schoolImage"
            style="color: inherit; text-decoration: none"
            >校园风采</router-link
          >
        </h3>
        <div
          v-if="isShowCircle('/mainMenu/add/Message/schoolImage')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>


      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
          background-color: rgba(250, 94, 0, 0.8);
          border-radius: 50%;
          margin-right:20px;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px">
          <router-link
            to="/mainMenu/add/Message/market"
            style="color: inherit; text-decoration: none"
            >跳蚤市场</router-link
          >
        </h3>
        <div
          v-if="isShowCircle('/mainMenu/add/Message/market')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>


      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
          background-color: rgba(250, 94, 0, 0.8);
          border-radius: 50%;
          margin-right:20px;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px">
          <router-link
            to="/mainMenu/add/Message/schoolChat"
            style="color: inherit; text-decoration: none"
            >学校论坛</router-link
          >
        </h3>
        <div
          v-if="isShowCircle('/mainMenu/add/Message/schoolChat')"
          style="
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: white;
          "
        ></div>
      </div>


      <div
        style="
          display: flex;
          align-items: center;
          flex-grow: 1;
          justify-content: center;
          background-color: rgba(250, 94, 0, 0.8);
          border-radius: 50%;
          margin-right:20px;
        "
      >
        <h3 style="color: #ffffff; margin-right: 5px">
          <router-link
            to="/mainMenu/add/Message/studentMessage"
            style="color: inherit; text-decoration: none"
          >
            学生留言</router-link
          >
        </h3>
        <div
          v-if="isShowCircle('/mainMenu/add/Message/studentMessage')"
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
    <div style="width:100%; border-bottom: 2px solid #ffffff;position: relative; top: 5%;"></div>
    <!-- 数据展示部分 -->
    <div style="position: relative; height: 80%; top: 8%; width: 98%; left: 1%;">
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