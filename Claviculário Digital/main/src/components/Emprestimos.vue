<template>
  <div class="Emprestimo">
    <h1>{{ msg }}</h1>
          <form>

            <div class="">
              <label for="NumChave">Endereço</label>
              <input type="text" class="form-control" v-model="emprestimo.numchave" placeholder="N° chave">
            </div>
            
            <div class="">
                <label for="ENumMatricula">Cargo/função</label>
                <input type="text" class="form-control" v-model="emprestimo.nummat" placeholder="n° Matricula">
            </div>

          <button type="submit" class="btn btn-primary">Entrar</button>
        </form>        
        
        <form>
            <div class="">
              <label for="ENumChaveBusca">Endereço</label>
              <input type="text" class="form-control" id="Nome" placeholder="Nome">
            </div>
        </form>

        <table class="">
  <thead>
    <tr>
      <th scope="col">N° da sala</th>
      <th scope="col">Nome</th>
      <th scope="col">Horário</th>
      <th scope="col">Alterar</th>
      <th scope="col">Finalizar</th>
      <th scope="col">Contato</th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr v-for=" e in emprestimos " :key=e.id>
      <th scope="row">#</th>
      <td>{{}}</td>
      <td>{{p.NumMat}}</td>
      <td>{{p.Cargo}}</td>
      <td>{{p.Telefone}}</td>
      <td v-on:click='funçãodeeditar({{p.NumMat}})'>Editar.png</td>
      <td v-on:click='funçãodeexcluir({{p.id}})'>Excluir.png</td>
    </tr> -->
  </tbody>
</table>


  </div>
</template>

<script>
export default {
  name: 'Emprestimo',
  data () {
    return {
      emprestimo,
      emprestimos,
      msg: 'Gerência de relacionamento chave e pessoal '
    }
  },
      addbanco() {
        insert ; into ; Emprestimos ; 
        values ( this.emprestimo.nummat,this.emprestimo.numchave )
        atualizalista();
          },
      listapessoas() { 
        return select * from ; Emprestimos 
          },
      atualizalista() {
        this.emprestimos=listapessoas();
          },
      atualizalista() {
        this.emprestimos=listachaves();
          },
      editarlista(id){
        UPDATE ; Emprestimos ; SET ;
                    pessoamat = this.emprestimo.nummat
                    chavenum  = this.emprestimo.chavenum
                    ; WHERE ; ID  = id;
        atualizalista()
          },
      deletardalista(id) {
        DELETE ; FROM ; Emprestimos ; where ; ID = id ;
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
