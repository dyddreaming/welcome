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
        广告审核
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
            :to="{ path: '/mainMenu/add/business' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >通过列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            :to="{ path: '/mainMenu/add/noPass' }"
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="pre-link"
            >未通过列表</el-breadcrumb-item
          >
          <el-breadcrumb-item
            style="font-size: 17px; color: #747474; font-weight: 600"
            id="current-link"
            >详细信息</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 82%;
        top: 1%;
        background-color: #ffffff;
        position: relative;
        border-radius: 8px;
        width: 96%;
        left: 2%;
        color: #747474;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      "
    >
      <div style="width: 100%; border-bottom: 1px solid #cccccc"></div>
      <!-- 文字内容 -->
      <!-- 第一行 -->
      <div style="position: relative; height: 8%; width: 100%; display: flex">
        <div
          style="position: relative; height: 100%; width: 60%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            广告名称:录题员
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            广告类型:兼职
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            收取费用:2000
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
        </div>
        <div
          style="position: relative; height: 300%; width: 40%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 100%;
              width: 25%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <div>广告图标</div>
          </div>
          <div
            style="
              position: relative;
              width: 75%;
              height: 90%;
              top: 5%;
              background-size: contain;
              background-image: url('/static/img/icon.JPG');
              background-repeat: no-repeat; /* 防止图像重复 */
              background-position: center center; /* 将图像置于容器中间 */
            "
          ></div>
        </div>
      </div>
      <div style="width: 59.5%; border-bottom: 1px solid #cccccc"></div>
      <!-- 第二行 -->
      <div style="position: relative; height: 8%; width: 60%; display: flex">
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          商家名称:开封师学通文化有限公司
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          商家电话:13990602489
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          商家地址:开封区24号
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
      </div>
      <div style="width: 59.5%; border-bottom: 1px solid #cccccc"></div>
      <!-- 第三行 -->
      <div style="position: relative; height: 8%; width: 60%; display: flex">
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          提交时间:2024-03-16 12:14:12
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          投放时间:2024-05-01 00:00:00
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          投放时长:20天
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
      </div>
      <div style="width: 100%; border-bottom: 1px solid #cccccc"></div>
      <!-- 第四行 -->
      <div style="position: relative; height: 8%; width: 100%; display: flex">
        <div
          style="position: relative; height: 100%; width: 60%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            首页推广:500
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            首页投放时长:5天
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 33%;
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            首页推广图片:
          </div>
          <div
            style="
              position: relative;
              height: 100%;
              width: 1px;
              background-color: #cccccc;
            "
          ></div>
        </div>
        <div
          style="position: relative; height: 300%; width: 40%; display: flex"
        >
          <div
            style="
              position: relative;
              height: 100%;
              width: 25%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <div>首页推广图片:</div>
          </div>
          <div
            style="
              position: relative;
              width: 75%;
              height: 90%;
              top: 5%;
              background-size: contain;
              background-image: url('/static/img/cover.JPG');
              background-repeat: no-repeat; /* 防止图像重复 */
              background-position: center center; /* 将图像置于容器中间 */
            "
          ></div>
        </div>
      </div>
      <div style="width: 59.5%; border-bottom: 1px solid #cccccc"></div>
      <!-- 第五行 -->
      <div style="position: relative; height: 8%; width: 60%; display: flex">
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          搜索推广:200
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          关键词:兼职/文化/小学教育/高中教育
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 33%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          工作方式:线上
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
      </div>
      <div style="width: 59.5%; border-bottom: 1px solid #cccccc"></div>
      <!-- 第六行 -->
      <div style="position: relative; height: 8%; width: 60%; display: flex">
        <div
          style="
            position: relative;
            height: 100%;
            width: 50%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          职位描述:录制小初高题目讲解视频
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 49%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          薪资:40-80/时
        </div>
        <div
          style="
            position: relative;
            height: 100%;
            width: 1px;
            background-color: #cccccc;
          "
        ></div>
      </div>
      <div style="width: 100%; border-bottom: 1px solid #cccccc"></div>
      <!-- 职位详情 -->
      <div style="position: relative; height: 46%; width: 80%; left: 10%">
        <div
          style="
            position: relative;
            height: 8%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          职位详情
        </div>
        <div style="position: relative; height: 85%; width: 100%; top: 2%">
          <p>
            我们的工作内容是录制讲解小初高题目视频，把题目讲解清楚即可，无需露脸，居家可做~
          </p>
          <p>1.设备要求：电脑+手写板或平板+手写笔；</p>
          <p>
            2.普通话标准、吐字清晰、语速适中，表述及思路清晰流畅、声音饱满有起伏；
          </p>
          <p>
            3.书写要求：板书内容文字清晰、工整、可读性强，不写连笔字体、字迹不可潦草；
            项目长期稳定，题量充沛.
          </p>
        </div>
      </div>
    </div>
    <div
      style="
        position: relative;
        height: 5%;
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
        @click="pass"
        >通过审核</el-button
      >
      <el-button
        type="primary"
        style="background-color: #209e91; border: #209e91"
        size="small"
        @click="openNoPassDialog"
        >不通过审核</el-button
      >
      <el-dialog
        title="不通过审核原因"
        :visible.sync="noPassDialogVisible"
        width="30%"
        :close-on-click-modal="false"
      >
        <!-- 不通过审核的表单 -->
        <el-form :model="noPassForm">
          <el-form-item prop="reason">
            <el-input type="textarea" v-model="noPassForm.reason" />
          </el-form-item>
        </el-form>

        <!-- 自定义底部按钮 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="noPassDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmNoPass">确定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
