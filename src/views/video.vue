<template>
  <div class="app-main" style="position: relative;height:100%;width:100%;">
    <!-- 摄像头位置选择 -->
    <div style="position:relative;height:10%;width:96%;left:2%;background-color:RGBA(250, 94, 0, 0.8);top:2%;border-radius:10px;display:flex;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);">
      <div
        style="position:relative;height:100%;width:20%;color:#ffffff;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">位置1</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position1"
            style="color: inherit; text-decoration: none">四号教学楼</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#ffffff;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">位置2</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position2"
            style="color: inherit; text-decoration: none">四号教学楼</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#ffffff;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">位置3</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position3"
            style="color: inherit; text-decoration: none">四号教学楼</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#ffffff;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">位置4</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position4"
            style="color: inherit; text-decoration: none">四号教学楼</router-link></p>
      </div>
      <div
        style="position:relative;height:100%;width:20%;color:#ffffff;font-size:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p style="margin: 0;">位置5</p>
        <p style="margin: 0;"><router-link to="/mainMenu/video/position5"
            style="color: inherit; text-decoration: none">四号教学楼</router-link></p>
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
    <div style="position:relative;height:55%;width:96%;left:2%;background-color:#ffffff;top:1%;border-radius:10px;">
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
  border-bottom: 20px solid RGB(250, 94, 0);
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