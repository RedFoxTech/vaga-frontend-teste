<template>
    <div>
        <div class="container-fluid py-5">
            <div class="container" v-if="!isLoading">
                <div class="row">
                    <div class="col-md-12 p-1">

                        <div class="form-group p-2 col-md-9 float-left">
                            <label class="form-check-label" for="search">Filter by name:</label>
                            <input type="search" id="search" v-model="search" class="form-control" placeholder="Search...">
                        </div>
                        <div class="form-group p-2 col-md-3 float-left">
                            <label class="form-check-label" for="sort">Filter by name:</label>
                            <select id="sort" v-model="sort" class="form-control">
                                <option value="id">Id</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-sm btn-outline-danger btn-label text-capitalize"
                                    v-bind:class="selectedType === type.name ? 'active' : ''"
                                    v-for="type in types.results" v-html="type.name" @click="changeType(type.name)">
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">

            <div class="container" v-if="isLoading">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img class="loading" src="../assets/img/loading.gif" alt="loading">
                        <h4 v-if="total > 0">Indexing Pokémons... ({{ current }}/{{ total }})</h4>
                        <h4 v-else>Connecting to API...</h4>
                    </div>
                </div>
            </div>

            <div class="container" v-else>
                <div class="row">
                    <div class="col-md-3" v-for="pokemon in filtered.slice(x, y)">
                        <Card v-bind:pokemon="pokemon"></Card>
                    </div>
                </div>
                <div class="row">
                     <div class="col-md-12">
                         <div class="text-left float-left mt-2">
                             <span v-if="filtered.length > 0">
                                 Showing {{ (x+1) }} to {{ (y > filtered.length ? filtered.length : y) }} of {{ filtered.length }} pokémons
                             </span>
                            <span v-else>No pokémons found.</span>
                         </div>
                         <div class="text-right">
                             <button v-if="x > 0" class="btn btn-outline-danger form-group" type="button" @click="previousPage">« Previous</button>
                             <button v-if="y < filtered.length" class="btn btn-outline-danger form-group" type="button" @click="nextPage">Next »</button>
                         </div>
                     </div>
                 </div>
            </div>

            <div v-if="errors.length" class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-danger" role="alert">
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import {PaginationControl, PaginationPage} from 'vue-smart-pagination'

    export default {
        name: 'MainContent',
        components: {Card, PaginationPage, PaginationControl},
        data() {
            return {
                isLoading: false,
                pokemons: [],
                filtered: [],
                sort: "id",
                total: 0,
                current: 0,
                types: {},
                selectedType: null,
                search: '',
                errors: [],
                x: 0,
                y: 12
            }
        },
        created: function () {
            this.fetchTypes();
            this.fetchPokemons();
        },
        methods: {
            changeType(type) {
                this.selectedType = this.selectedType === type ? null : type;
            },
            fetchTypes() {
                let uri = 'https://pokeapi.co/api/v2/type/';
                this.axios.get(uri).then((response) => {
                    this.types = response.data;
                    localStorage.setItem('storedTypes', JSON.stringify(this.types));
                }).catch(e => {
                    this.errors.push('There was an error requesting the Pokémon types.');
                    this.isLoading = false;
                });
            },
            fetchPokemons() {
                this.isLoading = true;
                this.errors = [];
                let url = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
                this.axios.get(url).then((response) => {
                    //this.total = response.data.count;
                    //this.total = 100;
                    for (let pokemon of response.data.results) {
                        this.fetchPokemon(pokemon);
                    }
                }).catch(e => {
                    this.errors.push('There was an error in the Pokémon request.');
                    this.isLoading = false;
                })
            },
            filterPokemons() {
                this.filtered = this.pokemons.filter(v => v.name.toLowerCase().includes(this.search.toLowerCase()));
                if (this.selectedType)
                    this.filtered = this.filtered.filter(v => v.itemTypes.includes(this.selectedType));
                this.sortBy("id");
            },
            fetchPokemon(pokemon) {
                this.axios.get(pokemon.url).then((res) => {
                    let item = res.data;
                    item.itemTypes = [];
                    for (let type of item.types) {
                        item.itemTypes.push(type.type.name);
                    }
                    this.pokemons.push(item);
                    this.current++;
                    if (this.current === this.total){
                        this.sortBy("id");
                        this.isLoading = false;
                    }
                });
            },
            sortBy(val) {
                return this.filtered.sort((t1, t2) => (val === "name" ? t1.name < t2.name : t1.id < t2.id) ? -1 : 1);
            },
            previousPage(){
                if(this.x > 0){
                    this.x = this.x - 12;
                    this.y = this.y - 12;
                }
            },
            nextPage(){
                if(this.y < this.filtered.length){
                    this.x = this.x + 12;
                    this.y = this.y + 12;
                }
            }
        },
        watch: {
            search: function () {
                this.filterPokemons();
            },
            selectedType: function () {
                this.filterPokemons();
            },
            sort: function(val){
                this.sortBy(val);
            },
            pokemons: function () {
                this.filtered = this.pokemons;
            }
        }
    }
</script>

<style scoped>
    .loading {
        display: inline-block;
        width: 100px;
    }

    .btn-label {
        padding: 0.20rem 0.3rem;
        margin: 0.2em;
    }
</style>
