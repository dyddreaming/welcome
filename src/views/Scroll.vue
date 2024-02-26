<template>
  <div id="dowebok">
    <!-- 注册数据可视化 -->
    <div class="section active">
      <div
        style="
          height: 100vh;
          width: 100vw;
          background-image: url('/static/img/background.png');
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
            注册数据可视化
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
        <!-- 各学院注册情况 -->
        <div
          style="
            position: relative;
            width: 90%;
            left: 5%;
            height: 85%;
            top: 4%;
            display: flex;
          "
        >
          <div style="flex: 1; margin-left: 10px">
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
              各学院注册情况
            </div>
            <div style="position: relative; height: 95%; width: 100%">
              <div
                v-for="(college, index) in CollegeList"
                :key="index"
                class="college-item"
              >
                <p style="margin-left: 20px; font-size: 14px; color: #ffffff">
                  {{ college.name }}
                </p>
                <div style="margin-left: 20px; width: 95%">
                  <el-progress
                    :percentage="calculateRegistrationRate(index)"
                    :stroke-width="10"
                    :color="customColorMethod"
                    define-back-color="#f5f5f5"
                    text-color="#ffffff"
                  ></el-progress>
                </div>
              </div>
            </div>
          </div>
          <div style="flex: 2">
            <div
              style="
                height: 100%;
                width: 96%;
                left: 2%;
                position: relative;
                top: 2%;
              "
              ref="mapChart"
            ></div>
          </div>
          <div
            style="
              flex: 1;
              margin-right: 25px;
              display: flex;
              flex-direction: column;
            "
          >
            <div style="flex: 1; margin-bottom: 20px">
              <div
                style="
                  position: relative;
                  height: 5%;
                  width: 100%;
                  text-align: center;
                  color: #ffffff;
                "
              >
                本科生注册情况
              </div>
              <div
                style="position: relative; height: 95%; width: 100%"
                id="underContainer"
              ></div>
            </div>
            <div style="flex: 1">
              <div
                style="
                  position: relative;
                  height: 5%;
                  width: 100%;
                  text-align: center;
                  color: #ffffff;
                "
              >
                研究生注册情况
              </div>
              <div
                style="position: relative; height: 95%; width: 100%; top: 8%"
                id="graduateContainer"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 学生排行榜 -->
    <div class="section">
      <div
        style="
          height: 100vh;
          width: 100vw;
          background-image: url('static/img/background1.png');
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
        <div
          style="position: relative; height: 89%; width: 100%; display: flex"
        >
          <!-- 任务完成总进度排行榜 -->
          <div
            style="
              position: relative;
              height: 97%;
              top: 3%;
              width: 28%;
              left: 4%;
            "
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
                style="
                  position: relative;
                  width: 100%;
                  height: 10%;
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
                    src="../../public/static/img/1.png"
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
                    v-if="roles.length > 0 && roles[0].username"
                    style="
                      position: relative;
                      width: 35%;
                      height: 100%;
                      left: 35%;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      color: yellow;
                    "
                  >
                    {{ roles[0].username }}
                  </div>
                  <div v-else></div>
                </div>
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    v-if="progresses.length > 0"
                    :percentage="progresses[0]"
                    text-color="white"
                  ></el-progress>
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
                    src="../../public/static/img/2.png"
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
                    v-if="roles.length > 0 && roles[1].username"
                    style="
                      position: relative;
                      width: 35%;
                      height: 100%;
                      left: 35%;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      color: yellow;
                    "
                  >
                    {{ roles[1].username }}
                  </div>
                  <div v-else></div>
                </div>
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    v-if="progresses.length > 0"
                    :percentage="progresses[1]"
                    text-color="white"
                  ></el-progress>
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
                    src="../../public/static/img/3.png"
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
                    v-if="roles.length > 0 && roles[2].username"
                    style="
                      position: relative;
                      width: 35%;
                      height: 100%;
                      left: 35%;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      color: yellow;
                    "
                  >
                    {{ roles[2].username }}
                  </div>
                  <div v-else></div>
                </div>
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    v-if="progresses.length > 0"
                    :percentage="progresses[2]"
                    text-color="white"
                  ></el-progress>
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
                    v-if="roles.length > 0 && roles[3].username"
                    style="
                      position: relative;
                      width: 35%;
                      height: 100%;
                      left: 72%;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      color: yellow;
                    "
                  >
                    {{ roles[3].username }}
                  </div>
                  <div v-else></div>
                </div>
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    v-if="progresses.length > 0"
                    :percentage="progresses[3]"
                    text-color="white"
                  ></el-progress>
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
                    v-if="roles.length > 0 && roles[4].username"
                    style="
                      position: relative;
                      width: 35%;
                      height: 100%;
                      left: 72%;
                      text-align: center;
                      display: flex;
                      align-items: center;
                      color: yellow;
                    "
                  >
                    {{ roles[4].username }}
                  </div>
                  <div v-else></div>
                </div>
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    v-if="progresses.length > 0"
                    :percentage="progresses[4]"
                    text-color="white"
                  ></el-progress>
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
                      width: 35%;
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
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    :percentage="50"
                    text-color="white"
                  ></el-progress>
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
                      width: 35%;
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
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    :percentage="50"
                    text-color="white"
                  ></el-progress>
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
                      width: 35%;
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
                <div
                  style="
                    position: relative;
                    top: 40%;
                    width: 60%;
                    height: 30%;
                    left: 5%;
                  "
                >
                  <el-progress
                    :percentage="50"
                    text-color="white"
                  ></el-progress>
                </div>
              </div>
            </div>
          </div>
          <!-- 学生任务排行榜 -->
          <div
            style="
              position: relative;
              height: 97%;
              top: 3%;
              width: 28%;
              left: 8%;
            "
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
                    src="../../public/static/img/first.png"
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
                    style="
                      position: relative;
                      width: 100%;
                      height: 28%;
                      top: 72%;
                    "
                  >
                    <div
                      v-if="records.length != 0"
                      style="
                        position: relative;
                        height: 60%;
                        width: 100%;
                        text-align: center;
                        color: yellow;
                      "
                    >
                      {{ records[0].username }}
                    </div>
                    <div
                      v-if="records.length != 0"
                      style="
                        position: relative;
                        height: 40%;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        color: #ffffff;
                      "
                    >
                      {{ records[0].integral }}
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
                      src="../../public/static/img/second.png"
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
                      style="
                        position: relative;
                        width: 100%;
                        height: 28%;
                        top: 72%;
                      "
                    >
                      <div
                        v-if="records.length != 0"
                        style="
                          position: relative;
                          height: 60%;
                          width: 100%;
                          text-align: center;
                          color: yellow;
                        "
                      >
                        {{ records[1].username }}
                      </div>
                      <div
                        v-if="records.length != 0"
                        style="
                          position: relative;
                          height: 40%;
                          width: 100%;
                          text-align: center;
                          font-size: 12px;
                          color: #ffffff;
                        "
                      >
                        {{ records[1].integral }}
                      </div>
                    </div>
                  </div>
                  <div style="position: relative; height: 100%; width: 50%">
                    <img
                      src="../../public/static/img/third.png"
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
                      style="
                        position: relative;
                        width: 100%;
                        height: 28%;
                        top: 72%;
                      "
                    >
                      <div
                        v-if="records.length != 0"
                        style="
                          position: relative;
                          height: 60%;
                          width: 100%;
                          text-align: center;
                          color: yellow;
                        "
                      >
                        {{ records[2].username }}
                      </div>
                      <div
                        v-if="records.length != 0"
                        style="
                          position: relative;
                          height: 40%;
                          width: 100%;
                          text-align: center;
                          font-size: 12px;
                          color: #ffffff;
                        "
                      >
                        {{ records[2].integral }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="position: relative; height: 62%; width: 100%; top: 5%"
              >
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
                    v-if="records.length != 0"
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
                    {{ records[3].username }}
                  </div>
                  <div
                    v-if="records.length != 0"
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
                    {{ records[3].integral }}
                  </div>
                </div>
                <div
                  v-if="records.length != 0"
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
                    v-if="records.length != 0"
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
                    {{ records[4].username }}
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
                    {{ records[4].integral }}
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
                    v-if="records.length != 0"
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
                    v-if="records.length != 0"
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
            style="
              position: relative;
              height: 97%;
              top: 3%;
              width: 28%;
              left: 12%;
            "
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
                style="
                  position: relative;
                  width: 100%;
                  height: 10%;
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
                    src="../../public/static/img/4-1.png"
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                    src="../../public/static/img/4-2.png"
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                    src="../../public/static/img/4-3.png"
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
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
                <div
                  style="
                    position: relative;
                    width: 20%;
                    height: 100%;
                    left: 50%;
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                  "
                >
                  30min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 任务模块 -->
    <div class="section">
      <div
        style="
          height: 100vh;
          width: 100vw;
          background-image: url('/static/img/background2.png');
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
            任务数据可视化
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
        <div
          style="
            position: relative;
            height: 89%;
            width: 100%;
            top: 2%;
            display: flex;
          "
        >
          <div style="position: relative; height: 100%; width: 42%; left: 6%">
            <div style="position: relative; height: 49%; width: 100%">
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
                9月1日完成任务排行榜
              </div>
              <div
                style="position: relative; height: 95%; width: 98%"
                ref="comChartContainer"
              ></div>
            </div>
            <div style="position: relative; height: 49%; width: 100%; top: 2%">
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
                9月1日参与人数排行榜
              </div>
              <div
                style="position: relative; width: 98%; height: 95%"
                ref="inChartContainer"
              ></div>
            </div>
          </div>
          <div style="position: relative; height: 100%; width: 42%; left: 10%">
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
              热点任务情况
            </div>
            <div
              style="
                position: relative;
                width: 58%;
                height: 93%;
                top: 2%;
                left: 21%;
              "
              class="myTable"
            >
              <el-table :data="taskData" style="width: 100%">
                <el-table-column prop="name" label="任务名" width="180">
                </el-table-column>
                <el-table-column prop="value" label="热度值" width="180">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 广告模块 -->
    <div class="section">
      <div
        style="
          height: 100vh;
          width: 100vw;
          background-image: url('/static/img/background3.png');
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
            广告数据可视化
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
        <div
          style="
            position: relative;
            height: 89%;
            width: 100%;
            top: 2%;
            display: flex;
          "
        >
          <div style="position: relative; height: 100%; width: 42%; left: 6%">
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
              当日点击量排行榜
            </div>
            <div
              style="position: relative; height: 95%; width: 100%"
              id="chartContainer"
            ></div>
          </div>
          <div style="position: relative; height: 100%; width: 42%; left: 10%">
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
              7日点击量排行榜
            </div>
            <div
              style="position: relative; height: 95%; width: 100%"
              id="sevenContainer"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep.myTable .el-table,
:deep.myTable .el-table__expanded-cell {
  background-color: transparent !important;
}
:deep.myTable .el-table th,
:deep.myTable .el-table tr,
:deep.myTable .el-table td {
  background-color: transparent !important;
  color: white !important;
  border-color: white !important;
}
:deep.myTable .el-table td:not(:last-child)::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: white; /* 竖线颜色为白色 */
}
</style>

