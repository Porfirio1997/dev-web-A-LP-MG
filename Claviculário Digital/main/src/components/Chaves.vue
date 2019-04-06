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
      <th scope="col">#</th>
      <th scope="col">N° da sala</th>
      <th scope="col">Nome da sala</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="c in chaves" :key=c.id>  Não funciona.
      <th scope="row">#</th>
      <td>{{c.Numsala}}</td>
      <td>{{c.Nomesala}}</td>
      <!-- <td v-on:click='funçãodeeditar({{c.Numsala}})'>editar.png</td>
      <td v-on:click='funçãodeexcluir({{.id}})'>excluir.png</td> -->
    </tr>
  </tbody>
</table>


  </div>
</template>

<script>
export default {
  name: 'Chaves',
  data () {
    return {
      chave : {},
      chaves : [],
      msg: 'Gerência de chaves'
    }},
    methods : {
        addbanco() {
          insert ; into ; Chaves ; values (this.chave.Nomesala,this.chave.Numsala )
          atualizalista() 
            },
        listapessoas() {
          return select * from ; Chaves 
            },
        atualizalista() {
          this.chaves=listachaves();
            },
        editarlista(id){
          UPDATE ; chaves ; SET ;
                    numchave = this.chave.Nomesala,
                    numerochave = this.chave.Numsala
                    ; WHERE ; numerochave = id;
          atualizalista()
          },
        deletardalista(id) {
          DELETE ; FROM ; Chaves ; where ; numchave=id;
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
