<template>
  <div>
    <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{namePoke}}</span>
          <div class="poke_id">#{{pokeStatus.id}}</div>
          <img :src="pokeStatus.sprites.front_default">
        </div>
        <div class="card-action">
          <modal 
            :namePoke="namePoke"
            :abilities="abilities"
            :sprites="pokeStatus.sprites"
            :poke_stats="status"
            :poke_types="pokeStatus.types"
            :base_experience="pokeStatus.base_experience"
            :height="pokeStatus.height"
            :poke_id="pokeStatus.id"
            :weight="pokeStatus.weight"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../services/api'
import Modal from './Modal'
export default {
  name: 'card',
  components: {
    Modal
  },
  props: {
    namePoke: String
  },
  data () {
    return {
      pokeStatus: [],
      status: {},
      abilities: []
    }
  },
  mounted () {
    this.getPokemonStatus(this.namePoke)
    console.clear()
  },
  methods: {
    async getPokemonStatus (param) {
      await Api.pokemonStatus(param).then(res => {
       this.pokeStatus = res.data
       this.getAbility(res.data.abilities)
       this.getStatus(res.data.stats)
      }).catch(err => {
        console.log(err)
      }) 
    },
    async getAbility (param) {
      let index = 0;
      for (const item of param) {
        await Api.ability(item.ability.name).then(res => {
          this.abilities.push(res.data.effect_entries)
          this.abilities[index].push(res.data.name)
        }).catch(err => {
          console.log(err)
        })
        index++
      }
    },
    getStatus (param) {
      let index = 0;
      for (const item of param) {
        this.status[item.stat.name] = item.base_stat
        index++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-title {
    text-transform: uppercase;
  }
}
.poke_id {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>