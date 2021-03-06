// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios;

// 引入全部组件
import Mint from 'mint-ui';
import'mint-ui/lib/style.css'

//字体图标
import '../static/iconfont/iconfont.css'
import '../static/iconfont/iconfont.js'
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})