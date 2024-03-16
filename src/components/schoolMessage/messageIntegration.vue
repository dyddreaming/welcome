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
          v-model="searchWord"
          placeholder="搜索"
          id="searchPart"
        ></el-input>
      </div>
      <router-link
        to="/mainMenu/help/helpFile"
        style="
          color: inherit;
          text-decoration: none;
          margin-right: 20px;
          margin-left: auto;
          color: #ffffff;
        "
      >
        <span style="transition: color 0.3s" class="hover-color"
          >需要帮助吗？<span style="color: #209e91">点击这里</span></span
        >
      </router-link>
      <i
        class="el-icon-s-home"
        style="color: #ffff; margin-right: 10px; font-size: 24px"
      ></i>
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
        校园资讯管理
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
            >校园资讯管理</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div style="position: relative; height: 260%; width: 96%; left: 2%">
      <!-- 社团资讯 -->
      <div
        style="
          position: relative;
          height: 33%;
          width: 100%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        "
      >
        <div
          style="
            position: relative;
            height: 5%;
            width: 98%;
            left: 1%;
            align-items: center;
            display: flex;
            justify-content: center;
            color: #747474;
            font-size: 18px;
          "
        >
          社团资讯列表
        </div>
        <div
          style="position: relative; height: 86%; top: 1%; width: 98%; left: 1%;overflow-y:auto;"
        >
          <el-table :data="tableData" border style="color: #747474">
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
                  <el-button
                    type="primary"
                    size="small"
                    :style="{
                      backgroundColor:
                        scope.row.status === '正常投放' ? '#cccccc' : '#e85656',
                      border: 'none',
                    }"
                    >投放</el-button
                  >
                  <el-button
                    type="primary"
                    style="background-color: #e85656; border: #e85656"
                    size="small"
                    :style="{
                      backgroundColor:
                        scope.row.status === '暂停投放' ? '#cccccc' : '#e85656',
                      border: 'none',
                    }"
                    >暂停投放</el-button
                  >
                  <el-button
                    type="primary"
                    style="background-color: #209e91; border: #209e91"
                    size="small"
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
            height: 5%;
            width: 98%;
            top: 2%;
            display: flex;
            left: 1%;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <el-button
            type="primary"
            style="background-color: #209e91; border: #209e91"
            size="small"
            >费用设置</el-button
          >
          <el-button
            type="primary"
            style="background-color: #dfb81c; border: #dfb81c"
            size="small"
            >待审核列表</el-button
          >
        </div>
      </div>
      <!-- 校园风采+跳蚤市场 -->
      <div style="position: relative; height: 33%; width: 100%; display: flex">
        <div style="position: relative; height: 100%; width: 49%">
          <div
            style="
              position: relative;
              height: 96%;
              top: 2%;
              width: 100%;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            "
          >
            <div
              style="
                position: relative;
                height: 5%;
                width: 98%;
                left: 1%;
                align-items: center;
                display: flex;
                justify-content: center;
                color: #747474;
                font-size: 18px;
              "
            >
              校园风采
            </div>
            <div
              style="
                position: relative;
                height: 86%;
                top: 1%;
                width: 98%;
                left: 1%;
                background-color: #209e91;
                overflow-y:auto;
              "
            >
              <el-table
                :data="tableData1"
                border
                style="width: 100%; height: 100%"
              >
                <el-table-column
                  type="selection"
                  width="40"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="name"
                  label="风采名称"
                  width="80px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="admit"
                  label="提交时间"
                  width="100px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="start"
                  label="开始时间"
                  width="100px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="end"
                  label="结束时间"
                  width="100px"
                  align="center"
                ></el-table-column>
                <el-table-column label="操作" align="center" width="173px">
                  <template slot-scope="scope">
                    <div style="display: flex; justify-content: center">
                      <el-button
                        type="primary"
                        style="background-color: #209e91; border: #209e91"
                        size="small"
                        @click="handleEdit(scope.row)"
                        >修改</el-button
                      >
                      <el-button
                        type="primary"
                        style="background-color: #dfb81c; border: #dfb81c"
                        size="small"
                        @click="handleReset(scope.row)"
                        >重置</el-button
                      >
                      <el-button
                        type="primary"
                        style="background-color: #e85656; border: #e85656"
                        size="small"
                        @click="handleDelete(scope.row)"
                        >删除</el-button
                      >
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div
              style="
                position: relative;
                height: 5%;
                width: 98%;
                top: 2%;
                display: flex;
                left: 1%;
                justify-content: flex-end;
                align-items: center;
              "
            >
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                >新增</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                >批量删除</el-button
              >
            </div>
          </div>
        </div>
        <div style="position: relative; height: 100%; width: 49%; left: 2%">
          <div
            style="
              position: relative;
              height: 96%;
              top: 2%;
              width: 100%;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            "
          >
            <div
              style="
                position: relative;
                height: 5%;
                width: 98%;
                left: 1%;
                align-items: center;
                display: flex;
                justify-content: center;
                color: #747474;
                font-size: 18px;
              "
            >
              跳蚤市场
            </div>
            <div
              style="
                position: relative;
                height: 86%;
                top: 1%;
                width: 98%;
                left: 1%;
                overflow-y:auto;
              "
            >
              <el-table
                :data="tableData3"
                border
                style="width: 100%; height: 100%"
              >
                <el-table-column
                  type="selection"
                  width="40"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="name"
                  label="商品名称"
                  width="80px"
                  align="center"
                ></el-table-column>
                <!-- <el-table-column
                prop="sName"
                label="卖家姓名"
                width="80px"
                align="center"
              ></el-table-column> -->
                <el-table-column
                  prop="sID"
                  label="卖家学号"
                  width="105px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="admit"
                  label="提交时间"
                  width="110px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="type"
                  label="商品类型"
                  width="80px"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="out"
                  label="是否成交"
                  width="80px"
                  align="center"
                ></el-table-column>
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <div style="display: flex; justify-content: center">
                      <el-button
                        type="primary"
                        style="background-color: #209e91; border: #209e91"
                        size="small"
                        @click="handleSee(scope.row)"
                        >查看</el-button
                      >
                      <el-button
                        type="primary"
                        style="background-color: #e85656; border: #e85656"
                        size="small"
                        @click="handleDelete(scope.row)"
                        >删除</el-button
                      >
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div
              style="
                position: relative;
                height: 5%;
                width: 98%;
                top: 2%;
                display: flex;
                left: 1%;
                justify-content: flex-end;
                align-items: center;
              "
            >
              <el-button
                type="primary"
                style="background-color: #209e91; border: #209e91"
                size="small"
                >新增</el-button
              >
              <el-button
                type="primary"
                style="background-color: #e85656; border: #e85656"
                size="small"
                >批量删除</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 学校论坛 -->
      <div
        style="
          position: relative;
          height: 22%;
          width: 100%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        "
      >
        <div
          style="
            position: relative;
            height: 5%;
            width: 98%;
            left: 1%;
            align-items: center;
            display: flex;
            justify-content: center;
            color: #747474;
            font-size: 18px;
          "
        >
          学校论坛列表
        </div>
        <div
          style="position: relative; height: 86%; top: 1%; width: 98%; left: 1%;overflow-y:auto;"
        >
          <el-table :data="tableData4" border style="width: 100%; height: 100%">
            <el-table-column
              type="selection"
              width="80"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="论坛名称"
              width="130px"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="type"
              label="论坛类型"
              width="130px"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="inName"
              label="发布人昵称"
              width="130px"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="outName"
              label="发布人姓名"
              width="130px"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="ID"
              label="发布人学号"
              width="130px"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="admit"
              label="提交时间"
              width="180px"
              align="center"
            ></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <div style="display: flex; justify-content: center">
                  <el-button
                    type="primary"
                    style="background-color: #209e91; border: #209e91"
                    size="small"
                    @click="handleSee(scope.row)"
                    >查看</el-button
                  >
                  <el-button
                    type="primary"
                    style="background-color: #e85656; border: #e85656"
                    size="small"
                    @click="handleDelete(scope.row)"
                    >删除</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div
          style="
            position: relative;
            height: 5%;
            width: 98%;
            top: 2%;
            display: flex;
            left: 1%;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <el-button
            type="primary"
            style="background-color: #e85656; border: #e85656"
            size="small"
            >批量删除</el-button
          >
        </div>
      </div>
      <!-- 学生留言 -->
      <div
        style="
        top:1%;
          position: relative;
          height: 10%;
          width: 100%;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        "
      >
      <div
          style="
            position: relative;
            height: 10%;
            width: 98%;
            left: 1%;
            align-items: center;
            display: flex;
            justify-content: center;
            color: #747474;
            font-size: 18px;
          "
        >
          学生留言
        </div>
         <div
          style="position: relative; height: 86%; top: 1%; width: 98%; left: 1%;background-color:#209e91;overflow-y:auto;"
        >
        <el-table :data="tableData16" border style="width: 100%; height: 100%">
          <el-table-column
            prop="inName"
            label="留言者昵称"
            width="130px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="admit"
            label="留言时间"
            width="180px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="content"
            label="留言内容"
            align="center"
          ></el-table-column>
        </el-table>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../../public/static/css/aside.css";

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
      searchWord: "",
      tableData1: [
        {
          name: "科赛获奖",
          admit: "2024-02-28 10:16:23",
          start: "2024-03-28 10:16:23",
          end: "2024-08-28 10:16:23",
        },
        {
          name: "新增院士",
          admit: "2024-02-28 10:16:23",
          start: "2024-03-25 10:16:23",
          end: "2024-08-28 10:16:23",
        },
        {
          name: "校园风景",
          admit: "2024-02-28 10:16:23",
          start: "2024-03-25 10:16:23",
          end: "2024-08-28 10:16:23",
        },
        {
          name: "活动特色",
          admit: "2024-02-28 10:16:23",
          start: "2024-03-25 10:16:23",
          end: "2024-08-28 10:16:23",
        },
      ],
      tableData: [
        {
          clubName: "广播社",
          title: "广播社招新啦",
          type: "招新",
          connectName: "颜茗希",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "3天",
          charge: "200",
          status: "正常投放",
        },
        {
          clubName: "动漫社",
          title: "紫罗兰永恒花园主题活动",
          type: "活动",
          connectName: "元韵真",
          admitTime: "2024-02-28 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "6天",
          charge: "500",
          status: "暂停投放",
        },
        {
          clubName: "宣传部",
          title: "宣传部等你来",
          type: "招新",
          connectName: "钱瑶风",
          admitTime: "2024-03-01 10:16:23",
          setTime: "2024-03-28 10:16:23",
          setLong: "5天",
          charge: "300",
          status: "正常投放",
        },
        {
          clubName: "摄影部",
          title: "摄影部等加入",
          type: "招新",
          connectName: "宋漩泽",
          admitTime: "2024-03-01 10:16:23",
          setTime: "2024-03-20 10:16:23",
          setLong: "4天",
          charge: "200",
          status: "正常投放",
        },
      ],
      tableData3: [
        {
          name: "衣架",
          sName: "宋漩泽",
          sID: "2021110004",
          admit: "2024-02-28 10:16:23",
          type: "日用品",
          out: "是",
        },
        {
          name: "水壶",
          sName: "莫琛泓",
          sID: "2021110007",
          admit: "2024-02-28 10:16:23",
          type: "日用品",
          out: "是",
        },
        {
          name: "六级词典",
          sName: "莫琛泓",
          sID: "2021110006",
          admit: "2024-02-28 10:16:23",
          type: "学习用品",
          out: "否",
        },
        {
          name: "四级听力",
          sName: "莫琛泓",
          sID: "2021110016",
          admit: "2024-02-28 10:16:23",
          type: "学习用品",
          out: "否",
        },
        {
          name: "垃圾袋",
          sName: "莫琛泓",
          sID: "2021110116",
          admit: "2024-02-28 10:16:23",
          type: "生活用品",
          out: "是",
        },
      ],
      tableData4: [
          {
            name: "六级学习",
            type: "学习",
            inName: "谢谢小星星",
            outName:"杨瑛竹",
            ID: "2021110018",
            admit: "2024-02-28 10:16:23",
          },
          {
            name: "四级听力",
            type: "学习",
            inName: "星空漫步者",
            outName:"张三",
            ID: "2021110020",
            admit: "2024-02-28 10:16:23",
          },
          {
            name: "第二次选课",
            type: "学习",
            inName: "温柔的风",
            outName:"计朗倩",
            ID: "2021110027",
            admit: "2024-02-28 10:16:23",
          },
        ],
        tableData16:[
          {
            inName:"蓝育瑶",
            admit:"2023-03-11 12:34:56",
            content:"图片上传较慢",
          }, 
          {
            inName:"计朗倩",
            admit:"2023-03-21 11:30:16",
            content:"处理较慢，影响体验感",
          },        
        ],
    };
  },
};
</script>