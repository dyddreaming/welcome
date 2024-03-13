<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4">
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
        任务发布
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
            :to="{ path: '/mainMenu/task/config' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >任务发布列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >任务发布</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <!-- 任务设置 -->
    <div
      style="
        position: relative;
        height: 80%;
        width: 96%;
        left: 2%;
        background-color: #ffffff;
        display: flex;
        border-radius: 8px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        color: #747474;
        border: 2px solid #209e91;
      "
    >
      <!-- 左侧 -->
      <div
        style="
          position: relative;
          width: 33%;
          height: 100%;
          border-right: 2px solid #209e91;
        "
      >
        <div style="position: relative; height: 8%; width: 100%; top: 1%">
          <span style="margin-right: 10px; margin-left: 20px">任务名称*:</span>
          <el-input
            v-model="name"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 70%"
          >
          </el-input>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 1%">
          <span style="margin-right: 10px; margin-left: 20px">任务描述*:</span>
          <el-input
            v-model="describe"
            placeholder="请输入"
            style="position: relative; height: 40px !important; width: 70%"
          >
          </el-input>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 1%">
          <span style="margin-right: 10px; margin-left: 20px">任务对象*:</span>
          <el-select
            v-model="targetGrade"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 1%">
          <span style="margin-right: 10px; margin-left: 20px">任务类型*:</span>
          <el-select
            v-model="typeValue"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in TypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div
          style="position: relative; height: 8%; width: 100%; top: 1%"
          v-if="typeValue === '主线'"
        >
          <span style="margin-right: 10px; margin-left: 20px">前置任务*:</span>
          <el-select
            v-model="beforeTask"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in taskOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 1%">
          <span style="margin-right: 10px; margin-left: 20px">任务级别*:</span>
          <el-select
            v-model="grade"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in gradeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div
          style="position: relative; height: 8%; width: 100%; top: 1%"
          v-if="grade === '院级'"
        >
          <span style="margin-right: 10px; margin-left: 20px">任务学院*:</span>
          <el-select
            v-model="targetCollege"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in collegeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 2%">
          <span style="margin-right: 10px; margin-left: 20px">任务形式*:</span>
          <el-select
            v-model="contactType"
            placeholder="请选择"
            style="position: relative; height: 40px !important; width: 70%"
          >
            <el-option
              v-for="item in contactOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div style="position: relative; height: 30%; width: 100%; top: 2%">
          <div
            style="
              position: relative;
              height: 10%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
            "
          >
            任务奖励（多选）*
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 89%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">经验值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="experience"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="courage"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">热情值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="enthusiasm"
              ></knob-control>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 89%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">友好值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="friendly"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">活力值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="dynamism"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="intelligence"
              ></knob-control>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 89%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
            <knob-control
              :min="0"
              :max="20"
              :size="40"
              primary-color="#62bbb2"
              secondary-color="rgb(28, 43, 54,0.5)"
              text-color="#62bbb2"
              v-model="explore"
            ></knob-control>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div
        style="
          position: relative;
          width: 34%;
          height: 100%;
          border-right: 2px solid #209e91;
        "
      >
        <div style="position: relative; height: 30%; width: 100%; top: 1%">
          <div
            style="
              position: relative;
              height: 10%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
            "
          >
            任务限制（多选）*
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 88%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 51px; margin-top: 10px">等级</span>
              <knob-control
                :min="0"
                :max="50"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="degree"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="courage1"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">热情值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="enthusiasm1"
              ></knob-control>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 89%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">友好值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="friendly1"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">活力值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="dynamism1"
              ></knob-control>
            </div>
            <div
              style="
                position: relative;
                height: 100%;
                width: 33%;
                display: flex;
              "
            >
              <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
              <knob-control
                :min="0"
                :max="20"
                :size="40"
                primary-color="#62bbb2"
                secondary-color="rgb(28, 43, 54,0.5)"
                text-color="#62bbb2"
                v-model="intelligence1"
              ></knob-control>
            </div>
          </div>
          <div
            style="
              position: relative;
              height: 30%;
              width: 89%;
              top: 2%;
              margin-left: 20px;
              display: flex;
            "
          >
            <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
            <knob-control
              :min="0"
              :max="20"
              :size="40"
              primary-color="#62bbb2"
              secondary-color="rgb(28, 43, 54,0.5)"
              text-color="#62bbb2"
              v-model="explore1"
            ></knob-control>
          </div>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 2%">
          <span style="margin-right: 20px; margin-left: 20px">任务图标*:</span>
          <el-button
            icon="el-icon-upload2"
            type="primary"
            style="
              background-color: #209e91;
              border-color: #209e91;
              color: #ffffff;
            "
            @click="handleImageClick"
            size="mini"
            ><input
              type="file"
              ref="imageFileInput"
              style="display: none"
              accept=".jpg, .png"
              @change="handleImageUpload"
            />上传图片</el-button
          >

          <span
            style="
              margin-right: 20px;
              margin-left: 20px;
              font-size: 12px;
              color: #808080;
            "
            >图片命名格式为：任务名称.jpg</span
          >
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 2%">
          <span style="margin-right: 20px; margin-left: 20px">开始时间*:</span>
          <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="选择日期"
            style="position: relative; height: 40px !important; width: 58%"
          >
          </el-date-picker>
        </div>
        <div style="position: relative; height: 8%; width: 100%; top: 4%">
          <span style="margin-right: 20px; margin-left: 20px">结束时间*:</span>
          <el-date-picker
            v-model="endTime"
            type="date"
            placeholder="选择日期"
            style="position: relative; height: 40px !important; width: 58%"
          >
          </el-date-picker>
        </div>
      </div>
      <!-- 右侧 -->
      <div style="position: relative; width: 33%; height: 100%">
        <div style="position: relative; height: 50%; width: 100%">
          <div style="position: relative; height: 99%; width: 100%">
            <!-- 任务类型1 -->
            <div
              style="position: relative; height: 100%; width: 100%"
              v-if="contactType === 1"
            >
              <div style="position: relative; height: 8%; width: 85%; top: 5%">
                <span style="margin-right: 22px; margin-left: 20px"
                  >NPC形象:</span
                >
                <el-select
                  v-model="image"
                  placeholder="请选择"
                  style="
                    position: relative;
                    height: 40px !important;
                    width: 70%;
                  "
                >
                  <el-option
                    v-for="item in imageOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div
                style="
                  position: relative;
                  height: 40%;
                  width: 85%;
                  top: 15%;
                  display: flex;
                  align-items: center;
                "
              >
                <span style="margin-right: 22px; margin-left: 20px"
                  >NPC文本:</span
                >
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="不超过800字"
                  v-model="chatArea"
                  maxlength="800"
                  show-word-limit
                  style="width: 70%"
                >
                </el-input>
              </div>
            </div>
            <!-- 任务类型2 -->
            <div
              style="
                position: relative;
                height: 100%;
                width: 100%;
                border-right: 2px solid #209e91;
                border-bottom: 2px solid #209e91;
              "
              v-if="contactType === 2"
            >
              <div
                style="
                  position: relative;
                  height: 7%;
                  width: 100%;
                  text-align: center;
                  background-color: #209e91;
                  font-size: 14px;
                  color: #ffffff;
                "
              >
                拍照
              </div>
              <div style="position: relative; height: 94%; width: 100%">
                <span
                  style="margin-right: 10px; margin-left: 20px; font-size: 14px"
                  >物品:</span
                >
                <div
                  style="
                    position: relative;
                    height: 19%;
                    width: 100%;
                    border-bottom: 2px solid #209e91;
                    overflow-y: auto;
                  "
                >
                  <div class="tag-list">
                    <el-tag
                      v-for="(tag, index) in itemOptions"
                      :key="index"
                      :type="isPhotoSelected(tag) ? 'success' : 'info'"
                      @click="togglePhotoTag(tag)"
                      style="
                        margin-right: 10px;
                        margin-bottom: 5px;
                        font-size: 10px;
                      "
                      >{{ tag.label }}</el-tag
                    >
                  </div>
                </div>
                <span style="margin-right: 10px; margin-left: 20px">手势:</span>
                <div
                  style="
                    position: relative;
                    height: 19%;
                    width: 100%;
                    border-bottom: 2px solid #209e91;
                    overflow-y: auto;
                  "
                >
                  <div class="tag-list">
                    <el-tag
                      v-for="(tag, index) in photoGestureOptions"
                      :key="index"
                      :type="isPhotoSelected(tag) ? 'success' : 'info'"
                      @click="togglePhotoTag(tag)"
                      style="
                        margin-right: 10px;
                        margin-bottom: 5px;
                        font-size: 10px;
                      "
                      >{{ tag.label }}</el-tag
                    >
                  </div>
                </div>
                <span style="margin-right: 10px; margin-left: 20px">已选:</span>
                <div
                  class="selected-tags"
                  style="
                    position: relative;
                    overflow-y: auto;
                    height: 30%;
                    width: 83%;
                    border: 2px solid #209e91;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                  "
                >
                  <el-tag
                    v-for="(tag, index) in selectedTags"
                    :key="index"
                    closable
                    @close="removePhotoTag(index)"
                    style="
                      margin-right: 10px;
                      margin-bottom: 5px;
                      font-size: 10px;
                    "
                    >{{ tag.label }}</el-tag
                  >
                </div>
              </div>
            </div>
            <!-- 任务类型3 -->
            <div
              style="
                position: relative;
                height: 100%;
                width: 100%;
                border-bottom: 2px solid #209e91;
                border-right: 2px solid #209e91;
              "
              v-if="contactType === 4"
            >
              <div
                style="
                  position: relative;
                  height: 7%;
                  width: 100%;
                  text-align: center;
                  background-color: #209e91;
                  font-size: 14px;
                  color: #ffffff;
                "
              >
                摄像头
              </div>
              <div style="position: relative; height: 94%; width: 100%">
                <span
                  style="margin-right: 10px; margin-left: 20px; font-size: 14px"
                  >人脸识别:</span
                >
                <div
                  style="
                    position: relative;
                    height: 19%;
                    width: 100%;
                    border-bottom: 2px solid #209e91;
                    overflow-y: auto;
                  "
                >
                  <div class="tag-list">
                    <el-tag
                      v-for="(tag, index) in faceOptions"
                      :key="index"
                      :type="isVideoSelected(tag) ? 'success' : 'info'"
                      @click="toggleVideoTag(tag)"
                      style="
                        margin-right: 10px;
                        margin-bottom: 5px;
                        font-size: 10px;
                      "
                      >{{ tag.label }}</el-tag
                    >
                  </div>
                </div>
                <span style="margin-right: 10px; margin-left: 20px">手势:</span>
                <div
                  style="
                    position: relative;
                    height: 19%;
                    width: 100%;
                    border-bottom: 2px solid #209e91;
                    overflow-y: auto;
                  "
                >
                  <div class="tag-list">
                    <el-tag
                      v-for="(tag, index) in videoGestureOptions"
                      :key="index"
                      :type="isVideoSelected(tag) ? 'success' : 'info'"
                      @click="toggleVideoTag(tag)"
                      style="
                        margin-right: 10px;
                        margin-bottom: 5px;
                        font-size: 10px;
                      "
                      >{{ tag.label }}</el-tag
                    >
                  </div>
                </div>
                <span style="margin-right: 10px; margin-left: 20px">已选:</span>
                <div
                  class="selected-tags"
                  style="
                    position: relative;
                    overflow-y: auto;
                    height: 30%;
                    width: 83%;
                    border: 2px solid #209e91;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                  "
                >
                  <el-tag
                    v-for="(tag, index) in videoSelectedTags"
                    :key="index"
                    closable
                    @close="removeVideoTag(index)"
                    style="
                      margin-right: 10px;
                      margin-bottom: 5px;
                      font-size: 10px;
                    "
                    >{{ tag.label }}</el-tag
                  >
                </div>
              </div>
            </div>
            <!-- 任务类型4 -->
            <div
              style="
                position: relative;
                height: 10%;
                width: 100%;
                top: 5%;
                display: flex;
                align-items: center;
              "
              v-if="contactType === 0"
            >
              <span style="margin-right: 20px; margin-left: 20px"
                >视频播放:</span
              >
              <el-input
                v-model="videoPlay"
                placeholder="请输入视频播放链接"
                style="position: relative; height: 40px !important; width: 60%"
              ></el-input>
            </div>
            <!-- 任务类型5 -->
            <div
              style="position: relative; height: 12%; width: 100%; top: 5%"
              v-if="contactType === 3"
            >
              <span style="margin-right: 10px; margin-left: 20px"
                >任务地点:</span
              >
              <el-input
                type="textarea"
                :rows="1"
                placeholder="请输入地点(回车符分隔)"
                v-model="textarea"
                :autosize="{ minRows: 1, maxRows: 1 }"
                style="
                  position: relative;
                  width: 80%;
                  margin-left: 20px;
                  margin-top: 10px;
                "
              >
              </el-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 操作按钮 -->
    <div
      style="
        position: relative;
        height: 8%;
        width: 96%;
        top: 1%;
        left: 2%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      "
    >
      <el-button
        type="primary"
        style="background-color: #e85656; border: #e85656"
        size="small"
        @click="admit"
        >提交</el-button
      >
      <el-button
        type="primary"
        style="background-color: #dfb81c; border: #dfb81c"
        size="small"
        >存为草稿</el-button
      >
      <el-button
        type="primary"
        style="background-color: #209e91; border: #209e91"
        size="small"
        @click="goBack"
        >返回</el-button
      >
    </div>
  </div>
