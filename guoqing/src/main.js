// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./assets/css/reset.css"
import "./assets/css/animate.css"
import "./assets/css/public.css"

// 公共组件和公共过滤器，其他应该类似
import trantime from "./components/public_filter/trantime"

Vue.filter('trantime',trantime)




Vue.prototype.Event = new Vue()
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  components: {
    App
  },
  
  template: '<App/>'
})
