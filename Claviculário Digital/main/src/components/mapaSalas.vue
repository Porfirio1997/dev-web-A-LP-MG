<template>
  <div>
    <h1>{{ msg }}</h1>
          <form @submit.prevent="submetersala()">
              <label>numero da chave</label>
              <input type="text" class="form-control" v-model="Numchave" placeholder="N° da chave">
              <label>nome da sala</label>
              <input type="text" class="form-control" v-model="Nomesala" placeholder="Nome da sala">
              <label>posição X</label>
              <input type="text" class="form-control" v-model="posX" placeholder="posição X">
              <label>posição Y</label>
              <input type="text" class="form-control" v-model="posY" placeholder="posição Y">
              <label>largura da sala</label>
              <input type="text" class="form-control" v-model="largura" placeholder="largura da sala">
              <label>comprimento da sala</label>
              <input type="text" class="form-control" v-model="comprimento" placeholder="comprimento da sala">
              <label>angulo da sala</label>
              <input type="text" class="form-control" v-model="angulo" placeholder="angulação da sala">
            <button type="submit" class="btn btn-primary">Entrar</button>
          </form>        

        <div class="cabecalho">
            <th scope="col">N° da chave</th>
            <th scope="col">Nome da sala</th>
            <th scope="col">posição X</th>
            <th scope="col">posição Y</th>
            <th scope="col">largura</th>
            <th scope="col">comprimento</th>
            <th scope="col">angulo</th>
            <th scope="col">editar</th>
            <th scope="col">Finalizar</th>
        </div>

        <div v-for="sal in salas" v-bind:key="sal['.key']">
            <div v-if="!sal.edit">
                  #
                  {{sal.Numchave}}
                  {{sal.Nomesala}}
                  {{sal.posX}}
                  {{sal.posY}}
                  {{sal.largura}}
                  {{sal.comprimento}}
                  {{sal.angulo}}
                  <button v-on:click="seteditarsala(sal['.key'])">editar</button>
                  <button v-on:click="removersala(sal['.key'])">Finalizar</button>
            </div>
            <div v-else>
                  {{sal.Numchave}}
                  {{sal.Nomesala}}
                  <input type="text" class="form-control" v-model="sal.posX" placeholder="posição X">
                  <input type="text" class="form-control" v-model="sal.posY" placeholder="posição Y">
                  <input type="text" class="form-control" v-model="sal.largura" placeholder="largura da sala">
                  <input type="text" class="form-control" v-model="sal.comprimento" placeholder="comprimento da sala">
                  <input type="text" class="form-control" v-model="sal.angulo" placeholder="angulação da sala">
                  <button v-on:click="salvaredicao(sal)">salvar</button>
                  <button v-on:click="cancelaredicao(sal['.key'])">cancelar</button>
            </div>
        </div>


  </div>
</template>

<script>

import { salasRef } from "../firebase.js";

export default {
  name: 'MapaSalas',
    data ()  {
      return {
        Numchave:"",
        Nomesala:"",
        posX:"",
        posY:"",
        largura:"",
        comprimento:"",
        angulo:"",
        msg: 'mapa do campus '
    }},
      firebase:{
        salas:salasRef
  },
  methods:{
        submetersala() {
              salasRef.push({
                Numchave:this.Numchave,
                Nomesala:this.Nomesala,
                posX:this.posX,
                posY:this.posY,
                largura:this.largura,
                comprimento:this.comprimento,
                angulo:this.angulo,
                edit:false})

              this.Numchave=""
              this.Nomesala=""
              this.posX=""
              this.posY=""
              this.largura=""
              this.comprimento=""
              this.angulo=""
        },

        removersala(key){
            salasRef.child(key).remove();
        },

        seteditarsala(key){
            salasRef.child(key).update({edit:true});
        },
        
        cancelaredicao(key){
            salasRef.child(key).update({edit:false});
        },

        salvaredicao(obj){
            const key=obj['.key']
          
            salasRef.child(key).set({ 
                Numchave:obj.Numchave,
                Nomesala:obj.Nomesala,
                posX:obj.posX,
                posY:obj.posY,
                largura:obj.largura,
                comprimento:obj.comprimento,
                angulo:obj.angulo,
                edit:false})
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
</style>