</template>

<style scoped>
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

#pre-link /deep/ .el-breadcrumb__inner:hover {
  font-weight: 600 !important;
  color: #209e91;
}

#pre-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #209e91;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedTags: [],
      videoSelectedTags: [],
      itemOptions: [
        { label: "通知书", value: "通知书" },
        { label: "身份证", value: "身份证" },
        { label: "四级证书", value: "四级证书" },
        { label: "六级证书", value: "六级证书" },
        { label: "计算机二级", value: "计算机二级" },
        { label: "二号教学楼", value: "二号教学楼" },
      ],
      photoGestureOptions: [
        { label: "OK", value: "OK" },
        { label: "数字1", value: "数字1" },
        { label: "数字4", value: "数字4" },
        { label: "数字5", value: "数字5" },
      ],
      videoGestureOptions: [
        { label: "OK", value: "OK" },
        { label: "数字1", value: "数字1" },
        { label: "数字4", value: "数字4" },
        { label: "数字5", value: "数字5" },
      ],
      faceOptions: [{ label: "人脸识别", value: "人脸识别" }],
      name: "",
      describe: "",
      typeValue: "",
      beforeTask: "",
      targetGrade: "",
      grade: "",
      targetCollege: "",
      experience: "",
      courage: "",
      enthusiasm: "",
      friendly: "",
      explore: "",
      dynamism: "",
      intelligence: "",
      degree: "",
      contactType: "",
      courage1: "",
      enthusiasm1: "",
      friendly1: "",
      explore1: "",
      dynamism1: "",
      intelligence1: "",
      textarea: "",
      startTime: "",
      endTime: "",
      image: "",
      chatArea: "",
      underGraduate: "",
      Graduate: "",
      videoPlay:"",
      TypeOptions: [
        {
          value: "主线",
          label: "主线",
        },
        {
          value: "支线",
          label: "支线",
        },
        // {
        //   value: "学习",
        //   label: "学习",
        // },
        // {
        //   value: "交友",
        //   label: "交友",
        // },
        // {
        //   value: "悬赏",
        //   label: "悬赏",
        // },
        // {
        //   value: "探索",
        //   label: "探索",
        // },
        // {
        //   value: "签到",
        //   label: "签到",
        // },
      ],
      taskOptions: [
        // {
        //   value: 0,
        //   label: "无",
        // },
        // {
        //   value: 1,
        //   label: "1-新生倒计时",
        // },
        // {
        //   value: 2,
        //   label: "2-新生报到",
        // },
      ],
      statusOptions: [
        { value: 0, label: "本科生" },
        { value: 1, label: "研究生" },
        { value: 2, label: "全体" },
      ],
      // mainOptions: [
      //   {
      //     value: "无",
      //     label: "无",
      //   },
      //   {
      //     value: "1-新生倒计时",
      //     label: "1-新生倒计时",
      //   },
      //   {
      //     value: "2-新生报到",
      //     label: "2-新生报到",
      //   },
      // ],
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
      collegeOptions: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "建筑学院",
          label: "建筑学院",
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
      contactOptions: [
        {
          value: 0,
          label: "视频观看",
        },
        {
          value: 1,
          label: "NPC对话",
        },
        {
          value: 2,
          label: "拍照打卡",
        },
        {
          value: 3,
          label: "导航引导",
        },
        {
          value: 4,
          label: "摄像头打卡",
        },
      ],
    };
  },
  mounted() {
    this.getTotalMainTask();
  },
  methods: {
    goBack() {
      this.$router.push("/mainMenu/task/config");
    },
    togglePhotoTag(tag) {
      if (this.isPhotoSelected(tag)) {
        this.selectedTags = this.selectedTags.filter(
          (t) => t.value !== tag.value
        );
      } else {
        this.selectedTags.push(tag);
      }
    },
    isPhotoSelected(tag) {
      return this.selectedTags.some((t) => t.value === tag.value);
    },
    removePhotoTag(index) {
      this.selectedTags.splice(index, 1);
    },
    toggleVideoTag(tag) {
      if (this.isVideoSelected(tag)) {
        this.videoSelectedTags = this.videoSelectedTags.filter(
          (t) => t.value !== tag.value
        );
      } else {
        this.videoSelectedTags.push(tag);
      }
    },
    isVideoSelected(tag) {
      return this.videoSelectedTags.some((t) => t.value === tag.value);
    },
    removeVideoPhotoTag(index) {
      this.videoSelectedTags.splice(index, 1);
    },
    // 提交任务
    admit() {
      // console.log(this.selectedTags);
      let totalDetails = this.makeReward();
      let totalText = this.makeText();
      let  name = this.name;
      let  msg = this.describe;
      let  target = this.targetGrade;
      let  category = this.typeValue == "主线" ? 0 : 1;
      let  preTask = this.beforeTask;
      let  level = this.grade == "校级" ? 0 : 1;
      let  img = "任务1.jpg";
      let  releaseTime = this.convertTime(this.startTime);
      let  endTime = this.convertTime(this.endTime);
      let  mode = this.contactType;
      let  text = totalText;
      let  status = 1;
      let  details = totalDetails;
      // console.log(admitData);
      axios
        .post(`${this.$store.getters.getIp}/tasks`, {
          name,
          msg,
          target,
          category,
          preTask,
          level,
          img,
          releaseTime,
          endTime,
          mode,
          text,
          status,
          details,
        })
        .then((response) => {
          if (response.data.code) {
            console.log("提交成功:", response.data);
            this.$message.success("提交成功");
          } else {
            const errorMessage = response.data.msg;
            this.$message.error(errorMessage);
          }
        })
        .catch((error) => {
          console.error("提交失败:", error);
        });
    },
    // 转换时间格式
    convertTime(originalDate) {
      if (originalDate) {
        // 转换为所需格式的字符串
        const year = originalDate.getFullYear();
        const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
        const day = originalDate.getDate().toString().padStart(2, "0");
        const hours = originalDate.getHours().toString().padStart(2, "0");
        const minutes = originalDate.getMinutes().toString().padStart(2, "0");
        const seconds = originalDate.getSeconds().toString().padStart(2, "0");

        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        return formattedDate;
      }
      else{
        return;
      }
    },
    // 获取奖励和限制条件
    makeReward() {
      let rewardDetails = [];
      if (this.experience) {
        rewardDetails.push({
          name: "经验值",
          num: this.experience,
          category: 0,
        });
      }
      if (this.courage) {
        rewardDetails.push({ name: "勇气值", num: this.courage, category: 0 });
      }

      if (this.enthusiasm) {
        rewardDetails.push({
          name: "热情值",
          num: this.enthusiasm,
          category: 0,
        });
      }

      if (this.friendly) {
        rewardDetails.push({ name: "友好值", num: this.friendly, category: 0 });
      }

      if (this.explore) {
        rewardDetails.push({
          name: "探索精神",
          num: this.explore,
          category: 0,
        });
      }

      if (this.dynamism) {
        rewardDetails.push({ name: "活力值", num: this.dynamism, category: 0 });
      }

      if (this.intelligence) {
        rewardDetails.push({
          name: "智慧值",
          num: this.intelligence,
          category: 0,
        });
      }

      if (this.degree) {
        rewardDetails.push({
          name: "等级",
          num: this.degree,
          category: 1,
        });
      }
      if (this.courage1) {
        rewardDetails.push({ name: "勇气值", num: this.courage1, category: 1 });
      }

      if (this.enthusiasm1) {
        rewardDetails.push({
          name: "热情值",
          num: this.enthusiasm1,
          category: 1,
        });
      }

      if (this.friendly1) {
        rewardDetails.push({
          name: "友好值",
          num: this.friendly1,
          category: 1,
        });
      }

      if (this.explore1) {
        rewardDetails.push({
          name: "探索精神",
          num: this.explore1,
          category: 1,
        });
      }

      if (this.dynamism1) {
        rewardDetails.push({
          name: "活力值",
          num: this.dynamism1,
          category: 1,
        });
      }

      if (this.intelligence1) {
        rewardDetails.push({
          name: "智慧值",
          num: this.intelligence1,
          category: 1,
        });
      }
      return rewardDetails;
    },
    // 获取所有主线任务
    getTotalMainTask() {
      axios
        .get(`${this.$store.getters.getIp}/tasks/principal/list`)
        .then((response) => {
          let totalData = response.data.data;
          this.taskOptions = totalData.map((item) => {
            return {
              value: item.id,
              label: `${item.id}-${item.name}`,
            };
          });
        })
        .catch((error) => {
          console.error("获取数据时出错：", error);
        });
    },
    // 获取任务图标
    handleImageClick() {
      this.$refs.imageFileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      console.log("上传的图片:", file);
    },
    // 获取任务内容
    makeText(){
      if(this.contactType == 0)
      {
        return this.videoPlay;
      }
      else if(this.contactType == 1)
      {
        return this.chatArea;
      }
      else if(this.contactType == 2)
      {
        return this.selectedTags[0].value;
      }
      else if(this.contactType == 3)
      {
        return this.textarea;
      }
      else{
        return this.videoSelectedTags[0].value;
      }
    }
  },
};
</script>