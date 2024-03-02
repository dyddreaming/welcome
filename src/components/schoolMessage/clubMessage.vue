<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        position: relative;
        height: 8%;
        width: 100%;
        font-size: 20px;
        background-color: #ffffff;
      "
    >
      社团资讯列表——审核通过
    </div>
    <div
      style="
        position: relative;
        height: 84%;
        width: 100%;
        background-color: #ffffff;
      "
    >
      <el-table :data="tableData" border>
        <el-table-column
          prop="clubName"
          label="社团名称"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="资讯标题"
          min-width="70"
          :align="'center'"
          :formatter="formatGender"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="资讯类型"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="connectName"
          label="联系人姓名"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="admitTime"
          label="提交时间"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="setTime"
          label="投放时间"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="setLong"
          label="投放时长"
          min-width="70"
          :align="'center'"
          :formatter="formatRegister"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="charge"
          label="收取费用/元"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="投放状态"
          min-width="70"
          :align="'center'"
        >
          <template slot="header" slot-scope="scope">
            <span
              style="display: inline-block; width: 100%; text-align: center"
              >{{ scope.column.label }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          min-width="140"
          :align="'center'"
        >
          <template slot-scope="scope">
            <div style="display: flex">
              <el-button type="danger" size="mini">投放</el-button>
              <el-button type="danger" size="mini">暂停投放</el-button>
              <el-button
                type="danger"
                size="mini"
                style="background-color: #fa5e00"
                >查看</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div
      style="
        position: relative;
        height: 8%;
        width: 100%;
        font-size: 20px;
        top: 2%;
        display: flex;
      "
    >
      <el-button
        type="danger"
        size="mini"
        style="
          background-color: #fa5e00;
          position: relative;
          left: 85%;
          border-radius: 10px;
          height: 75%;
        "
        @click="chargeSet"
        >费用设置</el-button
      >
      <el-button
        type="danger"
        size="mini"
        style="
          background-color: #fa5e00;
          position: relative;
          left: 85%;
          border-radius: 10px;
          height: 75%;
        "
        @click="clubExamine"
        >待审核列表</el-button
      >
    </div>
    <el-dialog
      title="收费设置"
      :visible.sync="showDialog"
      width="40%"
      @close="closeDialog"
    >
      <el-form label-width="160px">
        <el-form-item label="文字（元/百字）">
          <el-input v-model="textPrice"></el-input>
        </el-form-item>
        <el-form-item label="图片（元/张）">
          <el-input v-model="imagePrice"></el-input>
        </el-form-item>
        <el-form-item label="投放时长（元/时）">
          <el-input v-model="durationPrice"></el-input>
        </el-form-item>
        <el-form-item label="首页推广时长（元/时）">
          <el-input v-model="homePromotionPrice"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
  
  <style>
</style>
  
  <script>
export default {
  data() {
    return {
      tableData: [
        {
          clubName: "广播社",
          title: "广播社招新啦",
          type: "招新",
          connectName: "张三",
          admitTime: "2024-08-28 10:16:23",
          setTime: "2024-08-28 10:16:23",
          setLong: "3天",
          charge: "2000",
          status: "正常投放",
        },
      ],
      showDialog: false,
      textPrice: "",
      imagePrice: "",
      durationPrice: "",
      homePromotionPrice: "",
    };
  },
  methods: {
    clubExamine() {
      this.$router.push("/clubExamine");
    },
    chargeSet() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>