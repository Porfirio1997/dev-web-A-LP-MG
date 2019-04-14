<template>
  <div>
    <h1>{{msg}}</h1>
    <!--<div class="mapa">
          <div v-for="sal in salas" v-bind:key="sal['.key']">
            <div v-if="buscachave(sal.Numchave)" class="ocupada">
                {{sal.Nomesala}}
            </div>
            <div v-else class="livre">
                {{sal.Nomesala}}
            </div>
          </div>
        </div> -->
        <div class="mapa">
          <div v-for="cha in chaves" v-bind:key="cha['.key']">
              <!-- <div v-if="buscachave(cha.Numchave)" class="ocupada" @click="horario(cha)> -->
              <div v-if="buscachave(cha.Numchave)" class="ocupada">
                  {{cha.Numchave}} 
                  {{cha.Nomesala}}
              </div>
              <!-- <div v-else class="livre" @click="horario(cha)> -->
              <div v-else class="livre" >
                  {{cha.Numchave}} 
                  {{cha.Nomesala}}
              </div>
          </div>
        </div>
  </div>
</template>

<script>
import { chavesRef,salasRef,emprestimosRef } from "../firebase.js";
export default {
  name: 'vismapaSalas',
  data () {
    return {
      msg: 'Visual salas IFCE campus aracati'
    }},
    firebase:{
    salas:salasRef,
    chaves:chavesRef,
    emprestimos:emprestimosRef
  },
    methods : {
        buscachave(num){
          for (var emp in this.emprestimos) {
              console.log(emp)
            if(this.emprestimos[emp].CNumchave === num)
              return true
          }
          return false
        }
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  display:flex
  }

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

div.ocupada {
  width: 60px;
  height: 60px;
  border: 2px solid black ;
  margin: 2px;
  background: #ff4040;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
 }
 

div.livre {
  width: 60px;
  height: 60px;
  border: 2px solid black ;
  margin: 2px;
  background: #84fa84 ;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
 }

 div.mapa{
   display: inline-flex;
 }
</style>
