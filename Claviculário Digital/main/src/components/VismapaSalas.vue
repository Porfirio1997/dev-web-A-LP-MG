<template>
  <div>
    <h1>{{msg}}</h1>
        <div v-for="sal in salas" v-bind:key="sal['.key']">
            <div v-if="buscachave(sal.Numchave)" class="ocupada">
                {{sal.Nomesala}}
            </div>
            <div v-else class="livre">
                {{sal.Nomesala}}
            </div>
        </div>
  </div>
</template>

<script>
import { salasRef,emprestimosRef } from "../firebase.js";
export default {
  name: 'vismapaSalas',
  data () {
    return {
      msg: 'Visual salas IFCE campus aracati'
    }},
    firebase:{
    salas:salasRef,
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
        },
        modalhorariosala(obj){

        }
    }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
 width:40px;
 height:40px;
 border: 25px solid;
 border-color: #f00;
 align-content: center;
 }
 
div.livre {
 width:40px;
 height:40px;
 border: 25px solid;
 border-color: #0f0;
 align-content: center;
 }
</style>
