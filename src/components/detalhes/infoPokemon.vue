<template>
    <modal>
        <div>
        <b-button variant="outline-success" @click="showModal">
            Habilidades
        </b-button>
        <b-modal ref="myModalRef" hide-footer title="Habilidades" >
            <div class="d-block text-center">
                <li class="list-group-item" v-for="info of infos.abilities" v-text="info.ability.name"></li>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Fechar</b-btn>
        </b-modal>
    </div>
    </modal>
</template>

<script>

import axios from 'axios'

export default {
    props:['nome'],
    data () {
        return {
             modalShow: false,
            infos:{},
         }
     },
    created(){
        this.infoPokemon();    
     },
    methods:{
        infoPokemon(url = 'http://pokeapi.co/api/v2/pokemon/'+this.nome){
            axios.get(url)
                .then(({ data }) => this.infos = data); [
                 ]
        },
        showModal () {
         this.$refs.myModalRef.show()
         },
        hideModal () {
         this.$refs.myModalRef.hide()
         }
    }
}
 


</script>

<style lang="scss">
</style>
