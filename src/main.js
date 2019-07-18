import Vue from 'vue'
import App from './App.vue'

//导入路由（记得先安装）
import VueRouter from 'vue-router'
//Vue.use()安装vue插件
Vue.use(VueRouter)

//导入配置好的路由router路径   
import router from  './js/router.js'

//引入Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//安装MintUI插件
Vue.use(MintUI)

//导入Jquery
//import $ from 'jquery'

//清样式
import './assets/css/base.css'

import 'font-awesome/css/font-awesome.css'

//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  //渲染router
  router,
  render: h => h(App)
})


