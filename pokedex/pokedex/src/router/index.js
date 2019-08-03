import Vue from 'vue'
import Router from 'vue-router'
import MonsterList from '@/components/MonsterList'
import Monster from '@/components/Monster'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MonsterList',
      component: MonsterList
    },
    {
      path: '/pokemon/:id',
      name: 'Monster',
      component: Monster
    }
  ],
  mode: 'history'
})
