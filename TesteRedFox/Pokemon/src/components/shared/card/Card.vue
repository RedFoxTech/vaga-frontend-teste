<template>
    <div class="card">
            <div class="div-img">
                <img :src="url" alt="" class="img"> 
         </div>    
                <h1 class="nome">{{nome}}</h1>
               
    </div>
</template>
<script>
export default {
    props:['nome','url']  
}
</script>
<style>
    .card{
        border-radius: 10px;
        height: 280px;
        width: 210px;
        box-sizing: border-box;
        font-family: 'Century Gothic';
        box-shadow: 0px 0px 2px black;
        background-color: rgba(0,0,0,0.4);
         color:white;
    }
  
    .card:hover{
        box-shadow: 0px 0px  50px black;
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