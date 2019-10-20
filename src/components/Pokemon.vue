<template>
    <div class="resources">
        <!--
        <ul class="list-group">
            <li class="list-group-item" v-for="pokemon in api.results" v-text="pokemon.name"></li>
        </ul>

        <button class="btn btn-primary" v-if="api.previous" @click="previous">Anterior</button>
        <button class="btn btn-primary" v-if="api.next" @click="next">Próximo</button>
        -->
        
        <table class="list table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col" id="title">NAME</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in api.results">
                    <td scope="row" id="name" v-text="pokemon.name" @click="about(pokemon.name)"></td>
                </tr>
                <button class="btn btn-primary" v-if="api.previous" @click="previous">Anterior</button>
                <button class="btn btn-primary" v-if="api.next" @click="next">Próximo</button>
            </tbody>
        </table>
        
        <table class="pokemon table table-striped table-dark" v-if="pokemonDescription">
            <tr>
                <td colspan="3">
                    <img :src="getSprite(pokemonDescription.id)">
                </td>
            </tr>
            <tr>
                <td>    
                    <strong>ID</strong>
                    <p v-text="pokemonDescription.id"></p>
                </td>
                <td>
                    <strong>NAME</strong>
                    <p id="name" v-text="pokemonDescription.name"></p>
                </td>
                <td>
                    <strong>TYPE</strong>
                    <p id="name" v-text="pokemonDescription.types[0].type.name"></p>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>HEIGHT</strong>
                    <p v-text="pokemonDescription.height"></p>
                </td>
                <td>
                    <strong>WEIGHT</strong>
                    <p v-text="pokemonDescription.weight"></p>
                </td>
                <td>
                    <strong>EXPERIENCE</strong>
                    <p v-text="pokemonDescription.base_experience"></p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        data() {
            return {
                api: {},
                pokemonDescription: null
            }
        },

        created() {
            this.searchPokemons();
        },

        methods: {
            searchPokemons(url="https://pokeapi.co/api/v2/pokemon") {
                axios.get(url).then(({data}) => this.api = data);
            },

            next() {
                this.searchPokemons(this.api.next);
            },

            previous() {
                this.searchPokemons(this.api.previous);
            },

            about(name) {
                var url = "https://pokeapi.co/api/v2/pokemon/" + name;
                return axios.get(url).then(({data}) => this.pokemonDescription = data);
            },

            getSprite(id) {
                return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
            }
        }
    }
</script>

<style>
    .resources {
        width: 100%;
        float: right;
    }

    .list {
        width: 25%;
        height: 80vh;
        float: left;
        background-color: rgba(87, 76, 79, 0.5);
    }

    .pokemon {
        width: 65%;
        float: right;
        background-color: rgba(87, 76, 79, 0.5);
    }

    td {
        width: 33%;
        cursor: pointer;
    }

    #title {
        font-weight: bold;
        font-size: 18px;
        color: white;
    }

    #name {
        color: white;
        text-transform: uppercase;
    }

    button {
        margin: 6% 3%;
    }
</style>
