<template>
    <div class="app-main" style="position: relative">
      <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 8%;
          width: 90%;
          left: 5%;
          font-size: 22px;
          position: relative;
          font-weight: 600;
        ">
        学生任务发布
      </div>
      <!-- 任务设置 -->
      <div style="
          position: relative;
          height: 85%;
          width: 90%;
          left: 5%;
          background-color: #ffffff;
          border: 2px solid #fa5e00;
          display: flex;
          border-radius:8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        ">
        <!-- 左侧 -->
        <div style="
            position: relative;
            width: 33%;
            height: 100%;
            border-right: 2px solid #fa5e00;
          ">
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 10px; margin-left: 20px">任务名称*:</span>
            <el-input v-model="name" placeholder="请输入" style="position: relative; height: 40px !important; width: 70%">
            </el-input>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 10px; margin-left: 20px">任务描述*:</span>
            <el-input v-model="describe" placeholder="请输入"
              style="position: relative; height: 40px !important; width: 70%">
            </el-input>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 10px; margin-left: 20px">任务对象*:</span>
            <el-checkbox v-model="underGraduate">本科生</el-checkbox>
            <el-checkbox v-model="Graduate">研究生</el-checkbox>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 10px; margin-left: 20px">任务类型*:</span>
            <el-select v-model="typeValue" placeholder="请选择"
              style="position: relative; height: 40px !important; width: 70%">
              <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%" v-if="typeValue === '主线'">
            <span style="margin-right: 10px; margin-left: 20px">前置任务*:</span>
            <el-select v-model="beforeTask" placeholder="请选择"
              style="position: relative; height: 40px !important; width: 70%">
              <el-option v-for="item in taskOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%" v-if="typeValue === '支线'">
            <span style="margin-right: 10px; margin-left: 20px">前置主线*:</span>
            <el-select v-model="beforeMain" placeholder="请选择"
              style="position: relative; height: 40px !important; width: 70%">
              <el-option v-for="item in mainOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 10px; margin-left: 20px">任务级别*:</span>
            <el-select v-model="grade" placeholder="请选择" style="position: relative; height: 40px !important; width: 70%">
              <el-option v-for="item in gradeOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="position: relative; height: 36%; width: 100%; top: 1%;">
            <div style="
                position: relative;
                height: 10%;
                width: 89%;
                top: 1%;
                margin-left: 20px;
              ">
              任务奖励（多选）*
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">经验值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="experience"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="courage"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">热情值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="enthusiasm"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">友好值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="friendly"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">活力值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="dynamism"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="intelligence"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                text-color="#FA5E00" v-model="explore"></knob-control>
            </div>
          </div>
          <div style="position: relative; height: 15%; width: 100%;top:2%;">
            <span style="margin-right: 10px; margin-left: 20px">任务地点:</span>
            <el-input type="textarea" :rows="4" placeholder="请输入地点(回车符分隔)" v-model="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }" style="
                position: relative;
                width: 80%;
                margin-left: 20px;
                margin-top: 10px;
              ">
            </el-input>
          </div>
        </div>
        <!-- 中间 -->
        <div style="
            position: relative;
            width: 34%;
            height: 100%;
            border-right: 2px solid #fa5e00;
          ">
          <div style="position: relative; height: 36%; width: 100%; top: 1%">
            <div style="
                position: relative;
                height: 10%;
                width: 89%;
                top: 1%;
                margin-left: 20px;
              ">
              任务限制（多选）*
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 88%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 51px; margin-top: 10px">等级</span>
                <knob-control :min="0" :max="50" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="degree"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="courage1"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">热情值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="enthusiasm1"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">友好值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="friendly1"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">活力值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="dynamism1"></knob-control>
              </div>
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  display: flex;
                ">
                <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
                <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                  text-color="#FA5E00" v-model="intelligence1"></knob-control>
              </div>
            </div>
            <div style="
                position: relative;
                height: 22%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                display: flex;
              ">
              <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="rgb(250, 49, 0,0.5)"
                text-color="#FA5E00" v-model="explore1"></knob-control>
            </div>
          </div>
          <div style="position: relative; height: 64%; width: 100%;">
            <div style="
                position: relative;
                height: 8%;
                width: 89%;
                top: 2%;
                margin-left: 20px;
                text-align:center;
              ">
              打卡方式
            </div>
            <hr style="
                width: 100%;
                margin: 0;
                border: none;
                height: 1px;
                background-color: #fa5e00;
                margin-top: 2%;
              " />
            <div style="position: relative; height: 90%; width: 100%; display: flex">
              <div style="
                  position: relative;
                  height: 100%;
                  width: 50%;
                  border-right: 2px solid rgb(250, 49, 0,0.5);
                ">
                <div style="
                position: relative;
                height: 5%;
                width: 100%;
                text-align: center;
                background-color: rgb(250, 49, 0,0.5);
                font-size: 14px;
                color:#ffffff;
            ">
                  拍照
                </div>
                <div style="position: relative; height: 94%; width: 100%;">
                  <span style="margin-right: 10px; margin-left: 20px;font-size:14px;">物品:</span>
                  <div style="position:relative;height:22%;width:100%;border-bottom: 2px solid rgb(250, 49, 0,0.5);overflow-y:auto;">
                    <div class="tag-list">
                      <el-tag v-for="(tag, index) in itemOptions" :key="index"
                        :type="isPhotoSelected(tag) ? 'success' : 'info'" @click="togglePhotoTag(tag)"
                        style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{ tag.label }}</el-tag>
                    </div>
                  </div>
                  <span style="margin-right: 10px; margin-left: 20px;">手势:</span>
                  <div style="position:relative;height:22%;width:100%;border-bottom: 2px solid rgb(250, 49, 0,0.5);overflow-y:auto;">
                    <div class="tag-list">
                      <el-tag v-for="(tag, index) in photoGestureOptions" :key="index"
                        :type="isPhotoSelected(tag) ? 'success' : 'info'" @click="togglePhotoTag(tag)"
                        style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{ tag.label }}</el-tag>
                    </div>
                  </div>
                  <span style="margin-right: 10px; margin-left: 20px;">已选:</span>
                  <div class="selected-tags"
                    style="position:relative;overflow-y:auto;height:30%;width:83%;border: 2px solid rgb(250, 49, 0,0.5);box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);border-radius:8px;">
                    <el-tag v-for="(tag, index) in selectedTags" :key="index" closable @close="removePhotoTag(index)"
                      style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{
              tag.label }}</el-tag>
                  </div>
                </div>
              </div>
              <div style="position: relative; height: 100%; width: 50%">
                <div style="
                position: relative;
                height: 5%;
                width: 100%;
                text-align: center;
                background-color: rgb(250, 49, 0,0.5);
                font-size: 14px;
                color:#ffffff;
            ">
                  摄像头
                </div>
                <div style="position: relative; height: 94%; width: 100%;">
                  <span style="margin-right: 10px; margin-left: 20px;font-size:14px;">人脸识别:</span>
                  <div style="position:relative;height:22%;width:100%;border-bottom: 2px solid rgb(250, 49, 0,0.5);overflow-y:auto;">
                    <div class="tag-list">
                      <el-tag v-for="(tag, index) in faceOptions" :key="index"
                        :type="isVideoSelected(tag) ? 'success' : 'info'" @click="toggleVideoTag(tag)"
                        style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{ tag.label }}</el-tag>
                    </div>
                  </div>
                  <span style="margin-right: 10px; margin-left: 20px;">手势:</span>
                  <div style="position:relative;height:22%;width:100%;border-bottom: 2px solid rgb(250, 49, 0,0.5);overflow-y:auto;">
                    <div class="tag-list">
                      <el-tag v-for="(tag, index) in videoGestureOptions" :key="index"
                        :type="isVideoSelected(tag) ? 'success' : 'info'" @click="toggleVideoTag(tag)"
                        style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{ tag.label }}</el-tag>
                    </div>
                  </div>
                  <span style="margin-right: 10px; margin-left: 20px;">已选:</span>
                  <div class="selected-tags"
                    style="position:relative;overflow-y:auto;height:30%;width:83%;border: 2px solid rgb(250, 49, 0,0.5); box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);border-radius:8px;">
                    <el-tag v-for="(tag, index) in videoSelectedTags" :key="index" closable @close="removeVideoTag(index)"
                      style="margin-right:10px;margin-bottom:5px;font-size:10px;">{{
              tag.label }}</el-tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div style="position: relative; width: 33%; height: 100%">
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 20px; margin-left: 20px">任务图标*:</span>
            <el-button type="success" icon="el-icon-upload2" style="
                background-color: #fa5e00;
                border: none;
                position: relative;
                height: 70%;
                border-radius: 10px;
              ">上传图片</el-button>
            <span style="
                margin-right: 20px;
                margin-left: 20px;
                font-size: 12px;
                color: #808080;
              ">图片命名格式为：任务名称.jpg</span>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 20px; margin-left: 20px">开始时间*:</span>
            <el-date-picker v-model="startTime" type="date" placeholder="选择日期"
              style="position: relative; height: 40px !important; width: 58%">
            </el-date-picker>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 20px; margin-left: 20px">结束时间*:</span>
            <el-date-picker v-model="endTime" type="date" placeholder="选择日期"
              style="position: relative; height: 40px !important; width: 58%">
            </el-date-picker>
          </div>
          <div style="position: relative; height: 8%; width: 100%; top: 1%">
            <span style="margin-right: 20px; margin-left: 20px">任务形式*:</span>
            <el-radio v-model="radio" label="引导型">引导型</el-radio>
            <el-radio v-model="radio" label="交互型">交互型</el-radio>
          </div>
          <div style="position: relative; height: 8%; width: 85%; top: 1%">
            <span style="margin-right: 22px; margin-left: 20px">NPC形象:</span>
            <el-select v-model="image" placeholder="请选择" style="position: relative; height: 40px !important; width: 70%">
              <el-option v-for="item in imageOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="position: relative; height: 45%; width: 100%; top: 1%;">
            <span style="margin-right: 10px; margin-left: 20px">NPC文本:</span>
            <el-input type="textarea" :rows="15" placeholder="不超过800字" v-model="chatArea" maxlength="800" show-word-limit
              :autosize="{ minRows: 10, maxRows: 15 }" style="
                position: relative;
                width: 80%;
                margin-left: 20px;
                margin-top: 10px;
              ">
            </el-input>
          </div>
          <div style="position: relative; height: 10%; width: 100%; top: 1%;">
            <span style="margin-right: 20px; margin-left: 20px">视频播放:</span>
            <el-input v-model="video" placeholder="请输入视频播放链接" style="position: relative; height: 40px !important; width: 60%"></el-input>
          </div>
        </div>
      </div>
      <!-- 操作按钮 -->
      <div style="
          position: relative;
          height: 8%;
          width: 90%;
          left: 5%;
        ">
        <el-button type="danger" style="
            position: relative;
            background-color: #FA5E00;
            height: 35px;
            width: 80px;
            border-radius: 5px;
            top: 10%;
            left: 87%;
            border: none;
          ">提交
        </el-button>
        <el-button type="danger" style="
            position: relative;
            background-color: #A6A6A6;
            height: 35px;
            width: 80px;
            border-radius: 5px;
            top: 10%;
            left: 87%;
            border: none;
          " @click="goBack">返回
        </el-button>
      </div>
    </div>
  </template>
  
  <style>
  @import "../../../public/static/css/aside.css";
  
  .tag-list {
    margin-bottom: 5px;
    position: relative;
    margin-left: 20px;
    margin-top: 5px;
  }
  
  .selected-tags {
    margin-bottom: 5px;
    position: relative;
    margin-left: 20px;
    margin-top: 5px;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        selectedTags: [],
        videoSelectedTags:[],
        itemOptions: [
          { label: '通知书', value: '通知书' },
          { label: '身份证', value: '身份证' },
          { label: '四级证书', value: '四级证书' },
          { label: '六级证书', value: '六级证书' },
          { label: '计算机二级', value: '计算机二级' },
          { label: '二号教学楼', value: '二号教学楼' },
        ],
        photoGestureOptions: [
          { label: 'OK', value: 'OK' },
          { label: '数字1', value: '数字1' },
          { label: '数字4', value: '数字4' },
          { label: '数字5', value: '数字5' },
        ],
        videoGestureOptions: [
          { label: 'OK', value: 'OK' },
          { label: '数字1', value: '数字1' },
          { label: '数字4', value: '数字4' },
          { label: '数字5', value: '数字5' },
        ],
        faceOptions:[
          { label: '人脸识别', value: '识别' },
        ],
        name: "",
        describe: "",
        typeValue: "",
        beforeTask: "",
        beforeMain: "",
        grade: "",
        experience: "",
        courage: "",
        enthusiasm: "",
        friendly: "",
        explore: "",
        dynamism: "",
        intelligence: "",
        degree: "",
        courage1: "",
        enthusiasm1: "",
        friendly1: "",
        explore1: "",
        dynamism1: "",
        intelligence1: "",
        textarea: "",
        startTime: "",
        endTime: "",
        radio: "",
        image: "",
        chatArea: "",
        underGraduate:"",
        Graduate:"",
        TypeOptions: [
          {
            value: "主线",
            label: "主线",
          },
          {
            value: "支线",
            label: "支线",
          },
          {
            value: "学习",
            label: "学习",
          },
          {
            value: "交友",
            label: "交友",
          },
          {
            value: "悬赏",
            label: "悬赏",
          },
          {
            value: "探索",
            label: "探索",
          },
          {
            value: "签到",
            label: "签到",
          },
        ],
        taskOptions: [
          {
            value: "无",
            label: "无",
          },
          {
            value: "1-新生倒计时",
            label: "1-新生倒计时",
          },
          {
            value: "2-新生报到",
            label: "2-新生报到",
          },
        ],
        mainOptions: [
          {
            value: "无",
            label: "无",
          },
          {
            value: "1-新生倒计时",
            label: "1-新生倒计时",
          },
          {
            value: "2-新生报到",
            label: "2-新生报到",
          },
        ],
        gradeOptions: [
          {
            value: "校级",
            label: "校级",
          },
          {
            value: "院级",
            label: "院级",
          },
        ],
        imageOptions: [
          {
            value: "吉祥物",
            label: "吉祥物",
          },
          {
            value: "游戏人物",
            label: "游戏人物",
          },
        ],
      };
    },
    methods: {
      goBack() {
        this.$router.push("/mainMenu/task/config");
      },
      togglePhotoTag(tag) {
        if (this.isPhotoSelected(tag)) {
          this.selectedTags = this.selectedTags.filter(t => t.value !== tag.value);
        } else {
          this.selectedTags.push(tag);
        }
      },
      isPhotoSelected(tag) {
        return this.selectedTags.some(t => t.value === tag.value);
      },
      removePhotoTag(index) {
        this.selectedTags.splice(index, 1);
      },
      toggleVideoTag(tag) {
        if (this.isVideoSelected(tag)) {
          this.videoSelectedTags = this.videoSelectedTags.filter(t => t.value !== tag.value);
        } else {
          this.videoSelectedTags.push(tag);
        }
      },
      isVideoSelected(tag) {
        return this.videoSelectedTags.some(t => t.value === tag.value);
      },
      removeVideoPhotoTag(index) {
        this.videoSelectedTags.splice(index, 1);
      },
    },
  };
  </script>