<template>
  <div class="Chaves">
    <h1>{{ msg }}</h1>
          <div id="area">
            <form @submit.prevent="submeterchave()">
                  <div class="">
                    <label >N° da chave</label>
                    <input type="text" class="form-control" v-model="Numchave" placeholder="N° da sala">
                  </div>
                  <div class="">
                    <label >Nome da Sala</label>
                    <input type="text" class="form-control" v-model="Nomesala" placeholder="Nome da sala">
                  </div>
              <button type="submit" class="form-submit-button">Entrar</button>
            </form>
          </div>

        <div>
            <div class="cabecalho">
              <th class="col1">  #  </th>
              <th class="col2">  N° da sala  </th>
              <th class="col3">  Nome da sala  </th>
              <th class="col4">  Editar  </th>
              <th class="col5">  Finalizar  </th>
            
              <div v-for="cha in chaves" v-bind:key="cha['.key']">
                  <div v-if="!cha.edit" class="celula">
                          <th class="el1">#</th>
                          <th class="el2">{{cha.Numchave}}</th>
                          <th class="el3">{{cha.Nomesala}}</th>
                          <th class="el4" v-on:click="seteditarchave(cha['.key'])" >
                            <img src="../assets/editar.png" >
                          </th>
                          <th class="el5" v-on:click="removerchave(cha['.key'])" >
                            <img src="../assets/apagar.png">
                          </th>
                          <!-- <th class="el4"><button v-on:click="seteditarchave(cha['.key'])">editar</button></th>
                          <th class="el5"><button v-on:click="removerchave(cha['.key'])">excluir</button></th> -->
                  </div>
                  <div v-else class="celula">
                          <th class="el2"><input type="text" class="form-control" v-model="cha.Numchave"></th>
                          <th class="el3"><input type="text" class="form-control" v-model="cha.Nomesala"></th>
                          <th class="el4" v-on:click="cancelaredicao(cha['.key'])" >
                            <img src="../assets/cancelar.png" >
                          </th>
                          <th class="el5" v-on:click="salvaredicao(cha)" >
                            <img src="../assets/salvar.png">
                          </th>
                  </div>
              </div>
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
      Numchave:"",
      Nomesala:"",
      msg: 'Gerênciamento de chaves'
    }},
    firebase:{
    chaves:chavesRef
  },
    methods : {
        submeterchave() {
            chavesRef.push({Nomesala:this.Nomesala,
                            Numchave:this.Numchave,
                            edit:false})
            this.chave={};
        },
        removerchave(key){
          if(this.confirma())
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
            chavesRef.child(key).set({Nomesala:obj.Nomesala, Numchave:obj.Numchave,edit:false});
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
  margin:10px
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
  width: 50px;
}
.col2{
  position:relative;
  height: 30px;
  width: 100px;
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

.el1{
  position:relative;
  height: 25px;
  width: 50px;
  vertical-align: middle
}
.el2{
  position:relative;
  height: 25px;
  width: 100px;
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
.celula{
    border: 1px solid black;
    padding: 5px
    }

</style>
