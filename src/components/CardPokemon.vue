<template>
  <b-card
    bg-variant="light"
    :title="name"
    class="p-0"
    v-if="name.indexOf(pesquisa) > -1 && compareType(index)"
    v-b-modal.modalPokemon
  >
    <b-img :src="img" alt="Representação do Pokémon" width="100px" />
    <div class="divInfo rounded mt-4">
      <b-row class="p-1">
        <b-col class="infoCard col-3 p-1 pl-3 border-right">
          <b-img
            src="https://image.flaticon.com/icons/svg/1694/1694106.svg"
            width="24px"
            class="mr-2 ml-2 mb-2"
          />
          <b>{{weight/10}}kg</b>
        </b-col>
        <b-col class="infoCard col-5 p-1 border-right">
          <p class="mb-3">Type</p>
          <b v-for="(type, i) in types[index]" :key="i">
            {{type.type.name}}
            <b v-if="i < (types[index].length - 1)">/</b>
          </b>
        </b-col>
        <b-col class="infoCard col-3 p-1 pr-3">
          <b-img
            src="https://image.flaticon.com/icons/svg/714/714561.svg"
            width="24px"
            class="mr-2 ml-2 mb-2"
          />
          <b>{{height/10}}m</b>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    name: String,
    height: Number,
    weight: Number,
    img: String,
    pesquisa: String,
    selectType: Array,
    types: Array,
    index: Number
  },
  methods: {
    compareType(x) {
      if (this.selectType.length == 0) {
        return true;
      }

      for (let i = 0; i < this.selectType.length; i++) {
        for (let j = 0; j < this.types[x].length; j++) {
          if (this.selectType[i] === this.types[x][j].type.name) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
</script>
<style scoped>
.infoCard {
  font-size: 0.75rem;
}

.card {
  width: 16rem;
  height: 16rem;
  margin: 20px 15px;
  overflow: hidden;
}

.card:hover {
  border: 1px solid #084d6e;
}

.card-title {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  color: #084d6e;
}

.card-body {
  padding: 1.25rem 0.5rem;
}

.card-img-overlay {
  padding: 1.25rem 0.5rem;
}
</style>