/deep/ #searchPart {
  background-color: rgb(28, 43, 54);
  border: none;
  color: #747474;
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
      id: null,
      fetchData: null,
      noPassDialogVisible: false,
      noPassForm: {
        reason: "",
      },
    };
  },
  created() {
    this.id = this.$store.getters.getExamineID;
    // console.log("接收到的广告ID:", this.id);
    axios
      .get(`${this.$store.getters.getIp}/advertisements/${this.id}`)
      .then((response) => {
        this.fetchData = response.data.data;
        // console.log("获取广告数据:", this.fetchData);
      })
      .catch((error) => {
        console.error("获取数据时出错：", error);
      });
  },
  methods: {
    pass() {
      this.$confirm("确认通过审核吗？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // let data = {
          //   id: parseInt(this.id),
          //   pass: true,
          // };
          // const queryString = Object.keys(data)
          //   .map(
          //     (key) =>
          //       `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          //   )
          //   .join("&");
          // axios
          //   .put(
          //     `${this.$store.getters.getIp}/advertisements/examine?${queryString}`
          //   )
          //   .then((response) => {
          //     // console.log(response.data);
          //     if (response.data.code) {
          //       this.$message({
          //         message: "审核成功",
          //         type: "success",
          //       });
          //       this.$router.push("/noPass");
          //     }
          //   })
          //   .catch((error) => {
          //     console.error("审核错误:", error);
          //   });
          this.$message({
            message: "审核成功",
            type: "success",
          });
          this.$router.push("/mainMenu/add/noPass");
        })
        .catch(() => {});
    },
    // 点击按钮打开不通过审核的对话框
    openNoPassDialog() {
      this.noPassDialogVisible = true;
    },
    confirmNoPass() {
      console.log("不通过审核原因：", this.noPassForm.reason);
      this.$message({
        message: "成功设置审核不通过",
        type: "success",
      });
      this.$router.push("/mainMenu/add/noPass");
      this.noPassDialogVisible = false;
      this.noPassForm.reason = "";
    },
    getCategoryText(category) {
      switch (category) {
        case 0:
          return "社团";
        case 1:
          return "兼职";
        case 2:
          return "美食";
        case 3:
          return "娱乐";
        default:
          return "未知类型";
      }
    },
  },
};
</script>