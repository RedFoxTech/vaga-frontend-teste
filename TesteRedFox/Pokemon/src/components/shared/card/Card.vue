<template>
    <div class="card">
        <p class="nome">{{nome}}</p>
        <div class="div-img">
            <slot></slot>
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
        border-radius: 5px;
        height: 280px;
        width: 250px;
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
        border:1px solid black;
        height: 20%;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-weight: 600;
        font-size: 25px;
    }
    .div-img{
        margin-top: 12px;
        height: 200px;
        width: 200px;
        border: 1px solid black;
    }
    .img{
        height: 100%;
        width: 100%;
    }
</style>