<template>
  <div
    class="app-main"
    style="
      position: relative;
      background-color: #f0f3f4;
      height: 100vh;
      overflow-y: auto;
    "
  >
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
      <div
        style="
          margin-left: auto;
          display: flex;
          align-items: center;
          margin-right: 2%;
        "
      >
        <el-avatar :size="35" :src="circleUrl"></el-avatar>
        <div style="margin-left: 10px; color: #ffffff">
          <p style="margin: 0">school@school.com</p>
          <p style="margin: 0; font-size: 14px">管理员</p>
        </div>
        <div style="margin-left: 10px; color: #ffffff">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i
                class="el-icon-more"
                style="color: #ffffff; transform: rotate(90deg)"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="q">退出登录</el-dropdown-item>
              <el-dropdown-item command="m">修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
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
        平台参数配置
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
            >平台参数配置</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div style="position: relative; height: 180%; width: 100%">
      <div style="position: relative; height: 20%; width: 100%; display: flex">
        <div
          style="
            position: relative;
            height: 90%;
            width: 47%;
            left: 2%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          "
        >
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 3%;
              color: #747474;
              text-align: center;
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
              height: 15%;
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
          <div style="position: relative; height: 15%; width: 95%; left: 3%">
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
          <div
            style="
              position: relative;
              height: 10%;
              width: 96%;
              left: 2%;
              top: 2%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改</el-button
            >
          </div>
        </div>
        <div
          style="
            position: relative;
            height: 90%;
            width: 47%;
            left: 4%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            color: #747474;
          "
        >
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 2%;
              color: #747474;
              text-align: center;
            "
          >
            消息提醒
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >手动任务审核提醒：</span
            >
            <el-switch
              v-model="taskValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >商家广告信息提醒：</span
            >
            <el-switch
              v-model="advertiseValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >学生留言信息提醒：</span
            >
            <el-switch
              v-model="messageValue"
              active-color="#209e91"
              inactive-color="#cccccc"
            ></el-switch>
          </div>
          <div
            style="
              position: relative;
              height: 25%;
              width: 96%;
              left: 2%;
              top: 4%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改
            </el-button>
          </div>
        </div>
      </div>
      <div style="position: relative; height: 20%; width: 100%; display: flex">
        <div
          style="
            color: #747474;
            position: relative;
            height: 90%;
            width: 47%;
            left: 2%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          "
        >
          <div
            style="
              position: relative;
              height: 10%;
              width: 95%;
              font-size: 20px;
              left: 2%;
              color: #747474;
              text-align: center;
            "
          >
            数据备份
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份策略：</span
            >
            <template style="font-size: 18px !important">
              <el-radio v-model="type" label="1">完整备份</el-radio>
              <el-radio v-model="type" label="2">增量备份</el-radio>
              <el-radio v-model="type" label="3">差异备份</el-radio>
            </template>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份周期：</span
            >
            <el-radio v-model="time" label="1" id="data">每日备份</el-radio>
            <el-radio v-model="time" label="2">每周备份</el-radio>
            <el-radio v-model="time" label="3">每月备份</el-radio>
            <el-radio v-model="time" label="4">每年备份</el-radio>
          </div>
          <div
            style="
              position: relative;
              height: 20%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span
              style="position: relative; margin-right: 20px; font-size: 18px"
              >备份存储位置：</span
            >
            <el-input
              style="position: relative; width: 50%"
              v-model="position"
            ></el-input>
          </div>
          <div
            style="
              position: relative;
              top: 4%;
              height: 25%;
              width: 96%;
              left: 2%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <el-button
              type="primary"
              style="background-color: #dfb81c; border: #dfb81c"
              size="small"
              >保存更改
            </el-button>
          </div>
        </div>
        <div
          style="
            color: #747474;
            position: relative;
            height: 90%;
            width: 47%;
            left: 4%;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            display: flex;
          "
        >
          <div
            style="
              position: relative;
              height: 100%;
              width: 50%;
              border-right: 2px solid #e0e0e0;
            "
          >
            <div
              style="
                position: relative;
                height: 10%;
                width: 100%;
                text-align: center;
                font-size: 20px;
                border-bottom: 2px solid #e0e0e0;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              常规版
            </div>
            <div style="position: relative; height: 70%; width: 100%">
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>学生管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>任务管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>数据管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>权限管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>可发布200项任务</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 16%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>同时在人数50000人</span>
              </div>
            </div>
            <div
              style="
                position: relative;
                height: 10%;
                width: 40%;
                left: 32%;
                display: flex;
                top: 6%;
                justify-content: center;
                align-items: center;
              "
            >
              <el-button
                type="primary"
                style="background-color: #c0c0c0; border: #c0c0c0"
                size="small"
                >当前版本
              </el-button>
            </div>
          </div>
          <div style="position: relative; height: 100%; width: 50%">
            <div
              style="
                position: relative;
                height: 10%;
                width: 100%;
                text-align: center;
                font-size: 20px;
                border-bottom: 2px solid #e0e0e0;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              专业版
            </div>
            <div style="position: relative; height: 75%; width: 100%">
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>学生管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>任务管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>数据管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>权限管理</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>附加功能管理 </span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>可发布500项任务</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 14%;
                  width: 70%;
                  left: 25%;
                  font-size: 18px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                "
              >
                <i
                  class="el-icon-success"
                  style="color: #209e91; margin-right: 20px"
                ></i>
                <span>同时在人数80000人</span>
              </div>
              <div
                style="
                  position: relative;
                  height: 10%;
                  top: 5%;
                  width: 40%;
                  left: 32%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <el-button
                  type="primary"
                  style="background-color: #209e91; border: #209e91"
                  size="small"
                  >立即升级
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          position: relative;
          height: 20%;
          width: 96%;
          left: 2%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          color: #747474;
        "
      >
        <div
          style="
            position: relative;
            height: 10%;
            width: 100%;
            top: 3%;
            font-size: 20px;
            color: #747474;
            text-align: center;
          "
        >
          移动端广告设置
        </div>
        <div
          style="position: relative; height: 22%; width: 100%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 60%;
              top: 20%;
              width: 47%;
              left: 2%;
            "
          >
            <div
              style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                left: 5%;
              "
            >
              <span style="margin-right: 10px; left: 7%"
                >社团资讯投放条数:</span
              >
              <el-input
                v-model="club"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%"
                id="phoneImport"
              >
              </el-input>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 60%;
              top: 20%;
              width: 47%;
              left: 4%;
            "
          >
            <div
              style="
                position: relative;
                width: 100%;
                left: 8%;
                display: flex;
                align-items: center;
              "
            >
              <span style="margin-right: 10px; left: 7%"
                >美食资讯投放条数:</span
              >
              <el-input
                v-model="food"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%"
                id="phoneImport"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div
          style="
            position: relative;
            height: 22%;
            width: 100%;
            background-color: #ffffff;
            display: flex;
          "
        >
          <div
            style="
              position: relative;
              height: 60%;
              top: 10%;
              width: 47%;
              left: 2%;
            "
          >
            <div
              style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                left: 5%;
              "
            >
              <span style="margin-right: 10px; left: 7%"
                >娱乐资讯投放条数:</span
              >
              <el-input
                v-model="play"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%"
                id="phoneImport"
              >
              </el-input>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 60%;
              top: 10%;
              width: 47%;
              left: 4%;
            "
          >
            <div
              style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                left: 8%;
              "
            >
              <span style="margin-right: 10px; left: 7%"
                >兼职资讯投放条数:</span
              >
              <el-input
                v-model="partTime"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%"
                id="phoneImport"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div
          style="position: relative; height: 22%; width: 100%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 60%;
              top: 10%;
              width: 96%;
              left: 2%;
            "
          >
            <div
              style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                left: 2.5%;
              "
            >
              <span style="margin-right: 10px; left: 7%">广告投放时间:</span>
              <el-input
                v-model="putTime"
                placeholder="请输入"
                style="position: relative; height: 40px !important; width: 31%"
                id="phoneImport"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div
          style="
            position: relative;
            height: 15%;
            width: 96%;
            left: 2%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            top: 4%;
          "
        >
          <el-button
            type="primary"
            style="background-color: #dfb81c; border: #dfb81c"
            size="small"
            >保存更改
          </el-button>
        </div>
      </div>
      <div
        style="
          position: relative;
          height: 37%;
          width: 96%;
          left: 2%;
          top: 2%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          color: #747474;
        "
      >
        <div
          style="
            position: relative;
            height: 10%;
            width: 95%;
            font-size: 20px;
            left: 3%;
            color: #747474;
            text-align: center;
            border-bottom: 2px solid #e0e0e0;
          "
        >
          知识库管理
        </div>
        <div
          style="
            position: relative;
            height: 85%;
            width: 96%;
            left: 2%;
            color: #747474;
            text-align: center;
            display: flex;
          "
        >
          <!-- 分隔竖线 -->
          <div
            style="
              position: absolute;
              left: 50%;
              bottom: 0;
              height: 100%;
              border-left: 2px solid #e0e0e0;
            "
          ></div>
          <div style="position: relative; height: 100%; width: 48%">
            <div
              style="
                position: relative;
                width: 90%;
                height: 140px;
                background-color: #e0e0e0;
                border-radius: 5px;
                left: 5%;
                top: 5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #747474;
              "
            >
              <img
                src="../../public/static/img/file.png"
                alt="Image"
                style="
                  display: block;
                  margin: 0 auto;
                  max-width: 100%;
                  max-height: 100%;
                "
                @click="handleTextClick"
              />
              <p style="font-size: 14px; margin: 0">点击即可上传</p>
              <p style="font-size: 14px; margin: 0">
                Limit 200MB per file • HTML, HTM, MD, JSON, JSONL, CSV, PDF,
                DOCX, DOC, PPT, PPTX, PNG,JPG,JPEG,BMP,XLSX, XLS,DOCK, DOC XML,
                PPT, PPTX
              </p>
            </div>
            <input
              type="file"
              ref="textFileInput"
              style="display: none"
              accept=".xlsx, .xls,.docx"
              @change="handleTextUpload"
            />
            <div
              style="
                position: relative;
                height: 10%;
                width: 90%;
                top: 5%;
                left: 5%;
                display: flex;
                align-items: center;
              "
              v-if="showSuccess"
            >
              <i
                class="el-icon-document"
                style="color: #747474; font-size: 24px; margin-right: 10px"
              ></i>
              <p>{{ upFileName }} {{ upFileSize }}</p>
            </div>
            <div
              style="
                position: relative;
                height: 10%;
                width: 90%;
                top: 5%;
                left: 5%;
                display: flex;
                align-items: center;
              "
              v-if="showSuccess"
            >
              <div
                style="
                  position: relative;
                  height: 25%;
                  width: 100%;
                  top: 4%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: center;
                "
              >
                <el-button
                  type="primary"
                  style="background-color: #dfb81c; border: #dfb81c"
                  size="small"
                  @click="addFile"
                  >添加文件到知识库
                </el-button>
              </div>
            </div>
            <div
              style="
                position: relative;
                height: 45%;
                width: 100%;
                top: 5%;
                overflow-y: auto;
              "
            >
              <el-table
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
              >
                <!-- <el-table-column
                type="selection"
                label="选择"
                width="50"
                :align="'center'"
              >
                <template slot="header" slot-scope="scope">
                  <span
                    style="display: inline-block; width: 100%; text-align: center"
                    >{{ scope.column.label }}</span
                  >
                </template>
              </el-table-column> -->
                <el-table-column
                  prop="id"
                  label="序号"
                  min-width="50"
                  :align="'center'"
                >
                  <template slot="header" slot-scope="scope">
                    <span
                      style="
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                      "
                      >{{ scope.column.label }}</span
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="文档名称"
                  min-width="50"
                  :align="'center'"
                >
                  <template slot="header" slot-scope="scope">
                    <span
                      style="
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                      "
                      >{{ scope.column.label }}</span
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div style="position: relative; height: 100%; width: 48%; left: 4%">
            <div
              style="
                position: relative;
                height: 75%;
                top:5%;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
              "
            >
              <textarea
                v-model="textareaContent"
                style="
                  width: 100%;
                  height: 100%;
                  resize: none;
                  font-size: 16px;
                  color: #747474;
                  background-color: transparent;
                  border: none;
                "
              >
              </textarea>
            </div>
            <div
              style="
                position: relative;
                height: 15%;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                top:5%;
              "
            >
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                >下载选中文档</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                @click="deleteFile"
                >从知识库中删除</el-button
              >
            </div>
          </div>
        </div>
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
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      search: "",
      oldPassWord: "",
      newPassWord: "",
      taskValue: "",
      advertiseValue: "",
      messageValue: "",
      position: "D:/data",
      type: "",
      time: "",
      club: 100,
      food: 100,
      play: 100,
      partTime: 100,
      putTime: "8:00-23:00",
      showSuccess: false,
      upFileName: null,
      upFileSize: null,
      tableData: [
        {
          id: 1,
          name: "welcome1.docx",
        },
        {
          id: 2,
          name: "welcome2.docx",
        },
        {
          id: 3,
          name: "school1.docx",
        },
        {
          id: 4,
          name: "school2.docx",
        },
      ],
      selectedIds: [],
      textareaContent: "",
      currentRow: null,
    };
  },
  methods: {
    deleteFile() {
      if (this.selectedIds.length === 0) {
        this.$message.warning("请先选择要操作的项");
      } else {
        this.$confirm("确认删除吗？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.tableData = this.tableData.filter(
              (item) => !this.selectedIds.includes(item.id)
            );
            console.log("删除");
            this.$message({
              message: "删除成功",
              type: "success",
            });
          })
          .catch(() => {});
      }
    },
    handleCurrentChange(val) {
      /* this.selectedIds = selection.map((item) => item.id);
      console.log(this.selectedIds); */
      /* if(this.selectedIds.length!=0)
      {
        this.textareaContent="任务一完成方法：首先准备通知书，再上传通知书上包含校徽一面的照片，即可完成该任务。";
      }
      else{
        this.textareaContent="";
      } */
      this.currentRow = val;
      console.log(this.currentRow);
      if (this.currentRow.id == 1) {
        this.textareaContent =
          "报到倒计时1完成方法：首先准备通知书，再上传通知书上包含校徽一面的照片，即可完成该任务。";
      } else if (this.currentRow.id == 2) {
        this.textareaContent =
          "报到倒计时2完成方法：首先准备身份证，再上传身份证带有人脸和国徽的照片，即可完成任务。";
      }
    },
    addFile() {
      let id = this.tableData.length + 1;
      this.tableData.push({ id: id, name: this.upFileName });
      this.$message({
        message: "文档添加成功",
        type: "success",
      });
    },
    handleTextClick() {
      this.$refs.textFileInput.click();
    },
    handleTextUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const allowedTypes = [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx 文件
          "application/vnd.ms-excel", // .xls 文件
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx 文件
        ];
        if (allowedTypes.includes(file.type)) {
          this.showSuccess = true;
          // 获取文件名和大小
          this.upFileName = file.name;
          let fileSize = file.size;
          // let fileSizeStr = "";

          // 将文件大小转换为更友好的单位
          if (fileSize >= 1024 * 1024 * 1024) {
            this.upFileSize =
              (fileSize / (1024 * 1024 * 1024)).toFixed(2) + "GB";
          } else if (fileSize >= 1024 * 1024) {
            this.upFileSize = (fileSize / (1024 * 1024)).toFixed(2) + "MB";
          } else if (fileSize >= 1024) {
            this.upFileSize = (fileSize / 1024).toFixed(2) + "KB";
          } else {
            this.upFileSize = fileSize.toFixed(2) + "B";
          }

          /* console.log("文件名:", this.upFileName);
          console.log("文件大小:", this.upFileSize); */
        } else {
          console.error("未获取到正确文件");
        }
      }
    },
    isShowTriangle(route) {
      // 根据当前路由判断是否显示圆形
      return this.$route.path === `${route}`;
    },
    handleCommand(command) {
      if (command == "q") {
        this.quit();
      } else if (command == "m") {
        this.$router.push("/mainMenu/config/safety");
      }
    },
    quit() {
      axios
        .post(`${this.$store.getters.getIp}/administrators/logout`)
        .then((response) => {
          if (response.data.code) {
            this.$message.success("退出成功");
            this.$router.push("/login");
          } else {
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