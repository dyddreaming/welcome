import Vue from 'vue'
import VueRouter from 'vue-router'
import mainMenu from '../views/MainMenu.vue'
// 学生管理
import Register from '../views/StudentRegister.vue'
import Import from '../views/StudentImport.vue'
import Manage from '../views/StudentManage.vue'
import totalPrevious from '../components/registerSituation/TotalPrevious.vue'
import underPrevious from '../components/registerSituation/UnderPrevious.vue'
import graduatePrevious from '../components/registerSituation/GraduatePrevious.vue'
import collegePrevious from '../components/registerSituation/CollegePrevious.vue'
import detailInformation from '../components/studentManage/DetailInformation.vue'
import editInformation from '../components/studentManage/EditInformation.vue'
// 任务管理
import Complete from '../views/TaskComplete.vue'
import Config from '../views/TaskConfig.vue'
import Examine from '../views/TaskExamine.vue'
import collegeTask from '../components/taskComplete/CollegeTask.vue'
import taskRelease from '../components/taskConfig/TaskRelease.vue'
import taskRefine from '../components/taskConfig/TaskRefine.vue'
import taskReset from '../components/taskConfig/TaskReset.vue'
import taskInspect from '../components/taskConfig/TaskInspect.vue'
// 数据管理
import Integration from '../views/DataIntegration.vue'
import Screen from '../views/DataScreen.vue'
import registerMap from '../components/dataIntegration/registerMap.vue'
import dayTask from '../components/dataIntegration/dayTask.vue'
import advertiseClick from '../components/dataIntegration/advertiseClick.vue'
import wordSearch from '../components/dataIntegration/wordSearch.vue'
import sevenClick from '../components/dataIntegration/sevenClick.vue'
import scroll from '../views/Scroll.vue'
import studentPart from '../components/dataScreen/studentPart.vue'
import studentRank from '../components/dataScreen/studentRank.vue'
import advertisePart from '../components/dataScreen/advertisePart.vue'
import taskPart from '../components/dataScreen/taskPart.vue'
// 权限管理
import Manager from '../views/LimitManage.vue'
import College from '../views/LimitCollege.vue'
import addManage from '../components/manageLimit/addManage.vue'
import modifyManage from '../components/manageLimit/modifyManage.vue'
// 附加功能管理
import Business from '../views/AddBusiness.vue'
import Message from '../views/AddMessage.vue'
// 平台参数配置
import Plan from '../views/Config.vue'
// 帮助中心
import Help from '../views/Help.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainMenu/student/register',
  },
  {
    path: '/mainMenu',
    component: mainMenu,
    children: [
      {
        path: 'student/register',
        component: Register,
      },
      {
        path: 'student/import',
        component: Import,
      },
      {
        path: 'student/manage',
        component: Manage,
      },
      {
        path: 'task/complete',
        component: Complete
      },
      {
        path: 'task/config',
        component: Config
      },
      {
        path: 'task/examine',
        component: Examine
      },
      {
        path: 'data/integration',
        component: Integration,
        redirect: '/mainMenu/data/integration/registerMap',
        children: [
          {
            path: 'registerMap',
            component: registerMap
          },
          {
            path: 'dayTask',
            component: dayTask
          },
          {
            path: 'advertiseClick',
            component: advertiseClick
          },
          {
            path: 'wordSearch',
            component: wordSearch
          }
        ]
      },
      {
        path: 'data/screen',
        component: Screen
      },
      {
        path: 'limit/manager',
        component: Manager
      },
      {
        path: 'limit/college',
        component: College
      },
      {
        path: 'add/business',
        component: Business
      },
      {
        path: 'add/Message',
        component: Message
      },
      {
        path: 'config',
        component: Plan
      },
      {
        path: 'help',
        component: Help
      },
    ]
  },
  // 往日注册情况路径
  {
    path: '/totalPrevious',
    component: totalPrevious,
  },
  {
    path: '/underPrevious',
    component: underPrevious,
  },
  {
    path: '/graduatePrevious',
    component: graduatePrevious,
  },
  {
    path: '/collegePrevious',
    component: collegePrevious,
  },
  // 学生信息管理路径
  {
    path: '/detailInformation',
    component: detailInformation,
  },
  {
    path: '/editInformation',
    component: editInformation,
  },
  // 任务完成情况路径
  {
    path: '/collegeTask',
    component: collegeTask,
  },
  // 学生任务设置路径
  {
    path: '/taskRelease',
    component: taskRelease,
  },
  {
    path: '/taskRefine',
    component: taskRefine
  },
  {
    path: '/taskReset',
    component: taskReset
  },
  // 手动任务审核路径
  {
    path: '/taskInspect',
    component: taskInspect
  },
  // 数据大屏路径
  {
    path: '/sevenClick',
    component: sevenClick
  },
  {
    path:'/dataScroll',
    component:scroll,
  },
  {
    path:'/studentPart',
    component:studentPart
  },
  {
    path:'/studentRank',
    component:studentRank
  },
  {
    path:'/advertisePart',
    component:advertisePart
  },
  {
    path:'/taskPart',
    component:taskPart
  },
  // 权限管理路径
  {
    path:'/addManage',
    component:addManage
  },
  {
    path:'/modifyManage',
    component:modifyManage
  }
]

const router = new VueRouter({
  routes
})

export default router
