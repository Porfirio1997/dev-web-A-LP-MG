<template>
  <div class="GChaves">
    <h1>{{ msg }}</h1>
            <form>
                <div class="">
                <label for="CNumSala">N° da sala</label>
                <input type="text" class="form-control" id="Nsala" placeholder="N° da sala">
                </div>
                <div class="">
                    <label for="CNomeSala">Cargo/função</label>
                    <input type="text" class="form-control" id="Nomsala" placeholder="Nome da sala">
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
  name: 'Chaves',
  data () {
    return {
      msg: 'Gerência de chaves'
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
