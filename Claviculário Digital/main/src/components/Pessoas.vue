<template>
  <div class="Pessoal">
    <h1>{{ msg }}</h1>
          <form  @submit.prevent="submeterpessoa()">
            <div class="">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="pessoa.Nome" placeholder="Nome">
            </div>
            <div class="">
                <label>N° matricula</label>
                <input type="text" class="form-control" v-model="pessoa.NumMat" placeholder="N° de Matricula">
              </div>
            <div class="">
                <label>Cargo/função</label>
                <input type="text" class="form-control" v-model="pessoa.Cargo" placeholder="Cargo/função">
              </div>
            <div class="">
              <label>Telefone</label>
              <input type="tel" class="form-control" v-model="pessoa.Telefone" placeholder="Telefone">
            </div>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>


        <div class="cabecalho">
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">N° de Matricula</th>
                <th scope="col">Cargo</th>
                <th scope="col">Telefone</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
        </div>

        <div v-for="pes in pessoas" v-bind:key="pes['.key']">
            <div v-if="!pes.edit">
                  #
                  {{pes.pessoa.Nome}}
                  {{pes.pessoa.NumMat}}
                  {{pes.pessoa.Cargo}}
                  {{pes.pessoa.Telefone}}
                  <button v-on:click="seteditarpessoa(pes['.key'])">editar</button>
                  <button v-on:click="removerpessoa(pes['.key'])">excluir</button>
            </div>
            <div v-else>
                  <input type="text" class="form-control" v-model="pes.pessoa.Nome" placeholder="Nome">
                  <input type="text" class="form-control" v-model="pes.pessoa.NumMat" placeholder="N° de Matricula">
                  <input type="text" class="form-control" v-model="pes.pessoa.Cargo" placeholder="Cargo/função">
                  <input type="tel" class="form-control" v-model="pes.pessoa.Telefone" placeholder="Telefone">
                  <button v-on:click="salvaredicao(pes)">salvar</button>
                  <button v-on:click="cancelaredicao(pes['.key'])">cancelar</button>
            </div>
        </div>
      
  </div>
</template>

<script>
import { pessoasRef } from "../firebase.js";
export default {
  name: 'Pessoal',
  data () {
    return {
      pessoa : {},
      msg: 'Gerência de pessoal'
    }
  },
  firebase:{
    pessoas:pessoasRef
  },
  methods:{
        submeterpessoa() {
            pessoasRef.push({pessoa:this.pessoa,edit:false})
            this.pessoa={};
        },
        removerpessoa(key){
            pessoasRef.child(key).remove();
        },
        seteditarpessoa(key){
            pessoasRef.child(key).update({edit:true});
        },
        cancelaredicao(key){
            pessoasRef.child(key).update({edit:false});
        },
        salvaredicao(obj){
            const key=obj['.key']
            console.log(obj)
            pessoasRef.child(key).update({chave:obj,edit:false});
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
