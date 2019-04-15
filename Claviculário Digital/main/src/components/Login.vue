<template>
  <div>
    <h1>{{ msg }}</h1>
          
          <div id="area">
            <!-- <form @submit.prevent="login()"> -->
            <form>
                  <div class="">
                    <label >Email</label>
                    <input type="text" class="form-control" v-model="Email" placeholder="Email">
                  </div>
                  <div class="">
                    <label >Senha</label>
                    <input type="text" class="form-control" v-model="Senha" placeholder="Senha">
                  </div>
              <button type="submit" class="form-submit-button">Entrar</button>
            </form>
          </div>
  </div>
</template>

<script>
// import { chavesRef,authRef } from "../firebase.js";

export default {
  name: 'login',
  data () {
    return {
      Email:"",
      Senha:"",
      msg: 'Login'
    }},
//     firebase:{
//     chaves:chavesRef,
//     auth:authRef
//   },
//     methods : {
//         login(){
//             this.auth.signInWithEmailAndPassword(this.Email,this.Senha)
//         }
//     }
  
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
