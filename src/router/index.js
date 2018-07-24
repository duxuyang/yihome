import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import regist from '@/components/regist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'regist',
      component: regist
    }
  ]
})
