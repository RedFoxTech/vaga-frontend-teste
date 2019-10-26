<template>
  <div id="app">
    <header class="container flex mb-5 text-center">
      <img id="logo" src="./assets/logo.png">
    </header>
    <div id="searchInput" class="input-group input-group-md mb-5">
      <input type="text" class="form-control" placeholder="Please insert a pokemon name ..." v-model="filterName">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="pokemonFilter">Pick up</button>
        <button class="btn btn-outline-secondary" type="button" v-on:click="getPokemons">Refresh</button>
      </div>
    </div>
    <ul class="container list-unstyled p-1 d-flex flex-wrap justify-content-center card-pokemon">
      <li  v-for="pokemon in pokemonItems" v-bind:key="pokemon">
        <div @click="openModal(pokemon)">
          <Pokemon v-b-modal.modal-pokemon  :name="pokemon.name" :imageUrl="pokemon.pokPicture" />
        </div>
      </li>
    </ul>
    <div class="footer-bt">
      <b-button class="btNP" @click="previous"><</b-button>
      <b-button  class="btNP" @click="next" >></b-button>
    </div>
    <b-modal ref="my-modal" hide-footer id="modal-pokemon" :title="titleName">
      <img :src="imageModal" class="img-modal" alt="[Pokemon Picture]"><br>
      <p class="h2">Skills of {{ titleName }}</p>
      <p class="list-modal" v-for="h in pokSkills" v-bind:key="h">{{h.charAt(0).toUpperCase() + h.slice(1)}}</p>        
      <p class="h2">Types</p>
      <p class="list-modal" v-for="t in pokTypes" v-bind:key="t">{{t.charAt(0).toUpperCase() + t.slice(1)}}</p>        
      <b-button class="mt-3 btn-danger"  @click="hideModal" >Fechar</b-button>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint no-use-before-define: 0 */  // --> OFF
import Pokemon from './components/Pokemon.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Pokemon
  },
  data () {
    return {
      pokemonItems:[],
      name:'',
      titleName:'',
      pokSkills:[],
      pokTypes:[],
      imageModal:'',
      filterName:'',
      urlNext:'',
      urlPrev:''
     
    }
  },
  mounted () {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response =>{
        const pokemonData = response.data.results
        this.urlNext = response.data.next
        this.urlPrev = response.data.previous
        pokemonData.map((p)=>{
          let pokObj = {
            'name': p.name.charAt(0).toUpperCase() + p.name.slice(1)
          }
          axios.get(p.url).then(res => {
            pokObj.pokPicture = res.data.sprites.front_shiny;
            pokObj.pokSkills = res.data.abilities
            pokObj.pokTypes = res.data.types
          }).catch(e => {
            console.log(e)
            // console.error(e)
          });;
          this.pokemonItems.push(pokObj)
        });
      });
    },
    methods: {
      getPokemons(){
        this.filterName= ""
        axios.get('https://pokeapi.co/api/v2/pokemon/')
          .then(response =>{
            const pokemonData = response.data.results
            this.urlNext = response.data.next
            this.urlPrev = response.data.previous
            pokemonData.map((p)=>{
              let pokObj = {
                'name': p.name.charAt(0).toUpperCase() + p.name.slice(1)
              }
              axios.get(p.url).then(res => {
                pokObj.pokPicture = res.data.sprites.front_shiny;
                pokObj.pokSkills = res.data.abilities
                pokObj.pokTypes = res.data.types
              }).catch(e => {
                console.log(e)
                // console.error(e)
              });;
              this.pokemonItems.push(pokObj)
            });
          });
      },
      openModal: function(pok){
        if(pok == "error"){
          this.titleName = "Tente novamente com o Nome Completo do Pokemon"
          this.imageModal= "https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png"
          this.pokSkills= []
          this.pokTypes= []
        } else {
          let name= pok.name
          let lenName= name.length
          const pokName = name.substring(0,1) + name.substring(1, lenName).toLowerCase()
          this.titleName = pokName
          this.imageModal = pok.pokPicture 
          pok.pokSkills.forEach(element => {
            this.pokSkills.push(element.ability.name)
          });
          pok.pokTypes.forEach(element => {
            this.pokTypes.push(element.type.name)
          });
        }
      },
      hideModal() {
        this.$refs['my-modal'].hide();
        this.pokSkills =[]
        this.pokTypes=[]
      },
      next(){
        axios.get(this.urlNext)
          .then(response =>{ 
            const pok = response.data.results
            this.urlNext = response.data.next
            this.urlPrev = response.data.previous          
            pok.map((p)=>{
              var pokObj = {
                'name': p.name.charAt(0).toUpperCase() + p.name.slice(1)
              }
              axios.get(p.url).then(res => {
                pokObj.pokPicture = res.data.sprites.front_shiny;
                pokObj.pokSkills = res.data.abilities
                pokObj.pokTypes = res.data.types
              }).catch(e => {
                console.log(e)
                // console.error(e)
              });
              this.pokemonItems.push(pokObj)
            });
          });
      },
      previous(){
        axios.get(this.urlPrev)
          .then(response =>{ 
            const pok = response.data.results
            this.urlNext = response.data.next
            this.urlPrev = response.data.previous          
            pok.map((p)=>{
              let pokObj = {
                'name': p.name.charAt(0).toUpperCase() + p.name.slice(1)
              }
              axios.get(p.url).then(res => {
                pokObj.pokPicture = res.data.sprites.front_shiny;
                pokObj.pokSkills = res.data.abilities
                pokObj.pokTypes = res.data.types
                }).catch(e => {
                  console.log(e)
                  // console.error(e)
                });
              this.pokemonItems.push(pokObj)
            });          
          });
      },
      pokemonFilter(){
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.filterName.toLowerCase())
          .then(response =>{
            const pokemonData = response.data 
            console.log(pokemonData)
            let pokObj = {
              'name': pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
            }
            pokObj.pokPicture = pokemonData.sprites.front_shiny;
            pokObj.pokSkills = pokemonData.abilities
            pokObj.pokTypes = pokemonData.types
            this.pokemonItems= []
            this.pokemonItems.push(pokObj)
          }).catch(e => {
            console.log(e)
            // console.error(e)
          });
      }
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #logo {
    max-height: 150px;
  }
  .btNP{
    width: 50px;
    height: 50px;
    border-radius: 5px
  }
  .footer-bt{
    height: 70px;
    width: 100%;
    text-align: center;
    background-color: rgba(255,255,255,0);
    
  }
  .mt-3{
    float: right;
  }
  .img-modal{
   width: 120px;
   height: 120px;
  }
  .tit-modal{
    font-size: 20px;
  }
  .list-modal{
    background-color: rgb(90, 21, 25);
    border-radius: 10px;
    margin: 5px 150px;
    color:white;
    transition: background-color .3s, transform .3s;
  }
  .list-modal:hover {
    transform: scale(1.05);
    background-color: #C7BD0A;
    cursor: pointer;
  }
  #searchInput {
    width: 60%;
    margin: 0 20%;
  }
  #searchInput:focus {
    outline: 0;
  }
  .card-pokemon li{
    margin-bottom: 20px;
  }
  .card-pokemon div {
    margin-left: 10px;
  }
  #modal-pokemon {
    text-align: center;
  }
</style>
