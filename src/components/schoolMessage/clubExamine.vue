<template>
    <div class="app-main" style="position: relative">
      <div
        style="
          position: relative;
          width: 90%;
          left: 5%;
          height: 10%;
          display: flex;
        "
      >
        <div style="position: relative; top: 35%; font-size: 18px; left: 2%">
          社团资讯列表更新了4条广告
        </div>
        <div style="position: relative; top: 35%; left: 10%">
          <el-button type="danger" size="mini" style="border-radius: 10px"
            >全部已读</el-button
          >
        </div>
      </div>
      <div
        style="
          position: relative;
          height: 80%;
          width: 90%;
          left: 5%;
          background-color: #ffffff;
        "
      >
        <div style="position: relative; height: 8%; width: 100%; font-size: 20px">
          社团资讯列表——未审核
        </div>
        <div style="position: relative; height: 92%; width: 100%">
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
              prop="operation"
              label="操作"
              min-width="100"
              :align="'center'"
            >
              <template slot-scope="scope">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <el-button type="danger" size="mini" @click="examine" style="background-color:#fa5e00"
                    >审核</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div style="position: relative; width: 90%; left: 5%; height: 10%">
        <el-button
          type="danger"
          size="mini"
          style="
            background-color: #fa5e00;
            border: none;
            position: relative;
            height: 50%;
            width: 5%;
            left: 95%;
            top: 20%;
            border-radius: 10px;
          "
          @click="goBack"
          >返回</el-button
        >
      </div>
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
          connectName:"张三",
          admitTime: "2024-08-28 10:16:23",
          setLong: "3天",
        },
      ],
    };
  },
    methods: {
      goBack() {
        this.$router.push("/mainMenu/add/Message/clubMessage");
      },
      examine() {
        this.$router.push("/examineClub");
      },
    },
  };
  </script>