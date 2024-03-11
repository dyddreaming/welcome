import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
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
import studentIntegration from '@/components/registerSituation/Integration.vue'
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
import dataDefineIntegration from '../components/dataIntegration/defineIntegration.vue'
// 权限管理
import Manager from '../views/LimitManage.vue'
import College from '../views/LimitCollege.vue'
import addManage from '../components/manageLimit/addManage.vue'
import modifyManage from '../components/manageLimit/modifyManage.vue'
// 附加功能管理
import Business from '../views/AddBusiness.vue'
import Message from '../views/AddMessage.vue'
import noPass from '../components/businessManage/noPass.vue'
import foodDetail from '../components/businessManage/foodDetail.vue'
import workDetail from '../components/businessManage/workDetail.vue'
import search from '../components/businessManage/search.vue'
import partTime from '../components/businessManage/partTime.vue'
import examinePart from '../components/businessManage/examinePart.vue'
import examineFood from '../components/businessManage/examineFood.vue'
import clubMessage from '../components/schoolMessage/clubMessage.vue'
import market from '../components/schoolMessage/market.vue'
import schoolImage from '../components/schoolMessage/schoolImage.vue'
import schoolChat from '../components/schoolMessage/schoolChat.vue'
import studentMessage from '../components/schoolMessage/studentMessage.vue'
import clubExamine from '../components/schoolMessage/clubExamine.vue'
import examineClub from '../components/schoolMessage/examineClub.vue'
import advertiseSet from '@/components/businessManage/advertiseSet.vue'
import messageIntegration from '@/components/schoolMessage/messageIntegration.vue'
// 摄像头管理
import video from '../views/video.vue'
import position1 from '@/components/videoShow/position1.vue'
import position2 from '@/components/videoShow/position2.vue'
import position3 from '@/components/videoShow/position3.vue'
import position4 from '@/components/videoShow/position4.vue'
import position5 from '@/components/videoShow/position5.vue'
// 平台参数配置
import Plan from '../views/Config.vue'
import safety from '../components/configSet/safety.vue'
import messageNote from '../components/configSet/messageNote.vue'
import dataCopy from '../components/configSet/dataCopy.vue'
import versionSelect from '../components/configSet/versionSelect.vue'
// 帮助中心
import Help from '../views/Help.vue'
import helpFile from '../components/helpShow/helpFile.vue'
import questionAnswer from '../components/helpShow/questionAnswer.vue'
import technology from '../components/helpShow/technology.vue'
import feedback from '../components/helpShow/feedback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: login
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
        path: 'student/integration',
        component: studentIntegration,
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
        path: 'student/detailInformation',
        component: detailInformation,
      },
      {
        path: 'student/editInformation',
        component: editInformation,
      },
      {
        path: 'task/complete',
        component: Complete
      },
      {
        path: 'task/collegeTask',
        component: collegeTask,
      },
      {
        path: 'task/taskReset',
        component: taskReset
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
        path: 'task/taskInspect',
        component: taskInspect
      },
      // {
      //   path: 'data/integration',
      //   component: Integration,
      //   redirect: '/mainMenu/data/integration/registerMap',
      //   children: [
      //     {
      //       path: 'registerMap',
      //       component: registerMap
      //     },
      //     {
      //       path: 'dayTask',
      //       component: dayTask
      //     },
      //     {
      //       path: 'advertiseClick',
      //       component: advertiseClick
      //     },
      //     {
      //       path: 'wordSearch',
      //       component: wordSearch
      //     }
      //   ]
      // },
      {
        path: 'data/screen',
        component: Screen
      },
      {
        path: 'data/defineIntegration',
        component: dataDefineIntegration
      },
      {
        path: 'limit/manager',
        component: Manager
      },
      {
        path: 'limit/modifyManage',
        component: modifyManage
      },
      {
        path: 'limit/addManage',
        component: addManage
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
        path: 'add/advertiseSet',
        component: advertiseSet
      },
      {
        path: 'add/noPass',
        component: noPass
      },
      {
        path: 'add/Message',
        component: Message,
        redirect: '/mainMenu/add/Message/clubMessage',
        children: [
          {
            path: 'clubMessage',
            component: clubMessage
          },
          {
            path: 'schoolImage',
            component: schoolImage
          },
          {
            path: 'market',
            component: market
          },
          {
            path: 'schoolChat',
            component: schoolChat
          },
          {
            path: 'studentMessage',
            component: studentMessage
          },
        ]
      },
      {
        path:'add/messageIntegration',
        component:messageIntegration
      },
      {
        path: "video",
        component: video,
        redirect: '/mainMenu/video/position1',
        children: [
          {
            path: 'position1',
            component: position1
          },
          {
            path: 'position2',
            component: position2
          },
          {
            path: 'position3',
            component: position3
          },
          {
            path: 'position4',
            component: position4
          },
          {
            path: 'position5',
            component: position5
          },

        ]
      },
      {
        path: 'config',
        component: Plan,
        redirect: '/mainMenu/config/safety',
        children: [
          {
            path: 'safety',
            component: safety
          },
          {
            path: 'messageNote',
            component: messageNote
          },
          {
            path: 'dataCopy',
            component: dataCopy
          },
          {
            path: 'versionSelect',
            component: versionSelect
          },
        ],
      },
      {
        path: 'help',
        component: Help,
        redirect: "/mainMenu/help/helpFile",
        children: [
          {
            path: "helpFile",
            component: helpFile,
          },
          {
            path: "questionAnswer",
            component: questionAnswer,
          },
          {
            path: "technology",
            component: technology,
          },
          {
            path: "feedback",
            component: feedback,
          },
        ]
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
  // 任务完成情况路径
  // 学生任务设置路径
  {
    path: '/taskRelease',
    component: taskRelease,
  },
  {
    path: '/taskRefine',
    component: taskRefine
  },
  // 手动任务审核路径
  // 数据大屏路径
  {
    path: '/sevenClick',
    component: sevenClick
  },
  {
    path: '/dataScroll',
    component: scroll,
  },
  {
    path: '/studentPart',
    component: studentPart
  },
  {
    path: '/studentRank',
    component: studentRank
  },
  {
    path: '/advertisePart',
    component: advertisePart
  },
  {
    path: '/taskPart',
    component: taskPart
  },
  // 权限管理路径
  // 附加功能管理路径
  {
    path: '/foodDetail',
    component: foodDetail
  },
  {
    path: '/workDetail',
    component: workDetail
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/partTime',
    component: partTime
  },
  {
    path: '/examinePart',
    component: examinePart
  },
  {
    path: '/examineFood',
    component: examineFood
  },
  {
    path: '/clubExamine',
    component: clubExamine
  },
  {
    path: '/examineClub',
    component: examineClub
  },
]

const router = new VueRouter({
  routes
})

export default router
