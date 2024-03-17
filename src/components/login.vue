<template>
  <div class="body" id="app" style="
      width: 100%;
      height: 100%;
      position: relative;
      background-size: cover;
      background-image: url('./static/img/login.jpg');
    ">
    <div style="
        position: relative;
        height: 96%;
        top: 2%;
        width: 96%;
        left: 2%;
        border-radius: 8px;
        display:flex;
      ">
      <!-- 右侧 -->
      <!-- <div style="
          position: relative;
          height: 100%;
          width: 50%;
          background-size: cover;
        ">
        <div
          style="position: relative;height:60%;top:15%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ffffff;font-size:22px;">
          <p style="margin: 10px;">Hi,你好</p>
          <p style="margin: 0;">欢迎进入welcome迎新管理平台</p>
        </div>
      </div> -->
      <!-- 左侧 -->
      <!-- <div style="position:absolute;height:5%;width:40%;color:#ffffff;font-size:22px;">Hi,你好!</div>
      <div style="position:absolute;height:5%;width:40%;color:#ffffff;font-size:22px;top:5%;">欢迎进入welcome迎新管理平台~</div> -->
      <div style="position:relative;height:60%;width:40%;top:25%;left:32%;background-color:rgb(0, 72, 83,0.5);border-radius:8px;justify-content: center; align-items: center;">
        <div style="position:relative;height:10%;width:100%;text-align:center;font-size:25px;font-weight:600;color:#fffff0">欢迎回来
        </div>
        <div style="position:relative;height:10%;width:90%;font-size:18px;left:14%;top:5%;color:#fffff0">
          账号</div>
        <div style="position: relative; height: 15%; width: 90%;left:14%;top:5%;">
          <!-- <input style="
            width: 80%;
            height: 70%;
            box-sizing: border-box;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            color:#fffff0;
          " v-model="account" 
          id="account"/> -->
          <input style="
                width: 80%;
                height: 70%;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
                color:#747474;
              " 
              id="account"
              v-model="account" />
        </div>
        <div style="position:relative;height:10%;width:90%;font-size:18px;left:14%;top:5%;color:#fffff0">
          密码</div>
        <div style="position: relative; height: 15%; width: 90%;left:14%;top:5%;">
          <input type="password" style="
                width: 80%;
                height: 70%;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
                color:#747474;
              " 
              id="password"
              v-model="passWord" />
        </div>
        <div style="position:relative;height:10%;width:72%;left:14%;top:5%;display:flex;">
          <div style="position:relative;height:100%;width:50%;">
            <el-checkbox v-model="remember" style="color:#fffff0">记住我</el-checkbox>
          </div>
          <div style="position:relative;height:100%;width:20%;left:32%;text-align:right;color:#fffff0">
            忘记密码？
          </div>
        </div>
        <div style="position:relative;height:15%;width:72%;left:14%;top:8%;">
          <el-button type="danger" size="mini" style="
      position:relative;
        border: none;
        height: 68%;
        width:100%;
        border-radius:8px;
        font-size:20px;
        top:10px;
        background-color:transparent;
        color:#fffff0;
      " @click="login">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[id="account"]:focus {
  /* 添加选中时的样式 */
  outline: none; /* 可以去除默认的聚焦边框 */
  border-color: #747474; /* 修改边框颜色为红色 */
  box-shadow: 0 0 1px #747474; /* 添加阴影效果 */
}
input[id="password"]:focus {
  /* 添加选中时的样式 */
  outline: none; /* 可以去除默认的聚焦边框 */
  border-color: #747474; /* 修改边框颜色为红色 */
  box-shadow: 0 0 1px #747474; /* 添加阴影效果 */
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      passWord: "",
      remember:"",
    };
  },
  methods: {
    login() {
      let data = {
        username: this.account,
        password: this.passWord
      };
      axios
        .post(`${this.$store.getters.getIp}/administrators/login`,data)
        .then((response) => {
          if(response.data.code){
            this.$message.success('登录成功');
            this.$router.push('/mainMenu/student/register');
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