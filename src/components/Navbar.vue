<template>
  <div>
    <b-navbar class="nav" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        Pokémon
        <b-img
          src="https://image.flaticon.com/icons/png/512/188/188918.png"
          class="ml-2"
          alt="Ícone de pokebola"
          width="25px"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 search" placeholder="Search" v-model="texto"></b-form-input>
            <b-img
              src="https://pngimage.net/wp-content/uploads/2018/06/lupa-blanca-png.png"
              width="20px"
              alt="ícone de lupa"
            />
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: ""
    };
  },
  props: {
    title: String
  },
  watch: {
    texto: function(texto) {
      this.$emit("pesquisou", texto);
    }
  }
};
</script>
<style>
.nav {
  background-color: #084d6e;
}
.search {
  border-radius: 20px !important;
}
</style>