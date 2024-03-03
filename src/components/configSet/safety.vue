<template>
  <div
    class="app-main"
    style="
      position: relative;
      background-color: #ffffff;
      height: 50%;
      width: 100%;
      border-radius: 5px;
    "
  >
    <div
      style="
        position: relative;
        height: 10%;
        width: 95%;
        font-size: 18px;
        left: 3%;
      "
    >
      密码安全
    </div>
    <div
      style="
        position: relative;
        height: 10%;
        width: 95%;
        left: 3%;
        font-size: 14px;
        color: #cccccc;
      "
    >
      更改或查看密码
    </div>
    <div
      style="
        position: relative;
        height: 10%;
        width: 95%;
        left: 3%;
        font-size: 14px;
        color: #cccccc;
      "
    >
      旧密码
    </div>
    <div
      style="
        position: relative;
        height: 20%;
        width: 95%;
        left: 3%;
        display: flex;
      "
    >
    <input
    type="password"
    style="
      width: 50%;
      height: 80%;
      box-sizing: border-box;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    "
    v-model="oldPassWord"
  />
    </div>
    <div
      style="
        position: relative;
        height: 10%;
        width: 95%;
        left: 3%;
        font-size: 14px;
        color: #cccccc;
      "
    >
      新密码
    </div>
    <div style="position: relative; height: 20%; width: 95%; left: 3%">
      <input
        type="password"
        style="
          width: 50%;
          height: 80%;
          box-sizing: border-box;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        "
        v-model="newPassWord"
      />
    </div>
    <div
      style="
        position: relative;
        height: 10%;
        width: 95%;
        left: 3%;
        font-size: 14px;
        color: #cccccc;
      "
    >
      最少5个字符
    </div>
    <div style="position:relative;height:10%;width:100%;">
      <el-button
      type="danger"
      size="mini"
      style="
      position:relative;
        background-color: #fa5e00;
        border: none;
        height: 100%;
        margin-left: 91%;
        border-radius:8px;
      "
      >保存更改</el-button
    >
    </div>
  </div>
</template>
  
  <style>
</style>
  
  <script>
export default {
  data() {
    return {
      oldPassword:"",
      newPassword:"",
    };
  },
  methods: {},
};
</script>