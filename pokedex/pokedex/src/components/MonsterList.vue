<template>
  <main class="main-content">
    <section v-if="errors && errors.length" class="errors-section">
        <ul>
          <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
    </section>  
    <section v-if="loading" class="pokedex-loader">Loading...</section>
    <section v-if="!loading" class="pokemon-list-section">
      <div class="panel">
        <div class="panel-heading">{{ msg }}</div>
        <div class="panel-body">
          <ul v-if="processedPokedmon && processedPokedmon.length">
            <li v-for="(monster, id) in processedPokedmon">
              <router-link :to="'/pokemon/' + monster.id + '/'">
                <strong>{{ monster.id }}. {{monster.formattedName}}</strong>
              </router-link>
            </li>
          </ul>

        </div>  
      </div>
    </section>
  </main>
</template>

<script>

import axios from 'axios'

export default {
  name: 'MonsterList',
  data () {
    return {
      loading: true,
      totalResults: 0,
      pokemon: [],
      errors: [],
      msg: 'List of Pokemon'
    }
  },
  mounted () {
    console.log('MonsterList mounted')
  },
  created () {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response)
      this.totalResults = response.data.count
      this.pokemon = response.data.results
      this.loading = false;
    })
    .catch(e => {
      this.errors.push(e)
      this.loading = false;
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
  computed: {
    processedPokedmon(){
      return this.pokemon.map(pokemon => {
        let monster = {
          name: pokemon.name
        };
        let monsterUrlPathArray = pokemon['url'].split( '/' );
        // uppercase first letter of pokemon name. they come over lowercased
        monster['formattedName'] = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        // extract ID from URL for use in the router-link URL
        monster['id'] = monsterUrlPathArray[monsterUrlPathArray.length - 2];
        return monster;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
