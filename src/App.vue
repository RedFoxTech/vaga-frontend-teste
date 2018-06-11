<template>
  <div id="app">
    <div class="jumbotron titulo">
          <h1>{{titulo}}</h1>
    </div>
    <pokemon></pokemon>
  </div>
</template>

<script>

import pokemon from './components/pokemon'

export default {
   data(){
    return{
      titulo:'Pokedexx',
      
    }
  },
  name: 'app',
  components: {
    pokemon
  }
}

</script>

<style lang="scss">
</style>
