<template>
  <div>
    <div class="card">
      <div class="card-content">
        <span class="card-title">Filtros</span>
        <div class="row">
          <div class="input-field col s12 m3 l3">
            <select multiple>
              
            </select>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'filters',
  mounted () {
    this.chips()
  },
  methods: {
    chips () {
      var elems = document.querySelector('select');
      var instances = M.FormSelect.init(elems);
      console.log(instances)
    }
  }
}
</script>

<style>

</style>