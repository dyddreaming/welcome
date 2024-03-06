<template>
  <div class="body" id="app" style="
      width: 100%;
      height: 100%;
      position: relative;
      background-color: #f4f9fd;
    ">
    <div style="
        position: relative;
        height: 96%;
        top: 2%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        border-radius: 8px;
        display:flex;
      ">
      <!-- 右侧 -->
      <div style="
          position: relative;
          height: 100%;
          width: 30%;
          background-image: url('./static/img/login1.png');
          background-size: cover;
        ">
        <!-- 文字 -->
        <div
          style="position: relative;height:20%;top:15%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ffffff;font-size:22px;">
          <p style="margin: 10px;">Hi,你好</p>
          <p style="margin: 0;">欢迎进入welcome迎新管理平台</p>
        </div>
      </div>
      <!-- 左侧 -->
      <div style="position:relative;height:60%;width:50%;top:20%;left:10%;">
        <div style="position:relative;height:10%;width:100%;text-align:center;font-size:25px;font-weight:600;">欢迎回来
        </div>
        <div style="position:relative;height:10%;width:90%;font-size:18px;left:10%;top:5%;">
          账号</div>
        <div style="position: relative; height: 15%; width: 90%;left:10%;top:5%;">
          <input style="
            width: 80%;
            height: 70%;
            box-sizing: border-box;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          " v-model="account" />
        </div>
        <div style="position:relative;height:10%;width:90%;font-size:18px;left:10%;top:5%;">
          密码</div>
        <div style="position: relative; height: 15%; width: 90%;left:10%;top:5%;">
          <input type="password" style="
                width: 80%;
                height: 70%;
                box-sizing: border-box;
                padding: 5px;
                border: 1px solid #ccc;
                border-radius: 5px;
              " v-model="passWord" />
        </div>
        <div style="position:relative;height:10%;width:72%;left:10%;top:5%;display:flex;">
          <div style="position:relative;height:100%;width:50%;">
            <el-checkbox v-model="remember" style="color:black">记住我</el-checkbox>
          </div>
          <div style="position:relative;height:100%;width:20%;left:30%;text-align:right;">
            忘记密码？
          </div>
        </div>
        <div style="position:relative;height:15%;width:72%;left:10%;top:8%;">
          <el-button type="danger" size="mini" style="
      position:relative;
        background-color: rgba(248, 147, 0, 0.8);;
        border: none;
        height: 68%;
        width:100%;
        border-radius:8px;
        font-size:20px;
        top:10px;
      " @click="login">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

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