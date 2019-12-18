<template>
  <div class="base-spinner" v-if="visible">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      visible: true
    }
  },
  created (){
    this.$root.$on('Spinner::show', () => {
      window.scrollTo(0,0)
      this.visible = true
    })
    this.$root.$on('Spinner::hide', () => {
      window.scrollTo(0,0)
      this.visible = false
    })
  }
}
</script>

<style lang="scss" scoped>
.base-spinner {
  top:0;
  bottom:0;
  right:0;
  left:0;
  z-index: 1000000;
  position: absolute;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
</style>