<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components:{
    card: Card,
    modal: Modal
  },
  data(){
      return {
        pokemon:[],
        pokemonList:[]
      }
  },
  mounted () {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response =>{ 
      
    }); 
    // this.pokmeon.map(
    //   i =>{console.log(i)} 
    // );
     
    // axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => this.img = response.data.sprites.front_shiny); 
   
   
    },
    methods: {
      clickModal: function(pokemon){
        var n = pokemon.name
        var tam = n.length
        var nomeI = n.substring(0,1) + n.substring(1,tam).toLowerCase()
        this.nome = nomeI      
      }
    },
    computed: {
      pokemonFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(),'i');
          return this.pokemonList.filter(pok => exp.test(pok.name));
          
        }else{
          return this.pokemonList;
        }
      }
    },
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
</style>
