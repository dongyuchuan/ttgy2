import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/contaiers/Home/Home'
import Cart from '../components/contaiers/Cart/Cart'
import Cart2 from '../components/contaiers/Cart/Cart2'

import Login from '../components/contaiers/Login/Login'
import Mine from '../components/contaiers/Mine/Mine'
import Classification from '../components/contaiers/Classification/Classification'
import Detail from '@/components/contaiers/Detail/Detail'
import ListTwo from '@/components/contaiers/Classification/ListTwo'




Vue.use(Router)

export default new Router({
  routes: [
    // {path:'',component:Home},//默认路由
    {path:'/',redirect:'/home'},//重定向
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/classification',
      name: 'classification',
      component: Classification,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/listtwo/:classid/:id:',
      name: 'ListTwo',
      component: ListTwo,
      meta: { navShow: false, cname: '子页面' }
    },
    {
      path: '/detail/:fid',
      name: 'Detail',
      component: Detail,
      meta: { navShow: false, cname: '子页面' }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: Cart2,
      meta: { navShow: true, cname: '一级页面' }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: { navShow: true, cname: '一级页面' }
    },
  ]
})
