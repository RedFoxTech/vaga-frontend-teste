<template>
  <b-button
    variant="outline-primary"
    class="mr-2 mt-2"
    @click="listarPokemons(ordem, req)"
  >{{title}}</b-button>
</template>

<script>
export default {
  props: {
    title: String,
    ordem: String,
    req: String,
    listarPokemons: Function
  }
};
</script>
<style >
.btn {
  color: #084d6e !important;
  border-color: #084d6e !important;
  background-color: #fff!important;
}
.btn:hover {
  background-color: #084d6e !important;
  color: white !important;
}
</style>
