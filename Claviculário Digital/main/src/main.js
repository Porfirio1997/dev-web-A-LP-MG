// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import NavTopBar from '@/components/nav-top-bar'

Vue.config.productionTip = false

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#nav-top-bar',
  router,
  components: { NavTopBar },
  template: '<NavTopBar/>'
})