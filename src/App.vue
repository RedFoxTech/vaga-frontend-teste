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
    Card,
    Filtros
  },
  created () {
    this.getAllPokemons()
  },
  mounted () {
    this.getTypes()
  },
  methods: {
    async getAllPokemons (page) {
      let now = new Date()
      await Api.pokemon(page).then(res => {
        console.log("Carregando...",now.getTime())
        this.list_pokemons = res.data.results
        this.paginate.next = res.data.next
        this.paginate.prev = res.data.previous
        this.paginates()
        if (this.rmv) { // if serve para manter ordenação nas next pages
          this.list_pokemons = this.orderByAlpha()
        } else {
          this.list_pokemons = res.data.results
        }
      }).catch(err => {
        console.log(err)
      }).finally(f => {
        console.log("Terminou", now.getTime())
      })
    },
    async getPokemon(search) {
      await Api.pokemonEspecifico(search).then(res => {
       this.rmv = true
       this.list_pokemons = res.data
      }).catch(err => {
        if (err.message === 'Request failed with status code 404') {
          alert("Pokemon digitado não existe, entre com um válido.")
        } else {
          alert("Erro! Tente mais tarde, caso o erro persista entre em contato com administrador.")
        }
      })
    },
    async getPokemonsByType (names) {
      this.rmv = true
      this.list_pokemons = []
      for (const item of names) {
        await Api.pokemonByType(item).then(res => {
          for (const item2 of res.data.pokemon) {
            this.list_pokemons.push(item2.pokemon)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    limparFiltros () {      
      this.rmv = false
      this.getAllPokemons()
    },
    paginates () {
      let next = '', prev = null
      if (this.paginate.next !== null ) {
        next = this.paginate.next
        next = next.split("=")
        next = next[1].split("&")
        this.paginate.next = next[0]
      } 
      if (this.paginate.prev !== null) {
        prev = this.paginate.prev
        prev = prev.split("=")
        prev = prev[1].split("&")
        this.paginate.prev = prev[0]
      }
      return this.paginate
    },
    orderByAlpha () {
      this.rmv = true
      return this.list_pokemons = _.sortBy(this.list_pokemons, 'name')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
