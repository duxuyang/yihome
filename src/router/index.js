import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import regist from '@/components/regist'
import login from '@/components/login'
import setpass from '@/components/setpass'
import goodslist from '@/components/goodslist'
import imagelist from '@/components/imagelist'
import footer from '@/components/footer'
import main from '@/components/main'
import myinfo from '@/components/myinfo'
import setting from '@/components/setting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'imagelist',
      component: imagelist
    }
  ]
})
