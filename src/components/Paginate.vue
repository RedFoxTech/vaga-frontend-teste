<template>
  <div>
    <button
      @click="getAllPokemons(paginate.prev)"
      :disabled="paginate.prev == null"
      class="btn btn-small">
      Voltar
    </button>
    <button
      @click="getAllPokemons(paginate.next)"
      :disabled="paginate.next == null"
      class="btn btn-small">
      Avançar
    </button>
  </div>
</template>

<script>
export default {
  name: 'paginate',
  props: {
    getAllPokemons: Function,
    paginate: Object
  }
}
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
}
</style>