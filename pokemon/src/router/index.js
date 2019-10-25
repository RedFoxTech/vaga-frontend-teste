import Vue from 'vue'
import Router from 'vue-router'
import PokemonCard from '@/components/PokemonCard'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokemonCard',
      component: PokemonCard
    }
  ]
})
