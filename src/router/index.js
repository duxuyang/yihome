import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


const regist = r => require.ensure([], () => r(require('../components/regist.vue')))
const login = r => require.ensure([], () => r(require('../components/login.vue')))
const setpass = r => require.ensure([], () => r(require('../components/setpass.vue')))
const goodslist = r => require.ensure([], () => r(require('../components/goodslist.vue')))
const main = r => require.ensure([], () => r(require('../components/main.vue')))
const myinfo = r => require.ensure([], () => r(require('../components/myinfo.vue')))
const setting = r => require.ensure([], () => r(require('../components/setting.vue')))
const addrlist = r => require.ensure([], () => r(require('../components/addrlist.vue')))
const setuser = r => require.ensure([], () => r(require('../components/setuser.vue')))
const articlelist = r => require.ensure([], () => r(require('../components/articlelist.vue')))


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: main
      // children:[
      // 	{path:'/',component:ceshi1,
      // meta: {
      //   index:0,
      // }
      // },
      // 	{path:'/ceshi2',component:ceshi2,
      //  meta: {
      //    index:1,
      //  }
      // },
      // 	{path:'/ceshi3',component:ceshi3,
      //  meta: {
      //    index:2,
      //  }
      // }
      // ]
    },

  ]
})