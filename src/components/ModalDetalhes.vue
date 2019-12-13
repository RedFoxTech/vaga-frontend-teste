<template>
  <b-modal id="modalPokemon" :title="pokemonModal[1]" ok-only>
    <b-row align-h="center">
      <b-img :src="pokemonModal[0]" alt="Representação do Pokémon" />
    </b-row>
    <hr />
    <b-row align-h="start">
      <b-img
        src="https://image.flaticon.com/icons/svg/714/714561.svg"
        alt="ícone de régua"
        class="mr-2"
        width="24px"
      />
      Height: {{pokemonModal[2]}} dm
      <b-img
        src="https://image.flaticon.com/icons/svg/1694/1694106.svg"
        alt="ícone de balança"
        class="ml-4 mr-2"
        width="24px"
      />
      Weight: {{pokemonModal[3]}} hg
    </b-row>
    <b-row class="mt-2" align-h="start">Habitat: {{pokemonModal[4]}}</b-row>
    <b-row
      v-for="(type, index) in pokemonModal[5]"
      :key="`A-${index}`"
      align-h="start"
    >Type: {{type.type.name}}</b-row>
    <b-row v-for="(ability, index) in pokemonModal[6]" :key="`B-${index}`" align-h="start">
      Ability: {{ability}}
      <br />

      {{pokemonModal[7][index]}}
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: "ModalDetalhes",
  props: {
    pokemonModal: Array
  }
};
</script>
<style>
#modalPokemon {
  font-family: 'Poppins', sans-serif;
  line-height: 2rem
}

</style>