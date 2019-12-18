<template>
  <div id="app">
    <nav-bar />
    <div class="container">
      <filtros 
        :getAllPokemons="getAllPokemons"
        :getPokemon="getPokemon"
        :getPokemonByType="getPokemonsByType"
        :orderByAlpha="orderByAlpha"
        :limparFiltros="limparFiltros"
        :paginate="paginate"
        :rmv="rmv"
      />
      <div class="row">
        <card
          :key="index"
          v-for="(item, index) in list_pokemons"
          v-bind:namePoke="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import Card from './components/Card'
import Filtros from './components/Filtros'
import Api from './services/api'
import { _ } from 'vue-underscore'
export default {
  name: 'app',
  data() {
    return {
      list_pokemons: [],
      types: [],
      paginate: {
        next: '',
        prev: ''
      },
      rmv: false
    }
  },
  components: {
    NavBar,
    Card
  },
  created () {
    this.getPokemons()
  },
  methods: {
    async getPokemons () {
      await Api.pokemon().then(res => {
       this.list_pokemons = res.data.results
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
