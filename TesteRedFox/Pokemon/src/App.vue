<template>
  <div class="body">

      <header class="menu">
        <section class="logo">
          <img class="logo-png" src="./imagem/pokLogo.png" alt="">
        </section>
      </header>
      <main>
        <div class="header-conteudo">
          <h2 class="titulo">PESQUISAR POKEMON</h2>  
          <input type="search" class="txt-pesquisa" placeholder="Buscar pokemon">
        </div>  
        <div class="overflow-auto">
            <ul class="lista-card">
                <li  v-for="p of pokemon">
                    <div @click="clickModal(p)">
                        <card v-b-modal.modal-1  :nome="p.name">
                          <img :src="p.imagem" class="img" alt="">
                        </card>
                      </div>
                </li>
              </ul>
              <b-modal id="modal-1" title="oi">
                  <p class="my-4"></p>
              </b-modal>
        
          </div>
            
        </main>
        </div>
</template>
<script>
import axios from 'axios';
import Card from './components/shared/card/Card.vue'

export default{
  components:{
    card: Card,
  },
  data () {
    return {
      pokemon:[],
    //  nome:[this.pokemon.name],
      img:[]
     
    }
  },
  mounted () {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response =>{ 
      var pok = response.data.results
      var pokemonA = []
      pok.map((p)=>{
        var objeto = {
          'name':p.name
        }
        axios.get(p.url).then(res => {
          objeto.imagem = res.data.sprites.front_shiny;
          objeto.habilidade = res.data.abilities
        });
        pokemonA.push(objeto)
      });
      this.pokemon = pokemonA
    }); 
    // this.pokmeon.map(
    //   i =>{console.log(i)} 

    // );
     
    // axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => this.img = response.data.sprites.front_shiny); 
   
   
    },
    methods: {
      clickModal: function(p){
        console.log(p)
      }
    },
    computed: {
       
    },
  
}
</script>
<style>
  
  .header-conteudo{
    width: 100%;
    height: 100px;
    padding:  0 0 0 20px;
    box-sizing: border-box;

  }
  .lista-card{
    list-style: none;
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width:100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  } 
  main{
    padding: 1px 0 1px 20px;
    width: 100%;
    height: 700px;
  }
  .lista-card li{
    margin: 10px;
  }
  .txt-pesquisa{
    height: 25px;
    width: 700px;
    box-shadow: 0px 0px 2px;
    padding: 5px;
    margin-bottom: 20px;
  }
  
  .titulo{
    font-weight: 600;
    text-align: center;
    
  }
  .menu{
    margin: 0px;
    height: 90px;
    width: 100%;
    display: flex;
    background-color: #A3161D;
    margin-bottom: 20px;
  }
  .logo{
    margin: 0 auto;
    height: 100%;
    width: 22%;
    text-align: center;
  }
  .logo-png{
    height: 90%;
    width: 90%;
  }
  /* reset */
  body, input {
  font-family: 'Century Gothic';
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
  
</style>