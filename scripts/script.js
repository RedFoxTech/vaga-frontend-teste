Vue.component('pokemon-card', {
    props: ['pokemon'],
    filters: {
    },
    methods: {
    },
    template: `
    <div class="card card-pokemon">
        <div class="card-body">
            <h5 class="card-title">Nome: {{pokemon.name}}</h5>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"><img/>
            <p class="card-text">A ser incluído em breve</p>
            <a href="#" class="btn btn-primary">Em breve</a>
        </div>
    </div>
    `
  });

  Vue.component('search-section', {
    props: ['search'],
    filters: {
    },
    methods: {
    },
    template: `
    <div class="col-12 col-md-10 col-lg-8">
        <form class="card card-sm" id="formulario">
            <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                    <i class="fas fa-search h4 text-body"></i>
                </div>
                <!--final da col-->
                <div class="col">
                    <input class="form-control form-control-lg form-control-borderless" id="busca-pokemon" type="search" placeholder="Digite o nome do Pokemon">
                </div>
                <!--final da col-->
                <div class="col-auto">
                    <button class="btn btn-lg btn-success" type="submit">Search</button>
                </div>
                <!--final da col-->
            </div>
        </form>
    </div>
    <!--final da col-->
    `
  });



//Inicia o Vue
var app = new Vue({
    el: "#app",
    data: {
        pokemon: [
            {
                name: "bubasauro",
                ability: "thunder"
            },
            {
                name: "bubasauro",
                ability: "thunder"
            },
            {
                name: "bubasauro",
                ability: "thunder"
            },
            {
                name: "bubasauro",
                ability: "thunder"
            },
            {
                name: "bubasauro",
                ability: "thunder"
            },
            {
                name: "bubasauro",
                ability: "thunder"
            }
        ],
        mounted(){
            fetch('https://pokeapi.co/api/v2/pokemon/1/')
            .then(response => response.json())
            .then((data)  =>{
                this.abilities = data;
            })
        }
    },
    template:`
    <div class="container">
        <br/>
        <div class="row justify-content-center">
            <search-section/>
        </div>
        <br>
        <div class="row">
            <pokemon-card v-for="item in pokemon" v-bind:pokemon="item"/>
        </div>
    </div>
    `
})

