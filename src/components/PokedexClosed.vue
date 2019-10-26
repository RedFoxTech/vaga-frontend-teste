<template>
    <div>
        <h1>{{ msg }}</h1>
        <router-link to="/list">
            <img src="@/assets/PokedexClosed.svg" alt="" class="pokedex" />
        </router-link>
    </div>
</template>

<script>
  import VueRouter from 'vue-router'
  export default {
    name: 'PokedexClosed',
    data () {
      return {
        msg: 'Bem-vindo a nossa Pokedex.'
      }
    },
    methods: {
      openPokedex: () => {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
