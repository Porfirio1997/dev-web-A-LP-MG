<template>
  <div class="GPessoal">
    <h1>{{ msg }}</h1>
          <form>
            <div class="">
              <label for="PNome">Endereço</label>
              <input type="text" class="form-control" id="Nome" placeholder="Nome">
            </div>
            <div class="">
                <label for="PNumMat">Cargo/função</label>
                <input type="text" class="form-control" id="NumMat" placeholder="N° de Matricula">
              </div>
            <div class="">
                <label for="PCargo">Cargo/função</label>
                <input type="text" class="form-control" id="Cargo" placeholder="Cargo/função">
              </div>
            <div class="">
              <label for="PTelefone">Telefone</label>
              <input type="tel" class="form-control" id="Telefone" placeholder="Telefone">
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
  name: 'Pessoal',
  data () {
    return {
      msg: 'Gerência de pessoal'
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
