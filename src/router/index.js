import Vue from 'vue'
import Router from 'vue-router'
import hp from '../page/homePage.vue'
import login from '../page/Login.vue'
import message from '../page/message.vue'
import publicD from '../page/public.vue'
import detail from '../page/detail.vue'
import usercenter from '../page/usercenter.vue'
import  read from '../page/read.vue'
import  not_read from '../page/not_read.vue'

Vue.use(Router);




const router = new Router({
  routes: [
    {
      path: '/',
      component: hp,
    },
    {
      path: '/home',
      component: hp,
    },
    {
      path:'/login',
      component:login,
      beforeEach(){

      }
    },
    {
      path:'/message',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:message
    },
    {
      path:'/public',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:publicD
    }
    ,{
    path:'/detail/:id',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    component:detail
    }
    ,{
      path:'/usercenter/:username',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:usercenter
    }
    ,{
      path:'/read',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:read
    }
    ,{
      path:'/not_read',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component:not_read
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    let  accessToken = sessionStorage.getItem('accessToken');
    if(accessToken){
        next()
    }else{
        next('/login')
    }

  }else {
    next()
  }
});


export default router
