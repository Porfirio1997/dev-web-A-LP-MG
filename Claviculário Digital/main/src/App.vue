<template>
  <div id="app">
    <div>
      <label>Name:</label>
      <input type="text" v-model="nome"/>
      <button @click="submeternome()">add</button>
    </div>
          <div>
            <ul>
                <li v-for="nomepessoa in nomes" v-bind:key="nomepessoa['.key']" >
                  <div v-if="!nomepessoa.edit">
                    {{nomepessoa.name}}
                    <button v-on:click="seteditarnome(nomepessoa['.key'])">editar</button>
                    <button v-on:click="removernome(nomepessoa['.key'])">excluir</button>
                  </div>
                  <div v-else>
                      <input type="text" v-model="nomepessoa.name">
                      <button v-on:click="salvaredicao(nomepessoa)">salvar</button>
                      <button v-on:click="cancelaredicao(nomepessoa['.key'])">cancelar</button>
                  </div>
                </li>
            </ul>
          </div>


    <router-view/>
  </div>
</template>

<script>
import { namesRef } from "./firebase.js";

export default {
  name: 'App',
  data () {
    return {
      nome:'picoras'
    }
  },
  firebase:{
    nomes:namesRef
  },
  methods:{
    submeternome() {
        namesRef.push({name:this.nome,edit:false})
        this.nome="";
    },
    removernome(key){
        namesRef.child(key).remove();
    },
    seteditarnome(key){
        namesRef.child(key).update({edit:true});
    },
    cancelaredicao(key){
        namesRef.child(key).update({edit:false});
    },
    salvaredicao(person){
        const key=person['.key']
        namesRef.child(key).set({name:person.name,edit:false});
    }
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
