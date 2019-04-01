// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NavTopBar from './components/nav-top-bar'
import Pessoal from './components/Pessoas'
import Chaves from './components/Chaves'
import Emprestimos from './components/Emprestimos'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#nav-top-bar',
  router,
  components: { NavTopBar },
  template: '<NavTopBar/>'
})

new Vue({
  el: '#pessoal',
  router,
  components: { Pessoal },
  template: '<Pessoal/>'
})

new Vue({
  el: '#chaves',
  router,
  components: { Chaves },
  template: '<Chaves/>'
})

new Vue({
  el: '#emprestimos',
  router,
  components: { Emprestimos },
  template: '<Emprestimos/>'
})