<template>
  <div class="app-main" style="position: relative">
    <div style="position:relative;height:85%;top:5%;left:5%;width:90%;background-color:#ffffff;">
      <div style="position:relative;height:5%;width:100%;text-align:center;font-size:20px;">广告详细信息</div>
      <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
      <!-- 文字内容 -->
      <!-- 第一行 -->
      <div style="position:relative;height:8%;width:100%;display:flex;">
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          广告名称:{{ fetchData.title }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          广告类型:{{ getCategoryText(fetchData.category) }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
          提交时间:{{ fetchData.createTime }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
          投放时间:{{ fetchData.releaseTime }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
          投放时长:{{ fetchData.duration }}
        </div>
      </div>
      <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
      <!-- 第二行 -->
      <div style="position:relative;height:8%;width:100%;display:flex">
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          商家名称:{{ fetchData.name }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          商家电话:{{ fetchData.phone }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          商家地址:{{ fetchData.address }}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          营业时间:xxxxx
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          关键词:{{ fetchData.keywords }}
        </div>
      </div>
      <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
      <!-- 第三行 -->
      <div style="position:relative;height:8%;width:100%;display:flex">
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          搜索推广:xxxxx
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          首页推广:xxxxx
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          首页投放时长:{{fetchData.promoteTime}}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          首页推广图片:{{fetchData.cover}}
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div
          style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
          收取费用:{{fetchData.cost}}
        </div>
      </div>
      <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
      <!-- 广告内容 -->
      <div style="position:relative;height:30%;width:100%;display:flex;">
        <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
          <div
            style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">
            广告内容</div>
          <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;">{{fetchData.content}}</div>
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
          <div
            style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">
            广告图标</div>
          <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;">{{fetchData.icon}}</div>
        </div>
        <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
        <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
          <div
            style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">
            广告图片</div>
          <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;"></div>
        </div>
      </div>
      <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
      <!-- 商品列表 -->
      <div style="position:relative;height:41%;width:100%;">
        <div style="position:relative;height:10%;width:100%;text-align:center;font-size:20px;">商品列表</div>
        <div style="position:relative;height:84%;width:90%;left:5%;top:5%;">
          <el-table :data="tableData" border>
            <el-table-column prop="photo" label="商品图片" min-width="70" :align="'center'">
              <template slot="header" slot-scope="scope">
                <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" min-width="70" :align="'center'">

              <template slot="header" slot-scope="scope">
                <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="prize" label="商品价格" min-width="70" :align="'center'">

              <template slot="header" slot-scope="scope">
                <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="message" label="商品介绍" min-width="70" :align="'center'">

              <template slot="header" slot-scope="scope">
                <span style="display: inline-block; width: 100%; text-align: center">{{ scope.column.label }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div style="position:relative;height:10%;width:90%;left:5%;top:5%;">
      <div
        style="position:relative;height:100%;width:15%;left:85%;text-align:center; display: flex; align-items: center; justify-content: center;">
        <el-button type="danger" size="mini"
          style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#F89300;border:none"
          @click="goSearch">更多</el-button>
        <el-button type="danger" size="mini"
          style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#FA5E00;border:none"
          @click="goBack">返回</el-button>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: null,
      tableData: [],
      fetchData:null,
    };
  },
  created() {
    this.id = this.$store.getters.getSeeAdID;
    console.log("接收到的广告ID:", this.id);
    axios
      .get(`${this.$store.getters.getIp}/advertisements/${this.id}`)
      .then((response) => {
        this.fetchData = response.data.data;
        this.tableData = this.fetchData.commodities;
        // console.log("获取广告数据:",this.fetchData);
      })
      .catch((error) => {
        console.error("获取数据时出错：", error);
      });
  },

  methods: {
    goBack() {
      this.$router.push("/mainMenu/add/business");
    },
    goSearch() {
      this.$router.push("/search");
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