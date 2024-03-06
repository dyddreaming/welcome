<template>
  <div class="app-main" style="position: relative">
    <!-- 左侧区域 -->
    <div class="left-area" style="position: absolute; left: 1%; bottom: 0; width: 48%; height: 100%">
      <div class="rounded-rectangle" style="
          position: relative;
          width: 90%;
          height: 40px;
          background-color: #fa5e00;
          border-radius: 15px;
          left: 5%;
          top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
        <p style="font-size: 20px; color: #ffffff">批量导入</p>
      </div>
      <!-- 文字信息导入 -->
      <p style="
          position: relative;
          font-size: 18px;
          margin-left: 10px;
          left: 5%;
          top: 70px;
        ">
        文字信息导入
      </p>
      <div style="
          position: relative;
          width: 90%;
          height: 160px;
          background-color: rgba(128, 128, 128, 0.2);
          border-radius: 5px;
          left: 5%;
          top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        ">
        <img src="../../public/static/img/file.png" alt="Image" style="
            display: block;
            margin: 0 auto;
            max-width: 100%;
            max-height: 100%;
          " @click="handleTextClick" />
        <p style="font-size: 14px; margin: 0">点击即可上传</p>
        <p style="font-size: 14px; margin: 0">格式为：xlsx、xls</p>
      </div>
      <input type="file" ref="textFileInput" style="display: none" accept=".xlsx, .xls" @change="handleTextUpload" />
      <!-- 示例文件 -->
      <p style="
          position: relative;
          font-size: 12px;
          left: 5%;
          top: 7%;
          color: #808080;
          text-align: center;
        ">
        提示：文件填写严格参照示例（
        <span style="color: #808080; cursor: pointer">示例文件</span>
        <span style="margin-right: 8px"></span>
        <button @click="downloadFile" style="
            background-color: #fa5e00;
            color: #ffffff;
            border: none;
            padding: 2px 6px;
            cursor: pointer;
            font-size: 10px;
          ">
          下载
        </button>
        ）
      </p>
      <!-- 进度条 -->
      <el-progress :percentage="textUploadProgress" style="position: relative; left: 5%; top: 5%; width: 95%"
        :color="'#FA5E00'"></el-progress>
      <!-- 上传成功提醒 -->
      <div v-if="showTextSuccess" class="success-message" style="
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          left: 5%;
          top: 6%;
          width: 90%;
        ">
        <div style="text-align: center">
          <el-button type="success" icon="el-icon-check" circle
            style="background-color: #fa5e00; border: none"></el-button>
          <p style="font-size: 18px; margin: 0">导入成功</p>
        </div>
      </div>
      <!-- 图片信息导入 -->
      <p style="
          position: relative;
          font-size: 18px;
          margin-left: 10px;
          left: 5%;
          top: 40px;
        ">
        图片信息导入
      </p>
      <div style="
          position: relative;
          width: 90%;
          height: 160px;
          background-color: rgba(128, 128, 128, 0.2);
          border-radius: 5px;
          left: 5%;
          top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        ">
        <img src="../../public/static/img/file.png" alt="Image" style="
            display: block;
            margin: 0 auto;
            max-width: 100%;
            max-height: 100%;
            cursor: pointer;
          " @click="handleImageClick" />
        <input type="file" ref="imageFileInput" style="display: none" accept=".zip" @change="handleImageUpload" />
        <p style="font-size: 14px; margin: 0">点击即可导入</p>
        <p style="font-size: 14px; margin: 0">格式为：zip</p>
      </div>
      <!-- 示例文件 -->
      <p style="
          position: relative;
          font-size: 12px;
          left: 5%;
          top: 3%;
          color: #808080;
          text-align: center;
        ">
        提示：文件结构严格参照示例（
        <span style="color: #808080; cursor: pointer">示例文件</span>
        <span style="margin-right: 8px"></span>
        <button @click="downloadZipFile" style="
            background-color: #fa5e00;
            color: #ffffff;
            border: none;
            padding: 2px 6px;
            cursor: pointer;
            font-size: 10px;
          ">
          下载
        </button>
        ）
      </p>
      <!-- 进度条 -->
      <el-progress :percentage="imageUploadProgress" style="position: relative; left: 5%; top: 1%; width: 95%"
        :color="'#FA5E00'"></el-progress>
      <div v-if="showImageSuccess" class="success-message" style="
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          left: 5%;
          top: 2%;
          width: 90%;
        ">
        <div style="text-align: center">
          <el-button type="success" icon="el-icon-check" circle
            style="background-color: #fa5e00; border: none"></el-button>
          <p style="font-size: 18px; margin: 0">导入成功</p>
        </div>
      </div>
    </div>

    <!-- 分隔竖线 -->
    <div style="
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 100%;
        border-left: 2px solid #ffffff;
      "></div>

    <!-- 右侧区域 -->
    <div class="left-area" style="position: absolute; left: 51%; bottom: 0; width: 48%; height: 100%">
      <div class="rounded-rectangle" style="
          position: relative;
          width: 90%;
          height: 40px;
          background-color: #fa5e00;
          border-radius: 15px;
          left: 5%;
          top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
        <p style="font-size: 20px; color: #ffffff">手动输入</p>
      </div>
      <div style="position: relative; width: 95%; top: 60px; height: 80%; left: 4%">
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            width: 90%;
            left: 5%;
            top: 10px;
            height: 95%;
          ">
          <!-- 第一行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px">姓名*:</span>
              <el-input v-model="nameInput" placeholder="请输入"
                style="position: relative; height: 40px !important; width: 70%">
              </el-input>
            </div>
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">学号*:</span>
              <el-input v-model="idInput" placeholder="请输入"
                style="position: relative; height: 40px !important; width: 70%">
              </el-input>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第二行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">类别*:</span>
              <el-select v-model="typeValue" placeholder="请选择"
                style="position: relative; height: 40px !important; width: 70%">
                <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">身份证号*:</span>
              <el-input v-model="cardInput" placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%">
              </el-input>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第三行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">性别*:</span>
              <div style="position: relative">
                <el-radio v-model="radio" label="0">女</el-radio>
                <el-radio v-model="radio" label="1">男</el-radio>
              </div>
            </div>
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">出生日期*:</span>
              <el-date-picker v-model="dateValue" type="date" placeholder="选择日期"
                style="position: relative; height: 40px !important; width: 58%">
              </el-date-picker>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第四行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px">民族:</span>
              <el-input v-model="nationInput" placeholder="请输入"
                style="position: relative; height: 40px !important; width: 72%">
              </el-input>
            </div>
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">当前年级*:</span>
              <el-select v-model="gradeValue" placeholder="请选择"
                style="position: relative; height: 40px !important; width: 58%">
                <el-option v-for="item in YearOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第五行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px">所在地*:</span>
              <div style="width: 167px; left: 10px">
                <el-cascader :options="locationOptions" v-model="addressOptions"
                  @change="handleAddressChange"></el-cascader>
              </div>
            </div>
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">联系电话*:</span>
              <el-input v-model="phoneInput" placeholder="请输入"
                style="position: relative; height: 40px !important; width: 58%">
              </el-input>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第六行 -->
          <div style="height: 7%; margin-bottom: 1%">
            <div style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">专业学院*:</span>
              <el-select v-model="collegeValue" placeholder="请选择" :popper-class="'scrollable-dropdown'"
                style="position: relative; height: 30px; width: 79%">
                <el-option v-for="item in CollegeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- 分割线 -->
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第七行 -->
          <div style="height: 7%; margin-bottom: 1%">
            <div style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">就读专业*:</span>
              <el-select v-model="majorValue" placeholder="请选择" :popper-class="'scrollable-dropdown'"
                style="position: relative; height: 30px; width: 79%">
                <el-option v-for="item in MajorOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- 分割线 -->
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第八行 -->
          <div style="height: 7%; margin-bottom: 1%">
            <div style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">专业班级*:</span>
              <el-select v-model="classValue" placeholder="请选择" :popper-class="'scrollable-dropdown'"
                style="position: relative; height: 30px; width: 79%">
                <el-option v-for="item in ClassOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- 分割线 -->
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
          <!-- 第九行 -->
          <div style="height: 7%; margin-bottom: 1%">
            <div style="
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px; left: 7%">所在校区*:</span>
              <el-select v-model="campusValue" placeholder="请选择" :popper-class="'scrollable-dropdown'"
                style="position: relative; height: 30px; width: 79%">
                <el-option v-for="item in CampusOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <hr style="
              width: 95%;
              border: 1px solid #ffffff;
              margin-left: 0%;
              margin-top: 2px;
              position: relative;
            " />
        </div>
      </div>
      <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 90%;
          top: 6%;
          height: 45px;
        ">
        <el-button type="danger" style="
            position: relative;
            background-color: #FFC300;
            height: 40px;
            width: 80px;
            radius:5px;
            border:none;
          " @click="storeForm">暂存
        </el-button>
        <el-button type="danger" style="
            position: relative;
            background-color: #F89300;
            height: 40px;
            width: 80px;
            radius:5px;
            left: 5%;
            border:none;
          " @click="handleSubmit">提交
        </el-button>
        <el-button type="danger" style="
            position: relative;
            background-color: #FA5E00;
            height: 40px;
            width: 80px;
            radius:5px;
            left: 10%;
            border:none;
          " @click="resetForm">重置
        </el-button>
      </div>
    </div>
  </div>
