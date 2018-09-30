import Vue from 'vue'
import Router from 'vue-router'
import PokedexClosed from '@/components/PokedexClosed'
import PokedexList from '@/components/PokedexList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokedexClosed',
      component: PokedexClosed
    },
    {
      path: '/list',
      name: 'ListPokemons',
      component: PokedexList
    },
    {
      path: '/:id',
      name: 'ShowPokemons',
      component: PokedexList
    }
  ]
})
