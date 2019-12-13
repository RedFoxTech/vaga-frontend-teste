<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      :currentPage="currentPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 49,
      perPage: 1,
      currentPage: 1,
      url: ""
    };
  },
  props: {
    listarPokemons: Function
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    }
  },

  watch: {
    currentPage: function(val) {
      this.url =
        "https://pokeapi.co/api/v2/pokemon/?offset=" +
        (val - 1) * 20 +
        "limit=20";
      this.listarPokemons("numero", this.url);
    }
  }
};
</script>

