<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="" class="brand-logo center">
          <img src="../assets/img/pokeball.png" width="50" height="50">
          Pokemon
        </a>
        <a @click="sideNav()" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Sass</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><a href="#">Sass</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    sideNav () {
      var elems = document.querySelector('.sidenav');
      var instances = M.Sidenav.init(elems);
      instances.open()
    }
  }
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
