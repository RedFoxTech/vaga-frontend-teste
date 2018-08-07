<template>
    <transition name="modal">
        <div class="modal modal-mask">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-capitalize" v-html="pokemon.id + ' - ' + pokemon.name"></h5>
                    </div>
                    <div class="modal-body m-0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 text-center mb-5">
                                    <img v-bind:src="pokemon.sprites.front_default" alt="">
                                    <br />
                                    <span class="badge badge-secondary" v-for="type in pokemon.types" v-html="type.type.name"></span>
                                </div>
                                <div class="col-md-8">
                                    <div class="mb-1" v-for="stat in pokemon.stats" v-bind:class="stat.base_stat > 100 ? 'over' : ''">
                                        <span class="text-capitalize" v-html="stat.stat.name"></span>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" v-bind:style="'width:' + stat.base_stat + '%'">{{ stat.base_stat }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" @click="$emit('close')">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            pokemon: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }
    .modal-header {
        background-color: #f9f6fc;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    .modal-body {
        margin: 20px 0;
    }
    .modal-default-button {
        float: right;
    }
    .modal-enter-active {
        transition: all .3s ease;
    }
    .modal-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .modal-enter, .modal-leave-to {
        transform: translateY(10px);
        opacity: 0;
    }
    .progress-bar{
        background-color: #4f4f74;
    }
    .over .progress .progress-bar{
        background-color: #fc3268;
    }
    .over span{
        color: #fc3268;
    }
</style>
