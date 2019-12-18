<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="" class="brand-logo center">
          <img src="../assets/img/pokeball.png" width="50" height="50">
          Pokemon
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped lang="scss">
nav {
  background: linear-gradient(135deg,#4ab583 0,#266378 80%) !important;

  .brand-logo {
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  img {
    height: 50px;
    width: 50px;
  }
}
</style>