<script>
import axios from "axios";
import * as echarts from "echarts";
import "../components/charts/china.js";
export default {
  data() {
    return {
      currentTime: "",
      customColor: "#18DBFD",
      // CollegeList: ["计算机学院", "信息学院"],
      CollegeList: [],
      taskData: [
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
        {
          name: "校史学习",
          value: 1760,
        },
      ],
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      UndergraduateC: 0,
      UndergraduateE: 0,
      UndergraduateN: 0,
      GraduateC: 0,
      GraduateE: 0,
      GraduateN: 0,
      areaName: [],
      areaNumber: [],
      rolesData1: {},
      roles: [],
      progresses: [],
      rolesData2: {},
      records: [],
      rolesData3: {},
      roles2: [],
      consumeList: [],
      hotTaskData: [],
    };
  },
  mounted() {
    $(document).ready(function () {
      $("#dowebok").fullpage({});
    });
    this.getData1().then(() => {
      this.initUnderChart();
      this.initGraduateChart();
    });
    this.getData2().then(() => {
      this.initChartMap();
    });
    this.fetchCollegesRegisterData();
    this.getTaskComRank();
    this.getTaskComRank();
    this.getStudentRank();
    this.getHotTask();
    this.getSingleComRank();
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.renderComChart();
    this.renderJoinChart();
    this.loadData();
    this.initChart();
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
    // 本科生注册情况
    initUnderChart() {
      var chartDom = document.getElementById("underContainer");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: this.UndergraduateE,
                name: "注册人数",
                itemStyle: { color: "#18DBFD" },
              },
              {
                value: this.UndergraduateN,
                name: "未注册人数",
                itemStyle: { color: "#1883FD" },
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
    // 研究生注册情况
    initGraduateChart() {
      var chartDom = document.getElementById("graduateContainer");
      var myChart = echarts.init(chartDom);

      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            type: "pie",
            radius: "70%",
            data: [
              {
                value: this.GraduateE,
                name: "注册人数",
                itemStyle: { color: "#18DBFD" },
                label: {
                  show: false,
                },
              },
              {
                value: this.GraduateN,
                name: "未注册人数",
                itemStyle: { color: "#1883FD" },
                label: {
                  show: false,
                },
              },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 首次注册地图
    initChartMap() {
      let dataList = [
        {
          name: "北京",
          value: 540,
        },
        {
          name: "南海诸岛",
          value: 0,
        },
        {
          name: "天津",
          value: 130,
        },
        {
          name: "上海",
          value: 400,
        },
        {
          name: "重庆",
          value: 750,
        },
        {
          name: "河北",
          value: 103,
        },
        {
          name: "河南",
          value: 830,
        },
        {
          name: "云南",
          value: 110,
        },
        {
          name: "辽宁",
          value: 190,
        },
        {
          name: "黑龙江",
          value: 150,
        },
        {
          name: "湖南",
          value: 690,
        },
        {
          name: "安徽",
          value: 600,
        },
        {
          name: "山东",
          value: 390,
        },
        {
          name: "新疆",
          value: 40,
        },
        {
          name: "江苏",
          value: 310,
        },
        {
          name: "浙江",
          value: 1040,
        },
        {
          name: "江西",
          value: 360,
        },
        {
          name: "湖北",
          value: 1052,
        },
        {
          name: "广西",
          value: 330,
        },
        {
          name: "甘肃",
          value: 70,
        },
        {
          name: "山西",
          value: 90,
        },
        {
          name: "内蒙古",
          value: 70,
        },
        {
          name: "陕西",
          value: 22,
        },
        {
          name: "吉林",
          value: 4,
        },
        {
          name: "福建",
          value: 18,
        },
        {
          name: "贵州",
          value: 5,
        },
        {
          name: "广东",
          value: 98,
        },
        {
          name: "青海",
          value: 1,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 440,
        },
        {
          name: "宁夏",
          value: 4,
        },
        {
          name: "海南",
          value: 22,
        },
        {
          name: "台湾",
          value: 3,
        },
        {
          name: "香港",
          value: 5,
        },
        {
          name: "澳门",
          value: 5,
        },
      ];
      dataList.forEach((item) => {
        item.value = 0;
      });
      this.areaName = this.areaName.map((name) => name.replace(/省|市/g, ""));
      this.areaName.forEach((name, index) => {
        let areaIndex = dataList.findIndex((item) => item.name === name);
        if (areaIndex !== -1) {
          dataList[areaIndex].value = this.areaNumber[index];
        }
      });
      // console.log(dataList);

      let myChart = echarts.init(this.$refs.mapChart);

      let options = {
        title: {
          text: "首次注册地图",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 30,
          },
        },
        tooltip: {
          triggerOn: "mousemove",
          formatter: function (e, t, n) {
            return e.seriesName + "<br />" + e.name + "：" + e.value;
          },
        },
        // 热力地图
        visualMap: {
          min: 0,
          max: 1000,
          left: 240,
          textStyle: {
            color: "#fff",
          },
          pieces: [
            {
              gt: 10,
              label: "> 10 人",
              color: "#044480",
            },
            {
              gte: 5,
              lte: 10,
              label: "5 - 10 人",
              color: "#0444ab",
            },
            {
              gte: 1,
              lt: 5,
              label: "1 - 5 人",
              color: "#0d7fe9",
            },
            {
              gte: 0,
              lt: 1,
              label: "< 1 人",
              color: "#2dc3f4",
            },
          ],
        },

        series: [
          {
            name: "注册数",
            data: dataList,
            type: "map",
            map: "china",
            zoom: 1.2,
            aspectScale: 0.75,
            label: {
              // 默认文本标签样式
              normal: {
                color: "white",
                show: true,
              },
              // 高亮文本标签样式
              emphasis: {
                color: "yellow",
                fontSize: 22,
                fontWeight: "bold",
              },
            },
            itemStyle: {
              // 默认区域样式
              normal: {
                // 区域背景透明
                areaColor: "transparent",
                borderColor: "rgba(39,211,233, 1)",
                borderWidth: 1,
              },
              // 高亮区域样式
              emphasis: {
                // 高亮区域背景色
                areaColor: "#01ADF2",
              },
            },
          },
        ],
      };

      myChart.setOption(options);
    },
    renderComChart() {
      let dataAxis = ["张三", "李四", "王五", "xx", "yy", "zz", "ww"];
      let data = [20, 18, 17, 15, 10, 9, 5];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.comChartContainer);

      let option = {
        grid: {
          top: "30%",
        },
        xAxis: {
          name: "用户名",
          nameTextStyle: {
            color: "#ffffff",
          },
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#ffffff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          name: "完成任务数",
          nameTextStyle: {
            color: "#ffffff",
          },
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#ffffff",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            label: {
              show: true,
              position: "top",
            },
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#18DBFD" },
                { offset: 0.5, color: "#1883FD" },
                { offset: 1, color: "#1782FC" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#18DBFD" },
                  { offset: 0.7, color: "#1883FD" },
                  { offset: 1, color: "#1782FC" },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      const zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
            ],
        });
      });

      myChart.setOption(option);
    },
    renderJoinChart() {
      let dataAxis = [
        "校史学习",
        "新生报到",
        "食堂打卡",
        "xxx",
        "yyx",
        "zzz",
        "www",
      ];
      let data = [200, 180, 170, 150, 100, 90, 50];
      let yMax = 500;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      let myChart = echarts.init(this.$refs.inChartContainer);
      let option = {
        grid: {
          top: "30%",
        },
        xAxis: {
          name: "任务名",
          nameTextStyle: {
            color: "#ffffff",
          },
          data: dataAxis,
          axisLabel: {
            inside: false,
            color: "#ffffff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          name: "人数",
          nameTextStyle: {
            color: "#ffffff",
          },
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#ffffff",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            label: {
              show: true,
              position: "top",
            },
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#18DBFD" },
                { offset: 0.5, color: "#1883FD" },
                { offset: 1, color: "#1782FC" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#18DBFD" },
                  { offset: 0.7, color: "#1883FD" },
                  { offset: 1, color: "#1782FC" },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      const zoomSize = 6;
      myChart.on("click", function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: "dataZoom",
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue:
            dataAxis[
              Math.min(params.dataIndex + zoomSize / 2, data.length - 1)
            ],
        });
      });

      myChart.setOption(option);
    },
    loadData() {
      var chartContainer = document.getElementById("chartContainer");
      var myChart = echarts.init(chartContainer);
      let option = {
        dataset: {
          source: [
            ["heat", "amount", "advertise"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [44.4, 41032, "Cheese Cocoa"],
            [20.1, 12755, "Cheese Brownie"],
            [89.7, 56667, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [89.6, 91852, "Orange Juice"],
            [90.6, 101852, "Lemon Juice"],
            [32.7, 20112, "Walnut Brownie"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "次数", min: 0, max: 120000 },
        yAxis: { type: "category", name: "广告" },
        textStyle: { color: "white" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Click", "Low Click"],
          textStyle: {
            color: "white",
          },
          dimension: 0,
          inRange: {
            color: ["#6BE8CF", "#9FE0FF", "#0F5DC0"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              x: "amount",
              y: "advertise",
            },
          },
        ],
      };

      myChart.setOption(option);
    },
    initChart() {
      var chartContainer = document.getElementById("sevenContainer");
      var chart = echarts.init(chartContainer);

      // 图表配置
      var option = {
        xAxis: {
          name: "广告",
          type: "category",
          boundaryGap: false,
          data: [
            "舞蹈社招新",
            "烤匠",
            "xxxx",
            "yyy",
            "zzz",
            "xxxxx",
            "xxxxxxx",
          ],
        },
        yAxis: {
          name: "累计点击次数",
          type: "value",
          min: 0,
          max: 1500,
        },
        textStyle: { color: "white" },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
              color: "rgb(24, 219, 253,1)",
            },
            areaStyle: {
              color: "rgb(24, 219, 253,0.4)",
            },
          },
        ],
      };

      // 使用配置项显示图表
      chart.setOption(option);
    },
    // 获取本科生和研究生总体注册情况
    getData1() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/info`)
        .then((response) => {
          this.UndergraduateC = response.data.data.underCount;
          this.UndergraduateE = response.data.data.underEnrollment;
          this.GraduateC = response.data.data.postCount;
          this.GraduateE = response.data.data.postEnrollment;

          this.UndergraduateN = this.UndergraduateC - this.UndergraduateE;
          this.GraduateRN = this.GraduateC - this.GraduateE;
          // console.log(this.UndergraduateN);
          // console.log(this.GraduateRN);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 获取注册地图数据
    getData2() {
      return axios
        .get(`${this.$store.getters.getIp}/students/register/location`)
        .then((response) => {
          this.areaName = response.data.data.addresses;
          this.areaNumber = response.data.data.addressCounts;
          // console.log("注册地:", this.areaName);
          // console.log("注册人数:", this.areaNumber);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 获取各学院情况
    fetchCollegesRegisterData() {
      axios
        .get(`${this.$store.getters.getIp}/colleges/list`)
        .then((response) => {
          this.CollegeList = response.data.data;
          // console.log(this.CollegeList);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          console.log(this.$store.getters.getIp);
        });
    },
    // 计算注册率
    calculateRegistrationRate(index) {
      const registerCount = this.CollegeList[index].enrollment;
      const total = this.CollegeList[index].headcount;
      return total === 0 ? 0 : Math.floor((registerCount / total) * 100);
    },
    // 进度条颜色
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#2dc3f4";
      } else if (percentage < 70) {
        return "#0d7fe9";
      } else {
        return "#0444ab";
      }
    },
    // 任务完成总进度排行榜
    getTaskComRank() {
      return axios
        .get(`${this.$store.getters.getIp}/roles/progress/rank`)
        .then((response) => {
          this.rolesData1 = response.data.data;
          this.roles = this.rolesData1.roles;
          this.progresses = this.rolesData1.progresses;
          this.progresses = this.progresses.map((progress) =>
            parseInt(progress)
          );
          // console.log(this.rolesData1);
          // console.log(this.roles);
          // console.log(this.progresses);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // console.log(this.$store.getters.getIp);
        });
    },
    // 学生排行榜
    getStudentRank() {
      axios
        .get(`${this.$store.getters.getIp}/roles/rank`)
        .then((response) => {
          this.rolesData2 = response.data.data;
          this.records = this.rolesData2.records;
          // console.log(this.rolesData2);
          // console.log(this.records);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // console.log(this.$store.getters.getIp);
        });
    },
    // 单项任务完成速度排行榜
    getSingleComRank() {
      axios
        .get(`${this.$store.getters.getIp}/tasks/students/speed/rank`, {
          params: {
            taskId: 1,
          },
        })
        .then((response) => {
          this.rolesData3 = response.data.data;
          this.roles2 = this.rolesData3.roles;
          this.consumeList = this.rolesData3.consumeList;
          console.log("角色", this.roles2);
          this.consumeList = this.consumeList.map((seconds) =>
            Math.floor(seconds / 60)
          );
          console.log("时间", this.consumeList);
          // console.log(this.rolesData3);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    // 热点任务
    getHotTask() {
      axios
        .get(`${this.$store.getters.getIp}/tasks/popularity/rank`)
        .then((response) => {
          this.hotTaskData = response.data.data;
          console.log("热点任务数据",this.hotTaskData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // console.log(this.$store.getters.getIp);
        });
    },
    // 完成任务排行榜
    getComRank(){},

    // 参与人数排行榜
    getJoinRank(){},
  },
};
</script>