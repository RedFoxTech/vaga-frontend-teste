<template>
  <div id="app">
    <nav-bar />
    <div class="container">
      <div class="row">
        <filters />
      </div>
      <div class="row">
        <card />
        <card />
        <card />
        <card />
        <card />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'
import Card from './components/Card'
import Filters from './components/Filters'
export default {
  name: 'app',
  components: {
    NavBar,
    Card,
    Filters
  }
}
</script>

<style lang="scss">
</style>
