import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register'
import Login from './views/Login'
import NotFound from './views/404'
import Foot from "@/components/Foot.vue";
import Record from "@/components/Record.vue";
import RightMain from "@/components/right/RightMain.vue";
import Use from "@/components/right/Use.vue";
import ChangeUse from "@/components/right/ChangeUse.vue";
import RightMainTask from "@/components/right/RightMainTask.vue";
import Exam from "@/components/Exam.vue";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  minimum: 0.1, //    配置最低百分比
  ease: "ease", //    配置动画模式
  speed: "500", //    配置动画速度
  trickle: false, //    关闭进度条步进
  showSpinner: false //    关闭进度环
});

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'/',
          name:'foot',
          component:Foot,
          children:[
            {
              path:'/',
              name:'rightmain',
              component:RightMain
            },
            {
              path:'/foot/rightmaintask',
              name:'rightmaintask',
              component:RightMainTask
            },
            {
              path:'/foot/use',
              name:'use',
              component:Use
            },
            {
              path:'/foot/changeuse',
              name:'changeuse',
              component:ChangeUse
            },
          ]
        },
        {
          path:'record',
          name:'record',
          component:Record,
        }
      ]
    },

    {
      path:'/register',
      name:'register',
      component:Register
    },
    
    {
      path:'*',
      name:'/`404',
      component:NotFound
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/exam',
      name:'exam',
      component:Exam
    }
  ]
})
router.beforeEach((to,from,next)=>{
  NProgress.start()
  const token = localStorage.token ? true: false;
  if(to.path==='/login' || to.path==='/register'){
    next()
  }else{
    if(token){
      next()
    }else{
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
