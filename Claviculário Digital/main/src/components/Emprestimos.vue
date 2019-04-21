<template>
  <div class="Emprestimo">
    <h1>{{ msg }}</h1>
        
        <div id="area">
          <form @submit.prevent="submeteremprestimo()">
              <label for="NumChave">N° da Chave</label>
              <input type="text" class="form-control" v-model="Numchave" placeholder="N° chave">
              <label for="ENumMatricula">N° de Matricula</label>
              <input type="text" class="form-control" v-model="NumMat" placeholder="n° Matricula">
            <button type="submit" class="form-submit-button">Entrar</button>
          </form>        
        </div>


      <div class="cabecalho">
              <th class="col1">Nome da sala</th>
              <th class="col2">Nome</th>
              <th class="col3">Horário</th>
              <th class="col4">Contato</th>
              <th class="col5">Alterar</th>
              <th class="col6">Finalizar</th>

          <div v-for="emp in emprestimos" v-bind:key="emp['.key']">
              <div v-if="!emp.edit" class="celula">
                    <th class="el1">{{emp.CNomesala}}</th>
                    <th class="el2">{{emp.PNome}}</th>
                    <th class="el3">{{emp.horario}}</th>
                    <th class="el4" v-on:click="modalcontato(emp)">
                        <img src="../assets/contato.png" >
                    </th>
                    <th class="el5" v-on:click="seteditaremprestimo(emp['.key'])">
                      <img src="../assets/editar.png" >
                    </th>
                    <th class="el6" v-on:click="removeremprestimo(emp['.key'])">
                      <img src="../assets/apagar.png">
                    </th>
                    <!-- <button v-on:click="modalcontato(emp.pessoa)>Contato</button>
                    <button v-on:click="seteditaremprestimo(emp['.key'])">editar</button>
                    <button v-on:click="removeremprestimo(emp['.key'])">Finalizar</button> -->
              </div>
              <div v-else class="celula">
                    <label for="NumChave">N° da Chave</label>
                    <input type="text" class="form-control" v-model="emp.CNumchave" placeholder="N° chave">
                    <label for="ENumMatricula">N° de Matricula</label>
                    <input type="text" class="form-control" v-model="emp.PNumMat" placeholder="N° de Matricula">
                    <th class="el5" v-on:click="cancelaredicao(emp['.key'])">
                      <img src="../assets/cancelar.png" >
                    </th>
                    <th class="el6" v-on:click="salvaredicao(emp)">
                      <img src="../assets/salvar.png">
                    </th>
                    <!-- <button v-on:click="salvaredicao(emp)">salvar</button>
                    <button v-on:click="cancelaredicao(emp['.key'])">cancelar</button> -->
              </div>
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
        modalcontato(emp){
            var nom = emp.PNome
            var tel = emp.PTelefone
            var car = emp.PCargo
            alert(
                "Nome : "+nom+
                "\n Cargo : "+car+
                "\n telefone : "+tel           
                )
        },

        buscaempalter(mat){
          var qtd=0
            for (var emp in this.emprestimos) {
            if(this.emprestimos[emp].CNumchave === mat)
                qtd=qtd+1
          }
          if(qtd===1 || qtd===0)
            return true
          else 
            return false
        },

        buscaemp(mat){
            for (var emp in this.emprestimos) {
            if(this.emprestimos[emp].CNumchave === mat)
              return true
          }
          return false
        },
        buscapessoa(mat){
          for (var pes in this.pessoas) {
            if(this.pessoas[pes].NumMat === mat)
              return this.pessoas[pes]
          }
          return "matricula não cadastrada"
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
          var empvazio = this.buscaemp(this.Numchave)   
          
          
            if(pessoab === "matricula não cadastrada")
              alert("matricula não cadastrada")
            else if(chaveb === "chave não cadastrada")
              alert("chave não cadastrada")
            else if(empvazio){
              alert("chave emprestada.")
            }
            else  {emprestimosRef.push({
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
          if(this.confirma())
            emprestimosRef.child(key).remove();
        },

        seteditaremprestimo(key){
            emprestimosRef.child(key).update({edit:true});
        },
        
        cancelaredicao(key){
            emprestimosRef.child(key).update({edit:false});
        },

        salvaredicao(obj){
            var pessoab = this.buscapessoa(obj.PNumMat)
            var chaveb = this.buscachave(obj.CNumchave)
            var chaveatt = this.buscaempalter(obj.CNumchave)
            const key = obj['.key']

            if(pessoab === "matricula não cadastrada")
              alert("matricula não cadastrada")
            else if(chaveb === "chave não cadastrada")
              alert("chave não cadastrada")
            else if (chaveatt){
              emprestimosRef.child(key).update({
                                            PNome:obj.PNome,
                                            PNumMat:obj.PNumMat,
                                            PCargo:obj.PCargo,
                                            PTelefone:obj.PTelefone,
                                            CNomesala:obj.CNomesala,
                                            CNumchave:obj.CNumchave,
                                            edit:false})
            }else 
              alert('chave já emprestada.')
        },
        confirma(){
            return confirm("Confirmar!");
            
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

img{
  height: 30px;
  width: 30px;
  color: black
}

#area
{
  position:relative;
  left:37%;
  top:29%;
  width:320px;
  height:150px;
}
#area #formulario
{
  position:absolute;
  display:block;   
}

.celula{
    border: 1px solid black;
    padding: 5px
    }

.form-submit-button{
background: #42b983;
color: white;
height: 30px;
width: 60px;
position: relative;
left : 40%;
font: bold 15px arial, sans-serif;
text-shadow:none;
}

.col1{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}

.col2{
  position:relative;
  height: 30px;
  width: 50px;
  vertical-align:middle
}

.col3{
  position:relative;
  height: 30px;
  width: 200px;
  vertical-align:middle
}

.col4{
  position:relative;
  height: 30px;
  width: 100px;
  vertical-align:middle
}

.col5{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}

.col6{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}


.el1{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}

.el2{
  position:relative;
  height: 30px;
  width: 50px;
  vertical-align:middle
}

.el3{
  position:relative;
  height: 30px;
  width: 200px;
  vertical-align:middle
}

.el4{
  position:relative;
  height: 30px;
  width: 100px;
  vertical-align:middle
}

.el5{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}

.el6{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align:middle
}

.cabecalho{
  display: inline-block;
  padding: 15px;
  background-color: darkgray;
  margin:10px
}
</style>
