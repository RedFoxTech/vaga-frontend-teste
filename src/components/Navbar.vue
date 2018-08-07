<template>
    <nav class="navbar navbar-dark fixed-top bg-pink">
        <a class="navbar-brand" href="#">
            <strong v-html="title"></strong>
        </a>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .bg-pink{
        background-color: #fc3268;
        border-bottom: 0.2rem solid #3d436d;
    }
</style>
