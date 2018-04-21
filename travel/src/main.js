import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'
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
