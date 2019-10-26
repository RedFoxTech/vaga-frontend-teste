<template>
    <div>
        <b-modal id="modal-1" v-bind:title="pokemonName">
            <slot class="my-4"></slot>
        </b-modal>
    </div>
</template>
<script>
export default {
    props:['pokemonName']
}
</script> 