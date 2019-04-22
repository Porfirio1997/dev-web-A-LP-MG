<template>
  <div>
    <h1>{{ msg }}</h1>
      {{logado()}}
          <div id="area" v-if="Token">
            <form @submit.prevent="login()">
                  <div class="">
                    <label >Email</label>
                    <input type="text" class="form-control" v-model="Email" placeholder="Email">
                  </div>
                  <div class="">
                    <label >Senha</label>
                    <input type="password" class="form-control" v-model="Senha" placeholder="Senha">
                  </div>
              <button type="submit" class="form-submit-button">Entrar</button>
            </form>
          </div>
          <div id="area" v-else>
              <button class="fullsize" v-on:click="logout()">Logout</button>
          </div>
  </div>
</template>

<script>
import { auth } from "../firebase.js";

export default {
  name: 'login',
  data () {
    return {
      Token:'',
      Email:"",
      Senha:"",
      msg: 'Login'
    }},
     methods : {
         login(){
             auth.signInWithEmailAndPassword(this.Email,this.Senha)
             this.Senha=""
             this.Email=""
             this.logado()
             this.$router.push("/")
         },
         logado(){
            auth.onAuthStateChanged(user =>{
                if(user){
                    this.Token=false
                    }
                else{
                    this.Token=true
                    }
            })
         },
         logout(){
           auth.signOut()
           this.logado()
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

.fullsize{
  width: 100%;
  height: 100%;
  background: #42b983;
  color: white;
  position: absolute;
  left : 0%;
  font: bold 15px arial, sans-serif;
  text-shadow:none;
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

</style>
