<template>
  <div class="Chaves">
    <h1>{{ msg }}</h1>
            <form @submit.prevent="submeterchave()">
                  <div class="">
                    <label >N° da sala</label>
                    <input type="number" class="form-control" v-model="chave.Numsala" placeholder="N° da sala">
                  </div>
                  <div class="">
                    <label >Nome da Sala</label>
                    <input type="text" class="form-control" v-model="chave.Nomesala" placeholder="Nome da sala">
                  </div>
              <button type="submit" class="btn btn-primary">Entrar</button>
            </form>

      <div class="cabecalho">
        <th scope="col">  #  </th>
        <th scope="col">  N° da sala  </th>
        <th scope="col">  Nome da sala  </th>
        <th scope="col">  Editar  </th>
        <th scope="col">  Finalizar  </th>
      </div>

      <div v-for="cha in chaves" v-bind:key="cha['.key']">
          <div v-if="!cha.edit">
                  #
                  {{cha.chave.Numsala}}
                  {{cha.chave.Nomesala}}
                  <button v-on:click="seteditarchave(cha['.key'])">editar</button>
                  <button v-on:click="removerchave(cha['.key'])">excluir</button>
          </div>
          <div v-else>
                  <input type="text" v-model="cha.chave.Numsala">
                  <input type="text" v-model="cha.chave.Nomesala">
                  <button v-on:click="salvaredicao(cha)">salvar</button>
                  <button v-on:click="cancelaredicao(cha['.key'])">cancelar</button>
          </div>
      </div>

  </div>
</template>

<script>
import { chavesRef } from "../firebase.js";
export default {
  name: 'Chaves',
  data () {
    return {
      chave : {Numsala:0,Nomesala:"recepcao"},
      msg: 'Gerênciamento de chaves'
    }},
    firebase:{
    chaves:chavesRef
  },
    methods : {
        submeterchave() {
            chavesRef.push({chave:this.chave,edit:false})
            this.chave={};
        },
        removerchave(key){
            chavesRef.child(key).remove();
        },
        seteditarchave(key){
            chavesRef.child(key).update({edit:true});
        },
        cancelaredicao(key){
            chavesRef.child(key).update({edit:false});
        },
        salvaredicao(obj){
            const key=obj['.key']
            console.log(obj)
            chavesRef.child(key).update({chave:obj,edit:false});
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
.cabecalho{
  display: inline-block;
  padding: 15px;
}
</style>
