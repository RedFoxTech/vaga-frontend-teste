<template>
  <main class="main-content">
    <section v-if="loading" class="pokedex-loader">Loading...</section>
    <section v-if="!loading" class="pokemon-list-section">
      <div class="panel">
        <div class="header">
          <div class="panel-heading"><h1>Listagem de Pokemon</h1></div>
          <input type="text" class="input-value" v-model="search">
        </div>
        <div class="card" v-for="(pokemonList, i) in filteredPokemons" :key="i">
          <img class="monster-image" :src="pokemonList.photo" alt="">
          <span class="span-text">{{pokemonList.name}}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import axios from 'axios'

export default {
  name: 'MonsterList',
  data () {
    return {
      loading: true,
      pokemonsList: [],
      search: '',
    }
  },
  computed: {
    filteredPokemons () {
      return this.pokemonsList.filter( (pokemon) => {
        return pokemon.name.toUpperCase().startsWith(this.search.toUpperCase()) ||
        String(pokemon.id).includes(this.search) ||
        pokemon.type.toUpperCase().startsWith(this.search.toUpperCase())
      })
    }
  },
  async mounted () {
    // variavel AllPokemons responsavel por pegar todos os pokemons com um limite de 151
    const allPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    this.pokemonsList = allPokemons.data.results
    // Map para alterar a Listagem para que adicione mais 2 campos, sendo eles a imagem e o tipo do pokemon
    this.pokemonsList.map((x, index) => {
      x.id = index + 1
      let promisePokemon = axios.get(x.url).then(response => {
        x.photo = response.data.sprites.front_default
        x.type = response.data.types[0].type.name
      })
      return x
    })
    // Ordenar Array de Pokemons
    this.pokemonsList.sort( (a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
    })
    this.loading = false
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  flex-grow: 1;
  width: 100%;
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}

.input-value {
  padding: 5px 10px;
  background: #e1e1e1;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  margin-bottom: 10px;
  text-decoration: none;
  &:focus { outline: none }
}
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 150px;
  border: 1px solid #e1e1e1;
  margin: 5px;
  justify-content: center;
  align-items: center;
  background: #c1c1c1;
  // background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(201,201,249,1) 57%, rgba(191,191,250,1) 83%, rgba(255,255,255,1) 100%);
  &:hover{ border-color: red; transform: scale(1.05); transition: 0.2s}
  .monster-image {
    width: 70px;
    height: 70px;
  }
  .span-text {
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
  }
}
  .water {
    border-color: blue !important;
  }
  .fire {
    border-color: red !important;
  }
  .eletric {
    border-color: yellow !important;
  }
</style>
