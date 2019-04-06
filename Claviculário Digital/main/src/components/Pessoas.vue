<template>
  <div class="Pessoal">
    <h1>{{ msg }}</h1>
          <form  @submit.prevent="addbanco()">
            <div class="">
              <label for="PNome">Endereço</label>
              <input type="text" class="form-control" v-model="pessoa.Nome" placeholder="Nome">
            </div>
            <div class="">
                <label for="PNumMat">Cargo/função</label>
                <input type="text" class="form-control" v-model="pessoa.NumMat" placeholder="N° de Matricula">
              </div>
            <div class="">
                <label for="PCargo">Cargo/função</label>
                <input type="text" class="form-control" v-model="pessoa.Cargo" placeholder="Cargo/função">
              </div>
            <div class="">
              <label for="PTelefone">Telefone</label>
              <input type="tel" class="form-control" v-model="pessoa.Telefone" placeholder="Telefone">
            </div>
          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>

        <table class="">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">N° de Matricula</th>
                <th scope="col">Cargo</th>
                <th scope="col">Telefone</th>
                <th scope="col">Editar</th>
                <th scope="col">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" p in pessoas " :key=p.id>
                <th scope="row">#</th>
                <td>{{p.Nome}}</td>
                <td>{{p.NumMat}}</td>
                <td>{{p.Cargo}}</td>
                <td>{{p.Telefone}}</td>
                <!-- <td v-on:click='funçãodeeditar({{p.NumMat}})'>Editar.png</td>
                <td v-on:click='funçãodeexcluir({{p.id}})'>Excluir.png</td> -->
              </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'Pessoal',
  data () {
    return {
      pessoa : {},
      pessoas : [],
      msg: 'Gerência de pessoal'
    }
  },
      addbanco() {
        insert ; into ; Pessoas ; 
        values (this.pessoa.Nome,this.chave.NumMat,this.pessoa.Cargo,this.pessoa.Telefone )
        atualizalista();
          },
      listapessoas() {
        return select * from ; Pessoas 
          },
      atualizalista() {
        this.pessoas=listapessoas();
          },
      editarlista(id){
        UPDATE ; Pessoas ; SET ;
                    nome = this.pessoa.Nome,
                    cargo = this.pessoa.Cargo ,
                    matricula = this.pessoa.NumMat,
                    telefone = this.pessoa.Telefone 
                    ; WHERE ; matricula = id;
        atualizalista()
          },
      deletardalista(id) {
        DELETE ; FROM ; Pessoas ; where ; matricula = id ;
        atualizalista()
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
