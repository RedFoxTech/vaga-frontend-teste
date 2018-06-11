<template>
  <div id="app">
    <b-jumbotron class="cabecalho">
       <b-row class="justify-content-md-center">
          <h1>{{titulo}}</h1>
        </b-row>
    </b-jumbotron>
    <pokemon></pokemon>
    <footer class="footer navbar-fixed-bottom">
        <div class ="container">
          <b-row>
            <p>Cinthia Queiroz 2018</p>
          </b-row>
        </div>
    </footer>
  </div>
</template>

<script>

import pokemon from './components/pokemon'

export default {
   data(){
    return{
      titulo:'Pokédex',
      
    }
  },
  name: 'app',
  components: {
    pokemon
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.cabecalho{
  background-color: #263238;
  color:#fff;
  border-bottom: 5px solid #ef5350 ;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Titillium Web', sans-serif;
}
.footer{
  border-top: 0.5px solid #cccccc ;
  color:#263238;
  height: 20%;
  font-family: 'Titillium Web', sans-serif;
  padding-top: 2%;
  padding-bottom: 3%;

}
</style>
