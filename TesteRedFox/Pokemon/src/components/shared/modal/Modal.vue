<template>
    <div>
        <b-modal id="modal-1" :title="nomePokemon">
            <slot class="my-4"></slot>
        </b-modal>
    </div>
</template>
<script>
export default {
    props:['nomePokemon'],
}
</script>