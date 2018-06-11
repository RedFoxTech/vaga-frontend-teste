<template>

   <!-- <li class="list-group-item" v-for="info of infos.abilities" v-text="info.ability.name"></li>-->  
    <b-col cols="12">
        <img  :src="infos.sprites.front_default" alt="Pokemon" height="100" width="100">
     </b-col>
  
</template>

<script>

import axios from 'axios'

export default {
 props:['nome'],
 data(){
    return{
      infos:{},
     
    }
 },
 created(){
    this.imgPokemon();    
    //this.imgPoke();
  },
 methods: {
       imgPokemon(url = 'http://pokeapi.co/api/v2/pokemon/'+this.nome){
        axios.get(url)
         .then(({ data }) => this.infos = data); [
          ]
      /* .then(function (data){
        console.log(data);
         })
          .catch(function (error) {
               console.log(error);
           });*/
      },
      next(){
        this.imgPokemon(this.infos.next);
      },
      previous(){
        this.imgPokemon(this.infos.previous);
      },
  }
}
</script>

<style lang="scss">
</style>