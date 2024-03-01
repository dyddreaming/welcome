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
            @click="search"
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
            prop="username"
            label="账号"
            width="140px"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="idNumber"
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
            prop="level"
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
                @click="singleDelete(scope.row.id)"
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
          @click="manageDelete"
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
import axios from "axios";
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
          value: "经管学院",
          label: "经管学院",
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
      // tableData: [
      //   {
      //     name: "张三",
      //     gender: "男",
      //     college: "无",
      //     account: "xxxxxxxx",
      //     id: "xxxxxxxxxxxxxxxxxx",
      //     phone: "xxxxxxxxxxx",
      //     grade: "校级",
      //   },
      // ],
      totalData: [],
      tableData: [],
      selectedIds: [],
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    resetValue() {
      this.college = "所有";
      this.type = "所有";
      this.loadList();
    },
    // 单个删除
    singleDelete(id) {
      this.selectedIds.push(id);
      this.manageDelete();
    },
    // 删除对象
    manageDelete() {
      console.log("选择的管理员ID值",this.selectedIds);
      if (this.selectedIds.length === 0) {
        this.$message.warning("请先选择要操作的项");
      } else {
        this.$confirm("确认删除吗？", "提示", {
          confirmButtonText: "确认",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.doDelete();
            this.selectedIds = [];
          })
          .catch(() => {});
      }
    },
    doDelete() {
      // 发送axios请求删除管理员
      const url = `${
        this.$store.getters.getIp
      }/administrators?ids=${this.selectedIds.join("&ids=")}`;
      axios
        .delete(url)
        .then((response) => {
          console.log("删除成功", response.data);
          this.$message({
            message: "删除成功",
            type: "success",
          });
          // 成功删除后刷新页面
          location.reload();
        })
        .catch((error) => {
          console.error("删除失败", error);
          this.$message.error("删除失败，请稍后重试");
        });
    },
    add() {
      this.$router.push("/addManage");
    },
    handleEdit(row) {
      this.$store.commit("setManageRow", row);
      this.$nextTick(() => {
        this.$router.push("/modifyManage");
        // console.log("前往修改界面");
      });
    },
    loadList() {
      axios
        .get(`${this.$store.getters.getIp}/administrators/page`, {
          params: {
            page: 1,
            pageSize: 7,
            ...(this.college !== "所有" && { college: this.college }),
            ...(this.type !== "所有" && {
              // 根据 this.type 的值添加不同的 level 参数
              level: this.type === "校级" ? 0 : this.type === "院级" ? 1 : null,
            }),
          },
        })
        .then((response) => {
          this.totalData = response.data.data.records;
          this.tableData = this.totalData.map((item) => {
            return {
              id: item.id,
              name: item.name,
              username: item.username,
              gender:
                item.gender === 1 ? "男" : item.gender === 0 ? "女" : "其他",
              college: item.college ? item.college : "无",
              idNumber: item.idNumber,
              phone: item.phone,
              level:
                item.level === 0 ? "校级" : item.level === 1 ? "院级" : "其他",
            };
          });
          // console.log(this.totalData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    search() {
      this.loadList();
    },
  },
};
</script>