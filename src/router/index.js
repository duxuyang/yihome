import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

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
      name: 'ceshi1',
      component: ceshi1
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
    {
       path: '/ceshi2/:data1',
       component: ceshi2,
    },
    {
       path: '/ceshi3',
       component: ceshi3,
    }    
  ]
})
