<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Pessoas from '@/components/Pessoas'
import Chaves from '@/components/Chaves'
import Emprestimos from '@/components/Emprestimos'
import mapaSalas from '@/components/mapaSalas.vue'
import vismapaSalas from '@/components/VismapaSalas.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components:{
    'Pessoas':Pessoas,
    'Chaves':Chaves,
    'Emprestimos':Emprestimos,
    'mapaSalas':mapaSalas,
    'vismapaSalas':vismapaSalas
  }
}
</script>

<style>
#app {
  font-family:Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
