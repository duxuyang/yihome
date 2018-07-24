import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import regist from '@/components/regist'
import login from '@/components/login'
import setpass from '@/components/setpass'
import goodslist from '@/components/goodslist'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodslist',
      component: goodslist
    }
  ]
})
