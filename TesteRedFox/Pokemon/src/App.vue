<template>
  <div class="body">

      <header class="menu">
        <section class="logo" >
          <img class="logo-png" src="./imagem/pokLogo.png" alt="">
        </section>
      </header>
      <main>
        <div class="head-conteudo">
          <input type="search" class="txt-pesquisa" placeholder="Buscar pokemon" @input="filtro =$event.target.value">
        </div>  
          
            <ul class="lista-card">
                <li  v-for="pokemon of pokemonFiltro">
                    <div @click="clickModal(pokemon)">
                        <card v-b-modal.modal-1  :nome="pokemon.name" :url="pokemon.imagem">
                          
                        </card>
                      </div>
                </li>
            </ul>
              <div>
                  <b-modal ref="my-modal" hide-footer id="modal-1" :title="nome">
                    <img :src="foto" alt="" class="img-modal"><br>
                    <b class="tit-modal">HABILIDADE</b>
                    <p class="cont-modal" v-for="h of habilidade">{{h}}</p>        
                    <b class="tit-modal">TIPO</b>
                    <p class="cont-modal" v-for="t of tipo">{{t}}</p>        
                    <b-button class="mt-3" variant="outline-danger"  @click="hideModal" >Fechar</b-button>
                  </b-modal>
              </div>
              <section class="footer-bt">
                  <b-button class="btNP" @click="previous"><</b-button>
                  <b-button  class="btNP" @click="next">></b-button>
              </section>
              
        </main>
        </div>
</template>
<script>
   
import axios from 'axios';
import Card from './components/shared/card/Card.vue'
var cardCli =0;
export default{
  components:{
    card: Card,
  },
  data () {
    return {
      pokemonAll:[],
      pokemonList:[],
      name:'',
      nome:'',
      habilidade:[],
      tipo:[],
      foto:'',
      filtro:'',
      url:'',
      urlNext:'',
      urlPrev:''
     
    }
  },
  mounted () {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response =>{
      var next = response.data.next
      while(next!=null){
        axios.get(next).then(res =>{
          next = res.data.next;
          this.pokemonAll = res.data.results
          console.log(res.data.results) 
        })
      }
      var pok = response.data.results
      this.urlNext = response.data.next
      this.urlPrev = response.data.previous
      var pokemonA = []
      pok.map((p)=>{
        var objeto = {
          'name':p.name.toUpperCase()
        }
        axios.get(p.url).then(res => {
          objeto.imagem = res.data.sprites.front_shiny;
          objeto.habilidade = res.data.abilities
          objeto.tipo = res.data.types
        });
        pokemonA.push(objeto)
      });
      this.pokemonList = pokemonA
      
    });
    
    },
    methods: {
      clickModal: function(pokemon){
        var n = pokemon.name
        var tam = n.length
        var nomeI = n.substring(0,1) + n.substring(1,tam).toLowerCase()
        this.nome = nomeI
        this.foto = pokemon.imagem 
          pokemon.habilidade.forEach(element => {
              this.habilidade.push(element.ability.name)
            
          });
          pokemon.tipo.forEach(element => {
            this.tipo.push(element.type.name)
          });
      
      },
      hideModal() {
        this.$refs['my-modal'].hide();
        this.habilidade =[]
        this.tipo=[]
      },
      next(){
        axios.get(this.urlNext).then(response =>{ 
          var pok = response.data.results
          this.urlNext = response.data.next
          this.urlPrev = response.data.previous
          var pokemonA = []
          
          pok.map((p)=>{
            var objeto = {
              'name':p.name.toUpperCase()
            }
            axios.get(p.url).then(res => {
              objeto.imagem = res.data.sprites.front_shiny;
              objeto.habilidade = res.data.abilities
              objeto.tipo = res.data.types
            });
            pokemonA.push(objeto)
          });
          this.pokemonList = pokemonA
          
        });
      },
      previous(){
        axios.get(this.urlPrev).then(response =>{ 
          var pok = response.data.results
          this.urlNext = response.data.next
          this.urlPrev = response.data.previous
          var pokemonA = []
          
          pok.map((p)=>{
            var objeto = {
              'name':p.name.toUpperCase()
            }
            axios.get(p.url).then(res => {
              objeto.imagem = res.data.sprites.front_shiny;
              objeto.habilidade = res.data.abilities
              objeto.tipo = res.data.types
            });
            pokemonA.push(objeto)
          });
          this.pokemonList = pokemonA
          
        });

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
  #modal-1{
    text-align: center;
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
  .cont-modal{
    background-color: #A3161D;
    border-radius: 10px;
    margin: 5px 150px;
    color:white
  }

  .lista-card{
    list-style: none;
    margin: 0 40px 0 0;
    padding: 0 auto;
    height: 1200px;
    width:100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  } 
  main{
    width: 100%;
    height: 1370px;
    margin: 0;
    /* background-color: rgba(0,0,0,0.82); */
    
  }
  .head-conteudo{
    width: 100%;
    text-align: center
  }
  body{
    background-image: url('./imagem/fundo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .lista-card li{
    margin: 10px 20px;;
  }
  .txt-pesquisa{
    height: 34px;
    background-color: rgba(0,0,0,0.3);
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    width: 600px;
    box-shadow: 0px 0px 2px;
    padding: 5px; 
    margin-bottom: 20px;
    
  }
  .menu{
    margin: 20px auto;
    height: 100px;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    
  }
  .logo{
    margin: 0 auto;
    height: 80%;
    width: 20%;
    text-align: center;
  }
  .logo-png{
    height: 100%;
    width: 100%;
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