</template>

<style>
@import "../../public/static/css/aside.css";
</style>

<script>
import { regionData } from "element-china-area-data";
import axios from "axios";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      textUploadProgress: 0, // 文字信息上传进度
      imageUploadProgress: 0, // 图片信息上传进度
      showTextSuccess: false,
      showImageSuccess: false,
      // 类别
      TypeOptions: [
        {
          value: "本科生",
          label: "本科生",
        },
        {
          value: "研究生",
          label: "研究生",
        },
      ],
      // 当前年级
      YearOptions: [
        {
          value: "2021",
          label: "2021",
        },
        {
          value: "2022",
          label: "2022",
        },
        {
          value: "2023",
          label: "2023",
        },
        {
          value: "2024",
          label: "2024",
        },
      ],
      // 专业学院
      CollegeOptions: [
        {
          value: "计算机学院",
          label: "计算机学院",
        },
        {
          value: "建筑学院",
          label: "建筑学院",
        },
        {
          value: "数学学院",
          label: "数学学院",
        },
        {
          value: "电气工程学院",
          label: "电气工程学院",
        },
        {
          value: "经济管理学院",
          label: "经济管理学院",
        },
        {
          value: "交通运输与物流学院",
          label: "交通运输与物流学院",
        },
        {
          value: "材料科学与工程学院",
          label: "材料科学与工程学院",
        },
        {
          value: "智慧城市与交通学院",
          label: "智慧城市与交通学院",
        },
        {
          value: "设计艺术学院",
          label: "设计艺术学院",
        },
        {
          value: "物理科学与技术学院",
          label: "物理科学与技术学院",
        },
      ],
      // 就读专业
      MajorOptions: [],
      // 所在班级
      ClassOptions: [],
      // 所在校区
      CampusOptions: [
        {
          value: "1号校区",
          label: "1号校区",
        },
        {
          value: "2号校区",
          label: "2号校区",
        },
      ],
      nameInput: "", // 姓名
      idInput: "", // 学号
      typeValue: "", // 类别
      cardInput: "", // 身份证
      radio: "", // 性别
      dateValue: "", // 出生日期
      nationInput: "", // 民族
      gradeValue: "", // 当前年级
      phoneInput: "", // 电话
      collegeValue: "", // 专业学院
      majorValue: "", // 就读专业
      classValue: "", // 专业班级
      campusValue: "", // 所在校区
      locationOptions: regionData.map((area) => ({
        value: area.value,
        label: area.label,
        children: area.children, // 为了让 Cascader 组件能够展示下一级地区，需要保留 children 属性
      })),
      addressOptions: [], // 保存用户选择的地区编码
      addressText: [], // 保存用户选择的地区文字信息
    };
  },
  computed: {
    importFormData() {
      return {
        nameInput: this.nameInput,
        idInput: this.idInput,
        typeValue: this.typeValue,
        cardInput: this.cardInput,
        radio: this.radio,
        dateValue: this.dateValue,
        nationInput: this.nationInput,
        gradeValue: this.gradeValue,
        phoneInput: this.phoneInput,
        collegeValue: this.collegeValue,
        majorValue: this.majorValue,
        classValue: this.classValue,
        campusValue: this.campusValue,
        addressOptions: this.addressOptions,
      };
    },
    ...mapState({
      importForm: state => state.importForm,
    }),
  },

  watch: {

    collegeValue(newVal) {
      if (newVal === "计算机学院") {
        this.MajorOptions = [
          {
            value: "软件工程",
            label: "软件工程",
          },
          {
            value: "计算机科学与技术",
            label: "计算机科学与技术",
          },
          {
            value: "人工智能",
            label: "人工智能",
          },
        ];
      } else if (newVal === "建筑学院") {
        this.MajorOptions = [
          {
            value: "建筑学",
            label: "建筑学",
          },
          {
            value: "城市规划",
            label: "城市规划",
          },
          {
            value: "景观建筑设计",
            label: "景观建筑设计",
          },
        ];
      }
    },
    majorValue(newVal) {
      if (newVal === "软件工程") {
        this.ClassOptions = [
          {
            value: "软件-01班",
            label: "软件-01班",
          },
          {
            value: "软件-02班",
            label: "软件-02班",
          },
          {
            value: "软件-03班",
            label: "软件-03班",
          },
        ];
      } else if (newVal === "计算机科学与技术") {
        this.ClassOptions = [
          {
            value: "计算机-01班",
            label: "计算机-01班",
          },
          {
            value: "计算机-02班",
            label: "计算机-02班",
          },
          {
            value: "计算机-03班",
            label: "计算机-03班",
          },
        ];
      } else if (newVal === "人工智能") {
        this.ClassOptions = [
          {
            value: "人工智能-01班",
            label: "人工智能-01班",
          },
          {
            value: "人工智能-02班",
            label: "人工智能-02班",
          },
          {
            value: "人工智能-03班",
            label: "人工智能-03班",
          },
        ];
      } else if (newVal === "建筑学") {
        this.ClassOptions = [
          {
            value: "建筑学-01班",
            label: "建筑学-01班",
          },
          {
            value: "建筑学-02班",
            label: "建筑学-02班",
          },
          {
            value: "建筑学-03班",
            label: "建筑学-03班",
          },
        ];
      } else if (newVal === "城市规划") {
        this.ClassOptions = [
          {
            value: "城市规划-01班",
            label: "城市规划-01班",
          },
          {
            value: "城市规划-02班",
            label: "城市规划-02班",
          },
          {
            value: "城市规划-03班",
            label: "城市规划-03班",
          },
        ];
      } else if (newVal === "景观建筑设计") {
        this.ClassOptions = [
          {
            value: "景观建筑设计-01班",
            label: "景观建筑设计-01班",
          },
          {
            value: "景观建筑设计-02班",
            label: "景观建筑设计-02班",
          },
          {
            value: "景观建筑设计-03班",
            label: "景观建筑设计-03班",
          },
        ];
      }
    },
  },

  mounted() {
    this.loadImportFormData();
  },

  methods: {
    // 实时更新表单数据
    updateImportForm() {
      const formData = {
        nameInput: this.nameInput,
        idInput: this.idInput,
        typeValue: this.typeValue,
        cardInput: this.cardInput,
        radio: this.radio,
        dateValue: this.dateValue,
        nationInput: this.nationInput,
        gradeValue: this.gradeValue,
        phoneInput: this.phoneInput,
        collegeValue: this.collegeValue,
        majorValue: this.majorValue,
        classValue: this.classValue,
        campusValue: this.campusValue,
        addressOptions: this.addressOptions,
      };
      this.$store.commit("updateImportForm", formData);
    },

    storeForm() {
      this.updateImportForm();
      this.$message.success('暂存成功');
    },

    // 刷新时加载表单数据
    loadImportFormData() {
      this.nameInput = this.importForm.nameInput;
      this.idInput = this.importForm.idInput;
      this.typeValue = this.importForm.typeValue;
      this.cardInput = this.importForm.cardInput;
      this.radio = this.importForm.radio;
      this.dateValue = this.importForm.dateValue;
      this.nationInput = this.importForm.nationInput;
      this.gradeValue = this.importForm.gradeValue;
      this.phoneInput = this.importForm.phoneInput;
      this.collegeValue = this.importForm.collegeValue;
      this.majorValue = this.importForm.majorValue;
      this.classValue = this.importForm.classValue;
      this.campusValue = this.importForm.campusValue;
      this.addressOptions = this.importForm.addressOptions;
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    downloadFile() {
      // 文件的路径
      const filePath = "/static/data/模板.xlsx";

      // 创建一个链接元素
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "模板.xlsx"; // 设置下载文件的文件名

      // 触发点击链接的操作
      link.click();
    },

    downloadZipFile() {
      // 文件的路径
      const filePath = "/static/data/face_img.zip";

      // 创建一个链接元素
      const link = document.createElement("a");
      link.href = filePath;
      link.download = "face_img.zip"; // 设置下载文件的文件名

      // 触发点击链接的操作
      link.click();
    },

    handleTextClick() {
      this.textUploadProgress = 0;
      this.showTextSuccess = false;
      this.$refs.textFileInput.click();
    },
    // 批量导入学生文字信息
    handleTextUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const allowedTypes = [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx 文件
          "application/vnd.ms-excel", // .xls 文件
        ];
        if (allowedTypes.includes(file.type)) {
          // 构建 FormData 对象
          const formData = new FormData();
          formData.append("file", file);

          // 发送 axios 请求
          axios
            .post(`${this.$store.getters.getIp}/students/import`, formData, {
              // 设置上传进度回调函数
              onUploadProgress: (progressEvent) => {
                this.textUploadProgress = Math.round(
                  (progressEvent.loaded / progressEvent.total) * 100
                );
              },
            })
            .then((response) => {
              console.log("File uploaded successfully:", response.data);
              const status = response.data.code;
              if (status) {
                this.showTextSuccess = true;
              } else {
                const errorMessage = response.data.msg;
                this.textUploadProgress = 0;
                this.$message.error(errorMessage);
              }
            })
            .catch((error) => {
              console.error("Error uploading file:", error);
            });
        } else {
          console.error(
            "Invalid file type. Please select a .xlsx or .xls file."
          );
        }
      }
    },

    handleImageClick() {
      // 点击图片时触发文件上传输入框的点击事件
      this.showImageSuccess = false;
      this.imageUploadProgress = 0;
      this.$refs.imageFileInput.click();
    },
    // 批量导入学生人脸信息
    handleImageUpload(event) {
      const file = event.target.files[0];
      console.log("上传的文件:", file);

      // 检查文件类型
      const allowedTypes = [
        "application/zip", // .zip 文件
      ];
      // if (!allowedTypes.includes(file.type)) {
      //   console.error("Invalid file type. Please select a .zip file.");
      //   return;
      // }

      // 创建 FormData 对象
      const formData = new FormData();
      formData.append("file", file);

      const startTime = performance.now();
      // 发送 axios 请求
      axios
        .post(`${this.$store.getters.getIp}/students/import/images`, formData, {
          // 设置上传进度回调函数
          onUploadProgress: (progressEvent) => {
            // 计算上传进度百分比
            this.imageUploadProgress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            if (this.imageUploadProgress == 100) {
              this.showImageSuccess = true;
            }
          },
        })
        .then((response) => {
          console.log("Img uploaded successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error uploading Img:", error);
        });
    },
    // 所在地转换
    handleAddressChange(value) {
      const selectedAddress = [];
      let data = regionData;
      for (const code of value) {
        const area = data.find((area) => area.value === code);
        if (area) {
          selectedAddress.push(area.label);
          if (area.children) {
            data = area.children;
          } else {
            break; // 如果没有子地区，结束循环
          }
        } else {
          break; // 如果找不到对应的地区信息，结束循环
        }
      }
      this.addressText = selectedAddress;
    },
    // 提交功能
    handleSubmit() {
      // 获取所有输入框数据
      const id = this.idInput;
      const idNumber = this.cardInput;
      const name = this.nameInput;
      const gender = parseInt(this.radio);
      const birth = this.dateValue;
      const nation = this.nationInput;
      const grade = parseInt(this.gradeValue);
      const college = this.collegeValue;
      const major = this.majorValue;
      const majorClass = this.classValue;
      const campus = this.campusValue;
      const address = this.addressText.join("/");
      console.log(address);
      const phone = this.phoneInput;
      const category = this.typeValue === "本科生" ? 0 : 1; // 0: 本科生, 1: 研究生

      // 验证必选项是否填写
      if (
        !id ||
        !idNumber ||
        !name ||
        !grade ||
        !college ||
        !major ||
        !majorClass ||
        !campus ||
        !address ||
        !category === undefined
      ) {
        this.$message.error("请填写所有必选项");
        return;
      }

      // 验证身份证号格式是否符合要求
      const idNumberRegex =
        /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[0-9Xx]$/;
      if (!idNumberRegex.test(idNumber)) {
        this.$message.error("身份证号格式不正确");
        return; // 结束函数执行
      }

      // 验证电话号码格式是否符合要求
      const phoneRegex = /^1[3456789]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        this.$message.error("电话号码格式不正确");
        return; // 结束函数执行
      }

      if (id.length !== 10) {
        this.$message.error("学号格式不正确");
        return; // 结束函数执行
      }

      console.log("参数:", {
        id,
        idNumber,
        name,
        gender,
        birth,
        nation,
        grade,
        college,
        major,
        majorClass,
        campus,
        address,
        phone,
        category,
      });

      // 发送 Axios 请求
      axios
        .post(`${this.$store.getters.getIp}/students`, {
          id,
          idNumber,
          name,
          gender,
          birth,
          nation,
          grade,
          college,
          major,
          majorClass,
          campus,
          address,
          phone,
          category,
        })
        .then((response) => {
          if (response.data.code) {
            console.log("提交成功:", response.data);
            this.$message.success("提交成功");
          }
          else {
            const errorMessage = response.data.msg;
            this.$message.error(errorMessage);
          }
        })
        .catch((error) => {
          console.error("提交失败:", error);
        });
    },
    // 重置表单
    resetForm() {
      this.nameInput = "";
      this.idInput = "";
      this.typeValue = "";
      this.cardInput = "";
      this.radio = "";
      this.dateValue = "";
      this.nationInput = "";
      this.gradeValue = "";
      this.phoneInput = "";
      this.collegeValue = "";
      this.majorValue = "";
      this.classValue = "";
      this.campusValue = "";
      this.addressOptions = [];
      this.updateImportForm();
      this.$message.success('重置成功');
    },
  },
};
</script>