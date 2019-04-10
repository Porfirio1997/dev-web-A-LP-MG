<template>
  <div class="Chaves">
    <h1>{{ msg }}</h1>
            <form @submit.prevent="addbanco()">
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
        <table class="">
  <thead>
    <tr>
      <th scope="col">  #  </th>
      <th scope="col">  N° da sala  </th>
      <th scope="col">  Nome da sala  </th>
      <th scope="col">  Editar  </th>
      <th scope="col">  Finalizar  </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="c in chaves" :key=c.id>
      <th scope="row">#</th>
      <td>{{c.NUMCHAVE}}</td>
      <td>{{c.NOME}}</td>
      <!-- <td v-on:click='editarlista({{c.ID}})'>editar.png</td>
      <td v-on:click='deletardalista({{c.ID}})'>excluir.png</td> -->
    </tr>
  </tbody>
</table>


  </div>
</template>

<script>
//importar do arquivo data.js

export default {
  name: 'Chaves',
  data () {
    return {
      chave : {},
      chaves : [],
      msg: 'Gerênciamento de chaves'
    }},
    methods : {
        addbanco() {
          //test.criarchave(this.chave.Nomesala,this.chave.Numsala)
          this.chave={}
          atualizalista() 
            },
        listar() {
          //pegartodos("Chaves")
            },
        atualizalista() {
          //this.chaves=listar();
            },
        editarlista(id){
          //alterarchave(id,this.chave.Nomesala,this.chave.Numsala)
          atualizalista()
          },
        deletardalista(id) {
         //deletar("Chaves",id)
          atualizalista()
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
