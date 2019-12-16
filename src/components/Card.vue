<template>
  <div>
    <div class="col s12 m3">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Arbok</span>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png">
          </div>
        <div class="card-action">
          <div class="btn-floating">
            <img src="../assets/img/pokeball.png"> 
          </div>             
          Detalhes    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style lang="scss" scoped>
.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-action {
  .btn-floating {
    background: transparent;
    img {
      width: 100%;
    }
  }
}
</style>