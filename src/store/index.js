import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ip: "http://7405096a.r12.cpolar.top",
    // 学生导入信息
    importForm: {
      nameInput: "",
      idInput: "",
      typeValue: "",
      cardInput: "",
      radio: "",
      dateValue: "",
      nationInput: "",
      gradeValue: "",
      phoneInput: "",
      collegeValue: "",
      majorValue: "",
      classValue: "",
      campusValue: "",
      addressOptions: []
    },
    rowData: null,
    taskId: null,
    taskName: null,
    advertiseTime: null,
    // 管理员信息
    manageRow: null,
  },
  getters: {
    getIp(state) {
      return state.ip;
    },
    getRowData(state) {
      return state.rowData;
    },
    getImportForm(state) {
      return state.importForm;
    },
    getTaskId(state) {
      return state.taskId;
    },
    getTaskName(state) {
      return state.taskName;
    },
    getAdvertiseTime(state) {
      return state.advertiseTime;
    },
    getManageRow(state) {
      return state.manageRow;
    },
  },
  mutations: {
    setRowData(state, data) {
      state.rowData = data;
    },
    setTaskId(state, id) {
      state.taskId = id;
      // console.log("查看任务ID:",state.taskId);
    },
    setTaskName(state, name) {
      state.taskName = name;
    },
    setAdvertiseTime(state, time) {
      state.advertiseTime = time;
    },
    setManageRow(state, row) {
      state.manageRow = row;
      console.log(state.manageRow);
    },
    updateImportForm(state, formData) {
      state.importForm = { ...state.importForm, ...formData };
      // console.log("更新数据:",state.importForm);
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
