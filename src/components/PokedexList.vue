<template>
    <div class="relative uk-margin-top">
        <img src="@/assets/PokedexOpen.svg" class="pokedex "/>
        <button @click="listPokemon(true)" class="actButton absolute btnOk">
            Sort<br>{{this.direction ? 'Z-A' : 'A-Z'}}
        </button>
        <button @click="listPokemon()" class="actButton absolute btnSearch">
            Sort<br>Default
        </button>
        <img src="@/assets/FilterComponent.svg" class="filterComp absolute"/>
        <img src="@/assets/ListComponent.svg" class="listComp absolute"/>
        <img src="@/assets/DetailsComponent.svg" class="detailComp absolute"/>
        <ul class="display-container absolute detailComp uk-list uk-list-divider uk-text-left">
            <li
                    v-for="pokemon in list"
                    v-on:click="getPokemon(pokemon)">
                <img :src="pokemon.thumb ? pokemon.thumb : defaultThumb"
                     :class="pokemon.thumb ? 'ico-preview thumbLoaded' : 'ico-preview'">
                {{pokemon.name}}
            </li>
        </ul>
        <div v-if="selected" class="absolute listComp details-container">
            <div class="uk-grid" uk-grid>
                <div class="uk-width-1-2">
                    <img :src="selected.thumb" :style="{width:'100%'}" uk-img>
                </div>
                <div class="uk-width-1-2">
                    <h1 class="uk-h2">{{selected.name}}</h1>
                    <div class="uk-grid poke-data" uk-grid>
                        <div class="uk-width-1-2">
                            <p><strong>Weight: </strong>{{selected.weight}}</p>
                        </div>
                        <div class="uk-width-1-2">
                            <p><strong>Height: </strong>{{selected.height}}</p>
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-2 scrollable">
                    <button class="uk-button uk-button-small uk-button-primary" v-for="type in selected.types">
                        {{type.type.name}}
                    </button>
                </div>
                <div class="uk-width-1-2 scrollable">
                    <button v-for="ability in selected.abilities" class="uk-button uk-button-small uk-button-danger"
                            v-on:click="getAbilityDetails(ability.ability.name)">{{ability.ability.name}}
                    </button>
                </div>
            </div>
        </div>
        <div v-if="abilityDetails" class="absolute listComp details-container">
            <vk-card padding="small" hover>
                <vk-card-title>{{abilityDetails.name}}
                    <vk-modal-close v-on:click="()=>{abilityDetails= false}"></vk-modal-close>
                </vk-card-title>
                <div class="scrollable">
                    <p v-for="effect in abilityDetails.effects">{{effect.effect}}</p>
                </div>
            </vk-card>
        </div>
        <vk-notification status="danger" :messages.sync="messages"></vk-notification>

        <ul class="absolute filterComp filterCompList uk-list uk-list-divider uk-text-left">
            <li v-for="type in types"
                v-on:click="getType(type.name)">
                {{type.name}}
            </li>
        </ul>

        <div class="uk-search absolute filterComp filterCompInput">
            <input class="uk-search-input" type="text" placeholder="Search by name"
                   @keyup="(e)=>{getPokemon({name:e.target.value})}">
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import DefaultThumb from '@/assets/pokeball.png'
  import {Pokedex} from 'pokeapi-js-wrapper'

  const PDX = new Pokedex({
    protocol: 'https'
  })
  export default {
    name: 'PokedexList',
    data () {
      this.defaultThumb = DefaultThumb
      this.messages = []
      this.direction = true
      return {
        list: [],
        types: [],
        selected: false,
        abilityDetails: false,
      }
    },
    methods: {
      async listPokemon (order = false) {
        this.list = []
        this.direction = !this.direction

        let response = await PDX.resource(['/api/v2/pokemon/'])
        order ?
          this.list = _.orderBy(response[0].results, ['name'], [this.direction ? 'asc' : 'desc']) :
          this.list = response[0].results
      },
      async getPokemon (pokemon) {
        let response = await PDX.getPokemonByName(pokemon.name)
        let {front_default} = response.sprites
        pokemon.thumb = front_default ? front_default : DefaultThumb

        this.selected = {
          thumb: pokemon.thumb,
          abilities: response.abilities,
          types: response.types,
          height: response.height,
          weight: response.weight,
          name: response.name,
        }
        this.abilityDetails = false
      },
      async getAbilityDetails (ability) {
        let {name, effect_entries} = await PDX.getAbilityByName(ability)
        this.abilityDetails = {
          name: name,
          effects: effect_entries
        }

      },
      async getType (type) {
        let {pokemon} = await PDX.getTypeByName(type)
        this.list = pokemon.map(({pokemon}) => {
          return pokemon
        })
      }
    },
    async mounted () {
      await this.listPokemon()

      let {results} = await PDX.getTypesList()
      this.types = results
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pokedex {
        max-width: 1300px;
        margin-left: 300px;
    }

    .relative {
        position: relative;
    }

    .absolute {
        position: absolute;
        top: 0;
        left: 0;
    }

    .actButton {
        width: 100%;
        max-width: 80px;
        height: 80px;
        top: 530px;
        left: 40%;
        font-size: 18px;
        background: #222de0;
        color: white;
        border-radius: 50%;
        border: 2px solid #070707;
        outline: none;
        box-shadow: 4px 4px 7px rgba(0, 0, 0, .6);
    }

    .btnSearch {
        top: 620px;
        background: #da000c;
    }

    .listComp, .detailComp {
        max-width: 400px;
        height: auto;
    }

    .filterComp {
        max-width: 280px;
        height: auto;
        top: 520px;
        left: 24.5%;
    }

    .filterCompList {
        width: 249px;
        max-height: 120px;
        height: 120px;
        overflow: auto;
        left: 25.1%;
        top: 60.6%;
        max-width: 249px;
        border-radius: 25px;
    }

    .filterCompList li {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-family: monospace;
        font-size: 20px;
        line-height: 0.8;
        border-color: #005d00;
        border-width: 2px;
        margin-left: 18px;
    }

    .filterCompInput {
        top: 77%;
        left: 25.1%;
        width: 250px;
        max-width: 250px;
        border-top: 3px solid #005d00;
    }

    .filterCompInput input {
        background-color: transparent;
        border-bottom: 2px solid #005d00;
        width: 206px;
        margin-left: 0;
        height: 40px;
        color: #005d00 !important;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }

    .detailComp {
        top: 163px;
        left: 47%;
    }

    .listComp {
        top: 163px;
        left: 24.5%;
    }

    .display-container {
        left: 48.9%;
        padding: 5px;
        top: 200px;
        width: 100%;
        max-width: 311px;
        max-height: 472px;
        min-height: 472px;
        height: 472px;
        overflow: auto;
        border-radius: 13px;
        margin: 0;
    }

    .display-container li {
        text-transform: capitalize;
        font-size: 27px;
        line-height: 2;
    }

    .ico-preview {
        max-width: 70px;
        padding: 12px;
        height: auto;
        display: inline-block;
        margin-right: 15px;
        margin-left: 10px;
        transition: padding .2s ease-in-out;
    }

    .details-container {
        top: 199px;
        left: 26.4%;
        width: 100%;
        max-width: 321px;
        border-radius: 15px;
        max-height: 263px;
        min-height: 263px;
        height: 263px;
        overflow: hidden;
    }

    .details-container h1 {
        margin-top: 25px;
        font-weight: 700;
        line-height: 1;
        text-align: left;
        text-transform: capitalize;
        margin-left: -42px;
    }

    .details-container h1 {
        margin-top: 25px;
        font-weight: 700;
        line-height: 1;
        text-align: left;
        text-transform: capitalize;
        margin-left: -42px;
    }

    .details-container .poke-data {
        position: relative;
        left: -42px;
        text-align: left;
    }

    .uk-text-lead {
        margin: 0;
    }

    button {
        border-radius: 25px;
        margin-top: 5px;
        line-height: 1.2;
        padding: 7px;
    }

    .uk-button-danger {
        background-color: #da000c;
    }

    .details-container .scrollable {
        max-height: 90px;
        height: 90px;
        overflow: auto;
    }

    .uk-card {
        max-height: 200px;
        height: 200px;
        overflow: hidden;
        margin-left: -1px;
        max-width: 321px;
    }

    .uk-card-title {
        text-transform: capitalize;
    }

    .thumbLoaded {
        padding: 0;
    }

    ::-webkit-input-placeholder {
        color: #005d00 !important;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }

    ::-moz-placeholder {
        color: #005d00 !important;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }

    :-ms-input-placeholder { /* IE 10+ */
        color: #005d00 !important;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
        color: #005d00 !important;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }
</style>
