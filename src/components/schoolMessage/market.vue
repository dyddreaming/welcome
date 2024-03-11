<template>
  <div class="app-main" style="position: relative">
    <!-- 标题部分 -->
    <div
      style="
        height: 5%;
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 20px;
      "
    >
      跳蚤市场列表
    </div>
    <!-- 数据部分 -->
    <div
      style="
        position: relative;
        height: 85%;
        width: 90%;
        left: 5%;
        top: 2%;
        background-color: #ffffff;
      "
    >
      <el-table :data="tableData3" border style="width: 100%; height: 100%">
        <el-table-column
          type="selection"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="商品名称"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sName"
          label="卖家姓名"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="sID"
          label="卖家学号"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="admit"
          label="提交时间"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="type"
          label="商品类型"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="out"
          label="是否成交"
          width="130px"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div style="display: flex; justify-content: center">
              <el-button
                type="primary"
                size="mini"
                style="background-color: #ffc300; border: none"
                @click="handleSee(scope.row)"
                >查看</el-button
              >
              <el-button
                type="danger"
                size="mini"
                style="background-color: #fa5e00; border: none"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 操作部分 -->
    <div style="position: relative; height: 10%; width: 90%; left: 5%; top: 2%">
      <el-button
        type="primary"
        size="mini"
        style="
          background-color: #fa5e00;
          border: none;
          height: 60%;
          width: 8%;
          top: 20%;
          position: relative;
          left: 90%;
        "
        >批量删除</el-button
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
      tableData3: [
        {
          name: "衣架",
          sName: "张三",
          sID: "2021111111",
          admit: "2024-08-28 10:16:23",
          type: "日用品",
          out: "是",
        },
        {
          name: "衣架",
          sName: "张三",
          sID: "2021111111",
          admit: "2024-08-28 10:16:23",
          type: "日用品",
          out: "是",
        },
      ],
    };
  },
};
</script>