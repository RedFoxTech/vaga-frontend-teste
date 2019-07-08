<template>
    <div class="card">
        <div class="comp">
            <div class="div-img">
                <slot></slot>
                <img :src="url" alt="" class="img"> 
                <h1 class="nome">{{nome}}</h1>
                 
            </div>
         </div>
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
        /* background-color: rgba(255,255,255,0.3); */
        background-color: rgba(0,0,0,0.4);
         color:white;
    }
     /* .card:hover .comp{
        background-color: rgba(255,255,255,0) 
    } */
    .card:hover{
        box-shadow: 0px 0px  50px black;
        cursor: pointer;
        /* color: white; */
            
    } 
    
    .nome{
        margin: 0;
        margin-left: 10px;
        /* border:1px solid black; */
        height: 20%;
        width: 100%;
        text-align: left;
        line-height: 50px;
        font-weight: 600;
        font-size: 20px;
    }
    .div-img{
        margin-top: 12px;
        height: 200px;
        width: 100%;
        /* border-bottom: 1px solid black; */
    }
    .img{
        height: 100%;
        width: 100%;
        margin: 0;
        border-radius: 20px;
    }
    .comp{
        /* background-color: rgba(0,0,0,0.82); */
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    
</style>