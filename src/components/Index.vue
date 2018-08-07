<template>
    <div>
        <header>
            <Jumbotrom v-bind:title="title" v-bind:description="description"></Jumbotrom>
        </header>
        <main role="main">
            <Navbar v-bind:title="title"></Navbar>
            <MainContent></MainContent>
        </main>
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    import Jumbotrom from "./Jumbotron";
    import MainContent from "./MainContent";
    export default {
        name: 'Index',
        components: {MainContent, Jumbotrom, Navbar},
        data() {
            return {
                title: 'Pokémon Challenge',
                description: 'This is a web application built with Vue, using the Pokeapi.co API.'
            }
        }
    }
</script>

<style scoped>
    main{
        padding-bottom: 5em;
    }
</style>
