<template>
  <div>
    <h1>{{titulo}}</h1>
    
     <ul class="list-group">
      <li class="list-group-item" v-for="pokemon in pokemons.results" v-text="pokemon.name"></li>
        <!-- <li v-for="pokemon in pokemons.results">
            <img :src="pokemon.sprites" alt="lala" height="42" width="42">
          </li>
          -->
    </ul>
      <button class="btn btn-primary" v-if="pokemons.previous" @click="previous">Previous</button>
       <button class="btn btn-primary" v-if="pokemons.next" @click="next">Next</button>
    
  </div>
  
</template>

<script>

import axios from 'axios'
export default {
  data(){
    return{
      titulo:'pokedexx',
      pokemons:{},
    }
  },
 
 created(){
    this.fetchPokemons();
    
   
  },
  methods: {
      fetchPokemons(url = 'http://pokeapi.co/api/v2/pokemon') {
        axios.get(url)
          .then(({ data }) => this.pokemons = data); [
          ]
      /* .then(function (data){
        console.log(data);
         })
          .catch(function (error) {
               console.log(error);
           });*/
      },
      next() {
        this.fetchPokemons(this.pokemons.next);
      },
      previous(){
        this.fetchPokemons(this.pokemons.previous);
      }
    }   
  } 
</script>

<style lang="scss">
</style>
