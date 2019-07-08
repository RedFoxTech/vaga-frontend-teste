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
          <input type="search" class="txt-pesquisa" placeholder="Buscar pokemon" @input="filtro =$event.target.value">
        </div>  
        
            <ul class="lista-card">
                <li  v-for="pokemon of pokemonFiltro">
                    <div @click="clickModal(pokemon)">
                        <card v-b-modal.modal-1  :nome="pokemon.name">
                          <img :src="pokemon.imagem" class="img" alt="">
                        </card>
                      </div>
                </li>
              </ul>
              <modal :nomePokemon="nome">
                
              </modal>
        
        
            
        </main>
        </div>
</template>
<script>
import axios from 'axios';
import Card from './components/shared/card/Card.vue'
import Modal from './components/shared/modal/Modal.vue'
export default{
  components:{
    card: Card,
    modal: Modal
  },
  data () {
    return {
      pokemonList:[],
      name:'',
      nome:'',
      foto:'',
      filtro:''
     
    }
  },
  mounted () {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response =>{ 
      var pok = response.data.results
      var pokemonA = []
      pok.map((p)=>{
        var objeto = {
          'name':p.name.toUpperCase()
        }
        axios.get(p.url).then(res => {
          objeto.imagem = res.data.sprites.front_shiny;
          objeto.habilidade = res.data.abilities
        });
        pokemonA.push(objeto)
      });
      this.pokemonList = pokemonA
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
  
  .header-conteudo{
    width: 100%;
    height: 100px;
    padding:  0 0 0 20px;
    box-sizing: border-box;

  }
  .lista-card{
    list-style: none;
    margin: 0 40px 0 0;
    padding: 0 auto;
    height: 100%;
    width:100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border:1px solid black;
  } 
  main{
    width: 100%;
    height: 700px;
    margin: 0;
  }
  .lista-card li{
    margin: 10px 20px;;
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
    height: 100px;
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