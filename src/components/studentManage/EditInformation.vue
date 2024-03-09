<template>
  <div class="app-main" style="position: relative; background-color: #f0f3f4;">
    <div
      style="position: relative; height: 8%; width: 100%; background-color: rgb(28, 43, 54); display: flex; align-items: center;">
      <div
        style="position:relative;width:20%;height:100%;display: flex; align-items: center;left:2%;background-color:rgb(28, 43, 54);">
        <i class="el-icon-search" style="color: #ffff;margin-right:10px;"></i>
        <el-input v-model="search" placeholder="搜索" id="searchPart"></el-input>
      </div>
      <router-link to="/mainMenu/help/helpFile"
        style="color: inherit; text-decoration: none; margin-right: 20px; margin-left: auto; color: #ffffff;">
        <span style="transition: color 0.3s;" class="hover-color">需要帮助吗？<span style="color: #209e91;">点击这里</span></span>
      </router-link>
      <i class="el-icon-s-home" style="color: #ffff;margin-right:10px; font-size: 24px;"></i>
    </div>
    <div style="margin-top: 10px; width:100%;height:9%;display:flex;">
      <h2 style="
          color: #747474;
          display: inline-block;
          left: 2%;
          position:relative;
          width:98%;
        ">
        {{ rowData.name }}详细信息修改
      </h2>
      <div
        style="position: relative; height: 100%; width: 100%; display: flex; align-items: center; justify-content: flex-end; padding-right: 2%;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/register' }" style="font-size: 17px;"
            id="active-link">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/manage' }"
            style="font-size: 17px; color: #747474; font-weight: 600;" id="pre-link">学生信息管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/mainMenu/student/detailInformation' }"
            style="font-size: 17px; color: #747474; font-weight: 600;" id="pre-link">详细信息</el-breadcrumb-item>
          <el-breadcrumb-item style="font-size: 17px; color: #747474; font-weight: 600;"
            id="current-link">详细信息修改</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <hr style="
    width: 99%;
    border: 1px solid #ffffff;
    margin-top: 5px;
    position: relative;
  " />
    <!-- 中间数据修改部分 -->
    <div style="
        background-color: #ffffff;
        color:#747474;
        width: 96%;
        height: 70%;
        margin-top: 2%;
        left: 2%;
        position: relative;
        border-radius:8px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      ">
      <div style="position: relative; width: 95%; top: 5%; height: 80%; left: 6%">
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            width: 90%;
            left: 5%;
            top: 5px;
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
                style="position: relative; height: 40px !important; width: 64%">
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
              <div style="width: 80%; left: 10px">
                <el-cascader :options="locationOptions" v-model="addressOptions" style="width: 84%"
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
          <!-- 第十行 -->
          <div style="height: 7%; margin-bottom: 1%; display: flex">
            <div style="
                position: relative;
                width: 50%;
                display: flex;
                align-items: center;
              ">
              <span style="margin-right: 10px">人脸信息*:</span>
              <el-button type="primary" style="
                  height: 30px;
                  width: 20%;
                  font-size: 10px;
                  text-align: center;
                  line-height: 30px;
                  background-color: #209e91;
                  border: none;
                " @click="handleImageClick">
                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                  ">
                  上传 <i class="el-icon-upload2" style="color: #fff"></i>
                  <!-- 添加文件选择框 -->
                  <input type="file" ref="imageFileInput" style="display: none" accept=".zip"
                    @change="handleImageUpload" />
                </div>
              </el-button>
              <p style="font-size: 10px; margin-left: 10px; color: #808080">
                格式：zip
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  下侧操作键 -->
    <div style="width: 96%;left:2%; display: flex; margin-top: 1%;justify-content: flex-end; align-items: center;position:relative;">
      <el-button type="primary" style="background-color: #2dacd1; border: #2dacd1;" size="small"
        @click="MakeSure">确认</el-button>
      <el-button type="primary" style="background-color: #209e91; border: #209e91;" size="small"
        @click="GoToJust">返回</el-button>
    </div>
  </div>
</template>
<style scoped>
/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474
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

#pre-link /deep/ .el-breadcrumb__inner {
  font-weight: 600 !important;
  color: #209e91;
}

/deep/.el-input__inner {
  color: #747474
}
</style>
<script>
import { regionData } from "element-china-area-data";
import axios from "axios";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      search: "",
      rowData: {},
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
      radio: "0", // 性别
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
      selectedAddressCode: [],
      addressOptions: [], // 保存用户选择的地区编码
      addressText: [], // 保存用户选择的地区文字信息
    };
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
    this.rowData = this.$store.getters.getRowData;
    console.log("接收到的学生数据:", this.rowData);
    this.nameInput = this.rowData.name;
    this.idInput = this.rowData.id;
    this.typeValue = this.rowData.category === 0 ? "本科生" : "研究生";
    this.cardInput = this.rowData.idNumber;
    this.radio = this.rowData.gender === 0 ? "0" : "1";
    this.dateValue = this.rowData.birth;
    this.nationInput = this.rowData.nation;
    this.gradeValue = this.rowData.grade;
    this.phoneInput = this.rowData.phone;
    this.collegeValue = this.rowData.college;
    this.majorValue = this.rowData.major;
    this.classValue = this.rowData.majorClass;
    this.campusValue = this.rowData.campus;
    this.addressOptions = this.convertAddressToCode(this.rowData.address);
    console.log("地址",this.addressOptions);
  },
  methods: {
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
      // console.log("所在地文字",this.addressText);
    },
    // 确认功能
    MakeSure() {
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
      //发起put请求更新学生信息

      axios
        .put(`${this.$store.getters.getIp}/students`, {
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
          console.log("提交成功:", response.data);
          this.$message.success("提交成功");
        })
        .catch((error) => {
          console.error("提交失败:", error);
        });
    },
    // 返回功能
    GoToJust() {
      this.$router.push('/mainMenu/student/detailInformation');
      console.log("返回详细界面");
    },
    // 将文字转换为编码
    convertAddressToCode(addressText) {
      const addressArray = addressText.split("/");
      const selectedCode = [];
      let data = regionData;
      for (const text of addressArray) {
        const area = data.find((area) => area.label === text);
        if (area) {
          selectedCode.push(area.value);
          if (area.children) {
            data = area.children;
          } else {
            break; // 如果没有子地区，结束循环
          }
        } else {
          break; // 如果找不到对应的地区信息，结束循环
        }
      }
      return selectedCode;
    },
  },
};
</script>