<template>
  <div
    style="
      height: 100vh;
      width: 100vw;
      background-image: url('/static/img/background1.png');
      background-size: cover;
      background-position: center top -35px;
    "
  >
    <div style="position: relative; height: 6%; width: 100%">
      <div
        style="
          position: relative;
          left: 3%;
          width: 30%;
          height: 100%;
          color: #ffffff;
          font-family: 'Times New Roman', serif;
        "
      >
        welcome
      </div>
      <div
        style="
          position: absolute;
          top: 0;
          left: 35%;
          width: 30%;
          height: 100%;
          color: #ffffff;
          text-align: center;
          font-size: 24px;
          font-family: '黑体', 'SimHei', sans-serif;
        "
      >
        学生排行榜
      </div>
      <div
        style="
          position: absolute;
          top: 0;
          right: 46px; /* 将 right 值设为 0 */
          width: 30%;
          height: 100%;
          color: #ffffff;
          font-family: 'Times New Roman', serif;
        "
      >
        {{ currentTime }}
      </div>
    </div>
    <div style="position: relative; height: 89%; width: 100%; display: flex">
      <!-- 任务完成总进度排行榜 -->
      <div
        style="position: relative; height: 97%; top: 3%; width: 28%; left: 4%"
      >
        <div
          style="
            position: relative;
            height: 5%;
            width: 100%;
            text-align: center;
            color: #ffffff;
            top: 2%;
          "
        >
          任务完成总进度排行榜
        </div>
        <div style="position: relative; height: 95%; width: 100%">
          <!-- 第一 -->
          <div
            style="position: relative; width: 100%; height: 10%; display: flex"
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/1.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                张三
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第二 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 3%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/2.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                李四
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第三 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 6%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/3.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第四 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 9%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第五 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 12%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第六 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 15%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第七 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 18%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
          <!-- 第八 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 21%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; top: 40%; width: 70%; height: 30%">
              <el-progress :percentage="50" text-color="white"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <!-- 学生任务排行榜 -->
      <div
        style="position: relative; height: 97%; top: 3%; width: 28%; left: 8%"
      >
        <div
          style="
            position: relative;
            height: 5%;
            width: 100%;
            text-align: center;
            color: #ffffff;
            top: 2%;
          "
        >
          学生任务排行榜
        </div>
        <div style="position: relative; height: 94%; width: 100%; top: 1%">
          <div style="position: relative; height: 38%; width: 100%">
            <div style="position: relative; height: 50%; width: 100%">
              <img
                src="../../../public/static/img/first.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                "
              />
              <div
                class="block"
                style="
                  position: absolute;
                  top: 48%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                "
              >
                <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="position: relative; width: 100%; height: 28%; top: 72%"
              >
                <div
                  style="
                    position: relative;
                    height: 60%;
                    width: 100%;
                    text-align: center;
                    color: yellow;
                  "
                >
                  张三
                </div>
                <div
                  style="
                    position: relative;
                    height: 40%;
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    color: #ffffff;
                  "
                >
                  1234
                </div>
              </div>
            </div>
            <div
              style="
                position: relative;
                height: 50%;
                width: 100%;
                display: flex;
              "
            >
              <div style="position: relative; height: 100%; width: 50%">
                <img
                  src="../../../public/static/img/second.png"
                  alt="Image"
                  style="
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                  "
                />
                <div
                  class="block"
                  style="
                    position: absolute;
                    top: 48%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div
                  style="position: relative; width: 100%; height: 28%; top: 72%"
                >
                  <div
                    style="
                      position: relative;
                      height: 60%;
                      width: 100%;
                      text-align: center;
                      color: yellow;
                    "
                  >
                    李四
                  </div>
                  <div
                    style="
                      position: relative;
                      height: 40%;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #ffffff;
                    "
                  >
                    1204
                  </div>
                </div>
              </div>
              <div style="position: relative; height: 100%; width: 50%">
                <img
                  src="../../../public/static/img/third.png"
                  alt="Image"
                  style="
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                  "
                />
                <div
                  class="block"
                  style="
                    position: absolute;
                    top: 48%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "
                >
                  <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div
                  style="position: relative; width: 100%; height: 28%; top: 72%"
                >
                  <div
                    style="
                      position: relative;
                      height: 60%;
                      width: 100%;
                      text-align: center;
                      color: yellow;
                    "
                  >
                    王五
                  </div>
                  <div
                    style="
                      position: relative;
                      height: 40%;
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      color: #ffffff;
                    "
                  >
                    1200
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="position: relative; height: 62%; width: 100%; top: 5%">
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 3%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 6%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 9%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 12%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 15%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
            <div
              class="other"
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 18%;
                display: flex;
                background-color: rgba(24, 131, 253, 0.2);
                border-radius: 10px;
              "
            >
              <el-avatar
                :size="38"
                :src="circleUrl"
                style="position: relative; left: 4%"
              ></el-avatar>
              <div
                style="
                  position: relative;
                  width: 20%;
                  height: 100%;
                  left: 5%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                张三
              </div>
              <div
                style="
                  position: relative;
                  width: 15%;
                  height: 100%;
                  left: 55%;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                1120
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 单项任务完成速度排行榜 -->
      <div
        style="position: relative; height: 97%; top: 3%; width: 28%; left: 12%"
      >
        <div
          style="
            position: relative;
            height: 5%;
            width: 100%;
            text-align: center;
            color: #ffffff;
            top: 2%;
          "
        >
          单项任务完成速度排行榜
        </div>
        <div style="position: relative; height: 95%; width: 100%">
          <!-- 第一 -->
          <div
            style="position: relative; width: 100%; height: 10%; display: flex;"
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/4-1.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                张三
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第二 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 3%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/4-2.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                李四
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第三 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 6%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <img
                src="../../../public/static/img/4-3.png"
                alt="Image"
                style="
                  display: inline-block;
                  position: relative;
                  top: 0;
                  left: 0;
                  transform: scale(0.5);
                "
              />
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 35%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: yellow;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第四 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 9%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第五 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 12%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第六 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 15%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第七 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 18%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
          <!-- 第八 -->
          <div
            style="
              position: relative;
              width: 100%;
              height: 10%;
              top: 21%;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
              "
            >
              <div class="block">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
              </div>
              <div
                style="
                  position: relative;
                  width: 28%;
                  height: 100%;
                  left: 72%;
                  text-align: center;
                  display: flex;
                  align-items: center;
                  color: #ffffff;
                "
              >
                王五
              </div>
            </div>
            <div style="position: relative; width: 20%; height: 100%;left:50%; display:flex; align-items:center;color:#ffffff;
            ">30min
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      currentTime: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      let time = new Date();
      let year = time.getFullYear();
      let month = String(time.getMonth() + 1).padStart(2, "0");
      let day = String(time.getDate()).padStart(2, "0");
      let hour = String(time.getHours()).padStart(2, "0");
      let minute = String(time.getMinutes()).padStart(2, "0");
      let second = String(time.getSeconds()).padStart(2, "0");

      this.currentTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
  },
};
</script>