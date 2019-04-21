import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Pessoal from '@/components/Pessoas'
import Chaves from '@/components/Chaves'
import Emprestimos from '@/components/Emprestimos'
import mapaSalas from '@/components/mapaSalas.vue'
import vismapaSalas from '@/components/VismapaSalas'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: vismapaSalas
    },
    {
      path: '/chaves',
      component: Chaves
    },
    {
      path: '/pessoas',
      component: Pessoal
    },
    {
      path: '/emprestimos',
      component: Emprestimos
    },
     {
       path: '/login',
       component: Login
     }
    // {
    //    path: '/mapasala',
    //    component: mapaSalas
    // }, 
  ]
})
