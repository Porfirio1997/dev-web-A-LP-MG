<template>
  <div class="Gemprestimo">
    <h1>{{ msg }}</h1>
          <form>

            <div class="">
              <label for="ENumChave">Endereço</label>
              <input type="text" class="form-control" id="Nome" placeholder="N° chave">
            </div>
            
            <div class="">
                <label for="ENumMatricula">Cargo/função</label>
                <input type="text" class="form-control" id="Cargo" placeholder="n° Matricula">
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
    <!-- <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
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
      msg: 'Gerência de relacionamento chave e pessoal '
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
