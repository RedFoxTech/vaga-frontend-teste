<template>
    <div class="pokemon-card">
      <div class="div-img">
        <img :src="imageUrl" alt="[Pokemon Picture]" class="img"> 
      </div>    
      <h1 class="nome text-center">{{name}}</h1>         
    </div>
</template>

<script>
/* eslint-disable */
/* eslint no-use-before-define: 0 */  // --> OFF
export default {
  name: 'Pokemon',
  props: ['name', 'imageUrl']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pokemon-card{
        border-radius: 10px;
        height: 280px;
        width: 210px;
        font-family: 'Century Gothic';
        box-shadow: 0px 0px 1px rgb(30, 70, 180);
        /* background-color: #555; */
        border: 2px solid rgb(30, 70, 180);
        color:rgb(30, 70, 180);
    }
  
    .pokemon-card:hover{
        box-shadow: 0px 0px  10px black;
        cursor: pointer;
            
    } 
    
    .nome{
        margin: 0;
        margin-left: 10px;
        height: 20%;
        width: 100%;
        text-align: left;
        line-height: 50px;
        font-weight: 600;
        font-size: 20px;
    }
    .div-img{
        height: 200px;
        width: 100%;
    }
    .img{
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 20px;
    }
</style>
