<template>
  <div class="Emprestimo">
    <h1>{{ msg }}</h1>

          <form @submit.prevent="submeteremprestimo()">
              <label for="NumChave">N° da Chave</label>
              <input type="text" class="form-control" v-model="Numsala" placeholder="N° chave">
              <label for="ENumMatricula">N° de Matricula</label>
              <input type="text" class="form-control" v-model="NumMat" placeholder="n° Matricula">
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>        

        <div class="cabecalho">
            <th scope="col">N° da sala</th>
            <th scope="col">Nome</th>
            <th scope="col">Horário</th>
            <th scope="col">Alterar</th>
            <th scope="col">Finalizar</th>
            <th scope="col">Contato</th>
        </div>

        <div v-for="emp in emprestimos" v-bind:key="emp['.key']">
            <div v-if="!emp.edit">
                  #
                  {{emp.chave.Nomesala}}
                  {{emp.pessoa.Nome}}
                  {{emp.horario}}
                  <!-- <button v-on:click="modalcontato(emp.pessoa)>Contato</button> -->
                  <button v-on:click="seteditaremprestimo(pes['.key'])">editar</button>
                  <button v-on:click="removeremprestimo(pes['.key'])">Finalizar</button>
            </div>
            <div v-else>
                  <input type="text" class="form-control" v-model="emp.chave.Numsala" placeholder="N° chave">
                  <input type="text" class="form-control" v-model="emp.pessoa.NumMat" placeholder="N° de Matricula">
                  <button v-on:click="salvaredicao(pes)">salvar</button>
                  <button v-on:click="cancelaredicao(pes['.key'])">cancelar</button>
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
        Numsala:"",
        NumMat:"",
        pessoa:"",
        chave:"",
        msg: 'Gerência de relacionamento chave e pessoal '
    }
  },
      firebase:{
        chaves:chavesRef,
        pessoas:pessoasRef,
        emprestimos:emprestimosRef
  },
  methods:{
        buscapessoa(mat){
          for (pes in pessoas) {
            if(pes.NumMat===mat)
              return pes
          }
          return "pessoa não cadastrada"
        },

        buscachave(num){
          for (cha in chaves) {
            if(cha.Numsala===num)
              return cha
          }
          return "chave não cadastrada"
        },

        salvahorario(){
            var date    = Date.now();
            var hora    = date.getHours();
            var min     = date.getMinutes();
            var dia     = date.getDate();
            var mes     = date.getMonth()+1;
            return (hora+""+min+" "+dia+"|"+mes)
        },
        
        submeteremprestimo() {
            pessoab = buscapessoa(this.NumMat)
            chaveb = buscachave(this.NumChave)
            horas = salvahorario()
            
            if(pessoa != "pessoa não cadastrada" && chave != "chave não cadastrada"){
              emprestimosRef.push({pessoa:pessoab, chave:chaveb, horario:horas,edit:false})
              this.NumMat=""
              this.NumChave=""
            }else if(pessoa === "pessoa não cadastrada")
              alert(pessoa)
            else alert(chave)
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
            const key=obj['.key']
            pessoab=buscapessoa(this.NumMat)
            chaveb=buscachave(this.NumChave)

            if(pessoa!="pessoa não cadastrada" && chave != "chave não cadastrada"){
              emprestimosRef.child(key).set({pessoa:pessoab,chave:chaveb,edit:false})
            }else if(pessoa === "pessoa não cadastrada")
              alert(pessoa)
            else alert(chave)
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
