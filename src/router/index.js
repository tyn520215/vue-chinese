import Vue from 'vue'
import Router from 'vue-router'
import hp from '../page/homePage.vue'
import login from '../page/Login.vue'
import message from '../page/message.vue'
import publicD from '../page/public.vue'
import detail from '../page/detail.vue'
import usercenter from '../page/usercenter.vue'

Vue.use(Router);

export default new Router({
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
      component:message
    },
    {
      path:'/public',
      component:publicD
    }
    ,{
    path:'/detail/:id',
    component:detail
    }
    ,{
      path:'/usercenter/:username',
      component:usercenter
    }
  ]
})
