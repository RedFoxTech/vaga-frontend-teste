<template>
  <div id="app">
    <spinner />
    <nav-bar />
    <div class="container">
      <filtros 
        :getAllPokemons="getAllPokemons"
        :getPokemon="getPokemon"
        :getPokemonByType="getPokemonsByType"
        :orderByAlpha="orderByAlpha"
        :limparFiltros="limparFiltros"
        :paginate="paginateDefault"
        :rmv="rmv"
        :showPaginate="showPaginate"
      />
      <div class="row">        
        <card
          :key="index"
          v-for="(item, index) in list_pokemons"
          :namePoke="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import Card from './components/Card'
import Filtros from './components/Filtros'
import Spinner from './components/Spinner'
import Api from './services/api'
import { _ } from 'vue-underscore'
export default {
  name: 'app',
  data() {
    return {
      list_pokemons: [],
      types: [],
      paginateDefault: {
        next: '',
        prev: '',
        total_pages: 0,
      },
      showPaginate: {
        bool: false,
        count: null
      },
      visible: false,
      rmv: false
    }
  },
  components: {
    NavBar,
    Card,
    Filtros,
    Spinner
  },
  created () {
    this.getAllPokemons()
  },
  mounted () {
    this.getTypes()
    this.$root.$emit('Spinner::show')
  },
  methods: {
    async getAllPokemons (page) {
      await Api.pokemon(page).then(res => {
        this.list_pokemons = res.data.results
        this.paginateDefault = {
          next: res.data.next,
          prev: res.data.previous
        }
        this.paginatorDefault()
        if (this.rmv) { // if serve para manter ordenação nas next pages
          this.list_pokemons = this.orderByAlpha()
        } else {
          this.list_pokemons = res.data.results
        }
      }).catch(err => {
        console.log(err)
      }).finally(f => {
        let time = 0
        setTimeout(() => {
          clearTimeout(time)
          this.$root.$emit('Spinner::hide')
        }, 1500);
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
      let time = 0
      this.$root.$emit('Spinner::show')
      for (const item of names) {
        await Api.pokemonByType(item).then(res => {
          for (const item2 of res.data.pokemon) {
            this.list_pokemons.push(item2.pokemon)
          }
          this.showPaginate = {
            bool: true,
            count: this.list_pokemons.length
          }
        }).catch(err => {
          console.log(err)
        }).finally(f => {
          setTimeout(() => {
            clearTimeout(time)
            this.$root.$emit('Spinner::hide')
          }, 2500);
        })
      }
    },
    limparFiltros () {
      this.rmv = false
      this.showPaginate = false
      this.getAllPokemons()
    },
    paginatorDefault () {
      let next = '', prev = null
      if (this.paginateDefault.next !== null ) {
        next = this.paginateDefault.next
        next = next.split("=")
        next = next[1].split("&")
        this.paginateDefault.next = next[0]
      } 
      if (this.paginateDefault.prev !== null) {
        prev = this.paginateDefault.prev
        prev = prev.split("=")
        prev = prev[1].split("&")
        this.paginateDefault.prev = prev[0]
      }
      return this.paginateDefault
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
