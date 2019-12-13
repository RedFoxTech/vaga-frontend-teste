<template>
  <div id="app">
    <navbar :title="titulo" @pesquisou="pesquisar"></navbar>
    <b-container fluid align-v="center">
      <b-row align-h="start" class="ml-4">
        <order title="Ordem Padrão" ordem="numero" :req="req" :listarPokemons="listarPokemons"></order>
        <order
          title="Ordem Alfabética"
          ordem="alfabetica"
          :req="req"
          :listarPokemons="listarPokemons"
        ></order>
      </b-row>
      <b-row align-h="start" class="ml-4 optionSelect">
        <b-form-select :options="options" v-model="type" class="mb-2 mt-2 w-100" />
      </b-row>
      <b-list-group horizontal class="ml-5 flex-wrap">
        <b-list-group-item
          class="mb-2"
          v-for="(type, index) in selectType"
          :key="index"
          @click="selectType.splice(index, 1)"
        >
          <type-select :type="type"></type-select>
        </b-list-group-item>
      </b-list-group>

      <modal-detalhes :pokemonModal="pokemonModal"></modal-detalhes>

      <b-container fluid>
        <b-row>
          <b-card-group>
            <b-col
              class="p-0 mr-3"
              v-for="(pokemon, index) in pokemons"
              :key="`A-${index}`"
              @click="infoPokemon(index)"
            >
              <card-pokemon
                :name="pokemon.name"
                :img="imgs[index]"
                :selectType="selectType"
                :types="types"
                :height="heights[index]"
                :weight="weights[index]"
                :index="index"
                :pesquisa="pesquisa"
                class="p-0"
              />
            </b-col>
          </b-card-group>
        </b-row>
      </b-container>
      <b-row align-h="center">
        <pagination :listarPokemons="listarPokemons"></pagination>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import CardPokemon from "./components/CardPokemon";
import ModalDetalhes from "./components/ModalDetalhes";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Order from "./components/Order";
import TypeSelect from "./components/TypeSelect";

export default {
  name: "app",
  components: {
    CardPokemon,
    ModalDetalhes,
    Navbar,
    Pagination,
    Order,
    TypeSelect
  },
  data() {
    return {
      titulo: "Desafio Pokémon",
      pokemonModal: [],
      pokemons: [],
      weights: [],
      heights: [],
      habitat: [],
      types: [],
      abilityName: [],
      abilityDescription: [],
      aux: [],
      aux2: [],
      qtdHab: [],
      count: [],
      imgs: [],
      texto: [""],
      pesquisa: "",
      req: "https://pokeapi.co/api/v2/pokemon/?limit=20",
      pages: [1, 2, 3],
      selectType: [],
      type: null,
      options: {
        null: "Select Type",
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
    };
  },

  methods: {
    listarPokemons(ordem, url) {
      window.scrollTo(0, 5);
      this.req = url;
      axios.get(this.req).then(response => {
        this.pokemons = response.data.results;

        //ordem alfabetica
        if (ordem == "alfabetica") {
          this.pokemons.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });
        }

        this.pokemons.forEach((pok, index) => {
          axios.get(pok.url).then(resp => {
            this.weights.splice(index, 1, resp.data.weight);
            this.heights.splice(index, 1, resp.data.height);
            this.types.splice(index, 1, resp.data.types);
            this.imgs.splice(index, 1, resp.data.sprites.front_default);

            //pegar habilidade
            this.qtdHab.splice(index, 1, resp.data.abilities.length);
            this.count.splice(index, 1, 0);
            if (this.qtdHab[index] === 1) {
              this.aux.splice(index, 1, [""]);
              this.aux2.splice(index, 1, [""]);
            } else if (this.qtdHab[index] === 2) {
              this.aux.splice(index, 1, ["", ""]);
              this.aux2.splice(index, 1, ["", ""]);
            } else if (this.qtdHab[index] === 3) {
              this.aux.splice(index, 1, ["", "", ""]);
              this.aux2.splice(index, 1, ["", "", ""]);
            }

            axios.get(resp.data.species.url).then(species => {
              this.habitat.splice(index, 1, species.data.habitat.name);
            });

            resp.data.abilities.forEach((hab, i) => {
              axios.get(hab.ability.url).then(ability => {
                //pegar o nome da habilidade
                this.count.splice(index, 1, this.count[index] + 1);
                this.aux[index][i] = ability.data.name;

                //pegar a descricao da habilidade
                this.aux2[index][i] = ability.data.effect_entries[0].effect;

                if (this.count[index] === this.qtdHab[index]) {
                  this.abilityName.splice(index, 1, this.aux[index]);
                  this.abilityDescription.splice(index, 1, this.aux2[index]);
                  this.count.splice(index, 1, 0);
                }
              });
            });
          });
        });
      });
    },
    infoPokemon(idPokemon) {
      this.pokemonModal = [];
      this.pokemonModal.push(this.imgs[idPokemon]);
      this.pokemonModal.push(this.pokemons[idPokemon].name);
      this.pokemonModal.push(this.heights[idPokemon]);
      this.pokemonModal.push(this.weights[idPokemon]);
      this.pokemonModal.push(this.habitat[idPokemon]);
      this.pokemonModal.push(this.types[idPokemon]);
      this.pokemonModal.push(this.abilityName[idPokemon]);
      this.pokemonModal.push(this.abilityDescription[idPokemon]);
    },
    pesquisar(pesquisa) {
      this.texto.splice(0, 1, pesquisa);
      this.pesquisa = this.texto[0];
    }
  },

  watch: {
    type: function(val) {
      if(this.selectType.indexOf(val) < 0 )
        this.selectType.push(val);
    }
  },

  mounted() {
    this.heights.length = 20;
    this.habitat.length = 20;
    this.weights.length = 20;
    this.imgs.length = 20;
    this.types.length = 20;
    this.abilityName.length = 20;
    this.qtdHab.length = 20;
    this.count.length = 20;
    this.aux.length = 20;
    this.aux2.length = 20;
    this.abilityDescription.length = 20;
    this.listarPokemons("numero", this.req);
  }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
  flex-direction: column;
}

.row {
  justify-content: space-around;
  padding: 0px 30px;
}

.optionSelect {
  width: 200px;
}
</style>
