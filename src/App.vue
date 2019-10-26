<template>
    <div id="app">
        <vk-navbar>
            <vk-navbar-nav>
                <vk-navbar-nav-item title="POKEDEX" active></vk-navbar-nav-item>
            </vk-navbar-nav>
        </vk-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html,body{
        height: 100vh;
        overflow: hidden;
        min-height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-image: url("./assets/bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: 100%;
    }
    .uk-navbar{
        background-color: #da000c!important;
    }
    .uk-navbar-nav > li.uk-active > a{
        color: #fff;
    }
    .pokedex {
        max-width: 450px;
    }
    ::-webkit-scrollbar {
        width: 20px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #da000c;
        border-radius: 150px;
        opacity: .3;
        height: 20px!important;
        min-height: 20px!important;
        max-height: 20px!important;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #93000c;
    }

</style>
