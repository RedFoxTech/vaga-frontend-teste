<template>
  <div class ="container    ">
    <h1>{{titulo}}</h1>
    <input type ="search"  class ="filtro" v-on:input="filtro=$event.target.value" placeholder="pesquisa por parte nome do pokemon">

    <ul class="list-group">
      <li class="list-group-item" v-for="pokemon of pokemonComFiltro" v-text="pokemon.name"></li>
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
      //imgPoke:[],
      filtro:'',
    }
  },
  computed:{
        pokemonComFiltro(){
          if(this.filtro){
              let exp = new RegExp(this.filtro.trim(), 'i')
              return this.pokemons.results.filter(pokemon => exp.test(pokemon.name))
            } else{
                return this.pokemons.results
             }  
        }       
  },
  

 created(){
    this.fetchPokemons();    
    //this.imgPoke();
  },
  // computed:{
    //    imagemPokemon:function(){
      //      for(po in pokemons) {
        //            return this.po.split('').reverse().join('')
          //      }
        //}
   // },
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
      },
      /*imgPoke(url = 'http://pokeapi.co/api/v2/pokemon/1'){
        axios.get(url)
         // .then(({ data }) => this.imgPoke = data); [
          //]
     .then(function (data){
        console.log(data);
         })
          .catch(function (error) {
               console.log(error);
           });
          }*/

    }   


  } 
</script>

<style lang="scss">
.filtro{
    width: 100%;
}
</style>
