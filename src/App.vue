<template>
  <div id="app">
    <nav-bar />
    <div class="container">
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
import Api from './services/api'
export default {
  name: 'app',
  data() {
    return {
      list_pokemons: []
    }
  },
  components: {
    NavBar,
    Card
  },
  created () {
    this.getTypes()
  },
  methods: {
    async getTypes () {
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
