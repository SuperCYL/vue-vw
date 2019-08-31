import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Recommend from '@/components/recommend'
import HighGoods from '@/components/highGoods'
import StunnerClub from '@/components/stunnerClub'
import Signing from '@/components/signing'
import My from '@/components/my'
import Img from '@/components/img'
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
      },
      {
        path: "/stunnerClub",
        name: "StunnerClub",
        component: StunnerClub,
      },
      {
        path: "/signing",
        name: "Signing",
        component: Signing,
      },
      {
        path: "/my",
        name: "My",
        component: My,
      }
      ]
    },
    {
      path: '/img',
      name: 'Img',
      component: Img,
    }
  ]
})
