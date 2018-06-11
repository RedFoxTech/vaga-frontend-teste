<template>

  <section class ="container">
        <b-row class="justify-content-md-center">
            <b-col class="filtro" cols="7">
              <input type ="search"  class ="form-control" v-on:input="filtro=$event.target.value"  placeholder="Pesquisa por parte do nome do pokemon"></input>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-card bg-variant="light"  class="text-center" v-for="pokemon of pokemonComFiltro" :header="pokemon.name">
                <img-pokemon :nome="pokemon.name">
                </img-pokemon>
                <info-pokemon :nome="pokemon.name">
                </info-pokemon>
            </b-card>   
        </b-row>
      <b-row class="justify-content-md-center botao">
        <b-col cols="6">
          <button class="btn btn-primary botaoTrocaPA" v-if="pokemons.previous" @click="previous">Anterior</button>
        </b-col>
        <b-col cols="6">
          <button class="btn btn-primary botaoTrocaP" v-if="pokemons.next" @click="next">Proximo</button>
        </b-col>
      </b-row>
    
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
      fetchPokemons(url = 'http://pokeapi.co/api/v2/pokemon/') {
        
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
    margin-bottom: 3%;
}
.botao{
    margin-top: 4%;
    margin-bottom: 3%;
}
.botaoTrocaP{
  background-color: #263238;
  border-color: #263238;
}
.botaoTrocaPA{
  background-color: #263238;
  border-color: #263238;
  float: right;
}


</style>
