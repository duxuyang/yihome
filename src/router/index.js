import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/*import regist from '@/components/regist' //注册
import login from '@/components/login' //登录
import setpass from '@/components/setpass' //设置密码
import goodslist from '@/components/goodslist' //分类
import imagelist from '@/components/imagelist' //效果图
import footer from '@/components/footer' //底部
import main from '@/components/main' //首页
import myinfo from '@/components/myinfo' //我的
import setting from '@/components/setting' //系统设置
import setuser from '@/components/setuser' //账户设置
import addrlist from '@/components/addrlist'*/

const regist = () => import('@/components/regist')
const login = () => import('@/components/login')
const setpass = () => import('@/components/setpass')
const goodslist = () => import('@/components/goodslist')
const imagelist = () => import('@/components/imagelist')
const footer = () => import('@/components/footer')
const main = () => import('@/components/main')
const myinfo = () => import('@/components/myinfo')
const setting = () => import('@/components/setting')
const addrlist = () => import('@/components/addrlist')
const setuser = () => import('@/components/setuser')
const ceshi1 = () => import('@/components/ceshi1')
const ceshi2 = () => import('@/components/ceshi2')
const ceshi3 = () => import('@/components/ceshi3')
const articlelist = () => import('@/components/articlelist')




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articlelist',
      component: articlelist,
      children:[
      	{path:'/',component:ceshi1,
		    meta: {
		      index:0,
		    }
      },
      	{path:'/ceshi2',component:ceshi2,
			    meta: {
			      index:1,
			    }
      },
      	{path:'/ceshi3',component:ceshi3,
			    meta: {
			      index:2,
			    }
      }
      ]
    }
  ]
})
