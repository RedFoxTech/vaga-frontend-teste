<template>
    <div class="card">
        
        <div class="div-img">
            <slot></slot>
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
        border-radius: 5px;
        height: 280px;
        width: 210px;
        box-sizing: border-box;
        padding: 1%;
        font-family: 'Century Gothic';
        box-shadow: 0px 0px 2px black;
    }
    .card:hover{
        box-shadow: 0px 0px 4px;
        cursor: pointer;

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
    }
</style>