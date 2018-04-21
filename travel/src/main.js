import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
