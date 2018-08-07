<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
    .badge-secondary {
        margin: 0 0.1em;
        background-color: #4f4f74;
    }
    .btn-outline-primary {
        color: #4f4f74;
        border-color: #4f4f74;
    }
    .btn-outline-primary:hover,
    .btn-outline-primary:not(:disabled):not(.disabled):active,
    .btn-outline-primary:not(:disabled):not(.disabled).active,
    .show > .btn-outline-primary.dropdown-toggle,
    .btn-outline-primary:focus,
    .btn-outline-primary.focus{
        color: #fff;
        border-color: #4f4f74;
        background-color: #4f4f74;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .btn-outline-danger {
        color: #fc3268;
        border-color: #fc3268;
    }
    .btn-outline-danger:hover,
    .btn-outline-danger:not(:disabled):not(.disabled):active,
    .btn-outline-danger:not(:disabled):not(.disabled).active,
    .show > .btn-outline-danger.dropdown-toggle,
    .btn-outline-danger:focus,
    .btn-outline-danger.focus{
        color: #fff;
        border-color: #fc3268;
        background-color: #fc3268;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>


