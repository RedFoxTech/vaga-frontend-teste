<template>
    <div class="card mb-4 shadow-sm">
        <div class="card-body">
            <h2 class="card-text text-center">
                <img v-bind:src="pokemon.sprites.front_default" alt="">
            </h2>
            <h4 class="card-title text-center text-capitalize" v-html="pokemon.name"></h4>
            <h6 class="card-subtitle mb-2 text-muted text-center">
                <span class="badge badge-secondary" v-for="type in pokemon.itemTypes" v-html="type"></span>
            </h6>
            <br>
            <button type="button" id="show-modal" @click="showModal = true" class="btn btn-block btn-outline-primary">More Info</button>
            <Modal v-bind:pokemon="pokemon" v-if="showModal" @close="showModal = false"></Modal>
        </div>
    </div>
</template>

<script>
    import Modal from "./Modal";
    export default {
        name: 'Card',
        components: {Modal},
        props: {
            pokemon: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                showModal: false,
            }
        }
    }
</script>

<style scoped>
    .card:hover {
        background-color: #f9f6fc;
    }
</style>

