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
          <el-input v-model="describe" placeholder="请输入" style="position: relative; height: 40px !important; width: 70%">
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
        <div style="position: relative; height: 42%; width: 100%; top: 1%">
          <div style="
              position: relative;
              height: 8%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
            ">
            任务奖励（多选）*
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="experience"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="courage"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="enthusiasm"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">友好值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="friendly"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="dynamism"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="intelligence"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
              display: flex;
            ">
            <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
            <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
              text-color="#FA5E00" v-model="explore"></knob-control>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div style="
          position: relative;
          width: 34%;
          height: 100%;
          border-right: 2px solid #fa5e00;
        ">
        <div style="position: relative; height: 42%; width: 100%; top: 1%">
          <div style="
              position: relative;
              height: 8%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
            ">
            任务限制（多选）*
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="50" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="degree"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">勇气值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="courage1"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="enthusiasm1"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">友好值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="friendly1"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
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
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="dynamism1"></knob-control>
            </div>
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                display: flex;
              ">
              <span style="margin-right: 36px; margin-top: 10px">智慧值</span>
              <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
                text-color="#FA5E00" v-model="intelligence1"></knob-control>
            </div>
          </div>
          <div style="
              position: relative;
              height: 20%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
              display: flex;
            ">
            <span style="margin-right: 20px; margin-top: 10px">探索精神</span>
            <knob-control :min="0" :max="20" :size="40" primary-color="#FA5E00" secondary-color="#FFDA9F"
              text-color="#FA5E00" v-model="explore1"></knob-control>
          </div>
        </div>
        <div style="position: relative; height: 15%; width: 100%">
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
        <div style="position: relative; height: 43%; width: 100%">
          <div style="
              position: relative;
              height: 8%;
              width: 89%;
              top: 1%;
              margin-left: 20px;
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
          <div style="position: relative; height: 89%; width: 100%; display: flex">
            <div style="
                position: relative;
                height: 100%;
                width: 50%;
                border-right: 2px solid #fa5e00;
              ">
              <div style="
                  position: relative;
                  height: 8%;
                  width: 89%;
                  top: 1%;
                  margin-left: 20px;
                  text-align: center;
                ">
                拍照
              </div>
              <div style="position: relative; height: 92%; width: 100%"></div>
            </div>
            <div style="position: relative; height: 100%; width: 50%">
              <div style="
                  position: relative;
                  height: 8%;
                  width: 89%;
                  top: 1%;
                  margin-left: 20px;
                  text-align: center;
                ">
                摄像头
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
        <div style="position: relative; height: 56%; width: 100%; top: 1%">
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
          radius: 5px;
          top: 10%;
          left: 78%;
          border: none;
        ">提交
      </el-button>
      <el-button type="danger" style="
          position: relative;
          background-color: #f89300;
          height: 35px;
          width: 95px;
          radius: 5px;
          top: 10%;
          left: 78%;
          border: none;
        ">存为草稿
      </el-button>
      <el-button type="danger" style="
          position: relative;
          background-color: #A6A6A6;
          height: 35px;
          width: 80px;
          radius: 5px;
          top: 10%;
          left: 78%;
          border: none;
        "
        @click="goBack"
        >返回
      </el-button>
    </div>
  </div>
</template>
  
<style>
@import "../../../public/static/css/aside.css";
</style>
  
<script>
export default {
  data() {
    return {
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
  methods:{
    goBack(){
      this.$router.push("/mainMenu/task/config");
    },
  },
};
</script>