<template>
  <div class="Pessoal">
    <h1>{{ msg }}</h1>

        <div id="area">
          <form  @submit.prevent="submeterpessoa()">
            <div class="">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="Nome" placeholder="Nome">
            </div>
            <div class="">
                <label>N° matricula</label>
                <input type="text" class="form-control" v-model="NumMat" placeholder="N° de Matricula">
              </div>
            <div class="">
                <label>Cargo/função</label>
                <input type="text" class="form-control" v-model="Cargo" placeholder="Cargo/função">
              </div>
            <div class="">
              <label>Telefone</label>
              <input type="tel" class="form-control" v-model="Telefone" placeholder="Telefone">
            </div>
          <button type="submit" class="form-submit-button">salvar</button>
        </form>
      </div>


      <div class="cabecalho">
                <th class="col1">#</th>
                <th class="col2">Nome</th>
                <th class="col3">N° de Matricula</th>
                <th class="col4">Cargo/função</th>
                <th class="col5">Telefone</th>
                <th class="col6">Editar</th>
                <th class="col7">Excluir</th>

        <div v-for="pes in pessoas" v-bind:key="pes['.key']">
            <div v-if="!pes.edit" class="celula">
                <th class="el1">#</th>
                <th class="el2">{{pes.Nome}}</th>
                <th class="el3">{{pes.NumMat}}</th>
                <th class="el4">{{pes.Cargo}}</th>
                <th class="el5">{{pes.Telefone}}</th>
                <th class="el6" v-on:click="seteditarpessoa(pes['.key'])">
                  <img src="../assets/editar.png" >
                </th>
                <th class="el7" v-on:click="removerpessoa(pes['.key'])">
                  <img src="../assets/apagar.png">
                </th>
            </div>
            <div v-else class="celula">
                <th class="el2"><input type="text" class="form-control" v-model="pes.Nome" placeholder="Nome"></th>
                <th class="el3"><input type="number" class="form-control" v-model="pes.NumMat" placeholder="N° de Matricula"></th>
                <th class="el4"> <input type="text" class="form-control" v-model="pes.Cargo" placeholder="Cargo/função"></th>
                <th class="el5">  <input type="tel" class="form-control" v-model="pes.Telefone" placeholder="Telefone"></th>
                <th class="el6" v-on:click="cancelaredicao(pes['.key'])">
                  <img src="../assets/cancelar.png" >
                </th>
                <th class="el7" v-on:click="salvaredicao(pes)">
                  <img src="../assets/salvar.png">
                </th>
                  <!-- <button v-on:click="salvaredicao(pes)">salvar</button>
                  <button v-on:click="cancelaredicao(pes['.key'])">cancelar</button> -->
            </div>
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
      Nome:"",
      Cargo:"",
      Telefone:"",
      NumMat:"",
      msg: 'Gerência de pessoal interno'
    }
  },
  firebase:{
    pessoas:pessoasRef
  },
  methods:{
        buscapessoa(mat){
          for (var pes in this.pessoas) {
            if(this.pessoas[pes].NumMat === mat)
              return this.pessoas[pes]
          }
          return "matricula não cadastrada"
        },
        submeterpessoa() {
          var pessoab = this.buscapessoa(this.NumMat)

          if(pessoab === "matricula não cadastrada"){
            pessoasRef.push({Nome:this.Nome,
                            NumMat:this.NumMat,
                            Cargo:this.Cargo,
                            Telefone:this.Telefone,
                            edit:false})
            this.Nome="",
            this.Cargo="",
            this.Telefone="",
            this.NumMat=""}
          else alert("matricula já cadastrada")
        },
        removerpessoa(key){
          if(this.confirma())
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
            pessoasRef.child(key).update({Nome:obj.Nome,
                                        NumMat:obj.NumMat,
                                        Cargo:obj.Cargo,
                                        Telefone:obj.Telefone,
                                        edit:false});
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
.cabecalho{
  display: inline-block;
  padding: 15px;
  background-color: darkgray;
  margin : 10px
}

#area
{
  position:relative;
  left:37%;
  top:29%;
  width:320px;
  height:250px;
}
#area #formulario
{
  position:absolute;
  display:block;   

}

.col1{
  position:relative;
  height: 30px;
  width: 50px;
}
.col2{
  position:relative;
  height: 30px;
  width: 50px;
}
.col3{
  position:relative;
  height: 30px;
  width: 200px;
}
.col4{
  position:relative;
  height: 30px;
  width: 100px;
}
.col5{
  position:relative;
  height: 30px;
  width: 150px;
}
.col6{
  position:relative;
  height: 30px;
  width: 150px;
}
.col7{
  position:relative;
  height: 30px;
  width: 150px;
}

.el1{
  position:relative;
  height: 25px;
  width: 50px;
  vertical-align: middle
}
.el2{
  position:relative;
  height: 25px;
  width: 50px;
  vertical-align: middle
}
.el3{
  position:relative;
  height: 25px;
  width: 200px;
  vertical-align: middle
}
.el4{
  position:relative;
  height: 25px;
  width: 100px;
  vertical-align: middle
}
.el5{
  position:relative;
  height: 25px;
  width: 150px;
  vertical-align: middle
  
}

.el6{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align: middle
}
.el7{
  position:relative;
  height: 30px;
  width: 150px;
  vertical-align: middle
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
</style>
