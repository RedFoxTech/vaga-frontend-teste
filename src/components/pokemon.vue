<template>

  <section class ="container ">
        <b-row>
            <b-col cols="6">
            <input type ="search"  class ="form-control" v-on:input="filtro=$event.target.value"  placeholder="pesquisa por parte nome do pokemon"></input>
              <!-- <b-input
                  type="search" class ="filtro"
               v-on:input="filtro=$event.target.value" placeholder="pesquisa por parte nome do pokemon"></b-input>-->
             </b-col>
        </b-row>
<b-row class="justify-content-md-center">
        <b-card bg-variant="light"  class="text-center" v-for="pokemon of pokemonComFiltro" :header="pokemon.name">
            <img-pokemon :nome="pokemon.name">
               <!-- <li v-text="pokemon.name"></li>-->
            </img-pokemon>
            <info-pokemon :nome="pokemon.name">
            </info-pokemon>
    </b-card>   
  </b-row>
   </div>
        <!-- <li v-for="pokemon in pokemons.results">
            <img :src="pokemon.sprites" alt="lala" height="42" width="42"></li>  -->
  

     <button class="btn btn-primary" v-if="pokemons.previous" @click="previous">Previous</button>
      <button class="btn btn-primary" v-if="pokemons.next" @click="next">Next</button>
      
    

  </section>

</template>

<script>

import axios from 'axios'
import imgPokemon from './detalhes/imgPokemon.vue'
import infoPokemon from './detalhes/infoPokemon.vue'
export default {
    components:{
        'info-pokemon':infoPokemon,
        'img-pokemon':imgPokemon
    },
  data(){
    return{
      pokemons:{},
      //imgPoke:[],
      filtro:'',
    }
  },
  computed:{
        pokemonComFiltro(){
          if(this.filtro){
              let exp = new RegExp(this.filtro.trim(),'i')
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
.titulo{
    width: 100%;
}
</style>
