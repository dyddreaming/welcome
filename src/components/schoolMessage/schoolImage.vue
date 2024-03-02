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
      校园风采列表
    </div>
    <!-- 数据部分 -->
    <div
      style="
        position: relative;
        height: 85%;
        width: 90%;
        left:5%;
        top:2%;
        background-color: #ffffff;
      "
    >
      <el-table :data="tableData" border style="width: 100%; height: 100%">
        <el-table-column
          type="selection"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="风采名称"
          width="180px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="admit"
          label="提交时间"
          width="180px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="start"
          label="开始时间"
          width="180px"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="end"
          label="结束时间"
          width="180px"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div style="display: flex; justify-content: center">
              <el-button
                type="primary"
                size="mini"
                style="background-color: #ffc300; border: none"
                @click="handleEdit(scope.row)"
                >修改</el-button
              >
              <el-button
                type="success"
                size="mini"
                style="background-color: #f89300; border: none"
                @click="handleReset(scope.row)"
                >重置</el-button
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
    <div style="position:relative;height:10%;width:90%;left:5%;top:2%;">
        <el-button
        type="primary"
        size="mini"
        style="background-color: #fa5e00; border: none;height:60%;width:8%;top:20%;position:relative;left:82%;"
        >批量删除</el-button
      >
      <el-button
        type="primary"
        size="mini"
        style="background-color: #fa5e00; border: none;height:60%;width:8%;top:20%;position:relative;left:82%;"
        >新增</el-button
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
          name: "科赛获奖",
          admit: "2024-08-28 10:16:23",
          start: "2024-08-28 10:16:23",
          end: "2024-08-28 10:16:23",
        },
        {
          name: "科赛获奖",
          admit: "2024-08-28 10:16:23",
          start: "2024-08-28 10:16:23",
          end: "2024-08-28 10:16:23",
        },
      ],
    };
  },
};
</script>