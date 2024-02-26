<template>
  <div class="app-main" style="position: relative">
    <div
      style="
        height: 90%;
        top: 3%;
        position: relative;
        width: 96%;
        left: 2%;
        background: #ffffff;
      "
    >
      <div
        style="
          height: 5%;
          position: relative;
          width: 100%;
          font-size: 24px;
          font-weight: 600;
        "
      >
        管理员列表
      </div>
      <div
        style="
          height: 10%;
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        "
      >
        <div
          style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >学院：</span
          >
          <el-select
            v-model="college"
            placeholder="请选择学院"
            style="width: 60%"
          >
            <el-option
              v-for="item in collegeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div
          style="
            position: relative;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
          "
        >
          <span style="position: relative; margin-right: 10px; left: 5%"
            >等级：</span
          >
          <el-select
            v-model="type"
            placeholder="请选择管理员等级"
            style="width: 60%"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div
          style="
            position: relative;
            width: 16%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <el-button
            class="search-button"
            type="danger"
            round
            style="
              background-color: #f89300;
              border-radius: 5px;
              font-size: 14px;
              padding: 5px;
              border: none;
            "
          >
            <i
              class="el-icon-search"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >搜索
          </el-button>
          <el-button
            round
            style="
              border-radius: 5px;
              border: none;
              font-size: 14px;
              padding: 5px;
              border: 1px solid #ccc;
            "
            @click="resetValue"
          >
            <i
              class="el-icon-refresh-right"
              style="margin-right: 3px; font-size: 14px"
            ></i
            >重置
          </el-button>
        </div>
      </div>
      <div style="height: 85%; width: 100%; position: relative">
        <el-table :data="tableData" border style="width: 100%; height: 100%">
          <el-table-column
            type="selection"
            width="55"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="college"
            label="学院"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="account"
            label="账号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="id"
            label="身份证号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="grade"
            label="等级"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                style="background-color: #ffc300; border: none"
                @click="handleEdit(scope.row)"
                >修改</el-button
              >
              <el-button
                type="danger"
                size="mini"
                style="background-color: #fa5e00; border: none"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div
        style="
          height: 6%;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <el-button
          type="danger"
          size="mini"
          style="background-color: #fa5e00; border: none; height: 80%"
          @click="add"
          >新增</el-button
        >
        <el-button
          type="danger"
          size="mini"
          style="
            background-color: #fa5e00;
            border: none;
            height: 80%;
            margin-left: 10px;
          "
          >批量删除</el-button
        >
      </div>
    </div>
  </div>
</template>
  
  <style>
@import "../../public/static/css/aside.css";
</style>
  
  <script>
export default {
  data() {
    return {
      dialogVisible: false,
      college: "所有",
      type: "所有",
      collegeOptions: [
        {
          value: "所有",
          label: "所有",
        },
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
          value: "经济学院",
          label: "经济学院",
        },
        {
          value: "无",
          value: "无",
        },
      ],
      typeOptions: [
        {
          value: "所有",
          label: "所有",
        },
        {
          value: "校级",
          label: "校级",
        },
        {
          value: "院级",
          label: "院级",
        },
      ],
      tableData: [
        {
          name: "张三",
          gender: "男",
          college: "无",
          account: "xxxxxxxx",
          id: "xxxxxxxxxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
          grade: "校级",
        },
      ],
    };
  },
  methods: {
    resetValue() {
      this.college = "所有";
      this.type = "所有";
    },
    add() {
      this.$router.push("/addManage");
    },
    handleEdit(row) {
      this.$store.commit("setManageRow", row);
      this.$nextTick(() => {
        this.$router.push("/modifyManage");
        console.log("前往修改界面");
      });
    },
  },
};
</script>