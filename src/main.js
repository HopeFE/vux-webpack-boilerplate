import Vue from 'vue'
import 'babel-polyfill'
import store from './store'
import VueRouter from 'vue-router'
import router from './route'
import { sync } from 'vuex-router-sync'
import VueMeta from 'vue-meta'
import FastClick from 'fastclick'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueMeta)

sync(store, router)
FastClick.attach(document.body)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
