<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 90%;
        left: 5%;
        width: 90%;
        top: 5%;
        background-color: #ffffff;
      "
    >
      <!-- 左侧竖线 -->
      <div
        style="
          position: absolute;
          left: 5%;
          top: 0;
          width: 1px;
          height: 100%;
          background-color: #cccccc;
        "
      ></div>
      <div
        style="
          position: relative;
          top: 2%;
          left: 8%;
          height: 5%;
          width: 30%;
          display: flex;
          align-items: center;
        "
      >
        <h3 style="margin-right: 15px">大屏数据展示</h3>
        <el-switch
          v-model="value"
          active-color="#F89300"
          inactive-color="#cccccc"
        ></el-switch>
      </div>

      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 学生模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 80%; top: 2%"
      >
        <div style="position: relative; height: 30%; width: 80%; top: 10%">
          学生模块（多选）
        </div>
        <div
          style="
            position: relative;
            height: 60%;
            width: 80%;
            top: 2%;
            display: flex;
            align-items: center;
          "
        >
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
        </div>
      </div>
      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 任务模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 80%; top: 2%"
      >
        <div style="position: relative; height: 30%; width: 80%; top: 10%">
          任务模块（多选）
        </div>
        <div
          style="
            position: relative;
            height: 60%;
            width: 80%;
            top: 2%;
            display: flex;
            align-items: center;
          "
        >
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
          <div style="height: 100%; flex-grow: 1">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
        </div>
      </div>
      <!-- 横线 -->
      <hr
        style="
          width: 100%;
          border: 1px solid #cccccc;
          margin-left: 0%;
          top: 2%;
          position: relative;
        "
      />
      <!-- 广告模块 -->
      <div
        style="position: relative; height: 28%; left: 8%; width: 80%; top: 2%"
      >
        <div style="position: relative; height: 30%; width: 80%; top: 10%">
          广告模块（多选）
        </div>
        <div
          style="
            position: relative;
            height: 60%;
            width: 80%;
            top: 2%;
            display: flex;
            align-items: center;
          "
        >
          <div style="height: 100%; width: 33%">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
          <div style="height: 100%; width: 33%">
            <div
              style="height: 100%; width: 80%; background-color: #cccccc"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        height: 5%;
        position: relative;
        width: 90%;
        left: 5%;
        top: 5%;
        display: flex;
        justify-content: flex-end;
      "
    >
      <el-button
        type="success"
        size="mini"
        style="
          background-color: #f89300;
          border: none;
          width: 5%;
          position: relative;
          height: 80%;
          top:10%;
        "
        @click="screenPreview"
      >
        预览
      </el-button>
    </div>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
</style>
  
  <script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods:{
    screenPreview()
    {
      this.$router.push("/dataScroll");
    }
  }
};
</script>