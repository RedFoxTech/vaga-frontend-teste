<template>
  <div id="filtros" class="white lighten-4 z-depth-1">
    <h5>Filtros</h5>
    <div class="row">
      <form @submit.prevent="getPokemon(search.toLowerCase())">
        <div class="input-field col s12 m6 l6">
          <input v-model="search" placeholder="Buscar pokemon" type="text">
        </div>
      </form>
    </div>
    <div class="row">
      <div class="input-field col s12 m6 l6">
        <select id="select-type" v-model="options_select" multiple>
          <option value="" disabled selected>Filtrar por tipo</option>
          <option
            :key="index"
            :value="item"
            v-for="(item, index) in selectType"
          >
            {{item}}
          </option>
        </select>
      </div>
      <div class="col s12 m6 l3" style="height: 66px; display: flex; align-items: center;">
        <button class="btn waves-effect waves-light" @click="getPokemonByType(options_select)">Buscar</button>
      </div>  
    </div>
    <div class="row">
      <div class="col s12 m6 l3">
        <button class="btn waves-effect waves-light" @click="limparFiltros">Ordenar por Pokedex ID</button>
      </div>
      <div class="col s12 m6 l3">
        <button class="btn waves-effect waves-light" @click="orderByAlpha">Ordenar por A-Z</button>
      </div>
    </div>
    <div v-if="rmv" class="row">
      <div class="col">
        <button class="btn btn-small red lighten-1" @click="limparFiltros">Remover filtros</button>
      </div>
    </div> 
    <div class="row" id="paginate">
      <div class="col">
        <paginate
          :getAllPokemons="getAllPokemons"
          :paginate="paginate"
        />
      </div>
    </div> 
  </div>
</template>

<script>
import Paginate from './Paginate'
import Api from '../services/api'
export default {
  name: 'filtros',
  props: {
    getAllPokemons: Function,
    getPokemon: Function,
    getPokemonByType: Function,
    orderByAlpha: Function,
    limparFiltros: Function,
    paginate: Object,
    rmv: Boolean
  },
  components: {
    Paginate
  },
  data () {
    return {
      search: '',
      options_select: [],
      selectType: {
        normal: "normal",
        fighting: "fighting",
        flying: "flying",
        poison: "poison",
        ground: "ground",
        rock: "rock",
        bug: "bug",
        ghost: "steel",
        fire: "fire",
        water: "water",
        grass: "grass",
        electric: "electric",
        psychic: "psychic",
        ice: "ice",
        dragon: "dragon",
        dark: "dark",
        fairy: "fairy",
        unknown: "unknown",
        shadow: "shadow"
      }
    }
  },
  mounted () {
    this.initSelect()
  },
  methods: {
    initSelect () {
      var elems = document.querySelector('select')
      var instances = M.FormSelect.init(elems)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 7px;
}
.input-field {
  margin-top: 15px;
  margin-bottom: 0;
}
#filtros {
  margin-top: 5px;
  padding-bottom: 2px;
}
#paginate {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
</style>