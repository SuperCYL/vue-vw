import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Recommend from '@/components/recommend'
import HighGoods from '@/components/highGoods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path: "/recommend",
        name: "Recommend",
        component: Recommend,
      },
      {
        path: "/highGoods",
        name: "HighGoods",
        component: HighGoods,
      }
      ]
    }
  ]
})
