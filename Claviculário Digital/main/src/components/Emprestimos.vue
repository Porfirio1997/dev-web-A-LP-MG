<template>
  <div class="Emprestimo">
    <h1>{{ msg }}</h1>

          <form @submit.prevent="submeteremprestimo()">
              <label for="NumChave">N° da Chave</label>
              <input type="text" class="form-control" v-model="Numchave" placeholder="N° chave">
              <label for="ENumMatricula">N° de Matricula</label>
              <input type="text" class="form-control" v-model="NumMat" placeholder="n° Matricula">
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>        

        <div class="cabecalho">
            <th scope="col">Nome da sala</th>
            <th scope="col">Nome</th>
            <th scope="col">Horário</th>
            <th scope="col">Alterar</th>
            <th scope="col">Finalizar</th>
            <th scope="col">Contato</th>
        </div>

        <div v-for="emp in emprestimos" v-bind:key="emp['.key']">
            <div v-if="!emp.edit">
                  {{emp.CNomesala}}
                  {{emp.CNumchave}}
                  {{emp.PNumMat}}
                  {{emp.PNome}}
                  {{emp.horario}}
                  <!-- <button v-on:click="modalcontato(emp.pessoa)>Contato</button> -->
                  <button v-on:click="seteditaremprestimo(emp['.key'])">editar</button>
                  <button v-on:click="removeremprestimo(emp['.key'])">Finalizar</button>
            </div>
            <div v-else>
                  <input type="text" class="form-control" v-model="emp.CNumchave" placeholder="N° chave">
                  <input type="text" class="form-control" v-model="emp.PNumMat" placeholder="N° de Matricula">
                  <button v-on:click="salvaredicao(emp)">salvar</button>
                  <button v-on:click="cancelaredicao(emp['.key'])">cancelar</button>
            </div>
        </div>  
  
  </div>
</template>

<script>
import { chavesRef,pessoasRef,emprestimosRef } from "../firebase.js";
export default {
  name: 'Emprestimos',
  data () {
    return {
        Numchave:"",
        NumMat:"",
        pessoa:"",
        chave:"",
        msg: 'Gerência de relacionamento chave e pessoal '
    }
  },
      firebase:{
        chaves : chavesRef,
        pessoas : pessoasRef,
        emprestimos : emprestimosRef
  },
  methods:{
        buscapessoa(mat){
          for (var pes in this.pessoas) {
            if(this.pessoas[pes].NumMat === mat)
              return this.pessoas[pes]
          }
          return "pessoa não cadastrada"
        },

        buscachave(num){
          for (var cha in this.chaves) {
            if(this.chaves[cha].Numchave === num)
              return this.chaves[cha]
          }
          return "chave não cadastrada"
        },

        salvahorario(){
            var date    = new Date();
            var hora    = date.getHours();
            var min     = date.getMinutes();
            var dia     = date.getDate();
            var mes     = date.getMonth()+1;
            return ( dia + "/" + mes + " - " + hora + ":" + min)
        },
        
        submeteremprestimo() {
          var pessoab = this.buscapessoa(this.NumMat)
          var chaveb = this.buscachave(this.Numchave)
          var horab = this.salvahorario()
            if(pessoab === "pessoa não cadastrada")
              alert("pessoa não cadastrada")
            else if(chaveb === "chave não cadastrada")
              alert("chave não cadastrada")
            else{
              emprestimosRef.push({
                                    PNome:pessoab.Nome,
                                    PNumMat:pessoab.NumMat,
                                    PCargo:pessoab.Cargo,
                                    PTelefone:pessoab.Telefone,
                                    CNomesala:chaveb.Nomesala,
                                    CNumchave:chaveb.Numchave,
                                    horario:horab,
                                    edit:false})
              this.NumMat=""
              this.Numchave=""
            }
        },

        removeremprestimo(key){
            emprestimosRef.child(key).remove();
        },

        seteditaremprestimo(key){
            emprestimosRef.child(key).update({edit:true});
        },
        
        cancelaredicao(key){
            emprestimosRef.child(key).update({edit:false});
        },

        salvaredicao(obj){
            console.log(obj)
            var pessoab = this.buscapessoa(obj.PNumMat)
            var chaveb = this.buscachave(obj.CNumchave)
            const key = obj['.key']

            if(this.buscachave(obj.pessoa.PNumMat) === "pessoa não cadastrada")
              alert("pessoa não cadastrada")
            else if(this.buscachave(obj.chave.CNumchave)=== "chave não cadastrada")
              alert("chave não cadastrada")
            else{
              emprestimosRef.child(key).set({
                                            PNome:obj.PNome,
                                            PNumMat:obj.PNumMat,
                                            PCargo:obj.PCargo,
                                            PTelefone:obj.PTelefone,
                                            CNomesala:obj.CNomesala,
                                            CNumchave:obj.CNumchave,
                                            edit:false})
            }
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
