import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Pessoal from '@/components/Pessoas'
import Chaves from '@/components/Chaves'
import Emprestimos from '@/components/Emprestimos'
import mapaSalas from '@/components/mapaSalas.vue'
import vismapaSalas from '@/components/VismapaSalas.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
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
    // {
    //    path: '/mapasala',
    //    component: mapaSalas
    // }, 
    {
      path: '/vismapasala',
      component: vismapaSalas
    }
  ]
})
