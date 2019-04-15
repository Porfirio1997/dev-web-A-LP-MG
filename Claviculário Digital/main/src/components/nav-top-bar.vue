<template>
    <div>
        <nav class="navbar navbar-light bg-dark">
            <p class="navbar">{{msg}}</p>
            <a class="navbar-brand bg-dark botao " href="#/">Mapa de Salas</a>
            <a class="navbar-brand bg-dark botao" href="#/Emprestimos">Empréstimos</a>
            <a class="navbar-brand bg-dark botao" href="#/Pessoas">Pessoal</a>
            <a class="navbar-brand bg-dark botao" href="#/Chaves">Chaves</a>
            <!-- <a class="navbar-brand bg-dark botao" href="#/Login">Login</a> -->
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavTopBar',
  data () { 
      return{ msg : "IFCE - campus Aracati"
    }
  }
}
</script>

<style>

.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}

.bg-dark {
    background-color: #343a40 !important;
}

.navbar-expand-md {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
}

.navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

*, ::after, ::before {
    box-sizing: border-box;
}

.navbar-dark .navbar-brand {
    color: #fff;
}

.navbar-brand {
    flex-grow: 1;
    align-content: center;
    padding:5px;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    background: rgb(42, 42, 43)
}

a , p {
    color:white;
    text-decoration: none;
    background-color: transparent;
}

.navbar-dark .navbar-toggler {
    color: rgba(255,255,255,.5);
    border-color: rgba(255,255,255,.1);
}

.navbar-expand-md .navbar-toggler {
    display: none;
}

[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    border-radius: .25rem;
}
[type="button"], [type="reset"], [type="submit"], button {
    -webkit-appearance: button;
}

button, select {
    text-transform: none;
}

button, input {
    overflow: visible;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button {
    border-radius: 0;
}

.mt-md-0, .my-md-0 {
    margin-top: 0 !important;
}

.mt-2, .my-2 {
    margin-top: .5rem !important;
}

.form-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;
}

.form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
}

.mr-sm-2, .mx-sm-2 {
    margin-right: .5rem !important;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button, input {
    overflow: visible;
}

button, input, optgroup, select, textarea {
    margin: 0;
        margin-right: 0px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.botao{
    border: 2px solid #495057 
}
</style>